# Template: Vitrine (Portfolio)

## Purpose

Recreation of the ColorLib **Portfolio** template (`portfolio`) as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio showcase.

- **Source:** https://colorlib.com/wp/template/portfolio/
- **Preview:** https://preview.colorlib.com/theme/portfolio/
- **New name:** `vitrine` (no collision with existing apps/specs)
- **App folder:** `apps/vitrine`
- **Package:** `@free-react-templates/vitrine`
- **CNAME:** `vitrine.free.componentdock.com`

## Design tokens (extracted from preview)

| Token | Value | Notes |
| --- | --- | --- |
| Brand color | `#8ab92d` | Lime green — primary button, filter active state, accent |
| Body text | `#777777` | Medium gray |
| Headings | `#222222` | Near-black |
| Font family | `"Poppins", sans-serif` | Weights 300–700 |
| Button radius | `25px` | Pill-shaped `.primary-btn` |
| Button bg | `#8ab92d` | White text on green; transparent on hover with white border |
| Portfolio image radius | `10px` | Rounded corners on grid items |
| Hero overlay | `rgba(4, 9, 30, 0.5)` | Semi-transparent dark navy |
| Service overlay | `rgba(4, 9, 30, 0.8)` | Darker overlay on service bg image |
| Footer bg | `#04091e` | Very dark navy |
| Section spacing | `section-gap` | ~100px padding top/bottom |
| Filter active | `#8ab92d` | Underline indicator on active filter tab |

## Visual design notes (from TEMPLATES.md screenshot)

- Dark hero banner with background image, white text, green CTA pill button.
- White portfolio section with filter tabs (All/Vector/Raster/UI-UX/Printing), 3-column grid of rounded images with title + category underneath.
- Dark overlay service section header, then white 3-column service cards (icon + title + description).
- Testimonials on white background: 2x2 grid of review cards (avatar, name, stars, quote).
- Dark navy footer with About Us text, Newsletter signup form, and social icon links.

## Section order (1:1 fidelity)

1. **Navbar** — Logo left, nav links right (Home, Portfolio, Services, Testimonial), no dropdown in our recreation (Generic/Elements pages don't exist).
2. **Banner/Hero** — Full-width background image with dark overlay, centered text: "Now you can watch the Talent" (small uppercase) + "Let's Explore Idea!" (large heading) + "Explore Now" green pill CTA button.
3. **Portfolio Gallery** — Centered heading "This is what we can do for you" + subtitle. Filter tabs (All, Vector, Raster, UI/UX, Printing). 3-column grid (12 items) of portfolio cards: image with rounded corners, title below, category label. Isotope-style filtering.
4. **Service Section Header** — Dark overlay background image with centered white heading "This is what we can do for you" + subtitle.
5. **Service Cards** — 3-column white section: Vector Artworks, Corporate Identity, Art Direction Design. Each with icon, title, and description paragraph.
6. **Testimonials** — Heading "How Our Customers Treat Us" + subtitle. 2x2 grid of review cards: avatar image, name, star rating (3/5 in original), review text.
7. **Footer** — Dark navy (#04091e) background. Three columns: About Us (text + copyright), Newsletter (email input + arrow button), Follow Us (social icons: Facebook, Twitter, Dribbble, Behance).

## Requirements

### Feature: Vitrine Portfolio Template

#### Scenario: Navbar renders with correct links

- **GIVEN** the Vitrine app is loaded
- **THEN** the navbar contains links for Home, Portfolio, Services, and Testimonial
- **AND** the logo is displayed on the left

#### Scenario: Hero banner displays with overlay

- **GIVEN** the Vitrine app is loaded
- **THEN** the hero section shows the heading "Let's Explore Idea!"
- **AND** the subtext "Now you can watch the Talent" is visible above the heading
- **AND** an "Explore Now" button is displayed with green background
- **AND** a dark overlay covers the background image

#### Scenario: Portfolio grid renders 12 items

- **GIVEN** the Vitrine app is loaded
- **THEN** the portfolio section displays 12 portfolio items in a grid
- **AND** each item shows an image, a title, and a category label

#### Scenario: Portfolio filter tabs are functional

- **GIVEN** the Vitrine app is loaded
- **WHEN** the user clicks the "Vector" filter
- **THEN** only Vector category items are visible
- **WHEN** the user clicks "All"
- **THEN** all portfolio items are visible again

#### Scenario: Service section header displays over dark overlay

- **GIVEN** the Vitrine app is loaded
- **THEN** the service header section has a dark overlay background
- **AND** the heading "This is what we can do for you" is visible in white

#### Scenario: Service cards display in 3-column layout

- **GIVEN** the Vitrine app is loaded
- **THEN** three service cards are displayed: Vector Artworks, Corporate Identity, Art Direction Design
- **AND** each card has an icon, title, and description

#### Scenario: Testimonials section displays review cards

- **GIVEN** the Vitrine app is loaded
- **THEN** four review cards are displayed in a 2-column grid
- **AND** each card shows an avatar, reviewer name, star rating, and review text

#### Scenario: Footer has three columns

- **GIVEN** the Vitrine app is loaded
- **THEN** the footer shows an About Us section with description text
- **AND** a Newsletter section with an email input and submit button
- **AND** a Follow Us section with social media icons
- **AND** a "Made with Component Dock" link is present

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** the Vitrine app is loaded on a mobile viewport
- **THEN** the navbar collapses into a hamburger menu
- **AND** portfolio items stack into a single column
- **AND** service cards stack vertically

## Verification checklist

- [ ] All sections render in correct order (Navbar → Hero → Portfolio → Service Header → Service Cards → Testimonials → Footer)
- [ ] Brand color `#8ab92d` used for CTA buttons and filter active state
- [ ] Font family "Poppins" loaded via Google Fonts
- [ ] Hero has dark overlay on background image
- [ ] Portfolio grid shows 12 items with 3-column layout
- [ ] Filter tabs filter portfolio items by category
- [ ] Service header has dark overlay background
- [ ] Service cards show icon + title + description in 3 columns
- [ ] Testimonials show 4 review cards in 2x2 grid
- [ ] Footer has dark navy background with 3 columns
- [ ] Footer includes "Made with Component Dock" link
- [ ] No ColorLib references in app code
- [ ] Images use `picsum.photos` placeholders
- [ ] CNAME and homepage set correctly
- [ ] `npm run spec:validate` passes
