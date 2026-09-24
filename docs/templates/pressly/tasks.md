# Pressly (ColorLib Magaznpro) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-pressly`. Recreation name: **Pressly** (NEW name —
> the ColorLib source keeps its name "Magaznpro").

## Source mapping

- **ColorLib item:** "Magaznpro" (TEMPLATES.md line 2200; section
  "## Magazine & News (25)" around line 2193).
- **Source URL:** https://colorlib.com/wp/template/magaznpro/
- **Preview URL — REACHABLE (verified by direct fetch, HTTP 200, 67,884 bytes):**
  **`https://preview.colorlib.com/theme/magaznpro/`**
  Title: "Magazine News". Page has Bootstrap grid, Owl Carousel, SlickNav,
  LightSlider, Magnific Popup, and FontAwesome.
- **Preview CSS:** `assets/css/style.css` (70,743 bytes, minified single-file
  with all component styles). Additional vendor CSS: bootstrap.min.css,
  owl.carousel.min.css, slicknav.css, lightslider.min.css, animate.min.css,
  magnific-popup.css, fontawesome-all.min.css, themify-icons.css, slick.css,
  nice-select.css. Fonts: Google Fonts "DM Sans" 400/500/700.

## Reference research (done — do not redo)

### Screenshot analysis

The ColorLib preview screenshot (`magaznpro-free-template.jpg`) shows a
magazine-style layout with:
- Full-width hero carousel with large images and bottom-left caption cards
- "Trending Now" grid section with mixed card sizes
- "What's New" tabbed section with category filters
- "Technology" section with light pink background and video slider
- Instagram feed horizontal image row
- 4-column footer with newsletter signup

### Design tokens (live stylesheet + rendered page, verified by direct fetch)

| Token | Value | Source CSS reference |
|-------|-------|---------------------|
| Font | "DM Sans" 400/500/700 | Google Fonts `@import` + `font-family: "DM Sans", sans-serif` |
| Brand accent | `#f0d` (magenta-pink) | `.boxed-btn`, `.btn`, `.header-btn`, `.submit-btn`, `.btn_1` bg; `.header-bottom` bg; `#back-top` bg |
| Heading ink | `#000` | `h1,h2,h3,h4,h5,h6 { color:#000 }` |
| Body text | `#646464` | `p { color:#646464 }`, `.header-info-right ul li a { color:#646464 }` |
| Slider date text | `#5E5E5E` | `.popular-item-area .slider-caption p { color:#5E5E5E }` |
| Social icons | `#D4D4E1` | `.header-social a { color:#D4D4E1 }` |
| Section title border | `#E8E9FF` | `.section-tittle { border-bottom: 1px solid #E8E9FF }` |
| Light section bg | `#FFF6FE` | `.section-bg1 { background: #FFF6FE }` |
| Blog border | `#f0e9ff` | `.blog_right_sidebar .widget_title::after`, sidebar widget borders |
| Category teal | `#00CEB2` | `.small-btn { background: #00CEB2 }` default |
| Category blue | `#0154F7` | `.tranding-area ... span { background: #0154F7 }` |
| Category orange | `#F04506` | `.tranding-area ... span { background: #F04506 }` |
| Category yellow | `#FBCE0F` | `.small-btn.color4 { background: #FBCE0F }` |
| Category purple | `#DD00FF` | `.small-btn.color5 { background: #DD00FF }` |
| Button radius | `5px` | `.boxed-btn`, `.btn`, `.small-btn`, `.header-btn` all `border-radius: 5px` |
| Card overlay radius | `10px` | `.popular-item-area .slider-caption { border-radius: 10px }` |
| Section padding | `120px/100px` | `.section-padding { padding-top: 120px; padding-bottom: 100px }` |
| Preloader bg | `#f7f7f7` | `.preloader { background-color: #f7f7f7 }` |
| Footer active | `#3B4855` | `.pagination-area .page-item.active .page-link { background: #3B4855 }` |
| Back-to-top | `#f0d`, 50% radius | `#back-top { background: #f0d; border-radius: 50% }` |

### Section structure (from live DOM, top to bottom)

