# Template: Halmark (Photography Portfolio)
<!-- prep-status: shipped-as=captura -->
> **SHIPPED-UNDER** — the ColorLib `halen` design this prep describes already
> ships as `apps/captura` (<https://captura.free.componentdock.com>).
> Do not scaffold `apps/halmark`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-captura/spec.md`.

## Purpose

Recreation of the ColorLib "Halen" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `halen`
- **Source URL:** https://colorlib.com/wp/template/halen/
- **Preview URL:** https://preview.colorlib.com/theme/halen/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/halen-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/halmark`
- **Surge target:** `halmark.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/halen/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#444444` | Button backgrounds, dark sections |
| Dark bg | `#2C2C2C` | Footer background |
| Body text | `#1F1F1F` | Primary text on light backgrounds |
| Body alt | `#4D4D4D` | Secondary body text |
| Muted text | `#7e7e7e` | Tertiary/muted text |
| Light text | `#cccccc` | On dark backgrounds |
| White text | `#FFFFFF` | On dark backgrounds |
| Font primary | `Poppins`, sans-serif | All text (headings, body, nav) |
| Font icon | `FontAwesome` / `themify-icons` | Icon fonts |
| Button shape | Square (border-radius: 0px) | CTA buttons (`.boxed-btn3`) |
| Button primary | `#444444` bg, white text | "Explore Work" CTA |
| Button hover | Darker shade | Hover state |
| Hero overlay | Black overlay class | Dark overlay on slider images |
| Gallery hover | Dark overlay with centered text | Photo hover state |
| Testimonial bg | White/light | Testimonial section |
| Contact map | Google Maps embed | Right side of contact |
| Team social | Circle icon buttons | Team member social links |
| Surface (measured) | `#ff5e13` | paints it ×20 — `background` on `.genric-btn.primary`; style.css (137,291 B, sha256 3f0bb2d8f02d) · <https://preview.colorlib.com/theme/halen/> |

## Section Structure (in page order)

### 1. Navbar
- Logo image (left-aligned)
- Navigation links: Home, About, Albums, Blog (dropdown: blog, single-blog), Pages (dropdown: elements), Contact
- Social icons on right: Facebook, Twitter, Instagram
- Sticky on scroll
- Hamburger menu on mobile (slicknav)

### 2. Hero Slider
- Full-width OwlCarousel with 3 slides
- Each slide: parallax background image with black overlay
- Content: "Hi, This is Halen, a professional Photographer" heading
- "Explore Work" button (square, dark bg, white text)
- Slider navigation arrows

### 3. Photography Skills
- White background
- Section heading: "World class photography skills" + description paragraph
- Signature image below text

### 4. Wildlife Photography
- Full-width split layout (50/50)
- Left: wildlife photo (zebra image)
- Right: "Wildlife photography" heading + description + "Explore Work" button (black, square)

### 5. Gallery
- White background
- Section heading: "My world class photography" + description
- 6 gallery items in a 3-column grid (col-xl-4, full-width no-gutters)
- Each item: image + dark overlay on hover with title + category ("Photography / Baby")
- All items labeled "Baby album"

### 6. Testimonials
- White background
- OwlCarousel with 3 testimonials
- Each: "Our Customers Say" heading + blockquote text + circular author photo + name
- Author: Robert Thomson

### 7. Team
- White background with border-bottom
- 3 team member cards in a 3-column grid
- Each: photo (full-width) + name + title ("Photographer") + social icons (Facebook, Twitter, Instagram)
- Team: Milani Mou, Jasmine Pinky, (third member)

### 8. Contact
- Two-column layout:
  - Left (5 cols): "Contact Us" heading + description + address info (address, phone, email) + social icons (Facebook, Twitter, Instagram)
  - Right (7 cols): Google Maps embed (500px height)

### 9. Footer
- Dark background (`#2C2C2C`)
- Copyright text with "Component Dock" link
- Social icons on right: Facebook, Twitter, Instagram

## Requirements

### Feature: Halmark template behaviour

Feature: Halmark — Photography Portfolio Template

#### Scenario: Navbar renders correctly

- **GIVEN** the user is on any viewport
- **THEN** the logo image is visible in the top-left
- **AND** navigation links "Home", "About", "Albums", "Blog", "Pages", "Contact" are visible
- **AND** social icons (Facebook, Twitter, Instagram) are visible on the right
- **AND** the navbar becomes sticky on scroll
- **AND** on mobile viewports a hamburger menu is visible

#### Scenario: Hero slider displays

- **GIVEN** the hero section is in the viewport
- **THEN** a full-width slider with parallax background images is visible
- **AND** the heading about a professional photographer is displayed
- **AND** an "Explore Work" square button is visible
- **AND** slider navigation arrows are present

#### Scenario: Photography Skills section renders

- **GIVEN** the photography skills section is scrolled into view
- **THEN** the heading "World class photography skills" is visible
- **AND** a description paragraph is shown
- **AND** a signature image is displayed

#### Scenario: Wildlife Photography section renders

- **GIVEN** the wildlife photography section is scrolled into view
- **THEN** a wildlife photo is displayed on the left
- **AND** "Wildlife photography" heading with description is on the right
- **AND** an "Explore Work" black button is visible

#### Scenario: Gallery shows 6 items

- **GIVEN** the gallery section is scrolled into view
- **THEN** the heading "My world class photography" is visible
- **AND** 6 gallery items are displayed in a 3-column grid
- **AND** each item has an image with hover overlay (title + category)

#### Scenario: Testimonials carousel works

- **GIVEN** the testimonials section is scrolled into view
- **THEN** a carousel with 3 testimonials is displayed
- **AND** each testimonial has a heading, quote, author photo, and name

#### Scenario: Team section shows 3 members

- **GIVEN** the team section is scrolled into view
- **THEN** 3 team member cards are displayed in a 3-column grid
- **AND** each card has a photo, name, title, and social icons

#### Scenario: Contact section renders

- **GIVEN** the contact section is scrolled into view
- **THEN** "Contact Us" heading with address info is visible on the left
- **AND** a map area is displayed on the right
- **AND** social icons are visible

#### Scenario: Footer renders correctly

- **GIVEN** the footer is in the viewport
- **THEN** a dark background is displayed
- **AND** a copyright notice with "Component Dock" link is present
- **AND** social icons are visible

#### Scenario: Responsive layout adapts

- **GIVEN** the user is on a mobile viewport (width < 768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** gallery/team columns stack vertically
- **AND** the contact section stacks vertically

## Verification checklist

- [ ] All 9 sections render in correct page order
- [ ] Brand color `#444444` used for CTA buttons
- [ ] Poppins font loaded for all text
- [ ] Hero slider with 3 slides and parallax backgrounds
- [ ] Photography Skills section with heading + signature
- [ ] Wildlife Photography split layout
- [ ] Gallery with 6 items in 3-col grid + hover overlays
- [ ] Testimonials carousel with 3 items
- [ ] Team section with 3 members + social icons
- [ ] Contact section with address info + map area
- [ ] Footer with copyright + social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Square buttons (no border-radius) for CTAs
- [ ] Placeholder images via `picsum.photos/seed/halmark-<n>/...`
