# Ingress (ColorLib Modal 10) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Ingress** (NEW name —
> the ColorLib source keeps its name "Modal 10"). Implementation ships on
> `feat/template-ingress` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 10" — free single-page newsletter-signup
  modal component template (source:
  https://colorlib.com/wp/template/modal-10/). TEMPLATES.md row: line 809
  (**Bootstrap Modals (20)**, header line 798). The `modal-10` slug appears
  exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-10/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-10/`
  (HTTP 200, ~9KB HTML, `<title>` "Modal 10"; the Bootstrap UI-component
  series lives under the `/theme/bootstrap/` prefix). Stylesheets:
  `css/style.css` (225KB = Bootstrap 4.3.1 + the template's custom ftco
  styles in the LAST ~210 lines starting at the
  `button { transition: .3s all ease }` rule — token source),
  `css/ionicons.min.css` (close × glyph). **Poppins** (300;400;500) cf-fonts
  @font-face blocks in the head; headings use `"Poppins", Arial, sans-serif`,
  body uses the Bootstrap system stack. `js/main.js`: tooltip init (NO
  tooltip elements exist here — dead code), `fullHeight()` (recreate with
  `min-h-screen` flex centering) + COMMENTED-OUT `modal('show')` — opens only
  on click. Screenshot (`modal-10.jpg`, 1200×972) browser-verified
  2026-08-16: modal OPEN — medium-grey backdrop, ROUNDED-corner card, 230px
  header band (snow-capped-mountain / twilight-sky photo washed by a
  purple-indigo 45° gradient at 30% opacity), "Newsletter" white bold near
  the top of the image, small white × top-right, white 200px circle with an
  envelope+@ email glyph straddling the image/white boundary, dark
  "Subscribe to our newsletter" line, light-grey email input + vibrant-blue
  "Subscribe" button joined in one row.
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 10" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    10" (BLUE `#3e64ff` bg/border, WHITE text, **40px PILL radius — like
    Modal 08, NOT Modal 09's 4px**, 16px/24px padding, 15px font,
    `box-shadow: none`, sentence case; hover inverts to transparent + blue
    text).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop
    `rgba(0,0,0,0.5)`) → `div.modal-dialog.modal-dialog-centered`
    (**max-width 500px** — narrowest of the series) → `div.modal-content`
    (border none, `padding: 0 !important`, **ROUNDED corners — Bootstrap
    default border-radius 0.3rem** (NOT Modal 09's square 0), bg #fff,
    shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`):
    - `div.modal-header.img` — padding 0, border none, **height 230px**,
      z-index 0, INLINE `background-image: url(images/bg-1.jpg)` (`.img`:
      cover + center; snow-capped mountains / twilight sky in the
      screenshot); `:after` = **`linear-gradient(45deg, #dd00ff 0%,
#3e65ff 100%)` at opacity .3**, z-index -1 (brand wash over the
      photo).
      - `button.close.d-flex.align-items-center.justify-content-center` —
        absolute top 0 right 0, **40×40**, padding/margin 0, z-index 1,
        **white × at Bootstrap `.close` opacity .5** (glyph centered by
        d-flex), `aria-label="Close"`.
    - `div.modal-body.pt-md-0.pb-5.px-4.px-md-5.text-center` — border none,
      overflow hidden, **`margin-top: -180px`** (body pulled 180px UP over
      the header band), z-index 2, centered:
      - `h2` "Newsletter" — **font-weight 700, color #fff** (sits ON the
        image band).
      - `div.icon` — **200×200 circle** (`border-radius: 50%`), margin 0
        auto + mb 10px, bg `rgba(255,255,255,0.2)`, contains
        `img[src=images/email.svg]` (max-width **70%** — envelope + @
        glyph).
      - `h4.mb-2` "Subscribe to our newsletter" — **18px**, dark (Bootstrap
        default).
      - `form.subscribe-form` → `div.form-group.d-flex` (mb 0, radius 0):
        - `input.form-control.rounded-left` — placeholder "Enter email
          address"; bg **`rgba(0,0,0,0.05)`** !important, border none,
          color/placeholder **`rgba(0,0,0,0.3)`** !important, font-size
          **16px**, radius 0 + left 0.25rem; focus = no outline/shadow;
          height **52px** (custom `.form-control` base).
        - `input.form-control.submit.px-3.rounded-right[type=submit]`
          "Subscribe" — **width 130px, height 52px**, white text, bg
          **`#3e64ff`** !important, border none, radius 0 + right 0.25rem →
          ONE joined 52px row (flex-1 grey field + fixed 130px blue button).
  - Mobile (`max-width: 575.98px`): dialog keeps Bootstrap's mobile margins
    (0.5rem); header band stays 230px (no custom media rules); the -180px
    pull-up and 200px circle keep their geometry on ALL viewports (the
    overlap is a desktop AND mobile feature — NOT a stacking layout like
    Modal 09). The joined form row does NOT wrap — verify no horizontal
    overflow at the narrowest widths. Launch section stays full-viewport.
  - NO navbar, NO other sections, NO footer in the original — add the
    mandatory Component Dock attribution footer (repo convention).
- **Design tokens:** blue **#3e64ff** — launch button bg/border, subscribe
  submit bg, form-control focus border; magenta **#dd00ff** — gradient
  partner (`linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)` at opacity .3
  over the header photo; the blue stop is the near-identical `#3e65ff`);
  white **#fff** — launch page, modal bg, button/submit text, close ×, h2,
  icon circle sits on white; dark `#212529` — headings (launch "Modal 10",
  h4); `rgba(0,0,0,0.05)` input bg / `rgba(0,0,0,0.3)` input text +
  placeholder; icon circle bg `rgba(255,255,255,0.2)`; BUTTONS radius
  **40px** (pill), font-size 15px, no shadow; modal max-width **500px**,
  **ROUNDED 0.3rem**, shadow `0 10px 34px -15px rgba(0,0,0,0.24)`, backdrop
  `rgba(0,0,0,0.5)`; header band **230px**; body pull-up **-180px**; submit
  **130×52**; close 40×40 white × at opacity .5; icon circle 200×200; inputs
  16px / radius 0 + rounded-left/right 0.25rem; fonts **Poppins**
  (300/400/500 via Google Fonts; headings Poppins, body system stack 16px).

## Implementation task outline

1. **Scaffold app** — copy the closest sibling `apps/narthex` (Modal 08 —
   the other 40px-PILL launch button + ROUNDED modal in the series), rename
   package to `@free-react-templates/ingress`, set `public/CNAME` =
   `ingress.free.componentdock.com`, `"homepage"` =
   `https://ingress.free.componentdock.com`; run `npm install` at repo root
   so `package-lock.json` registers the workspace; confirm
   `injectUiSource()` in `vite.config.ts` (copy the pattern from an existing
   app). jsdom polyfill rules apply only if localStorage is used (it isn't
   here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #3e64ff`
   (blue brand accent), `--color-magenta: #dd00ff` (gradient partner), and
   use arbitrary values for the gradient wash
   (`bg-[linear-gradient(45deg,#dd00ff,#3e65ff)]` — commas need underscores
   or arbitrary-value syntax in Tailwind v4; `opacity-30` on the overlay);
   set Poppins (300;400;500) via Google Fonts `<link>` in `index.html`.
3. **Layout shell** — `App.tsx` composes: LaunchSection, NewsletterModal
   (state `open`, conditional render), AttributionFooter. `main` landmark
   for the launch section (full-viewport `min-h-screen` flex centering),
   footer in `contentinfo`.
4. **LaunchSection component** — heading (new name "Ingress" + demo label
   e.g. "Launch Ingress") + blue **40px-pill** button (`rounded-full`,
   `bg-[#3e64ff] text-white border border-[#3e64ff] hover:bg-transparent
hover:text-[#3e64ff]`, px-6 py-4); TDD: renders heading + button; click
   opens modal (state lifted or context/callback).
5. **NewsletterModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label="Newsletter signup"`, Escape-to-close,
   backdrop click closes, close × with `aria-label="Close"`; conditional
   render (not in DOM when closed) keeps tests unambiguous.
   - Modal shell: `max-w-[500px]`, **`rounded-lg` (0.3rem — ROUNDED, NOT
     `rounded-none` like Mezzanine)**, `overflow-hidden`, the shadow above
     (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]`), font-size 16px.
   - **Header band**: `h-[230px]` relative, cover-cropped
     `https://picsum.photos/seed/ingress-1/500/230` as background-image
     (`bg-cover bg-center`); overlay div `absolute inset-0 opacity-30
bg-[linear-gradient(45deg,#dd00ff,#3e65ff)]`.
   - **Close ×**: 40×40 absolute top-right, white glyph at ~50% opacity
     (`text-white/50`), centered flex, `aria-label="Close"`.
   - **Body** (`relative z-10 -mt-[180px] px-4 md:px-5 pb-12 pt-0
text-center`): h2 "Newsletter" `text-white font-bold`; icon circle
     `mx-auto mb-2.5 size-[200px] rounded-full bg-white/20 flex items-center
justify-center` with a lucide `Mail` icon (`size-[70%]`) inside; h4
     "Subscribe to our newsletter" `text-lg`; then the form.
6. **SubscribeForm component** — one joined row (`flex`, 52px tall):
   - Email input: `flex-1 h-[52px] rounded-l bg-black/5 border-0 px-4
text-base text-black/30 placeholder:text-black/30 focus:outline-none
focus:shadow-none` (rounded-left 0.25rem; the source input radius-0 +
     left-corner utility — `rounded-l` gives both left corners).
   - Submit: `w-[130px] h-[52px] rounded-r bg-[#3e64ff] text-white text-base
border-0` — label "Subscribe"; a real `<button type="submit">` (the
     source uses `input[type=submit]`; either is fine — keep the label and
     styling).
   - Demo submit behavior (source `action="#"`): typed controlled input;
     on submit, keep the demo behavior (e.g. no navigation; optionally show
     the entered value or keep the page static) so tests can exercise
     typing + submit. TDD: renders input + button, typing updates value,
     submit fires with the value.
7. **Responsive** — verify the dialog fits at mobile widths (Bootstrap
   mobile margin ≈ `mx-2`), the joined form row does NOT overflow
   horizontally (130px submit + flex-1 input at ~320px viewport), header
   stays 230px, launch section stays full-viewport. The -180px overlap is
   intentional on ALL viewports (unlike Modal 09's mobile stacking — do NOT
   stack here).
8. **Gate + ship** — `scripts/verify-app.sh ingress` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 809) `[x]` with
   `https://ingress.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **Launch button is BLUE `#3e64ff` with a 40px PILL radius** — this is the
  Modal 08/Narthex style, NOT Mezzanine/Modal 09's gold 4px. Scaffold from
  `apps/narthex` to reuse the pill pattern, but swap the color to
  `#3e64ff` (Narthex may be a different color — check its tokens; Modal 08
  was salmon `#fb8691` per the Mezzanine notes).
