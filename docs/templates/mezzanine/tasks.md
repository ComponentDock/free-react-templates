# Mezzanine (ColorLib Modal 09) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Mezzanine** (NEW name —
> the ColorLib source keeps its name "Modal 09"). Implementation ships on
> `feat/template-mezzanine` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 09" — free single-page sign-in/sign-up auth
  modal component template (source:
  https://colorlib.com/wp/template/modal-09/). TEMPLATES.md row: line 808
  (**Bootstrap Modals (20)**, header line 798). The `modal-09` slug appears
  exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-09/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-09/`
  (HTTP 200, ~19KB HTML, `<title>` "Modal 09"; the Bootstrap UI-component
  series lives under the `/theme/bootstrap/` prefix). Stylesheets:
  `css/style.css` (225KB = Bootstrap 4.3.1 + the template's custom ftco
  styles in the LAST ~4.9KB starting at the
  `.btn { cursor: pointer; border-radius: 4px ... }` rule — token source),
  `css/ionicons.min.css` (close × glyph), `css/flaticon.css` (loaded, no
  flaticon classes in the DOM — unused). **Roboto** (300) cf-fonts
  @font-face blocks in the head; body uses the system stack. `js/main.js`:
  tooltip init (NO tooltip elements exist here — dead code), `fullHeight()`
  (recreate with `min-h-screen` flex centering) + COMMENTED-OUT
  `modal('show')` — opens only on click. Screenshot (`modal-09.jpg`,
  1200×972) browser-verified 2026-08-16: modal OPEN — medium-grey backdrop,
  SQUARE-cornered card, black-and-white bass-guitar photo LEFT, dark
  charcoal panel RIGHT ("Sign In | Sign Up" tabs, bold "Sign In" heading,
  USERNAME/PASSWORD uppercase labels over underline inputs, full-width
  mustard-gold "Sign In" button, Remember Me checkbox + gold "Forgot
  Password", gold "Not a member? Sign Up", white × top-right).
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 09" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    09" (gold `#e3b04b` bg/border, WHITE text, **4px radius — NOT the 40px
    pill of Modal 08**, 16px/24px padding, 15px font, `box-shadow: none`,
    sentence case; hover inverts to transparent + gold text).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop
    `rgba(0,0,0,0.5)`) → `div.modal-dialog.modal-dialog-centered`
    (**max-width 900px**) → `div.modal-content` (border none, `padding: 0
!important`, **SQUARE corners — border-radius 0** (NOT rounded like
    Modal 08), font-size **14px**, `max-height: calc(100vh - 1rem)`,
    overflow hidden, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`):
    - `div.modal-header` (padding 0, border none): `button.close` — absolute
      top 0 right 0, **40×40**, z-index 1, `text-shadow: none`, **white × on
      `rgba(0,0,0,0.1)` square** (like Modal 06/07 — NOT Modal 08's plain
      white ×), aria-label Close, `ion-ios-close` glyph.
    - `div.row.no-gutters` → two `col-md-6.d-flex` columns:
      - LEFT: `div.modal-body.p-5.img` with INLINE
        `background-image: url(images/bg-1.jpg)` (Bootstrap `.img`: cover +
        center; B&W bass-guitar photo; mobile `@media (max-width: 767.98px)`
        → `.modal-content .img { height: 300px }` — collapses to a 300px
        banner ABOVE the form).
      - RIGHT: `div.modal-body.p-4.p-md-5.align-items-center.color-2` (bg
        **`#2b2b28`** charcoal, text `rgba(255,255,255,0.8)`) →
        `div.tabulation.tabulation2`:
        - `ul.nav.nav-tabs.border-0` (margin-bottom 20px): `a.nav-link`
          "Sign In" (active) / "Sign Up" — border none, **16px**/400, padding
          `0 10px 0 0`, inactive `rgba(255,255,255,0.1)`, active **gold
          `#e3b04b`**.
        - `div.tab-content.border-0` (transparent):
          - `#signin` (active): `h3.mb-4` "Sign In" + `form.signin-form`:
            label.label "Username" + underline input (placeholder
            "Username"); label.label "Password" + password input;
            `button.form-control.btn.btn-primary.rounded.submit.px-3` "Sign
            In" (**full-width square GOLD `#e3b04b` button, height 52px**);
            `.form-check.w-50` fill-checkbox "Remember Me" (16×16, radius
            3px, border `rgba(255,255,255,0.4)`, gold fill + white check when
            checked, description `rgba(255,255,255,0.3)`) + `w-50.text-md-right`
            → gold "Forgot Password" link; `p` "Not a member? " + gold
            "Sign Up" link (switches tab).
          - `#signup` (fade): `h3.mb-4` "Sign Up" + `form.signup-form`:
            "Full Name" (placeholder "John Doe"), "Email Address"
            (placeholder "johndoe@gmail.com"), "Password"; fill-checkbox "I
            agree all statements in " + "terms of service" link; "Sign Up"
            submit (same full-width gold 52px); `p` "I'm already a member! "
            - gold "Sign In" link (switches tab).
  - Mobile (`max-width 767.98px`): the two modal columns STACK — photo
    collapses to a 300px banner, form panel below; modal keeps Bootstrap's
    mobile margins (`0.5rem`); launch section stays full-viewport. Verify no
    horizontal overflow.
  - NO navbar, NO other sections, ONE background image, NO footer in the
    original — add the mandatory Component Dock attribution footer (repo
    convention).
- **Design tokens:** gold **#e3b04b** — launch + submit buttons, active tab,
  links, checked checkbox fill (`--color`); charcoal **#2b2b28** — form
  panel; white **#fff** — launch page, button text, close × (on
  `rgba(0,0,0,0.1)`); dark `#212529` — launch heading; rgba-white layers —
  body text 0.8, input text 0.7, placeholder 0.2, checkbox labels 0.3,
  inactive tab 0.1, input underline `rgba(255,255,255,0.1)`; **underline
  inputs** (transparent bg, border none, radius 0, padding 0, height 30px,
  bottom-border only); labels uppercase 12px / letter-spacing 1px; BUTTONS
  radius **4px**, font-size 15px, no shadow; modal max-width **900px**,
  **SQUARE (radius 0)**, shadow `0 10px 34px -15px rgba(0,0,0,0.24)`,
  backdrop `rgba(0,0,0,0.5)`; submit height **52px** full-width; close 40×40;
  tabs 16px/400; checkbox 16×16 radius 3px; fonts **Roboto**
  (300/400/500 via Google Fonts; modal body 14px / line-height 1.5).

