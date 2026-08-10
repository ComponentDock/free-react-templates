# Skillet (ColorLib Bueno) — Tasks & Design Notes

> Recreation of ColorLib "Bueno" (https://colorlib.com/wp/template/bueno/)
> under the NEW name **Skillet** (cookware-themed brand; single lowercase
> word, no collision with `apps/` or `openspec/specs/` — verified
> 2026-08-10), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Bueno" — free Food Blog website template (page
  title "Bueno - Food Blog HTML Template"). TEMPLATES.md has TWO dup rows
  for the same source: line 250 under **Blog (60)** and line 2851 under
  **Startup (17)** — same source, ONE item; mark BOTH `[x]` at ship time.
  The recreation brands itself **Skillet**.
- **Preview URL (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/bueno/` returns HTTP 200 (38.5 KB
  HTML, single all-in-one `style.css` 50 KB). Bootstrap 4 + jQuery +
  owl.carousel; all links `href="#"`. The TEMPLATES.md screenshot
  (`bueno-free-template.jpg`, 1200×946, viewed in a browser) matches the
  live render.
- **Visual design (screenshot + live render):** stark white page, black/
  charcoal text, ONE muted earthy sage-green accent **`#b0c364`** (tags,
  borders, buttons, hovers). Dark charcoal photo top bar (socials left,
  search right), centered black script logo ("Bueno" + "Food Blog"
  subtitle), nav bar with Pages/Recipes dropdowns + Login / Register.
  Hero = 3-panel slider: side food photos with sage "PREV"/"NEXT" tags,
  center white card with double-line sage border over a salad photo
  ("HEALTHY FOOD" green uppercase, "Chicken Salad", "JULY 11, 2018 | BY
  JULIA STILES"). Below: 3 category cards (white bordered box, hover
  fills sage), 2 alternating big posts, 3-post grid + sidebar (ad + 5
  mini posts), 10-image Instagram strip, light footer. Clean, minimalist,
  rustic-yet-elegant food-blog aesthetic.
- **Structure (1:1, verified live):**
  1. `div.preloader` — fixed overlay, 5 `.bubble` elements + "Cooking in
     progress.." (animated preloader).
  2. `header.header-area`:
     - `.top-header-area.bg-img.bg-overlay` — height 95px, inline bg
       `img/bg-img/header.jpg` + `rgba(0,0,0,0.69)` overlay. Left:
       `.top-social-info` — 6 FontAwesome socials (Pinterest, Facebook,
       Twitter, Dribbble, Behance, Linkedin). Right: `.top-search-area`
       — transparent input (white, italic placeholder "Search", 2px
       `#817773` bottom border, height 50px) + transparent search btn.
     - `.logo-area` — centered, padding 50px 30px; logo.png (script
       "Bueno" + "Food Blog" subtitle — ASSET, do not copy → script
       "Skillet" text logo).
     - `.bueno-main-menu#sticker` — classy-nav: Home, About Us, Pages ▾
       (Home / Catagory / Catagory Post / Single Post / Recipe), Recipes
       ▾ (MEGAMENU: 4 rows × Bread, Breakfast, Meat, Fastfood, Salad,
       Soup), Blog, Contact — `#404040` 15px 600, hover sage. Right:
       `.login-area` "Login / Register" (`#7a7a7a` 16px 500, hover sage).
  3. `div.treading-post-area#treadingPost` — FIXED off-canvas drawer:
     480px, `right: -700px` (slide-in 800ms), z-index 9999, bg `#dadfe5`,
     padding 50px, scrollable, `.close-icon` ✕; `h4` "Treading Post"
     (16px, mb 50px) + 6 × `.single-blog-post.style-1.d-flex` (thumb 40%
     - content: sage tag "The Best", 16px title, meta). QUIRK: 3 titles
       ×2 (Friend eggs with ham / Mushrooms with pork chop / Birthday cake
       with chocolate) → use 6 DISTINCT titles.
  4. `div.hero-area` (padding 0 30px) — `.hero-post-slides.owl-carousel`:
     4 × `.single-slide` (full-width photo 1..4.jpg + `rgba(0,0,0,0.5)`
     ::after; centered `.blog-content-bg` white card 320×360 + 2px sage
     ::after border inset 25px): `.post-tag` "Healthy Food" (12px 600
     sage uppercase) + `.post-title` 30px ("Chicken Salad") +
     `.post-meta` ("July 11, 2018" / "By Julia Stiles", "/" separator).
     Owl arrows = sage "PREV"/"NEXT" tags. QUIRK: all 4 slides repeat
     the same content → use 4 DISTINCT dish titles.
  5. `div.post-catagory.section-padding-100-0.mb-70` — 3 ×
     `.single-post-catagory`: photo + centered white box 128px + 2px
     sage ::after border inset 15px; HOVER: fill sage, text white,
     shadow `0 5px 70px rgba(0,0,0,0.25)`. Tag "The Best" + 24px title:
     Healthy Food / Organic Cuisine / Vegetarian Food.
  6. `div.big-posts-area.mb-50` — 2 alternating rows: `.big-post-thumbnail`
     ↔ `.big-post-content.text-center` (sage tag "The Best", 24px title,
     meta, 13px excerpt, `.btn.bueno-btn` "Read More"): "The Best Friend
     eggs with ham" (photo first), "The Best Steak with boiled
     vegetables" (content first).
  7. `div.bueno-post-area.mb-70` (main col, beside sidebar) — 3 ×
     `.single-blog-post.style-1` (thumb 40% + content 60% padding-left
     30px): sage tag, 24px title, meta, lorem excerpt, Read More btn:
     "The Best Friend eggs with ham" / "The Best Mushrooms with pork
     chop" / "The Best Birthday cake with chocolate".
  8. `div.sidebar-area` — `.single-widget-area.add-widget.mb-30` (ad img)
     - `.post-widget` — 5 × `.single-post-area.d-flex` (thumb 30% +
       content 70% padding-left 20px; 14px title, 9px meta): "Friend eggs
       with ham" / "Burger with fries" / "Avocado & Oisters" / "Tortilla
       prawns" / "Burger with fries" (QUIRK: repeat → distinct 5th).
  9. `div.instagram-feed-area.d-flex.flex-wrap` — 10 ×
     `.single-instagram` (flex 0 0 20%): hover → `rgba(0,0,0,0.75)`
     ::after, img scale(1.1), `.img-zoom` sage 62px square "+" white.
  10. `footer.footer-area` (padding 50px 0) — left `.copywrite-text`
      (12px `#666666`): "Copyright © <year> All rights reserved | This
      template is made with ♥ by Colorlib"; right `.footer-nav` ul
      (12px `#666666`): Home, Recipes, About Us, Blog, Contact; active/
      hover → sage + 3px sage ::after underline.
