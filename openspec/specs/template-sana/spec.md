# Template: Sana (Medical / Healthcare Template)

## Purpose

Sana is a single-page medical / healthcare website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hospice" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hospice" — medical / healthcare website template
  (source: https://colorlib.com/wp/template/hospice/, Bootstrap 4).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/hospice/
  (HTTP 200, "Hospice Medical"). Live DOM fetched and parsed, plus
  `css/style.css` (unminified, complete) for tokens; Google Fonts import
  confirmed in the stylesheet (`Roboto:300,400,500,700`). The screenshot
  `hospice-free-template.jpg` was reviewed visually in a browser.
- **Visual design (from screenshot):** clean, professional medical site in
  white + sky blue. Thin white top strip with social icons (left) and phone +
  email (right); white main header with blue-cross logo and uppercase nav
  (active link blue). Hero: soft pastel-blue medical still (stethoscope
  curving from top right + 3D anatomical heart model), white headline "We
  Care for Your Health Every Moment", lorem paragraph, rectangular blue
  "Get Started" CTA. Below: white Procedure Category section, then light
  `#f9f9ff` bands for About/Feedback/Appointment. Generous whitespace,
  calm trustworthy feel.
- **Section order (1:1, from the DOM):**
  1. Header — `.top_menu` (white, 40px): social icons left, right-aligned
     phone `012-6532-568-9746` (`lnr-phone-handset`) + `emergency@colorlib.com`
     (`lnr-envelope`), 12px `#777`. `.main_menu` (bg `#f8f8f8`): logo image
     (blue cross + wordmark) left; right-aligned nav — Home, Departments,
     Doctors, Pages (submenu dropdown: Blog, Blog Details, Elements), About,
     Services, Blog, Contact — links 500 12px/80px Roboto uppercase `#000`,
     hover/active `#3face4`; search icon. Sticky on scroll
     (`.header_area.navbar_fixed`, menu height shrinks 80px → 70px).
  2. Hero `.home_banner_area` — background image `img/banner/home.jpg`
     (cover, no-repeat, center bottom, height 900px); left-aligned content:
     h1 48px white "We Care for Your Health Every Moment" (max-width 520px),
     p 14px/24px white lorem (max-width 498px, padding 30px 0 40px), CTA
     "get started" `.main_btn` (blue, radius 0). `.white_bg_btn` variant
     exists (translucent white bg, white text, radius 5px, hover → `#3face4`).
  3. Procedure Category `.procedure_category.section_gap` — centered section
     title (h1 "Procedure Category" + centered p, `.section-title-wrap`,
     margin-bottom 80px); 3 equal image cards (`img/procedure/p1-3.jpg`),
     hover overlay `rgba(34,34,34,0.8)` → `rgba(63,172,228,0.63)` with white
     uppercase h5 + 1px white `.border_line` divider + 300-weight p. (DOM
     repeats "Emergency Treatment" placeholder ×3 — use three distinct
     procedure names of the same kind, e.g. Emergency Treatment, Cardiac
     Care, Lab Tests.)
  4. About Myself `.about_myself.pad_bottom` — `.about_box` (bg `#f9f9ff`,
     padding 80px 120px 21px): left-aligned section title "About Myself"
     (`section-title-wrap text-left`) + p; 4 `.activity_box` cards (white,
     1px `#dddddd` border, radius 5px, padding 20px, margin-bottom 30px;
     hover: `box-shadow 0 8px 21px #dddddd`, border transparent): icon
     (`lnr-database`, `lnr-book`, `lnr-users`, `lnr-users`) 24px `#3face4`,
     h3 counter/stat, p label. Stats: $2.5 M, 1465, 3965.
  5. Feedback `.feedback_area.section_gap.relative` — bg `#f9f9ff`; centered
     section title "Enjoy our Client's Feedback"; owl-carousel
     `.active-review-carusel` of `.single-feedback-carusel` slides (margin-top
     70px): quote paragraph (lorem), avatar, author h4 "Fannie Rowe" + role,
     star rating row (checked stars orange). Auto-rotates; 4 slides.
  6. Our Offered Services `.service_area.section_gap` — centered title "Our
     Offered Services"; 4 `.single_service` columns (centered): `lnr` icon
     35px `#3face4`, h4 (24/7 Emergency, Expert Consultation, Intensive Care,
     Family Planning; margin 20px 0), p; hover h4 → `#3face4`.
  7. Appointment `.appointment-area` — bg `#f9f9ff`; two halves.
     Left `.appointment-left` (padding-top 120px): h1 30px "Servicing Hours"
     - p (max-width 450px) + `.time-list` rows (li border-bottom 1px `#eee`,
       14px `#222`, margin/padding-bottom 20px): Monday-Friday 08.00 am -
       10.00 pm; Saturday 08.00 am - 10.00 pm; Sunday 08.00 am - 10.00 pm.
       Right `.appointment-right` (white card, `box-shadow 0px 10px 20px 0px
rgba(153,153,153,0.1)`, margin -20px 0): h3 "Book an Appointment",
       `.form-wrap` (padding 30px 40px 50px): Disease Type select
       (options Type One…Type Four), Patient Name, Phone, Email Address, Date
       of Birth, Appointment Date (datepicker), Message textarea — all radius
       0, 13px w300, border `#ced4da`, focus border `#3face4`; submit
       "Confirm Booking" `.primary-btn` (100% width, `#3face4`, radius 0).
  8. Recent Blogs `.recent-blog-area.section_gap` — centered title "Our
     Recent Blogs"; 3 blog cards (3-col): image (`img/b1-3.jpg`), h4 title
     link ("Portable Fashion for women", "Summer ware are coming" ×2), p
     excerpt (lorem). DOM has no date/read-more — keep image + title +
     excerpt.
  9. Footer `.footer-area.section_gap` — bg `#222222`; 3 columns: "Top
     Products" (h6 white 18px w600 ls 1px; links `#777` hover `#3face4`:
     Managed Website, Manage Reputation, Power Tools, Marketing Service),
     "Contact Us" (phone `012-6532-568-97468`, email, address), "Newsletter"
     (`.newsletter_widget`: radius-0 email input + `#3face4` "bbtns" button);
     bottom copyright bar (replace the ColorLib credit with monorepo credit,
     e.g. "© <year> Sana. All rights reserved.").
