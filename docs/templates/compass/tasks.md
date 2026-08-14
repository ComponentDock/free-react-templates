# Compass (ColorLib Pointer) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-compass` by an implementer stream.

## Design notes

- **Original:** ColorLib "Pointer" — free consulting agency / business
  website template. Source: https://colorlib.com/wp/template/pointer/.
  TEMPLATES.md line 477 (Bootstrap category).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pointer/`
  (HTTP 200, 45.8KB; `<title>` "Pointer &mdash; Website by Colorlib") +
  stylesheet `css/style.css` (22.5KB, SCSS-compiled; the design source) +
  bootstrap.min.css (grid, `.bg-light` #f8f9fa, `.form-control` helpers).
  Full rendered DOM + accessibility tree extracted; computed styles checked
  in a real browser (transparent navbar over golden-lit mountain hero, dark
  logo/links, pink #e81050 active link + pill "Get Started" button). The
  TEMPLATES.md screenshot (`pointer-free-template.jpg`, AVIF) confirms the
  visual design: mountain-peak hero with white centered headline + bright
  pink pill CTA; below it the big photo with the overlapping pink caption
  panel; white team/approach sections with pink 40px/900 section titles;
  light-gray services/blog/contact bands; indigo #505288 "Read More" button
  on the pink panel. Aesthetic: clean, corporate, high-contrast — Roboto
  type, raspberry-pink accents on white/#f8f9fa, pill buttons/inputs,
  generous whitespace.
- **Structure observed (1:1):**
  1. `header.site-navbar.py-4.js-sticky-header` — absolute top 0, full
     width, z-index 1999, sticky on scroll: left wordmark `h1.site-logo`
     "Pointer" + pink `<span class="text-primary">.</span>` dot; right
     `nav.site-navigation` (text-right) — 7 links Home (active pink, pad
     5px 20px) / About Us / Team / Services / Testimonials / Blog /
     Contact (#000); mobile: black hamburger `a.site-menu-toggle` +
     slide-in menu.
  2. `div.site-blocks-cover.overlay#home-section` — full-viewport
     (min-height 600px / calc(100vh)) bg photo `hero_2.jpg` (mountain),
     cover, center-center, `:before` rgba(0,0,0,0.2); centered
     `col-md-6 text-center`: h1 white "We Are The Best Consulting
     Agency", lorem p, `a.btn.btn-primary` "Get Started" (pill radius
     30px, bg #e81050, white, hover inverts to white bg + pink text).
  3. `div.site-section.cta-big-image#about-section` — `div.owl-carousel
.slide-one-item-alt` 3 photos (slide_1/2/3.jpg); `div.img-box`
     absolute bottom -10% right 10%, max-w 550px, padding 3rem, bg
     #e81050: `span.sub-title` "Creative Skills" (uppercase 13px,
     letter-spacing .1em, rgba(255,255,255,0.7)), h2 white 2rem "Create
     Your Own Web Masterpiece", p 1.1rem rgba(255,255,255,0.9) w300,
     `a.btn` "Read More" bg #505288 (indigo). Mobile: img-box static.
     NOTE: original reuses `id="about-section"` here AND on the features
     section — use distinct ids in Compass.
  4. `section.site-section.border-bottom#team-section` — header
     `col-md-5`: `h2.section-title` "Our Dedicated Professionals" (pink
     #e81050, 40px/900; 30px mobile) + `p.lead`; 8 cards
     `col-md-6 col-lg-3`: `.team-member > figure` (relative, overflow
     hidden) photo + `ul.social` absolute slide-in on hover (translateX
     0%; 4 icons: facebook/twitter/linkedin/instagram) + h3 name (use 8
     DISTINCT names — original reuses placeholders: Kaiara Spencer, Dave
     Simpson, Ben Thompson, Kyla Stewart / Kaiara Spencer, Dave Simpson,
     Ben Thompson, Chris Stewart).
  5. `section.site-section` — approach: intro row (h2.section-title
     "We Are The Best Consulting Agency" + lorem + "Learn More" link),
     then "Our Approach" + 3 steps: 01. Creative / 02. Strategy / 03. Production (numbered prefix + h2 + lorem).
  6. `section.site-section.border-bottom.bg-light#services-section` —
     h2.section-title "Our Services"; 6 cards (2×3): Great Design, Time
     Saving, Quick Response, Best Support, Finest Quality, Real
     Solutions — icon + h3 + lorem + "Learn More".
  7. `section.site-section.testimonial-wrap#testimonials-section` —
     h2.section-title "Testimonials"; `div.slide-one-item.home-slider
.owl-carousel` 4 slides: `.testimonial` quote + author (John Smith,
     Christine Aguilar, Robert Spears, Bruce Rogers); owl dots (inactive
     #ccc, active pink — verify in browser).
  8. `section.site-section#about-section` (dup id — features) —
     h2.section-title "Consulting Agency It's Best"; 2 feature blocks:
     h3 "Web & Mobile Specialties" + lorem + "Learn More"; h3 "Intuitive
     Thinkers" + lorem + "Learn More".
  9. `section.site-section#blog-section` — `span.section-sub-title`
     "BLOG" (13px #e81050 letter-spacing .2em uppercase) +
     h2.section-title "Our Blog Posts"; 3 cards (col-lg-4): image,
     "News" tag, h2 lorem title, "Continue Reading..." link.
  10. `section.site-section.bg-light#contact-section` — original header
      reuses "Services / Our Services" (source copy-paste; paraphrase to
      "Contact / Get In Touch" OK); h2 "Contact Form"; fields First
      Name / Last Name / Email / Subject / Message + pink pill "Send
      Message" (form-controls: height 43px, radius 30px); info aside:
      Address 203 Fake St. Mountain View, San Francisco, California,
      USA · Phone +1 232 3235 324 · Email youremail@domain.com.
  11. `footer.site-footer` — 4 cols: About Us (h2 + lorem); Quick Links
      (About Us / Services / Testimonials / Contact Us); Subscribe
      Newsletter (email input + "Send" btn, height 43px); Follow Us (4
      social icons); bottom bar: copyright + "made with by Colorlib" →
      REPLACE with repo-standard credit linking
      https://www.componentdock.com/.
- **Design tokens (from css/style.css + bootstrap.min.css):**
  - Brand pink **#e81050** (19 uses): `.text-primary` (logo dot, active
    nav), `.btn-primary` bg, `.section-title`, `.section-sub-title`,
    `.cta-big-image .img-box` bg; `.btn-primary:hover` inverts (bg #fff,
    color #e81050).
  - Secondary indigo **#505288**: `.cta-big-image .img-box .btn` (Read
    More).
  - Ink #000 (10): nav links, headings, logo; body #212529/#343a40;
    grays #737373/#999999/#b3b3b3 captions, #ccc inactive dots,
    #dee2e6/#e6e6e6 borders.
  - Light bands #f8f9fa (bg-light), #edf0f5 (4), #f4f5f9 (2),
    #f0f0f0/#f3f3f4/#f7f7f7 (team hover / navbar border).
  - Font: Roboto stack everywhere (incl. .form-control).
  - Buttons: 16px, radius 30px (pill), padding 10px 30px, no shadow;
    forms: height 43px, radius 30px.
  - Hero: min-height 600px/100vh, overlay rgba(0,0,0,0.2).
  - Team: social bar slide-in on hover (translateX).
- **Recreation decisions:** name "Compass" (wordmark "Compass." with pink
  dot; package @free-react-templates/compass; app apps/compass). Sticky
  transparent→white navbar; full-viewport hero with picsum photo + overlay
  - pink pill CTA; big-image CTA with 3-photo picsum carousel + absolute
    pink panel (static on mobile) + indigo button; team 8 cards with hover
    social bars; approach 3 numbered steps; services 6 cards on light band;
    testimonials 4-slide slider with dots; features 2 blocks; blog 3 cards
    with News tag; contact form + info; footer with newsletter + Component
    Dock credit. All images `picsum.photos/seed/compass-N/w/h`, Roboto via
    Google Fonts link, icons via lucide-react.

## Implementation tasks

- [ ] Scaffold `apps/compass` (copy simplest existing app; package
      `@free-react-templates/compass`); `npm install` at root so
      package-lock.json registers the workspace; `public/CNAME` =
      `compass.free.componentdock.com`; homepage
      `https://compass.free.componentdock.com`; `injectUiSource()` in
      vite.config.ts; MemoryStorage polyfill in test setup if jsdom 30.
- [ ] `index.css` — @theme tokens: brand #e81050, indigo #505288, ink
      #000, light #f8f9fa/#edf0f5, Roboto font, pill radius 30px.
- [ ] `Navbar.tsx` — transparent over hero (dark logo "Compass." + pink
      dot, dark links, pink active Home), sticky white + shadow + dark
      links on scroll, right-aligned 7 links, mobile hamburger slide-in
      (aria-expanded).
- [ ] `Hero.tsx` — full-viewport picsum photo + rgba(0,0,0,0.2) overlay,
      centered white h1 "We Are The Best Consulting Agency", subtext, pill
      pink "Get Started" button.
- [ ] `CtaImage.tsx` — 3-photo carousel (prev/next or auto-advance) +
      absolute pink panel bottom-right (eyebrow "Creative Skills", h2
      "Create Your Own Web Masterpiece", white p, indigo "Read More" pill);
      panel stacks on mobile.
- [ ] `Team.tsx` — pink 40px/900 "Our Dedicated Professionals" title +
      lead; 8 cards (4/row, stack to 1 on mobile), photo, name, social bar
      slide-in on hover.
- [ ] `Approach.tsx` — intro row (title + lorem + "Learn More") + "Our
      Approach" + steps 01. Creative / 02. Strategy / 03. Production.
- [ ] `Services.tsx` — light band, "Our Services" title, 6 cards (icon,
      title, lorem, "Learn More").
- [ ] `Testimonials.tsx` — "Testimonials" title, 4-slide slider (quote +
      author), dots.
- [ ] `Features.tsx` — "Consulting Agency It's Best" + Web & Mobile
      Specialties / Intuitive Thinkers blocks with "Learn More".
- [ ] `Blog.tsx` — "BLOG" eyebrow + "Our Blog Posts", 3 cards (image,
      "News" tag, title, "Continue Reading...").
- [ ] `Contact.tsx` — light band, header + "Contact Form" (First/Last
      Name, Email, Subject, Message, pink pill "Send Message"), info
      (address/phone/email).
- [ ] `Footer.tsx` — About Us / Quick Links / Subscribe Newsletter
      (email + Send) / Follow Us socials; copyright bar with Component
      Dock credit (https://www.componentdock.com/).
- [ ] `App.tsx` — compose sections 1:1; document title "Compass —
      Consulting Agency".
- [ ] Tests (100% coverage, scenario-style per spec); gate:
      `npm run verify:app -- compass`.
- [ ] Commit `feat: add Compass (ColorLib Pointer) recreation`; PR with
      source slug, preview URL, tokens, renames; squash-merge immediately.
- [ ] After merge: mark TEMPLATES.md line 477 `[x]` + surge URL +
      homepage, `npm run readme:status`.
