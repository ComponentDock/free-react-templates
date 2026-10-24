# Template: Wanderer (Travel / Tourism)
<!-- prep-status: shipped-as=jetpath -->
> **SHIPPED-UNDER** — the ColorLib `travelers` design this prep describes already
> ships as `apps/jetpath` (<https://jetpath.free.componentdock.com>).
> Do not scaffold `apps/wanderer`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-jetpath/spec.md`.

## Purpose

Recreation of ColorLib "Travelers" template.
- **Source slug:** `travelers`
- **ColorLib page:** https://colorlib.com/wp/template/travelers/
- **Preview URL:** https://preview.colorlib.com/theme/travelers/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/travelers-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **App name:** `wanderer` (package: `@free-react-templates/wanderer`)
- **Surge target:** `wanderer.free.componentdock.com`

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand accent | `#ef6c57` | Coral/salmon — used on links, icons, hover states |
| Body text | `#25262a` | Near-black |
| Secondary text | `#737373` / `#999` | Gray for descriptions |
| Light bg | `#f8f9fa` | Used on `site-section bg-light` |
| Dark text on dark bg | `#fff` | White text on hero/footer dark overlays |
| Font family | `"Poppins"` | Google Font, sans-serif stack fallback |
| Button style | Sharp corners (`border-radius: 0`) | `btn-primary` = solid bg, `btn-outline-primary` = border-only; hover inverts (black border, no bg) |
| Button padding | `py-3 px-5` | Large CTA buttons |
| Hero overlay | Linear gradient top-to-bottom: transparent → 80% black | Dark gradient over full-width carousel images |
| Section rhythm | Full-width `site-section` alternating white/light gray (`bg-light`) | Consistent padding between sections |

## Section Structure (order from live preview)

1. **Navbar** — Fixed top, brand logo left, nav links center, hamburger on mobile
2. **Hero Slider** — Full-width carousel (2 slides: "Never Stop Exploring", "Love The Places"), dark gradient overlay, CTA button, arrow navigation
3. **Travel Experiences** (block-13) — 3-column card carousel: image with gradient overlay + heading text ("Write Down Your Experience", "Explore Asian Mountains", "Safe Trip With Airasia")
4. **Services Grid** — 3 columns: "Air Ticketing", "Cruises", "Tour Packages" — icon + heading + description + link
5. **Testimonials** — Light background, carousel of 3 quotes with author name, centered heading "Testimonials"
6. **Our Destinations** — 6 image cards in 3-column grid (Santorini, Rome, Mount Fuji, Dubai, London, Australia), each with gradient overlay + location heading
7. **Experience Our Outstanding Services** — Dark section with full-width background image, dark overlay, white text, heading + description
8. **Our Services** — Light background, icon + heading + description cards
9. **Newsletter CTA** — Simple email signup form with input + button
10. **Footer** — Dark background, 3-column layout: brand description, quick links, contact info

## Requirements

### Feature: Wanderer Travel Template

#### Scenario: Navbar displays correctly

- **GIVEN** the user loads the page
- **THEN** the navbar is visible at the top
- **AND** it contains the brand name "Wanderer"
- **AND** navigation links are present (Home, About, Destinations, Services, Blog, Contact)
- **AND** a hamburger menu appears on mobile viewports

#### Scenario: Hero slider renders

- **GIVEN** the user loads the page
- **THEN** a full-width hero carousel is visible
- **AND** the first slide shows heading "Never Stop Exploring" with a CTA button
- **AND** carousel navigation arrows are present
- **AND** a dark gradient overlay covers the image

#### Scenario: Travel experiences section shows cards

- **GIVEN** the user scrolls to the travel experiences section
- **THEN** 3 experience cards are displayed in a row
- **AND** each card has an image with a gradient overlay
- **AND** each card has a heading overlay (e.g. "Write Down Your Experience")

#### Scenario: Services grid renders

- **GIVEN** the user scrolls to the services section
- **THEN** 3 service items are displayed
- **AND** each has an icon, heading ("Air Ticketing", "Cruises", "Tour Packages"), and description text
- **AND** each has a link to learn more

#### Scenario: Testimonials section displays quotes

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the heading "Testimonials" is visible
- **AND** at least 3 testimonial quotes are displayed with author attribution
- **AND** the section has a light gray background

#### Scenario: Destinations grid renders

- **GIVEN** the user scrolls to the destinations section
- **THEN** the heading "Our Destinations" is visible
- **AND** subtitle "Choose Your Next Destination" appears
- **AND** 6 destination cards are displayed in a grid
- **AND** each card shows a location name (e.g. "Santorini, Greece", "Rome, Italy")

#### Scenario: Dark services banner renders

- **GIVEN** the user scrolls to the dark services section
- **THEN** a full-width dark section with background image is visible
- **AND** the heading "Experience Our Outstanding Services" is in white text
- **AND** the section has a dark gradient overlay

#### Scenario: Newsletter signup form works

- **GIVEN** the user scrolls to the newsletter section
- **THEN** an email input field is visible
- **AND** a subscribe button is present
- **AND** the form can be submitted

#### Scenario: Footer renders correctly

- **GIVEN** the user scrolls to the footer
- **THEN** the footer is dark background
- **AND** it contains brand description, quick links, and contact info columns
- **AND** a "Component Dock" link is present

#### Scenario: Responsive behavior

- **GIVEN** the user views the page on a mobile viewport (375px width)
- **THEN** the navbar collapses to a hamburger menu
- **AND** multi-column grids stack to single column
- **AND** the hero slider text remains readable

## Verification checklist

- [ ] Section order matches original: Navbar → Hero Slider → Experiences → Services → Testimonials → Destinations → Dark Services → Our Services → Newsletter → Footer
- [ ] Brand accent `#ef6c57` used for links, icons, hover states
- [ ] Poppins font loaded from Google Fonts
- [ ] Buttons have sharp corners (no border-radius)
- [ ] Hero has dark gradient overlay over carousel images
- [ ] All sections use alternating white/light gray backgrounds
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Responsive: hamburger nav, stacked grids on mobile
