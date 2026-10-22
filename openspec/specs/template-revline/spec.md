# Template: RevLine (Automotive Garage category)
<!-- prep-status: shipped-as=veloce -->
> **SHIPPED-UNDER** — the ColorLib `automotive` design this prep describes already
> ships as `apps/veloce` (<https://veloce.free.componentdock.com>).
> Do not scaffold `apps/revline`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-veloce/spec.md`.

## Purpose

Recreation of ColorLib **AutoMotive** (`https://colorlib.com/wp/template/automotive/`), built as a modern automotive garage landing page using React 19, Tailwind CSS 4, and TypeScript.

- **Source Slug**: `automotive`
- **Preview URL**: `https://preview.colorlib.com/theme/automotive/`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/automotive-free-template.jpg`
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).
- **Assigned App Name**: `revline` (folder: `apps/revline`, deployed at `revline.free.componentdock.com`).

## Design tokens

- **Brand Colors**:
  - Primary (Indigo/Purple): `#5F67FF` — used on buttons, icons, links, and accents
  - Heading Text: `#111111` (near-black), section title headings: `#353535`
  - Body Text: `#727171` (medium gray), secondary text: `#8d8d8d`
  - White: `#ffffff` — testimonial background, header top bar, button text
  - Dark: `#000000` — preloader background, dark overlays
  - Footer background: dark image overlay (`set-bg` pattern)
  - Counter section: background image with dark overlay, white text
- **Typography**:
  - Font Family: `"Public Sans", sans-serif` (Google Fonts — use `Public Sans`)
  - Weights: 400 (body), 500 (medium), 600 (semibold), 700 (bold), 800–900 (extra-bold for impact)
  - Hero heading: 60px bold, white on dark image background
  - Section titles: 40px bold, color `#353535`, centered
  - Subtitle text: 15px regular, color `#727171`, line-height 25px
  - Footer headings: 16px (`h5`)
- **Button Styles & Shapes**:
  - Primary button: solid fill `#5F67FF`, white text, 15px bold, padding `14px 25px 12px`, no border-radius (square/rectangular)
  - Site button: same `#5F67FF` fill, `border-radius: 2px` (very subtle rounding)
  - Continue button: outlined / text-style link
  - Hover: color shift, no heavy transitions
- **Section Backgrounds**:
  - Hero: full-width background image (`set-bg` pattern), dark overlay, white text
  - Services: white background, 100px top/bottom padding
  - Choose Us: split layout — left half is a background image, right half is text content on white
  - Products: white background, 100px padding
  - Testimonial: white background (`#ffffff`), centered carousel with purple quotation marks
  - Counter/Stats: full-width background image with dark tint, white text, overlapping bottom (negative margin)
  - Latest News: white background, 3-column blog card grid
  - Footer: dark background image, white/gray text, 3 info cards at top, 4-column layout below
  - Copyright bar: dark background, social icons

## Requirements

### Feature: Automotive Garage Landing Page

#### Scenario: Header and Navigation

- **GIVEN** the user visits the RevLine landing page
- **THEN** they should see a top bar with phone number `(+123) 4567-7890-123` and hours `Mon-Sat: 10:00 - 16:00 / Sunday Close`
- **AND** a "Find us on map" link with arrow
- **AND** social icons (Facebook, Twitter, Vimeo, Pinterest)
- **AND** a main navigation bar with the "RevLine" logo
- **AND** nav links: Home, Services, Shop, Pages (dropdown: About Us, Services Details, Shop Details, Blog Details, Contact), Blog
- **AND** search and cart icon buttons on the right

#### Scenario: Hero Section

- **GIVEN** the user views the hero section
- **THEN** they should see a full-width background image (dark automotive/garage theme)
- **AND** the heading "Welcome To" (smaller, 40px) above "RevLine Garage" (large, 60px bold)
- **AND** a subtitle describing the service
- **AND** a primary CTA button labeled "Our Services" (indigo `#5F67FF`, square shape)

#### Scenario: Services Section

- **GIVEN** the user scrolls to the services section
- **THEN** they should see a centered section title "What We Do?" with a subtitle
- **AND** 4 service items in an alternating text/image layout:
  1. Engine Overhaul — icon + title + description, paired with a service image
  2. Power Steering — icon + title + description, paired with a service image
  3. Oil Change — icon + title + description, paired with a service image
  4. Upgrades Car — icon + title + description, paired with a service image
- **AND** each service has an icon, a title, and a short description paragraph

#### Scenario: Choose Us Section

- **GIVEN** the user scrolls to the "Choose Us" section
- **THEN** they should see a split layout: left half is a background image, right half has text content
- **AND** the heading "We Have 20 Years Of Experience In Auto Car"
- **AND** a checklist of 4 items with check icons (indigo colored)
- **AND** an "About Us" primary button

#### Scenario: Products Section

- **GIVEN** the user views the products section
- **THEN** they should see a centered section title "Our Products" with subtitle
- **AND** a 4-column grid of product cards, each with:
  - A product image with hover overlay icons (heart, eye, compare)
  - Product name (e.g. "High Flow Fuel", "Revolution Wheels", "Tone Interior Kit", "Matte Gunmetal")
  - Price (`$800.00`) and an "Add To Cart" button

#### Scenario: Testimonial Section

- **GIVEN** the user scrolls to the testimonial section
- **THEN** they should see a white-background carousel with quotation mark icons in `#5F67FF`
- **AND** testimonial quote text centered
- **AND** dot pagination indicators below

#### Scenario: Counter/Statistics Section

- **GIVEN** the user views the statistics section
- **THEN** they should see a full-width background image with dark overlay
- **AND** a section title "About Our Statistics" in white
- **AND** 4 stat items in a row: All Project (560+), Project Completed (560+), Customers Action (560+), Awards Winner (560+)
- **AND** each stat has an icon, a large number with plus sign, and a label

#### Scenario: Latest News Section

- **GIVEN** the user views the latest news section
- **THEN** they should see a centered section title "Latest News" with subtitle
- **AND** a 3-column grid of blog post cards, each with:
  - A featured image with author name and date overlay
  - Post title and excerpt
  - A "Continue Reading" link

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **THEN** they should see 3 info cards at the top: Booking Repair / Appointment, Contact Us Now! / phone, Location / Find us on map
- **AND** a 4-column footer body: About (logo + description + Contact Us button), Quick Links, News items, Address/Contact info
- **AND** a copyright bar at the bottom with social icons
- **AND** a link to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] App folder created at `apps/revline` with valid `package.json` (`@free-react-templates/revline`)
- [ ] `vite.config.ts` includes `injectUiSource()` helper
- [ ] `public/CNAME` contains `revline.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` (\"Component Dock\")
- [ ] All sections rendered matching the spec and 1:1 design tokens
- [ ] Font: Public Sans loaded via Google Fonts
- [ ] Brand color `#5F67FF` used for primary buttons and accents
- [ ] Vitest tests passing with 100% coverage (`npm run test:coverage`)
- [ ] Per-app verification passes (`scripts/verify-app.sh revline`)
