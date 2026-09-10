# Template: GoingOnce (Business / Auction)

## Purpose

Recreation of ColorLib **Auction** template as a single-page React app.

- **Source slug:** `auction`
- **ColorLib page:** https://colorlib.com/wp/template/auction/
- **Live preview:** https://preview.colorlib.com/theme/auction/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/auction-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `goingonce` (app folder `apps/goingonce`, package `@free-react-templates/goingonce`)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and DOM:

| Token | Value | Notes |
|---|---|---|
| **Brand color** | `#f37121` | Orange — used on buttons, section borders, links |
| **Font family** | `"Muli", sans-serif` | Google Fonts Muli (300/400/700/900 weights) |
| **Background — white** | `#fff` | Main content areas, cards |
| **Background — light gray** | `#f4f5f9` | Alternate section backgrounds |
| **Background — subtle gray** | `#f8f9fa` | Testimonial avatars area |
| **Text — primary** | `#25262a` | Body text |
| **Text — headings** | `#000` / `#343a40` | Headings, strong text |
| **Text — muted** | `#999999` | Secondary/muted text |
| **Hero overlay** | `rgba(0,0,0,0.2)` | Dark overlay on hero background image |
| **Button radius** | `0` (sharp) | Both `.btn-primary` and `.btn-bid` use no border-radius |
| **Button bid** | `padding: 7px 15px; border-radius: 0;` | Submit a Bid buttons on auction cards |
| **Section border accent** | `2px solid #f37121` | Top border on some section headings |
| **Hero heading** | `font-size: 60px; font-weight: 900; line-height: 1; color: #fff` | Large white hero headline |

## Section Structure (in page order)

1. **Navbar** — Sticky top nav with logo, links (Home, Buy, Sell, Services dropdown, Blog, About, Contact), Sign In/Register button (dark background)
2. **Hero / Intro** — Full-viewport background image with dark overlay, centered white text: "The Best Place to Buy and Sell" heading, description paragraph, "Register" CTA button (orange primary)
3. **Current Auctions** — "Auctions" subtitle + "Current Auctions" heading, 4-column grid of auction item cards. Each card: image, price tag, title, category label, bid count, "Submit a Bid" button (orange, sharp corners)
4. **How It Works** — "How" subtitle + "It Works" heading, 4-column step cards (Register → Buy or Bid → Submit a bid → Win), each with icon and description
5. **About Us** — "About?" subtitle + "Us" heading, 3-column feature cards (Fast Support, Happy Customers, 24/7 Support) with icons and descriptions
6. **Testimonials** — "Testimonials" heading, carousel of testimonial cards, each with circular avatar, customer name, and quote text
7. **CTA Banner** — Full-width call-to-action: "Create an account and start Buy, Bid or Sell Now!"
8. **Footer** — Three columns (Solutions, Services, Contact), dark background

## Gherkin Requirements

### Navbar
- **Scenario: Navbar renders all navigation links**
  - Given the page loads
  - Then the navbar displays links: Home, Buy, Sell, Services, Blog, About, Contact
  - And a "Sign In / Register" button is visible

- **Scenario: Services dropdown reveals sub-items**
  - Given the page loads on desktop
  - When the user hovers over "Services"
  - Then a dropdown shows: Sell Items, Buy Items, Submit a Bid

- **Scenario: Mobile hamburger menu**
  - Given the page loads on a mobile viewport
  - Then a hamburger menu icon is visible
  - When the user taps the hamburger icon
  - Then the mobile navigation menu slides open

### Hero / Intro
- **Scenario: Hero displays headline and CTA**
  - Given the page loads
  - Then the hero section shows "The Best Place to Buy and Sell" as the main heading
  - And a description paragraph is visible below the heading
  - And a "Register" button is visible and clickable

- **Scenario: Hero is full-viewport height**
  - Given the page loads
  - Then the hero section occupies the full viewport height

### Current Auctions
- **Scenario: Auction grid displays items**
  - Given the page loads
  - Then the "Current Auctions" heading is visible
  - And at least 8 auction item cards are displayed in a 4-column grid

- **Scenario: Each auction card shows key details**
  - Given an auction item card
  - Then it displays an image, price, item title, category label, bid count, and "Submit a Bid" button

- **Scenario: Submit a Bid button is clickable**
  - Given an auction item card
  - When the user clicks "Submit a Bid"
  - Then the button responds to the click (no broken interaction)

### How It Works
- **Scenario: Steps section renders correctly**
  - Given the page loads
  - Then the "How It Works" heading is visible
  - And 4 step cards are displayed: Register, Buy or Bid, Submit a bid, Win
  - And each step card has a title and description

### About Us
- **Scenario: About section renders features**
  - Given the page loads
  - Then the "About Us" heading is visible
  - And 3 feature cards are displayed: Fast Support, Happy Customers, 24/7 Support
  - And each card has a title and description

### Testimonials
- **Scenario: Testimonials carousel renders**
  - Given the page loads
  - Then the "Testimonials" heading is visible
  - And testimonial cards with avatar, name, and quote are displayed

### CTA Banner
- **Scenario: CTA banner is visible**
  - Given the page loads
  - Then a call-to-action section displays "Create an account and start Buy, Bid or Sell Now!"

### Footer
- **Scenario: Footer renders column layout**
  - Given the page loads
  - Then the footer displays three columns: Solutions, Services, Contact
  - And the footer links to https://www.componentdock.com/

### Design Fidelity
- **Scenario: Brand color matches reference**
  - Given the page loads
  - Then the primary brand color is orange (#f37121) on buttons and accent borders

- **Scenario: Typography matches reference**
  - Given the page loads
  - Then the font family is Muli (or a suitable sans-serif fallback)
  - And the hero heading uses large bold white text

- **Scenario: Sharp button corners**
  - Given the page loads
  - Then all primary buttons have no border-radius (sharp corners)

## Verification Checklist

- [ ] App renders without errors in browser
- [ ] All 8 sections present in correct order
- [ ] Navbar with all links + Sign In/Register
- [ ] Hero: full-viewport, background image, overlay, heading, CTA
- [ ] Auctions grid: 4-column, 8+ cards with all details
- [ ] How It Works: 4 steps with icons and descriptions
- [ ] About Us: 3 feature cards
- [ ] Testimonials: carousel with avatars and quotes
- [ ] CTA banner with call-to-action text
- [ ] Footer: 3 columns + ComponentDock link
- [ ] Brand color #f37121 used consistently
- [ ] Muli font family loaded
- [ ] Sharp button corners (no border-radius)
- [ ] Responsive layout (mobile hamburger, stacked grids)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Tests pass with 100% coverage
