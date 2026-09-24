# Papernote (ColorLib Newspaper) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-papernote`. Recreation name: **Papernote** (NEW name —
> the ColorLib source keeps its name "Newspaper").

## Source mapping

- **ColorLib item:** "Newspaper" (TEMPLATES.md line 2210, News category).
- **Source URL:** https://colorlib.com/wp/template/newspaper/
- **Preview URL — REACHABLE (verified 2026-09-24 by direct fetch):**
  **`https://preview.colorlib.com/theme/newspaper/`** (HTTP 200, 52,893 bytes).
- **Preview CSS:** `style.css` (36,337 bytes) — all custom styles, Bootstrap 4
  base. Fonts: Google Fonts Roboto (300, 400, 500, 700, 900). Icons: Font
  Awesome (replace with lucide-react). Scripts: jQuery 3.x, Bootstrap, custom
  mega-menu.

## Reference research (done — do not redo)

### Screenshot visual analysis

The screenshot shows a classic newspaper-style layout. The top has a dark navy
header bar with "The News Paper" logo in white, Login/Register links, and a
search bar with red search button. Below is a white navigation bar with
categories. The hero area has two red breaking news badges ("Breaking News",
"International") with headline text, and an ad banner on the right. The
featured area shows a large post on the left (FINANCE category, with hero
image, large headline, and red author byline) and 4-5 smaller stacked posts
on the right with thumbnails and category labels. Popular News section has a
light blue-gray background with post grid, an "Info" ranking widget, and a
Newsletter widget. A dark video section with background image overlay follows.
Editor's Pick has post cards in a grid with a "World News" sidebar. The footer
is dark with four widget columns.

### Live preview DOM analysis (2026-09-24)

- **Top Header (`.top-header-area`):** Dark navy `#02031c` bg. Logo text
  "The News Paper" (rename to "Papernote") in white. Right: Login, Register
  links (white), search input + red `#ee002d` search button.
- **Nav Bar (`.newspaper-main-menu`):** White bg. Mega-menu with dropdowns.
  Items: Home, Pages (dropdown), Mega Menu (dropdown), Politics, Breaking News,
  Business, Technology, Health, Travel, Sports, Contact. Hamburger on mobile.
- **Hero (`.hero-area`):** White bg. Left col-lg-8: two breaking news rows.
  Each row: red badge (`.news-title`) with label + headline text to the right.
  First badge: "Breaking News", second: "International". Right col-lg-4:
  Ad banner (landscape image with "Summer Trip" / "Buy Now" overlay).
- **Featured Posts (`.featured-post-area`):** White bg. Left col-lg-8: large
  post card with hero image (400px+ height), red "FINANCE" category tag,
  large h6 headline "Financial news: A new company is born today at the stock
  market", author "By Christinne Williams" in red. Right col-lg-4: 4-5 small
  stacked post cards, each with thumbnail (100x100), red category label
  (FINANCE, POLITICS, HEALTH), headline, timestamp "7:00 AM | April 14".
- **Popular News (`.popular-news-area`):** `#eff4f9` bg, padding 80-50.
  Left col-lg-8: heading "Popular News" (h5, red accent `#ee002d`). 4 post
  items in 2-col grid: thumbnail, title, post meta (date, comments).
  Right col-lg-4: "Info" heading + "4 Most Popular News" with 4 ranked items
  (numbered 1-4). Below: "Newsletter" heading + email input + subscribe button.
- **Video Section (`.video-post-area`):** Dark overlay `rgba(2,3,28,0.9)` on
  background image. 3 video post cards with play button overlay. White text.
- **Editor's Pick (`.editors-pick-post-area`):** `#eff4f9` bg, padding 80-50.
  Heading "Editor's Pick". Left col-lg-8: 6 post cards in 2x3 grid. Each:
  thumbnail, category tag, headline, post meta. Right col-lg-4: "World News"
  heading + 5 smaller post items (thumbnail + headline).
- **Footer Ad (`.footer-add-area`):** Full-width ad banner placeholder.
- **Footer (`.footer-area`):** Dark `#152535` bg. Logo "Papernote" in white.
  4 widget columns: "Politics", "Featured", "FAQ", "+More" — each with link
  lists. Bottom bar: copyright + "Component Dock" link.

### Design tokens (from CSS extraction)

- **Primary brand:** `#ee002d` (bright red — badges, category labels, search btn,
  newsletter accent, author byline, hover states)
- **Dark header:** `#02031c` (near-black navy — top header bar, newsletter bg)
- **Section alt bg:** `#eff4f9` (very light blue-gray — popular news, editor's pick)
- **Main bg:** `#fff` (white — body, featured area)
- **Footer bg:** `#152535` (dark blue-gray)
- **Text primary:** `#000` (black headings)
- **Text body:** `#393939` (dark gray body text)
- **Text meta:** `#656565` (medium gray — dates, author)
- **Text light:** `#a5a5a5` (light gray accents)
- **Border:** `#d0d5d8` (light gray dividers)
- **Font:** Roboto (Google Fonts), weights 300/400/500/700/900
- **Button radius:** `5px` (slightly rounded — category badges, search button)
- **Badge radius:** `0` (sharp corners — breaking news badges)
- **Avatar radius:** `50%` (circular — author avatars)
- **Overlay:** `rgba(2, 3, 28, 0.9)` (video section dark overlay)

## Implementation task outline

### Phase 1: Scaffolding
1. Copy simplest existing app (e.g. `apps/abjure/`) as base → rename to `apps/papernote/`
2. Rename package to `@free-react-templates/papernote`
3. Create `public/CNAME` with `papernote.free.componentdock.com`
4. Update `package.json` homepage to `https://papernote.free.componentdock.com`
5. Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens (index.css + tailwind config)
1. Add `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap')` to index.html
2. Define `@theme` tokens in `src/index.css`:
   - `--color-brand: #ee002d` (bright red)
   - `--color-dark-navy: #02031c` (header bg)
   - `--color-section-alt: #eff4f9` (popular/editor's pick bg)
   - `--color-footer-bg: #152535` (footer)
   - `--color-text-body: #393939`
   - `--color-text-meta: #656565`
   - `--color-text-light: #a5a5a5`
   - `--color-border: #d0d5d8`
   - `--font-family-body: 'Roboto', sans-serif`
3. Set body defaults: `font-family: Roboto; color: #393939`

### Phase 3: Components (section-by-section)

1. **TopHeader.tsx** — Dark navy bar. Logo text "Papernote" left. Right: Login,
   Register links, search input + red search button (rounded 5px).

2. **NavBar.tsx** — White bg. Mega-menu nav links. Items: Home, Pages, Mega Menu,
   Politics, Breaking News, Business, Technology, Health, Travel, Sports, Contact.
   Hamburger toggle on mobile. Active state with red underline.

3. **HeroBreaking.tsx** — White bg. Two-column: left (col-lg-8) has 2 breaking
   news rows (red badge + headline text), right (col-lg-4) ad banner placeholder.
   Use red `#ee002d` badges with `border-radius: 0` (sharp).

4. **FeaturedPosts.tsx** — White bg. Two-column asymmetric: left large post
   (hero image + "FINANCE" red category tag + headline + red author byline),
   right 4-5 small stacked cards (thumbnail + category + headline + timestamp).

5. **PopularNews.tsx** — `#eff4f9` bg. Left: "Popular News" heading + 4 post
   items in 2x2 grid (thumbnail + title + meta). Right: "Info" ranking widget
   (4 numbered items) + "Newsletter" widget (email input + button).

6. **VideoPosts.tsx** — Dark overlay `rgba(2,3,28,0.9)` on background image.
   3 video post cards with play button overlay. White text on dark bg.

7. **EditorsPick.tsx** — `#eff4f9` bg. "Editor's Pick" heading. Left: 6 post
   cards in 2x3 grid (thumbnail + category + headline + meta). Right: "World
   News" sidebar with 5 items.

8. **FooterAd.tsx** — Full-width ad banner placeholder (landscape image).

9. **Footer.tsx** — Dark `#152535` bg. Logo "Papernote" in white. 4 widget
   columns (Politics, Featured, FAQ, +More) with link lists. Bottom bar:
   copyright + "Component Dock" link.

### Phase 4: Testing + Verification
1. Write Vitest tests for each component (100% coverage)
2. Run `scripts/verify-app.sh papernote`
3. Typecheck + lint + build + test:coverage
4. Verify all sections render correctly

### Phase 5: Deploy prep
1. `npm install` at root (lockfile registration)
2. Commit with conventional format
3. Push to main, verify deploy
