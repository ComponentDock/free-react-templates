# Scribble (ColorLib Suppablog) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-scribble`.

## Design notes (replication findings)

- **Original:** ColorLib "Suppablog" — minimal creative blog template for
  writers (source: https://colorlib.com/wp/template/suppablog/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/suppablog/
  (HTTP 200; ~17 KB HTML + `style.css` ~24 KB, `css/common.css`, `css/clear.css`
  parsed for tokens). Screenshot
  `suppablog-free-creative-blog-template-for-writters.jpg` viewed in browser
  (1200×927).
- **Visual design (from screenshot):** sophisticated split-screen blog
  layout, white background. Far-left fixed dark charcoal rail (~100px):
  teal square logo (white up-arrow mark), hamburger toggle below, vertical
  white social icons (Twitter, YouTube, Facebook, Vimeo, Behance, RSS).
  Middle: blog column — featured post with huge bold Montserrat headline
  ("Whatever is begun in anger ends in shame"), small uppercase CRAFTING +
  FEBRUARY 12, 2016 above, serif excerpt paragraph with small arrow link;
  five more posts (SCIENCE, ART, LIFE, CODING, ADVOCACY). Right half:
  full-height vertical portrait photo (woman in pink top, tiled-wall
  background) as fixed visual anchor. Serif body (Libre Baskerville) gives
  a literary feel; teal accents; pink category links.
- **Structure (1:1, section order):**
  1. Left rail (`#sidebar .menu-right-part`, ~100px, float right inside
     the 420px sidebar): `.logo-holder` (logo img) → `#toggle` hamburger
     (`#toggle .menu-line`, 60px tall, bg #333333, lines #5B5B5B) →
     `.social-holder .social-list` vertical (Twitter, YouTube-play,
     Facebook, Vimeo, Behance, RSS) → `.fixed.scroll-top` caret-up icon.
  2. Slide-in sidebar (`#sidebar`, bg #2D2D2D, width 420px, absolute,
     `left:-320px` closed → `left:0` open, transition left .3s ease,
     z-index 3; body.open → `.site-content` margin-left 420px):
     `.menu-left-part` (width 320px, bg #333333, overflow-y auto):
     `.search-holder` (`.search-field`: 100% w, 100px h, 18px Montserrat,
     padding-left 50px, bg #2D2D2D, color #5B5B5B, no border, placeholder
     "Type here to search...") → `.site-info-holder` (h1 `.site-title`
     Montserrat 30px/38px 700 #fff, padding 20px 0; p `.site-description`
     14px/23px #848484 max-width 200px) → `#header-main-menu` nav
     (padding-left 50px, padding-top 80px; `.main-menu.sm-clean` links
     #ffffff: Home / About / Scroll / Contact; `.current` = Home) →
     `footer .footer-info` ("© 2018 SUPPABLOG HTML TEMPLATE. CRAFTED
     WITH ♥ BY COLORLIB", links #848484, heart #D8588C pulsing).
  3. Content (`#content.site-content`, margin-left 100px, width
     calc(100% - 100px)): `#blog-wrapper .blog-holder.center-relative`
     (padding-top 100px, padding-bottom 85px, max-width 470px, margin
     auto):
     - `.blog-item-holder.featured-post` (padding-bottom 105px):
       `.cat-links` (Crafting, #D8588C 14px, uppercase comma-separated) →
       `.entry-date.published` (14px uppercase 700 #AABDBD, `•` prefix) →
       h2 `.entry-title` (Montserrat 48px/50px, padding-bottom 40px,
       #242424, hover #0697AE) → `.excerpt` (16px/28px #5D5D5D serif) +
       `.read-more` arrow (30×30 icon).
     - 5× `.blog-item-holder`: h2 `.entry-title` (Montserrat 30px/30px,
       padding-top 35px) → `.cat-links` → `.entry-date.published`.
       Reference posts: "I like to reinvent myself" (Science), "Everything
       is design" (Art), "It's all about experience" (Life), "This is not
       my code" (Coding), "Support human activity" (Advocacy); all dated
       February 12, 2016.
     - `.load-more-holder` (Montserrat 18px 700, #C0D3D3, block, max-width
       470px, margin auto; hover #AABDBD): "LOAD MORE ENTRIES".
  4. Featured image panel (`.featured-image-holder` width 50% float
     right; `.featured-post-image` position fixed, height 100%, width
     calc(50% - 50px), background-size cover, background-position center):
     portrait demo image.
- **Design tokens (from CSS):**
  - Brand: **#0697AE** (teal) — title hover, pagination selected/hover,
    contact-submit hover, member-info text.
  - Accent: **#D8588C** (pink) — cat-links, heart icon.
  - Dark: #2D2D2D (sidebar, search bg), #333333 (menu-left-part, toggle),
    #242424 (titles), #404040 (form placeholder).
  - Text: #5B5B5B/#5D5D5D (body/excerpt/placeholder), #848484 (muted),
    #fff (site-title, menu links).
  - Muted light: #C0D3D3 (load-more, pagination), #AABDBD (dates,
    selection), #F1F1F1 (light surface).
  - Fonts: "Montserrat" (400/700 — titles, nav, meta, buttons) +
    "Libre Baskerville" (400 — body/excerpt serif, 18px/35px,
    letter-spacing -1px).
  - Sidebar transition left .3s ease; content margin transition .3s ease.

## Implementation tasks (order)

1. Scaffold `apps/scribble` (copy simplest existing app, rename package
   to `@free-react-templates/scribble`; register workspace via root
   `npm install`; verify `grep -c "free-react-templates/scribble"`
   package-lock.json). Remember `injectUiSource()` in vite.config.ts.
2. `src/index.css`: Tailwind entry + `@theme` tokens — `--color-brand:
#0697AE`, `--color-accent: #D8588C`, dark surfaces #2D2D2D/#333333,
   muted #AABDBD/#C0D3D3; fonts Montserrat (400/700) + Libre Baskerville
   (400) via Google Fonts `<link>` in `index.html`.
3. `src/components/Sidebar.tsx` (rail + slide-in panel): fixed left rail —
   logo (square + ArrowUp icon or text mark), toggle button (Menu icon,
   aria-label, aria-expanded), vertical social icons (Twitter, Youtube,
   Facebook, Vimeo, Dribbble, Rss — lucide, aria-labels), scroll-top
   (ArrowUp, scrolls window to top); slide-in panel — search input
   (placeholder "Type here to search..."), h1 site title "Scribble",
   site description, nav links Home / About / Scroll / Contact, footer
   attribution line. Toggle flips open state (sidebar translates in, rail
   stays visible; content margin shifts). Tests: rail content + focusable
   icons, default closed, toggle opens/closes, search input present.
4. `src/components/BlogList.tsx`: featured post (cat "Crafting", date,
   h1 48px headline, excerpt, read-more arrow link) + 5 regular posts
   (title, cat, date) + "LOAD MORE ENTRIES" block. Data as a typed array
   (title, category, date, excerpt?, featured?). Tests: featured post
   renders with excerpt + read-more, ≥5 regular posts with title/cat/date,
   load-more label present.
5. `src/components/FeaturedImage.tsx`: fixed right-half panel with
   cover-fit placeholder image (`picsum.photos/seed/scribble-1/900/1200`
   or a portrait crop), `aria-hidden` decorative role or alt text. Test:
   panel renders with image.
6. `src/App.tsx`: compose Sidebar + main (BlogList + FeaturedImage);
   document title "Scribble — Blog Template"; main landmark. Wire
   scroll-top click behavior.
7. Gate: `scripts/verify-app.sh scribble` (typecheck + lint + 100%
   coverage + build). PR: `feat: Scribble — minimal blog template
(ColorLib Suppablog)` → merge immediately.

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh scribble` green (100% coverage)
- [ ] Section order 1:1 with reference; sidebar toggle opens/closes
- [ ] Brand #0697AE in @theme; Montserrat + Libre Baskerville loaded
- [ ] Placeholder images seeded per template; no copied assets
