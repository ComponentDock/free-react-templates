# Folio (ColorLib Article) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-folio` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Article" — editorial lifestyle blog template:
  full-width hero slider + two-column blog listing/sidebar + Instagram strip
  - 3-column footer (source: https://colorlib.com/wp/template/article/).
    Listed in TEMPLATES.md under Blog (line 241) — one recreation covers that
    single checklist row.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/article/`
  (HTTP 200, ~58KB HTML). DOM + `css/style.css` (38KB) extracted and
  analyzed. Screenshot `article-free-template.jpg` viewed in browser:
  confirms white editorial layout, orange-red `#F6490D` accents, script
  "Article." logo, serif italic headlines, hero photo slideshow with a light
  text box bottom-left, blog cards with vertical share rail, sidebar search +
  About Me portrait.
- **Structure (1:1, section order from the DOM):**
  1. Top nav (`nav.colorlib-nav > div.top-menu`): script logo "Article."
     (Grand Hotel, ~30px, orange on hover) left; right menu (uppercase,
     letter-spaced sans): Home (active) / Blog (has-dropdown → Commercial,
     Apartment, House, Building) / Lifestyle / Travels / Gallery / About Me.
     Mobile: `#colorlib-nav-toggle` hamburger (25×2px bars, Helvetica
     "MENU" label).
  2. Hero slider (`aside#colorlib-hero > div.flexslider > ul.slides`): 4
     `<li>` slides; each `min-height: 650px`, bg photo cover + `.overlay`
     `rgba(0,0,0,.1)`; centered `col-md-6 col-md-offset-3 .slider-text` →
     `.slider-text-inner` (table-cell middle, `padding: 2em`) → `.desc`
     (position absolute bottom 0, left 0, right 0): h1 (Lora 28px black,
     `padding-left: 80px`) with 60×60 orange number square
     (`<span><small>N</small></span>`, `#F6490D` bg, white 24px, absolute
     top/left 0) + headline; h2 date (e.g. "January 20, 2017"). Slide 1:
     "Top 5 Places To Start Your Vacation This Summer"; slide 2: "6 Facts -
     The Health Benefits of Swimming & Surfing"; slide 3: "Popular Lifestyle
     Tips"; slide 4: "7 Tricks of Skateboarding For A Beginner". A gold
     `#F7AF1D` icon sits above the title (`.slider-text-inner span i`).
     FlexSlider auto-advances; no arrow markup in HTML (JS-generated).
  3. Main `div#colorlib-container` (padding 7em 0): row → `col-md-8` main +
     `col-md-4` sidebar.
  4. Blog listing (`col-md-8`): 4 × `article.blog-entry` (`border-bottom:
1px solid #e6e6e6; padding-bottom: 3em; margin-bottom: 4em`):
     a. `.blog-wrap` (`background: #fafafa; padding: 2em 0; margin-bottom:
   40px`): `.category` span (uppercase Lora 13px, `letter-spacing:
   4px`, `color: #f6490d`, e.g. "Health | Workout") → centered h2
     (Lora 28px italic, `color: #4d4d4d`, `margin-bottom: 30px`) →
     `.blog-image` (position relative): `owl-carousel2` of `.blog`
     image links + `ul.share` vertical rail (absolute, `top: 0; left:
   -2.5em`; `icon-share3` orange + facebook/twitter/googleplus 24px
     icons).
     b. Meta row (also `.category` class): `icon-calendar3` date (Jan 21, 2017) · `icon-user2` "by Stephy" · "5 Comments".
     c. `.desc`: `p.first-letra` excerpt (drop cap: Georgia 110px, float
     left, `line-height: 90px`, black; body text = the classic
     "Little Blind Text" copy) → `<p class="text-center">` with
     `a.btn.btn-primary.btn-custom` "Continue Reading" (pill 30px
     radius, 2px `#F6490D` border, Lora italic, `padding: 10px 30px`;
     hover `#f75b26`).
     Entries (paraphrase, keep kind): "The Most Popular Leg Workout for
     Women" (Health | Workout), "Popular Lifestyle with Fashion & Modeling"
     (Fashion | Lifestyle), "Video Post Travel with my Friends", "Popular
     Lifestyle with Fashion & Modeling".
  5. Pagination (`ul.pagination`): « (li.disabled) · 1 (li.active) · 2 · 3 ·
     4 · »; `li a`: square (`border-radius: 0`), transparent bg, 1px
     `#b3b3b3` border, black text; `li.active a`: `background: #F6490D`,
     white, shadow `0 2px 10px -5px black`; hover same orange.
  6. Sidebar (`aside.side` `col-md-4`) — 10 `div.side-wrap` widgets, each
     `h2.sidebar-heading` (Lora italic 20px, centered, `margin-bottom: 2em`,
     short centered 50×2px divider line `:after` at `top: -15px`):
     a. Search: input `id="search"` placeholder "Enter any key to search..."
     - `button.btn.btn-primary` search icon.
       b. About Me: `div.author-img` portrait bg + `<p>Hi! My Name is
   <strong>Steph</strong> Bookmarksgrove, the headline of Alphabet
   Village…` + social icons (`colorlib-social-icons`).
       c. Recent Post: entries (thumb + date + title; e.g. "22 Jan, 2017 —
       The Most Popular Leg Workout for Women").
       d. Categories: Blog, Lifestyle, Travel, Fashion, Video Post.
       e. Video Post: `div.video.colorlib-video` (bg photo + centered
       `a.popup-vimeo` play icon 90×90 + `.overlay`).
       f. Tags: `p.tags` → `span` pills with `icon-tag`: Modeling, Fashion,
       Life, Blog, Workout, Vacation, Travel, Exercise, Health, News,
       Model, Women, Animals, Nature, Art, Sea, Ocean, Office, Home.
       g. Gallery: 8 × `a.gallery.image-popup-link` square tiles (2px gap,
       `icon-search3` on hover).
       h. Blockquote: italic Lora `#999` 20px quote.
       i. Paragraph: "On her way she met a copy…" blurb.
       j. Newsletter: h2 "Subscribe to our newsletter" + `input#email`
       placeholder "Enter your email" + `button.btn.btn-primary.btn-
   subscribe` "Subscribe" (full width in sidebar) + social icons
       (twitter, facebook, linkedin, dribbble).
  7. Instagram strip `div#colorlib-instagram` (padding 7em 0): centered
     `.colorlib-heading` h2 "Instagram" + `.instagram-entry` row of 8
     `a.instagram` square tiles (`gallery-1..8.jpg`).
  8. Footer `footer#colorlib-footer` (padding 7em 0, white):
     - Col 1 "Navigational": `ul.colorlib-footer-links` with `icon-check`:
       Home, About Me, Blog, Travel, Lifestyle, Fashion, Health.
     - Col 2 "Recent Post": 4 dated entries (22 Jan, 20 Jan, 21 Jan, 20 Jan
       2017).
     - Col 3 "Tags": tag pills.
     - Bottom: copyright "Copyright © All rights reserved. This template is
       made with ♥ by Colorlib" + social icons.
- **Design tokens (from `css/style.css`):**
  - Fonts: **Lora** (headings, italic accents), **Open Sans** (body 16px
    `line-height: 2` `#333333`), **Grand Hotel** (script logo), Georgia
    (drop cap 110px).
  - Colors: primary **`#F6490D`** (orange-red); hover `#f75b26`; gold
    `#F7AF1D` (slider icon); text `#333333` body / `#4d4d4d` headings /
    `#000` hero + drop cap; muted `#999999`; borders `#e6e6e6` / `#b3b3b3`;
    card bg `#fafafa`; hero overlay `rgba(0,0,0,.1)`.
  - Shapes: pill buttons (`border-radius: 30px`, 2px border, hero padding
    14px 30px); 60×60 sharp number squares; square pagination (radius 0);
    square gallery/instagram tiles; 50×2px widget heading dividers.
  - Layout: hero slides 650px min-height; container/instagram/footer 7em
    vertical padding; entries 4em margin-bottom.
- **Recreation decisions:** name **Folio** (editorial "sheet of writing" —
  fits a magazine-style blog; no collision with `apps/`, `openspec/specs/`,
  or `docs/templates/`). Logo "Folio." in Grand Hotel. All images →
  `https://picsum.photos/seed/folio-<n>/<w>/<h>` (hero 1600×650, cards
  800×500, author 400×400, gallery/instagram 400×400). Icons from
  `lucide-react` (share-2, facebook, twitter, google-plus, calendar, user,
  message-circle, search, play, tag, check, arrow-right, menu). Newsletter
  validates email (zod) + success state. Dark mode via `.dark` class
  (`dark:` variants) per repo conventions. 4 blog entries (original shows
  4 on the index).

## Implementation task outline (for the implementer stream)

1. `apps/folio` scaffold: copy simplest existing app (e.g. `apps/pawcare`),
   rename package to `@free-react-templates/folio`; `npm install` at root so
   `package-lock.json` registers the workspace (grep check); vite.config.ts
   MUST keep `injectUiSource()`.
2. `index.html`: Google Fonts `<link>` for Lora (400,700,400i), Open Sans
   (400,600), Grand Hotel; title "Folio — Lifestyle Blog".
3. `src/index.css`: `@theme` tokens — `--color-brand: #F6490D`,
   `--color-brand-hover: #f75b26`, `--color-gold: #F7AF1D`, `--color-ink:
#333333`, `--color-heading: #4d4d4d`, `--color-card: #fafafa`, font
   families serif (Lora) / sans (Open Sans) / script (Grand Hotel).
4. Components (one per section, colocated tests, 100% coverage):
   - `Navbar.tsx` — logo, menu, Blog dropdown (hover/focus), mobile
     hamburger with aria-expanded, dark-mode toggle.
   - `HeroSlider.tsx` — 4 slides, numbered orange square, auto-advance,
     prev/next arrows, dots.
   - `BlogCard.tsx` — category line, italic title, image carousel (2 imgs)
     - share rail, meta row, drop-cap excerpt, Continue Reading button.
   - `Pagination.tsx` — « 1 2 3 4 », active state, disabled «.
   - `Sidebar.tsx` — composes the 10 widgets; `SearchBox`, `AboutMe`,
     `RecentPosts`, `Categories`, `VideoPost`, `TagCloud`, `GalleryGrid`,
     `BlockquoteWidget`, `ParagraphWidget`, `Newsletter` (zod email
     validation + success).
   - `InstagramStrip.tsx` — heading + 8 tiles.
   - `Footer.tsx` — 3 columns + copyright bar.
5. `App.tsx` composes in DOM order: Navbar → HeroSlider → BlogListing (4
   BlogCards) → Pagination → Sidebar → InstagramStrip → Footer.
6. Verify: `npm run verify:app folio` (typecheck + lint + vitest 100% +
   build). Full gate runs in CI on merge.
7. PR: `feat: Folio — lifestyle blog template (ColorLib Article)`; description
   must include source URL, preview URL, tokens used, renames, placeholder
   images. Merge immediately with `gh pr merge --squash --delete-branch`.
8. After merge: mark TEMPLATES.md line 241 `[~]`→`[x]` with surge URL
   (https://free-react-templates-folio.surge.sh) + homepage, run
   `npm run readme:status`, commit `chore: mark Folio (Article) as deployed
with live Surge URL`.
