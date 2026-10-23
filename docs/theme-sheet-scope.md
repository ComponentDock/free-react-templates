# Theme-sheet scope — the 93 preps whose design sheet was read as a vendor bundle

Axis: **THEME-SHEET SCOPE** (queue exhausted — 0 open / 2,857 `[x]`, main `abcac6ab9`).
Follows `-23zc` (TOKEN-EXTRA residual) and answers its *Next axes #2*.

Commit: `docs: fix brand-claims vendor scope — 93 phantom NO-THEME-SHEET -> 0 (44 rows)`.

## The defect (one token, 93 preps)

`verify-brand-claims.py`'s vendor test matched the **whole URL**:

```python
def is_vendor(url: str) -> bool:
    return bool(VENDOR_RX.search(url.rsplit("/", 1)[-1] + " " + url))
```

`VENDOR_RX` contains `bootstrap`. The preview host serves a whole demo *family*
under `/theme/bootstrap/<slug>/` (and `/theme/bb/<slug>/`), so every sheet those
demos link matched — and the bucket said:

> `NO-THEME-SHEET` — *every linked sheet is a vendor/library bundle*

while the sheet was `<demo>/css/style.css?v=…`, **7.7–27 KB, HTTP 200, the only
sheet the page links**. Measured on all 93: **93/93 phantom**, 0 real vendor-only
demos. (`verify-token-extra.py` never had the bug: it tests the *filename*, plus
library **path segments** — `/plugins/|vendor/|libs/|third-party/`. The
`is_vendor` in this axis had also grown a symptom fix, `bootstrap-sidebar` →
`False`, which was the fingerprint of this scope error.)

Fix (`scripts/verify-brand-claims.py`):

* `demo_relative(url, demo)` — the sheet's path **below its own demo directory**,
  plus the query (cross-host sheets keep their whole path so
  `fonts.googleapis.com/css?family=…` still matches).
* `is_vendor(url, demo)` — `VENDOR_RX` on the demo-relative **filename + path**,
  plus `VENDOR_PATH_RX` for library segments. `/theme/bootstrap/checkbox-14/css/style.css`
  is no longer vendor; `assets/css/bootstrap.min.css` still is.

## Census (all 1,703 shipped specs, `--jobs 8`, live)

| bucket | before | after | Δ |
| --- | --- | --- | --- |
| CLAIMED | 1,457 | 1,458 | +1 (sibling commit `e4cb7c0f7`, not this axis) |
| **NO-THEME-SHEET** | **93** | **0** | **−93** |
| PROSE-ROW (flag) | 0 | 35 | +35 |
| **MEASURED-ROW (flag)** | **0** | **9** | **+9** |
| PROSE-STATE (new, note) | — | 3 | +3 |
| PROSE-UNPAINTED | 11 | 17 | +6 |
| THIN | 25 | 47 | +22 |
| WEAK | 5 | 9 | +4 |
| FRAMEWORK-ONLY | 4 | 16 | +12 |
| NO-CHROMA | 10 | 12 | +2 |
| CLAIMED-FORM | 1 | 0 | −1 (sibling commit) |

The 93 redistribute exactly (35 + 9 + 3 + 6 + 22 + 4 + 12 + 2 = 93): **44 preps
can carry a measured row**, the other 49 are honest non-flags — the design sheet
is now read and genuinely has no brand surface (`THIN`/`WEAK`/`FRAMEWORK-ONLY`/
`NO-CHROMA`), or the prep's colour is painted only in an interaction state.

App side (`verify-app-fidelity.py --worktree`): **NO-CLAIM 246 → 201**,
COVERED 1,206 → 1,220, claims 2,110 → 2,159; 18 of the 44 new claims are
`UNSHIPPED` (the app paints a different colour) — implementer debt, the
`APP-DELTA` axis' subject, never edited from the prep clone.

## Guard added while writing the rows: PROSE-STATE

A `PROSE-ROW` restates the prep's own colour, so before writing 44 rows the
value was checked against the sheet's *paint*: a colour whose **every**
declaration sits under an interaction state (`:hover`/`:focus`/`:active`/
`:visited`) is a focus ring, not a brand.

