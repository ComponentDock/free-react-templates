#!/usr/bin/env bash
# Deployment audit for the template fleet.
#
# Every app in apps/<name> is published at https://<name>.free.componentdock.com.
# Two classes of problem are detected:
#
#   missing   the Surge project was never published (or its deploy run was
#             cancelled/failed) — the host answers with Surge's own 404 page.
#   insecure  published, but the host serves a TLS certificate that does not
#             cover it (Surge's shared `CN=*.surge.sh` cert), so browsers show
#             a certificate warning for the https:// link.
#
# Used by .github/workflows/deploy-surge.yml (audit + repair job) and runnable
# locally. stdout is TSV — `<problem>\t<app>` per line (problems only, `live`
# apps are counted but not printed) — plus a summary on stderr.
#
# Usage:
#   bash scripts/audit-deployments.sh [--shard I --total N] [--limit K] [--jobs J] [--quiet]
#
#   --shard I --total N  audit only the apps where (index % N == I) — lets the
#                        CI matrix split the fleet (default: --shard 0 --total 1)
#   --limit K            print at most K lines per problem class (0 = no limit)
#   --jobs J             parallel probes (default 16)
#   --quiet              suppress the stderr summary
#
# Exit status is 0 unless the arguments are invalid: a broken deployment is
# data for the caller, not a failure of the audit itself.
set -uo pipefail

SHARD=0
TOTAL=1
LIMIT=0
JOBS=16
QUIET=0

while [ $# -gt 0 ]; do
  case "$1" in
    --shard) SHARD="${2:?--shard needs a value}"; shift 2 ;;
    --total) TOTAL="${2:?--total needs a value}"; shift 2 ;;
    --limit) LIMIT="${2:?--limit needs a value}"; shift 2 ;;
    --jobs)  JOBS="${2:?--jobs needs a value}"; shift 2 ;;
    --quiet) QUIET=1; shift ;;
    -h|--help) sed -n '2,26p' "$0"; exit 0 ;;
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

# One probe per app: strict TLS first (detects the shared-cert problem), then an
# insecure retry to tell "not published" apart from "published, bad certificate".
classify() {
  local name="$1" host code
  host="https://${name}.free.componentdock.com"
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
  else
    printf 'missing\t%s\n' "$name"
  fi
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

[ "$QUIET" -eq 1 ] || echo "audit-deployments: probing ${#APPS[@]} app(s) (shard $SHARD/$TOTAL, jobs $JOBS)" >&2

RESULTS="$(mktemp)"
MISSING_OUT="$(mktemp)"
INSECURE_OUT="$(mktemp)"
SUMMARY="$(mktemp)"
if [ "${#APPS[@]}" -gt 0 ]; then
  printf '%s\n' "${APPS[@]}" \
    | xargs -P "$JOBS" -I{} bash -c 'classify "$@"' _ {} \
    | sort > "$RESULTS"
fi

awk -F'\t' -v limit="$LIMIT" -v mo="$MISSING_OUT" -v so="$INSECURE_OUT" -v sum="$SUMMARY" '
  $1 == "live" { live++ }
  $1 == "missing" { m++; if (limit == 0 || m <= limit) print $2 > mo }
  $1 == "insecure" { s++; if (limit == 0 || s <= limit) print $2 > so }
  END {
    printf "live\t%d\nmissing\t%d\ninsecure\t%d\n", live + 0, m + 0, s + 0 > sum
  }
' "$RESULTS"

while IFS=$'\t' read -r problem count; do
  case "$problem" in
    missing) while IFS= read -r app; do printf 'missing\t%s\n' "$app"; done < "$MISSING_OUT" ;;
    insecure) while IFS= read -r app; do printf 'insecure\t%s\n' "$app"; done < "$INSECURE_OUT" ;;
  esac
done < "$SUMMARY"

if [ "$QUIET" -eq 0 ]; then
  echo "audit-deployments: ${#APPS[@]} probed — $(tr '\n' ' ' < "$SUMMARY")" >&2
fi
rm -f "$RESULTS" "$MISSING_OUT" "$INSECURE_OUT" "$SUMMARY"
