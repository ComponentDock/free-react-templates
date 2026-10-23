# Template: Trekly (Business)

## Purpose

Recreate the ColorLib "Ecoland" travel & tours landing template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template provides a full travel agency landing experience with hero slider, search form, services, destinations, hotels, restaurants, blog, and footer.

**Source:** https://colorlib.com/wp/template/ecoland/
**Preview:** https://preview.colorlib.com/theme/ecoland/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/ecoland/ (HTTP 200, 63,243 B, fetched 2026-10-23) and its theme stylesheet `theme/ecoland/css/theme.min.css` (24,476 B, sha256 `a3998564d9e6…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#78453f` | 2 declarations — `.button:hover` |
| Surface | `#ffffff` | 33 declarations — `body`, `.dark h2` |
| Ink / dark surface | `#111111` | 9 declarations — `.brand`, `.hero-shade` |
| Typeface | **Poppins** for body and **Cormorant Garamond** for headings — the sheet indents through its own variables (`var(--heading)` (1 rule — h1)); they resolve in its `:root`/theme block to `"Cormorant Garamond", Georgia, serif` for `--heading` and `Poppins,Arial,sans-serif` for the body, so request the Google families `Poppins` (400) and `Cormorant Garamond` — never the variables | `font-family` declaration in the theme sheet |
| Body type | `color: var(--muted)` | `body{…}` rule |
| Radii | `50%`, `35% 65% 60% 40%` | `50%` (.avatar); `35% 65% 60% 40%` (.testimonials:before) |

Palette in order of use: `#ffffff` ×33, `#111111` ×9, `#78453f` ×2, `#08131a8a` ×1, `#08131ab8` ×1, `#17171b` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with sticky navigation

The template SHALL display a dark navigation bar with brand name "Trekly" and links to all sections (Home, Services, About, Destinations, Hotels, Restaurant, Blog, Contact). The navbar SHALL be sticky on scroll and SHALL support a mobile hamburger menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar displays brand "Trekly" and all 8 navigation links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu expands with all links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a navigation link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero slider with auto-advance

The template SHALL display a full-width hero section with an image slider that auto-advances between slides. Each slide SHALL contain a subheading, headline, description, CTA button, and background image.

#### Scenario: First slide renders on load

- **WHEN** the page loads
- **THEN** the first slide displays "Discover Greece" subheading and the corresponding headline

#### Scenario: Slides auto-advance

- **WHEN** 5 seconds elapse
- **THEN** the slider transitions to the next slide automatically

#### Scenario: Manual slide navigation

- **WHEN** the user clicks a slide indicator button
- **THEN** the slider transitions to the corresponding slide

### Requirement: Search form

The template SHALL display a search form with fields for Destination, Check-in Date, Check-out Date, Price Limit dropdown, and a Search button.

#### Scenario: Search form renders all fields

- **WHEN** the search section is visible
- **THEN** all 4 form fields and the search button are present

#### Scenario: Form submission prevents default

- **WHEN** the user clicks the Search button
- **THEN** the form submission is prevented (no page reload)

### Requirement: Services section

The template SHALL display 4 service cards in a grid layout, each with an icon, title, and description.

#### Scenario: All services render

- **WHEN** the services section is visible
- **THEN** 4 cards appear: Activities, Travel Arrangement, Private Guide, Location Manager

### Requirement: Stats counter section

The template SHALL display a statistics section with 4 counter cards showing key metrics.

#### Scenario: Stats render correctly

- **WHEN** the stats section is visible
- **THEN** 4 stat values are displayed: 10,000+ Happy Customers, 1,000+ Tours, 200+ Destinations, 50,000+ Activities

### Requirement: Parallax CTA sections

The template SHALL display 2 parallax call-to-action sections with background images and centered headings.

#### Scenario: Destination CTA renders

- **WHEN** the destination CTA section is visible
- **THEN** the heading "Choose the Perfect Destination" is displayed with a Discover button

#### Scenario: Hotel CTA renders

- **WHEN** the hotel CTA section is visible
- **THEN** the heading "Choose at $99 Per Night Only" is displayed

### Requirement: Travel destination cards

The template SHALL display 5 destination cards in a grid, each with image, price, name, location, and star rating.

#### Scenario: All destination cards render

- **WHEN** the travel cards section is visible
- **THEN** 5 destination cards are displayed with price "$400" each

### Requirement: Hotel cards

The template SHALL display 2 hotel cards with images, prices, names, locations, and star ratings.

#### Scenario: Hotel cards render

- **WHEN** the hotel section is visible
- **THEN** 2 hotel cards are displayed

### Requirement: Room cards

The template SHALL display 4 room type cards with images, descriptions, amenities, prices, and Book Now buttons.

#### Scenario: Room cards render with book buttons

- **WHEN** the room offers section is visible
- **THEN** 4 room cards are displayed each with a "Book Now" button

### Requirement: Restaurant cards

The template SHALL display 3 restaurant cards with images, menu prices, locations, names, and star ratings.

#### Scenario: Restaurant cards render

- **WHEN** the restaurant section is visible
- **THEN** 3 restaurant cards are displayed

### Requirement: Blog entries

The template SHALL display 3 blog entry cards on a gray background, each with image, date overlay, title, excerpt, Read More link, author, and comment count.

#### Scenario: Blog entries render

- **WHEN** the blog section is visible
- **THEN** 3 blog entries are displayed with Read More links

### Requirement: Footer with Component Dock link

The template SHALL display a 4-column footer with About/brand info, Information links, Experience links, and Contact details. The footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer renders all columns

- **WHEN** the footer is visible
- **THEN** all 4 columns are present with brand info, navigation links, experience links, and contact details

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ is present with target="_blank"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/trekly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/trekly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with sticky navigation — the navbar displays brand "Trekly" and all 8 navigation links
- [x] Hero slider with auto-advance — the first slide displays "Discover Greece" subheading and the corresponding headline
- [ ] Search form — all 4 form fields and the search button are present
- [ ] Services section — 4 cards appear: Activities, Travel Arrangement, Private Guide, Location Manager
- [ ] Stats counter section — 4 stat values are displayed: 10,000+ Happy Customers, 1,000+ Tours, 200+ Destinations, 50,000+ Activities
- [x] Parallax CTA sections — the heading "Choose the Perfect Destination" is displayed with a Discover button
- [ ] Travel destination cards — 5 destination cards are displayed with price "$400" each
- [ ] Hotel cards — 2 hotel cards are displayed
- [x] Room cards — 4 room cards are displayed each with a "Book Now" button
- [ ] Restaurant cards — 3 restaurant cards are displayed
- [ ] Blog entries — 3 blog entries are displayed with Read More links
