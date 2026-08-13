# Growly (ColorLib Repeat) — Tasks & Design Notes

> Recreation of ColorLib "Repeat" — free Bootstrap 5 business/agency
> website template (https://colorlib.com/wp/template/repeat/) under the NEW
> name **Growly** ("grow" — the template's core promise "We are here to
> help grow your business" — plus the friendly "-ly" family suffix: Wingly,
> Drivly, Nestly, Bookly, Coastly, Restly, Sleeply, Dozely, Soarly,
> Lodgely, Sneakly, Taply, Lotly; single lowercase word, no collision with
> `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-14),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Repeat" — business/agency one-pager, Bootstrap 5
  based (bootstrap v5.0.0-beta1 embedded in `css/style.css` + tiny-slider
  - aos + icomoon/flaticon icon fonts). TEMPLATES.md category:
    **Bootstrap 5 (89)**, first occurrence at line 620 (`- [ ]`, source NOT
    shipped anywhere). DUP-ROW TRAP: the `repeat` slug also appears at line
    1151 (**Business (365)**) — both `- [ ]` rows of the SAME template; ONE
    implementation covers both rows (mark all `[x]` with the same surge URL
    at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/repeat/` — HTTP 200, ~21 KB HTML
  (REACHABLE). Custom CSS in `css/style.css` (~58 KB, includes embedded
  Bootstrap) + tiny-slider + aos + icomoon/flaticon icon fonts. Screenshot
  `repeat-free-template.jpg` (1200×946, AVIF→PNG, viewed in browser)
  matches the live DOM for the visible top half (light hero w/ workspace
  photo + coral pill CTA → deep-navy overlay about section).
- **Visual design:** clean, modern, minimalist corporate/agency one-pager.
  Flat design, generous white space. Light hero: desaturated high-key
  workspace photo behind centered navy Comfortaa headline "We are pretty
  Awesome", small grey lorem line, ONE coral/salmon pill CTA "Our
  services"; navy "Repeat" logo top-left, dark links top-right. Below: a
  FULL-WIDTH DEEP-NAVY section (About) with coral eyebrow "About us",
  white headline "We are here to help grow your business", laptop photo
  ("WORK HARD ANYWHERE") left, three columns of translucent-white lorem
  text right with a coral vertical accent line. Then white Services
  section, grey stat cards, media section, light-grey footer.
- **Design tokens (extracted from `css/style.css`):**
  - Brand navy `#003a70`: `.heading`, `.logo`, hero h1, stat numbers
    `.num`; overlay + services panel as `rgba(0, 58, 112, 0.9)`
    (`.bg-img-section.overlay:before`, `.box-slider-wrap`).
  - Brand coral `#ff8e71`: `.btn-primary` bg, `.subheading`, `.v-line`
    accents, icons; hover `#ff9f86` / border `#ff997f`.
  - Fonts: headings/logo/stat numbers `'Comfortaa', sans-serif`
    (Google Fonts, weights 400/700); body `'Roboto', sans-serif`
    (400/500), 14px.
  - Buttons: pill `border-radius: 30px`, `padding: 10px 30px`,
    `font-size: 14px`; `.btn-primary` coral bg + white text (markup adds
    `text-white`); focus ring `rgba(217, 121, 96, 0.5)`.
  - Section rhythm: `.section { padding-top: 7rem; padding-bottom: 7rem }`
    (stats `py-0`); hero `padding: 7rem 0 22rem` (big overlap gap).
  - `.box-slider-wrap`: bg `rgba(0,58,112,0.9)`, padding 50px 100px,
    min-height 460px; h3 white 20px; paragraphs `rgba(255,255,255,0.7)`.
  - `.stat-counter`: bg `#fafafa`, radius 7px, padding 40px, centered;
    `.num` 50px Comfortaa `#003a70`; `.caption` `#7a7a7a`.
  - Footer: bg `#efefef`, 14px, text `#888`, links `#777` (hover `#000`),
    padding 70px 0.
  - `.v-line`: 2px coral `#ff8e71` vertical accent (250px in about,
    115px in services intro).
- **Section order (1:1, verified from live DOM):**
  1. Navbar `nav.site-nav` (absolute, transparent over hero): logo
     "Repeat" left (Comfortaa 24px 700 navy); links right: Home (active)
     · Services (dropdown: Menu One · Menu Two · Dropdown → Sub Menu
     One/Two/Three) · Pricing · About · Contact Us; hamburger → mobile
     slide-in panel.
  2. Hero `div.hero` (bg `images/hero_1.jpg`, `padding: 7rem 0 22rem`):
     centered `col-lg-7`: h1 "We are pretty **Awesome**" (typed-words
     effect, navy) + `w-75 mx-auto` lorem + coral pill "Our services".
  3. About `div.section.sec-about.overlay.bg-img-section` (bg photo +
     `rgba(0,58,112,0.9)` overlay): LEFT `col-lg-6`: subheading "About us"
     (coral) + h2 "We are here to help grow your business" (white) +
     `.img-wrap` `about_4.jpg` (laptop; `margin-bottom: -150px` overlap);
     RIGHT `col-lg-4.mx-auto`: `.intro-box` w/ coral `.v-line` (2×250px)
     - THREE `text-white-50` paragraphs.
  4. Services `div.section.sec-services` (white): intro `col-lg-4
offset-md-7` (v-line 2×115px + lorem) → heading row: h2 "What We
     Offer" (navy 700) + `p.lead` → content `row.g-0`: LEFT `col-lg-6`
     `about_1.jpg`; RIGHT `col-lg-6` `.box-slider-wrap` (navy panel,
     50px 100px padding, min-height 460px) with 4 `.service` items: Web
     Design · Grapihc Design (sic — fix to "Graphic Design") · Web/Mobile
     Application · Brand Identity (white h3 20px + 2 translucent-white
     paragraphs each).
  5. Stats `div.section.py-0.sec-stats.section-counter` (white):
     centered h2 "Stats"; `row.g-2` of 4 `.stat-counter` cards
     (`col-6 col-lg-3`, alternating `mt-lg-5`): 230 Projects · 229 Happy
     Clients · 8 Leadership · 15 Years Experience (icon + 50px navy
     Comfortaa number + `#7a7a7a` caption on `#fafafa` card).
  6. Media `div.section.sec-media` (white): `row.g-5 justify-content-
around`: LEFT `col-lg-4`: h2 "Get anything done in one place" +
     lorem + "Our services" pill; RIGHT `col-lg-6` `.img-wrap`: `img-1`
     `about_2.jpg` + `img-2` `about_3.jpg` (absolute 300px, 4px white
     border, `translateX(-30%) translateY(30%)` overlap).
  7. Footer `div.site-footer` (#efefef, 14px, padding 70px 0): 3 widgets
     — Contact (address "43 Raymouth Rd. Baltemoer, London 3910" + 2×
     tel "+1(123)-456-7890" + mailto info@mydomain.com) · Sources (12
     links: About us, Services, Vision, Mission, Terms, Privacy, Partners,
     Business, Careers, Blog, FAQ, Creative) · Links (Our Vision, About
     us, Contact us + 6 social icons: instagram, twitter, facebook,
     linkedin, pinterest, dribbble); bottom bar: "Copyright © <year> All
     rights reserved | made with ♥ by <credit>" — Colorlib credit →
     Component Dock link (mandatory).

## Implementation tasks (TDD, in order)

- [ ] Scaffold: copy simplest existing app → `apps/growly`, rename package
      `@free-react-templates/growly`, register workspace
      (`npm install --package-lock-only`), `public/CNAME` =
      `growly.free.componentdock.com`, homepage
      `https://growly.free.componentdock.com`; footer MUST link
      `https://www.componentdock.com/`
- [ ] `@theme` tokens: `--color-navy: #003a70`, `--color-coral: #ff8e71`
      (hover `#ff9f86`); body font Roboto + headings Comfortaa via Google
      Fonts `<link>` in `index.html`
- [ ] Navbar (absolute/transparent, logo, 5 links + Services dropdown,
      hamburger → mobile panel)
- [ ] Hero (bg workspace photo, navy h1 w/ typed "Awesome" accent,
      subtext, coral pill CTA)
- [ ] About (navy overlay section, eyebrow + white h2 + overlapping image + intro box w/ v-line + 3 paragraphs)
- [ ] Services (intro w/ v-line, "What We Offer" + lead, image left,
      navy box-slider panel w/ 4 service items)
- [ ] Stats (4 staggered stat cards; numbers static; icons from
      lucide-react — probe exports first)
- [ ] Media (headline + paragraph + CTA left, 2 overlapping images right)
- [ ] Footer (3 widget columns + social icons as inline SVG + copyright
      bar with Component Dock credit)
- [ ] Placeholder images: `picsum.photos/seed/growly-<n>/<w>/<h>` —
      workspace/laptop subject for hero/about/media, screen seeds before
      pinning (seed-screening method: bright/blue-dominant pixel metric +
      browser_vision on top candidates)
- [ ] `scripts/verify-app.sh growly` green (typecheck + lint + 100%
      coverage + build); spec:validate; PR with source/preview/tokens
      noted; bookkeeping: both `- [ ]` rows (lines ~620, ~1151) → `[x]` +
      same surge URL + `npm run readme:status`
