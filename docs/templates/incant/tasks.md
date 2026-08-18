# Incant (ColorLib Wizard 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-incant`. Recreation name: **Incant** (NEW
> name — the ColorLib source keeps its name "Colorlib Wizard 18").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 18" (TEMPLATES.md line 855; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-18/` slug appears exactly ONCE in
  TEMPLATES.md (verified `grep -c` = 1 — no dup rows to reconcile).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-18/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch +
  browser):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-18/index.html`**
  (HTTP 200, 10,069 bytes, 152 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-18/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html`. Do not redo
  this lookup.
- **Stylesheets:** `css/style.css` (20,479 B, ~580 lines — ALL custom
  CSS, SCSS-compiled) + zmdi icon font (star glyph `\f27d` → lucide
  Star, do NOT ship). Fonts: local Poppins 300–700 + Montserrat 300–900
  @font-face → **Google Fonts `<link>`: Poppins 400;500;700,
  Montserrat 700;900** (others loaded by the CSS are unused by the
  demo).
- **Scripts:** jQuery, jquery.validate + additional-methods (LOADED but
  NEVER initialized — no gating), jquery.steps (fade, labels
  Prev/Next/Submit), `js/main.js` (1,573 B — steps init with
  onStepChanging gradient swap + `alert('Sumited')` on finish; also a
  DEAD `.toggle-password` handler inherited from another demo — do NOT
  add password fields).

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-18.jpg`, 1200×972 AVIF) + live page

Browsed visually in the browser 2026-08-18 (screenshot matches the live
page). Visual: LIGHT-GREY `#f8f8f8` page with a single WHITE card (990px,
rounded, soft shadow) centered. Inside: LEFT a circular flat illustration
of a smiling man with glasses in a blue suit + red tie surrounded by
speech bubbles (red bubble with stars, yellow bubble with an eye, blue
bubble with a quote); RIGHT the heading "What do you think about AU
services?" and five labelled rows each with five star outlines. Top-right
of the card a TEAL circle badge reads "01/03". Bottom right a solid TEAL
"Next" button (white text). Aesthetic: clean, friendly, flat — a customer
survey/feedback flow; the family's "feedback" member. ONLY THREE images
(the per-step flat illustrations) — everything else is CSS + the zmdi
star glyph. No navbar, no footer content in the source.

### The three step illustrations (viewed individually, 2026-08-18)

- `signup-img-1.png` (223×223): flat vector — smiling man with glasses,
  blue suit, on a circular disc, surrounded by speech bubbles: RED
  bubble with stars, YELLOW bubble with an eye, BLUE bubble with a
  quotation mark. → step 1 (review/rating theme).
- `signup-img-2.png` (236×232): flat vector — thumbs-up hand (skin
  tone, dark-blue sleeve) with a RED megaphone, a light-blue speech
  bubble with text lines, two yellow envelopes, two small red hearts,
  on a light-blue disc. → step 2 (feedback/communication theme).
- `signup-img-3.png` (225×236): flat vector — white/light-grey rocket
  with RED nose cone + fins, cyan porthole, light-blue exhaust clouds,
  on a dark-navy disc, with yellow / orange / white four-point
  sparkle stars. → step 3 (launch/submit theme).

### Live-computed confirmations (fetch + browser, 2026-08-18)

- body: `#f8f8f8`, Poppins 14px/1.6, `#222`, 500; `.main` padding
  185px 0.
- `.container`: 990px, `margin: 0 auto`, `#fff`, radius 10px, shadow
  `0px 5px 9.5px 0.5px rgba(0,0,0,0.08)`; ≤992px `calc(100% - 40px)`.
- `.signup-form`: padding `0 110px 0 85px`, position relative (the
  badge anchors to it).
- `.step-current`: 110px circle, absolute top −30px right −35px,
  `#43d7ba`, white Montserrat 900 17px; `.step-number` 33px +
  "/03"; inner `.step-inner` gradient: step-1 `#43d7ba 70% → #1abc9c
30%`, step-2+ `#43d7ba 50% → #1abc9c 50%` (180deg).
- `.fieldset-flex`: flex, align-items center, space-between; `figure`
  margin-left 10px, margin-bottom −126px; `.fieldset-content` 443px;
  `fieldset.current` padding-top 95px; `.content` height 410px.
- `.steps`: `display: none` (NO step tabs rendered) — the circular
  badge is the only progress indicator.
- h2 + .form-label: Poppins bold 22px `#222`; h2 padding-bottom 35px,
  label padding-bottom 15px.
- Inputs/textarea: width 100%, height 50px (textarea 178px), border
  1px `#ebebeb`, radius 5px, padding 10px 20px, Poppins 14px bold,
  placeholder `#999` 500, focus border `#1abc9c`.
- `.form-row`: margin 0 −10px; `.form-group` 50% + padding 0 10px;
  `.form-group` margin-bottom 20px.
- .form-rating stars: labels float right 1em, 20px, `#ebebeb`, zmdi
  `\f27d`; `input:checked ~ label` + hover → `#fbd91b`; `label:active`
  top 2px left 2px. **Source ships `checked` on radios 5/4/3 in every
  row → last-wins = value 3 → 3 stars lit on load (3 left-most).**
- Buttons 140×50, radius 5px, Montserrat 900; Next/Submit `#1abc9c` +
  white (hover `#148f77`); Previous `#f8f8f8` + `#999` (hover
  `#dfdfdf`); `.actions` padding-bottom 110px, flex-end, li
  margin-left 10px; `.disabled` display none (step 1).
- Steps: `transitionEffect: fade`; h3 titles EMPTY; labels
  previous 'Prev' / next 'Next' / finish 'Submit' (button reads
  "Submit" on step 3).
