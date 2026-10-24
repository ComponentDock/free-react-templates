# Template: Vespera (Hotel / Luxury Resort)
<!-- prep-status: shipped-as=belmont -->
> **SHIPPED-UNDER** — the ColorLib `samira` design this prep describes already
> ships as `apps/belmont` (<https://belmont.free.componentdock.com>).
> Do not scaffold `apps/vespera`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-belmont/spec.md`.

## Purpose

Recreation of ColorLib "Samira" — a luxury hotel / resort single-page website.

- **Source:** https://colorlib.com/wp/template/samira/
- **Preview:** https://preview.colorlib.com/theme/samira/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category:** Hotel / Luxury Resort

## Design tokens

Extracted from the live preview CSS (`styles/main_colors.css`, `styles/main_styles.css`).

| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#5a2360` | Primary purple — buttons, nav active, section accents |
| `--brand-dark` | `#320d36` | Darker purple — search bar background, hover states |
| `--accent` | `#d6baa0` | Gold/tan — button hover, borders, section subtitles, links |
| `--accent-warm` | `#ffa07f` | Salmon/coral — bottom border on search bar, hover accents |
| `--bg-dark` | `#0b1423` | Dark navy — big room content area background |
| `--bg-darker` | `#010918` | Darkest navy — room card backgrounds (dark variant) |
| `--bg-charcoal` | `#282428` | Gallery section background |
| `--bg-white` | `#FFFFFF` | Newsletter, rooms, footer backgrounds |
| `--text-body` | `#7e7e7e` | Body text color |
| `--text-heading` | `#333333` | Heading text |
| `--text-light` | `#a5a5a5` | Lighter text |
| `--star-gold` | `#fbd05e` | Star rating icon color |
| `--danger` | `#db5246` | Error / alert accent |

**Fonts:**
- Headings: `'Playfair Display', serif` — elegant serif for luxury feel
- Body/UI: `'Montserrat', sans-serif` — clean sans-serif for readability

**Buttons:**
- Shape: rectangular, no border-radius (sharp corners)
- Background: `#5a2360` (brand purple)
- Text: white, uppercase letter-spacing
- Hover: background changes to `#d6baa0` (gold)
- Arrow decoration on hover via `::after` pseudo-element

**Stars:** 5-star rating icons in gold (#fbd05e), used in logo and testimonials

## Page structure (section order)

1. **Header** — fixed top navigation with logo ("hotel" subtitle + hotel name + 5 stars), nav links (Home, About us, Rooms, News, Contact), "Book Your Stay" CTA button, hamburger for mobile
2. **Hero Slider** — full-width image carousel with centered overlay text ("luxury resort" subtitle + headline + "Book Your Stay" button), numbered navigation dots (01, 02, 03)
3. **Search Bar** — dark purple (#320d36) horizontal form strip: Select Arrival Date, Select Departure Date, Select Rooms dropdowns + "Request a Quote" button
4. **Intro** — split layout: left column has section title + description text + "View Rooms" link + "Book Your Stay" button; right column has a collage of 3 images (2 stacked left, 1 tall right)
5. **Big Room Feature** — full-width split: left half is image slider (owl-carousel style with prev/next arrows), right half has section title + description + 5-star testimonial with author avatar + name
6. **Rooms** — centered section title, 3-column grid of room cards: each card has image, price ("From $90 / Night"), room type label, title link, short description, "Book Now" button
7. **Gallery** — horizontal image slider on dark (#282428) background, images with hover overlay "+" icon, prev/next navigation arrows
8. **Newsletter** — white background, split: left has section title + description, right has email input + "Subscribe" button
9. **Footer** — white background, 3-column: logo + copyright, nav menu + description, contact info (address, phone, email)

## Requirements

### Feature: Vespera template behaviour

#### Scenario: Header navigation

- **GIVEN** the user is on the page
- **WHEN** the header is visible
- **THEN** it shows a logo with "hotel" subtitle and hotel name and 5 gold stars
- **AND** it displays nav links: Home, About us, Rooms, News, Contact
- **AND** a "Book Your Stay" CTA button is present
- **AND** the active nav link is visually distinguished

#### Scenario: Hero slider

- **GIVEN** the user views the hero section
- **THEN** a full-width background image slider is displayed
- **AND** centered overlay text shows "luxury resort" subtitle
- **AND** a headline and "Book Your Stay" button are visible
- **AND** numbered dots (01, 02, 03) allow slide navigation
- **AND** the slider auto-advances or responds to dot clicks

#### Scenario: Search bar

- **GIVEN** the user scrolls to the search bar
- **THEN** a dark purple horizontal strip appears
- **AND** it contains three dropdown selects: Arrival Date, Departure Date, Rooms
- **AND** a "Request a Quote" button is on the right

#### Scenario: Intro section

- **GIVEN** the user views the intro section
- **THEN** a split layout appears with text on the left and images on the right
- **AND** the left column shows "luxury resort" subtitle and "Relax in our Hotel" heading
- **AND** a description paragraph and "View Rooms" link are present
- **AND** a "Book Your Stay" button is visible
- **AND** the right column displays 3 hotel images in a collage layout

#### Scenario: Big Room feature

- **GIVEN** the user views the big room section
- **THEN** a full-width split layout appears
- **AND** the left side shows a room image slider with prev/next navigation
- **AND** the right side shows "luxury resort" subtitle and "Rooms with private swimming pool" heading
- **AND** a description text is present
- **AND** a 5-star testimonial with author avatar and name is displayed

#### Scenario: Room cards

- **GIVEN** the user views the rooms section
- **THEN** 3 room cards are displayed in a 3-column grid
- **AND** each card shows a room image, price, room type, title, and description
- **AND** each card has a "Book Now" button

#### Scenario: Gallery

- **GIVEN** the user views the gallery section
- **THEN** a horizontal image slider is displayed on a dark background
- **AND** each image shows a "+" overlay on hover
- **AND** prev/next navigation arrows are available

#### Scenario: Newsletter

- **GIVEN** the user views the newsletter section
- **THEN** a split layout appears on white background
- **AND** the left side shows "Our Newsletter" heading and description
- **AND** the right side shows an email input with placeholder "Your e-mail"
- **AND** a "Subscribe" button is present

#### Scenario: Footer

- **GIVEN** the user views the footer
- **THEN** a 3-column layout appears on white background
- **AND** the left column shows the hotel logo with stars and copyright
- **AND** the middle column shows nav links and a description
- **AND** the right column shows contact info: address, phone, email
- **AND** a link to Component Dock is present (replacing Colorlib attribution)

#### Scenario: Responsive behavior

- **GIVEN** the user views on mobile
- **THEN** the hamburger menu icon appears
- **AND** the search bar stacks vertically
- **AND** room cards stack in a single column
- **AND** the gallery becomes swipeable
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Design tokens match: brand purple #5a2360, gold accent #d6baa0, dark backgrounds
- [ ] Playfair Display serif for headings, Montserrat sans-serif for body
- [ ] Hero slider with numbered dots navigation
- [ ] Search bar with 3 dropdowns and CTA
- [ ] Intro split layout with 3-image collage
- [ ] Big Room split layout with image slider + testimonial
- [ ] 3-column room cards with price, type, title, description, CTA
- [ ] Gallery on dark background with hover overlay
- [ ] Newsletter split with email form
- [ ] Footer 3-column with Component Dock link
- [ ] Buttons: rectangular, purple bg, white text, gold hover
- [ ] Star ratings in gold (#fbd05e)
- [ ] No ColorLib references in app code
- [ ] Responsive mobile layout
- [ ] All tests pass with 100% coverage
