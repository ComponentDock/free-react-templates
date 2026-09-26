# Spec: Pictura

> Recreation of ColorLib "Mostudio" (https://colorlib.com/wp/template/mostudio/)
> Preview: https://preview.colorlib.com/theme/mostudio/

## Purpose

Pictura is a photography portfolio template with a dark aesthetic, featuring a fixed left sidebar with navigation, a main content area with an alternating image-text portfolio grid, and a newsletter signup. The template uses a distinctive dark theme with golden yellow accents, Poppins and Abril Fatface fonts, and a full-bleed portfolio layout with lightbox-enabled images.

## Design Tokens

Extracted from the ColorLib Mostudio preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Body background | `#111111` | Dark near-black page background |
| Sidebar background | `#000` | Black sidebar with background image overlay |
| Accent primary | `#f3c623` | Golden yellow — nav hover underlines, active states, heading links, button backgrounds |
| Text primary | `#ffffff` | White text on dark backgrounds |
| Text body | `#212529` | Dark text (light sections only) |
| Text muted | `#6c757d` | Gray secondary text |
| White | `#ffffff` | Card backgrounds, light elements |
| Font body | `"Poppins", Arial, sans-serif` | Body text, navigation, descriptions |
| Font display | `"Abril Fatface", cursive` | Logo text, display headings |
| Button radius | `30px` | Custom CTA buttons — pill-shaped |
| Button bg | `#f3c623` | Golden yellow background |
| Button border | `1px solid #f3c623` | Matching border |
| Button hover bg | `#f3c623` (same, with inverted text) | Hover state inverts to outline style |
| Subscribe form radius | `0` | Sharp corners on newsletter input |
| Image icon color | `#ffffff` | Expand icon overlay on portfolio images |
| Icon hover bg | `#f3c623` | Golden background on image icon hover |

### Buttons

- Primary `.custom-btn`: pill-shaped (border-radius 30px), `#f3c623` background, white text
- Hover: transparent background, `#f3c623` border and text (inverted)
- Subscribe form input: no border-radius, sharp rectangular

### Section Backgrounds

- Body: `#111111` dark near-black
- Sidebar: `#000` black with decorative background image
- Portfolio rows: no explicit background (inherits body dark)
- Portfolio images: full-bleed with overlay icon on hover

## Requirements

### Requirement: Sidebar Navigation

The template SHALL render a fixed left sidebar (25% width on desktop, 270px slide-in on mobile) with a logo/brand name with background image, navigation links (Home, Gallery, About, Pricing, Contact), a newsletter signup form, and a copyright footer.

#### Scenario: Sidebar desktop layout

- **WHEN** the page loads on desktop (>992px)
- **THEN** the sidebar occupies the left 25% of the viewport
- **THEN** the sidebar displays the brand name "Pictura" with a background image
- **THEN** 5 navigation links are visible: Home, Gallery, About, Pricing, Contact
- **THEN** a newsletter email input with paper-plane icon is visible
- **THEN** a copyright line is visible at the bottom

#### Scenario: Sidebar mobile toggle

- **WHEN** the user clicks the hamburger menu on mobile (<992px)
- **THEN** the sidebar slides in from the left over the main content
- **WHEN** the user clicks a navigation link or the toggle again
- **THEN** the sidebar slides back out

#### Scenario: Active nav state

- **WHEN** the user is on the Home page
- **THEN** the "Home" nav link has a golden yellow (`#f3c623`) underline indicator

### Requirement: Portfolio Grid

The template SHALL render a full-width portfolio grid with 9 items in alternating left-right layout. Each item has a large image on one side and text content (category subheading, title heading, description, "View Portfolio" button) on the other side.

#### Scenario: Portfolio item layout (odd items)

- **WHEN** the portfolio grid renders
- **THEN** odd-numbered items (1, 3, 5, 7, 9) display the image on the left and text on the right
- **THEN** each image takes 50% width with a fullscreen expand icon overlay
- **THEN** each text block contains a category subheading (e.g. "Portrait", "Nature")
- **THEN** each text block contains a title heading (e.g. "Black & Gold Paint Face")
- **THEN** each text block contains a description paragraph
- **THEN** each text block contains a "View Portfolio" pill button

#### Scenario: Portfolio item layout (even items)

- **WHEN** the portfolio grid renders
- **THEN** even-numbered items (2, 4, 6, 8) display the image on the right and text on the left
- **THEN** the text block is right-aligned on desktop

#### Scenario: Image lightbox

- **WHEN** the user clicks a portfolio image
- **THEN** a lightbox modal opens displaying the full-resolution image

#### Scenario: Load more

- **WHEN** the user scrolls to the bottom of the portfolio grid
- **THEN** a "Load more" button with a refresh icon is displayed full-width

### Requirement: Portfolio Content

The template SHALL populate the portfolio with 9 photography items across categories (Portrait, Nature, Fashion, Animals) with placeholder images.

#### Scenario: Portfolio data

- **WHEN** the portfolio renders
- **THEN** 9 items are displayed with the following content:
  1. Portrait — "Black & Gold Paint Face"
  2. Nature — "Green Leaves"
  3. Nature — "Coal"
  4. Nature — "Top Leaf"
  5. Portrait — "Building"
  6. Fashion — "Black Girl Model"
  7. Animals — "Pug Puppy"
  8. Nature — "White Flower"
  9. Animals — "Turtle"

### Requirement: Newsletter Signup

The template SHALL render a newsletter signup form in the sidebar footer with an email input, paper-plane icon, and a submit action.

#### Scenario: Newsletter form visible

- **WHEN** the sidebar renders
- **THEN** a "Subscribe for newsletter" heading is visible
- **THEN** an email input with placeholder "Enter Email Address" is visible
- **THEN** a paper-plane icon is visible inside the input group

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and submits
- **THEN** the form prevents default submission (no page reload)

### Requirement: Footer Attribution

The template SHALL render a copyright line in the sidebar footer with Component Dock attribution.

#### Scenario: Footer content

- **WHEN** the sidebar footer renders
- **THEN** a copyright line is displayed
- **THEN** the footer links to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Sidebar renders with logo, nav, newsletter form, and copyright
- [ ] Sidebar is fixed 25% width on desktop, slides in on mobile
- [ ] Active nav state shows golden underline
- [ ] Portfolio grid shows 9 items in alternating left-right layout
- [ ] Each portfolio item has image, category, title, description, and CTA button
- [ ] Image click opens lightbox modal
- [ ] "Load more" button appears at bottom of grid
- [ ] Newsletter form has email input with paper-plane icon
- [ ] Dark theme: body `#111111`, sidebar `#000`, accent `#f3c623`
- [ ] Fonts: Poppins (body), Abril Fatface (logo/display)
- [ ] CTA buttons are pill-shaped (border-radius 30px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
