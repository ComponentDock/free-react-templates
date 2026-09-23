# Template: PageTurn (Author Landing Page)

## Purpose

PageTurn is a single-page author/book landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Author" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a book/author landing page with green (#17b978) and blue
(#007bff) accents: a dark navbar, a full-height hero with book illustration,
publisher logos, an about section with features, stat counters, chapter
TOC with sidebar, services cards, testimonials, book gallery grid, author
bio, contact form with info cards, and a dark footer with social links.
PageTurn recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Author" — free author/book landing template
  (source: https://colorlib.com/wp/template/author/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/author/`
  - stylesheet `css/style.css`.
- **Design tokens:**
  - Brand accent (green): `#17b978` — subheading text, contact icons
  - Primary button: `#007bff` — CTA buttons
  - Footer background: `#000000` — full-width black
  - Counter number: `#263b5e` — dark navy
  - Section light bg: `#f8f9fa` — partner logos, cards, chapters
  - Body text: `#212529`
  - Muted text: `#6c757d`
  - Font: Poppins (Google Fonts)
- **Section order (1:1):**
  1. Navbar — dark sticky nav with "PageTurn." brand + links
  2. Hero — full-height split: left text + CTA, right illustration
  3. Partners — 5 publisher logos in a row
  4. About The Book — two-column: image left, 3 features right
  5. Stats Counters — background image + 4 counter cards
  6. Chapter — heading + sidebar TOC (8 items) + page content
  7. Services — 3 icon cards (Experience, Marketing, Vision)
  8. Testimonials — dark bg, 4 quote cards with avatars
  9. My Books — 2×4 book cover grid with hover overlay
  10. Author Bio — portrait left, info list + CTA right
  11. Contact — 4 info cards + form + map placeholder
  12. Footer — 4-column: About+social, Links, Services, Contact

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand name
"PageTurn." and links to all sections.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL display the brand "PageTurn."
- **AND** the navbar SHALL contain links: Home, About, Chapter, Reviews, My Books, Author, Contact
- **AND** the navbar SHALL be sticky/fixed on scroll

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** a mobile navigation menu SHALL appear with all section links
- **AND** tapping a link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-height hero section with a dark overlay,
subheading, heading, description, CTA button, and illustration.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the subheading "Best Seller Book Of The Week"
- **AND** it SHALL display a heading about reading books
- **AND** it SHALL display a "Buy Now" CTA button
- **AND** it SHALL display a book illustration on the right side

### Requirement: Partner logos

The system SHALL render a row of 5 publisher/partner logos on a white
background.

#### Scenario: Partner logos display

- **GIVEN** the page is rendered
- **WHEN** the partners section is visible
- **THEN** 5 partner logo images SHALL be displayed in a horizontal row

### Requirement: About The Book

The system SHALL render a two-column section with a background image on
the left and 3 feature cards on the right.

#### Scenario: About section content

- **GIVEN** the page is rendered
- **WHEN** the About section is visible
- **THEN** it SHALL display heading "About The Book"
- **AND** it SHALL list 3 features: Award achievements, Read On Any Devices, Very High Resolution
- **AND** each feature SHALL have an icon, title, and description

### Requirement: Stats counters

The system SHALL render 4 stat counter cards over a background image
with overlay.

#### Scenario: Stats display

- **GIVEN** the page is rendered
- **WHEN** the Stats section is visible
- **THEN** 4 stat cards SHALL be displayed: Copies Sold, Copies Released, Cup Of Coffee, Happy Readers
- **AND** each card SHALL show a number and label
- **AND** cards SHALL have a light background

### Requirement: Chapter section

The system SHALL render a chapter/TOC section with a sidebar listing
8 chapter links and a content panel.

#### Scenario: Chapter TOC interaction

- **GIVEN** the page is rendered
- **WHEN** the Chapter section is visible
- **THEN** it SHALL display heading "What's Inside The Book"
- **AND** a sidebar SHALL list 8 chapter links
- **AND** clicking a chapter link SHALL show the corresponding content

### Requirement: Services

The system SHALL render 3 service cards with icons, headings, and
descriptions on a light background.

#### Scenario: Service cards display

- **GIVEN** the page is rendered
- **WHEN** the Services section is visible
- **THEN** 3 service cards SHALL be displayed: Experience, Marketing Goals, Targeting Vision
- **AND** each card SHALL have an icon, heading, and description

### Requirement: Testimonials

The system SHALL render a testimonials section with a dark background
image, overlay, and 4 testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the Testimonials section is visible
- **THEN** heading "Kinds Words From Customers" SHALL be displayed in white
- **AND** 4 testimonial cards SHALL be shown with quote, text, avatar, name, and position

### Requirement: My Books grid

The system SHALL render an 8-card book cover grid with hover overlays
showing title and genre.

#### Scenario: Books grid display

- **GIVEN** the page is rendered
- **WHEN** the My Books section is visible
- **THEN** heading "My Other Books" SHALL be displayed
- **AND** 8 book cards SHALL be shown in a grid
- **AND** each card SHALL have a cover image, title, and genre tag

### Requirement: Author Bio

The system SHALL render a two-column author bio with portrait on the
left and details list on the right.

#### Scenario: Author bio content

- **GIVEN** the page is rendered
- **WHEN** the Author section is visible
- **THEN** the author name "Franklin Henderson" SHALL be displayed
- **AND** author details SHALL include Name, DOB, Address, Zip, Email, Phone
- **AND** a "View All Books" CTA SHALL be shown

### Requirement: Contact section

The system SHALL render 4 contact info cards with circular green icons
and a contact form beside a map placeholder.

#### Scenario: Contact form and info

- **GIVEN** the page is rendered
- **WHEN** the Contact section is visible
- **THEN** 4 contact info cards SHALL be displayed with circular green icons
- **AND** the form SHALL have fields: Name, Email, Subject, Message
- **AND** a "Send Message" submit button SHALL be present
- **AND** submitting the form SHALL show a success message

### Requirement: Footer

The system SHALL render a dark footer with 4 columns and a copyright
line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL have a dark background
- **AND** it SHALL contain 4 columns: About + social icons, Links, Services, Have a Questions?
- **AND** it SHALL show a copyright line
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No ColorLib references in app code

The system SHALL NOT contain any references to ColorLib in application
source files, comments, or metadata.

#### Scenario: Provenance isolation

- **GIVEN** the PageTurn app is built
- **WHEN** source files are scanned
- **THEN** no file under `apps/pageturn/` SHALL contain the string "colorlib"
