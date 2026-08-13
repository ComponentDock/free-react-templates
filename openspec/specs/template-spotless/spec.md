# Template: Spotless (Cleaning Services)

## Purpose

Spotless is a cleaning-services landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Cleaning"
design (https://colorlib.com/wp/template/cleaning/, "Bootstrap 5" category),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript. "Spotless" is a NEW original name — the ColorLib source name is
never reused in app code.

The original is a single-page cleaning-company landing (Bootstrap 5, internal
brand "Rockville"): a dark navy (#16273f) header with the Rockville display
wordmark, centered white nav links (Home / About / Services / Pages / Blog /
Contact) and a yellow pill "Appointment" button; a full-width photo hero
(window being cleaned) with a white organic-blob text panel on the left
(eyebrow "The best cleaning service ever", dark headline "We Will Make
Absolutely Any Place Clean, Neat", yellow pill "Free quote" button) and a
gloved-hand spray-bottle photo on the right; an about split (woman cleaner
thumbs-up photo left, "About cleaning company" eyebrow, "Better life for
everyone" heading, copy, yellow "Learn More" button); a services section
("Our services" / "Better life for everyone", 6 icon cards each with title,
"Starting from $50.00", a "Book now" button, and a hover overlay that slides
up); a "Why People Choose us?" section (4 centered icon feature blocks:
Professional, Eco-friendly, plus 2 more); a testimonial slider over a photo
background (quote cards with names); a team section ("Better Life For
Everyone", 4 cleaner cards + "Join us" button); a "Get Amazing Cleaning In 3
Simple Steps" work section on a photo background (01 Pick a suitable plan,
02 Set your schedule, 03 Get things done, each with a big blue circular
icon); a blog section ("News And Tricks", 3 cards with date / category /
title / views-comments meta); a "Free Call Back" CTA band over a photo with a
phone number; and a dark navy footer (address / phone / email, Company and
Services link columns, Newsletter subscribe, copyright bar). Spotless
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cleaning" — free cleaning company website template
  (source: https://colorlib.com/wp/template/cleaning/; listed in the
  "Bootstrap 5 (89)" section of TEMPLATES.md — note TEMPLATES.md contains a
  duplicate entry for this slug, both unchecked; one recreation covers both).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cleaning/`
  (HTTP 200, ~48KB) + stylesheets `css/style.css` (~41KB, unminified),
  `css/rockville.css` (custom `@font-face` "Rockville Solid Regular" woff —
  do NOT copy the font file), plus bootstrap / font-awesome / elegant-icons /
  flaticon / owl-carousel / slicknav. The rendered DOM is the structure
  ground truth below. The TEMPLATES.md screenshot
  (`cleaning-free-template.jpg`, 1200×946) confirms the design above the
  fold: dark navy header bar with white nav links and a yellow pill
  "APPOINTMENT" button; hero = full-width window-cleaning photo background
  with a white organic blob panel on the left (uppercase eyebrow, large dark
  bold headline, yellow "FREE QUOTE" pill) and a blue-gloved-hand spray
  bottle photo on the right; below, a white about split with the smiling
  woman cleaner in a blue plaid shirt + yellow gloves giving a thumbs up on
  the left. Modern flat aesthetic, generous whitespace, navy + yellow +
  white palette. NOTE: the live preview DOM hero is text-over-photo without
  the blob panel; implement the SCREENSHOT's blob/text treatment and the
  right-side glove photo (picsum) for the hero, and use the DOM for
  everything else.
- **Section order (1:1):**
  1. Header (`header` > `.header`, bg **#16273f**): `.header__logo` left —
     Rockville Solid display wordmark + icon (recreate as bold "Spotless" +
     a lucide icon, e.g. Sparkles); centered nav: Home, About, Services,
     Pages (dropdown), Pricing, Services Details, Blog Details, Blog,
     Contact (white uppercase links); right — "Appointment" button (yellow
     pill `.site-btn`). Mobile: slicknav hamburger → repo-standard mobile
     menu.
  2. Hero (`section.hero.set-bg`, `data-setbg=img/hero/hero-bg.png`, photo
     cover bg): eyebrow "The best cleaning service ever", H1 "We Will Make
     Absolutely Any Place Clean, Neat", yellow "Free quote" `.site-btn`.
     Screenshot adds the white blob text panel + right-side spray-bottle
     glove photo.
  3. About (`section.about.spad`): two columns — left photo (woman cleaner
     thumbs up; picsum); right: `.section-title` eyebrow "About cleaning
     company" + H2 "Better life for everyone" + paragraph ("At bTaskee, it
     is our duty to provide quality home services…" — paraphrase) + yellow
     "Learn More" button.
  4. Services (`section.services`): `.section-title` eyebrow "Our services" +
     H2 "Better life for everyone"; 6 `.services__item` cards (DOM repeats
     "Residential cleaning / Starting from $50.00" 4× — paraphrase to 6
     distinct services, e.g. Residential Cleaning, Commercial Cleaning,
     Office & Deep Cleaning, Move-In/Out Cleaning, Carpet & Upholstery,
     Post-Construction Cleaning): icon + title + "Starting from $50.00" +
     "Book now" button; `.services__item:hover .services__item__hover`
     slides an overlay up from the bottom.
  5. Choose us (`section.chooseus.spad`): `.section-title` eyebrow "Why
     choose us?" + H2 "Why People Choose us?"; 4 `.chooseus__item` centered
     blocks (height 274px, decorative shape background image, z-index 1):
     icon + title + text — DOM shows "Professional" and "Eco-friendly";
     paraphrase the other two (e.g. "Affordable Rates", "Fully Insured &
     Trusted").
  6. Testimonial (`section.testimonial.spad.set-bg`, photo bg, height 536px):
     owl-carousel slider (`.testimonial__slider`) of quote cards — quote
     text + name (DOM: Sophia Allison + a second card); static 2-card layout
     or a lightweight slider is fine.
  7. Team (`section.team.spad`): `.section-title` eyebrow "Our team" + H2
     "Better Life For Everyone" + "Join us" button; 4 `.team` cards: Danny
     George / Andrew Horton / Georgia Foster / Sue Burns, role "Cleaner"
     (photo + name + role).
  8. Work / how it works (`section.work.spad.set-bg`, photo bg work-bg.jpg):
     `.section-title` eyebrow "How it work" + H2 "Get Amazing Cleaning In 3
     Simple Steps"; 3 `.work__item` steps with a 170px circle icon (bg
     **#287ff9**, radius 50%): "01 Pick a suitable plan", "02 Set your
     schedule", "03 Get things done" + copy.
  9. Latest / blog (`section.latest.spad`): `.section-title` eyebrow "Our
     Blog" + H2 "News And Tricks" + "View all" link; 3 blog cards: date
     "Feb 28, 2020", category "Advertising", title, meta "25 Views ·
     02 Comments".
  10. Call to action (`section.callto.set-bg`, photo bg callto-bg.jpg):
      "Free Call Back" + copy + phone **+1 970-668-3568** (paraphrase the
      number).
  11. Footer (`.footer`, bg **#16273f**): contact info — address "777 Kansas
      Star Drive, Mulvane, KS 67110, USA", phone "+1 316-719-5000", email
      "Cleaning@support.com" (paraphrase); link columns — "Company" (About,
      Services, FAQs, Contact), "Services" (Classic, Personal, Professional,
      Premium); "Newsletter" subscribe form; copyright bar — the source's
      "made with Colorlib" becomes the Component Dock link.
- **Design tokens:**
  - Primary brand blue **#287FF9** (16× in style.css) — section-title
    eyebrow color, `.work__item__icon` circle bg, hover accents.
  - Accent yellow **#FFD823** / **#FFD723** — `.site-btn` bg
    `rgba(255,215,35,0.3)` in CSS; solid yellow in the screenshot;
    pill buttons (Appointment, Free quote, Learn More, Book now).
  - Dark navy **#16273F** — header + footer backgrounds.
  - Dark **#111111** — headings (`.section-title h2`, `.site-btn` text);
    **#444444** secondary text.
  - Muted text **#888888** / **#ADADAD**.
  - Light section backgrounds **#F1F8FF** / **#F2F8FF** (light blue) and
    **#F5F5F5**; white cards.
  - Fonts (Google Fonts): **Rubik** body + buttons (weight 500), **Bai
    Jamjuree** secondary accent text; "Rockville Solid Regular" is a custom
    woff display font — replace with bold Rubik (or a Google display font)
    for the logo, never copy the font file.
  - Buttons `.site-btn`: pill radius **50px**, uppercase, letter-spacing
    2px, font-size 14px, padding 12px 40px 10px, color #111111.
  - `.section-title` eyebrow: 16px, #287FF9, weight 700, letter-spacing
    4px, uppercase; h2: 40px, #111111, weight 500, margin-bottom 50px.
  - `.set-bg` sections: `background-repeat: no-repeat; background-size:
cover; background-position: top center`.
  - Rhythm: eyebrow → H2 → copy → button; icon + title + text card pattern;
    photo-background bands for hero / testimonial / work / callto.
- **Recreation approach:** light theme, navy #16273f header/footer + blue
  #287ff9 accents + yellow #ffd823 pill CTAs; sticky header with "Spotless"
  logo + uppercase nav + Appointment button + mobile hamburger; hero photo
  bg with white blob panel (rounded organic shape) + headline + Free quote
  pill + glove photo on the right; about split with cleaner photo; 6
  services cards (lucide icons: Home/Building/Office/BedDouble/Rug/Factory —
  hover overlay slide-up); 4 choose-us feature blocks; testimonial band with
  2 quote cards (carousel optional); team grid (4 cards); 3-step work band
  with blue circular icons; 3 blog cards; Free Call Back CTA band; dark
  4-column footer with subscribe input; all images picsum-seeded
  (`picsum.photos/seed/spotless-N/w/h`); Rubik + Bai Jamjuree via Google
  Fonts `<link>`; lucide-react icons.

## Requirements

### Requirement: Header

The system SHALL render a sticky dark-navy navigation header with a logo,
uppercase links, an Appointment CTA, and a mobile menu.

#### Scenario: Navbar

- **GIVEN** the Spotless app is rendered
- **WHEN** the page loads
- **THEN** a header with background `#16273f` SHALL show the brand
  "Spotless" (bold wordmark + lucide icon) on the left
- **AND** it SHALL show uppercase navigation links: Home, About, Services,
  Pages, Blog, Contact
- **AND** it SHALL show a yellow pill "Appointment" button on the right

#### Scenario: Mobile menu

- **WHEN** the viewport is narrow
- **THEN** the links SHALL collapse behind a hamburger toggle
- **AND** clicking the toggle SHALL open/close the menu

### Requirement: Hero

The system SHALL render a full-width hero over a photo background with a
headline, eyebrow, CTA, and a side photo.

#### Scenario: Hero content

- **GIVEN** the Spotless app is rendered
- **WHEN** the hero section displays
- **THEN** it SHALL show the eyebrow "The best cleaning service ever"
- **AND** it SHALL show the headline "We Will Make Absolutely Any Place
  Clean, Neat"
- **AND** it SHALL show a yellow pill "Free quote" button
- **AND** the hero SHALL sit on a cover photo background
- **AND** on desktop it SHALL show a cleaning-action photo (gloved hand with
  spray bottle) on the right inside a white rounded text panel

### Requirement: About

The system SHALL render a two-column about section with a photo, section
title, copy, and a Learn More button.

#### Scenario: About content

- **GIVEN** the Spotless app is rendered
- **WHEN** the about section displays
- **THEN** the left column SHALL show a cleaner portrait photo (picsum)
- **AND** the right column SHALL show the blue uppercase eyebrow "About
  cleaning company"
- **AND** it SHALL show the heading "Better life for everyone" (40px,
  `#111111`)
- **AND** it SHALL show a paragraph of company copy
- **AND** it SHALL show a yellow pill "Learn More" button

### Requirement: Services

The system SHALL render a services grid of six cards with icons, titles,
prices, and hover overlays.

#### Scenario: Service cards

- **GIVEN** the Spotless app is rendered
- **WHEN** the services section displays
- **THEN** the eyebrow SHALL read "Our services" and the heading SHALL read
  "Better life for everyone"
- **AND** six service cards SHALL render (icon + title + "Starting from
  $50.00" + "Book now" button), e.g. Residential Cleaning, Commercial
  Cleaning, Office & Deep Cleaning, Move-In/Out Cleaning, Carpet &
  Upholstery, Post-Construction Cleaning
- **AND** hovering a card SHALL slide an overlay up from the bottom
  (matching `.services__item__hover`)

### Requirement: Why choose us

The system SHALL render four centered feature blocks explaining why
customers choose the service.

#### Scenario: Feature blocks

- **GIVEN** the Spotless app is rendered
- **WHEN** the choose-us section displays
- **THEN** the eyebrow SHALL read "Why choose us?" and the heading SHALL
  read "Why People Choose us?"
- **AND** four feature blocks SHALL render, each with an icon, a title
  (Professional, Eco-friendly, Affordable Rates, Fully Insured & Trusted),
  and a short paragraph
- **AND** the blocks SHALL be centered with equal height

### Requirement: Testimonials

The system SHALL render a testimonial band over a photo background with
quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the Spotless app is rendered
- **WHEN** the testimonial section displays
- **THEN** it SHALL sit on a cover photo background
- **AND** it SHALL show at least two quote cards (quote text + customer
  name), e.g. Sophia Allison and a second customer
- **AND** a slider/carousel interaction is optional (static layout allowed)

### Requirement: Team

The system SHALL render a team section with four cleaner cards and a Join us
button.

#### Scenario: Team cards

- **GIVEN** the Spotless app is rendered
- **WHEN** the team section displays
- **THEN** the eyebrow SHALL read "Our team" and the heading SHALL read
  "Better Life For Everyone"
- **AND** a yellow "Join us" button SHALL be present
- **AND** four cards SHALL render, each with a photo, name (Danny George,
  Andrew Horton, Georgia Foster, Sue Burns), and role "Cleaner"

### Requirement: How it works

The system SHALL render a three-step process band over a photo background.

#### Scenario: Steps

- **GIVEN** the Spotless app is rendered
- **WHEN** the work section displays
- **THEN** the eyebrow SHALL read "How it work" and the heading SHALL read
  "Get Amazing Cleaning In 3 Simple Steps"
- **AND** three steps SHALL render in order: 01 Pick a suitable plan, 02 Set
  your schedule, 03 Get things done
- **AND** each step SHALL show a 170px circular icon with background
  `#287ff9`

### Requirement: Blog

The system SHALL render a blog section with three news cards and a View all
link.

#### Scenario: News cards

- **GIVEN** the Spotless app is rendered
- **WHEN** the blog section displays
- **THEN** the eyebrow SHALL read "Our Blog" and the heading SHALL read
  "News And Tricks"
- **AND** a "View all" link SHALL be present
- **AND** three cards SHALL render, each with a date (e.g. Feb 28, 2020), a
  category (e.g. Advertising), a title, and a meta row (views + comments)

### Requirement: Call to action

The system SHALL render a "Free Call Back" CTA band over a photo background
with a phone number.

#### Scenario: CTA band

- **GIVEN** the Spotless app is rendered
- **WHEN** the call-to-action section displays
- **THEN** it SHALL sit on a cover photo background
- **AND** it SHALL show the heading "Free Call Back", a short paragraph, and
  a phone number (e.g. +1 970-668-3568)

### Requirement: Footer

The system SHALL render a dark-navy footer with contact info, link columns,
a newsletter form, and the standard credit.

#### Scenario: Footer content

- **GIVEN** the Spotless app is rendered
- **WHEN** the footer displays
- **THEN** it SHALL have background `#16273f`
- **AND** it SHALL show contact info (address, phone, email)
- **AND** it SHALL show a "Company" link column (About, Services, FAQs,
  Contact)
- **AND** it SHALL show a "Services" link column (Classic, Personal,
  Professional, Premium)
- **AND** it SHALL show a Newsletter subscribe form (email input + button)
- **AND** the copyright bar SHALL link to `https://www.componentdock.com/`

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Spotless app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Spotless — Cleaning Services
  Template"

## Verification checklist

- [ ] `openspec/specs/template-spotless/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/spotless/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: section order matches the Cleaning preview DOM 1:1 (header →
      hero → about → services → choose us → testimonial → team → work →
      blog → call to action → footer); hero blob panel + side photo follow
      the TEMPLATES.md screenshot design (noted as absent from the live
      DOM).
- [ ] Tokens used in the app: primary blue `#287FF9`, accent yellow
      `#FFD823`, dark navy `#16273F`, text `#111111`/`#888888`, light bgs
      `#F1F8FF`/`#F5F5F5`; Rubik + Bai Jamjuree via Google Fonts `<link>`;
      pill buttons (radius 50px, uppercase, letter-spacing 2px); 170px blue
      circular work-step icons.
- [ ] No ColorLib references in `apps/spotless` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] All images picsum-seeded (`picsum.photos/seed/spotless-N/w/h`); no
      Rockville font file or ColorLib asset copied.
- [ ] Implementer gate: `scripts/verify-app.sh spotless` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
