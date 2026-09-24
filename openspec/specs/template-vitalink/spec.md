# Template: Vitalink (Health / Medical)

## Purpose

Vitalink is a single-page health/medical landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medilife" website template design, built under a different
name (**Vitalink**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Medilife" — health / medical landing template
  (source: https://colorlib.com/wp/template/medilife/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/medilife/
  (HTTP 200, 39 KB, title "Medilife - Health & Medical Template | Home").
  Stylesheet: `style.css` (47 KB, compiled from SCSS, single `font-family:
  "Roboto", sans-serif`). Bootstrap 4 grid + custom icon font
  (themify-style medical icons: `icon-doctor`, `icon-blood-donation-1`,
  `icon-flask-2`, `icon-emergency-call-1`, `icon-blood-transfusion-2`,
  `icon-microscope`, `icon-doctor-1`, `icon-smartphone`, `icon-atoms`).
  jQuery + Owl Carousel for hero slider + gallery carousel.
- **Screenshot:** `medilife-free-template.jpg` (TEMPLATES.md line 2253) —
  medical/health landing page: white top header bar with contact info,
  white navbar with logo + nav + red emergency CTA button, hero carousel
  with bg image + white overlay + dark headline, dark navy appointment
  form panel, blue contact info sidebar, about section with service
  icons, blue counter stats, gallery carousel, features split section,
  3-column blog grid, blue emergency call area, dark footer with 4
  widget columns. Clean, professional medical aesthetic.

- **Visual design (from DOM + CSS tokens + rendered screenshot):**
  Professional medical/health landing page — white header + navbar with
  sticky scroll, full-viewport hero carousel with bg images + white
  overlay + dark navy text, dark navy (`#081f3e`) appointment form
  panel overlapping the hero via negative margin, blue (`#006cff`)
  contact info sidebar, white about section with icon service cards,
  blue `#006cff` counter/stats section, image gallery carousel,
  white features split section, 3-column blog cards, blue `#006cff`
  emergency call area with location helplines, dark navy footer with
  4 widget columns (logo + social, latest news, contact form,
  newsletter). Primary brand blue `#006cff`, dark navy `#081f3e`,
  white `#ffffff`, light grey `#f5f7f9`, red emergency `#ff0000`.
  Font: Roboto throughout. Buttons are rectangular with a small
  square arrow span (`+` icon). The demo brands itself "Medilife";
  recreation uses the NEW name **Vitalink**.

## Design tokens (from style.css)

| Token            | Value       | Where                                                                                       |
| ---------------- | ----------- | ------------------------------------------------------------------------------------------- |
| Primary blue     | `#006cff`   | `.medilife-btn` bg, `.medilife-contact-info` bg, `.medilife-emergency-area` bg, counter icons, hero carousel nav hover, `.medilife-btn span` bg (variant) |
| Dark navy        | `#081f3e`   | `.appointment-form-content` bg, `.medilife-appointment-form` bg, hero heading color, `.medilife-btn:hover`, `.medilife-btn.btn-2` bg, `.medilife-btn.btn-3`/`btn-4` text, bottom footer area bg |
| White            | `#ffffff`   | Body bg, hero overlay, button text, counter text, `.medilife-btn.btn-3`/`btn-4` bg, emergency text |
| Light grey       | `#f5f7f9`   | Body/section subtle bg                                                                       |
| Grey text        | `#57595c`   | Body paragraphs, muted text                                                                 |
| Grey secondary   | `#536174`   | Select border in appointment form                                                           |
| Red emergency    | `#ff0000`   | `.medilife-appoint-btn` bg (nav emergency CTA button)                                        |
| Font family      | `"Roboto", sans-serif` | All text throughout                                                                    |
| Hero heading     | 60px (md 40px, sm 24px), `#081f3e` | `.hero-slides-content h2`                                                         |
| Hero subheading  | 22px, `#081f3e`, weight 600       | `.hero-slides-content h5`                                                        |
| Buttons          | rectangular, no radius (default); padding via `medilife-btn` class; blue fill + white text + small square arrow span (`+` icon in dark navy box) | Hero CTA, About CTA, Features CTA, Contact form submit, Blog area |
| Emergency button | red `#ff0000` fill, white text, bold "emergencies" span, hover → white bg + blue text | Nav bar "For emergencies Click here"                                              |
| Counter icons    | 100px, `#006cff` | `.single-cool-fact-area i`                                                                |
| Counter numbers  | large heading, white bg section | `.single-cool-fact-area h2`                                                             |
| Section padding  | `section-padding-100` (100px top/bottom) and variants `100-20`, `100-0`, `100-50` | Most sections                                                            |
| Appointment form | dark navy bg, white text, form fields with border-bottom only (grey border), select dropdowns with grey border | `.medilife-appointment-form`                                                |
| Contact sidebar  | blue bg (`#006cff`), white text, icon + text pairs (hours, phone, address) | `.medilife-contact-info`                                                          |
| Blog cards       | 3-column grid, thumbnail image with date overlay badge, author avatar, title link, excerpt, comments count | `.single-blog-area`                                                         |
| Gallery          | Owl Carousel, images with "See More +" overlay button on hover | `.medilife-gallery-area`                                                          |
| Footer           | dark navy bg, 4-column widget grid: logo + social, Latest News (3 mini blog posts), Contact Form (name/email/message + blue submit), Newsletter (email + subscribe); bottom bar with copyright | `.footer-area` |
| Top header       | white bg, flex between "Welcome to Vitalink" left, "Opening Hours" + phone right, light grey border bottom | `.top-header-area`                                                             |

## Structure (1:1, section order)

1. **Top Header** `div.top-header-area` — white bg, container: flex
   between left "Welcome to **Vitalink**" and right "Opening Hours :
   Monday to Saturday - 8am to 10pm Contact : +12-823-611-8721".
   Light grey bottom border.

2. **Navbar** `div.main-header-area#stickyHeader` — white bg, sticky on
   scroll, container: logo image (left) → nav links (Home active,
   Pages dropdown, About Us, Services, News, Contact) right-aligned
   via `ml-auto` → red emergency CTA button "For **emergencies** Click
   here" (red bg, white text, bold "emergencies" span). Mobile:
   Bootstrap hamburger toggle.

3. **Hero** `section.hero-area` — Owl Carousel, 3 slides. Each slide:
   full-width bg image with white overlay, centered container content:
   h2 "Medical Services that You can Trust 100%" (60px, dark navy,
   line break) + h6 subtitle (lorem ipsum) + blue filled button
   "Discover Vitalink +" (`.medilife-btn` with arrow span). Carousel
   nav arrows (white circles, blue on hover) at sides.

4. **Appointment Form** `div.medilife-book-an-appoinment-area` —
   overlaps hero via `margin-top: -65px`. Two-column layout:
   - Left (9 cols): dark navy bg appointment form with fields:
     Speciality (select), Doctors (select), Date (text), Time (text),
     Name (text), Phone (text), Email (email), Message (textarea),
     Submit button "Make an Appointment +" (blue `.medilife-btn`).
     All fields have bottom-border only styling.
   - Right (3 cols): blue bg contact info sidebar with 3 info blocks:
     clock icon + hours, envelope icon + phone/email, map-pin icon +
     address.

5. **About Us** `section.medica-about-us-area` — white bg. Container:
   left (4 cols): heading "We always put our patients first" +
   paragraph + blue "View the services +" button. Right (8 cols):
   2×2 grid of service cards, each with icon + h5 title + paragraph:
   "The Best Doctors" (doctor icon), "Baby Nursery" (blood donation
   icon), "Laboratory" (flask icon), "Emergency Room" (emergency call
   icon).

6. **Cool Facts / Counters** `section.medilife-cool-facts-area` — light
   bg. 4-column grid of stat cards, each centered: large blue icon
   (100px), counter number (with "k" suffix on Patients), subtitle,
   paragraph. Stats: "5632 Blood donations", "23k Patients",
   "25 Specialities", "723 Doctors".

7. **Gallery** `div.medilife-gallery-area` — Owl Carousel of 4 images.
   Each image has a "See More +" overlay button on hover (white text
   on semi-transparent bg). Images: `g1.jpg` through `g4.jpg`.

8. **Features** `div.medilife-features-area` — white bg. Two-column
   layout: left: heading "A new way to treat patients in a
   revolutionary facility" + paragraph + blue "View the services +"
   button. Right: medical illustration image.

9. **Blog** `div.medilife-blog-area` — white bg. 3-column grid of blog
   cards, each: thumbnail image with date badge overlay (bottom-left),
   author avatar (circular), headline title link, paragraph excerpt,
   "3 Comments" link. Cards: "New drug release soon", "Free dental
   care", "Good news for the patients".

10. **Emergency** `div.medilife-emergency-area` — blue `#006cff` bg.
    Two-column layout: left: smartphone icon (130px white) + heading
    "For Emergency calls" + phone number "+12-823-611-8721" (60px
    white). Right: 2×2 grid of location helplines (London, New Castle,
    Manchester, Bristol) each with h5 city name + contact details.

11. **Footer** `footer.footer-area` — dark navy bg. 4-column widget grid:
    - Col 1: Logo image + paragraph + social icons (Google+, Pinterest,
      Facebook, Twitter).
    - Col 2: "Latest News" widget with 3 mini blog posts (thumbnail +
      title + date).
    - Col 3: "Contact Form" widget (Name, Email, Message inputs +
      "Contact Us +" blue button).
    - Col 4: "News Letter" widget (email input + "Subscribe" button +
      paragraph).
    - Bottom bar: copyright text with heart icon + "Colorlib" credit
      link → replace with Component Dock link.

## Requirements

### Requirement: Top header with welcome text and contact info

The system SHALL render a thin white top header bar with "Welcome to
Vitalink" on the left and opening hours + phone number on the right.

#### Scenario: Top header content

- **GIVEN** the Vitalink page is rendered
- **WHEN** the page loads
- **THEN** the top header SHALL show "Welcome to Vitalink" on the left
- **AND** "Opening Hours : Monday to Saturday - 8am to 10pm" and a
  phone number SHALL appear on the right
- **AND** the top header SHALL have a light grey bottom border

### Requirement: Sticky navbar with logo, navigation, and emergency CTA

The system SHALL render a white sticky navbar with a logo, centered
navigation links (Home active, About Us, Services, News, Contact), and
a red emergency call-to-action button.

#### Scenario: Navbar content

- **GIVEN** the Vitalink page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show a logo on the left
- **AND** nav links SHALL be shown: Home (active), About Us, Services,
  News, Contact
- **AND** a red button "For emergencies Click here" SHALL appear on the
  right with "emergencies" in bold
- **AND** the navbar SHALL become sticky on scroll

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a collapsible menu SHALL open with the same nav links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero carousel with headline and CTA

The system SHALL render a full-width hero carousel with background
images, a white overlay, dark navy headline text, a subtitle, and a
blue CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** the page loads
- **THEN** a carousel SHALL show slides with the heading "Medical
  Services that You can Trust 100%" in dark navy
- **AND** a subtitle paragraph SHALL appear below the heading
- **AND** a blue filled button "Discover Vitalink +" SHALL be shown
- **AND** carousel navigation arrows SHALL appear on hover

### Requirement: Appointment form with contact info sidebar

The system SHALL render a dark navy appointment form panel overlapping
the hero, with a form (speciality, doctor, date, time, name, phone,
email, message) on the left and a blue contact info sidebar on the
right.

#### Scenario: Appointment form fields

- **GIVEN** the appointment form section is displayed
- **WHEN** the page loads
- **THEN** a dark navy panel SHALL appear overlapping the hero area
- **AND** the form SHALL contain dropdowns for Speciality and Doctors
- **AND** text inputs for Date, Time, Name, Phone, Email
- **AND** a Message textarea
- **AND** a "Make an Appointment +" submit button (blue)

#### Scenario: Contact info sidebar

- **GIVEN** the appointment form section is displayed
- **WHEN** the page loads
- **THEN** a blue sidebar SHALL show on the right with three info
  blocks: hours (clock icon), phone/email (envelope icon), address
  (map-pin icon)

### Requirement: About Us with service cards

The system SHALL render an about section with a heading, paragraph,
CTA button, and four service cards in a 2×2 grid.

#### Scenario: About content

- **GIVEN** the About Us section is displayed
- **WHEN** the page loads
- **THEN** the heading "We always put our patients first" SHALL be
  shown
- **AND** a blue "View the services +" button SHALL be shown
- **AND** four service cards SHALL be shown: "The Best Doctors",
  "Baby Nursery", "Laboratory", "Emergency Room" — each with an icon,
  title, and paragraph

### Requirement: Cool Facts / Counter statistics

The system SHALL render a counter statistics section with four stat
cards showing icons, numbers, and labels.

#### Scenario: Counter stats

- **GIVEN** the Cool Facts section is displayed
- **WHEN** the page loads
- **THEN** four stat cards SHALL be shown in a row: "5632 Blood
  donations", "23k Patients", "25 Specialities", "723 Doctors"
- **AND** each card SHALL have a blue icon above the number
- **AND** each card SHALL have a brief description paragraph below

### Requirement: Gallery carousel

The system SHALL render an image gallery as a carousel with "See More
+" overlay buttons on hover.

#### Scenario: Gallery content

- **GIVEN** the Gallery section is displayed
- **WHEN** the page loads
- **THEN** a carousel of four images SHALL be shown
- **AND** each image SHALL have a "See More +" overlay button visible
  on hover

### Requirement: Features split section

The system SHALL render a two-column features section with text on the
left and an image on the right.

#### Scenario: Features content

- **GIVEN** the Features section is displayed
- **WHEN** the page loads
- **THEN** the heading "A new way to treat patients in a revolutionary
  facility" SHALL be shown on the left
- **AND** a paragraph and blue "View the services +" button SHALL
  appear below the heading
- **AND** a medical illustration image SHALL appear on the right

### Requirement: Blog cards grid

The system SHALL render a 3-column grid of blog post cards with
thumbnails, dates, authors, titles, excerpts, and comment counts.

#### Scenario: Blog cards

- **GIVEN** the Blog section is displayed
- **WHEN** the page loads
- **THEN** three blog cards SHALL be shown in a row
- **AND** each card SHALL have a thumbnail with a date badge, an
  author avatar, a title link, an excerpt paragraph, and a "3 Comments"
  link

### Requirement: Emergency call section

The system SHALL render a blue full-width emergency section with a
large phone number and four location helpline cards.

#### Scenario: Emergency content

- **GIVEN** the Emergency section is displayed
- **WHEN** the page loads
- **THEN** a blue background section SHALL show a smartphone icon,
  "For Emergency calls" heading, and phone number "+12-823-611-8721"
  in large white text
- **AND** four location helplines SHALL be shown: London, New Castle,
  Manchester, Bristol — each with contact details

### Requirement: Footer with widgets and bottom bar

The system SHALL render a dark navy footer with four widget columns
(logo + social, latest news, contact form, newsletter) and a
copyright bottom bar linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** four widget columns SHALL be shown: logo + social icons,
  Latest News (3 mini blog posts), Contact Form (name, email, message
  + "Contact Us +" button), Newsletter (email + "Subscribe" button)
- **AND** a bottom copyright bar SHALL link to Component Dock

#### Scenario: Full page render

- **GIVEN** the Vitalink page is rendered in full
- **WHEN** all sections load
- **THEN** the page SHALL show: Top Header, Navbar, Hero Carousel,
  Appointment Form, About Us, Cool Facts, Gallery, Features, Blog,
  Emergency, Footer — in that exact order
- **AND** all sections SHALL use the Vitalink brand palette (primary
  blue `#006cff`, dark navy `#081f3e`, Roboto font)

## Verification checklist

- [ ] All 11 sections render in correct order
- [ ] Top header shows welcome text and contact info
- [ ] Navbar is sticky, has logo, nav links, red emergency button
- [ ] Mobile hamburger menu works
- [ ] Hero carousel auto-plays with 3 slides
- [ ] Appointment form has all fields (speciality, doctor, date, time,
  name, phone, email, message)
- [ ] Contact info sidebar shows on appointment section right side
- [ ] About Us has heading, paragraph, CTA, and 4 service cards
- [ ] Cool Facts shows 4 counter stats with icons
- [ ] Gallery carousel shows 4 images with hover overlay
- [ ] Features section has text left, image right
- [ ] Blog shows 3 cards with thumbnails, dates, authors, titles
- [ ] Emergency section has blue bg, phone number, 4 location cards
- [ ] Footer has 4 widget columns + copyright bar
- [ ] Footer links to Component Dock
- [ ] All design tokens match: blue `#006cff`, navy `#081f3e`, Roboto
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `public/CNAME` contains `vitalink.free.componentdock.com`
- [ ] `homepage` in package.json is `https://vitalink.free.componentdock.com`
