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

## Requirements

### Feature: Navigation

#### Scenario: Navigation

- **Scenario:** User views header and uses navigation links
- **GIVEN** the Recur landing page is loaded
- **WHEN** the user looks at the top navigation bar
- **THEN** they see the "Recur" brand logo and navigation items (Home, Services, Pricing, About, Contact Us)
- **AND** clicking a navigation item scrolls or navigates to the respective section

### Feature: Hero Section

#### Scenario: Hero Section

- **Scenario:** User views the hero banner
- **GIVEN** the user lands on the homepage
- **WHEN** the hero section renders
- **THEN** it displays the heading "We are pretty Awesome", subtitle, and the "Our services" primary button

### Feature: About Section

#### Scenario: About Section

- **Scenario:** User inspects the about section
- **GIVEN** the user scrolls to the about section
- **WHEN** the section is in view
- **THEN** it presents the intro box with a vertical accent line and business growth copy alongside imagery

### Feature: Services Section

#### Scenario: Services Section

- **Scenario:** User browses services
- **GIVEN** the user scrolls to the services section
- **WHEN** the services grid/slider loads
- **THEN** it displays service cards (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) with clear descriptions

### Feature: Stats Section

#### Scenario: Stats Section

- **Scenario:** User views statistics counters
- **GIVEN** the user scrolls past the services
- **WHEN** the stats section renders
- **THEN** four statistics counter blocks with icons are visible

### Feature: Footer

#### Scenario: Footer

- **Scenario:** User checks footerattribution
- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it contains widget columns and a copyright notice with a link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Navbar renders brand logo and links correctly
- [ ] Hero banner displays headline and CTA button
- [ ] About section features intro box and image layout
- [ ] Services cards display correct offerings and styling
- [ ] Stats counters render icons and numbers
- [ ] Footer includes the mandatory Component Dock link
- [ ] Tailwind brand colors (`#ff8e71`) and fonts (`Roboto`, `Comfortaa`) applied correctly
