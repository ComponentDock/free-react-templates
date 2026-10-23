# Template: Reverb (Business & Agency)

## Purpose

Recreation of ColorLib "Repeat" (`https://colorlib.com/wp/template/repeat/`, live preview: `https://preview.colorlib.com/theme/repeat/`). Stack: Vite, React 19, Tailwind CSS 4, TypeScript.
New app name: `reverb`. Domain category: Business agency / Creative portfolio.

## Design tokens

- **Brand primary / Accent**: Coral Orange (`#ff8e71` / Tailwind `bg-[#ff8e71]`, hover `#ff9f86`)
- **Brand heading**: Deep Blue (`#003a70` / Tailwind `text-[#003a70]`)
- **Neutral dark / Text**: Dark Charcoal (`#212529`), Muted text (`#6c757d` / `text-white-50` on dark)
- **Neutral light**: White (`#ffffff`), Light Gray (`#f8f9fa`, `#e9ecef`)
- **Font family**: Comfortaa & Roboto / system sans-serif (`sans-serif`)
- **Button & Box styling**: Rounded pill/standard buttons (`border-radius: 0.25rem` / rounded), structured intro boxes with vertical accent lines (`v-line`).

## Sections & Structure (1:1 with ColorLib Repeat)

1. **Navbar**: Brand title "Reverb", navigation links (Home, Services, Pricing, About, Contact Us) with responsive mobile menu toggle.
2. **Hero Section**: Background image overlay with large heading "We are pretty Awesome" (with dynamic typed words effect: Clever, Nerd, Good, Excellent, Geek), introductory lead text, and primary CTA button "Our services".
3. **About Section**: Dark/overlay section with subheading "About us", heading "We are here to help grow your business", image wrap, and intro text box with vertical accent line (`v-line`).
4. **Services Section**: "What We Offer" section with sidebar intro text, service feature slider / cards (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) with white text on dark background.
5. **Stats Counter Section**: 4-column counter stats (Projects: 230, Happy Clients: 229, Leadership: 8, Years Experience: 15) with icons.
6. **Media / Value Proposition Section**: "Get anything done in one place" heading, descriptive text, CTA button, and dual image layout (`img-1` and `img-2`).
7. **Footer**: 3-column footer containing Contact info, Sources links, Links, social icons (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble), and branded footer link to Component Dock (`https://www.componentdock.com/`).

## Requirements

### Feature: Navbar

#### Scenario: Navbar

- Scenario: Displays brand and navigation links
- **GIVEN** the user visits the home page
- **THEN** they should see the brand title "Reverb"
- **AND** navigation items for Home, Services, Pricing, About, and Contact Us

### Feature: Hero Section

#### Scenario: Hero Section

- Scenario: Displays hero heading with animated typed words and CTA
- **GIVEN** the user is on the hero banner
- **THEN** they should see the heading "We are pretty Awesome" with dynamic typed words
- **AND** a CTA button "Our services"

### Feature: About Section

#### Scenario: About Section

- Scenario: Displays about us business growth proposition
- **GIVEN** the user scrolls to the About section
- **THEN** they should see the subheading "About us" and heading "We are here to help grow your business"
- **AND** an intro box with vertical accent line

### Feature: Services Section

#### Scenario: Services Section

- Scenario: Displays service offerings and sliders
- **GIVEN** the user scrolls to the Services section
- **THEN** they should see "What We Offer" and service cards (Web Design, Graphic Design, Web/Mobile Application, Brand Identity)

### Feature: Stats Counter

#### Scenario: Stats Counter

- Scenario: Displays key business statistics
- **GIVEN** the user scrolls to the stats counter section
- **THEN** they should see project counts, happy clients, leadership, and years of experience

### Feature: Footer Attribution

#### Scenario: Footer Attribution

- Scenario: Displays branded footer link to Component Dock
- **GIVEN** the user scrolls to the footer
- **THEN** they should see copyright information and a link to Component Dock (`https://www.componentdock.com/`)

## Verification checklist

- [ ] App folder `apps/reverb` created and registered in root `package.json` workspaces
- [ ] TypeScript strict compilation passes without errors
- [ ] ESLint and code checks pass cleanly
- [ ] Vitest tests cover all sections with 100% test coverage
- [ ] Production build passes successfully via `npm run build`
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] `public/CNAME` contains `reverb.free.componentdock.com`
- [ ] Navbar — they should see the brand title "Reverb"
- [ ] Hero Section — they should see the heading "We are pretty Awesome" with dynamic typed words
- [ ] About Section — they should see the subheading "About us" and heading "We are here to help grow your business"
- [ ] Services Section — they should see "What We Offer" and service cards (Web Design, Graphic Design, Web/Mobile Application, Brand Identity)
- [ ] Stats Counter — they should see project counts, happy clients, leadership, and years of experience
