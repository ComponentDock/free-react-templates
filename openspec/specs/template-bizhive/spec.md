# Template: BizHive (Business / Consulting)

## Purpose

Recreation of the ColorLib **Busicol** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** [colorlib.com/wp/template/busicol/](https://colorlib.com/wp/template/busicol/)
- **Preview:** [preview.colorlib.com/theme/busicol/](https://preview.colorlib.com/theme/busicol/)
- **Screenshot:** [colorlib.com/wp-content/uploads/sites/2/busicol-free-template.jpg](https://colorlib.com/wp/wp-content/uploads/sites/2/busicol-free-template.jpg)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Name mapping:** ColorLib "Busicol" → React app `bizhive` (`@free-react-templates/bizhive`)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand color | `#28AE60` | Green — CTA buttons, accents, nav CTA |
| Dark background | `#1F1F1F` | Footer background, dark sections |
| Secondary dark | `#2C2C2C` | Footer top, dark overlays |
| Light page background | `#fbf9ff` / `#F5FBFF` | Subtle off-white for alternating sections |
| White | `#fff` | Section backgrounds |
| Text color | `#222222` (dark sections use `#fff`) | Body text on light bg |
| Subtle text | `#727272` | Subtitle, secondary text |
| Font family | `Poppins`, sans-serif | Primary — headings + body |
| Fallback font | `Roboto`, Helvetica, Arial, sans-serif | |
| Button radius | `5px` | Primary CTA buttons |
| Border radius (cards) | `12px`, `20px` | Service cards, portfolio images |
| Button hover | `#28AE61` | Slightly darker green on hover |

### Visual Design Notes (from screenshot)

- **Top bar:** dark strip with social icons (left), email + phone (right)
- **Navbar:** white background, green triangle logo mark + "BusiCol" text, horizontal nav links, green "Get a Quote" CTA button (right)
- **Hero:** full-viewport-height carousel with dark overlay on background images, left-aligned white headline "Grow Big With Musicol Business", subtitle, two CTA buttons (green "Our Services" + white outline "See How it Work" with play icon)
- **Services area:** 3 service cards with background images and green hover overlays, dark overlay text
- **About section:** two-column — left image, right text with feature bullets and green "About Us" CTA
- **Counter/stats:** dark background, 3 stat counters with green accent numbers
- **Portfolio/Works:** 2×3 image grid with category labels, dark overlay on hover
- **About wrap area (service items):** light background, 3 icon+text cards centered
- **Testimonials:** carousel with quote, name, role
- **CTA section:** dark background, headline, subtitle, white outline "Contact Us" button
- **Footer:** dark (#1F1F1F), 4 columns — logo+description, services links, useful links, address+contact
- **Copyright bar:** centered, "All rights reserved | This template is made with Colorlib"

## Gherkin Requirements

### Feature: BizHive Business Consulting Template

#### Scenario: Top Bar renders contact information
- **Given** the user visits the BizHive homepage
- **Then** the top bar displays social media icons (LinkedIn, Facebook, Google+)
- **And** the top bar displays email "info@docmed.com" and phone "1601-609 6780"

#### Scenario: Navigation bar is visible and functional
- **Given** the user visits the BizHive homepage
- **Then** the navbar shows the BizHive logo (green triangle + text)
- **And** navigation links include: Home, About, Services, Blog, Pages, Contact
- **And** a green "Get a Quote" CTA button is displayed on the right

#### Scenario: Hero carousel displays slides
- **Given** the user visits the BizHive homepage
- **Then** a hero carousel is displayed with auto-rotating slides
- **And** each slide has a dark overlay background image
- **And** each slide contains a headline ("Grow Big With BizHive Business"), subtitle text
- **And** two CTA buttons: green "Our Services" and white outline "See How it Work" with play icon

#### Scenario: Services section shows three service cards
- **Given** the user scrolls to the services section
- **Then** the heading reads "Explore Our Solutions"
- **And** three service cards are displayed: Invoicing, Business Growth, Problem Solving
- **And** each card has a background image with dark overlay and hover effect

#### Scenario: About section displays company information
- **Given** the user scrolls to the about section
- **Then** the heading reads "The Largest Business Expert"
- **And** a two-column layout shows: left image, right descriptive text with feature bullets
- **And** a green "About Us" CTA button is displayed

#### Scenario: Counter section displays statistics
- **Given** the user scrolls to the counter section
- **Then** three counters are displayed: Total Projects (520), On Going Projects (244), Job Success (90%)
- **And** the counter area has a dark background

#### Scenario: Portfolio section shows recent works
- **Given** the user scrolls to the portfolio section
- **Then** the heading reads "Our Recent Works"
- **And** six portfolio items are displayed in a 2×3 grid
- **And** each item shows "Product Branding" category with dark overlay on hover
- **And** a green "More Works" CTA button is displayed

#### Scenario: Feature cards section shows capabilities
- **Given** the user scrolls to the feature section
- **Then** three feature cards are displayed: Unlimited Control, Rapidly Growth, Problem Solving
- **And** each card has an icon and brief description text

#### Scenario: Financial solution CTA section
- **Given** the user scrolls to the financial CTA section
- **Then** the heading reads "Gives you the best Financial solution for business"
- **And** descriptive text is displayed below the heading

#### Scenario: Testimonials section displays client feedback
- **Given** the user scrolls to the testimonials section
- **Then** a testimonial carousel is displayed
- **And** each testimonial shows a quote, client name ("Robert Jonson"), and role ("Business Owner")

#### Scenario: Call-to-action section
- **Given** the user scrolls to the CTA section
- **Then** the heading reads "Do you Have any Project?"
- **And** a subtitle is displayed
- **And** a white outline "Contact Us" button is shown on a dark background

#### Scenario: Footer with contact and navigation
- **Given** the user scrolls to the footer
- **Then** the footer has a dark background (#1F1F1F)
- **And** four columns display: logo + description, Services links, Useful Links, Address + contact info
- **And** a copyright bar reads "All rights reserved" with "Component Dock" attribution

#### Scenario: Footer links to Component Dock
- **Given** the user inspects the footer
- **Then** the footer contains a link to https://www.componentdock.com/
- **And** the link text references "Component Dock"

#### Scenario: Responsive design
- **Given** the user views BizHive on a mobile viewport (≤768px)
- **Then** the navbar collapses to a hamburger menu
- **And** multi-column layouts stack to single column
- **And** all text remains readable and buttons are tap-friendly

## Verification Checklist

- [ ] All sections from the ColorLib source are present in order
- [ ] Design tokens match: #28AE60 green, Poppins font, dark sections
- [ ] Hero carousel renders with background images and dark overlay
- [ ] Service cards have hover effects
- [ ] Counter section animates on scroll (optional enhancement)
- [ ] Portfolio grid displays 6 items
- [ ] Testimonial carousel rotates
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] Build succeeds (`npm run build`)
- [ ] Deployed to bizhive.free.componentdock.com
