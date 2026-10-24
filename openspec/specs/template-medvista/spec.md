# Template: Medvista (Medical/Healthcare)

## Purpose

A Medical / Healthcare template with hero, about, services, cta banner, doctors and blog sections. Recreation of ColorLib "Mediplus" as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/mediplus/
- **Preview URL:** https://preview.colorlib.com/theme/mediplus/
- **New name:** `medvista` (apps/medvista, @free-react-templates/medvista)
- **Category:** Medical/Healthcare
- **Design reference:** Screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/mediplus-free-template.jpg

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and inline styles:

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | Loaded via Google Fonts / CF fonts |
| Primary brand | `#207dff` | CTA button hover, active nav link, department hover bg, staff position color |
| Bootstrap primary | `#007bff` | `btn-primary` background |
| Bootstrap secondary | `#6c757d` | `btn-secondary` background, contact form submit |
| Accent (service icons, CTA border) | `#fe5f55` | Service icon color, nav CTA border |
| Body text | `#000000` (headings), `#212529` (body) | Dark text on white |
| Light section bg | `#f8f9fa` | Services section, contact info boxes |
| Top bar bg | `#000000` | Black top bar with white text |
| Navbar bg (scrolled) | `#000000` | Dark navbar, white text |
| Overlay | Dark semi-transparent over hero/intro/testimonials/footer | `position: absolute; background: rgba(0,0,0,...)` |
| Button radius | `0.25rem` (Bootstrap default) | Rounded corners on all buttons |
| Hero height | `700px` | Full-height hero with background image |
| CTA button white | `#fff bg, #fff border, #000 text` | `.btn-white` on parallax CTA |

## Requirements

### TopBar

Feature: Top Bar

#### Scenario: Display contact info and auth links

- **GIVEN** the user visits the page
- **THEN** a black top bar is visible at the very top
- **AND** it shows a phone number with phone icon
- **AND** it shows an email address with paper-plane icon
- **AND** it shows "Sign Up" and "Sign In" links on the right

#### Scenario: Hidden on mobile

- **GIVEN** the user is on a viewport < 992px wide
- **THEN** the top bar is hidden

### Navbar

Feature: Navbar

#### Scenario: Display navigation links

