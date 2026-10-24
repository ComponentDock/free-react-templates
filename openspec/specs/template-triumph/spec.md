# Template: Triumph (IT Services / Digital Agency)
<!-- prep-status: shipped-as=crest -->
> **SHIPPED-UNDER** — the ColorLib `victor` design this prep describes already
> ships as `apps/crest` (<https://crest.free.componentdock.com>).
> Do not scaffold `apps/triumph`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-crest/spec.md`.

## Purpose

Recreation of ColorLib's "Victor" template
(https://colorlib.com/wp/template/victor/) for the free-react-templates
monorepo. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source slug: `victor`
Preview URL: https://preview.colorlib.com/theme/victor/
New name: `triumph` (apps/triumph, @free-react-templates/triumph)
- **Source design:** ColorLib "Victor" — https://colorlib.com/wp/template/victor/

## Design tokens (extracted from preview CSS)

| Token                | Value                                |
| -------------------- | ------------------------------------ |
| Font family          | "DM Sans", sans-serif (Google Fonts) |
| Heading color        | #232F55 (deep navy)                  |
| Body text color      | #454E6D (slate)                      |
| Primary / brand      | #FF6D21 (vibrant orange)             |
| Secondary accent     | #7EA0FF (section label blue)         |
| Light gray bg        | #F8FAFC (.gray-bg sections)          |
| Section subtitle     | #6A6063                              |
| Footer bg            | gradient 45deg: #454e6d → #232f55    |
| Button bg            | #FF6D21, hover sweep → #232F55       |
| Button border-radius | 5px (main btn), 35px (submit btn)    |
| Hero heading size    | 67px (desktop), 33px (mobile)        |
| Section h2 size      | 44px desktop                         |
| Section padding      | 120px top/bottom (desktop)           |
| Hero height          | 900px (slider-height)                |
| Slider bg            | dark image background (slider-bg1)   |

## Page structure (section order from preview DOM)

1. **Header** — transparent overlay on hero, sticky on scroll. Logo left,
   nav links (Home, About, Services, Portfolio, Blog, Element, Contact),
   phone number, "Get Free Consultant" button. Mobile hamburger menu.
2. **Hero / Slider** — full-width dark background image, centered caption:
   headline "Get the help you need, every step of the way",
   subtext "Design better websites and spend less with Essentials.",
   "Get Started" CTA button. Decorative image on the right (hero-shape).
3. **Client testimonials (3-column)** — section heading "Happier customers"
   etc. Three cards: "Happier customers", "Faster growth", "Connected
   workflow" — each with subtext and icon.
4. **Emergency / About section** — image-background section
   (.emargency-care, section-img-bg2). CTA button.
5. **Services area (gray-bg)** — "Improved Digital Experience" heading,
   description text, two service cards with icons (Design & Development).
6. **Testimonial / CEO quote** — single testimonial with avatar, quote
   text, name "Barb Dwyer", title "CEO of Victor".
7. **Portfolio / Handpicked section** — "Handpicked by Victor" heading,
   project grid (2 columns) with images, titles, descriptions, "View
   Project" links.
8. **Support / Services list** — heading with service categories list
   (Design & Strategy, Product Design, Digital Marketing, Software
   Development, Ecommerce), contact info, CTA.
9. **Footer** — dark gradient background, multi-column layout: logo +
   description, quick links, services links, newsletter form, social
   icons. Copyright bar at bottom. Footer MUST link
   https://www.componentdock.com/.

## Requirements

### Feature: Triumph Template

#### Scenario: Header renders with navigation and CTA

- **GIVEN** the page is loaded
- **THEN** the header displays a logo
- **AND** navigation links: Home, About, Services, Portfolio, Blog, Contact
- **AND** a phone number link
- **AND** a "Get Free Consultant" button
- **WHEN** the user scrolls down
- **THEN** the header becomes sticky with a shadow

#### Scenario: Hero section displays correctly

- **GIVEN** the page is loaded
- **THEN** a hero section is visible with a dark background image
- **AND** a headline "Get the help you need, every step of the way"
- **AND** a subtext description
- **AND** a "Get Started" CTA button
- **AND** a decorative image on the right side

#### Scenario: Client testimonials section shows three cards

- **GIVEN** the page is loaded
- **THEN** the testimonials section displays three columns
- **AND** each card has a heading, description text, and an icon

#### Scenario: Emergency / About section with image background

- **GIVEN** the page is loaded
- **THEN** a section with an image background is visible
- **AND** it contains a CTA button

#### Scenario: Services area on gray background

- **GIVEN** the page is loaded
- **THEN** the services section has a light gray (#F8FAFC) background
- **AND** displays "Improved Digital Experience" heading
- **AND** shows two service cards with icons and "Learn More" links

#### Scenario: Testimonial quote section

- **GIVEN** the page is loaded
- **THEN** a testimonial section shows a quote
- **AND** the author name and title are displayed
- **AND** an avatar image is shown

#### Scenario: Portfolio / Handpicked section

- **GIVEN** the page is loaded
- **THEN** a portfolio section displays project cards in a grid
- **AND** each card has an image, title, description, and "View Project" link

#### Scenario: Support / Services list section

- **GIVEN** the page is loaded
- **THEN** a services list section displays category items
- **AND** contact information (email, address, phone) is shown
- **AND** a CTA button is present

#### Scenario: Footer renders with all columns

- **GIVEN** the page is loaded
- **THEN** the footer has a dark gradient background
- **AND** displays logo, quick links, services, and newsletter columns
- **AND** social media icon links are present
- **AND** a copyright bar with "Component Dock" link is at the bottom

#### Scenario: Responsive layout on mobile

- **GIVEN** the viewport width is less than 768px
- **THEN** the navigation collapses into a hamburger menu
- **AND** the hero text scales down appropriately
- **AND** the three-column testimonial stacks vertically
- **AND** the portfolio grid becomes single-column
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] Header: transparent → sticky on scroll, nav links, CTA button, mobile menu
- [ ] Hero: dark bg image, headline, subtext, CTA, decorative image
- [ ] Testimonials: 3 cards with icon, heading, description
- [ ] Emergency/about: image background section with CTA
- [ ] Services (gray bg): heading, description, service cards with icons
- [ ] Testimonial quote: avatar, quote, author name/title
- [ ] Portfolio: project grid, images, titles, "View Project" links
- [ ] Support section: service categories list, contact info, CTA
- [ ] Footer: gradient bg, multi-column, Component Dock link, copyright
- [ ] Responsive: mobile menu, stacked layouts at <768px
- [ ] Design tokens match: DM Sans, #FF6D21 orange, #232F55 navy, 5px radius
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
