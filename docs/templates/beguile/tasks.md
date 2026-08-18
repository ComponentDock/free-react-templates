# Beguile (ColorLib Wizard 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-beguile`. Recreation name: **Beguile** (NEW name —
> the ColorLib source keeps its name "Colorlib Wizard 16").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 16" (TEMPLATES.md line 853; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-16/` slug appears exactly ONCE in
  TEMPLATES.md (verified `grep -c` = 1 — no dup rows to reconcile).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-16/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch + browser):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-16/index.html`**
  (HTTP 200, 8,885 bytes, 183 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-16/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html`. Do not redo
  this lookup.
- **Stylesheets:** `css/style.css` (21,015 B, 756 lines — ALL custom CSS,
  SCSS-compiled) + zmdi icon font (`\f26b` check, `\f2f9` chevron-down →
  lucide, do NOT ship). Fonts: local Roboto Slab 300/400/700 @font-face →
  **Google Fonts `<link>` (400, 700 — 300 unused by the demo CSS)**.
- **Scripts:** jQuery, jquery.validate + additional-methods (ACTIVE:
  username required, email required+format, onfocusout; all other
  messages emptied), jquery.steps (slideLeft, labels Previous/Next/
  Submit, titleTemplate = numbered circle + title), dobpicker (binds the
  expiry selects — see anomaly), jquery.pwstrength (password meter),
  `js/main.js` (2,440 B — validate init + steps init + dobPicker init +
  pwstrength init + fake-path file-upload label + alert('Sumited') on
  finish).

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-16.jpg`, 1200×972 AVIF) + live page

Browsed visually in the browser 2026-08-18 (live page rendered client-side
by jQuery Steps; screenshot matches). Visual: background = lifestyle photo
of three women laughing with drinks in front of a grey/white abstract
graffiti wall (green foliage upper right), heavily BLURRED and washed in
teal/seafoam green; a clean WHITE 850px card centered with a soft grey
drop shadow; uppercase dark centered header "SIGN UP TO GREAT NEW
ACCOUNT"; three numbered CIRCLE step tabs (step 1 dark/filled, steps 2–3
grey outlined) labelled Account Information / Personal Information /
Payment Details; Step 1's form fields with light-grey borders and dark
labels; small grey "Step 1 of 3" bottom-left; rectangular TEAL "Next"
button bottom-right. Aesthetic: modern, minimalist, clean — the family's
teal counterpart to Bewitch's (w13) orange. **Exactly ONE photo (the body
background) — everything else is CSS + the zmdi icon font + three payment
brand PNGs (not shipped).** No navbar, no footer content in the source.

### Live-computed confirmations (fetch, 2026-08-18)

- body: `background-image: url(body-bg.jpg)` (1900×1276, cover, center),
  Roboto Slab 14px/1.6, `#222`; `.main` padding 95px 0.
- `.container`: 850px, `#fff`, radius 10px, shadow
  `0px 5px 9.5px 0.5px rgba(0,0,0,0.1)`; ≤992px `calc(100% - 40px)`.
- h2: 20px bold uppercase centered `#222` padding-top 35px.
- Inputs/selects/textarea: 1px `#ebebeb` border, radius 5px, padding
  15px 20px, 14px bold, width 345px (textarea 534×150); placeholder
  `#999` weight 400; labels 155px right-aligned, margin-right 27px.
- Steps nav: bordered top+bottom 1px `#ebebeb`, padding 12px 20px; li
  padding-right 80px + 30px 1px separators; 31×31 circles (2px border),
  idle `#999` / current `#222` / done `#1abc9c` + check glyph; bold
  title text same colors.
- Content: `.current` padding-top 60px; fieldset 465px tall, border-bottom
  `#ebebeb`, padding-right 110px; footer "Step X of 3" `#999` padding
  28px 0; actions absolute bottom 14px right 0.
- Buttons: 150×50 radius 5px; Next/Submit `#1abc9c` white (hover
  `#148f77`); Previous `#f8f8f8` `#999` (hover `#dfdfdf`), display:none
  when disabled (first step).
- Gender tiles 85×50 `#f8f8f8` (radius 5px 0 0 5px / 0 5px 5px 0);
  checked `#1abc9c` + white; **source text color #f8f8f8 = invisible
  until checked — recreation shows `#999` idle text (documented)**.
- Payment tiles 86×50 transparent 1px `#ebebeb` border; checked border
  `#1abc9c`.
- PW meter: 60×15 track `#f8f8f8` radius 8, right 193px; widths
  25/25/35/42/100px; colors `#d00` / `#fca812` / `#1abc9c`; label 11px;
  hidden ≤992px.
