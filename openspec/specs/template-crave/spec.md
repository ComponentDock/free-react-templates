# Template: Crave (Restaurant Landing)

## Purpose

Crave is a single-page restaurant landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sneaky" website template
(source: https://colorlib.com/wp/template/sneaky/), built under a
DIFFERENT name (Crave — evokes the hunger/appetite theme of a restaurant),
per the monorepo naming mandate (never reuse the ColorLib source name),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 1171
(appears in the main listing) and line 2700 (Restaurant category) — both
`- [ ]` rows of the SAME template. ONE implementation covers all rows
(mark all `[x]` with the same surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Sneaky" — page title "Sneaky Restaurant - Home".
  Free restaurant/food landing page, Bootstrap 4 based. The recreation
  brands itself **Crave** but keeps the same section structure, copy kinds
  and layout.
- **Live preview DOM analyzed (verified 2026-09-14):**
  `https://preview.colorlib.com/theme/sneaky/` — HTTP 200, ~28 KB HTML
  (REACHABLE). Stylesheets: `css/style.css` (custom, ~31 KB),
  `vendors/bootstrap/bootstrap.min.css`, plus
  themify-icons/owl-carousel/Magnific-Popup. The template-specific CSS
  lives in `style.css`.
- **Section order (1:1, from live DOM):**
  1. **Header/Nav** — Logo + nav links (Home, About, Menu, Chef, Blog
     dropdown, Contact). Transparent on scroll-up, solid on scroll-down.
  2. **Hero Banner** — Two-column: left has headline "Foods the most
     precious things" + CTA buttons (Book Now, Watch Video) + 3 feature
     icons (Fast Service, Fresh Food, 24/7 Support); right has a food
     image carousel (owl-carousel).
  3. **About Section** — Two-column: left has overlapping images (about
     images); right has "About Us" intro title + body text + "Learn More"
     button.
  4. **Featured Food** — Carousel of food cards: image, dish name,
     description, star rating, price tag.
  5. **Offer Section** — Full-width: left image, right red card with
     "Italian Pizza Offer / 50% OFF / Read More".
  6. **Food Menu** — Two-column grid of 8 menu items: each with food
     image, dish name, price, description.
  7. **CTA Section** — Dark overlay background with text + "Reservation"
     button.
  8. **Our Chef** — Three chef cards: photo, name, title, hover overlay
     with social icons.
  9. **Reservation Form** — Two-column: left text, right form with name,
     email, phone, date, people, and "Make Reservation" button.
  10. **Blog** — Three blog cards: image, author/date, title.
  11. **Footer** — Five-column: Top Products, Quick Links, Features,
      Resources, Newsletter. Bottom bar with copyright + social icons.
- **Design tokens extracted from style.css:**
  - Brand color: `#e22104` (vivid red-orange)
  - Heading color: `#2f2d4e` (dark navy/charcoal)
  - Body text: `#888` (medium gray)
  - Light background: `#fff8f7` (warm off-white/pink tint)
  - Dark overlay: `rgba(2,1,15,0.7)` (near-black navy)
  - Star rating: `#ffbe0f` (golden yellow)
  - Fonts: "Josefin Sans" (headings), "Open Sans" (body)
  - Button: pill-shaped (border-radius: 30px), red-orange bg, white text
- **Screenshot analyzed** — matches the live DOM: warm-toned restaurant
  aesthetic, overlapping about images, carousel hero, red accent throughout.

## Implementation plan

### Components

1. **Navbar** — Sticky header with logo, nav links, mobile hamburger menu
2. **HeroBanner** — Two-column hero with headline, CTAs, feature icons, carousel
3. **AboutSection** — Two-column about with overlapping images
4. **FeaturedFood** — Food carousel/cards with ratings and prices
5. **OfferBanner** — Image + red offer card overlay
6. **FoodMenu** — Two-column grid of menu items
7. **CtaBanner** — Dark overlay CTA section
8. **ChefSection** — Three chef cards with hover social overlay
9. **ReservationForm** — Two-column reservation section with form
10. **BlogSection** — Three blog post cards
11. **Footer** — Five-column footer with newsletter + Component Dock link

### Key decisions

- Carousel will be a simple CSS scroll-snap slider (no jQuery dependency)
- Placeholder images via `picsum.photos/seed/<template>-<n>/<w>/<h>`
- Icons via `lucide-react` for UI, inline SVG for brand icons
- Fonts: Google Fonts link in index.html for "Josefin Sans" + "Open Sans"
- Footer links to `https://www.componentdock.com/`

## Requirements

### Navbar

#### Scenario: Navbar

- Scenario: Renders logo and navigation links
- Scenario: Shows mobile toggle on small screens
- Scenario: Logo links to home

### HeroBanner

#### Scenario: HeroBanner

- Scenario: Displays headline and CTA buttons
- Scenario: Shows feature icons (Fast Service, Fresh Food, 24/7 Support)
- Scenario: Renders food image carousel

### AboutSection

#### Scenario: AboutSection

- Scenario: Shows "About Us" heading and body text
- Scenario: Renders Learn More button

### FeaturedFood

#### Scenario: FeaturedFood

- Scenario: Shows food cards with name, price, and star ratings

### OfferBanner

#### Scenario: OfferBanner

- Scenario: Displays offer text "50% OFF" and Read More button

### FoodMenu

#### Scenario: FoodMenu

- Scenario: Renders 8 menu items with name and price

### CtaBanner

#### Scenario: CtaBanner

- Scenario: Shows CTA text and Reservation button

### ChefSection

#### Scenario: ChefSection

- Scenario: Shows 3 chef cards with name and title
- Scenario: Shows social icons on hover

### ReservationForm

#### Scenario: ReservationForm

- Scenario: Renders form fields (name, email, phone, date, people)
- Scenario: Has Make Reservation submit button

### BlogSection

#### Scenario: BlogSection

- Scenario: Shows 3 blog cards with title and date

### Footer

#### Scenario: Footer

- Scenario: Shows column headings and link lists
- Scenario: Shows newsletter input
- Scenario: Links to Component Dock
- Scenario: Shows social icons in bottom bar

### App

#### Scenario: App

- Scenario: Composes all sections and sets document title
- Scenario: Shows banner landmark (header) and contentinfo landmark (footer)

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/crave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/crave/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — Scenario: Renders logo and navigation links
- [ ] HeroBanner — Scenario: Displays headline and CTA buttons
- [x] AboutSection — Scenario: Shows "About Us" heading and body text
- [ ] FeaturedFood — Scenario: Shows food cards with name, price, and star ratings
- [ ] OfferBanner — Scenario: Displays offer text "50% OFF" and Read More button
- [ ] FoodMenu — Scenario: Renders 8 menu items with name and price
- [ ] CtaBanner — Scenario: Shows CTA text and Reservation button
- [ ] ChefSection — Scenario: Shows 3 chef cards with name and title
- [ ] ReservationForm — Scenario: Renders form fields (name, email, phone, date, people)
- [ ] BlogSection — Scenario: Shows 3 blog cards with title and date
- [ ] App — Scenario: Composes all sections and sets document title
