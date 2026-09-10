# Template: Lotwise (Auction Marketplace category)

## Purpose

Recreation of ColorLib **Auction** (`https://colorlib.com/wp/template/auction/`), built as a modern auction marketplace landing page with product listings, "How It Works" steps, testimonials, and a registration CTA using React 19, Tailwind CSS 4, and TypeScript.

- **Source Slug**: `auction`
- **Preview URL**: `https://preview.colorlib.com/theme/auction/`
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).
- **Assigned App Name**: `lotwise` (folder: `apps/lotwise`, deployed at `lotwise.free.componentdock.com`).

## Design tokens

- **Brand Colors**:
  - Primary orange: `#f37121` (headings, captions, step icons, price badges, section overlay, dropdown borders, active pagination)
  - Bootstrap primary: `#007bff` (default Bootstrap .btn-primary used for hero CTA)
  - Black: `#000` (text, item headings)
  - Body text: `#999999` (paragraphs, base font)
  - Dark text: `#25262a`, `#343a40` (dropdown links, mobile menu)
  - Light bg: `#f8f9fa` (footer background, bid button bg)
  - White: `#fff` (navbar links, testimonials text)
  - Muted link: `#777` (footer links)
  - Section border: `#edf0f5` (dropdown borders)
- **Typography**:
  - Font Family: `Muli`, sans-serif (Google Fonts, weights 300/400/700/900)
  - Base font: 15px, weight 300, line-height 1.7
  - Hero heading: 60px desktop / 34px mobile, weight 900, white
  - Hero subtitle: 20px, white 80% opacity
  - Section headings: 2rem, color `#f37121` (h1–h5 default)
  - Caption: 11px uppercase, letter-spacing .2rem, weight 700, `#f37121`
  - Item heading: 22px, weight 700, `#000`
  - Step/feature heading: 20px, weight 700, `#000`
  - Footer heading: 16px, `#000`
- **Button Styles**:
  - All buttons: `border-radius: 0` (sharp/square), padding 14px 20px
  - Primary button: Bootstrap default `#007bff` (hero CTA "Register")
  - Bid button: `#f8f9fa` bg, black text, no border-radius, no text-transform, padding 7px 15px
  - Social/sign-in links: white text on transparent bg
- **Price Badge**: 90px circle, `#f37121` bg, white text, 20px, weight 700, positioned absolute on product image
- **Step Icons**: 90×90px circles, `#f37121` bg, white icon (40px), with arrow connectors between steps (icomoon → replace with lucide)
- **Testimonial Vcard**: 50px round avatar images, name + role
- **Section Backgrounds**:
  - Hero: full-viewport background image with dark overlay (`rgba(0,0,0,0.2)`)
  - Testimonials: background image with orange overlay (`#f37121` at 0.9 opacity)
  - Footer: `#f8f9fa` light background
  - Default sections: white with `2.5em 0` mobile / `5em 0` desktop padding
- **Product Card**: subtle shadow (`0 1px 2px rgba(0,0,0,0.05)`), image with price badge overlay, info block with title/category/bids/bid button

## Gherkin Requirements & Scenarios

### Feature: Auction Marketplace Landing Page

#### Scenario: Navbar Rendering
- **Given** the user visits the Lotwise landing page
- **Then** they should see a navbar with a logo image on the left
- **And** navigation links: Home, Buy, Sell, Services (dropdown), Blog, About, Contact
- **And** a "Sign In / Register" link on the right
- **And** the navbar is transparent (white text, absolute positioned over the hero)
- **And** a hamburger menu icon appears on mobile

#### Scenario: Hero Section
- **Given** the user views the hero section
- **Then** they should see a full-viewport background image with dark overlay
- **And** a centered heading "The Best Place to Buy and Sell" (60px bold white)
- **And** a subtitle paragraph below the heading
- **And** a "Register" primary CTA button

#### Scenario: Current Auctions Grid
- **Given** the user views the auctions section
- **Then** they should see a section with caption "Auctions" and heading "Current Auctions"
- **And** a 4-column grid of 8 product cards
- **And** each card has: an orange circular price badge (90px), product image, product title, category label, bid count, and a "Submit a Bid" button

#### Scenario: How It Works Section
- **Given** the user views the "How It Works" section
- **Then** they should see a section with caption "How?" and heading "How It Works"
- **And** 4 steps in a row: Register, Buy or Bid, Submit a Bid, Win
- **And** each step has a circular orange icon, title, and description
- **And** arrow connectors between steps (hidden on the last step)

#### Scenario: About Us Section
- **Given** the user views the About Us section
- **Then** they should see a split layout: image on the left, features on the right
- **And** the right side has a caption "About?", heading "About Us"
- **And** 3 feature items with icons: Fast Support, Happy Customers, 24/7 Support

#### Scenario: Testimonials Section
- **Given** the user views the testimonials section
- **Then** they should see a background image with orange overlay
- **And** a centered caption "Testimonials" and heading "Happy Clients" (white)
- **And** a carousel of testimonial cards, each with: 50px round avatar, name, role, and quote text

#### Scenario: Call to Action Section
- **Given** the user views the CTA section
- **Then** they should see centered text "Create an account and start Buy, Bid or Sell Now!"
- **And** a "Register" primary button

#### Scenario: Footer Section
- **Given** the user views the footer
- **Then** they should see a light background (#f8f9fa) footer with 4 columns
- **And** columns: Logo + description, Solutions (links), Services (links), Contact (links)
- **And** a copyright line at the bottom
- **And** the footer links to Component Dock (`https://www.componentdock.com/`)

#### Scenario: Responsive Behavior
- **Given** the user views the page on a mobile device (< 992px)
- **Then** the navbar collapses to a slide-in mobile menu (right side)
- **And** the hero heading shrinks to 34px
- **And** auction cards stack into 2 columns on small screens
- **And** the about section stacks vertically
- **And** footer columns stack vertically

## Verification Checklist

- [ ] App folder created at `apps/lotwise` with valid `package.json` (`@free-react-templates/lotwise`)
- [ ] `vite.config.ts` includes `injectUiSource()` helper
- [ ] `public/CNAME` contains `lotwise.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] All sections rendered matching the spec and 1:1 design tokens
- [ ] Muli font loaded from Google Fonts
- [ ] Primary orange brand color `#f37121` applied correctly
- [ ] Square-corner buttons (border-radius 0) throughout
- [ ] Price badges rendered as 90px orange circles
- [ ] Step icons rendered as 90px orange circles with white icons
- [ ] Vitest tests passing with 100% coverage (`npm run test:coverage`)
- [ ] Per-app verification passes (`scripts/verify-app.sh lotwise`)