- Error: `label.error` 11px `#ff0000` absolute right 92px (before input);
  `input.error` border `#ff0000`. Only visible message: the custom email
  one ("Not a valid email address" + info icon).
- Breakpoints: ≤992 card fluid + meter hidden; ≤768 steps/rows stack,
  labels full width left, inputs full width, fieldset 600px; ≤600
  filename 99%, button full width below, action buttons 100px, step li
  padding 0; ≤480 form padding 30px, date selects full width, fieldset
  750px.

## Build order (implementation outline)

1. **Scaffold + tokens:** copy the simplest existing app (`apps/<name>`),
   rename package to `@free-react-templates/beguile`, CNAME/hompage
   `https://beguile.free.componentdock.com`, `npm install` at root so the
   lockfile registers the workspace. `index.css` `@theme` tokens from the
   spec's Design tokens table (`--color-accent #1abc9c`, card/well/ink/
   idle/line/error/strength); Google Fonts Roboto Slab 400+700 in
   `index.html`.
2. **Components (suggested files under `src/components/`):**
   - `Wizard.tsx` — the step engine (current step state, slide transition,
     step registry, gating via validation, Previous/Next/Submit actions,
     "Step X of 3" footer). Tablist semantics + `aria-selected`.
   - `StepNav.tsx` — the three numbered-circle tabs (circle, number,
     check icon for done, title; 1px separators; click-to-navigate-back).
   - `AccountStep.tsx` — username, email, password + `PasswordMeter.tsx`
     (5 levels), `FilePicker.tsx` (hidden input + filename display +
     "Select File" button). Local state kept when stepping away (lift to
     Wizard or keep forms mounted with `hidden`).
   - `PersonalStep.tsx` — full name, country select, gender tiles,
     about-us textarea.
   - `PaymentStep.tsx` — payment radio tiles (inline SVG/text card
     badges), credit card (275px) + CVC (143px) row, expiry Month+Year
     selects + chevrons, name of card.
   - `Success.tsx` — inline confirmation replacing the form on finish.
   - `Footer.tsx` — Component Dock credit link.
3. **Validation:** username required; email required + pattern. Only the
   email error shows text ("Not a valid email address" + lucide Info
   icon); required-empty fields get the red border + empty message slot.
   Validate on blur and on Next; block step advance until step 1 valid;
   steps 2–3 un-gated.
4. **Page shell:** body-level full-bleed teal-washed photo background
   (screened picsum + CSS duotone/overlay + blur), white 850px card,
   centered uppercase header.

## Section-by-section fidelity notes

- **Header text:** "Sign up to great new account" — keep verbatim
  (drop the source's trailing space).
- **Step titles:** "Account Information" (fix source typo "Infomation"),
  "Personal Information", "Payment Details".
- **Country options:** "Country" (placeholder), "Australia", "America"
  (value USA) — keep the source's display labels.
- **Gender:** Male checked by default; idle tile text readable (#999,
  deviation from the invisible-text source bug); checked = teal bg +
  white text; left tile radius 5px 0 0 5px / right 0 5px 5px 0.
- **Payment badges:** source PNGs are brand logos — do NOT ship. Use
  inline SVG card glyphs or text badges ("Visa", "Mastercard",
  "PayPal"). Lucide has NO brand icons (verified family-wide pitfall).
- **Expiry anomaly:** source renders DAY+YEAR because dobPicker binds a
  non-existent `#expiry_month` (demo bug). Render MONTH + YEAR
  (Jan..Dec / future years) — documented deviation.
- **Avatar field:** file content is only read for its name; no upload
  occurs. Strip the `C:\fakepath\` prefix like the source.
- **Submit:** inline success message, NO alert, NO fake network.

## Picsum background plan (subject-critical — screen before pinning)

The source body photo is a teal-washed lifestyle/urban scene (people +
graffiti wall). Picsum has NO people wall-art scenes; verified person
IDs are 1027 (portrait, dark), 64 (golden-hour woman), 823 (woman with
camera), 996 (backlit woman) — none is a crowd/trio scene. Strategy:

- Prefer an urban/architectural scene seed that holds a teal duotone
  well (street walls, concrete, sky) — screen candidates 480×270 with
  the bright+blue pixel metric (fraction top-half r+g+b>570 plus
  b>r+8 & b>150; sky scenes ~1.0–1.15, dark scenes <0.3), then
  browser-verify the top 1–2 at full res.
- Apply the teal wash via CSS (`filter: sepia + hue-rotate` or a
  `mix-blend` overlay div) + `blur()` behind the card; the card must stay
  crisp and the wash must read as the source's seafoam tint.
- Pin the final seed in the spec + App comment + test together; update
  docs/templates/beguile with the chosen seed.
