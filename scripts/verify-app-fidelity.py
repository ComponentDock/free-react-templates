#!/usr/bin/env python3
"""verify-app-fidelity.py — APP-SIDE FIDELITY DELTA axis (audit).

Every other token axis compares a *spec* against its *reference* (live sheet).
None of them compares a spec against the **app that was built from it**, so the
one distance nobody has measured is the app↔prep one: did the shipped app
actually paint the brand colours the prep measured on the reference?

This axis is OFFLINE and READ-ONLY.  It never touches `apps/` — the prep stream
must not edit implementation code — it emits a report.

| axis | reads |
| --- | --- |
| `verify-live-tokens.py` | spec palette vs the live sheet |
| `verify-spec-tokens.py` | spec palette vs the sheet the spec cites |
| `verify-spacing/margin/shape/type-scale` | one CSS dimension, spec vs sheet |
| **`verify-app-fidelity.py`** | **spec brand-role palette vs the shipped app's palette** |

DIRECTIONS
  UNSHIPPED   a brand-role colour the prep measured on the reference exists
              nowhere in `apps/<name>/src` (nearest app chromatic ΔRGB > TOL)
NOTES (never flags)
  APPROX      the app paints a near neighbour (Δ ≤ TOL) — the delta in numbers
  COVERED     painted exactly (hex, or the same colour in rgb()/rgba() notation)
  NO-TOKEN    the app's src holds no chromatic hex at all (a Tailwind
              named-palette app): not comparable from source, not a defect
  NO-CLAIM    the spec states no brand-role colour (a spec-side gap)
  ALIAS-SKIP  `prep-status: shipped-as=` — never built from
  UNDOCUMENTED-ANCHOR  `--color-brand`/`--color-accent` holds a hex the spec
              never states (nearest spec Δ > TOL): the app invented a brand

Exit code 0 = no UNSHIPPED, 1 = flags, 2 = usage/root error.  A non-zero exit
over the whole corpus is the measured state of this axis, not a CI gate: the
remedy is an app restyle (implementer) or a recorded spec decision.

Usage:
  python3 verify-app-fidelity.py [--prep-root DIR] [--ref GITREF] [--worktree]
                                 [--slug S] [--limit N] [--json OUT]
                                 [--md OUT] [--top N] [--verbose]
"""
from __future__ import annotations

import argparse
import collections
import json
import os
import re
import subprocess
import sys

HEX_RX = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")
# an app may paint a token in rgb()/rgba() notation: same colour, other syntax
RGB_RX = re.compile(r"rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})")
# role vocabulary: the palette a prep must reproduce in the app
ROLE_RX = re.compile(r"(?i)\b(brand|primary|accent|cta|secondary)\b")
# role modifiers that describe a *variant* of a hue, not the hue itself
ROLE_EXCL_RX = re.compile(
    r"(?i)\b(hover|focus|active|disabled|scale|shade|tint|subtle|pale|"
    r"overlay|shadow|gradient|opacity|drift|comparison)\b")
# a line that attributes the colour to another design / to a re-valued claim
SIBLING_RX = re.compile(r"(?i)(sibling|other template|another (?:template|design)|"
                        r"distinct from|neighbouring design|neighboring design)")
DELTA_RX = re.compile(r"`#[0-9a-fA-F]{3,6}`\s*(?:→|->)\s*\*{0,2}`?#[0-9a-fA-F]{3,6}")
# the live sheet is a rebuilt 3.x kit: a colour the app cannot match is DRIFT
REBUILT_RX = re.compile(r"(?i)\b(rebuilt|re-skin|reskin|sheet drift|new sheet)\b")
ALIAS_RX = re.compile(r"prep-status:\s*shipped-as=")
SLUG_RX = [
    re.compile(r"Source slug:\s*`?([A-Za-z0-9._-]+)"),
    re.compile(r"colorlib\.com/wp/template/([a-z0-9._-]+)/"),
    re.compile(r"preview\.colorlib\.com/theme/(?:bootstrap/)?([A-Za-z0-9._-]+)/"),
]
SOCIAL_BRAND = {
    "#3b5998", "#1da1f2", "#dd4b39", "#0077b5", "#e4405f", "#bd081c", "#25d366",
    "#ea4335", "#4285f4", "#34a853", "#fbbc05", "#1877f2", "#0a66c2", "#ff0000",
}
NEUTRAL = {"#ffffff", "#000000"}
# the app's semantic anchors (scale steps are derived tints, not claims)
ANCHOR_PROPS = ("--color-brand", "--color-accent", "--color-secondary")
TOL = 24            # max-channel RGB distance still read as "the same hue"
BRAND_CHROMA = 0.18  # a brand hue is saturated; slates (#64748b, chroma 0.15) are not
SRC_EXT = (".css", ".tsx", ".ts", ".jsx", ".js", ".html")


