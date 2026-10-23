# Template: Toolshed (UI Kit / Tools Design)

## Purpose

Recreation of ColorLib's **Tools UI Kit** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page showcase.

- **Source:** https://colorlib.com/wp/template/tools-ui-kit/
- **Preview URL:** https://preview.colorlib.com/theme/tools-ui-kit/ (404 at time of research — design derived from screenshot)
- **New name:** `toolshed` (apps/toolshed, `@free-react-templates/toolshed`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens

Extracted from the screenshot (preview unreachable):

### Colors
- **Hero gradient:** left-to-right from a medium blue (#4A6CF7 approx) to a lighter sky blue (#60A5FA approx) — Tailwind `bg-gradient-to-r from-blue-500 to-blue-300`
- **Brand/primary:** #4A6CF7 (vibrant blue)
- **Hero text:** white (#FFFFFF)
- **Body text:** dark gray (#333333) on white (#FFFFFF) background
- **Section headings:** dark gray (#333333)
- **Subtext/muted:** medium gray (#777777)
- **Button primary:** white (#FFFFFF) background, dark text on hero; blue (#4A6CF7) background, white text in Basic Elements section

### Typography
- **Font:** Likely Poppins or a similar Google font (clean sans-serif, rounded terminals)
- **Hero heading:** large, bold (~48-60px), white, centered
- **Hero subtitle:** medium (~18-20px), white/light, centered
- **Section heading:** large (~36px), dark gray, left-aligned
- **Subheading:** medium (~24px), dark gray
- **Body text:** normal (~16px), gray

### Layout
- **Hero:** full-width, gradient background, centered content (heading + subtitle + CTA button), generous vertical padding (~200px top/bottom)
- **Navbar:** transparent/overlay on hero, logo left, nav items right (COMPONENTS dropdown, DOWNLOAD link, social icons)
- **Basic Elements section:** white background, left-aligned, section heading + subheading + subtitle

### Buttons
- **Hero CTA:** white background, dark text, rounded corners (pill shape), cloud icon left, "DOWNLOAD TOOLS" label, uppercase
- **Basic Elements buttons:** blue (#4A6CF7) background, white text, rounded corners (pill shape), various sizes/styles shown
- **Hover:** slight darken/opacity change

### Section Backgrounds
- **Hero:** blue gradient (medium blue → lighter blue)
- **Basic Elements / body:** white (#FFFFFF)

## Requirements

### Feature: Toolshed — Tools Design UI Kit Landing

#### Scenario: Navbar renders with logo and navigation links

- **GIVEN** the page loads
- **THEN** a navbar is visible at the top
- **AND** the logo text "Toolshed" is displayed on the left
- **AND** navigation links are displayed on the right including "COMPONENTS" and "Download"
- **AND** social media icons (Facebook, Twitter, Instagram) are visible in the navbar

#### Scenario: Hero section displays with gradient background

- **GIVEN** the page loads
- **THEN** the hero section occupies the full viewport width
- **AND** the hero has a blue gradient background transitioning from medium blue to lighter blue
- **AND** a large heading "Toolshed" is centered in white
- **AND** a subtitle "A Tools-Inspired UI Kit for Modern Interfaces" is centered below the heading in white
- **AND** a white CTA button with rounded pill shape is centered below the subtitle

#### Scenario: Hero CTA button is interactive

- **GIVEN** the hero section is visible
- **WHEN** the user hovers over the CTA button
- **THEN** the button shows a hover state (slight darken or opacity change)
- **AND** the button displays a cloud/download icon alongside the label "Download Tools"

#### Scenario: Basic Elements section renders

- **GIVEN** the user scrolls past the hero
- **THEN** a "Basic Elements" section appears on a white background
- **AND** the section has a large heading "Basic Elements"
- **AND** a subheading "Buttons" is displayed
- **AND** descriptive text "Pick your style" appears below the subheading

#### Scenario: Buttons showcase displays multiple button variants

- **GIVEN** the Buttons subsection is visible
- **THEN** multiple button style variants are displayed
- **AND** buttons use the brand blue color (#4A6CF7) with white text
- **AND** buttons have rounded pill-shaped corners
- **AND** buttons vary in size (small, medium, large)

#### Scenario: Footer renders with attribution

- **GIVEN** the user scrolls to the bottom
- **THEN** a footer section is visible
- **AND** the footer contains a link to "Component Dock" (https://www.componentdock.com/)
- **AND** the footer has a dark or contrasting background

## Verification checklist

- [ ] Navbar: logo on left, nav links on right, transparent overlay on hero
- [ ] Hero: blue gradient background, centered heading + subtitle + CTA
- [ ] CTA button: white bg, pill shape, download icon, hover effect
- [ ] Basic Elements section: white bg, heading + subheading + description
- [ ] Buttons showcase: multiple variants, brand blue, pill shape
- [ ] Footer: links to componentdock.com, dark bg
- [ ] Responsive: hero text scales, navbar collapses on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Public/CNAME set to toolshed.free.componentdock.com
- [ ] Tests pass with 100% coverage

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/tools/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4a6cf7` — nearest `#3e65ff` (d=16)
<!-- live-palette-unverified:end -->