## Implementation task outline

1. **Scaffold app** — copy the closest sibling `apps/gateway` (Modal 06 —
   same 900px SQUARE modal + same `rgba(0,0,0,0.1)` close × style), rename
   package to `@free-react-templates/mezzanine`, set `public/CNAME` =
   `mezzanine.free.componentdock.com`, `"homepage"` =
   `https://mezzanine.free.componentdock.com`; run `npm install` at repo
   root so `package-lock.json` registers the workspace; confirm
   `injectUiSource()` in `vite.config.ts` (copy the pattern from an
   existing app). jsdom polyfill rules apply only if localStorage is used
   (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-gold: #e3b04b`
   (brand accent), `--color-charcoal: #2b2b28` (form panel); set Roboto
   (300;400;500) via Google Fonts `<link>` in `index.html`; Tailwind
   arbitrary value for the modal shadow
   (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]` — underscores safer than
   commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, AuthModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Mezzanine" + demo label
   e.g. "Launch Mezzanine") + gold **4px-radius** button; TDD: renders
   heading + button; click opens modal (state lifted or context/callback).
5. **AuthModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, close × with `aria-label="Close"`; conditional render (not in
   DOM when closed) keeps tests unambiguous.
   - Modal shell: `max-w-[900px]`, `rounded-none` (SQUARE — NOT
     `rounded-lg` like Narthex), the shadow above, `overflow-hidden`,
     font-size 14px.
   - **Close ×**: 40×40 absolute top-right, white glyph on
     `bg-black/10` square (`aria-label="Close"`).
   - **Split body** (`grid grid-cols-1 md:grid-cols-2`): LEFT = image column
     (cover-cropped `https://picsum.photos/seed/mezzanine-1/900/600`,
     `h-[300px] md:h-auto` — the mobile 300px banner comes free); RIGHT =
     charcoal `bg-[#2b2b28]` panel with the auth content.
6. **Auth panel** — `SignInUpTabs` (state `activeTab`, default "signin";
   accessible tab semantics + the cross-tab links switch it):
   - Tabs row: "Sign In" / "Sign Up", 16px, no border, inactive
     `text-white/10`, active `text-[#e3b04b]`, mb-5.
   - **SignInForm**: uppercase 12px tracking-wide labels; underline inputs
     (`bg-transparent border-0 border-b border-white/10 h-[30px] p-0
rounded-none text-white/70 placeholder:text-white/20`); full-width
     square gold submit `h-[52px] w-full bg-[#e3b04b] text-white` (radius
     4px); Remember Me custom checkbox (visually-hidden input + 16×16
     `rounded-[3px] border border-white/40` indicator, gold fill + white
     check on checked, description `text-white/30`); gold "Forgot Password"
     link; "Not a member? Sign Up" link → switches tab.
   - **SignUpForm**: same underline-input pattern for Full Name, Email
     Address, Password; "I agree all statements in terms of service"
     checkbox (gold "terms of service" link); "Sign Up" submit; "I'm
     already a member! Sign In" link → switches tab.
