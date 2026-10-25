# HEADING-INK role tokens (axis shipped 2026-10-25g)

`verify-role-rule-tokens.py` (`-25e`) asked *which rule owns* the ink role and
scoped it to `h1..h6` element rules; `-25f` showed the same blindness on the body
role. This axis takes the ink side of that queue: **is the colour a prep calls
the heading ink the one the live page's headings actually paint?**

Work product: `scripts/verify-heading-role-tokens.py` (+ `-controls.py`,
**18 controls / 17 GATE**), `scripts/measure-heading-colours.mjs`,
`scripts/fix-heading-role-tokens.py` (85 verdicts, idempotent — second run
`writes 0`), 80 preps carry a `<!-- heading-role-tokens: … -->` block.
`apps/` untouched, no `TEMPLATES.md` marker, no `package-lock.json`.

## Corpus

683 heading-ink claims across **470 slugs**, taken from token rows whose LABEL
unambiguously names heading TEXT (`ink`, `heading color/colour`, `heading ink`,
`heading text`, `headings`, `heading`, `section heading`, `section title`, `h1`,
`h2`, `hero heading`, `hero h1`, `text-heading`, `heading-color`, `ink text`,
`primary ink`, `--color-ink`, `--color-heading`) **and** whose value cell carries
a colour literal. Labels that name a font, size, weight or a *surface*
(`heading font`, `heading size`, `--font-heading`, and the 271-row house label
`ink / dark surface`) are deliberately out of the corpus: that row states a
dark band ground as often as an ink, and mixing them is how a role census turns
into a guess.

## Buckets (one per claim)

Two passes: an **offline screen** over all 683 claims (sheets + cascade, no
render) and the **measured verdict** after `measure-heading-colours.mjs` ran on
the 366 suspect slugs. The screen decides which slugs need a render; only the
render decides a flag.

| bucket | pass | meaning | claims |
| ------ | ---- | ------- | ------ |
| `NO-MEASURE` | screen | no heading-targeting rule declares the claim — render needed | 322 |
| `DECL-SHADOWED` | screen | declared, but a class/scoped rule with higher specificity out-ranks it — render needed | 234 |
| `DECL-SCOPED` | screen | declared only by scoped heading rules (`.hero h1`) | 110 |
| `DECL-ELEMENT` | screen | declared by an element rule (`h2{…}`) | 8 |
| `EARLIER-DECL` | both | a later `color` in the SAME block supersedes the claim | **9** |
| `MATCH-WINNER` | measured | the claim is what the rendered headings paint | 205 |
| `MATCH-CLASS` | measured | the claim paints, but only via a class/scoped heading rule (`.heading-section`) while the element rule says something else | 33 |
| `MATCH-RENDER` | measured | painted, but no heading rule declares it (inherited) | 24 |
| `DECL-SCOPED` / `DECL-ELEMENT` | measured | claim declared, and the headings do paint it | 82 + 7 |
| `NO-RULE` | measured | no heading-targeting rule declares the literal, and no heading paints it | **53** |
| `LOSES-RULE` | measured | the rule declaring the claim does not win anywhere the headings render | **22** |
| `BODY-INK` | measured | the claim is the page's paragraph/body colour, not an ink | **3** |
| `NO-HEADING` | measured | the page has no `h1–h6` at all (snippet demos): the row names a heading-ish surface | 5 |
| `DEAD-PAGE` | measured | no stylesheet and no heading arrived: the URL is not a live page | 181 |
| `NO-MEASURE` (residual) | measured | claim on a slug that was not rendered (see *Next queues*) | 59 |

**87 flags / 69 slugs / 80 preps.** The render decides; the sheet attributes.

## The defect classes this axis separates

| class | what it means | measured |
| ----- | ------------- | -------- |
| `FRAMEWORK-DEFAULT` | the row states the framework's own body colour as the ink — `#212529` is Bootstrap 5's `$body-color`, and it sits on `body`, `pre`, `.table`, never on a heading | **11** of the 53 `NO-RULE` claims are `#212529`; 30 are the near-black family (`#212529`, `#343a40`, `#111827`, `#1a1a1a`, `#333333`, `#000000`) |
| `INVENTED-INK` | the literal occurs in no sheet, no inline `<style>` and no `style=""` on the page at all | **21** claims (`unsupported`) |
| `ROLE-MISPLACED` | the literal is real but belongs to another role: brand/nav (`.navbar-brand`, `.btn-primary`), a dropdown, a form control | **32** claims |
| `LOSES-RULE` | the rule exists but never paints — a scoped rule out-ranks it wherever headings render | **22** claims, 15 of them declared on a bare `h1`/`h3` |
| `LOCAL-HEADING` | the losing rule is a *local* decorated heading — `.ftco-footer .ftco-heading-2`, `.elements-page .elements-heading .entry-title`, a schedule-table `td h4`, a slider caption, or `.wizard-header h3` (in **no** sheet at all) — not the design's ink | **7** of the 22 `loses` |
| `EARLIER-DECL` | the same block declares the claim and then a winner (`.product_description_area … .box_total h6{color:#2a2a2a;color:…}`) | **9** claims |

