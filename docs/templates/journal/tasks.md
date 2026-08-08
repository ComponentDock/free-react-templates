# Journal (ColorLib Original) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-journal`.

## Design notes (replication findings)

- **Original:** ColorLib "Original" — lifestyle blog template
  (source: https://colorlib.com/wp/template/original/).
  TEMPLATES.md has ONE copy of this item (line 278 — mark it `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/original/
  (HTTP 200, 42 KB rendered HTML, title "Original - Lifestyle Blog
  Template"). Stylesheet `style.css` (44 KB) + bootstrap/classy-nav/animate/
  owl-carousel imports; Google Fonts `@import` Open Sans 300/400/600/700 at
  the top. A custom "helveticaneuemedium" font is used only for date numerals
  and some headings — map it to Open Sans 600/700, do NOT copy the file.
- **Screenshot:** `original-free-template.jpg` — verified live in a browser
  (vision, 1200×946): white/black magazine aesthetic. Thin white top bar
  with 6 social icons right; centered logo "Original." (bold condensed
  serif) with "Lifestyle Blog" subtitle; solid black nav bar with a
  rectangular "SUBSCRIBE" button (white text) left, uppercase menu
  (HOME / PAGES / CATEGORY / ABOUT US / MEGAMENU / CONTACT) with dropdown
  arrows, magnifier search right; hero = full-width carousel, center slide
  shows a full-bleed lifestyle photo, small black "LIFESTYLE" tag pill and a
  bold uppercase headline on a black bar (white text); magazine grid below.
  Palette is white + black with ONE deep-indigo accent `#30336b`; the photos
  provide the only other color.
- **Visual design:** bold black/white editorial magazine — white page, black
  nav bar, centered logo, big hero slides with black-bar headlines, image
  cards with absolute date boxes, black category boxes centered over photos,
  underline search, bordered tag chips, indigo hover fills everywhere, a
  centered footer and an indigo-overlay Instagram strip.

## Design tokens (from style.css)

| Token                  | Value                                                                                                                                                                                                                               | Where                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accent deep indigo     | `#30336b` (18 refs)                                                                                                                                                                                                                 | original-btn hover bg+border, subscribe-btn hover, category box hover, tag chip hover, headline hover, ticker link hover, instagram overlay `rgba(48,51,107,0.95)`, newsletter submit hover |
| Page bg / base         | `#ffffff` white                                                                                                                                                                                                                     | entire page                                                                                                                                                                                 |
| Ink black              | `#000000`                                                                                                                                                                                                                           | nav links hover, hero tag pill + headline bar, category box, headings, date numerals, meta author, footer hover, search focus border                                                        |
| Near-black             | `#0d0d0d`                                                                                                                                                                                                                           | subscribe-btn bg, hero arrow hover bg                                                                                                                                                       |
| Nav link grey          | `#4f4d4d`                                                                                                                                                                                                                           | main nav links (uppercase), footer nav links                                                                                                                                                |
| Border grey (btn)      | `#dcdcdc`                                                                                                                                                                                                                           | original-btn border, instagram top border                                                                                                                                                   |
| Light borders          | `#e1e1e1` (logo area top/bottom), `#c5c5c5` (tag chips), `#cbcbcb` (hero arrows), `#c8c8c8` (line)                                                                                                                                  | separators and hairlines                                                                                                                                                                    |
| Input borders          | `#787878` (date box, newsletter inputs), `#bbbec1` (search underline + placeholder)                                                                                                                                                 | forms                                                                                                                                                                                       |
| Meta greys             | `#878787` (date month, meta dates), `#a1a1a1` (post-tag), `#b2b2b2` (newsletter placeholder), `#999da4` (coming-soon only)                                                                                                          | secondary text                                                                                                                                                                              |
| Button `.original-btn` | 1px `#dcdcdc` border, radius **0**, min-width 175px, height 60px, 14px uppercase, letter-spacing 3px, black text, shadow `0 0 30px rgba(0,0,0,0.1)`; hover bg+border `#30336b`, white                                               | Read More / Subscribe everywhere                                                                                                                                                            |
| Nav SUBSCRIBE button   | bg `#0d0d0d`, white 12px uppercase, height 40px, min-width 140px, radius 0; hover `#30336b`                                                                                                                                         | left side of nav bar, opens newsletter modal                                                                                                                                                |
| Hero slide             | height 670px, bg image cover; tag pill black 10px uppercase letter-spacing 2px radius 2px padding 3px 10px; headline 40px uppercase white on black (padding 12px 20px 5px, radius 0)                                                | `.single-hero-slide .slide-content` — only center slide content visible (owl center mode)                                                                                                   |
| Hero arrows            | 40×40, bg `#cbcbcb`, radius 2px, white 20px icon; hover `#0d0d0d`; at 7% left/right, vertically centered                                                                                                                            | `.owl-prev` / `.owl-next`                                                                                                                                                                   |
| Card line              | 26×2px `#c8c8c8`, margin-bottom 20px                                                                                                                                                                                                | `.single-blog-content .line`                                                                                                                                                                |
| Post tag               | 11px uppercase letter-spacing 3px `#a1a1a1`, hover black                                                                                                                                                                            | blog cards + sidebar latest posts                                                                                                                                                           |
| Post headline          | 24px black, hover `#30336b`; paragraph line-height 2                                                                                                                                                                                | blog cards                                                                                                                                                                                  |
| Post meta              | 9px uppercase letter-spacing 3px; "By james smith" + "3 comments" (first p margin-right 30px)                                                                                                                                       | blog cards                                                                                                                                                                                  |
| Date box               | absolute 15px/15px, white bg, 1px `#787878` border, padding 20px 8px, 24px numeral + 11px `#878787` month                                                                                                                           | `.post-date` on every blog thumbnail                                                                                                                                                        |
| Category box           | 226×156px black, centered over photo (translate -50%,-50%), 10px uppercase white letter-spacing 3px; hover `#30336b`                                                                                                                | `.catagory-title` on the two intro image cards                                                                                                                                              |
| Sidebar widget         | 60px bottom margin; search = bottom-border input (1px `#bbbec1`, focus black, italic 12px, submit hidden); newsletter input 40px 1px `#787878` italic 13px padding 0 25px; title 18px margin-bottom 52px (20px for subscribe-title) | `.sidebar-widget-area`                                                                                                                                                                      |
| Latest posts widget    | rows: 115px thumb + tag + 16px headline + 11px date                                                                                                                                                                                 | `.widget-post`                                                                                                                                                                              |
| Tag chips              | 1px `#c5c5c5`, 45px tall, padding 0 35px, 12px black, margin 5px; hover fill `#30336b` white                                                                                                                                        | `.tags a`                                                                                                                                                                                   |
| Instagram strip        | top border `#dcdcdc`; title 18px centered padding 40px 0; 7 square feeds; hover overlay full-cover `rgba(48,51,107,0.95)` + 30px white instagram icon                                                                               | `.instagram-feed-area` owl-carousel                                                                                                                                                         |
| Footer                 | padding 60px 0, centered; nav uppercase `#4f4d4f`-grey hover black; social icons 13px black padding 5px 15px; copyright small                                                                                                       | `.footer-area`                                                                                                                                                                              |
| Newsletter modal       | content radius 0; body padding 70px; input 60px 1px `#787878` italic 14px padding 0 30px; submit = white original-btn → `#30336b` hover; close = red 30×30 top-right                                                                | `#subsModal` (bootstrap modal in the original)                                                                                                                                              |
| Sticky nav             | on scroll: fixed top, white bg, shadow `0 5px 15px rgba(0,0,0,0.15)`, height 100→70px                                                                                                                                               | `.is-sticky .original-nav-area`                                                                                                                                                             |
| Font                   | **Open Sans** (300, 400, 600, 700)                                                                                                                                                                                                  | Google Fonts; use `<link>` in recreation index.html; headings/dates via weight 600/700                                                                                                      |
| Section padding        | `section-padding-100` = 100px top/bottom on blog wrapper; logo area 170px; nav 100px; top bar 65px                                                                                                                                  | vertical rhythm                                                                                                                                                                             |

## Implementation tasks (order)

1. Scaffold `apps/journal` from the simplest existing app; rename package
   to `@free-react-templates/journal`; `npm install` at root; keep
   `injectUiSource()` in vite.config.ts.
2. `src/index.css`: `@theme` with `--color-accent: #30336b`,
   `--color-ink: #000`, `--color-nearblack: #0d0d0d`, `--color-bodygrey:
#4f4d4d`, `--color-meta: #878787`, `--color-tag: #a1a1a1`,
   `--color-line: #dcdcdc`, `--color-hairline: #e1e1e1`,
   `--color-input: #787878`, `--color-search: #bbbec1`; add Open Sans
   `<link>` in `index.html`.
3. Components (one file per section, colocated tests):
   - `TopBar.tsx` — breaking-news ticker (5 headlines auto-rotating, hover
     accent) + 6 social icons right (inline SVG BrandIcon).
   - `Header.tsx` / `Navbar.tsx` — logo wordmark "Journal" (bold serif) +
     "Lifestyle Blog" subtitle; nav with SUBSCRIBE button (opens modal),
     links Home / Pages (dropdown: Home, About Us, Single Post, Contact,
     Coming Soon) / Catagory (2-level nested dropdown) / About Us /
     Megamenu (4 columns × 5 items) / Contact; expanding search input;
     sticky on scroll (white bg + shadow, height 100→70px); mobile
     accordion menu.
   - `HeroSlider.tsx` — full-width carousel, 3 slides (bg picsum
     `journal-hero-<n>`), center-active content: black "lifestyle" pill +
     40px uppercase headline on black bar; auto-advance + prev/next arrows.
   - `MagazineIntro.tsx` — 3-col row: text panel (line, Lifestyle tag,
     "Welcome to this Lifestyle blog", paragraph, Read More `original-btn`)
     - 2 photo cards with centered black category boxes ("Lifestyle posts"
       / "latest posts", hover → accent).
   - `BlogList.tsx` — 5 posts, alternating image left/right (3rd
     full-width: image top, content below mt-50); each with date box (12
     march / 10 march), line, tag, 24px headline, paragraph, meta "By
     james smith" / "3 comments"; load-more Read More button below.
   - `Sidebar.tsx` — search (underline input), "Subscribe to my
     newsletter" (email + Subscribe, success + validation states),
     "Advertisement" (placeholder image), "Latest Posts" (4 thumb rows),
     "Tags" (8 chips, accent hover fill).
   - `InstagramFeed.tsx` — "Follow us @ Instagram" title + 7-square
     carousel with indigo overlay + instagram icon on hover.
   - `Footer.tsx` — centered nav (Home / About Us / Lifestyle / Travel /
     Music / Contact), 6 social icons, copyright bar with heart + Colorlib
     credit (paraphrased).
   - `NewsletterModal.tsx` — modal (title + email input + Submit
     original-btn), red close button, email validation + success state;
     opened by nav SUBSCRIBE button.
4. Compose in `App.tsx` in the exact section order above.
5. TDD: scenario-style tests mirroring the spec; 100% coverage. Nav
   dropdowns + mobile menu render duplicate links — use `getAllByRole`.
6. `bash scripts/verify-app.sh journal` + `npm run spec:validate`.
7. PR: `feat: Journal — lifestyle blog template (ColorLib Original)`,
   merge immediately, then bookkeeping (TEMPLATES.md line 278 `[x]` +
   surge URL, homepage, `npm run readme:status`).

## Fidelity checklist

- [ ] Section order 1:1: top bar (ticker + socials) → logo → nav (sticky)
      → hero carousel → magazine intro row → blog list (5 posts + load
      more) + right sidebar → instagram strip → footer + newsletter modal
- [ ] Open Sans font; `#30336b` accent; black/white editorial palette;
      radius-0 `original-btn` (1px `#dcdcdc`, shadow) with indigo hover
- [ ] Hero: 3-slide center-active carousel, black tag pill + black-bar
      headline, arrows at 7%
- [ ] Date boxes (white, 1px `#787878`, "12 march"), category boxes
      (226×156 black, hover indigo), tag chips (hover indigo fill)
- [ ] Sticky nav white bg + shadow on scroll; mobile accordion menu with
      expandable dropdowns
- [ ] Newsletter forms (sidebar + modal) validate email and show success;
      modal closes via red close button
- [ ] Breaking ticker auto-rotates; hero + instagram carousels auto-advance
      with controls
- [ ] picsum.photos/seed/journal-<n>/<w>/<h> placeholders; no copied assets
- [ ] lucide icons only (Search, Menu, X, ChevronLeft, ChevronRight, Heart,
      Instagram) + inline SVG BrandIcon socials; verify
      `node -e "console.log(typeof require('lucide-react').Facebook)"`
      → undefined (use BrandIcon)
- [ ] Duplicate nav links in mobile + desktop DOM: use `getAllByRole` in
      tests
