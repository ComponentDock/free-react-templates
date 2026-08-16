# Doorway (ColorLib Modal 05) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Doorway** (NEW name —
> the ColorLib source keeps its name "Modal 05"). Implementation ships on
> `feat/template-doorway` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 05" — free single-page signup-form modal
  component template (source: https://colorlib.com/wp/template/modal-05/).
  TEMPLATES.md row: line 804 (**Bootstrap Modals (20)**, header line 798).
  The `modal-05` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-05/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-05/`
  (HTTP 200, 9.9KB HTML; the Bootstrap UI-component series lives under the
  `/theme/bootstrap/` prefix). Stylesheets: `css/style.css` (224.3KB =
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~5KB
  starting at the `body { font-family: "Poppins"... }` rule — token source),
  `css/ionicons.min.css` (close × + Twitter/Facebook/Instagram logo glyphs).
  Poppins (300/400/500/600/700/800/900) webfonts. `js/main.js`:
  tooltip init on `[data-toggle="tooltip"]` (social icons),
  `fullHeight()` (recreate with `min-h-screen` flex centering) +
  COMMENTED-OUT `modal('show')` — opens only on click. Screenshot
  (`modal-05.jpg`, 1200×972) browser-verified 2026-08-16: modal OPEN — grey
  backdrop, centered WHITE card with slightly rounded corners: dark "CREATE
  YOUR ACCOUNT" heading, three small circular dark-grey social icons, three
  inputs with tiny uppercase light-grey labels (FULL NAME "John Doe", EMAIL
  ADDRESS "johndoe@gmail.com", PASSWORD placeholder), a prominent wide
  solid-blue rounded "SIGN UP" button, small underlined grey "I'm already a
  member" link below, small × top-right.
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 05" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    05" (blue `#3e64ff` bg/border, WHITE text, **pill** radius 40px, 16px/24px
    padding, Poppins 15px, sentence case).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop) →
    `div.modal-dialog.modal-dialog-centered` (max-width **450px**) →
    `div.modal-content` (border none, padding 0, radius 0.3rem Bootstrap
    default, `box-shadow: 0 10px 34px -15px rgba(0,0,0,0.24)`, bg `#fff`):
    - header (padding 0, border none): `button.close` 40×40, absolute
      top-right, z-index 1, `ion-ios-close`, aria-label Close. **NO custom
      background** → Bootstrap-default translucent-black × (`color:#000;
opacity:.5`) — NOT teal-filled (Modal 04's quirk; do NOT copy it).
    - body `p-4 py-5 p-md-5` (24px sides / 48px vertical, 48px on md+):
      - `h3.text-center.mb-3` "Create Your Account" (Poppins 400,
        `#212529`, centered, mb 16px).
      - `ul.ftco-footer-social.p-0.text-center` — 3 `li.ftco-animate` →
        `a` (`data-toggle="tooltip" data-placement="top"` + `title`
        Twitter/Facebook/Instagram) → `span.ion-logo-*` glyph.
        **CASCADE:** the stylesheet defines `.ftco-footer-social` TWICE; the
        LATER block wins → 50×50 WHITE circles, radius 50%, border
        `1px solid rgba(0,0,0,0.05)`, 20px glyph at `rgba(0,0,0,0.8)`
        centered, hover → `#3e64ff`. (The earlier block — 40px,
        `rgba(0,0,0,0.05)` bg — is dead code.)
      - `form.signup-form` → four `div.form-group.mb-2`:
        - `label[for=name]` "Full Name" (uppercase 12px
          `rgba(0,0,0,0.3)`) + `input.form-control` placeholder "John Doe".
        - `label[for=email]` "Email Address" + `input.form-control` (type
          **text** in source — wire it `type="email"` for correctness or keep
          text; either is fine for tests) placeholder "johndoe@gmail.com".
        - `label[for=password]` "Password" + `input.form-control` type
          password placeholder "Password".
        - `button[type=submit].form-control.btn.btn-primary.rounded.submit.px-3`
          "Sign Up" — full-width, 52px tall, **pill** (radius 40px: the
          custom `.btn { border-radius: 40px }` is the LAST radius rule in
          the cascade, beating `.form-control`'s 5px and Bootstrap's
          `.rounded` 0.25rem), blue bg/border, WHITE text.
        - `div.form-group.d-md-flex` → `div.w-100.text-center` →
          `a.forgot` "I'm already a member" (`rgba(0,0,0,0.3)`, underlined).
  - Mobile (`max-width 767.98px`): single-column already; dialog scales,
    stays centered. No special breakpoints beyond keeping it usable.
  - NO navbar, NO other sections, NO images. NO footer in the original —
    add the mandatory Component Dock attribution footer (repo convention).
- **Design tokens:** brand blue **#3e64ff** (primary — launch + Sign Up
  buttons, link color, input focus border, social-icon hover; 12× in custom
  CSS); white **#fff** (page, modal, button text, inputs, social circles);
  **#212529** (heading/body text); `rgba(0,0,0,0.8)` (input text +
  placeholders, social glyphs); `rgba(0,0,0,0.3)` (labels, login link);
  `rgba(0,0,0,0.1)` (input border); `rgba(0,0,0,0.05)` (social circle
  border); modal shadow `0 10px 34px -15px rgba(0,0,0,0.24)`; fonts
  **Poppins** (300/400/500/600/700/800/900); PILL buttons (~40px radius)
  for BOTH launch and Sign Up; inputs 52px / radius 5px / blue focus border;
  uppercase 12px muted labels; 50×50 circular social icons with hover
  tooltips; Bootstrap-default translucent-black close ×.