def norm(h: str) -> str:
    h = h.lower()
    if len(h) == 4:
        h = "#" + "".join(c * 2 for c in h[1:])
    return h


def rgb(h: str):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def dist(a: str, b: str) -> int:
    """Max-channel distance: one hue read as 'the same colour, slight drift'."""
    return max(abs(x - y) for x, y in zip(rgb(a), rgb(b)))


def chroma(h: str) -> float:
    r, g, b = rgb(h)
    return (max(r, g, b) - min(r, g, b)) / 255.0


def is_chromatic(h: str) -> bool:
    if h in NEUTRAL:
        return False
    r, g, b = rgb(h)
    lo, hi = min(r, g, b), max(r, g, b)
    if hi < 40 or lo > 235:          # near-black / near-white
        return False
    return chroma(h) >= 0.12


def painted(blob: str, h: str) -> bool:
    """A colour may be painted in hex OR rgb()/rgba() notation."""
    if h in blob:
        return True
    r, g, b = rgb(h)
    low = blob.lower().replace(" ", "")
    return f"rgb({r},{g},{b}" in low or f"rgba({r},{g},{b}," in low


def comment_lines(txt: str) -> set:
    """1-based lines inside a prep's evidence fence / HTML comment.

    A prep's audit trail quotes the OLD value or the declaration it was
    adjudicated against; reading it as a design claim would self-flag.
    """
    out, inside = set(), False
    for i, line in enumerate(txt.splitlines(), 1):
        low = line.lower()
        if re.search(r"<!--[^>]*:start\s*-->", low):
            inside = True
            continue
        if re.search(r"<!--[^>]*:end\s*-->", low):
            inside = False
            continue
        if inside:
            out.add(i)
            continue
        if "<!--" in low and "-->" not in low.split("<!--", 1)[1]:
            inside = True
    return out


def spec_slug(txt: str):
    for rx in SLUG_RX:
        m = rx.search(txt)
        if m:
            return m.group(1)
    return None


def role_of(line: str):
    """The role label of a token line, or None.

    Two grammars ship in the corpus: a markdown token table (`| Brand | #hex |`)
    and a bullet (`- **Brand color:** #hex`).  A bare prose sentence is not a
    claim — it has no role label in the leading position.
    """
    t = line.strip()
    if t.startswith("|") and t.count("|") >= 2:
        return t.split("|")[1].strip(" `*")
    m = re.match(r"^[-*+]?\s*\**\s*([A-Za-z][A-Za-z0-9 /&+`'’.-]{2,40}?)\s*\**\s*[:—–]",
                 t)
    return m.group(1).strip(" `*") if m else None


