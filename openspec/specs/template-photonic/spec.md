# Spec: Photonic

> Recreation of ColorLib "Fotograp" (https://colorlib.com/wp/template/fotograp/)
> Preview: https://preview.colorlib.com/theme/fotograp/

## Purpose

Photonic is a professional photography portfolio template. It features a clean navbar with dropdown navigation, a full-width hero section with a photographer profile and specialties, a 4-column services grid showcasing photography types, a testimonials section with star ratings, a photo gallery grid with hover overlays, and a dark footer with navigation links and Component Dock attribution. The template uses Josefin Sans font and a purple/indigo brand color (#7971ea).

## Design Tokens

Extracted from the ColorLib Fotograp preview CSS (`css/style.css`):

| Token          | Value                        | Usage                                                |
| -------------- | ---------------------------- | ---------------------------------------------------- |
| Brand primary  | `#7971ea`                    | Purple/indigo — logo dot, hover states, icon accents |
| Surface        | `#edf0f5`                    | Hero background, service icon backgrounds            |
| Surface alt    | `#f4f5f9`                    | Testimonials section background                      |
| Text primary   | `#25262a`                    | Dark headings and body text                          |
| Text secondary | `#737373` / `#999`           | Gray — captions, descriptions                        |
| White          | `#FFFFFF`                    | Navbar, services, gallery backgrounds                |
| Dark footer    | `#1a1a2e` (gray-900)         | Footer background                                    |
| Font body      | `"Josefin Sans", sans-serif` | All text                                             |
| Button radius  | `0.375rem` (rounded-md)      | CTA buttons                                          |

### Buttons

- Primary buttons: `#7971ea` background, white text, rounded
- Hover: darker purple `#5a52e0`

### Section Backgrounds

- Navbar: white with bottom border
- Hero: full-width with background image + dark overlay
- Services: white
- Testimonials: `#f4f5f9` (surface-alt)
- Gallery: white
- Footer: dark `#111827` (gray-900)

## Requirements

### Requirement: Navigation Bar

The template SHALL render a white navbar with the brand name "photonic." (purple dot accent), horizontal navigation links (Home, Photography dropdown, Services, About, Contact), social media icons (Facebook, Twitter, Instagram, Youtube), and a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **WHEN** the page loads on desktop
- **THEN** the navbar displays "photonic." with a purple dot
- **THEN** all 5 navigation links are visible
- **THEN** social media icons are visible

#### Scenario: Photography dropdown

- **WHEN** the user hovers over "Photography"
- **THEN** a dropdown appears with Nature, Portrait, Wedding
- **WHEN** the user moves the mouse away
- **THEN** the dropdown closes

#### Scenario: Mobile menu toggle

- **WHEN** the user taps the hamburger icon on mobile
- **THEN** the mobile navigation menu opens
- **THEN** all navigation links are visible
- **WHEN** the user taps a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a full-width hero section with a background image, dark overlay, circular profile portrait, the name "Ben Botsford", the subtitle "a Professional Photographer", the location "Live in Oakland", photography specialty tags, and a "View My Work" CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero displays the photographer's name and subtitle
- **THEN** the location "Live in Oakland" is shown
- **THEN** specialty tags (Nature Photography, Portrait Photography) are visible
- **THEN** a "View My Work" button is rendered

### Requirement: Services Section

The template SHALL render a 4-column grid of photography service cards, each with an icon, title, and description.

#### Scenario: Services grid

- **WHEN** the user scrolls to the services section
- **THEN** 4 service cards are displayed: Nature Photography, Portrait Photography, Wedding Photography, Food & Drink Photography
- **THEN** each card has an icon, title, and description text

### Requirement: Testimonials Section

The template SHALL render a testimonials section with 3 testimonial cards, each containing a 5-star rating, a quote, and an author name.

#### Scenario: Testimonials content

- **WHEN** the user scrolls to the testimonials section
- **THEN** 3 testimonial cards are displayed
- **THEN** each card shows 5 star icons, a quote, and an author name

### Requirement: Gallery Section

The template SHALL render a photo gallery grid with 6 items, each displaying a photo with a hover overlay showing the title and photo count.

#### Scenario: Gallery grid

- **WHEN** the user scrolls to the gallery section
- **THEN** the heading "My Photography" is displayed
- **THEN** 6 gallery items are shown in a responsive grid
- **THEN** each item has an image with alt text and a hover overlay

### Requirement: Footer

The template SHALL render a dark footer with navigation links, social media icons, a copyright notice, and a "More templates at Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** navigation links are displayed
- **THEN** social media icons are visible
- **THEN** a copyright line is shown
- **THEN** "More templates at Component Dock" links to componentdock.com

### Requirement: Page Composition

The template SHALL compose all sections in a single page with the document title set.

#### Scenario: Full page render

- **WHEN** the Photonic app is rendered
- **THEN** all sections are composed in order: Navbar, Hero, Services, Testimonials, Gallery, Footer
- **AND** the document title is "Photonic — Photography Portfolio Template"
