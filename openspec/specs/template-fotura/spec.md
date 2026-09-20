# Template: Fotura (Photography Portfolio)

## Purpose

Fotura is a fullscreen photography portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Foto"
photography portfolio design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a fullscreen photography portfolio with a hero image
slider, absolute-positioned header with navigation dropdowns, and a minimal
footer with social links.

- **Source slug:** `foto`
- **Preview URL:** https://preview.colorlib.com/theme/foto/
- **Source page:** https://colorlib.com/wp/template/foto/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foto-free-template.jpg

## Design reference (replication findings)

- **Original:** ColorLib "Foto" — free photography portfolio template
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/foto/` (HTTP 200)
  - its stylesheet `01_Photography/css/styles.css`.
- **Design tokens extracted from the stylesheet:**
  - Brand color: **#37D583** (green) — hover accent on links and CTA.
  - Brand alt: **#36D98A** (near-identical green variant).
  - Text primary: **#333** (body text).
  - Text secondary: **#777** (paragraphs).
  - Font: **Poppins** (body), **Allura** (accent/script) via Google Fonts.
  - Header: absolute-positioned, 60px height, z-index 1000.
  - Footer: absolute-positioned, 60px height, z-index 10000.
  - Dropdown shadow: `0px 3px 10px rgba(0,0,0,.3)`, white background, `#ddd` borders.
  - Hamburger icon: hidden on desktop, visible on mobile (≤768px).
  - Slider: fullscreen height, Ken Burns pan/zoom, dark overlay, white centered text.
  - Slide indicators: 50% border-radius circles, white border, white fill for active.
  - CTA "VISIT" button: border-bottom style, letter-spacing 5px, uppercase, 600 weight.
- **Recreation decisions:** the header is absolute-positioned over the fullscreen
  slider. The slider auto-advances with Ken Burns zoom transitions. The footer
  is absolute-positioned at the bottom with copyright, a "SHOW THUMBNAILS" button,
  and social icon links. Component Dock branding replaces ColorLib attribution.

## Design Tokens

| Token           | Value                         | Notes                               |
| --------------- | ----------------------------- | ----------------------------------- |
| Font (body)     | `'Poppins', sans-serif`       | Weights 400, 500, 600, 700          |
| Font (accent)   | `'Allura', cursive`           | Script font for decorative headings |
| Brand color     | `#37D583`                     | Green — hover states, accent links  |
| Brand color alt | `#36D98A`                     | Near-identical green variant in CSS |
| Text primary    | `#333`                        | Body text                           |
| Text secondary  | `#777`                        | Paragraphs                          |
| White           | `#fff`                        | Text on dark backgrounds            |
| Border/divider  | `#ddd`                        | Dropdown menu borders               |
| Muted           | `#aaa`                        | Button hover background             |
| Header height   | `60px`                        | Absolute-positioned top bar         |
| Footer height   | `60px`                        | Absolute-positioned bottom bar      |
| Dropdown shadow | `0px 3px 10px rgba(0,0,0,.3)` | Nav dropdowns                       |

## Requirements

### Requirement: Header with navigation

The system SHALL render an absolute-positioned header with a logo on the left,
contact email on the right, a desktop navigation menu with dropdowns, and a
hamburger menu icon for mobile.

#### Scenario: Header renders with logo and navigation

- **GIVEN** the user navigates to the Fotura app
- **THEN** the logo text "Fotura" is visible in the header
- **AND** a contact email link "HELLO@FOTURA.COM" is visible on the right
- **AND** navigation links "Home", "Portfolio", "Blog", "Regular page" are present

#### Scenario: Header is responsive with hamburger menu

- **WHEN** the viewport is 768px or narrower
- **THEN** the hamburger menu icon is visible
- **AND** the desktop nav menu is hidden
- **WHEN** the user clicks the hamburger icon
- **THEN** the mobile navigation menu opens

#### Scenario: Portfolio dropdown shows sub-items

- **WHEN** the user hovers over "Portfolio"
- **THEN** a dropdown shows "Portfolio 1" and "Portfolio 2" links

#### Scenario: Blog dropdown shows sub-items

- **WHEN** the user hovers over "Blog"
- **THEN** a dropdown shows "Blog Page" and "Blog Detail" links

### Requirement: Hero slider with fullscreen carousel

The system SHALL render a fullscreen hero slider with background images,
a dark overlay, centered white headline text, a subtitle, and a "VISIT" CTA
button. The slider SHALL auto-advance between 4 slides with fade transitions.

#### Scenario: Hero slider displays fullscreen

- **THEN** the hero section occupies the full viewport height
- **AND** a background image is displayed covering the section
- **AND** a dark overlay is applied over the image

#### Scenario: Hero slide shows headline and CTA

- **THEN** the current slide displays a headline in large white text
- **AND** a subtitle is displayed below the headline
- **AND** a CTA button labeled "VISIT" is displayed below the subtitle

#### Scenario: Hero slider transitions between slides

- **GIVEN** the slider is on slide 1
- **WHEN** the slider auto-advances
- **THEN** the next slide fades in

#### Scenario: Slide indicators are interactive

- **THEN** slide indicator buttons are visible at the bottom
- **AND** the first indicator is marked as active

### Requirement: Footer with social links

The system SHALL render a footer with a copyright notice, a "SHOW THUMBNAILS"
button, and social media icon links.

#### Scenario: Footer displays copyright and social links

- **THEN** a copyright notice is visible in the footer
- **AND** social media icon links are visible (Facebook, Twitter, Instagram, Vimeo, Pinterest)
- **AND** a "SHOW THUMBNAILS" button is visible

#### Scenario: Footer links to Component Dock

- **THEN** the footer contains a link to https://www.componentdock.com/

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Fotura app is rendered
- **THEN** the document title is "Fotura — Photography Portfolio Template"
- **AND** the page contains a header, main landmark, and footer
- **AND** the sections appear in the correct order: Header → Hero Slider → Footer

### Requirement: Placeholder images

The system SHALL use deterministic placeholder images via picsum.photos with
template-specific seeds.

#### Scenario: Placeholder images use deterministic seeds

- **THEN** all background images use picsum.photos URLs with the "fotura-" prefix
