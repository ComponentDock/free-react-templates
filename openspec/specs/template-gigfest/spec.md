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

## Gherkin scenarios

### Header

```gherkin
Scenario: Header renders navigation and CTA
  Given the page loads
  Then the header is visible with logo on the left
  And the nav has links: Home, Performer, Pages (dropdown), Blog (dropdown), Contact
  And a "Buy Tickets" button is visible on the right
  And the header background is transparent (overlays the hero)

Scenario: Mobile menu toggle
  Given the viewport is mobile (< 992px)
  Then a hamburger/mobile menu icon is visible
  And the desktop nav is hidden
```

### Hero Slider

```gherkin
Scenario: Hero displays event info
  Given the page loads
  Then a full-screen hero section is visible with a background image
  And a dark overlay gradient is applied
  And the date "12 Feb, 2020" is displayed
  And the title "Concert 2020" is displayed
  And the subtitle "Green Avenue, New York" is displayed
  And decorative SVG shapes are visible

Scenario: Hero text is centered
  Given the page loads
  Then all hero text is horizontally and vertically centered
```

### Performers

```gherkin
Scenario: Performer grid renders four cards
  Given the user scrolls to the Performers section
  Then a "Performer" heading is displayed
  And 4 performer cards are shown in a 2x2 grid
  And each card has an image, performer name, and instrument role

Scenario: Performer cards respond to hover
  Given the user hovers over a performer card
  Then a tilt/transform effect is applied to the image
```

### About Program

```gherkin
Scenario: About section shows image and CTA
  Given the user scrolls to the About section
  Then a centered "About Program" heading is displayed
  And a description paragraph is shown
  And a large image with decorative SVG shape is on the left
  And text with "It's time to book your seat" heading is on the right
  And a "Buy Tickets" button (boxed-btn3 style) is visible

Scenario: About layout is side-by-side on desktop
  Given the viewport is desktop (>= 992px)
  Then the image and text are displayed in a two-column layout
```

### Program Details

```gherkin
Scenario: Program timeline shows schedule items
  Given the user scrolls to the Program Details section
  Then a "Program Details" heading is displayed
  And 4 program items are listed vertically
  And each item shows a time range, date, performer image, and performer name
  And a vertical timeline with circle indicators connects the items

Scenario: Program section has dark overlay
  Given the page loads
  Then the program section background has a dark overlay gradient
```

### Sponsors

```gherkin
Scenario: Sponsor carousel renders logos
  Given the user scrolls to the Sponsors section
  Then a "Sponsor Logos" heading is displayed
  And a carousel of brand logos is visible
  And navigation arrows allow scrolling through logos
```

### Footer

```gherkin
Scenario: Footer shows event details and CTA
  Given the user scrolls to the footer
  Then the event date "12 Feb, 2020" is displayed
  And the venue "Green Avenue, New York" is displayed
  And a description paragraph is shown
  And a "Buy Tickets" button is visible
  And a copyright bar is at the bottom

Scenario: Footer links to Component Dock
  Given the page loads
  Then the footer contains a link to https://www.componentdock.com/
```

## Verification checklist

- [ ] Header: transparent bg, logo, nav with dropdowns, CTA button
- [ ] Hero: full-screen bg image, dark overlay, centered date/title/subtitle, decorative shapes
- [ ] Performers: black bg, "Performer" heading, 2x2 grid of 4 cards with images
- [ ] About: black bg, centered heading, split image+text layout, CTA button
- [ ] Program: dark overlay bg, timeline of 4 items with circle indicators
- [ ] Map: embedded map placeholder (600px height)
- [ ] Sponsors: black bg, carousel of brand logos
- [ ] Footer: event details, CTA, copyright with Component Dock link
- [ ] All sections use Anton headings, Muli body text, #FF4533 brand color
- [ ] Buttons use sharp corners (0px border-radius), Anton font
- [ ] Dark theme throughout (black backgrounds, light text)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests at 100% coverage