- **GIVEN** the user visits the page
- **THEN** the navbar shows the brand "Medvista"
- **AND** it has nav links: Home, About, Department, Doctors, Blog, Contact
- **AND** it has an "Appointment" CTA button with coral (#fe5f55) border

#### Scenario: Sticky dark navbar on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar becomes sticky with a dark (#000) background
- **AND** the brand and nav links are white text

#### Scenario: Mobile hamburger menu

- **GIVEN** the user is on a viewport < 992px wide
- **THEN** a hamburger toggle button is visible
- **AND** clicking it expands the nav links vertically

### Hero

Feature: Hero Section

#### Scenario: Full-height hero with background image

- **GIVEN** the user visits the page
- **THEN** a full-height hero section is displayed with a background image
- **AND** a dark semi-transparent overlay covers the image
- **AND** it shows "Welcome to Medvista" as a small uppercase subheading
- **AND** it shows "We are here for your Care" as the main heading
- **AND** it shows a paragraph of descriptive text
- **AND** it shows a "Make an appointment" primary button

#### Scenario: Hero text positioned left

- **GIVEN** the user visits the page
- **THEN** the hero text content is left-aligned within the left half of the hero

### About

Feature: About Section

#### Scenario: Two-column about layout

- **GIVEN** the user scrolls to the about section
- **THEN** a left column shows a background image
- **AND** a right column shows the heading "We Are Medvista A Medical Clinic"
- **AND** it shows two paragraphs of descriptive text
- **AND** it shows "Make an appointment" and "Contact us" buttons side by side

### Services

Feature: Services Section

#### Scenario: 2x2 service grid with appointment form

- **GIVEN** the user scrolls to the services section
- **THEN** a light (#f8f9fa) background section is displayed
- **AND** the left side shows "Our Services" heading
- **AND** a 2x2 grid shows 4 service cards: Emergency Services, Qualified Doctors, Outdoors Checkup, 24 Hours Service
- **AND** each service card has a coral (#fe5f55) icon and a title + description
- **AND** the right side shows a "Free Consultation" form
- **AND** the form has fields: First Name, Last Name, Service select, Phone, Date, Time, Message
- **AND** the form has an "Appointment" submit button (secondary style)

#### Scenario: Service card hover

- **GIVEN** the user hovers over a service card
- **THEN** the icon scales up with a smooth transition

### CTA Banner

Feature: CTA Banner

#### Scenario: Parallax CTA section

- **GIVEN** the user scrolls to the CTA banner
- **THEN** a full-width section with a background image and dark overlay is displayed
- **AND** it shows "Your Health is Our Priority" as a large white heading
- **AND** it shows a descriptive paragraph
- **AND** it shows a "Search Places" white outlined button

### Departments

Feature: Departments Section

#### Scenario: Asymmetric department layout

- **GIVEN** the user scrolls to the departments section
- **THEN** a full-width container is displayed with no gutters
- **AND** a left column (1/3 width) shows a tall background image
- **AND** a right column (2/3 width) shows a 3-column grid of 9 department cards
- **AND** each department card shows a blue (#207dff) stethoscope icon, department name, and description
- **AND** departments include: Neurology, Surgical, Dental, Ophthalmology, Cardiology, Traumatology, Nuclear Magnetic, X-ray, Cardiology

#### Scenario: Department card hover

- **GIVEN** the user hovers over a department card
- **THEN** the card background becomes blue (#207dff)
- **AND** the text and icon become white

### Doctors

Feature: Doctors Section

#### Scenario: Doctor cards grid

- **GIVEN** the user scrolls to the doctors section
- **THEN** it shows the heading "Our Qualified Doctors"
- **AND** a subtitle paragraph is displayed
- **AND** a 4-column grid shows 4 doctor cards
- **AND** each card has a doctor photo, name, specialty, description, and social links (Twitter, Facebook, Google, Instagram)
- **AND** each card has a "Book now" primary button
- **AND** the specialty text is uppercase blue (#207dff) with letter-spacing

#### Scenario: Doctor card hover

- **GIVEN** the user hovers over a doctor card
- **THEN** the photo overlay transitions and the faded description area reveals

### Blog

Feature: Blog Section

#### Scenario: Blog cards grid

- **GIVEN** the user scrolls to the blog section
- **THEN** a light (#f8f9fa) background section is displayed
- **AND** it shows "Gets Every Single Updates Here" heading
- **AND** a 3-column grid shows 6 blog cards
- **AND** each card has a background image, meta (date, author, comment count), title, excerpt, and "Read more" primary button

#### Scenario: Blog card hover

- **GIVEN** the user hovers over a blog card image
- **THEN** the image scales or transitions smoothly

### Testimonials

Feature: Testimonials Section

#### Scenario: Parallax testimonials carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a full-width section with background image and dark overlay is displayed
- **AND** it shows "Read testimonials" subheading
- **AND** it shows "Our Patient Says" heading
- **AND** a carousel shows testimonial cards
- **AND** each card has a circular user photo, quote icon, testimonial text, patient name, and role

### Contact

Feature: Contact Section

#### Scenario: Contact info and form

- **GIVEN** the user scrolls to the contact section
- **THEN** it shows "Contact Us" heading
- **AND** 4 info boxes show: address (map marker icon), phone (phone icon), email (envelope icon), website (globe icon)
- **AND** each info box has a light (#f8f9fa) background with centered icon and text
- **AND** a contact form has fields: Name, Email, Subject, Message
- **AND** the form has a "Send Message" submit button

#### Scenario: Map embed

- **GIVEN** the user scrolls past the contact form
- **THEN** a full-width Google Map embed is displayed

### Footer

Feature: Footer

#### Scenario: Multi-column footer with parallax

- **GIVEN** the user scrolls to the footer
- **THEN** a footer with a background image and dark overlay is displayed
- **AND** it has multiple widget columns with headings and lists
- **AND** it shows a social links list (Twitter, Facebook, Google, Instagram)
- **AND** it shows a copyright line
- **AND** it links to https://www.componentdock.com/ ("Component Dock")

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/medvista/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/medvista/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec folder: `openspec/specs/template-medvista/spec.md`
- [ ] Docs folder: `docs/templates/medvista/`
- [ ] No `apps/` code written (prep stream only)
- [ ] Source slug recorded: `mediplus`
- [ ] Preview URL analyzed: https://preview.colorlib.com/theme/mediplus/
- [ ] Design tokens captured from live CSS
- [ ] All 11 sections documented in Gherkin scenarios
- [ ] New name `medvista` has no collision with existing apps/specs
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar — a black top bar is visible at the very top
- [x] Navbar — the navbar shows the brand "Medvista"
- [ ] Hero — a full-height hero section is displayed with a background image
- [ ] About — a left column shows a background image
- [ ] Services — a light (#f8f9fa) background section is displayed
- [ ] CTA Banner — a full-width section with a background image and dark overlay is displayed
- [ ] Departments — a full-width container is displayed with no gutters
- [x] Doctors — it shows the heading "Our Qualified Doctors"
- [ ] Blog — a light (#f8f9fa) background section is displayed
- [ ] Testimonials — a full-width section with background image and dark overlay is displayed
- [x] Contact — it shows "Contact Us" heading
