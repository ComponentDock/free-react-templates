# Template: Keycraft (Locksmith Services Landing)

## Purpose

Recreation of ColorLib "Locksmith" (https://colorlib.com/wp/template/locksmith/) as a React 19 + Tailwind CSS 4 + TypeScript template. Provides a locksmith/security services landing page with hero, quote form, services grid, stats counter, product showcase, testimonials, and blog.

## Requirements

### Requirement: Navbar with navigation and contact

The template SHALL render a sticky navbar with the brand name "Keycraft", navigation links (Home, About, Services, Shop, News, Contact), and a phone number. The navbar SHALL support a mobile hamburger menu toggle.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the logo "Keycraft", all 6 navigation links, and the phone number "+1 800 556 6688"

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links visible

### Requirement: Hero section with CTA

The template SHALL render a full-width hero section with a background image, subtitle "Best locksmith", heading "We Provide Best Locksmith Services All Over World", and a "Contact us" CTA button.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading and a "Contact us" link pointing to #contact

### Requirement: Get a quote form

The template SHALL render a dark section with a "Get a quote" heading and a form containing Name, Phone, and Service dropdown fields with a submit button.

#### Scenario: Form renders all fields

- **WHEN** the get-quote section loads
- **THEN** the form displays inputs for name, phone, and a service dropdown with options (Access, Safes, Residential, Commercial)

### Requirement: Services grid

The template SHALL display 6 service cards in a 3-column grid: Locksmith Services, Safes & Locks, Access Control, Security Doors, Alarm System, and Video Surveillance.

#### Scenario: All 6 services render

- **WHEN** the services section loads
- **THEN** all 6 service card headings are visible

### Requirement: Why choose us section

The template SHALL display a split layout with an image grid on the left and a checklist of 5 items on the right, plus a "Get a quote" CTA.

#### Scenario: Checklist items render

- **WHEN** the why-choose-us section loads
- **THEN** all 5 checklist items are visible

### Requirement: Statistics counter

The template SHALL display 5 statistics: 25k+ Happy Customers, 16 World Wide Branch, 28k+ Project Complete, 36 Award Winner, 74k+ Products sold.

#### Scenario: All stats render

- **WHEN** the counter section loads
- **THEN** all 5 stat values and labels are visible

### Requirement: Products showcase

The template SHALL display 5 product cards with image, price ($55.0), title, and star rating, plus a "View all" link.

#### Scenario: Products render with ratings

- **WHEN** the products section loads
- **THEN** 5 product cards with prices are visible

### Requirement: Testimonials

The template SHALL display a split layout with a dark overlay + phone CTA on the left and a testimonial slider on the right with dot navigation.

#### Scenario: Testimonial navigation

- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding testimonial is displayed

### Requirement: Blog posts

The template SHALL display 4 blog post cards in a 2-column grid with image, category tag, title, date, and comment count.

#### Scenario: Blog posts render

- **WHEN** the blog section loads
- **THEN** all 4 blog post titles are visible

### Requirement: Footer with Component Dock attribution

The template SHALL render a 4-column footer (About, Feature Services, Quick Links, Newsletter) with a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders with Component Dock link

- **WHEN** the footer loads
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/keycraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/keycraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Design Tokens

- **Fonts:** Rajdhani (headings/display), Open Sans (body) via Google Fonts
- **Brand color:** #ffc446 (golden amber)
- **Dark navy:** #052336 (header/footer backgrounds)
- **Dark teal:** #0e1f24 (section title text)
- **Body text:** #444444
- **Heading text:** #111111
- **Button:** #ffc446 background, uppercase, letter-spacing, Rajdhani font

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and contact — the navbar displays the logo "Keycraft", all 6 navigation links, and the phone number "+1 800 556 6688"
- [x] Hero section with CTA — the hero section shows the heading and a "Contact us" link pointing to #contact
- [ ] Get a quote form — the form displays inputs for name, phone, and a service dropdown with options (Access, Safes, Residential, Commercial)
- [ ] Services grid — all 6 service card headings are visible
- [ ] Why choose us section — all 5 checklist items are visible
- [ ] Statistics counter — all 5 stat values and labels are visible
- [ ] Products showcase — 5 product cards with prices are visible
- [ ] Testimonials — the corresponding testimonial is displayed
- [ ] Blog posts — all 4 blog post titles are visible
