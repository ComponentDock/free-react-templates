# Template: Motorpath (Car Rental)

## Purpose

Recreation of ColorLib "Autoroad" — a car rental / automotive service website template.

- **Source slug:** `autoroad`
- **Preview URL:** https://preview.colorlib.com/theme/autoroad/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/autoraod-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Car Rental / Automotive Services

## Design Tokens

Extracted from the live preview CSS (`style.css`) and DOM analysis.

### Colors

| Token             | Value                        | Usage                                                               |
| ----------------- | ---------------------------- | ------------------------------------------------------------------- |
| primary-orange    | `#fc983c`                    | Primary CTA buttons, search button, hover outline                   |
| accent-gold       | `#f7b71d`                    | Secondary accent (available in palette, not used on main CTA)       |
| bootstrap-primary | `#007bff`                    | Default Bootstrap primary (present in CSS but overridden by orange) |
| black             | `#000`                       | Navbar bg, car detail buttons (`.btn-black`), footer bg             |
| dark-bg           | `#3c312e`                    | `ftco-bg-dark` class — alternative dark section bg                  |
| dark-charcoal     | `#1d2124`                    | Dark Bootstrap utility bg                                           |
| body-text         | `#3c312e`                    | Body paragraph text (dark brownish-black)                           |
| white             | `#fff`                       | Page backgrounds, hero text, form text on dark overlays             |
| bg-light          | `#f7f7f7`                    | Light section backgrounds                                           |
| bg-off-white      | `#fafafa`                    | Alternate light section bg                                          |
| overlay-dark      | `rgba(0,0,0,0.5)`            | Hero overlay, parallax section overlay                              |
| overlay-light     | `rgba(255,255,255,0.85-0.9)` | Testimonial card bg                                                 |

### Typography

- **Font family:** `"Poppins", sans-serif` (weights: 300, 400, 500, 600, 700, 800)
- **Body:** `1rem`, `line-height: 1.7`, `font-weight: 400`
- **Headings:** Poppins bold (700), dark color
- **Hero h1:** Large, white on dark overlay, spans two lines with bold accents
- **Section subheading:** Small caps / muted color above section headings
- **Logo:** "Motor" in white, "path" in orange (`.text-primary` / brand color)
- **Navbar:** White text on dark bg, nav links small caps

### Buttons & Shapes

- **Primary CTA (Search Vehicle, Search):** `#fc983c` orange bg, white text, `1px solid #fc983c`, hover → transparent bg + orange text (outline effect)
- **Car detail buttons (Book now, Details):** Black bg + black outline, white text (`.btn-black`)
- **Form inputs:** White bg, subtle border, rounded corners (`border-radius: 0.25rem`)
- **Search filter form:** Light bg with select dropdowns + search button
- **No explicit border-radius on cards** — standard Bootstrap rectangular cards
- **Video play button:** Circular icon with play triangle, dark semi-transparent bg

### Section Backgrounds

1. **Navbar:** Solid black (`#000`)
2. **Hero:** Full-width background image (`images/bg_1.jpg`) + dark overlay (`rgba(0,0,0,0.5)`)
3. **Search filter:** White/light bg
4. **Services:** White/light bg
5. **Car Fleet:** White/light bg
6. **How It Works:** Full-width background image (`images/bg_2.jpg`) + dark overlay — parallax style
7. **Testimonials:** White/light bg with carousel
8. **About Us:** White/light bg
9. **Blog:** White/light bg
10. **Footer:** Solid black (`#000`), `ftco-bg-dark` variant available (`#3c312e`)

## Section Structure (page order)

1. **Navbar** — dark, brand logo left ("Motor" white + "path" orange), nav links right (Home, About, Pricing, Our Car, Blog, Contact), hamburger on mobile
2. **Hero** — full-width bg image + dark overlay, two-column layout:
   - Left (col-6): heading "Now It's easy for you rent a car", subtext, video play link
   - Right (col-4): booking form "Make your trip" with pick-up/drop-off location, pick-up/drop-off date, pick-up time, vehicle model select, brand select, year select, price limit select, "Search Vehicle" orange CTA
3. **Search Filter Bar** — horizontal form below hero: 4 select dropdowns (Model, Brand, Year, Price Limit) + "Search" orange button
4. **Services** — "Our Services" heading, 4-column grid:
   - 24/7 Car Support (icon + title + text)
   - Lots of location (icon + title + text)
   - Reservation (icon + title + text)
   - Rental Cars (icon + title + text)
5. **Car Fleet** — "Choose Your Car" heading, 4-column grid of car cards:
   - Each card: car image bg, price badge overlay (e.g. "$25/Day"), car name, brand, "Book now" + "Details" black buttons
6. **How It Works** — parallax bg image + dark overlay, white heading, 4-column grid:
   - Pick Destination (icon + title + text)
   - Select Term (icon + title + text)
   - Choose A Car (icon + title + text)
   - Drive Off (icon + title + text)
7. **Testimonials** — carousel with customer testimonials, each: avatar photo, name, role, quote text
8. **About Us** — "About us" heading, "Choose A Perfect Car" subheading, two paragraphs of text + "Search Vehicle" orange CTA button
9. **Blog** — "Recent Blog" heading, 3-column blog card grid:
   - Each card: featured image, date badge, admin name, comment count, title, excerpt, "Read more" link
