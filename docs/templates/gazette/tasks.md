# Gazette (ColorLib Balita) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gazette` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Balita" — minimal editorial blog: black utility top
  bar (social icons left, dark search right), giant centered wordmark logo,
  centered uppercase nav with Travel + Categories dropdowns, full-width hero
  slider (3 photo slides, black overlay, blue category chips), 3-up photo card
  grid, "Lifestyle Category" section with a 2×3 blog card grid + circular
  pagination + horizontal "More Blog Posts" list, right sidebar (search, bio
  card, popular posts, categories, tags), black 3-column footer + copyright
  bar (source: https://colorlib.com/wp/template/balita/). Listed in
  TEMPLATES.md under Blog (line 244) — one recreation covers that single
  checklist row.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/balita/`
  (HTTP 200, ~32.6KB HTML). DOM + `css/style.css` (16.4KB) +
  `css/bootstrap.css` extracted and analyzed. Screenshot
  `balita-free-template.jpg` viewed in browser: confirms black top strip,
  centered 90px wordmark, small uppercase menu, panoramic sunset hero image
  with blue "LIFESTYLE" chip + white meta/headline/excerpt, carousel dots
  (blue active), 3-up photo grid below; blue accent recurs on chips, dots,
  pagination, tag hovers. Footer below the fold in the screenshot; fully
  specified from the DOM/CSS.
- **Brand color is Bootstrap blue `#007bff`** (hover `#3395ff`) — category
  chips, dropdown hover/active, carousel active dot, pagination active/hover,
  tag hover, `.btn-primary`. Black `#000` for top bar, logo, headings, hero
  overlay (opacity .3, hover .4), footer. Body text `#6c757d` 18px weight 300
  `line-height 1.9`; card excerpt 13px gray; meta `#b3b3b3`.
- **Font:** Josefin Sans (300/400/700) via Google Fonts — load with `<link>`
  in `index.html` (weights 300, 400, 700). Logo uses weight 700 at 90px
  (`font-size: 40px` below 992px). Nav links 13px uppercase
  `letter-spacing: .05em`, `padding: 1.7rem 1rem`.
- **Signature shapes:** buttons and form controls are SHARP (`border-radius:
0`), `padding: 8px 20px`, btn-primary has `border-width: 2px`, hover shadow
  `0 3px 10px -2px rgba(0,0,0,.2)`. Category chips radius 4px; tags radius
  4px; pagination + carousel dots `border-radius: 50%` (pagination 60×60px);
  avatar 50%.
- **Hero overlay:** `.a-block:before { background: #000; opacity: .3 }`,
  hover `.4` — reproduce with an absolutely-positioned black/30 overlay div
  (Tailwind `bg-black/30`, `group-hover:bg-black/40`).
- **Slider:** original uses Owl Carousel (3 slides). For the recreation, a
  self-contained carousel (prev/next + dots, auto-advance optional) or a
  simple state-based slider works; keep the same visual: full-width slides,
  dots bottom-center, active dot blue.
- **Section structure (1:1):** top bar → logo wrap (mobile burger + wordmark)
  → navbar (centered, 2 dropdowns) → hero slider (3 × 500px slides) → 3-up
  photo grid (400px cards) → blog section (`py-sm` = no vertical padding):
  "Lifestyle Category" heading → main-content (col-lg-8): 6 cards (col-md-6,
  2×3) → circular pagination → "More Blog Posts" (3 horizontal entries) →
  sidebar (col-lg-4, `padding-left: 5em`): search / bio / popular posts /
  categories / tags → footer (black, 5em padding): Paragraph / Latest Post +
  Quick Links + Social → copyright row.
- **Icons:** original uses Font Awesome. Recreation: lucide-react for UI icons
  (search, message-circle/comment, calendar, chevrons, heart); inline SVG for
  the social brands (twitter, facebook, instagram, youtube, vimeo, snapchat —
  lucide-react removed brand icons, see replication skill pitfall).
- **Placeholders:** `https://picsum.photos/seed/gazette-<n>/<w>/<h>` — 3 hero
  slides (e.g. 1200×700), 3 card-grid photos (600×500), 6 blog cards (600×450),
  3 horizontal entries (200×200), 3 popular posts + 3 footer thumbs (100×100
  for retina, 90px displayed), 1 bio avatar (200×200), 1 footer paragraph image
  (800×450).

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy the simplest existing app (e.g. `apps/onepage`), rename
   to `@free-react-templates/gazette`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #007bff`,
   `--color-brand-hover: #3395ff`, `--color-ink: #000`, `--color-body:
#6c757d`, `--color-meta: #b3b3b3`, `--color-surface: #f7f7f7`,
   `--color-tag: #f2f2f2`, `--color-line: #e6e6e6`, `--color-card-line:
#efefef`; Josefin Sans 300/400/700 Google Fonts `<link>` in `index.html`.
3. **TopBar** (`components/TopBar.tsx`): black bar, social icons left (inline
   SVG, white/50 → /100 hover), dark search input right (focus `#333`),
   aria-labels on icon links.
4. **Header** (`components/Header.tsx`): centered wordmark "Gazette" (90px,
   mobile 40px), mobile burger (`aria-expanded`), centered uppercase nav
   (Home active, Travel + Categories dropdowns with blue hover items, About,
   Contact).
5. **HeroSlider** (`components/HeroSlider.tsx`): 3 slides (500px, bg image,
   black/30 overlay → /40 on hover, text block max-w-[50%] with blue category
   chip + white meta + headline + excerpt), dots bottom-center (active blue),
   prev/next controls; slide data array with picsum seeds `gazette-1..3`.
6. **PhotoGrid** (`components/PhotoGrid.tsx`): 3 × 400px photo cards in a
   3-column row (category chip + date + headline over overlay).
7. **BlogGrid** (`components/BlogGrid.tsx`): "Lifestyle Category" heading; 6
   cards in a 2×3 grid (photo + `#efefef`-bordered body w/o top border, meta
   with blue chip, 18px headline); hover opacity 70%; data array
   `gazette-4..9`.
8. **Pagination** (`components/Pagination.tsx`): Prev / 1 (active blue) / 2 /
   3 / Next as 60px circles.
9. **MorePosts** (`components/MorePosts.tsx`): heading + 3 horizontal entries
   (200px image + bordered text, hover shadow).
10. **Sidebar** (`components/Sidebar.tsx`): search box (`#f7f7f7`), bio card
    (overlapping circular avatar, name, blurb, blue "Read my bio" button,
    social icons), Popular Posts (3 × 90px thumb entries), Categories (counts,
    dotted separators), Tags pills (blue hover).
11. **Footer** (`components/Footer.tsx`): black, 3 columns — Paragraph (image +
    blurb), Latest Post (3 thumbs), Quick Links + Social (6 brand links);
    copyright row centered white text.
12. **App composition** (`App.tsx`): TopBar → Header → HeroSlider → PhotoGrid
    → BlogGrid → Pagination → MorePosts → Sidebar (grid: main col-lg-8 +
    sidebar col-lg-4) → Footer; dark-mode `.dark` variants per conventions.
13. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required.
14. **Verify:** `npm run verify:app gazette` (typecheck + lint + vitest 100%
    - build) → PR `feat/template-gazette` → merge immediately → `[x]` + surge
      URL + `npm run readme:status` on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Balita" anywhere as the app/package name.
- Do NOT copy original images/fonts/CSS — picsum + Google Fonts only.
- The logo is 90px desktop / 40px mobile — use a responsive size (text-6xl /
  sm:text-8xl or a clamp) so it doesn't overflow on mid-size screens.
- `.site-section.py-sm` has NO vertical padding — the blog section sits flush;
  keep spacing via the heading `mb-4` and card margins instead.
- Navbar background is transparent on desktop (header is white); the mobile
  collapse uses `#e6e6e6` — either acceptable as long as the centered
  uppercase links and dropdowns are faithful.
- The hero text block is `max-width: 50%` on desktop (full-width on mobile) —
  the overlay + left-half text treatment is the signature look.
- Social brand icons: verify lucide-react exports; use inline SVG paths if
  missing (they are — brand icons were removed).
- Original copy uses lorem ipsum + repeated headlines — paraphrase lightly but
  keep the same kinds of content (category chip + date + comments meta,
  headline, excerpt).
