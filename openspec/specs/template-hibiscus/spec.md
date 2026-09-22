# Template: Hibiscus (Hotel)

## Purpose

Recreation of ColorLib "Hiroto" hotel template.

- Source slug: `hiroto`
- Source URL: https://colorlib.com/wp/template/hiroto/
- Preview URL: https://preview.colorlib.com/theme/hiroto/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Hotel / Resort / Reservation

## Design tokens (extracted from preview)

### Colors
- Brand accent: `#E9AD28` (warm gold — used on headings h5, buttons, highlights)
- Primary dark: `#19191A` (near-black — section titles, headings h2)
- Text primary: `#111111` (h1-h6 base)
- Body text: `#777C81` (muted gray — paragraph text)
- Muted alt: `#8B9094` (secondary muted text)
- Light background: `#F9F8F6` (cream/off-white section background)
- Footer dark: `#1a1a1a` / `#1d1c1c` (footer bg)
- White: `#ffffff` (hero text, button text, footer text)

### Typography
- Headings font: `"Barlow Condensed", sans-serif` (weight 600, condensed)
- Body font: `"DM Sans", sans-serif` (weight 400)
- h1: 70px, h2: 36px (hero h2: 72px), h3: 30px, h4: 24px, h5: 18px, h6: 16px
- Section subheadings (h5) use gold `#E9AD28`, uppercase, letter-spacing 2-4px

### Buttons
- Primary: gold `#E9AD28` bg, white text, letter-spacing 2px, no border-radius (square/flat)
- Padding: `14px 20px 12px`
- Secondary/book now: same style

### Section backgrounds
- Hero: dark background image (`hero.jpg`), text overlay with white h2
- Choose Us / parallax: dark background image (`chooseus-bg.jpg`)
- Services, Rooms, Testimonial, Gallery, Latest Blog: white/light (`#F9F8F6` or default)
- Footer: dark background image (`footer-bg.jpg`), dark overlay
- Grid/layout: Bootstrap 12-col grid (col-lg-3, col-lg-4, col-lg-6 etc.)
- Spacing: `.spad` = 100px top + 100px bottom padding

### Other tokens
- Border radius: `0` (flat buttons), `60px` (loader), `50%` (circular images)
- Smooth scroll behavior

## Requirements

### Requirement: Navbar displays brand and navigation links

The navbar SHALL display the brand logo and navigation links: Home, Rooms, About Us, Pages, Blog, Contact, plus a "Book Now" CTA button.

#### Scenario: Navbar renders on desktop

- **WHEN** the page loads
- **THEN** the navbar shows the brand logo/text
- **AND** navigation links are visible: Home, Rooms, About Us, Pages, Blog, Contact
- **AND** a "Book Now" button/link is visible on the right side

#### Scenario: Navbar toggles mobile menu

- **WHEN** the user clicks the hamburger menu icon
- **THEN** the offcanvas mobile menu opens from the right
- **AND** the menu shows all navigation links plus login/register options
- **AND** clicking a navigation link closes the menu

#### Scenario: Navbar shows top bar with contact info

- **WHEN** the page loads
- **THEN** a top bar shows the address "96 Ernser Vista Suite 437, NY, US"
- **AND** the phone number "(123) 456-78-910" is visible

### Requirement: Hero section displays hotel heading with booking form

The hero SHALL display a full-width background image with heading text and a booking search form with check-in, check-out, room type, and search button.

#### Scenario: Hero renders heading

- **WHEN** the page loads
- **THEN** the subheading "WELCOME HIROTO" is visible (gold, uppercase)
- **AND** the heading "Experience the greatest for you holidays." is visible (white, large)
- **AND** a "BOOK NOW" button is visible

#### Scenario: Hero booking form renders fields

- **WHEN** the page loads
- **THEN** a booking form is visible with check-in date, check-out date, room type select, and search button
- **AND** the room type dropdown is interactive

### Requirement: About section describes the hotel