- **Design tokens extracted from the live CSS (`style.css`, verified
  2026-08-10):**
  - Sage **#b0c364** (brand, 40 uses): post-tag, bueno-btn bg, card
    borders + hover fills, title hover, footer underline, instagram zoom.
  - White **#ffffff** page/card bg; headings **#272727**; body/meta
    **#7a7a7a**; nav **#404040**; footer **#666666**; drawer bg
    **#dadfe5**; search underline **#817773**.
  - Overlays: top bar `rgba(0,0,0,0.69)`, hero slide `rgba(0,0,0,0.5)`,
    instagram hover `rgba(0,0,0,0.75)`, category shadow
    `rgba(0,0,0,0.25)`; btn hover bg `#000000`.
  - Fonts: **Montserrat** ONLY (body 14px 500 lh 2; headings 600 lh 1.3)
    — on Google Fonts, use directly (400/500/600). Logo script is an
    image → **Dancing Script** (Google) for the wordmark + Montserrat
    subtitle.
  - `.bueno-btn`: square (radius 0), min-width 160px, height 50px,
    line-height 50px, padding 0 30px, 14px 500, sage bg, white text,
    hover bg black.
  - Post-tag 12px 600 uppercase sage (mb 15px / 5px small cards);
    post-meta 12px 600 uppercase `#7a7a7a` with "/" separator.
  - Cards: white centered + 2px sage ::after border (hero inset 25px
    320×360; category inset 15px height 128px).
  - Rhythm: pt 100px pb 0; mb 70/50/30/20; style-1 posts 40/60
    (content pl 30px); sidebar mini 30/70 (pl 20px); instagram 20% each.
  - Scale: hero title 30px; big/standard 24px; drawer 16px; sidebar
    14px; drawer h4 16px.
