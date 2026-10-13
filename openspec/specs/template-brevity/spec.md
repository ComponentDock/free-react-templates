# Template: Brevity (Portfolio / Freelancer)

## Purpose

Recreation of ColorLib "Evans" — a personal portfolio / freelancer template with a bold fullscreen hero, vertical display typography, service cards, a portfolio grid, and a multi-column footer.

- **Source:** https://colorlib.com/wp/template/evans/
- **Preview:** https://preview.colorlib.com/theme/evans/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Name mapping:** ColorLib "Evans" → "Brevity" (apps/brevity, @free-react-templates/brevity)

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font — display | `"Barlow Condensed", sans-serif` (weight 900) | Hero vertical title text |
| Font — headings | `"Lora", serif` (weights 400, 700) | Section headings, body text |
| Font — UI | `"Poppins", sans-serif` | Buttons, nav, small UI text |
| Color — hero bg | `#000000` (black) | Fullscreen hero background |
| Color — accent | `#fdcb6e` (golden yellow) | Accent highlights, hover states |
| Color — primary | `#007bff` (blue) | Default button background |
| Color — text light | `#ffffff` | Hero text, footer text on dark |
| Color — text muted | `rgba(255,255,255,0.7)` | Subtitle text on hero |
| Color — body bg | `#ffffff` | Page body background |
| Color — footer bg | `#1d2124` (dark gray) | Footer section background |
| Border radius | 0 (sharp corners on buttons) | Bootstrap default square buttons |
| Layout | Full-width, container-based | Sections use `.container` / `.container-fluid` |

## Requirements

### Feature: Hero section

#### Scenario: Fullscreen hero with vertical display title

- **GIVEN** the user visits the homepage
- **THEN** a full-viewport hero section is displayed
- **AND** the hero background is dark (#000000)
- **AND** a large vertical text reads the site name in "Barlow Condensed" font
- **AND** a nav bar is present with links: About, Work, Contact

#### Scenario: Hero is responsive

- **GIVEN** the user views on a mobile viewport (< 768px)
- **THEN** the hero scales down proportionally
- **AND** the vertical text remains centered and readable

### Feature: Intro section

#### Scenario: Personal introduction with two columns

- **GIVEN** the user scrolls past the hero
- **THEN** an intro section appears with two columns
- **AND** the left column shows a personal title (e.g. "Web Designer, hobbyist writer, and the CEO & Founder of Brevity")
- **AND** the right column shows a descriptive paragraph

#### Scenario: Intro section is readable

- **GIVEN** the intro section is visible
- **THEN** the text uses "Lora" serif font
- **AND** line height and spacing match the original design

### Feature: Services section

#### Scenario: Four service cards in a row

- **GIVEN** the user scrolls to the services section
- **THEN** four service cards are displayed horizontally
- **AND** each card has a heading: Web Design, Web Development, Graphic Design, Writing
- **AND** each card has a short description paragraph
- **AND** icons or visual markers distinguish each service

#### Scenario: Services section is responsive

- **GIVEN** the user views on a tablet viewport (768px–1024px)
- **THEN** the service cards stack into a 2-column grid

#### Scenario: Services section on mobile

- **GIVEN** the user views on a mobile viewport (< 768px)
- **THEN** the service cards stack into a single column

### Feature: Portfolio section

#### Scenario: Portfolio grid with six items

- **GIVEN** the user scrolls to the portfolio section
- **THEN** a "Latest & Greatest" heading is displayed
- **AND** six portfolio items are shown in a grid layout
- **AND** each item shows: category tag, date, title, short description, and a "View Portfolio" link

#### Scenario: Portfolio items have hover interaction

- **GIVEN** the user hovers over a portfolio item
- **THEN** a visual hover effect is applied (overlay, scale, or color change)

#### Scenario: Portfolio section is responsive

- **GIVEN** the user views on a tablet viewport
- **THEN** portfolio items reflow into a 2-column grid
- **AND** on mobile they become single-column

### Feature: Footer

#### Scenario: Multi-column footer with site information

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is displayed
- **AND** the footer contains four columns: About Us, Information, Links, Have a Questions?
- **AND** the About Us column has a brief description
- **AND** the Information column has links: Portfolio, Privacy, Terms Condition
- **AND** the Links column has links: Home, About, Work, Contact
- **AND** the Have a Questions? column has address, phone, and email

#### Scenario: Footer links are functional

- **GIVEN** the user clicks a footer navigation link
- **THEN** the page scrolls to the corresponding section

#### Scenario: Footer has Component Dock attribution

- **GIVEN** the user views the footer
- **THEN** a "Made with Component Dock" or similar link to https://www.componentdock.com/ is present

## Verification checklist

- [ ] Hero: fullscreen dark background, vertical display title, nav with About/Work/Contact
- [ ] Hero: "Barlow Condensed" font at weight 900 for the vertical title
- [ ] Intro: two-column layout, personal title + description, "Lora" font
- [ ] Services: four cards in a row (Web Design, Web Development, Graphic Design, Writing)
- [ ] Services: responsive stacking (2-col tablet, 1-col mobile)
- [ ] Portfolio: "Latest & Greatest" heading, six items with category/date/title/description/link
- [ ] Portfolio: responsive grid (2-col tablet, 1-col mobile)
- [ ] Portfolio: hover effects on items
- [ ] Footer: dark background (#1d2124), four columns, correct links
- [ ] Footer: Component Dock link (https://www.componentdock.com/)
- [ ] Colors: brand gold #fdcb6e, hero black #000, primary blue #007bff
- [ ] Fonts: Google Fonts loaded via index.html link (Barlow Condensed, Lora, Poppins)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos/seed/brevity-<n>/<w>/<h>
- [ ] Tests: 100% coverage on all components
