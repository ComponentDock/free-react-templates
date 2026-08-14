# Signet (ColorLib Schmidt) — Tasks & Design Notes

> Recreation of ColorLib "Schmidt" — free Bootstrap 5 personal-portfolio /
> designer website template (https://colorlib.com/wp/template/schmidt/)
> under the NEW name **Signet** ("signet" — a personal seal, a designer's
> distinctive mark, fitting a personal-portfolio brand; single lowercase
> word, no collision with `apps/`, `openspec/specs/` or `docs/templates/` —
> verified 2026-08-14), per the monorepo naming mandate (never reuse the
> ColorLib source name). Full spec:
> `openspec/specs/template-signet/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Schmidt" — personal portfolio / resume template
  (a UI/UX designer's site), Bootstrap 5 based (bootstrap + font-awesome 4.7
  - ionicons 4.5 + tiny-slider + glightbox + aos + animate) + custom
    `css/style.css` (~65 KB). Brand name used in the source copy: "Schmt.".
    TEMPLATES.md category: **Bootstrap 5 (89)**, first occurrence at line 624
    (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the `schmidt` slug
    also appears at lines 2425 (**Personal (53)**), 2561 (**Portfolio (89)**)
    and 2725 (**Resume (20)**) — all FOUR `- [ ]` rows of the SAME template;
    ONE implementation covers all four rows (mark all `[x]` with the same
    surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/schmidt/` — HTTP 200, ~10 KB HTML
  (REACHABLE). NOTE: the index page only carries navbar + split hero; the
  rest lives on subpages — `about.html` (About + counters, Skills, Happy
  Guests testimonials), `services.html` (8 services, Pricing),
  `experience.html` (6 resume cards), `work.html` (9 project cards),
  `blog.html` (8 post cards + pagination), `contact.html` (dboxes + form +
  map) — ALL fetched, HTTP 200, parsed. Custom CSS `css/style.css` (~65 KB,
  fully extracted for tokens). Screenshot `schmidt-free-template.jpg`
  (1200×946, viewed in browser) shows ONLY the hero: split-screen — white
  left half with gold uppercase "UI/UX DESIGNER & DEVELOPER", huge black
  "I'm John Schmidt", gold **More About Me** + white **Hire Me**; mustard
  gold `#d5c455` right half with the John Schmidt portrait (glasses, beard,
  plaid blazer); copyright line bottom-left. Subpage sections were mapped
  from the live DOM (screenshot doesn't show them).
- **Visual design:** high-contrast minimalist split hero on light-gray
  `#f8f8f8`. The signature gold `#d5c455` fills the hero's right 50%
  (`.hero-wrap .overlay`), primary buttons, eyebrows, counter numbers,
  progress bars, resume icon circles, pricing numbers, focus borders and
  hover states. Body `#999999` Poppins 16px/1.8 on `#f8f8f8`; headings
  `rgba(0,0,0,0.8)`/`#222222`; white cards with soft shadows, 3–4px radii;
  buttons **sharp-cornered** (radius 0), 12px uppercase letter-spaced.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.ftco-navbar-light`, transparent, absolute,
     top 20px): brand **"Schmt."** left, links **Home · About · Services ·
     Experiences · Works · Blog · Contact** right; ≤991.98px → solid
     `#222222` + relative + hamburger. Recreation: "Signet.", 7 links,
     mobile panel.
  2. **Hero** (`section.hero-wrap`, 100vh, `background-attachment: fixed`):
     left col — gold uppercase subheading **"UI/UX Designer & Developer"**
     (16px/700/ls 1px), h1 **"I'm John Schmidt"** (80px/700 `#222222`,
     mobile 30px), **More About Me** (gold `btn-primary p-4 py-3`) + **Hire
     Me** (white `btn-white p-4 py-3`), both with ion-ios-arrow-round-forward
     icon; absolute bottom-left copyright line (13px `rgba(0,0,0,0.4)`);
     right col — **gold `#d5c455` overlay width 50%** behind a tiny-slider
     portrait carousel (`.carousel-about`: `jschmidt.png`,
     `jschmidt-2.png`).
  3. **About + counters** (`ftco-section ftco-about-section`, white): left —
     2×2 `.section-counter` grid (white `.counter-wrap`, padding 60px 30px):
     **5000 Happy Clients · 1200 Projects Done · 500 Cups of Coffee · 587
     Working Hourse** (40px/700 gold numbers, `#222222` captions); right —
     eyebrow **About Me**, h2 **"A UI/UX Designer & Web Developer Based in
     Philippines"** (40px/600), lorem p, two-col `.about-info` (**Name:**
     Clyde Nowitzki / **Date of birth:** January 01, 1990 / **Address:** San
     Francisco CA 97987 USA · **Zip code:** 1000 / **Email:**
     cydenowitzki@gmail.com / **Phone:** +1-2234-5678-9-0 — gold values,
     black labels), **Download CV** gold button.
  4. **Skills** (`ftco-section testimony-section`, white): eyebrow
     **Skills**, h2 **"My Skills"**; 9 gold bars: **Adobe Photoshop 90% ·
     Figma 95% · Adobe Illustrator 90% · Javascript 85% · HTML5 95% · CSS3
     90% · WordPress 70% · Adobe XD 80% · SEO 80%** (8px track
     `rgba(0,0,0,0.05)`, gold bar + 34px square end-cap, % label above).
  5. **Testimonials** (`ftco-section testimony-section bg-light`): eyebrow
     **Testimonial**, h2 **"Happy Guests"**; tiny-slider of `.testimony-wrap`
     cards (white, radius 4, 80px round avatar, Duden quote, **Roger Scott**
     22px/700, **Marketing Manager** gold uppercase, 30px gold corner icon
     circle); dots.
  6. **Services** (`ftco-section`, white): eyebrow **What I Do?**, h2
     heading; 8 cards (`.services`, white, padding 30px, radius 3, shadow):
     **UI/UX Design · Web Development · Graphic Design · Branding ·
     Marketing · Mobile App Design · Visual Editor · IT Consultancy**; 70px
     gold flaticon icons (ux, web-programming, vector, branding, bullhorn,
     app-development, data, consulting); hover → **gold bg, white
     icon/text**.
  7. **Pricing** (`ftco-section`, white): eyebrow **Pricing**, h2 **"Choose
     Your Pricing Plan"**; 4 `.block-7` white cards (radius 4, padding 30,
     shadow): **$49 Personal · $79 Professional · $109 Medium Business ·
     $149 Gigantic Business** (50px gold price number, 18px/500 `#222222`
     name), 5 features each (**Strategic Alliance · Growth Expansion ·
     Business Planning · Contact Negotiation · Market Positioning**, even
     rows `#f8f8f8`, gold checks), gold **Get Started** (60% width).
  8. **Experience** (`ftco-section`, white): eyebrow **Experiences**, h2
     heading; 6 `.resume-wrap` white cards (padding 30, mb 50) in a 2-col
     timeline: **2014-2015 Master Degree of Design · 2014-2015 Bachelor's
     Degree of C.A · 2014-2015 Diploma in Computer · 2014-2015 Art &
     Creative Director · 2015-2017 Wordpress Developer · 2018-2020 UI/UX
     Designer**; 60px **gold circular icon** (graduated / work-from-home,
     `margin-top: -60px` overlap), gold date, 24px/500 h2, position
     **Google Inc.** (pin icon, 13px/500 `#b3b3b3`), lorem p.
  9. **Works** (`ftco-section`, white): eyebrow **Portfolio**, h2 heading;
     9 `.project` cards (`col-md-4`, height 350) with `project-1..9.jpg`:
     gold overlay on hover (0.9, mobile 0.2), title **"Branding &
     Illustration Design"** (white 20px) + **"Web Design"** category (white
     uppercase ls 2px).
  10. **Blog** (`ftco-section bg-light`): eyebrow **Blog Posts**, h2
      heading; 8 `.blog-entry` cards (`col-md-6 col-lg-3`, white, radius 4):
      300px `.block-20` image (`image_1..8.jpg`), meta **Admin · Jan. 07,
      2021 · 3 Comments** (uppercase 13px/500), h3 **"The Newest and Updated
      Bootstrap 5 is Here"** (22px, hover gold), excerpt p; `.block-27`
      pagination (40px square links, active/hover gold).
  11. **Contact** (`ftco-section`, white): eyebrow **Contact us**, h2
      heading; left — 3 `.dbox` (**Address:** 198 West 21th Street, Suite
      721 New York NY 10016 · **Email:** info@yoursite.com · **Phone:** +
      1235 2355 98, uppercase black labels) + **"Follow us here"** (Facebook
      · Twitter · Instagram · Dribbbl[sic]); right — `.contactForm` (Name /
      Email / Subject / Message, **borderless bottom-border inputs**, gold
      uppercase labels, **Send Message** gold submit); Google map `#map`
      below.
  12. **Footer** (`footer.ftco-footer`, padding 2em 0): single centered line
      "© <year> All rights reserved | This template is made with ♥ by
      Colorlib" → **Component Dock link (mandatory)**
      `https://www.componentdock.com/`.
