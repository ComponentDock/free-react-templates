# Template: Pavilion (Hotel & Resort Landing)

Recreation of ColorLib "Marian" (https://colorlib.com/wp/template/marian/).

## Purpose

Pavilion is a single-page hotel landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Marian" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a hotel/resort page with gold accents: a hero ("Top
Hotel in the City", "Hotel & Resort"), a booking bar (check-in/out
dates, adults/children/rooms, Book Now), an about section ("Make the
customer the hero of your story"), a rooms grid (6 rooms at $150/night),
dining & swimming pool feature bands, testimonials, blog cards, a photo
gallery, and a dark footer with quick links, reservations contact, and a
newsletter signup. Pavilion recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Source:** ColorLib "Marian" — https://colorlib.com/wp/template/marian/
- **Source slug:** `marian`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/marian/ — **HTTP 200**, 43,896 B, fetched 2026-10-23 (page `<title>`: "Marian — Hotel & Resort above the Old Harbour"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/marian/assets/css/style.min.css?v=3.0.0`, fetched 2026-10-23): brand `#dca73a`, `#007bff`, `#dc3545`, `#28a745`; dominant neutrals `#f9f9ff`, `#6c757d`, `#343a40`; type Lato, Noto Serif, Snell Roundhand. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/marian-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/pavilion` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar displays site identity and navigation

The template SHALL render a navigation bar with the site name "Pavilion", navigation links for Home, About, Rooms, Services, Blog, and Contact, and a "Book Online" call-to-action button.

#### Scenario: Navbar renders correctly

- **WHEN** the page loads
- **THEN** I see "Pavilion" branding in the navigation
- **AND** I see navigation links for Home, About, Rooms, Services, Blog, Contact
- **AND** I see a "Book Online" button

### Requirement: Hero section displays hotel headline

The template SHALL render a hero section with a background image, the heading "Top Hotel in the City", and the subtitle "Hotel & Resort".

#### Scenario: Hero renders headline and subtitle

- **WHEN** the page loads
- **THEN** I see the heading "Top Hotel in the City"
- **AND** I see the subtitle "Hotel & Resort"
- **AND** I see a background image

### Requirement: Booking bar shows reservation form

The template SHALL render a horizontal booking form with Check In date, Check Out date, Adults dropdown, Children dropdown, Rooms dropdown, and a "Book Now" button.

#### Scenario: Booking bar displays all form fields

- **WHEN** the page loads
- **THEN** I see a "Check In" date input
- **AND** I see a "Check Out" date input
- **AND** I see an "Adults" dropdown
- **AND** I see a "Children" dropdown
- **AND** I see a "Rooms" dropdown
- **AND** I see a "Book Now" button

### Requirement: About section displays company information

The template SHALL render an about section with a label "About our company", the heading "Make the customer the hero of your story", descriptive paragraphs, and a "Learn More" call-to-action.

#### Scenario: About renders company info

- **WHEN** the page loads
- **THEN** I see "About our company"
- **AND** I see the heading "Make the customer the hero of your story"
- **AND** I see a "Learn More" call-to-action

### Requirement: Rooms section displays room cards

The template SHALL render a rooms section with the heading "Our Rooms", a 3-column grid of 6 room cards (each with image, name, and price), and a "View more" call-to-action.

#### Scenario: Rooms renders card grid

- **WHEN** the page loads
- **THEN** I see the heading "Our Rooms"
- **AND** I see 6 room cards with prices
- **AND** I see a "View more" call-to-action

### Requirement: Dining section displays two feature areas

The template SHALL render two alternating image-and-text sections: "Dining and Drinks" and "Swimming Pool", each with a "Learn More" border button.

#### Scenario: Dining renders two feature sections

- **WHEN** the page loads
- **THEN** I see "Dining and Drinks" heading
- **AND** I see "Swimming Pool" heading
- **AND** both sections have "Learn More" buttons

### Requirement: Testimonials section displays customer review

The template SHALL render a testimonials section with a customer quote, a 5-star rating, and the author attribution "Clifford Frazier, Regular Client".

#### Scenario: Testimonials renders review content

- **WHEN** the page loads
- **THEN** I see testimonial text
- **AND** I see a 5-star rating
- **AND** I see the author name "Clifford Frazier"

### Requirement: Blog section displays recent posts

The template SHALL render a blog section with the heading "Our Blog" and a 3-column grid of 3 blog cards.

#### Scenario: Blog renders card grid

- **WHEN** the page loads
- **THEN** I see the heading "Our Blog"
- **AND** I see 3 blog cards

### Requirement: Gallery section displays hotel images

The template SHALL render a gallery section with a horizontal strip of hotel images.

#### Scenario: Gallery renders image strip

- **WHEN** the page loads
- **THEN** I see a gallery section with images

### Requirement: Footer displays contact info and links

The template SHALL render a dark footer with Quick Links, Reservations contact information, Our Location, and a newsletter signup form. The footer MUST include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** I see "Quick Links" in the footer
- **AND** I see "Reservations" in the footer
- **AND** I see "Our Location" in the footer
- **AND** I see a link to "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pavilion/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pavilion/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar displays site identity and navigation — I see "Pavilion" branding in the navigation
- [ ] Hero section displays hotel headline — I see the heading "Top Hotel in the City"
- [ ] Booking bar shows reservation form — I see a "Check In" date input
- [ ] About section displays company information — I see "About our company"
- [ ] Rooms section displays room cards — I see the heading "Our Rooms"
- [ ] Dining section displays two feature areas — I see "Dining and Drinks" heading
- [ ] Testimonials section displays customer review — I see testimonial text
- [ ] Blog section displays recent posts — I see the heading "Our Blog"
- [ ] Gallery section displays hotel images — I see a gallery section with images
