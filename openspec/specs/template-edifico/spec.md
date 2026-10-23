# Template: Edifico (Construction Company Landing)

## Purpose

Recreation of ColorLib **Constructo** — a construction company landing page template.

- **Source:** https://colorlib.com/wp/template/constructo/
- **Preview:** https://preview.colorlib.com/theme/constructo/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/constructo-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/edifico`
- **Surge target:** `edifico.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure.

| Token | Value | Notes |
|---|---|---|
| Font family | `"Raleway", sans-serif` | Loaded via Google Fonts; weights 300–900 |
| Primary brand color | `#F0542C` (orange-red) | Used for: `.boxed-btn3` buttons, icon accents, feature icons, CTA backgrounds |
| Dark navy (primary dark) | `#040E27` | Header top bar bg, section titles, text on light bg |
| Dark navy (secondary) | `#001D38` | Button hover, gradient overlays, secondary dark |
| White | `#fff` | Page bg, card bg, button text, nav bar bg |
| Section subtitle | `#DB9A64` (golden brown) | `.section_title p` color |
| Light bg | `#fbf9ff` | Alternating section backgrounds |
| Hero overlay | `linear-gradient(to right, rgba(0,29,56,0.7), rgba(26,13,1,0.6))` | Dark gradient over hero images |
| Button border-radius | `0` (square) | `.boxed-btn3` has no border-radius |
| Section padding | `120px 0` (desktop) / `50px 0` (mobile) | Major sections |
| Section title | `font-size: 42px`, weight 600, color `#040E27` | `.section_title h3` |

### Color Palette Summary

| Role | Hex | Used In |
|---|---|---|
| Brand / Primary | `#F0542C` | CTA buttons, feature icons, accents |
| Dark Navy | `#040E27` | Header top bar, section titles, body text |
| Secondary Dark | `#001D38` | Button hover, overlay gradients |
| Golden Brown | `#DB9A64` | Section subtitles |
| White | `#fff` | Page background, nav bar, button text |
| Light Purple-White | `#fbf9ff` | Alternating section bg |

## Section Structure

Reproduced in exact order from the preview DOM:

