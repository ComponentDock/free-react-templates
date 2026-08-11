# Template: Medico (Medical / Health Care Template)

## Purpose

Medico is a single-page medical-clinic template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medico" entry in TEMPLATES.md (line 448, source:
https://colorlib.com/wp/template/medico/), built with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a clean, professional light-blue medical one-pager: a
white header (logo, centered nav — Home, About, Doctors, Pages ▾ (Services,
Departments, Elements), Blog ▾ (Blog, Single Blog), Contact — plus a
"HOT LINE- 09856" callout and a blue-gradient "Make an appointment"
button); a tall hero (`banner_part`, 935px) with a soft light-blue
background, eyebrow "We are here for your care", serif headline "Best Care
& Better Doctor", a paragraph, a blue-gradient "Make an appointment"
button and a medical illustration; an About section (photo left, "About
us" heading + paragraph + white "learn more" button + three icon items
Emergency / Appointment / Qualified); an "Our services" band with 4
feature cards (50px `#f0e9ff` icon circle, "Better Future" title, blurb);
an "Our Departments" grid of 4 bordered cards (icon circle, title,
blurb); an "Experienced Doctors" grid of 4 photo cards (name + specialty,
social icons overlay); a full-width "Make an Appointment" reservation band
(blue gradient `#649bff → #0070fa` background, service + time selects, a
white submit button); an "Our Blog" section with 2 article cards; and a
light footer (`#f3f6f7`) with about, Quick Links, Explore, Resources and
Newsletter widgets plus a copyright bar. The brand accent is a blue
gradient `linear-gradient(to right, #649bff 0%, #0070fa 100%)` with a
solid hover blue `#0065e1`; headings use **Playfair Display** (serif),
body uses **Roboto**. Medico recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Medico" — Medical HTML Template
  (source: https://colorlib.com/wp/template/medico/; TEMPLATES.md line
  448).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/medico/`
  (HTTP 200, title "medical"). DOM fetched and analyzed (`/tmp/medico.html`,
  32 KB); stylesheet `https://preview.colorlib.com/theme/medico/css/style.css`
  (156 KB) extracted for tokens; screenshot (`medic-free-template.jpg`,
  1200×946, TEMPLATES.md) reviewed visually in the browser. All references
  verified live. NOTE: an earlier prep draft of this spec referenced the
  ColorLib "Docmed" template by mistake — Docmed is a SEPARATE ColorLib
  template (own TEMPLATES.md line 376, preview
  https://preview.colorlib.com/theme/docmed/); the live Medico DOM is the
  source of truth here.
- **Section order (1:1 from the preview DOM):**
  1. Header `header` → `nav.navbar` (white): `div.logo` (image → text
     wordmark "Medico"), centered `ul.navbar-nav.main-menu-item` — Home,
     about, Doctors, Pages (dropdown: services, depertments, Elements),
     blog (dropdown: blog, Single blog), Contact — and on the right a
     `a.btn_2.d-none.d-lg-block` "HOT LINE- 09856" callout plus
     `a.btn_1` "Make an appointment".
  2. Hero `div.banner_part` (height 935px, background image → recreate as
     light gradient `#f9fbff` + soft blobs): `div.banner_text` →
     `div.banner_text_iner` (left column): `h5` "We are here for your
     care" (14px, 500, uppercase, `#242429`, Roboto), `h1` "Best Care &
     Better Doctor" (60px, 700, `#242429`, Playfair Display), `p`
     lorem-ipsum paragraph, `a.btn_1` "Make an appointment" (blue
     gradient); right column `div.banner_img` (medical illustration →
     seeded placeholder).
  3. About `div.about_us` (position relative, subtle left-bottom
     background → recreate as light tint): `div.about_us_img` (photo,
     left column) + `div.about_us_text` (right): `h2` "About us" (42px,
     600, Playfair Display, `#242429`), `p` lorem, `a.btn_2` "learn
     more" (white button, hover → blue gradient), then
     `div.banner_item` → 3 × `div.single_item` (icon + `h5` 18px
     capitalize `#242429`): Emergency, Appointment, Qualified.
  4. Services `div.feature_part` (light `#f9f9ff` band):
     `div.section_tittle.text-center` → `h2` "Our services" (48px, 700,
     `#242429`); 4 × `div.single_feature_part` (col-xl-3 col-md-6):
     `div.single_feature_icon` (50px circle, `#f0e9ff` background, icon),
     `h4` "Better Future" (24px, `#0c2e60`), `p` "Darkness multiply rule
     Which from without life creature blessed give moveth moveth seas
     make day which divided our have."
  5. Departments `div.our_depertment.section_padding` (padding 140px 0):
     `div.section_tittle` → `h2` "Our Depertment" (kept typo → fixed to
     "Our Departments" in the recreation); 4 × `div.single_our_depertment`
     (border 1px solid `#f2f6f8`, padding 60px 15px 32px, margin-bottom
     60px): `div.single_our_depertment_icon` (50px circle `#f2f6f8`,
     icon), `h4` "Better Future" (22px, 500, `#242429`), `p` blurb.
  6. Doctors `div.doctor_part.section_padding`: `div.section_tittle` →
     `h2` "Experienced Doctors" + `p` "Face replenish sea good winged
     bearing years air divide wasHave night male also" (14px 500
     `#7f7f7f`); 4 × `div.single_blog_item` (col-sm-6 col-lg-3): photo
     (5px top radius), `div.social_icon` overlay (Facebook, Twitter,
     Skype, Instagram icon links), `h3` "DR Adam Billiard" / "DR Fred
     Macyard" / "DR Justin Stuard", `p` specialty ("Heart specialist",
     "Medicine specialist", "CHeart specialist" → fixed to "Cardiac
     specialist", "Heart specialist").
  7. Reservation `div.regervation_part.section_padding` (background blue
     gradient `linear-gradient(to right, #649bff 0%, #0070fa 100%)` with
     a dark-blue overlay `#1c19ab` at 0.8 opacity → recreate as
     gradient): `h2` "Make an Appointment" (24px, white, margin-bottom
     60px); form: `select` "Select service" with 4 "Name of service"
     options, `select` "Time" with 8 slots (8 AM TO 10AM … 10PM TO 12PM),
     submit `a.btn` "Make an Appointment" (white).
  8. Blog `div.blog_part.section_padding`: `div.section_tittle` → `h2`
     "Our Blog"; 2 × `div.single-home-blog` (col-xl-6): photo,
     `h5` "First cattle which earth unto let health for can get and see
     what you" (20px Playfair), author "Jhon mike" + meta "Clinic,
     doctors", lorem paragraph.
  9. Footer `footer.footer.section_padding` (background `#f3f6f7`):
     5 widgets (col-xl-2/3): (a) about — logo (text wordmark) + lorem
     paragraph; (b) "Quick Links": About us, Department, Online payment,
     Careers, Department; (c) "Explore": In the community, IU health
     foundation, Family support, Business solution, Community clinic;
     (d) "Resources": Lights were season, Their is let wherein, which
     given over, Without given She, Isn two signs think; (e) "Newsletter"
     — "Seed good winged wherein which night multiply midst does not
     fruitful" + email input + submit; bottom `div.copyright_part`:
     "Copyright © <year> All rights reserved | This template is made
     with <heart> by Colorlib" (paraphrased).
