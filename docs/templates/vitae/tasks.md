# Vitae (ColorLib Me) — Tasks & Design Notes

> Recreation of ColorLib "Me" — free Bootstrap 4 personal CV website
> template (https://colorlib.com/wp/template/me/) under the NEW name
> **Vitae** (curriculum vitae — matches the personal-CV theme; single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-11), per the
> monorepo naming mandate (never reuse the ColorLib source name). Full
> spec: `openspec/specs/template-vitae/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Me" — free Bootstrap 4 personal CV website
  template (page `<title>` reads **"Me — Website Template by Colorlib"**).
  Listed in TEMPLATES.md under **Bootstrap (216)** line 446 with THREE
  IDENTICAL dup rows: **One Page (91)** line 2336, **Personal (53)** line
  2405, **Portfolio (89)** line 2526 (all `- [ ]`, nothing shipped) — when
  shipped, mark ALL FOUR rows `[x]` with the vitae surge URL. The
  recreation brands itself **Vitae**.
- **Preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/me/` — HTTP 200, 33.2 KB HTML +
  `css/style.css` 19.0 KB + `css/bootstrap.min.css` 121 KB (jquery-ui,
  owl.carousel, fancybox, datepicker, flaticon, aos, icomoon). Google
  Fonts cf-fonts blocks: **Arbutus Slab 400** + **Open Sans 300/400/700** —
  but Open Sans is NEVER applied (live computed styles: body/h1/p/btn/nav
  all resolve to "Arbutus Slab", serif). Load Arbutus Slab 400 only.
  Screenshot `me-free-template.jpg` (1200×946 AVIF, browser-verified via
  the live render): light hero, portrait of a smiling man in a sports
  jersey bleeding off the right edge on `#f8f9fa`, green pill "Portfolio"
  button, green "Me." logo centered in the nav.
- **Section order (1:1, verified from live DOM):**
  1. `header.site-navbar.py-4.js-sticky-header.site-navbar-target`
     (absolute, top 0, full width, z-index 1999) — row of three: LEFT
     `nav.site-navigation` (Home, Services, About), CENTER `h1.site-logo`
     "Me." (1.5rem, `#207561`), RIGHT nav (Portfolio, Client, Contact) +
     `d-lg-none` hamburger (`icon-menu`). Links Arbutus Slab `#000`,
     padding 5px 20px, hover `#207561`; desktop nav hidden below lg.
     Sticky (`.sticky-wrapper.is-sticky`): white bg,
     `box-shadow: 4px 0 20px -5px rgba(0,0,0,0.1)`, links `#000` (top
     state `rgba(0,0,0,0.7)`), py-4 → 10px. Mobile: 300px right slide-in
     white panel, close X 30px, links 20px.
  2. `div.site-blocks-cover.overlay.bg-light#home-section` — min-height
     600px / 100vh, `#f8f9fa`; overlay white 0 (0.5 <992px, z-2);
     `.text-intro` (z-2) col-lg-6: h1 "I'm Ben Carson" (3rem, Arbutus
     Slab, `#000`) + `p.lead` "I'm Web Developer Based on NY City" (1.3rem,
     `#1a1a1a`) + `a.btn.smoothscroll.btn-primary` "Portfolio";
     `.img-face` (z-1): absolute right -5% bottom 0, max-width 950px
     (right -25% <992px).
  3. `div.site-section#services-section` — white; centered title "My
     Services"; 4 `.service.d-flex.h-100` cards (col-md-6 mb-4):
     `.service-number` (flex 0 0 60px) > `span` 50×50 circle
     `border-radius: 50%` bg `#207561` white icon; `.service-about` h3
     1.2rem + lorem p. Card: white, padding 30px, shadow `0 1px 2px
rgba(0,0,0,0.1)`, top 0; hover shadow `0 8px 50px -5px
rgba(0,0,0,0.1)` + top -2px.
  4. `div.site-section#about-section` — white; LEFT title "About Me";
     `col-lg-4.order-1.order-lg-2` `.bg-light.pt-5` box with portrait
     img; `col-lg-4.order-2.order-lg-1` 2 lorem p; `col-lg-4.order-3` 2 p
     - "Contact Me" btn-primary.
  5. `section.site-section.block__62272#portfolio-section` — white;
     centered title "My Portfolio"; `#posts.row.no-gutter` NINE `.item`
     cells (`col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4`) with
     categories web (5) / brand (2) / design (2): `a.item-wrap.fancybox`
     > `img.img-fluid`; hover: img scale(1.05), overlay `rgba(0,0,0,0.4)`
     > fade-in, centered `span.icon-search2` white 1.7rem scale 0→1;
     > radius 4px. **NO filter tab row in the DOM** (`.filters` CSS exists
     > but unused — do NOT add filter buttons).
  6. `section.site-section.bg-dark` — bg `#343a40`; centered
     `h2.section-title.text-center.text-white` "testimonials" (lowercase;
     underline `#fff` centered); `.owl-carousel.slide-one-item` 3 slides:
     blockquote (max-w 700px, italic, white, 1.2rem) + cite "— Jean
     Smith" / "— Carl Spencer" / "— Ryan Peters" (1rem,
     `rgba(255,255,255,0.5)`, margin-top 50px); dots 7×7 idle
     `rgba(255,255,255,0.3)` active `#fff`.
  7. `section.site-section#clients-section` — white; centered title
     "Clients"; SIX logo imgs (`col-6 col-sm-6 col-md-4 col-lg-4
text-center`, img-fluid).
  8. `section.site-section#contact-section` — white; centered title
     "Contact Form"; `form.form`: First name + Last name (col-6 each),
     Email address (col-12), "Subject of the message" (col-12), textarea
     10 rows "Type your message here.." (col-12), submit `input.btn
.btn-primary` value "Send Message" (col-md-6). Underline inputs:
     `.form .form-control` border none radius 0 `border-bottom: 1px solid
#eee`; focus `border-color: #000`.
  9. `footer.site-section.bg-light.footer` — bg `#f8f9fa`, .9rem; 4 cols:
     "Me Address" (title 1.1rem mb-30px + "203 Fake St. Mountain View,
     San Francisco, California, USA"), middle (col-md-5 mx-auto → 3 ×
     col-lg-4): "Services" / "Resources" / "Links" each 3 links (Web App,
     Graphic, Branding), "Follow Me": FIVE **plain** social icons
     (twitter, facebook, instagram, dribbble, linkedin — `.social-circle`
     class has NO circle CSS; verified live: transparent, radius 0,
     `#888888`); footer links `#888888` → hover `#000`; centered
     copyright strip "Copyright © <year> All rights reserved | This
     template is made with ♥ by Colorlib" (→ re-brand to Vitae).
