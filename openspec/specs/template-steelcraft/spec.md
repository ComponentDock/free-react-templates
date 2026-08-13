# Template: Steelcraft (Industrial / Manufacturing Template)

## Purpose

Steelcraft is an industrial-services company site in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Lendo"
template design (see TEMPLATES.md — appears 2×: lines 600 and 1952; both rows
point to the same source and are `- [ ]` — one prep covers both, mark ALL
`[x]` when done; verified with `grep -c 'wp/template/lendo/'` = 2), built
under a DIFFERENT name (Steelcraft — heavy-industry/steel-manufacturing
evocation fitting the industrial theme; single lowercase word, no collision
with `apps/` or existing spec folders; verified: no `apps/steelcraft`, no
`template-steelcraft` spec, no `docs/templates/steelcraft`) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/lendo/ (Bootstrap 5 category; the
page title in the live preview is "Industry | Template" — the Lendo slug
hosts ColorLib's "Industry" theme; do NOT name the app "industry" either).
Preview URL: https://preview.colorlib.com/theme/lendo/ (HTTP 200, ~33 KB
HTML fetched and parsed + `assets/css/style.css` ~72 KB fetched and parsed
for tokens — the preview slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Lendo" (rendered title "Industry") — a corporate
  INDUSTRIAL / MANUFACTURING company site. A black top-info bar + white
  sticky nav with a red "Get Free Quote" link; a full-width hero over a dark
  construction/utility street photo (white truck, orange traffic cones) with
  a `rgba(29,29,29,0.5)` overlay; a light-gray `#F2F4F8` services section
  with 4 white cards (red line icons); a brand-logo carousel on the same
  gray; a "Why Choose Us" about split with a video popup (circular white
  play button) and two red stat counters; a testimonial carousel; a black
  CTA band with a 5px red top border; a light footer with a newsletter
  input bordered red. Brand red is `#E61818`; single font family Jost.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lendo/
  (HTTP 200, ~33 KB HTML; `assets/css/style.css` ~72 KB parsed for tokens).
  The site is jQuery + Bootstrap 5 + Owl Carousel (hero/brands/testimonials)
  - Magnific Popup (video) + Slicknav (mobile menu) + FontAwesome/themify
    icon fonts — NOT Tailwind. All interactivity must be recreated
    client-side in React (no jquery/owl/slicknav/magnific-popup).
- **Screenshot note:** `lendo-free-template.jpg` (1200×946, viewed in the
  browser): thin BLACK top bar (contact info left, social icons right);
  below it the white nav bar with "Lendo" logo + red logo mark, menu Home /
  Services / Projects / About / Blog / Shop and a RED "Get Free Quote"
  button on the right; hero = dark-overlaid construction street scene
  (white truck with logo, orange cones) with centered white headline "Best
  technology and awesome service we offer" + placeholder subtext + red
  "Check Our Services" button; below the fold a light-gray section with the
  "A height level service provider that recommended to any companies"
  heading and a row of FOUR white cards with red line icons (factory,
  high-rise, growth chart, tools) — professional, clean, corporate. The
  live rendered page + parsed stylesheet are the authoritative reference.

### Design tokens (extracted from `assets/css/style.css`)

- **Brand (industrial red):** `#E61818` — `.btn_10` bg, `.header-btn`
  (Get Free Quote), `.browse-btn2` (Learn More links), `.single-counter
.counter` numbers, `.wantToWork-area::before` top border (5px),
  `.footer-form input` border, link hovers.
- **Black / near-black:** `#000000` — `.header-top` bg; `#1A1A1A` —
  `.wantToWork-area` bg + `.footer-tittle h4` headings; `#000` — `.single-cat
.cat-cap h5` card titles.
- **Dark navy text:** `#132E43` / `#131933` — `.about-low-area .pera-count`
  (counter labels); `#5E5E5E` — footer body copy.
- **Canvas / section bgs:** white `#fff` (cards, footer), `#F2F4F8`
  (`.section-bg` — categories + brand areas), `rgba(29,29,29,0.5)` hero
  overlay (`.hero-overly::before`).
- **Fonts (Google Fonts `<link>` in index.html):** `"Jost", sans-serif`
  everywhere — body 16px; hero h1 large/bold; `.section-tittle h2` 40px
  weight 400 line-height 1.2 (with left padding + red tick bar);
  `.single-counter .counter` 50px/600.
- **Buttons — flat, radius 0:** `.btn_10` (bg `#E61818`, white text,
  18px/400, padding `21px 33px 21px 25px`, `border:none`, arrow icon with
  `margin-left:8px`). `.header-btn` text-style red link (14px/500, padding
  `0 3px`) in the top bar. `.browse-btn2` red text 16px + arrow.
- **Cards:** `.single-cat` white, `border-radius:5px`, `padding:30px 20px
25px`, centered, `.cat-icon` `margin-bottom:25px`, `h5` 20-21px/500
  `#000`; hover transition all .4s. `.single-brand` logo slides.
- **Video:** `.video-icon a` — 100×100 white circle, `border-radius:50%`,
  play glyph `#F04506` (orange-red), centered over the section bg image.
- **Testimonial:** `.testimonial-area` with centered `.single-testimonial`
  cards — quote text, `.testimonial-founder` (name + role); carousel dots
  (`.h1-testimonial-active.dot-style`).
- **Section rhythm:** `.categories-area` padding `100px 70px` (top/bottom
  edge), `.wantToWork-area` dark band with 5px `#E61818` top border,
  `.footer-form input` white bg + `1px solid #E61818` border, radius 0,
  height 43px.
- **Footer:** light; `h4` headings `#1A1A1A` 20px/600, body `#5E5E5E` 16px
  line-height 1.8, `ul li` 15px bottom margin; bottom bar with copyright +
  social icons.

### Section structure (from the live DOM, top to bottom)

1. `div.header-area.header-transparent`:
   - `div.header-top` (d-none d-sm-block, bg `#000000`): left
     `div.header-info-left` — phone "+10 (78) 675-9064", email
     "technology@industry.com", hours "Sun - Fri (10AM - 7PM)"; right
     `div.header-right-btn.f-right.ml-15` — `a.header-btn` "Get Free
     Quote" (red, 14px).
   - `div.header-bottom.header-sticky` (`div.main-header`): logo (red
     mark + "Steelcraft") + nav `ul`: Home, Services, Projects, About,
     Blog, Blog Details, Elements, Contact (render the top-level six;
     drop or flatten the demo subpages) + mobile hamburger (slicknav →
     client-side toggle, `aria-expanded`).
2. `div.slider-area > div.slider-active.dot-style` — hero carousel,
   `div.single-slider.slider-height.hero-overly.slider-bg1` (bg photo
   `h1_hero.jpg` + `rgba(29,29,29,0.5)` overlay), centered `col-xl-7`:
   `div.hero-caption` — `h1` "Best technology and awesome service we
   offer", `p` "Ullamcorper fringi tortor consec adipis elit sed do
   eiusmod tempor.", `a.btn_10.hero-btn` "Check Our Services" + arrow
   (→ services section). The static HTML contains ONE slide; implement a
   single-slide hero (or a 2-slide carousel with client-side dots — one
   slide is faithful to the served DOM).
3. `section.categories-area.section-bg` (#F2F4F8):
   - `div.section-tittle.mb-70` — `span` "Services" (eyebrow) + `h2`
     "A height level service provider that recommended to any companies".
   - 4 × `div.single-cat.text-center.mb-30` (`col-lg-3 col-md-4 col-sm-6`):
     `div.cat-icon` (red line icon: factory / high-rise / growth chart /
     tools) + `div.cat-cap` `h5` title + `a.browse-btn2` "Learn More" +
     arrow. NOTE: the live preview repeats "Power and Energ" on all 4
     cards — VARY to distinct industrial services (e.g. Power and Energy,
     Gas & Oil — both appear in the page's JSON-LD, Construction, Chemical
     Research).
4. `section.brand-area.section-bg` — `div.brand-active.pt-50.pb-40`
   logo carousel: 5–6 `div.single-brand` slides (brand1–4 png, repeated;
   recreate as grayscale text/logo marks, no assets copied).
5. `section.about-low-area.fix` — two columns
   (`row.justify-content-between.align-items-center`):
   - left `col-xl-5`: `div.video-area.section-img-bg2.d-flex
align-items-center` (bg photo `video-bg.jpg` cover) >
     `div.video-wrap.position-relative` > `div.video-icon` >
     `a.popup-video.btn-icon` (100px white circle, play glyph) → YouTube
     modal (client-side dialog or link to the same video).
   - right `col-xl-6`: `div.about-caption` (`padding-left:50px`) —
     `div.section-tittle.section-tittle3.mb-20` `span` "Why Choose Us" +
     `h2` "We Are Largest Independent Manufacturing Company"; `p` lorem
     ("There are many variations of passages of Lorem Ipsum…"); two
     `div.single.mb-30` counters — `div.single-counter` `span.counter`
     "450" (+ suffix "+") / "860" with `div.pera-count` labels
     "Successfully completed projects" / "Highly specialised employees";
     `a.btn_10` "Learn More".
6. `section.testimonial-area.fix.top-padding` — `div.section-tittle`
   `h2` "Testimonial"; `div.h1-testimonial-active.dot-style` carousel of
   3 `div.single-testimonial.position-relative` — quote "Vestibulum ante
   ipsum primis in faucibus orci luctus…", `div.testimonial-founder` —
   name "Robart Brown" (VARY names) + role "Creative designer at Colorlib"
   (REPLACE the Colorlib role with a neutral job title, e.g. "Creative
   Designer"); client-side cycling + dots.
7. `section.wantToWork-area.w-padding2` (bg `#1A1A1A`, 5px `#E61818` top
   border) — centered: `h2` "Any help needed?" (white), `p`
   "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
   posuere cubilia.", `a.btn_10` "Contact Us" (→ contact/footer).
8. `footer.footer-area.footer-padding` (light) — `div.footer-wrapper`:
   - `div.single-footer-caption.mb-30` (about): `div.footer-logo.mb-35`
     (logo) + `div.footer-pera` `p` "Duis aute irure dolor inasfa
     reprehenderit in voluptate velit esse cillum" + contact lines:
     phone "10 (87) 738-3940", email "contact@carwash.com" (paraphrase —
     the carwash email is a demo artifact).
   - `div.single-footer-caption.mb-50` `div.footer-tittle.mb-50` "Navigation"
     — Home, About, Services, Blog, Contact.
   - `div.single-footer-caption.mb-50` "Services" — Drone Mapping, Real
     State, Commercial, Construction.
   - `div.single-footer-caption.mb-30` `div.footer-tittle.mb-50` "Subscribe
     newsletter" + `div.footer-form` (input + submit icon button, red
     border) + `p` "Subscribe our newsletter to get updates about our
     services and offers.".
   - `div.footer-bottom-area` > `div.footer-border` > `div.footer-copy-right
.text-center` — copyright line + social icons (the original "made
     with by Colorlib" credit is REPLACED with the mandatory Component
     Dock link https://www.componentdock.com/).

## Requirements

### Requirement: Header (black top bar + sticky nav + mobile menu)

The system SHALL render a top info bar, a sticky navigation bar, and a
responsive mobile menu.

#### Scenario: Top bar and nav

- **GIVEN** the Steelcraft app is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL have a black background and show on the left
  the phone, email, and opening-hours info (hidden on mobile)
- **AND** SHALL show on the right a red "Get Free Quote" link
- **AND** the nav bar SHALL show the "Steelcraft" logo and the links Home,
  Services, Projects, About, Blog, Contact — red hover state
- **AND** the nav SHALL become sticky/fixed on scroll (header-sticky)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user opens the hamburger toggle
- **THEN** the nav SHALL be shown in a slide-in panel with an
  `aria-expanded` toggle and the links SHALL remain usable

### Requirement: Hero

The system SHALL render a full-width hero over a darkened background photo
with a headline, subtext, and one red CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the user is at the top of the page
- **THEN** the hero SHALL show a full-width industrial street photo (cover)
  with a `rgba(29,29,29,0.5)` overlay
- **AND** SHALL contain a centered h1 "Best technology and awesome service
  we offer", a paragraph, and a flat red "Check Our Services" button
  (white text, radius 0, arrow icon) that anchors to the services section

### Requirement: Services section (categories)

The system SHALL render a light-gray services section with an eyebrow,
a heading, and four white service cards.

#### Scenario: Services content

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a `#F2F4F8` background and show the
  eyebrow "Services" and the h2 "A height level service provider that
  recommended to any companies"
- **AND** SHALL show four white cards (radius 5px, centered), each with a
  red line icon, a title (distinct industrial services — vary the demo's
  repeated "Power and Energ"), and a red "Learn More" link with an arrow

### Requirement: Brand logo carousel

The system SHALL render a logo strip on the same gray background.

#### Scenario: Brand strip

- **GIVEN** the brand section is rendered
- **WHEN** the user scrolls past the services cards
- **THEN** SHALL show a row of 5–6 client logo marks (grayscale, no
  assets copied from ColorLib), client-side cycled or static

### Requirement: About section (Why Choose Us + video + counters)

The system SHALL render a two-column about section with a video popup and
two stat counters.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show a background photo with a centered
  100px circular white play button (play glyph `#F04506`) that opens the
  section's video (client-side modal or external link)
- **AND** the right column SHALL show the eyebrow "Why Choose Us", the h2
  "We Are Largest Independent Manufacturing Company", a paragraph, two
  counters — "450+" "Successfully completed projects" and "860+" "Highly
  specialised employees" (numbers in brand red 50px/600) — and a flat red
  "Learn More" button

### Requirement: Testimonial carousel

The system SHALL render a testimonial section with a carousel of quotes.

#### Scenario: Testimonial content

- **GIVEN** the testimonial section is rendered
- **WHEN** the user scrolls to it
- **THEN** SHALL show the h2 "Testimonial" and a carousel of at least 3
  testimonials, each with a quote, a founder name (varied), and a neutral
  job title (the demo's "Creative designer at Colorlib" role is replaced)
- **AND** SHALL show carousel dots with the active dot in brand red, and
  SHALL cycle client-side

### Requirement: CTA band (wantToWork)

The system SHALL render a dark call-to-action band with a red top border.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL have a `#1A1A1A` background with a 5px `#E61818`
  top border
- **AND** SHALL show the white h2 "Any help needed?", a paragraph, and a
  flat red "Contact Us" button

### Requirement: Footer

The system SHALL render a light footer with about/contact, Navigation and
Services link columns, a newsletter form, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** SHALL show the footer logo + blurb + contact info (phone,
  email — paraphrased, no "carwash" demo artifacts)
- **AND** SHALL show "Navigation" (Home, About, Services, Blog, Contact)
  and "Services" (Drone Mapping, Real State, Commercial, Construction)
  link columns
- **AND** SHALL show a "Subscribe newsletter" column with a white input
  bordered `1px solid #E61818` (radius 0) and a submit icon button, plus
  the promise copy
- **AND** the bottom bar SHALL show the copyright line and social icon
  links, with the credit line linking Component Dock
  (https://www.componentdock.com/) — the Colorlib credit is replaced

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh steelcraft`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#E61818`,
      ink `#1A1A1A`/`#000`, navy text `#132E43`, section-bg `#F2F4F8`,
      overlay `rgba(29,29,29,0.5)`, video play `#F04506`)
- [ ] Jost loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header top bar +
      nav → hero → services → brand strip → about + video + counters →
      testimonial → CTA band → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/steelcraft-<n>/<w>/<h>`
      (hero bg — screen an industrial/urban seed, video bg, brand marks);
      NO assets copied from ColorLib
- [ ] Buttons flat radius 0: `.btn_10` red bg / white text / arrow icon
      ("Check Our Services", about "Learn More", CTA "Contact Us");
      "Learn More" card links red text + arrow; "Get Free Quote" red
      text link in the black top bar
- [ ] Service cards white radius 5px, centered icon + title + link;
      counter numbers `#E61818` 50px/600
- [ ] Icons from lucide-react (play, arrow-right, phone, mail, clock,
      social brand paths). Verify every lucide export with the typeof
      probe; NO fontawesome / themify icon fonts
- [ ] Interactivity client-side only: sticky header, mobile menu toggle,
      hero/brand/testimonial cycling + dots, video popup, newsletter form
      validation/success (no jquery/owl/slicknav/magnific-popup)
- [ ] Footer phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal
      redaction pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (4 service card titles, testimonial
      names, footer email) — same kinds of content, no duplicated strings;
      the "Creative designer at Colorlib" role replaced with a neutral job
      title
- [ ] Footer links Component Dock (https://www.componentdock.com/) —
      replaces the original "Colorlib" credit
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark BOTH lendo rows `[x]` (lines 600 and 1952) +
      surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (steelcraft.free.componentdock.com) returns 200
