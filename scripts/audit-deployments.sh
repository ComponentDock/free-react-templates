#!/usr/bin/env bash
# Deployment audit for the template fleet.
#
# Every app in apps/<name> is published at https://<name>.free.componentdock.com.
# Five classes of problem are detected:
#
#   live           healthy: HTTP 200 with a certificate valid for the host.
#   insecure       published, but the host serves a TLS certificate that does not
#                  cover it (Surge's shared `CN=*.surge.sh` cert), so browsers show
#                  a certificate warning for the https:// link.
#   missing        the Surge project was never published (or its deploy run was
#                  cancelled/failed) — the origin answers with Surge's own 404 page.
#   edge-live      published and healthy at the Surge origin, but the branded domain
#                  never answered (no HTTP at all): the edge has no certificate for
#                  that SNI and kills the handshake. A deploy cannot fix this.
#   edge-insecure  reachable only at the origin, and only with `-k` (shared cert):
#                  needs a per-domain re-publish once the edge serves TLS again.
#
# The edge-* classes exist because a TLS outage in front of the fleet makes every
# host look `missing`, so the repair wave re-publishes thousands of healthy sites
# instead of the handful that are actually gone. Probing the origin separates the
# two.
#
# Used by .github/workflows/deploy-surge.yml (audit + repair job) and runnable
# locally. stdout is TSV — `<problem>\t<app>` per line (problems only, `live`
# apps are counted but not printed) — plus a summary on stderr.
#
# Usage:
#   bash scripts/audit-deployments.sh [--shard I --total N | --apps "a b c"]
#                                    [--limit K] [--jobs J] [--quiet]
#                                    [--no-origin] [--fail-on-missing]
#
#   --shard I --total N  audit only the apps where (index % N == I) — lets the
#                        CI matrix split the fleet (default: --shard 0 --total 1)
#   --apps "a b c"       probe exactly these apps (used to verify a deploy)
#   --limit K            print at most K lines per problem class (0 = no limit)
#   --jobs J             parallel probes (default 16)
#   --quiet              suppress the stderr summary
#   --no-origin          skip the origin fallback probes (edge classes are then
#                        reported as `missing`, as before this flag existed)
#   --fail-on-missing    exit 1 when any host is `missing`; edge-* classes are
#                        reported but never fatal
#
# Origin lookup: `SURGE_ORIGIN_IP` overrides the IP; otherwise the first IPv4 of
# `na-west1.surge.sh` is resolved once per run.
#
# Exit status is 0 unless the arguments are invalid or --fail-on-missing found an
# unpublished site: a broken deployment is data for the caller, not a failure of
# the audit itself.
set -uo pipefail

SHARD=0
TOTAL=1
LIMIT=0
JOBS=16
QUIET=0
ORIGIN_FALLBACK=1
APPS_ONLY=""
FAIL_ON_MISSING=0

while [ $# -gt 0 ]; do
  case "$1" in
    --shard) SHARD="${2:?--shard needs a value}"; shift 2 ;;
    --total) TOTAL="${2:?--total needs a value}"; shift 2 ;;
    --limit) LIMIT="${2:?--limit needs a value}"; shift 2 ;;
    --jobs)  JOBS="${2:?--jobs needs a value}"; shift 2 ;;
    --quiet) QUIET=1; shift ;;
    --no-origin) ORIGIN_FALLBACK=0; shift ;;
    --apps) APPS_ONLY="${2:?--apps needs a value}"; shift 2 ;;
    --fail-on-missing) FAIL_ON_MISSING=1; shift ;;
    -h|--help) sed -n '2,49p' "$0"; exit 0 ;;
    *) echo "audit-deployments: unknown argument: $1" >&2; exit 2 ;;
  esac
done

for v in "$SHARD" "$TOTAL" "$LIMIT" "$JOBS"; do
  case "$v" in ''|*[!0-9]*) echo "audit-deployments: numeric options expected" >&2; exit 2 ;; esac
done
[ "$TOTAL" -ge 1 ] || { echo "audit-deployments: --total must be >= 1" >&2; exit 2; }
[ "$SHARD" -lt "$TOTAL" ] || { echo "audit-deployments: --shard must be smaller than --total" >&2; exit 2; }
[ "$JOBS" -ge 1 ] || { echo "audit-deployments: --jobs must be >= 1" >&2; exit 2; }

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 1
export LC_ALL=C

ZONE="${SURGE_ZONE:-free.componentdock.com}"
ORIGIN_IP=""
if [ "$ORIGIN_FALLBACK" -eq 1 ]; then
  ORIGIN_IP="${SURGE_ORIGIN_IP:-}"
  if [ -z "$ORIGIN_IP" ]; then
    ORIGIN_IP="$(getent ahostsv4 na-west1.surge.sh 2>/dev/null | awk 'NR==1{print $1}')"
    [ -n "$ORIGIN_IP" ] || ORIGIN_IP="$(dig +short na-west1.surge.sh A 2>/dev/null | head -1)"
  fi
  [ -n "$ORIGIN_IP" ] || echo "audit-deployments: origin IP unavailable — edge classes will report as missing" >&2
fi
export ZONE ORIGIN_IP