def spec_brand_claims(txt: str):
    """(line_no, hex, role, context) for every brand-role colour a spec states.

    Guards, each closing a measured false-positive class:
      * evidence fences and HTML comments are not claims (`comment_lines`);
      * a line attributing the colour to a sibling design is not this token;
      * a re-valuation line (`#old → **#new**`) names the superseded value;
      * a line that also describes a generated `scale` names the anchor first,
        so only its first hex is read (a derived tint is not a claim);
      * a DRIFT note about a rebuilt sheet states what the app cannot match;
      * social-brand colours and neutrals are not design tokens.
    """
    out = []
    comments = comment_lines(txt)
    for i, line in enumerate(txt.splitlines(), 1):
        if i in comments:
            continue
        s = line.strip()
        if not s or not HEX_RX.search(s):
            continue
        role = role_of(s)
        if not role or not ROLE_RX.search(role) or ROLE_EXCL_RX.search(role):
            continue
        if SIBLING_RX.search(s) or DELTA_RX.search(s) or REBUILT_RX.search(s):
            continue
        hexes = HEX_RX.findall(s)
        if re.search(r"(?i)\bscale\b", s):
            hexes = hexes[:1]
        decls = decls_of(s)
        usage = usage_of(s)
        for h in hexes:
            h = norm("#" + h)
            if h in SOCIAL_BRAND or not is_chromatic(h) or chroma(h) < BRAND_CHROMA:
                continue
            out.append((i, h, role, decls, usage, s))
    return out


DECLS_RX = re.compile(r"(\d+)\s+declarations?\b")
VARIANT_RX = re.compile(r"(?i)\b(hover|focus|active|disabled|placeholder|selection)\b")
# a network's own brand colour is not the design's palette
SOCIAL_USAGE_RX = re.compile(
    r"(?i)\b(twitter|facebook|instagram|linkedin|youtube|whatsapp|pinterest|"
    r"tiktok|snapchat|reddit|social|github|dribbble|behance)\b")


def decls_of(line: str):
    """How many times the reference sheet declares the colour, when stated.

    A colour the reference paints ONCE (a media-player control, a `::selection`)
    is not a brand colour however the row is labelled — the axis is about
    whether the app reproduces the design's palette, not every pixel.
    """
    m = DECLS_RX.search(line)
    return int(m.group(1)) if m else None


# --- claim scope: a row can disqualify ITSELF in its own words -------------
# The claim extractor reads a role label; the row's evidence text often says
# the colour is not a design token at all.  Measured on 2026-10-23 (153
# UNSHIPPED): a framework's own default, a base rule the final one overrides,
# an explicitly unused gradient stop, a diagnostic state colour, and a debt the
# prep itself already adjudicated were all being reported as "the app is
# missing the brand".  Each bucket below names the cue that dismisses it, and
# every cue must be read from THIS row — never from elsewhere in the file.
EVIDENCE_RX = (
    ("EVIDENCE-VENDOR", re.compile(
        r"(?i)(not the design|not the theme accent|bootstrap default|"
        r"framework defaults?|vendor block|stock bs\d?|shared ui-kit|"
        r"fully overridden|effectively unused|do not reproduce)")),
    ("EVIDENCE-UNUSED", re.compile(r"(?i)(unused standalone|gradient midpoint)")),
    ("EVIDENCE-STATE", re.compile(
        r"(?i)\b(loader|spinner|alert-box|alert-validate|aria-invalid|"
        r"::selection)\b")),
    ("APP-DECISION", re.compile(
        r"(?i)(recorded as a deliberate|deliberate (?:brighten|deviation)|"
        r"deliberately deviates?)")),
)
# an alternative pair in ONE cell: `#a` / `#b`, `~#a` or `#b`.  The app may
# ship either member, so painting the partner covers the row.
ALT_RX = re.compile(r"~?`?#[0-9a-fA-F]{3,6}`?[\s`*]*(?:/|\bor\b)[\s`*]~?`?#[0-9a-fA-F]{3,6}`?")
# the framework's own version remap: a BS4 default colour whose BS5 equivalent
# is exactly what the app ships is a framework upgrade, not a replaced brand
BS5_OF = {"#007bff": "#0d6efd", "#28a745": "#198754",
          "#17a2b8": "#0dcaf0", "#e83e8c": "#d63384"}
# every bucket that means "this row was dismissed, not the app"
DISQUALIFIED = frozenset({"EVIDENCE-VENDOR", "EVIDENCE-UNUSED", "EVIDENCE-STATE",
                          "APP-DECISION", "OR-COVERED", "FRAMEWORK-REMAP"})


