# Docket (ColorLib Dropdown 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-docket`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 13" — thirteenth of the "Bootstrap
  Dropdowns (20)" series (source: https://colorlib.com/wp/template/dropdown-13/).
  TEMPLATES.md has ONE copy (line 766). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast**, Dropdown 04 as **Chime**, Dropdown 05 as **Trolley**,
  Dropdown 06 as **Passkey**, Dropdown 07 as **Onboard**, Dropdown 08 as
  **Marquee**, Dropdown 09 as **Glimpse**, Dropdown 10 as **Inquire**,
  Dropdown 11 as **Privy**, Dropdown 12 as **Lilac** (see
  `docs/templates/menubar/` … `docs/templates/lilac/`). This prep:
  Dropdown 13 → **Docket**.
- **Demo DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-13/`
  (HTTP 200, 16,868 bytes). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-13/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath. The page uses a
  **SLIM 96-line `css/style.css`** (2,731 bytes) — same slim builder as
  dropdown-11/12 (Privy/Lilac), NOT the 222 KB ftco stylesheet that
  dropdown-09/10 load. Other assets: `fonts/icomoon/style.css` (icon font),
  `css/bootstrap.min.css` (BS4 base), `css/owl.carousel.min.css` +
  `js/owl.carousel.min.js` (loaded but UNUSED), jquery/popper/bootstrap.min.js,
  `js/main.js` (adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown`, removes on hide — identical to Privy/Lilac's). Google
  Fonts via inline cf-fonts `@font-face` blocks: Roboto (300/400), Poppins
  (300/400/500), Source Serif Pro (400/600) — **only Roboto is used** in
  the demo.
- **HEADING BUG (documented in the spec — reproduce faithfully):** the page
  renders "Dropdown #3", not "Dropdown #13" (cloned from the #3 page, never
  renumbered). The TEMPLATES.md screenshot shows the same text. Spec
  mandates the reference text "Dropdown #3" — mention the discrepancy in
  the PR description.
- **Screenshot:** `dropdown-13.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #3", below it the "Filetype" trigger in
  its OPEN state: solid blue (Bootstrap-primary) pill with white text and a
  document icon, menu open beneath: narrow white card, soft diffuse shadow,
  rounded corners, four rows of gray icon + dark gray text with faint
  light-gray dividers (first row "Markup HTML" shows the hover state: black
  text + blue left accent bar). Matches DOM + CSS. URL bar:
  `preview.colorlib.com` (same series screenshots).
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg **WHITE** (the slim stylesheet sets NO
  body `background-color`; NOT the `#fafafa` of the older series pages).
  `.content` padding **7rem 0**. Heading `h2.my-5.text-center` "Dropdown #3"
  — custom `h2 { font-size: 20px }` (NOT Bootstrap 2rem), Roboto, near-black
  `#212529`, `my-5` = 3rem top + bottom margin. Demo row:
  `row.justify-content-center.text-center` → `col-md-5` (narrow ~41.7% on
  md+) → `div.dropdown.custom-dropdown`.