10. **Footer** — solid black bg, 4-column layout:
    - About: brand name, text, social icons (Twitter, Facebook, Instagram)
    - Information: link list
    - Customer Support: link list
    - Have a Questions?: address, phone, email
    - Copyright bar at bottom with Component Dock link

## Requirements

### Feature: Motorpath Car Rental Template

#### Scenario: Navbar renders correctly

- **GIVEN** the page loads
- **THEN** the navbar displays the "Motorpath" brand logo
- **AND** the logo "Motor" is in white and "path" is in orange
- **AND** navigation links are visible: Home, About, Pricing, Our Car, Blog, Contact
- **AND** the navbar has a dark (black) background
- **AND** the navbar is responsive with a hamburger menu on mobile

#### Scenario: Hero section displays with booking form

- **GIVEN** the page loads
- **THEN** the hero section shows a full-width background image with a dark overlay
- **AND** a heading reads "Now It's easy for you rent a car"
- **AND** a subtext paragraph is visible below the heading
- **AND** a video play link with circular icon is present
- **AND** a booking form "Make your trip" is on the right side
- **AND** the form contains pick-up location input
- **AND** the form contains drop-off location input
- **AND** the form contains pick-up date input
- **AND** the form contains drop-off date input
- **AND** the form contains pick-up time input
- **AND** a "Search Vehicle" orange CTA button is visible

#### Scenario: Search filter bar renders below hero

- **GIVEN** the page loads
- **THEN** a horizontal search filter bar is visible below the hero
- **AND** it contains Model select dropdown
- **AND** it contains Brand select dropdown
- **AND** it contains Year select dropdown
- **AND** it contains Price Limit select dropdown
- **AND** a "Search" orange button is present

#### Scenario: Services section displays 4 service cards

- **GIVEN** the page loads
- **THEN** the "Our Services" heading is visible
- **AND** 4 service cards are displayed in a row
- **AND** each card has an icon, title, and description text
- **AND** the services are: 24/7 Car Support, Lots of location, Reservation, Rental Cars

#### Scenario: Car fleet section displays 4 car cards

- **GIVEN** the page loads
- **THEN** the "Choose Your Car" heading is visible
- **AND** 4 car cards are displayed in a grid
- **AND** each card shows a car image with a price badge overlay
- **AND** each card shows a car name and brand
- **AND** each card has "Book now" and "Details" black buttons

#### Scenario: How It Works section displays on parallax background

- **GIVEN** the page loads
- **THEN** the "How it works" heading is visible on a parallax background image with dark overlay
- **AND** white text is used for the heading
- **AND** 4 steps are displayed: Pick Destination, Select Term, Choose A Car, Drive Off
- **AND** each step has an icon, title, and description

#### Scenario: Testimonials carousel displays

- **GIVEN** the page loads
- **THEN** a testimonials carousel is visible
- **AND** each testimonial shows a customer photo, name, role, and quote
- **AND** the carousel auto-scrolls through testimonials

#### Scenario: About Us section displays

- **GIVEN** the page loads
- **THEN** the "About us" heading is visible
- **AND** the "Choose A Perfect Car" subheading is visible
- **AND** descriptive paragraphs are present
- **AND** an "Search Vehicle" orange CTA button is visible

#### Scenario: Blog section displays 3 blog cards

- **GIVEN** the page loads
- **THEN** the "Recent Blog" heading is visible
- **AND** 3 blog post cards are displayed
- **AND** each card has a featured image, date, admin name, comment count
- **AND** each card has a title and excerpt text

#### Scenario: Footer renders with 4 columns

- **GIVEN** the page loads
- **THEN** the footer has a solid black background
- **AND** an "About Motorpath" column with description and social icons is visible
- **AND** an "Information" column with link list is visible
- **AND** a "Customer Support" column with link list is visible
- **AND** a "Have a Questions?" column with address, phone, and email is visible
- **AND** a copyright bar with Component Dock link is at the bottom

#### Scenario: Footer contains Component Dock attribution

- **GIVEN** the page loads
- **THEN** the footer copyright includes a link to https://www.componentdock.com/
- **AND** the link text references "Component Dock"
- **AND** no ColorLib attribution links are present in the footer

## Verification Checklist

- [ ] App name is `motorpath` (not `autoroad`)
- [ ] Package name is `@free-react-templates/motorpath`
- [ ] `public/CNAME` contains `motorpath.free.componentdock.com`
- [ ] `homepage` in `package.json` is `https://motorpath.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/` (branded "Component Dock")
- [ ] No ColorLib references anywhere in `apps/motorpath/`
- [ ] All images use `https://picsum.photos/seed/motorpath-<n>/<w>/<h>` placeholders
- [ ] Font is loaded via Google Fonts `<link>` in `index.html`
- [ ] Icons use `lucide-react` equivalents
- [ ] All design tokens match: orange `#fc983c` primary, Poppins font, dark overlay hero
- [ ] Section order matches original: Navbar → Hero → Search Filter → Services → Fleet → How It Works → Testimonials → About → Blog → Footer
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `vite.config.ts` includes `injectUiSource()` helper
