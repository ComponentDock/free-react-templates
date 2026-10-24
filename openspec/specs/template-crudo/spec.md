# Template: Crudo (Premium Restaurant)

## Purpose

Recreation of ColorLib "Caviar" template.
- **Source slug:** `caviar`
- **Preview URL:** https://preview.colorlib.com/theme/caviar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| dark-bg | `#000000` | Header, hero, reservation sections |
| dark-overlay | `rgba(0,0,0,0.85)` | Sticky header background |
| body-font | "Open Sans", sans-serif | Body text, paragraphs |
| heading-font | "Work Sans", sans-serif | Headings, button text |
| button-bg | `#ffffff` | `.caviar-btn` default background |
| button-border | `#b2b2b2` | `.caviar-btn` 1px border |
| button-radius | `0` | Square/sharp corners |
| button-hover | `#ff0000` | Button text color on hover (red accent) |
| body-text-color | `#333333` | Default paragraph text |
| light-bg | `#f9f9f9` / `#fafafa` | Section backgrounds |
| heading-color | `#000000` | Dark headings on light sections |
| footer-bg | dark (black) | Footer background |
| footer-text | `#fff` / `#ddd` | Footer branding and copyright |

## Section structure (from live DOM)

Order extracted from `https://preview.colorlib.com/theme/caviar/`:

1. **Navbar** — fixed, initially transparent over hero, becomes semi-transparent black (`rgba(0,0,0,0.85)`) on scroll. Logo text "caviar", right-aligned nav links: Home, Pages (dropdown), About Us, Menu, Awards, Testimonials, Reservation, Contact. Search icon button.
2. **Hero Slider** — full-screen image slider with background images. Left-aligned content card on each slide: heading "Lorem Ipsum", subtext paragraph, "Reservation" square CTA button. Small slide-nav thumbnail in bottom-right. Social icons (Facebook, Instagram, Twitter) fixed on left side.
3. **About Us** — two-part layout with large images and text blocks alternating sides. First block: image left, text right (heading "About Us", subtitle "restaurant style", paragraph). Second block: text left, image right (subtitle "our chef", paragraph). Light background.
4. **Dish Menu** — section heading "Special" centered, "View The Menu" square CTA button. 3-column grid of dish cards: each card has dish image, dish name, and price ($45). Light background.
5. **Awards** — heading "Awards" left-aligned, horizontal row of 5 award badge/logos. Light background.
6. **Testimonials** — heading "Testimonials" centered, carousel of testimonial cards. Each card: author thumbnail image + name/role, quote paragraph. Light background.
7. **Reservation** — split layout: right side has reservation form (date, time, persons, last name, message textarea, "Reserve Your Desk" button), left side has background image. Dark background.
8. **Footer** — minimal dark footer with logo text and copyright line. Credits Component Dock.

## Requirements

### Navbar

#### Scenario: Navbar renders with transparent background over hero

- **GIVEN** the user loads the page
- **THEN** a fixed navbar spans the full width
- **AND** the navbar background is transparent initially
- **AND** the logo text "Crudo" is displayed
- **AND** navigation links are right-aligned

#### Scenario: Navbar becomes semi-transparent on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar background becomes rgba(0,0,0,0.85)
- **AND** the navbar height shrinks from 100px to 70px

### Hero

#### Scenario: Hero displays full-screen slider with CTA

- **GIVEN** the user views the hero
- **THEN** a full-screen background image is displayed
- **AND** a content card is positioned on the left side
- **AND** the card contains a heading and subtext
- **AND** a "Reservation" square button is shown

#### Scenario: Hero has social icons on left edge

- **GIVEN** the user views the hero
- **THEN** social media icons (Facebook, Instagram, Twitter) are stacked on the left edge

### About Us

#### Scenario: About Us shows two alternating image-text blocks

- **GIVEN** the user scrolls to About Us
- **THEN** the first block has image left, text right
- **AND** the text block contains heading "About Us" and subtitle "restaurant style"
- **AND** the second block has text left, image right
- **AND** the second text block subtitle is "our chef"

### Dish Menu

#### Scenario: Menu section shows three dish cards

- **GIVEN** the user scrolls to the menu section
- **THEN** heading "Special" is centered
- **AND** a "View The Menu" button is below the heading
- **AND** three dish cards are shown in a row
- **AND** each card has a dish image, name, and price

### Awards

#### Scenario: Awards section shows logo row

- **GIVEN** the user scrolls to awards
- **THEN** heading "Awards" is displayed
- **AND** five award badge images are shown in a horizontal row

### Testimonials

#### Scenario: Testimonials section shows carousel

- **GIVEN** the user scrolls to testimonials
- **THEN** heading "Testimonials" is centered
- **AND** a carousel of testimonial cards is displayed
- **AND** each card shows author image, name, and quote text

### Reservation

#### Scenario: Reservation section has form and image

- **GIVEN** the user scrolls to reservation
- **THEN** a dark background section is displayed
- **AND** a reservation form is on the right with fields: date, time, persons, name, message
- **AND** a "Reserve Your Desk" button submits the form
- **AND** a decorative image is shown on the left

### Footer

#### Scenario: Footer shows minimal branding and copyright

- **GIVEN** the user scrolls to the footer
- **THEN** a dark footer is displayed
- **AND** the logo text "Crudo" is shown
- **AND** copyright text with Component Dock attribution is present

## Verification checklist

- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run build` succeeds
- [ ] All sections match the original section order
- [ ] Design tokens (colors, fonts, radii) match the extracted values
- [ ] No ColorLib references in any `apps/` file (comments, text, data)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `crudo.free.componentdock.com`
- [ ] `package.json` homepage is `https://crudo.free.componentdock.com`
- [ ] Placeholder images use `picsum.photos/seed/crudo-*`
- [ ] Google Fonts loaded: Open Sans + Work Sans
- [ ] Navbar — a fixed navbar spans the full width
- [ ] Hero — a full-screen background image is displayed
- [ ] About Us — the first block has image left, text right
- [ ] Dish Menu — heading "Special" is centered
- [ ] Awards — heading "Awards" is displayed
- [ ] Testimonials — heading "Testimonials" is centered
- [ ] Reservation — a dark background section is displayed
