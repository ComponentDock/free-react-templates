# Vestry (ColorLib Modal 11) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Vestry** (NEW name —
> the ColorLib source keeps its name "Modal 11"). Implementation ships on
> `feat/template-vestry` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 11" — free single-page information-modal
  component template (source:
  https://colorlib.com/wp/template/modal-11/). TEMPLATES.md row: line 810
  (**Bootstrap Modals (20)**, header line 798). The `modal-11` slug appears
  exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-11/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-11/`
  (HTTP 200, ~17KB HTML, `<title>` "Modal #1" — the template's demo title
  uses the generic "Modal #1" copy). Stylesheets: `css/style.css` (1.9KB —
  the template's custom styles; token source), `css/bootstrap.min.css`
  (Bootstrap 4.3.1 — `#007bff` primary, `.close`, `.modal-content.rounded-0`),
  `fonts/icomoon/style.css` (the close × `icon-close2` glyph). **Roboto**
  system font stack (no Google-Fonts/cf-fonts link in the source — it falls
  back to the system stack; load Roboto via Google Fonts in `index.html` to
  keep the look identical). NO `js/` behavior beyond Bootstrap's data-API
  (`data-toggle` opens, `data-dismiss` closes) — no fullHeight script, nothing
  commented out. Screenshot (`modal-11.jpg`, 1200×972) browser-verified
  2026-08-16: light-gray full-viewport launch page, modal OPEN over medium-gray
  backdrop — a WHITE SQUARE-cornered card with a bold "Modal title" heading
  top-left, two gray paragraphs below, no buttons inside the body.
- **Structure observed (1:1):**
  - Launch: `div.container.content` (**height 100vh** — full-viewport) →
    `div.row.align-items-center.content` (vertical centering, full height) →
    `div.col-12.text-center` (centered column): `h3.mb-4` "Modal #1" +
    `button.btn.btn-primary` "Launch modal" (custom `.btn`: **`border-radius:
0px !important` (SQUARE)**, `border: none`, `box-shadow: 0 7px 0px -2px
rgba(0,123,255,0.3)` (soft blue under-shadow), `padding: 10px 20px
!important`; Bootstrap `.btn-primary`: bg **`#007bff`**, WHITE text; hover
    `#0069d9`; click → `outline: none` + `box-shadow: none !important`).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-labelledby, aria-hidden true, hidden until toggled, dark backdrop
    `rgba(0,0,0,0.5)`) → `div.modal-dialog.modal-dialog-centered` (Bootstrap
    default **max-width 500px**, vertically centered) →
    `div.modal-content.rounded-0` (**SQUARE corners — Bootstrap `rounded-0`
    zeroes the 0.3rem default radius**; custom `border: none`; custom shadow
    `0 10px 50px -10px rgba(0,0,0,0.3)`; bg #fff):
    - `div.modal-header` — custom: `border-bottom: none`, `padding-bottom: 0
!important`, padding-left/right **30px**: `h5.modal-title` "Modal title"
      (dark, line-height 1.5) + `button.close` (`aria-label="Close"`,
      right-floated, font-size 1.5rem, weight 700, opacity .5) containing
      `span[aria-hidden] > span.icon-close2` (near-black × glyph — recreate
      with a lucide `X`).
    - `div.modal-body` — padding-left/right **30px**: two `p` paragraphs
      ("Mist enveloped the ship three hours out from port…" / "All their
      equipment and instruments are alive…"), custom
      `p { color: #b3b3b3; font-weight: 300; }` → light-gray 300-weight text.
  - Mobile (Bootstrap): the dialog gets the Bootstrap mobile margin (0.5rem)
    and shrinks to fit; header/body paddings stay 30px; text wraps. Launch
    section stays full-viewport. NO custom media queries in this template's
    CSS.
  - NO navbar, NO other sections, NO footer in the original — add the
    mandatory Component Dock attribution footer (repo convention).
- **Design tokens:** blue **#007bff** — launch button bg (.btn-primary), hover
  `#0069d9`; button under-shadow `0 7px 0 -2px rgba(0,123,255,0.3)`. White
  **#fff** — launch page, modal content bg, button text. Dark **#212529** —
  headings ("Modal #1", "Modal title"). Light gray **#b3b3b3** — body
  paragraph text, font-weight 300. Close ×: Bootstrap `.close` default
  (near-black), opacity .5, 1.5rem, weight 700, right-floated. BUTTONS radius
  **0px (square)**, padding 10px 20px, border none; modal max-width **500px**,
  **SQUARE corners (`rounded-0`)**, shadow `0 10px 50px -10px rgba(0,0,0,0.3)`,
  backdrop `rgba(0,0,0,0.5)`; header `border-bottom: none` + padding-bottom 0;
  header/body padding-left/right **30px**; fonts **Roboto** (Google Fonts
  `<link>`; body + headings — the source uses the Roboto system stack).

> **Contrast with Ingress/Modal 10:** this is a PLAIN TEXT modal, NOT the
> image-header newsletter dialog. No photo band, no gradient wash, no 200px
> circle, no -180px overlap, no subscribe form. SQUARE corners (`rounded-0`),
> not rounded/large. Scaffold from a plain-text sibling if available (e.g.
> Modal 01/Portico, Modal 04/Threshold) and adapt, or copy `apps/ingress` and
> strip the newsletter feature — the structure here is far simpler.

## Implementation task outline

1. **Scaffold app** — copy the simplest existing modal sibling (e.g.
   `apps/portico` — Modal 01, also a plain text/simple modal — or `apps/ingress`
   and strip the newsletter body), rename package to
   `@free-react-templates/vestry`, set `public/CNAME` =
   `vestry.free.componentdock.com`, `"homepage"` =
   `https://vestry.free.componentdock.com`; run `npm install` at repo root so
   `package-lock.json` registers the workspace; confirm `injectUiSource()` in
   `vite.config.ts` (copy the pattern from an existing app). jsdom polyfill
   rules apply only if localStorage is used (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #007bff`
   (blue), `--color-ink: #212529` (dark headings), and use arbitrary values
   for the muted body text (`text-[#b3b3b3]`, `font-light`) and the button
   under-shadow (`shadow-[0_7px_0_-2px_rgba(0,123,255,0.3)]`); load **Roboto**
   via Google Fonts `<link>` in `index.html`.
3. **Layout shell** — `App.tsx` composes: LaunchSection, InfoModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading (new name "Vestry" + demo label e.g.
   "Launch Vestry") + blue **SQUARE** button (`rounded-none`, `bg-[#007bff]
text-white border-0 px-5 py-2.5 shadow-[0_7px_0_-2px_rgba(0,123,255,0.3)]
hover:bg-[#0069d9] focus:shadow-none focus:outline-none`); TDD: renders
   heading + button; click opens modal (state lifted or context/callback).
5. **InfoModal component** — a11y-first: `role="dialog"`, `aria-modal="true"`,
   `aria-label="Information"` + a labelled title, Escape-to-close, backdrop
   click closes, close × with `aria-label="Close"`; conditional render (not in
   DOM when closed) keeps tests unambiguous.
   - Modal shell: `max-w-[500px]`, **`rounded-none` (SQUARE — equals Bootstrap
     `rounded-0`; NOT `rounded-lg` like Ingress)**, `border-0`, the shadow
     above (`shadow-[0_10px_50px_-10px_rgba(0,0,0,0.3)]`), font-size 16px,
     bg white.
   - **Header**: `flex items-start justify-between border-b-0 px-[30px] pt-4
pb-0` — bold title (e.g. "Vestry") + a close × (`lucide-react` `X`,
     `size-5`, `text-neutral-800/50`, `aria-label="Close"`).
   - **Body**: `px-[30px] py-3` — two short paragraphs
     `text-[#b3b3b3] font-light` (muted placeholder prose of the same kind).
6. **Responsive** — verify the dialog fits at mobile widths (Bootstrap mobile
   margin ≈ `mx-2`), 30px paddings preserved, paragraph text wraps, launch
   section stays full-viewport.
7. **Gate + ship** — `scripts/verify-app.sh vestry` (typecheck + lint + 100%
   coverage tests + build), `npm run spec:validate`, then the standard PR →
   immediate squash merge flow; bookkeeping marks the single TEMPLATES.md row
   (line 810) `[x]` with `https://vestry.free.componentdock.com` +
   `npm run readme:status`.

## Pitfalls / notes for the implementer

- **This is a PLAIN TEXT modal — NOT Ingress/Modal 10's image-header
  newsletter dialog.** No `modal-header.img` photo band, no gradient
  `#dd00ff→#3e65ff` wash, no 200px circle, no `-180px` body pull-up, no
  subscribe form. It is the simplest modal in the series: a SQUARE card with a
  header (title + close ×) and a body of two gray paragraphs. Do NOT copy the
  Ingress newsletter feature into it.
- **Corners are SQUARE (`border-radius: 0`)** — both the launch `.btn` AND the
  modal `.modal-content.rounded-0` are square. This is Bootstrap `rounded-0`
  on the modal (`border-radius: 0 !important` effectively) and the custom
  `.btn { border-radius: 0px !important }`. Do NOT use `rounded-lg` (Ingress
  was rounded; Vestry is square).
- **Launch button** is blue `#007bff` with a SQUARE corner and a
  distinctive soft blue under-shadow `0 7px 0 -2px rgba(0,123,255,0.3)`
  (offset 7px down, -2px blur — a subtle 3D lift). Focus/active removes the
  shadow. Hover darkens to `#0069d9`.
- **Body paragraphs** are light gray `#b3b3b3` at font-weight **300** — muted
  placeholder prose. The source copy: "Mist enveloped the ship three hours
  out from port…" — recreate as equivalent muted placeholder text (same kind),
  or reuse the identical passage (it's generic prose, fine to paraphrase).
- **Header/body padding is 30px left/right** (custom
  `.modal-header/.modal-body { padding-left: 30px; padding-right: 30px }`).
  The header has `border-bottom: none` + `padding-bottom: 0`.
- **Close ×**: Bootstrap `.close` (opacity .5, 1.5rem, weight 700, right-
  floated) with an `icon-close2` glyph from the icomoon font. Recreate with a
  lucide `X` icon (~1.25–1.5rem), never copy the icomoon font file.
- **No icons/images in this template** — the only glyph is the close ×. No
  picsum seed needed.
- **Font is Roboto** (system stack in the source, no webfont link) — load
  Roboto via Google Fonts `<link>` in `index.html` so the rendering is
  identical everywhere.
- **Open/close is Bootstrap data-API only** — recreate with React state:
  launch-click opens, close × / backdrop click / Escape closes; NO auto-open
  on load.
- **Source has NO footer** — add the mandatory Component Dock attribution
  footer (repo convention); the modal itself needs `aria-label` (e.g.
  "Information") + a labelled title so Testing Library can query it.
- **The launch heading** is the generic demo name "Modal #1" — recreated as
  the NEW name "Vestry" (content KIND preserved: demo heading + single primary
  CTA), per the naming mandate.
- Tailwind v4: `shadow-[0_7px_0_-2px_rgba(0,123,255,0.3)]` arbitrary values
  work but underscores are safer than commas; `bg-[#007bff]` /
  `text-[#b3b3b3]` arbitrary colors are fine (or register `--color-brand` /
  `--color-muted` in `@theme` for cleaner class names).
