# Template: PhotoDeck (Photographer Portfolio)
<!-- prep-status: shipped-as=shotwise -->
> **SHIPPED-UNDER** — the ColorLib `pemodule` design this prep describes already
> ships as `apps/shotwise` (<https://shotwise.free.componentdock.com>).
> Do not scaffold `apps/photodeck`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-shotwise/spec.md`.

## Purpose

PhotoDeck is a single-page photographer portfolio template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Pemodule" free template (source:
https://colorlib.com/wp/template/pemodule/), built under a DIFFERENT name
(**PhotoDeck**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 photographer landing page with a full-width
hero banner (background image + gradient overlay), a two-column featured
section (text + image carousel), a parallax call-to-action section, a
four-column service grid, a contact form with background image, a newsletter
subscription section, and a dark footer with social links. The design uses a
purple-to-magenta gradient theme with Poppins font throughout.

## Design tokens

- **Font:** Poppins (weights 100, 300, 400, 500, 600) via Google Fonts
- **Primary gradient:** `#3224b0` (indigo) → `#be5ede` (magenta) — linear-gradient
- **Accent color:** `#6cbb23` (green) — used for service section highlights
- **Text colors:** `#222222` (dark), `#777777` (body), `#fff` (on dark/gradient)
- **Section backgrounds:**
  - Hero: background image with gradient overlay (#3224b0 → #be5ede)
  - Featured: `#fff` white
  - Parallax: background image with dark overlay (#222 opacity 0.3)
  - Services: `#fff` white
  - Contact: background image with overlay
  - Newsletter: `#f9f9ff` (light lavender)
  - Footer: `#222222` (dark)
- **Button radius:** 20px (pill-shaped), transparent bg with white border, gradient hover overlay
- **Spacing:** generous padding (pt-100 pb-100 sections)

## Requirements

### Feature: PhotoDeck template behaviour

#### Scenario: Hero section renders with gradient overlay and CTA

- **GIVEN** the page loads
- **THEN** a full-width hero banner is visible with a gradient overlay
- **AND** the heading "your best partner" is displayed in uppercase
- **AND** a large "PhotoDeck" title is centered below
- **AND** a "Get Started" pill button is visible with arrow icon

#### Scenario: Navbar is transparent over the hero

- **GIVEN** the page loads
- **THEN** a transparent navbar overlays the hero area
- **AND** a "PhotoDeck" logo text is visible on the left
- **AND** navigation links (Home, Generic, Elements) are on the right
- **AND** a hamburger menu icon is visible for mobile

#### Scenario: Featured section shows text and image carousel

- **GIVEN** the page loads
- **THEN** the featured section displays a heading "Reasons To Choose Notebook"
- **AND** a paragraph of descriptive text is below the heading
- **AND** a "Get Started" green-gradient button is below the text
- **AND** an image carousel with dot indicators is on the right column

#### Scenario: Parallax section displays with background image

- **GIVEN** the page loads
- **THEN** the parallax section shows a background image
- **AND** a dark semi-transparent overlay covers the image
- **AND** text content appears on the right side
- **AND** a "Get Started" pill button is visible

#### Scenario: Service section shows four service cards in a grid

- **GIVEN** the page loads
- **THEN** four service cards are displayed in a row
- **AND** each card has a background image with gradient overlay
- **AND** each card has a heading "Becoming A Dvd Repair Expert Online"
- **AND** each card has descriptive paragraph text

#### Scenario: Contact section has form with background image

- **GIVEN** the page loads
- **THEN** a contact section with background image is visible
- **AND** a heading "Send Us Message" is centered
- **AND** a name input field is present
- **AND** an email input field is present
- **AND** a message textarea is present
- **AND** a "Send Message" white button is visible

#### Scenario: Newsletter section with email subscription

- **GIVEN** the page loads
- **THEN** a newsletter section is displayed
- **AND** a heading "Subscribe for our Newsletter" is visible
- **AND** an email input field with placeholder is present
- **AND** a "Get Started" button is next to the input
- **AND** a disclaimer text "We won't send any types of spam" is below

#### Scenario: Footer with navigation and social links

- **GIVEN** the page loads
- **THEN** a dark footer is displayed
- **AND** navigation links (Home, Generic, Elements) are centered
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance) are shown
- **AND** a copyright text is displayed at the bottom
- **AND** a "Component Dock" link is present

## Verification checklist

- [ ] All sections render in correct order: Hero → Featured → Parallax → Services → Contact → Newsletter → Footer
- [ ] Purple-to-magenta gradient is applied to hero overlay and primary buttons
- [ ] Poppins font is loaded and applied globally
- [ ] Buttons have 20px border-radius (pill shape) with gradient hover
- [ ] Parallax section has background image with dark overlay
- [ ] Service cards show gradient overlay on hover
- [ ] Contact form has name, email, message fields
- [ ] Newsletter section has email input and subscribe button
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos
- [ ] No ColorLib references in app code
- [ ] Tests achieve 100% coverage
- [ ] Build succeeds without errors