def evidence_kind(line: str):
    """The bucket that dismisses this row, or None.

    Scoped to the row: an app that ships a vendor hex IS a defect when the row
    claims it as the design's brand; it is not when the row itself says the hex
    comes from the vendor block.
    """
    for kind, rx in EVIDENCE_RX:
        m = rx.search(line)
        if m:
            return kind, m.group(0).strip()
    return None


def alt_partners(line: str, h: str):
    """Every colour paired with `h` by an `/` or `or` alternative in the row."""
    out = []
    for m in ALT_RX.finditer(line):
        hexes = [norm("#" + x) for x in HEX_RX.findall(m.group(0))]
        if h in hexes:
            out.extend(x for x in hexes if x != h)
    return out



def usage_of(line: str) -> str:
    """The usage text after the first hex — where `hover`/`focus` variants live."""
    m = HEX_RX.search(line)
    return line[m.end():] if m else line


def app_files(root: str, name: str):
    base = os.path.join(root, "apps", name, "src")
    for dirpath, _dirs, files in os.walk(base):
        for fn in sorted(files):
            if fn.endswith(SRC_EXT):
                yield os.path.join(dirpath, fn)


def app_palette(root: str, name: str):
    """Every hex the shipped app paints, plus its semantic anchor declarations.

    Read-only by construction: this axis is never allowed to edit `apps/`.
    """
    hexes, anchors = set(), {}
    for fp in app_files(root, name):
        try:
            txt = open(fp, encoding="utf-8", errors="replace").read()
        except OSError:
            continue
        hexes.update(norm("#" + h) for h in HEX_RX.findall(txt))
        for r, g, b in RGB_RX.findall(txt):
            if all(int(c) <= 255 for c in (r, g, b)):
                hexes.add("#%02x%02x%02x" % (int(r), int(g), int(b)))
        for m in re.finditer(r"(--[A-Za-z0-9_-]+)\s*:\s*([^;{}]+);", txt):
            prop = m.group(1)
            if prop not in ANCHOR_PROPS or prop in anchors:
                continue
            for h in HEX_RX.findall(m.group(2)):
                anchors[prop] = norm("#" + h)
                break
    return hexes, anchors


def nearest(h: str, pool):
    """Closest colour in `pool`, ties broken lexicographically.

    Iterating a set directly makes the answer depend on PYTHONHASHSEED: two
    equal-Δ candidates swapped between runs (`#0056b3`/`#007bff` on `knob`), so
    the report was not reproducible.  Sort, and keep the first strict minimum.
    """
    best, bd = None, 999
    for c in sorted(pool):
        d = dist(h, c)
        if d < bd:
            best, bd = c, d
    return best, bd


def read(root: str, ref: str, path: str, worktree: bool) -> str:
    if worktree:
        p = os.path.join(root, path)
        if not os.path.exists(p):
            return ""
        return open(p, encoding="utf-8", errors="replace").read()
    return subprocess.run(["git", "show", f"{ref}:{path}"], cwd=root,
                          capture_output=True, text=True).stdout


def read_specs(root: str, ref: str, worktree: bool):
    if worktree:
        base = os.path.join(root, "openspec", "specs")
        out = []
        for dirpath, _d, files in os.walk(base):
            for fn in files:
                if fn == "spec.md":
                    out.append(os.path.relpath(os.path.join(dirpath, fn), root))
        return sorted(out)
    q = subprocess.run(["git", "ls-tree", "-r", "--name-only", ref, "openspec/specs"],
                       cwd=root, capture_output=True, text=True).stdout.split()
    return sorted(p for p in q if p.endswith("/spec.md"))


