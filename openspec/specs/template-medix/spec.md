# Template: Medix (Medical & Hospital)

## Purpose

Medix is a single-page medical/hospital website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Docmed" medical template design (see TEMPLATES.md, line 376
under **Bootstrap (216)**), built under a different name ("Medix" — a
medical-brand word, matching the source's healthcare positioning) with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No
ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Docmed" — free Medical & Hospital HTML template
  (source: https://colorlib.com/wp/template/docmed/). Single page: a white
  header with a light-blue top contact bar (4 social icons left, email +
  phone right), centered nav (Home / Department / Blog▾ / Pages▾ / Doctors /
  Contact) and a blue "Make an Appointment" button that opens a Bootstrap
  appointment modal (date, time, department select, doctor select, name,
  phone, email, Confirm), a 700px hero slider (3 slides, swiper, doctor-photo
  background, "Health Care For Hole Family" 70px light headline with a bold
  span, blurb, gradient-blue "Check Our Services" button, prev/next arrows),
  a light-blue service band (3 cards: Hospitality / Emergency Care / Chamber
  Service, white icons + white outline buttons), a welcome split (2 offset
  photos left, "Welcome to Docmed" + blue underline, "Best Care For Your Good
  Health" h3, blurb, 3 bullet points with blue icons, blue-outline "Learn
  More" right), a departments grid (6 white shadowed cards: Eye Care,
  Physical Therapy, Dental Care, Diagnostic Test, Skin Surgery, Surgery
  Service, image zoom on hover, blue "Learn More" links), a full-width
  testimonial slider (3 slides over darkened background images, white quote
  text, uppercase author), a business tabs section on a light-blue background
  (3 equal tabs: Excellent Services / Qualified Doctors / Emergency
  Departments; each pane = 75px circular blue icon + h3 + blurb + photo), an
  "Expert Doctors" carousel (6 cards: photo, name, specialty; name strip
  turns blue on hover), an emergency contact band (2 halves over photos with
  a translucent sky-blue overlay: phone number pill button + white
  appointment pill button), and a dark footer (about + social icons,
  Departments links, Useful Links, Address columns; black copyright bar with
  the credit line).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/docmed/`. DOM fetched
  (`/tmp/docmed-prep/docmed.html`, 47,212 bytes) + stylesheet
  `css/style.min.css` (`/tmp/docmed-prep/style.min.css`, 71,092 bytes) +
  flaticon css + TEMPLATES.md screenshot (`docmed-free-template.jpg`,
  1200×946) + live-preview visual inspection (browser screenshot). The live
  preview copy has been lightly rewritten vs the classic screenshot (e.g.
  tab headlines "Comprehensive Medical Services" / "Expert Physicians You
  Can Trust" / "24/7 Emergency Medical Care", testimonial and doctor names
  repeated verbatim in the source) — paraphrase freely, keep the same
  content kinds.
- **Visual design (live preview + screenshot):** clean, modern, trustworthy
  healthcare aesthetic — white surfaces with a bright trust-blue
  `#009DFF` brand color and a lighter sky-blue `#5DB2FF` for bands, icon
  circles, underlines, and hovers; a blue gradient (`#0181f5 → #5db2ff`) on
  primary CTAs; light-blue `#F5FBFF` section tints; dark `#1F1F1F` headings
  with `#727272` body text; Poppins throughout; mostly rounded-rect buttons
  (4–5px radius) with pill (30px) buttons in the emergency band and a 50%
  circular icon treatment in the tabs section.

## Design tokens (from `css/style.min.css` of the live preview)

- **Brand blue:** `#009DFF` — `.book_btn a` background, `.boxed-btn` outline
  color/text, button hover fills. Variant `#0181F5` (gradient start).
- **Brand gradient (primary CTA `.boxed-btn3`):**
  `linear-gradient(to right, #0181f5 0%, #5db2ff 100%)`, white text,
  `border-radius: 4px`, `padding: 18px 44px`, 15px/500, uppercase — hero
  "Check Our Services" + modal "Confirm".
- **Sky blue:** `#5DB2FF` — `.single_service` band background, section-title
  underlines (2px × 50px), `.learn_more` links, business tab icon circles
  (75px, 50% radius), `.boxed-btn3-white-2` border/text, `.experts_name`
  hover background, `overlay_skyblue` overlay color.
- **Light section tint:** `#F5FBFF` — header top bar background,
  `.business_tabs_area` background, `.experts_name` strip background.
- **Text / surfaces:** `#1F1F1F` (headings + footer bg), `#727272` (body),
  `#919191` / `#8A8A8A` (muted, copyright text), `#C7C7C7` (footer widget
  text), `#A8A7A0` (footer social icons), white `#ffffff` (cards, main bg),
  `#000000` (copyright bar bg + testimonial overlay color).
- **Overlays:** testimonial `.overlay2::before` — `rgba(0, 0, 0, 0.3)` full
  section; emergency `.overlay_skyblue::before` — `#5DB2FF` at `opacity: 0.8`.
- **Font:** `"Poppins", sans-serif` (200–700 via Google Fonts `@import` in
  the source CSS — DO NOT copy the import; load Poppins 300/400/500/600/700
  via `<link>` in `index.html`).
- **Buttons:**
  - `.boxed-btn3` (hero + modal primary): gradient blue, white text, 15px/500,
    uppercase, `border-radius: 4px`, `padding: 18px 44px`; hover → white bg,
    `#009DFF` text, 1px `#009DFF` border.
  - `.boxed-btn` (outline variant): white bg, 1px `#009DFF` border, `#009DFF`
    text, 14px/400, uppercase, `letter-spacing: 3px`, `padding: 18px 44px`;
    hover → `#009DFF` bg, white text.
  - `.boxed-btn3-white` (service-band links): transparent bg, 1px white
    border, white text, `border-radius: 5px`, `padding: 9px 24px` (5px 10px
    inside `.single_service`), uppercase, 15px/400.
  - `.boxed-btn3-white-2` (welcome "Learn More"): 1px `#5DB2FF` border,
    `#5DB2FF` text, `border-radius: 5px`, `padding: 9px 24px`, uppercase.
  - `.book_btn a` (header): `#009DFF` bg, white text, `border-radius: 4px`,
    `padding: 12px 26px`, 14px/400; hover → white bg, `#009DFF` text, 1px
    `#009DFF` border.
  - Emergency `.info_button a`: `border-radius: 30px` (pill), 18px 44px
    padding, `.boxed-btn3` gradient for "Make an Appointment"; white pill
    outline for the phone number.
- **Header (`.header-area`):** top bar `.header-top_area` — `#F5FBFF` bg,
  `padding: 12px 0`; left `.social_media_links` (4 FontAwesome brand icons:
  LinkedIn, Facebook, Twitter, Instagram — lucide-react has NO brand icons,
  use inline SVG simple-icons paths); right `.short_contact_list` (envelope
  icon + `info@docmed.com`, phone icon + `160160`; 13px `#919191`, `margin-
left: 50px`). Main bar `.main-header-area` — white bg, `padding: 18px 0`,
  `.logo` left, `.main-menu` centered (15px/500 `#727272` links, uppercase
  hover underline), `.book_btn` right.
- **Nav (`.main-menu`):** links Home / Department / Blog (dropdown: Blog,
  Single Blog) / Pages (dropdown: Elements, About) / Doctors / Contact;
  active/hover underline via `::before` (2px, `#fff`→ scaled in; the source
  underline is white-on-white — implement `#009DFF` or `#5DB2FF` underline
  for visibility; documented deviation). Mobile: `#mobile_menu` — implement a
  React hamburger toggle (white header, dropdown panel with all links).
- **Hero slider (`.slider_area .single_slider`):** `height: 700px`,
  `background-size: cover`, bg images `banner.png` / `banner2.png` (doctor
  photo right of text). `.slider_text`: h3 70px/300 capitalize,
  `letter-spacing: 2px`, `#1F1F1F`, with a 700-weight `<span>` inside (the
  source renders "Health care" light + "For Hole Family" bold); p 18px
  `#727272` (`margin: 10px 0 40px`); `.boxed-btn3` "Check Our Services".
  Swiper controls: prev/next arrows (`swiper-button-prev/next`).
- **Service band (`.service_area`):** `container p-0`, 3 × `col-xl-4`;
  `.single_service` bg `#5DB2FF`, `padding: 40px 30px`: `.icon i` 50px white
  (flaticon-electrocardiogram / flaticon-emergency-call / flaticon-first-aid-
  kit → lucide `HeartPulse`, `Phone`, `FirstAid`), h3 26px/500 white
  (Hospitality / Emergency Care / Chamber Service), p 16px/28px white,
  `.boxed-btn3-white` link (Apply For a Bed / `+10 672 356 3567` / Make an
  Appointment). Render the phone number as plain text, NO `tel:` literals.
- **Welcome (`.welcome_docmed_area`):** `padding: 120px 0 220px`; 6/6 split.
  `.welcome_thumb` (relative): `.thumb_1` photo + `.thumb_2` absolute,
  `bottom: -94px; right: -37px` (second photo overlapping the first).
  `.welcome_docmed_info` (`padding-left: 90px`): h2 18px/400 `#1F1F1F`
  "Welcome to Medix" with `::before` 2px × 50px `#5DB2FF` underline at left;
  h3 36px/500 "Best Care For Your Good Health"; p 16px `#727272`; ul (3 li,
  16px `#727272`, `margin: 25px 0 40px`) with `flaticon-right` icons
  (`margin-right: 10px`, `#5DB2FF` → lucide `ChevronRight`); `.boxed-btn3-
white-2` "Learn More".
- **Departments (`.our_department_area`):** centered `.section_title`
  (`margin-bottom: 55px`): h3 36px/500 `#1F1F1F` with centered `::before`
  2px × 50px `#5DB2FF` underline (`left: 50%; translateX(-50%)`), p 16px
  `#727272`; 6 cards in a 2×3 grid (`col-xl-4 col-md-6`): `.single_department`
  white bg, `box-shadow: 0 6px 10px rgba(0,0,0,0.04)`, `margin-bottom: 30px`;
  `.department_thumb` (5px top radius, overflow hidden, img `scale(1.2)` on
  card hover) + `.department_content` (`padding: 22px 30px 24px`): h3 a
  22px/500 `#1F1F1F` (Eye Care / Physical Therapy / Dental Care / Diagnostic
  Test / Skin Surgery / Surgery Service), p 16px `#727272`, `.learn_more`
  16px `#5DB2FF`.
- **Testimonials (`.testmonial_area`):** swiper `testmonial_active`, 3
  slides `.single-testmonial` (`testmonial_bg_1`/`testmonial_bg_2` bg images,
  `padding: 180px 0`, `background-position: top`) + `.overlay2` (black
  `opacity: 0.3`): `.testmonial_info` centered (col-xl-10 offset-xl-1):
  `.quote i` 40px white (flaticon-straight-quotes → lucide `Quote`), p
  20px/32px white, author h4 uppercase (source repeats "ASANA KORIM" ×3 —
  vary the names).
- **Business tabs (`.business_expert_area` + `.business_tabs_area`):**
  `.business_tabs_area` bg `#F5FBFF`; `.nav .nav-item` `width:
33.3333333334%` — 3 tabs (Bootstrap nav-pills): "Excellent Services"
  (active) / "Qualified Doctors" / "Emergency Departments" (active tab gets a
  blue underline). Each `.tab-pane`: 6/6 split — `.business_info`: `.icon i`
  75px circle, `#5DB2FF` bg, white 35px icon (first-aid-kit →
  `HeartPulse`/`Stethoscope`, electrocardiogram → `Activity`, emergency-call
  → `Phone`), h3 20px/500 `#1F1F1F`, p `#727272` 28px line-height;
  `.business_thumb` photo (`padding-top: 20px`).
- **Expert Doctors (`.expert_doctors_area`):** `padding: 120px 0`;
  `.doctors_title` h3 36px/500 "Expert Doctors" (left-aligned, `margin-
bottom: 55px`); swiper `expert_active`, 6 slides: `.single_expert` —
  `.expert_thumb` (5px top radius, overflow hidden) + `.experts_name` (bg
  `#F5FBFF`, `padding: 16px 0 18px`, centered; hover bg `#5DB2FF`): h3
  20px/500 name, span 13px `#919191` specialty (source repeats "Mirazul Alom
  / Neurologist" ×6 — use 6 varied name/specialty pairs). Swiper prev/next
  arrows.
- **Emergency band (`.Emergency_contact`, container-fluid p-0):** 2 ×
  `col-xl-6`; `.single_emergency` (`padding: 91px 0`, bg images
  `emergency-1.png`/`emergency-2.png` + `.overlay_skyblue` = `#5DB2FF`
  `opacity: 0.8`): `.info` (`margin-right: 30px`): h3 26px/500 white ("For
  Any Emergency Contact" / "Make an Online Appointment"), p 13px white
  ("Esteem spirit temper too say adieus."), `.info_button a` pill (radius
  30px): phone `+10 378 4673 467` (white outline pill, plain text number) /
  "Make an Appointment" (`.boxed-btn3` gradient pill).
- **Footer (`.footer`):** `.footer_top` bg `#1F1F1F`, `padding: 145px 0
129px`; 4 widgets (col-xl-4 / 2 offset-1 / 2 / 3): (1) `.footer_logo`
  22px/400 white + p `#C7C7C7` "Firmament morning sixth subdue darkness
  creeping gathered divide." + `.socail_links` (4 brand icons, `#A8A7A0`,
  `margin: 0 10px`); (2) "Departments": Eye Care / Skin Care / Pathology /
  Medicine / Dental; (3) "Useful Links": About / Blog / Contact / Appointment
  (source repeats "About" — use unique links); (4) "Address": `200, D-block,
Green lane USA` / `+10 367 467 8934` / `docmed@contact.com` (phone as plain
  text, NO `tel:` literals). `.footer_title` 22px/400 white, `margin-bottom:
40px`. Copyright bar `.copy-right_text` bg `#000000`, `padding-bottom:
30px`: `.footer_border` + `.copy_right` 16px `#919191` centered: "Copyright
  © <year> All rights reserved | This template is made with ♥ by **Component
  Dock**" where "Component Dock" links https://www.componentdock.com/
  (replacing the source's Colorlib credit).
- **Appointment modal (`#appointmentModal`):** Bootstrap modal triggered by
  the header "Make an Appointment" button (and the service-band "Make an
  Appointment" link): form fields — date, time, "Select Department" select
  (Eye Care / Physical Therapy / Dental Care), "Select Doctor" select
  (Mirazul Alom / Monzul Alom / Azizul Islam), Name, Phone no., Email,
  `.boxed-btn3` "Confirm" submit. Implement as a React modal dialog with
  zod + react-hook-form validation per docs/conventions.md; show a success
  state on valid submit.
- **Mobile:** source uses a Bootstrap-based mobile menu toggle — implement a
  React hamburger in the main header showing the nav links (incl. dropdown
  items) in a white dropdown; stack split/grid sections below `lg`; hero
  slider text stacks over the photo.
- **Placeholder images:** `https://picsum.photos/seed/medix-<n>/<w>/<h>`.
  Subject-critical photos (hero banner ×1 (slides reuse 2 bg images — use 2
  seeds), welcome thumbs ×2, department thumbs ×6, testimonial bg ×2,
  business tab thumbs ×3, expert photos ×6, emergency bg ×2) MUST be
  screened per the seed-screening method (pixel metric + browser verify) —
  pick seeds that provably render medical/doctor/clinic scenes, pin the
  verified seeds in the PR + this spec. Icons from `lucide-react`
  (HeartPulse, Phone, FirstAid, ChevronRight, Quote, Calendar, Clock, User,
  Mail); brand icons (LinkedIn/Facebook/Twitter/Instagram) as inline SVGs.

## Requirements

### Requirement: Header — top bar, nav, appointment button

The system SHALL render a header with a light-blue (`#F5FBFF`) top bar
(social icons left: LinkedIn, Facebook, Twitter, Instagram; contact links
right: `info@docmed.com` + a phone number) and a white main bar (logo left,
centered nav Home / Department / Blog▾ / Pages▾ / Doctors / Contact, and a
blue "Make an Appointment" button right). On mobile a hamburger SHALL open a
white dropdown with the same links.

#### Scenario: Top bar content

- **GIVEN** the page is rendered
- **WHEN** the header top bar is inspected
- **THEN** it shows the four social icons on the left and the email + phone
  contact links on the right

#### Scenario: Main bar content

- **GIVEN** the page is rendered
- **WHEN** the main header bar is inspected
- **THEN** it shows the logo, the six nav entries (Blog and Pages expand to
  dropdown items), and the blue "Make an Appointment" button

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a dropdown with the nav links appears and can be closed

### Requirement: Hero slider

The system SHALL render a 700px hero slider with three slides over doctor-
photo background images. Each slide SHALL show a "Health care" / "For Hole
Family" 70px light headline (bold span), an 18px grey blurb, a gradient-blue
"Check Our Services" button, and the slider SHALL have prev/next arrow
controls.

#### Scenario: Slide content

- **GIVEN** the hero slider is rendered
- **WHEN** a slide is inspected
- **THEN** it shows the headline, blurb, and "Check Our Services" button over
  the background photo

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the next/previous arrow is used
- **THEN** the slider advances to the next/previous slide

### Requirement: Service band

The system SHALL render a sky-blue (`#5DB2FF`) band with three service cards
(Hospitality / Emergency Care / Chamber Service), each with a white 50px
icon, a 26px white title, a white blurb, and a white-outline link (Apply For
a Bed / phone number / Make an Appointment). Phone numbers render as plain
text with no `tel:` literals.

#### Scenario: Service cards

- **GIVEN** the service band is rendered
- **WHEN** it is inspected
- **THEN** it shows the three cards with icon, title, blurb, and outline
  link in order

### Requirement: Welcome section

The system SHALL render a split welcome section: two overlapping photos on
the left (second photo offset bottom-right), and on the right an 18px
"Welcome to Medix" heading with a blue underline, a 36px "Best Care For Your
Good Health" headline, a paragraph, three bullet points with blue chevron
icons, and a blue-outline "Learn More" button.

#### Scenario: Welcome content

- **GIVEN** the welcome section is rendered
- **WHEN** it is inspected
- **THEN** it shows the photos, the heading pair, the paragraph, the three
  bullet points, and the Learn More button

### Requirement: Departments grid

The system SHALL render a centered "Our Departments" section title (36px
with a centered blue underline and a subtitle) and a 2×3 grid of six white
shadowed cards (Eye Care, Physical Therapy, Dental Care, Diagnostic Test,
Skin Surgery, Surgery Service). Each card SHALL show a photo that zooms on
hover, a 22px title, a blurb, and a blue "Learn More" link.

#### Scenario: Department cards

- **GIVEN** the departments section is rendered
- **WHEN** the grid is inspected
- **THEN** it shows the section title and the six department cards with
  photo, title, blurb, and Learn More link

#### Scenario: Card hover zoom

- **GIVEN** a department card is rendered
- **WHEN** the card is hovered
- **THEN** the card's photo scales up

### Requirement: Testimonials slider

The system SHALL render a full-width testimonial slider (three slides) over
darkened background images (black overlay, `rgba(0,0,0,0.3)`) with centered
white content: a 40px quote icon, a 20px testimonial paragraph, and an
uppercase author name.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** a slide is inspected
- **THEN** it shows the quote icon, the white testimonial text, and the
  author name over the darkened background

### Requirement: Business tabs

The system SHALL render a light-blue (`#F5FBFF`) section with three equal
tabs (Excellent Services / Qualified Doctors / Emergency Departments, active
tab underlined). Each tab panel SHALL show a 75px circular sky-blue icon, a
20px title, a paragraph, and a photo.

#### Scenario: Tab switching

- **GIVEN** the tabs section is rendered
- **WHEN** a tab is activated
- **THEN** the panel shows that tab's icon, title, paragraph, and photo, and
  the active tab is underlined

### Requirement: Expert Doctors carousel

The system SHALL render an "Expert Doctors" section with a 36px left-aligned
title and a carousel of six doctor cards (photo, name, specialty). The name
strip SHALL have a `#F5FBFF` background that turns sky-blue on hover, and
the carousel SHALL have prev/next arrow controls.

#### Scenario: Doctor cards

- **GIVEN** the expert doctors section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows six doctor cards, each with photo, name, and specialty

#### Scenario: Carousel navigation

- **GIVEN** the expert doctors carousel is rendered
- **WHEN** the next/previous arrow is used
- **THEN** the carousel advances to the next/previous set of cards

### Requirement: Emergency contact band

The system SHALL render an emergency band split into two halves over photos
with a translucent sky-blue overlay. The left half SHALL show "For Any
Emergency Contact", a blurb, and a pill phone button (plain-text number).
The right half SHALL show "Make an Online Appointment", a blurb, and a pill
gradient "Make an Appointment" button.

#### Scenario: Emergency content

- **GIVEN** the emergency band is rendered
- **WHEN** it is inspected
- **THEN** it shows the two halves with heading, blurb, and pill button each

### Requirement: Footer

The system SHALL render a dark (`#1F1F1F`) footer with four columns: an
about column (logo, blurb, four social icon links), a Departments links
column (Eye Care / Skin Care / Pathology / Medicine / Dental), a Useful
Links column (About / Blog / Contact / Appointment), and an Address column
(address, phone, email). A black copyright bar SHALL read "Copyright ©
<year> All rights reserved | This template is made with ♥ by **Component
Dock**" where "Component Dock" links https://www.componentdock.com/ (no
Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the about, Departments, Useful Links, and Address columns

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

### Requirement: Appointment modal

The system SHALL render an appointment modal opened by the header "Make an
Appointment" button (and the service-band link). The modal SHALL contain a
form with date, time, department select (Eye Care / Physical Therapy /
Dental Care), doctor select (three doctors), name, phone, and email fields,
and a gradient "Confirm" submit button. The form SHALL validate input and
SHOW a success state on valid submit.

#### Scenario: Modal opens

- **GIVEN** the page is rendered
- **WHEN** the header "Make an Appointment" button is activated
- **THEN** the appointment modal opens with the full form

#### Scenario: Form validation and submit

- **GIVEN** the appointment modal is open
- **WHEN** invalid input is submitted
- **THEN** per-field errors are shown and the submit is blocked
- **WHEN** valid input is submitted
- **THEN** a success confirmation is shown and the form is reset

## Verification checklist

- [ ] `openspec/specs/template-medix/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/medix`, package `@free-react-templates/medix`, no
      ColorLib references in app code (grep for colorlib/Docmed in apps/medix)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh medix`
- [ ] Section order matches the source: header (top bar + main bar) → hero
      slider → service band → welcome → departments → testimonials → business
      tabs → expert doctors → emergency band → footer (+ appointment modal)
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #009DFF`,
      `--color-brand-sky: #5DB2FF`, `--color-brand-deep: #0181F5`,
      `--color-tint: #F5FBFF`, `--color-ink: #1F1F1F`,
      `--color-muted: #727272`, `--color-faint: #919191`,
      `--color-footer-text: #C7C7C7`, `--color-footer: #1F1F1F`; Google Fonts
      `<link>` in `index.html`: Poppins (300/400/500/600/700)
- [ ] Header: `#F5FBFF` top bar (4 social SVGs left, email + phone right),
      white main bar (logo, centered nav Home / Department / Blog▾ / Pages▾ /
      Doctors / Contact, blue "Make an Appointment" button); mobile hamburger
      → white dropdown
- [ ] Hero: 700px swiper slider, 3 slides, doctor-photo bg, "Health care For
      Hole Family" 70px light headline + bold span, blurb, gradient
      "Check Our Services", prev/next arrows
- [ ] Services: `#5DB2FF` band, 3 cards (Hospitality / Emergency Care /
      Chamber Service), white 50px icons, white outline links; phone as plain
      text (NO `tel:` literals)
- [ ] Welcome: 2 overlapping photos, "Welcome to Medix" + 50px blue
      underline, "Best Care For Your Good Health" h3, 3 blue-chevron bullets,
      blue-outline "Learn More"
- [ ] Departments: centered title w/ underline, 2×3 grid of 6 white shadowed
      cards, thumb zoom on hover, blue Learn More links
- [ ] Testimonials: 3 slides over darkened bg (rgba(0,0,0,0.3)), quote icon,
      white text, uppercase author
- [ ] Business tabs: `#F5FBFF` bg, 3 equal tabs (active underlined), panes
      with 75px circular `#5DB2FF` icon + h3 + p + photo
- [ ] Expert Doctors: left title, 6-card carousel, `#F5FBFF` name strip →
      `#5DB2FF` on hover, prev/next arrows
- [ ] Emergency: 2 halves over photos + `#5DB2FF` 0.8 overlay, pill buttons
      (radius 30px), plain-text phone
- [ ] Footer: `#1F1F1F` top (4 columns: about + 4 social SVGs, Departments,
      Useful Links, Address), `#000` copyright bar with Component Dock link
- [ ] Appointment modal: date/time/2 selects/name/phone/email + Confirm;
      zod validation, success state on valid submit
- [ ] Placeholder images via `https://picsum.photos/seed/medix-<n>/<w>/<h>`,
      subject-screened (medical/doctor/clinic scenes for hero, welcome,
      departments, testimonials, tabs, experts, emergency); icons from
      `lucide-react` (HeartPulse, Phone, FirstAid, ChevronRight, Quote,
      Calendar, Clock, User, Mail); brand icons as inline SVGs
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/docmed/`), design tokens, diffs (name,
      placeholder images, React swiper/state instead of swiper.js + Bootstrap
      modal, nav underline color deviation, varied testimonial/doctor names,
      Component Dock footer credit)