- No validation gating — verified live pattern (same as w13/w17):
  Next advances with empty fields.
- Breakpoints: ≤992 container fluid + `.content` 650px +
  `.fieldset-flex` column + figure margin-left 0 / margin-bottom 20px +
  form padding 55px 30px; ≤480 action buttons 100px.

## Build order (implementation outline)

1. **Scaffold + tokens:** copy the simplest existing app (`apps/<name>`),
   rename package to `@free-react-templates/incant`, CNAME/homepage
   `https://incant.free.componentdock.com`, `npm install` at root so
   the lockfile registers the workspace. `index.css` `@theme` tokens
   from the spec's Design tokens table (`--color-accent #1abc9c`,
   `--color-accent-light #43d7ba`, `--color-accent-dark #148f77`,
   `--color-star #fbd91b`, `--color-star-idle #ebebeb`, page/card/ink/
   muted); Google Fonts Poppins 400;500;700 + Montserrat 700;900 in
   `index.html`.
2. **Components (suggested files under `src/components/`):**
   - `Wizard.tsx` — the 3-step engine (current step state, fade
     transition, step registry, Prev/Next/Submit actions). Labelled
     region. NO validation gating. On finish swaps to `Success`.
   - `StepBadge.tsx` — the circular 110px badge: "01/03" text (number
     33px) + inner gradient disc (70/30 on step 1, 50/50 on steps
     2–3), anchored top-right half-outside the card. Exposes "Step N
     of 3" to assistive tech.
   - `RatingRow.tsx` — label + 5-star control (lucide Star; controlled
     state, preselect 3, hover + click rules; expose as radiogroup or
     star buttons with aria-checked; tooltip strings Rocks!/Pretty
     good/Meh/Kinda bad/Sucks big time).
   - `StepIllustration.tsx` — one component rendering the three flat
     SVG scenes keyed by step (happy reviewer / thumbs-up / rocket —
     see Section-by-section notes below).
   - `StepContent.tsx` — the 443px right column: heading/label + field
     set per step (rating rows / textarea / info fields).
   - `Field.tsx` — shared input (50px, 1px `#ebebeb` border, 5px
     radius, 10px 20px padding, Poppins 14px bold, `#1abc9c` focus
     border).
   - `Success.tsx` — inline confirmation replacing the form on submit.
   - `Footer.tsx` — Component Dock credit link.
3. **State:** keep ratings/review/info lifted to Wizard (or keep steps
   mounted with `hidden`) so values persist across step changes.
4. **Shell:** `#f8f8f8` body, `.main` 185px padding, 990px white card
   with shadow + 10px radius, responsive stacking ≤992.

## Section-by-section fidelity notes

- **Step badge:** unique in the family — a floating circle, NOT a text
  indicator. Number grows to 33px (the "/03" stays 17px). The gradient
  inner disc is subtle (light teal → teal); render it exactly (180deg,
  70/30 then 50/50). Anchor to the form container's TOP-RIGHT, half
  outside (−30px/−35px), z-index above the card.
- **Copy:** fix the source's obvious typos (documented): "Custormer
  Support" → "Customer Support"; "What do you think about AU services ?"
  → normal punctuation; paraphrase "AU services" as "our services"
  (the "AU" brand is meaningless outside this demo). Keep "Your
  Review", "Enter your information manually below", placeholders, and
  the star tooltips (Rocks! / Pretty good / Meh / Kinda bad / Sucks
  big time) as-is.
- **Rating default:** preselect rating 3 on every row (matches the
  source DOM's 3x-checked last-wins behavior). Note the screenshot's
  grey-star look is a pre-interaction capture quirk — CSS says 3 lit.
  Rows are INDEPENDENT radio groups.
- **No gating:** do NOT add validation — the source loads jquery.validate
  but never initializes it; verified Next advances with empty fields.
  No error states.
- **Buttons:** "Previous" grey (`#f8f8f8`/`#999`, hover `#dfdfdf`) +
  "Next" teal; on step 3 the right button reads "Submit". Previous
  hidden on step 1. Use real <button>s (a11y; source uses anchor
  styling) with focus-visible rings.
- **Illustrations:** source PNGs are FLAT VECTOR scenes on circular
  discs — recreate as inline SVG components (do NOT use picsum photos;
  a photo would break the flat aesthetic). Compose with lucide where
  possible (Star, Quote, Eye, Mail, Heart, Megaphone, Rocket, Send)
  or hand-draw simple shapes: step 1 = man-with-glasses + 3 speech
  bubbles (red/star, yellow/eye, blue/quote) on a light disc; step 2 =
  thumbs-up hand + red megaphone + light-blue speech bubble + 2 yellow
  envelopes + 2 red hearts on a light-blue disc; step 3 = rocket
  (white body, red nose+fins, cyan porthole, light-blue exhaust) on a
  dark-navy disc with 3 four-point sparkles (yellow/orange/white).
  ~223–236px; the step row uses a negative bottom margin so the art
  hangs over the actions area — reproduce the visual overlap.
- **Dead code:** the `.toggle-password` handler in the source main.js is
  leftover from w17-style sibling demos — NO password fields in this
  template; do not add them.
- **Finish:** inline success message ("Thanks — your feedback was
  submitted!"), NO alert, NO fake network.
- **Step titles:** h3s are EMPTY in the source and the tab nav is
  hidden — do not invent step names; the badge ("01/03") is the only
  indicator.

## Picsum plan

NONE — this template has no photographic imagery. The only images are the
three per-step FLAT VECTOR illustrations, recreated as inline SVG (see
above). (Family note: Beguile/w16 and Mesmerize/w17 needed photo/vector
plans; Incant is purely CSS + SVG + lucide icons.)
