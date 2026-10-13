# Template: Alpine (Hotel & Resort)

## Purpose

Recreation of ColorLib "Montana" — a luxury hotel & resort website template.
- **Source:** https://colorlib.com/wp/template/montana/
- **Preview:** https://preview.colorlib.com/theme/montana/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/montana-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/alpine`
- **Deploy target:** `alpine.free.componentdock.com`

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/montana/css/style.css`:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand Blue | `#009DFF` | Primary accent — buttons, links, section title spans, sticky header bg |
| Brand Orange | `#ff5e13` | Secondary accent — hover states, CTA emphasis, form focus borders |
| Dark Text | `#1F1F1F` | Headings, body text anchors |
| Body Text | `#4D4D4D` | Paragraph text |
| Muted Text | `#919191` / `#999999` | Secondary labels, form placeholders |
| Light BG | `#f9f9ff` | Section backgrounds, form inputs, widget bg |
| Lavender BG | `#f0e9ff` | Border accents, blog sidebar widgets |
| White | `#fff` / `#ffffff` | Card backgrounds, button fill, nav text on dark bg |
| Black | `#000` | Overlay tint, sticky header bg |

### Typography
- **Primary Font:** Raleway (Google Fonts, weights 300–900)
- **Fallback:** Roboto, Helvetica, Arial, sans-serif
- **Heading sizes:** h3 = 46px (desktop), 30px (mobile); h4 = 18px; body = 16px
- **Slider heading:** 100px, uppercase, letter-spacing 2px, weight 400

