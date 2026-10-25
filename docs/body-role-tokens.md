# BODY-TEXT role tokens (axis shipped 2026-10-25f)

`verify-role-rule-tokens.py` (`-25e`) asked *which rule owns a token* and scoped
the body-text role to `body` / `html body` element rules. That left **23
conflicts `ROLE-NONE`** — the queue this axis takes. A manual read of each one,
against the live render, shows why the predicate could not decide them:

| # | slug | role | claims | what the render says | resolution |
| -- | ---- | ---- | ------ | -------------------- | ---------- |
| 1 | academica | body | `#838383` (brainery) · `#333333` (lectio) | `#838383`×6 light bands, `#ffffff`×6 dark bands — `p{color:#838383}` | brainery right; lectio's `#333333` is declared by **no** rule |
| 2 | bizcon | body | `#646464` (bizcraft, bizmark, consultia) · `#666666` (tradebase) | `#646464`×8 — the `p` block declares `#666666` **then** `#646464` | tradebase quotes the losing declaration in the same block |
| 3 | bizcon | footer | `#303030` (bizmark) · `#2f373d` (tradebase) | `.copyright_part` `#303030`, band `#f7f7f7` | bizmark right; `#2f373d` is the heading ink |
| 4 | boxus | brand | `#e54b76` (artbox) · `#23214c` (boxcraft) | CTA text/border `#e54b76`; `#23214c` is the page ink | artbox right |
| 5 | burger | body | `#1f1f1f` (flamepatty) · `#4d4d4d` (griddle) | `#6e6e6e`×8 — `.best_burgers_area … .info p`; element `p` is `#4D4D4D` | flamepatty's `#1F1F1F` is the heading ink and paints no paragraph |
| 6 | buri | body | `#555555` (craver) · `#828bb2` (savorly) | `#555555`×10 | craver right; `#828bb2` belongs to the `.typography` demo headings |
| 7 | civic | body | `#505259` (civichub) · `#808181` (resumeta) | `#808181`×12 | resumeta right; `#505259` paints `.single-review .qut` only |
| 8 | colorlib-wizard-21 | ink | `#333` (runemark) · `#000000` (steppr) | step titles `#000000`, form `h3` `#ffffff` | steppr right; no `.wizard-header` rule exists |
| 9 | colorlib-wizard-21 | typeface | `Open Sans` (formpilot) · `Raleway` (runemark, spellforge, steppr) | the sheet declares **Raleway only** | formpilot's face is inferred from "series convention" |
| 10 | colorlib-wizard-30 | typeface | `Poppins` (fluxgate) · `Montserrat` (formwalk, signpost) | the sheet declares **Montserrat only** | fluxgate; its own re-probe block already said Poppins occurs in no rule |
| 11 | coloshop | body | `#989898` (hapishop) · `#51545f` (shoplane) | `#51545f`×5 — `.benefit_content p`, `.newsletter_text p` out-rank `p{color:#989898}` | a rule that never paints |
| 12 | contact-form-v19 | typeface | `Open Sans` (cartofield) · `DM Sans` (jotdown) | every node resolves to `OpenSans-Regular` | cartofield right |
| 13 | dropdown-07 | ink | `#212529` (dropwell) · `#ffffff` (onboard) | `.heading-section` `#fff`, base `h2,h3` `#000`, body `#212529` | dropwell names the **body** colour in the heading role |
| 14 | hiroto | body | `#111111` (aurumstay) · `#777c81` (kasumi) | `#777c81`×12 | kasumi right; `#111111` is the `h1–h6` ink |
| 15 | luto | footer | `#302939` (gustoso) · `#303030` (mealmuse) | footer wrapper `rgb(48,48,48)` = `#303030` | mealmuse right; `#302939` paints `.colorlib-intro` |
| 16 | modal-08 | brand | `#fb8691` (dimbox) · `#007bff` (mailpuff) | button `#fb8691` | `!important` out-ranks `.cl-btn-primary{background-color:#007bff}` |
| 17 | modal-10 | brand | `#3e64ff` (poppy) · `#007bff` (popuplayer) | button `#3e64ff` | same `!important` pattern |
| 18 | modal-13 | body | `#b3b3b3` (modalrosa) · `#777777` (subbox) | `#777777`×2 — `.cl-modal-body p{color:#777}` | the modal body rule wins; `p{color:#b3b3b3}` never paints |
| 19 | modal-14 | body | `#777777` (dealbounce) · `#b3b3b3` (modalnova) · `#000000` (popgift) | `#777777`×3 | popgift's row states `#000` headings **and** `#777` paragraphs — a false positive of the conflict detector |
| 20 | modal-18 | body | `#777777` (modalbreeze) · `#666666` (modaloffer) | `#777777` — `.cl-modal-body p{color:#777}` | modaloffer right about nothing: no `#666666` rule exists |
| 21 | modal-19 | body | `#b3b3b3` (critique, piazza, splitmodal) · `#777777` (reviewcard) | `#777777`×2 | reviewcard right; the three others quote the losing `p` rule |
| 22 | sportify | brand | `#ff0e3b` (prowess) · `#7800ff` (sportsclub) | outline CTA + active dot `#ff0e3b` | prowess right; `#7800ff` is the hero slider overlay |
| 23 | travelers | body | `#1e293b` (jetpath) · `#333333` (passport) · `#25262a` (wanderer) | body `#4d4d4d`, no `p` rule at all | all three name colours that paint something else (a surface, a footer, a hover) |

