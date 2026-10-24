# Template: Inkcraft (Tattoo & Body Art Studio)
<!-- prep-status: shipped-as=inkvibe -->
> **SHIPPED-UNDER** — the ColorLib `tattooz` design this prep describes already
> ships as `apps/inkvibe` (<https://inkvibe.free.componentdock.com>).
> Do not scaffold `apps/inkcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-inkvibe/spec.md`.

## Purpose

Recreation of ColorLib **Tattooz** — a dark, moody tattoo parlor website template.

- **ColorLib source:** https://colorlib.com/wp/template/tattooz/
- **Preview URL:** https://preview.colorlib.com/theme/tattooz/tattoo/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/tattooz-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#fb9902` (amber/orange) | Hover states, scroll-up, footer-bottom bar, section borders, feature bullet color |
| Background dark-1 | `#0d0f11` | Main dark sections (about, project, pricing, blog) |
| Background dark-2 | `#131619` | Alternate dark sections (what-we-do, team, footer-top, feature area) |
| Text primary | `#fff` | All body/headline text on dark backgrounds |
| Text dark | `#222` | Hover text on footer-bottom |
| Overlay | `rgba(0,0,0,0.9)` / black-opacity | Parallax and hero overlays |
| Font family | Montserrat (300, 400, 600) | Global sans-serif |
| Button radius | `3px` | Minimal radius for CTA buttons |
| Button style | White bg, dark text, uppercase, text-transform, 12px font, 8px 35px padding | Hero CTA; hover flips to brand orange |
| Social icons | Round (50% radius), white, 32x32px | Footer social |
| Heading weight | 600 | All headings |

## Replication notes

- The preview page is a multi-demo index; the actual homepage is at `/tattoo/index.html`.
- The original uses Bootstrap 3 grid. Replicate with Tailwind grid/flex.
- Original uses Font Awesome 4 icons. Use `lucide-react` equivalents.
- Original uses flaticon SVG icon fonts for service icons. Use `lucide-react` equivalents (e.g. `PenTool`, `Scissors`, `Sparkles`).
- Parallax sections use a JS-driven background-image parallax effect with a dark overlay (`black-opacity`).
- Gallery uses Isotope for filterable masonry; use CSS grid + React state for category filtering.
- Images: use `https://picsum.photos/seed/inkcraft-<n>/<w>/<h>` placeholders.

## Section structure (from home page, top to bottom)

1. **Navbar** — sticky header: logo left, nav links right (Home, Service, Pages, Blog, Shop, Team, Contact), search + cart icons
2. **Hero Slider** — full-width background images with overlay text ("We Provide Forever."), "Book Now" CTA button
3. **About Us** — centered title + subtitle, two-column: text left ("Our Tattoos Last Longer…"), two images right, "View All" link
4. **What We Do** — centered title + subtitle, 3-column layout: services left (Tattooing, Tattoo Design, Tattoo Removal), center image, services right (Piercing, Laser Removal, Henna Design), each with icon + title + description
5. **Our Latest Tattoos** (Gallery) — centered title + subtitle, category filter buttons (All / Body Design / Hand Design / Leg Design), 4x2 grid of tattoo images with hover overlay link icon
6. **Team** — centered title + subtitle, 4-column cards: photo, overlay social icons, name + role
7. **Discount / CTA** — parallax background image, dark overlay, centered "Get 30% Off Your Body Massage", description, "Book Now" button
8. **Pricing** — centered title + subtitle, 3-column pricing cards (Silver $52 / Diamond $125 / Golden $95), feature lists with check/cross, "Choose Your Pack" button; middle card highlighted (`.active`)
9. **Book Now** — parallax bg image + overlay, two-column: booking form left (first name, last name, date, time, email, pack selection, submit), illustration right
10. **Latest News** (Blog) — centered title + subtitle, 4-column blog cards: image, meta (date, author, comments), title, excerpt, "Read More" link
11. **Footer** — 4-column: About Us (text + contact), Working Time (schedule), Short Links (nav), Instagram (8-image grid)
12. **Footer Bottom** — brand orange background, copyright text left, social icons right

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Sticky header with logo and navigation

- **GIVEN** the user visits the Inkcraft homepage
- **THEN** the header displays a logo on the left
- **AND** navigation links for "Home", "Service", "Pages", "Blog", "Shop", "Team", "Contact" are visible
- **AND** a cart icon and search icon appear on the right

#### Scenario: Sticky behavior on scroll

- **GIVEN** the user scrolls down the page
- **THEN** the header remains fixed at the top of the viewport

### Hero Slider

Feature: Hero Slider

#### Scenario: Display hero banner with CTA

- **GIVEN** the homepage loads
- **THEN** a full-width hero banner is displayed with a dark overlay
- **AND** the heading text "We Provide Forever." is visible
- **AND** a "Book Now" button with white background is shown

#### Scenario: Hero button hover

- **GIVEN** the user hovers over the "Book Now" button
- **THEN** the button background changes to brand orange (#fb9902)
- **AND** the text becomes white

### About Us

Feature: About Us Section

#### Scenario: Display about section

- **GIVEN** the user scrolls to the About Us section
- **THEN** the section title "About Us" is centered
- **AND** a heading "Our Tattoos Last Longer Than Most Marriages." is displayed
- **AND** two images are shown on the right side in a grid
- **AND** a "View All" link is visible

#### Scenario: About section uses dark-1 background

- **GIVEN** the About Us section renders
- **THEN** the background is #0d0f11

### What We Do

Feature: What We Do Section

#### Scenario: Display six services

- **GIVEN** the user scrolls to the What We Do section
- **THEN** the section title "What We Do" is centered
- **AND** six service items are displayed: Tattooing, Tattoo Design, Tattoo Removal, Piercing, Laser Removal, Henna Design
- **AND** each service has an icon, title, and short description
- **AND** a center image is shown between the two columns

#### Scenario: Services use dark-2 background

- **GIVEN** the What We Do section renders
- **THEN** the background is #131619

### Gallery

Feature: Tattoo Gallery

#### Scenario: Filterable gallery grid

- **GIVEN** the user scrolls to the gallery section
- **THEN** the section title "Our Latest Tattoos" is centered
- **AND** filter buttons "All", "Body Design", "Hand Design", "Leg Design" are shown
- **AND** 8 tattoo images are displayed in a 4-column grid

#### Scenario: Gallery filtering

- **GIVEN** the user clicks the "Body Design" filter
- **THEN** only images tagged as "Body Design" are visible
- **AND** other images are hidden

#### Scenario: Gallery hover overlay

- **GIVEN** the user hovers over a gallery image
- **THEN** a dark overlay appears with a link icon

### Team

Feature: Team Section

#### Scenario: Display team members

- **GIVEN** the user scrolls to the Team section
- **THEN** 4 team member cards are shown in a row
- **AND** each card has a photo, name, role, and social media icons

### Discount / CTA

Feature: Discount CTA

#### Scenario: Parallax promotional section

- **GIVEN** the user scrolls to the discount section
- **THEN** a background image with parallax effect is displayed
- **AND** the heading "Get 30% Off Your Body Massage" is centered
- **AND** a "Book Now" button with white background is shown

### Pricing

Feature: Pricing Section

#### Scenario: Display three pricing tiers

- **GIVEN** the user scrolls to the Pricing section
- **THEN** three pricing cards are shown: Silver ($52), Diamond ($125), Golden ($95)
- **AND** each card has a feature list with check/cross items
- **AND** a "Choose Your Pack" button is on each card
- **AND** the Diamond card is visually highlighted as active

#### Scenario: Pricing uses dark-1 background

- **GIVEN** the Pricing section renders
- **THEN** the background is #0d0f11

### Booking Form

Feature: Booking Form

#### Scenario: Display booking form

- **GIVEN** the user scrolls to the Book Now section
- **THEN** a parallax background with dark overlay is shown
- **AND** a form with fields: First Name, Last Name, Date, Time, Email, Pack selection is displayed
- **AND** a Submit button is shown
- **AND** an illustration image appears on the right side

### Blog

Feature: Blog Section

#### Scenario: Display blog posts

- **GIVEN** the user scrolls to the Latest News section
- **THEN** 4 blog post cards are shown in a row
- **AND** each card has an image, metadata (date, author, comments), title, excerpt, and "Read More" link

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** a 4-column footer is shown: About Us, Working Time, Short Links, Instagram
- **AND** the footer-top background is #0d0f11
- **AND** the footer-bottom background is brand orange #fb9902
- **AND** the footer-bottom contains copyright text and social media icons

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with "Component Dock" text

## Verification checklist

- [ ] All 12 sections render in the correct order
- [ ] Navbar is sticky on scroll
- [ ] Hero slider text and CTA are visible
- [ ] About Us shows text left, images right
- [ ] What We Do shows 6 services with icons
- [ ] Gallery filter buttons work (All/Body/Hand/Leg)
- [ ] Team shows 4 member cards with social icons
- [ ] Discount section has parallax effect
- [ ] Pricing shows 3 tiers with Diamond highlighted
- [ ] Booking form renders all fields
- [ ] Blog shows 4 post cards
- [ ] Footer has 4 columns + orange bottom bar
- [ ] Footer links to componentdock.com
- [ ] Brand orange (#fb9902) used for hover/accent consistently
- [ ] Montserrat font applied globally
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
