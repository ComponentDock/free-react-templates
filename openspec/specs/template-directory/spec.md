# Template: Directory (Real Estate / Directory)
<!-- prep-status: shipped-as=placeboard -->
> **SHIPPED-UNDER** — the ColorLib `listed` design this prep describes already
> ships as `apps/placeboard` (<https://placeboard.free.componentdock.com>).
> Do not scaffold `apps/directory`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-placeboard/spec.md`.

## Purpose

Recreation of ColorLib "Listed" — a travel/destination directory template.
- **Source:** https://colorlib.com/wp/template/listed/
- **Preview:** https://preview.colorlib.com/theme/listed/
- **New name:** `directory`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Real Estate (directory / listing / travel destinations)

## Reference identity (measured 2026-10-24)

`theme/listed/` (200, 23,918 B, `Colorlib Listed Directory Template`) renders
this row's design, so the tokens below are measured on the right page — and this
prep is a duplicate of `template-placeboard` for the same design.

The catalogue's key `listed2` also carries `url: theme/listed/` (a copy of the
sibling key's URL, no `colorlibPreviewAliases` entry) — a catalog data bug, not
a shared page: the Listed2 design lives at `theme/listed2/` (200, 28,515 B,
Quicksand, `#7971ea`) and ships as `apps/spotlight`. Measured geometry here:
header 83 · hero 900 · feature-destination 330 · Top Destinations 673 ·
section-cover 500 · More Featured Destinations 604 · footer 528 (`#f2f2f2`),
document 3,535 px.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Body font | `"Raleway", arial, sans-serif` | All body text |
| Heading font | `"Playfair Display", times, serif` | All headings (h1-h6) |
| Body font-size | `16px` | Base text |
| Body color | `#6c757d` | Paragraph / muted text |
| Text color | `#000` | Headings, footer text |
| White | `#fff` | Hero text, button text |
| Black | `#000` | CTA button background |
| Primary blue | `#007bff` | Bootstrap primary (buttons, links) |
| Hover blue | `#3395ff` | Button hover state |
| Light gray | `#f2f2f2` | Footer background |
| Border gray | `#e6e6e6` | Dividers |
| Mid gray | `#ccc` | Borders |
| Hero overlay | `rgba(0, 0, 0, 0.5)` | Dark overlay on hero background |
| Button padding | `12px 30px` | All buttons |
| Button border-radius | `0` | Square corners |
| Hero min-height | `750px` | Hero section |
| Cover section height | `500px` | Parallax cover sections |

### Visual Notes from Screenshot

The original template shows:
- Dark, moody travel aesthetic with large background images
- Black/white/gray palette with Bootstrap blue accents
- Square (no-radius) buttons — "Get Started" is black
- Overlay dark treatment on hero and cover images
- Destination cards with hover-to-reveal dark overlay and white text
- Location pin icons (ionicons) on destination cards
- Light gray footer with contact info, links, and blog entries

## Section Structure (top to bottom)

1. **Navbar** — Logo text "Directory", nav links (Home, Destinations, Places, Blog, About, Contact), search button
2. **Hero** — Full-width background image with dark overlay, centered headline "Find your perfect place." + subtitle "Discover & connect with great places around the world." + "Location Search" button (black, square)
3. **Featured Destinations** — Section heading "Top Destinations" with subtitle text, 3-column grid of destination cards (image background, dark overlay, location icon + place name + "Visit This Place" link). Cards: Stockton Beach, Trogir, Desert
4. **Top Destinations Grid** — 6-column row of smaller destination cards (image thumbnails with location pin icon + place name). Places: Taj Mahal, Eiffel Tower, Opera House, etc.
5. **Section Cover** — Full-width parallax background image with centered promotional content "Get 10% off On Your Next Travel"
6. **More Featured Destinations** — Section heading "More Featured Destinations", 3-column grid of destination cards (same style as Featured Destinations)
7. **Footer** — Light gray (#f2f2f2) background, 4-column layout: About (text + contact info with icons), Links (nav list), Latest Blog (2 entries with dates), Newsletter (email input + subscribe button)

## Requirements

### Feature: Directory template behaviour

#### Scenario: Navbar displays correctly

- **GIVEN** the page loads
- **THEN** the navbar shows the "Directory" logo text
- **AND** the navbar contains navigation links: Home, Destinations, Places, Blog, About, Contact
- **AND** the navbar contains a search button

#### Scenario: Hero section renders

- **GIVEN** the page loads
- **THEN** the hero section displays a full-width background image
- **AND** the hero shows the headline "Find your perfect place."
- **AND** the hero shows the subtitle "Discover & connect with great places around the world."
- **AND** the hero contains a "Location Search" button styled with black background and square corners

#### Scenario: Featured Destinations grid displays

- **GIVEN** the page loads
- **THEN** the "Top Destinations" section shows a heading and subtitle text
- **AND** 3 destination cards are displayed in a row
- **AND** each card has a background image with a dark overlay
- **AND** each card shows a location pin icon, place name, and "Visit This Place" link
- **AND** cards respond to hover with visual feedback

#### Scenario: Top Destinations row displays

- **GIVEN** the page loads
- **THEN** a row of 6 smaller destination thumbnails is shown
- **AND** each thumbnail shows a location pin icon and place name

#### Scenario: Section Cover parallax displays

- **GIVEN** the page loads
- **THEN** a full-width cover section appears with a background image
- **AND** the cover section shows "Get 10% off On Your Next Travel" centered

#### Scenario: More Featured Destinations grid displays

- **GIVEN** the page loads
- **THEN** the "More Featured Destinations" section shows a heading
- **AND** 3 destination cards are displayed (same style as Top Destinations)

#### Scenario: Footer renders

- **GIVEN** the page loads
- **THEN** the footer has a light gray background (#f2f2f2)
- **AND** the footer contains 4 columns: About, Links, Latest Blog, Newsletter
- **AND** the About column shows contact info with location, phone, and email icons
- **AND** the footer contains a Component Dock attribution link

#### Scenario: Responsive layout

- **GIVEN** the page is viewed on a mobile device
- **THEN** the navbar collapses into a hamburger menu
- **AND** the destination grids stack to 1 column
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] Fonts: Raleway for body, Playfair Display for headings
- [ ] Brand colors: #000 (black CTA), #007bff (primary blue), #3395ff (hover)
- [ ] Square buttons (border-radius: 0) with padding 12px 30px
- [ ] Hero: full-width background image, dark overlay, centered content, min-height 750px
- [ ] Featured Destinations: 3-column grid, image cards with dark overlay on hover
- [ ] Top Destinations: 6-column row of thumbnails
- [ ] Section Cover: parallax background image with centered text
- [ ] More Featured Destinations: 3-column grid (same as Featured)
- [ ] Footer: light gray background, 4-column layout, contact info with icons
- [ ] Footer includes Component Dock attribution link
- [ ] No references to ColorLib in app code
- [ ] Responsive: stacks on mobile, hamburger nav
- [ ] Placeholder images via picsum.photos
- [ ] Icons from lucide-react (replacing ionicons)
- [ ] 100% test coverage
