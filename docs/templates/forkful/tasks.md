# Forkful (ColorLib Accordion 02) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Forkful** (NEW name —
> the ColorLib source keeps its name "Accordion 02"). Implementation ships on
> `feat/template-forkful` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Accordion 02" — free single-page accordion /
  restaurant-menu component template (source:
  https://colorlib.com/wp/template/accordion-02/). TEMPLATES.md row: line 640
  (**Bootstrap Accordions (20)**). The `accordion-02` slug appears exactly
  once (no dup rows to mark — unlike some other entries).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/accordion-02/` returns **404** — the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-02/`
  (HTTP 200, 21.4KB HTML; same `/bac/` subpath pattern as Accordion 01).
  Stylesheets: `css/style.css` (223.7KB = bootstrap + custom tokens),
  `css/flaticon.css` (1.4KB category icon glyphs), IonIcons 4.5.6 CDN (the
  `.fa:before` chevron glyphs). Screenshot (`accordion-02.jpg`, 1200×972,
  served as AVIF → converted to PNG, browser-verified 2026-08-14): purple
  "Our Specialties" banner (white text) at top of a white rounded card;
  Breakfast open (black fork/spoon icon, up chevron), Lunch/Dinner/Drink/Wine
  collapsed (yellow icon badges, down chevrons); open panel = 3 dish rows
  with circular food photos, bold dish names, gray ingredients, prices with
  yellow underline; pale-gray panel body on white page.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0, WHITE
  page bg — no `#fafafa` here, unlike Accordion 01) → `col-md-12.text-center`
  → `h2.heading-section.mb-5.pb-md-4` "Accordion #02" (28px, `#000`) →
  `row.justify-content-center` → `col-md-8.col-lg-6` → `div#accordion
.myaccordion.w-100` (white `#fff`, 5px radius, overflow hidden,
  `box-shadow: 0px 10px 29px -16px rgba(0,0,0,0.12)`, margin auto) → intro
  `div.p-4.wrap.pt-5.text-center` (bg **`#866ec7`** purple) with `h3` "Our
  Specialties" in **white** (`.wrap h3 { color: #fff }`, NO paragraph) → 5
  `.card` panels: header `div.card-header.p-0` (transparent, no border,
  text-left) with full-width `.btn.btn-link` toggle (`d-flex py-4 px-4
align-items-center justify-content-between`, color `#000`, 18px,
  `border-radius: 0`, shadow `0 8px 18px -16px rgba(0,0,0,0.19)`) — left:
  `p.mb-0` with `span.icon.flaticon-<cat>.mr-3` (36px glyph, inherits `#000`,
  with a 20px **`#feba2c`** circle badge behind it via `.icon:after`) +
  category name; right: `<i class="fa">` 16px chevron `rgba(0,0,0,0.3)` —
  open = `\f3d8` (ion-ios-arrow-up), collapsed = `\f3d0` (ion-ios-arrow-down);
  body `.card-body.py-5.px-4` (bg `rgba(0,0,0,0.02)`) with 3 `.menus.d-md-flex`
  rows (pb 20px / mb 20px / `border-bottom: 1px solid rgba(0,0,0,0.05)`):
  `.menu-img.img` 100×100 circle (radius 50%, bg food photo) + `.text`
  (`width: calc(100% - 100px)`, `padding-left: 20px`) → `d-flex` row:
  `.one-half` (`calc(100% - 110px)`) `h3` dish name (22px, 500) + `.one-forth`
  (110px, right) `span.price` ($29, 20px, 600, `#000`,
  `border-bottom: 2px solid #feba2c`) → `p` gray ingredient spans
  ("Meat, Potatoes, Rice, Tomatoe"). **Breakfast** open by default, **Lunch**
  (serving-dish), **Dinner** (turkey), **Drink** (cocktail), **Wine** (wine)
  closed; `data-parent="#accordion"` = only one open at a time. NO footer in
  the original — add the mandatory Component Dock attribution footer (repo
  convention).
