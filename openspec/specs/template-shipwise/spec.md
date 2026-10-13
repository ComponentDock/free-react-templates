# Template: Shipwise (Logistics / Transport)

## Purpose

Recreation of ColorLib's **Carries** template
(source: https://colorlib.com/wp/template/carries/)
preview: https://preview.colorlib.com/theme/carries/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

New name: `shipwise` (never "carries" — naming rule enforced)

---

## Design tokens (extracted from preview + style.css)

| Token                 | Value                                        |
| --------------------- | -------------------------------------------- |
| Brand accent          | `#f39c12` (amber/orange)                     |
| Secondary accent      | `#0083ff` (blue)                             |
| Font family           | `'Roboto', sans-serif`                       |
| Heading color         | `#3c4a62` (dark slate)                       |
| Body text color       | `#5d6b82` / `#687284` (medium slate)         |
| Gray section bg       | `#f7f9fc` (light blue-gray)                  |
| Dark section bg       | `#3c4147` (footer / overlays)                |
| Footer bg             | `#3c4147` (dark)                             |
| Light card bg         | `#f7f9fc`                                    |
| Deep gray bg          | `#eff1ff`                                    |
| Button radius         | 0 (sharp) for CTA border buttons; 5px for form buttons |
| Button style          | `border: 2px solid; border-radius: 3px; letter-spacing: 2px; padding: 12px 30px; text-transform: uppercase` (hero) |
| Form button           | `border-radius: 5px; background: #f39c12; color: #fff` |
| Quote form button     | `border-radius: 5px; background: #5d6b82; letter-spacing: 2px` |
| Subscribe button      | `border-radius: 5px; background: #f39c12`     |
| Parallax bg overlay   | `#3c4147` (used on promo-bottom-area)         |
| Service icon shape    | Hexagon (`.service-icon-hexagon`)              |

---

## Section order (from preview DOM)

1. **Navbar** — sticky top bar with brand, search icon, language selector, nav links (stellar nav)
2. **Hero Slider** — 2 full-height parallax slides with headline + CTA buttons (`.welcome-slider-area`)
3. **Blog Cards** — 3-column grid of blog/news cards (`.blog-area.gray-bg`) with images + titles
4. **About + Quote Form** — two-column: left = about text + counter stats, right = quote form (`.about-area.gray-bg`)
5. **Service Area** — title "Our Service" + hexagon icon cards for Warehouse/Road Freight/Sea Freight/Air Freight (`.service-area`)
6. **Service Catalog** — "Why Choose Us?" with parallax bg, checklist items, 4 promo icon cards (`.promo-area`)
7. **Testimonials** — client photos + quote carousel, centered (`.testmonial-area`)
8. **Footer** — dark bg, 4-column: About Us + Latest Tweets + Customer Service links + Instagram feed + subscribe form (`.footer-area.dark-bg`)

---

## Requirements

### Feature: Navbar

#### Scenario: Navbar displays brand and navigation links

- **GIVEN** I visit the Shipwise homepage
- **THEN** I see a navigation bar with brand logo and nav links
- **AND** the navbar is sticky on scroll

#### Scenario: Navbar has search and language controls

- **GIVEN** I visit the Shipwise homepage
- **THEN** I see a search icon and language selector in the top bar

### Feature: Hero Slider

#### Scenario: Hero displays two slides with headlines

- **GIVEN** I visit the Shipwise homepage
- **THEN** I see a full-width hero slider with two slides
- **AND** each slide has a headline and CTA button

#### Scenario: Hero buttons navigate or trigger action

- **GIVEN** I am on the hero slider
- **THEN** each CTA button is styled with border and uppercase text

### Feature: Blog Cards

#### Scenario: Blog section shows three cards

- **GIVEN** I scroll to the blog section
- **THEN** I see three blog cards in a grid
- **AND** each card has an image, title, and meta info

#### Scenario: Blog section has gray background

- **GIVEN** I view the blog section
- **THEN** the background color is light blue-gray (#f7f9fc)

### Feature: About + Quote Form

#### Scenario: About section displays text and stats

- **GIVEN** I scroll to the about section
- **THEN** I see introductory text on the left
- **AND** counter statistics below the text

#### Scenario: Quote form collects shipping inquiry

- **GIVEN** I scroll to the quote form area
- **THEN** I see fields for Name, Email, Phone, Type, Quantity, Destination
- **AND** a Submit button styled in dark slate color

### Feature: Service Area

#### Scenario: Service section shows four hexagon service cards

- **GIVEN** I scroll to the service section
- **THEN** I see four service cards with hexagon icons
- **AND** the services are: Warehouse, Road Freight, Sea Freight, Air Freight

#### Scenario: Service icons use hexagon shape

- **GIVEN** I view the service cards
- **THEN** each service icon is inside a hexagon container

### Feature: Service Catalog / Why Choose Us

#### Scenario: Why Choose Us section with checklist

- **GIVEN** I scroll to the catalog section
- **THEN** I see "Why Choose Us?" heading
- **AND** a checklist of 4-5 benefits
- **AND** a parallax background image

#### Scenario: Promo cards display 4 features

- **GIVEN** I view the catalog area
- **THEN** I see 4 promo cards: Our Location, Latest News, 24/7 Support, Fast Delivery
- **AND** each has an icon and short description

### Feature: Testimonials

#### Scenario: Testimonials display client quotes

- **GIVEN** I scroll to the testimonials section
- **THEN** I see a carousel of client testimonials
- **AND** each testimonial has a photo, quote, name, and title

#### Scenario: Testimonials are centered and styled

- **GIVEN** I view the testimonials
- **THEN** the section is centered with a clean background
- **AND** quotes are styled with proper typography

### Feature: Footer

#### Scenario: Footer has four columns

- **GIVEN** I scroll to the footer
- **THEN** I see four widget columns: About Us, Latest Tweets, Customer Service, Instagram Feed

#### Scenario: Footer includes subscribe form

- **GIVEN** I view the footer
- **THEN** I see an email subscription form
- **AND** the subscribe button is amber (#f39c12)

#### Scenario: Footer has dark background

- **GIVEN** I view the footer
- **THEN** the background is dark (#3c4147)
- **AND** text is white

#### Scenario: Footer links to Component Dock

- **GIVEN** I view the footer
- **THEN** I see a link to https://www.componentdock.com/

---

## Verification checklist

- [ ] All 8 sections implemented in correct order
- [ ] Brand color `#f39c12` used for accent buttons and highlights
- [ ] Font family set to Roboto
- [ ] Hexagon icon shapes for service cards
- [ ] Hero slider with 2 slides and CTA buttons
- [ ] Quote form with all 6 fields
- [ ] Parallax background effect on catalog section
- [ ] Footer with 4 columns + subscribe form
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos with seed `shipwise-N`
- [ ] No ColorLib references in app code
- [ ] Spec-only references: preview URL, source slug, design tokens
- [ ] 100% test coverage
- [ ] Build passes
