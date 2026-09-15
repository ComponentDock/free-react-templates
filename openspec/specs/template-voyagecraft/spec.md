# Template: VoyageCraft (Travel Agency)

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

## Gherkin Requirements

### Feature: VoyageCraft Travel Agency Template

#### Scenario: Navbar displays correctly
- **Given** the page loads
- **When** the navbar is visible
- **Then** the navbar has a dark background (`#343a40`)
- **And** the brand text "VoyageCraft" is displayed with a subtitle "Travel Agency"
- **And** navigation links are: Home, About, Destination, Blog, Contact
- **And** a "Book Now" CTA button appears on the right
- **And** the navbar becomes semi-transparent/scrolled on scroll

#### Scenario: Hero section renders
- **Given** the page loads
- **When** the hero section is visible
- **Then** a full-width background image is displayed
- **And** a dark semi-transparent overlay covers the image
- **And** centered text reads "Travel to the any corner of the world, without going around in circles"
- **And** the main heading reads "Make Your Tour Amazing With Us"
- **And** a circular play button icon is displayed above the text
- **And** text is white on dark overlay

#### Scenario: Search form displays correctly
- **Given** the hero section is visible
- **When** the search form is rendered below the hero
- **Then** four input fields are shown: Destination, Check-in date, Check-out date, Price Limit
- **And** the Destination field has a search icon
- **And** the date fields have calendar icons
- **And** the Price Limit field is a dropdown select
- **And** a "Search" button spans the full width at the end
- **And** the form sits in a white card overlay

#### Scenario: Services section displays correctly
- **Given** the page loads
- **When** the services section is visible
- **Then** the heading reads "It's time to start your adventure"
- **And** descriptive text is shown on the right (desktop)
- **And** a "Search Destination" primary button is below the text
- **And** four service cards are displayed in a 2x2 grid: Activities, Travel Arrangements, Private Guide, Location Manager
- **And** each card has an icon and short description
- **And** the section has a light gray background

#### Scenario: Counter/about section displays correctly
- **Given** the page loads
- **When** the counter section is visible
- **Then** the left half shows a background image
- **And** the right half shows heading "Make Your Tour Memorable and Safe With Us"
- **And** descriptive paragraph text is below the heading
- **And** three stat counters are displayed: Successful Tours (300), Happy Tourist (24000), Place Explored (200)
- **And** counters animate on scroll

#### Scenario: Best Place Destinations grid renders
- **Given** the page loads
- **When** the destinations grid is visible
- **Then** the heading reads "Best Place Destination"
- **And** four destination cards are displayed in a row: Singapore (8 Tours), Canada (2 Tours), Thailand (5 Tours), Australia (5 Tours)
- **And** each card has a background image with text overlay
- **And** the overlay shows destination name and tour count

#### Scenario: Tour Destination cards render
- **Given** the page loads
- **When** the tour destinations section is visible
- **Then** the heading reads "Tour Destination"
- **And** six tour cards are displayed in two rows of three
- **And** each card has: background image, price tag ($300/person), duration (7–10 Days Tour), destination name (Bali, Indonesia), location pin icon, and amenity icons (shower, king-size, mountain/beach)
- **And** the cards have a white text area below the image

#### Scenario: Testimonials carousel renders
- **Given** the page loads
- **When** the testimonials section is visible
- **Then** the heading reads "Tourist Feedback"
- **And** a carousel of testimonial cards is displayed
- **And** each card shows: testimonial text, circular user avatar, name, and position
- **And** the section has a background image with gradient overlay

#### Scenario: Recent Posts section renders
- **Given** the page loads
- **When** the recent posts section is visible
- **Then** the heading reads "Recent Post"
- **And** three blog cards are displayed in a row
- **And** each card has: background image, date badge (day + month + year), post title, and excerpt text
- **And** the date badge shows on the left with stacked day/month/year

#### Scenario: Footer renders correctly
- **Given** the page loads
- **When** the footer is visible
- **Then** it has a background image with dark overlay
- **And** four columns are displayed: brand + social links, Information links, Experience links, Have a Questions? contact info
- **And** social icons include Twitter, Facebook, Instagram
- **And** Information column has: Online Enquiry, General Enquiries, Booking Conditions, Privacy and Policy, Refund Policy, Call Us
- **And** Experience column has: Adventure, Hotel and Restaurant, Beach, Nature, Camping, Party
- **And** contact info shows address, phone, and email
- **And** a copyright line includes "Made with Component Dock" linking to `https://www.componentdock.com/`

#### Scenario: All images use placeholders
- **Given** the page loads
- **When** any image is rendered
- **Then** images use `https://picsum.photos/seed/voyagecraft-<n>/<w>/<h>` for deterministic placeholders
- **And** no original ColorLib image assets are used

#### Scenario: No ColorLib references in app code
- **Given** the source code is inspected
- **When** searching for "colorlib" or "preview.colorlib.com" in `apps/voyagecraft/`
- **Then** zero matches are found
- **And** provenance exists only in the spec and TEMPLATES.md

## Verification Checklist

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
- [ ] No ColorLib references in `apps/voyagecraft/`
- [ ] `public/CNAME`: `voyagecraft.free.componentdock.com`
- [ ] `package.json` homepage: `https://voyagecraft.free.componentdock.com`
- [ ] `vite.config.ts`: registers `injectUiSource()`
- [ ] Tests: 100% coverage
- [ ] Build passes
