# Spec: Closet — Fashion Boutique Template

Recreation of ColorLib "Little Closet" (https://colorlib.com/wp/template/little-closet/).
Preview: https://preview.colorlib.com/theme/littlecloset/ — ⚠️ Pointer status re-probed 2026-10-13: the slug-only path `/theme/little-closet/` still 404s, but the live demo exists at the alias directory `/theme/littlecloset/` (HTTP 200, 37,967 B). The screenshot is a supporting reference, not the sole one.

## Purpose

Closet is a fashion boutique template with a navbar, hero, popular products, newsletter and footer. It recreates the ColorLib **Little Closet** design (https://colorlib.com/wp/template/little-closet/, preview: https://preview.colorlib.com/theme/littlecloset/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design Tokens (from screenshot analysis)

- **Brand/primary:** #00b894 (mint green — used for price badges, active tabs, CTAs)
- **Brand dark:** #00a381 (hover state)
- **Ink:** #000000 (dark headings)
- **Body:** #555555 (body text)
- **Mist:** #999999 (muted text)
- **Paper:** #ffffff (page background)
- **Slate:** #f8f8f8 (light section background)
- **Fonts:** "Playfair Display" italic for headings, "Roboto" for body text
- **Buttons:** Rounded, brand-colored with white text; search bar with gray border and rounded corners

## Sections (top to bottom)

1. **Navbar** — White background, shopping bag icon + "Closet" brand text, hamburger menu, centered search bar, right-aligned user icon (with badge), cart icon, phone number
2. **Hero** — Full-width, blurred fashion image background, white italic script text "New Arrivals / Summer Wear", product carousel with 3 visible items (center item prominent with green price badge)
3. **Popular Products** — White background, "Popular on Closet" heading (serif italic), category tabs (Women/Men/Kids/Home Deco), product card grid
4. **Newsletter** — Email signup with icon and subscribe button
5. **Footer** — Dark background, multi-column links, "Made with Component Dock" attribution

## Requirements

### Feature: Navbar

#### Scenario: Renders brand name "Closet"

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it renders brand name "Closet"

#### Scenario: Shows search input

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it shows search input

#### Scenario: Shows cart icon

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** it shows cart icon

#### Scenario: Mobile: hamburger toggles menu

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** mobile: hamburger toggles menu

### Feature: Hero

#### Scenario: Displays "New Arrivals" heading

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it displays "New Arrivals" heading

#### Scenario: Shows product carousel with navigation arrows

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** it shows product carousel with navigation arrows

#### Scenario: Left/right arrows change the active slide

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** Left/right arrows change the active slide

#### Scenario: Green price badge visible on center product

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** Green price badge visible on center product

### Feature: Popular Products

#### Scenario: Shows "Popular on Closet" heading

- **Given** the page is rendered
- **When** the Popular Products is inspected
- **Then** it shows "Popular on Closet" heading

#### Scenario: Category tabs filter products (Women active by default)

- **Given** the page is rendered
- **When** the Popular Products is inspected
- **Then** Category tabs filter products (Women active by default)

#### Scenario: Product cards show image, name, price

- **Given** the page is rendered
- **When** the Popular Products is inspected
- **Then** Product cards show image, name, price

### Feature: Newsletter

#### Scenario: Shows email input and subscribe button

- **Given** the page is rendered
- **When** the Newsletter is inspected
- **Then** it shows email input and subscribe button

#### Scenario: Submitting the form clears the input

- **Given** the page is rendered
- **When** the Newsletter is inspected
- **Then** submitting the form clears the input

### Feature: Footer

#### Scenario: Links to Component Dock (https://www.componentdock.com/)

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it links to Component Dock (https://www.componentdock.com/)

#### Scenario: Shows copyright year

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** it shows copyright year

#### Scenario: Multi-column layout with navigation links

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Multi-column layout with navigation links
## Fidelity Notes

- No screenshot fallback needed: the slug-only preview path 404s, but the live demo is the alias directory `/theme/littlecloset/` (HTTP 200 re-probed 2026-10-13), so the design sheet is authoritative
- Placeholder images via picsum.photos seeded URLs
- No ColorLib assets copied
- Brand icons via inline SVG (lucide-react removed brand icons)
