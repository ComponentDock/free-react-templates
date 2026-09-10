# Template: Forkcraft (Restaurant)

## Purpose

Recreation of the ColorLib **Caviar** premium restaurant template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source template:** Caviar — https://colorlib.com/wp/template/caviar/
- **Live preview:** https://preview.colorlib.com/theme/caviar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript strict
- **Package:** `@free-react-templates/forkcraft`
- **Deploy target:** `https://forkcraft.free.componentdock.com`

## Design tokens (from preview CSS extraction)

| Token | Value | Notes |
|---|---|---|
| Font (body/headings) | `'Open Sans', sans-serif` | Google Fonts import; weights 300/400/600/700 |
| Font (buttons) | `'Work Sans', sans-serif` | Google Fonts import; weights 400–700 |
| Brand color | `#ff0000` | Red — used on buttons, hover states, preloader accent |
| Body background | `#fafafa` | Off-white page background |
| Section background (alternating) | `#f9f9f9` | Light gray for About Us section |
| Headings color | `#000000` | Black, 700 weight |
| Body text color | `rgba(0, 0, 0, 0.8)` | Semi-transparent black |
| Button background | `#ffffff` | White button with `#b2b2b2` border |
| Button border | `1px solid #b2b2b2` | Light gray border |
| Button hover color | `#ff0000` | Red on hover |
| Button dimensions | `min-width: 180px; height: 54px` | Flat style, border-radius: 0 |
| Hero heading | `52px, white` | Over dark background overlay |
| Hero overlay | `rgba(0, 0, 0, 0.5)` | Semi-transparent black over background image |
| Footer background | `#333333` | Dark gray |
| Footer text | `rgba(255, 255, 255, 0.2)` | Muted white, 14px |
| Form inputs | `border-bottom: 1px solid #c1c1c1` | Bottom-border-only style, transparent bg |
| Section vertical padding | `150px` | Generous spacing between sections |
| Scroll-to-top button | `#ff0000 bg, white text, border-radius: 3px` | Small floating button |

## Design notes (from screenshot)

The original Caviar template has a **luxury, dark-overlay restaurant aesthetic**. The hero section features a large parallax food image with a semi-transparent dark overlay, overlaid white serif-like heading, and a crisp white CTA button. The overall palette is minimal — near-white backgrounds, black text, and a single accent red (#ff0000). The About section uses a two-column layout with restaurant food images alongside descriptive text. The Dish Menu section features a grid of plated food images with names and prices, with a decorative watermark text "Special" in the background. Awards are displayed as grayscale logos in a horizontal row. Testimonials use a carousel with circular avatar thumbnails. The Reservation section splits into a form (left) and a large hero image (right) with bottom-border-only inputs for a clean, minimal feel. The footer is dark (#333) with centered logo and muted copyright text.

## Gherkin requirements

### Feature: Forkcraft Restaurant Template

#### Scenario: Page loads with all sections in correct order
- **Given** a user visits the Forkcraft homepage
- **Then** the page displays sections in this order: Navbar, Hero, About Us, Special Dishes, Awards, Testimonials, Reservation, Footer

#### Scenario: Navbar displays with correct navigation links
- **Given** the page loads
- **Then** the navbar shows the brand name "forkcraft"
- **And** navigation links include: Home, About Us, Menu, Awards, Testimonials, Reservation, Contact
- **And** a search icon button is visible in the navbar
- **And** the navbar becomes sticky on scroll

#### Scenario: Hero section shows fullscreen background with overlay
- **Given** the hero section is visible
- **Then** a large background image covers the full viewport width
- **And** a semi-transparent dark overlay (rgba 0,0,0,0.5) sits over the image
- **And** a heading "Lorem Ipsum" is displayed in white at 52px
- **And** a paragraph of descriptive text is shown below the heading
- **And** a "Reservation" CTA button is present (white bg, border-radius 0)
- **And** social media icons (Facebook, Instagram, Twitter) are displayed in a sidebar on the left

#### Scenario: Hero slider navigates between slides
- **Given** the hero section has multiple slides
- **Then** a next-slide navigation arrow is visible
- **And** clicking the arrow transitions to the next slide with a different background image

#### Scenario: About Us section displays restaurant information
- **Given** the About Us section is visible
- **Then** a section heading "About Us" is displayed
- **And** two sub-sections are shown: one with image-left + text-right, another with text-left + image-right
- **And** each sub-section has a subtitle span (e.g. "restaurant style", "our chef") and a paragraph of text

#### Scenario: Special Dishes section shows menu grid
- **Given** the Special Dishes section is visible
- **Then** a centered heading "Special" is displayed
- **And** a "View The Menu" CTA button is shown
- **And** a 3-column grid displays dish items, each with an image, name, and price
- **And** at least 3 dish items are shown

#### Scenario: Awards section displays partner logos
- **Given** the Awards section is visible
- **Then** an "Awards" heading is shown on the left
- **And** 5 award/partner logo images are displayed in a horizontal row on the right
- **And** logos are evenly spaced with flexbox

#### Scenario: Testimonials section shows customer reviews
- **Given** the Testimonials section is visible
- **Then** a centered heading "Testimonials" is displayed
- **And** a carousel of testimonials is shown
- **And** each testimonial has a circular avatar image, a name, a subtitle, and a quote paragraph
- **And** at least 3 testimonials are present

#### Scenario: Reservation section has a form and image
- **Given** the Reservation section is visible
- **Then** a split layout is shown: form on the left, hero image on the right
- **And** the form contains fields: date picker, time picker, persons (text), last name (text), message (textarea)
- **And** a "Reserve Your Desk" submit button is present
- **And** form inputs have bottom-border-only styling (no full border)
- **And** the right side shows a restaurant/food background image

#### Scenario: Footer displays with dark background
- **Given** the footer is visible
- **Then** the footer has a dark gray background (#333333)
- **And** the brand name "forkcraft" is displayed centered
- **And** a copyright line with the current year is shown
- **And** a link to https://www.componentdock.com/ is present (branded "Component Dock")

#### Scenario: Page is responsive on mobile
- **Given** a user views the page on a viewport width less than 768px
- **Then** the navbar collapses into a hamburger menu
- **And** sections stack vertically in a single column
- **And** the reservation form and image stack vertically
- **And** the dishes grid changes to 1 or 2 columns

## Verification checklist

- [ ] All 8 sections render in correct order
- [ ] Navbar is sticky with correct links and search icon
- [ ] Hero background image covers viewport with dark overlay
- [ ] Hero slider navigates between slides
- [ ] About Us has two sub-sections with alternating image/text layout
- [ ] Special Dishes shows 3-column grid with dish images, names, prices
- [ ] Awards shows 5 logos in horizontal row
- [ ] Testimonials carousel with avatars, names, quotes
- [ ] Reservation form with bottom-border inputs + side image
- [ ] Footer is dark (#333) with brand + copyright + Component Dock link
- [ ] Design tokens match: Open Sans, Work Sans, #ff0000 accent, #fafafa bg
- [ ] Responsive layout works on mobile viewports
- [ ] No ColorLib references in app code (only in this spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
