# Template: MealMuse (Restaurant)
<!-- prep-status: shipped-as=flavor -->
> **SHIPPED-UNDER** — the ColorLib `luto` design this prep describes already
> ships as `apps/flavor` (<https://flavor.free.componentdock.com>).
> Do not scaffold `apps/mealmuse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-flavor/spec.md`.

## Purpose

Recreation of ColorLib "Luto" restaurant template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** [colorlib.com/wp/template/luto/](https://colorlib.com/wp/template/luto/)
- **Preview:** [preview.colorlib.com/theme/luto/](https://preview.colorlib.com/theme/luto/)
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/luto-free-template.jpg`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest + Testing Library
- **Deploy:** `mealmuse.free.componentdock.com`

## Design Tokens

Extracted from the live preview's `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Primary brand color | `#FF6107` (orange) | Buttons, links, active nav, social icons, text selection |
| Primary hover | `#ff7121` | Button hover state |
| Body background | `#FBFBFB` (off-white) | Page background |
| Body text color | `#7d7d7d` (medium grey) | Paragraphs, spans |
| Heading color | `#404044` (dark charcoal) | h1–h6 |
| Intro bar background | `#302939` (dark purple-grey) | Info bar below hero |
| Footer background | `#303030` (dark charcoal) | Footer section |
| Overlay color | `rgba(0,0,0,0.5)` on `#303030` | Hero/parallax overlays |
| Font – body/UI | `"Poppins", Arial, sans-serif` | Paragraphs, buttons, nav |
| Font – headings | `"Lora", Georgia, serif` | h1–h6, menu items, testimonial quotes |
| Button shape | `border-radius: 30px` (pill) | All `.btn` elements |
| Button font | `"Lora", serif`, uppercase, `letter-spacing: 2px` | Button text |
| Button primary bg | `#FF6107`, text white, `border: 2px solid #FF6107` | CTA buttons |
| Button outline | `border: 2px solid #b0b0b0`, transparent bg | Secondary actions |
| Newsletter subscribe btn | `border-radius: 0` (square), full width | Footer subscribe |

## Section Structure (page order)

1. **Navbar** — fixed top, transparent over hero; logo (cutlery icon + "MeaLMuse" in pill badge); hamburger toggle on mobile
2. **Hero Slider** — fullscreen flexslider with 4 slides; each slide: dark overlay (`#303030` @ 50% opacity), food background image, cutlery icon, H1 headline, subtitle paragraph, "Book a table" pill button; mouse scroll indicator at bottom
3. **Info Bar** — 4-column row on dark purple-grey (`#302939`) background; Address, Opening Time, Phone, Email — each with icon + label + details in white text
4. **About Section** — light grey background; left column: "Welcome to MealMuse" label + H2 heading + paragraph; right column: two food images in 2-column grid
5. **Featured Dishes (Grid 1)** — heading with cutlery icon + H2 + subtitle; 3-column grid of dish cards: background image + overlay + dish name
6. **Parallax Video CTA** — full-width parallax background image with dark overlay; right-aligned white box: H2 + paragraph + "Watch Video" outline button (play icon)
7. **Featured Dishes (Grid 2)** — identical layout to section 5, different dishes
8. **Testimonials** — parallax background with dark overlay; H2 "Our Customer Says"; owl carousel of blockquote cards with quote text + author name
9. **Full Menu** — overlapping section (negative margin); heading with cutlery icon; tabbed interface (Main, Desserts, Drinks); each tab: 2-column list of menu items with thumbnail image, price badge, dish name, category tags
10. **Reservation** — parallax background with dark overlay; H2 "Make A Reservation"; 2-column form: Fullname, Email, Phone, Date (with calendar icon), Time (dropdown), Number of Guests, Submit button (full width, square corners)
11. **Footer** — dark (`#303030`) background; 4 columns: Brand + description + social icons (FB, Twitter, Google+, Dribbble in orange), Latest Blog (3 entries with thumbnail + date + title), Instagram (2x2 image grid), Newsletter (email input + subscribe button); copyright bar with attribution + demo image credits

## Requirements

### Feature: MealMuse Restaurant Template

#### Scenario: Navbar displays logo and navigation

- **GIVEN** the user visits the page
- **THEN** the navbar shows the MealMuse logo with cutlery icon
- **AND** navigation links include Home, Menu, Specialties, Reservation, Blog, About, Contact

#### Scenario: Hero slider rotates through slides

- **GIVEN** the hero section is visible
- **THEN** 4 slides rotate automatically
- **AND** each slide has a headline, subtitle, and "Book a table" CTA button
- **AND** a mouse scroll indicator is visible at the bottom

#### Scenario: Info bar shows restaurant details

- **GIVEN** the info bar is below the hero
- **THEN** it displays 4 columns: Address, Opening Time, Phone, Email
- **AND** each column has an icon, heading, and detail text on dark background

#### Scenario: About section shows welcome message and images

- **GIVEN** the about section is visible
- **THEN** it displays "Welcome to MealMuse" label
- **AND** an H2 heading about food
- **AND** a paragraph description
- **AND** two food images in a 2-column grid

#### Scenario: Featured dishes grid shows dish cards

- **GIVEN** the featured dishes section is visible
- **THEN** 3 dish cards are displayed in a grid
- **AND** each card shows a food image and dish name

#### Scenario: Parallax video CTA section

- **GIVEN** the video CTA section is visible
- **THEN** it shows a parallax background with dark overlay
- **AND** a white content box with H2, description, and "Watch Video" outline button

#### Scenario: Testimonials carousel

- **GIVEN** the testimonials section is visible
- **THEN** customer quotes display in a carousel
- **AND** each quote shows text and author name
- **AND** the section has a parallax background with dark overlay

#### Scenario: Tabbed menu section

- **GIVEN** the menu section is visible
- **THEN** tabs for Main, Desserts, and Drinks are displayed
- **AND** clicking a tab shows the corresponding menu items
- **AND** each item shows an image, price, name, and category

#### Scenario: Reservation form

- **GIVEN** the reservation section is visible
- **THEN** the form shows fields for Fullname, Email, Phone, Date, Time, and Guests
- **AND** the submit button spans full width with square corners

#### Scenario: Footer layout

- **GIVEN** the footer is visible
- **THEN** it shows 4 columns: brand info, blog entries, Instagram grid, and newsletter
- **AND** social icons are displayed in orange
- **AND** a copyright line is present at the bottom

#### Scenario: Responsive mobile layout

- **GIVEN** the user views on mobile viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** sections stack vertically
- **AND** the hero text remains centered and readable

## Verification checklist

- [ ] All 11 sections present in correct order
- [ ] Fonts: Poppins (body/UI) + Lora (headings) loaded via Google Fonts
- [ ] Brand orange `#FF6107` used for buttons, links, social icons, active states
- [ ] Dark backgrounds: intro bar (`#302939`), overlays (`rgba(0,0,0,0.5)`), footer (`#303030`)
- [ ] Pill-shaped buttons (`border-radius: 30px`) for hero CTAs
- [ ] Square-corner subscribe button in footer newsletter
- [ ] Hero slider with 4 slides, dark overlay, centered text, CTA button
- [ ] Info bar with 4 icon+text columns on dark background
- [ ] About section with 2 food images in grid
- [ ] Featured dishes grid (3 cards) appears twice
- [ ] Parallax sections with `background-attachment: fixed` effect
- [ ] Tabbed menu with Main/Desserts/Drinks tabs and item listings with prices
- [ ] Reservation form with all fields and full-width submit button
- [ ] Footer with 4 columns: brand/social, blog, instagram, newsletter
- [ ] Copyright line in footer (Component Dock attribution replaces Colorlib)
- [ ] No Colorlib references in app code (provenance in spec + TEMPLATES.md only)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] All placeholder images via `https://picsum.photos/seed/mealmuse-<n>/<w>/<h>`
- [ ] 100% test coverage on all components
- [ ] `npm run verify:app mealmuse` passes