- **Recreation approach:** Tailwind grid (NO Bootstrap); hero slider =
  stateful carousel (useState index, PREV/NEXT sage arrow tags,
  auto-advance optional — no owl.carousel); trending drawer = stateful
  off-canvas panel (open trigger in nav, close ✕, slide-in transition);
  megamenu → simple dropdowns; FontAwesome → lucide (Search, X, Plus,
  Heart) + inline SVG brand icons (socials); preloader → brief animated
  overlay that fades out; photos → seeded picsum
  (`picsum.photos/seed/skillet-<n>/<w>/<h>`); Montserrat + Dancing
  Script via Google Fonts; brand "Bueno" → "Skillet" (script text logo +
  "Food Blog" subtitle); document title "Skillet — Food Blog Template";
  nav links `#` anchors (single-page recreation of the demo); fix source
  repetitions (hero ×4 identical → distinct dishes; drawer 3×2 → 6
  distinct; sidebar "Burger with fries" ×2 → distinct 5th).
- Accessibility: labels/placeholders on the search input and drawer
  close (aria-label), `aria-label` on icon buttons (socials, slider
  controls, instagram zoom), semantic `<main>` landmark, `alt` text on
  photos.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/skillet`
      (package `@free-react-templates/skillet`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: preloader → top bar (socials + search) → logo →
      sticky nav (Pages ▾ / Recipes ▾ / Login Register) → trending
      drawer → hero slider (4 slides) → category cards (3) → big posts
      (2 alternating) → post grid (3 posts + sidebar: ad + 5 mini posts)
      → instagram strip (10) → footer.
- [ ] Tokens in `@theme`: `--color-brand #b0c364`, `--color-heading
  #272727`, `--color-body #7a7a7a`, `--color-nav #404040`,
      `--color-footer #666666`, `--color-drawer #dadfe5`,
      `--color-search-line #817773`; fonts `--font-display Montserrat`,
      `--font-script Dancing Script`.
- [ ] Preloader: animated bubbles + "Cooking in progress..", fades out
      on mount (short timeout, then unmount).
- [ ] Top bar: 95px, picsum header photo + `rgba(0,0,0,0.69)` overlay,
      6 inline-SVG social icons left, search form right (italic
      "Search" placeholder, white text, 2px `#817773` underline).
- [ ] Logo: "Skillet" in Dancing Script + "Food Blog" subtitle,
      centered; sticky nav (Home / About Us / Pages ▾ / Recipes ▾ /
      Blog / Contact + "Login / Register" right); dropdowns (Pages:
      Home, Catagory, Catagory Post, Single Post, Recipe; Recipes:
      Bread, Breakfast, Meat, Fastfood, Salad, Soup).
- [ ] Trending drawer: slide-in from right (fixed, ~480px, `#dadfe5`,
      50px padding), "Treading Post" heading + ✕ close, 6 DISTINCT mini
      posts (thumb 40% + sage tag "The Best" + 16px title + meta).
- [ ] Hero: 4-slide carousel; photo + `rgba(0,0,0,0.5)` overlay;
      centered white card 320×360 with 2px sage inner border; sage tag + 30px title + date/author meta ("/" separator); sage PREV/NEXT
      tags; 4 DISTINCT dish titles.
- [ ] Categories: 3 cards (Healthy Food / Organic Cuisine / Vegetarian
      Food), white box 128px + 2px sage frame, "The Best" tag + 24px
      title; hover → sage fill + white text + shadow.
- [ ] Big posts: 2 alternating rows (photo ↔ centered content: sage tag,
      24px title, meta, excerpt, square sage "Read More", hover black).
- [ ] Post grid + sidebar: 3 standard posts (40/60, lorem excerpts,
      Read More) + ad widget image + 5 mini posts (30/70, 14px titles,
      9px meta) with DISTINCT titles.
- [ ] Instagram: 10 images, 5-up; hover → `rgba(0,0,0,0.75)` overlay +
      scale 1.1 + sage "+" zoom square.
- [ ] Footer: copyright left (12px `#666666`, "made with ♥ by
      Skillet"), footer-nav right (Home / Recipes / About Us / Blog /
      Contact), sage hover + 3px sage underline.
- [ ] Montserrat (400/500/600) + Dancing Script via Google Fonts link
      in index.html; document title "Skillet — Food Blog Template";
      `<main>` landmark.
- [ ] Photos: seeded picsum `skillet-<n>/<w>/<h>` (header bar, hero
      1-4, categories 1-3, big posts 1-2, posts 1-3, sidebar mini 1-5,
      instagram 1-10); no copied assets.
- [ ] `scripts/verify-app.sh skillet` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` on BOTH dup rows (TEMPLATES.md
      lines 250 and 2851) + surge URL, `npm run readme:status`, PR +
      immediate squash merge.
