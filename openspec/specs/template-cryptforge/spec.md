# Template: CryptForge (Cryptocurrency Landing Page category)

## Purpose

Recreation of ColorLib **Bitcoin** (`https://colorlib.com/wp/template/bitcoin/`), built as a cryptocurrency landing page with hero, converter, features, pricing, and blog sections using React 19, Tailwind CSS 4, and TypeScript.

- **Source Slug**: `bitcoin`
- **Preview URL**: `https://preview.colorlib.com/theme/bitcoin/`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg`
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).
- **Assigned App Name**: `cryptforge` (folder: `apps/cryptforge`, deployed at `cryptforge.free.componentdock.com`).

## Design tokens

- **Brand Colors**:
  - Primary (Orange): `#f78f3d` — used for accents, links, selection highlight, icon hover states
  - Gradient: `linear-gradient(0deg, #f3c400 0%, #f88845 100%)` — yellow-to-orange, used for `.primary-btn`, `.convert-wrap`, `.callaction-area`, pricing card hover
  - Heading Color: `#222` (near-black)
  - Body Text: `#777` (medium gray)
  - Light Background: `#f9f9ff` (very faint blue-white) — stat area, form inputs, pricing card bottoms
  - Dark Background (About): `#222` (dark gray/charcoal)
  - Very Dark Navy (Footer): `#04091e`
  - Footer Input BG: `#1e2235`
  - Banner Overlay: `rgba(4, 9, 30, 0.85)` (deep navy, 85% opacity)
  - Card Top (Pricing): `#fbfcff`
  - Card Bottom (Pricing): `#f9f9ff`
  - Social Icon BG: `#111111`
  - Footer Link Hover: `#f78f3d`
  - Selection Color: `#f78f3d` background, white text
- **Typography**:
  - Font Family: `"Poppins", sans-serif` (loaded via Google Fonts, weights 100–700)
  - Heading Weight: 600 (semibold)
  - Body Weight: 300 (light)
  - h1: 36px (100px in banner), h2: 30px, h3: 24px, h4: 18px, h5: 16px, h6: 14px
  - Line Height: 1.625em (body), 1.2em (headings)
  - Letter Spacing: 3px on banner subtitle (uppercase)
- **Button Styles & Shapes**:
  - Primary CTA: gradient (`#f3c400 → #f88845`), `border-radius: 25px` (pill), white text, uppercase, font-weight 500
  - Banner CTA (header-btn): solid `#f78f3d`, `border-radius: 3px`, white text, hover → transparent with white border
  - Convert area button: white bg, dark text, hover → transparent + white border
  - Call-to-action button: white bg, dark text, hover → transparent + dark border
  - Pricing button: dark `#222` bg, hover → gradient `#ca9814`
  - Footer newsletter button: `#f78f3d`, `border-radius: 57px`
  - All buttons: `transition: all 0.3s ease`
- **Section Backgrounds**:
  - Banner: background image (`header-bg.jpg`) with dark navy overlay (`rgba(4,9,30,0.85)`)
  - Convert area: gradient overlay, floats above banner with `margin-top: -105px`
  - Simple Services: white (default)
  - About Us: dark `#222` with image carousel left + text right
  - Features/Service: white (default)
  - Stats: `#f9f9ff` light blue-gray
  - Call-to-Action: gradient (`#f3c400 → #f88845`)
  - Pricing: white cards with borders
  - Blog: white (default)
  - Footer: `#04091e` very dark navy
- **Section Spacing**: `.section-gap` = `padding: 120px 0`

## Gherkin Requirements & Scenarios

### Feature: Cryptocurrency Landing Page

#### Scenario: Navbar Visibility and Scroll Behavior

- **Given** the user visits the CryptForge landing page
- **Then** they should see a fixed navbar with the brand logo and navigation links: Home, Convert, Features, Pricing, Blog
- **And** the navbar starts transparent and transitions to dark (`rgba(34,34,34,0.9)`) on scroll

#### Scenario: Hero / Banner Section

- **Given** the user views the hero section
- **Then** they should see a full-height banner with a dark overlay background image
- **And** a subtitle "Currently Purchase Rate" in uppercase with letter spacing
- **And** a large price display (e.g. "$12,356") in bold white
- **And** a descriptive paragraph below the price
- **And** a "Buy Bitcoin" primary CTA button with orange solid background and sharp corners (3px radius)

