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

## Gherkin requirements

### Hero section

```gherkin
Feature: Hero section

  Scenario: Hero displays full-width background image
    Given the visitor opens the page
    Then a full-width hero section is visible
    And the hero has a dark overlay over a background photograph
    And the background photograph depicts a modern interior space

  Scenario: Hero displays headline and CTA
    Given the hero section is visible
    Then a headline reads "Interior Design Solution For Your Business"
    And the headline is white and bold
    And a "View Works" button is visible below the headline
    And the button has a white background with dark text

  Scenario: Hero has carousel navigation
    Given the hero section is visible
    Then left and right arrow indicators are visible on the hero edges
    And clicking an arrow transitions to the next/previous slide
```

### Navbar

```gherkin
Feature: Navigation bar

  Scenario: Navbar displays logo and links
    Given the visitor opens the page
    Then a navigation bar is visible at the top
    And the logo reads "Interloom" (replacing ColorLib "Interior.")
    And navigation links include Home, Projects, Pages, Blog, Contact

  Scenario: Navbar has CTA button
    Given the navbar is visible
    Then a "Say Hello" button is visible on the right side of the navbar
    And the button links to the contact section

  Scenario: Navbar is sticky on scroll
    Given the visitor scrolls down the page
    Then the navbar remains fixed at the top
    And the navbar background becomes opaque white with a subtle shadow
```

### Services section

```gherkin
Feature: Services grid

  Scenario: Services section displays three columns
    Given the visitor scrolls to the services section
    Then three service columns are visible in a row
    And each column has a gold/yellow dash prefix
    And the services are "Planning", "Architecture", "3D Design"

  Scenario: Services section displays numbered accents
    Given the services section is visible
    Then large light-gray numbers appear below each service heading
    And the numbers read "01", "02", "03"
```

### Project gallery (inferred from standard ColorLib interior pattern)

```gherkin
Feature: Project gallery

  Scenario: Gallery displays project grid
    Given the visitor scrolls to the projects section
    Then a grid of project images is visible
    And each project has a title and category label
    And projects are filterable by category

  Scenario: Gallery items have hover overlay
    Given the visitor hovers over a project image
    Then a dark overlay appears with project details
    And a link to view the full project is visible
```

### About section (inferred)

```gherkin
Feature: About section

  Scenario: About section displays company info
    Given the visitor scrolls to the about section
    Then a heading introduces the company
    And descriptive text explains the company's mission
    And an image accompanies the text
```

### Testimonials (inferred)

```gherkin
Feature: Testimonials

  Scenario: Testimonials display client feedback
    Given the visitor scrolls to the testimonials section
    Then client quotes are visible
    And client names and roles are displayed
    And a navigation indicator allows cycling through testimonials
```

### CTA band (inferred)

```gherkin
Feature: Call-to-action band

  Scenario: CTA band prompts contact
    Given the visitor scrolls to the CTA section
    Then a dark background band is visible
    And a headline encourages the visitor to get in touch
    And a CTA button links to the contact section
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer displays links and branding
    Given the visitor scrolls to the footer
    Then the footer contains navigation links
    And the footer links to https://www.componentdock.com/ as "Component Dock"
    And social media icons are displayed
```

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