* `multiform` `#80bdff` — `.cl-form-control:focus{border-color}` ×1
* `seekdot` `#80bdff` — same family, same rule
* `subdivide` `#4200ff` — `.footer-95942 .nav-links li a:hover{color}` ×2

All three are now `PROSE-STATE` (reported, no row). **A selection state is not an
interaction state**: `:checked` is the design's own paint on a checkbox/toggle
demo (`ballot`'s `#7e0cf5` fills the checked indicator, `toggly`'s `#ff7bb0` the
toggle), so `INTER_RX` deliberately leaves `:checked`/`:disabled` out. The first
draft used `stateany` (all states) and rejected 15 rows including 6 that are the
demo's signature colour — the control `c17` pins the corrected rule.

## The other half of *Next axes #2*: REBUILT 72

REBUILT 72 were re-probed, not written:

* **72/72 serve a rebuilt 3.x kit only** — `css/style.min.css?v=3.0.x` (193–205 KB)
  plus `vendor/…?v=3.0.x` bundles. No original theme sheet is served anywhere on
  the demo, so the *original* palette cannot be recovered from the live page.
* the free archive is gone too: `downloads/free/{consultation,whitespace,appy}.zip`
  → **HTTP 404** (the rebuild family has no un-versioned twin).
* **but the rebuild kept the palette**: of the 64 that state a colour, **59 still
  paint it verbatim** in the kit sheet (`DRIFT-KEPT`), **5** do not
  (`jotter` `#f05d23`, `keystone` `#ff1f1f`, `netforge` `#1a73e8`,
  `pressroom` `#ff2143`, `ripply` `#d6c3fc` — `DRIFT-REBRANDED`), and **8** state
  no colour at all (`appy`, `filmstock`, `focus`, `groovecraft`, `photofolio`,
  `portfoliocove`, `snapfold`, `venture`).

So `REBUILT` is *not* "unmeasurable": it is drift in the markup/framework while
the brand survives in 92 % of the stated cases. No row is written from a rebuilt
kit (a row from a 3.x bundle would claim the drift artifact, not the design);
the census is the deliverable for that bucket.

## Verifier + controls

* `scripts/verify-brand-claims.py` — read-only, `demo_relative()`/`is_vendor(url, demo)`,
  new `PROSE-STATE` bucket, `paints_surface()`.
* `scripts/verify-brand-claims-controls.py` — **17/17 pass (9 GATE)**, two new gates:
  * `c16` **the demo FAMILY directory is not a vendor path** — fixture demo
    `…/theme/bootstrap/checkbox-14/` + sheet `css/style.css` must yield
    `MEASURED-ROW`; reverting the scope to the whole URL must yield
    `NO-THEME-SHEET`. This control would have caught the original defect.
  * `c17` **a colour painted only under `:focus` is `PROSE-STATE`, never a row** —
    neutralising `paints_surface()` must produce `PROSE-ROW`.
* `scripts/fix-brand-claims.py` — unchanged; wrote **44 rows**, second run 0
  (`GATE c15`). 44/44 `openspec validate … --type spec` pass.

## Pins

* **Scope a vendor test to the demo's own subtree.** Any regex list that contains
  a technology name (`bootstrap`, `swiper`, `owl`) will match the host's demo
  families (`/theme/bootstrap/`, `/theme/bb/`) — the *directory* is the family,
  the *filename* is the library.
* **A symptom exclusion is a bug report**: `if "bootstrap-sidebar" in url: return False`
  existed to rescue one family from this defect.
* **Aggregate state counters lie across rules.** `stateany` (all states, summed)
  rejected `gridmark`'s `a{color}` because the same hex also appears in a
  `:hover` rule; the rule must ask "is *every* declaration a state", which needs
  per-declaration counting (`inter`) not a per-hex flag.
* **A bucket name in a shipped report is a claim.** `docs/brand-claims-coverage.md`
  said "every linked sheet is a vendor/library bundle" for 93 preps; that
  sentence was false for all 93 — corrected in place with a pointer here.
* The repair order matters: fix the *measurement* first, re-run, then write rows.
  Writing rows from the pre-fix buckets would have produced 0 (the bucket was
  terminal).