- **Design tokens extracted from the preview CSS (`style.css`):**
  - Primary brand **sky blue `#3face4`** — `.main_btn` background/border,
    nav hover/active links, service icons + hover h4, activity icons, footer
    link hovers, form focus borders, newsletter button, category overlay
    hover.
  - Accent yellow `#f8b600` — only on the Elements (UI kit) subpage
    (`.genric-btn.primary`, blockquote border); NOT part of the homepage.
  - Neutral palette: `#fff` (surfaces, top bar), `#f8f8f8` (main menu bg),
    `#f9f9ff` (About box, Feedback + Appointment section backgrounds),
    `#222222` (headings + footer bg), `#777777` (body/footer link text,
    12px top-bar text), `#dddddd` (activity box borders), `#eee` (time-list
    dividers), `#ced4da` (form borders).
  - Fonts: **"Roboto"** (300/400/500/700) — everything (Google Fonts
    `@import` in the stylesheet; recreation loads it via `<link>` in
    `index.html`).
  - Buttons `.main_btn`: bg `#3face4`, `padding: 0 40px`, `line-height:
48px`, 13px w500 Roboto, white text, `border: 1px solid #3face4`,
    `border-radius: 0` (20px on some responsive rules); hover — transparent
    bg + `#3face4` text. `.white_bg_btn` (hero alt): `rgba(255,255,255,0.21)`
    bg, white text, radius 5px, hover solid `#3face4`.
  - Form controls: `border-radius: 0`, 13px w300, `padding: 0.675rem
0.75rem`, border `1px solid #ced4da`, focus border `#3face4` (no shadow).
  - Section rhythm: `.section_gap` padding 120px 0 (50px mobile); section
    titles `.section-title-wrap` centered (or text-left variant), h1 + p
    max-width 500px, margin-bottom 40–80px.
  - Category hover overlay: `rgba(34,34,34,0.8)` → `rgba(63,172,228,0.63)`;
    activity hover shadow `0 8px 21px #dddddd`; appointment card shadow
    `0px 10px 20px 0px rgba(153,153,153,0.1)`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sana-<n>/<w>/<h>`); icons → lucide-react (menu,
  search, phone, mail, map-pin, database/activity equivalents, users, star,
  chevrons, socials); Roboto via Google Fonts `<link>`; brand `#3face4` in
  `@theme` so shared Button/ButtonLink `primary` variants resolve to it;
  square (radius-0) button shape via theme tokens; appointment form is
  presentational — validate + show a confirmation, no backend; no
  asset/CSS/font-file copying.

Sana lives in `apps/sana` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) and the repo-standard Navbar/Footer chrome.

## Requirements

### Requirement: Header

The system SHALL render a top info bar and a sticky main navigation with the
site brand and section links.

#### Scenario: Top info bar

- **GIVEN** the Sana page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show social icons on the left
- **AND** the top bar SHALL show the phone number `012-6532-568-9746` and
  email `emergency@colorlib.com` (paraphrased to a Sana-branded contact) on
  the right

