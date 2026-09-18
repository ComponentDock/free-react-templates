# Template: Craftfolio (Portfolio)

## Purpose

Craftfolio is a single-page portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Portfolio"
free template (source:
https://colorlib.com/wp/template/portfolio/), built under a DIFFERENT
name (**Craftfolio**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a single-page portfolio site with: a transparent navbar
over a full-height hero banner (dark overlay on background image, green
accent subtitle, large white heading, green pill CTA), a portfolio
gallery with filter tabs and hover overlays, a services section with
icon cards on a dark parallax background, customer testimonials with
star ratings, and a dark footer with newsletter signup and social links.

**WHAT MAKES CRAFTFOLIO DISTINCT (signature behaviors):**

1. **Green accent color (#8ab92d) throughout.** The brand color appears
   in: the subtitle text ("Now you can watch the Talent"), the primary
   CTA buttons (green pill shape, radius 50px), filter tab active state,
   service card box-shadows (rgba(138,185,45,0.2)), footer social link
   hover, and text selection highlight. This lime-green on dark navy is
   the template's signature palette.
2. **Transparent navbar over dark hero banner.** The header is absolute-
   positioned over a full-height hero with a dark semi-transparent overlay
   (rgba(4,9,30,0.5)) on a background image. Nav links are white
   uppercase 12px, hover to green. The navbar becomes sticky with a
   dark semi-transparent bg on scroll.
3. **Hero banner with rounded corners.** The banner area has
   `border-radius: 10px` and `margin-top: -56px` (slight overlap above),
   creating a card-like hero rather than a full-bleed section. Content
   is centered: 12px green subtitle (letter-spacing 3px), 72px white h1
   ("Let's Explore Idea!"), and a green pill "Explore Now" button.
4. **Portfolio grid with filter tabs and hover overlays.** A 3-column
   grid of 12 portfolio items (col-sm-4), each with a 10px-radius image.
   Filter tabs (All/Vector/Raster/UI-UX/Printing) use underline
   animation on hover (width transition 350ms). Active tab turns green.
   Items have a hover overlay with slide-in title and category text.
5. **Services section with parallax dark background.** A dark overlay
   section (rgba(4,9,30,0.8) on background image, border-radius 10px)
   with a title, followed by 3 white service cards that overlap the
   dark section (margin-top: -120px). Cards have green-tinted box-
   shadows and centered icon + title + description layout.
6. **Customer testimonials with star ratings.** A 2-column layout of 4
   reviews, each with an avatar image, name (linked), 5-star rating
   (filled stars in orange), and review text. Reviews are symmetric
   (2 per column).
7. **Dark footer with newsletter.** Footer bg `#04091e` with 3 columns:
   About Us (text + copyright), Newsletter (email input + green submit
   button), Follow Us (social icons: Facebook, Twitter, Dribbble,
   Behance — grey, hover to green).
8. **Poppins typography.** The template uses Poppins (100-700) from
   Google Fonts — a geometric sans-serif with clean, modern feel.
9. **Card-based design with 10px radius.** Portfolio images, service
   cards, and the hero banner all share the same 10px border-radius,
   creating a consistent soft-card aesthetic.
10. **Wrapper margin.** The entire page content is wrapped in
    `.protfolio-wrap` with 50px margin (30px on tablet, 10px on mobile),
    creating an inset-page effect where the content doesn't touch the
    viewport edges.

## Naming

The ColorLib source name "Portfolio" is FORBIDDEN as the app name
(and "portfolio" itself must not be reused). **Craftfolio** is the new,
original name — single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name (verified 2026-09-18: zero hits for `craftfolio` in TEMPLATES.md,
`ls apps/`, `openspec/specs/`, `docs/templates/`). Source slug + preview
URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Portfolio" (page title: "Portfolio"). Listed
  in TEMPLATES.md under the Photography/Gallery section (line 1487 —
  second unchecked item).
- **Live preview — REACHABLE (verified 2026-09-18 by direct fetch):**
  `https://preview.colorlib.com/theme/portfolio/` returns HTTP 200
  (24,910 bytes). Title: "Portfolio". The preview is the FULL single
  page (hero + portfolio + services + testimonials + footer).
  Stylesheets: `css/linearicons.css` (icon font — replace with
  lucide-react), `css/font-awesome.min.css` (FA icons — replace),
  `css/bootstrap.css` (Bootstrap grid — use Tailwind instead),
  `css/magnific-popup.css` (lightbox — omit in recreation),
  `css/nice-select.css` (custom selects — omit), `css/animate.min.css`
  (animations), `css/owl.carousel.css` (carousel — not used on home
  page), `css/main.css` (32,133 bytes — all custom styling). Scripts:
  jQuery 2.2.4, Popper.js, Bootstrap, easing, ajaxchimp, magnific-popup,
  owl.carousel, sticky, nice-select, parallax, isotope, imagesloaded,
  main.js. Fonts: **Poppins** 100-700 via Google Fonts `<link>`.
- **Live DOM structure (from the fetched HTML + main.css):**
  - `body` (Poppins, `#777777`, 14px, weight 300) →
    `div.protfolio-wrap` (margin 50px/30px/10px responsive)
  - `header.default-header` (absolute, top 0, width 100%, z-index 9):
    `nav.navbar.navbar-expand-lg.navbar-light` → `.container` →
    `a.navbar-brand` (logo image) + `button.navbar-toggler` (hamburger,
    white, visible on mobile) + `.collapse.navbar-collapse` →
    `ul.navbar-nav` with 5 items: Home (`#home`), Portfolio (`#portfolio`),
    Services (`#service`), Testimonial (`#testimonial`), Pages dropdown
    (Generic, Elements). Nav links: uppercase 12px weight 500 white,
    hover green `#8ab92d`.
  - `section.banner-area.relative#home` (margin-top -56px, border-radius
    10px, bg image `header-bg.jpg`): `div.overlay.overlay-bg` (rgba
    (4,9,30,0.5), border-radius 10px) → `.container` → `.row.fullscreen`
    → `.banner-content.col-lg-10` (centered text): `<h5>` "Now you can
    watch the Talent" (12px green `#8ab92d`, weight 300, letter-spacing
    3px, uppercase), `<h1>` "Let's Explore Idea!" (72px white, weight
    700, line-height 1em), `<a.primary-btn>` "Explore Now" (green pill
    button).
  - `section.portfolio-area.section-gap#portfolio` (padding 120px 0):
    title "This is what we can do for you" (h1 36px weight 600 `#222`)
    + subtitle, then `div.filters` (centered, margin-top 50px) with
    `ul` of 5 filter tabs (All/Vector/Raster/UI-UX/Printing, inline-
    block, 20px 30px padding, uppercase weight 500 `#222`, active =
    green `#8ab92d`, underline animation on hover). Then
    `div.filters-content` → `.row.grid` with 12 `.single-portfolio
    .col-sm-4` items, each containing `.item` → img (100% width,
    border-radius 10px) + `.p-inner` (title h4/h5 15px + `.cat` 13px).
    Items have class tags for filtering (corporate/personal/agency/portal).
  - `section.service-area.section-gap.relative#service` (bg image
    `service-bg.jpg`, border-radius 10px): overlay (rgba(4,9,30,0.8),
    border-radius 10px) + title "This is what we can do for you" (white
    h1). Then `section.services-area.pb-100` (margin-top -120px) with
    3 `.col-lg-4` → `.single-service` (white bg, border-radius 10px,
    30px padding, green box-shadow `0px 10px 30px rgba(138,185,45,0.2)`):
    icon image (s1/s2/s3.png), h4 title, p description. Services:
    Vector Artworks, Corporate Identity, Art Direction Design.
  - `section.review-area.section-gap#testimonial` (padding 120px 0):
    title "How Our Customers Treat Us" + subtitle, then 2 columns
    (col-lg-6 each) with 2 reviews each. Each `.single-review` has:
    avatar image, `.title.d-flex.flex-row` with h4 name (linked) +
    `.star` (5 spans, `.checked` = orange for filled, empty for unfilled).
    Reviews: Fannie Rowe (3 stars), Lillie Summers (3 stars), Hulda
    Sutton (3 stars), Ruth Burns (2 stars).
  - `footer.footer-area.section-gap` (padding-top 100px, bg `#04091e`):
    3 columns: About Us (h6 + p + copyright), Newsletter (h6 + p +
    email input + green submit button), Follow Us (h6 + p + 4 social
    icon links: Facebook, Twitter, Dribbble, Behance — grey, hover green).
  - Per monorepo convention the copyright text links to
    https://www.componentdock.com/ ("Component Dock") instead of
    Colorlib.

- **Behaviors (all verified 2026-09-18 from main.css + HTML):**
  - **Sticky navbar:** On scroll, `.is-sticky .default-header` gets
    `background-color: rgba(4, 9, 30, 0.8)` with transition. The
    `.protfolio-wrap` margin creates the inset effect.
  - **Portfolio filtering:** Isotope.js-based filtering with data-filter
    attributes. Clicking a tab shows/hides items with opacity transition
    (350ms). The recreation replaces Isotope with React state-based
    filtering.
  - **Hover overlays on portfolio items:** Items have a hover effect
    (opacity/transform transition) showing the title and category.
  - **Dropdown menu:** Pages dropdown appears on hover (desktop) with
    dark semi-transparent bg `rgba(4,9,30,0.9)`, no border-radius.
  - **Newsletter form:** Email input with green submit button (arrow
    icon). Uses ajaxchimp for mock submission.
  - **Responsive:** Margin shrinks (50→30→10px), hero text scales
    (72→45→36→40px), portfolio grid goes 3→2→1 columns, service cards
    stack vertically, nav collapses to hamburger.

- **Screenshot (`portfolio-free-template.jpg`, viewed via HTML/CSS
  analysis):** The screenshot shows the full single-page layout with
  the transparent navbar at top, a dark hero banner with centered white
  text and a green CTA button, a portfolio grid section with filter tabs,
  service cards overlapping a dark section, testimonials with avatars
  and star ratings, and a dark footer. The overall aesthetic is clean
  and modern with a lime-green accent on dark navy — a classic creative
  agency/portfolio vibe.

## Design tokens

| Token                    | Value                                    | Notes                                                                                     |
| ------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| `--color-brand`          | `#8ab92d`                                | Lime green — primary accent, buttons, active states, text selection, hover colors         |
| `--color-text`           | `#222222`                                | Headings (h1-h6 weight 600), filter tab text                                              |
| `--color-text-body`      | `#777777`                                | Body text, paragraph text (weight 300)                                                    |
| `--color-dark`           | `#04091e`                                | Dark navy — footer bg, overlay base, sticky header bg                                     |
| `--color-overlay-light`  | `rgba(4, 9, 30, 0.5)`                   | Hero banner overlay                                                                       |
| `--color-overlay-dark`   | `rgba(4, 9, 30, 0.8)`                   | Service section overlay, sticky header bg                                                 |
| `--color-white`          | `#ffffff`                                | Card backgrounds, hero text, nav links                                                    |
| `--color-star`           | `orange`                                 | Filled star rating color                                                                  |
| `--color-footer-social`  | `#cccccc`                                | Social icon default color, hover → green                                                  |
| `--color-footer-input`   | `#191919`                                | Newsletter input bg                                                                       |
| `--font-body`            | 'Poppins', sans-serif                    | Google Fonts 100-700; base 14px weight 300, line-height 1.625em                           |
| `--heading-weight`       | 600                                      | h1-h6 weight 600, color `#222222`                                                        |
| `--banner-radius`        | `10px`                                   | Hero banner, service area, portfolio images — consistent card aesthetic                   |
| `--banner-overlay-radius`| `10px`                                   | Overlay matches banner radius                                                             |
| `--btn-primary`          | green bg, white text, radius 50px        | `#8ab92d` bg, weight 500, uppercase, padding 0 40px, line-height 36px, no border          |
| `--btn-primary-hover`    | transparent bg, white border, white text | Hover inverts to outline style                                                            |
| `--section-padding`      | `120px 0`                                | `.section-gap` — consistent vertical rhythm                                               |
| `--protfolio-wrap-margin`| `50px` (30px tablet, 10px mobile)        | Page inset effect — content doesn't touch viewport edges                                  |
| `--hero-h1`              | `72px` weight 700 white                  | Hero heading; scales to 45px/36px/40px on smaller screens                                 |
| `--hero-subtitle`        | `12px` green `#8ab92d` weight 300        | letter-spacing 3px, uppercase                                                             |
| `--nav-link`             | 12px uppercase weight 500 white          | Padding 20px; hover → green                                                               |
| `--filter-tab`           | 20px 30px padding, uppercase weight 500  | Active = green; underline animation on hover (width transition 350ms)                     |
| `--portfolio-item-radius`| `10px`                                   | Image border-radius                                                                       |
| `--portfolio-item-title` | 15px weight 600                          | `.p-inner h5`                                                                             |
| `--portfolio-item-cat`   | 13px                                     | `.p-inner .cat`                                                                           |
| `--service-card`         | white bg, radius 10px, 30px padding      | Green box-shadow `0px 10px 30px rgba(138,185,45,0.2)`, margin-top -120px overlap         |
| `--footer-bg`            | `#04091e`                                | Dark navy footer                                                                          |
| `--footer-heading`       | 18px white weight 600                    | h6 in footer                                                                              |
| `--footer-input`         | `#191919` bg, no border, radius 0        | 14px weight 300, `#777` text                                                              |
| `--footer-submit`        | `#8ab92d` bg, white, radius 0            | Green submit button                                                                       |

## Requirements

### Requirement: Page wrapper

The system SHALL render all content inside a wrapper with margin that
creates an inset-page effect.

#### Scenario: Desktop wrapper

- **GIVEN** the Craftfolio app is rendered on a desktop viewport
- **THEN** all content SHALL be inside a wrapper with 50px margin on
  all sides
- **AND** the wrapper SHALL NOT have a visible background (transparent)

#### Scenario: Responsive wrapper

- **GIVEN** the viewport is between 576px and 767px
- **THEN** the wrapper margin SHALL be 30px
- **WHEN** the viewport is below 576px
- **THEN** the wrapper margin SHALL be 10px

### Requirement: Transparent navbar

The system SHALL render a transparent navigation bar over the hero banner
that becomes sticky with a dark background on scroll.

#### Scenario: Initial navbar

- **GIVEN** the Craftfolio app is rendered on desktop
- **THEN** a transparent navbar SHALL overlay the hero banner
- **AND** it SHALL contain: a logo (left), and navigation links (right):
  Home, Portfolio, Services, Testimonial, and a Pages dropdown
- **AND** nav links SHALL be 12px uppercase weight 500 white with
  20px padding
- **AND** hovering a nav link SHALL turn it green (#8ab92d)

#### Scenario: Sticky navbar

- **GIVEN** the user scrolls down past the hero
- **THEN** the navbar SHALL become sticky with `background-color:
  rgba(4, 9, 30, 0.8)` and a smooth transition

#### Scenario: Mobile navbar

- **GIVEN** the viewport is below 992px
- **THEN** a hamburger toggler SHALL appear (white, with `lnr-menu`
  icon or lucide Menu)
- **WHEN** the user clicks the toggler
- **THEN** the nav links SHALL expand in a collapsible panel with
  dark semi-transparent background
- **AND** nav link padding SHALL be reduced (no 20px horizontal padding)

#### Scenario: Dropdown menu

- **GIVEN** the navbar shows the Pages dropdown (desktop only)
- **WHEN** the user hovers "Pages"
- **THEN** a dropdown SHALL appear with items: Generic, Elements
- **AND** the dropdown SHALL have `background: rgba(4, 9, 30, 0.9)`,
  no border-radius, and links styled as the main nav

### Requirement: Hero banner

The system SHALL render a full-height hero banner with a dark overlay,
centered content, and rounded corners.

#### Scenario: Banner rendering

- **GIVEN** the Craftfolio app is rendered on desktop
- **THEN** a full-height hero banner SHALL display with a background
  image (via `picsum.photos`)
- **AND** the banner SHALL have `border-radius: 10px` and
  `margin-top: -56px` (slight overlap)
- **AND** a dark overlay (rgba(4, 9, 30, 0.5)) SHALL cover the
  background with matching 10px radius

#### Scenario: Banner content

- **GIVEN** the hero banner is displayed
- **THEN** centered text SHALL render: a 12px uppercase subtitle
  ("Now you can watch the Talent") in green (#8ab92d) with letter-
  spacing 3px, a 72px white h1 ("Let's Explore Idea!") weight 700
  line-height 1em, and a green pill "Explore Now" CTA button
- **AND** the heading SHALL scale to 45px on 1200px, 36px on 991px,
  and 40px on 414px viewports

#### Scenario: CTA button

- **GIVEN** the "Explore Now" button is rendered
- **THEN** it SHALL have: green (#8ab92d) bg, white text, border-radius
  50px (pill), weight 500, uppercase, no border, padding 0 40px
- **AND** hover SHALL invert to transparent bg with white border and
  white text

### Requirement: Portfolio grid with filters

The system SHALL render a filterable 3-column portfolio grid with hover
overlays.

#### Scenario: Section title

- **GIVEN** the portfolio section is displayed
- **THEN** a centered title "This is what we can do for you" SHALL
  render (h1, 36px, weight 600, `#222`) with a subtitle paragraph

#### Scenario: Filter tabs

- **GIVEN** the portfolio section is displayed
- **THEN** 5 filter tabs SHALL render centered: All, Vector, Raster,
  UI-UX, Printing
- **AND** each tab SHALL be inline-block with 20px 30px padding,
  uppercase, weight 500, `#222`
- **AND** the active tab SHALL be green (#8ab92d)
- **AND** hovering a tab SHALL show an underline animation (width
  transition 350ms)

#### Scenario: Portfolio items

- **GIVEN** the portfolio section is displayed
- **THEN** 12 portfolio items SHALL render in a 3-column grid (col-sm-4)
- **AND** each item SHALL have a 100% width image with border-radius
  10px and a `.p-inner` block with title (15px) and category (13px)
- **AND** items SHALL be tagged with filter categories (corporate,
  personal, agency, portal)
- **AND** placeholder images SHALL use `picsum.photos/seed/craftfolio-N`

#### Scenario: Filter interaction

- **WHEN** the user clicks a filter tab (e.g. "Vector")
- **THEN** only items matching that category SHALL be visible
- **AND** non-matching items SHALL fade out (opacity transition 350ms)
- **WHEN** the user clicks "All"
- **THEN** all items SHALL be visible

#### Scenario: Hover overlay

- **WHEN** the user hovers a portfolio item
- **THEN** an overlay SHALL appear showing the title and category
- **AND** the transition SHALL be smooth (opacity/transform)

### Requirement: Services section

The system SHALL render a dark parallax section with overlapping white
service cards.

#### Scenario: Dark parallax section

- **GIVEN** the services section is displayed
- **THEN** a dark section with background image SHALL render with
  border-radius 10px and a dark overlay (rgba(4,9,30,0.8))
- **AND** the section SHALL contain a centered white title "This is
  what we can do for you" (h1, white)

#### Scenario: Service cards

- **GIVEN** the service cards are displayed
- **THEN** 3 white service cards SHALL render in a row (col-lg-4)
- **AND** each card SHALL have: border-radius 10px, 30px padding,
  centered text, an icon image, h4 title, and description paragraph
- **AND** each card SHALL have a green-tinted box-shadow:
  `0px 10px 30px rgba(138,185,45,0.2)`
- **AND** the cards SHALL overlap the dark section above by -120px
  (margin-top: -120px)
- **AND** the three services SHALL be: Vector Artworks, Corporate
  Identity, Art Direction Design

### Requirement: Testimonials

The system SHALL render customer testimonials with star ratings.

#### Scenario: Section layout

- **GIVEN** the testimonial section is displayed
- **THEN** a centered title "How Our Customers Treat Us" SHALL render
  with a subtitle paragraph
- **AND** 4 reviews SHALL render in a 2-column layout (2 per column)

#### Scenario: Review card

- **GIVEN** a review is displayed
- **THEN** it SHALL contain: an avatar image, the reviewer's name
  (linked, h4), a 5-star rating (filled stars in orange, unfilled
  empty), and review text
- **AND** the four reviewers SHALL be: Fannie Rowe (3 stars), Lillie
  Summers (3 stars), Hulda Sutton (3 stars), Ruth Burns (2 stars)

### Requirement: Footer

The system SHALL render a dark footer with About Us, Newsletter, and
social links.

#### Scenario: Footer layout

- **GIVEN** the footer is displayed
- **THEN** it SHALL have background color `#04091e` and 100px top
  padding
- **AND** it SHALL contain 3 columns: About Us, Newsletter, Follow Us

#### Scenario: About Us column

- **GIVEN** the About Us column is displayed
- **THEN** it SHALL show an h6 "About Us", a description paragraph,
  and a copyright line linking to Component Dock

#### Scenario: Newsletter column

- **GIVEN** the Newsletter column is displayed
- **THEN** it SHALL show an h6 "Newsletter", "Stay update with our
  latest" text, an email input (#191919 bg, no border, radius 0),
  and a green submit button (arrow icon)

#### Scenario: Social links

- **GIVEN** the Follow Us column is displayed
- **THEN** it SHALL show an h6 "Follow Us", "Let us be social" text,
  and 4 social icon links: Facebook, Twitter, Dribbble, Behance
- **AND** icons SHALL be #cccccc by default, turning green (#8ab92d)
  on hover

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (improvements over the
source, which has minimal ARIA).

#### Scenario: Semantics

- **GIVEN** the Craftfolio app is rendered
- **THEN** the navbar SHALL use `<nav>` with `aria-label="Main navigation"`
- **AND** the hamburger toggle SHALL have `aria-label` and
  `aria-expanded`
- **AND** filter tabs SHALL use `role="tablist"` / `role="tab"` /
  `role="tabpanel"` semantics
- **AND** the portfolio grid SHALL have `aria-label="Portfolio projects"`
- **AND** all interactive elements SHALL have visible focus-visible rings
- **AND** images SHALL have descriptive alt text

### Requirement: Footer (attribution)

The system SHALL include the required Component Dock attribution.

#### Scenario: Component Dock credit

- **GIVEN** the Craftfolio app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- craftfolio` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/portfolio/:
      transparent navbar, dark hero with green subtitle + white heading +
      green pill button, portfolio grid with filter tabs, overlapping
      service cards on dark bg, testimonials with star ratings, dark
      footer with newsletter.
- [ ] Behavior check: filter tabs show/hide items, sticky navbar
      background on scroll, hover effects on portfolio items and social
      icons, dropdown on hover, mobile hamburger toggle.
- [ ] Responsive check: wrapper margin shrinks, hero text scales,
      portfolio grid goes 3→2→1 columns, service cards stack, nav
      collapses to hamburger.
