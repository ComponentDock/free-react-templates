# Template: Interloom (Interior Design Studio)

## Purpose

Interloom is an interior-design studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Interior 2" template design, built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/interior-2/
Preview URL: https://preview.colorlib.com/theme/interior-2/ (404 as of
2026-09-23 — preview unavailable; screenshot is the sole visual reference)

## Design reference (replication findings)

- **Original:** ColorLib "Interior 2" — interior design studio landing page
  (`<title>Interior 2 | Template</title>`). A modern, minimalist one-pager
  with a full-bleed photo hero slider, a three-column services/feature grid
  with numbered accents, and a clean white body. Brand palette centers on a
  warm gold/yellow accent against dark overlays and white backgrounds.
- **Preview DOM:** UNREACHABLE (HTTP 404 as of 2026-09-23). Screenshot
  (`interior2-free-template.jpg`) is the sole reference. The TEMPLATES.md
  screenshot shows:
  - Navbar: logo "Interior." left, nav (Home, Projects, Pages, Blog,
    Contact) center, "Say Hello" CTA right. Semi-transparent dark overlay.
  - Hero: full-width interior photograph (modern glass-partitioned space,
    pendant light, furniture), large white bold headline "Interior Design
    Solution For Your Business", white pill "View Works" CTA button,
    left/right carousel arrow indicators.
  - Services grid (white bg): three columns each with a gold dash prefix:
    "— Planing", "— Architecture", "— 3D Design". Large light-gray
    numbers "01", "02", "03" below each heading.
  - Additional sections below the fold (not visible in screenshot crop) —
    standard ColorLib interior template pattern: project gallery, about
    section, testimonials, CTA band, footer.
- **Screenshot note:** `interior2-free-template.jpg` — the image shows a
  dark-toned modern interior with glass partitions and a pendant light.
  The hero has a dark overlay with white text. The services section uses
  a gold/yellow accent color for the dash prefix marks. The layout is
  clean and spacious with generous white space.

### Design tokens (estimated from screenshot — preview unavailable for CSS extraction)

| Token               | Value (estimated)               | Where (observed in screenshot)                                  |
| ------------------- | -------------------------------- | --------------------------------------------------------------- |
| Primary (gold)      | `#F0C53D` or `#E8B730`          | Dash prefix marks on service headings, potential CTA hover      |
| Dark overlay        | `rgba(0,0,0,0.5)` (approx)      | Hero image overlay for text readability                         |
| White               | `#FFFFFF`                       | Body background, "View Works" button bg, hero text             |
| Heading text        | `#FFFFFF` (hero), `#222` (body)  | Hero headline, service headings, nav links                     |
| Light gray (nums)   | `#D5D5D5` or `#E0E0E0`          | Large "01", "02", "03" numbers in services section              |
| Body text           | `#555555` or `#666666` (est.)   | Paragraph text in services descriptions                        |
| Button radius       | ~4px (slightly rounded rectangle)| "View Works" button — appears slightly rounded, not pill       |
| Button bg (hero)    | `#FFFFFF`                       | "View Works" white button on hero                              |
| Button text (hero)  | `#222222`                       | Dark text on white hero button                                  |
| Nav CTA ("Say Hello")| Outlined or semi-transparent    | Right-side nav CTA — appears outlined/light                    |

### Font (estimated)

