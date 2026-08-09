# Lensly (ColorLib Capture 2) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-lensly` by an implementer stream.

## Design notes

- **Original:** ColorLib "Capture 2" — free wedding & event photographer
  website template. Source: https://colorlib.com/wp/template/capture-2/.
  New name: **lensly** (photography "lens"; single word, no collision with
  `ls apps/` or existing spec folders). Capture 2 appears once in TEMPLATES.md
  (line 355, Bootstrap section, first unchecked without a prep — the claim).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/capture2/`
  (HTTP 200, ~18KB) — NOTE the TEMPLATES.md slug `capture-2` returns HTTP 404
  on the preview host; the real preview path is `/theme/capture2/`. The ColorLib
  template page links to `capture2`. Stylesheets: `css/style.css` (~24KB
  custom) + `css/bootstrap.min.css` (Bootstrap 4.3.1 re-themed:
  `--primary: #f4ad2d`, `--yellow: #f4ad2d`) + owl.carousel, fancybox, aos,
  flaticon/icomoon fonts. Google Fonts: `Muli:400,700|Hepta+Slab:400,700`
  (Muli is now **Mulish** on Google Fonts — same family, use current name).
  Screenshot `capture2-free-template.jpg` (1200×946) confirms: transparent
  dark navbar with white "CAPTURE" logo + Home/About/Photography/Event/Contact,
  full-height photo hero (kissing couple) with dark overlay, white eyebrow
  "Hey there! I'm Craig Smith", **amber serif headline** "Wedding & Event
  Photographer", amber pill "Contact Me" button, white "See My Works" photo
  grid, dark About Me section, black footer.