The about section SHALL display hotel description with an image and amenities highlights.

#### Scenario: About renders hotel info

- **WHEN** the page loads
- **THEN** the subheading "ABOUT US" is visible (gold, uppercase)
- **AND** the heading "Welcome Hiroto Hotel In Street L'Abreuvoir" is visible
- **AND** a descriptive paragraph is present
- **AND** a hotel image is displayed on the right side

### Requirement: Services section shows hotel amenities

The services section SHALL display 6 service cards in a 3-column grid.

#### Scenario: Services renders all cards

- **WHEN** the page loads
- **THEN** 6 service items are visible: Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant
- **AND** each service card shows an icon and heading

### Requirement: Rooms section shows hotel rooms

The rooms section SHALL display 4 room cards in a row, each with a background image and name.

#### Scenario: Rooms renders all cards

- **WHEN** the page loads
- **THEN** 4 room cards are visible labeled "Deluxe Room"
- **AND** each card has a background image and a "Booking Now" link

### Requirement: Choose Us / Why Choose Us parallax section

The Choose Us section SHALL display a dark parallax background with text about hotel features and a row of icon-based feature highlights.

#### Scenario: Choose Us renders content

- **WHEN** the page loads
- **THEN** a dark parallax background image is visible
- **AND** descriptive text about the hotel is shown
- **AND** 4-8 icon-based feature highlights are displayed

### Requirement: Testimonial section shows guest reviews

The testimonial section SHALL display an owl-carousel slider with guest testimonial cards.

#### Scenario: Testimonial renders review

- **WHEN** the page loads
- **THEN** a testimonial slider is visible
- **AND** each testimonial shows a profile photo, author name, title, and quote text
- **AND** social media icon links are present below each testimonial

### Requirement: Gallery section shows hotel images

The gallery section SHALL display a grid/slider of hotel images.

#### Scenario: Gallery renders images

- **WHEN** the page loads
- **THEN** at least 4 gallery images are visible
- **AND** the gallery uses an owl-carousel slider layout

### Requirement: Latest Blog section shows news articles

The latest blog section SHALL display 4 blog post cards in a row.

#### Scenario: Blog renders posts

- **WHEN** the page loads
- **THEN** 4 blog post cards are visible
- **AND** each card shows a post image, a heading, and a "Read More" link

### Requirement: Footer displays contact info and links

The footer SHALL display contact information, quick links, a newsletter subscription form, and social media links on a dark background image.

#### Scenario: Footer renders content

- **WHEN** the page loads
- **THEN** the footer shows the phone number "(123) 456-78-91096"
- **AND** Quick Links are visible: Home, Booking, About Us, Review, Contact
- **AND** Services links: Our Room, Restaurants, Payments, Events
- **AND** a newsletter subscription email input with "Subscribe" button is present
- **AND** social media icon links are visible
- **AND** copyright text with "Component Dock" link is present

#### Scenario: Footer has dark background

- **WHEN** the page loads
- **THEN** the footer has a dark background image overlay

## Verification checklist

- [ ] All sections from the original template are present in order: Header/Nav → Hero (with booking form) → About → Services → Rooms → Choose Us → Testimonial → Gallery → Latest Blog → Footer
- [ ] Design tokens match: brand gold `#E9AD28`, dark bg `#19191A`, fonts Barlow Condensed + DM Sans, flat buttons
- [ ] Section backgrounds: hero (dark image), choose us (dark parallax image), rest (white/light), footer (dark image)
- [ ] All 6 service cards render with correct names
- [ ] All 4 room cards render
- [ ] Testimonial carousel slides
- [ ] Gallery carousel slides
- [ ] Blog post cards render with Read More links
- [ ] Footer links and newsletter form functional
- [ ] Mobile responsive: offcanvas menu, stacked layouts
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] `public/CNAME` contains `hibiscus.free.componentdock.com`
- [ ] `homepage` in `package.json` set to `https://hibiscus.free.componentdock.com`
