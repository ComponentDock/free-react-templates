# Template: Devport (Portfolio / Personal)

## Purpose

Recreation of ColorLib "Steve" — a personal portfolio website for a freelancer/developer. Full-screen hero carousel, portfolio grid with filter tabs, about section on gray background, testimonials with star ratings and brand logos, newsletter signup, and social footer.

- **Source slug:** `steve`
- **Preview URL:** https://preview.colorlib.com/theme/steve/
- **ColorLib page:** https://colorlib.com/wp/template/steve/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/steve-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from live preview CSS (`style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Primary (CTA) | `#e45447` | Red — buttons, hover states |
| Text dark | `#000000` / `#222222` | Headings, body |
| Text muted | `#777777` / `#999999` | Descriptions, subtext |
| Background light | `#f9f9ff` | About section gray bg |
| Background white | `#ffffff` | Main content, newsletter form |
| Accent blue | `#90acd1` | Hover border on form buttons |
| Newsletter bg | Image (`newsletter-bg.jpg`) | Full-width bg image with white text overlay |
| Font heading | `"Poppins", sans-serif` | Main title headings |
| Font body | `"Roboto", sans-serif` | Body text, nav, buttons |
| Button style | `#e45447` solid bg, white text, no radius (sharp) | `.primary-btn` — rectangular, sharp corners |
| Button hover | Transparent bg, `#e45447` border, dark text | Inverted on hover |
| Banner | Full-screen carousel (3 slides) with bg images | Owl carousel, centered text |
| Portfolio grid | Masonry-like layout with mixed col sizes (6+3, 3+3) | Isotope-style filterable grid |
| Testimonial | Left-aligned quote with star ratings, brand logos right | Owl carousel |
| Section spacing | `section_gap` class | Consistent vertical padding |

### Color palette

- Primary: `#e45447` (red)
- Dark: `#000000` / `#222222`
- Muted: `#777777`
- Light gray bg: `#f9f9ff`
- Accent blue: `#90acd1`
- White: `#ffffff`

## Section structure (from live DOM)

1. **Navbar** — Logo left, nav links right (Home, About, Portfolio dropdown, Pages dropdown, Blog dropdown, Contact). Bootstrap responsive hamburger.
2. **Hero Carousel** — Full-screen owl-carousel with 3 slides. Each slide: bg image, centered "Name" heading + "Personal portfolio Website" subtitle + "Hire Me" red CTA button. Slides auto-rotate.
3. **Portfolio** — Heading "Latest Works" + description. Filter tabs: All Categories, Branding, Creative Work, Web Design. Masonry-style grid (8 items) with mixed column sizes. Each item: image + overlay + title + "Client Project" label.
4. **About** — Gray bg (`#f9f9ff`). Two-column: left illustration, right heading "about myself" + paragraphs + "More Info" button.
5. **Testimonials** — Left column (7-col): owl-carousel of testimonials with quote icon, name, 5-star rating, and quote text. Right column (4-col offset): brand logos arranged in top/mid/bottom groups (5 logos total).
6. **Newsletter** — Bg image with white text overlay. Heading "Join Our Newsletter" + description. Email input + "Subscribe" button inline.
7. **Footer** — Centered: logo + "Follow Me" + 4 social icons (Facebook, Twitter, Dribbble, Behance). Copyright line → replaced with Component Dock link.

## Gherkin requirements

### Navbar
```gherkin
Scenario: Navbar renders all navigation links
  Given the page loads
  Then the navbar shows links: Home, About, Portfolio, Contact
  And the navbar displays a logo image on the left

Scenario: Navbar has dropdown menus
  Given the user hovers over Portfolio
  Then a dropdown appears with sub-links
```

### Hero Carousel
```gherkin
Scenario: Hero carousel displays centered content
  Given the page loads
  Then a full-screen banner with background image is shown
  And the person's name is displayed as a large heading
  And "Personal portfolio Website" is shown as a subtitle
  And a red "Hire Me" button is centered below the text

Scenario: Hero carousel auto-rotates between slides
  Given the page loads
  Then the banner cycles through 3 different background images
  And the text content remains the same on each slide
```

### Portfolio Section
```gherkin
Scenario: Portfolio shows filterable project grid
  Given the user scrolls to the portfolio section
  Then the heading "Latest Works" is displayed
  And filter tabs show: All Categories, Branding, Creative Work, Web Design
  And 8 portfolio items are displayed in a masonry-style grid

Scenario: Portfolio items have mixed column sizes
  Given the portfolio grid renders
  Then some items span 2 columns (col-lg-6)
  And some items span 1 column (col-lg-3)
  And each item shows a title and "Client Project" label
```

### About Section
```gherkin
Scenario: About section on gray background
  Given the user scrolls to the about section
  Then a light gray background (#f9f9ff) is displayed
  And an illustration appears on the left
  And a heading "about myself" is shown on the right
  And paragraphs of text are displayed
  And a "More Info" button is shown
```

### Testimonials
```gherkin
Scenario: Testimonials with star ratings
  Given the user scrolls to the testimonials section
  Then a carousel of testimonial items is shown on the left
  And each item has a quote icon, name, 5-star rating, and quote text
  And brand logos are displayed on the right side

Scenario: Testimonial carousel rotates
  Given the user views the testimonials
  Then the carousel auto-advances through testimonial entries
```

### Newsletter
```gherkin
Scenario: Newsletter section with email form
  Given the user scrolls to the newsletter section
  Then a background image with white text overlay is displayed
  And the heading "Join Our Newsletter" is shown
  And an email input field is present
  And a "Subscribe" button is present
```

### Footer
```gherkin
Scenario: Footer with social links and copyright
  Given the user scrolls to the footer
  Then a logo is displayed
  And "Follow Me" text is shown
  And social icons for Facebook, Twitter, Dribbble, Behance are present
  And a copyright line is displayed
  And a "Component Dock" link replaces the original attribution
```

## Verification checklist

- [ ] All 7 sections implemented in correct order
- [ ] Navbar with logo, links, and dropdowns
- [ ] Hero carousel with 3 slides, centered text, red CTA button
- [ ] Portfolio grid with filter tabs and masonry-style layout
- [ ] About section with gray bg, illustration, text, CTA button
- [ ] Testimonials with star ratings, quote icon, brand logos
- [ ] Newsletter with bg image, email form, subscribe button
- [ ] Footer with social icons and Component Dock attribution
- [ ] Design tokens match: Poppins/Roboto fonts, `#e45447` red primary, sharp buttons
- [ ] Responsive layout (mobile hamburger, stacked columns)
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible (Button, ButtonLink, cn)
