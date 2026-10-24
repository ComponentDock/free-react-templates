# Role-rule tokens — which RULE owns a token, not how often it is painted

`verify-slug-token-agreement.py` (`-25d`) compares two preps of ONE ColorLib
design and then asks the live demo **how often** each candidate value occurs.
52 of its 139 conflicts came back `BOTH-PAINTED`: both values are in the sheets,
so counting cannot decide. This axis reads the stylesheets as **rules** instead
of as a bag of literals, and asks which of the two candidates is declared by the
rule that *owns the role*.

```sh
python3 scripts/verify-role-rule-tokens.py                     # offline census (2 s)
python3 scripts/verify-role-rule-tokens.py --adjudicate         # network, cached
python3 scripts/verify-role-rule-tokens.py --adjudicate --cross-check   # + the -25d control
python3 scripts/verify-role-rule-tokens.py --census             # per-conflict table
python3 scripts/verify-role-rule-tokens.py --no-cascade         # guard A/B
python3 scripts/verify-role-rule-tokens-controls.py             # 32 controls / 6 GATE
python3 scripts/fix-role-rule-tokens.py --report /tmp/rrt.json --dry-run|--apply
```

## What "owns the role" means

| role | property read | selector that owns it |
| --- | --- | --- |
| `body` | `color` | `body`, `html body` (element-only) |
| `ink` | `color` | `h1`–`h6`, Bootstrap `.h1`–`.h6` — a decorated selector (`.hero h1`, `.date h6 span`) is a LOCAL heading, not the design's ink |
| `footer` | `background`, `background-color` | `footer`, any class containing `footer` |
| `brand` | `background`, `background-color` | `button`, `.btn`, `.btn-*`, `.theme-btn`, `.site-btn`, CTA classes |
| `typeface` | `font-family` | `body`, `html body` |
| `accent` | — | none: "most-used chromatic" is a **count**, not a rule (`NO-RULE`) |

A candidate value is *owned* when it appears as that property's value inside a
rule whose selector matches the role. Presence anywhere else in the sheet is not
evidence about the role.

## Measured state (`main` at the fix)

```
conflicts 121  (3,243 specs · 1,638 slugs · 853 multi-prep slugs)
  ROLE-WINNER      41   exactly one candidate is declared by an owning rule  ← the flags
  CASCADE-WINNER    7   both own; one rule out-ranks the other (specificity, then load order)
  ROLE-BOTH         4   two owning rules of equal rank paint different elements
  SCOPED-ONLY       3   `ink` exists only as decorated selectors
  ROLE-NONE        23   neither candidate is declared by an owning rule
  DRIFT            21   rebuilt 3.x skin — both preps measured the old design
  PARTIAL-COVERAGE 12   a linked stylesheet did not arrive
  NO-RULE           9   the role is `accent` (count-defined)
  DEAD-THIN         1   demo unreachable
```

### How the `-25d` residual splits (same 121 conflicts, re-decided)

| `-25d` verdict | n | → this axis | n |
| --- | --- | --- | --- |
| `BOTH-PAINTED` | 52 | `ROLE-WINNER` | **27** |
| | | `ROLE-NONE` | 10 |
| | | `CASCADE-WINNER` | 5 |
| | | `ROLE-BOTH` | 4 |
| | | `NO-RULE` (accent) | 4 |
| | | `SCOPED-ONLY` | 2 |
| `NONE-PAINTED` | 14 | `ROLE-WINNER` | 9 |
| | | `ROLE-NONE` | 4 |
| | | `NO-RULE` | 1 |
| `THIN-WINNER` | 16 | `ROLE-WINNER` | 5 |
| | | `ROLE-NONE` | 9 |
| | | `CASCADE-WINNER` | 2 |
| `DRIFT` 21 / `PARTIAL-COVERAGE` 12 | 33 | unchanged | 21 / 12 |

The nine `NONE-PAINTED → ROLE-WINNER` rows are the axis' most useful finding
about the old method: the counter demanded **≥ 3 occurrences** of a literal,
while the role is decided by ONE declaration. `.footer-05{background:#68983b}`
occurs once and *is* the footer; `body{font-family:"Poppins-Regular"}` occurs
once and its family is `Poppins` — the counter read `poppins-regular` and scored
`poppins` **0**. Frequency is a proxy; the rule is the fact.

## The 47 preps corrected

`fix-role-rule-tokens.py` appends an idempotent
`<!-- role-rule-tokens: <slug>/<role> -->` block to the losing prep's
`## Design Tokens`. The table is **never rewritten** (a sibling stream may
already have read it; the block is the evidence). 41 `ROLE-WINNER` conflicts →
47 files, because a design can have two or three losing preps.

