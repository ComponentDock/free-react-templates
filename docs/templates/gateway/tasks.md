# Gateway (ColorLib Modal 06) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Gateway** (NEW name —
> the ColorLib source keeps its name "Modal 06"). Implementation ships on
> `feat/template-gateway` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 06" — free single-page signup-form modal
  component template (source: https://colorlib.com/wp/template/modal-06/).
  TEMPLATES.md row: line 805 (**Bootstrap Modals (20)**, header line 798).
  The `modal-06` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-06/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-06/`
  (HTTP 200, 16.9KB HTML, `<title>` "Modal 06"; the Bootstrap UI-component
  series lives under the `/theme/bootstrap/` prefix). Stylesheets:
  `css/style.css` (224.5KB = Bootstrap 4.3.1 + the template's custom ftco
  styles in the LAST ~5KB starting at the
  `body { font-family: "Roboto" ... }` rule — token source),
  `css/ionicons.min.css` (close × + beer/bicycle glyphs),
  `css/flaticon.css` (loaded but NO flaticon classes used — dead include,
  skip it). Roboto (300/400/700) cf-fonts @font-face blocks in the head.
  `js/main.js`: tooltip init (NO tooltip elements exist here — dead code),
  `fullHeight()` (recreate with `min-h-screen` flex centering) +
  COMMENTED-OUT `modal('show')` — opens only on click. Screenshot
  (`modal-06.jpg`, 1200×972) browser-verified 2026-08-16: modal OPEN — flat
  dark-grey backdrop, SQUARE-cornered ~900px card split 50/50: LEFT teal
  `#5eb7b7` panel (small white glyph top-left, white "Plan your activities
  and control your progress online.", huge white bicycle line-icon); RIGHT
  navy `#1b2a49` panel ("Create Your Account", three underline inputs —
  FULL NAME "John Doe", EMAIL ADDRESS "john@doe@gmail.com", PASSWORD — small
  square outline checkbox "I agree all statements", full-width teal "Sign
  Up" button, "I'm already a member" link); white × close top-right on a
  translucent-black square.
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 06" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    06" (teal `#5eb7b7` bg/border, WHITE text, **4px radius — NOT a pill**,
    16px/24px padding, Roboto 15px, sentence case).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop) →
    `div.modal-dialog.modal-dialog-centered` (max-width **900px**) →
    `div.modal-content` (border none, padding 0, **border-radius 0 —
    SQUARE**, font-size 14px, `box-shadow: 0 10px 34px -15px
rgba(0,0,0,0.24)`, bg `#fff`):
    - header (padding 0, border none): `button.close` 40×40, absolute
      top-right, z-index 1, `ion-ios-close`, aria-label Close. **bg
      `rgba(0,0,0,0.1)` + WHITE glyph** (DIFFERENT from Modal 05's
      translucent-black × with no background — do NOT copy the sibling).
    - `div.row.no-gutters` (two equal columns):
      - **Left panel** `div.col-md-6.d-flex` → `div.modal-body.p-5.img.d-flex
.color-1.text-center.align-items-center` — bg **teal `#5eb7b7`**;
        the `.img` class (cover bg) carries NO background image → renders
        SOLID color; p-5 (3rem) padding; centered:
        - `span.icon-2.ion-ios-beer` — absolute top 0 left 20px, 30px,
          white-ish glyph (renders as a small clipboard-like mark).
        - `h5` "Plan your activities and control your progress online"
          (Roboto 400, `rgba(255,255,255,0.8)`).
        - `div.icon` → `span.ion-ios-bicycle` — **10vw** (100px ≤767.98px),
          white line icon.
      - **Right panel** `div.col-md-6.d-flex` → `div.modal-body.p-5.img.d-flex
.align-items-center.color-2` — bg **navy `#1b2a49`** → `div.text.w-100
.py-0.py-md-5`:
        - `h3.mb-4` "Create Your Account" (Roboto 400, white-ish).
        - `form.signup-form`:
          - 3 × `div.form-group.mb-3`: `label.label[for=name|email|password]`
            (uppercase 12px, letter-spacing 1px, white-ish) +
            `input.form-control` — **underline style**: transparent bg,
            border none except `border-bottom: 1px solid
rgba(255,255,255,0.1)`, radius 0, padding 0, height 30px, text
            `rgba(255,255,255,0.7)`, placeholders `rgba(255,255,255,0.2)`
            ("John Doe" / "john@doe@gmail.com" / "Password"). No visible
            focus change (source removes the ring — see a11y note).
          - `div.form-group.d-md-flex` → `div.form-check.w-100.text-left` →
            `label.custom-control.fill-checkbox` (--color `#47e4bb`):
            `input.fill-control-input` (checkbox, `display:none` but
            checkable) + `span.fill-control-indicator` (16×16, radius 3px,
            absolute top 5px left 0, border `1px solid rgba(255,255,255,0.4)`;
            `:checked` → bg `var(--color)` + border-color + white check SVG
            at 80% size) + `span.fill-control-description` "I agree all
            statements" (`rgba(255,255,255,0.3)`).
          - `div.form-group` → `button[type=submit].form-control.btn.btn-primary.rounded.submit.px-3`
            "Sign Up" — full-width, **52px tall** (`.modal-content
.btn-primary { height: 52px }`), teal bg/border, WHITE text,
            **4px radius** (custom `.btn { border-radius: 4px }` is the LAST
            radius rule — beats `.form-control`'s 5px and Bootstrap's
            `.rounded` 0.25rem; NOT a pill).
          - `a[href="#"]` "I'm already a member" — global `a { color:
#5eb7b7 }` → teal link on navy; login link, not an input.
  - Mobile (`max-width 767.98px`): `row.no-gutters` collapses — teal panel
    stacks above the navy form; bicycle icon snaps to 100px; right panel's
    inner wrapper loses vertical padding (`py-0`); modal keeps Bootstrap
    mobile margins. No horizontal overflow expected.
  - NO navbar, NO other sections, NO images (both panels solid color). NO
    footer in the original — add the mandatory Component Dock attribution
    footer (repo convention).
- **Design tokens:** brand teal **#5eb7b7** (primary — launch + Sign Up
  buttons, link color + hover, LEFT panel bg); deep navy **#1b2a49** (RIGHT
  panel bg); mint **#47e4bb** (checkbox checked fill); white **#fff**
  (launch page, modal content bg, button text, close glyph); panel text
  layers `rgba(255,255,255,0.8)` (body/headings/labels) · `0.7` (input
  text) · `0.3` (checkbox description) · `0.2` (placeholders); panel borders
  `rgba(255,255,255,0.1)` (input underline) · `0.4` (checkbox border); close
  bg `rgba(0,0,0,0.1)`; modal shadow `0 10px 34px -15px rgba(0,0,0,0.24)`;
  fonts **Roboto** (300/400/700; body 14px / line-height 1.8, headings
  weight 400 / line-height 1.5); BUTTONS **4px radius** (NOT the 40px pill
  of Modal 05); underline inputs (transparent, bottom rule only, 30px);
  uppercase 12px letter-spacing-1px labels; 16×16 radius-3 checkbox with
  mint fill + white check.

