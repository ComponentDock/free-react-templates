# Lobby (ColorLib Modal 07) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Lobby** (NEW name —
> the ColorLib source keeps its name "Modal 07"). Implementation ships on
> `feat/template-lobby` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 07" — free single-page appointment-booking
  modal component template (source: https://colorlib.com/wp/template/modal-07/).
  TEMPLATES.md row: line 806 (**Bootstrap Modals (20)**, header line 798).
  The `modal-07` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-07/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-07/`
  (HTTP 200, 9.7KB HTML, `<title>` "Modal 07"; the Bootstrap UI-component
  series lives under the `/theme/bootstrap/` prefix). Stylesheets:
  `css/style.css` (223.5KB = Bootstrap 4.3.1 + the template's custom ftco
  styles in the LAST ~5KB starting at the
  `body { font-family: "Poppins" ... }` rule — token source),
  `css/ionicons.min.css` (close × glyph), `css/flaticon.css` (loaded but NO
  flaticon classes used — dead include, skip it). **Poppins** (300–900)
  cf-fonts @font-face blocks in the head. `js/main.js`: tooltip init (NO
  tooltip elements exist here — dead code), `fullHeight()` (recreate with
  `min-h-screen` flex centering) + COMMENTED-OUT `modal('show')` — opens
  only on click. Screenshot (`modal-07.jpg`, 1200×972) browser-verified
  2026-08-16: modal OPEN — flat dark-grey backdrop, SQUARE-cornered ~950px
  card split 50/50: LEFT full-bleed photo panel (lawyer portrait — black
  robe, red sash, wooden gavel in right hand, open law book in left, dark
  grey textured wall); RIGHT olive `#afa939` panel (small bold eyebrow
  "Booking an Appointment", bold heading "Free Consultation", four
  white-tinted filled inputs: FULL NAME / EMAIL ADDRESS / SUBJECT
  placeholders + MESSAGE textarea, full-width dark-grey "Send Message"
  button); white × close top-right on a translucent-black square.
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 07" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    07" (olive `#afa939` bg/border, WHITE text, **4px radius — NOT a pill**,
    16px/24px padding, Poppins 15px, sentence case; hover inverts to
    transparent + `#afa939` text).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop) →
    `div.modal-dialog.modal-dialog-centered` (max-width **950px**) →
    `div.modal-content` (border none, padding 0, **border-radius 0 —
    SQUARE**, font-size 14px, `box-shadow: 0 10px 34px -15px
rgba(0,0,0,0.24)`, bg `#fff`):
    - header (padding 0, border none): `button.close` 40×40, absolute
      top-right, z-index 1, `ion-ios-close`, aria-label Close. **bg
      `rgba(0,0,0,0.1)` + WHITE glyph** (same pattern as Modal 06).
    - `div.row.no-gutters` (two equal columns):
      - **Left photo panel** `div.col-md-6.d-flex` →
        `div.modal-body.p-5.img.d-flex.text-center.align-items-center`
        with INLINE `style="background-image: url(images/bg-1.jpg);"` —
        the `.img` class (`background-size: cover; no-repeat; center
center`) with a REAL background image (NOT solid color like Modal
        06). No text content. Mobile (≤767.98px): `height: 300px;
background-position: top center`.
      - **Right form panel** `div.col-md-6.d-flex` →
        `div.modal-body.p-4.p-md-5.d-flex.align-items-center.color-1` — bg
        **olive `#afa939`** (`.modal-content .modal-body.color-1 {
background: #afa939; }`; padding 1.5rem mobile / 3rem md+) →
        `div.text.w-100.py-3`:
        - `span.subheading` "Booking an Appointment" (Poppins **700**,
          `rgba(255,255,255,0.8)`).
        - `h3.mb-4.heading` "Free Consultation" (Poppins **700**,
          `rgba(255,255,255,0.8)`, mb 1.5rem).
        - `form.contact-form`:
          - 2 × `div.form-group.mb-3`: `input.form-control` type text,
            placeholders "Full Name", "Email address".
          - 1 × `div.form-group`: `input.form-control` type text,
            placeholder "Subject".
          - 1 × `div.form-group`: `textarea.form-control` (cols 30 rows 4,
            placeholder "Message"; `.modal-content textarea { padding:
20px 15px !important; }`).
          - 1 × `div.form-group` → `button[type=submit].form-control.btn.btn-secondary.rounded.submit.px-3`
            "Send Message" — full-width (form-control = width 100%),
            **52px tall** (`.modal-content .btn-secondary { height: 52px
}`), bg **`#2b2b28`** !important (dark charcoal), 1px
            `#2b2b28` border, WHITE text, **4px radius** (custom `.btn {
border-radius: 4px }`); hover inverts to transparent +
            `#2b2b28` text.
          - INPUT STYLE: `.modal-content .form-control` → **background
            `rgba(255,255,255,0.05)` (subtle white fill), border none,
            radius 0, color `rgba(255,255,255,0.7)` !important, padding 0
            15px; placeholders `rgba(255,255,255,0.4)` !important** —
            FILLED inputs, NOT Modal 06's underline style. No labels — the
            source uses placeholders only.
  - Mobile (`max-width 767.98px`): `row.no-gutters` collapses — photo panel
    stacks on top at a FIXED 300px height (`background-position: top
center`), olive form below (inner wrapper padding 1.5rem via `p-4`);
    modal keeps Bootstrap mobile margins. No horizontal overflow expected.
  - NO navbar, NO other sections, ONE photograph (the lawyer), NO footer in
    the original — add the mandatory Component Dock attribution footer (repo
    convention).
