# Glyph (ColorLib Opium) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-glyph`.

## Design notes (replication findings)

- **Original:** ColorLib "Opium" — blog template
  (source: https://colorlib.com/wp/template/opium/).
  TEMPLATES.md has THREE copies of this item (lines 277, 1722, and 2412 —
  mark ALL THREE `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/opium/
  (HTTP 200, 30 KB rendered HTML, title "Opium Blog"). Stylesheet
  `css/style.css` (56 KB) + bootstrap/linericon/font-awesome/owl-carousel/
  lightbox/nice-select/animate/jquery-ui imports; Google Fonts `@import`
  Inconsolata 400+700 at the top.
- **Screenshot:** `opium-free-template.jpg` — verified live in a browser
  (vision, 1200×946): clean minimal blog on white; thin top bar with social
  icons right; centered uppercase nav; logo "Opium"; hero = large lifestyle
  photo with a white content card overlaid right (black pill "Gadgets" tag,
  date, comment count, bold title, excerpt, outlined "Read More"); blog grid
  of image cards with white overlapping text panels; light-grey widget boxes
  with thin borders; neutral palette — the only strong color is the
  purple-blue `#6f6fff` accent.
- **Visual design:** modern minimal blog — white page, **Inconsolata
  monospace** for every element (body, headings, nav, buttons), purple-blue
  `#6f6fff` accent, light-lavender `#f9f9ff` fills, `#e9e9e9` thin borders,
  5px-radius "Read More" buttons, white post cards overlapping their images
  by 100px with a soft shadow, dark `#222222` footer with `#191919` inputs.

## Design tokens (from style.css)

| Token                  | Value                                                                                                              | Where                                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accent purple-blue     | `#6f6fff`                                                                                                          | nav hover/active, widget title bar (30×4px), blog_btn hover bg, h4/date/popular-post/category hover, pagination hover, footer link/sub-btn/footer-text heart + link, social hover |
| Light lavender bg      | `#f9f9ff`                                                                                                          | banner bg-color, `cat_btn` bg, `blog_btn` bg, sidebar widget card bg                                                                                                              |
| Border grey            | `#e9e9e9`                                                                                                          | main_menu bottom border, blog_btn border, widget card border, search input border                                                                                                 |
| Dotted separator       | 2px dotted `#eee`                                                                                                  | category list item separators                                                                                                                                                     |
| Body text              | `#777777` (16px/26px)                                                                                              | body, excerpts, dates (12px), footer text, search/input text                                                                                                                      |
| Heading text           | `#000`                                                                                                             | post h4 titles (24px/30px), widget titles (21px bold), author name, popular-post titles (14px), banner                                                                            |
| Newsletter sidebar btn | bg `#000`, white 14px                                                                                              | `.bbtns`                                                                                                                                                                          |
| Footer btn (sub-btn)   | bg `#6f6fff`, white, radius 0, line-height 34px                                                                    | footer newsletter subscribe                                                                                                                                                       |
| Blog button            | 1px `#e9e9e9` border, bg `#f9f9ff`, padding 0 28px, radius **5px**, line-height 38px; hover bg `#6f6fff` white     | `.blog_btn` ("Read More")                                                                                                                                                         |
| Post card              | bg white, **margin-top -100px**, shadow `0 10px 20px 0 rgba(153,153,153,0.1)`, padding 40px                        | `.blog_text_inner` overlaps the image                                                                                                                                             |
| Hero slider card       | bg white, padding 115px 65px 65px; slider 100px top/bottom                                                         | `.blog_text` inside `blog_text_slider`                                                                                                                                            |
| Sidebar widget card    | 1px `#e9e9e9` border, 30px padding, bg `#f9f9ff`                                                                   | `.blog_right_sidebar .widget`; widget_title 21px bold `#000` with 30×4px accent bar, padding-left 50px                                                                            |
| Newsletter input       | 50px, 14px, radius 5px, border `#e9e9e9`                                                                           | sidebar newsletter widget                                                                                                                                                         |
| Pagination             | page-link radius **0**; active page bg `#000` white                                                                | 01 02 03 04 09                                                                                                                                                                    |
| Nav link               | 13px/44px uppercase Inconsolata, `#000`, padding 0 20px; hover/active `#6f6fff`                                    | `.main_menu`                                                                                                                                                                      |
| Footer                 | bg `#222222`; title 21px bold white; input 40px bg+border `#191919` 14px `#999999`; footer-bottom padding-top 70px | `footer-area p_120`; instafeed 3×2 square grid                                                                                                                                    |
| Font                   | **Inconsolata** (400, 700), monospace                                                                              | Google Fonts; use `<link>` in recreation index.html                                                                                                                               |
| Section padding        | `p_120` = 120px top/bottom (blog area, footer); header absolute over hero, first section margin-top 145px          | vertical rhythm                                                                                                                                                                   |

## Implementation tasks (order)

1. Scaffold `apps/glyph` from the simplest existing app; rename package
   to `@free-react-templates/glyph`; `npm install` at root; keep
   `injectUiSource()` in vite.config.ts.
2. `src/index.css`: `@theme` with `--color-accent: #6f6fff`,
   `--color-mist: #f9f9ff`, `--color-ink: #000`, `--color-body: #777777`,
   `--color-line: #e9e9e9`, `--color-footer: #222222`,
   `--color-footinput: #191919`; add Inconsolata `<link>` in `index.html`.
3. Components (one file per section, colocated tests):
   - `Navbar.tsx` — transparent header, brand "Glyph", right social icons
     (inline SVG BrandIcon), links Home / Category / Archive / Pages
     (submenu) / Single Blog / Elements / Contact, mobile menu with
     expandable Pages submenu, accent hover.
   - `HeroSlider.tsx` — full-width bg image (picsum `glyph-hero`),
     right-aligned text slider: 3 slides (category pill "Gadgets", date
     "March 14, 2018" + comment count "05", 24px+ title, excerpt, Read
     More), auto-advance + prev/next.
   - `BlogGrid.tsx` — 9 `blog_style1` cards, 3 cols; each: image on top +
     white text panel overlapping -100px (shadow), cat pill, date +
     comments, 24px title (hover accent), excerpt, `blog_btn` Read More.
   - `Pagination.tsx` — 01 02 03 04 09, active page black bg white text.
   - `Sidebar.tsx` — search input; author card (avatar, "Charlie Barber",
     "Senior blog writer", bio, social icons); "Popular Posts" 4 thumb
     rows (title 14px + "0X Hours ago"); "Newsletter" card (email input +
     black Subscribe, success + validation states); "Post Categories"
     list (7 categories + counts, dotted separators, accent hover).
   - `Footer.tsx` — dark 4-col: About Us, Newsletter ("Stay updated with
     our latest trends", input + accent sub-btn), Instagram Feed 3×2
     grid, Follow Us social icons; copyright bar with heart + Colorlib
     credit in accent.
4. Compose in `App.tsx` in the exact section order above.
5. TDD: scenario-style tests mirroring the spec; 100% coverage.
6. `bash scripts/verify-app.sh glyph` + `npm run spec:validate`.
7. PR: `feat: Glyph — blog template (ColorLib Opium)`, merge immediately,
   then bookkeeping (ALL THREE TEMPLATES.md lines `[x]` + surge URL,
   homepage, `npm run readme:status`).

## Fidelity checklist

- [ ] Section order 1:1: header → hero slider → blog grid → pagination →
      sidebar (right) → footer
- [ ] Inconsolata monospace font everywhere, `#6f6fff` accent, `#f9f9ff`
      fills, `#e9e9e9` borders, 5px-radius Read More buttons
- [ ] Post text panel overlaps image by 100px with soft shadow
- [ ] Hero slider auto-advances; prev/next controls work
- [ ] Sidebar widget order: search → author → popular posts → newsletter →
      categories; each card has 1px border + 30px padding on `#f9f9ff`
- [ ] Footer: dark `#222222`, 4 columns, `#191919` newsletter input,
      instafeed 3×2 grid, copyright bar with accent heart/link
- [ ] Newsletter forms validate email and show a success state
- [ ] picsum.photos/seed/glyph-<n>/<w>/<h> placeholders; no copied assets
- [ ] lucide icons only (Search, Calendar, MessageSquare, Menu,
      ChevronLeft, ChevronRight, Send) + inline SVG BrandIcon socials;
      verify `node -e "console.log(typeof require('lucide-react').Facebook)"`
      → undefined (use BrandIcon)
- [ ] Duplicate nav links in mobile + desktop DOM: use `getAllByRole` in
      tests