## Implementation task outline

1. **Scaffold app** — `npm create vite@latest`-pattern copy of the simplest
   existing app (e.g. `apps/doorway` or `apps/portal` — same Modal series),
   rename package to `@free-react-templates/gateway`, set `public/CNAME` =
   `gateway.free.componentdock.com`, `"homepage"` =
   `https://gateway.free.componentdock.com`; run `npm install` at repo
   root so `package-lock.json` registers the workspace; then `npm run
readme:status`; confirm `injectUiSource()` in `vite.config.ts` (copy the
   pattern from an existing app). jsdom polyfill rules apply only if
   localStorage is used (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #5eb7b7`
   (teal), `--color-navy: #1b2a49`, `--color-mint: #47e4bb`; set Roboto
   (300;400;700) via Google Fonts `<link>` in `index.html`; Tailwind
   arbitrary value for the shadow
   (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]` — underscores safer than
   commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, SignupModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Gateway" + demo label
   e.g. "Launch Signup") + teal 4px-radius button; TDD: renders heading +
   button; click opens modal (state lifted or context/callback).
5. **SignupModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, close × with `aria-label="Close"`; conditional render (not in DOM
   when closed) keeps tests unambiguous.
   - Modal shell: max-w 900px, `rounded-none` (SQUARE), the shadow above,
     close × 40×40 white glyph on `bg-black/10` top-right.
   - Two-panel `grid md:grid-cols-2`:
     - **Left (teal) panel** — solid `bg-brand`; small beer glyph top-left
       (`Beer` from lucide — probe; fall back to inline SVG), centered h5
       "Plan your activities and control your progress online", big bicycle
       icon (`Bike` / inline SVG, `text-[10vw]` md / `text-[100px]` mobile).
     - **Right (navy) panel** — `bg-navy`, heading "Create Your Account"
       (h3), form: labeled Full Name / Email Address / Password underline
       inputs (transparent, `border-b border-white/10`, `h-[30px]`,
       `placeholder-white/20`, uppercase 12px tracking-wide labels —
       `htmlFor`/`id` wired properly; the source's `for=` attrs point at
       missing ids, fix that), mint-fill agreement checkbox "I agree all
       statements" (real `<input type="checkbox">` — `sr-only`/peer pattern
       instead of the source's `display:none` so it stays
       keyboard-accessible), full-width teal "Sign Up" button (52px,
       `rounded-[4px]`), teal "I'm already a member" link.
   - Submit → success/confirmation state (e.g. swap the form for a "Check
     your inbox" message) so the interaction is testable; un-mounts the
     inputs — assert `queryByLabelText(...)` absent afterwards.
6. **Responsive** — `md:grid-cols-2` stacks to one column under 768px (teal
   panel on top); verify no overflow; icon 100px on mobile.
7. **Gate + ship** — `scripts/verify-app.sh gateway` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 805) `[x]` with
   `https://gateway.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **The close × is WHITE on `rgba(0,0,0,0.1)`** — Modal 06's
  `.modal-content button.close` has a custom translucent-black square
  background + white glyph (unlike Modal 05's plain translucent-black ×).
  Do NOT copy the sibling's pattern.
- **Buttons are 4px-radius, NOT pills** — the custom
  `.btn { border-radius: 4px }` here (vs Modal 05's 40px pill). The Sign Up
  button's `.rounded` class (Bootstrap 0.25rem) loses to the later custom
  `.btn` rule. Screenshot confirms a gently-rounded wide Sign Up button.
- Brand teal here is **`#5eb7b7`** — NOT Modal 05's `#3e64ff` blue, Modal
  04's `#12d3cf` teal, or Modal 03's `#39bdc8`. Same series, different
  accent; verify against this spec.
- **No images anywhere** — both modal panels render SOLID color (the source
  `.img` class has no background-image). No picsum seeds needed. Do not
  invent a photo.
- **Two-tone panels are the signature** — teal left (brand/visual) + navy
  right (form). Do not merge them or equalize the colors.
- **Font is Roboto 300/400/700** (NOT Poppins like Modal 05). Body 14px/1.8,
  headings weight 400/line-height 1.5.
- Icons: lucide-react — probe
  `node -e "console.log(typeof require('lucide-react').Beer, typeof require('lucide-react').Bike, typeof require('lucide-react').X)"`;
  if `Beer`/`Bike` are undefined use inline SVG line paths (beer mug ~30px
  top-left; bicycle ~10vw/100px).
- Source's `label for="name/email/password"` point at inputs with NO ids —
  wire `htmlFor`/`id` pairs properly in the recreation (a11y improvement,
  and required for `getByLabelText` in tests).
- **Checkbox**: the source uses `display:none` on the real checkbox input +
  sibling indicator — recreate with the `sr-only`/peer Tailwind pattern so
  it's still keyboard-focusable/checkable (a11y), keeping the 16×16 radius-3
  indicator and the mint `#47e4bb` fill + white check when `:checked`.
- **Input focus**: the source strips the focus ring entirely
  (`box-shadow: none`, transparent border). Keep the underline look but add
  a subtle focus-visible treatment (e.g. brighten the bottom rule to
  `white/30`) — documented a11y deviation.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
- Form success swap: the submit button becomes a success message and the
  inputs unmount — assert `queryByLabelText('Full Name')` is absent, don't
  try to read the input's value after submit.
