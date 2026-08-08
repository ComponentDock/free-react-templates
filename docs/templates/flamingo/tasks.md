# Flamingo (ColorLib "Fantom") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-flamingo` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Fantom" — blog template
  (source: https://colorlib.com/wp/template/fantom/). Listed in TEMPLATES.md
  (Blog section, line 260; duplicate at line 1705 — mark EVERY copy `[x]`
  when done).
- **Preview URL:** https://preview.colorlib.com/theme/fantom/ (title
  "Fantom Blog"). Fetched: `/tmp/fantom-preview.html` (29 KB),
  `/tmp/fantom-style.css` (57 KB). Screenshot `fantom-free-template.jpg`
  (1200×946, viewed in browser). Preview DOM and screenshot agree — white
  editorial blog: script wordmark logo, magenta `#ff2f92` nav bar, 4-up
  featured-post hero with purple overlay, blog listing + right sidebar,
  dark `#222222` footer.
- **Demo brand in the preview is "Fantom Blog"** → rename to **Flamingo**
  (magenta brand pink → pink flamingo; script wordmark recreated as styled
  text, never the copied asset).
- **Visual design:** modern minimal blog/magazine. White page. Two-row
  header: centered cursive script logo on white + magenta navbar below.
  Hero: 4 featured-post cards (photo + deep-purple `rgba(42,20,112,0.5)`
  overlay + category pill + white headline + excerpt + date/comments meta).
  Blog listing: large photos with white cards overlapping the bottom edge
  (-100px), soft shadow `0 10px 20px rgba(153,153,153,0.1)`. Right sidebar:
  pill search, centered author widget (circular avatar + socials), popular
  posts, ad, categories with counts, tag cloud. Footer: dark `#222222` with
  about / newsletter / instagram grid / socials / copyright.
- **Fonts:** `"Roboto", sans-serif` (h4 headings, nav 500 12px/60px
  uppercase, pills, date rows) + `"Open Sans", sans-serif` (body). Load via
  `<link>` in `index.html`.
