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

## Gherkin Requirements

### Feature: Toolshed — Tools Design UI Kit Landing

#### Scenario: Navbar renders with logo and navigation links
  Given the page loads
  Then a navbar is visible at the top
  And the logo text "Toolshed" is displayed on the left
  And navigation links are displayed on the right including "COMPONENTS" and "Download"
  And social media icons (Facebook, Twitter, Instagram) are visible in the navbar

#### Scenario: Hero section displays with gradient background
  Given the page loads
  Then the hero section occupies the full viewport width
  And the hero has a blue gradient background transitioning from medium blue to lighter blue
  And a large heading "Toolshed" is centered in white
  And a subtitle "A Tools-Inspired UI Kit for Modern Interfaces" is centered below the heading in white
  And a white CTA button with rounded pill shape is centered below the subtitle

#### Scenario: Hero CTA button is interactive
  Given the hero section is visible
  When the user hovers over the CTA button
  Then the button shows a hover state (slight darken or opacity change)
  And the button displays a cloud/download icon alongside the label "Download Tools"

#### Scenario: Basic Elements section renders
  Given the user scrolls past the hero
  Then a "Basic Elements" section appears on a white background
  And the section has a large heading "Basic Elements"
  And a subheading "Buttons" is displayed
  And descriptive text "Pick your style" appears below the subheading

#### Scenario: Buttons showcase displays multiple button variants
  Given the Buttons subsection is visible
  Then multiple button style variants are displayed
  And buttons use the brand blue color (#4A6CF7) with white text
  And buttons have rounded pill-shaped corners
  And buttons vary in size (small, medium, large)

#### Scenario: Footer renders with attribution
  Given the user scrolls to the bottom
  Then a footer section is visible
  And the footer contains a link to "Component Dock" (https://www.componentdock.com/)
  And the footer has a dark or contrasting background

## Verification Checklist

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
