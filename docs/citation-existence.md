# Citation existence — a URL the prep never wrote cannot be unrecorded

```sh
python3 scripts/verify-evidence-cells.py --json /tmp/ev.json   # IDENTITY-UNRECORDED 39 -> 0
python3 scripts/verify-evidence-cells-controls.py              # 55/55 (18 GATE)
python3 scripts/record-citation-identity.py --from-json /tmp/ev.json [--write]
```

`IDENTITY-UNRECORDED` is a note the axis raises when a cell cites a sheet but
records no size/sha256 beside it, so the byte comparison that
[`docs/citation-binding.md`](citation-binding.md) describes cannot be asked.
On 2026-10-24 it reported **73 preps**. Two thirds of them were not prep
defects at all.

## The mechanism: a manufactured citation

`named_refs()` turns the sheet names a spec writes into URLs to fetch:

| the prep writes | `named_refs` produces |
| --- | --- |
| `theme/x/css/style.css` | that URL |
| `style.css` (bare — the house grammar for a single-sheet theme) | `theme/x/style.css` **and** `theme/x/css/style.css` |

`fetch_sheet()` then retries `<dir>/css/<name>` when the first URL is a stub, so
the manufactured `theme/x/style.css` came back with a live body (the `css/`
sibling's bytes). It reached the identity loop, `recorded_identity()` found no
numbers beside a string the prep never wrote, and the cell was reported as
"no size/sha256 recorded beside the citation".

`archcraft` is the type case: its Purpose line names `style.css` twice (the
icon font and the theme sheet) with no numbers, and the identity record —
written by the same fixer that cleared the other 72 — named both sheets by
path. The note came from `theme/archs/style.css`, a path that occurs nowhere in
the file and is served by nothing.

**39 of the 73 notes were this artefact only.** Every one was in a prep that
did record its cited sheets.

## The fix

* `written_ref(txt, url, live_paths)` — a URL is a citation only when the spec
  names it: by a path tail it contains, or by a bare basename **that the demo
  actually links**. The bare-basename branch requires the URL's path to be in
  the demo's own `<link>` set, which is what disqualifies a manufactured
  sibling (`theme/archs/style.css`) while still accepting the real one
  (`theme/archs/css/style.css`). Archive members (no scheme) are cited by bare
  name by construction and keep working.
* `EXISTENCE_GUARD` — module-level, so a control can switch it off and prove
  the note returns (`c35b GATE`).
* `FONT_HOSTS` — `fonts.googleapis.com` / `fonts.gstatic.com` sheets are chosen
  per user agent; their byte count is a property of the request, not of the
  design, so no identity can be kept for them (`c37`) and one must not be
  demanded (`c37b GATE`).

## The other half: 72 preps got their identity

The record itself is the deliverable. `scripts/record-citation-identity.py`
walks the verifier's own candidate set (not `design_sheets`, which is only the
four biggest sheets) and writes one path-qualified line into `## Design tokens`:

```
Sheet identity (measured 2026-10-24): `theme/archs/fonts/icomoon/style.css` — 79,820 B, sha256 `b696dfc59a40…`; `theme/archs/css/style.css` — 24,541 B, sha256 `b770405c0799…`.
```

Every citation in that line is path-qualified and each size follows its own
file, so a prep that measures two `style.css` sheets is readable per citation
(the `CITATION-AMBIGUOUS` shape) and no digest can be borrowed by a sibling.

Design notes that matter for re-runs:

* the binder is **imported** from the verifier, never copied;
* every written citation is path-qualified, so a prep that measures two
  `style.css` sheets is readable per citation (the `CITATION-AMBIGUOUS` shape);
* the line is **merged in place** on a second run — a spec that gains a
  citation gets it appended to the same sentence;
* the bytes are fetched over IPv4 (`curl -4`), because the preview host refuses
  this workstation's IPv6, and the digest is of the **raw** bytes
  (the `-24b` basis rule);
* archive-only slugs read the sheet out of `downloads/free/<slug>.zip`; that
  member is the reference, since no live demo serves the skin;
* after writing, every written citation is re-read through the binder and must
  return the numbers just written, or the spec is refused and left untouched
  (the `-24c` pin).

`design_sheets` alone was **not** enough: `pixelist` cites
`css/carouFredSel.css` (456 B) and `animated-headline.css`, `vignette` cites
`theme/karl/style.css` (345 B), `blankslate` cites the unminified
`css/style.css` (238,344 B) beside its `.min` twin — none of those is a
"design sheet", and all of them are cells.

## Census (377 preps / 3,253 claims)

| measure | before (`3882f30be`) | after |
| --- | --- | --- |
| flags | 0 | 0 |
| IDENTITY-UNRECORDED | 73 | **0** |
| STALE-SKIN | 5 | 5 (unchanged — the re-measure queue) |
| CITATION-AMBIGUOUS | 3 | 3 |
| REBUILT-SKIN | 12 | 4 |
| notes | 1,122 | 1,043 |

`REBUILT-SKIN` falls because a recorded identity that reproduces means the
cited sheet **is** what the demo serves — those skins are not rebuilds after
all. The 5 `STALE-SKIN` (`clydson`, `exposely`, `grimoire`, `repertoire`,
`sanctum`) still belong to `measure-reference-tokens.py`, not to a rewrite.

## Residual: the record grammar

`takeoff` recorded a correct digest without the `sha256` keyword —
`` `preview.css` (4,250 B, `629f91aa24b0…`) `` — which the binder cannot read.
The claim was fixed by labelling it; the **shape** is still invisible to every
axis (a cell can state a digest in a form nothing parses). That is a candidate
axis: census digests that sit beside a sheet citation without the label.

The same prep also cites `assets/css/style.css` and `typography.css`, whose
URLs serve **9 B** stubs — under `fetch_sheet()`'s 200 B floor they never enter
`named`, so no identity axis can see them at all. A cited sheet that serves a
stub is a separate (unshipped) axis: the citation is not unrecorded, it is
unresolvable.

## Controls

`verify-evidence-cells-controls.py` is **55/55 (18 GATE)**. New cases:

* `c35` a bare `style.css` citation plus a recorded `css/style.css` identity is
  clean; `c35b GATE` turns `EXISTENCE_GUARD` off and the manufactured sibling
  is reported again.
* `c36` a **written** sheet with no size still raises the note — the guard must
  not hide a real gap.
* `c37` a `fonts.gstatic.com` sheet raises nothing; `c37b GATE` clears
  `FONT_HOSTS` and the per-UA sheet is reported.

Fixture pitfalls (both cost a run): `fetch_sheet()` ignores a body under 200 B,
so a short fixture CSS is silently out of scope; and two identical bodies are
content-deduped, so the phantom needs its **own** body or it vanishes for the
wrong reason.