def audit_spec(root: str, ref: str, path: str, args):
    """Audit ONE spec.  Returns (flags, notes, rows, n_claims)."""
    flags, notes, rows = [], [], []
    name = path.split("/")[-2].replace("template-", "")
    if not os.path.isdir(os.path.join(root, "apps", name, "src")):
        return flags, notes, rows, 0       # not built yet: nothing to compare
    if args.slug and args.slug not in (name,):
        return flags, notes, rows, 0
    txt = read(root, ref, path, args.worktree)
    if not txt:
        return flags, notes, rows, 0
    if ALIAS_RX.search(txt):
        notes.append((name, "ALIAS-SKIP", "prep-status: shipped-as=<other app>"))
        return flags, notes, rows, 0
    claims = spec_brand_claims(txt)
    if not claims:
        notes.append((name, "NO-CLAIM", "spec states no brand-role colour"))
        return flags, notes, rows, 0
    hexes, anchors = app_palette(root, name)
    chrom = sorted(h for h in hexes if is_chromatic(h))
    if not chrom:
        notes.append((name, "NO-TOKEN",
                      f"apps/{name}/src holds no chromatic hex (named-palette app)"))
        return flags, notes, rows, len(claims)
    blob = " ".join(hexes)
    uncovered = 0
    seen = set()
    dismissed = set()
    for line_no, h, role, decls, usage, ctx in claims:
        if h in hexes or painted(blob, h):
            continue
        if h in seen:
            continue                      # one row per app+colour
        # a row that disqualifies itself is not a claim about the design.
        # Checked BEFORE `seen` so a second, honest row for the same hex in the
        # same spec is still evaluated.
        kind = evidence_kind(ctx)
        if kind:
            if h in dismissed:
                continue
            dismissed.add(h)
            notes.append((name, kind[0],
                          f"spec L{line_no} {role} {h}: row says \"{kind[1]}\""))
            continue
        # `#a` / `#b` is ONE alternative claim: the app may ship either member
        alts = alt_partners(ctx, h)
        hit_alt = next((a for a in alts if a in hexes or painted(blob, a)), None)
        if hit_alt:
            if h in dismissed:
                continue
            dismissed.add(h)
            notes.append((name, "OR-COVERED",
                          f"spec L{line_no} {role} {h}: app paints the row's "
                          f"alternative {hit_alt}"))
            continue
        seen.add(h)
        near, d = nearest(h, chrom)
        uncovered += 1
        if d <= TOL:
            notes.append((name, "APPROX",
                          f"spec L{line_no} {role} {h} ~ app {near} (Δ{d})"))
            continue
        if BS5_OF.get(h) == near:
            notes.append((name, "FRAMEWORK-REMAP",
                          f"spec L{line_no} {role} {h}: app ships the BS5 "
                          f"equivalent {near}"))
            continue
        if VARIANT_RX.search(usage):
            notes.append((name, "APPROX-VARIANT",
                          f"spec L{line_no} {role} {h}: usage is a variant state "
                          f"({usage.strip()[:60]}) — nearest app {near} (Δ{d})"))
            continue
        if SOCIAL_USAGE_RX.search(usage):
            notes.append((name, "APPROX-SOCIAL",
                          f"spec L{line_no} {role} {h}: usage is a social-network "
                          f"brand ({usage.strip()[:60]})"))
            continue
        if decls is not None and decls < 2:
            notes.append((name, "APPROX-MINOR",
                          f"spec L{line_no} {role} {h}: reference declares it "
                          f"{decls}× — nearest app {near} (Δ{d})"))
            continue
        flags.append((name, "UNSHIPPED", h,
                      f"spec L{line_no} {role}: nearest app {near} (Δ{d})"))
        rows.append({"app": name, "line": line_no, "role": role, "hex": h,
                     "nearest": near, "delta": d, "ctx": ctx,
                     "slug": spec_slug(txt) or ""})
    # direction 2: an anchor the prep never measured
    spec_hexes = {norm("#" + x) for x in HEX_RX.findall(txt)}
    for prop, h in anchors.items():
        if h in spec_hexes or not is_chromatic(h):
            continue
        near, d = nearest(h, spec_hexes) if spec_hexes else (None, 999)
        if d > TOL:
            notes.append((name, "UNDOCUMENTED-ANCHOR",
                          f"{prop}: {h}, nearest spec {near} (Δ{d})"))
            rows.append({"app": name, "line": 0, "role": prop, "hex": h,
                         "nearest": near, "delta": d,
                         "ctx": "app anchor", "slug": spec_slug(txt) or ""})
    if claims and uncovered == 0:
        notes.append((name, "COVERED", f"{len(claims)} brand-role claim(s) painted"))
    return flags, notes, rows, len(claims)


