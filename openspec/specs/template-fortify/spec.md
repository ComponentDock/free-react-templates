# Template: Fortify (Security Services Landing Page)

## Purpose

Fortify is a security services landing-page template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Security" free template
(source: https://colorlib.com/wp/template/security/,
preview: https://preview.colorlib.com/theme/security/),
built under a DIFFERENT name (**Fortify**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page security services site with
a sticky navbar, a full-width hero banner (background image + dark overlay
at 0.7 opacity), a 3-card services section, a 6-card features grid, an
animated stats counter (yellow background), a gallery section, a 4-card
blog section, and a dark navy footer with newsletter + social links.
The design uses a **bright yellow brand palette** (`#fab700`), Poppins font,
flat buttons (no border-radius), and a dark navy `#04091e` footer.

> **Provenance:** This spec documents the original ColorLib Security design
> as a reference for implementation. No references to "ColorLib" or "Security"
> shall appear in the application code, comments, or runtime — provenance
> lives only in this spec.

## Design tokens

| Token              | Value                         | Notes                                                          |
| ------------------ | ----------------------------- | -------------------------------------------------------------- |
| Brand yellow       | `#fab700`                     | Primary accent: CTA buttons, counter bg, nav hover             |
| Secondary blue     | `#38a4ff`                     | Accent color for feature icons                                 |
| Cyan accent        | `#4cd3e3`                     | Service icon accent, feature icon accent                       |
| Red accent         | `#f44a40`                     | Feature icon color                                             |
| Purple accent      | `#6382e6`                     | Feature icon color                                             |
| Pink accent        | `#e66686`                     | Feature icon color                                             |
| Orange accent      | `#f09359`                     | Feature icon color                                             |
| Green accent       | `#73fbaf`                     | Feature icon color                                             |
| Light bg           | `#f9f9ff`                     | Feature area, blog area background                             |
| Navbar bg          | dark (transparent/dark)       | Sticky dark navbar                                             |
| Hero overlay       | `rgba(0,0,0,0.7)`             | Dark overlay on hero banner image                              |
| Text heading       | `#222222`                     | Section headings                                               |
| Text body          | `#777777`                     | Body text, descriptions                                        |
| Footer bg          | `#04091e`                     | Very dark navy footer                                          |
| Footer text        | `#ffffff` / `#cccccc`         | Footer link and text colors                                    |
| Button bg          | `#fab700`                     | Primary CTA button                                             |
| Button text        | `#ffffff`                     | White text on buttons                                          |
| Button radius      | `0` (flat/square)             | No border-radius on primary buttons                            |
| Font — body        | `"Poppins", sans-serif`       | All text throughout                                            |
| Counter bg         | `#fab700`                     | Yellow background for stats counter section                    |

## Requirements

### Requirement: Navbar

The system SHALL render a sticky responsive navbar with the Fortify brand
and navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the Fortify app is rendered on a desktop viewport (>=992px)
- **THEN** a `<nav>` SHALL render with the brand text "Fortify" on the left
- **AND** navigation links SHALL appear: Home, About Us, Service, Team,
  Price, Blog, Contact
- **AND** a phone number and "Register / Login" link SHALL appear on the right
- **AND** the navbar SHALL become sticky on scroll

#### Scenario: Mobile navbar

- **GIVEN** the viewport is <=991px
- **THEN** the navbar SHALL collapse to a hamburger toggle button
- **AND** clicking the toggle SHALL expand/collapse the navigation links

### Requirement: Hero banner

The system SHALL render a full-width hero banner with a background image
and dark overlay.

#### Scenario: Hero content

- **GIVEN** the hero banner is rendered
- **THEN** a full-width section SHALL display with a background image
  and a dark overlay at 0.7 opacity
- **AND** the hero SHALL contain a headline (e.g. "Opening on [date]",
  "Exhibition on Modern Era")
- **AND** a subheading/description text SHALL appear
- **AND** a "Get Started" CTA button with `#fab700` background SHALL render

### Requirement: Services section

The system SHALL render a 3-card services grid.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **THEN** the heading SHALL read "Our Offered Services"
- **AND** the subheading SHALL read "Who are in extremely love with
  eco friendly system."
- **AND** 3 service cards SHALL appear:
  1. Basic & Common Repairs
  2. Brake Repairs & Services
  3. Preventive Maintenance
- **AND** each card SHALL have an icon and description text

### Requirement: Features section

The system SHALL render a 6-card features grid on a light background.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **THEN** the section SHALL have a `#f9f9ff` light background
- **AND** the heading SHALL read "Some Features that Made us Unique"
- **AND** 6 feature cards SHALL appear in a 3x2 grid:
  1. Expert Technicians
  2. Professional Service
  3. Great Support
  4. Technical Skills
  5. Highly Recommended
  6. Positive Reviews
- **AND** each feature SHALL have a colorful icon (from the accent palette:
  cyan, blue, yellow, red, purple, pink, orange, green)

### Requirement: Counter/stats section

The system SHALL render an animated statistics counter on a yellow background.

#### Scenario: Counter stats

- **GIVEN** the counter section is rendered
- **THEN** the section SHALL have a `#fab700` yellow background
- **AND** 5 stat boxes SHALL display:
  1. Projects Completed (2536)
  2. Really Happy Clients (6784)
  3. Total Tasks Completed (1059)
  4. Cups of Coffee Taken (2239)
  5. In House Professionals (435)
- **AND** the numbers SHALL animate on scroll into view

### Requirement: Gallery section

The system SHALL render a gallery/image grid section.

#### Scenario: Gallery content

- **GIVEN** the gallery section is rendered
- **THEN** the heading SHALL read "Latest From Our Gallery"
- **AND** a grid of placeholder images SHALL display (via `picsum.photos`)

### Requirement: Blog section

The system SHALL render a 4-card blog grid on a light background.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** the section SHALL have a `#f9f9ff` light background
- **AND** the heading SHALL read "Latest From Our Blog"
- **AND** 4 blog cards SHALL appear, each with:
  - A cover image (placeholder via `picsum.photos`)
  - A date, title, excerpt
  - Like count and comment count

### Requirement: Footer

The system SHALL render a dark navy footer with links, newsletter, and
social media.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** the footer SHALL have a `#04091e` dark navy background
- **AND** the footer SHALL display: About Us text, Newsletter signup,
  and Follow Us social links
- **AND** a copyright bar SHALL render at the bottom

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is rendered
- **THEN** a link to `https://www.componentdock.com/` ("Component Dock")
  SHALL be present in the copyright text

### Requirement: Accessibility

The system SHALL provide accessible markup for all interactive elements.

#### Scenario: Keyboard navigation

- **GIVEN** any interactive element in the Fortify app
- **THEN** it SHALL be reachable via keyboard Tab key
- **AND** focus-visible rings SHALL be displayed on focused elements

#### Scenario: Semantic HTML

- **GIVEN** the Fortify app is rendered
- **THEN** the navbar SHALL use `<nav>`, the main content SHALL use `<main>`,
  sections SHALL use `<section>`, and the footer SHALL use `<footer>`
- **AND** all images SHALL have descriptive `alt` attributes

## Verification checklist

- [ ] Navbar is sticky, responsive, dark background, brand "Fortify"
- [ ] Hero has full-cover bg image, 0.7 dark overlay, headline + CTA
- [ ] Services section has 3 cards with icons
- [ ] Features section has 6 cards on `#f9f9ff` light bg with colorful icons
- [ ] Counter section has 5 stats on `#fab700` yellow bg, animated
- [ ] Gallery section has image grid with `picsum.photos` placeholders
- [ ] Blog section has 4 cards on light bg with dates, likes, comments
- [ ] Footer is `#04091e` dark navy, has newsletter + social links
- [ ] Footer links to componentdock.com
- [ ] All CTA buttons use `#fab700` brand yellow, flat style (no radius)
- [ ] Poppins font used throughout
- [ ] All interactive elements keyboard-accessible
- [ ] No references to ColorLib in app code
- [ ] Uses `lucide-react` for icons (no Font Awesome, no Linearicons)
- [ ] Uses `picsum.photos` for all placeholder images
