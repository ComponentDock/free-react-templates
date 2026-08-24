# Template: Recur (Business / Agency)

## Purpose

- **Recreation of ColorLib:** Repeat (`https://colorlib.com/wp/template/repeat/`)
- **Preview URL:** `https://preview.colorlib.com/theme/repeat/`
- **Tech Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Lucide React
- **New Name:** Recur (`@free-react-templates/recur`)

## Design Tokens & Visual Notes

- **Brand Colors:** Primary coral/orange `#ff8e71` (hover `#cc725a`), secondary dark blue `#003a70`, dark background/sections `#212529` or deep overlay, text light gray/white.
- **Typography:** `Roboto` (sans-serif) for body, `Comfortaa` (sans-serif) for headings.
- **Button Shapes:** Rounded / pill-shaped primary action buttons with white text.
- **Layout & Sections:**
  1. **Navbar:** Sticky top navigation with brand logo ("Recur") and links (Home, Services, Pricing, About, Contact Us) + mobile burger menu.
  2. **Hero:** Full-width header with background overlay, headline ("We are pretty Awesome"), description, and CTA button ("Our services").
  3. **About Section:** Split layout with images and intro box (`.intro-box`) with vertical accent line (`.v-line`), detailing business growth.
  4. **Services / Features Section:** Dark background section displaying offerings (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) in a slider/grid format.
  5. **Stats Counter Section:** Four counter blocks with icons (Handshake, Mouse, Browser, Cursor) displaying statistics.
  6. **Media / Features Split Section:** Image and descriptive text blocks illustrating seamless workflow.
  7. **Footer:** Comprehensive footer with widget columns (Contact, Sources, Links) and Copyright notice linking `https://www.componentdock.com/`.

## Gherkin Requirements & Scenarios

### Feature: Navigation

- **Scenario:** User views header and uses navigation links
  - **Given** the Recur landing page is loaded
  - **When** the user looks at the top navigation bar
  - **Then** they see the "Recur" brand logo and navigation items (Home, Services, Pricing, About, Contact Us)
  - **And** clicking a navigation item scrolls or navigates to the respective section

### Feature: Hero Section

- **Scenario:** User views the hero banner
  - **Given** the user lands on the homepage
  - **When** the hero section renders
  - **Then** it displays the heading "We are pretty Awesome", subtitle, and the "Our services" primary button

### Feature: About Section

- **Scenario:** User inspects the about section
  - **Given** the user scrolls to the about section
  - **When** the section is in view
  - **Then** it presents the intro box with a vertical accent line and business growth copy alongside imagery

### Feature: Services Section

- **Scenario:** User browses services
  - **Given** the user scrolls to the services section
  - **When** the services grid/slider loads
  - **Then** it displays service cards (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) with clear descriptions

### Feature: Stats Section

- **Scenario:** User views statistics counters
  - **Given** the user scrolls past the services
  - **When** the stats section renders
  - **Then** four statistics counter blocks with icons are visible

### Feature: Footer

- **Scenario:** User checks footerattribution
  - **Given** the user scrolls to the bottom of the page
  - **When** the footer renders
  - **Then** it contains widget columns and a copyright notice with a link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Navbar renders brand logo and links correctly
- [ ] Hero banner displays headline and CTA button
- [ ] About section features intro box and image layout
- [ ] Services cards display correct offerings and styling
- [ ] Stats counters render icons and numbers
- [ ] Footer includes the mandatory Component Dock link
- [ ] Tailwind brand colors (`#ff8e71`) and fonts (`Roboto`, `Comfortaa`) applied correctly
