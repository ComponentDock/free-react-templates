# Template: GigFest (Concert Event)

## Purpose

Recreation of ColorLib **Eventcon** (https://colorlib.com/wp/template/eventcon/).
Preview: https://preview.colorlib.com/theme/eventcon/

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.
Dark-themed concert/event landing page with a full-screen hero, performer grid,
program schedule, map, sponsor carousel, and footer CTA.

## Source mapping

| Field | Value |
|-------|-------|
| ColorLib slug | eventcon |
| Preview URL | https://preview.colorlib.com/theme/eventcon/ |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/eventcon-free-template.jpg |
| New name | gigfest |
| Package | @free-react-templates/gigfest |
| Deploy | https://gigfest.free.componentdock.com |

## Design tokens

Extracted from `css/style.css` on the live preview (2026-09-20).

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| brand | #FF4533 | Buttons, scroll-up, accents |
| navy | #001D38 | Headings (h1-h5), hover states |
| black | #000000 | Section backgrounds (.black_bg) |
| body-text | #AAB1B7 | Paragraphs |
| light-gray | #707070 | Carousel nav |
| border-gray | #4D6174 | Carousel nav borders |
| white | #FFFFFF | Button text, overlay text |

### Fonts

| Role | Family | Source |
|------|--------|--------|
| Headings + buttons | Anton | Google Fonts |
| Body text | Muli (400/500/600) | Google Fonts |
| Accent | Monoton | Google Fonts (not used on index) |

### Buttons

- `.boxed-btn3`: bg #FF4533, white text, Anton font 20px, padding 14px 35px,
  border-radius 0px (sharp/square), letter-spacing 2px, border transparent.
  Hover: transparent bg, #FF4533 text, 1px solid #FF4533 border.
- `.boxed-btn`: outline style — white bg, #FF4533 text, 1px solid #FF4533,
  padding 12px 44px, Anton 16px. Hover: filled #FF4533.
- Scroll-up button: circle (border-radius 50%), #FF4533 bg, white icon, 40x40px.
- Header CTA ("Buy Tickets"): same as boxed-btn3, padding 12px 46px.

### Overlays

- `.overlay`: linear-gradient top rgba(0,0,0,0.3) to black (used on hero slider).
- `.overlay2`: linear-gradient top black to rgba(0,0,0,0.8) (used on program section).

### Section backgrounds

- Hero slider: background image with `.overlay` darkening gradient.
- Performer area: solid black (.black_bg).
- About area: solid black (.black_bg).
- Program details: background image with `.overlay2`.
- Brand/sponsor area: solid black (.black_bg).
- Footer: black background.

### Other tokens

- `h1-h5`: font-family Anton, color #001D38.
- `p`: font Muli, color #AAB1B7, font-size 20px, line-height 32px.
- `a, button`: color #1F1F1F default.
- `section-padding`: 120px top/bottom.
- `.mb-80`: margin-bottom 80px.

## Section order (from live preview DOM)

1. **Header** — transparent background, logo left, nav center (home, performer,
   pages dropdown, blog dropdown, contact), "Buy Tickets" CTA right.
2. **Hero Slider** — full-screen background image with dark overlay, centered
   text: date "12 Feb, 2020", title "Concert 2020", subtitle "Green Avenue,
   New York". Decorative SVG shapes (shape_1, shape_2).
3. **Performers** — black bg, heading "Performer", 2x2 grid (col-lg-6) of
   performer cards: circular/square image + name + instrument. Tilt effect on
   hover (data-tilt).
4. **About Program** — black bg, centered heading, split layout: left = image
   with decorative SVG shape, right = text + "Buy Tickets" button.
5. **Program Details** — dark overlay bg with background image, heading
   "Program Details", timeline/list of 4 program items: time span, date,
   performer image, performer name. Vertical timeline with circle indicators.
6. **Map** — embedded Google Map, 600px height.
7. **Sponsors/Brands** — black bg, heading "Sponsor Logos", owl-carousel of
   7 brand logo images.
8. **Footer** — two parts: (a) footer_top with centered event date, venue,
   description, "Buy Tickets" button; (b) copy-right bar with copyright text.

## Requirements

### Header

#### Scenario: Header renders navigation and CTA

- **GIVEN** the page loads
- **THEN** the header is visible with logo on the left
- **AND** the nav has links: Home, Performer, Pages (dropdown), Blog (dropdown), Contact
- **AND** a "Buy Tickets" button is visible on the right
- **AND** the header background is transparent (overlays the hero)

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is mobile (< 992px)
- **THEN** a hamburger/mobile menu icon is visible
- **AND** the desktop nav is hidden

### Hero Slider

#### Scenario: Hero displays event info

- **GIVEN** the page loads
- **THEN** a full-screen hero section is visible with a background image
- **AND** a dark overlay gradient is applied
- **AND** the date "12 Feb, 2020" is displayed
- **AND** the title "Concert 2020" is displayed
- **AND** the subtitle "Green Avenue, New York" is displayed
- **AND** decorative SVG shapes are visible

#### Scenario: Hero text is centered

- **GIVEN** the page loads
- **THEN** all hero text is horizontally and vertically centered

### Performers

#### Scenario: Performer grid renders four cards

- **GIVEN** the user scrolls to the Performers section
- **THEN** a "Performer" heading is displayed
- **AND** 4 performer cards are shown in a 2x2 grid
- **AND** each card has an image, performer name, and instrument role

#### Scenario: Performer cards respond to hover

- **GIVEN** the user hovers over a performer card
- **THEN** a tilt/transform effect is applied to the image

### About Program

#### Scenario: About section shows image and CTA

- **GIVEN** the user scrolls to the About section
- **THEN** a centered "About Program" heading is displayed
- **AND** a description paragraph is shown
- **AND** a large image with decorative SVG shape is on the left
- **AND** text with "It's time to book your seat" heading is on the right
- **AND** a "Buy Tickets" button (boxed-btn3 style) is visible

#### Scenario: About layout is side-by-side on desktop

- **GIVEN** the viewport is desktop (>= 992px)
- **THEN** the image and text are displayed in a two-column layout

### Program Details

#### Scenario: Program timeline shows schedule items

- **GIVEN** the user scrolls to the Program Details section
- **THEN** a "Program Details" heading is displayed
- **AND** 4 program items are listed vertically
- **AND** each item shows a time range, date, performer image, and performer name
- **AND** a vertical timeline with circle indicators connects the items

#### Scenario: Program section has dark overlay

- **GIVEN** the page loads
- **THEN** the program section background has a dark overlay gradient

### Sponsors

#### Scenario: Sponsor carousel renders logos

- **GIVEN** the user scrolls to the Sponsors section
- **THEN** a "Sponsor Logos" heading is displayed
- **AND** a carousel of brand logos is visible
- **AND** navigation arrows allow scrolling through logos

### Footer

#### Scenario: Footer shows event details and CTA

- **GIVEN** the user scrolls to the footer
- **THEN** the event date "12 Feb, 2020" is displayed
- **AND** the venue "Green Avenue, New York" is displayed
- **AND** a description paragraph is shown
- **AND** a "Buy Tickets" button is visible
- **AND** a copyright bar is at the bottom

#### Scenario: Footer links to Component Dock

- **GIVEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gigfest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gigfest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Header: transparent bg, logo, nav with dropdowns, CTA button
- [ ] Hero: full-screen bg image, dark overlay, centered date/title/subtitle, decorative shapes
- [x] Performers: black bg, "Performer" heading, 2x2 grid of 4 cards with images
- [ ] About: black bg, centered heading, split image+text layout, CTA button
- [ ] Program: dark overlay bg, timeline of 4 items with circle indicators
- [ ] Map: embedded map placeholder (600px height)
- [ ] Sponsors: black bg, carousel of brand logos
- [ ] Footer: event details, CTA, copyright with Component Dock link
- [ ] All sections use Anton headings, Muli body text, #FF4533 brand color
- [ ] Buttons use sharp corners (0px border-radius), Anton font
- [ ] Dark theme throughout (black backgrounds, light text)
- [x] No ColorLib references in app code
- [x] Footer links to https://www.componentdock.com/
- [ ] Tests at 100% coverage
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
