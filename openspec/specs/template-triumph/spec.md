# Template: Triumph (IT Services / Digital Agency)

## Purpose

Recreation of ColorLib's "Victor" template
(https://colorlib.com/wp/template/victor/) for the free-react-templates
monorepo. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source slug: `victor`
Preview URL: https://preview.colorlib.com/theme/victor/
New name: `triumph` (apps/triumph, @free-react-templates/triumph)

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

## Gherkin requirements

### Feature: Triumph Template

#### Scenario: Header renders with navigation and CTA

Given the page is loaded
Then the header displays a logo
And navigation links: Home, About, Services, Portfolio, Blog, Contact
And a phone number link
And a "Get Free Consultant" button
When the user scrolls down
Then the header becomes sticky with a shadow

#### Scenario: Hero section displays correctly

Given the page is loaded
Then a hero section is visible with a dark background image
And a headline "Get the help you need, every step of the way"
And a subtext description
And a "Get Started" CTA button
And a decorative image on the right side

#### Scenario: Client testimonials section shows three cards

Given the page is loaded
Then the testimonials section displays three columns
And each card has a heading, description text, and an icon

#### Scenario: Emergency / About section with image background

Given the page is loaded
Then a section with an image background is visible
And it contains a CTA button

#### Scenario: Services area on gray background

Given the page is loaded
Then the services section has a light gray (#F8FAFC) background
And displays "Improved Digital Experience" heading
And shows two service cards with icons and "Learn More" links

#### Scenario: Testimonial quote section

Given the page is loaded
Then a testimonial section shows a quote
And the author name and title are displayed
And an avatar image is shown

#### Scenario: Portfolio / Handpicked section

Given the page is loaded
Then a portfolio section displays project cards in a grid
And each card has an image, title, description, and "View Project" link

#### Scenario: Support / Services list section

Given the page is loaded
Then a services list section displays category items
And contact information (email, address, phone) is shown
And a CTA button is present

#### Scenario: Footer renders with all columns

Given the page is loaded
Then the footer has a dark gradient background
And displays logo, quick links, services, and newsletter columns
And social media icon links are present
And a copyright bar with "Component Dock" link is at the bottom

#### Scenario: Responsive layout on mobile

Given the viewport width is less than 768px
Then the navigation collapses into a hamburger menu
And the hero text scales down appropriately
And the three-column testimonial stacks vertically
And the portfolio grid becomes single-column
And the footer columns stack vertically

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
