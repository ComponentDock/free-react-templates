# Template: Gavel (Law Firm Template)

## Purpose

Gavel is a single-page law-firm landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Judge"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Judge" — law firm / legal services template
  (source: https://colorlib.com/wp/template/judge/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/judge/
  (HTTP 200, ~49 KB HTML fetched; `css/style.css` ~74 KB parsed for tokens).
  Title tag: "Judge - Free Bootstrap 4 Template by Colorlib". Bootstrap 4 +
  owl-carousel + flaticon/icomoon icon fonts, AOS animations.
- **Screenshot analyzed:** `judge-free-template.jpg` (TEMPLATES.md, 1200×946)
  — dark cinematic hero: blurred lawyer in a suit holding a golden scale of
  justice; white bold headline "The Greatest & Strongest Firm You Can Trust"
  over a black overlay, sage-green accents (logo, subheading); two text-style
  CTAs with arrow icons ("Get Legal Advice >", "Request A Quote >"). Below the
  hero: numbered feature strip (01–04), then a split About area (Lady Justice
  statue photo left, white text right with green "Welcome to Judge"
  subheading). Rest of the page (practice areas grid, attorneys, consultation
  form, case studies, testimonials, blog, gallery, newsletter, footer) taken
  from the preview DOM + CSS.
- **Section order (1:1):** Navbar (`.ftco_navbar.bg-dark`, brand "Judge"
  - span "A Law Firm") → Hero (`.hero-wrap.js-fullheight`, bg image +
    black overlay 0.5, left col-md-6: subheading + h1 + two `.btn-custom`
    CTAs) → Services strip (`.services-section`, 4 numbered items 01–04,
    white headings on dark) → Welcome/About (split: left image with
    `.icon-video` play button, right heading-section with 3 paragraphs +
    counter "40 Years of Experienced") → Practice Areas (`.practice-area`
    tiles, 4-col bordered grid, 8 items) → Attorneys (`.block-2` flip cards,
    4 lawyers) → Consultation (`.ftco-consultation.img`, bg image + overlay,
    right-half form: name/email/subject/message + "Send message") → Case
    Studies (6 `.case` image cards, 3-col) → Testimonials
    (`.testimony-section`, owl-carousel of 5 slides) → Blog (`.bg-light`, 3
    `.blog-entry` cards with green date chip) → Gallery (`.ftco-gallery`, 6
    image tiles with instagram icon) → Newsletter (`.bg-primary` green band,
    white h2 + email form) → Footer (`.ftco-footer`, bg #222831, 4 widgets +
    copyright bar).
- **Design tokens extracted from the preview CSS:**
  - Font: **"Poppins", Arial, sans-serif** everywhere (Google Fonts
    @font-face in the preview HTML; weights 300/400/500/600/700). Playfair
    Display is also @font-face loaded in the head but NOT referenced by
    `style.css` — Poppins only is sufficient.
  - Brand accent: **#83b582** (muted sage green) — `.btn.btn-primary`
    background + border (white text; hover = transparent bg + green text),
    `.bg-primary` (newsletter band), `.heading-section .subheading` eyebrow
    (16px/700), `.services .num` (18px/600), `.practice-area .icon span`
    (50px glyph), `.icon-video` (80px circle), `.blog-entry .topper` date
    chip + its triangle notch, nav link hover/active, footer link arrows.
  - Hero: bg photo with `.overlay` black at 0.5 opacity; h1 48px/700 white
    Poppins; hero subheading white rgba(255,255,255,0.9) 16px/600; CTAs
    `.btn-custom` text-style — 16px/500 white with arrow icon, no
    background.
  - Section headings: h2 40px/700; body text grays #6c757d/#666666; light
    section bg **#f8f9fa** (blog section `bg-light`).
  - Buttons: Bootstrap 4 base — padding 0.375rem 0.75rem, border-radius
    **0.25rem**, 1px border; `.btn.btn-primary` green fill, hover flips to
    transparent + green text. Consultation submit: `py-3 px-4` green.
  - Practice-area tiles: 4-col grid with hairline borders
    `rgba(0,0,0,0.08)` (border-left + border-bottom), padding 25px, h3
    20px black, green 50px icon glyph centered; hover → icon circle bg
    white + icon black.
  - Attorneys: `.block-2` flip cards — front: photo + name + role box;
    back: quote + author row.
  - Case cards: height 300px, shadow `0px 5px 21px -14px rgba(0,0,0,0.14)`,
    centered title + category tag.
  - Testimonial card: white, shadow same as case, round author photo, name
    - position.
  - Blog date chip (`.topper`): green bg, day + month/year in white,
    absolute over the image top-left with a small downward triangle notch
    (border trick, green); card body white.
  - Newsletter: green band, white h2 28px, email input + "Subscribe"
    submit.
  - Footer: bg **#222831**, white text; widget titles 20px/400 white;
    social icons; opening-hours block; contact block; bottom copyright bar.
  - Radii: buttons 0.25rem; circles 50% (icon-video 80px, practice icon,
    testimonial avatars). No big-radius pills in this theme.
- **Recreation decisions:** hero/consultation photo backgrounds → seeded
  picsum with a black overlay at ~0.5 opacity (`bg-black/50`), no copied
  images; icons → lucide-react (Scale, Briefcase, Shield, Handcuffs, Home,
  Users, Flame, Banknote for practice areas; Play for video; Instagram for
  gallery; arrow-right for CTAs/footer links); brand social icons
  (twitter/facebook/instagram) → inline SVG paths (lucide removed brand
  icons); attorney photos, case images, blog thumbs, gallery tiles,
  testimonial avatars → `picsum.photos/seed/gavel-<n>/<w>/<h>`; Poppins via
  Google Fonts `<link>` in `index.html`; #83b582/#222831/#f8f9fa in
  `@theme`; no assets copied.

Gavel lives in `apps/gavel` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navbar with the site name "Gavel", a tagline,
and anchor links to the page sections.

#### Scenario: Navbar content

- **GIVEN** the Gavel page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show "Gavel" with a "A Law Firm" tagline on the
  left
- **AND** the navbar SHALL show links for Home, About Us, Practice Areas,
  Case Studies, Attorneys, Blog, and Contact

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is hovered or the active link is displayed
- **THEN** the link text SHALL turn sage green (#83b582)
- **AND** the navbar background SHALL be dark (near-black), matching the
  original's `bg-dark` treatment

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the nav links SHALL be reachable via a hamburger switch with a
  "Menu" label

### Requirement: Hero section

The system SHALL render a full-height hero with a background image, dark
overlay, an eyebrow subheading, a headline, and two text-style call-to-action
links.

#### Scenario: Hero content

- **GIVEN** the Gavel page is rendered
- **WHEN** the hero section is in view
- **THEN** the hero SHALL show the eyebrow "Product Liability & Personal
  Injury" in white at reduced opacity
- **AND** the hero SHALL show the headline "The Greatest & Strongest Firm
  You Can Trust" in white, Poppins 700, 48px
- **AND** the hero SHALL show two text-style CTAs with arrow icons: "Get
  Legal Advice" and "Request A Quote"

#### Scenario: Hero background

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL use a full-viewport-height background photo
  (seeded picsum) with a black overlay at ~50% opacity so white text stays
  readable

### Requirement: Services strip

The system SHALL render a four-column numbered strip (01–04) directly below
the hero with white headings on the dark background.

#### Scenario: Services items

- **GIVEN** the services strip is rendered
- **WHEN** the page loads
- **THEN** it SHALL show four items in a 4-column row (stacking on mobile):
  Get Your Legal Advice, Work with Expert Lawyers, Have Great Discounted
  Rates, and Review Your Case Documents
- **AND** each item SHALL show its number (01–04) in sage green (#83b582),
  a heading, and a short supporting paragraph

### Requirement: About / Welcome section

The system SHALL render a split section with a video image on the left and a
welcome heading, paragraphs, and an experience counter on the right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show an image with a circular green play
  button (80px, #83b582) that links to a video
- **AND** the right column SHALL show the green eyebrow "Welcome to Gavel"
  and the headline "We Always Fight For Your Justice to Win"
- **AND** the right column SHALL show at least two paragraphs of supporting
  copy

#### Scenario: Experience counter

- **GIVEN** the about section is rendered
- **WHEN** the counter is in view
- **THEN** it SHALL count up to "40 Years of Experienced" (number 40
  alongside the label)

### Requirement: Practice areas section

The system SHALL render a centered-heading section with a 4-column bordered
grid of eight practice-area tiles, each with a green circular icon.

#### Scenario: Section title

- **GIVEN** the practice areas section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered green eyebrow "Practice
  Areas" and the headline "Practice Areas"

#### Scenario: Practice tiles

- **GIVEN** the practice areas grid is rendered
- **WHEN** the grid is in view
- **THEN** the grid SHALL render eight tiles in a 4-column layout (2 rows,
  stacking on mobile): Family Law, Business Law, Insurance Law, Criminal
  Law, Property Law, Employment Law, Fire Accident, and Financial Law
- **AND** each tile SHALL show a green icon (lucide) in a circular
  medallion, a 20px black heading, and a short paragraph
- **AND** tiles SHALL be separated by hairline borders
  (rgba(0,0,0,0.08)), matching the original's `border-left`/`border-bottom`
  grid

#### Scenario: Tile hover

- **GIVEN** a practice tile is rendered
- **WHEN** the tile is hovered
- **THEN** the icon circle SHALL turn white and the icon SHALL turn black

### Requirement: Attorneys section

The system SHALL render a centered-heading section with four attorney cards,
each showing a photo, name, and role on the front and a quote on the back.

#### Scenario: Attorney cards

- **GIVEN** the attorneys section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered eyebrow "Our Attorney" and
  the headline "Our Legal Attorneys"
- **AND** it SHALL render four cards in a 4-column row (stacking on mobile):
  Richard Anderson (Civil Lawyer), Jefford Maxillin (Business Lawyer),
  Carlos Obing (Criminal Defense), and Nathan Smith (Insurance Lawyer)
- **AND** each card SHALL show the lawyer's photo, name, and role

#### Scenario: Card flip

- **GIVEN** an attorney card is rendered
- **WHEN** the card is flipped or hovered
- **THEN** the back SHALL reveal a short quote and the author's name with
  role

### Requirement: Consultation section

The system SHALL render a dark consultation section with a background image,
a "Free Consultation" heading, and a contact form on the right half.

#### Scenario: Section content

- **GIVEN** the consultation section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the eyebrow "Booking an Appointment" and
  the headline "Free Consultation"
- **AND** the section SHALL use a background photo (seeded picsum) with a
  dark overlay

#### Scenario: Consultation form

- **GIVEN** the consultation form is rendered
- **WHEN** the user fills the fields
- **THEN** the form SHALL provide labeled inputs for Your Name, Your Email,
  and Subject plus a Message textarea
- **AND** it SHALL show a sage-green submit button labeled "Send message"

#### Scenario: Form submit

- **GIVEN** the consultation form is rendered
- **WHEN** the user submits the form
- **THEN** the form SHALL prevent default navigation (no backend call; the
  landing page stays in view)

### Requirement: Case studies section

The system SHALL render a centered-heading section with a 3-column grid of
six case-study image cards.

#### Scenario: Case grid

- **GIVEN** the case studies section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the eyebrow "Explore Case Studies" and
  the headline "1000+ Completed Cases Successfully"
- **AND** it SHALL render six image cards in a 3-column grid (stacking on
  mobile), each ~300px tall with a soft drop shadow
- **AND** each card SHALL overlay a centered case title (e.g. "Legal
  Separation") and a category tag (e.g. "Corporate")

### Requirement: Testimonials section

The system SHALL render a centered-heading section with a testimonial
slider of client quotes.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered eyebrow "Testimonial" and
  the headline "Happy Clients"
- **AND** it SHALL show a testimonial card with a quote, a round author
  photo, the author name (e.g. "Roger Scott"), and a role (e.g. "Marketing
  Manager")
- **AND** controls SHALL allow cycling between the testimonial slides

### Requirement: Blog section

The system SHALL render a light-background (#f8f9fa) section with a
centered heading and three blog cards featuring a green date chip.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered eyebrow "Our Blog" and the
  headline "Recent Blog"
- **AND** it SHALL render three cards in a 3-column row (stacking on
  mobile), each with an image, a heading (e.g. "All you want to know about
  industrial laws"), and a short paragraph

#### Scenario: Date chip

- **GIVEN** a blog card is rendered
- **WHEN** the card is in view
- **THEN** the card SHALL show a sage-green (#83b582) date chip overlapping
  the top-left of the image with the day (e.g. "15") and the month/year
  (e.g. "2019 August") in white
- **AND** the chip SHALL carry the small downward triangle notch of the
  original

### Requirement: Gallery section

The system SHALL render a full-width strip of six square image tiles that
reveal an Instagram icon on hover.

#### Scenario: Gallery tiles

- **GIVEN** the gallery section is rendered
- **WHEN** the page loads
- **THEN** it SHALL render six image tiles in a single 6-column row (grid
  on mobile), each with an Instagram icon overlay on hover

### Requirement: Newsletter section

The system SHALL render a sage-green (#83b582) band with a white headline
and an email subscription form.

#### Scenario: Newsletter content

- **GIVEN** the newsletter section is rendered
- **WHEN** the page loads
- **THEN** the band SHALL show the white headline "Subscribe to our
  Newsletter" on the left
- **AND** the band SHALL show an email input with a "Subscribe" submit
  button on the right

#### Scenario: Form submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits an email address
- **THEN** the form SHALL prevent default navigation (no backend call)

### Requirement: Footer

The system SHALL render a dark (#222831) footer with four widgets and a
copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show an "About Gavel" widget with a short
  paragraph and social icons (Twitter, Facebook, Instagram — inline SVG)
- **AND** it SHALL show a "Practice Areas" widget listing the practice
  links with green arrow icons
- **AND** it SHALL show a "Business Hours" widget with Opening Days
  (Monday – Friday: 9am to 20pm; Saturday: 9am to 17pm) and Vacations
  (All Sunday Days, All Official Holidays)
- **AND** it SHALL show a "Have a Questions?" widget with an address, a
  phone number, and an email address

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show a centered copyright line with an
  original attribution (the ColorLib credit is replaced)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Gavel app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections (Hero, Services, About, Practice areas, Attorneys,
  Consultation, Case studies, Testimonials, Blog, Gallery, Newsletter) in
  the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Gavel — Law Firm Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/gavel` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- gavel` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#83b582, #222831, #f8f9fa, Poppins) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `gavel-<n>`, Google Fonts links, lucide icons + inline SVG brand icons only)
