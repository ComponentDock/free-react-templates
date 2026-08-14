# Fiduciary (ColorLib Unioncorp) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-fiduciary/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Unioncorp" — free Bootstrap 5 finance &
  consultation website template (source: https://colorlib.com/wp/template/
  unioncorp/; page title "Unioncorp - Finance & Consultation"; listed THREE
  times in TEMPLATES.md — line 632 [Bootstrap 5], line 1395 [Consulting],
  line 1763 [Finance], all `- [ ]`, same slug → implement ONE app, mark ALL
  THREE rows `[x]` at bookkeeping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unioncorp/ (HTTP
  200, 49.9KB HTML + `css/style.min.css` 257KB (Bootstrap 5 + custom theme)
  - flaticon.css + tiny-slider.css + Poppins 300–700 + font-awesome 7.0.1,
    extracted 2026-08-14 during prep). Screenshot
    `unioncorp-colorlib-template.jpg` (AVIF — served by Colorlib as `.jpg`;
    convert to PNG and view in the browser).
- **Visual design:** clean corporate finance aesthetic — dark-navy topbar
  (#052f48) with contact info + social squares; white header with uppercase
  black wordmark (blue segment) + nav; full-bleed hero photo of business
  professionals under a dark-blue overlay with a 60px white headline (one
  word in blue), paragraph, and a large white "Get Started" button; 2×2
  service-card grid (one card inverted solid blue) beside an about text
  block; blue (#4f86f9) is the single strong accent across buttons, icons,
  overlays, and the footer socials; green #3bd381 appears only as gallery
  hover icons and topbar accents; white / #f9faff alternating section
  backgrounds; blue-overlaid photo bands for stats and the closing CTA;
  dark footer with black overlay.
- **Palette (CSS-verified):** primary blue **#4f86f9** (brand segment, active
  nav, btn-primary, icon circles/plaques, .services.active card bg, counter
  overlay .9, intro overlay .8, staff position, footer socials, blog hover,
  slider dot active); secondary green **#3bd381** (gallery hover icon, topbar
  accent); body bg **#f9faff**; body text **#8c8c8c** (16px/1.8); topbar navy
  **#052f48**; hero overlay **#052c43** (opacity .5); icon plaque **#e3ecfe**;
  staff ring **#f8f9fa**; headings/ink **#000**; footer overlay black .8;
  subheading rgba(0,0,0,.3).
- **Fonts:** **Poppins** 300–700 only (body + headings). Google Fonts
  `<link>` in index.html.
- **Buttons:** `.btn` radius = Bootstrap .375rem (≈6px). `.btn-primary`
  solid #4f86f9 / white text / 1px border, hover = transparent + blue text.
  `.btn-white` white bg / 1px white border / #4f86f9 text, hover inverts.
  Hero + intro CTAs are large `.btn-white` (py-3/4 px-4/5); "Learn More" is
  `.btn-primary py-3 px-4`.
- **Layout:** `.ftco-section` padding 8em 0; counter + intro bands 5em 0;
  footer 7em 0 0. About section = `row.g-lg-5` with text col
  (order-lg-last → right on desktop) + 4-card col (2×2 `col-md-6`
  services-wrap). Services = `row.justify-content-center` of 8 `col-md-3`
  flow-wrap plaques (130×110 white, radius 4, notch triangle, 70px blue
  icon). Gallery items 340px tall, hover overlay + 40px green corner icon.
  Counters 44px/700 white letter-spacing 5px + 14px/700 uppercase captions.
  Staff 200px circular photos (10px #f8f9fa ring), card padding
  110px 30px 30px, margin-top -100px, position 14px uppercase #4f86f9.
  Testimony cards padding 30px radius 4 with 40px #4f86f9 quote circle
  (top -20px left 30px). Blog cards white radius 4, text padding 30px,
  heading 20px/500, meta 12px uppercase.
- **Responsive:** navbar collapses below lg (toggler "Menu" + bars icon,
  mobile socials inside the collapse); services 4-col → 2/1-col; hero h1
  60px → 40px; stats 4-col → 2-col; staff/blog/testimonials stack to
  1-col.

## Section order (1:1, LIVE DOM — comments stripped)

1. **Top bar** `div.top-wrap` (bg #052f48): `div.con` blocks — phone icon
   - **"Call Us: +2 392 3929 210"**, map icon + **"Location: San
     Francisco, California, USA"** (14px rgba(255,255,255,.6)); right:
     `p.ftco-social` — four 44px square #4f86f9 links (white 16px icons:
     x-twitter, facebook, google, instagram) + dark-mode toggle button
     (moon, aria-label "Toggle dark mode").
2. **Navbar** `nav.navbar.navbar-expand-lg.ftco-navbar-light` (white,
   absolute, top 44px, z-index 3): `a.navbar-brand` **"Union<small>corp.
   </small>"** (27px/800 uppercase black, small segment #4f86f9) + span
   **"Finance & Consultation"**; toggler **"Menu"** (fa-bars, uppercase
   16px); `ul.navbar-nav.ms-auto` — **Home** (active, #4f86f9), About,
   Services, Work, Pricing, Blog, Contact (15px, padding 1.7rem 25px,
   rgba(0,0,0,.8)); mobile socials (X, FB, IG + dark toggle) in the
   collapse.
3. **Hero slider** `section.slider-hero` (100vh, Tiny Slider): 2 `div.work`
   slides (bg images bg_1.webp / bg_2.webp — business-team photos, overlay
   #052c43 opacity .5):
   - Slide 1: h1 **"We're Always Here To Give Financial Help!"** (60px/400
     white lh 1.2; 40px small screens) + lorem p + `a.btn.btn-white.p-4.
py-3` **"Get Started"**.
   - Slide 2: h1 **"Build Your Financial Plan With Our Specialists"** with
     `<span>` **"Financial"** in #4f86f9 + same p + button.
   - `div.tns-nav` — 10px round dots (#ddd, active #4f86f9), centered
     bottom 60px.
4. **About + services grid** `section.ftco-section` > `div.row.g-lg-5`:
   - RIGHT col `col-lg-6.order-lg-last.heading-section`: `span.subheading`
     **"About Union Corporation"** (13px uppercase rgba(0,0,0,.3)) + h2
     **"More than 40M+ Trusted Our Financial & Consultation Institution"**
     (38px/500 lh 1.4) + lorem p + `a.btn.btn-primary.py-3.px-4`
     **"Learn More"**.
   - LEFT col `col-lg-6` > `div.row`: four `col-md-6.services-wrap`
     (`.services` padding 40px, radius 5, shadow 0 5px 25px -2px
     rgba(0,0,0,.03); 64px #e3ecfe icon circle + 40px blue flaticon; h2
     20px/500): **Professional Consultants** · **Comprehensive Services**
     (`.active` → solid #4f86f9 bg, white text/icon) · **A Culture that
     Delivers** · **Industry Experience**.
5. **Image section** `section.ftco-section.ftco-image.img` (bg_4.webp,
   parallax): eyebrow **"About Union Corporation"** + h2 **"Quality Makes
   the Belief for Customers"** (white) + lorem p + "Watch Video" pulsing
   80px circular play icon (base rgba(255,255,255,.15), hover #4f86f9,
   pulse 2s).
6. **Services list** `section.ftco-section.bg-light` (#f9faff): centered
   heading — `span.subheading` **"Services"** + h2 **"Our Exclusive
   Services We Offer For You"**; 8 `col-md-3.text-center` flow-wrap items
   (`div.icon` 130×110 white plaque radius 4 + shadow + white notch
   triangle, 70px blue flaticon; h2 24px/500 + lorem p): **Financial
   Planning** (flaticon-accounting), **Investments Management**, **Business
   Loan**, **Taxes Consulting**, **Insurance Consulting**, **Retirement
   Planning**, **Risk Management**, **Technology Consulting**.
7. **Case studies** `section.ftco-gallery.ftco-no-pb.ftco-section`:
   centered heading — eyebrow **"Case Studies"** + h2 **"We Take Every
   Case Studies Very Seriously"**; 4 `div.gallery-wrap` (340px tall bg
   photos): hover → black `:after` overlay, white label **"Business
   Finance Consulting"** (24px/500) fades in + 40×40 radius-4 #3bd381 icon
   (white) top-right fades in.
8. **Statistics band** `section.ftco-section-counter.img` (bg_3.webp +
   #4f86f9 overlay .9, padding 5em 0): eyebrow **"Great Reviews for our
   services"** + h2 **"Technical Statistics"** (white); 4 counters
   (`div.counter-wrap-2`, number 44px/700 white letter-spacing 5px +
   caption 14px/700 uppercase rgba(255,255,255,.8)): **60** Year of
   Experienced · **9200** Satisfied Customers · **5800** Project Completed
   · **100** Get Awards.
9. **Leadership team** `section.ftco-section`: centered heading — eyebrow
   **"Meet Our Brilliant Minds"** + h2 **"Our Leadership Team"**; 4
   `col-lg-3` staff cards (`div.staff`): `div.img` 200px circle (radius
   50%, 10px #f8f9fa border) + `div.text` (white, padding 110px 30px 30px,
   radius 4, margin-top -100px, shadow): h3 20px/500 name + `span.position`
   14px uppercase #4f86f9 + lorem bio: **Jason Smith** — President & CEO ·
   **Jeffrey Rockenson** — Executive Vice President · **Jason Smith** —
   General Manager · **Jason Smith** — Strategic Consultant (source
   repeats the name — use distinct fictional names).
10. **Testimonials** `section.ftco-section.testimony-section.bg-light`:
    centered heading — eyebrow **"Testimonial"** + h2 **"Happy
    Customers"**; Tiny Slider of 5 `div.testimony-wrap` (white, padding
    30px, radius 4, shadow 0 30px 33px -41px rgba(0,0,0,.24); 40px #4f86f9
    quote circle top -20px left 30px): lorem quote + **"Roger Scott"** +
    **"Marketing Manager"**; center slide in view gets #4f86f9 bg + white
    text (Tiny Slider CSS — optional); 30×2px bar dots below.
11. **Blog** `section.ftco-section`: centered heading — eyebrow **"Our
    Blog"** + h2 **"Recent From Blog"**; 4 `col-lg-3.blog-entry` (white,
    radius 4, overflow hidden): photo + `div.text` padding 30px: `div.meta`
    uppercase 12px (icons #4f86f9) **"Admin Jan. 27, 2030 3 Comments"** +
    h3.heading 20px/500 **"Incorporation is A Big Milestone for Your
    Business"** (hover #4f86f9) + lorem excerpt + `span.btn-custom`
    30×30 #e3ecfe square (blue arrow, hover #4f86f9) bottom-right.
12. **Intro CTA** `section.ftco-intro-2.img` (bg_3.webp + #4f86f9 overlay
    .8, padding 5em 0): `span.subheading` **"Prepare for takeoff"** (13px
    uppercase white) + h1 **"Looking for business opportunity?"**
    (30px/600 white) + `a.btn.btn-white.py-md-4.py-3.px-md-5.px-4`
    **"Get Started"**.
13. **Footer** `footer.ftco-footer` (dark; black overlay .8; padding
    7em 0 0; text rgba(255,255,255,.9)): 4 widgets —
    - Brand: **"Unioncorp. Finance & Consultation"** (logo 24px white,
      blue segment) + lorem about p.
    - **"Services"** (h2 18px/500 white mb 40px): 9 links
      rgba(255,255,255,.8) — the eight services + one more.
    - **"Recent Posts"**: two entries — **"Jan. 27, 2030 Admin"** +
      **"Incorporation is a big milestone for business"** (50×50 thumbs).
    - **"Have a Questions?"**: **"203 Fake St. Mountain View, San
      Francisco, California, USA"** · **"+2 392 3929 210"** ·
      **"info@yourdomain.com"**; `ul.ftco-footer-social` — 30px #4f86f9
      squares radius 4 (white 17px icons: x-twitter, facebook,
      instagram).
    - Copyright: **"Copyright © 2025 All rights reserved | This template
      is made with by Colorlib"** → Component Dock line.

## Implementation tasks (TDD, in order)

- [ ] Scaffold `apps/fiduciary` (copy simplest existing app; package
      `@free-react-templates/fiduciary`; vite.config.ts with
      `injectUiSource()`; npm install at root so package-lock.json
      registers the workspace)
- [ ] Spec-driven tests first: `TopBar.test.tsx`, `Navbar.test.tsx`,
      `HeroSlider.test.tsx`, `AboutServices.test.tsx`,
      `ImageSection.test.tsx`, `ServicesGrid.test.tsx`,
      `CaseStudies.test.tsx`, `StatsBand.test.tsx`,
      `LeadershipTeam.test.tsx`, `Testimonials.test.tsx`, `Blog.test.tsx`,
      `IntroCta.test.tsx`, `Footer.test.tsx`, `App.test.tsx` (100%
      coverage; RTL user-event for slider dots/controls; slider timers
      cleaned up — fake timers)
- [ ] `@theme` tokens in `src/index.css`: `--color-primary: #4f86f9`,
      `--color-secondary: #3bd381`, `--color-light: #f9faff`,
      `--color-topbar: #052f48`, `--color-overlay: #052c43`,
      `--color-plaque: #e3ecfe`, `--color-body: #8c8c8c`; Poppins 300–700
      Google Fonts links in index.html
- [ ] TopBar: #052f48 bar, phone + location lines with Phone/MapPin
      lucide icons, four 44px #4f86f9 social squares
      (Twitter/X, Facebook, Globe, Instagram)
- [ ] Navbar: white bar, brand wordmark (black 27px/800 uppercase, blue
      segment, "Finance & Consultation" tagline), 7 links (Home active
      #4f86f9), mobile "Menu" toggler (bars icon) collapsing the links
- [ ] HeroSlider: 100vh, 2 slides (picsum `seed/fiduciary-1..2` business
      crops), #052c43/50 overlay, 60px white h1 (blue `<span>` word on
      slide 2), lorem p, large white "Get Started" ButtonLink, 10px round
      dots (active blue), auto-advance with wrap + timer cleanup
- [ ] AboutServices: 2×2 grid of 4 service cards (64px #e3ecfe circles,
      blue icons — Briefcase/Shield/HeartHandshake/BarChart3; 20px
      titles; "Comprehensive Services" card solid #4f86f9 inverted) +
      right-aligned about block (eyebrow, 38px headline, "Learn More"
      blue button)
- [ ] ImageSection: parallax-ish bg (fixed attachment, degrade on
      mobile), "Quality Makes the Belief for Customers", lorem p, pulsing
      80px circular Play button ("Watch Video", aria-label)
- [ ] ServicesGrid: #f9faff bg, "Services" eyebrow + 38px heading, 8
      flow-wrap plaques (130×110 white radius-4 with notch, 70px blue
      icons, 24px titles, blurbs)
- [ ] CaseStudies: 4 × 340px photo items "Business Finance Consulting",
      hover black overlay + white label + 40px #3bd381 corner icon
      (lucide ArrowUpRight)
- [ ] StatsBand: photo + #4f86f9/90 overlay, "Technical Statistics" +
      "Great Reviews for our services", 4 counters (60 / 9200 / 5800 / 100) 44px/700 white letter-spacing + uppercase captions (static or
      count-up hook)
- [ ] LeadershipTeam: 4 staff cards, 200px circular photos (10px light
      ring, picsum `seed/fiduciary-4..7`), distinct names + positions
      (President & CEO, Executive Vice President, General Manager,
      Strategic Consultant) in uppercase #4f86f9, short bios
- [ ] Testimonials: #f9faff bg, "Happy Customers", quote cards with 40px
      #4f86f9 Quote icon, "Roger Scott — Marketing Manager", slider with
      controls + cleanup
- [ ] Blog: 4 cards (picsum thumbs, meta "Admin Jan. 27, 2030 3
      Comments" with Calendar/User/MessageSquare icons, 20px title hover
      blue, excerpt, #e3ecfe ArrowRight square hover blue)
- [ ] IntroCta: photo + #4f86f9/80 overlay, "Prepare for takeoff" /
      "Looking for business opportunity?" / large white "Get Started"
- [ ] Footer: dark (black overlay), brand + about, Services links, Recent
      Posts (2 dated), "Have a Questions?" (MapPin/Phone/Mail), 30px
      #4f86f9 social squares, "Copyright © {year} All rights reserved" +
      Component Dock link (https://www.componentdock.com/)
- [ ] App composition: all 13 sections in reference order; document title
      "Fiduciary — Finance & Consultation"
- [ ] Responsive pass: navbar collapse below lg, services 4→2→1 col,
      hero h1 40px on small, stats 4→2 col, staff/blog stack
- [ ] Gate: `bash scripts/verify-app.sh fiduciary` from repo root
      (typecheck + lint + 100% coverage + build)
- [ ] Bookkeeping: mark ALL THREE Unioncorp rows (lines 632, 1395, 1763)
      `[x]` with the fiduciary surge URL; `npm run readme:status`; PR +
      immediate squash merge to main

## Pitfalls / notes

- The reference hero + testimonials use Tiny Slider (JS). Implement a
  lightweight custom slider hook (index state, dots/controls, optional
  auto-advance with wrap, cleanup on unmount) — no new deps.
- The reference leadership team repeats "Jason Smith" for 3 of 4 cards
  and the blog title 4 times — use distinct fictional names/titles to
  fill the same slots (structure stays identical).
- Counter numbers are static in the DOM (60/9200/5800/100); the count-up
  is JS-only. Static render satisfies fidelity; a count-up hook is a
  nice-to-have (respects prefers-reduced-motion if added).
- Parallax `background-attachment: fixed` is flaky on iOS — use it on
  desktop and degrade to a normal background on mobile, or use a plain
  bg image with a fixed overlay.
- The hero slide-2 headline highlight: `<span>` around "Financial" in
  #4f86f9 — match the blue-word pattern in the recreation.
- The `.services.active` card ("Comprehensive Services") is the inverted
  solid-blue card — keep it distinct from the other three white cards.
- The gallery hover state (black overlay + white label + green corner
  icon) and the testimonial center-card blue inversion are interaction
  details; at minimum implement the gallery hover (CSS group-hover) —
  the testimonial inversion is optional.
- Dark-mode toggle exists in the reference ([data-bs-theme=dark]) but is
  not part of the visual identity — optional; if implemented, follow the
  monorepo class-based `dark:` convention. Safe to omit from v1.
- The footer copyright credits Colorlib in the reference; per monorepo
  conventions the app footer must link Component Dock
  (https://www.componentdock.com/) — adapt the "made with ♥" line to
  Component Dock branding (provenance stays in spec/TEMPLATES.md/PR
  only).
- flaticon icons are font sprites; map each to a lucide-react equivalent
  (accountant → Briefcase/UserCheck, accounting → Calculator,
  investments → TrendingUp, loan → Landmark/PiggyBank, taxes → FileText,
  insurance → Shield, retirement → Sun/Clock, risk → AlertTriangle/
  Activity, technology → Cpu/MonitorCog, quote → Quote, play → Play,
  video → CirclePlay).
- Duplicate TEMPLATES.md rows: all three Unioncorp rows share the slug;
  one app, mark all three `[x]` at bookkeeping (lines 632, 1395, 1763).
