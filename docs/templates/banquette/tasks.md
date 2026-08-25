# Banquette (ColorLib Accordion 02) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-banquette`. Recreation name: **Banquette** (NEW
> name — the ColorLib source keeps its name "Accordion 02").

## Source mapping

- **ColorLib item:** "Accordion 02" (TEMPLATES.md line 640; section
  "## Bootstrap Accordions (20)").
- **Source URL:** https://colorlib.com/wp/template/accordion-02/
- **Preview URL — REACHABLE (verified 2026-08-25 by direct fetch):**
  `https://preview.colorlib.com/theme/bac/accordion-02/` (21,444 bytes
  HTML, HTTP 200).
  **NOTE:** the naive `https://preview.colorlib.com/theme/accordion-02/`
  returns 404 — the actual path is `bac/accordion-02/`.
- **Preview CSS:** `css/style.css` (223,670 bytes — includes Bootstrap 4.3.1
  - custom styles). Custom styles start at the `body { font-family: "Poppins" }`
    block. Additional: `css/flaticon.css` (icon font — REPLACE with lucide),
    Ionicons 4.5.6 CDN (REPLACE with lucide).
- **Font:** Google Fonts "Poppins" (weights 300/400/500/600/700/800/900
  loaded via Cloudflare CDN `@font-face` — use Google Fonts `<link>` in
  index.html).

## Reference research (done — do not redo)

### Live preview DOM analysis

Fetched `https://preview.colorlib.com/theme/bac/accordion-02/` on
2026-08-25. Full page structure:

1. `<section class="ftco-section">` — single section, container + row
2. Centered h2 `heading-section mb-5 pb-md-4` — "Accordion #02"
3. `col-md-8 col-lg-6` — centered accordion wrapper
4. `#accordion.myaccordion` — Bootstrap 4 accordion, white card with shadow
5. `.wrap.pt-5.text-center` — purple `#866ec7` header with h3 "Our Specialties"
6. 4 `.card` elements, each with:
   - `.card-header` — button with icon span + label + chevron `.fa`
   - `.card-body` — 3 `.menus.d-md-flex` items, each with:
     - `.menu-img.img` (100px circle, background-image)
     - `.text` — `.d-flex` row with `.one-half` (h3 dish name) + `.one-forth`
       (`.price` span with yellow border-bottom) + `<p>` ingredient tags

Accordion behavior: Bootstrap 4 `data-toggle="collapse"` +
`data-parent="#accordion"` — only one panel open at a time. First item
(Breakfast) has `class="collapse show"` (expanded). Others collapsed.

### CSS token extraction

Key custom styles from `css/style.css` (after Bootstrap reset):

- **Body:** `font-family: "Poppins", Arial, sans-serif; font-size: 14px;
line-height: 1.8; background: #fafafa; color: gray`
- **Links:** `color: #feba2c` (yellow) with `.3s all ease` transition
- **Headings:** `font-family: "Poppins"; color: #000; font-weight: 400`
- **Section title:** `.heading-section { font-size: 28px; color: #000 }`
- **Accordion container:** `.myaccordion { box-shadow: 0px 10px 29px -16px
rgba(0,0,0,0.12); background: #fff; border-radius: 5px; overflow: hidden }`
- **Header bar:** `.wrap { background: #866ec7 }` with white h3
- **Accordion button:** `.myaccordion .btn { width: 100%; font-size: 18px;
border-radius: 0 !important; box-shadow: 0px 8px 18px -16px
rgba(0,0,0,0.19); color: #000 }`
- **Icon circle:** `.icon:after { background: #feba2c; border-radius: 50%;
width: 20px; height: 20px }` — yellow circle behind flaticon
- **Chevron:** Ionicons `\f3d8` (expanded) / `\f3d0` (collapsed)
- **Card body:** `background: rgba(0,0,0,0.02)`
- **Menu item:** `.menus { border-bottom: 1px solid rgba(0,0,0,0.05);
border-radius: 5px }`
- **Food image:** `.menu-img { width: 100px; height: 100px; border-radius: 50% }`
- **Dish name:** `h3 { font-size: 22px; font-weight: 500 }`
- **Price:** `.price { font-size: 20px; color: #000; font-weight: 600;
border-bottom: 2px solid #feba2c }`
- **Ingredients:** `color: rgba(0,0,0,0.4)`

## Implementation tasks

### Phase 1: Scaffolding

- [ ] Copy simplest existing app to `apps/banquette`
- [ ] Rename package to `@free-react-templates/banquette`
- [ ] Set `public/CNAME` to `banquette.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://banquette.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Run `npm install` at repo root

### Phase 2: Design tokens

- [ ] Create `src/index.css` with Tailwind v4 `@theme` block:
  - `--color-brand: #feba2c` (yellow accent)
  - `--color-header-purple: #866ec7` (accordion header)
  - `--color-page-bg: #fafafa`
  - `--color-card-bg: #fff`
  - `--color-card-body: rgba(0,0,0,0.02)`
  - `--color-text-muted: rgba(0,0,0,0.4)`
- [ ] Add Google Fonts link for "Poppins" (300, 400, 500, 600, 700) in
      `index.html`

### Phase 3: Components

- [ ] `AccordionMenu.tsx` — main component containing:
  - Page title (centered h2)
  - Accordion container with 4 items
  - Each item: header (icon + label + chevron) + panel (3 menu items)
  - Controlled state: only one panel expanded at a time
- [ ] `MenuItem.tsx` — individual menu item: circular food image, dish
      name, price with yellow underline, ingredient tags
- [ ] Use lucide-react icons instead of flaticon/ionicons
- [ ] Use `https://picsum.photos/seed/banquette-<n>/100/100` for food images

### Phase 4: Assembly

- [ ] `App.tsx` — compose AccordionMenu
- [ ] `main.tsx` — entry point (excluded from coverage)

### Phase 5: Testing (TDD)

- [ ] Write tests for AccordionMenu (expand/collapse, only one open)
- [ ] Write tests for MenuItem (image, name, price, ingredients)
- [ ] Ensure 100% line/function/branch/statement coverage

### Phase 6: Verification

- [ ] Run `scripts/verify-app.sh banquette`
- [ ] Visual check: compare with preview screenshot
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code

## Fidelity notes

- **This is a COMPONENT-ONLY template** — no navbar, no footer, no full
  page layout. Just the accordion section centered on a page.
- **Single-section template:** `App.tsx` renders one section with a title
  and the accordion component.
- **Accordion behavior is critical:** only one panel open at a time.
  Use controlled state with `useState<string | null>` for the active panel.
- **Menu items use background-image** for food photos — replace with
  `<img>` tags using picsum placeholder URLs.
- **Replace flaticon icons** with lucide-react equivalents:
  - breakfast → Coffee icon
  - serving-dish → Utensils icon
  - turkey → Drumstick icon
  - cocktail → Wine icon
- **Replace Ionicons chevron** with lucide ChevronDown/ChevronUp
- **Yellow accent `#feba2c`** is the brand color — used on links, price
  underlines, and icon background circles
- **Purple header `#866ec7`** — the "Our Specialties" bar
- **No ColorLib attribution** — footer links to Component Dock
