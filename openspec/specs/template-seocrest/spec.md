# Template: SeoCrest (SEO / Digital Marketing)

## Purpose

Recreation of ColorLib "Seos" — an SEO services / digital marketing agency single-page website.

- **ColorLib source:** https://colorlib.com/wp/template/seos/
- **Live preview:** https://preview.colorlib.com/theme/seos/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/seos-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Preview analysis:** Preview was reachable; DOM and CSS extracted 2026-09-29.

## Design Tokens

Extracted from `style.css` on the live preview:

| Token | Value | Usage |
|---|---|---|
| `brand-primary` | `#ff5c97` | Buttons, accents, hover states, preloader spinner |
| `brand-secondary` | `#2b4b80` | Headings, section titles, hero h1 |
| `brand-accent` | `#4043bc` | Header CTA button, dropdown border-top, secondary accents |
| `brand-dark` | `#ec4683` | Button hover background, darker pink variant |
| `text-primary` | `#707b8e` | Body paragraph text |
| `text-dark` | `#002e5b` / `#0b1c39` | Nav links |
| `bg-light` | `#f9f9ff` | Light section backgrounds, form inputs |
| `bg-lighter` | `#fbf9ff` | Sidebar widgets, secondary backgrounds |
| `border-light` | `#f0e9ff` | Subtle borders, divider lines |
| `font-family` | `Poppins, sans-serif` | All text (Google Fonts) |
| `font-weight` | 400 body, 500 headings, 600-700 titles | |
| `btn-radius` | `5px` | Primary buttons (.btn) |
| `card-radius` | `6px` | Service cards (.single-do) |
| `hero-heading-size` | 65px / font-weight 700 | `.slider-area .hero__caption h1` |
| `section-title-size` | 50px / font-weight 700 | `.section-tittle h2` |
| `btn-letter-spacing` | 3px uppercase | `.boxed-btn` letter-spacing |
| Gradient (CTA area) | `linear-gradient(131deg, #ff5c97, #7b40c0)` | "Have a project" section |

## Section Structure (from preview DOM)

1. **Header** — Transparent over hero, logo left, nav center (Home, About, Services, Contact, Blog, Pages), "Contact Us" CTA button right. Sticky on scroll with white background + shadow.
2. **Hero / Slider** — Two-column layout: headline "We Collect High Quality Leads" + paragraph + "Contact Us" button left; illustration/image right. Background uses plus-shape decorative elements.
3. **Services ("What We Do")** — 3-column card grid: Link Building, Content Marketing, On-Page SEO. Each card: icon, title, description, "get started" link with arrow. Decorative shapes on sides.
4. **We Create (Steps)** — Background image + overlay section. "We Create a Steps to Build a Successful Digital Product" heading + paragraph + "Contact Us" button. Full-width with decorative background.
5. **Generating Customers** — 4-column feature grid: All Sizes Business, Awesome Results, Keep you in the Loop, Significant ROI. Each with icon + title + description.
6. **Pricing** — 3-column pricing cards: $5, $20, $30 tiers. Each lists features (traffic increase, social media, optimization, support). Center card has "Most Popular" highlight.
7. **Portfolio / Visit** — 4-item portfolio grid with hover overlay. Titles like "citmv.com", "mvsp.net", etc. Category: "Email Marketing".
8. **Testimonials** — Carousel with quote + author info (name + role). Dark/purple background area.
9. **Blog / Tips** — 3-column blog post cards: image + title + "Continue Reading" + date.
10. **CTA / Contact** — "Have project in mind?" with gradient background (pink→purple), paragraph text, "Contact Us" button.
11. **Footer** — Dark background, multiple columns (About, Quick Link, Newsletter with form, Follow Us social links). Footer bottom with copyright + Component Dock link.

## Requirements

### Feature: SeoCrest template behaviour

Feature: SeoCrest — SEO Digital Marketing Template

Background:
- **GIVEN** the app is built with Vite + React 19 + Tailwind 4 + TypeScript
- **AND** the design tokens are defined in index.css @theme

#### Scenario: Header displays transparent over hero

- **GIVEN** the page loads at the top
- **THEN** the header background is transparent
- **AND** the logo is visible on the left
- **AND** nav links (Home, About, Services, Contact, Blog, Pages) are centered
- **AND** a "Contact Us" button appears on the right
- **WHEN** the user scrolls down
- **THEN** the header becomes sticky with white background and shadow

#### Scenario: Hero section renders two-column layout

- **GIVEN** the hero section is visible
- **THEN** a heading "We Collect High Quality Leads" is displayed
- **AND** a paragraph describes the service
- **AND** a "Contact Us" CTA button is rendered
- **AND** an illustration or image is shown on the right

#### Scenario: Services section shows three service cards

- **GIVEN** the services section is visible
- **THEN** 3 service cards are displayed in a grid
- **AND** each card has an icon, title, description, and "get started" link

#### Scenario: Generating Customers shows four feature blocks

- **GIVEN** the generating-customers section is visible
- **THEN** 4 feature blocks are displayed
- **AND** each block has an icon, title, and description

#### Scenario: Pricing section shows three tier cards

- **GIVEN** the pricing section is visible
- **THEN** 3 pricing cards are displayed
- **AND** each card shows a price and feature list

#### Scenario: Portfolio section displays project grid

- **GIVEN** the portfolio section is visible
- **THEN** 4 portfolio items are displayed in a grid
- **AND** each item has a title and category label

#### Scenario: Testimonials carousel shows client quotes

- **GIVEN** the testimonials section is visible
- **THEN** a carousel with client quotes is rendered
- **AND** each slide shows a quote, author name, and role

#### Scenario: Blog section shows three post cards

- **GIVEN** the blog section is visible
- **THEN** 3 blog post cards are displayed
- **AND** each card has an image, title, "Continue Reading" link, and date

#### Scenario: CTA section renders gradient background

- **GIVEN** the CTA section is visible
- **THEN** a gradient background (pink to purple) is displayed
- **AND** "Have project in mind?" heading is shown
- **AND** a "Contact Us" button is rendered

#### Scenario: Footer has multi-column layout

- **GIVEN** the footer is visible
- **THEN** it contains About, Quick Link, Newsletter, and Follow Us columns
- **AND** a copyright line with "Component Dock" link is at the bottom
- **AND** the newsletter column includes an email input and subscribe button

#### Scenario: All sections match ColorLib Seos design tokens

- **GIVEN** the template is rendered
- **THEN** heading color is #2b4b80
- **AND** body text color is #707b8e
- **AND** primary button color is #ff5c97
- **AND** font family is Poppins
- **AND** button border-radius is 5px

## Verification checklist

- [ ] Header: transparent over hero, sticky on scroll with shadow
- [ ] Hero: two-column (text left, image right), brand blue h1, pink CTA button
- [ ] Services: 3-card grid with icons, "get started" links
- [ ] We Create: full-width background image section with heading + CTA
- [ ] Generating Customers: 4-column feature grid with icons
- [ ] Pricing: 3 cards with prices and feature lists
- [ ] Portfolio: 4-item grid with hover effects
- [ ] Testimonials: carousel with quotes, names, roles
- [ ] Blog: 3 post cards with images, titles, dates
- [ ] CTA: gradient pink→purple background, heading, CTA button
- [ ] Footer: 4-column layout (About, Quick Links, Newsletter, Social), copyright with Component Dock link
- [ ] Design tokens: Poppins font, #ff5c97 primary, #2b4b80 headings, 5px button radius
- [ ] Responsive: mobile hamburger menu, stacked layouts on small screens
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images from picsum.photos with deterministic seeds
