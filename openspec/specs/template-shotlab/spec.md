# Template: ShotLab (Photography Portfolio)

## Purpose

ShotLab is a single-page PHOTOGRAPHY PORTFOLIO recreation of ColorLib's "Mostudio" template.

- **Source:** https://colorlib.com/wp/template/mostudio/
- **Preview:** https://preview.colorlib.com/theme/mostudio/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/shotlab`
- **Deploy:** `https://shotlab.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and inline styles:

| Token              | Value                                                    | Usage                                                  |
| ------------------ | -------------------------------------------------------- | ------------------------------------------------------ |
| Brand accent       | `#f3c623` (golden yellow)                                | Buttons, hover borders, decorative line, active states |
| Background primary | `#000000` (black)                                        | Main background, sidebar, portfolio text areas         |
| Text primary       | `#ffffff`                                                | Body text, headings, nav links                         |
| Text secondary     | `rgba(255,255,255,0.6)`                                  | Subheadings, descriptions, pricing labels              |
| Text muted         | `rgba(255,255,255,0.2)`                                  | Category labels on portfolio items                     |
| Border accent      | `#f3c623`                                                | Button borders, hover icon borders                     |
| Font heading       | `"Abril Fatface", cursive`                               | Hero headings, portfolio titles, section titles        |
| Font body          | `"Poppins", Arial, sans-serif`                           | Body text, navigation, team names                      |
| Button radius      | `30px` (fully rounded)                                   | All primary buttons                                    |
| Button style       | Outline on hover: transparent bg + `#f3c623` text/border | Primary CTA buttons                                    |
| Section padding    | `5em 0` (desktop), `3em 0` (mobile)                      | Standard sections                                      |
| Overlay opacity    | `0.3` on black                                           | Image overlays in pricing/about backgrounds            |

## Requirements

### Requirement: Sidebar Navigation

Desktop sidebar is visible on large screens with logo, nav links, newsletter signup, and copyright.

#### Scenario: Desktop sidebar is visible

- **WHEN** the viewport width is >= 992px
- **THEN** a fixed left sidebar is displayed with logo, navigation links (Home, Gallery, About, Pricing, Contact), newsletter signup form, and copyright footer

#### Scenario: Mobile sidebar collapses to hamburger

- **WHEN** the viewport width is < 992px
- **THEN** the sidebar is hidden and a hamburger toggle button is visible
- **AND** clicking the hamburger slides the sidebar in from the left
- **AND** clicking a nav link closes the sidebar

#### Scenario: Active nav link is highlighted

- **GIVEN** the sidebar is visible
- **THEN** the current section's nav link has an active class with golden underline

### Requirement: Portfolio Gallery

Portfolio items display in alternating rows with image on one side and text on the other.

#### Scenario: Portfolio items display in alternating rows

- **GIVEN** the portfolio section is visible
- **THEN** there are at least 8 portfolio items
- **AND** odd items show image on the left and text on the right
- **AND** even items show image on the right and text on the left

#### Scenario: Each portfolio item has required elements

- **GIVEN** a portfolio item is rendered
- **THEN** it displays a category label (uppercase, wide letter-spacing)
- **AND** it displays a title in Abril Fatface font
- **AND** it displays a description paragraph
- **AND** it displays a "View Portfolio" CTA button with golden border
- **AND** hovering the image shows a zoom icon overlay

### Requirement: About Section

About section displays founder info with team member photos on a dark background.

#### Scenario: About section displays founder info

- **GIVEN** the about section is visible
- **THEN** it shows a heading with founder name highlighted in golden yellow
- **AND** it shows a team section with 3 circular member photos
- **AND** each team member has a name and role label

#### Scenario: About section has dark background

- **GIVEN** the about section is rendered
- **THEN** the background is black with a subtle dark image overlay
- **AND** all text is white

### Requirement: Pricing Section

Pricing section displays 4 plan cards in a row.

#### Scenario: Pricing section displays 4 plans

- **GIVEN** the pricing section is visible
- **THEN** there are 4 pricing cards displayed in a row

#### Scenario: Each pricing card has required elements

- **GIVEN** a pricing card is rendered
- **THEN** it displays a plan title
- **AND** it displays a price in large bold white text
- **AND** it displays a list of features
- **AND** it displays a CTA button with golden border

### Requirement: Contact Section

Contact form with transparent inputs and bottom-border styling.

#### Scenario: Contact form is displayed

- **GIVEN** the contact section is visible
- **THEN** it shows form fields: name, email, subject, message
- **AND** each field has a transparent background with bottom-border only
- **AND** there is a "Send Message" button with golden border

#### Scenario: Form fields have placeholder text

- **GIVEN** the contact form is rendered
- **THEN** each input has placeholder text in white with reduced opacity

### Requirement: Newsletter Sidebar

Newsletter signup form in the sidebar.

#### Scenario: Newsletter signup form in sidebar

- **GIVEN** the sidebar is visible
- **THEN** a newsletter heading is displayed
- **AND** an email input field is shown
- **AND** a submit button with paper-plane icon is present

### Requirement: Footer

Footer displays copyright with Component Dock link.

#### Scenario: Footer displays copyright

- **GIVEN** the footer is visible
- **THEN** it shows copyright text with current year
- **AND** it links to https://www.componentdock.com/ (Component Dock)

## Verification Checklist

- [ ] Sidebar navigation matches ColorLib structure (logo, nav, newsletter, copyright)
- [ ] Portfolio items alternate image/text left/right correctly
- [ ] Abril Fatface font is loaded for headings
- [ ] Poppins font is loaded for body text
- [ ] Brand accent #f3c623 is used consistently for buttons and highlights
- [ ] Dark theme (black background, white text) throughout
- [ ] About section has circular team member photos
- [ ] Pricing section shows 4 cards with correct structure
- [ ] Contact form has transparent inputs with bottom-border styling
- [ ] Footer links to Component Dock
- [ ] Responsive: sidebar collapses to hamburger on mobile
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders
