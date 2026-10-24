# Template: BoxCraft (Creative Agency)
<!-- prep-status: shipped-as=boxpulse -->
> **SHIPPED-UNDER** — the ColorLib `boxus` design this prep describes already
> ships as `apps/boxpulse` (<https://boxpulse.free.componentdock.com>).
> Do not scaffold `apps/boxcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-boxpulse/spec.md`.

## Purpose

Recreation of ColorLib "Boxus" — a creative/digital agency website template with
full-width hero slider, services, portfolio grid, team, timeline stories, offer,
expertise progress bars, and contact form.

- **Source:** https://colorlib.com/wp/template/boxus/
- **Source slug:** boxus
- **Category:** Creative / Digital Agency
- **Preview:** https://preview.colorlib.com/theme/boxus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

### Section structure (in order)

1. **Navigation** — fixed top nav with logo, menu links, and hamburger on mobile
2. **Hero Slider** — full-width image carousel with slide text overlays, pagination dots
3. **Services** — two-column layout with image slider on one side, service descriptions on the other
4. **Portfolio** — masonry/grid of project items with category filters and load-more
5. **Crafters (Team)** — team member cards with image slider and name/role/details
6. **Stories (Timeline)** — vertical timeline with dates and descriptions, accent-colored year markers
7. **Offer** — services/features cards on colored background
8. **Expertise** — progress bar skill indicators with percentages
9. **Contact** — contact form (name, email, subject, message) + company info
10. **Footer** — copyright, social links (Twitter, Facebook, Dribbble, Behance, RSS)

## Design tokens

Extracted from `style.css` of the live preview at preview.colorlib.com:

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#23214c` | Dark navy-purple — primary brand, headings, dark section backgrounds |
| `brand-dark` | `#221c5a` | Slightly darker variant of brand |
| `accent` | `#e54b76` | Pink/magenta — timeline year markers, hover states, highlights |
| `accent-alt` | `#ee87a4` | Lighter pink |
| `gold` | `#FFBA42` | Gold/amber — secondary accent in timeline |
| `green` | `#55B286` | Green — progress bars, accent |
| `text-body` | `#727190` | Gray-purple — body text, descriptions |
| `text-dark` | `#1c1c1c` | Near-black — some heading text |
| `surface-light` | `#f4f4f4` | Light gray — section backgrounds |
| `white` | `#fff` | Card backgrounds, text on dark |
| `font-heading` | `'Montserrat', sans-serif` | Headings, nav, UI elements |
| `font-body` | `'PT Serif', serif` | Body text, descriptions |
| `font-tertiary` | `'Roboto', sans-serif` | Some auxiliary text |
| `content-width` | `1170px` | Max content width (content-1170) |

### Visual description

- Dark navy-purple (#23214c) is the dominant brand color, used in dark section backgrounds and headings
- Pink accent (#e54b76) highlights key elements: timeline dates, interactive accents
- Gold (#FFBA42) appears in timeline year markers as secondary accent
- Clean, modern agency aesthetic with alternating dark and light sections
- Full-width hero with image carousel and text overlays
- Grid-based portfolio with hover effects
- Vertical timeline with colored date markers
- Progress bars for expertise/skills section

## Requirements

### Feature: BoxCraft template behaviour

**Background**

- **GIVEN** the user opens the BoxCraft page
- **AND** the browser has loaded the page successfully

#### Scenario: Navigation renders correctly

- **GIVEN** the page has loaded
- **THEN** the navigation bar is visible at the top
- **AND** the logo is displayed on the left
- **AND** navigation links are displayed (Home, Services, Portfolio, Team, Stories, Contact)
- **AND** on mobile a hamburger menu icon is visible

#### Scenario: Hero slider displays

- **GIVEN** the page has loaded
- **THEN** a full-width hero image carousel is visible
- **AND** slide text overlays appear on the current slide
- **AND** pagination dots indicate the current slide
- **AND** the slider auto-advances or allows manual navigation

#### Scenario: Services section renders

- **GIVEN** the user scrolls to the Services section
- **THEN** the section heading "Services" is visible
- **AND** service items display with images and descriptions
- **AND** the layout uses a two-column grid (image + text)

#### Scenario: Portfolio grid renders

- **GIVEN** the user scrolls to the Portfolio section
- **THEN** the section heading "Portfolio" is visible
- **AND** portfolio items display in a grid/masonry layout
- **AND** each item shows an image with hover overlay
- **AND** a "Load More" button is visible when more items exist

#### Scenario: Team section renders

- **GIVEN** the user scrolls to the Crafters section
- **THEN** the section heading "Crafters" is visible
- **AND** team member cards display with photos, names, and roles
- **AND** social media icons are shown for each member

#### Scenario: Timeline renders

- **GIVEN** the user scrolls to the Stories section
- **THEN** the section heading "Stories" is visible
- **AND** a vertical timeline displays with dates and descriptions
- **AND** year markers use the accent pink color (#e54b76)
- **AND** timeline entries alternate left/right on desktop

#### Scenario: Offer section renders

- **GIVEN** the user scrolls to the Offer section
- **THEN** the section heading "Offer" is visible
- **AND** offer items display in a grid layout
- **AND** the section has a dark background (#23214c)

#### Scenario: Expertise progress bars render

- **GIVEN** the user scrolls to the Expertise section
- **THEN** the section heading "Expertise" is visible
- **AND** progress bars display with skill names and percentages
- **AND** progress bars animate on scroll into view

#### Scenario: Contact form renders

- **GIVEN** the user scrolls to the Contact section
- **THEN** the section heading "Contact" is visible
- **AND** a contact form displays with Name, Email, Subject, and Message fields
- **AND** a Submit button is present
- **AND** company contact information is shown alongside

#### Scenario: Footer renders

- **GIVEN** the user scrolls to the bottom
- **THEN** the footer displays copyright text
- **AND** social media icons are present (Twitter, Facebook, Dribbble, Behance, RSS)
- **AND** the footer links to https://www.componentdock.com/

#### Scenario: Responsive layout

- **GIVEN** the viewport width is below 925px (`.mob-menu { display: block }` / `.main-menu` collapses at `@media screen and (max-width: 925px)`)
- **THEN** the navigation collapses to a hamburger menu
- **AND** sections stack vertically in single column
- **AND** the portfolio grid adjusts to fewer columns

## Verification checklist

- [ ] Navigation renders with logo and menu links
- [ ] Hero slider displays with image carousel and text overlays
- [ ] Services section shows two-column layout with images and descriptions
- [ ] Portfolio grid renders project items with hover effects
- [ ] Load More button works in portfolio section
- [ ] Team/Crafters section shows member cards with photos and social links
- [ ] Timeline displays dates with colored year markers (#e54b76 pink)
- [ ] Offer section renders on dark background
- [ ] Expertise progress bars animate on scroll
- [ ] Contact form has all fields (Name, Email, Subject, Message)
- [ ] Contact form validates required fields
- [ ] Footer shows copyright and social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] Brand color #23214c used for dark backgrounds and headings
- [ ] Accent color #e54b76 used for highlights and timeline markers
- [ ] Font Montserrat used for headings and UI elements
- [ ] Font PT Serif used for body text
- [ ] Responsive: hamburger nav on mobile, single-column stacking
- [ ] No ColorLib references in app code
- [ ] CNAME file contains boxcraft.free.componentdock.com
- [ ] package.json homepage is https://boxcraft.free.componentdock.com