1. **Header Top Bar** — dark bg (#040E27), left: "Opening Hour: (10.00-07.00)", right: "Get a Quote" orange button
2. **Address Bar** — logo (image-based), right: Address info + Call Us info with icons
3. **Main Navbar** — sticky white bg, links: Home, About, Services, Pages (dropdown: project, elements, project details), Blog (dropdown: blog, single-blog), Contact, search icon (opens modal)
4. **Hero Carousel** — 3 slides with dark gradient overlay, centered text: h3 "We Build Your Home Secure and Safe", subtext, "Our Services" CTA button
5. **Features** — 3-column: icon (orange) + heading + description. Items: Creative Plan & Design, Talented Peoples, Modern Tools
6. **About** — split layout: left = image with decorative pattern, right = "We Serve all of your Construction Services" heading + paragraphs + "About Us" button, bordered container
7. **Services Carousel** — "Our Services" heading, owl-carousel of service cards with image + title + description + "More" link. Services: Maintenance & Repair, Building Construction, Bridge & Road Construction
8. **Gallery** — filterable grid (All / Architecture / Buildings / Bridories), 8 project images with hover overlay (title + arrow icon), "More Projects" button below
9. **Why Choose Us** — right-aligned text on dark/gradient bg, video play button popup, heading + quote text + description
10. **Testimonials** — "Testimonials" heading, carousel of testimonial cards: circular avatar (68px) + name + "Client" label + quote text
11. **Contact CTA** — dark overlay bg, "Are you looking for Construction and Industrial Experts?" + "Contact Us" button
12. **Footer** — logo + download brochure section, 4-column: About (address, phone, email, social links), Popular Searches, Useful Links, Subscribe (email form + text), copyright with "Made with Component Dock"

## Requirements

### Feature: Edifico — Construction Company Landing Page

#### Scenario: Header top bar

- **GIVEN** the user loads the page
- **THEN** a dark top bar is visible with "Opening Hour: (10.00-07.00)" on the left
- **AND** a "Get a Quote" orange button is on the right

#### Scenario: Address bar with logo and contact info

- **GIVEN** the user loads the page
- **THEN** the logo is displayed on the left
- **AND** address info ("20/D, Kings road, Green lane") with icon is shown
- **AND** call us info ("+10 673 567 367") with icon is shown

#### Scenario: Sticky navbar navigation

- **GIVEN** the user loads the page
- **THEN** a white sticky navbar is displayed
- **AND** nav links include: Home, About, Services, Pages, Blog, Contact
- **AND** Pages and Blog have dropdown submenus
- **AND** a search icon triggers a modal search overlay

#### Scenario: Hero carousel

- **GIVEN** the user loads the page
- **THEN** a full-width hero carousel with 3 slides is displayed
- **AND** each slide has a dark gradient overlay
- **AND** centered heading "We Build Your Home Secure and Safe" is visible
- **AND** a "Our Services" CTA button is below the heading

#### Scenario: Features section

- **GIVEN** the user scrolls to the features section
- **THEN** 3 feature cards are displayed in a row
- **AND** each has an orange icon, heading, and description
- **AND** the features are: Creative Plan & Design, Talented Peoples, Modern Tools

#### Scenario: About section

- **GIVEN** the user scrolls to the about section
- **THEN** a bordered split layout is displayed
- **AND** the left side shows a construction worker image with decorative pattern
- **AND** the right side shows "We Serve all of your Construction Services" heading
- **AND** paragraphs of description text are present
- **AND** an "About Us" button is visible

#### Scenario: Services carousel

- **GIVEN** the user scrolls to the services section
- **THEN** "Our Services" heading is displayed centered
- **AND** a carousel of service cards is shown
- **AND** each card has an image, title, description, and "More" link
- **AND** services include: Maintenance & Repair, Building Construction, Bridge & Road Construction

#### Scenario: Gallery with filters

- **GIVEN** the user scrolls to the gallery section
- **THEN** a heading "Take a look Some of our awesome projects" is visible
- **AND** filter buttons are shown: All, Architecture, Buildings, Bridges
- **AND** 8 project images are displayed in a grid
- **AND** each image has a hover overlay with title and arrow icon
- **AND** a "More Projects" link button is below the gallery

#### Scenario: Why Choose Us section

- **GIVEN** the user scrolls to the Why Choose Us section
- **THEN** a dark/gradient background section is displayed
- **AND** "Why Choose Us?" heading is visible
- **AND** descriptive text and a video play button are present

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** "Testimonials" heading is displayed centered
- **AND** a carousel of testimonial cards is shown
- **AND** each card has a circular avatar, name, "Client" label, and quote text

#### Scenario: Contact CTA

- **GIVEN** the user scrolls to the contact CTA section
- **THEN** a dark overlay background is displayed
- **AND** "Are you looking for Construction and Industrial Experts?" text is visible
- **AND** a "Contact Us" orange button is present

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is displayed
- **AND** it contains: logo + download brochure, About info with address/phone/email, social links, Popular Searches links, Useful Links, Subscribe email form
- **AND** a copyright line with "Made with Component Dock" link is present

#### Scenario: Responsive behavior

- **GIVEN** the user is on a mobile viewport (< 768px)
- **THEN** the header top bar is hidden
- **AND** the address bar collapses to mobile logo
- **AND** the navbar becomes a mobile hamburger menu
- **AND** features stack vertically
- **AND** the about section stacks image above text
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] Spec reviewed for completeness (all 12 sections accounted for)
- [ ] Design tokens match live preview CSS (brand #F0542C, navy #040E27, Raleway font, square buttons)
- [ ] Section order matches preview DOM 1:1
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Surge target: `edifico.free.componentdock.com`
- [ ] Package name: `@free-react-templates/edifico`
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] All icons from lucide-react
- [ ] Google Fonts loaded via `<link>` in index.html