Totals: **55 claims · 51 preps · 23 conflicts**; 27 corrections recorded across 26
preps, 1 false positive (popgift), 6 preps own a shipped app (their app delta stays
implementer debt — `apps/` untouched).

## The taxonomy this axis adds

| class | what it means | example |
| ----- | ------------- | ------- |
| `NO-RULE` | the claim is declared by no p-targeting rule in any linked sheet | lectio `#333333` |
| `EARLIER-DECL` | the claim sits in the same block **before** the colour that wins | tradebase `#666666` → `#646464` |
| `LOSES-RULE` | the claim is a real rule, out-ranked by a more specific one, so it paints nothing | hapishop `#989898` |
| `MATCH-SCOPED` | the claim paints, but only via a scoped rule — the element `p` rule says something else | modal-19 `#777` via `.cl-modal-body p` |
| `MATCH-BODY` | no p rule exists; paragraphs inherit the body colour | travelers `#4d4d4d` |
| `MATCH-WINNER` / `MATCH-ELEMENT` | the claim is what paints | brainery `#838383` |

**The render decides; the sheet attributes.** A census (how often a literal
occurs) cannot separate these five cases, and neither can a rule-owner predicate
that never looks at a paragraph: `p{color:#b3b3b3}` *is* the body-text rule by
the `-25e` definition and still paints nothing on a page whose paragraphs all sit
inside `.cl-modal-body`.

## Guards that decided the fixes (each a control)

| guard | why | ctrl |
| ----- | --- | ---- |
| later declaration in the same block wins | bizcon ships `#666666; color:#646464` | C03 **GATE** |
| a more specific scoped rule out-ranks the element rule | the modal family | C04 **GATE** |
| `@media`-only rules are not the desktop value | a mobile `#51545f` never paints at 1440 | C06 **GATE** |
| a colour inside a CSS comment is not a rule | census noise | C09 **GATE** |
| inheritance from `body` counts when no `p` rule exists | travelers | C10 **GATE** |
| a rule that paints nothing is a loser, not a winner | hapishop | C11 **GATE** |
| an element rule that *does* paint is not a loser | burger's `#4d4d4d` still paints one paragraph | C12 **GATE** |
| `p a{…}` does not claim the paragraph colour | menu/list selectors | C13 **GATE** |
| `#777` ≡ `#777777` ≡ `rgb(119,119,119)` | 3-digit hex is the modal family's real spelling | C07 **GATE** |

## What was written and where

* `scripts/verify-body-role-tokens.py` — read-only checker (`--json`,
  `--only`, `--slugs` sweep guard, `--measured`, `--offline`).
* `scripts/verify-body-role-tokens-controls.py` — 15 mutation controls
  (13 GATE).
* `scripts/measure-paragraph-colours.mjs` — the render side (Playwright, node;
  the Python package is not installed here).
* `scripts/fix-body-role-tokens.py` — writes the verdict into the prep as an
  idempotent `<!-- body-role-tokens: <slug>/<role>/<spec> -->` block. **The token
  table is never rewritten** (house rule from `-25e`): a prep is a historical
  statement and another stream may already have read it. Second run: `writes 0`.

## Next queues

1. `MATCH-BODY` is empty because only the 12 ROLE-NONE body slugs were measured —
   a full-corpus render pass (444 slugs with a body-text row) would settle the
   same five classes everywhere. Sweep in batches of ~50: a wide probe sweep
   trips the Cloudflare wall (measured 2026-10-13b).
2. The **ink** role has the same blind spot: `h1,h2,h3{color:#000}` loses to
   `.heading-section{color:#fff}` on the very band a spec screenshots
   (dropdown-07). A `verify-heading-role-tokens.py` would be the next axis.
3. `CASCADE-WINNER` 7 / `DRIFT` 21 / `PARTIAL-COVERAGE` 12 from `-25e` are still
   open; the app-side debt list is 6 preps here (lectio, jetpath, jotdown,
   dropwell, modalrosa, splitmodal).
4. Still open from `-25c`: `NO-CHECKBOX-GRAMMAR` 1,139, `NO-TASK-FILE` 378,
   `NO-BRIEF-SLUG` 82, `NO-APP-SLUG` 34.
