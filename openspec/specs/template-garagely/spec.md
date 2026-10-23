# Template: Garagely (Automotive Garage category)
<!-- prep-status: shipped-as=veloce -->
> **SHIPPED-UNDER** — the ColorLib `automotive` design this prep describes already
> ships as `apps/veloce` (<https://veloce.free.componentdock.com>).
> Do not scaffold `apps/garagely`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-veloce/spec.md`.

## Purpose

Recreation of ColorLib **AutoMotive** (`https://colorlib.com/wp/template/automotive/`), built as a modern automotive service/garage website landing page using React 19, Tailwind CSS 4, and TypeScript.

- **Source Slug**: `automotive`
- **Preview URL**: `https://preview.colorlib.com/theme/automotive/`
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).
- **Assigned App Name**: `garagely` (folder: `apps/garagely`, deployed at `garagely.free.componentdock.com`).

## Design tokens

- **Brand Colors**:
  - Primary (Indigo): `#5F67FF` — used for CTA buttons, icon accents, active nav underline, counter numbers, testimonial quote icons, checkmark icons
  - Dark (Utility bar, preloader bg): `#25282C`
  - Dark (Dropdowns, section title headings): `#353535`
  - Body Text: `#111111` (headings), `#727171` (paragraphs)
  - Secondary Text: `#8d8d8d` (footer about), `#b4b4b4` (footer labels), `#b5b5b5` (carousel dots inactive)
  - Background: `#ffffff` (testimonial, default sections)
  - Accent/Loader colors: `#f44336` (red), `#673ab7` (purple) — preloader spinner only
  - Nav active underline: `#5F67FF`
- **Typography**:
  - Font Family: `Public Sans`, `sans-serif` (Google Fonts, weights 400–900)
  - h1: 70px, h2: 36px/40px, h3: 30px, h4: 24px, h5: 18px, h6: 16px
  - Body: 15px, line-height 25px
  - Hero headline: 60px bold, hero subtitle: 24px, hero sub-subtitle: 40px regular
  - Section titles: 40px bold, centered
- **Button Styles & Shapes**:
  - Primary button: `#5F67FF` bg, white text, 15px bold, padding 14px 25px 12px, NO border-radius (square/sharp edges)
  - Site button: same colors, `border-radius: 2px` (nearly square)
  - Continue button (blog cards): text link with arrow
- **Section Backgrounds**:
  - Hero: full-width background image with dark overlay, white text
  - Services: white background
  - Choose Us: white background with absolute-positioned image on left (48% width), right offset text panel with subtle box-shadow (`0px 10px 40px rgba(0,0,0,0.08)`)
  - Products: white background
  - Testimonial: white background, centered text
  - Counter: full-width background image with dark overlay, white text, indigo counter numbers
  - Latest News: white background
  - Footer: full-width background image, dark overlay, white/gray text
  - Copyright bar: solid dark bg
- **Spacing**: Section padding 100px top/bottom (`.spad`), hero 170px top/bottom, counter 200px top / 70px bottom
- **Layout**: Bootstrap 4 grid (12-col), max-width container, responsive breakpoints

## Requirements

### Feature: Automotive Service Garage Landing Page

#### Scenario: Top Utility Bar

- **GIVEN** the user visits the Garagely landing page
- **THEN** they should see a dark utility bar at the top with phone number `(+123) 4567-7890-123` and business hours `Mon-Sat: 10:00 - 16:00 / Sunday Close`
- **AND** a "Find us on map" link and social icons (Facebook, Twitter, Vimeo, Pinterest) on the right

#### Scenario: Navigation Bar

- **GIVEN** the utility bar is visible
- **THEN** they should see a white navigation bar below with a logo, nav links (Home, Services, Shop, Pages dropdown, Blog)
- **AND** a search icon and cart icon on the right
- **AND** the active nav link has an indigo underline indicator
- **AND** the Pages dropdown reveals sub-links (About Us, Services Details, Shop Details, Blog Details, Contact)

#### Scenario: Hero Section

- **GIVEN** the user scrolls past the nav
- **THEN** they should see a full-width hero section with a dark background image
- **AND** the heading "Welcome To Auto-Motive Garage" in white text
- **AND** a subtitle paragraph in white
- **AND** a primary indigo CTA button "Our Services"

#### Scenario: Services Section ("What We Do?")

- **GIVEN** the user scrolls to the services section
- **THEN** they should see a centered section title "What We Do?" with subtitle text
- **AND** a 4-column grid of 8 items (4 service text cards + 4 service images) arranged in alternating text-image pairs
- **AND** each service card shows an icon, bold title (Engine Overhaul, Power Steering, Oil change, Upgrades Car), and description text

#### Scenario: Choose Us Section

- **GIVEN** the user scrolls to the choose-us section
- **THEN** they should see a split layout with an image on the left and text panel on the right
- **AND** the heading "We Have 20 Years Of Experience In Auto Car"
- **AND** a checklist of 4 items with indigo checkmark icons
- **AND** a "About Us" primary button

#### Scenario: Products Section

- **GIVEN** the user scrolls to the products section
- **THEN** they should see a centered section title "Our Products" with subtitle text
- **AND** a 4-column grid of product cards, each with an image, hover action icons (heart, eye, exchange), product name, price ($800.00), and "+Add To Cart" link

#### Scenario: Testimonial Section

- **GIVEN** the user scrolls to the testimonial section
- **THEN** they should see a carousel/slider with testimonial quotes
- **AND** each testimonial has an indigo quotation icon and italicized quote text
- **AND** carousel dots for navigation

#### Scenario: Counter / Statistics Section

- **GIVEN** the user scrolls to the counter section
- **THEN** they should see a full-width background image with white section title "About Our Statistics"
- **AND** 4 counter items each with an icon, large indigo number "560+", and label (All Project, Project Completed, Customers Action, Awards Winner)

#### Scenario: Latest News Section

- **GIVEN** the user scrolls to the news section
- **THEN** they should see a centered section title "Latest News" with subtitle text
- **AND** a 3-column grid of blog cards each with an image, author/date overlay, heading, excerpt, and "Continue Reading" link

#### Scenario: Footer

- **GIVEN** the user scrolls to the bottom
- **THEN** they should see a footer with a full-width background image
- **AND** 3 top call-to-action items (Booking Repair / Appointment, Contact Us / Phone, Location / Find us on map)
- **AND** a main footer section with 4 columns: About (logo + description + Contact Us button), Quick Links, News items, Office address + contact details
- **AND** a copyright bar with social icons

#### Scenario: Footer Attribution

- **GIVEN** the user views the footer
- **THEN** they should see a link to `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [x] App folder created at `apps/garagely` with valid `package.json` (`@free-react-templates/garagely`) — superseded: shipped as `apps/veloce`
- [ ] `vite.config.ts` includes `injectUiSource()` helper
- [ ] `public/CNAME` contains `garagely.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` (Component Dock)
- [ ] All sections rendered matching the spec and 1:1 design tokens
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md)
- [ ] Vitest tests passing with 100% coverage (`npm run test:coverage`)
- [ ] Per-app verification passes (`scripts/verify-app.sh garagely`)