def census(root: str, ref: str, args):
    flags, notes, rows = [], [], []
    counts = {"specs": 0, "shipped": 0, "claims": 0, "apps": 0}
    specs = read_specs(root, ref, args.worktree)
    shipped = os.path.isdir(os.path.join(root, "apps"))
    if not shipped:
        print("error: no apps/ under the prep root", file=sys.stderr)
        return None
    if args.limit:
        specs = specs[:args.limit]
    counts["specs"] = len(specs)
    counts["apps"] = len([d for d in os.listdir(os.path.join(root, "apps"))
                          if os.path.isdir(os.path.join(root, "apps", d, "src"))]
                         ) if shipped else 0
    for p in specs:
        f, n, r, nclaims = audit_spec(root, ref, p, args)
        flags.extend(f)
        notes.extend(n)
        rows.extend(r)
        if nclaims or n:
            counts["shipped"] += 1
        counts["claims"] += nclaims
    return flags, notes, rows, counts


def render_md(flags, notes, rows, args, counts=None) -> str:
    kinds = collections.Counter(n[1] for n in notes)
    apps = len({f[0] for f in flags})
    L = []
    L.append("# App-side fidelity delta — does each app paint the measured brand?\n")
    L.append("```sh\npython3 scripts/verify-app-fidelity.py --md docs/app-fidelity-delta.md\n"
             "python3 scripts/verify-app-fidelity-controls.py   # 27/27\n```\n")
    L.append("Generated by `scripts/verify-app-fidelity.py` (offline, read-only; it\n"
             "never edits `apps/`). Every other token axis compares a spec against\n"
             "its live reference sheet. This one compares the shipped app's own\n"
             "palette against the brand-role colours its prep measured.\n")
    if args.stamp:
        L.append(f"_Provenance: {args.stamp}_\n")
    if counts:
        L.append(f"Corpus: **{counts['specs']}** specs, **{counts['shipped']}** of them\n"
                 f"with a shipped app (`apps/<name>/src`), **{counts['claims']}** brand-role\n"
                 f"colour claims evaluated.\n")
    L.append("## Method\n")
    L.append("* **Claim side** — the brand-role rows/bullets of\n"
             "  `openspec/specs/template-<name>/spec.md` whose role label contains\n"
             "  `brand|primary|accent|cta|secondary` (variant labels such as `hover`,\n"
             "  `scale`, `tint` excluded; evidence fences, sibling sentences,\n"
             "  re-valuation arrows and rebuilt-sheet drift notes skipped).\n"
             "* **Claim scope** — a row can disqualify itself in its own words,\n"
             "  measured on 2026-10-23: a framework's own default (`stock BS5\n"
             "  --bs-primary in the vendor block (not the design)`), a base rule the\n"
             "  final one overrides (`fully overridden … do NOT reproduce`), an\n"
             "  explicitly `unused standalone` gradient stop, a diagnostic state\n"
             "  (`loader`, `.alert-box--error`, `[aria-invalid]`), and a debt the\n"
             "  prep already adjudicated (`recorded as a deliberate …`). Those are\n"
             "  notes, never flags: the app is right to omit them. So is a row that\n"
             "  states alternatives (`#a` / `#b`) when the app paints either member.\n"
             "* **App side** — every hex in `apps/<name>/src/**` (`.css`, `.tsx`,\n"
             "  `.ts`, `.html`), matched in hex or `rgb()/rgba()` notation.\n"
             "* **UNSHIPPED** — a measured brand colour with no counterpart in the\n"
             f"  app, nearest app chromatic more than **{TOL}** RGB units away (max\n"
             "  channel). Closer neighbours are `APPROX` notes: the app paints a\n"
             "  drift, not a different colour.\n"
             "* **UNDOCUMENTED-ANCHOR** — `--color-brand` / `--color-accent` /\n"
             "  `--color-secondary` holds a hex no spec token states and no spec hex\n"
             f"  is within {TOL} units of: the app invented a brand colour.\n"
             "* An app whose `src` holds **no chromatic hex** (Tailwind named-palette\n"
             "  utilities only) is `NO-TOKEN`: not comparable from source, not a\n"
             "  defect. A spec with no brand-role colour is `NO-CLAIM`. Alias preps\n"
             "  (`prep-status: shipped-as=`) are out of scope.\n")
    L.append("## Census\n")
    L.append("| bucket | n | meaning |\n| --- | --- | --- |")
    L.append(f"| UNSHIPPED (flag) | **{len(flags)}** "
             f"claims / **{apps}** apps | measured brand colour absent from the app |")
    for k, note in (("APPROX", "near neighbour painted (Δ ≤ 24)"),
                    ("COVERED", "every measured brand-role claim painted"),
                    ("EVIDENCE-VENDOR", "row itself says the hex is the vendor's, not the design's"),
                    ("EVIDENCE-UNUSED", "row itself says the colour is unused standalone"),
                    ("EVIDENCE-STATE", "loader / validation / error state, not a brand hue"),
                    ("APP-DECISION", "the prep already records the app's deliberate deviation"),
                    ("OR-COVERED", "row states alternatives; the app paints the partner"),
                    ("FRAMEWORK-REMAP", "app ships the BS5 equivalent of a BS4 default"),
                    ("NO-TOKEN", "app src holds no chromatic hex"),
                    ("NO-CLAIM", "spec states no brand-role colour"),
                    ("ALIAS-SKIP", "alias prep, never built from"),
                    ("UNDOCUMENTED-ANCHOR", "app anchor hex the spec never states")):
        L.append(f"| {k} | {kinds.get(k, 0)} | {note} |")
    L.append("")
    claim_rows = [r for r in rows if r["line"]]
    if claim_rows:
        band = collections.Counter(
            "25–49" if r["delta"] < 50 else "50–89" if r["delta"] < 90 else "90+"
            for r in claim_rows)
        L.append("## Reading the numbers\n")
        L.append("Severity is the max-channel distance between the measured colour and\n"
                 "the closest the app paints:\n")
        L.append("| Δ | claims | what it means |\n| --- | --- | --- |")
        L.append(f"| 25–49 | {band.get('25–49', 0)} | a re-picked shade of the same hue |")
        L.append(f"| 50–89 | {band.get('50–89', 0)} | a neighbouring colour family |")
        L.append(f"| 90+ | {band.get('90+', 0)} | a different colour: the design's accent was replaced |")
        L.append("")
        top_hex, top_n = collections.Counter(r['hex'] for r in claim_rows).most_common(1)[0]
        L.append(f"A colour that recurs across apps is one shortcut, not N mistakes: the\n"
                 f"most repeated here is `{top_hex}` ({top_n} apps), and each app replaced\n"
                 f"it with a hue of its own choosing.\n")
    byapp = collections.Counter(r["app"] for r in rows if r["line"])
    if byapp:
        L.append("## Worst apps\n")
        L.append("| app | unshipped brand claims |\n| --- | --- |")
        for a, c in byapp.most_common(args.top):
            L.append(f"| `{a}` | {c} |")
        L.append("")
        L.append("## Unshipped measured brand colours\n")
        L.append("`role` and `line` point at the spec row; `nearest app` is the closest\n"
                 "chromatic the app does paint, with the max-channel distance.\n")
        L.append("| app | spec L | role | measured | nearest app | Δ |\n"
                 "| --- | --- | --- | --- | --- | --- |")
        for r in sorted((r for r in rows if r["line"]), key=lambda r: (-r["delta"], r["app"])):
            L.append(f"| `{r['app']}` | {r['line']} | {r['role']} | `{r['hex']}` | "
                     f"`{r['nearest']}` | {r['delta']} |")
        L.append("")
    und = [n for n in notes if n[1] == "UNDOCUMENTED-ANCHOR"]
    if und:
        L.append("## Undocumented anchors\n")
        L.append("The app's own brand anchor is a colour no spec token states.\n")
        L.append("| app | anchor | hex | nearest spec | Δ |\n| --- | --- | --- | --- | --- |")
        for name, _k, detail in und:
            m = re.match(r"(--[a-z-]+): (#[0-9a-f]{6}), nearest spec (\S+) \(Δ(\d+)\)", detail)
            if m:
                L.append(f"| `{name}` | `{m.group(1)}` | `{m.group(2)}` | "
                         f"`{m.group(3)}` | {m.group(4)} |")
        L.append("")
    disq = [n for n in notes if n[1] in DISQUALIFIED]
    if disq:
        L.append("## Claims dismissed by their own evidence\n")
        L.append("A brand-role row whose text says the colour is not this design's\n"
                 "token is a note, not app debt — the app is right to omit it. Listed\n"
                 "so the dismissal is auditable, never silent.\n")
        L.append("| app | bucket | row |\n| --- | --- | --- |")
        for name, kind, detail in disq:
            L.append(f"| `{name}` | {kind} | {detail.replace('|', '/')[:150]} |")
        L.append("")
    common = collections.Counter(r["hex"] for r in rows if r["line"])
    if common:
        L.append("## Systemic gaps\n")
        L.append("A measured colour several apps never paint is a shared shortcut,\n"
                 "not N independent mistakes.\n")
        L.append("| measured hex | apps |\n| --- | --- |")
        for h, c in common.most_common(15):
            if c > 1:
                L.append(f"| `{h}` | {c} |")
        L.append("")
    L.append("## What to do with a hit\n")
    L.append("* The app is the defect: restyle it to the measured hex (implementer\n"
             "  stream, normal PR) — never edit `apps/` from the prep clone.\n"
             "* The app is right and the prep was wrong: record the decision in the\n"
             "  spec (`post-ship delta` line naming both values) so the next audit\n"
             "  reads it as adjudicated, not as drift.\n"
             "* An `APPROX` row needs no change: it records how far the app's hue\n"
             "  sits from the measured one.\n"
             "* A row listed under **Claims dismissed by their own evidence** needs\n"
             "  no change either: its text already says the colour is the vendor's,\n"
             "  unused, a state, an alternative the app ships, or a decision the\n"
             "  prep recorded. Re-open it only if the row's *text* is wrong.\n")
    return "\n".join(L) + "\n"