- **Heading font:** `Poppins` or `Montserrat` (bold sans-serif, based on
  the thick, geometric letterforms visible in "Interior Design Solution
  For Your Business"). Poppins is the most common choice in ColorLib
  interior templates.
- **Body font:** Same family (Poppins) or `Open Sans` for body text.
- **Implementation:** Google Fonts `<link>` in `index.html`, Tailwind
  `@theme` custom font family.

## Requirements

### Hero section

Feature: Hero section

#### Scenario: Hero displays full-width background image

- **GIVEN** the visitor opens the page
- **THEN** a full-width hero section is visible
- **AND** the hero has a dark overlay over a background photograph
- **AND** the background photograph depicts a modern interior space

#### Scenario: Hero displays headline and CTA

- **GIVEN** the hero section is visible
- **THEN** a headline reads "Interior Design Solution For Your Business"
- **AND** the headline is white and bold
- **AND** a "View Works" button is visible below the headline
- **AND** the button has a white background with dark text

#### Scenario: Hero has carousel navigation

- **GIVEN** the hero section is visible
- **THEN** left and right arrow indicators are visible on the hero edges
- **AND** clicking an arrow transitions to the next/previous slide

### Navbar

Feature: Navigation bar

#### Scenario: Navbar displays logo and links

- **GIVEN** the visitor opens the page
- **THEN** a navigation bar is visible at the top
- **AND** the logo reads "Interloom" (replacing ColorLib "Interior.")
- **AND** navigation links include Home, Projects, Pages, Blog, Contact

#### Scenario: Navbar has CTA button

- **GIVEN** the navbar is visible
- **THEN** a "Say Hello" button is visible on the right side of the navbar
- **AND** the button links to the contact section

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the visitor scrolls down the page
- **THEN** the navbar remains fixed at the top
- **AND** the navbar background becomes opaque white with a subtle shadow

### Services section

Feature: Services grid

#### Scenario: Services section displays three columns

- **GIVEN** the visitor scrolls to the services section
- **THEN** three service columns are visible in a row
- **AND** each column has a gold/yellow dash prefix
- **AND** the services are "Planning", "Architecture", "3D Design"

#### Scenario: Services section displays numbered accents

- **GIVEN** the services section is visible
- **THEN** large light-gray numbers appear below each service heading
- **AND** the numbers read "01", "02", "03"

### Project gallery (inferred from standard ColorLib interior pattern)

Feature: Project gallery

#### Scenario: Gallery displays project grid

- **GIVEN** the visitor scrolls to the projects section
- **THEN** a grid of project images is visible
- **AND** each project has a title and category label
- **AND** projects are filterable by category

#### Scenario: Gallery items have hover overlay

- **GIVEN** the visitor hovers over a project image
- **THEN** a dark overlay appears with project details
- **AND** a link to view the full project is visible

### About section (inferred)

Feature: About section

#### Scenario: About section displays company info

- **GIVEN** the visitor scrolls to the about section
- **THEN** a heading introduces the company
- **AND** descriptive text explains the company's mission
- **AND** an image accompanies the text

### Testimonials (inferred)

Feature: Testimonials

#### Scenario: Testimonials display client feedback

- **GIVEN** the visitor scrolls to the testimonials section
- **THEN** client quotes are visible
- **AND** client names and roles are displayed
- **AND** a navigation indicator allows cycling through testimonials

### CTA band (inferred)

Feature: Call-to-action band

#### Scenario: CTA band prompts contact

- **GIVEN** the visitor scrolls to the CTA section
- **THEN** a dark background band is visible
- **AND** a headline encourages the visitor to get in touch
- **AND** a CTA button links to the contact section

### Footer

Feature: Footer

#### Scenario: Footer displays links and branding

- **GIVEN** the visitor scrolls to the footer
- **THEN** the footer contains navigation links
- **AND** the footer links to https://www.componentdock.com/ as "Component Dock"
- **AND** social media icons are displayed

## Verification checklist

- [ ] Hero: full-width background image with dark overlay, white headline, white CTA button
- [ ] Hero: carousel arrows for slide navigation
- [ ] Navbar: sticky on scroll, logo + nav links + "Say Hello" CTA
- [ ] Services: three-column grid with gold dash prefixes and numbered accents (01, 02, 03)
- [ ] Project gallery: filterable grid with hover overlays
- [ ] About section: heading + text + image layout
- [ ] Testimonials: client quotes with navigation
- [ ] CTA band: dark background with contact prompt
- [ ] Footer: links, Component Dock attribution, social icons
- [ ] Responsive: mobile hamburger menu, stacked columns
- [ ] Typography: Poppins (or matching geometric sans-serif) from Google Fonts
- [ ] Colors: gold accent `#F0C53D` (or close), dark overlay, white body
- [ ] No ColorLib references in app code (comments, strings, imports)
- [ ] Footer links to https://www.componentdock.com/ as "Component Dock"
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
