# Template: Fondant (Food & Drink / Bakery)
<!-- prep-status: shipped-as=batterly -->
> **SHIPPED-UNDER** — the ColorLib `cake` design this prep describes already
> ships as `apps/batterly` (<https://batterly.free.componentdock.com>).
> Do not scaffold `apps/fondant`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-batterly/spec.md`.

## Purpose

Recreation of the ColorLib "Cake" template
(https://colorlib.com/wp/template/cake/) as a React 19 + Vite + Tailwind 4 +
TypeScript single-page app. Live preview:
https://preview.colorlib.com/theme/cake/.

Stack: Vite latest, React 19, Tailwind CSS 4, TypeScript strict. Deployed to
`fondant.free.componentdock.com`.

## Source reference

- **ColorLib slug:** `cake`
- **Preview URL:** https://preview.colorlib.com/theme/cake/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cake-free-template.jpg
- **Fonts:** Playfair Display (headings), Montserrat (body) — loaded via Google Fonts / Cloudflare Fonts

## Design tokens

| Token | Value | Notes |
|---|---|---|
| `--brand` | `#f08632` | Orange — accent color, section title spans, product section bg |
| `--dark` | `#111111` | Body text, button background, navbar |
| `--white` | `#ffffff` | Hero background, text on dark |
| `--cream` | `#fdf3ea` | Testimonial section background (warm peach) |
| `--light-gray` | `#e1e1e1` | About section background |
| `--text-muted` | `#999999` | Secondary text |
| Heading font | Playfair Display, serif | Section titles, hero headline |
| Body font | Montserrat, sans-serif | Navigation, paragraphs, buttons, all body text |
| Button radius | 0 (sharp corners) | `.site-btn` has no border-radius |
| Button style | Dark bg (#111), white text, uppercase, letter-spacing 2px, font-weight 600, padding 14px 30px |
| Letter spacing | 2px (buttons), 4px (section title spans) |

## Section structure (top → bottom)

1. **Header / Navigation** — Top bar (currency selector, language, sign-in) + sticky nav bar with logo, links (Home, Pages, Classes, Blog, Contact), search/cart icons
2. **Hero Slider** — Full-width owl-carousel slider. Heading: "Making your life sweeter one bite at a time!" + CTA button "Our cakes". Background images of cakes/pastries.
3. **About** — Section title "About Cake shop" / subtitle "Cakes and bakes from the house of Queens!" + descriptive text + 4 stat bars (progress bars with counts: Years of Experience, Cake variety, Food specialist, Happy customer)
4. **Product / Class Cakes** — Orange background (#f08632). Section title "Class cakes" / "Made from your own hands". Grid of 4 product cards: image, label (e.g. "Sale"), name + price (Dozen Cupcakes $32.00, Cookies and Cream $30.00, Gluten Free Mini Dozen $31.00, Cookie Dough $25.00)
5. **Team** — Section title "Our team" / "Sweet Baker". 3 team member cards with circular portrait, name, role (Decorater), social icons overlay on hover
6. **Testimonial** — Warm peach background (#fdf3ea). Owl-carousel slider. Quote text + author (Kerry D.Silva, New york) with circular portrait
7. **Instagram** — Full-width background image. Overlay: "Follow us on instagram" / "Sweet moments are saved as memories." + 4 image thumbnails in a row
8. **Footer** — Dark background. 4 columns: About (logo + social links), Navigation links, Information links, Newsletter signup (email input + subscribe button)

## Requirements

### Hero

#### Scenario: Hero slider renders with headline and CTA

- **GIVEN** the user opens the Fondant page
- **THEN** a hero section is visible at the top
- **AND** the heading text contains "sweeter" or "bite"
- **AND** a CTA button is visible

#### Scenario: Hero CTA button links to products

- **GIVEN** the hero section is displayed
- **WHEN** the user clicks the CTA button
- **THEN** the page scrolls to the products section

### About

#### Scenario: About section displays stat bars

- **GIVEN** the user scrolls to the About section
- **THEN** a section title is visible
- **AND** 4 stat/progress bar items are shown
- **AND** each bar has a label and a numeric value

### Products

#### Scenario: Product grid shows 4 items on orange background

- **GIVEN** the user scrolls to the Products section
- **THEN** the section has an orange background
- **AND** 4 product cards are displayed
- **AND** each card shows an image, product name, and price

#### Scenario: Product cards have hover effect

- **GIVEN** a product card is displayed
- **WHEN** the user hovers over the card image
- **THEN** the card shows a visual hover transition

### Team

#### Scenario: Team section shows 3 members

- **GIVEN** the user scrolls to the Team section
- **THEN** 3 team member cards are displayed
- **AND** each card shows a portrait, name, and role

#### Scenario: Team social icons appear on hover

- **GIVEN** a team member card is displayed
- **WHEN** the user hovers over the card
- **THEN** social media icon links are revealed

### Testimonial

#### Scenario: Testimonial slider displays quotes

- **GIVEN** the user scrolls to the Testimonial section
- **THEN** the section has a warm peach background
- **AND** at least one testimonial is visible
- **AND** each testimonial shows a quote and author with portrait

### Instagram

#### Scenario: Instagram section shows image grid

- **GIVEN** the user scrolls to the Instagram section
- **THEN** a heading about Instagram is visible
- **AND** a row of thumbnail images is displayed

### Footer

#### Scenario: Footer has 4 columns and newsletter

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are displayed (About, Navigation, Information, Newsletter)
- **AND** an email input field is visible in the newsletter column
- **AND** a subscribe button is present
- **AND** a link to componentdock.com is present

## Verification checklist

- [ ] Hero slider renders with correct heading and CTA
- [ ] About section shows 4 stat bars with correct labels
- [ ] Products section has orange background with 4 product cards
- [ ] Team section shows 3 members with hover social icons
- [ ] Testimonial section has peach background with slider
- [ ] Instagram section shows heading + image thumbnails
- [ ] Footer has 4 columns + newsletter form
- [ ] Fonts: Playfair Display (headings), Montserrat (body)
- [ ] Brand color #f08632 used for accent elements
- [ ] Responsive: mobile menu / off-canvas nav works
- [ ] All placeholder images use picsum.photos/seed/fondant-*
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME set to fondant.free.componentdock.com
- [ ] Tests pass at 100% coverage
