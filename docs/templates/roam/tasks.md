# Roam (ColorLib "Fantasy") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-roam` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Fantasy" — travel blog template
  (source: https://colorlib.com/wp/template/fantasy/). Listed in TEMPLATES.md
  (Blog section, line 259; duplicate at line 2981 — mark EVERY copy `[x]`
  when done).
- **Preview URL:** https://preview.colorlib.com/theme/fantasy/ (title
  "Fantasy Travel Blog"). Fetched: `/tmp/fantasy-preview.html` (31 KB),
  `/tmp/fantasy-style.css` (63 KB). Screenshot
  `fantasy-free-template.jpg` (1200×946, viewed in browser). Preview DOM and
  screenshot agree — light editorial travel blog: white background, black
  Playfair Display serif headings, Roboto body, yellow `#f8b600` accent,
  photo carousel hero.
- **Demo brand in the preview is "Fantasy"** → rename to **Roam** (tagline
  "TRAVEL BLOG" kept under the wordmark).
- **Visual design:** magazine/editorial style. White page, 752px full-width
  hero carousel, large serif headlines ("Night Stand Out" in the screenshot —
  hero slide headings are JS-rendered in the static DOM, so use editorial
  headlines of that style), dark overlay + white text on image cards, yellow
  `#f8b600` accent on interactive elements, light-blue `#f1f9ff` footer.
- **Fonts:** Google Fonts `Playfair+Display:700` (headings) + `Roboto:400,500`
  (body), loaded in the original via CSS `@import`; load via `<link>` in
  `index.html` instead.
- **Structure (1:1 from the preview DOM):**
  1. Header (`header_area`) — brand "Roam" serif bold black + "TRAVEL BLOG"
     uppercase sans tagline underneath · centered nav: Home · Category ·
     Archive · Pages · Elements · Post Details · Contact · search icon right
     · hamburger on mobile.
  2. Hero `section.home_banner_area` (752px, cover background) — owl-carousel
     `#home-owl`, 3 `slide-item` slides; each slide `.row`: `col-lg-5`
     `blog_text_slider` (blog-meta: calendar icon "March 14, 2018" + comments
     icon "05" · big serif headline · "Read More" link) + `col-lg-7` photo
     with illustrated PNG cutout overlay (`home-banner.jpg` +
     `banner-img.png`); carousel dots bottom-left.
  3. `travel_category` (padding 150px 0 120px) — `main_title` h1 "Best Travel
     Experience Within the Universe." (48px bold serif, left, max-width
     510px, mb-50) + horizontal owl-carousel `#travel_cat` of 6 `single_travel`
     cards: figure photo · `.overlay` · `.text-wrap` h3 title link
     ("Waterfall Travel") · `blog-meta white` (date + comments) · `read_more`.
  4. `latest_blog_post` (padding 120px 0) — h1 "Latest Blog Posts." + 4 cards
     `col-lg-3 col-md-6` `single_travel wow fadeInUp`: `img-fluid w-100`
     photo · overlay · h4 title · meta · read_more.
  5. `different_places` (padding 120px 0) — h1 "Let Us Find Your Places
     Within a Sec." + 6 `single_place wow fadeIn text-center` cards
     (`col-lg-3 col-md-6`, staggered `mt-240`/`mt-480` on alternate items for
     masonry rhythm): photo · overlay · h4 title ("Waterfall Mountain Visit")
     · excerpt ("There is a moment in the life of any aspiring astronomer…")
     · read_more.
  6. `popular_post` (padding-bottom 120px) — h1 "Popular Posts to Remember" +
     7 `single-popular-post d-flex align-items-center flex-row` rows
     (`col-lg-4 col-md-6`): `.icon` thumb (p1–p7.jpg) · `.desc` (h4 title +
     meta) · `blog-meta d-flex justify-content-between` (date + comments).
  7. Footer `footer-area section-gap` (`background: #f1f9ff`) —
     `single-footer-widget footer_middle`: "Stay updated with our latest
     trends" + `subscribe_form` (email input placeholder "Enter Email" +
     yellow `sub-btn` with arrow icon) · `footer-social` (facebook · twitter
     · dribbble · behance) · `footer-bottom footer_copy`: "Copyright © <year>
     All rights reserved | made with ❤ by Colorlib" (reword for Roam) ·
     floating `#back-top` back-to-top button.
- **Note:** the static preview HTML omits the hero slide headlines (owl
  carousel renders them client-side) — the screenshot shows "Night Stand
  Out"; the text-wrap headings elsewhere read "Waterfall Travel". Use
  equivalent editorial copy.

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-roam/spec.md` exists
   on main; claim with a `[~]` mark on TEMPLATES.md lines 259 AND 2981.
2. Scaffold `apps/roam` from the simplest existing app (copy pattern, rename
   package to `@free-react-templates/roam`); register the workspace
   (`npm install` at root so `package-lock.json` updates; verify with
   `grep -c "free-react-templates/roam" package-lock.json`); keep
   `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage) mirroring
   the spec's Gherkin scenarios, then implement:
   - `src/components/Navbar.tsx` — serif wordmark + tagline, 7 links, search
     icon, hamburger + `aria-expanded`, yellow hover.
   - `src/components/Hero.tsx` — 752px banner, 3-slide carousel (auto-advance
     - dots + prev/next), meta row (calendar date, comments), serif
       headline, Read More; photo + PNG-cutout-style stacked images.
   - `src/components/CategoryCarousel.tsx` — 6 cards, horizontal scroll.
   - `src/components/LatestPosts.tsx` — 4 cards grid (lg:4 / md:2 / 1).
   - `src/components/PlacesGrid.tsx` — 6 staggered cards (lg:4 / md:2 / 1).
   - `src/components/PopularPosts.tsx` — 7 thumbnail rows (lg:3 / md:2 / 1).
   - `src/components/Newsletter.tsx` (footer form) — email validation,
     success + reset, error state.
   - `src/components/Footer.tsx` — newsletter block, socials, copyright bar;
     `src/components/BackToTop.tsx` — scroll-to-top button.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens.
4. Images: `https://picsum.photos/seed/roam-<n>/<w>/<h>` (banner photos,
   category t1–t3 style, places p1–p6, popular p1–p7); icons from
   `lucide-react` (calendar, message-circle, search, arrow-right, menu, x,
   arrow-up, socials via inline SVG).
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh roam`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-roam`, PR to main, description must state source
   (ColorLib "Fantasy"), preview URL, design tokens, what differs; merge
   immediately (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md lines 259 AND 2981 `[x]`,
   add surge URL + homepage; `npm run readme:status`; push.
