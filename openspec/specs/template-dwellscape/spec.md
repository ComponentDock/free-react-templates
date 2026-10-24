# Template: Dwellscape (Real Estate)
<!-- prep-status: shipped-as=dwellix -->
> **SHIPPED-UNDER** — the ColorLib `rehomes` design this prep describes already
> ships as `apps/dwellix` (<https://dwellix.free.componentdock.com>).
> Do not scaffold `apps/dwellscape`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-dwellix/spec.md`.

## Purpose

Recreation of ColorLib "Rehomes" — a real estate agency template featuring a
full-width map hero, advanced search form, property listings, feature highlights,
property categories, CTA, blog, partner logos, and a dark overlay footer.

- **Source slug:** `rehomes`
- **Preview URL:** https://preview.colorlib.com/theme/rehomes/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/rehomes-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from `style.css` served by the preview page.

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#92c800` | Lime green — CTA buttons, heading spans, hover states, newsletter accent |
| Heading color | `#2a303b` | Dark slate — section headings (h2), text, footer bg |
| Search form bg | `#2a303b` | Dark slate — search bar area background |
| Choose Us bg | `#f5f8fa` | Very light gray — "Why Choose Us" section |
| Badge rent | `#1bb1e8` | Sky blue — property "Rent" badge |
| Badge sale | `#f26522` | Orange — property "Sale" badge |
| Body text | `#555962` / `#636a76` | Gray shades for paragraphs, meta text |
| Light bg | `#eef2f5` | Section backgrounds |
| White | `#ffffff` | Default section backgrounds |
| Footer text | `#ffffff` | Widget titles, contact info |
| Font family | `"Lato", sans-serif` | Body and headings |
| Section heading size | 42px (desktop) | `font-weight: 400`, lowercase, span gets brand color |
| Button height | 46px | `.rehomes-btn` |
| Button min-width | 150px | Primary CTA |
| Button border-radius | 2px | Near-rectangle |
| Button hover | bg white, color `#92c800`, box-shadow | |
| Card border-radius | 5px | Property thumbs, blog thumbs, category cards |
| Footer overlay | `bg-overlay bg-overlay-2` | Dark image overlay with opacity |

## Requirements

### Feature: Dwellscape template behaviour

#### Scenario: Hero section renders full-width map embed

- **GIVEN** the user visits Dwellscape
- **WHEN** the hero section loads
- **THEN** a full-width area is displayed with a dark overlay map background
- **AND** a headline overlay or prominent visual element is visible

#### Scenario: Search form has filter dropdowns and search button

- **GIVEN** the user sees the search form below the hero
- **WHEN** the form area renders
- **THEN** there are dropdown selects for Location, Property Type, City, Bedrooms, Bathrooms
- **AND** a price range slider is shown
- **AND** a size range slider is shown
- **AND** a "Search" button with brand green background (#92c800) is displayed

#### Scenario: Property listing section shows 6 cards in 3-column grid

- **GIVEN** the user scrolls to the property listings section
- **WHEN** the section heading reads "Top New In NewYork"
- **THEN** 6 property cards are displayed in a 3-column responsive grid
- **AND** each card has an image thumbnail, address title, seller info, and property details (sqft, garage, baths)
- **AND** each card shows a price badge area at the bottom
- **AND** on hover the price area turns brand green (#92c800) with white text

#### Scenario: Why Choose Us section displays 3 feature cards

- **GIVEN** the user scrolls past the property listings
- **WHEN** the "Why Choose Us?" section renders on a light gray (#f5f8fa) background
- **THEN** 3 feature cards are displayed in a row
- **AND** each card has an icon, a title (h5), and descriptive text
- **AND** the feature titles are "Find Your Home", "Transportation support", "Save Your Money"

#### Scenario: Categories by Property section shows 3 category cards

- **GIVEN** the user scrolls to the categories section
- **WHEN** the "Categories By Property" heading renders
- **THEN** 3 category cards are displayed with background images and gradient overlay
- **AND** each card shows a category name and "25 Properties" link

#### Scenario: Call to Action section with parallax background

- **GIVEN** the user scrolls to the CTA section
- **WHEN** the section renders with a parallax background image and dark overlay
- **THEN** a headline "Download app & join now!" is displayed in white
- **AND** supporting text is shown below
- **AND** a CTA button (outline style, brand green border) is displayed

#### Scenario: Latest News blog section shows 3 post cards

- **GIVEN** the user scrolls to the blog section
- **WHEN** the "Latest News" heading renders
- **THEN** 3 blog post cards are displayed in a 3-column grid
- **AND** each card has a thumbnail image, a title link, and post meta (author, date, comments)
- **AND** post titles turn brand green (#92c800) on hover

#### Scenario: Partner logos carousel

- **GIVEN** the user scrolls to the partner section
- **WHEN** the partner area renders
- **THEN** a horizontal carousel of 5 partner logo images is displayed
- **AND** logos are clickable links

#### Scenario: Footer with dark overlay background

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders with a dark background image and overlay
- **THEN** 4 widget columns are displayed: Logo + about, Get Info (contact), Property Cities, Newsletter
- **AND** a newsletter form with email input and submit button is shown
- **AND** a bottom footer menu bar is displayed
- **AND** the footer links to Component Dock (https://www.componentdock.com/)

#### Scenario: Top header bar with contact info and social links

- **GIVEN** the user visits the page
- **WHEN** the top header bar renders
- **THEN** email "info.colorlib@gmail.com" and phone "(12) 345 6789" are displayed
- **AND** social icons for Facebook, Twitter, LinkedIn, Instagram are shown

#### Scenario: Main navigation with logo and menu

- **GIVEN** the user sees the main header
- **WHEN** the navigation renders
- **THEN** a logo image and a horizontal menu with "Home" and "Pages" (with dropdown) are shown
- **AND** a "Contact Us" button with brand green styling appears at the right

## Verification checklist

- [ ] Hero: full-width map area or parallax background with overlay
- [ ] Search form: dark background (#2a303b), 6 filter dropdowns, 2 sliders, green search button
- [ ] Property listings: 6 cards, 3-col grid, image + address + seller + details + price badge
- [ ] Why Choose Us: 3 cards on #f5f8fa background, icon + title + text
- [ ] Categories: 3 cards with gradient overlay, category name + count
- [ ] CTA: parallax bg, dark overlay, headline, outline button
- [ ] Blog: 3 post cards, 3-col grid, thumb + title + meta
- [ ] Partners: logo carousel, 5 logos
- [ ] Footer: dark overlay bg, 4 columns, newsletter form, Component Dock link
- [ ] Top header: contact info, social icons
- [ ] Navigation: logo, menu with dropdown, contact button
- [ ] Colors match tokens: brand #92c800, dark #2a303b, heading spans green
- [ ] Font: Lato loaded via Google Fonts
- [ ] Responsive: mobile hamburger menu, stacked grid below lg breakpoint
