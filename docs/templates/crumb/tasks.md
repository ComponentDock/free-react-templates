# Crumb (ColorLib Foode) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-crumb`.

## Design notes (replication findings)

- **Original:** ColorLib "Foode" — food blog / magazine template
  (source: https://colorlib.com/wp/template/foode/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/foode/ (HTTP 200,
  full rendered DOM; stylesheet `style.css` extracted, Google Fonts import:
  Merriweather 300/300i/400/400i | Poppins 300–600, plus bootstrap + classy-nav
  imports). Cross-checked against the TEMPLATES.md screenshot
  (`foode-free-template.jpg`) — designs match. The demo brands itself "foode";
  recreation uses the NEW name **Crumb**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean white
  food-blog aesthetic — big food photography with dark-gradient overlays and
  white serif titles in the hero and featured sliders; terracotta `#e59f80`
  accents for dates, categories and hovers; **wavy divider lines** between
  blog posts; brush-script wordmark logo + script author signature; serif
  (Merriweather) titles vs uppercase letter-spaced Poppins meta labels.
- **Structure (1:1, section order):**
  1. Preloader (circle preloader, optional in recreation).
  2. Header: top bar (search input "Search and hit enter..." + search button,
     social icons row), centered "foode" wordmark logo, main nav
     HOME / PAGES / CATAGORIES / TRAVEL / ABOUT / CONTACT (uppercase,
     letter-spacing 1px, padding 0 25px; PAGES + CATAGORIES have dropdowns —
     can be simplified to anchor links or simple dropdowns).
  3. Hero slider (`.hero-post-slides` owl carousel): slides 480px tall (400px
     mobile), full-bleed bg photo with Ken Burns zoom + bottom gradient
     `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.01) 90%,
transparent)`; content bottom-left: uppercase date/category (13px white,
     letter-spacing 2px) + white serif title (Merriweather, weight 300,
     hover → #e59f80). ~10 slides in markup; render 3–4.
  4. Featured posts carousel (`.featured-post-area`, 502px, shadow
     `0 0 10px 3px rgba(0,0,0,0.15)`): 5 carousel items, each bg photo +
     bottom-left overlay (date/category + title); numbered indicator list
     01–05 with small titles on warm off-white panel `#f8f2ef` (the indicators
     column is the distinctive layout element).
  5. Blog content area (`section-padding-100` = 100px vertical padding; white
     bg):
     - Main column (col-lg-8): 5 posts. Each post: thumbnail flex 0 0 50% +
       margin-right 6%, content flex 0 0 44%. Post meta: uppercase
       date/category in `#e59f80`, serif title, "by <Author>" (italic) + view
       count + comment count in `#a6a6a6`, excerpt 16px `#595959`,
       "CONTINUE READING" uppercase 13px `#a6a6a6` (hover `#e59f80`).
       **Wavy divider** between posts. Pagination: NEWER / OLDER boxed
       buttons.
     - Sidebar (col-lg-4, widgets `margin-top: 50px`): About Me (200×200
       circular photo, script signature, bio), Subscribe & Follow (7 social
       icons), Latest Posts (5 items: small square thumb + serif title +
       byline), Newsletter (input: bg `#f2f4f5`, height 50px, no border; submit
       50×50 square `#e59f80` with white paper-plane icon, hover `#191919`),
       Popular Tags (uppercase chips, bg `#ebebeb`).
  6. Instagram strip: heading "Follow Us On Instagram" + `@foodeblog` handle,
     6 square tiles (owl carousel → simple row).
  7. Footer (`margin-top: 60px`): social links row with text labels
     (FACEBOOK, TWITTER, GOOGLE +, LINKEDIN, INSTAGRAM, VIMEO, YOUTUBE,
     padding 30px 0) + centered copyright bar (padding 20px 0): "Copyright ©
     <year> All rights reserved | This template is made with ♥ by Colorlib".
- **Design tokens extracted from the preview CSS:**
  - Brand **terracotta `#e59f80`** (dates, categories, hovers, search icon,
    newsletter button, hero title hover).
  - Ink **`#191919`** (headings/buttons — `.foode-btn`: white 14px text on
    `#191919`, min-width 80px, height 30px, square).
  - Body `#595959`; muted `#a6a6a6` / `#bbbbbb`.
  - Surfaces: white page, `#f2f4f5` (newsletter input), `#ebebeb` (tag chips),
    `#f8f2ef` (indicator panel).
  - Fonts: **Merriweather** serif (headings, weight 300/400 + italics),
    **Poppins** sans (body/meta, 300–600).
  - Radii: only the About photo is circular (200px, 50%); buttons/chips
    square.
  - Shadows: top bar `0 3px 10px 2px rgba(0,0,0,0.15)`; featured carousel
    `0 0 10px 3px rgba(0,0,0,0.15)`.
  - Spacing: section padding 100px, logo mt 40px, widget mt 50px, footer
    mt 60px.
- **Recreation name:** Crumb (NEW — differs from source "Foode"). App folder
  `apps/crumb`, package `@free-react-templates/crumb`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/crumb-<n>/<w>/<h>`); lucide-react icons; social brand
  icons as inline SVG; Merriweather + Poppins via Google Fonts `<link>`;
  terracotta + ink in `@theme`; wavy divider as inline SVG or CSS
  (border-image / repeating radial-gradient); repo-standard Navbar/Footer
  chrome adapted to this layout (top bar is separate from the main nav).
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-crumb/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/crumb` (copy a simple blog/landing app pattern — e.g.
      Feast/Postie if a blog exists, else Aurora; rename package to
      `@free-react-templates/crumb`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-crumb`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (`free-react-templates-crumb.surge.sh`) + homepage + `npm run
  readme:status`.