7. **Responsive** — verify the two modal columns stack (photo → 300px
   banner, form below) and nothing overflows the 900px dialog at mobile
   widths (Bootstrap mobile margins ≈ `mx-2`); launch section stays
   full-viewport.
8. **Gate + ship** — `scripts/verify-app.sh mezzanine` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 808) `[x]` with
   `https://mezzanine.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **Launch button is GOLD `#e3b04b` with a 4px radius** — NOT salmon
  `#fb8691` (Modal 08), NOT Lobby's olive 4px. The custom
  `.btn { border-radius: 4px }` returns to a small radius (Modal 07 style),
  NOT the 40px pill. Do not copy Narthex's pill button.
- **Modal corners are SQUARE (border-radius 0)** — Narthex/Modal 08 was
  ROUNDED (0.3rem); Modal 09 explicitly zeroes it. Use `rounded-none`.
- **Modal is 900px wide** — NOT Narthex's 600px, NOT Lobby's 950px; same as
  Gateway/Modal 06 (scaffold from `apps/gateway`).
- **The form panel is CHARCOAL `#2b2b28`** — the entire right column is a
  dark surface; all form text is rgba-white. Do NOT render white Bootstrap
  input boxes — the inputs are **underline-style**: transparent bg, no
  border, `border-bottom: 1px solid rgba(255,255,255,0.1)`, height 30px,
  radius 0, padding 0. Placeholders `rgba(255,255,255,0.2)`.
- **Submit buttons are full-width square GOLD, 52px tall** (`.modal-content
.btn-primary { background: #e3b04b !important; height: 52px }` on a
  `form-control` block input) — NOT the launch button's padded style.
- **Close × is white on a `rgba(0,0,0,0.1)` square (40×40)** — like
  Modal 06/07; differs from Narthex's plain white × (no background).
- **Inactive tabs are nearly invisible** `rgba(255,255,255,0.1)` — match
  the source; the gold active tab is the only strong tab affordance.
- **Checkbox**: `--color: #e3b04b` — checked = gold fill + white check-mark
  SVG; indicator 16×16, radius 3px, border `rgba(255,255,255,0.4)`; label
  description `rgba(255,255,255,0.3)`. Keep the input visually hidden but
  focusable for a11y (don't `display: none` the input like the source does —
  use sr-only pattern so keyboard users can tab to it).
- **The left photo collapses to a 300px banner on mobile** — Bootstrap
  media rule `.modal-content .img { height: 300px }` at ≤767.98px; the two
  columns stack (photo above form). Verify in the browser at mobile width.
- **The photo is a real photograph** (B&W bass guitar) — NEVER copy
  `images/bg-1.jpg`; use `https://picsum.photos/seed/mezzanine-1/900/600`
  (deterministic seed, e.g. `mezzanine-1`).
- **The "Remember Me" / "terms of service" checkbox row** uses the custom
  fill-checkbox component style — one gold-filled custom checkbox
  component reused in both tabs.
- **Cross-tab links** ("Not a member? Sign Up", "I'm already a member!
  Sign In") are Bootstrap `data-toggle="tab"` links — they switch the tab
  pane; recreate with the same tab state handler (not two separate routes).
- **`@` in the email placeholder is plain text** — no weight trick (that
  was Modal 08's confirmation dialog; this template has no styled email
  display).
- **Source has NO footer** — add the mandatory Component Dock attribution
  footer (repo convention); the modal itself needs `aria-label` (e.g.
  "Sign in or sign up").
- **js/main.js**: `fullHeight()` → `min-h-screen` flex centering; the
  auto-show line is commented out — modal opens ONLY on launch-button click.
- **Form submit behavior**: the source forms `action="#"` (no real
  backend) — keep the demo behavior (no navigation, no validation errors
  needed), but implement typed controlled inputs so the 100%-coverage tests
  can exercise typing/submit cleanly.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow; `bg-[#e3b04b]` and
  `bg-[#2b2b28]` arbitrary colors are fine (or register `--color-gold` /
  `--color-charcoal` in `@theme` for cleaner class names).
- The launch heading is the demo name "Mezzanine" — content KIND preserved
  (demo heading + single primary CTA), per the naming mandate.
