# Template: Echo (Business & Creative Agency)

## Purpose

Recreation of ColorLib [Repeat](https://colorlib.com/wp/template/repeat/), a modern agency template featuring a bold hero, services overview, statistics counters, about section, and contact footer. Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Source Mapping & Provenance

- **ColorLib Source:** Repeat (`https://colorlib.com/wp/template/repeat/`)
- **Live Preview:** `https://preview.colorlib.com/theme/repeat/`
- **Assigned App Name:** `echo`
- **Workspace Package:** `@free-react-templates/echo`

## Design Tokens

- **Primary Color:** `#ff8e71` (Coral Peach) -> `--color-primary: #ff8e71`
- **Secondary Color:** `#003a70` (Deep Blue) -> `--color-secondary: #003a70`
- **Font Family:** `"Roboto", sans-serif`
- **Section Backgrounds:** Clean white and light gray (`#f8f9fa`) alternate sections.

## Requirements & Gherkin Scenarios

### 1. Navigation & Header

- **Requirement:** Fixed or sticky top navigation bar with brand logo ("Echo"), navigation links (Home, Services, Pricing, About, Contact Us), and mobile hamburger menu.
- **Scenario:** User views the navigation bar
  - Given the user loads the Echo home page
  - When they view the header
  - Then they see the "Echo" brand link and menu items for Home, Services, Pricing, About, and Contact Us.

### 2. Hero Section

- **Requirement:** High-impact hero section with headline "We are pretty Geek|", subtext, and call-to-action button "Our services".
- **Scenario:** User views the hero section
  - Given the user is on the home page
  - When they look at the hero banner
  - Then they see the headline "We are pretty Geek", description text, and an "Our services" call-to-action button.

### 3. About Section

- **Requirement:** Multi-column about section highlighting business growth support and company background.
- **Scenario:** User scrolls to the about section
  - Given the user is exploring the page
  - When they view the About Us section
  - Then they see headings "We are here to help grow your business" and explanatory paragraphs with clean spacing.

### 4. Services / What We Offer Carousel

- **Requirement:** Section detailing offerings (Web Design, Graphic Design, etc.) with carousel navigation pagination.
- **Scenario:** User interacts with the services section
  - Given the user views "What We Offer"
  - When they inspect the service cards and pagination controls
  - Then they can switch between slides and view service details.

### 5. Statistics Counters

- **Requirement:** Stat counters showing Projects (230), Happy Clients (229), Leadership (8), and Years Experience (15).
- **Scenario:** User views the statistics section
  - Given the user scrolls to the Stats section
  - When they examine the statistics counters
  - Then all four metrics are displayed clearly with distinct numbers and labels.

### 6. Call To Action & Footer

- **Requirement:** Bottom call-to-action banner ("Get anything done in one place"), contact info, navigation directory, and footer with Component Dock attribution.
- **Scenario:** User checks the footer and CTA
  - Given the user reaches the bottom of the page
  - When they review the footer
  - Then they see contact details, links, and the required footer link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run typecheck`)
- [ ] Lint check (`npm run lint`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] CNAME configured as `echo.free.componentdock.com`