1. **Header** — Two-tier: top bar (social icons left, logo center, search + pages + sign-in right) + sticky bottom nav (pink bg `#f0d`, category links in white)
2. **Popular Items Hero Carousel** — Full-width Owl Carousel, each slide: full-bleed image (678px desktop), bottom-left white caption card (10px radius) with category badge + headline + date
3. **Trending Now** — Section heading with "View All" link, border-bottom `#E8E9FF`. Grid: first card large (image with overlaid caption), 5 standard cards (image top, title + date below). Color-coded category badges.
4. **What's New** — Tabbed section (All / Lifestyle / Travel / Fashion / Photography). Split layout: left 6/7 = image slider with overlaid caption, right 5/7 = 3 stacked post cards (image + category badge + title + date)
5. **Technology** — Light pink bg (`#FFF6FE`). 3-col: left 2 stacked posts, center video slider with thumbnail nav + play button overlay, right 2 stacked posts
6. **Instagram Feed** — Horizontal row of 6 square images, Instagram icon overlay on hover
7. **Footer** — 4-col: logo + description + social icons / Useful Links / Top Categories / Newsletter signup. Dark bottom bar with copyright.
8. **Back-to-top button** — Fixed pink circle, bottom-right

### Fidelity notes for implementer

- The original uses Bootstrap grid (`col-xl-*`, `col-lg-*`, etc.) — map to Tailwind responsive grid (`grid-cols-*`, `lg:grid-cols-*`, etc.)
- Owl Carousel for hero and Instagram feed → replace with CSS-only carousel or a lightweight React carousel (embla, swiper)
- SlickNav for mobile menu → replace with React state toggle
- LightSlider for the What's New left panel and Technology center panel → replace with React carousel
- Magnific Popup for video play → replace with YouTube embed or modal
- FontAwesome and Themify icons → replace with lucide-react
- No images copied — use `https://picsum.photos/seed/pressly-<n>/<w>/<h>` for deterministic placeholders
- Google Fonts "DM Sans" via `<link>` in index.html (weights 400, 500, 700)
- Footer MUST link https://www.componentdock.com/ (replacing Colorlib attribution)
- Every category badge color must be available as a Tailwind custom color in `@theme`
- The search input expands on focus (CSS transition, width animation) — implement with controlled input + Tailwind transition

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/pressly` from the simplest existing app, rename package to
       `@free-react-templates/pressly`, add DM Sans 400/500/700 Google Fonts
       `<link>` in index.html, set `public/CNAME` = `pressly.free.componentdock.com`
       + `"homepage"`. Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Header (top bar with social icons, logo, search, pages
       dropdown, sign-in; sticky nav with 8 category links, pink bg), HeroCarousel
       (3+ slides with images, captions, category badges, navigation arrows),
       TrendingNow (heading with View All, 6 post cards with color-coded badges),
       WhatsNew (tabbed nav, 5 tabs, split layout with slider + 3 posts),
       Technology (light pink bg, 3-col layout, video slider with thumbnails),
       InstagramFeed (6+ square images with hover icon), Footer (4 columns,
       newsletter form, Component Dock link), BackToTop (fixed pink circle).
3. [ ] Layout shell: set up @theme tokens for brand pink `#f0d`, category badge
       colors, section backgrounds. Configure Tailwind with custom colors.
4. [ ] Header component: two-tier layout, sticky nav with pink bg, social icons
       (lucide), search input with expand-on-focus, mobile hamburger toggle.
5. [ ] HeroCarousel: implement image carousel with slide captions, category
       badges, and navigation. Use CSS transitions or lightweight carousel lib.
6. [ ] TrendingNow: grid layout with 1 featured + 5 standard cards, color-coded
       category badges, section heading with border-bottom.
7. [ ] WhatsNew: tabbed interface with state management, split layout per tab,
       left slider + right stacked cards.
8. [ ] Technology: light pink bg section, 3-column responsive grid, center video
       slider with thumbnail nav.
9. [ ] InstagramFeed: horizontal flex row of square images with hover overlay.
10. [ ] Footer: 4-column layout, newsletter form, social icons, copyright bar
        with Component Dock link.
11. [ ] BackToTop: fixed-position pink circle button, scroll-to-top behavior.
12. [ ] Run `npm run verify:app -- pressly` (typecheck → lint → vitest 100% →
        build) and fix until green.
13. [ ] Open PR `feat/template-pressly` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must include:
        source URL, preview URL, token list, and what differs (renamed "Pressly",
        DM Sans via Google Fonts, lucide icons, React carousel instead of Owl/
        Slick/LightSlider, picsum placeholders, Component Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2200 `[x]` + surge URL
        (`https://pressly.free.componentdock.com`), `npm run readme:status`, push.