#### Scenario: Currency Converter Section

- **Given** the user scrolls past the hero to the converter section
- **Then** they should see a gradient-background card overlapping the banner by 105px
- **And** the heading "The Currency Converter" with a subtitle
- **And** a visual Bitcoin image on the left
- **And** two columns of form inputs (feet/pounds, inches/pounds) with transparent backgrounds and gold borders
- **And** a "Calculate Your BMI" (adapted to crypto context) white button on the right

#### Scenario: Simple Services Section

- **Given** the user views the services overview
- **Then** they should see 3 equal columns each with an icon image, a linked heading (e.g. "Get Paid through Bitcoin"), and a description paragraph
- **And** hovering the heading turns it orange (`#f78f3d`)

#### Scenario: About Us Section

- **Given** the user views the about section
- **Then** they should see a split layout: left half with an image carousel (owl-carousel), right half with dark background containing a Bitcoin icon, heading "Exchange Bitcoin is not that tough Anymore", and descriptive text
- **And** the entire section has a `#222` dark background

#### Scenario: Features / Why Choose Us Section

- **Given** the user views the features section
- **Then** they should see a centered heading "Why choose us during purchase bitcoin" with subtitle
- **And** 6 feature cards in a 3x2 grid, each with a Linearicons icon, a title (e.g. "Expert Technicians"), and a description
- **And** hovering a card turns its title orange

#### Scenario: Stats / Chart Section

- **Given** the user views the stats section
- **Then** they should see a light `#f9f9ff` background with a split layout: chart image on the left, text on the right
- **And** the heading "Ups and Downs of Bitcoin (Realtime)" with descriptive text
- **And** a "View Details" primary button with orange gradient, hover → transparent with orange border

#### Scenario: Call-to-Action Section

- **Given** the user views the call-to-action section
- **Then** they should see a gradient background (`#f3c400 → #f88845`) with centered white text
- **And** the heading "Huge Transaction in last Week" with a description paragraph
- **And** a "Buy Bitcoin Now!" white button with dark text, hover → transparent

#### Scenario: Pricing Section

- **Given** the user views the pricing section
- **Then** they should see a centered heading "Purchase whatever you want" with subtitle
- **And** 3 pricing cards in a row (e.g. Ripple $7999, Ethereum $9999, Bitcoin $5999)
- **And** each card has a light top section with the name, a middle text area, and a bottom section with the price and a "Get Started" button
- **And** hovering a card changes its bottom button to a gold gradient

#### Scenario: Blog Section

- **Given** the user views the blog section
- **Then** they should see a centered heading "Latest Posts from our Blog" with subtitle
- **And** 3 blog cards each with a thumbnail image, linked title, excerpt, and author info (avatar + name + date)
- **And** hovering a blog card turns its title orange

#### Scenario: Footer Section

- **Given** the user views the footer
- **Then** they should see a dark navy (`#04091e`) background with 4 columns: About Us, Top Products (link list), Newsletter (email input + submit button), and social icons (Facebook, Twitter, Dribbble, Behance)
- **And** a footer bottom bar with copyright text linking `https://www.componentdock.com/` (branded "Component Dock") and social icon buttons
- **And** newsletter input has dark `#1e2235` background, rounded (20px), with an orange submit button

## Verification Checklist

- [ ] App folder created at `apps/cryptforge` with valid `package.json` (`@free-react-templates/cryptforge`)
- [ ] `vite.config.ts` includes `injectUiSource()` helper
- [ ] `public/CNAME` contains `cryptforge.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` (Component Dock)
- [ ] All 11 sections rendered matching spec order and design tokens
- [ ] Poppins font loaded via Google Fonts in `index.html`
- [ ] Brand color `#f78f3d` and gradient `#f3c400 → #f88845` applied via Tailwind `@theme`
- [ ] Navbar fixed with scroll-triggered dark background
- [ ] Converter section overlaps banner with negative margin
- [ ] Dark sections (About, Footer) use correct background colors
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via `picsum.photos` with deterministic seeds
- [ ] Icons from `lucide-react` (replacing Linearicons/FontAwesome)
- [ ] Vitest tests passing with 100% coverage
- [ ] Per-app verification passes (`scripts/verify-app.sh cryptforge`)
