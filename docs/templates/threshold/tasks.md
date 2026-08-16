# Threshold (ColorLib Modal 04) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Threshold** (NEW name —
> the ColorLib source keeps its name "Modal 04"). Implementation ships on
> `feat/template-threshold` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 04" — free single-page promo-code sale-modal
  component template (source: https://colorlib.com/wp/template/modal-04/).
  TEMPLATES.md row: line 803 (**Bootstrap Modals (20)**, header line 798).
  The `modal-04` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-04/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-04/`
  (HTTP 200, 6.6KB HTML; the Bootstrap UI-component series lives under the
  `/theme/bootstrap/` prefix). Stylesheets: `css/style.css` (222.5KB =
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~5KB
  starting at the `body { font-family: "Josefin Sans"... }` rule — token
  source), `css/ionicons.min.css` (close ×), `css/flaticon.css` (defines
  ONLY the snowflake glyph — linked but NOT used in the modal-04 body; skip
  it). Josefin Sans (300/400/600/700) webfonts. `js/main.js`:
  `fullHeight()` (recreate with `min-h-screen` flex centering) +
  COMMENTED-OUT `modal('show')` — opens only on click. Screenshot
  (`modal-04.jpg`, 1200×972) browser-verified 2026-08-16: modal OPEN — grey
  backdrop, split dialog, LEFT half a black vintage road bicycle leaning on
  a white wall (light wood floor), RIGHT half white with big black uppercase
  "50% OFF", uppercase "ON ALL COLORLIB BRANDS", "Enter code" input, teal
  START SHOPPING button, teal square close × top-right. Computed styles read
  via CDP on the live page confirm the cascade quirks below.
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 04" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    04" (teal `#12d3cf` bg/border, WHITE text, 4px radius, 16px/24px padding,
    Josefin Sans 15px, sentence case — rectangle, not a pill, NOT uppercase).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop) →
    `div.modal-dialog.modal-dialog-centered` (max-width **700px**) →
    `div.modal-content` (border none, radius 0, padding 0, 14px,
    `color: #212529`, `box-shadow: 0 10px 34px -15px rgba(0,0,0,0.24)`):
    - header (padding 0, border none): `button.close` 40×40, absolute
      top-right, bg **teal `#12d3cf`**, white `ion-ios-close`, radius 0,
      aria-label Close. (Teal-filled — DIFFERENT from Modal 03's
      translucent-black close.)
    - `div.row.no-gutters` (two equal `col-md-6` columns):
      - `col-md-6.d-flex` → `div.modal-body.p-5.img.d-flex` (bg
        `images/bg-1.jpg` cover — black vintage road bicycle against a
        white wall, light wood floor; `p-5` 48px; d-flex stretch). No
        content — pure photo panel.
      - `col-md-6.d-flex` → `div.modal-body.p-5.d-flex.align-items-center`
        (white, 48px padding, vertically centered):
        `div.text.w-100.text-center.py-5` (position relative, z 0) →
        `h2.mb-0` "50<span>%</span> Off" (58px / **700** / uppercase /
        `#212529`; the `%` span is **400** — same 58px inline);
        `h4.mb-4` "On all Colorlib Brands" (16px / 400 / uppercase /
        `#212529`, mb 24px);
        `form.code-form` → `div.form-group.d-flex` → `input.form-control`
        (52px tall, bg `#fff`, `color #000`, 15px, radius **5px**, border
        `1px solid rgba(0,0,0,0.1)`, placeholder "Enter code"; focus
        border `#12d3cf`; NO submit — the CTA is a link);
        `a.btn.btn-primary.d-block.py-3` "Start Shopping" (full-width,
        teal bg/border, text **`#000`** — see cascade note, 4px radius,
        uppercase ls 1px 14px, py 16px).
        Frame: `.text:after` = 1px `rgba(0,0,0,0.1)` border, inset **−30px**
        all sides, z-index −1 — subtle oversized outline around the text
        block.
  - Mobile (`max-width 767.98px`): columns stack; left `.img` gets fixed
    `height: 300px`.
  - NO navbar, NO other sections. NO footer in the original — add the
    mandatory Component Dock attribution footer (repo convention).
- **Color cascade quirks (verified via computed styles on the live page):**
  - `.btn.btn-primary` base (ftco): `background:#12d3cf !important; border:
1px solid #12d3cf !important; color:#fff !important` → LAUNCH button =
    WHITE text. `.btn-primary:hover` = transparent bg + teal text.
  - `.modal-content .modal-body .btn-primary { color:#000 !important;
text-transform:uppercase; letter-spacing:1px; font-size:14px }` →
    START SHOPPING = **BLACK** text on teal (computed rgb(0,0,0); the vision
    read of "white" on the screenshot is wrong — trust the CSS cascade).
  - Headline/subheadline are `#212529` (Bootstrap body default), NOT pure
    black; the `%` inside "50% Off" is weight 400 while "50" and "Off" are 700.
  - The launch button is NOT uppercase and NOT letter-spaced; START SHOPPING
    IS (uppercase, ls 1px, 14px). Match the distinction.
