# Brief ↔ spec over the unshipped preps — does the brief name the design its spec does?

Two provenance layers exist for every template:

- the **spec** — `openspec/specs/template-<name>/spec.md` (the claim marker);
- the **brief** — `docs/templates/<name>/design-notes.md` + `tasks.md` (+ `todo.md`,
  `notes.md`, `README.md`, `outline.md`), the layer an implementer actually reads.

`docs/docs-source-drift.md` compares them for the **1,703 shipped apps** and was
driven to 0 flags on 2026-10-24. It iterates `apps/`, so the rest of the brief
corpus — **1,533 `docs/templates/<name>/` directories whose `<name>` is not an
app** — was never judged by any axis. That is where the queued "spec ↔ brief
without the app" axis lives.

```
python3 scripts/verify-brief-spec.py           # offline census, 0 flags = clean
python3 scripts/verify-brief-spec-controls.py  # 15/15 controls (4 GATE)
```

## Three populations, one bucket each

| population | count | why it exists |
| --- | --- | --- |
| `UNDER-*` (carries `<!-- prep-status: shipped-as=… -->`) | 1,418 | prep history for a design that shipped under another name (renames, row-multiplicity, duplicate preps) — 1,408 at batch-1 start, +10 once the spec-less dirs were marked |
| `PENDING-*` (has a spec, no app) | 115 | surplus preps — the next thing an implementer could pick up |
| `ORPHAN` (brief, no spec, no marker) | 10 → 0 | a prep artifact with no claim marker (AGENTS.md rule 2); all ten are now `shipped-as=` |

Buckets:

| bucket | meaning |
| --- | --- |
| `UNDER-AGREE` | brief and the target app's spec name the same design |
| `UNDER-DRIFT` | brief names another design than the target's spec → **flag** |
| `UNDER-BRIEF-SILENT` | brief names no design at all (note) |
| `UNDER-TARGET-MISSING` | `shipped-as=` names an app that does not exist → **flag** |
| `UNDER-TARGET-SILENT` | the target's spec names no design → **flag** |
| `PENDING-AGREE` | no app, spec exists, brief and spec agree |
| `PENDING-DRIFT` | brief names another design than the spec → **flag** |
| `PENDING-BRIEF-SILENT` | brief names no design (note) |
| `PENDING-SPEC-SILENT` | brief names a design, spec names none → **flag** |
| `ORPHAN` | brief, no spec, no `shipped-as` marker → **flag** |

A `shipped-as=a,b` list is legal: several ColorLib designs were recreated more
than once (row-multiplicity), so the brief is right if it names **any** listed
target. `shipped-as` must name **apps**, not specs — the first run of this batch
listed `crumple`/`clover`, `surge`/`nucleus`/`atolite` and
`squeakly`/`sudswell`/`polish`, which own specs but no app; only `fanfold`,
`proton` and `tidywash` ship.

## Guards that keep the flags real