- **Design tokens:** page `#fff`; card `#fff` + 5px radius + shadow
  `0 10px 29px -16px rgba(0,0,0,0.12)`; brand purple `#866ec7` (banner);
  brand yellow `#feba2c` (icon badges + price underline); text `#000`
  (heading, categories, dishes, prices); panel tint `rgba(0,0,0,0.02)`;
  row separators `rgba(0,0,0,0.05)`; chevrons `rgba(0,0,0,0.3)` 16px; header
  shadow `0 8px 18px -16px rgba(0,0,0,0.19)`; font **Poppins** (declared on
  body + h1–h6 in style.css but never loaded by the preview — load via Google
  Fonts `<link>` in `index.html`); sizes: h2 28px, intro h3 ~28px, categories
  18px, dish names 22px/500, prices 20px/600, ingredients default gray.
- **Design approach:** one card, one purple banner, five accordion panels.
  Fidelity is about the purple/yellow token pair, the 100×100 circle photos,
  the 110px right-aligned price column with yellow underline, the 36px icon +
  20px yellow badge on headers, and the up/down chevron swap. Default
  `openIndex = 0`. 15 dish rows — write varied plausible menu items per
  category (the demo repeats one placeholder string; recreate the same KIND
  of content, not the repetition).
- **Placeholders:** 15 dish photos →
  `https://picsum.photos/seed/forkful-<n>/200/200` (100×100 circle crop via
  rounded-full; seed per row n=1..15).
- **Icons (lucide-react, NO copied fonts):** `ChevronUp` / `ChevronDown`
  (16px, `rgba(0,0,0,0.3)`) for toggles; category icons 36px on a 20px
  `#feba2c` circle badge — e.g. `UtensilsCrossed` (Breakfast), `Sandwich`
  (Lunch), `Drumstick`/`Utensils` (Dinner), `Martini`/`Cocktail` (Drink),
  `Wine` (Wine). Pick distinct lucide food glyphs; the yellow badge circle
  goes BEHIND the glyph (relative wrapper + absolutely positioned 20px
  circle).
- **Copy:** keep the original content kinds — category names (Breakfast /
  Lunch / Dinner / Drink / Wine), dish name + price + comma-separated
  ingredients per row. Paraphrase/vary the dish names freely (original demo
  repeats "Grilled Beef with potatoes — $29" everywhere).

## Implementation tasks

1. **Scaffold** — `apps/forkful` from the simplest existing app; rename
   package to `@free-react-templates/forkful`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `forkful.free.componentdock.com`,
   `"homepage"` = `https://forkful.free.componentdock.com`.
2. **Theme tokens** — add `#866ec7` / `#feba2c` / `#ffffff` / `#000000` +
   the rgba tints to `@theme`; Poppins Google Fonts `<link>` in `index.html`;
   card + header shadows via Tailwind arbitrary values or tokens.
3. **Components** (per section, TDD — tests first):
   - `Accordion` (or `ForkfulAccordion`) — core component: 5 panels from
     data (title, icon, dishes[]), holds `openIndex` state (default 0, only
     one open), renders header buttons (full-width, 18px, `#000`, icon badge
     left + `ChevronUp`/`ChevronDown` right, `aria-expanded`/`aria-controls`)
     - bodies (`role="region"`, `aria-labelledby`, tinted bg, dish rows).
   - `CategoryIcon` — 36px lucide glyph with the 20px `#feba2c` circle
     badge behind it.
   - `DishRow` — flex row: circular picsum image (100×100, rounded-full),
     name (22px/500) + right-aligned price (20px/600, 2px `#feba2c`
     underline) in a 110px column, gray ingredient list; 1px bottom
     separator; stacks on ≤768px.
   - `IntroBanner` — purple `#866ec7` strip with white centered "Our
     Specialties" (p-4 pt-5), no paragraph.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #02" → card →
   intro banner → Breakfast (open) → Lunch → Dinner → Drink → Wine → footer.
5. **Verify** — `scripts/verify-app.sh forkful` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 02" row (line 640, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-02/` — note the `/bac/`
   subpath), design tokens, and the default-URL 404 gotcha.
