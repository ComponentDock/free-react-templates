# Feature (ColorLib Article) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-feature` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Article" — free Bootstrap 3 personal / editorial
  blog template. Listed in TEMPLATES.md under Blog (line 241), slug appears
  only once (source: https://colorlib.com/wp/template/article/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/article/`
  (HTTP 200, ~59KB HTML; title "Article Template"). DOM + `css/style.css`
  (~38KB: Bootstrap 3 base + custom theme) extracted and analyzed.
  Screenshot `article-free-template.jpg` (1200×946) viewed in browser; live
  render also verified in browser at desktop width.
- **Layout:** top navbar (cursive "Article." logo 40px Grand Hotel + right
  uppercase 12px menu with letter-spacing 2px: Home active orange, Blog
  hover-dropdown [Commercial/Apartment/House/Building], Lifestyle, Travels,
  Gallery, About Me — menu HIDDEN on mobile, no hamburger in the source) →
  full-width hero flexslider (4 slides, 650px min-height photo +
  `rgba(0,0,0,0.1)` overlay, bottom-left white text block: orange 60×60
  number badge [Fira Sans 24px white] + Lora 28px black title +
  orange uppercase date, `padding-left: 80px`; flexslider numbered dots +
  prev/next) → two-column body: `.content` 64% / `.sidebar` 30% (100% on
  mobile) → Instagram strip (8 tiles) → footer `#F6F6F6` 3 columns →
  back-to-top button.
- **Blog entries (4):** each `article.blog-entry` (`border-bottom: 1px
solid #e6e6e6; padding-bottom: 3em; margin-bottom: 4em`) with a
  `div.blog-wrap` card (`background: #fafafa; padding: 2em 0; margin-
bottom: 40px`):
  1. category row: uppercase Lora 13px, letter-spacing 4px, orange — two
     links " | " separated (Health|Workout, Fashion|Lifestyle,
     Model|Fashion, Lifestyle|Travel);
  2. h2 title: 28px, Lora ITALIC, `#4d4d4d`, centered, margin-bottom 30px;
  3. media: entry 1 = owl-carousel 2-image gallery (400px, with
     prev/next); entries 2–3 = single 400px cover image; entry 4 =
     video placeholder (400px / 300px mobile, `rgba(0,0,0,0.5)` overlay →
     0.7 hover, centered 90×90 play button, hover scale 1.1);
  4. `ul.share` vertical rail at `left: -2.5em`: Share + facebook /
     twitter / google icons;
  5. meta row (below media, centered): calendar "January 21, 2017" |
     user "by Stephy" | bubble "5 Comments" — 13px uppercase gray →
     orange hover;
  6. `div.desc`: `p.first-letra` with DROP CAP (`:first-letter` 110px
     Georgia, float left, line-height 90px), italic blockquote
     (margin-left 50px), numbered + bulleted lists, then "Continue
     Reading" (`a.btn-custom`: Lora italic, padding 10px 30px).
- **Pagination:** `«` (disabled) 1 (active) 2 3 4 `»` — square items
  (`border-radius: 2px`, `border: 1px solid #b3b3b3`, black); active/hover
  = `background: #F6490D`, white text, orange border, shadow
  `0 2px 10px -5px black`.
- **Sidebar (right, 30%):**
  1. Search (`div.side`: `#fafafa`, padding 2em, margin-bottom 5em):
     input 18px white bg `2px solid #fff` padding-right 3em, placeholder
     "Enter any key to search..." + absolute right orange square button
     (border-radius 0);
  2. About Me (`side-wrap`, margin-bottom 5em): `h2.sidebar-heading`
     (20px Lora italic, centered, `color: #333`, margin-bottom 2em) with
     `:after` 50×2px orange bar 15px above + `author-img` 350px cover +
     "Hi! My Name is Steph ..." + 4 social icons (20px orange);
  3. Recent Post: 4× `f-entry` (`#fafafa`, padding 1em, margin-bottom
     3em): `featured-img` 120×100 absolute + desc padding-left 140px:
     h3 19px italic Lora title + 13px gray date span w/ calendar icon —
     **write 4 DISTINCT titles** (source repeats "The Most Popular Leg
     Workout for Women" 4×);
  4. Categories: Blog, Lifestyle, Travel, Fashion — folder icon +
     `border-bottom: 1px dashed #d9d9d9`, padding 10px 0, `#4d4d4d`;
  5. Video Post: 250px cover + overlay + play button;
  6. Tags: 19 uppercase links (tag icon): Modeling, Fashion, Life, Blog,
     Workout, Vacation, Travel, Exercise, Health, News, Model, Women,
     Animals, Nature, Art, Sea, Ocean, Office, Home;
  7. Gallery: 8 `a.gallery` tiles (50% width × 170px, cover images;
     hover `rgba(0,0,0,0.3)` + search icon);
  8. Blockquote (italic quote), Paragraph (lorem), Subscribe
     (`div.side`: heading "Subscribe to our newsletter" + centered email
     input "Enter your email" + orange pill Subscribe button + social
     row).
- **Instagram strip:** `#colorlib-instagram` padding 0: centered
  uppercase "Instagram" heading (16px, letter-spacing 5px) + 8 tiles
  (12.5% width × 200px; 25% @768px, 50% @480px) with hover overlay.
- **Footer** (`#colorlib-footer`, `#F6F6F6`, padding 7em 0): 3×
  `col-md-4`: Navigational (Home, About Me, Blog, Travel, Lifestyle,
  Fashion, Health), Recent Post (4 date + italic-title rows: "22 Jan,
  2017", "20 Jan, 2017", "21 Jan, 2017", "20 Jan, 2017"), Tags (same
  19-tag cloud). Copyright bar paraphrased ("made with by Free React
  Templates"), no ColorLib attribution.
- **Brand orange `#F6490D`** (hover `#f75b26`) — links, nav active +
  dropdown hover, `::selection`, hero number badge bg, hero date text,
  `.category` text, `.btn-primary`, pagination active/hover, sidebar-
  heading underline bar, social icons. Gold `#F7AF1D` = 24px star icon
  before the hero date (optional decoration).
- **Fonts (Google Fonts):** **Grand Hotel** (cursive) — logo ONLY (40px /
  line-height 40px); **Lora** (serif) — headings, `.sidebar-heading`
  (20px italic), `.category` (13px uppercase l-s 4px), post titles (28px
  italic), f-entry h3 (19px italic), blockquotes, `.btn-custom`;
  **Open Sans** — body (16px, line-height 2, `#333`), nav (12px
  uppercase), inputs; **Fira Sans** — hero badge number (24px). Load all
  via `<link>` in `index.html` (source inlines @font-face blocks —
  invalid in Tailwind 4).
- **Neutrals:** body `#333333`, headings `#4d4d4d`, black `#000`, nav
  links `rgba(0,0,0,0.7)`, dropdown links `#999`, gray meta `#808080`.
- **Surfaces:** `#fff`; `#fafafa` (blog-wrap, side, f-entry); footer
  `#F6F6F6`; overlays `rgba(0,0,0,0.1)` (hero) / `0.5`→`0.7` (video) /
  `0.3` (gallery hover); dropdown shadow `0 14px 33px -9px rgba(0,0,0,0.75)`.
- **Shapes:** buttons pill `border-radius: 30px`; pagination square
  (radius 2px); hero badge 60×60; play button 90×90 circle; gototop
  circular.
- **Icons:** source = icomoon/flaticon; recreation: lucide-react —
  Search, Calendar, User, MessageCircle, Share2, Facebook, Twitter, Play,
  Tag, Folder, Sparkle (hero date, optional), ArrowUp (gototop). No
  hamburger (source hides the menu on mobile).
- **Placeholders:** `https://picsum.photos/seed/feature-<n>/<w>/<h>` — 4
  hero slides (e.g. 1600×650 vacation/travel scenes), 4 blog media images
  (400×400+), 4 recent-post thumbs (120×100), 8 gallery tiles (340×170),
  8 instagram tiles (200×200), author photo (350×350), 2 video covers.

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy the simplest existing app (e.g. `apps/onepage`),
   rename to `@free-react-templates/feature`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #F6490D`,
   `--color-brand-hover: #f75b26`, `--color-gold: #F7AF1D`, `--color-ink-
body: #333333`, `--color-ink-heading: #4d4d4d`, `--color-nav-link:
rgba(0,0,0,0.7)`, `--color-meta: #808080`, `--color-surface-card:
#fafafa`, `--color-surface-footer: #F6F6F6`, `--color-border-entry:
#e6e6e6`, `--color-border-dash: #d9d9d9`, `--color-border-page:
#b3b3b3`; Grand Hotel + Lora + Open Sans + Fira Sans Google Fonts
   `<link>` in `index.html`; `.dark` variants per repo conventions.
3. **Navbar** (`components/Navbar.tsx`): logo "Feature." (Grand Hotel
   40px black) left; uppercase menu right (Home active orange + underline,
   Blog with hover dropdown of 4 links, Lifestyle, Travels, Gallery, About
   Me); hidden on mobile (no hamburger — match source).
4. **HeroSlider** (`components/HeroSlider.tsx`): 4 slides (650px min-h
   picsum bg + `rgba(0,0,0,0.1)` overlay); bottom-left text block: orange
   60×60 badge (white Fira Sans number 1–4) + Lora 28px title + orange
   uppercase date; numbered dot indicator + prev/next (aria-labels);
   optional autoplay; state-driven active slide.
5. **BlogList** (`components/BlogList.tsx`): 4 `article.blog-entry`
   cards on `#fafafa` (padding 2em 0, `#e6e6e6` divider); category row,
   28px italic Lora title, media (2-image carousel / single image ×2 /
   video placeholder with play + overlay), vertical share rail (left
   -2.5em), meta row (date · by Stephy · comments), drop-cap paragraph,
   blockquote, lists, "Continue Reading". Distinct dates (source repeats
   "January 21, 2017" — vary across entries).
6. **Pagination** (`components/Pagination.tsx`): `«` 1 2 3 4 `»` square
   items (radius 2px, `#b3b3b3` border), page 1 active orange; hover
   orange.
7. **Sidebar** (`components/Sidebar.tsx`, 30% width, 100% mobile):
   SearchBox (`#fafafa` + orange square button) → AboutMe (heading w/
   orange underline bar, 350px photo, intro, social icons) →
   RecentPost (4 distinct `#fafafa` cards: 120×100 thumb + 19px italic
   title + 13px gray date) → Categories (Blog/Lifestyle/Travel/Fashion,
   dashed dividers) → VideoPost (250px + play) → Tags (19 uppercase
   links) → Gallery (8 tiles 50% × 170px, hover overlay) → Blockquote →
   Paragraph → Subscribe (email + orange pill button, success/error
   states).
8. **InstagramStrip** (`components/InstagramStrip.tsx`): "Instagram"
   heading + 8 tiles (12.5% × 200px responsive) with hover overlay.
9. **Footer** (`components/Footer.tsx`, `#F6F6F6`): 3 columns
   (Navigational links, Recent Post rows, Tags) + paraphrased copyright.
10. **BackToTop** (`components/BackToTop.tsx`): fixed bottom-right
    circular button, smooth scroll to top.
11. **App composition** (`App.tsx`): Navbar → HeroSlider → main container
    (`lg:grid-cols-[2fr_1fr]`-ish): BlogList + Pagination | Sidebar →
    InstagramStrip → Footer → BackToTop.
12. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required (assert 4 slides + badge
    sequence, 4 distinct recent-post titles, slider active state,
    subscribe validation, dropdown visibility, etc.).
13. **Verify:** `npm run verify:app feature` (typecheck + lint + vitest
    100% + build) → PR `feat/template-feature` → merge immediately → mark
    TEMPLATES.md line 241 `[x]` with surge URL + `npm run readme:status`
    on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Article" anywhere as the app/package name
  (new name: feature).
- Do NOT render repeated placeholder titles — 4 DISTINCT recent-post
  titles in the sidebar (source repeats one 4×).
- Hero slide badges: source repeats "2" (1,2,2,2) — render sequential
  1–4.
- No hamburger on mobile — the source hides `.menu-1` below 768px and
  keeps the logo. Match that.
- The source inlines Google Fonts as `@font-face` blocks in the HTML head
  — put the fonts `<link>` in `index.html` instead.
- "Continue Reading" is an italic Lora text link (`padding: 10px 30px`),
  NOT a filled orange button.
- Drop cap: only the FIRST paragraph of the entry (`p.first-letra`) gets
  the 110px Georgia first letter.
- Blog media height 400px (video 300px on mobile); sidebar video 250px;
  author-img 350px; featured-img 120×100.
- Pagination is SQUARE (radius 2px), not circular.
- The dropdown hover shadow: `0 14px 33px -9px rgba(0,0,0,0.75)`.
- Share rail is a VERTICAL icon column to the LEFT of the media
  (`left: -2.5em`), not a horizontal row.
- Entry dates in the source all say "January 21, 2017" — vary them so the
  page doesn't look copy-pasted.
