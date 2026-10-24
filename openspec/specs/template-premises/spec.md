# Template: Premises (Real Estate)
<!-- prep-status: shipped-as=homefront -->
> **SHIPPED-UNDER** — the ColorLib `royalestate` design this prep describes already
> ships as `apps/homefront` (<https://homefront.free.componentdock.com>).
> Do not scaffold `apps/premises`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-homefront/spec.md`.

## Purpose

Recreation of ColorLib's **Royalestate** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/royalestate/
- **Preview:** https://preview.colorlib.com/theme/royalestate/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **New name:** `premises` (app folder: `apps/premises`, package: `@free-react-templates/premises`)
- **Deploy target:** `https://premises.free.componentdock.com`
- **Source design:** ColorLib "Royalestate" — https://colorlib.com/wp/template/royalestate/

## Design tokens

Extracted from live preview CSS (`css/style.css`) and screenshot analysis:

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#78d5ef` | Brand cyan — buttons, active nav items, accents, CTA backgrounds |
| `--primary-hover` | `#56caeb` / `#4ac7ea` | Button hover states |
| `--accent` | `#f05d23` | Price text, orange highlights |
| `--dark` | `#252a2b` | Top bar, navbar bg, footer bg |
| `--dark-alt` | `#3c312e` | Parallax/counter section overlay |
| `--body` | `#212529` | Body text |
| `--light` | `#f8f9fa` | Alternate section backgrounds (`bg-light`) |
| `--white` | `#ffffff` | Card backgrounds, text on dark |
| `--muted` | `#546062` | Top bar text |
| `--border` | `#2e3536` | Top bar dividers |

### Typography

- **Font family:** `"Poppins", sans-serif` (loaded via Google Fonts CDN — weights 300, 400, 500, 600, 700)
- **Heading weight:** 400–600 depending on section
- **Body weight:** 400

### Buttons

- **Primary CTA:** `bg-primary` (#78d5ef), white text, uppercase, `p-3 px-4`, `btn-custom` class, icon inline (plus icon)
- **Navbar Sign-In:** dark bg with icon, border styling
- **Navbar Sign-Up:** `cta-colored` — primary bg (#78d5ef)
- **Search button:** dark bg (#252a2b), white text
- **Footer subscribe:** white bg, dark text

### Section backgrounds

- Top bar: `#252a2b` solid
- Navbar: dark solid (bg-dark)
- Hero slider: full-width background image with dark overlay
- Search bar: light bg
- Services/Features: `#f8f9fa` (bg-light)
- Properties grid: white
- Counter/stats: background image with overlay
- Testimonials: `#f8f9fa` (bg-light)
- Blog cards: white
- Newsletter: background image with parallax overlay
- Footer: `#252a2b` solid

### Border radius

- Default: `0` (square/Bootstrap default)
- Form controls: `0.25rem` (4px)
- No rounded corners on cards or buttons

## Section structure (top → bottom)

1. **Top bar** — social icons (left), phone number (right), dark bg `#252a2b`
2. **Navbar** — brand "Premises" (bold + light weight split), nav links (Home, Property, Agents, About, Blog, Contact), Sign-In + Sign-Up CTAs (right)
3. **Hero slider** — Owl Carousel style, full-width property images with dark overlay, property card overlay (title, location, description, price, "View Details" CTA)
4. **Search Property** — horizontal form bar with 8 fields: Keyword, Location, Property Type (dropdown), Property Status (dropdown), Min Beds, Min Bathroom, Min Price, Max Price, Min Area, Max Area, Search button
5. **Services/Features** — 4-column grid with icon + heading + short description (Find Places, Agents With Experience, Buy & Rent, Making Money)
6. **Recent Properties** — 4-column grid of property cards (image, title, address, price, badge)
7. **Most Recommended Properties** — 4-column grid of property cards (same structure)
8. **Counter/Stats** — background image with overlay, 4 stats (9,000 Happy Customers, 10,000 Properties, 1,000 Agents, 500 Awards)
9. **Testimonials** — Owl Carousel, quote cards with user image, quote text, author name, position
10. **Recent Blog** — 4-column blog cards (image, title, date, author, comment count)
11. **Newsletter** — parallax background image, heading, description, email input + Subscribe button
12. **Footer** — dark bg `#252a2b`, 4 columns (brand + social, Buy links, Sell links, Contact), copyright bar at bottom

## Requirements

### Feature: Premises — Real Estate Template

Feature: Premises real estate template
As a visitor to the Premises real estate site
I want to browse properties, search, and contact agents
So that I can find and purchase/rent real estate

Background:
- **GIVEN** the template is loaded at the root URL

**--- Top Bar ---**

#### Scenario: Top bar displays social icons and phone number

- **THEN** I see social media icons (Facebook, Twitter, Google, Pinterest) on the left
- **AND** I see a phone number on the right
- **AND** the top bar has a dark background (#252a2b)

**--- Navbar ---**

#### Scenario: Navbar displays brand and navigation links

- **THEN** I see the brand "Premises" (split styled)
- **AND** I see navigation links: Home, Property, Agents, About, Blog, Contact
- **AND** I see Sign-In and Sign-Up buttons on the right
- **AND** the navbar has a dark background

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** I scroll down the page
- **THEN** the navbar remains fixed at the top
- **AND** the navbar background becomes slightly lighter on scroll

**--- Hero Slider ---**

#### Scenario: Hero slider shows property images with overlay card

- **THEN** I see a full-width property image with a dark overlay
- **AND** I see a property title, location, description, and price
- **AND** I see a "View Details" button

#### Scenario: Hero slider has multiple slides

- **THEN** I see multiple property slides
- **AND** navigation dots or arrows allow slide switching

**--- Search Property ---**

#### Scenario: Search bar provides property search form

- **THEN** I see a "Search Property" heading
- **AND** I see form fields: Keyword, Location, Property Type, Property Status
- **AND** I see fields: Min Beds, Min Bathroom, Min Price, Max Price, Min Area, Max Area
- **AND** I see a "Search" button

#### Scenario: Search form fields are interactive

- **WHEN** I type in the Keyword field
- **THEN** the field accepts text input
- **WHEN** I select from the Property Type dropdown
- **THEN** the dropdown shows options (Commercial, Residential, Villa, Condominium, Apartment)

**--- Services/Features ---**

#### Scenario: Services section displays four feature cards

- **THEN** I see four feature cards in a row
- **AND** each card has an icon, heading, and short description
- **AND** the features are: Find Places, Agents With Experience, Buy & Rent, Making Money

**--- Recent Properties ---**

#### Scenario: Recent properties grid displays property cards

- **THEN** I see a "Recent Properties" heading
- **AND** I see a grid of property cards
- **AND** each card has an image, title, location, and price
- **AND** the price is displayed in orange (#f05d23)

**--- Most Recommended Properties ---**

#### Scenario: Recommended properties section displays cards

- **THEN** I see a "Most Recommended Properties" heading
- **AND** I see a grid of property cards
- **AND** each card has an image, title, location, and price

**--- Counter/Stats ---**

#### Scenario: Stats section shows key metrics

- **THEN** I see a "Some fun facts" heading
- **AND** I see four statistics with animated counters
- **AND** the stats are: Happy Customers (9,000), Properties (10,000), Agents (1,000), Awards (500)
- **AND** the section has a background image with overlay

**--- Testimonials ---**

#### Scenario: Testimonials carousel shows client quotes

- **THEN** I see a testimonial carousel
- **AND** each testimonial has a quote, user image, author name, and position
- **AND** carousel navigation allows switching between testimonials

**--- Blog ---**

#### Scenario: Blog section displays recent posts

- **THEN** I see a "Recent Blog" heading
- **AND** I see four blog cards
- **AND** each card has an image, title, date, author, and comment count

**--- Newsletter ---**

#### Scenario: Newsletter section has email subscription form

- **THEN** I see a "Subscribe to our Newsletter" heading
- **AND** I see a description paragraph
- **AND** I see an email input field and a "Subscribe" button
- **AND** the section has a parallax background image

**--- Footer ---**

#### Scenario: Footer displays brand info, links, and social

- **THEN** I see the brand name "Premises" in the footer
- **AND** I see social media icons (Twitter, Facebook, Instagram)
- **AND** I see Buy links (Home For Sale, Open Houses, New Listing, Recently Reduce, Off-Market Homes)
- **AND** I see Sell links (Sell Your Home, Get A Home Valuation, Local Home Prices, Guides & Rules)
- **AND** I see contact information
- **AND** the footer links to "https://www.componentdock.com/" (Component Dock)
- **AND** the footer has a dark background (#252a2b)

**--- Responsive ---**

#### Scenario: Template is responsive on mobile

- **WHEN** I view the page on a mobile viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** the search form stacks vertically
- **AND** property cards stack in a single column
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] All 12 sections rendered in correct order
- [ ] Brand color `#78d5ef` used for primary CTAs
- [ ] Orange accent `#f05d23` used for prices
- [ ] Font is Poppins (loaded from Google Fonts)
- [ ] Dark top bar and navbar with social icons + phone
- [ ] Hero slider with property cards and "View Details" CTA
- [ ] Search bar with all 10 form fields
- [ ] 4-column services/features grid
- [ ] Property cards in 2 sections (Recent + Recommended)
- [ ] Counter/stats section with animated numbers
- [ ] Testimonials carousel with quotes and user images
- [ ] Blog cards with image, title, date, author, comments
- [ ] Newsletter with email input and parallax bg
- [ ] Footer with brand, Buy/Sell links, social, contact, Component Dock link
- [ ] Responsive: hamburger nav, stacked cards on mobile
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images via `picsum.photos`
- [ ] Tests: 100% coverage (Vitest + Testing Library)