#### Scenario: Main navigation

- **GIVEN** the Sana page is rendered
- **WHEN** the user inspects the header
- **THEN** the header SHALL show the brand logo/name "Sana" and uppercase
  links Home, Departments, Doctors, About, Services, Blog, and Contact that
  anchor to their sections
- **AND** the header SHALL include a Pages dropdown with secondary links

#### Scenario: Sticky header and mobile menu

- **GIVEN** the page is scrolled
- **WHEN** the header passes the top of the viewport
- **THEN** the header SHALL become fixed/sticky
- **GIVEN** the viewport is narrow
- **WHEN** the user activates the hamburger trigger
- **THEN** the navigation links SHALL be revealed in a collapsible menu

### Requirement: Hero

The system SHALL render a full-width hero with a medical background image,
headline, subtext, and a primary call-to-action.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "We Care for Your Health Every Moment"
  in large white text over the background image
- **AND** it SHALL show a supporting paragraph and a "Get Started" primary
  button

### Requirement: Procedure Category

The system SHALL render a section of image cards that reveal an overlay label
on hover.

#### Scenario: Category cards

- **GIVEN** the Procedure Category section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered heading "Procedure Category" and three
  image cards, each with a procedure name
- **AND** hovering a card SHALL reveal a dark overlay with the procedure
  name, a divider line, and a short description

### Requirement: About Myself

The system SHALL render an about section with a left-aligned title and four
stat/activity cards.

#### Scenario: Activity cards

- **GIVEN** the About Myself section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show the heading "About Myself" with supporting text
- **AND** it SHALL show four cards, each with an icon, a headline stat
  (e.g. $2.5 M, 1465, 3965), and a label

### Requirement: Client Feedback

The system SHALL render a rotating carousel of patient testimonial cards.

#### Scenario: Testimonial carousel

- **GIVEN** the Feedback section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered heading "Enjoy our Client's Feedback"
- **AND** it SHALL show rotating testimonial cards, each with a quote, an
  avatar, an author name, a role, and a star rating
- **AND** the carousel SHALL advance automatically or via controls

### Requirement: Our Offered Services

The system SHALL render a four-column grid of medical service items.

#### Scenario: Service items

- **GIVEN** the Services section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered heading "Our Offered Services"
- **AND** it SHALL show four service items — 24/7 Emergency, Expert
  Consultation, Intensive Care, Family Planning — each with an icon, a
  title, and a short description

### Requirement: Appointment

The system SHALL render a two-part appointment section with service hours and
a booking form.

#### Scenario: Service hours

- **GIVEN** the Appointment section is displayed
- **WHEN** the user inspects the left column
- **THEN** it SHALL show the heading "Servicing Hours" with rows for
  Monday–Friday, Saturday, and Sunday, each with a time range (08.00 am -
  10.00 pm)

#### Scenario: Booking form

- **GIVEN** the Appointment section is displayed
- **WHEN** the user inspects the right column
- **THEN** it SHALL show a "Book an Appointment" card with a Disease Type
  select (Type One…Type Four), Patient Name, Phone, Email Address, Date of
  Birth, Appointment Date, and Message fields, and a "Confirm Booking"
  submit button

#### Scenario: Form validation

- **GIVEN** the booking form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL validate the required fields
- **AND** the form SHALL show a confirmation on successful submission

### Requirement: Recent Blogs

The system SHALL render a three-column grid of blog post cards.

#### Scenario: Blog cards

- **GIVEN** the Recent Blogs section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a centered heading "Our Recent Blogs"
- **AND** it SHALL show three cards, each with an image, a title link, and
  an excerpt

### Requirement: Footer

The system SHALL render a dark footer with link columns, contact details, a
newsletter signup, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Top Products" column of links, a "Contact Us"
  column (phone, email, address), and a "Newsletter" signup input with
  submit button
- **AND** the footer SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sana app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, Procedure Category,
  About Myself, Client Feedback, Our Offered Services, Appointment, Recent
  Blogs, and footer in order
- **AND** the document title SHALL be "Sana — Medical Template"

## Verification checklist

- [ ] `openspec/specs/template-sana/spec.md` present with the REAL section
      list (header → hero → procedure category → about myself → client
      feedback → our offered services → appointment → recent blogs →
      footer).
- [ ] Design tokens above (sky blue `#3face4`, `#f9f9ff`, `#f8f8f8`,
      `#222222`, `#777777`, Roboto 300/400/500/700, square radius-0 buttons
      and form controls, 120px section rhythm) captured in the spec.
- [ ] `docs/templates/sana/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh sana`,
      PR lists source (ColorLib Hospice), preview URL, tokens, and what
      differs.