- **Design tokens (from `style.css`):** brand gold `#d5c455` (hero right
  overlay, btn-primary, links, eyebrows, hero subheading, counter numbers,
  progress bars, resume icon circles + dates, pricing numbers, service
  icons + hover bg, project hover overlay, about-info values, focus
  borders, contact labels, pagination/tagcloud/blog hovers); dark ink
  `#222222` (hero h1, mobile navbar bg, counter captions, pricing names);
  headings `rgba(0,0,0,0.8)`; body `#999999` on `#f8f8f8` (16px/1.8);
  muted `#b3b3b3`; light bands `#f8f8f8`/`#f8f9fa`; white cards; radii: 0
  buttons, 3px services, 4px blog/testimony/pricing/pagination, 2px forms,
  50% icons; section padding 8em 0; hero 100vh; page banner 300px
  (breadcrumbs + `.bread` h1 40px/600).

## Implementation tasks (TDD, in order)

- [ ] Scaffold: copy simplest existing app → `apps/signet`, rename package
      `@free-react-templates/signet`, register workspace
      (`npm install --package-lock-only`), `public/CNAME` =
      `signet.free.componentdock.com`, homepage
      `https://signet.free.componentdock.com`; footer MUST link
      `https://www.componentdock.com/`
- [ ] `@theme` tokens: `--color-gold: #d5c455`, `--color-ink: #222222`,
      `--color-heading: rgba(0,0,0,0.8)` (or `#212529`-family),
      `--color-muted: #999999`, `--color-faint: #b3b3b3`,
      `--color-mist: #f8f8f8`, `--color-card: #ffffff`; font Poppins via
      Google Fonts `<link>` in `index.html`
