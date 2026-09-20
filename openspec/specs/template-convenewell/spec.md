# Template: ConveneWell (Concert / Event)

## Purpose

Recreation of ColorLib **Eventcon** — a concert/event landing page template.

- **ColorLib source:** https://colorlib.com/wp/template/eventcon/
- **Live preview:** https://preview.colorlib.com/theme/eventcon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eventcon-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `convenewell` (never reuse the source name "eventcon")

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand / Primary | `#FF4533` | Red-orange — buttons, accents, links, footer heading |
| Text headings | `#001D38` | Dark navy — h1-h5 base color |
| Body text | `#AAB1B7` | Light gray — paragraphs, map labels |
| Link text | `#1F1F1F` | Near-black — anchor/button base |
| Background (sections) | `#000000` | Black — performer, about, program, map info, brands, footer |
| Timeline circle | `#1EC6B6` | Teal — program timeline dot |
| Section title h3 | `#FFFFFF` | White — headings on dark backgrounds |
| Section title h4 | `#FF4533` | Accent — subheadings |
| Carousel nav border | `#4D6174` | Muted blue-gray |
| Placeholder text | `#CCCCCC` | Input placeholders |
| Label text | `#7E7E7E` | Form labels |
| Font — Body | `"Muli"` | sans-serif fallback |
| Font — Headings | `"Anton"` | Display headings (h1-h5) |
| Font — Special | `"Monoton"` | Imported, used for decorative text |
| Button primary | `#FF4533` bg, `#fff` text | Square corners, Anton font, 14px 35px padding |
| Button hover | Transparent bg, `#FF4533` text, `#FF4533` border | Ghost/outline on hover |
| Header button | `#FF4533` bg, `#fff` text | Square, Anton, 12px 46px padding |
| Overlay | rgba(0,0,0,0.3) to black | Hero gradient overlay |
| Overlay2 | black to rgba(0,0,0,0.8) | Program details overlay |

## Section Structure (in order)

1. **Navbar** — Transparent header over hero. Logo left, centered nav links (Home, Performer, Pages dropdown, Blog dropdown, Contact), "Buy Tickets" button right (square, `#FF4533`). Sticky on scroll with white bg.
2. **Hero** — Full-width background image (`banner.png`), dark gradient overlay (rgba(0,0,0,0.3) to black), centered content: decorative SVG shapes, date "12 Feb, 2020", heading "Concert 2020", location "Green Avenue, New York". Height ~900px.
3. **Performers** — Black bg (`#000000`), section title "Performers" left-aligned. 2-column grid of 4 performer cards (col-lg-6). Each: portrait image, name in white Anton, role in `#FF4533`. Tilt hover effect on images.
4. **About Program** — Black bg, centered section title + description paragraph (light gray text). Two-column layout: left has about image with decorative SVG shape, right has heading "It's time to book your seat" in `#FF4533`, paragraph, "Buy Tickets" CTA button.
5. **Program Details** — Overlay2 gradient bg (black to semi-transparent black). Centered title "Program Details". Timeline layout with center vertical line (`rgba(255,255,255,0.2)`). Alternating left/right cards. Each card: teal circle dot (`#1EC6B6`), time "3.00-4.00pm", date "12 Feb 2020", performer image, performer name.
6. **Map** — Full-width Google Maps embed (grayscale styled), location info overlay card positioned at bottom-right: black bg, "Concert 2020" heading in `#FF4533`, venue/phone/email in flex layout (label in `#AAB1B7`, value in `#fff`).
7. **Sponsors** — Black bg, centered section title "Sponsor Logos" in `#FF4533`. Owl-carousel of sponsor logo images (5+ logos). Border-bottom separator.
8. **Footer** — Black bg. Top section: centered date "12 Feb, 2020" in `#FF4533`, heading "Green Avenue, New York" in white, description paragraph, "Buy Tickets" CTA. Bottom: copyright text in `#AAB1B7` with Colorlib attribution. Component Dock link added per convention.

## Gherkin Requirements

```gherkin
Feature: ConveneWell concert event template

  Background:
    Given the template is loaded at the root URL

  Scenario: Navbar displays correctly
    Then the logo is visible
    And navigation links "Home", "Performer", "Pages", "Blog", "Contact" are present
    And a "Buy Tickets" button is visible in the header

  Scenario: Hero section renders
    Then a full-width hero image with dark gradient overlay is displayed
    And the date "12 Feb, 2020" is visible
    And the heading "Concert 2020" is visible
    And the location "Green Avenue, New York" is visible

  Scenario: Performers section displays
    Then the section title "Performers" is visible
    And 4 performer cards are displayed in a 2-column grid
    And each card shows a portrait image, name, and role
    And performer names are in white heading font

  Scenario: About Program section renders
    Then the section title is visible
    And a description paragraph is displayed
    And the heading "It's time to book your seat" is visible
    And a "Buy Tickets" CTA button is present

  Scenario: Program Details timeline renders
    Then the section title "Program Details" is visible
    And a vertical timeline line is displayed
    And 4 program entries are shown in alternating left/right layout
    And each entry shows a time, date, performer image, and name
    And teal circle dots mark each timeline entry

  Scenario: Map and location info displays
    Then a map area is rendered
    And a location info card shows venue, phone, and email
    And the location heading "Concert 2020" is in accent color

  Scenario: Sponsors carousel renders
    Then the section title "Sponsor Logos" is visible
    And a carousel of sponsor logos is displayed

  Scenario: Footer renders
    Then the date "12 Feb, 2020" is visible in accent color
    And the heading "Green Avenue, New York" is visible
    And a "Buy Tickets" CTA button is present
    And a copyright line is displayed
    And a Component Dock attribution link is present
```

## Verification Checklist

- [ ] All 8 sections render in the correct order
- [ ] Design tokens match: `#FF4533` primary, `#000000` black bg, `#001D38` headings, `#AAB1B7` body text, `#1EC6B6` timeline
- [ ] Fonts: Anton for headings, Muli for body (loaded via Google Fonts link in index.html)
- [ ] Buttons: square corners, `#FF4533` bg with white text, ghost hover state
- [ ] Hero: full-width bg image with gradient overlay, centered text
- [ ] Performers: 2-col grid, 4 cards with portrait/name/role on black bg
- [ ] Program Details: vertical timeline with alternating cards, teal dots
- [ ] Footer: "Buy Tickets" CTA, Component Dock link
- [ ] No references to ColorLib in app code (spec + TEMPLATES.md only)
- [ ] `public/CNAME` contains `convenewell.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://convenewell.free.componentdock.com`
- [ ] Placeholder images use `https://picsum.photos/seed/convenewell-<n>/<w>/<h>`
