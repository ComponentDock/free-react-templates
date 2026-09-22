# Template: Snugden (Hotel & Restaurant)

## Purpose

Recreation of the ColorLib "Cozy" template — a warm, inviting hotel & restaurant
landing page with hero slider, reservation form, tabbed services, room gallery,
parallax, menu section, testimonials, blog, events, Instagram feed, and footer.

- **Source:** [Cozy](https://colorlib.com/wp/template/cozy/)
- **Preview:** https://preview.colorlib.com/theme/cozy/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| Primary/Accent | `#ff6138` | Orange-red — CTAs, highlights, active nav, button fills |
| Dark | `#404044` | Nav background, text on light sections, slider overlays |
| Footer Dark | `#2c2727` | Footer background |
| Light BG | `#f0f0f0` / `bg-light` | Section alternating backgrounds |
| Text Muted | `#a5a5ab` | Secondary text, meta |
| Text Light | `#c0c0c3` | Divider-like elements |
| White | `#ffffff` | Card backgrounds, text on dark |
| Font — Display | `"Playfair Display", Georgia, serif` | Headings, hero text |
| Font — Body | `"Muli", Arial, sans-serif` | Body text, nav, buttons |
| Button Radius | `30px` (pill) | Primary buttons are pill-shaped |
| Border Radius | `0px` | Sections and cards are sharp/rectangular |
| Button Colors | `bg: #ff6138`, `text: #fff`, `hover: #ff4312` | Consistent across all CTAs |
| Slider Overlay | `rgba(64, 64, 68, 0.7)` | Dark semi-transparent on hero images |
| Parallax BG | `#404044` | Dark parallax section |

## Section Structure (top → bottom)

1. **Navbar** — Dark background (`#404044`), logo left, nav links right, transparent on top.
2. **Hero Slider** — Full-width carousel (owl-carousel style), 3 slides with dark overlay, left-aligned headline + CTA button.
3. **Reservation Form** — Inline booking form (date pickers + guest selector + submit), right-aligned on dark overlay background.
4. **Services (Tabbed)** — Left column: vertical nav-pills with 8 tabs (Master Bedrooms, Breakfast Buffet, Fitness Center, 24h Reception, Sea View Balcony, Pool & Spa, Free WiFi, Restaurant & Bar). Right column: tab content panel. `bg-light`.
5. **Rooms Gallery** — 4-column grid of room cards (Double, Family, Deluxe, Suite) with image, name, price, CTA. `bg-white`.
6. **Parallax** — Full-width parallax image with heading "Conference Centre".
7. **Menu / Restaurant** — Tabbed menu with categories (Starters, Main Courses, Drinks, Desserts), food items with image + name + price. `bg-light`.
8. **Testimonials** — Carousel of guest reviews with name, role, quote. `bg-white`.
9. **Blog** — 3-column grid of blog cards with image, date, title, excerpt. `bg-light`.
10. **Events** — 2-column layout with event images and details.
11. **Instagram** — Grid of Instagram photos with dark overlay and count.
12. **Footer** — Dark background (`#2c2727`), 4-column layout: About/Logo, Opening Hours, Contact Info, Newsletter signup.

## Gherkin Requirements

### Navbar
- **Scenario: Navbar displays on page load**
  - Given the user visits the Snugden homepage
  - Then a dark-background navbar is visible at the top
  - And the logo text "Snugden" is displayed on the left
  - And navigation links (Home, Rooms, Restaurant, Gallery, About, Blog, Contact) are visible
- **Scenario: Navbar becomes sticky on scroll**
  - Given the user scrolls past the hero section
  - Then the navbar remains fixed at the top of the viewport
  - And the background becomes solid dark

### Hero Slider
- **Scenario: Hero displays welcome message**
  - Given the page loads
  - Then a full-width hero slider is visible
  - And the heading "Welcome to Snugden" is displayed
  - And a call-to-action button "Book Now" is visible
- **Scenario: Hero slides rotate**
  - Given the hero slider is visible
  - Then the slider rotates through at least 2 slides
  - And each slide has a different background image and text

### Reservation Form
- **Scenario: Reservation form is visible**
  - Given the user scrolls to the reservation section
  - Then a booking form with date inputs and guest selector is visible
  - And a submit button is present
- **Scenario: Reservation form validates dates**
  - Given the user clicks submit with empty date fields
  - Then the form does not submit (client-side validation)

### Services
- **Scenario: Services section shows tabbed content**
  - Given the user scrolls to the services section
  - Then 8 service tabs are visible in a vertical navigation
  - And the first tab (Master Bedrooms) is active by default
  - And the corresponding content panel is displayed
- **Scenario: Clicking a tab shows different content**
  - Given the services section is visible
  - When the user clicks "Pool & Spa" tab
  - Then the content panel updates to show pool and spa information

### Rooms Gallery
- **Scenario: Rooms are displayed in a grid**
  - Given the user scrolls to the rooms section
  - Then 4 room cards are displayed in a row
  - And each card shows room name, price, and a view button
- **Scenario: Room cards have hover effect**
  - Given the rooms gallery is visible
  - When the user hovers over a room card
  - Then a visual hover effect is applied (overlay or scale)

### Parallax Section
- **Scenario: Parallax section displays**
  - Given the user scrolls to the parallax section
  - Then a full-width dark parallax background is visible
  - And the heading "Conference Centre" is displayed over it

### Menu Section
- **Scenario: Menu section shows categorized food items**
  - Given the user scrolls to the menu section
  - Then tab navigation for menu categories is visible
  - And food items with name and price are displayed
- **Scenario: Menu categories switch**
  - Given the menu section is visible
  - When the user clicks a different category tab
  - Then the displayed food items update accordingly

### Testimonials
- **Scenario: Testimonials section displays guest reviews**
  - Given the user scrolls to the testimonials section
  - Then at least one guest review with quote, name, and role is visible
  - And a carousel navigation (dots or arrows) is available
- **Scenario: Testimonial carousel advances**
  - Given the testimonials section is visible
  - When the user clicks the next arrow
  - Then the next testimonial slides into view

### Blog
- **Scenario: Blog section shows recent posts**
  - Given the user scrolls to the blog section
  - Then 3 blog post cards are displayed
  - And each card shows an image, date, title, and excerpt
- **Scenario: Blog cards link to posts**
  - Given the blog section is visible
  - When the user clicks a blog card title
  - Then a link is followed (or the element is an anchor)

### Events
- **Scenario: Events section displays**
  - Given the user scrolls to the events section
  - Then event cards with images and descriptions are visible

### Instagram
- **Scenario: Instagram grid displays**
  - Given the user scrolls to the Instagram section
  - Then a grid of Instagram-style photo thumbnails is visible
  - And a photo count overlay is shown on each image

### Footer
- **Scenario: Footer displays information columns**
  - Given the user scrolls to the footer
  - Then a dark background footer is visible
  - And sections for About, Opening Hours, Contact, and Newsletter are present
- **Scenario: Footer links to Component Dock**
  - Given the footer is visible
  - Then a link to "https://www.componentdock.com/" is present
  - And the link text includes "Component Dock"
- **Scenario: Newsletter signup in footer**
  - Given the footer is visible
  - Then a newsletter email input and submit button are present

## Verification Checklist

- [ ] All 12 sections render in correct order
- [ ] Navbar is sticky on scroll
- [ ] Hero slider auto-rotates
- [ ] Reservation form has date inputs and guest selector
- [ ] Services tabs switch content
- [ ] Rooms gallery shows 4 cards with hover effects
- [ ] Parallax section has background image with heading overlay
- [ ] Menu section tabs switch food items
- [ ] Testimonials carousel works
- [ ] Blog shows 3 cards
- [ ] Events section renders
- [ ] Instagram grid renders with overlay count
- [ ] Footer has all 4 columns + Component Dock link
- [ ] Newsletter form is present
- [ ] All fonts: Playfair Display (headings), Muli (body)
- [ ] Brand color #ff6138 used for CTAs and accents
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests at 100% coverage
