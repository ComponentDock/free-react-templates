# Portal (ColorLib Modal 03) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Portal** (NEW name —
> the ColorLib source keeps its name "Modal 03"). Implementation ships on
> `feat/template-portal` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 03" — free single-page winter-sale promo-modal
  component template (source: https://colorlib.com/wp/template/modal-03/).
  TEMPLATES.md row: line 802 (**Bootstrap Modals (20)**, header line 798).
  The `modal-03` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-03/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-03/`
  (HTTP 200, 6.1KB HTML; the Bootstrap UI-component series lives under the
  `/theme/bootstrap/` prefix). Stylesheets: `css/style.css` (223.7KB =
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~4KB
  starting at `.ftco-section h2` — token source), `css/ionicons.min.css`
  (close ×), `css/flaticon.css` (snowflake `\f100`), Lato (300/400/700) +
  Pacifico (400) webfonts. `js/main.js`: `fullHeight()` (recreate with
  `min-h-screen` flex centering) + COMMENTED-OUT `modal('show')` — opens only
  on click. Screenshot (`modal-03.jpg`, 1200×972) browser-verified
  2026-08-16: modal OPEN — grey backdrop, split dialog, teal panel left
  (WINTER / black Pacifico "Sale" + 2 white snowflakes + white 50×2 divider /
  giant white "40 % off" / white "TO ALL COLORLIB PRODUCTS"), winter-photo
  right column with teal SHOP NOW button, close × top-right. Computed styles
  read via CDP on the live page confirm the cascade quirks below.
- **Structure observed (1:1):**
  - Launch: `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` (window height via
    fullHeight(); recreate `min-h-screen` + flex centering) →
    `div.col-md-6.text-center.d-flex.align-items-center` → `div.wrap.w-100`:
    `h2.mb-2` "Modal 03" + `button.btn.btn-primary.py-3.px-4` "Launch Modal
    03" (teal bg/border, WHITE text, 4px radius, 16px/24px padding, Lato 15px
    — rectangle, not a pill, not uppercase).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true, hidden until toggled, dark backdrop) →
    `div.modal-dialog.modal-dialog-centered` (max-width **700px**) →
    `div.modal-content` (border none, radius 0, `color: white`, 14px,
    `box-shadow: 0 10px 34px -15px rgba(0,0,0,0.24)`):
    - header (padding 0, border none): `button.close` 40×40, absolute
      top-right, bg `rgba(0,0,0,0.1)`, `ion-ios-close`, aria-label Close.
    - `div.row.no-gutters`:
      - `col-md-5.d-flex` → `div.modal-body.p-5.color-1.d-flex` (teal
        `#39bdc8`, p-5 = 48px):
        - `span.icon-2.flaticon-snowflake`: 120px, absolute top-right,
          `rgba(255,255,255,0.3)`, z -1 (watermark behind "Sale").
        - `div.w-100.text.text-center`: `span.subheading` "Winter" (14px
          uppercase `#000` ls 1px — BLACK on teal); `h3.sale` "Sale"
          (105px **Pacifico** `#000`, mb 30px, `span.icon` snowflake 60px
          white absolute top-left z 1, `:after` 50×2px white divider
          centered bottom); `h2` (inline-block lh 1): `span` "40" (130px
          /700 white, ml -40px) + `sup` "%" (30px/700 absolute right -30px
          top 50% mt 10px) + `sub` "off" (16px/700 uppercase absolute right
          -30px bottom 50% mb -35px); `p.upper` "To all colorlib products"
          (uppercase, white, 14px).
      - `col-md-7.d-flex` → `div.modal-body.p-5.img.d-flex.align-items-center`
        (bg `images/bg-1.jpg` cover — winter photo; stretch height = teal
        column; content vertically centered → button sits MIDDLE of photo):
        `div.text.w-100` → `a.btn.btn-primary.d-block.py-3` "Shop now"
        (full-width, teal bg/border, text `#000` — see cascade note, 4px
        radius, uppercase ls 1px 14px).
  - Mobile (`max-width 767.98px`): columns stack; right `.img` gets fixed
    `height: 300px`.
  - NO navbar, NO other sections. NO footer in the original — add the
    mandatory Component Dock attribution footer (repo convention).
- **Color cascade quirks (verified via computed styles on the live page):**
  - `.btn-primary` base (ftco): `background:#39bdc8 !important; border:1px
solid #39bdc8 !important; color:#fff !important` → LAUNCH button = white
    text.
  - `.modal-content .modal-body .btn-primary { color:#000 !important;
text-transform:uppercase; letter-spacing:1px; font-size:14px }` → SHOP
    NOW = BLACK text on teal.
  - `.subheading { color:#000 }` → "Winter" = BLACK on teal (screenshot
    pixels confirm dark glyphs at the top of the panel).
  - Everything else in the teal panel is white: "40", "%", "off", offer
    line, snowflakes, divider. Do NOT flip these to match the base
    `.btn-primary` white — the black-in-modal-body contrast is deliberate.
- **Design tokens:** teal **#39bdc8** (left panel fill + both buttons);
  black **#000** (Winter kicker, Sale script, SHOP NOW text); white **#fff**
  (40 % off block, offer line, snowflake ornaments incl. 120px watermark at
  `rgba(255,255,255,0.3)`, divider, launch-button text); modal shadow
  `0 10px 34px -15px rgba(0,0,0,0.24)`; square dialog (radius 0); close
  `rgba(0,0,0,0.1)`; fonts **Lato** (300/400/700) + **Pacifico** (400);
  buttons 4px radius (NOT pills); launch padding 16px 24px; SHOP NOW
  full-width `py-3`; page bg `#fff`.

## Implementation task outline

1. **Scaffold app** — `npm create vite@latest`-pattern copy of the simplest
   existing app (e.g. `apps/portico`), rename package to
   `@free-react-templates/portal`, set `public/CNAME` =
   `portal.free.componentdock.com`, `"homepage"` =
   `https://portal.free.componentdock.com`; run `npm install` at repo root so
   `package-lock.json` registers the workspace; then `npm run readme:status`;
   confirm `injectUiSource()` in `vite.config.ts` (copy the pattern from an
   existing app). Remember jsdom polyfill rules only if localStorage is used
   (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #39bdc8`;
   set Lato + Pacifico via Google Fonts `<link>` in `index.html`; Tailwind
   arbitrary values for the shadow (`shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]`
   — underscores safer than commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, PromoModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Portal" + demo label
   e.g. "Launch Winter Sale") + teal rectangular button; TDD: renders
   heading + button; click opens modal (state lifted or context/callback).
5. **PromoModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, close × with `aria-label="Close"`; conditional render (not in DOM
   when closed) keeps tests unambiguous.
   - Teal panel: "Winter" kicker (black, uppercase, ls 1px), "Sale" Pacifico
     ~105px black + `Snowflake` ornament (white, absolute top-left) + white
     50×2 divider (`after`-equivalent: a `<span>`/div) + big "40" white
     130px/700 with "%" and "off" positioned beside it + white uppercase
     offer line ("To all ColorLib products" → paraphrase, e.g. "To all
     Component Dock products" — NO ColorLib string in app code).
   - Photo panel: picsum seed (`picsum.photos/seed/portal-1/600/600`),
     cover; SHOP NOW button full-width, teal, BLACK text, uppercase ls 1px,
     14px.
   - Close ×: lucide `X`, 40×40, absolute top-right,
     `bg-black/10` (rgba(0,0,0,0.1)).
6. **Responsive** — `md:` grid (5/7 split) → stack under 768px; photo height
   300px on mobile (`max-md:h-[300px]`).
7. **Gate + ship** — `scripts/verify-app.sh portal` (typecheck + lint + 100%
   coverage tests + build), `npm run spec:validate`, then the standard PR →
   immediate squash merge flow; bookkeeping marks the single TEMPLATES.md row
   (line 802) `[x]` with `https://portal.free.componentdock.com` + `npm run
readme:status`.

## Pitfalls / notes for the implementer

- **Text colors on teal are intentional and mixed**: Winter kicker and SHOP
  NOW are BLACK (`#000`), while 40 % off / offer line / snowflakes are WHITE.
  The live page's computed styles confirm the `.modal-body .btn-primary`
  `color:#000 !important` override — do not "correct" SHOP NOW to white.
- The launch button is NOT uppercase and NOT a pill (4px radius, white text)
  — it uses the base `.btn-primary` rule; SHOP NOW IS uppercase/letter-spaced
  14px with black text. Match the distinction.
- "Sale" is Pacifico 105px — load Pacifico (single 400 weight) + Lato via
  Google Fonts; never copy the cf-fonts woff2 assets.
- The snowflake watermark (`icon-2`) is `rgba(255,255,255,0.3)` at 120px,
  absolutely positioned at the teal panel's top-right, behind the text
  (z -1) — include it; the small 60px white ornament sits at the "Sale"
  headline's top-left (z 1). lucide `Snowflake` covers both; probe first:
  `node -e "console.log(typeof require('lucide-react').Snowflake)"`.
- Divider: `h3.sale:after` is a 50×2px white bar centered at the heading's
  bottom edge (`margin: 0 auto`) — the "40" sits below it. In Tailwind,
  emulate with a centered `h-[2px] w-[50px] bg-white` element or an
  `after:` utility.
- The 40/%/off stack: container `inline-block` line-height 1; "40" has
  `margin-left: -40px` (pulls the number left of center); "%" 30px and
  "off" 16px uppercase are absolutely positioned to the right of the number
  (right: -30px). A flex row with sup/sub-styled spans is fine — keep the
  ~40px left offset and the tight right-aligned %/off.
- Photo choice: the source `bg-1.jpg` shows people lying in snow (top-down,
  colourful winter clothing) — pick a picsum seed that reads as a winter
  scene (e.g. `seed/portal-1`, verify visually).
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
