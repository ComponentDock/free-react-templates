# Template: ShotScape (Photography)
<!-- prep-status: shipped-as=reflexly -->
> **SHIPPED-UNDER** — the ColorLib `phozogy` design this prep describes already
> ships as `apps/reflexly` (<https://reflexly.free.componentdock.com>).
> Do not scaffold `apps/shotscape`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-reflexly/spec.md`.

## Purpose

Recreation of the ColorLib "Phozogy" photography studio template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/phozogy/
- **Preview:** https://preview.colorlib.com/theme/phozogy/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/phozogy-free-template.jpg
- **New name:** `shotscape` (apps/shotscape, @free-react-templates/shotscape)
- **Category:** Photography
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (https://preview.colorlib.com/theme/phozogy/css/style.css):

| Token | Value | Notes |
|-------|-------|-------|
| Primary / Brand | `#009603` | Green — buttons, nav underline, search box bg |
| Heading color | `#111111` | All h1–h6 default |
| Body text | `#666666` | Paragraphs |
| Body text alt | `#444444` | Secondary text |
| Light text | `#c4c4c4` | Footer paragraphs, copyright |
| Footer bg | `#000606` | Near-black |
| Footer border | `#181d1d` | Copyright separator line |
| Section bg light | `#f5f5f5` | Light gray sections |
| White bg | `#ffffff` | Cards, service items |
| Heading font | `"Quantico", sans-serif` | All headings + nav links + buttons |
| Body font | `"Open Sans", sans-serif` | Paragraphs, body text |
| Button radius | `0` (square/rectangular) | No border-radius on primary-btn |
| Button padding | `14px 30px` | primary-btn |
| Button text | Uppercase, 700 weight, Quantico | primary-btn, site-btn |
| Card shadow | `0px 10px 25px rgba(206,206,206,0.5)` | Service items |
| Nav link underline | `3px #009603` bottom border | On active/hover |
| Search box | 50×50px, #009603 bg, white icon | Top-right header |
| Dropdown bg | `#111111` | Nav dropdown |
| Hero height | `900px` | Full-viewport slider |
| Hero overlay | Dark image overlay | Text centered white on dark bg image |
| Portfolio hover overlay | Semi-transparent dark | Green-ish overlay on hover |

## Section Structure (from live preview DOM)

1. **Header/Navbar** — Logo (left), horizontal nav links (Home, About, Services, Pricing, Portfolio, Blog, Pages dropdown, Contact), search icon (green square, right)
2. **Hero Slider** — Full-width OwlCarousel slider, 900px height, centered text (h2 "Photography Studio" + paragraph + "Contact us" CTA button), dark image backgrounds
3. **Services** — 3-column grid: Shooting, Videos, Editing. Each card has image on top, title, description paragraph. White card with box shadow, overlapping hero by -70px (negative margin)
4. **Categories** — Section title "Categories" + "View all" button on right. Carousel of category cards (Animal, Natural, Portrait, etc.) with image + category name + picture count. Transparent/overlay text on image
5. **Portfolio** — "Our latest works" title. Filter tabs (All, Fashion, Lifestyle, Natural, Wedding, Videos). Masonry-style grid with hover effects (dark overlay, plus icon, title "COLORS SPEAK", category label). Mix of large-width, large-height, and regular items
6. **Footer** — Near-black bg (#000606). 4 columns: About (logo + description + social icons), Instagram (3 thumbnails), Quick Links (2 columns), Subscribe (email form). Copyright bar at bottom

## Requirements

### Navbar

#### Scenario: Navbar renders all navigation links

- **GIVEN** the user loads the page
- **THEN** the navbar displays links: Home, About, Services, Pricing, Portfolio, Blog, Pages, Contact
- **AND** a logo image is visible on the left
- **AND** a green search icon button is visible on the right

#### Scenario: Pages dropdown reveals sub-links on hover

- **GIVEN** the user hovers over the "Pages" nav link
- **THEN** a dropdown appears with Gallery, Portfolio Details, Blog Details links

#### Scenario: Nav link hover shows green underline

- **GIVEN** the user hovers over any nav link
- **THEN** a 3px green (#009603) underline appears beneath the link

### Hero Slider

#### Scenario: Hero slider displays with heading and CTA

- **GIVEN** the page loads
- **THEN** a full-width hero section is visible
- **AND** it displays the heading "Photography Studio"
- **AND** a descriptive paragraph is shown below the heading
- **AND** a "Contact us" green button is visible

#### Scenario: Hero slider auto-rotates between slides

- **GIVEN** the hero slider is visible
- **WHEN** 5 seconds pass
- **THEN** the slider transitions to the next slide

### Services Section

#### Scenario: Services section shows three service cards

- **GIVEN** the user scrolls to the services section
- **THEN** 3 service cards are displayed: Shooting, Videos, Editing
- **AND** each card has an image, title, and description
- **AND** cards have white background with box shadow

#### Scenario: Services section overlaps hero

- **GIVEN** the services section renders
- **THEN** the services container has negative top margin overlapping the hero

### Categories Section

#### Scenario: Categories section displays with title and view all button

- **GIVEN** the user scrolls to the categories section
- **THEN** "Categories" heading is displayed
- **AND** a "View all" green button is visible on the right

#### Scenario: Category cards show image and count

- **GIVEN** the categories slider is visible
- **THEN** each category card shows a background image, category name, and picture count

### Portfolio Section

#### Scenario: Portfolio shows filterable grid

- **GIVEN** the user scrolls to the portfolio section
- **THEN** "Our latest works" heading is displayed
- **AND** filter tabs are shown: All, Fashion, Lifestyle, Natural, Wedding, Videos
- **AND** a grid of portfolio items is displayed

#### Scenario: Portfolio items reveal overlay on hover

- **GIVEN** the user hovers over a portfolio item
- **THEN** a dark semi-transparent overlay appears
- **AND** a plus icon is centered on the item
- **AND** the item title and category label appear

#### Scenario: Clicking a filter tab filters portfolio items

- **GIVEN** the user clicks the "Fashion" filter tab
- **THEN** only fashion-category items are visible
- **AND** the "All" tab is no longer highlighted

### Footer

#### Scenario: Footer displays four columns

- **GIVEN** the user scrolls to the footer
- **THEN** an about column with logo, description, and social icons is visible
- **AND** an Instagram column with 3 thumbnail images is visible
- **AND** a Quick Links column with navigation links is visible
- **AND** a Subscribe column with email input and send button is visible

#### Scenario: Footer has dark background

- **GIVEN** the footer renders
- **THEN** the background color is near-black (#000606)
- **AND** text color is light gray (#c4c4c4)

#### Scenario: Copyright bar at bottom

- **GIVEN** the footer renders
- **THEN** a copyright line is shown below a separator border
- **AND** it includes "Component Dock" link

## Verification checklist

- [ ] Navbar: logo, all 8 nav links, search icon, Pages dropdown
- [ ] Hero: full-width slider, heading, paragraph, CTA button
- [ ] Services: 3 cards with images, titles, descriptions, box shadows
- [ ] Categories: section title, view-all button, category slider
- [ ] Portfolio: title, filter tabs, masonry grid, hover overlays
- [ ] Footer: 4 columns, dark bg, social icons, subscribe form, copyright
- [ ] Design tokens: Quantico headings, Open Sans body, #009603 brand green, #000606 footer
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] public/CNAME: shotscape.free.componentdock.com
- [ ] Package name: @free-react-templates/shotscape
