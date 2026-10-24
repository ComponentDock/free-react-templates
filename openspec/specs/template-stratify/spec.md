# Template: Stratify (Business Consulting)
<!-- prep-status: shipped-as=bizmark -->
> **SHIPPED-UNDER** — the ColorLib `bizcon` design this prep describes already
> ships as `apps/bizmark` (<https://bizmark.free.componentdock.com>).
> Do not scaffold `apps/stratify`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bizmark/spec.md`.

## Purpose

Recreation of ColorLib's **Bizcon** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript app.

- **Source slug:** `bizcon`
- **ColorLib page:** https://colorlib.com/wp/template/bizcon/
- **Preview URL:** https://preview.colorlib.com/theme/bizcon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizcon-free-template.jpg
- **New app name:** `stratify` (app folder: `apps/stratify`, package: `@free-react-templates/stratify`)
- **Deploy target:** https://stratify.free.componentdock.com

## Design tokens (extracted from preview CSS)

### Brand colors

| Token                | Hex       | Usage                                              |
| -------------------- | --------- | -------------------------------------------------- |
| `--brand-primary`    | `#ff7e5f` | Primary buttons, headings, accent links, gradients |
| `--brand-secondary`  | `#feb47b` | Gradient endpoint (hero gradient), highlights      |
| `--brand-bg-light`   | `#f9f9ff` | Alternating section backgrounds                    |
| `--brand-bg-subtle`  | `#f0e9ff` | Subtle purple accent backgrounds                   |
| `--brand-bg-gray`    | `#f7f7f7` | Services section gray background                   |
| `--brand-text-dark`  | `#2f373d` | Primary body text                                  |
| `--brand-text-mid`   | `#666666` | Secondary body text                                |
| `--brand-text-light` | `#999999` | Tertiary/placeholder text                          |
| `--brand-white`      | `#fff`    | Button text, card backgrounds                      |
| `--brand-blue`       | `#415094` | Social icons, secondary accent                     |
| `--brand-teal`       | `#4cd3e3` | Social icons, secondary accent                     |

### Hero gradient

The banner uses a diagonal gradient: `linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)` — a warm orange-to-peach gradient.

### Typography

- **Primary font:** `"Poppins", sans-serif` — used for headings, body, buttons
- **Secondary font:** `"Martel", serif` — used for decorative/accent text
- **Body fallback:** `"Roboto", sans-serif`

### Buttons

- **Primary CTA (`.btn_1`):** background `#ff7e5f`, text `#fff`, padding `14px 40px`, border-radius `50px` (pill shape), no border
- **Secondary/outline CTA (`.btn_2`):** border `2px solid #ff7e5f`, text `#ff7e5f`, transparent background, border-radius `50px`, padding `14px 30px`

### Section backgrounds

- Hero banner: gradient background + decorative PNG image on right, height ~880px
- About: white background
- Services: gray (`#f7f7f7`)
- Reviews/testimonials: light (`#f9f9ff`)
- Portfolio: white
- Secondary services/CTA: white
- Blog: white
- Footer: dark background
- Newsletter section (within footer): warm gradient (`#ff7e5f` → `#feb47b`)

## Requirements

### Navbar

Feature: Stratify Navbar

#### Scenario: Desktop navigation shows all menu items

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar displays "Bizcon" brand logo text
- **AND** the navbar shows links: Home, About, Blog (with dropdown), Page (with dropdown), Contact
- **AND** the navbar has a transparent/overlay background on the hero

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** the user is on a mobile viewport
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu expands/collapses
- **AND** all nav items are accessible

### Hero / Banner

Feature: Stratify Hero Section

#### Scenario: Hero displays headline and CTA

- **GIVEN** the user lands on the page
- **WHEN** the hero section renders
- **THEN** it shows the headline "Lead from Front in Business Innovation"
- **AND** it shows supporting subtext
- **AND** a "Learn More" primary CTA button is visible
- **AND** an "Intro Video" link/button is present
- **AND** the background uses the orange-to-peach gradient
- **AND** decorative floating animation elements are present

#### Scenario: Hero has the warm gradient background

- **GIVEN** the user views the hero section
- **THEN** the background displays a diagonal gradient from coral-orange to peach

### About Section

Feature: Stratify About Section

#### Scenario: About section shows company experience

- **GIVEN** the user scrolls to the about area
- **THEN** the heading reads "We Have 24 Year Experience in consulting"
- **AND** descriptive paragraph text is shown
- **AND** an "About Us" CTA button is visible
- **AND** the layout is a two-column split (text left, image right or vice versa)

### Services Section

Feature: Stratify Services Section

#### Scenario: Services section on gray background shows service cards

- **GIVEN** the user scrolls to the services area
- **THEN** the section has a gray (#f7f7f7) background
- **AND** the heading reads "We Provide Best Services"
- **AND** three service cards are displayed
- **AND** each card has a title, description, and icon/number indicator

#### Scenario: Services section has light background

- **GIVEN** the user views the services section
- **THEN** the background color is #f7f7f7 (light gray)

### Reviews / Testimonials

Feature: Stratify Reviews Section

#### Scenario: Testimonials carousel shows customer reviews

- **GIVEN** the user scrolls to the reviews area
- **THEN** the heading reads "Customer Are Saying"
- **AND** a carousel/slider of testimonials is displayed
- **AND** each testimonial shows a name, role/title, and quote
- **AND** navigation dots or arrows allow browsing testimonials

### Portfolio Section

Feature: Stratify Portfolio Section

#### Scenario: Portfolio grid shows project thumbnails

- **GIVEN** the user scrolls to the portfolio area
- **THEN** the heading reads "Explore Our Best Practice Area"
- **AND** four portfolio items are displayed in a grid
- **AND** each item has a title label overlay
- **AND** a "Load More" button is available

### Secondary Services / CTA

Feature: Stratify Secondary Services Section

#### Scenario: Secondary services section with CTA

- **GIVEN** the user scrolls past the portfolio
- **THEN** the heading reads "We Providing high quality adviser service"
- **AND** descriptive text is shown
- **AND** a "Learn More" CTA button is visible

### Blog Section

Feature: Stratify Blog Section

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the blog area
- **THEN** the heading reads "Update From Blog"
- **AND** three blog post cards are displayed
- **AND** each card has a thumbnail image, title, and "read more" link

### Footer

Feature: Stratify Footer

#### Scenario: Footer contains newsletter signup and links

- **GIVEN** the user scrolls to the footer
- **THEN** a newsletter signup section is shown with the warm gradient background
- **AND** the footer has columns: Top Products, Quick Links, Features, Resources
- **AND** the copyright bar is shown at the bottom
- **AND** the footer links to https://www.componentdock.com/ (branded "Component Dock")

## Verification checklist

- [ ] Navbar: desktop shows all items, mobile toggles
- [ ] Hero: gradient background, headline, subtext, two CTAs, decorative elements
- [ ] About: two-column layout, heading, description, CTA button
- [ ] Services: gray background, 3 cards with icons
- [ ] Reviews: carousel with testimonials, names, roles
- [ ] Portfolio: 4-item grid with labels, Load More button
- [ ] Secondary CTA: heading, description, Learn More button
- [ ] Blog: 3 post cards with thumbnails
- [ ] Footer: newsletter gradient section, link columns, copyright, Component Dock link
- [ ] All design tokens match reference (colors, fonts, border-radius, spacing)
- [ ] Placeholder images via picsum.photos
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