## Implementation task outline

1. **Scaffold app** — `npm create vite@latest`-pattern copy of the simplest
   existing app (e.g. `apps/portal` or `apps/threshold`), rename package to
   `@free-react-templates/doorway`, set `public/CNAME` =
   `doorway.free.componentdock.com`, `"homepage"` =
   `https://doorway.free.componentdock.com`; run `npm install` at repo
   root so `package-lock.json` registers the workspace; then `npm run
readme:status`; confirm `injectUiSource()` in `vite.config.ts` (copy the
   pattern from an existing app). Remember jsdom polyfill rules only if
   localStorage is used (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #3e64ff`;
   set Poppins (300;400;500;600;700;800;900) via Google Fonts `<link>` in
   `index.html`; Tailwind arbitrary value for the shadow
   (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]` — underscores safer than
   commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, SignupModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Doorway" + demo label
   e.g. "Launch Signup") + blue pill button; TDD: renders heading + button;
   click opens modal (state lifted or context/callback).
5. **SignupModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, close × with `aria-label="Close"`; conditional render (not in DOM
   when closed) keeps tests unambiguous.
   - Heading "Create Your Account" (h3, centered, mb-4).
   - Social row: three 50×50 circular white buttons (Twitter/Facebook/
     Instagram) — inline SVG brand paths (lucide-react dropped brand icons;
     probe first) with `title`/aria-label for the tooltip; hover → brand
     blue.
   - Form: labeled Full Name / Email Address / Password inputs (52px,
     `rounded-[5px]`, `border-black/10`, focus `border-brand`, uppercase
     12px muted labels — `htmlFor`/`id` wired properly; the source's `for=`
     attrs point at missing ids, fix that), full-width blue pill Sign Up
     button, centered underlined muted "I'm already a member" link
     (paraphrase label is fine — keep the kind: login link).
   - Submit → success/confirmation state (e.g. swap the form for a "Check
     your inbox" message) so the interaction is testable; un-mounts the
     inputs — assert `queryByLabelText(...)` absent afterwards.
6. **Responsive** — everything single-column + centered by default; verify
   no overflow under 768px.
7. **Gate + ship** — `scripts/verify-app.sh doorway` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 804) `[x]` with
   `https://doorway.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **The close × is translucent-black, NOT teal** — Modal 05's
  `.modal-content button.close` has NO custom background (unlike Modal 04's
  teal-filled 40×40). The Bootstrap default `.close` (`color:#000;
opacity:.5`) applies. Do NOT copy the sibling's teal-close pattern.
- **Both buttons are PILLS (radius 40px)** — the custom
  `.btn { border-radius: 40px }` is the LAST radius rule in the cascade and
  beats `.form-control`'s 5px and Bootstrap's `.rounded` 0.25rem on the Sign
  Up button. The launch button has no `rounded` class at all. Screenshot
  confirms a wide rounded Sign Up button.
- Brand blue here is **`#3e64ff`** — NOT the `#12d3cf` of Threshold (Modal 04) or the `#39bdc8` of Portal (Modal 03). Same series, different accent;
  verify against this spec.
- **No images anywhere** — the template is pure form UI. No picsum seeds
  needed. Do not invent a hero photo.
- The `.ftco-footer-social` stylesheet block is defined twice; only the
  LATER one (50px white circles, 1px `rgba(0,0,0,0.05)` border, dark glyphs,
  hover `#3e64ff`) applies — implement that one.
- Social icons: lucide-react has NO brand icons (Facebook/Instagram/Twitter
  → `undefined`). Use inline SVG simple-icons paths or a tiny local icon
  map; probe with
  `node -e "console.log(typeof require('lucide-react').X)"` for the close.
- Source's `label for="name/email/password"` point at inputs with NO ids —
  wire `htmlFor`/`id` pairs properly in the recreation (a11y improvement,
  and required for `getByLabelText` in tests).
- Inputs: 52px tall, radius 5px, border `rgba(0,0,0,0.1)`, focus border
  blue, font-size 16px, NO box-shadow. Labels uppercase 12px
  `rgba(0,0,0,0.3)`.
- Poppins ships 300–900 in the cf-fonts @font-face blocks — load at least
  400/500/600/700 from Google Fonts (all four are real weights).
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
- Form success swap: the submit button becomes a success message and the
  inputs unmount — assert `queryByLabelText('Full Name')` is absent, don't
  try to read the input's value after submit.