- **Design tokens (extracted from style.css):**
  - Primary gradient: `linear-gradient(to right, #649bff 0%, #0070fa
100%)` — `.btn_1` (hero + header "Make an appointment"), reservation
    band background.
  - Solid blue `#0065e1` — `.btn_1:hover`, appointment accents.
  - Icon circle backgrounds: `#f0e9ff` (feature icons), `#f2f6f8`
    (department icons); card borders `#f2f6f8`; divider `#e4e6ea`.
  - Light section background `#f9f9ff` (services band), footer `#f3f6f7`.
  - Text: `#242429` (headings), `#0c2e60` (feature titles), `#7f7f7f`
    (section_tittle p, muted), `#999999`/`#888888` (body muted), white
    (on gradient sections).
  - Fonts: **Playfair Display** (headings, serif) + **Roboto** (body) —
    Google Fonts.
  - Buttons: `.btn_1` — blue gradient, white, 14px, padding 10.5px 36px;
    `.btn_2` — white background, `#242429` text, padding 16px 45px,
    hover → blue gradient white text.
  - Icon circles 50px, radius 50%; card shadow none (bordered cards);
    section padding `140px 0`; hero height 935px.
- **Visual design (screenshot, 1200×946):** clean medical one-pager in
  whites and light blues. Header: "Medico" wordmark with a blue medical
  cross, dark-gray nav links, solid blue "HOT LINE: 09856" button.
  Hero: left column with small uppercase "We Are Here For Your Care",
  large dark serif "Best Care & Better Doctor", lorem paragraph and a
  blue rectangular "MAKE AN APPOINTMENT" button; right column: flat
  medical illustration (female doctor in blue scrubs beside a patient on
  a gurney with an IV stand) on soft abstract light-blue shapes. Below
  the fold (from the live DOM): About, services/departments cards,
  doctors grid, blue reservation band, blog, light footer.