- **Design tokens:** brand olive/mustard **#afa939** (primary — launch
  button bg/border, link color + hover, RIGHT panel bg); dark charcoal
  **#2b2b28** (Send Message button bg/border); white **#fff** (launch page,
  modal content bg, button text, close glyph); panel text layers
  `rgba(255,255,255,0.8)` (subheading/heading/body) · `0.7` (input text
  !important) · `0.4` (input placeholders !important); input fill
  `rgba(255,255,255,0.05)`; close bg `rgba(0,0,0,0.1)`; modal shadow
  `0 10px 34px -15px rgba(0,0,0,0.24)`; fonts **Poppins** (300/400/700 via
  Google Fonts; body 14px / line-height 1.8, subheading + heading weight
  700); BUTTONS **4px radius**, font-size 15px; FILLED inputs (no borders,
  subtle white fill, radius 0, padding 0 15px / textarea 20px 15px); modal
  max-width **950px** (vs 900 for Modal 06), SQUARE corners.

## Implementation task outline

1. **Scaffold app** — copy the simplest existing app (e.g. `apps/gateway` or
   `apps/doorway` — same Modal series), rename package to
   `@free-react-templates/lobby`, set `public/CNAME` =
   `lobby.free.componentdock.com`, `"homepage"` =
   `https://lobby.free.componentdock.com`; run `npm install` at repo root so
   `package-lock.json` registers the workspace; confirm `injectUiSource()`
   in `vite.config.ts` (copy the pattern from an existing app). jsdom
   polyfill rules apply only if localStorage is used (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #afa939`
   (olive), `--color-charcoal: #2b2b28`; set Poppins (300;400;700) via
   Google Fonts `<link>` in `index.html`; Tailwind arbitrary value for the
   shadow (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]` — underscores
   safer than commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, BookingModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Lobby" + demo label
   e.g. "Launch Lobby") + olive 4px-radius button; TDD: renders heading +
   button; click opens modal (state lifted or context/callback).
5. **BookingModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, close × with `aria-label="Close"`; conditional render (not in
   DOM when closed) keeps tests unambiguous.
   - Modal shell: max-w 950px, `rounded-none` (SQUARE), the shadow above,
     close × 40×40 white glyph on `bg-black/10` top-right.
   - Two-panel `grid md:grid-cols-2`:
     - **Left photo panel** — background image (screened picsum seed,
       cover, centered; see Pitfalls), no text content.
     - **Right olive panel** — `bg-brand`, eyebrow "Booking an Appointment"
       (font-bold, white/80), heading "Free Consultation" (h3, font-bold,
       white/80), form: Full Name / Email address / Subject text inputs +
       Message 4-row textarea (filled style: `bg-white/5`, no borders,
       `rounded-none`, `px-[15px]`, text `text-white/70`, placeholders
       `placeholder-white/40`; textarea `py-5`), full-width dark
       "Send Message" button (`bg-charcoal`, 52px, `rounded-[4px]`).
   - Submit → success/confirmation state (e.g. swap the form for a "Thanks
     — we'll be in touch" message) so the interaction is testable;
     un-mounts the inputs — assert `queryByLabelText(...)` absent
     afterwards.
6. **Responsive** — `md:grid-cols-2` stacks to one column under 768px (photo
   panel on top, fixed ~300px tall with `bg-top` positioning; olive form
   below); verify no overflow.
7. **Gate + ship** — `scripts/verify-app.sh lobby` (typecheck + lint + 100%
   coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 806) `[x]` with
   `https://lobby.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **The close × is WHITE on `rgba(0,0,0,0.1)`** — same as Modal 06, do NOT
  copy Modal 05's plain translucent-black ×.
- **Buttons are 4px-radius, NOT pills** — custom `.btn { border-radius: 4px
}` (vs Modal 05's 40px pill). The Send Message button's `.rounded` class
  loses to the later custom `.btn` rule. Screenshot confirms a
  gently-rounded wide dark button.
- **Brand olive here is `#afa939`** — NOT Modal 06's `#5eb7b7` teal, Modal
  05's `#3e64ff` blue, Modal 04's `#12d3cf`, or Modal 03's `#39bdc8`. Same
  series, different accent; verify against this spec.
- **Submit button is DARK `#2b2b28`, NOT the brand color** — the source
  uses `btn-secondary` (overridden to charcoal) for "Send Message", while
  `btn-primary` (olive) is only the LAUNCH button. Do not merge them.
- **Font is Poppins 300/400/700** (NOT Roboto like Modal 06). Body
  14px/1.8, subheading + heading weight 700.
- **Inputs are FILLED, not underline** — `bg rgba(255,255,255,0.05)`, no
  borders, radius 0, `padding 0 15px` (textarea `20px 15px`), placeholders
  `rgba(255,255,255,0.4)` (brighter than Modal 06's 0.2). Do NOT copy
  Modal 06's underline style.
- **The left panel HAS a photo** (unlike Modal 06's solid-color panels) —
  `images/bg-1.jpg`, a LAWYER portrait (black robe, red sash, gavel, law
  book, dark wall). picsum has no such subject; screen a portrait-adjacent
  seed with the seed-screening method (e.g. `picsum.photos/id/1027` dark-bg
  profile portrait, `64` golden-hour woman, `996` backlit woman — probe the
  candidate at 480×270, rank with a brightness metric, browser-verify the
  top pick at full res). Pin the seed in the spec + docs + App together and
  document the substitution in the PR. The panel must stay EMPTY of text.
- Icons: `X` from lucide-react (probe
  `node -e "console.log(typeof require('lucide-react').X)"`; fall back to
  inline SVG if undefined). No other icons exist in the source.
- **Source has NO labels** — placeholders only. Add visually-hidden labels
  or `aria-label`s wired to the inputs (a11y improvement, and required for
  `getByLabelText` in tests).
- **Input focus**: the source leaves Bootstrap's default focus shadow on
  `.form-control` inside the modal, which clashes with the flat filled
  style — add a subtle focus-visible ring/border (e.g. `focus:border-white/40`)
  as a documented a11y deviation.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
- Form success swap: the submit button becomes a success message and the
  inputs unmount — assert `queryByLabelText('Full Name')` is absent, don't
  try to read the input's value after submit.
- Mobile photo panel: `background-position: top center` + fixed 300px
  height — the portrait's head stays visible; verify with the browser at a
  narrow viewport.
