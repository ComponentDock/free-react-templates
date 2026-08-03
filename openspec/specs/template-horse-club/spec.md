# Template: Horse Club (Equestrian Club Website)

## Purpose

Horse Club is a multi-section equestrian-club website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Horse Club" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a pink-red equestrian landing page: hero with an
"Inter relation Between Horse & Rider" headline, an about/video band, six
feature cards, a second about block, a four-tier pricing table, an
appointment booking form with testimonials, a blog list, a gallery, and a
multi-column footer. Horse Club follows the same structure and adds the
repo's standard dark-mode toggle and accessible patterns. All imagery is
recreated with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Horse Club" — free equestrian club website template
  (source: https://colorlib.com/wp/template/horse-club/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/horseclub/`
  (HTTP 200, slug is `horseclub`) + `css/main.css` (HTTP 200).
- **Structure (1:1, section order):**
  1. Header — top bar (email `info@horseclub.com`, phone `+880 123 12 658
439`) + nav: Home, About, Service, Training, Events, Pricing, Blog,
     Contact.
  2. Banner (`banner-area`) — h6 "Introducing Horse Club", h1 "Inter relation
     Between Horse & Rider", "Book Consultancy" CTA (slider with a second
     slide "Brand new app to blow your mind" / "We've made a life that will
     change you").
  3. About/Video (`about-video-area`) — about copy with a video/play block.
  4. Features (`feature-area`) — six cards: Expert Technicians, Professional
     Service, Great Support, Technical Skills, Highly Recomended, Positive
     Reviews (multi-color icons + copy).
  5. Home About (`home-about-area`) — second image + copy block.
  6. Pricing (`price-area`) — h1 "Choose the best plan that suits you"; four
     plans: 01 Basic £199.00, 02 Economy £299.00, 03 Premium £399.00, 04
     Enterprise £499.00.
  7. Booking (`booking-area`) — "Appointment Form" + testimonial carousel
     (Fannie Rowe, Hulda Sutton).
  8. Latest Blog (`latest-blog-area`) — h1 "Latest News from our Blog"; blog
     cards (image, meta, title, excerpt).
  9. Gallery (`gallery-area`) — responsive image grid.
  10. Footer (`footer-area`) — About Us, Contact Us, Newsletter (email
      input), social links, bottom bar.
- **Design tokens extracted from the stylesheet (`css/main.css`):**
  - Brand color: **#f6214b** (pink-red — primary buttons, links, accents).
  - Feature-icon palette: **#4cd3e3** (cyan), **#f4e700** (yellow),
    **#38a4ff** (blue), **#f45622** (orange), **#f44a40** (red).
  - Text/background: **#222222** (headings), **#777777** (muted),
    **#f9f9ff** (light sections), white sections.
  - Fonts: **"Poppins"** (body + headings) via Google Fonts.
  - Buttons: filled pink-red `btn` (rounded, uppercase).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#f6214b`); placeholder images via
  `https://picsum.photos/seed/horseclub-<n>/<w>/<h>`; icons from
  lucide-react; booking/newsletter forms with client-side validation (zod);
  gallery as an accessible image grid; social icons inline SVG; no assets
  copied.

Horse Club lives in `apps/horse-club` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Horse Club",
contact details (email, phone), links to the main sections, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Horse Club page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Horse Club", an email, and a phone number
- **AND** the navbar SHALL show links to the main sections and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the eyebrow "Introducing Horse
Club", the headline "Inter relation Between Horse & Rider", and a "Book
Consultancy" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Inter relation Between Horse & Rider"
- **AND** it SHALL show the eyebrow text and a "Book Consultancy" button

### Requirement: About/video section

The system SHALL render an about section with descriptive copy and a video
play block.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show descriptive copy and a play button with an accessible label

### Requirement: Features section

The system SHALL render a features section with six cards: Expert
Technicians, Professional Service, Great Support, Technical Skills, Highly
Recomended, and Positive Reviews.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the six feature cards, each with an icon, title, and copy

### Requirement: Home about section

The system SHALL render a second about block with an image and descriptive
copy.

#### Scenario: Home about content

- **GIVEN** the page is rendered
- **WHEN** the home about section is displayed
- **THEN** it SHALL show an image with an accessible label and descriptive copy

### Requirement: Pricing section

The system SHALL render a pricing section titled "Choose the best plan that
suits you" with four plans: Basic, Economy, Premium, and Enterprise, each
with a price.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose the best plan that suits you"
- **AND** it SHALL show the Basic, Economy, Premium, and Enterprise plans with their prices

### Requirement: Booking section

The system SHALL render a booking section with an "Appointment Form" and at
least two testimonials.

#### Scenario: Appointment form

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed
- **THEN** it SHALL show the heading "Appointment Form" with form fields and a submit button

#### Scenario: Testimonials

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed
- **THEN** it SHALL show at least two testimonials with customer names

### Requirement: Blog section

The system SHALL render a blog section titled "Latest News from our Blog"
with at least three posts, each with a title and an excerpt.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest News from our Blog"
- **AND** it SHALL show at least three blog posts with titles

### Requirement: Gallery section

The system SHALL render a gallery section with a grid of at least six images.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show at least six gallery images with accessible labels

### Requirement: Footer

The system SHALL render a footer with an "About Us" blurb, "Contact Us"
details, a "Newsletter" signup, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Horse Club" and an about blurb
- **AND** it SHALL show contact details, a newsletter input, and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Horse Club app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Horse Club — Equestrian Club Website Template"