- **Family spelling.** `login-form-v16` ships as `Login_v16`, `contact-form-v10`
  as `ContactFrom_v10` (ColorLib's own typo). Without normalisation five correct
  briefs flag.
- **A page file is not a design.** `/theme/tattooz/tattoo/index.html` names
  `tattooz`; the `tattoo` page directory is not the design and `index` is not one
  either.
- **Numbered siblings are never normalised** (`calendar-12` ≠ `calendar-14`) —
  the docs-source control c05 keeps that honest.

## Batch 1 — 24 flags → 0 (2026-10-24)

| prep dir | bucket | was | measured fix |
| --- | --- | --- | --- |
| `cruiseo` | UNDER-DRIFT | `drivego` (`carrentals`) | header → `fleetly` (`car-rental`). `theme/carrental/` = 200, 33,626 B, `<title>` "Car Rentals — Car Hire by the Day or Week"; `theme/car-rental/` = 404 (9 B); `theme/carrentals/` = 200, 34,955 B but that is drivego's design. Live demo is now a 3.0.2 rebuild (`css/style.min.css?v=3.0.2`, 193,438 B, sha `dc16f2fe…`), so the gold `#F9A826` prep tokens come from the screenshot, not the sheet. |
| `tidecrest` | UNDER-DRIFT | `pavilion` (`marian`) | header → `havenshore` (`ocheandeview`), the same target the sibling Ocheandeview prep records |
| `vesture` | UNDER-DRIFT | brief body = Ashion | banner: the `vesture` line is **Fashe** (`apps/drape`); the Ashion notes stay as history, and `docs/templates/drape/design-notes.md` is the authority. No spec names Ashion, and Ashion never shipped |
| `btnvault` | UNDER-DRIFT | `todo.md` said `bootstrap-buttons-02` | `bootstrap-buttons-07` (header, README, tasks and `template-btnflare` all read 07; `-02` is `btnsmith`/`pushpad`). `/wp/template/bootstrap-buttons-07/` = 200 (114,428 B), the nested `/wp/template/bb/…` form 301 |
| `calflow` | UNDER-DRIFT | `todo.md` said `calendar-12` | `calendar-14` (`template-caldesk`); `https://colorlib.com/wp/template/calendar-14/` = 200 (113,648 B) |
| `coral`, `jewel`, `mist`, `onyx`, `umbra`, `wisp`, `zephyr` | PENDING-SPEC-SILENT | spec named no design | measured provenance block added; the family demo is `colorlib.com/etc/404/<slug>/` (200) and `/theme/<slug>/` is 404 (9 B) |
| `nuzzle`, `whelp` | PENDING-SPEC-SILENT | spec named no design | measured provenance block added (`theme/anipat/` 26,404 B, `theme/breed/` 35,184 B, theme sheets 138,426 B / 15,560 B) |
| `archi`, `elena-voss`, `eventor`, `financeflow`, `hvac`, `lamellar`, `major`, `neuralflow`, `photon`, `sweeply` | ORPHAN | brief with no spec, no marker | marked `shipped-as=` the app that ships that design (`keystone`, `shutter`, `podium`, `ticker`, `clutch,aeroworks`, `fanfold`, `wavecrest`, `sentient`, `proton`, `tidywash`) with an explicit "no spec ⇒ do not scaffold" banner |

Off-diagonal findings batched into the same commit:

- **`verify-docs-source.py`'s declaration tier was dead.** `LABELED` demanded a
  backtick straight after `**`, but the house spelling is
  `- **Source slug:** `x`` (colon inside the bold, space before the backtick), so
  the "declared slug outranks an incidental URL" rule did not fire at all on that
  spelling, so the first URL in the header decided the identity. Measured over
  8,271 specs+briefs: old pattern **88** matches, fixed pattern **572**. The
  pattern now accepts bold-colon / colon-bold / bare forms.
- **`last_seg()` read the page, not the design.** `wp/template/bb/…` gave the
  family (`bb`), `theme/tattooz/tattoo/index.html` gave `tattoo`, and
  `theme/fashe/assets/css/style.css` would have given `style.css`. The design is
  now the first segment after the family root (family dirs are transparent).
- **`verify-docs-source-controls.py` c11** asserted `medical`, which the naming
  stream renamed to `verdia` (#1844); it now asserts `verdia`.
- The docs-source axis still reads **0 flags** (1,699 `AGREE`, 3 `ROW-MULTI`,
  1 `DOC-SILENT`) and its controls **15/15** after both extractor fixes, so the
  shipped-apps verdict is unchanged by the widening.

## See also

`docs/brief-file-consensus.md` — the same corpus read the other way: every
`*.md` in a brief dir, not just the first one that names a design. A second file
naming a *different* design (a leftover from an earlier prep of the same invented
name: `craftfolio/todo.md` said Beckham over a Steve spec) is invisible to both
axes above and is that axis' flag.

## Residual (deliberately not a flag)

- `UNDER-BRIEF-SILENT` 65 + `PENDING-BRIEF-SILENT` 3: the brief names no design.
  Most are task outlines that defer to the spec, which does name it. Making that
  a flag would punish a legitimate shape; a batch could add a
  `- **Source slug:**` line to them if the house ever wants it.
- `ROW-MULTI` (hvac ⇒ `clutch` + `aeroworks`): both apps are real, both specs
  name the same design, so the brief is right either way.
