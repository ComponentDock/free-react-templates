## Purpose

Captura is a photography portfolio template recreating the ColorLib "Halen" design. It features a dark hero with blue accent, photography skills showcase, wildlife split section, 3x3 photo gallery with hover overlays, testimonials, team section, contact info with map, Instagram feed, and footer with Component Dock branding.

## Design reference (replication findings)

- **Source:** ColorLib "Halen" — https://colorlib.com/wp/template/halen/
- **Source slug:** `halen`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/halen/ — **HTTP 200**, 63,889 B, fetched 2026-10-23 (page `<title>`: "Halen"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/halen/css/style.css`, fetched 2026-10-23): brand `#ff5e13`, `#48b6fb`, `#415094`, `#4cd3e3`; dominant neutrals `#f9f9ff`, `#999999`, `#2c2c2c`; type Poppins. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/halen-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/captura` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar with brand and navigation

Users SHALL see a sticky header with the "Captura" brand, navigation links (Home, About, Albums, Blog, Contact), and social media icons.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads
- **THEN** the navbar displays the Captura logo, all five navigation links, and Facebook/Twitter/Instagram social icons

### Requirement: Hero section with headline and CTA

Users SHALL see a full-width dark hero section with centered headline text and an "Explore Work" call-to-action button.

#### Scenario: Hero displays headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "Hi, This is Captura, a professional Photographer" and "I Captured Moments" with an "Explore Work" button

### Requirement: Photography skills section

Users SHALL see a centered section with title "World class photography skills" and a descriptive paragraph.

#### Scenario: Skills section content

- **WHEN** the user scrolls past the hero
- **THEN** the photography skills section displays the title and description text

### Requirement: Wildlife photography split section

Users SHALL see a split layout with a wildlife image on one side and title, description, and "Explore Work" button on the other.

#### Scenario: Wildlife section split layout

- **WHEN** the user scrolls to the wildlife section
- **THEN** an image and text block are displayed side by side with a CTA button

### Requirement: Photo gallery grid

Users SHALL see a 3x3 grid of photos where each photo shows a hover overlay with album title and category.

#### Scenario: Gallery renders 9 photos

- **WHEN** the gallery section is visible
- **THEN** 9 photos are displayed in a grid with titles like "Baby album", "Portrait album", and "Nature album"

### Requirement: Testimonials section

Users SHALL see a centered testimonial with a quote, author name, and avatar image.

#### Scenario: Testimonial displays author and quote

- **WHEN** the user scrolls to testimonials
- **THEN** "Our Customers Say" heading, quote text, and "Robert Thomson" author name with avatar are visible

### Requirement: Team section with member cards

Users SHALL see three team member cards, each with a photo, name, role "Photographer", and social media links.

#### Scenario: Three team members displayed

- **WHEN** the team section loads
- **THEN** Milani Mou, Jasmine Pinky, and Piya Zosoldos are shown with their photos and social links

### Requirement: Contact information section

Users SHALL see a contact section with address, phone, email, social links, and a map placeholder.

#### Scenario: Contact details visible

- **WHEN** the contact section loads
- **THEN** the address "200/D, Green lane, Kings street, New York", phone "+10 787 367 2567", and email "contact08@captura.com" are displayed

### Requirement: Instagram feed row

Users SHALL see a horizontal row of 6 photos with hover overlays showing Instagram icons.

#### Scenario: Six Instagram photos rendered

- **WHEN** the Instagram feed section is visible
- **THEN** 6 photos are displayed in a row with Instagram overlay icons

### Requirement: Footer with Component Dock branding

Users SHALL see a dark footer with copyright text, social icons, and a link to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer is visible
- **THEN** the text "Component Dock" links to https://www.componentdock.com/ with target="_blank"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/captura/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/captura/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
