# Template: Breed (Dog Breed Landing — Hero Slider, Team, Breed Collections, Blog)

## Purpose

Breed is a single-page dog-breed landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Breed"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, warm dog-care landing: a full-height hero slider
("We Love Pets" / "Care for dogs"), an about block ("It's a Dog Life"), a team
row ("Every Dog Needs A Good Owner"), a dog-breed collection grid, a blog
section, and a dark footer. Breed recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Breed" — dog website template
  (source: https://colorlib.com/wp/template/breed/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/breed/`
  (HTTP 200; full rendered DOM + `css/style.css` (15.5KB) extracted). The
  TEMPLATES.md screenshot (`breed-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):**
  1. Dark navbar (`navbar navbar-expand-lg navbar-dark bg-dark`): brand
     "breed" (uppercase, letter-spacing .2em, amber `<span>` accent) + links
     Home, About, Breed (dropdown: German Shepherd, Labrador, Rottweiler),
     Blog, Contact.
  2. Hero slider (`home-slider owl-carousel`, 2 slides, full-height
     `calc(100vh - 217px)` / min 700px, bg image + `rgba(0,0,0,.2)` overlay):
     - Slide 1: h1 "We Love Pets" + lorem ipsum paragraph + "Get Started"
       (`.btn-outline-white`) + "Download" (`.btn-link`, white).
     - Slide 2: h1 "Care for dogs" + same paragraph + same buttons.
  3. About (`section element-animate`): "It's a Dog Life" (h2) + small sub
     heading "Curious story of Dogs" (14px, amber) + two blind-text
     paragraphs; image column + text column.
  4. Team (`section bg-light`): h2 "Every Dog Needs A Good Owner" + lead
     paragraph + 4 member cards (photo + name): Mellisa Howard, Mike
     Richardson, Charles White, Laura Smith.
  5. Breed collections (`section border-t`): h2 "Dog Breed Collections" +
     lead paragraph + 6 cards (photo + name): German Shepherd, Labrador,
     Bulldog, Rottweiler, Beagle, Golden Retriever.
  6. Blog (`section blog`): h2 "Recent Blog Post" + lead + 3 post cards
     (date "Feb 26th, 2018" in post-meta style, h3 title, excerpt, "Read
     more" `.btn-primary .btn-sm`): "How to Train Your Dog", "Find The Right
     Food For Your Dogs", "Dog's Affections To Owner".
  7. Footer (`site-footer`, bg `#262626`): "About The Breed" blurb column,
     "Contact Info" (Address: 34 Street Name, City Name Here, United States;
     Telephone: +1 242 4942 290; Email: info@yourdomain.com), "Quick Links"
     (About, Terms of Use, Disclaimers, Contact), copyright line + social
     icons.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ffc107** (amber) — `.section-heading .small-sub-heading`,
    footer links, navbar brand span; hover **#ffce3a**.
  - Light section background: **#f8f9fa** (`bg-light`).
  - Footer: **#262626** dark background, white/50 body text, white bold h3.
  - Text: headings dark (`text-black`), body gray; section heading h2 = 50px.
  - Font: **"Open Sans"** (`font-family: "Open Sans", Arial, sans-serif`).
  - Buttons: `.btn-primary` — white text, 2px border, amber bg, hover → solid
    `#ffce3a`; `.btn-outline-white` — 2px white border, white text, transparent
    bg; `.btn-link` white; `.btn-sm` 12px.
  - Section padding: `7em 0`; post-meta: 14px, `letter-spacing: .2em`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/breed-<n>/<w>/<h>`); icons → lucide-react (ChevronLeft,
  ChevronRight, Mail, MapPin, Phone, ArrowRight); brand social icons → inline
  SVG; Open Sans via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome. Hero slider recreated as a lightweight two-slide carousel
  with prev/next controls and dots. Footer credit line paraphrased ("All
  rights reserved", no ColorLib attribution copied verbatim).

Breed lives in `apps/breed` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "breed",
links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Breed page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "breed" and links to About,
  Breeds, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-height hero slider with two slides, each with
a headline, a short subheading, and two call-to-action buttons, plus
prev/next controls.

#### Scenario: First slide content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** the first slide SHALL contain a level-1 heading "We Love Pets"
- **AND** it SHALL show "Get Started" and "Download" buttons

#### Scenario: Slide navigation

- **GIVEN** the first slide is displayed
- **WHEN** the user activates the next control
- **THEN** the second slide SHALL be displayed with the heading "Care for dogs"

### Requirement: About section

The system SHALL render an about section with a heading, a small sub heading,
and two paragraphs of copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "It's a Dog Life" and a sub heading
  "Curious story of Dogs"
- **AND** it SHALL show an image beside the text

### Requirement: Team section

The system SHALL render a team section with a heading and four member cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "Every Dog Needs A Good Owner"
- **AND** it SHALL show the members "Mellisa Howard" and "Mike Richardson"

### Requirement: Breed collections section

The system SHALL render a breed collections section with a heading and six
breed cards.

#### Scenario: Breed collections content

- **GIVEN** the page is rendered
- **WHEN** the breed collections section is displayed
- **THEN** it SHALL contain a heading "Dog Breed Collections"
- **AND** it SHALL show the breeds "German Shepherd", "Labrador", and
  "Bulldog"

### Requirement: Blog section

The system SHALL render a blog section with a heading and three post cards,
each with a date, title, excerpt, and a "Read more" button.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent Blog Post"
- **AND** it SHALL show the post "How to Train Your Dog" with a "Read more"
  button

### Requirement: Footer

The system SHALL render a footer with an about blurb, contact info, quick
links, social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "About The Breed" blurb, "Contact Info" with a
  telephone number, and a "Quick Links" column
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Breed app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Breed — Dog Breed Template"
