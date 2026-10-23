# Template: Crustly (Restaurant/Bakery)

## Purpose

A bakery and restaurant template with hero banner, about story, canvas and full menus, table booking and testimonials sections. Recreation of ColorLib's **Bakery2** template.

- **Source:** https://colorlib.com/wp/template/bakery2/
- **Preview:** https://preview.colorlib.com/theme/bakery2/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Design category:** Restaurant / Bakery / Food

## Design Tokens (extracted from preview)

| Token | Value |
|-------|-------|
| Primary brand color | `#f42f2c` (vivid red) |
| Dark navy / header bg | `#04091e` |
| Body text | `#777777` |
| Heading text | `#222222` |
| Light background | `#fafaff` |
| Input background | `#e8e8e8` |
| Border color | `#ededed` / `#eeeeee` |
| Heading font | Playfair Display, serif (Google Fonts) |
| Body font | Roboto, sans-serif (Google Fonts) |
| Button radius (main) | 0px (square) |
| Button radius (newsletter) | 45px (pill) |
| Button radius (form submit) | 3px |

## Replication Reference

- **Live preview fetched:** Yes (200 OK). HTML + CSS analyzed.
- **CSS:** `css/style.css` fetched — tokens above extracted from it.
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/bakery2-free-template.jpg`
  (not analyzed in browser — preview DOM is the primary reference)

## Section Structure (1:1 fidelity)

| # | Section | Description |
|---|---------|-------------|
| 1 | Navbar | Transparent header over hero. Links: Home, About, Menu, Pages (dropdown), Blog (dropdown), Contact. White text, red `#f42f2c` on hover. Logo left, nav right. |
| 2 | Canvas Menu Bar | Sticky bar below navbar with hamburger icon (left) and "Contact Us" button (right). Dark background `#04091e`. |
| 3 | Hero Banner | Full-width Swiper slider, 3 slides with food images. Overlay text image (slider-content.png). |
| 4 | About Our Story | Two-column: left text "About Our Story" + paragraph + "View Full Menu" button; right image. Light `#fafaff` bg. |
| 5 | Feature Story (Honey Chocolate Pie) | Two-column reversed: left image, right text "Honey Chocolate Pie" + description + CTA. Same light bg. |
| 6 | Our Menu | Carousel (Owl) with 3 slides: Starter, Main Courses, Desserts. Each slide: left column menu items (item name, price, description), right column image. Section title "Our Menu / Explore". |
| 7 | Testimonials | Carousel: person image (4 cols) + text (8 cols): name, role, quote. 3 slides. |
| 8 | Book a Table | Two-column: left image, right form (name, email, phone, date/time, event select, "Make Reservation" button). |
| 9 | Footer | 4 link columns (Top Products, Quick Features, Quick Links, Resources) + Newsletter column (email input + arrow button). Bottom bar with copyright + social icons. |

## Requirements

### Feature: Crustly template behaviour

Feature: Crustly Template

#### Scenario: Page loads with hero banner

- **GIVEN** the user visits the Crustly homepage
- **THEN** a full-width hero banner is visible
- **AND** the banner contains a call-to-action overlay

#### Scenario: Navigation links work

- **GIVEN** the navbar is visible
- **WHEN** the user clicks "About"
- **THEN** the page scrolls to the about section
- **WHEN** the user clicks "Menu"
- **THEN** the page scrolls to the menu section

#### Scenario: Menu carousel slides

- **GIVEN** the Our Menu section is visible
- **WHEN** the user clicks the next carousel arrow
- **THEN** the next menu category is displayed

#### Scenario: Testimonials carousel

- **GIVEN** the testimonials section is visible
- **WHEN** the user navigates testimonials
- **THEN** the next testimonial is displayed

#### Scenario: Book a Table form

- **GIVEN** the Book a Table section is visible
- **WHEN** the user fills in name, email, phone, and date
- **AND** clicks "Make Reservation"
- **THEN** the form submission is triggered

#### Scenario: Newsletter signup

- **GIVEN** the footer newsletter section is visible
- **WHEN** the user enters an email and clicks the arrow button
- **THEN** the newsletter form is submitted

#### Scenario: Footer links and social icons

- **GIVEN** the footer is visible
- **THEN** link columns are displayed (Top Products, Quick Features, Quick Links, Resources)
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance) are present
- **AND** the copyright line includes a Component Dock link

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/crustly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/crustly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All 9 sections present in order
- [ ] Brand color `#f42f2c` used for buttons and hover states
- [ ] Playfair Display for headings, Roboto for body
- [ ] Hero banner is full-width with slider
- [ ] Menu section uses carousel with 3 food categories
- [ ] Testimonials carousel with person image + text
- [ ] Book a Table form with all fields
- [ ] Footer with 4 link columns + newsletter + social icons
- [x] Footer links to https://www.componentdock.com/
- [x] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive (mobile nav toggle)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