- **Structure (1:1 from the preview DOM):**
  1. Header (`header_area`) — `logo_part`: centered script wordmark
     (`img/logo.png` in the original) · `main_menu`: magenta `#ff2f92` bar,
     nav links white uppercase Roboto: Home (active) · Category · Archive ·
     Pages (dropdown: Blog Details · Elements) · Contact · search icon
     right · hover/active bg `#cc2675` · hamburger on mobile. The original
     offsets following content by `margin-top: 210px` (logo row ≈150px +
     60px nav) — recreate the same rhythm.
  2. Hero `section.post_slider_area` — owl-carousel `post_slider_inner` of
     4 `post_s_item` slides (4 columns on desktop per the screenshot). Each:
     `post_img` (photo + `:before` overlay `rgba(42,20,112,0.5)`) +
     `post_text` (absolute, left 40px, bottom 50px, max-width 355px): `.cat`
     pill (1px `#ff2f92` border, radius 15px, white 12px) · h4 title 24px
     white (hover `#ff2f92`) · excerpt 14px/24px white · `.date` row
     (calendar "March 14, 2018" + comments "05", white 12px, hover
     `#ff2f92`).
  3. Blog listing `section.blog_area.p_120` (`padding: 120px 0`) — row:
     `col-lg-8` `blog_left_sidebar` with 6 `blog_style1` posts: 2
     full-width, `.row` of 2 `col-md-6` `blog_style1 small`, 2 full-width.
     Each: `.blog_img` fluid photo + `.blog_text` (padding 0 40px) wrapping
     `.blog_text_inner` (white, `margin-top: -100px`, shadow
     `0 10px 20px 0 rgba(153,153,153,0.1)`, padding 40px): `.cat` pill
     (`#777777` text) · h4 24px `#222222` (hover `#ff2f92`) · excerpt ·
     `.date` row (`#777777` 12px).
  4. Pagination `nav.blog-pagination` — prev/next chevrons + 01 02 03 04,
     active page `#ff2f92` white, square corners.
  5. Sidebar `div.blog_right_sidebar` (`col-lg-4`):
     - `search_widget` — pill input (radius 45px, `#eee` border,
       placeholder "Search Posts") + transparent magnifier button.
     - `author_widget` — centered circular avatar, h4 "Charlie Barber", p
       "Senior blog writer", socials (facebook · twitter · github ·
       behance, `#222222`, hover `#ff2f92`), bio.
     - `popular_post_widget` — `.widget_title` "Popular Posts" + 4
       `media post_item` rows: thumb + h3 title + "02 Hours ago".
     - ad banner `img.img-fluid`.
     - `post_category_widget` — "Post Catgories" (sic) + 7 rows with
       counts (Technology 37 · Lifestyle 24 · Fashion 59 · Art 29 · Food 15
       · Architecture 09 · Adventure 44), dotted `#eee` bottom borders,
       hover border + text `#ff2f92`.
     - `tag_cloud_widget` — "Tag Clouds" inline pills (1px `#eee`, padding
       0 13px, hover bg `#ff2f92` white).
     - Widget titles: 18px `#222222`, `border-left: 3px solid #ff2f92`,
       padding 6px 0 6px 13px, mb 30px.
  6. Footer `footer.footer-area` (`background: #222222; padding: 150px 0
100px`) — 4 columns: About Us (white 16px 600 title + `#777777`
     paragraph) · Newsletter ("Stay updated with our latest trends" + email
     input (1px white border, white bg, height 40px, placeholder "Email
     Address") + magenta `sub-btn` arrow absolute right) · Instagram Feed
     (8-thumbnail flex grid, 5px margins) · Follow Us ("Let us be social" +
     f_social icons facebook · twitter · dribbble · behance) · centered
     footer-bottom copyright "© <year> All rights reserved | made with ❤ by
     Colorlib" (reword for Flamingo).
- **Note:** the hero is an owl-carousel in the DOM but renders as 4 columns
  in the screenshot — implement as a 4-up card row with horizontal
  scroll/auto-advance on desktop, stacking on mobile. The wordmark logo is
  an image asset — recreate as styled script text or inline SVG.

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-flamingo/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md lines 260 AND 1705.
2. Scaffold `apps/flamingo` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/flamingo`); register the
   workspace (`npm install` at root so `package-lock.json` updates; verify
   with `grep -c "free-react-templates/flamingo" package-lock.json`); keep
   `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Header.tsx` — script wordmark row + magenta nav bar
     (5 links, Pages dropdown, search icon, hamburger + `aria-expanded`,
     `#cc2675` hover), 210px-ish vertical rhythm below.
   - `src/components/Hero.tsx` — 4 featured cards (photo + purple overlay
     `rgba(42,20,112,0.5)` + pill + headline + excerpt + meta), horizontal
     scroll/auto-advance.
   - `src/components/BlogList.tsx` — 6 posts (2 full, 2 half, 2 full):
     photo + overlapping white card (-100px, shadow) + pill + headline +
     excerpt + meta.
   - `src/components/Pagination.tsx` — numbered pages, active magenta.
   - `src/components/Sidebar.tsx` — search pill, author widget, popular
     posts (4 rows), ad banner, categories (7 with counts), tag cloud.
   - `src/components/Newsletter.tsx` (footer form) — email validation,
     success + reset, error state.
   - `src/components/Footer.tsx` — about, newsletter, instagram grid (8
     thumbs), socials, copyright bar.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens.
4. Images: `https://picsum.photos/seed/flamingo-<n>/<w>/<h>` (hero photos,
   blog photos, popular-post thumbs, instagram grid, ad banner, author
   avatar); icons from `lucide-react` (calendar, message-circle, search,
   arrow-right, menu, x, socials via inline SVG).
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh flamingo`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-flamingo`, PR to main, description must state
   source (ColorLib "Fantom"), preview URL, design tokens, what differs;
   merge immediately (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md lines 260 AND 1705 `[x]`,
   add surge URL + homepage; `npm run readme:status`; push.