### Buttons
- `.boxed-btn`: white bg, blue border (#009DFF), blue text, uppercase, letter-spacing 3px, padding 18px 44px. Hover → blue bg, white text.
- `.boxed-btn3`: blue bg (#009DFF), white text, same dimensions. Hover → white bg, blue text.
- `.book_btn`: blue bg (#009DFF), white text, padding 12px 26px, rounded corners.
- Button border-radius: 0px (sharp/square edges, not rounded)

### Layout & Spacing
- Section padding: 120px top/bottom (`.section-padding`)
- Container: `.container-fluid` for full-width, `.container` for boxed
- Grid: Bootstrap-style 12-col grid (col-xl-4, col-md-4, etc.)
- Header: absolute positioned, 150px horizontal padding, transparent bg over hero

## Section Structure (top to bottom)

1. **Navbar** — Transparent header over hero slider. Center logo (col-xl-2), nav links left (col-xl-5), social links + "Book a Room" button right (col-xl-5). Mobile hamburger. Becomes sticky black bg on scroll.

2. **Hero Slider** — Full-viewport carousel (Owl Carousel). 4 slides with fullscreen background images, centered white text. Headline: "Montana Resort" / subtitle like "Unlock to enjoy the view of Martine". "Life is Beautiful" variation on alternating slides.

3. **About Us** — Two-column: left has section title ("A Luxuries Hotel with Nature"), descriptive paragraph, "More About Us" link. Right has two stacked images (img_1 + img_2 offset). Padding-top 200px.

4. **Offers / Services** — Section title centered ("Our Offers" / "Luxuries Facilities"). 3-column card grid: each card has an image with zoom-on-hover, title, bullet list of features, and a "More About Us" button. Images overflow hidden with scale transform on hover.

5. **Video / Parallax Area** — Full-width background image section with dark overlay (opacity 0.5). Centered white text: "Explore the Montana" + circular white play button (60px, border-radius 50%).

6. **Featured Rooms** — Grid of 2x2 room cards. Each card: full-width image with gradient overlay (white→black bottom), room name + price overlay at bottom, hover reveals "More About Us" link that slides up. Images zoom on hover.

7. **Query / CTA Section** — Centered layout: left side has heading "Want to ask about our rooms" + description paragraph. Right side has phone number with phone icon. Blue left border accent.

8. **Instagram Feed** — Row of 5 equal-width images with dark overlay on hover (opacity transition). No text, pure visual gallery strip.

9. **Footer** — 4-column layout: (1) About column with logo + text, (2) Quick Links, (3) Instagram mini-grid, (4) Newsletter with email input + subscribe button. Bottom bar: copyright left, social icons right, separated by border.

10. **Booking Popup** — Modal with form: check-in date, check-out date, adults dropdown, children dropdown, room type select, "Check Availability" button. Triggered from "Book a Room" button.

## Requirements

### Navbar

#### Scenario: Desktop navigation renders all menu items

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar displays "Home", "Rooms", "About", "Blog", "Pages", "Elements", "Contact" links
- **AND** a centered logo image is visible
- **AND** a "Book a Room" button appears on the right
- **AND** social media icons (Facebook, Twitter) are visible

#### Scenario: Sticky header activates on scroll

- **GIVEN** the user is on a desktop viewport
- **WHEN** the user scrolls past the hero section
- **THEN** the header background changes from transparent to black
- **AND** the header becomes fixed at the top of the viewport
- **AND** navigation links remain white on the dark background

#### Scenario: Mobile hamburger menu toggles

- **GIVEN** the user is on a mobile viewport
- **WHEN** the user taps the hamburger icon
- **THEN** the mobile navigation menu opens
- **AND** all navigation links are visible in a vertical list

### Hero Slider

#### Scenario: Hero slider displays with fullscreen background

- **GIVEN** the user is on any viewport
- **WHEN** the page loads
- **THEN** a full-viewport height carousel is displayed
- **AND** the first slide shows a background image
- **AND** centered white text is overlaid on the image

#### Scenario: Hero slider cycles through slides

- **GIVEN** the hero slider is visible
- **WHEN** 5 seconds pass without interaction
- **THEN** the slider transitions to the next slide
- **AND** the transition is a smooth fade or slide

#### Scenario: Slider navigation arrows are visible on hover

- **GIVEN** the hero slider is visible on desktop
- **WHEN** the user hovers over the slider area
- **THEN** left and right navigation arrows appear
- **AND** the arrows are circular (border-radius 50%) with semi-transparent white bg

### About Us

#### Scenario: About section displays two-column layout

- **GIVEN** the user scrolls to the About section
- **THEN** a left column shows the section title and description text
- **AND** a right column shows two stacked images
- **AND** the section title includes a blue span (e.g., "About Us" in blue)

#### Scenario: About section has a "More About Us" link

- **GIVEN** the user is in the About section
- **THEN** a "More About Us" styled link is visible below the description

### Offers Section

#### Scenario: Offers section shows three service cards

- **GIVEN** the user scrolls to the Offers section
- **THEN** three cards are displayed in a row on desktop
- **AND** each card has an image, title, and feature list

#### Scenario: Offer card image zooms on hover

- **GIVEN** the user hovers over an offer card
- **THEN** the card image scales up slightly (transform: scale 1.1)
- **AND** the transition is smooth (0.3s)

#### Scenario: Offer card has a button

- **GIVEN** the user views an offer card
- **THEN** a "More About Us" button is visible below the feature list
- **AND** the button has a blue outline style (boxed-btn)

### Video / Parallax Section

#### Scenario: Video section shows background image with overlay

- **GIVEN** the user scrolls to the video section
- **THEN** a full-width background image is displayed
- **AND** a dark semi-transparent overlay covers the image (opacity 0.5)

#### Scenario: Video section has centered content

- **GIVEN** the video section is visible
- **THEN** white text is centered vertically and horizontally
- **AND** a circular play button (white bg, 60px, border-radius 50%) is displayed

### Featured Rooms

#### Scenario: Rooms grid displays four room cards in 2x2 layout

- **GIVEN** the user scrolls to the rooms section
- **THEN** four room cards are displayed in a 2-column grid
- **AND** each card has a full-width image with gradient overlay

#### Scenario: Room card shows name and price

- **GIVEN** a room card is visible
- **THEN** the room name is displayed in white text
- **AND** the room price or "per night" label is shown

#### Scenario: Room card hover reveals link

- **GIVEN** the user hovers over a room card
- **THEN** a "More About Us" link slides up from below
- **AND** the link is initially hidden (opacity 0, translateY offset)
- **AND** the link appears with a smooth transition

### Query / CTA Section

#### Scenario: CTA section displays inquiry prompt

- **GIVEN** the user scrolls to the query section
- **THEN** a heading asks about room inquiries
- **AND** a description paragraph is displayed
- **AND** a phone number with phone icon is shown on the right

#### Scenario: CTA section has blue left border accent

- **GIVEN** the query section is visible
- **THEN** the left side has a blue (#009DFF) left border styling

### Instagram Feed

#### Scenario: Instagram section shows image row

- **GIVEN** the user scrolls to the Instagram section
- **THEN** five equal-width images are displayed in a row
- **AND** the images span full width

#### Scenario: Instagram image shows overlay on hover

- **GIVEN** the user hovers over an Instagram image
- **THEN** a dark overlay appears over the image
- **AND** the transition is smooth

### Footer

#### Scenario: Footer displays four columns

- **GIVEN** the user scrolls to the footer
- **THEN** four columns are visible: About, Quick Links, Instagram, Newsletter
- **AND** each column has a heading

#### Scenario: Footer newsletter has email input

- **GIVEN** the Newsletter column is visible
- **THEN** an email input field is displayed
- **AND** a subscribe button is next to it

#### Scenario: Footer bottom bar shows copyright and social links

- **GIVEN** the user views the footer bottom
- **THEN** copyright text is displayed on the left
- **AND** social media icons are displayed on the right
- **AND** a border separates the bottom bar from the footer content

### Booking Popup

#### Scenario: Booking modal opens on button click

- **GIVEN** the user clicks "Book a Room"
- **THEN** a modal dialog opens with a booking form
- **AND** the modal has a white background with form fields

#### Scenario: Booking form contains date and room fields

- **GIVEN** the booking modal is open
- **THEN** check-in date, check-out date inputs are visible
- **AND** adults and children dropdown selects are visible
- **AND** a "Check Availability" button is at the bottom

## Verification Checklist

- [ ] Navbar: transparent over hero, sticky on scroll, mobile hamburger
- [ ] Hero: fullscreen slider with 4 slides, auto-cycling, nav arrows
- [ ] About: two-column, blue accent title, two images, "More About Us" link
- [ ] Offers: 3-column cards, image zoom on hover, feature lists, buttons
- [ ] Video/Parallax: full-width bg, dark overlay, centered white text, play button
- [ ] Rooms: 2x2 grid, gradient overlay, name+price, hover-reveal link
- [ ] Query/CTA: heading + description + phone number, blue left border
- [ ] Instagram: 5-image row, full-width, hover overlay
- [ ] Footer: 4 columns, newsletter input, copyright, social icons
- [ ] Booking popup: modal with date selects, room type, CTA button
- [ ] Design tokens: Raleway font, #009DFF blue, #ff5e13 orange, #1F1F1F dark
- [ ] Button styles: square (0px radius), blue outline + solid variants
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
