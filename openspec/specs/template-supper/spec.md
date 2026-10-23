# Template: Supper (Restaurant)

**Recreation of:** ColorLib "Meal" (https://colorlib.com/wp/template/meal/)
**Preview:** https://preview.colorlib.com/theme/meal/
**New name:** Supper (apps/supper, @free-react-templates/supper)

## Purpose

Supper is a restaurant template with a navbar, hero, feature cards, about band, chefs, menu band, reservation, testimonials, contact and footer. It recreates the ColorLib **Meal** design (https://colorlib.com/wp/template/meal/, preview: https://preview.colorlib.com/theme/meal/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from preview CSS)

- **Fonts:** Playfair Display (headings, serif), Open Sans (body, sans-serif)
- **Brand/accent color:** #ff7a5c (coral/orange)
- **Dark background:** #000000 (black)
- **Light section bg:** #f8f9fa (light gray)
- **Body text:** #999999 (gray), headings #000000
- **Button style:** Outline white on dark bg, rounded, hover fills white
- **Logo:** Single letter "S" in Playfair Display, black circle

## Sections (in order, matching original)

1. **Navbar** — Sticky top nav, logo "S" centered, nav links: Home, About, Menu, Reserve A Table, Contact. Black background on scroll, transparent initially.
2. **Hero** — Full-width background image, overlay text "Welcome to Supper", "Reserve A Table" button (outline white)
3. **Features** — "Find your best food" heading, 3 food cards in zigzag layout (image + text alternating left/right), each with category label, dish name, description, "Learn More" link
4. **About** — "The Restaurant" heading, descriptive paragraphs, white background
5. **Hero Divider** — Full-width decorative image
6. **Chefs** — "Meet The Chefs" heading, 2 chef cards with circular photo, name, title, bio, social icons (Facebook, Twitter, Instagram)
7. **Menu** — "Menu" heading, grid of 8+ menu items (dish name + description), light gray background
8. **Reservation** — "Reservation" heading, form: Name, Email, Phone, Number of Persons (select), Date, Time, Message, Submit button
9. **Testimonials** — "Customer Reviews" heading, carousel of 4 reviews (quote, author photo, name, title)
10. **Contact** — "Get In Touch" heading, form: Name, Email, Phone, Message, Submit button
11. **Footer** — 3-column layout: About text + "Read More" btn, Service Hours (Lunch + Dinner), Social icons + Newsletter signup. Bottom: Component Dock link (mandatory)

## Requirements

### Feature: Supper template behaviour

Feature: Supper — Restaurant Template

Background:
- **GIVEN** I am on the Supper homepage

#### Scenario: Page loads with hero section

- **THEN** I should see the heading "Welcome to Supper"
- **AND** I should see a "Reserve A Table" button

#### Scenario: Navbar shows all navigation links

- **THEN** I should see links for "Home", "About", "Menu", "Reserve A Table", "Contact"

#### Scenario: Features section shows food items

- **THEN** I should see "Find your best food" heading
- **AND** I should see 3 food cards

#### Scenario: About section is visible

- **THEN** I should see "The Restaurant" heading

#### Scenario: Chefs section shows chef profiles

- **THEN** I should see "Meet The Chefs" heading
- **AND** I should see 2 chef profiles

#### Scenario: Menu section displays items

- **THEN** I should see "Menu" heading
- **AND** I should see menu item entries

#### Scenario: Reservation form has all fields

- **THEN** I should see "Reservation" heading
- **AND** I should see form fields for Name, Email, Phone, Date, Time, Message
- **AND** I should see a persons dropdown

#### Scenario: Testimonials section shows reviews

- **THEN** I should see "Customer Reviews" heading

#### Scenario: Contact form has required fields

- **THEN** I should see "Get In Touch" heading
- **AND** I should see form fields for Name, Email, Phone, Message

#### Scenario: Footer links to Component Dock

- **THEN** I should see a link to "https://www.componentdock.com/"
- **AND** the link text should contain "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/supper/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/supper/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page loads with hero section — I should see the heading "Welcome to Supper"
- [ ] Navbar shows all navigation links — I should see links for "Home", "About", "Menu", "Reserve A Table", "Contact"
- [ ] Features section shows food items — I should see "Find your best food" heading
- [ ] About section is visible — I should see "The Restaurant" heading
- [ ] Chefs section shows chef profiles — I should see "Meet The Chefs" heading
- [ ] Menu section displays items — I should see "Menu" heading
- [ ] Reservation form has all fields — I should see "Reservation" heading
- [ ] Testimonials section shows reviews — I should see "Customer Reviews" heading
- [ ] Contact form has required fields — I should see "Get In Touch" heading