- **Structure observed (1:1):**
  1. `header.site-navbar.site-navbar-target` — absolute, top 0, width 100%,
     padding 1rem, `background: rgba(0,0,0,0.5)` (desktop padding 3rem top/
     bottom); on scroll → `background: #fff` + `box-shadow: 4px 0 20px -5px
rgba(0,0,0,0.2)`, links black, logo amber. `div.site-logo`: "Capture"
     uppercase white (amber scrolled). Nav links **Home, About, Photography,
     Event, Contact** (white → black; hover/active amber #f4ad2d). Mobile:
     `div.site-mobile-menu` slide-in with close button.
  2. `div.ftco-blocks-cover-1 > div.site-section-cover.overlay` — hero bg
     `images/hero_1.jpg` cover, `:before` overlay rgba(0,0,0,0.3), row height
     `calc(100vh - 196px)` / min-height 677px; left `col-md-7`: white
     "Hey there! I'm Craig Smith", `h1.mb-3.text-primary` "Wedding & Event
     Photographer" (Hepta Slab 900, 3rem / 2rem mobile, amber via re-themed
     `--primary`), white 18px paragraph, `a.btn.btn-primary` "Contact Me"
     (bg/border #f4ad2d, text #212529, ~4px radius).
  3. `div.site-section` (white) — **My Works**: centered header (col-md-7
     text-center mx-auto): amber span "My Works" + `h2.serif` "See My
     Works". Grid `div.row.no-gutter` of **12** `div.item` tiles
     (`col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4`, classes web|brand|
     design): radius 4px; hover `:after` overlay rgba(0,0,0,0.4) + image
     scale + centered label/icon fades in.
  4. `div.site-section.bg-black.about-me` — **About Me**: `div.row
align-items-center`: left `col-md-6` image; right `col-md-5 ml-auto`:
     h3 "About Me" (white) + two lorem paragraphs + `div.social_29128.white
mt-5` — 50×50px circles, bg rgba(255,255,255,0.2), amber icons, hover
     bg #fff.
  5. `div.site-section` (white) — **See The Video**: centered header (amber
     span "See The Video" + h2.serif "See The Video"); `div.row
justify-content-center > div.col-md-8`: image block with overlay
     rgba(0,0,0,0.2) + `btn-video_38929` circular play: 70×70px, 2px white
     border, centered white play icon → video modal.
  6. `div.site-section.bg-light` (bg #f8f9fa) — **Testimonials**: centered
     header (amber span "Testimonials" + h2.serif "What Client Says"); 3
     `div.col-lg-4.col-md-6` cards: **The Best Photographer / Easy To Work
     With / Professional Photographer** + quote paragraph.
  7. `div.site-section.bg-white` — **News / Events**: centered header (amber
     span "News" + h2.serif "Events"); 3 `div.col-lg-4.col-md-6.mb-4`
     `div.post-entry-1.h-100` cards: image + `div.post-entry-1-contents`
     (bg #fff, padding 20px): meta "July 17, 2019 by Admin" (#ccc), h2 22px
     title link (black → amber hover), excerpt.
  8. `footer.site-footer` (bg #000, padding 4–8em) — row: `col-lg-3`:
     h2.footer-heading "About Me" + lorem; `col-lg-8.ml-auto > row`:
     `col-lg-6.ml-auto` h2 "Quick Links" + links About Us, Testimonials,
     Terms of Service, Privacy, Contact Us (rgba(255,255,255,0.5) → white,
     10px gap); `col-lg-6` h2 "Newsletter" + text + email input + amber
     subscribe button. Bottom bar: `row.pt-5.mt-5.text-center >
div.border-top.pt-5` (border rgba(255,255,255,0.1)): copyright with
     repo-standard credit (replace Colorlib credit).
- **Design tokens extracted from `css/style.css` + re-themed Bootstrap:**
  - Brand amber **#f4ad2d** (`--primary`): btn-primary, text-primary (hero
    h1), eyebrow spans, nav hover/active, scrolled logo/links, form-control
    focus border, blog title hover, active carousel dot, social icons on
    dark.
  - Black **#000**: about-me bg, footer bg, blog title color.
  - Light gray **#f8f9fa** (bg-light); meta **#ccc**; body #666/#212529;
    btn text #212529.
  - Overlays: rgba(0,0,0,.3) hero, .4 item hover, .2 video, .5 navbar;
    footer links rgba(255,255,255,.5), border rgba(255,255,255,.1).
  - Fonts: **Hepta Slab** serif headings (hero 900/3rem; `.serif` on section
    h2s), **Muli/Mulish** sans body+nav. Google Fonts `<link>`.
  - Buttons: Bootstrap 4 style — bg #f4ad2d, text #212529, radius ~4px.
  - Section padding: 2.5em → 5em → 7rem responsive (`py-16 md:py-24 lg:py-28`
    rhythm). Hero full-height min 677px.
  - Social circles 50px, radius 50%, bg rgba(255,255,255,0.2) on dark, amber
    icons, hover white.
- **Recreation decisions:** navbar = transparent dark over hero → white +
  shadow on scroll (logo + active amber, links black), hamburger → slide-in
  menu; hero = picsum wedding photo + overlay, white eyebrow, amber serif h1,
  white paragraph, amber "Contact Me"; works = 12-tile responsive grid with
  hover overlay + zoom; about = black section, image + heading + 2 paragraphs
  - 4 circular social buttons (lucide Facebook/Twitter/Instagram/Linkedin);
    video = centered 70px circular white-bordered play button → modal;
    testimonials = 3 cards on #f8f9fa; events = 3 post cards (image, meta
    "July 17, 2019 by Admin", title, excerpt); footer = black, About Me +
    Quick Links + Newsletter (email input + amber subscribe) + bottom bar with
    repo-standard credit; images `picsum.photos/seed/lensly-N/w/h`; fonts
    Mulish + Hepta Slab via Google Fonts link; icons via lucide-react.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold app: copy simplest existing app → `apps/lensly`, rename
      package to `@free-react-templates/lensly`, register workspace in
      package-lock.json (root `npm install` before committing), keep
      `injectUiSource()` in vite.config.ts.
- [ ] `src/index.css`: `@theme` tokens — brand amber #f4ad2d, black #000,
      light gray #f8f9fa, white; font links for Mulish (body) + Hepta Slab
      (headings) in index.html.
- [ ] Components (order of composition in App.tsx):
      Navbar (transparent-over-hero → white-on-scroll, mobile slide-in menu)
      → Hero (eyebrow + amber serif h1 + CTA) → Works (12-tile grid, hover
      overlay + zoom) → About (black, image + text + social circles) →
      Video (play button + modal) → Testimonials (3 cards) → Events (3 post
      cards) → Footer (3 columns + newsletter + bottom bar).
- [ ] Navbar scroll state: track scrollY (or IntersectionObserver) to swap
      transparent-dark ↔ white classes; keep testable.
- [ ] Works grid: 12 tiles from an array with `web|brand|design` tags;
      hover overlay + scale on focus/hover (group-hover utilities).
- [ ] Video modal: open on play click, close control, placeholder video
      source (or lightbox on a picsum image).
- [ ] Footer newsletter input + amber subscribe button (form may be
      presentational or lightly validated per conventions).
- [ ] TDD: spec scenarios → tests → implementation, 100% coverage.
- [ ] Run `npm run verify:app -- lensly` (typecheck + lint + vitest 100% +
      build).
- [ ] PR: source Capture 2, preview URL (use `/theme/capture2/`), tokens,
      renames; squash-merge immediately; then TEMPLATES.md `[~]`→`[x]` +
      surge URL + `npm run readme:status`.