- **Recreation decisions:** photos/illustrations → seeded picsum
  placeholders (`picsum.photos/seed/medico-<n>/<w>/<h>`: hero 600×600,
  about 570×500, doctors 360×420, blog 570×420); the hero illustration →
  placeholder photo; icons → lucide-react (Stethoscope, Ambulance,
  HeartPulse, Activity, Hospital, Syringe, Pill, Phone, Mail, Calendar,
  Menu, X, ChevronDown, User, Clock, ArrowRight; brand icons
  LinkedIn/Facebook/Twitter/Skype/Instagram as inline SVG — lucide
  removed brand icons); fonts → Google Fonts `<link>` (Playfair Display
  400/500/600/700 + Roboto 400/500); logo → text wordmark "Medico" with a
  blue cross icon; source typos fixed ("Depertment" → "Departments",
  "Qualfied" → "Qualified", "CHeart" → "Cardiac"); no assets copied.

Medico lives in `apps/medico` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a white header with a logo wordmark, a horizontal
nav menu, a hotline callout and a gradient appointment button.

#### Scenario: Header content

- **GIVEN** the Medico page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the logo wordmark "Medico" on the left
- **AND** it SHALL show the nav links Home, About, Doctors, Pages, Blog
  and Contact
- **AND** it SHALL show a "HOT LINE- 09856" callout and a "Make an
  appointment" button with the blue gradient

#### Scenario: Mobile menu

- **GIVEN** the mobile viewport is active
- **WHEN** the user clicks the burger toggle
- **THEN** a menu panel SHALL open with the nav links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero banner

The system SHALL render a tall hero with an eyebrow, a serif headline, a
paragraph, a gradient CTA button and an illustration.

#### Scenario: Hero content

- **GIVEN** the Medico page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the eyebrow "We are here for your care"
- **AND** it SHALL show the headline "Best Care & Better Doctor" in
  Playfair Display
- **AND** it SHALL show a supporting paragraph and a "Make an
  appointment" button with the blue gradient

### Requirement: About section

The system SHALL render an about section with a photo, a heading, a
paragraph, a white "learn more" button and three icon items.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **THEN** it SHALL show the heading "About us" with a paragraph and a
  "learn more" button
- **AND** it SHALL show the three icon items Emergency, Appointment and
  Qualified

### Requirement: Services band

The system SHALL render a light band with a centered title and four
feature cards, each with an icon circle, a title and a blurb.

#### Scenario: Service cards

- **GIVEN** the services band is displayed
- **THEN** it SHALL show the centered title "Our services"
- **AND** it SHALL show 4 cards titled "Better Future" with a 50px
  `#f0e9ff` icon circle and a blurb

### Requirement: Departments grid

The system SHALL render a section title and a grid of four bordered
department cards.

#### Scenario: Department cards

- **GIVEN** the departments section is displayed
- **THEN** it SHALL show the title "Our Departments"
- **AND** it SHALL show 4 cards with a `#f2f6f8` icon circle, a title
  and a blurb
- **AND** each card SHALL have a `1px solid #f2f6f8` border

### Requirement: Doctors grid

The system SHALL render a title, a subtitle and a grid of four doctor
cards with name and specialty.

#### Scenario: Doctor cards

- **GIVEN** the doctors section is displayed
- **THEN** it SHALL show the title "Experienced Doctors"
- **AND** it SHALL show 4 cards, each with a photo, a doctor name
  ("DR Adam Billiard", "DR Fred Macyard", "DR Justin Stuard") and a
  specialty line
