# Narthex (ColorLib Modal 08) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Narthex** (NEW name —
> the ColorLib source keeps its name "Modal 08"). Implementation ships on
> `feat/template-narthex` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 08" — free single-page email-confirmation
  ("You've Got Mail!") modal component template (source:
  https://colorlib.com/wp/template/modal-08/). TEMPLATES.md row: line 807
  (**Bootstrap Modals (20)**, header line 798). The `modal-08` slug appears
  exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-08/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-08/`
  (HTTP 200, 8.6KB HTML, `<title>` "Modal 08"; the Bootstrap UI-component
  series lives under the `/theme/bootstrap/` prefix). Stylesheets:
  `css/style.css` (223.5KB = Bootstrap 4.3.1 + the template's custom ftco
  styles in the LAST ~5KB starting at the
  `body { font-family: "Poppins" ... }` rule — token source),
  `css/ionicons.min.css` (close × glyph). **Poppins** (300–900) cf-fonts
  @font-face blocks in the head. `js/main.js`: tooltip init (NO tooltip
  elements exist here — dead code), `fullHeight()` (recreate with
  `min-h-screen` flex centering) + COMMENTED-OUT `modal('show')` — opens
  only on click. Screenshot (`modal-08.jpg`, 1200×972) browser-verified
  2026-08-16: modal OPEN — medium-grey backdrop, rounded-corner card with a
  purple→salmon diagonal gradient header, white "You've Got Mail!" ON the
  gradient, mustard-yellow envelope illustration (white triangular flap +
  orange `@` badge), small dark-grey "We sent confirmation link to:", bold
  black "johndoe@gmail.com", faint white × top-right.
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 08" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    08" (salmon `#fb8691` bg/border, WHITE text, **40px PILL radius — NOT
    4px**, 16px/24px padding, Poppins 15px, `box-shadow: none !important`,
    sentence case; hover inverts to transparent + `#fb8691` text).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop
    `rgba(0,0,0,0.5)`) → `div.modal-dialog.modal-dialog-centered`
    (max-width **600px**) → `div.modal-content` (border none, padding 0,
    **overflow hidden**, **ROUNDED corners — Bootstrap default 0.3rem, NOT
    square like Modal 07**, `box-shadow: 0 10px 34px -15px rgba(0,0,0,0.24)`,
    bg `#fff`):
    - `div.modal-header.ftco-degree-bg` — **height 230px**, padding 0,
      border none, `background: linear-gradient(45deg, #915eff 0%, #ff8e59
100%)` (purple → coral). The `ftco-degree-bg` pseudo-elements are TWO
      WHITE flaps (`:before` left 0, `:after` right 0, each width 50%,
      height 60px, bottom -30px, z-index 1, **background #fff**, `skewY(
±10deg)`) — the angled/chevron "degree cut" at the gradient's bottom
      edge. Inside: `button.close` — absolute top 0 right 0, 40×40,
      padding/margin 0, z-index 1, **color #fff, plain WHITE ×, NO
      background square** (`ion-ios-close`, aria-label Close).
    - `div.modal-body.pt-md-0.pb-md-5.text-center` — border none, overflow
      hidden, **margin-top: -180px**, z-index 2 (body pulled UP over the
      gradient header, so the top of the body content renders ON the
      gradient), text-center:
      - `h2` "You've Got Mail!" (font-weight **700**, color **#fff** —
        WHITE, ON the gradient).
      - `div.icon.d-flex.align-items-center.justify-content-center` —
        **200×200, border-radius 50%** (transparent circle), font-size
        30px, margin 0 auto, margin-bottom 10px →
        `img.img-fluid` `images/email.svg` (mustard-yellow `#FFD15C`
        envelope, white triangular flap, orange `@` badge; viewBox
        0 0 502 502).
      - `h4.mb-2` "We sent confirmation link to:" (font-size **18px**, dark
        text, margin-bottom 0.5rem).
      - `h3` "johndoe`<span>`@`</span>`gmail.com" (font-weight **800**,
        font-size **22px**, near-black; `@` span font-weight **300**).
  - Mobile (`max-width 767.98px`): nothing collapses — the dialog keeps
    Bootstrap's mobile margins (`0.5rem`), header stays 230px, body overlap
    stays -180px, launch section stays full-viewport. Single-column demo.
    Verify no horizontal overflow.
  - NO navbar, NO other sections, ONE illustration (the envelope), NO footer
    in the original — add the mandatory Component Dock attribution footer
    (repo convention).
- **Design tokens:** gradient brand pair **#915eff** (purple) → **#ff8e59**
  (coral, 45deg) — modal header bg; salmon **#fb8691** — launch button
  bg/border; white **#fff** — launch page, modal bg, launch-button text,
  "You've Got Mail!" heading (on gradient), close glyph, degree-cut flaps;
  dark `#212529`-ish — launch heading + message lines; mustard **#FFD15C**
  — envelope recreation; fonts **Poppins** (300/400/700/800 via Google
  Fonts; body 14px / line-height 1.8; "You've Got Mail!" weight 700; email
  22px weight 800 with `@` at 300); BUTTONS **40px PILL radius**, font-size
  15px, no shadow; modal max-width **600px**, ROUNDED 0.3rem; header 230px;
  body margin-top **-180px**; icon 200×200 circle; modal shadow
  `0 10px 34px -15px rgba(0,0,0,0.24)`; backdrop `rgba(0,0,0,0.5)`.

## Implementation task outline