Four rules that decided most of the verdicts:

* **`#212529` is not an ink measurement.** It is what every Bootstrap 5 ColorLib
  rebuild puts on `body`; a prep that copies it into the heading row has
  transcribed the framework, not the design (`careers`, `smash`, `roofing`,
  `confpeak`, `yogabest`, `amicus` …).
* **A rule written in `rgb()` or `#000000cc` is a rule.** `careers` declares its
  ink as `rgb(23,36,62)` via `--ed-ink`; a hex-only reader saw "no ink rule" and
  produced a false `NO-RULE`. The parser now resolves `var(--x)` from
  `:root`/`html` blocks and strips the alpha channel — controls C17/C18.
* **A heading with no box is not ink.** The render counts only headings with a
  painted box (`height>0`, visible, non-empty text) after a scroll sweep: hidden
  mobile menus and inactive carousel slides are structure, not colour.
* **`headingTotal == 0` is two different facts.** With no stylesheet either, the
  URL is dead (`DEAD-PAGE`, 181 claims — a URL-semantics problem, not an ink
  problem, and `verify-unreachable-claims.py` owns that axis). With stylesheets
  present, the demo simply has no `h1–h6` (snippet families: `NO-HEADING`).

## Reusable family findings

* **`dropdown-07` / `dropwell`** — `h2,h3{color:#000}` loses to
  `.heading-section{color:#fff}` on the band the row screenshots, and `#212529`
  is the body colour. The `-25e` ROLE-NONE flag is confirmed by the render.
* **`colorlib-wizard-21` / `runemark`** — step titles render `#000000`,
  `.inner h3` is `#ffffff`, and `.wizard-header h3` exists in **no** sheet. `#333`
  is unsupported (the `-25f` body-axis read, now also an ink-axis read).
* **`fotograp`** — all three preps (`fotocast`, `snapvault` × 2 claims) state
  `#000` / `#25262a`; the page paints `#ffffff×13` and `#191919×11`, and `#000`
  occurs nowhere. A three-prep family can be wrong together.
* **`careers`** — 21 headings render `#17243e` (`--ed-ink`); `jobcraft` and
  `talently` both claim `#000`.
* **`schmidt`**, **`reopen`**, **`notary`**, **`onemusic`** — the claimed
  `--color-ink`/`--color-heading` is one step away from the truth
  (`#1a1a1a`→`#222222`, `#222222`→`#333333`, `#999999`→`#364d59`,
  `#000000`→`#111111`): the near-black was plausible, not measured.

## Guards (each a control)

later-declaration-wins (C07 GATE) · class-heading out-ranks `h2,h3` (C04 GATE) ·
element rule that also paints is not a loser (C15 GATE) · `@media`-only ink is
not the desktop value (C08 GATE) · comment-only hex is not a rule (C09 GATE) ·
`h1 a{}` does not claim the ink (C11 GATE) · `@font-face`/`@keyframes` bodies are
not rules (C12 GATE) · inherited body colour with no heading rule (C14 GATE) ·
`#333` ≡ `#333333` ≡ `rgb(51,51,51)` (C10) · `rgb()` rule visible (C17 GATE) ·
8-digit alpha hex == 6-digit (C18 GATE) · body colour in the ink role is
`BODY-INK`, not a match (C03 GATE).

## What was written and where

* `scripts/verify-heading-role-tokens.py` — read-only checker (`--json`,
  `--only`, `--slugs` sweep guard, `--measured`, `--offline`).
* `scripts/verify-heading-role-tokens-controls.py` — 18 mutation controls
  (17 GATE).
* `scripts/measure-heading-colours.mjs` — the render side (Playwright, node; the
  Python package is not installed here).
* `scripts/fix-heading-role-tokens.py` — the 85 measured verdicts as an
  idempotent `<!-- heading-role-tokens: <slug>/ink/<spec> -->` block. **The token
  table is never rewritten**; the block states what the literal is declared by
  and what the headings paint, never a guessed replacement.

## Next queues

1. `ROLE-MISPLACED` 32 and `LOCAL-HEADING` 8 are recorded but not "fixed" in the
   tables — a rewrite of the row would be a second historical statement; the
   app-side delta (if any) is implementer debt.
2. The **`ink / dark surface`** row (271 rows) is still unread by any axis: it
   mixes a heading ink with a dark band ground. It needs its own predicate
   (surface vs text) before it can be flagged.
3. Full-corpus render pass: **366 of 470 slugs** were rendered here; the residual
   59 `NO-MEASURE` claims sit on the ~104 slugs that were not (mostly snippet
   families and dead URLs), and the 181 `DEAD-PAGE` claims need the URL axis,
   not this one.
4. Open from `-25f`: `CASCADE-WINNER` 7 / `DRIFT` 21 / `PARTIAL-COVERAGE` 12,
   `NO-CHECKBOX-GRAMMAR` 1,139 / `NO-TASK-FILE` 378 / `NO-BRIEF-SLUG` 82 /
   `NO-APP-SLUG` 34, and the 6 app-side preps (lectio, jetpath, jotdown,
   dropwell, modalrosa, splitmodal).
