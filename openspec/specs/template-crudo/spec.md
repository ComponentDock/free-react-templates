# Template: Crudo (Premium Restaurant)

## Purpose

Recreation of ColorLib **Caviar** template.
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

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Navbar renders with transparent background over hero
  Given the user loads the page
  Then a fixed navbar spans the full width
  And the navbar background is transparent initially
  And the logo text "Crudo" is displayed
  And navigation links are right-aligned

Scenario: Navbar becomes semi-transparent on scroll
  Given the user scrolls past the hero
  Then the navbar background becomes rgba(0,0,0,0.85)
  And the navbar height shrinks from 100px to 70px
```

### Hero
```gherkin
Scenario: Hero displays full-screen slider with CTA
  Given the user views the hero
  Then a full-screen background image is displayed
  And a content card is positioned on the left side
  And the card contains a heading and subtext
  And a "Reservation" square button is shown

Scenario: Hero has social icons on left edge
  Given the user views the hero
  Then social media icons (Facebook, Instagram, Twitter) are stacked on the left edge
```

### About Us
```gherkin
Scenario: About Us shows two alternating image-text blocks
  Given the user scrolls to About Us
  Then the first block has image left, text right
  And the text block contains heading "About Us" and subtitle "restaurant style"
  And the second block has text left, image right
  And the second text block subtitle is "our chef"
```

### Dish Menu
```gherkin
Scenario: Menu section shows three dish cards
  Given the user scrolls to the menu section
  Then heading "Special" is centered
  And a "View The Menu" button is below the heading
  And three dish cards are shown in a row
  And each card has a dish image, name, and price
```

### Awards
```gherkin
Scenario: Awards section shows logo row
  Given the user scrolls to awards
  Then heading "Awards" is displayed
  And five award badge images are shown in a horizontal row
```

### Testimonials
```gherkin
Scenario: Testimonials section shows carousel
  Given the user scrolls to testimonials
  Then heading "Testimonials" is centered
  And a carousel of testimonial cards is displayed
  And each card shows author image, name, and quote text
```

### Reservation
```gherkin
Scenario: Reservation section has form and image
  Given the user scrolls to reservation
  Then a dark background section is displayed
  And a reservation form is on the right with fields: date, time, persons, name, message
  And a "Reserve Your Desk" button submits the form
  And a decorative image is shown on the left
```

### Footer
```gherkin
Scenario: Footer shows minimal branding and copyright
  Given the user scrolls to the footer
  Then a dark footer is displayed
  And the logo text "Crudo" is shown
  And copyright text with Component Dock attribution is present
```

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