- **Trigger** `<a.dropdown-link data-toggle="dropdown">` (a LINK, not a
  button — the recreation uses a semantic `<button>` with identical
  visuals): `icon-file-text-o` (document, FA `\f0f6`) + `mr-2` (0.5rem) +
  "Filetype". Styling: `#888`, 15px, inline-block, `padding: 8px 15px`,
  **`background: #f8f9fa`** (light-gray pill — Bootstrap-secondary look,
  unlike Lilac's borderless link); `position: relative`. OPEN
  (`.custom-dropdown.show`) → **`color: #fff; background: #007bff`** (flips
  to Bootstrap-primary blue + white text — the defining interaction of this
  variant, unlike Lilac's simple text-color change).
- **Menu** `div.dropdown-menu` (NO extra classes): white bg, `border: 1px
solid transparent`, **no min-width override** → Bootstrap default
  `min-width: 10rem` (NARROW single-column card — NOT Lilac's 700px flex
  two-column), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **`left: 0
!important`** (LEFT-anchored — NOT centered like Lilac), `margin-top: 0
!important`, `padding-top/bottom: 0`. ANIMATED: `opacity: 0; visibility:
hidden` → `.active`: `opacity: 1; visibility: visible; margin-top: 20px
!important`, transition `.3s margin-top/opacity/visibility ease` (fade +
  20px slide-down; `.active` added by main.js 100 ms after
  `show.bs.dropdown`).
- **Items** four `<a.dropdown-item>` rows, each `<span class="icon-…
mr-3"></span>Label` (1rem gap): 1. Markup HTML (`icon-html5` FA `\f13b` →
  lucide `FileCode2`), 2. Photoshop PDF (`icon-file-pdf-o` FA `\f1c1` →
  lucide `FileText`), 3. Illustrator AI (`icon-glass` FA `\f000` → lucide
  `Martini`), 4. Sketch (`icon-flag` FA `\f024` → lucide `Flag`). Row
  styling: `font-size: 14px`, `color: #888`, `border-bottom: 1px solid
#efefef`, `padding: 10px 0 10px 15px`, `position: relative`; `:last-child`
  → no border. HOVER: `color: #000`, `padding-left: 20px`, blue 6px
  `#007bff` left accent bar via `:before` (width 0→6px, opacity 0→1, full
  height, `.3s all ease`). Icons inherit gray `#888` — **NO lavender accent**
  in this variant (unlike Lilac).
- **No mobile CSS** — no media queries in the slim stylesheet (like
  Privy/Lilac; unlike Onboard/Glimpse/Inquire). Menu stays left-anchored at
  all viewports; `col-md-5` becomes full-width. Reproduce as-is.

## Structure order (1:1)

1. `.content` wrapper — padding **7rem 0**.
2. Heading container: `h2.my-5.text-center` "Dropdown #3" (20px Roboto,
   `#212529`, centered, 3rem top/bottom margins).
3. Demo container → `row.justify-content-center.text-center` →
   `col-md-5` → `div.dropdown.custom-dropdown`:
   - trigger link (document icon + "Filetype", gray on light-gray; open →
     white on blue)
   - `dropdown-menu` (left-anchored narrow card) with four `dropdown-item`
     rows (icon + label, dividers, hover accent bar)
4. Footer (monorepo addition): Component Dock credit link
   (`https://www.componentdock.com/`).

## Implementation tasks

- [ ] Scaffold `apps/docket` (copy simplest existing app; package
      `@free-react-templates/docket`; `public/CNAME` =
      `docket.free.componentdock.com`; homepage =
      `https://docket.free.componentdock.com`); `npm install` at root to
      register the workspace in `package-lock.json`
- [ ] `index.html`: title "Docket — Single-Column Filetype Dropdown",
      Roboto 300/400 Google Fonts `<link>` (do NOT load Poppins/Source
      Serif Pro — unused by the source)
- [ ] `src/index.css` tokens: white page bg; brand blue `#007bff`
      (trigger open state + item hover accent); light gray `#f8f9fa`
      (trigger bg); `#888` (trigger text, item text, item icons); `#000`
      (item hover text); `#efefef` (item dividers); `#212529` (heading)
- [ ] `Navbar`-free: single section component (e.g. `FiletypeDropdown`)
      with heading + trigger + menu (per spec scenarios)
- [ ] Dropdown behavior: open/close on click, outside click, Escape,
      re-click; fade + 20px slide-down animation (~0.3s); trigger flips to
      blue/white while open
- [ ] Menu: narrow card (`min-width: 10rem`), left-anchored under trigger,
      shadow `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, radius
      .25rem; four items: Markup HTML (`FileCode2`), Photoshop PDF
      (`FileText`), Illustrator AI (`Martini`), Sketch (`Flag`); dividers
      under all but last; hover: black text + `padding-left: 20px` + blue
      6px left bar
- [ ] Accessibility: `<button>` trigger with `aria-haspopup="menu"` +
      `aria-expanded`; `aria-controls`/id pairing (NOT the source's
      dangling `aria-labelledby`); keyboard-focusable items
- [ ] Footer with Component Dock link; NO ColorLib references in app code
- [ ] Tests: 100% coverage (heading, trigger open/close states, item
      content/order, hover treatment, accessibility, footer)
- [ ] `npm run verify:app docket` passes; commit `feat: add docket …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping
      (`[x]` + surge URL) + `npm run readme:status`

## Verification checklist (from spec)

- [ ] Heading renders "Dropdown #3" (source bug — not "#13"), 20px Roboto,
      `#212529`, centered, 3rem margins, white page bg, `.content` 7rem
      padding
- [ ] Trigger: `FileText` icon + "Filetype", `#888` 15px, padding 8px 15px,
      `#f8f9fa` bg; open → white on `#007bff`
- [ ] Menu left-anchored, narrow (`min-width: 10rem`), fade + 20px
      slide-down; four items in order with the lucide icon equivalents;
      "Photoshop PDF" (not PSD); dividers except last; hover accent bar
- [ ] Closes on outside/Escape/re-click; aria pairing correct
- [ ] No mobile restyling; no images; exactly 5 icon glyphs; footer links
      Component Dock
