# Pressbox — Implementation Tasks & Design Notes

**Source:** ColorLib "Force" — https://colorlib.com/wp/template/force/
**Preview:** https://preview.colorlib.com/theme/force/
**New name:** pressbox
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Structure order (section-by-section)

1. **Navbar** — Top bar + main navigation
2. **Hero Carousel** — Full-width image carousel with overlays
3. **Editor's Choice** — 4-column article grid
4. **News Area** — 2-column (8/4) with Latest News feed + Sidebar
5. **Travel & Food** — 2×2 article grid sub-section
6. **Wedding Adventure** — 2×2 article grid sub-section
7. **Product List Area** — Multi-category article tabs
8. **Footer** — Multi-column footer with links, news, social

## Section-by-section design notes

### 1. Navbar (`header.header_area`)
- Top bar (`.top_menu`): bg `#f9f9ff`, left date + "Live" badge (`#ff1857`),
  right social icons + search. Text 12px, `#fff` on `#ff1857` for badges.
- Main nav: white bg, centered container. Logo text "Pressbox" (replace "Force").
- Menu links: Roboto, uppercase or normal case, dark text.
- Hamburger for mobile (Bootstrap-style collapse).

### 2. Hero Carousel (`section.home_banner_area`)
- Full-width, min-height 600px.
- Owl Carousel with 2 slides, each: background image (use picsum),
  dark overlay, centered white text.
- Slide content: headline (Roboto 36px bold white), date badge
  (`.date`, bg `#ff1857`, white text), subheadline.
- Carousel indicators at bottom: active = `#ff1857`, inactive = white/semi.
- Prev/Next arrows: white, semi-transparent bg.

### 3. Editor's Choice (`section.choice_area.p_120`)
- Section bg: `#f9f9ff`.
- Section title: `.main_title2` style — bg `#f9f9ff`, left border
  3px solid `#ff1857`, padding-left 15px, text `#222` Roboto 500.
- 4-column grid of `.choice_item` cards.
- Each card: thumbnail image (picsum, aspect-ratio ~16:9),
  article title (Roboto 18px 500, `#222`), short excerpt.
- No card borders or shadows — clean flat look.

### 4. News Area (`section.news_area`)
- Two-column Bootstrap-style grid: col-lg-8 (main) + col-lg-4 (sidebar).
- **Main column:**
  - "Latest News" heading (`.main_title2` style).
  - 3 article entries: each is a media layout (thumbnail left 120×80,
    title + excerpt + author/date right). Author avatars as small circles.
- **Sidebar (`.right_sidebar`):**
  - "Most Popular News" heading.
  - List of 5 popular articles: small thumbnail + title, no excerpt.
  - "Newsletter" widget below: heading, email input, subscribe button
    (bg `#ff1857`, white text).

### 5. Travel & Food (`.tavel_food` inside news_area main col)
- Sub-heading: "Travel and food" (`.main_title2` style).
- 2×2 grid of small article cards (`.choice_item.small`).
- Each card: thumbnail + title.

### 6. Wedding Adventure (`.wedding_megazin` inside news_area main col)
- Sub-heading: "Wedding adventure" (`.main_title2` style).
- 2×2 grid of small article cards.
- Each card: thumbnail + title.
- `margin-bottom: -30px` to tighten spacing.

### 7. Product List Area (`section.product_list_area.p_100`)
- 3-column layout with category headers:
  - "Tech Culture" — 3 articles with thumbnails
  - "Brilliant Ideas" — 3 articles with thumbnails
  - "Best Product Deals" (heading) — 4 articles
- Each article: small thumbnail (left) + title (right, Roboto 500).
- Section padding: 100px.

### 8. Footer (`footer.footer-area`)
- Dark bg (near-black `#04091e` or similar dark).
- Multi-column grid:
  - Column 1: "Quick Links" — Sitemaps, Categories, Archives,
    Advertise, Ad Choice, Privacy Policy, Terms of Use, Help Center,
    Newsletters, Feedback.
  - Column 2: "Most Viewed News" — 2 recent popular articles with
    thumbnails and titles.
  - Column 3: Social media widget (like/follow/subscribe counts).
- Bottom bar: copyright + **"Made with Component Dock"** link
  to https://www.componentdock.com/.

## Fidelity notes

- **Colors:** Hot-pink accent `#ff1857` is the signature color — used on
  badges, active indicators, subscribe button, hover states. Lavender
  `#f9f9ff` is the section background color.
- **Typography:** Roboto 500 for headings/titles, Open Sans for body/meta.
  H2: Roboto 36px bold. Article titles: Roboto 18px 500.
- **Layout:** Bootstrap 4 grid (12-col). News area uses 8/4 split.
  Editor's Choice uses 4-col. Product list uses 3-col.
- **No rounded corners** — cards and badges are square (Bootstrap default).
- **Images:** Use `https://picsum.photos/seed/pressbox-<n>/<w>/<h>` for
  deterministic placeholders. Hero images ~1920×600. Card thumbnails
  ~400×250. Sidebar thumbnails ~120×80.
- **Carousel:** Use a React carousel library (e.g. embla-carousel-react
  or a lightweight custom implementation). Match Owl Carousel behavior:
  auto-play, fade transition, indicators, prev/next arrows.
- **No ColorLib references** in app code. Provenance only in spec + TEMPLATES.md.