- **AND** each card SHALL show social icon links (Facebook, Twitter,
  Skype, Instagram)

### Requirement: Appointment form

The system SHALL render a blue-gradient reservation band with a heading
and an appointment form with service and time selects and a submit
button.

#### Scenario: Appointment form content

- **GIVEN** the reservation band is displayed
- **THEN** it SHALL show the heading "Make an Appointment"
- **AND** it SHALL show a service select with placeholder "Select
  service" and at least 3 options
- **AND** it SHALL show a time select with at least 6 time slots
- **AND** it SHALL show a "Make an Appointment" submit button

#### Scenario: Form submission

- **GIVEN** the user picks a service and a time slot
- **WHEN** the user presses the submit button
- **THEN** a confirmation message SHALL appear

### Requirement: Blog section

The system SHALL render a title and two article cards, each with a
photo, a title, an author, a category and a paragraph.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **THEN** it SHALL show the title "Our Blog"
- **AND** it SHALL show 2 article cards, each with a photo, an article
  title, the author "Jhon mike" and the category "Clinic, doctors"

### Requirement: Footer

The system SHALL render a light footer with about text, link columns, a
newsletter form and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is displayed
- **THEN** it SHALL show the "Medico" wordmark with an about paragraph
- **AND** it SHALL show the link columns "Quick Links", "Explore" and
  "Resources" with their links
- **AND** it SHALL show a "Newsletter" widget with an email input and a
  subscribe button

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is shown
- **THEN** it SHALL show the line "Copyright © <year> All rights
  reserved | This template is made with <heart> by Colorlib"
- **AND** the bar SHALL sit on the `#f3f6f7` footer background

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Medico app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Medico — Medical / Health Care
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-medico`.
- [ ] App renders all sections 1:1 in the order above (header → hero →
      about → services → departments → doctors → reservation → blog →
      footer).
- [ ] Design tokens match the reference: gradient `#649bff → #0070fa`,
      hover `#0065e1`, icon circles `#f0e9ff`/`#f2f6f8`, card border
      `#f2f6f8`, light bg `#f9f9ff`, footer `#f3f6f7`, headings
      `#242429`; Playfair Display headings + Roboto body.
- [ ] Header: white bar, "Medico" wordmark, nav (Home, About, Doctors,
      Pages, Blog, Contact), "HOT LINE- 09856" callout, gradient "Make
      an appointment" button; mobile burger opens the menu panel.
- [ ] Hero: 935px-tall banner, eyebrow "We are here for your care",
      60px serif headline "Best Care & Better Doctor", paragraph,
      gradient "Make an appointment" button, illustration placeholder.
- [ ] About: photo left, "About us" heading + paragraph + white "learn
      more" button + 3 icon items (Emergency, Appointment, Qualified).
- [ ] Services: `#f9f9ff` band, centered "Our services", 4 "Better
      Future" cards with 50px `#f0e9ff` icon circles.
- [ ] Departments: "Our Departments" title, 4 bordered cards with
      `#f2f6f8` icon circles and blurbs.
- [ ] Doctors: "Experienced Doctors" title + subtitle, 4 photo cards
      (name + specialty, social icon overlay).
- [ ] Reservation: gradient band (dark-blue overlay feel), "Make an
      Appointment" heading, service + time selects, white submit button,
      confirmation on submit.
- [ ] Blog: "Our Blog" title, 2 article cards (photo, title, author
      "Jhon mike", category "Clinic, doctors").
- [ ] Footer: `#f3f6f7` background, about widget, Quick Links / Explore
      / Resources columns, Newsletter form, copyright bar.
- [ ] Fonts (Playfair Display + Roboto) loaded via Google Fonts `<link>`;
      no font or image assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/medico-<n>/<w>/<h>`); logo recreated as text
      wordmark; brand icons (Facebook/Twitter/Skype/Instagram) as inline
      SVG.
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/medico` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Medico"),
      preview URL (https://preview.colorlib.com/theme/medico/ —
      reachable), design tokens used, what differs (name kept from
      checklist, placeholder images, text logo, Google-font
      substitution, typo fixes).
