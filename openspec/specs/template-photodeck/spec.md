# Template: PhotoDeck (Photographer Portfolio)

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

## Gherkin requirements

### Scenario: Hero section renders with gradient overlay and CTA
  Given the page loads
  Then a full-width hero banner is visible with a gradient overlay
  And the heading "your best partner" is displayed in uppercase
  And a large "PhotoDeck" title is centered below
  And a "Get Started" pill button is visible with arrow icon

### Scenario: Navbar is transparent over the hero
  Given the page loads
  Then a transparent navbar overlays the hero area
  And a "PhotoDeck" logo text is visible on the left
  And navigation links (Home, Generic, Elements) are on the right
  And a hamburger menu icon is visible for mobile

### Scenario: Featured section shows text and image carousel
  Given the page loads
  Then the featured section displays a heading "Reasons To Choose Notebook"
  And a paragraph of descriptive text is below the heading
  And a "Get Started" green-gradient button is below the text
  And an image carousel with dot indicators is on the right column

### Scenario: Parallax section displays with background image
  Given the page loads
  Then the parallax section shows a background image
  And a dark semi-transparent overlay covers the image
  And text content appears on the right side
  And a "Get Started" pill button is visible

### Scenario: Service section shows four service cards in a grid
  Given the page loads
  Then four service cards are displayed in a row
  And each card has a background image with gradient overlay
  And each card has a heading "Becoming A Dvd Repair Expert Online"
  And each card has descriptive paragraph text

### Scenario: Contact section has form with background image
  Given the page loads
  Then a contact section with background image is visible
  And a heading "Send Us Message" is centered
  And a name input field is present
  And an email input field is present
  And a message textarea is present
  And a "Send Message" white button is visible

### Scenario: Newsletter section with email subscription
  Given the page loads
  Then a newsletter section is displayed
  And a heading "Subscribe for our Newsletter" is visible
  And an email input field with placeholder is present
  And a "Get Started" button is next to the input
  And a disclaimer text "We won't send any types of spam" is below

### Scenario: Footer with navigation and social links
  Given the page loads
  Then a dark footer is displayed
  And navigation links (Home, Generic, Elements) are centered
  And social media icons (Facebook, Twitter, Dribbble, Behance) are shown
  And a copyright text is displayed at the bottom
  And a "Component Dock" link is present

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
