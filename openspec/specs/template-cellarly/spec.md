# Cellarly — Liquor Store Template

Recreation of ColorLib "Liquorstore" (https://colorlib.com/wp/template/liquorstore/)

## Purpose

Cellarly is a liquor store template with a top bar, navbar, hero, feature cards, about band, category grid, product grid and testimonials. It recreates the ColorLib **Liquorstore** design (https://colorlib.com/wp/template/liquorstore/, preview: https://preview.colorlib.com/theme/liquorstore/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (extracted from preview)

- **Font family:** Spectral (serif) — Google Fonts, weights 400/500/600/700
- **Brand color:** #F96D00 (orange)
- **Dark surfaces:** #1a1a2e (navbar), #111 (footer bottom bar)
- **Light surfaces:** white (#fff), light grey (#f8f9fa)
- **Button style:** solid primary (orange #F96D00), white outline for secondary
- **Layout:** Bootstrap 4 grid → Tailwind grid (12-col responsive)
- **Icons:** lucide-react (replace Font Awesome / Flaticon)

## Sections (in order)

1. **TopBar** — phone, email (left); social icons + Sign Up/Log In (right)
2. **Navbar** — dark bg, "Cellarly" brand, cart icon w/ badge + dropdown, nav links (Home, About, Products dropdown, Blog, Contact), mobile toggle
3. **Hero** — full-width background image with overlay, heading "Good Drink for Good Moments.", two CTA buttons (Shop Now, Read more)
4. **Features** — 3-column intro cards: Online Support 24/7, Money Back Guarantee, Free Shipping & Return (each with icon + heading + description)
5. **About** — split layout: image left, text right ("Since 1905" subheading, "Desire Meets A New Taste" heading, paragraphs, years counter)
6. **CategoryGrid** — 6-column grid of drink categories: Brandy, Gin, Rum, Tequila, Vodka, Whiskey (image + label)
7. **ProductGrid** — "Our Delightful offerings" / "Tastefully Yours" heading, 4-col x 2-row grid of 8 products with hover actions (cart, heart, eye), Sale/Best Seller/New Arrival badges, prices
8. **Testimonials** — background image with overlay, "Happy Clients" heading, quote cards carousel
9. **BlogSection** — "Recent Blog" heading, 4 blog entries in 2-col grid (image left, text right with date, title, excerpt, "Continue" link)
10. **Footer** — 5 columns (logo + social, My Accounts, Information, Quick Link, Have a Questions?), bottom bar with Component Dock link

## Requirements

### Feature: Cellarly

#### Scenario: Navbar renders all nav links and brand

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Navbar renders all nav links and brand

#### Scenario: Cart dropdown opens/closes on click

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Cart dropdown opens/closes on click

#### Scenario: Hero section displays heading and CTA buttons

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Hero section displays heading and CTA buttons

#### Scenario: Features section shows 3 feature cards

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Features section shows 3 feature cards

#### Scenario: About section shows heading, description, and years counter

- **Given** the page is rendered
- **When** the page is inspected
- **Then** About section shows heading, description, and years counter

#### Scenario: CategoryGrid renders 6 categories

- **Given** the page is rendered
- **When** the page is inspected
- **Then** CategoryGrid renders 6 categories

#### Scenario: ProductGrid renders 8 products with badges and prices

- **Given** the page is rendered
- **When** the page is inspected
- **Then** ProductGrid renders 8 products with badges and prices

#### Scenario: Testimonials section shows heading

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Testimonials section shows heading

#### Scenario: BlogSection shows 4 blog entries

- **Given** the page is rendered
- **When** the page is inspected
- **Then** BlogSection shows 4 blog entries

#### Scenario: Footer renders all columns and links

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Footer renders all columns and links

#### Scenario: Footer links to componentdock.com

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Footer links to componentdock.com

#### Scenario: Mobile nav toggle works

- **Given** the page is rendered
- **When** the page is inspected
- **Then** mobile nav toggle works

#### Scenario: Page is fully responsive

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Page is fully responsive
