# Miscellany (Colorlib Stuff) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-miscellany`.

## Design notes (replication findings)

- **Original:** ColorLib "Stuff" — blog/magazine template
  (source: https://colorlib.com/wp/template/stuff/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/stuff/
  (HTTP 200; `css/style.css` ~32 KB parsed for tokens). Screenshot
  `stuff-free-template.jpg` used as the visual reference.
- **Visual design (from screenshot):** clean white minimalist magazine
  blog. White top bar: bold black uppercase logo "STUFF" left, small
  uppercase grey nav (HOME, BLOG, EVENT, TRAVEL, ABOUT ME, CONTACT) right.
  Full-width photo hero (yellow shipping-container wall) with a white
  article-preview box bottom-left: uppercase meta "EVENTS 20 MARCH 2018
  BY RICH" + bold headline "How a website designer began customizing and
  designing". Below: a row of three mixed cards — left photo card, center
  solid orange-red card, right dark-grey card with a photo carousel
  (arrows). White description boxes overlap card images.
- **Structure (1:1, section order):**
  1. Navbar (`.colorlib-nav`): logo "Stuff" 24px/700/uppercase black;
     links Home, Blog (dropdown: Blog Single, Video, Read, Lifestyle),
     Event, Travel, About Me, Contact — 12px uppercase, letter-spacing
     1px, color rgba(0,0,0,.7); hover + active #F6490D.
  2. Hero slider (`#colorlib-hero`, flexslider, height 650px, 4 slides):
     each slide full-bleed cover photo (`images/img_bg_1..4.jpg`),
     overlay rgba(0,0,0,.1), centered `.slider-text` with `.meta`
     (category link + date "20 March 2018" + "By Rich"), bold h1
     (28px/1.3/700, black), hero `.btn.btn-primary` 14px 30px. Slide
     headlines: "How a website designer began customizing and
     designing" ×2, "Top 5 Places To Start Your Vacation This Summer",
     … . Nav arrows + slide dots.
  3. Blog grid (`#colorlib-container`, padding 7em 0): rows of
     `.blog-entry` cards — 3-3-3 (blog-1..3, card 3 is an owl-carousel
     photo slider with prev/next arrows), 3-3-2 (blog-4..6), 4-4-4
     (blog-7..9, card 7 is a VIDEO card: `images/blog-8.jpg` bg + 90px
     white round play button, icon 40px #F6490D, overlay darkens to
     .7 on hover), 4-8 (blog-12 + blog-13 wide). Card anatomy:
     `.blog-img` photo + `.desc` white box `width: 90%`,
     `margin-top: -3em`, meta line (uppercase 14px: cat/date/By author),
     h2 title 28px/700 black ("Recipe for your site"), Duden excerpt.
  4. Pagination: « 1 2 3 4 » centered; active page black.
  5. Instagram (`#colorlib-instagram`, padding 7em 0): `.colorlib-heading
h2` "Instagram" (16px uppercase ls 2px 700) + 8 × square tiles
     (12.5% width, 200px height); hover reveals 40px white plus cross.
  6. Footer (`#colorlib-footer`, bg **#212125**, padding 7em 0):
     Navigational (Home, About Me, Blog, Travel, Lifestyle, Fashion,
     Health — icon-check prefix); Recent Post (3 × thumbnail 90px +
     title + date 25/24/23 March 2018); Archive (February 2018 …
     September 2017); Tags (chips: 1px #333333 border, gray text,
     5px 12px, 13px, radius 4px; hover bg #F6490D white); copyright
     "All rights reserved | Made with ♥ by Colorlib" + "Demo Images:
     Unsplash".
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#F6490D** (orange-red) — links, `.btn-primary` bg
    (2px border, white text; hover **#f75b26**), video play icon, footer
    link hover, tag hover.
  - Hero meta icon accent: **#F7AF1D** (yellow).
  - Body: #666666 text, white bg, Roboto/Arial/sans-serif, 300 weight,
    16px, line-height 2. Headings: #000, weight 400.
  - Logo: 24px/700/uppercase. `.colorlib-heading h2`: 16px uppercase ls
    2px 700. Blog card h2: 28px/700. Meta: uppercase 14px, category link
    #000/700.
  - Card desc: white, width 90%, margin-top -3em (overlap). Video play:
    90px circle, radius 50%, shadow 0 14px 30px -15px rgba(0,0,0,.75).
  - Footer #212125; tag chips #333333 border, radius 4px. Sections
    padding 7em 0. Container max-width 1200px.
- **Recreation name:** Miscellany (NEW — differs from ColorLib "Stuff").
  App folder `apps/miscellany`, package `@free-react-templates/miscellany`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/miscellany-<n>/<w>/<h>`); Roboto via Google Fonts
  `<link>` in index.html; lucide-react icons (play, arrow-up, check, tag,
  chevron-left/right); orange-red accent in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome; reuse `packages/ui`
  (Button, ButtonLink, cn).

## Tasks

- [x] Write `openspec/specs/template-miscellany/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/miscellany` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/miscellany`; run
      `npm install` at root so package-lock registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `npm run verify:app -- miscellany` (typecheck + lint +
      100% coverage + build).
- [ ] Push `feat/template-miscellany`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D) — remember TEMPLATES.md has THREE
      "Stuff" rows (lines ~289, ~505, ~2214); mark ALL of them.
