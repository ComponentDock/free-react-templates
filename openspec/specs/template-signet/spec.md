# Template: Signet (Personal Portfolio / Designer)

## Purpose

Signet is a single-page personal-portfolio / designer website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Schmidt" website template (source:
https://colorlib.com/wp/template/schmidt/ — "Schmidt - Free Bootstrap 5
Template by Colorlib"), built under a DIFFERENT name (Signet — a personal
seal/signet, a designer's distinctive mark, fitting a personal-portfolio
brand; single lowercase word, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-14), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The source appears FOUR times in TEMPLATES.md (dup-row trap): line 624
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one),
line 2425 (**Personal (53)**), line 2561 (**Portfolio (89)**) and line 2725
(**Resume (20)**) — all four are `- [ ]` rows of the SAME template. ONE
implementation covers all four rows (mark all `[x]` with the same surge URL
at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Schmidt" — personal portfolio / resume website
  template (a UI/UX designer's one-page-plus-subpages site). Bootstrap 5
  based (bootstrap.min.js bundle + font-awesome 4.7 + ionicons 4.5 +
  tiny-slider + glightbox + aos + animate) plus a custom `css/style.css`
  (~65 KB) that carries the real design tokens. Brand name used in the
  source copy: **"Schmt."** (the recreation brands itself **Signet** but
  keeps the same section structure, copy kinds and layout).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/schmidt/` — HTTP 200, ~10 KB HTML
  (REACHABLE — the preview is live, not a 404). The index page carries only
  the navbar + split hero; the other sections live on subpages
  (`about.html`, `services.html`, `experience.html`, `work.html`,
  `blog.html`, `contact.html` — all fetched and parsed, HTTP 200). Custom
  CSS `css/style.css` (~65 KB, fully extracted for tokens); libs:
  bootstrap, font-awesome 4.7 (copyright heart), ionicons 4.5 (arrow icons,
  pin), tiny-slider (hero portrait carousel + testimonial carousel),
  glightbox + aos (animations). Google Font **Poppins** (weights 300/400/500,
  inlined via cf-fonts in the head). Screenshot
  `schmidt-free-template.jpg` (1200×946, viewed in the browser) shows the
  hero: split-screen — left half white with gold uppercase subheading
  "UI/UX DESIGNER & DEVELOPER", huge black **"I'm John Schmidt"**, gold
  **More About Me** + white **Hire Me** buttons; right half solid
  mustard-gold `#d5c455` with the portrait of John Schmidt (round glasses,
  beard, plaid blazer, arms crossed); copyright line bottom-left.
- **Visual design (from DOM + CSS tokens + screenshot):** high-contrast
  minimalist split hero on a light-gray `#f8f8f8` page. The signature move
  is the **gold `#d5c455`** brand color: it fills the right 50% of the hero
  (behind the portrait carousel), the primary buttons, section eyebrows,
  counter numbers, progress bars, resume icon circles, pricing numbers,
  form focus borders and all hover accents. Body text is muted gray
  `#999999` on `#f8f8f8`, headings near-black `rgba(0,0,0,0.8)` /
  `#222222`, cards are white with soft shadows and 3–4px radii, buttons are
  **sharp-cornered** (radius 0), small (12px), uppercase, letter-spaced.
  Sections: About (with a 2×2 counter card grid), Skills (gold progress
  bars), Testimonials (light band, carousel), Services (8 white cards that
  flip to gold on hover), Pricing (4 white plans), Experience (timeline of
  white resume cards with gold circular icons), Works (3×3 portfolio grid,
  gold overlay on hover), Blog (4-col card grid on light band), Contact
  (info boxes + form + map), minimal single-line footer.
- **Section order (1:1, verified from live DOM — index + subpages):**
  1. **Navbar** (`nav.navbar.ftco-navbar-light`, transparent, `position:
absolute; top: 20px` over the hero): brand **"Schmt."** left, nav
     links **Home · About · Services · Experiences · Works · Blog ·
     Contact** right (`.navbar-nav ms-auto`); on mobile (≤991.98px) the bar
     switches to solid **`#222222`** and becomes `position: relative`, with
     a hamburger toggler. Recreation: brand "Signet.", same 7 links,
     hamburger → mobile panel.
  2. **Hero** (`section.hero-wrap`, `height: 100vh`, `background-attachment:
fixed`): left column (`col-lg-6`, white) — gold uppercase subheading
     **"UI/UX Designer & Developer"** (16px/700, letter-spacing 1px), h1
     **"I'm John Schmidt"** (80px/700/`#222222`, mobile 30px), buttons
     **More About Me** (`btn btn-primary p-4 py-3`, gold bg + white text +
     ion-ios-arrow-round-forward icon) and **Hire Me** (`btn btn-white p-4
py-3`, white bg + black text + arrow icon); absolute bottom-left
     copyright line (13px, `rgba(0,0,0,0.4)`). Right column (`col-lg-6`) —
     a **50%-width gold `#d5c455` overlay** (`.hero-wrap .overlay`,
     `width: 50%`) behind a **tiny-slider portrait carousel**
     (`.carousel-about`, 2 items: `images/jschmidt.png`,
     `images/jschmidt-2.png`).
  3. **About + counters** (`section.ftco-section.ftco-about-section`,
     white): left column — 2×2 **counter grid** (`.section-counter`,
     white `.counter-wrap` cards, `padding: 60px 30px`): **5000 Happy
     Clients · 1200 Projects Done · 500 Cups of Coffee · 587 Working
     Hourse** (number 40px/700 gold, caption `#222222`, count-up on
     scroll); right column — eyebrow **About Me**, h2 **"A UI/UX Designer
     & Web Developer Based in Philippines"** (40px/600), lorem paragraph,
     two-column `.about-info` list (**Name:** Clyde Nowitzki · **Date of
     birth:** January 01, 1990 · **Address:** San Francisco CA 97987 USA /
     **Zip code:** 1000 · **Email:** cydenowitzki@gmail.com · **Phone:**
     +1-2234-5678-9-0 — gold values, black labels) and **Download CV**
     button (`btn btn-primary py-3 px-4`).
  4. **Skills** (`section.ftco-section.testimony-section`, white): eyebrow
     **Skills**, h2 **"My Skills"**; 9 gold **progress bars** (`.progress`
     8px, `background: rgba(0,0,0,0.05)`; `.progress-bar` gold with a
     34px square end-cap): **Adobe Photoshop 90% · Figma 95% · Adobe
     Illustrator 90% · Javascript 85% · HTML5 95% · CSS3 90% · WordPress
     70% · Adobe XD 80% · SEO 80%** (label above bar, percentage above
     right end).
  5. **Testimonials** (`section.ftco-section.testimony-section.bg-light`,
     `#f8f8f8`): eyebrow **Testimonial**, h2 **"Happy Guests"**; tiny-slider
     carousel of quote cards (`.testimony-wrap`, white, radius 4px, shadow,
     80px round avatar, quote paragraph "A small river named Duden flows by
     their place…", name **Roger Scott** 22px/700 `#222222`, role
     **Marketing Manager** gold uppercase; gold corner circle icon
     bottom-right 30px); pagination dots.
  6. **Services** (`section.ftco-section`, white): eyebrow **What I Do?**,
     h2 **"Our Services"**-style heading; 8 cards (`.services`, white,
     `padding: 30px`, radius 3px, shadow `0 5px 25px -2px rgba(0,0,0,0.06)`)
     in a responsive grid — **UI/UX Design · Web Development · Graphic
     Design · Branding · Marketing · Mobile App Design · Visual Editor ·
     IT Consultancy**; each: 70px gold flaticon icon (`flaticon-ux`,
     `flaticon-web-programming`, `flaticon-vector`, `flaticon-branding`,
     `flaticon-bullhorn`, `flaticon-app-development`, `flaticon-data`,
     `flaticon-consulting`), h2 title (20px/600), short paragraph; **hover:
     card bg → gold `#d5c455`, icon + text → white**.
  7. **Pricing** (`section.ftco-section`, white): eyebrow **Pricing**, h2
     **"Choose Your Pricing Plan"**; 4 plans (`.block-7`, white, radius 4px,
     padding 30px, shadow `0 24px 48px -13px rgba(0,0,0,0.05)`):
     **$49 Personal · $79 Professional · $109 Medium Business · $149
     Gigantic Business** (price number 50px gold, plan name 18px/500
     `#222222`), each with 5 features (**Strategic Alliance · Growth
     Expansion · Business Planning · Contact Negotiation · Market
     Positioning**, even rows `#f8f8f8`, gold check icons) and a **Get
     Started** gold button (60% width, centered).
  8. **Experience** (`section.ftco-section`, white): eyebrow
     **Experiences**, h2 **"My Experiences"**-style heading; 6 white
     resume cards (`.resume-wrap`, `padding: 30px`, `margin-bottom: 50px`)
     in a 2-column timeline — **2014-2015 Master Degree of Design ·
     2014-2015 Bachelor's Degree of C.A · 2014-2015 Diploma in Computer ·
     2014-2015 Art & Creative Director · 2015-2017 Wordpress Developer ·
     2018-2020 UI/UX Designer**; each: 60px **gold circular icon**
     (`flaticon-graduated` for education, `flaticon-work-from-home` for
     work; `margin-top: -60px` overlapping the card edge), gold date, h2
     (24px/500), position **Google Inc.** with pin icon (13px/500
     `#b3b3b3`), lorem paragraph.
  9. **Works** (`section.ftco-section`, white): eyebrow **Portfolio**, h2
     **"My Works"**-style heading; 9 portfolio cards (`.project`,
     `height: 350px`, `col-md-4` grid) using `project-1..9.jpg`; each: bg
     image, **gold `#d5c455` overlay on hover** (opacity 0.9, 0.2 on
     mobile), title **"Branding & Illustration Design"** (white, 20px) +
     category **"Web Design"** (white uppercase, letter-spacing 2px).
  10. **Blog** (`section.ftco-section.bg-light`, `#f8f8f8`): eyebrow
      **Blog Posts**, h2 **"Recent Blog"**-style heading; 8 cards
      (`.blog-entry`, white, radius 4px, `col-md-6 col-lg-3` grid): 300px
      image (`.block-20`, `image_1..8.jpg`), meta **Admin · Jan. 07, 2021 ·
      3 Comments** (uppercase 13px/500), h3 **"The Newest and Updated
      Bootstrap 5 is Here"** (22px, hover gold), excerpt paragraph;
      pagination (`.block-27`, square page links, active/hover gold).
  11. **Contact** (`section.ftco-section`, white): eyebrow **Contact us**,
      h2 **"Get In Touch"**-style heading; left column — 3 info boxes
      (`.dbox`: **Address:** 198 West 21th Street, Suite 721 New York NY
      10016 · **Email:** info@yoursite.com · **Phone:** + 1235 2355 98,
      uppercase black labels) + **"Follow us here"** social links
      (Facebook · Twitter · Instagram · Dribbbl[sic]); right column —
      contact form (`.contactForm`, Name / Email / Subject / Message
      textarea, **borderless bottom-border inputs**, gold uppercase labels,
      **Send Message** gold submit button); Google map below (`#map`).
  12. **Footer** (`footer.ftco-footer`, `padding: 2em 0`): single centered
      line "© <year> All rights reserved | This template is made with ♥ by
      Colorlib" — Colorlib credit → **Component Dock link (mandatory)**
      `https://www.componentdock.com/`.

## Design tokens

- **Brand gold:** `#d5c455` — the signature color: hero right-half overlay
  (`.hero-wrap .overlay`, width 50%), links (`a` color + hover), primary
  buttons (`.btn.btn-primary`), section eyebrows (`.heading-section
.subheading` 13px uppercase letter-spacing 2px), hero subheading, counter
  numbers (`.section-counter .number`), progress bars (`.progress-bar`),
  resume icon circles (`.resume-wrap .icon`) + dates, pricing numbers
  (`.block-7 .price .number`), service icons (`.services .icon span` 70px),
  service card hover bg, project hover overlay, about-info values,
  form-control focus border, contact labels, pagination active/hover,
  tagcloud hover, blog heading hover.
- **Dark ink:** `#222222` — hero h1 (`.hero-wrap .slider-text h1` 80px/700),
  mobile navbar bg (`.ftco-navbar-light` ≤991.98px → `background:
#222222`), resume card titles, counter captions, pricing plan names.
- **Headings:** `rgba(0,0,0,0.8)` — h1–h5 default (line-height 1.5, weight
  400); section h2s 40px/600 (`.heading-section h2`).
- **Body text:** `#999999` on page bg **`#f8f8f8`** (body 16px, line-height
  1.8, Poppins); muted grays `#b3b3b3` (resume position), `#6c757d`
  (Bootstrap gray).
- **Light sections:** `#f8f8f8` (`.bg-light` — testimonials, blog bands) and
  `#f8f9fa` where Bootstrap's light is used; body itself `#f8f8f8`.
- **Card bg:** `#fff` — services/resume/pricing/blog/testimonial/counter
  cards, all with soft shadows (services `0 5px 25px -2px rgba(0,0,0,0.06)`,
  block-7 `0 24px 48px -13px rgba(0,0,0,0.05)`, blog-entry `0 10px 25px
-13px rgba(0,0,0,0.1)`).
- **Buttons:** `.btn` base — **radius 0 (sharp)**, padding 9px 12px,
  font-size 12px, weight 700, uppercase, letter-spacing 1px, shadow `0px
24px 36px -11px rgba(0,0,0,0.09)`; `.btn.btn-primary` — **gold `#d5c455`
  bg + white text**, hover → transparent bg + gold text; `.btn.btn-white` —
  white bg + black text, hover → transparent + white text; arrow icon span
  (16px) after label (ionicons → lucide `ArrowRight`/`ArrowDown`).
- **Radii:** 0 on buttons; 3px service cards; 4px blog/testimonial/pricing
  cards + pagination; 2px form controls; 50% circular icons/avatars.
- **Fonts (Google Fonts `<link>` in `index.html`):**
  `family=Poppins:wght@300;400;500;600;700` — Poppins for headings and body
  (source's declared family, weights 300/400/500 seen in the preview).
- **Section padding rhythm:** `.ftco-section` padding **8em 0** (mobile 6em);
  hero 100vh; page banner (`.hero-wrap.hero-wrap-2`) 300px with breadcrumbs
  (Home / <page>, 14px uppercase) + h1 `.bread` 40px/600 `#222222`.
- **Icons:** flaticon (ux, web-programming, vector, branding, bullhorn,
  app-development, data, consulting; graduated, work-from-home) + ionicons
  (arrow-round-forward, pin) + font-awesome (heart) in the source →
  **lucide-react** in the recreation (Palette, Code, PenTool, Fingerprint,
  Megaphone, Smartphone, BarChart3/Database, Briefcase; GraduationCap,
  Laptop; ArrowRight, ArrowDown, MapPin, Heart).
- **Forms:** `.form-control` height 45px, radius 2px, border
  `1px solid rgba(0,0,0,0.1)`, placeholder `rgba(0,0,0,0.3)`, focus border
  gold; `.contactForm` variant — borderless with bottom-border only,
  gold uppercase 12px labels.
- **Counters:** count-up on scroll (source uses counterup); values 5000 /
  1200 / 500 / 587.

## Requirements

### Requirement: Header navigation

- **GIVEN** the Signet page is loaded
- **WHEN** the user views the top of the page
- **THEN** a transparent navbar SHALL render over the hero with the SIGNET
  brand/logo left, nav links Home · About · Services · Experiences · Works ·
  Blog · Contact right
- **AND** on viewports ≤ the mobile breakpoint the navbar SHALL switch to a
  solid `#222222` bar with a hamburger toggler

#### Scenario: Mobile navigation

- **GIVEN** the Signet page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a mobile menu SHALL open with the same links and a close control

### Requirement: Hero

- **GIVEN** the Signet page is loaded
- **WHEN** the user views the hero
- **THEN** a 100vh split hero SHALL render a white left column with the gold
  uppercase subheading **"UI/UX Designer & Developer"**, the dark h1 **"I'm
  John Schmidt"**, a gold **More About Me** button and a white **Hire Me**
  button, and a gold `#d5c455` right half with a portrait photo

#### Scenario: Hero portrait carousel

- **GIVEN** the hero is displayed
- **WHEN** the user views the right half
- **THEN** a carousel SHALL cycle the portrait images (2 slides) with
  controls/dots, or render a static portrait with the same gold treatment

#### Scenario: Hero CTAs

- **GIVEN** the hero is displayed
- **WHEN** the user clicks **More About Me** or **Hire Me**
- **THEN** the buttons SHALL be dead-end links (no navigation required)

### Requirement: About section

- **GIVEN** the user scrolls past the hero
- **WHEN** the about section is displayed
- **THEN** a white split section SHALL show a 2×2 counter card grid (5000
  Happy Clients · 1200 Projects Done · 500 Cups of Coffee · 587 Working
  Hourse) on the left and, on the right, the eyebrow **About Me**, the h2
  **"A UI/UX Designer & Web Developer Based in Philippines"**, a paragraph,
  the two-column about-info list (Name / Date of birth / Address / Zip code
  / Email / Phone with gold values) and a **Download CV** gold button

#### Scenario: About info list

- **GIVEN** the about section is displayed
- **WHEN** the user reads the info list
- **THEN** all six label/value pairs SHALL match the source copy

### Requirement: Skills

- **GIVEN** the user scrolls past the about section
- **WHEN** the skills section is displayed
- **THEN** the eyebrow **Skills**, the h2 **"My Skills"** and 9 gold
  progress bars SHALL render — Adobe Photoshop 90%, Figma 95%, Adobe
  Illustrator 90%, Javascript 85%, HTML5 95%, CSS3 90%, WordPress 70%, Adobe
  XD 80%, SEO 80% — each with its label and percentage

#### Scenario: Skill bar values

- **GIVEN** the skills section is displayed
- **WHEN** the user reads the bars
- **THEN** the nine skill names and percentages SHALL match the source

### Requirement: Testimonials

- **GIVEN** the user scrolls past the skills
- **WHEN** the testimonials section is displayed
- **THEN** a light `#f8f8f8` section SHALL show the eyebrow **Testimonial**,
  the h2 **"Happy Guests"** and a carousel of quote cards with a round
  avatar, a quote paragraph, the name **Roger Scott** and the role
  **Marketing Manager**

#### Scenario: Testimonial card content

- **GIVEN** a testimonial card is displayed
- **WHEN** the user reads it
- **THEN** it SHALL show an avatar, quote, name and role with the gold
  corner icon treatment

### Requirement: Services

- **GIVEN** the user scrolls past the testimonials
- **WHEN** the services section is displayed
- **THEN** a white section SHALL show 8 cards — UI/UX Design, Web
  Development, Graphic Design, Branding, Marketing, Mobile App Design,
  Visual Editor, IT Consultancy — each with a 70px gold icon, a title and a
  short paragraph

#### Scenario: Service card hover

- **GIVEN** a service card is displayed
- **WHEN** the user hovers over it
- **THEN** the card background SHALL turn gold `#d5c455` and the icon and
  text SHALL turn white (matching the source's hover state)

### Requirement: Pricing

- **GIVEN** the user scrolls past the services
- **WHEN** the pricing section is displayed
- **THEN** the eyebrow **Pricing**, the h2 **"Choose Your Pricing Plan"** and
  4 white plan cards SHALL render — $49 Personal, $79 Professional, $109
  Medium Business, $149 Gigantic Business — each with the 5 features
  (Strategic Alliance, Growth Expansion, Business Planning, Contact
  Negotiation, Market Positioning) and a gold **Get Started** button

#### Scenario: Get Started button

- **GIVEN** a pricing card is displayed
- **WHEN** the user clicks **Get Started**
- **THEN** the button SHALL be a dead-end link (no navigation required)

### Requirement: Experience

- **GIVEN** the user scrolls past the pricing
- **WHEN** the experience section is displayed
- **THEN** a white section SHALL show 6 resume cards — 2014-2015 Master
  Degree of Design · 2014-2015 Bachelor's Degree of C.A · 2014-2015 Diploma
  in Computer · 2014-2015 Art & Creative Director · 2015-2017 Wordpress
  Developer · 2018-2020 UI/UX Designer — each with a gold circular icon, a
  gold date, the title, the position **Google Inc.** and a paragraph

#### Scenario: Resume card layout

- **GIVEN** an experience card is displayed
- **WHEN** the user reads it
- **THEN** the card SHALL show icon, date, title, position and paragraph
  with the icon circle overlapping the card's top edge (source: `margin-top:
-60px`)

### Requirement: Works

- **GIVEN** the user scrolls past the experience
- **WHEN** the portfolio section is displayed
- **THEN** a white section SHALL show a 3-column grid of 9 portfolio cards,
  each with an image, a gold overlay on hover, the title **"Branding &
  Illustration Design"** and the category **"Web Design"**

#### Scenario: Project hover

- **GIVEN** a project card is displayed
- **WHEN** the user hovers over it
- **THEN** the gold `#d5c455` overlay SHALL fade in with the title and
  category text (on mobile the overlay SHALL stay at 0.2 opacity)

### Requirement: Blog

- **GIVEN** the user scrolls past the works
- **WHEN** the blog section is displayed
- **THEN** a light `#f8f8f8` section SHALL show a responsive 4-column grid
  of 8 post cards — each with a 300px image, meta (Admin · Jan. 07, 2021 ·
  3 Comments), the title **"The Newest and Updated Bootstrap 5 is Here"**
  and an excerpt — plus pagination

#### Scenario: Read More link

- **GIVEN** a blog card is displayed
- **WHEN** the user clicks its title
- **THEN** the link SHALL be a dead-end link (no navigation required)

### Requirement: Contact

- **GIVEN** the user scrolls past the blog
- **WHEN** the contact section is displayed
- **THEN** a white section SHALL show 3 info boxes (Address: 198 West 21th
  Street, Suite 721 New York NY 10016 · Email: info@yoursite.com · Phone: +
  1235 2355 98), the **"Follow us here"** social links (Facebook, Twitter,
  Instagram, Dribbbl), and a contact form with Name, Email, Subject and
  Message fields and a gold **Send Message** button

#### Scenario: Contact form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits it
- **THEN** the form SHALL validate required fields and SHALL NOT navigate
  (a success message or dead-end submit is acceptable)

### Requirement: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** a minimal centered footer SHALL show the copyright line with a
  link to **https://www.componentdock.com/** ("Component Dock") — mandatory
  footer convention; no ColorLib credit

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user reads the bottom bar
- **THEN** a link to **https://www.componentdock.com/** labeled
  "Component Dock" SHALL be present and no ColorLib credit SHALL appear

### Requirement: Responsive layout

- **GIVEN** the Signet page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the hero SHALL stack (text above the gold portrait, overlay
  opacity 0), the counter/skills/services/pricing/experience/works/blog
  grids SHALL collapse to fewer columns, the navbar SHALL use the solid
  `#222222` bar with hamburger menu, and all buttons SHALL remain tappable

#### Scenario: Stacked layout

- **GIVEN** the Signet page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** every multi-column section SHALL stack appropriately with
  tappable buttons and the header SHALL use the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-signet`
- [ ] `scripts/verify-app.sh signet` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar (SIGNET
      brand + Home/About/Services/Experiences/Works/Blog/Contact; solid
      `#222222` on mobile) → hero (white left: gold "UI/UX Designer &
      Developer" eyebrow + dark "I'm John Schmidt" 80px + gold More About Me + white Hire Me; gold `#d5c455` right half + portrait carousel) →
      about (2×2 counters 5000/1200/500/587 + About Me split + about-info +
      Download CV) → skills ("My Skills", 9 gold bars 90/95/90/85/95/90/
      70/80/80%) → testimonials (`#f8f8f8`, Happy Guests, Roger Scott
      carousel) → services (8 white cards, gold icons, hover → gold bg) →
      pricing (4 plans $49/$79/$109/$149, 5 features each) → experience (6
      resume cards w/ gold icon circles) → works (9 "Branding & Illustration
      Design" cards, gold hover overlay) → blog (`#f8f8f8`, 8 post cards +
      pagination) → contact (3 dboxes + Follow us here + form + map) →
      footer (single line, Component Dock link)
- [ ] Brand tokens in `@theme`: `#d5c455` gold (buttons, links, hero right
      overlay, eyebrows, counters, progress bars, resume icons, pricing
      numbers, hover states), `#222222` dark ink (hero h1, mobile navbar,
      card titles), `rgba(0,0,0,0.8)` headings, `#999999` body text,
      `#f8f8f8` page bg + bg-light bands, `#fff` cards, `#b3b3b3` muted —
      all via Tailwind classes
- [ ] Fonts: Poppins (headings + body) via Google Fonts `<link>` in
      `index.html`
- [ ] Buttons: `.btn` sharp-cornered (radius 0), 12px uppercase
      letter-spaced; `.btn-primary` gold bg + white text (hover: transparent
      bg + gold text); `.btn-white` white bg + black text (hover:
      transparent + white text); arrow icons after labels
- [ ] Placeholder images via `picsum.photos/seed/signet-<n>/<w>/<h>` (2 hero
      portraits, 9 project images, 8 blog images, testimonial avatar(s);
      screen seeds before pinning — seed-screening method), icons from
      lucide-react (Palette, Code, PenTool, Fingerprint, Megaphone,
      Smartphone, BarChart3, Briefcase, GraduationCap, Laptop, ArrowRight,
      ArrowDown, MapPin; probe exports first — no brand icons; use inline
      SVG for socials)
- [ ] Brand renamed "Schmt."/"Schmidt"/"Colorlib" → "Signet" everywhere;
      footer MUST link `https://www.componentdock.com/`; all links/forms
      dead-end without navigation (except the componentdock link)
- [ ] Source copy quirks: "Working Hourse" (typo in counter caption),
      "Dribbbl" (typo in contact socials) — normalize or keep, note in PR;
      demo content repeats (Roger Scott ×5, same blog title ×8, same project
      title ×9, "Google Inc." ×6) — vary placeholder copy for realism but
      keep the same kind of content
- [ ] Multi-page source → single-page recreation: all sections stacked on
      one page (source's subpages About/Services/Experiences/Works/Blog/
      Contact become anchored sections); no client-side router needed
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL FOUR `- [ ]` rows
      (lines 624 Bootstrap 5, 2425 Personal, 2561 Portfolio, 2725 Resume)
      `[x]` with the same surge URL + `npm run readme:status`