def main() -> int:
    ap = argparse.ArgumentParser(description="app-side fidelity delta (read-only)")
    ap.add_argument("--prep-root", default=os.getcwd())
    ap.add_argument("--ref", default="HEAD")
    ap.add_argument("--worktree", action="store_true")
    ap.add_argument("--slug")
    ap.add_argument("--limit", type=int)
    ap.add_argument("--json")
    ap.add_argument("--md")
    ap.add_argument("--top", type=int, default=30)
    ap.add_argument("--stamp", default="",
                    help="provenance line written into the markdown report")
    ap.add_argument("--verbose", action="store_true")
    args = ap.parse_args()
    root = os.path.abspath(args.prep_root)
    if not os.path.isdir(os.path.join(root, "openspec", "specs")):
        print(f"error: {root} is not a prep root (no openspec/specs)", file=sys.stderr)
        return 2
    got = census(root, args.ref, args)
    if got is None:
        return 2
    flags, notes, rows, counts = got
    if args.json:
        json.dump({"flags": flags, "notes": notes, "rows": rows},
                  open(args.json, "w"), indent=1)
    if args.md:
        open(args.md, "w").write(render_md(flags, notes, rows, args, counts))
    kinds = collections.Counter(n[1] for n in notes)
    print(f"app-fidelity: {len(flags)} unshipped claim(s) in "
          f"{len({f[0] for f in flags})} app(s); notes={dict(sorted(kinds.items()))}")
    if args.verbose:
        for f in flags:
            print("  FLAG", f[0], f[2], f[3])
        for n in notes:
            print("  note", n[0], n[1], n[2])
    for f in flags[:40] if not args.verbose else []:
        print(f"  {f[0]}: {f[2]} — {f[3]}")
    return 1 if flags else 0


if __name__ == "__main__":
    sys.exit(main())
