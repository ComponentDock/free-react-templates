# Template: GrandStay (Hotel & Hospitality)

## Purpose

Recreation of ColorLib's **Hotel** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source:** [colorlib.com/wp/template/hotel/](https://colorlib.com/wp/template/hotel/)
- **Preview:** [preview.colorlib.com/theme/hotel/](https://preview.colorlib.com/theme/hotel/)
- **Screenshot:** `![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hotel-free-template.jpg)`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `grandstay` (apps/grandstay, @free-react-templates/grandstay)

## Design Tokens (extracted from preview CSS)

| Token              | Value                                                                              | Usage                                   |
| ------------------ | ---------------------------------------------------------------------------------- | --------------------------------------- |
| Brand gold         | `#AE9548`                                                                          | Buttons, borders, nav arrows, accents   |
| Dark navy          | `#081624`                                                                          | Primary text, headings, check form text |
| Off-white bg       | `#F7F7F7` / `#F3F3F3`                                                              | Section alternating backgrounds         |
| White              | `#ffffff`                                                                          | Cards, overlays, dropdown menus         |
| Dark charcoal      | `#353535`                                                                          | Navbar bg, carousel nav buttons         |
| Heading font       | `"Taviraj", serif`                                                                 | Hero heading, section titles            |
| Body font          | `"Open Sans", sans-serif`                                                          | Body copy, buttons, nav links           |
| Button style       | `border: 2px solid #AE9548`, uppercase, bold, icon-right arrow, radius `50px` pill | Primary CTA                             |
| Card radius        | `0` (sharp corners)                                                                | Room cards, facility panels             |
| Pill radius        | `50px / 60px`                                                                      | Nav thumbnails, dropdown                |
| Social icon radius | `50%`                                                                              | Circular social icons                   |

## Requirements

### Requirement: Navbar renders with correct links and dropdown

The navbar shall display the brand name "GrandStay" and navigation links: Home, About, Rooms, Facilities, News, Contact. The Facilities link shall have a dropdown with room types: Junior Suite, Double Room, Senior Suite, Single Room. The navbar background shall be dark charcoal (#353535).

#### Scenario: Navbar renders all links

- **WHEN** the user visits GrandStay
- **THEN** the navbar shows links: Home, About, Rooms, Facilities, News, Contact
- **AND** the Facilities link has a dropdown with: Junior Suite, Double Room, Senior Suite, Single Room
- **AND** the navbar background is dark charcoal

#### Scenario: Facilities dropdown opens and closes

- **WHEN** the user clicks the Facilities button
- **THEN** the dropdown opens showing room types
- **AND** clicking outside closes the dropdown

### Requirement: Hero displays welcome heading with thumbnail navigation

The hero section shall show a large serif heading "We hope you'll enjoy your stay." with three thumbnail navigation cards (Pool, Sauna, Gym) and prev/next arrows.

#### Scenario: Hero renders heading and thumbnails

- **WHEN** the user views the hero section
- **THEN** a large serif heading reads "We hope you'll enjoy your stay."
- **AND** three navigation thumbnails are shown (Pool, Sauna, Gym)
- **AND** prev/next arrow buttons are present

### Requirement: Room availability section shows room card and check form

The room availability section shall display a room card with image, title "Junior Suite", price "$252", and feature icons (size, guests, bed, view). A check availability form shall show date pickers, room quantity, room type selector, and a gold-bordered card.

#### Scenario: Room card displays details

- **WHEN** the user scrolls to the room availability section
- **THEN** a room card displays "Junior Suite" with price "$252"
- **AND** the card has feature icons for size, guests, bed type, and view

#### Scenario: Check availability form renders

- **WHEN** the user views the check availability form
- **THEN** date pickers, room quantity input, and room type selector are shown
- **AND** the form has a gold-bordered card styling

### Requirement: About section displays quote and descriptive text

The about section shall display a centered quote about customer experience followed by two columns of descriptive body text.

#### Scenario: About renders quote and text

- **WHEN** the user views the about section
- **THEN** a centered quote about customer experience is displayed
- **AND** two columns of descriptive body text appear below

### Requirement: Facilities section shows alternating image-text layout

The facilities section shall display the heading "Facilities" with two facility items in alternating image-left/text-right layout, each with a title, description, and gold "Visit Center" CTA button.

#### Scenario: Facilities renders alternating layout

- **WHEN** the user views the facilities section
- **THEN** the heading reads "Facilities"
- **AND** two facility items are shown in alternating layout
- **AND** each has a title, description, and gold "Visit Center" button

### Requirement: Guestbook section shows tabbed testimonials

The guestbook section shall display the heading "Guestbook" with three tabbed testimonial cards, each with a date, 5-star rating, title, and review text.

#### Scenario: Guestbook renders tabbed testimonials

- **WHEN** the user views the guestbook section
- **THEN** the heading reads "Guestbook"
- **AND** three tabbed testimonial cards are available
- **AND** each has a date, 5-star rating, title, and review text

#### Scenario: Guestbook tab switching works

- **WHEN** the user clicks a different tab
- **THEN** the corresponding testimonial is displayed

### Requirement: Instagram section displays social CTA

The Instagram section shall display the heading "Follow us on Instagram @grandstayhotel".

#### Scenario: Instagram renders heading

- **WHEN** the user views the Instagram section
- **THEN** the heading reads "Follow us on Instagram @grandstayhotel"

### Requirement: Room pics row shows images

The room pics section shall display 4 room images in a full-width row.

#### Scenario: Room pics renders four images

- **WHEN** the user scrolls to the footer room pics
- **THEN** 4 room images are displayed in a full-width row

### Requirement: Footer displays contact information and Component Dock link

The footer shall display four columns: Location, Reception, Shuttle Service, Restaurant, each with an icon and contact text. The footer shall link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders contact columns

- **WHEN** the user views the footer
- **THEN** four columns are shown: Location, Reception, Shuttle Service, Restaurant
- **AND** each has an icon and contact text
- **AND** the footer links to Component Dock

## Verification Checklist

- [x] Section order matches 1:1 with preview DOM
- [x] Brand color `#AE9548` used for buttons, borders, accents
- [x] Taviraj serif font for headings, Open Sans for body
- [x] Pill-shaped buttons with gold border and right-arrow icon
- [x] Dark charcoal navbar (#353535)
- [x] Hero with large serif heading + 3 thumbnail nav cards
- [x] Room card with image carousel, title, price, feature icons
- [x] Check availability form with gold border
- [x] About section with centered quote + 2-column text
- [x] Facilities with alternating image/text layout
- [x] Guestbook with tabbed testimonials + star ratings
- [x] Instagram CTA section
- [x] Footer room pics row (4 images)
- [x] Footer with 4-column contact info + Component Dock link
- [x] No ColorLib references in app code (provenance in spec only)
- [x] Uses picsum.photos placeholder images
- [x] Uses lucide-react for icons (replace Linearicons/Flaticon)
- [x] Uses Google Fonts (Taviraj + Open Sans) via index.html link