| role | slug | preps claim | the rule declares | verdict |
| --- | --- | --- | --- | --- |
| body | autoroad | `#666666` vs `#212529` | `#666666` (later `body`) | CASCADE |
| body | bizpro | `#696f78` vs `#6f6f6f` | `#6f6f6f` | WINNER |
| body | boxus | `#727190` vs `#23214c` ×3 | `#23214c` | WINNER |
| body | construct | `#868e96` vs `#495057` | `#868e96` | WINNER |
| body | dente | `#ffffff` vs `#4d4d4d` | `#4d4d4d` | WINNER |
| body | eatwell | `#222222` vs `#b8b8b8` | `#b8b8b8` | WINNER |
| body | luto | `#404044` vs `#7d7d7d` | `#7d7d7d` | WINNER |
| body | music | `#6d6d6d` vs `#a5a5a5` | `#a5a5a5` | WINNER |
| body | steak | `#999999` vs `#212529` | `#999999` (later `body`) | CASCADE |
| body | virtualassistant | `#1a1a1a` / `#212529` / `#495057` | `#212529` | WINNER |
| brand | elearn | `#ff8a00` vs `#ff6600` | `#ff8a00` (`.button`) | WINNER |
| brand | lorahost | `#1e1859` vs `#2926ac` | `#2926ac` (`.button`) | WINNER |
| brand | louie | `#ccb78f` vs `#78d5ef` | `#ccb78f` | CASCADE |
| brand | martin | `#ffdd00` vs `#002bdc` | `#ffdd00` (`.btn-footer a`) | WINNER |
| brand | portech | `#4986fc` vs `#f96d00` | `#4986fc` (`.btn-custom`) | WINNER |
| footer | autoroad | `#3c312e` vs `#000000` | `#000000` (`.ftco-footer`) | WINNER |
| footer | bootstrap-footer-15 | `#68983b` vs `#272727` | `#68983b` (`.footer-05`) | WINNER |
| footer | bootstrap-footer-18 | `#f1f6f5` vs `#121212` | `#f1f6f5` (`.footer-08`) | WINNER |
| footer | bootstrap-footer-19 | `#2a1a5e` vs `#7c4dff` | `#2a1a5e` (`.footer-09`) | WINNER |
| footer | casahotel | `#1a1a1a` vs `#222222` | `#1a1a1a` (`.footer-section`) | WINNER |
| footer | listashop | `#e5ecee` vs `#ffffff` | `#ffffff` | CASCADE |
| footer | meal2 | `#ffffff` vs `#645f56` | `#ffffff` | CASCADE |
| ink | author | `#000000` vs `#263b5e` | `#263b5e` (`h1`–`h6`) | WINNER |
| ink | automotive | `#111111` vs `#353535` ×2 | `#111111` | WINNER |
| ink | crose | `#000000` vs `#1f1f2c` | `#1f1f2c` (`h1`–`h6`) | WINNER |
| ink | cryptian | `#ffffff` vs `#031b69` | `#ffffff` (`h6`) | WINNER |
| ink | eventalk | `#212529` vs `#000000` ×2 | `#000000` (`.h3`) | WINNER |
| ink | luto | `#303030` vs `#404044` | `#404044` | WINNER |
| ink | onedu | `#3c3b37` vs `#000000` | `#3c3b37` | WINNER |
| ink | phozogy | `#000000` vs `#111111` | `#111111` | WINNER |
| ink | pixel | `#212121` vs `#000000` | `#000000` (`h1`–`h6`) | WINNER |
| ink | resta | `#000000` vs `#001d38` | `#001d38` (`h1`–`h6`) | WINNER |
| typeface | bootstrap-sidebar-08 | poppins vs roboto | poppins | CASCADE |
| typeface | colorlib-regform-6 | arial+open sans vs poppins ×1 | Arial, Open Sans | WINNER |
| typeface | colorlib-search-17 | poppins vs lato | Lato | WINNER |
| typeface | colorlib-search-18 | poppins / roboto / lato | Lato | WINNER |
| typeface | colorlib-wizard-6 | roboto / poppins ×2 / nunito | Poppins | WINNER |
| typeface | colorlib-wizard-7 | montserrat / poppins / raleway | Raleway | WINNER |
| typeface | colorlib-wizard-8 | lato ×2 / open sans | Lato | WINNER |
| typeface | contact-form-12 | poppins ×2 / roboto | Roboto | WINNER |
| typeface | contact-form-13 | poppins vs roboto | Roboto | WINNER |
| typeface | contact-form-14 | poppins vs roboto | Roboto | WINNER |
| typeface | contact-form-v5 | inter vs poppins | Poppins | WINNER |
| typeface | inds | barlow vs roboto | Roboto | WINNER |
| typeface | lingua | montserrat / poppins ×2 | Poppins | WINNER |
| typeface | login-form-v16 | poppins vs ubuntu | Ubuntu | WINNER |
| typeface | louie | montserrat+work sans vs poppins | Montserrat, Work Sans | WINNER |
| typeface | theriver | roboto / raleway ×2 | Raleway | CASCADE |

