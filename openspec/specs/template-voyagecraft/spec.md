# Template: VoyageCraft (Travel Agency)
<!-- prep-status: shipped-as=getaway -->
> **SHIPPED-UNDER** — the ColorLib `vacation` design this prep describes already
> ships as `apps/getaway` (<https://getaway.free.componentdock.com>).
> Do not scaffold `apps/voyagecraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-getaway/spec.md`.

## Purpose

Recreation of ColorLib "Vacation" — a free Bootstrap 4 travel agency website template.
- **Source slug**: `vacation`
- **Source URL**: https://colorlib.com/wp/template/vacation/
- **Preview URL**: https://preview.colorlib.com/theme/vacation/
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript
- **Design category**: Travel agency / tourism single-page template

## Design Tokens (extracted from live preview CSS + DOM)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand accent (gold/orange) | `#f9ab30` | Navbar active link, CTA button, accent highlights, icon-video circle, heading spans, blog date styling |
| Primary (CTA button) | `#007bff` → mapped to Tailwind `blue-500` | `.btn-primary` (search button, "Search Destination" CTA) |
| Primary hover | `#0069d9` | Button hover state |
| Dark background | `#33313b` | Testimony section overlay, dark panels |
| Light section bg | `#f7f7f7` / `#dae0e5` | Services section (`bg-light`), alternating section backgrounds |
| Body text | `#999999` (secondary), `#212529` (primary) | Paragraph text, headings |
| Navbar | `#343a40` (dark) | `.navbar-dark .bg-dark` — fully dark top bar |
| Gradient CTA | `linear-gradient(45deg, #2f88fc 0%, #ff5959 100%)` | Testimony section background gradient |
| Footer bg | Image-based (`footer-bg.jpg`) with dark overlay | `.ftco-footer.bg-bottom` |
| White | `#fff` | Card backgrounds, text on dark backgrounds |

### Typography
| Element | Font | Weight | Notes |
|---------|------|--------|-------|
| Body / all text | Poppins | 300–900 | Google Fonts via `<link>`, loaded with weights 300,400,500,600,700,800,900 |
| Headings (h1,h2,h3) | Poppins | 500–700 | `h1` = 2.5rem, `h2` = 2rem, `h3` = 1.75rem |
| Navbar brand | Poppins | 700 | Brand name bold, subtitle `<span>` lighter weight |
| Section headings | Poppins | 600–700 | `.heading-section h2` with `.text-primary` span accent |

### Buttons & Interactive
| Element | Style |
|---------|-------|
| Primary CTA button | `#007bff` bg, white text, `py-3 px-4`, Bootstrap default radius (0.25rem / rounded) |
| Search button | Full-width `.form-control.btn.btn-primary` inside search form |
| Icon-video play circle | Rounded full circle, border, `#f9ab30` hover, centered play icon |
| Navbar "Book Now" | CTA styled nav item with accent color |

### Section Backgrounds
| Section | Background |
|---------|------------|
| Navbar | Dark solid (`#343a40`) |
| Hero | Full-width background image (`images/bg_2.jpg`) with dark overlay |
| Search form | White card overlaying hero (`.search-wrap-1`) |
| Services | Light gray (`#f7f7f7` via `bg-light`) |
| Counter/About | Two-column: left = background image, right = text with counters |
| Best Place Destinations | White, 4-column image cards with text overlay |
| Tour Destinations | White, 3-column + 3-column cards with price/days/amenities |
| Testimonials | Background image (`images/bg_3.jpg`) with gradient overlay |
| Recent Posts | White, 3-column blog cards with image + date badge + text |
| Footer | Background image (`images/footer-bg.jpg`) with dark overlay, 4-column layout |

### Spacing & Layout
- Container max-width: 1140px (Bootstrap 4 default)
- Section padding: `py-5` / `py-3` default, `ftco-no-pt` / `ftco-no-pb` variants
- Column gutters: standard Bootstrap 15px
- Grid: Bootstrap 4 responsive (col-md-3, col-md-4, col-md-6, col-md-7)

## Requirements

### Feature: VoyageCraft Travel Agency Template

#### Scenario: Navbar displays correctly

- **GIVEN** the page loads
- **WHEN** the navbar is visible
- **THEN** the navbar has a dark background (`#343a40`)
- **AND** the brand text "VoyageCraft" is displayed with a subtitle "Travel Agency"
- **AND** navigation links are: Home, About, Destination, Blog, Contact
- **AND** a "Book Now" CTA button appears on the right
- **AND** the navbar becomes semi-transparent/scrolled on scroll

#### Scenario: Hero section renders

- **GIVEN** the page loads
- **WHEN** the hero section is visible
- **THEN** a full-width background image is displayed
- **AND** a dark semi-transparent overlay covers the image
- **AND** centered text reads "Travel to the any corner of the world, without going around in circles"
- **AND** the main heading reads "Make Your Tour Amazing With Us"
- **AND** a circular play button icon is displayed above the text
- **AND** text is white on dark overlay

#### Scenario: Search form displays correctly

- **GIVEN** the hero section is visible
- **WHEN** the search form is rendered below the hero
- **THEN** four input fields are shown: Destination, Check-in date, Check-out date, Price Limit
- **AND** the Destination field has a search icon
- **AND** the date fields have calendar icons
- **AND** the Price Limit field is a dropdown select
- **AND** a "Search" button spans the full width at the end
- **AND** the form sits in a white card overlay

#### Scenario: Services section displays correctly

- **GIVEN** the page loads
- **WHEN** the services section is visible
- **THEN** the heading reads "It's time to start your adventure"
- **AND** descriptive text is shown on the right (desktop)
- **AND** a "Search Destination" primary button is below the text
- **AND** four service cards are displayed in a 2x2 grid: Activities, Travel Arrangements, Private Guide, Location Manager
- **AND** each card has an icon and short description
- **AND** the section has a light gray background

#### Scenario: Counter/about section displays correctly

- **GIVEN** the page loads
- **WHEN** the counter section is visible
- **THEN** the left half shows a background image
- **AND** the right half shows heading "Make Your Tour Memorable and Safe With Us"
- **AND** descriptive paragraph text is below the heading
- **AND** three stat counters are displayed: Successful Tours (300), Happy Tourist (24000), Place Explored (200)
- **AND** counters animate on scroll

#### Scenario: Best Place Destinations grid renders

- **GIVEN** the page loads
- **WHEN** the destinations grid is visible
- **THEN** the heading reads "Best Place Destination"
- **AND** four destination cards are displayed in a row: Singapore (8 Tours), Canada (2 Tours), Thailand (5 Tours), Australia (5 Tours)
- **AND** each card has a background image with text overlay
- **AND** the overlay shows destination name and tour count

#### Scenario: Tour Destination cards render

- **GIVEN** the page loads
- **WHEN** the tour destinations section is visible
- **THEN** the heading reads "Tour Destination"
- **AND** six tour cards are displayed in two rows of three
- **AND** each card has: background image, price tag ($300/person), duration (7–10 Days Tour), destination name (Bali, Indonesia), location pin icon, and amenity icons (shower, king-size, mountain/beach)
- **AND** the cards have a white text area below the image

#### Scenario: Testimonials carousel renders

- **GIVEN** the page loads
- **WHEN** the testimonials section is visible
- **THEN** the heading reads "Tourist Feedback"
- **AND** a carousel of testimonial cards is displayed
- **AND** each card shows: testimonial text, circular user avatar, name, and position
- **AND** the section has a background image with gradient overlay

#### Scenario: Recent Posts section renders

- **GIVEN** the page loads
- **WHEN** the recent posts section is visible
- **THEN** the heading reads "Recent Post"
- **AND** three blog cards are displayed in a row
- **AND** each card has: background image, date badge (day + month + year), post title, and excerpt text
- **AND** the date badge shows on the left with stacked day/month/year

#### Scenario: Footer renders correctly

- **GIVEN** the page loads
- **WHEN** the footer is visible
- **THEN** it has a background image with dark overlay
- **AND** four columns are displayed: brand + social links, Information links, Experience links, Have a Questions? contact info
- **AND** social icons include Twitter, Facebook, Instagram
- **AND** Information column has: Online Enquiry, General Enquiries, Booking Conditions, Privacy and Policy, Refund Policy, Call Us
- **AND** Experience column has: Adventure, Hotel and Restaurant, Beach, Nature, Camping, Party
- **AND** contact info shows address, phone, and email
- **AND** a copyright line includes "Made with Component Dock" linking to `https://www.componentdock.com/`

#### Scenario: All images use placeholders

- **GIVEN** the page loads
- **WHEN** any image is rendered
- **THEN** images use `https://picsum.photos/seed/voyagecraft-<n>/<w>/<h>` for deterministic placeholders
- **AND** no original ColorLib image assets are used

#### Scenario: No ColorLib references in app code

- **GIVEN** the source code is inspected
- **WHEN** searching for "colorlib" or "preview.colorlib.com" in `apps/voyagecraft/`
- **THEN** zero matches are found
- **AND** provenance exists only in the spec and TEMPLATES.md

## Verification checklist

- [ ] Navbar: dark bg, brand + subtitle, 5 nav links + Book Now CTA, scroll behavior
- [ ] Hero: full-width image, dark overlay, centered text, play button icon
- [ ] Search form: 4 inputs (destination, check-in, check-out, price dropdown) + search button
- [ ] Services: 4 cards in 2x2, light bg, heading + description + CTA button
- [ ] Counter/About: split layout (image left, text right), 3 stat counters
- [ ] Best Destinations: 4-column image cards with overlay text
- [ ] Tour Destinations: 6 cards (2 rows × 3), price + duration + amenities
- [ ] Testimonials: carousel with avatar, name, position, quote text
- [ ] Recent Posts: 3 blog cards with date badge, title, excerpt
- [ ] Footer: 4-column layout, social icons, link lists, contact info, Component Dock link
- [ ] Design tokens: Poppins font, #f9ab30 accent, #007bff primary, dark sections
- [ ] All images: picsum.photos placeholders
- [x] No ColorLib references in `apps/voyagecraft/` — superseded: shipped as `apps/getaway`
- [ ] `public/CNAME`: `voyagecraft.free.componentdock.com`
- [ ] `package.json` homepage: `https://voyagecraft.free.componentdock.com`
- [ ] `vite.config.ts`: registers `injectUiSource()`
- [ ] Tests: 100% coverage
- [ ] Build passes