- **Design tokens:** teal **#12d3cf** (primary — both buttons, close button,
  link color, input focus border; 10× in custom CSS); black **#000** (Start
  Shopping text, input text); **#212529** (headline, subheadline, modal base
  text); white **#fff** (page bg, launch text, close ×, input bg);
  `rgba(0,0,0,0.1)` (input border + frame border); modal shadow
  `0 10px 34px -15px rgba(0,0,0,0.24)`; square dialog (radius 0); fonts
  **Josefin Sans** (300/400/600/700); buttons 4px radius (NOT pills); launch
  padding 16px 24px white text; START SHOPPING full-width `py-3` black text;
  input 52px / radius 5px / teal focus border; the −30px outline frame.

## Implementation task outline

1. **Scaffold app** — `npm create vite@latest`-pattern copy of the simplest
   existing app (e.g. `apps/portico` or `apps/portal`), rename package to
   `@free-react-templates/threshold`, set `public/CNAME` =
   `threshold.free.componentdock.com`, `"homepage"` =
   `https://threshold.free.componentdock.com`; run `npm install` at repo
   root so `package-lock.json` registers the workspace; then `npm run
readme:status`; confirm `injectUiSource()` in `vite.config.ts` (copy the
   pattern from an existing app). Remember jsdom polyfill rules only if
   localStorage is used (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #12d3cf`;
   set Josefin Sans (300;400;600;700) via Google Fonts `<link>` in
   `index.html`; Tailwind arbitrary value for the shadow
   (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]` — underscores safer than
   commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, PromoModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Threshold" + demo label
   e.g. "Launch Promo") + teal rectangular button; TDD: renders heading +
   button; click opens modal (state lifted or context/callback).
5. **PromoModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, close × with `aria-label="Close"`; conditional render (not in DOM
   when closed) keeps tests unambiguous.
   - Left photo panel: picsum seed (`picsum.photos/seed/threshold-1/400/600`
     or similar — verify visually), cover, no content inside.
   - Right panel: "50% Off" headline (58px / font-bold / uppercase; the "%"
     in font-normal), "On all Colorlib Brands" subheadline (16px uppercase
     mb-6), code input (h-[52px] rounded-[5px] border
     `border-black/10` focus `border-brand`), START SHOPPING button
     full-width teal BLACK text uppercase ls 1px 14px (paraphrase label is
     fine — keep the kind: promo CTA).
   - Frame: emulate `.text:after` with a `before:`/`after:` utility or a
     nested absolutely-positioned div — 1px `border-black/10` at −30px all
     sides behind the text block.
   - Close ×: lucide `X`, 40×40, absolute top-right, teal bg, white glyph.
6. **Responsive** — `md:` grid (1/2 split) → stack under 768px; photo height
   300px on mobile (`max-md:h-[300px]`).
7. **Gate + ship** — `scripts/verify-app.sh threshold` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single TEMPLATES.md
   row (line 803) `[x]` with `https://threshold.free.componentdock.com` +
   `npm run readme:status`.

## Pitfalls / notes for the implementer

- **START SHOPPING text is BLACK (`#000`), not white** — the
  `.modal-content .modal-body .btn-primary { color:#000 !important }` rule
  overrides the base white (confirmed via computed styles rgb(0,0,0); the
  screenshot's small glyphs look dark for exactly this reason). Do NOT
  "correct" it to white. The LAUNCH button text IS white.
- Brand teal here is **`#12d3cf`** — NOT the `#39bdc8` used by Portal
  (Modal 03). Same series, different accent; verify against this spec.
- The close button is **teal-filled** (40×40, white ×) — not the
  translucent-black close of Modal 03. Don't copy the sibling's pattern
  blindly.
- The `%` in "50% Off" is weight 400 inline (58px, same size) — "50" and
  "Off" are 700. Tailwind: `font-bold` on the h2, `font-normal` on the span.
- The `.text:after` frame (1px `rgba(0,0,0,0.1)` at −30px all sides) is a
  real visual feature of the right column — include it or the panel looks
  wrong against the screenshot.
- Input: 52px tall, radius 5px, border `rgba(0,0,0,0.1)`, focus border teal.
  The form has NO submit — "Start Shopping" is an `<a>`; a no-op form with a
  labeled input is fine (tests should not require a submit action).
- Photo choice: the source `bg-1.jpg` shows a black vintage road bicycle
  leaning against a white wall on a light wood floor — pick a picsum seed
  that reads as a minimal lifestyle/product scene (e.g. `seed/threshold-1`,
  verify visually). The photo is the LEFT column, and on mobile it gets a
  fixed 300px height ABOVE the text.
- flaticon.css is linked in the source head but unused in modal-04 (only the
  snowflake glyph exists) — do not add any flaticon usage; the only icon
  needed is the close × (lucide `X`; probe first:
  `node -e "console.log(typeof require('lucide-react').X)"`).
- Josefin Sans ships 300/400/600/700 (verified in the cf-fonts @font-face
  blocks) — load all four from Google Fonts; h2 weight 700 is a real weight,
  not faux-bold.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