# One probe per app: strict TLS first (detects the shared-cert problem), then an
# insecure retry to tell "not published" apart from "published, bad certificate".
# When neither answers, ask the origin directly: a branded edge that has no
# certificate for the SNI (Cloudflare second-level wildcard) kills the handshake
# before any HTTP response exists, which is indistinguishable from "not published"
# unless you probe the origin. Chromium/curl keep the SNI, so Surge still selects
# the right project.
classify() {
  local name="$1" host code
  host="https://${name}.${ZONE}"
  code="$(curl -sS -L -o /dev/null -w '%{http_code}' --max-time 25 \
    -H 'Cache-Control: no-cache' "$host" 2>/dev/null)" || code="000"
  if [ "$code" = "200" ]; then
    printf 'live\t%s\n' "$name"
    return
  fi
  code="$(curl -ksS -L -o /dev/null -w '%{http_code}' --max-time 25 \
    -H 'Cache-Control: no-cache' "$host" 2>/dev/null)" || code="000"
  if [ "$code" = "200" ]; then
    printf 'insecure\t%s\n' "$name"
    return
  fi
  if [ -n "$ORIGIN_IP" ]; then
    code="$(curl -sS --resolve "${name}.${ZONE}:443:${ORIGIN_IP}" -L -o /dev/null \
      -w '%{http_code}' --max-time 25 -H 'Cache-Control: no-cache' "$host" 2>/dev/null)" || code="000"
    if [ "$code" = "200" ]; then
      printf 'edge-live\t%s\n' "$name"
      return
    fi
    code="$(curl -ksS --resolve "${name}.${ZONE}:443:${ORIGIN_IP}" -L -o /dev/null \
      -w '%{http_code}' --max-time 25 -H 'Cache-Control: no-cache' "$host" 2>/dev/null)" || code="000"
    if [ "$code" = "200" ]; then
      printf 'edge-insecure\t%s\n' "$name"
      return
    fi
  fi
  printf 'missing\t%s\n' "$name"
}
export -f classify

APPS=()
i=0
for dir in apps/*/; do
  name="$(basename "$dir")"
  [ -f "apps/${name}/package.json" ] || continue
  if [ $((i % TOTAL)) -eq "$SHARD" ]; then APPS+=("$name"); fi
  i=$((i + 1))
done

# --apps probes an explicit list (the deploy workflow verifies exactly the apps it
# just published) instead of sharding the whole fleet.
if [ -n "$APPS_ONLY" ]; then
  read -r -a APPS <<< "$APPS_ONLY"
fi

[ "$QUIET" -eq 1 ] || echo "audit-deployments: probing ${#APPS[@]} app(s) (shard $SHARD/$TOTAL, jobs $JOBS)" >&2

RESULTS="$(mktemp)"
MISSING_OUT="$(mktemp)"
INSECURE_OUT="$(mktemp)"
EDGE_LIVE_OUT="$(mktemp)"
EDGE_INSECURE_OUT="$(mktemp)"
SUMMARY="$(mktemp)"
if [ "${#APPS[@]}" -gt 0 ]; then
  printf '%s\n' "${APPS[@]}" \
    | xargs -P "$JOBS" -I{} bash -c 'classify "$@"' _ {} \
    | sort > "$RESULTS"
fi

awk -F'\t' -v limit="$LIMIT" -v mo="$MISSING_OUT" -v so="$INSECURE_OUT" \
  -v el="$EDGE_LIVE_OUT" -v es="$EDGE_INSECURE_OUT" -v sum="$SUMMARY" '
  $1 == "live" { live++ }
  $1 == "missing" { m++; if (limit == 0 || m <= limit) print $2 > mo }
  $1 == "insecure" { s++; if (limit == 0 || s <= limit) print $2 > so }
  $1 == "edge-live" { e++; if (limit == 0 || e <= limit) print $2 > el }
  $1 == "edge-insecure" { x++; if (limit == 0 || x <= limit) print $2 > es }
  END {
    printf "live\t%d\nmissing\t%d\ninsecure\t%d\nedge-live\t%d\nedge-insecure\t%d\n", \
      live + 0, m + 0, s + 0, e + 0, x + 0 > sum
  }
' "$RESULTS"

while IFS=$'\t' read -r problem count; do
  case "$problem" in
    missing) while IFS= read -r app; do printf 'missing\t%s\n' "$app"; done < "$MISSING_OUT" ;;
    insecure) while IFS= read -r app; do printf 'insecure\t%s\n' "$app"; done < "$INSECURE_OUT" ;;
    edge-live) while IFS= read -r app; do printf 'edge-live\t%s\n' "$app"; done < "$EDGE_LIVE_OUT" ;;
    edge-insecure) while IFS= read -r app; do printf 'edge-insecure\t%s\n' "$app"; done < "$EDGE_INSECURE_OUT" ;;
  esac
done < "$SUMMARY"

if [ "$QUIET" -eq 0 ]; then
  echo "audit-deployments: ${#APPS[@]} probed — $(tr '\n' ' ' < "$SUMMARY")" >&2
fi

MISSING_COUNT="$(awk -F'\t' '$1 == "missing" { print $2 }' "$SUMMARY")"
rm -f "$RESULTS" "$MISSING_OUT" "$INSECURE_OUT" "$EDGE_LIVE_OUT" "$EDGE_INSECURE_OUT" "$SUMMARY"

# --fail-on-missing turns the audit into a gate: only a genuinely unpublished site
# is a failure. Edge-* classes are reported, never fatal — no deploy can fix a
# branded edge that has no certificate for the hostname.
if [ "$FAIL_ON_MISSING" -eq 1 ] && [ "${MISSING_COUNT:-0}" -gt 0 ]; then
  exit 1
fi
exit 0