- **Design tokens (from `css/style.css` + live computed styles):**
  - Brand green `#207561` — btn-primary bg/border, logo link, nav hover +
    dropdown active, section-title 2px×50px underline, service icon
    circle bg, form-control focus border, dropdown border-top.
  - Black `#000` — headings (Arbutus Slab), btn-primary hover bg (button
    turns BLACK), contact input focus border, footer link hover,
    ::selection bg.
  - Greys: body `#666666` (w400 lh 1.7); lead `#1a1a1a`; footer links
    `#888888`; mobile links `#212529`; sticky-top nav `rgba(0,0,0,0.7)`.
  - Backgrounds: light `#f8f9fa` (hero, about image box, footer); dark
    `#343a40` (testimonials); white sections.
  - Buttons: 16px, `border-radius: 30px` (pill), padding 10px 30px, no
    focus shadow; primary `#207561` → hover `#000`.
  - Form control: height 43px, radius 30px, Arbutus Slab, focus `#207561`;
    contact variant: underline `border-bottom: 1px solid #eee` focus `#000`.
  - Section title: padding-bottom 20px + 2px underline 50px `#207561`
    (left by default, centered variant centered; `#fff` on dark).
  - Section padding: 2.5em 0 (7em ≥768px).
  - Hero: min-height 600px/100vh, `#f8f9fa`; h1 3rem; lead 1.3rem; img-face
    right -5% bottom 0 max-w 950px.
  - Portfolio hover: overlay `rgba(0,0,0,0.4)` + white search icon 1.7rem
    scale 0→1; img scale 1.05.
  - Testimonials: blockquote max-w 700px italic white 1.2rem; cite
    `rgba(255,255,255,0.5)` mt 50px; dots 7px idle 0.3 active #fff.
  - Sticky header: white + `4px 0 20px -5px rgba(0,0,0,0.1)` shadow.
  - Font: **Arbutus Slab 400 everywhere** (headings, body, inputs, nav,
    buttons). Open Sans loaded but unused — do NOT load it.