By role: `typeface` 18 · `ink` 11 · `body` 9 · `footer` 5 · `brand` 4.

**19 of the 47 losing preps already own a shipped app** (`reflexly`, `crescent`,
`scholar`, `corkage`, `photosnap`, `contactwave`, `flux`, `techwise`, `veloce`,
`coinforge`, `forgepoint`, `learnpeak`, `regline`, `gatepost`, `flavor`,
`journeybar`, `brightoral`, `footerdash`, `touchback`). Those apps carry a value
the design never declares for that role — **app-side work for the implementer
stream, never edited from here**; the block is the evidence.

**The pattern holds from `-25d`:** Poppins is still the corpus' default guess
(11 of the 18 typeface corrections would have kept Poppins where the sheet says
Roboto/Lato/Raleway/Ubuntu). Of the 23 `ROLE-NONE` rows, 12 are `body` — the
demo's body colour is declared by a rule that neither prep recorded.

## Guards (each has a control)

| guard | why it decides | control |
| --- | --- | --- |
| `:hover/:focus/:active` is not the resting state | `.btn:hover{background:#e74c3c}` is not the CTA fill | C05 **GATE** |
| a rule inside `@media` is not the desktop state | a mobile-only `body{color}` is not the body token | C06 **GATE** |
| cascade = specificity, then **document** order | `assets_of` fetches the theme sheet FIRST; the order must come from the page's `<link>` tags | C07 **GATE**, C22 |
| cascade only between rules that target the SAME element | `h1{color}` vs `h2{color}` are two real heading colours, not a winner and a loser | C09 |
| `@font-face` / `@keyframes` bodies are not element rules | a declared face is not the body face | C15, C16 |
| a transparent `.btn-outline` never owns the fill | its `border-color` is not the brand fill | C17 **GATE** |
| `rgb()`/`rgba()` is a colour; `url()` in a shorthand does not hide the fill | hex-only counting calls 20 correct values unpainted | C13, C14 |
| a CSS comment is not a declaration | `/* body{color:#838383} */` | C19 |
| the HTML blob is never counted twice | it carries the inline `<style>` | C25 **GATE** |
| `ink` needs an UNdecorated selector | `.hero h1` is a hero heading, not the design's ink | C32 **GATE** |
| a typeface claim is a family SET | `Arial, Open Sans` owns when either face is declared | C28, C31 |
| `accent` has no owning rule | "most-used chromatic" is a count | C23 |

## Cross-check against `-25d` (sibling control)

The 20 shipped `slug-token-agreement` blocks name a surviving sibling value.
Re-deciding those pairs with this reader: **20 pairs · 13 agree · 0 disagree ·
7 undecided** (the 7 are `ROLE-NONE`: neither the old loser nor the old winner
is declared by an owning rule — e.g. `colorlib-wizard-5` brand is a surface
tint, which `-25d` already says in its own block). No shipped correction is
contradicted.

## Residual queues

1. **`ROLE-NONE` 23** (12 `body`) — the demo declares the role with a value
   neither prep states, or declares it nowhere. Each needs one manual read; the
   report carries the URL, the sheet coverage and the two values.
2. **`CASCADE-WINNER` 7** — a deterministic cascade (`body{color:#212529}` then
   `body{color:#666666}`), recorded as a note, not corrected: same-sheet order
   can be reset by a later vendor sheet, and `-25d`'s rule is that counting
   cannot *rewrite* a prep.
3. **`DRIFT` 21 / `PARTIAL-COVERAGE` 12** — the same residuals `-24a`/`-25d`
   carry: a rebuilt 3.x skin, and a sheet that did not arrive. Never "corrected".
4. **`SCOPED-ONLY` 3** — `ink` exists only as `.hero h1`-style rules; the design
   may genuinely have no global heading colour.
5. **`ROLE-BOTH` 4** — two equal-rank rules paint different elements (a light
   band and a dark band). Not fixable from the prep side.
6. **App-side debt 19** — shipped apps built from a prep this axis corrected.

## Once-only

* The `--adjudicate` network pass (121 conflicts, ~900 requests, cached under
  `/tmp/slug-token-agreement/`). Re-running is the control; a new conflict only
  appears when another prep lands for an existing slug.
* The 47 blocks are `--apply`ed; the fixer is a byte-level no-op on a second run
  (`already-recorded 47, writes 0`).

## Verification

```
verify-role-rule-tokens-controls.py     32 controls / 6 GATE   pass
openspec validate (47 edited specs)     47/47 valid
verify-provenance-grammar.py            0 flags (3,243 PARSED)
verify-spec-tokens.py                   0 shipped specs without measured tokens
verify-spec-conformance.py              0 flagged / 3,243 scanned
verify-token-conflicts.py               5 flags — 5 on origin/main (A/B: pre-existing)
fix-role-rule-tokens.py --apply         2nd run: writes 0 / already-recorded 47
```
