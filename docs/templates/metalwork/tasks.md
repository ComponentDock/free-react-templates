# Metalwork (ColorLib Industrial) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-metalwork`.

## Design notes (replication findings)

- **Original:** ColorLib "Industrial" — steel fabrication / industrial
  company site (source: https://colorlib.com/wp/template/industrial/).
- **Preview analyzed:** https://preview.colorlib.com/theme/industrial/
  (HTTP 200, ~28 KB HTML). Live DOM + `css/style.css` (~57 KB,
  complete/readable) parsed for structure and tokens; screenshot
  `industrial-free-template.jpg` (1200x946, AVIF → PNG) reviewed visually:
  full-height welding-sparks hero photo under a dark top gradient, white
  uppercase "INDUSTRIAL" brand + nav links + search form, centered white
  circular play button, headline on a **solid orange `#fd5f00` highlight
  block**, white 20px subtext, slider arrows; below the fold a white
  features section ("We'll Handle Any Probles and Solve Them" [sic]) with
  orange icon cards around a center photo column.
- **Visual design:** bold industrial site. Brand orange `#fd5f00`
  (btn-primary, CTA band, text-primary icons, footer links, hero headline
  highlight) with hover `#ff7e31`; light surfaces `#f8f9fa`; white body.
  Body text in **Oxygen** 15px `#6c757d` line-height 1.8; headings in
  **Montserrat 900** black. Buttons: 13px uppercase letter-spacing .2em
  weight 900, 2px borders, sharp 0.25rem radius. Hero h1 50px weight 300
  uppercase white, entire headline wrapped in an orange highlight span
  (box-shadow 0.5em both sides). Dark navbar `#343a40` with a transparent
  underline search input. Sections padded 7em 0. Footer white with orange
  links; footer h3s 12px uppercase bold letter-spacing .1em.
- **Structure (1:1, section order, home page):**
  1. Navbar `nav.navbar.navbar-expand-lg.navbar-dark.bg-dark` (static):
     brand "Industrial" white; links HOME / ABOUT / PROJECTS / SERVICES
     (dropdown: Architectural Design, Interior, Building) / BLOG / CONTACT;
     right search form (icon + transparent underline input "Search...",
     44px, bottom border rgba(255,255,255,.3)). Mobile hamburger collapse.
  2. Hero slider `section.home-slider.owl-carousel` (2 slides): 100vh /
     min-height 700px bg image; `:before` dark gradient (black → transparent,
     500px, from top); centered: 60px white circle play button (hover 80px,
     Vimeo fancybox in the original — placeholder link here), h1 uppercase
     50px weight 300 white with orange highlight `<span>`, 20px white
     subtext; owl arrows + dots (bottom 100px).
     - Slide 1: "We Are Industrial Company"
     - Slide 2: "The Best Level of Excellence in Steel Fabrication"
  3. Features `section.section` (white): centered h2 "We'll Handle Any
     Probles and Solve Them" [sic → fix "Problems"]; 3-col row: center
     photo (`feature-img-bg` 400px, scaling frame hover zoom), left cards
     **Ducting Design** (easel) + **Stacks Design** (hammer), right cards
     **Tanks Design** (cube) + **Structural Design** (clipboard). Cards bg
     `#f8f9fa`, padding 30px, orange `display-4` icons, h3 1.2rem.
  4. Services row `section.section.bg-light`: 3 centered blocks — icon 50px
     orange + h3 + blurb: **Modern Design** (bell) · **Built With Passion**
     (heart) · **Fast Loading** (flash).
  5. About 1 `section.section.element-animate` (white): image left
     (`col-lg-7`), text right: h2 50px "Let's Build Together", 20px
     paragraph, `a.readmore` "Read More" (uppercase .9rem + arrow, hover
     padding-right 20→30px).
  6. About 2 `section.section.element-animate.bg-light`: mirrored (image
     right): h2 "We'll handle any intercate custom design" [sic → fix
     "intricate"], paragraph, Read More.
  7. Projects `section.section.border-t.pb-0` (border-top 2px #dee2e6):
     centered h2 "Projects" + lead; full-bleed `container-fluid` 3×2 grid
     (`row.no-gutters`, 6 `a.link-thumbnail` tiles): img + h3 + plus icon.
     Titles: Ducting Design in Colorado · Tanks Project In California ·
     Structural Design in New York · Stacks Design · Intercate Custom ·
     Banker Design. Hover: overlay rgba(0,0,0,.6), img scale 1.1, white
     18px h3 slides up, 30px plus icon.
  8. Testimonial `section.section.bg-light.block-11`: centered h2
     "Testimonial"; carousel of 4 white cards (max-w 700px, padding 40px):
     60px round avatar, name 18px weight 300 (John Smith / Joshua Darren),
     meta "Free-Template.co Client" #a6a6a6 (→ "Component Dock Client"),
     16px blockquote. Nav arrows centered below.
  9. Blog `section.section.blog` (white): centered h2 "Blog Posts" + lead;
     3 `media` cards (2-col): image 40% width (100% mobile), post-meta
     "Feb 26th, 2018" (12px uppercase #b3b3b3 ls .2em), h3 20px "How to
     handle any intercate custom design" [sic → fix], excerpt (card 1),
     Read More.
  10. CTA band `section.section.bg-primary` (orange `#fd5f00`): h2 white
      "Get Started With Industrial Free Template" + white lead left;
      `btn-outline-white px-4 py-3` "Download This Template" right (2px
      white border; hover → white bg black text).
  11. Footer `footer.site-footer` (white, 7em 0, border-top #eee): "About
      The Industrial" + paragraph + social icons (twitter/facebook/linkedin/
      instagram) · "Contact Info" (Address: 34 Street Name, City Name Here,
      United States · Telephone: +1 242 4942 290 · Email:
      info@yourdomain.com) · "Quick Links" (About, Terms of Use,
      Disclaimers, Contact). Links orange #fd5f00 → black hover. Centered
      copyright bar (Component Dock credit).
- **Tokens:** primary orange `#fd5f00`, hover `#ff7e31`, darks `#ca4c00`
  `#d75100` `#b14200`; light `#f8f9fa`; border `#dee2e6`; body Oxygen
  15px/1.8 `#6c757d`; headings Montserrat 900 `#000`; navbar `#343a40`,
  links rgba(255,255,255,.5→.75); hero h1 50px w300 uppercase white +
  orange span highlight; hero p 20px w300 white; `.btn` 13px uppercase
  ls .2em w900 border 2px radius .25rem; hero overlay gradient
  black→transparent; play btn 60px white circle; section padding 7em 0;
  footer h3 12px uppercase bold ls .1em.

## Task outline (for the implementer)

1. Scaffold `apps/metalwork` (copy simplest existing app; package
   `@free-react-templates/metalwork`; CNAME `metalwork.free.componentdock.com`;
   homepage `https://metalwork.free.componentdock.com`; run `npm install`
   at root so the lockfile registers the workspace; keep `injectUiSource()`
   in `vite.config.ts`).
2. `index.html`: title "Metalwork — Industrial Template"; Google Fonts
   `<link>` for Oxygen (400, 700) + Montserrat (300, 900).
3. `src/index.css` `@theme`: `--color-brand: #fd5f00; --color-brand-hover:
#ff7e31; --color-surface: #f8f9fa;` body font Oxygen, headings Montserrat.
4. Components (TDD, 100% coverage):
   - `Navbar.tsx` — dark bar, brand, links, Services dropdown, search
     input, mobile hamburger (`aria-expanded`).
   - `HeroSlider.tsx` — 2 slides, play button, orange-highlighted h1,
     subtext, prev/next + dots.
   - `Features.tsx` — heading + 4 feature cards + center photo.
   - `ServicesRow.tsx` — 3 icon blocks on `#f8f9fa`.
   - `AboutBlock.tsx` — reusable alternating image/text block + Read More
     (used twice with `reversed` prop).
   - `Projects.tsx` — heading + 6 tiles with hover overlay.
   - `Testimonials.tsx` — carousel of 4 cards.
   - `Blog.tsx` — 3 media cards.
   - `CtaBand.tsx` — orange band + outline-white button.
   - `Footer.tsx` — 3 columns + copyright (Component Dock credit).
5. Placeholder images: subject-critical dark slots pinned to verified picsum
   IDs (`id/495` dark industrial machinery for hero 1, `id/453` dark stage
   for hero 2 + about 1, `id/60` dark designer workspace for features
   center + about 2 — picsum has no welding/industrial photography, so
   dark moody scenes match the reference's dark-workshop aesthetic; rest
   are `picsum.photos/seed/metalwork-<n>/<w>/<h>`); icons from lucide-react;
   no colorlib references anywhere in `apps/`.
6. Gate: `bash scripts/verify-app.sh metalwork` (typecheck + lint + 100%
   coverage tests + build); commit `feat: Metalwork — Industrial template
(ColorLib Industrial)` on `feat/template-metalwork`; PR to main with
   source slug, preview URL, tokens, and diffs (typo fixes, placeholder
   video link, Component Dock credits); merge immediately.
