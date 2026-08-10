# Derrick (ColorLib "Engineers") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-derrick` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Engineers" — industrial/engineering company
  template (source: https://colorlib.com/wp/template/engineers/). Listed in
  TEMPLATES.md (Bootstrap section, line 386; duplicate entries at lines 996,
  1346 and 1945 — mark EVERY copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/engineers/ — reachable.
  Fetched: `/tmp/engineers-prep/preview.html` (22.8 KB), `css/style.css`
  (29.3 KB), `css/bootstrap.min.css` (28.7 KB — carries `--primary`).
  Screenshot `engineers-free-template.jpg` (1200×946, viewed in browser).
  Preview DOM and screenshot agree — bold industrial aesthetic: white header
  strip (logo + 3 orange-icon contact columns), solid ORANGE `#ff5e15`
  navbar with white uppercase links (sticky on scroll), full-screen
  engineering-tools photo hero slider (white square arrows + bar dots),
  alternating white and deep-navy `#09162a` sections, black footer.
- **Visual design:** high-contrast corporate. Body text gray on white,
  headings black Oswald; the navbar strip is the strongest brand element
  (orange with white text). Navy `#09162a` bands: Why Choose Us (photo
  overlapping the section above by ~150px), Get A Quote (underline-only
  inputs), Our Projects carousel (overhangs the next section by ~200px;
  cards reveal category + title on hover with a 0.7 black overlay and image
  scale 1.2). Orange band: newsletter (black square "Subscribe" button).
  Footer: pure black, orange-underlined uppercase headings.
- **Fonts:** Muli (body, 300/400, 1.1rem, lh 1.7, gray) + Oswald (headings
  AND buttons, 300/400/700, uppercase, `.btn` = 14px, letter-spacing .2rem).
  Load both via Google Fonts `<link>` in `index.html`; add a `.font-display`
  utility for Oswald.
- **Structure (1:1 from the preview DOM):**
  1. Header strip `div.header-top.bg-light` — container (40px padding):
     logo (col-6 col-lg-3; `logo.png` → text logo "DERRICK" bold black
     Oswald + small orange square icon mark) · 3 × col-lg-3 (desktop only)
     quick contacts (orange 40px flaticon → lucide MapPin/Phone/Mail + h4
     1.2rem black title + 1rem gray caption): "San Francisco" / "Mountain
     View, Fake st., CA" · "000 209 392 312" / "Toll free" ·
     "info@gmail.com" / "Gournadi, 1230 Bariasl" · col-6 d-lg-none black
     hamburger right (icon-menu; `aria-expanded`).
  2. Navbar `div.site-navbar.py-2.js-sticky-header` (inside header-top,
     below logo row; desktop only `d-lg-block`) — bg `#ff5e15`, container +
     mr-auto nav: HOME (active) · ABOUT US · OUR PROJECTS · TESTIMONIALS ·
     BLOG · CONTACT — white uppercase Oswald 16px weight 900
     letter-spacing .05rem, padding 20px; active = black + 2px white
     underline (left/right 20px). Sticky on scroll (jquery.sticky clone):
     shadow `4px 0 20px -5px rgba(0,0,0,0.2)`, padding shrinks to 10px 20px.
     NO dropdowns on the index page.
  3. Hero `div.hero-slide.owl-carousel.site-blocks-cover` — 2 ×
     `div.intro-section` slides: 100vh (min-height 700px) bg photo
     (`hero_1.jpg` on both in the preview → use 2 picsum photos), overlay
     `#222` opacity .3, centered `h1` 3rem weight 300 white: "We Are
     **Leading** Industry of Engineers" / "Experts and High Quality Works"
     (strong 700). Arrows 70×70 white squares (black icon 1.7rem; hover →
     orange bg + white icon). Dots: 18×4px white bars bottom 30px, active
     `#ff5e15`. Auto-rotate optional.
  4. Services `div.site-section.services-1-wrap` — centered header: h3
     "What We Do" (orange uppercase 1.3rem w300) + h2 text-black "We Are
     **Leading Industry** of Engineering. We Love What We Do". `row
no-gutters` → 4 × `div.service-1` (col-lg-3 col-md-6): number badge
     top-right "01"–"04" (Oswald `#dcdcdc`), icon 4rem black (lucide
     HardHat/Compass/Factory/Crane) with orange triangle notch behind
     (rotated 45° square, `border-right: 40px solid #ff5e15`, left -20px),
     h3 1.5rem black w400 (Professional Team / Great Ideas / Quality
     Building / Quality Works), p 15px gray. Borders 1px `#efefef`,
     border-right none (last card restores it).
  5. Why Choose Us `div.block-2` (bg `#09162a`, `7rem 0`) — row: col-lg-6
     photo (`about_1.jpg`, `margin-top: -150px` overlap) + col-lg-5 ml-auto:
     h3 "Why Choose Us" orange, h2 white "More than **50 year experience**
     in industry", p, then 3 icon rows (orange lucide Factory/Compass/
     PencilRuler 4xl + h5 white "Expert in Buildings" (fix "Builings") /
     "Modern Design" / "Leading In Floor Planning" + small white p).
  6. Quote form `div.quote-form-wrap` (bg `#09162a`, padding 5rem) — row:
     col-lg-5 decorative image (`img_transparent.png` → picsum photo or SVG
     illustration) + col-lg-7: h3 "Get A Quote" + h2 white "Request A
     **Quote**"; `form.quote-form`: 2×2 grid (Your name* / Phone number /
     Your email* / Subject) + textarea "Message*" rows 7 + submit
     `btn-primary btn-block btn-lg rounded-0` "Send Message" (square orange,
     hover black). Inputs: transparent, bottom border 2px
     `rgba(255,255,255,0.5)`, radius 0, white text/placeholders.
  7. Our Projects `div.site-section.block-3` (bg `#09162a`, `7rem 0`,
     margin-bottom 14rem) — h3 "Our Projects" + h2 "Explore Our **Recent
     Projects**"; `div.projects-carousel-wrap` (margin-bottom -200px): 4 ×
     `div.project-item` (works_1..4.jpg → picsum): hidden contents slide up
     on hover (overlay rgba(0,0,0,0.7), img scale 1.2): span "Factory"
     (uppercase orange Oswald) + h2 white "Building Refinery". Arrows 40×40
     white squares; dots 18×4px `rgba(0,0,0,0.2)` / active `#ff5e15`
     (bottom -30px).
  8. Testimonials `div.site-section.testimonial-wrap` — centered "Testimonial"
     - "What People Says" (text-black); 2 × col-md-6 `.testimonial`: 100px
       circular avatar (`person_3_sq.jpg`/`person_4_sq.jpg`), blockquote 20px
       black w700, `p.client-name` "Matt Keygen" (Oswald uppercase 1.2rem
       orange).
  9. Blog `div.site-section.bg-light` — left header "Blog" + "News &
     Updates" (text-black); 3 × col-md-6 col-lg-4 `.blog-entry`: `a.img-link`
     photo (hover scale 1.05, overflow hidden) + h3 1.5rem black w400 link
     (preview repeats "Top Companies That Are Best In Industrial Business"
     → paraphrase per card) + `div.meta` "Posted by Admin In News" (1rem
     `#b0b0b0`, links orange).
  10. Newsletter `div.py-5.bg-primary.block-4` (orange band) — col-lg-6: h3
      white uppercase w300 "Subscribe To Newsletter" + white p; col-lg-6:
      `form.form-subscribe.d-flex`: input (2px white border, transparent
      bg, radius 0) + `btn.btn-secondary.px-4` "Subcribe" → FIX typo to
      "Subscribe" (black bg, square).
  11. Footer `div.footer` (bg `#000`, 4rem 0, 15px white) — 4 × col-lg-3:
      brand (logo2.png → text logo "DERRICK" white + orange mark; about p;
      "Learn More" link) · "Our Company" (About/News/Services/Our Team/
      Careers/Projects) · "Our Services" (Industrial/Construction/
      Remodeling) · "Contact" (Help Center/Support Community/Press/FAQ/Our
      Partners). Headings: uppercase 16px, span with 2px `#ff5e15` bottom
      border. Copyright: centered, padding-top 7rem: "© 2026 Derrick —
      Industrial engineering template".