- **⚠ KEY TRAPS:**
  - TEMPLATES.md has FOUR "Me" rows (Bootstrap line 446, One Page line
    2336, Personal line 2405, Portfolio line 2526) — mark ALL FOUR `[x]`
    at ship time or the nightly dup-row scan flags an orphan.
  - The portfolio section has NO filter tabs in the source DOM — `.filters`
    CSS is dead code. Do NOT invent filter buttons.
  - The social icons are PLAIN (no circles) despite the `.social-circle`
    class name — verified live (transparent bg, radius 0). Do NOT draw
    circles.
  - The WHOLE template is Arbutus Slab serif (computed-style verified) —
    there is no sans-serif body font. Load only Arbutus Slab 400.
  - Button hover turns BLACK (`#000`), not a darker green.
  - "testimonials" title is lowercase in the source; keep lowercase (or
    capitalize — cosmetic, but the green underline + white text are the
    identity).
  - Contact inputs are underline-only — the global `.form-control` pill
    radius (30px) does NOT apply to the contact form (`.form .form-control`
    overrides to radius 0 + bottom border).
  - Nav links are same-page anchors (`#home-section`, `#services-section`,
    `#about-section`, `#portfolio-section`, `#clients-section`,
    `#contact-section`) — smooth-scroll anchors, NEVER extra pages.
  - The hero `.overlay:before` is transparent on desktop and a 0.5 white
    wash below 992px — subtle, but mobile legibility depends on it.
  - Sticky behavior: at the very top the header is transparent over the
    light hero; once sticky it gets a white bg + shadow + black links.
- **Recreation decisions:** Tailwind grid (no Bootstrap); logo =
  typographic "Vitae." in brand green (Arbutus Slab 1.5rem); portraits +
  portfolio images + client logos = seeded picsum
  (`picsum.photos/seed/vitae-<n>/<w>/<h>`); service icons from lucide-react
  (icon-style → PenTool/Sparkles, icon-business_center → Briefcase,
  icon-desktop_windows → Monitor, icon-layers → Layers) in 50px `#207561`
  circles; portfolio hover icon → lucide `Search`; brand social icons
  (twitter/facebook/instagram/dribbble/linkedin) = inline SVG simple-icons
  paths (lucide removed brand icons), plain, no circles; testimonial
  carousel = 3 slides in a row or lightweight auto-rotate — no owl;
  contact form validates (first, last, valid email, subject, message) →
  success message (pure exported function for tests); sticky header via
  scroll listener toggling white bg + shadow + shrink; document title
  "Vitae — Personal CV Template"; brand "Me"/"Colorlib" → "Vitae".

## Task outline

- [ ] Scaffold `apps/vitae` (copy the simplest existing app, rename
      package to `@free-react-templates/vitae`, register workspace in
      root package.json — lockfile via `npm install` at the root)
- [ ] `@theme` tokens: `brand` `#207561`, `ink` `#000`, `body-text`
      `#666666`, `lead-text` `#1a1a1a`, `footer-text` `#888888`,
      `light-bg` `#f8f9fa`, `dark-bg` `#343a40`, `line` `#eee`
- [ ] Arbutus Slab 400 `<link>` in `index.html` (ONLY this font);
      document title "Vitae — Personal CV Template"
- [ ] Header (absolute 3-part: left nav / center green "Vitae." logo /
      right nav; hover `#207561`; sticky scroll state → white bg +
      shadow + black links; mobile hamburger + 300px slide-in panel)
- [ ] Hero (100vh `#f8f9fa`; "I'm Ben Carson" 3rem + lead `#1a1a1a` +
      green pill "Portfolio" → hover black; portrait absolute right -5%
      bottom 0 max-w 950px, -25% on mobile)
- [ ] Services (centered title + 2-col grid, 4 cards: 50px `#207561`
      circle icon + 1.2rem heading + paragraph; hover lift -2px + deep
      shadow)
- [ ] About Me (left title; light-boxed portrait right, reorders first on
      mobile; 2 text cols; "Contact Me" pill)
- [ ] Portfolio (centered title + 9-image responsive grid, NO filter tabs;
      hover scale 1.05 + `rgba(0,0,0,0.4)` overlay + white Search icon
      scale-in)
- [ ] Testimonials (`#343a40`; centered white title; 3 slides: italic
      white quote + `rgba(255,255,255,0.5)` cite + white dots)
- [ ] Clients (centered title + 6 logo images, responsive grid)
- [ ] Contact form (underline inputs First/Last/Email/Subject/Message +
      green pill "Send Message"; validation + success state)
- [ ] Footer (`#f8f9fa`; address + Services/Resources/Links lists +
      "Follow Me" 5 plain inline-SVG social icons + centered copyright
      strip re-branded to Vitae)
- [ ] Mobile stacking (single column <768px; hero portrait -25%; about
      photo first)
- [ ] Tests for every section (100% coverage, TDD), verify with
      `scripts/verify-app.sh vitae`
- [ ] PR: source template + preview URL + tokens + diffs (renames,
      picsum placeholders, re-brand to Vitae); mark ALL FOUR TEMPLATES.md
      rows `[x]` (lines 446, 2336, 2405, 2526) + surge URL +
      `npm run readme:status`
