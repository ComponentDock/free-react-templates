# Tome (ColorLib Libro) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tome`.

## Design notes (replication findings)

- **Original:** ColorLib "Libro" — editorial fashion/lifestyle blog template
  (source: https://colorlib.com/wp/template/libro/). TEMPLATES.md has ONE
  copy of this item (line 268, Blog category — no dup rows).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/libro/ (HTTP 200,
  full rendered DOM, 23.4 KB; page title "Libro - Free Bootstrap 4 Template
  by Colorlib"). Main stylesheet `css/style.css` (58 KB) fully extracted;
  libs: bootstrap, owl.carousel (hero slider), animate, aos,
  magnific-popup, ionicons/icomoon/flaticon.
- **Screenshot:** `libro-free-template.jpg` (1200×946, viewed in browser) —
  minimalist editorial split-screen: left ~40% full-height hero photo
  (model, bright yellow wall) with "FASHION" tag + white serif headline +
  carousel dots; right ~60% white 2-column blog grid; "LIBRO" logo white
  uppercase top-left of hero, hamburger top-right. The demo brands itself
  "Libro"; recreation uses the NEW name **Tome** (a book — "libro" is
  Spanish/Italian for book).
- **Visual design (from DOM + CSS tokens + screenshot):** clean editorial
  fashion-magazine aesthetic. Split viewport: left = fixed full-height hero
  image carousel (dark overlay, category tag, 40px white Playfair headline,
  dots), right = white scrolling column with header row (logo + hamburger),
  2-col blog grid (8 entries: image with hover zoom, pink uppercase meta,
  28px Playfair heading, gray excerpt), circular pagination. Slide-out nav
  panel (50% width, cyan→pink gradient) with 30px white links + animated
  underline and a copyright line.
- **Structure (1:1, section order):**
  1. `nav#colorlib-main-nav` (absolute, full-height, width 50%,
     `linear-gradient(45deg, #29bae4, #ee76ad)`, z 1002): toggle top;
     links Home(active)/Fashion/Model/Travel/About us/Contact — `span`
     font-size 30px white, `:before` 3px white underline scaleX 0→1 on
     hover/active; `.copyright` p at bottom.
  2. `header` > `.container-fluid` > `.row` > `.col-md-12`:
     `.colorlib-navbar-brand .colorlib-logo` "Libro" (20px, uppercase,
     white, letter-spacing 5px, weight 400) + `.colorlib-nav-toggle`
     hamburger (`<i>` bars; `.active` → X, #000 bars).
  3. `section.ftco-fixed.clearfix`:
     - `div.image.js-fullheight.float-left` — `div.home-slider.owl-carousel`
       (2 `div.slider-item` bg images + `div.overlay`): `.slider-text`
       align-items-end = `p.cat span` (uppercase 13px, letter-spacing 1px,
       1px solid #fff, padding 4px) + `h1.mb-3` (40px, white, Playfair,
       weight 400, line-height 1.2).
     - `div.page-container.float-right` — `div.row` of two `div.col-md-6`
       × 4 `div.blog-entry` (8 total): `a.blog-image` > `img.img-fluid`
       (hover scale 1.1) + `div.text.py-4` = `div.meta` (date + author
       links, 12px uppercase letter-spacing 2px, #ee76ad) +
       `h3.heading` (28px Playfair, #000, hover #ee76ad) + excerpt p
       (#737373).
     - `div.row.mt-5` > `div.col.text-center` > `div.block-27` pagination:
       `‹` 1(active) 2 3 4 5 `›` — 40×40 circles, 1px #ccc border,
       radius 50%, active bg #ee76ad white text.
  4. `div#ftco-loader` (optional): SVG circular spinner, stroke #F96D00 on
     #eeeeee.
- **Design tokens (from css/style.css + DOM):**
  - Brand pink **#ee76ad** (links, meta links, pagination active, heading
    hover); cyan **#29bae4** + gradient `45deg #29bae4 → #ee76ad` (nav
    panel); **#F96D00** (loader); **#737373** (body/excerpt); **#000**
    (headings, active toggle); **#ccc** (pagination border); **#fff** (bg,
    nav links, slider text). Bootstrap `--primary: #79efb4` (green, inner
    pages only — index has no buttons).
  - Fonts: **Work Sans** (body, weight 300) + **Playfair Display** (h1–h4,
    weight 300/400, line-height 1.5) via Google Fonts. Logo = uppercase
    letter-spacing 5px sans.
  - Index interactions are links only (no buttons); 4px radius Bootstrap
    `.btn-primary` only on inner pages.
- **Recreation decisions:** seeded picsum placeholders
  (`picsum.photos/seed/tome-<n>/<w>/<h>` — hero bg_1/bg_2 + 8 entry images
  = 10 seeds); lucide-react icons (hamburger, close/X, heart); Work Sans +
  Playfair Display via Google Fonts `<link>`; hero carousel hand-rolled
  (dots + optional autoplay; no owl dependency); slide-out nav overlay with
  Escape-to-close + aria; static 5-page circular pagination (page 1 active).

## Implementation tasks

- [ ] Scaffold `apps/tome` (copy simplest existing app; package
      `@free-react-templates/tome`; register in package-lock via npm
      workspace install)
- [ ] `@theme` tokens: pink `--color-brand` (#ee76ad), cyan (#29bae4),
      brand gradient, grays (#737373, #ccc), loader orange (#F96D00)
- [ ] Google Fonts `<link>`: Work Sans + Playfair Display in `index.html`
- [ ] Slide-out nav component: open/close (hamburger, X, Escape), aria,
      50% width gradient panel, 30px white links, animated underline,
      copyright line
- [ ] Header: logo "Tome" uppercase letter-spaced + hamburger trigger
- [ ] Hero slider: full-height left column, 2 slides (bg image + overlay +
      category tag + headline), dots + autoplay
- [ ] Blog grid: right column, 2-col × 8 entries (image zoom, pink meta,
      Playfair heading, gray excerpt)
- [ ] Pagination: 5 circular pages, active pink fill, prev/next chevrons
- [ ] Footer/copyright: inside the slide-out panel (per source) — no
      separate footer section
- [ ] Tests (Vitest + Testing Library, 100% coverage): nav open/close,
      hero slides, blog grid render, pagination active state
- [ ] `scripts/verify-app.sh tome`: typecheck + lint + vitest 100% + build
- [ ] Ship via PR `feat/template-tome`, merge immediately
- [ ] After merge: `[x]` line 268 in TEMPLATES.md + surge URL;
      `npm run readme:status`; deploy check (curl surge URL)

## Fidelity watch-outs

- Split layout is the signature: hero left must stay fixed/full-height while
  the right column scrolls.
- Hero headline: 40px white Playfair weight 400, line-height 1.2, aligned
  bottom of the slide.
- Category tag: uppercase 13px, letter-spacing 1px, 1px solid white border,
  4px padding — NOT a filled chip.
- Blog meta: 12px uppercase letter-spacing 2px in pink — date and author are
  two separate inline elements.
- Pagination circles are exactly 40×40px with radius 50% and a #ccc border;
  active page = pink fill + white text.
- No buttons on the index page — links only. Don't invent a CTA.
- Nav links: 30px white with animated white underline (scaleX), not bold.
