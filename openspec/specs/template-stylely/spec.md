# Template: Stylely (Barber Shop Landing)

## Purpose

Stylely is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hipstyle" design
(https://colorlib.com/wp/template/hipstyle/), built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light barber page with red accents: a coral-red hero with a
photo ("Feel Like Home" / "Good Look Guaranteed" + "Book Now" / "Contact Us"
CTAs), an about split ("Connect with your dream style"), a "Service
Expectation" row (Stylish Hair Cut, Wedding Hair, Color & Hair Wash), a
features row (Best Equipment, Best Price, Fitness Equipment, Fitness
Training), an eight-item "Pricing Plan" list, a testimonial slider (Mosan
Cameron), a "Meet Our Artist" team (Adam Billiard, Fred Macyard, Justin
Stuard), a "Make an Appointment" booking form (service + time selects, date,
contact fields), a "Latest Style News" blog row, and a dark footer with
contact details and a newsletter form. Stylely recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hipstyle" — free barber shop website template
  (source: https://colorlib.com/wp/template/hipstyle/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hipstyle/`
  (HTTP 200, 38.8KB) + stylesheet `css/style.css` (198.2KB). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`hipstyle-free-template.jpg`) confirms the visual design (light sections,
  red accents, dark footer).
- **Section order (1:1):**
  1. Header: logo + nav (Home, About, Service, Blog, blog Single, blog
     pages, team, price, Elements, Contact) + dark-mode toggle.
  2. Hero: coral-red background, "Feel Like Home" kicker, "Good Look
     Guaranteed" headline, supporting copy, "Book Now" (white filled) +
     "Contact Us" (outline) CTAs, barber photo with curved corner.
  3. About us: split with image + "Connect with your dream style" copy.
  4. Service Expectation: 3 icon cards (Stylish Hair Cut, Wedding Hair,
     Color & Hair Wash) with Read More links.
  5. What We Offer: 4 photo cards (Best Equipment, Best Price, Fitness
     Equipment, Fitness Training).
  6. Pricing Plan: 8 priced rows (Hair Cut, Hair Color, Hair Straight,
     Shampoo, Hair Wash, Hair Shave, Men's Facial, Wedding Style — $10.00).
  7. Testimonials: quote slider (Mosan Cameron, Executive of fedex).
  8. Meet Our Artist: 3 member cards (Adam Billiard, Fred Macyard, Justin
     Stuard) with portraits + social links.
  9. Make an Appointment: form (Name, Email address, Select service, Phone
     number, Date, Select time, Your Note) + "Make an Appointment" submit.
  10. Latest Style News: 3 blog cards (ART, ILLUSTRATION category).
  11. Footer: About Us + Contact us (Los angeles, United States ·
      +44 6532 986 652 · Mon to Fri 9am to 6 pm) + Newsletter form + social
      links.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#f81c1c** (red — buttons, accents) + coral **#f44a40**
    (hover/light accents).
  - Light section backgrounds **#f9f9ff** / lavender **#f0e9ff**; footer
    dark **#30383b**.
  - Font: **"Rufina"** (serif headings) + **"Roboto"** (sans body) via
    Google Fonts.
  - Buttons: red filled, uppercase; hero "Book Now" is white filled.
- **Recreation decisions:** repo-standard Navbar (site name, section links,
  dark-mode toggle) + Footer chrome; hero = coral-red section with seeded
  picsum photo and white CTAs; about split; services with lucide icons;
  offers/blog with seeded photos; pricing as priced rows; testimonials with
  prev/next slider; team cards with initials avatars + inline SVG social
  icons; appointment + newsletter forms with inline validation and success
  states; all images picsum-seeded (`picsum.photos/seed/stylely-N/w/h`);
  Google Fonts via `<link>`.

Stylely lives in `apps/stylely` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Stylely", a
"Home" link, section links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Stylely page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Stylely" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show links for About, Services, Pricing, Team, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the section links SHALL be shown in a mobile navigation
- **AND** the menu SHALL close when a link is chosen

### Requirement: Hero

The system SHALL render a coral-red hero with a kicker, a level-1 headline,
two call-to-action buttons, and a photograph.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the kicker "Feel Like Home"
- **AND** it SHALL show a level-1 headline "Good Look Guaranteed"
- **AND** it SHALL show a "Book Now" button linking to the appointment section
- **AND** it SHALL show a "Contact Us" button linking to the footer contact section

### Requirement: About section

The system SHALL render an about section with a heading and supporting copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Connect with your dream style"
- **AND** it SHALL show at least one lead paragraph

### Requirement: Service expectations

The system SHALL render a "Service Expectation" section with at least three
service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the service section is displayed
- **THEN** it SHALL show the heading "Service Expectation"
- **AND** it SHALL render three service cards (Stylish Hair Cut, Wedding Hair, Color & Hair Wash)

### Requirement: Offers

The system SHALL render a "What We Offer" section with four photo cards.

#### Scenario: Offer cards

- **GIVEN** the page is rendered
- **WHEN** the offers section is displayed
- **THEN** it SHALL show the heading "What We Offer"
- **AND** it SHALL render four offer cards (Best Equipment, Best Price, Fitness Equipment, Fitness Training)

### Requirement: Pricing plan

The system SHALL render a "Pricing Plan" section with priced rows.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing Plan"
- **AND** it SHALL render eight priced rows (Hair Cut, Hair Color, Hair Straight, Shampoo, Hair Wash, Hair Shave, Men's Facial, Wedding Style — $10.00 each)

### Requirement: Testimonials

The system SHALL render a "What Clients Say" section with a testimonial
slider.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "What Clients Say"
- **AND** it SHALL show a testimonial with an author name and role

#### Scenario: Slider navigation

- **GIVEN** the testimonials section is displayed
- **WHEN** the user presses the next/previous buttons
- **THEN** the visible testimonial SHALL change and wrap around

### Requirement: Artists team

The system SHALL render a "Meet Our Artist" section with at least three
member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Meet Our Artist"
- **AND** it SHALL render at least three member cards (e.g. Adam Billiard, Fred Macyard, Justin Stuard)
- **AND** each card SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Appointment form

The system SHALL render a "Make an Appointment" section with a validated
booking form.

#### Scenario: Form fields

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show the heading "Make an Appointment"
- **AND** it SHALL show fields for name, email address, service, phone number, date, time slot, and note
- **AND** it SHALL show a "Make an Appointment" submit button

#### Scenario: Invalid submission

- **GIVEN** the appointment form is displayed
- **WHEN** the user submits without valid name, email, service, phone, and time
- **THEN** per-field error messages SHALL be shown
- **AND** no success message SHALL be shown

#### Scenario: Valid submission

- **GIVEN** the appointment form is displayed
- **WHEN** the user fills every required field and submits
- **THEN** the form SHALL show a success message

### Requirement: Blog

The system SHALL render a "Latest Style News" section with three news cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest Style News"
- **AND** it SHALL render three cards with a category label and a Read More link

### Requirement: Footer

The system SHALL render a footer with the site name, contact details, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Stylely" and contact details (e.g. phone number)
- **AND** it SHALL show a newsletter form that validates the email and confirms a valid subscription
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Stylely app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Stylely — Barber Shop Template"
