# Template: Photopia (Photography Portfolio)

## Purpose

Recreation of ColorLib's "Photosen" template — a minimal photography portfolio website.

- **Source slug:** `photosen`
- **Preview URL:** https://preview.colorlib.com/theme/photosen/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/photosen-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `photopia` (apps/photopia, package @free-react-templates/photopia)

## Design Tokens

Extracted from `css/style.css` and preview HTML on 2026-08-24.

### Colors

| Token      | Hex             | Usage                                            |
| ---------- | --------------- | ------------------------------------------------ |
| dark-bg    | #1a1d20         | Primary dark background                          |
| text-body  | #333333         | Body text                                        |
| text-muted | #777777         | Secondary text                                   |
| text-light | #999999         | Tertiary text                                    |
| border     | #cccccc         | Borders                                          |
| white      | #ffffff         | Navbar text, button outlines, image overlay text |
| black      | #000000         | Image filter, hover backgrounds                  |
| overlay    | rgba(0,0,0,0.4) | Image hover overlay                              |

### Typography

| Role             | Font         | Weight   |
| ---------------- | ------------ | -------- |
| Body             | Josefin Sans | 400, 700 |
| Monospace/accent | Roboto Mono  | 400, 700 |

### Buttons

- **btn-outline-white**: white 2px border, white text, uppercase, 11px font, 0.1em letter-spacing → white bg + black text on hover

### Image Cards

- Grayscale by default (CSS filter)
- Color + scale(1.01) on hover
- Overlay with centered heading + "More Photos" button
- 30px bottom margin between cards

### Layout

- Full-width fluid container
- 3-column grid (col-lg-4)
- Transparent navbar at top
- Simple centered footer with copyright

## Section Structure (from preview DOM)

1. **Header/Nav** — transparent navbar with logo "Photosen" (white), nav links (Home, Gallery dropdown, Services, About, Contact), social icons (Facebook, Twitter, Instagram, YouTube), mobile hamburger menu
2. **Gallery Grid** — 3-column masonry-style grid of photo category cards:
   - Nature, Portrait, People (first row)
   - Architecture, Animals, Sports (second row)
   - Travel, People, Architecture (third row — some repeat)
   - Each card: grayscale image with hover color reveal + centered overlay (category heading + "More Photos" button)
3. **Footer** — simple centered copyright line with heart icon and Component Dock link

## Gherkin Requirements

### Feature: Photopia Photography Portfolio

#### Scenario: Header navigation renders correctly

- **Given** the page loads
- **When** I view the header
- **Then** I see the logo "Photopia" in white
- **And** navigation links: Home, Gallery, Services, About, Contact
- **And** social media icons (Facebook, Twitter, Instagram, YouTube)
- **And** a mobile hamburger menu toggle on small screens

#### Scenario: Gallery grid displays photo categories

- **Given** the page loads
- **When** I view the gallery section
- **Then** I see a 3-column grid of photo category cards
- **And** each card has a grayscale image that becomes color on hover
- **And** each card has a centered overlay with category name and "More Photos" button
- **And** the categories include: Nature, Portrait, People, Architecture, Animals, Sports, Travel

#### Scenario: Image hover effect works

- **Given** the gallery is visible
- **When** I hover over a photo card
- **Then** the image transitions from grayscale to color
- **And** the image scales up slightly (1.01x)
- **And** a dark overlay appears with the category heading and button

#### Scenario: Gallery button links work

- **Given** the gallery is visible
- **When** I click "More Photos" on a category card
- **Then** I navigate to the single gallery page (placeholder)

#### Scenario: Footer displays correctly

- **Given** the page loads
- **When** I scroll to the footer
- **Then** I see a centered copyright line
- **And** the footer links to https://www.componentdock.com/

#### Scenario: Mobile menu works

- **Given** the viewport is mobile width
- **When** I tap the hamburger menu icon
- **Then** a mobile navigation menu slides in
- **And** I can navigate to any page from the mobile menu
- **And** I can close the mobile menu with the close button

## Verification Checklist

- [ ] All sections rendered in correct order (header → gallery → footer)
- [ ] Fonts: Josefin Sans (body), Roboto Mono (accent)
- [ ] Gallery grid is 3 columns on desktop
- [ ] Images are grayscale by default, color on hover
- [ ] Image hover includes scale + overlay effect
- [ ] "More Photos" buttons have white outline style
- [ ] Social icons in header (Facebook, Twitter, Instagram, YouTube)
- [ ] Mobile hamburger menu works
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage on all components
- [ ] All images use picsum.photos placeholders