- **Modal corners are ROUNDED (Bootstrap 0.3rem)** — Mezzanine/Modal 09 was
  SQUARE (radius 0); Modal 10 does NOT zero it. Use `rounded-lg`, NOT
  `rounded-none`.
- **Modal is 500px wide** — the narrowest of the series (not Mezzanine's
  900px, not Lobby's 950px). `max-w-[500px]`.
- **The layout is a stacked header band + overlapping body**, NOT Modal 09's
  two-column split: `modal-header.img` (230px, background photo + gradient
  wash) on top, then `modal-body` with **`margin-top: -180px`** pulled up
  over it. The white bold "Newsletter" h2 sits ON the image; the 200px
  circle icon straddles the boundary. This overlap exists at ALL viewports —
  there is no mobile stacking here.
- **Gradient wash**: `linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)` at
  **opacity .3** over the photo (pseudo-element z-index -1 within the
  header — in React just an absolutely-positioned overlay div between the
  background and the close button). Tailwind arbitrary value: commas inside
  `bg-[linear-gradient(...)]` work but underscores are safer.
- **Close × is white at Bootstrap `.close` opacity .5** — a 40×40 absolute
  top-right button with a centered white × glyph; `.close` opacity .5 is NOT
  overridden by the custom CSS (unlike Mezzanine, where the × sat on a
  `rgba(0,0,0,0.1)` square — HERE there is NO background square, the × floats
  directly on the photo).
- **Subscribe form is a JOINED 52px row**: flex-1 grey input
  (`rgba(0,0,0,0.05)` bg, `rgba(0,0,0,0.3)` text AND placeholder, 16px,
  borderless, radius 0) with LEFT corners rounded (0.25rem) + a fixed
  **130×52** blue `#3e64ff` submit with RIGHT corners rounded. NOT two
  separate controls; NOT the white Bootstrap input boxes.
- **No custom media queries** in this template's CSS — the header stays
  230px and the overlap stays put on mobile; only the dialog margins shrink
  (Bootstrap 0.5rem). Verify the joined form row doesn't overflow at
  ~320px (the source uses `d-flex` with no wrap).
- **The icon glyph** is `images/email.svg` (envelope + @) — NEVER copy it;
  use a lucide `Mail` icon (brand blue or neutral) sized ~70% of the 200px
  circle. The header photo `images/bg-1.jpg` (snow-capped mountains /
  twilight sky) → `https://picsum.photos/seed/ingress-1/500/230`.
- **h2 is WHITE bold 700** and sits on the image band; h4 "Subscribe to our
  newsletter" is 18px and dark on the white body — two different
  treatments in the same body.
- **`js/main.js`**: `fullHeight()` → `min-h-screen` flex centering; the
  auto-show line is commented out — modal opens ONLY on launch-button click.
- **Form submit behavior**: source `action="#"` (no real backend) — keep
  the demo behavior, but implement a typed controlled input so the
  100%-coverage tests can exercise typing/submit cleanly.
- **Source has NO footer** — add the mandatory Component Dock attribution
  footer (repo convention); the modal itself needs `aria-label` (e.g.
  "Newsletter signup").
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow; `bg-[#3e64ff]` /
  `bg-[#dd00ff]` arbitrary colors are fine (or register `--color-brand` /
  `--color-magenta` in `@theme` for cleaner class names).
- The launch heading is the demo name "Ingress" — content KIND preserved
  (demo heading + single primary CTA), per the naming mandate.
