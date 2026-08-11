# Typeface (ColorLib Wordify) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-typeface`.

## Source mapping

- **ColorLib item:** "Wordify" (TEMPLATES.md line 295 — the only occurrence,
  no dup row).
- **Source URL:** https://colorlib.com/wp/template/wordify/
- **Preview URL:** https://preview.colorlib.com/theme/wordify/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~32 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/wordify/css/style.css
  (~19.7 KB) + `css/bootstrap.css` (~33 KB, customized — its `.btn-primary` is
  the purple #6610f2) — tokens extracted. Site is Bootstrap 4 + jQuery
  (owl-carousel), FontAwesome/Ionicons/Flaticon icons — NOT Tailwind.
  JS: `js/main.js` (owl-carousel + dropdown init).

## Reference research (done — do not redo)

### Screenshot (`wordify-free-template.jpg`, 1200×946; verified via browser vision)

Solid purple strip on top: small white social icons left, search field right.
Below it a huge centered black "Wordify" logo (Josefin Sans at 90px reads as a
serif-ish display face). Uppercase gray nav: HOME BUSINESS TRAVEL CATEGORIES
ABOUT CONTACT. Hero: close-up photo (pink flowers + "hello cactus" mug) with a
small purple "TRAVEL" category tag, author avatar + name + "March 16, 2018" +
comment count, large white headline "How to Find the Video Games of Your
Youth", lorem excerpt, and white slider dots at the bottom center. Below: dark
"Latest Posts" heading and a photo-card grid (looks 3-col because the sidebar
search box sits beside the 2-col main grid). Purple accents on the category
badge and pagination. Matches the live DOM 1:1.

### Live DOM (primary reference — matches the screenshot 1:1)

Section order (verified by marker offsets in the HTML):

1. **Top bar** `div.top-bar` — bg #6610f2, padding 10px 0. Left `col-9.social`:
   4 icon links (fa-twitter, fa-facebook, fa-instagram, fa-youtube-play),
   white at opacity .5 (hover 1). Right `col-3.search-top`: form.search-top-form
   (float right) — `.icon` search glyph absolute right + input `#s` (bg
   #510bc4, white text, placeholder "Type keyword to search...", focus bg
   #3d0894; width ~300px desktop / 150px mobile, padding 4px 30px 4px 15px).
2. **Logo wrap** `div.container.logo-wrap` — row pt-5, `col-12.text-center`:
   mobile-only `a.absolute-toggle` (burger-lines hamburger, collapses
   `#navbarMenu`) + `h1.site-logo a` "Wordify" (Josefin Sans, #000, 90px;
   mobile 40px).
3. **Navbar** `nav.navbar.navbar-expand-md.navbar-light.bg-light` — CSS forces
   `background: transparent !important` (mobile: #e6e6e6). `.container` has a
   bottom border #e6e6e6. `ul.navbar-nav.mx-auto`: Home (`.nav-link.active`),
   Business, Travel (dropdown `#dropdown04`: Asia, Europe, Dubai, Africa,
   South America), Categories (dropdown `#dropdown05`: Lifestyle, Food,
   Adventure, Travel, Business), About, Contact. `.nav-link`: 16px, uppercase,
   ls .05em, padding 1.7rem 1rem. Dropdown menu: radius 0, no border, shadow
   `0 2px 30px rgba(0,0,0,.2)`, white arrow notch; `.dropdown-item:hover/.active`
   bg #6610f2 + white.
4. **Hero slider** `section.site-section.pt-5.pb-5` → `div.owl-carousel.owl-theme
.home-slider` — 3 slides, each `a.a-block.d-flex.align-items-center.height-lg`
   with inline `background-image: url('images/img_1..3.jpg')`. `.a-block`:
   cover bg, padding 30px 80px (30px mobile), height-lg 500px; `:before` black
   overlay opacity .3 (hover .4). `.text.half-to-full` (max-width 50%; 100%
   mobile, z-index 2): `span.category.mb-5` (bg #6610f2, 12px uppercase, ls
   .2em, radius 4px, padding 2px 8px; "Food"/"Travel"/"Sports"),
   `div.post-meta` (white, uppercase 13px ls .1em: 30px circular avatar img +
   " Colorlib" + bullet + "March 15, 2018" + bullet + fa-comments " 3"),
   `h3` white headline "How to Find the Video Games of Your Youth", `p` white
   excerpt (lorem). Owl dots: absolute bottom 100px, 10px circles, 2px
   rgba(255,255,255,.5) border, `.active` solid white border + white fill;
   owl nav (‹ ›) white 40px, hidden until hover.
5. **Latest Posts** `section.site-section.py-sm` (padding 0) — `h2.mb-4`
   "Latest Posts"; `div.row.blog-entries` → `col-md-12.col-lg-8.main-content`
   (rows of `col-md-6`) + `col-md-12.col-lg-4.sidebar`.
6. **Blog grid** — 8 entries `a.blog-entry.element-animate` (data-animate
   fadeIn): `<img>` (img_5..img_12) + `div.blog-content-body` (padding 20px,
   border 1px #efefef, border-top none): `div.post-meta` (14px #b3b3b3: 30px
   avatar + " Colorlib" + bullet + "March 15, 2018" + bullet + comment count),
   `h2` 18px/1.5 #000 "How to Find the Video Games of Your Youth", `p` 13px
   gray excerpt. Hover: opacity .7, `top: -1px`, shadow `0 3px 50px -2px
rgba(0,0,0,.2)`. Margin-bottom 30px.
7. **Pagination** `nav[aria-label="Page navigation"].text-center` →
   `ul.pagination`: ‹ (active), 1, 2, 3, 4, 5, ›. `li a`: 40px circle (radius
   50% !important), centered; hover bg #6610f2 + white; active = purple
   circle (Bootstrap primary).
8. **Sidebar** `col-lg-4.sidebar` (`.sidebar-box` margin-bottom 4em, white bg,
   15px):
   - `search-form-wrap`: form.search-form → `.form-group` (position relative):
     icon absolute right 20px + input.form-control#s (bg #f7f7f7, border none,
     padding 15px, radius 0, placeholder "Type a keyword and hit enter").
   - `bio.text-center` (padding 15px, border 1px #e6e6e6): img person_1 —
     100px, radius 50%, 4px white border, shadow `0 10px 30px -10px
rgba(0,0,0,.4)`, margin-top -4em (avatar pops over the border); `h2`
     "David Craig" (20px); p bio; `a.btn.btn-primary.btn-sm.rounded` "Read my
     bio"; `p.social` — 4 icon links (facebook/twitter/instagram/youtube-play),
     #000.
   - `h3.heading` "Popular Posts" (18px, padding-bottom 20px, border-bottom
     1px #e6e6e6) → `post-entry-sidebar ul li a`: img + `.text` h4 18px title
     - `div.post-meta` (14px #b3b3b3, date only). 3 entries (img_2, img_4,
       img_12).
   - "Categories" heading → `ul.categories li a`: 16px, dotted bottom border
     #dee2e6, count `span` absolute right #ccc (hover #000): Food (12), Travel
     (22), Lifestyle (37), Business (42), Adventure (14).
   - "Tags" heading → tagcloud of links: Travel, Adventure, Food, Lifestyle,
     Business, Freelancing (tags repeat in the DOM).
9. **Footer** `footer.site-footer` — bg #262626 (cover image layering also
   declared), padding 5em 0. `h3` 14px uppercase ls .2em white (margin-bottom
   30px); `p` rgba(255,255,255,.5); links white.
   - `col-md-4` "About Us": `<img>` img_1 (img-fluid) + p + "Read More" link.
   - `col-md-6.ml-auto` → row: `col-md-7` "Latest Post" — 3 `post-entry-sidebar`
     entries (img_6, img_3, img_4) with white h4 + meta (date + bullet +
     comments); `col-md-1` spacer; `col-md-4`: "Quick Links" (About Us,
     Travel, Adventure, Courses, Categories) + "Social" `ul.footer-social`
     (Twitter, Facebook, Instagram, Vimeo, Youtube — fa icons, h4-style
     spacing).
   - Bottom row `col-md-12.text-center`: copyright "Copyright © <year> All
     Rights Reserved | This template is made with <heart> by Colorlib" →
     replace with original attribution.
10. **Loader** `div#loader.show.fullscreen` (white screen + spinner) — cosmetic,
    optional; can be omitted or replaced with a subtle fade-in.

## Design tokens (from style.css + bootstrap.css — computed)

| Token        | Value        | Usage                                                                                               |
| ------------ | ------------ | --------------------------------------------------------------------------------------------------- |
| brand-purple | `#6610f2`    | top bar, category badge, dropdown hover/active, pagination hover/active, dot active, btn-primary bg |
| purple-hover | `#8540f5`    | btn-primary hover bg/border                                                                         |
| purple-dark  | `#510bc4`    | top-bar search input bg (focus `#3d0894`)                                                           |
| footer-dark  | `#262626`    | site footer bg                                                                                      |
| border-light | `#efefef`    | card content-body border + body frame border                                                        |
| border-gray  | `#e6e6e6`    | navbar bottom border, dropdown/bio/sidebar borders, mobile navbar bg, generic dots                  |
| input-gray   | `#f7f7f7`    | sidebar search input bg                                                                             |
| text-body    | `#6c757d`    | body text (Inconsolata 300 18px lh 1.9)                                                             |
| text-muted   | `#b3b3b3`    | post-meta text (grid + sidebar)                                                                     |
| text-heading | `#000`       | headings, logo, nav links                                                                           |
| font-heading | Josefin Sans | logo (90px/40px), h1–h4                                                                             |
| font-body    | Inconsolata  | body copy (monospace stack)                                                                         |

Body frame: `body { padding: 20px; border: 1px solid #efefef; border-top:
none; }` over `background: #ccc url("photography.png") repeat` — the whole
page is a framed sheet on a textured gray backdrop. Reproduce with a 20px
padding wrapper + 1px light border + subtle repeating texture (or plain #ccc
fallback).

Buttons: radius 0 (sharp), btn-primary = 2px border + white text, hover
#8540f5; bio "Read my bio" adds Bootstrap `rounded`. Form controls: radius 0,
no shadow, no outline.

## Implementation task outline

1. Scaffold `apps/typeface` (copy simplest existing app, rename package to
   `@free-react-templates/typeface`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Josefin Sans (400/600/700) +
   Inconsolata (300/400) Google Fonts `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #6610f2`,
   `--color-brand-hover: #8540f5`, `--color-brand-dark: #510bc4`,
   `--color-footer: #262626`, `--color-card-border: #efefef`,
   `--color-line: #e6e6e6`, `--color-input: #f7f7f7`, `--color-ink: #000`,
   `--color-muted: #b3b3b3`, `--font-heading: "Josefin Sans", ...`,
   `--font-body: "Inconsolata", ...`.
3. Components: `TopBar` (purple bar: social SVGs + search input), `Logo`
   (huge centered brand + mobile hamburger), `Navbar` (uppercase links +
   2 dropdowns, mobile collapse), `HeroSlider` (state carousel: slides with
   category badge + meta + headline + excerpt, dot + arrow controls),
   `BlogGrid` (8 cards + `Pagination` circles), `Sidebar` (`SearchBox`,
   `BioCard`, `PopularPosts`, `CategoriesList`, `TagCloud`), `Footer` (about,
   latest posts, quick links, social, copyright).
4. Carousels: state-based index carousel (no new deps), prev/next + dots,
   keyboard-accessible; reuse an existing shipped pattern if present.
5. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- typeface`.
6. PR: `feat: implement Typeface (ColorLib Wordify)`, description must list
   source template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- The page is a "framed sheet" design: 20px body padding + 1px #efefef border
  on a textured #ccc background — the frame is part of the look, keep it.
- Logo is huge (90px desktop / 40px mobile) and centered; it is NOT a navbar
  brand — logo row and navbar are separate stacked blocks.
- Top-bar search uses dark purple (#510bc4) input with white text — distinct
  from the sidebar search (light #f7f7f7).
- Slider overlay text is capped at 50% width on desktop (half-to-full) and
  full-width on mobile; overlay opacity 30% (40% hover).
- Nav links uppercase with wide letter-spacing; two dropdowns (Travel →
  continents, Categories → topics). Home is the active link.
- Blog grid is 8 cards in 2 columns inside the main column (sidebar takes
  col-lg-4 on the right); "Latest Posts" section has zero vertical padding.
- Post meta pattern everywhere: avatar + name + bullet + date + bullet +
  comment count (slider/footer use the same pattern).
- Author "Colorlib" → rename to an original author (e.g. the app brand);
  "David Craig" sidebar bio can stay (fictional person, fine to keep or
  rename).
- Footer "made with <heart> by Colorlib" credit → original attribution.
- All images: `https://picsum.photos/seed/typeface-<n>/<w>/<h>` (slider
  typeface-1..3, cards typeface-5..12, author avatar typeface-4 reused in
  every meta row, about/footer image typeface-13). Keep one shared avatar
  seed so the author looks consistent.
- Icons: lucide Search / MessageCircle / Menu / X; social brand icons as
  inline SVG (lucide removed brand icons).
