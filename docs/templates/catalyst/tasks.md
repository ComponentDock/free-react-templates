# Catalyst (ColorLib Unbrew) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-catalyst/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Unbrew" — free Bootstrap 5 digital-agency /
  business landing website template (source:
  https://colorlib.com/wp/template/unbrew/; listed THREE times in
  TEMPLATES.md — line 631 [Bootstrap 5], line 1213 [Business], line 2096
  [Landing Page], all `- [ ]`, same slug → implement ONE app, mark ALL
  THREE rows `[x]` at bookkeeping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unbrew/ (HTTP
  200, 56.4KB HTML + `css/style.css` 78.6KB + Bootstrap 5 + font-awesome
  4.7 + ionicons + animate + flaticon + tiny-slider + glightbox + aos,
  extracted 2026-08-14 during prep). Screenshot `unbrew-free-template.jpg`
  (AVIF — served by Colorlib as `.jpg`; convert to PNG and view in the
  browser).
- **Visual design:** modern, flat, corporate SaaS/agency landing — deep
  purple-violet gradient hero (#553be6→#a87ffa) with white headline "Boost
  Personal Productivity" and a flat vector illustration (people + data
  charts on a big screen), white body with soft-shadow white cards on
  alternating white / light #f9faff bands, bright sky-blue #1fb6fc accents
  (icon circles, counters, links, buttons), a solid blue newsletter band,
  light lavender footer (#eaedff) with a purple gradient copyright bar.
- **Palette (CSS-verified):** primary **#1fb6fc** (sky blue — subheading,
  icons, counters, links, btn-primary, newsletter band, footer contact
  icons); secondary **#bc6ff1** (btn-secondary); gradient
  **#553be6→#a87ffa** 45deg (hero, v-section overlay, copyright bar);
  headings **#2a3a60**; body **#88879e** (16px/1.8/400); light band
  **#f9faff** (custom `.bg-light`); footer **#eaedff** + circles
  **#e5e9ff**; service icon circle **#eff2ff**; team social **#f2e3fc** /
  icons **#a641ec**; hovers **#f9f1fe** (team), **#e8f8ff** (work),
  **#84d7fd** (category chip), **#1fb6fc** (v-section card);
  counters 50px #1fb6fc, labels 14px uppercase #2a3a60.
- **Fonts:** **Roboto, Arial, sans-serif** — load Roboto via Google Fonts
  `<link>` in index.html. Body 16px/1.8; section h2 40px/1.4 weight 400;
  card titles 17px/500; team names 20px/500; v-section titles 24px;
  footer widget h2 18px/500; subheading 12px uppercase letter-spacing 2px
  #1fb6fc.
- **Buttons:** `.btn` padding 10px 20px, 14px/500, radius
  **40px 40px 40px 0** (bottom-left square; hover flips to
  0 40px 40px 40px), shadow 0 24px 36px -11px rgba(0,0,0,.09);
  `.btn-primary` bg #1fb6fc white text (hover: transparent + blue
  border/text); `.btn-secondary` bg #bc6ff1 (hover: transparent + purple);
  `.btn-custom` transparent uppercase 13px letter-spacing 1px #1fb6fc.
- **Cards:** radius 4px + shadow 0 24px 48px -13px rgba(0,0,0,.05)
  (services/work); counter card radius 10px + shadow .1; v-section cards
  padding 30px; work image blocks 400px tall; hero 800px (600px <1200px);
  v-section overlay 600px; footer padding 5em 0 0.

## Section order (1:1, LIVE DOM — comments stripped)

1. **Navbar** `nav.navbar.ftco-navbar-light` — absolute, transparent, top
   30px over hero. Brand "Unbrew." white. Nav (12px uppercase, ls 1px,
   rgba(255,255,255,.9), weight 500): Home (active) / About us / Services /
   Pricing / Work / Blog / Contact us; hover → white + 2px white underline
   (scaleX 0→1). Mobile ≤991px: bg #2a3a60, hamburger, stacked links.
2. **Hero** `section.hero-wrap` (800px): 45deg gradient #553be6→#a87ffa;
   decorative circles (white 550px @ .05 opacity; black band bottom-left);
   h1 "Boost Personal Productivity" (white); p "A small river named Duden
   flows by their place and supplies it with the necessary regelialia.";
   "Start A Project" btn-primary + "Call us for any inquiry" btn-secondary
   - "+01 2345 5678 910"; right flat vector illustration `images/bg_1.svg`
     (people + data charts); bottom-left vertical social row (fb, twitter,
     instagram, google+, 30px circles).
3. **Services** `.ftco-section.ftco-no-pb`: subheading + h2 "We Provide A
   Lot of Cool Services" (40px); 6 cards `.services` (radius 4px, shadow
   0 24px 48px -13px rgba(0,0,0,.05), padding 20px, mb 30px): Marketing
   (flaticon-user), SEO (flaticon-seo), UI/UX Design (flaticon-vector),
   Creative (flaticon-business), Optimization (flaticon-search-engine),
   Business Strategy (flaticon-rocket) — 70px circle bg #eff2ff / icon
   40px #1fb6fc, title 17px/500, blurb; below: "Our Services" btn-primary.
4. **Counter** `.ftco-counter-section.ftco-no-pt`: left `images/about.svg`
   illustration; right white card `.counter-section` (radius 10px, shadow
   0 24px 48px -13px rgba(0,0,0,.1)) with 4 `.counter-wrap` (padding
   40px 20px, centered): **900+ Project Done, 500+ Optimize Sites, 770+
   Coffee Cups, 1000+ Happy People** (data-count 900/500/770/1000; DOM
   renders "0" until count-up runs) — number 50px #1fb6fc lh 1, label
   14px uppercase #2a3a60.
5. **About** `.ftco-about-section.ftco-no-pt.ftco-no-pb`: left — subheading
   - h2 "Unbrew A Digital Agency Company" (40px) + 2 paragraphs (#88879e)
   - "More About us" btn-primary; right — photo card
     `images/about.jpg` (`.col-lg.img.border`, rounded).
6. **Team** `.ftco-section`: subheading + h2 "Our Digital Experts Team";
   4 `.team-wrap` cards (centered): Adrian Molises / Arthur MaGregor /
   Anna Hanzen / Brian Wooden — photo `team-1..4.jpg`, social circles
   overlay on hover (bg #f2e3fc, icons #a641ec, hover bg #1fb6fc white
   icons), role "CEO, Founder & Developer", card hover bg #f9f1fe.
7. **Testimonials** `.testimony-section.bg-light` (#f9faff): h2 "Happy
   Customers"; tiny-slider carousel of 5 white slides: circular avatar,
   quote "Far far away, behind the word mountains, far from the countries
   Vokalia and Consonantia, there live the blind texts.", "Roger Scott" /
   "Marketing Manager". Pagination dots.
8. **Why Choose Us** `section.img.v-section.bg-light`: 600px-tall 45deg
   gradient overlay (#553be6→#a87ffa); subheading "WHY CHOOSE US" white +
   h2 white "Easy Management for Your Businesses"; 4 white `.services`
   cards (padding 30px): Easy Management (flaticon-settings), Protect Your
   Profile (flaticon-padlock), Private Community (flaticon-secret-file),
   24/7 Help Support (flaticon-help) — 80px circle bg #1fb6fc / white
   45px icon; hover → card #1fb6fc, icon circle white, icon #1fb6fc.
9. **Work** `.ftco-section`: h2 "Our Awesome Work"; 4 `.work-wrap` (mb
   70px): 400px image block (radius 4px) + `.category` chip (13px
   uppercase ls 1px bg #f9faff, hover #84d7fd white) + h3 20px/500 "High
   Quality Design Concept" (#2a3a60 link). Categories: Branding, Printing
   / Graphic Design / Web Development / Web Development. Images open in
   glightbox. Below: "View More Portfolio" `.btn-custom` (uppercase 13px
   ls 1px #1fb6fc, bg rgba(255,255,255,.1)).
10. **Pricing** `.ftco-section`: h2 "Choose Your Pricing Plan" + intro;
    4 plans — **Personal $49 / Professional $79 / Medium Business $109 /
    Gigantic Business $149** — each 5 features (Strategic Alliance,
    Growth Expansion, Business Planning, Contact Negotiation, Market
    Positioning, check icons) + "Get Started" `.btn-primary.d-block.px-2.py-3`.
11. **Blog** `.ftco-section.bg-light` (#f9faff): h2 "Recent Blog" + intro;
    4 `.blog-entry` white cards: image + date "Dec. 05, 2020" + author
    "by Johan Stevenson" + h3 link "Explore The Best Restaurant in New
    York".
12. **Newsletter** `.ftco-intro.py-5.bg-primary` (solid #1fb6fc): h2 white
    27px/500 "Newsletter - Stay tune and get the latest update" + p
    rgba(255,255,255,.8); right `.subscribe-form`: email input
    (transparent bg, white text/placeholder, underline border
    rgba(255,255,255,.8), radius 5px 0 0 5px) + `.btn-icon` paper-plane
    send (white).
13. **Footer** `.ftco-footer` (bg #eaedff, padding 5em 0 0, decorative
    circles #e5e9ff): brand "Unbrew." (#1fb6fc) + blurb + 3 social icons;
    Explore (About Us, Services, Works, Blog, Contact us); Quick Links
    (Contact Us, Pricing, Terms & Conditions, Privacy, Feedbacks); Recent
    Posts (thumb + "Creativity and Inspiration" + "DEC. 12, 2020" /
    "ADMIN" ×3); Have a Questions? (phone "+2 392 3929 210", email
    "info@yourdomain.com", icons #1fb6fc). Widget h2 18px/500 #2a3a60,
    links #88879e. Copyright bar `.bg-wrap` gradient #553be6→#a87ffa:
    "Copyright © <year> All rights reserved | This template is made with ♥
    by Colorlib" (rgba(255,255,255,.5) 13px) — adapt attribution to
    Component Dock (footer MUST link https://www.componentdock.com/).

## Implementation tasks (TDD, in order)

- [ ] Scaffold `apps/catalyst` (copy simplest existing app; package
      `@free-react-templates/catalyst`; vite.config.ts with
      `injectUiSource()`; npm install at root so package-lock.json
      registers the workspace)
- [ ] Spec-driven tests first: `Navbar.test.tsx`, `Hero.test.tsx`,
      `Services.test.tsx`, `Counter.test.tsx`, `About.test.tsx`,
      `Team.test.tsx`, `Testimonials.test.tsx`, `WhyChooseUs.test.tsx`,
      `Work.test.tsx`, `Pricing.test.tsx`, `Blog.test.tsx`,
      `Newsletter.test.tsx`, `Footer.test.tsx`, `App.test.tsx` (100%
      coverage; RTL user-event for menu toggle / carousel / forms;
      count-up hook tested via fake timers or final-value assert)
- [ ] `@theme` tokens in `src/index.css`: `--color-primary: #1fb6fc`,
      `--color-secondary: #bc6ff1`, `--color-gradient-from: #553be6`,
      `--color-gradient-to: #a87ffa`, `--color-heading: #2a3a60`,
      `--color-body: #88879e`, `--color-soft: #f9faff`, `--color-footer:
  #eaedff`, `--color-footer-circle: #e5e9ff`, `--color-icon-circle:
  #eff2ff`; Roboto Google Fonts link in index.html
- [ ] Navbar: transparent over hero, "Catalyst." white brand, 7 uppercase
      links + animated underline, mobile #2a3a60 hamburger (aria-expanded,
      focus rings)
- [ ] Hero: gradient bg, white h1 + subtext, blue/purple pill CTAs +
      phone, flat SVG illustration right (composed graphic — NOT a random
      photo), vertical social icons bottom-left
- [ ] Services: subheading + h2, 6 cards (lucide icons in #eff2ff
      circles), "Our Services" button
- [ ] Counter: white rounded card, 4 count-ups (IntersectionObserver +
      count-up hook; data-count 900/500/770/1000), labels uppercase
- [ ] About: h2 + 2 paragraphs + "More About us" + photo card
- [ ] Team: 4 cards with hover-revealed social circles (#f2e3fc/#a641ec →
      #1fb6fc), role line, hover tint #f9f1fe
- [ ] Testimonials: #f9faff band, carousel auto-advance + dots (custom
      hook + timer, cleanup on unmount)
- [ ] WhyChooseUs: gradient overlay band, 4 white cards with #1fb6fc icon
      circles, hover flip to #1fb6fc card
- [ ] Work: 4 items with category chips, click-to-open lightbox (or
      anchor fallback), "View More Portfolio" link
- [ ] Pricing: 4 plans with prices/features/Get Started buttons
- [ ] Blog: 4 cards (picsum `seed/catalyst-<n>` thumbs, date, author,
      title)
- [ ] Newsletter: #1fb6fc band, transparent underline input + send icon,
      front-end email validation + success state
- [ ] Footer: 5 columns + gradient copyright bar with Component Dock link
      (https://www.componentdock.com/)
- [ ] Gate: `bash scripts/verify-app.sh catalyst` from repo root
      (typecheck + lint + 100% coverage + build)
- [ ] Bookkeeping: mark ALL THREE Unbrew rows (lines 631, 1213, 2096)
      `[x]` with the catalyst surge URL; `npm run readme:status`; PR +
      immediate squash merge to main

## Pitfalls / notes

- The `preview.colorlib.com` page loads jQuery + tiny-slider + glightbox +
  AOS; implement equivalents in React (carousel hook, simple lightbox,
  CSS scroll reveal) — no new deps needed.
- Counter values render as "0" in the raw DOM — they are JS count-ups
  driven by `data-count` (900/500/770/1000). Implement the count-up; tests
  can assert the final value after animation (fake timers) or expose the
  target as a data attribute.
- The hero/about illustrations are FLAT VECTOR SVGs (`bg_1.svg`,
  `about.svg`) — recreate as composed inline SVG graphics, not
  photographs.
- Work images are `background-image` divs in the reference; `<img>` with
  same crop (400px tall) is visually equivalent.
- `.bg-primary` in the reference CSS overrides Bootstrap to #1fb6fc and
  `.bg-light` to #f9faff — use those exact values, not Bootstrap defaults.
- Buttons have an asymmetric pill: radius `40px 40px 40px 0` (bottom-left
  square), flipping to `0 40px 40px 40px` on hover — preserve this
  signature detail.
- The footer copyright bar credits Colorlib in the reference; per monorepo
  conventions the app footer must link Component Dock
  (https://www.componentdock.com/) — adapt the "made with ♥" line to
  Component Dock branding (provenance stays in spec/TEMPLATES.md/PR only).
- Duplicate TEMPLATES.md rows: all three Unbrew rows share the slug; one
  app, mark all three `[x]` at bookkeeping.