- Inner pages (about/works/testimonials/blog/contact) NOT recreated —
  single-page index.html only; nav links can be `#` anchors.
- Images to replace with picsum: `hero_1.jpg` (×2 hero), `about_1.jpg`,
  `img_transparent.png` (quote illustration), `works_1..4.jpg` (projects),
  blog photos ×3, `person_3_sq.jpg`/`person_4_sq.jpg` (avatars) → e.g.
  `https://picsum.photos/seed/derrick-hero-1/1600/900`, `.../derrick-works-1/800/600`.

## Implementation tasks (implementer)

- [ ] Scaffold `apps/derrick` from the simplest existing app; package
      `@free-react-templates/derrick`; `npm install` at root to register the
      workspace in package-lock.json; keep `injectUiSource()` in
      `vite.config.ts`.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #ff5e15` (hover
      `#ee4a00`), `--color-navy: #09162a`, `--color-ink: #000000`,
      `--color-overlay: #222222`, `--color-light: #f8f9fa`,
      `--color-line: #efefef`, `--color-muted: #b0b0b0`, body text gray;
      Muli + Oswald via Google Fonts `<link>` in `index.html` (`.font-display`
      utility for Oswald headings/buttons/logo).
- [ ] Shared UI: use `Button`/`ButtonLink`/`cn` from `packages/ui`; icons
      from lucide-react (MapPin, Phone, Mail, Menu, HardHat, Compass,
      Factory, Crane, PencilRuler, ChevronLeft, ChevronRight, Send).
- [ ] Components (each with colocated 100%-coverage tests):
      `Header` (logo + 3 quick contacts + mobile hamburger with slide-in
      menu), `Navbar` (orange bar, 6 uppercase links, sticky-on-scroll with
      shadow), `Hero` (2-slide slider: arrows + 18×4px bar dots, overlay),
      `Services` (4 cards: number badge, icon + orange triangle notch,
      borders), `WhyChooseUs` (navy split, overlapping photo, 3 icon rows),
      `QuoteForm` (underline-only inputs, zod validation, square orange
      submit → black hover), `Projects` (4-item carousel, hover reveal,
      overhang), `Testimonials` (2 cards), `Blog` (3 cards, bg-light),
      `Newsletter` (orange band, white-bordered input, zod validation,
      square black "Subscribe"), `Footer` (4 columns + copyright).
- [ ] Tests mirror the Gherkin scenarios in
      `openspec/specs/template-derrick/spec.md`; keep 100% coverage.
- [ ] `App.tsx` composes sections in order: Header+Navbar → Hero → Services →
      WhyChooseUs → QuoteForm → Projects → Testimonials → Blog → Newsletter →
      Footer; document title "Derrick — Industrial Engineering Template".
- [ ] Self-review (docs/self-review.md) + `scripts/verify-app.sh derrick`
      green; README status regenerated after merge.
- [ ] Commit `feat: Derrick — industrial engineering template (ColorLib
    Engineers)`; PR + immediate squash merge; surge deploy
      https://free-react-templates-derrick.surge.sh.
