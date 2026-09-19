# Template: Wanderer (Travel / Tourism)

## Purpose

Recreation of ColorLib **Travelers** template.
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

## Gherkin Requirements

### Feature: Wanderer Travel Template

#### Scenario: Navbar displays correctly
- **Given** the user loads the page
- **Then** the navbar is visible at the top
- **And** it contains the brand name "Wanderer"
- **And** navigation links are present (Home, About, Destinations, Services, Blog, Contact)
- **And** a hamburger menu appears on mobile viewports

#### Scenario: Hero slider renders
- **Given** the user loads the page
- **Then** a full-width hero carousel is visible
- **And** the first slide shows heading "Never Stop Exploring" with a CTA button
- **And** carousel navigation arrows are present
- **And** a dark gradient overlay covers the image

#### Scenario: Travel experiences section shows cards
- **Given** the user scrolls to the travel experiences section
- **Then** 3 experience cards are displayed in a row
- **And** each card has an image with a gradient overlay
- **And** each card has a heading overlay (e.g. "Write Down Your Experience")

#### Scenario: Services grid renders
- **Given** the user scrolls to the services section
- **Then** 3 service items are displayed
- **And** each has an icon, heading ("Air Ticketing", "Cruises", "Tour Packages"), and description text
- **And** each has a link to learn more

#### Scenario: Testimonials section displays quotes
- **Given** the user scrolls to the testimonials section
- **Then** the heading "Testimonials" is visible
- **And** at least 3 testimonial quotes are displayed with author attribution
- **And** the section has a light gray background

#### Scenario: Destinations grid renders
- **Given** the user scrolls to the destinations section
- **Then** the heading "Our Destinations" is visible
- **And** subtitle "Choose Your Next Destination" appears
- **And** 6 destination cards are displayed in a grid
- **And** each card shows a location name (e.g. "Santorini, Greece", "Rome, Italy")

#### Scenario: Dark services banner renders
- **Given** the user scrolls to the dark services section
- **Then** a full-width dark section with background image is visible
- **And** the heading "Experience Our Outstanding Services" is in white text
- **And** the section has a dark gradient overlay

#### Scenario: Newsletter signup form works
- **Given** the user scrolls to the newsletter section
- **Then** an email input field is visible
- **And** a subscribe button is present
- **And** the form can be submitted

#### Scenario: Footer renders correctly
- **Given** the user scrolls to the footer
- **Then** the footer is dark background
- **And** it contains brand description, quick links, and contact info columns
- **And** a "Component Dock" link is present

#### Scenario: Responsive behavior
- **Given** the user views the page on a mobile viewport (375px width)
- **Then** the navbar collapses to a hamburger menu
- **And** multi-column grids stack to single column
- **And** the hero slider text remains readable

## Verification Checklist

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
