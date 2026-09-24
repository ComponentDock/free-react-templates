# Template: Curelink (Health / Medical)

## Purpose

Curelink is a single-page health/medical landing template in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib "Remedic" website template design, built under a different
name (**Curelink**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Remedic" — health / medical landing template
  (source: https://colorlib.com/wp/template/remedic/).
  TEMPLATES.md line 2258.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/remedic/
  (HTTP 200, 48 KB, title "Remedic - Free Bootstrap 4 Template by
  Colorlib"). Stylesheets: `css/style.css` (78 KB, compiled from SCSS),
  `css/owl.carousel.min.css`, `css/animate.css`, `css/aos.css`,
  `css/magnific-popup.css`, `css/flaticon.css`, `css/icomoon.css`,
  `css/ionicons.min.css`, `css/bootstrap-datepicker.css`,
  `css/jquery.timepicker.css`. Font: "Work Sans" (300–700) via
  `--font-family-sans-serif` Bootstrap variable. Bootstrap 4 grid.
  jQuery + Owl Carousel for hero/testimonial carousels, AOS for scroll
  animations, Magnific Popup for lightbox.
- **Screenshot:** `remedic-free-template.jpg` (TEMPLATES.md line 2258) —
  medical/health landing: dark purple navbar with pharmacy icon +
  "ReMedic" logo, hero with blue overlay on bg image + white headline
  "The most valuable thing is your Health", departments tab section
  (vertical pills left, content right), bg-image services section,
  flip-card doctor profiles, counter stats on bg image, testimonial
  carousel, blog grid, newsletter with gradient, dark purple footer.

- **Visual design (from DOM + CSS tokens + rendered screenshot):**
  Professional medical/health landing — dark purple (`#39345a`) navbar
  and footer, blue (`#167ce9`) hero overlay (opacity 0.7), white body
  sections, mint/teal (`#79efb4`) accent in newsletter gradient,
  light blue (`#78d5ef`) for primary buttons, "Work Sans" font
  throughout. Key signature: department vertical tab pills, flip-on-hover
  doctor cards (CSS 3D transform), parallax newsletter gradient
  (blue→teal diagonal), dark bg image sections. The demo brands itself
  "ReMedic"; recreation uses the NEW name **Curelink**.

## Design tokens (from css/style.css)

| Token            | Value                    | Where                                                                  |
| ---------------- | ------------------------ | ---------------------------------------------------------------------- |
| Primary blue     | `#167ce9`                | Hero overlay bg, newsletter gradient start, counter section            |
| Dark purple      | `#39345a`                | Navbar (mobile), footer overlay bg, section headings dark              |
| Teal/mint        | `#79efb4`                | Newsletter gradient end                                                 |
| Light blue       | `#78d5ef`                | `.btn-primary` bg + hover states                                       |
| Grey body        | `#6c757d`                | Bootstrap secondary/muted text                                         |
| Dark ink         | `#212529`                | Body text, headings                                                    |
| Font family      | `"Work Sans", sans-serif`| All text (Bootstrap `--font-family-sans-serif`)                        |
| Hero             | 650px height, bg image + blue overlay (opacity .7) | `.hero-wrap`, `.overlay` with `background: #167ce9` |
| Buttons          | Bootstrap `.btn-primary` — light blue `#78d5ef` fill, dark text, standard Bootstrap radius | "Learn More" in departments |
| Navbar           | Dark purple `#39345a` mobile, white desktop; pharmacy icon + wordmark | `.ftco-navbar-light`, `.navbar-dark` |
| Department tabs  | Vertical pills (`.nav-pills`), left column, flaticon icons per dept | `.nav-link-wrap`, `.nav-pills` |
| Doctor cards     | 427px height flip cards: front (bg image + name/specialty), back (blockquote quote + author) | `.block-2`, `.flipper`, `.front`, `.back` |
| Counter section  | bg image, white text, "Some fun facts" heading | `.ftco-counter`, `.block-18` |
| Testimonials     | Owl Carousel, circular user photos with quote icon overlay, name + position | `.testimony-section`, `.testimony-wrap` |
| Blog cards       | 2-column grid, bg image thumbnail + meta (date, author, comments) + heading + excerpt | `.blog-entry`, `.block-20` |
| Newsletter       | Blue→teal diagonal gradient (`#167ce9` → `#79efb4`), centered form | `.ftco-section-parallax`, `.parallax-img` |
| Footer           | Dark purple `#39345a` overlay (opacity .95) on bg image, 4 columns: logo+social, Information links, Site Links, Contact info | `.ftco-footer` |

## Structure (1:1, section order)

1. **Navbar** `nav.navbar.navbar-dark` — dark purple on mobile, white on
   desktop. Logo: flaticon pharmacy icon + "Curelink" wordmark (white
   "Re" + rest). Nav links: Home (active), About, Departments, Doctors,
   Blog, Contact. Right: "Make an Appointment" CTA pill.

2. **Hero** `div.hero-wrap` — 650px, bg image (`picsum.photos/seed/
   curelink-hero/1920/650`) + blue overlay (opacity .7). Centered white
   text: h1 "The most valuable thing is your Health" + paragraph
   subtitle.

3. **Departments / Services** `section.ftco-services` — two-column:
   left (4 cols): vertical pill tabs (Cardiology active, Neurology,
   Diagnostic, Dental, Ophthalmology, Emergency) with flaticon icons;
   right (8 cols): tab content panels, each with icon + h2 department
   name + paragraph + "Learn More" light blue button. Tabs switch
   content via Bootstrap pill navigation.

4. **Services BG Section** `section.ftco-section-2` — bg image
   (`picsum.photos/seed/curelink-services/1920/600`). Right-aligned
   (6 cols) 2×2 grid of service cards: each card has icon + h2 title
   + paragraph. Cards: "Laboratory Services", "General Treatment",
   "Emergency Service", "24/7 Help & Support". Cards have hover
   arrow icon animation.

5. **Doctors** `section.ftco-section` — heading "Our Experienced
   Doctors". 4-column grid of flip cards (427px height): front shows
   bg image (`picsum.photos/seed/curelink-doctor-<n>/400/427`) with
   name + specialty overlay; back shows blockquote + author avatar.
   Cards: "Aldin Powell — Neurologist", "Aldin Powell —
   Pediatrician", "Aldin Powell — Ophthalmologist", "Aldin Powell —
   Pulmonologist". Below cards: "We are well experienced doctors"
   heading + paragraph.

6. **Counter / Fun Facts** `section.ftco-counter` — bg image
   (`picsum.photos/seed/curelink-counter/1920/400`). White text:
   "Some fun facts" heading + subheading. 4 counters in a row:
   "60 Hospital", "200 Doctors", "100 Clinics", "200 Reviews".

7. **Testimonials** `section.testimony-section` — Owl Carousel of 4
   testimonial cards. Each: circular user photo (`picsum.photos/seed/
   curelink-person-<n>/150/150`) with quote icon overlay, paragraph
   quote, name + position ("Patient" or "Doctor").

8. **Blog** `section.ftco-section.bg-light` — heading "Recent from
   blog". 2-column grid of 4 blog cards: each card has bg image
   thumbnail (`picsum.photos/seed/curelink-blog-<n>/400/300`) on left,
   meta row (date "August 12, 2018" + author "Admin" + "3" comments
   icon) + h3 title + paragraph excerpt on right. All titled "New
   technology facilities".

9. **Newsletter** `section.ftco-section-parallax` — blue→teal diagonal
   gradient (`#167ce9` → `#79efb4`). Centered white text: h2 "Subscribe
   to our Newsletter" + paragraph + email input + "Subscribe" button
   in a form row.

10. **Footer** `footer.ftco-footer` — dark purple overlay (opacity .95)
    on bg image. 4 columns: Col 1 "Curelink" + paragraph + social icons
    (Twitter, Facebook, Instagram); Col 2 "Information" links
    (Appointments, Our Specialties, Why Choose us, Our Services, Health
    Tips); Col 3 "Site Links" (Home, About, Departments, Doctors, Blog,
    Contact); Col 4 "Have a Questions?" with address, phone, email.
    Bottom bar: copyright + heart icon + "Colorlib" → replace with
    Component Dock link.

## Requirements

### Requirement: Dark navbar with pharmacy logo and appointment CTA

The system SHALL render a dark navbar with a pharmacy icon, "Curelink"
wordmark, navigation links, and an "Make an Appointment" CTA button.

#### Scenario: Navbar content

- **GIVEN** the Curelink page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show a pharmacy icon + "Curelink" wordmark
- **AND** nav links SHALL be shown: Home (active), About, Departments,
  Doctors, Blog, Contact
- **AND** a "Make an Appointment" CTA link SHALL appear on the right
- **AND** the navbar SHALL be dark purple on mobile and white on desktop

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a collapsible menu SHALL open with the same nav links

### Requirement: Hero with blue overlay and headline

The system SHALL render a 650px hero with a background image, blue
overlay, and centered white headline text.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the heading "The most valuable thing is your Health" SHALL
  be shown in large white text
- **AND** a subtitle paragraph SHALL appear below the heading
- **AND** a blue overlay (opacity 0.7) SHALL cover the background image

### Requirement: Department tabs with vertical pills

The system SHALL render a departments section with vertical pill tabs
on the left and tab content panels on the right.

#### Scenario: Department tabs

- **GIVEN** the Departments section is displayed
- **WHEN** the page loads
- **THEN** six vertical pill tabs SHALL be shown: Cardiology (active),
  Neurology, Diagnostic, Dental, Ophthalmology, Emergency
- **AND** each tab SHALL have an icon and label
- **AND** clicking a tab SHALL show the corresponding department content
  with icon, heading, paragraph, and "Learn More" button

### Requirement: Services section with background image

The system SHALL render a services section with a background image and
four service cards.

#### Scenario: Services content

- **GIVEN** the Services BG section is displayed
- **WHEN** the page loads
- **THEN** four service cards SHALL be shown in a 2×2 grid: "Laboratory
  Services", "General Treatment", "Emergency Service", "24/7 Help &
  Support"
- **AND** each card SHALL have an icon, title, and paragraph
- **AND** the section SHALL have a background image

### Requirement: Doctor flip cards

The system SHALL render four doctor profile cards that flip on hover
to reveal a quote.

#### Scenario: Doctor cards

- **GIVEN** the Doctors section is displayed
- **WHEN** the page loads
- **THEN** four flip cards SHALL be shown: "Aldin Powell — Neurologist",
  "Aldin Powell — Pediatrician", "Aldin Powell — Ophthalmologist",
  "Aldin Powell — Pulmonologist"
- **AND** each card front SHALL show a photo, name, and specialty
- **AND** hovering a card SHALL flip it to reveal a blockquote and
  author info

### Requirement: Counter / Fun Facts section

The system SHALL render a counter statistics section on a background
image with four stat items.

#### Scenario: Counter stats

- **GIVEN** the Counter section is displayed
- **WHEN** the page loads
- **THEN** the heading "Some fun facts" SHALL be shown
- **AND** four counters SHALL display: "60 Hospital", "200 Doctors",
  "100 Clinics", "200 Reviews"

### Requirement: Testimonials carousel

The system SHALL render an Owl Carousel of testimonial cards with
circular user photos and quotes.

#### Scenario: Testimonials content

- **GIVEN** the Testimonials section is displayed
- **WHEN** the page loads
- **THEN** a carousel of testimonial cards SHALL be shown
- **AND** each card SHALL have a circular user photo with quote icon,
  a quote paragraph, name, and position

### Requirement: Blog cards grid

The system SHALL render a 2-column grid of four blog post cards with
thumbnails, metadata, titles, and excerpts.

#### Scenario: Blog cards

- **GIVEN** the Blog section is displayed
- **WHEN** the page loads
- **THEN** four blog cards SHALL be shown in a 2-column grid
- **AND** each card SHALL have a background image thumbnail, meta row
  (date, author, comments), a title link, and an excerpt paragraph

### Requirement: Newsletter with gradient background

The system SHALL render a newsletter section with a blue→teal diagonal
gradient, centered heading, and email subscription form.

#### Scenario: Newsletter content

- **GIVEN** the Newsletter section is displayed
- **WHEN** the page loads
- **THEN** the heading "Subscribe to our Newsletter" SHALL be shown in
  white
- **AND** an email input + "Subscribe" button SHALL be shown
- **AND** the section background SHALL be a blue→teal diagonal gradient

### Requirement: Footer with widgets and bottom bar

The system SHALL render a dark purple footer with four widget columns
and a copyright bottom bar linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** four widget columns SHALL be shown: "Curelink" logo +
  social icons, "Information" links, "Site Links", "Have a Questions?"
  with contact info
- **AND** a copyright bottom bar SHALL link to Component Dock

#### Scenario: Full page render

- **GIVEN** the Curelink page is rendered in full
- **WHEN** all sections load
- **THEN** the page SHALL show: Navbar, Hero, Departments, Services BG,
  Doctors, Counter, Testimonials, Blog, Newsletter, Footer — in that
  exact order
- **AND** all sections SHALL use the Curelink brand palette (primary
  blue `#167ce9`, dark purple `#39345a`, teal `#79efb4`, light blue
  `#78d5ef`, Work Sans font)

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar has pharmacy icon, "Curelink" wordmark, nav links, CTA
- [ ] Mobile hamburger menu works
- [ ] Hero shows blue overlay + headline + subtitle
- [ ] Department tabs switch content correctly
- [ ] Services BG section shows 4 service cards
- [ ] Doctor cards flip on hover to reveal quotes
- [ ] Counter section shows 4 stats on bg image
- [ ] Testimonials carousel works with circular photos
- [ ] Blog shows 4 cards in 2-column grid
- [ ] Newsletter has blue→teal gradient + email form
- [ ] Footer has 4 widget columns + copyright bar
- [ ] Footer links to Component Dock
- [ ] All design tokens match: blue `#167ce9`, purple `#39345a`,
  teal `#79efb4`, light blue `#78d5ef`, Work Sans
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `curelink.free.componentdock.com`
- [ ] `homepage` is `https://curelink.free.componentdock.com`
