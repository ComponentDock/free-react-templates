# Vendio (ColorLib "Sublime") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-vendio` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Sublime" — free e-commerce / online-shop website
  template (source: https://colorlib.com/wp/template/sublime/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 506; duplicate row at line
  1605 — same template, one app only).
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/sublime/`.
  DOM fetched (`/tmp/sublime.html`, 22,680 bytes) + stylesheets
  `styles/main_styles.css` (`/tmp/sublime-main.css`, 24,496 bytes) and
  `styles/responsive.css` (`/tmp/sublime-responsive.css`, 5,205 bytes) +
  TEMPLATES.md screenshot (`sublime-free-template.jpg`, 1200×946, viewed in
  browser). Screenshot cross-checks the DOM: white fixed header with bold
  black "Sublime." wordmark, centered nav (Home, Categories, Accessories,
  Offers, Contact), cart (0) + search icons; 950px dark hero photo (mouse lit
  with pink→cyan gradient) with white 60px headline "A new Online Shop
  experience.", outlined white "Shop Now" button, numbered dots 01/02/03
  bottom-left; product grid below on white.
- **Structure (top → bottom, single page):**
  1. Header — `position: fixed`, white bg; `.header_content` 130px tall →
     70px on scroll (`.header.scrolled`, 200ms ease); logo "Sublime." 30px
     700 ink → 24px scrolled; `.main_nav` links 16px 600 `#767676` (hover/active
     `#1b1b1b`, margin-right 46px); Home + Categories have `hassubs`
     dropdowns (white panel, right-aligned, 14px 600 links) — **simplify to a
     flat nav** (Home, Categories, Accessories, Offers, Contact — the visible
     top-level per the screenshot), note in PR. Right cluster (`.header_extra
ml-auto`): `.shopping_cart` link (SVG bag + "(0)" count div), `.search`
     icon → right-aligned search input panel (`search_panel_content`),
     `.hamburger` (mobile) → full-screen white `menu_container` with
     `page_menu_content` links + `page_menu_search` + `menu_social`.
  2. Hero (`.home`, 950px, white bg) — `.home_slider_container` padding
     `130px 60px 30px`; owl-carousel of 3 identical `.home_slider_item`
     slides: full-bleed cover photo (`images/home_slider_1.jpg` — dark studio
     shot, neon pink/cyan gradient mouse) + `.home_slider_content` at
     `top: 32.3%`, `max-width: 580px`: title 60px 600 white lh 1.2 "A new
     Online Shop experience.", subtitle 14px 400 white lh 2.14 mt 22px,
     "Shop Now" `.button.button_light` mt 40px (178×61, 2px white border,
     white 16px 600; hover white sweep + ink text). Custom dots bottom-left:
     "01." "02." "03." 14px 600 white, active/hover `#e95a5a`. Implement with
     React state + prev/next + dots (accessible), not owl; vary placeholder
     photos per slide, keep copy.
  3. Ads (`.avds`, white, `.avds_container` height 490px, padding `0 60px`) —
     row: `.avds_small` (39.1% width, padding 30px, `.avds_small_inner` 2px
     white border) = cover photo + `.avds_discount` badge bottom-right (152px
     wide: "20" 60px 700 ink + sup "%" 36px + "Discount" 14px ink) +
     `.avds_small_content` (max-width 250px, pt 57px pl 31px): title 48px 600
     white "Smart Phones" + `.avds_link` "See More" (14px white, 1px white
     underline ::after, mt 18px); `.avds_large` (60.8% width) = cover photo +
     `.avds_large_content` `rgba(0,0,0,0.63)` panel (pt 51px pl 30px pr 130px
     pb 30px): title "Professional Cameras" 48px 600 white, `.avds_text` 14px
     white lh 2.14 mt 11px, "See More" (`avds_link_large` mt 40px).
  4. Products (`.products`, white, pt 99px) — `.product_grid`: 4-col
     `.product` (width `calc((100% - 90px)/4)`, mb 59px), 8 items:
     `.product_image` cover photo; optional `.product_extra` badge (66×36px,
     `transform: rotate(90deg)`, `transform-origin: top left`, positioned top
     0 left 54px — i.e. reads vertically along the left edge; NEW `#6c6a74`,
     SALE `#e95a5a`, HOT `#1b1b1b`, white 16px 500 text);
     `.product_content` (pt 36px pb 38px): title 18px 500 ink (hover
     `#e95a5a`) + price 16px 500 `#6c6a74`. Source badges: 1 NEW, 2 SALE, 6
     HOT, 8 SALE; titles all "Smart Phone", prices all "$670" → paraphrase to
     8 distinct product names, keep "$" price shape.
  5. XL ad (`.avds_xl`) — full-width cover photo (`images/avds_xl.jpg`) +
     dark overlay content: title 48px 600 white "Amazing Devices",
     `.avds_text` 14px white lh 2.14, `.avds_link` "See More".
  6. Icon boxes (`.icon_boxes`, white, pt/pb 99px) — 3 centered `.icon_box`
     columns: 75×75 icon image (`images/icon_1.svg`–`icon_3.svg` → lucide
     `Truck`, `RotateCcw`, `Headphones`/`LifeBuoy`), title 18px 500 ink mt
     33px, text 14px muted mt 20px. "Free Shipping Worldwide", "Free Returns",
     "24h Fast Support".
  7. Newsletter (`.newsletter`, white, pb 99px, `border-top: 2px solid
#e3e3e3`) — centered: title 30px 500 ink "Subscribe to our newsletter",
     text 14px muted mt 8px; `.newsletter_form_container` mt 46px: email
     input 100% × 40px, borderless except `border-bottom: 2px solid #787878`,
     centered text; `.newsletter_button` "Subscribe" 178×61, 2px ink border,
     white bg, 16px 600 ink, mt 55px, sweep hover.
  8. Footer — source: `position: fixed; bottom: 0` over a 129px transparent
     `.footer_overlay`, bg cover image `images/footer.jpg`; content row 129px:
     `.footer_logo` 30px 700 ink, `.copyright` 14px ink centered (source:
     "Copyright © <year> All rights reserved | This template is made with ♥
     by Colorlib" → MUST become "… | Made with ♥ by Component Dock" linking
     https://www.componentdock.com/), `.footer_social` right, 3 icons 17px ink
     (hover white). **Implement static in normal flow** — the fixed-bottom
     quirk would cover page content; note the deviation in the PR.

## Implementation tasks (for the implementer stream)

1. Create app from a simple existing template: copy the smallest app
   folder, rename package to `@free-react-templates/vendio`, folder
   `apps/vendio`.
2. Read `openspec/specs/template-vendio/spec.md`; write tests first for
   every section (Vitest + RTL, 100% coverage enforced).
3. Implement sections in order: Header → HeroSlider → AdsRow → ProductGrid →
   XlAd → IconBoxes → Newsletter → Footer → App composition.
4. Tokens in `src/index.css` `@theme`: `--color-ink: #1b1b1b`,
   `--color-accent: #e95a5a`, `--color-muted: #767676`,
   `--color-price: #6c6a74`, `--color-line: #787878`; Poppins 300–900 Google
   Fonts `<link>` in `index.html`.
5. Buttons: `w-[178px] h-[61px] border-2` (ink; hero variant white border +
   white text) `text-base font-semibold`, hover = white sweep overlay +
   text flip (absolute white panel with rotate/translate transition, or a
   bg swap — keep border + text flip). Newsletter button: white bg + ink
   border + ink text.
6. Images: `https://picsum.photos/seed/vendio-<n>/<w>/<h>` for 3 hero
   slides (dark, tech-y), 2 ad banners + XL banner, 8 product tiles, 3 icon
   boxes (lucide icons instead); icons from lucide-react (`ShoppingBag`,
   `Search`, `Menu`, `X`, `Truck`, `RotateCcw`, `Headphones`, `Facebook`,
   `Twitter`, `Instagram`).
7. Run `bash scripts/verify-app.sh vendio` (typecheck + lint + knip +
   fallow + 100% coverage tests + build). Fix root causes, re-run.
8. Visual QA: `npx vite preview` + browser; compare against live preview
   (`preview.colorlib.com/theme/sublime/`) — white fixed shrinking header,
   950px dark hero with numbered dots, ads row, 4-col product grid with
   rotated badges, newsletter underline input, light footer.
9. Push `feat/template-vendio`, open PR with source/preview/tokens/diffs,
   merge immediately, `[~]` → `[x]` bookkeeping + surge URL +
   `npm run readme:status`.

## Fidelity notes / pitfalls

- Preview URL works as-is: `https://preview.colorlib.com/theme/sublime/`
  (HTTP 200).
- The source's `product_extra` badge is **rotated 90°** with
  `transform-origin: top left` — it reads vertically along the image's left
  edge, not like a normal corner ribbon. Recreate with `rotate-90` on an
  absolutely-positioned div (top-0 left-14, origin-top-left) or a
  `writing-mode` chip; simplest faithful approach: rotate the badge div.
- All 3 hero slides share identical copy ("A new Online Shop experience." /
  lorem / "Shop Now") in the source; keep the copy (it IS the design) but
  vary the placeholder photos per slide so the carousel is visibly a
  carousel.
- Buttons are rectangular (NO border-radius) with a 2px solid border and a
  white sweep hover (`.button::after` rotated panel). Don't round them.
- Header shrinks on scroll (130px → 70px, logo 30px → 24px) — implement the
  scroll listener with cleanup; keep `position: fixed`.
- Nav dropdowns exist in the source but are unnecessary on the single home
  page — a flat 5-link nav (Home, Categories, Accessories, Offers, Contact)
  is the accepted simplification (matches the screenshot's visible top-level
  items). Note in PR.
- Footer in the source is `position: fixed; bottom: 0` with a 129px spacer —
  DO NOT replicate that quirk; render a static footer at the end of the page
  (note the deviation in the PR).
- Newsletter input: no visible field border except the 2px `#787878` bottom
  line, text centered. Validate email (required + format) per conventions.
- Footer copyright: "This template is made with ♥ by Colorlib" → MUST read
  "Component Dock" and link https://www.componentdock.com/.
- Do NOT copy any assets: no images, no FontAwesome files, no CSS. Icons from
  lucide-react (FontAwesome classes like `fa fa-facebook` have lucide
  equivalents).
- The source imports Poppins 300–900 via `@import`; implement via Google
  Fonts `<link>` in index.html (preconnect + link). Open Sans appears in a
  couple of secondary rules — Poppins everywhere is an acceptable
  simplification (note in PR).