1. **Scaffold app** — copy the simplest existing app (e.g. `apps/lobby` —
   same Modal series, closest sibling), rename package to
   `@free-react-templates/narthex`, set `public/CNAME` =
   `narthex.free.componentdock.com`, `"homepage"` =
   `https://narthex.free.componentdock.com`; run `npm install` at repo root
   so `package-lock.json` registers the workspace; confirm
   `injectUiSource()` in `vite.config.ts` (copy the pattern from an
   existing app). jsdom polyfill rules apply only if localStorage is used
   (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-gradient-start:
#915eff` (purple), `--color-gradient-end: #ff8e59` (coral),
   `--color-brand: #fb8691` (salmon), `--color-mail: #FFD15C` (mustard);
   set Poppins (300;400;700;800) via Google Fonts `<link>` in `index.html`;
   Tailwind arbitrary value for the shadow
   (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]` — underscores safer than
   commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, ConfirmModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Narthex" + demo label
   e.g. "Launch Narthex") + salmon **40px-pill** button; TDD: renders
   heading + button; click opens modal (state lifted or context/callback).
5. **ConfirmModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, close × with `aria-label="Close"`; conditional render (not in
   DOM when closed) keeps tests unambiguous.
   - Modal shell: max-w 600px, `rounded-lg` (~0.3rem — NOT `rounded-none`
     like Lobby), the shadow above, `overflow-hidden`.
   - **Gradient header** (h-[230px], `bg-gradient-to-tr` (45deg) from
     `#915eff` to `#ff8e59`): white "You've Got Mail!" heading (font-bold)
     - close × 40×40 plain WHITE (no bg) absolute top-right.
   - **Degree-cut bottom edge**: the white chevron/angled cut — either a
     `clip-path` polygon on the header (e.g. a V-notch in the bottom
     center) or two skewed white divs (`skew-y-[10deg]` / `-10deg`, 50%
     width each, hanging ~30px below). Verify visually against the live
     render/screenshot.
   - **Body** (`-mt-[180px]` over the header, `relative z-10`, text-center,
     pb-12): mail icon in a 200×200 transparent circle (`size-[200px]
rounded-full mx-auto mb-2.5`, `text-[30px]`) — lucide `MailCheck` or
     `Mail` icon in mustard `#FFD15C` sized ~120–160px; then "We sent
     confirmation link to:" (`text-lg`, dark); then "johndoe@gmail.com"
     (`text-[22px] font-extrabold` with the `@` rendered `font-light`).
6. **Responsive** — no stacking inside the dialog; verify the gradient
   header + degree cut + icon straddle at mobile width and nothing
   overflows the 600px dialog (Bootstrap mobile margins ≈ `mx-2`).
7. **Gate + ship** — `scripts/verify-app.sh narthex` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 807) `[x]` with
   `https://narthex.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **Launch button is a 40px PILL, salmon `#fb8691`** — NOT Lobby's 4px
  olive `#afa939`. The custom `.btn { border-radius: 40px }` rule returns
  to Modal 05's pill style. Do not copy Lobby's button styling.
- **Modal corners are ROUNDED (0.3rem)** — Lobby/Modal 07 was SQUARE
  (border-radius 0); Modal 08 keeps Bootstrap's default rounded corners.
  `rounded-lg`, not `rounded-none`.
- **Modal is 600px wide** — NOT Lobby's 950px, NOT Modal 06's 900px.
- **Gradient header `#915eff` → `#ff8e59` (45deg)** — unique to this
  template in the series; no other Modal uses a gradient header. The white
  "You've Got Mail!" sits ON the gradient (body `margin-top: -180px` pulls
  the content up over the 230px header — this is what makes the white
  heading visible on the gradient; the z-index 2 body must sit above the
  header).
- **Close × is plain WHITE with NO background square** — differs from
  Modal 06/07 (`rgba(0,0,0,0.1)`). Screenshot confirms a faint white ×
  directly on the gradient.
- **Degree-cut**: `ftco-degree-bg` = two WHITE 60px flaps (50% width each,
  `skewY ±10deg`, bottom -30px) forming the chevron at the gradient's
  bottom edge. Clip-path polygon on the header is the simplest faithful
  recreation; if you use skewed divs they must be WHITE (`#fff`) and sit
  below the body's z-index.
- **The envelope is an SVG illustration, not a photo** — mustard `#FFD15C`
  envelope, white triangular flap, orange `@` badge (viewBox 0 0 502 502).
  NEVER copy `images/email.svg`. Recreate with a lucide-react icon
  (`MailCheck`/`Mail` — probe
  `node -e "console.log(typeof require('lucide-react').MailCheck)"`;
  fall back to `Mail`, or an inline SVG if neither exists) in the 200px
  transparent circle. The circle itself has NO background/border — it just
  centers the illustration.
- **`@` in the email is weight 300** — render the address with the `@`
  character at `font-light` (source: `h3 span { font-weight: 300 }`).
- **Heading weights**: "You've Got Mail!" weight 700 WHITE; email 22px
  weight 800; confirmation line 18px regular. Body font 14px/1.8.
- **Source has NO labels** (no form here at all — pure display dialog), so
  no label work is needed; the modal itself needs `aria-label` (e.g.
  "Email confirmation").
- **js/main.js**: `fullHeight()` → `min-h-screen` flex centering; the
  auto-show line is commented out — modal opens ONLY on launch-button click.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow; the 45deg gradient is
  `bg-gradient-to-tr` (or `bg-[linear-gradient(45deg,#915eff,#ff8e59)]`).
- The launch heading is the demo name "Narthex" — content KIND preserved
  (demo heading + single primary CTA), per the naming mandate.