- [ ] Navbar (transparent over hero, SIGNET brand + Home/About/Services/
      Experiences/Works/Blog/Contact, solid `#222222` on mobile, hamburger →
      mobile panel)
- [ ] Hero (100vh split: white left with gold "UI/UX Designer & Developer"
      eyebrow + dark "I'm John Schmidt" 80px + gold More About Me + white
      Hire Me w/ arrow icons + copyright line; gold `#d5c455` right half +
      portrait carousel, 2 slides)
- [ ] About + counters (2×2 white counter cards 5000/1200/500/587 +
      About Me split with 2-col about-info + Download CV gold button)
- [ ] Skills ("My Skills", 9 gold progress bars 90/95/90/85/95/90/70/80/80%
      with labels + end-cap markers)
- [ ] Testimonials (`#f8f8f8`, "Happy Guests", Roger Scott quote cards w/
      avatars + gold corner icon + dots)
- [ ] Services (8 white cards w/ 70px gold icons; hover → gold bg, white
      icon/text)
- [ ] Pricing ("Choose Your Pricing Plan", 4 white plans $49/$79/$109/$149
      with 5 features + gold Get Started)
- [ ] Experience (6 resume cards in 2-col timeline w/ gold circular icons
      overlapping top edge, gold dates, Google Inc. position)
- [ ] Works (9 "Branding & Illustration Design" project cards, 3-col grid,
      gold hover overlay)
- [ ] Blog (`#f8f8f8`, 8 post cards w/ image + meta + title + excerpt,
      4-col grid, pagination)
- [ ] Contact (3 dboxes + Follow us here socials + borderless form w/ gold
      labels + Send Message; map placeholder ok)
- [ ] Footer (single centered line with Component Dock credit)
- [ ] Placeholder images: `picsum.photos/seed/signet-<n>/<w>/<h>` — 2 hero
      portraits, 9 project images, 8 blog images, 1-3 testimonial avatars;
      screen seeds before pinning (seed-screening method: brightness/blue
      metric + browser_vision on top candidates). NOTE: hero right half is a
      solid gold panel with a portrait — pick a person-ish seed or keep a
      stylized/abstract portrait; picsum seeds are photos, verify it reads
      well on gold bg
- [ ] `scripts/verify-app.sh signet` green (typecheck + lint + 100%
      coverage + build); spec:validate; PR with source/preview/tokens
      noted; bookkeeping: ALL FOUR `- [ ]` rows (lines 624, 2425, 2561, 2725) → `[x]` + same surge URL + `npm run readme:status`
