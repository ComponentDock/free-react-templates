# Template: Planar (Food Catering Service)

## Purpose

Recreation of ColorLib **Flatter** (food catering service template).
- **Source slug:** `flatter`
- **Source URL:** https://colorlib.com/wp/template/flatter/
- **Preview URL:** https://preview.colorlib.com/theme/flatter/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/flatter-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `https://preview.colorlib.com/theme/flatter/css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Primary green | `#78b454` | Buttons, accents, border highlights |
| Secondary purple | `#6382e6` | Service card icons |
| Accent orange | `#f09359` | Service card icons |
| Accent red | `#e66686` | Service card icons |
| Accent blue | `#38a4ff` | Service card icons |
| Accent cyan | `#4cd3e3` | Service card icons |
| Body text | `#000000` | Headings, buttons |
| Body text secondary | `#444` | Paragraphs |
| Light background | `#f9f9ff` / `#fbf9ff` | Very light lavender tint for page bg |
| Card bg | `#fff` | Card backgrounds |
| Footer bg | Dark (zigzag decorated) | Footer section |
| Font family | `"Josefin Sans", sans-serif` | Global (headings + body) |
| Button primary | Border `2px solid #78b454`, fill `#78b454` on hover, text `#000` → `#fff` on hover | `.boxed_btn` |
| Button white | Border `2px solid #fff`, fill `#fff` on hover, text `#fff` | `.boxed_btn_white` |
| Button radius | None (square corners) | Rectangular buttons |
| Button padding | `18px 39px` primary, `16px 29px` white | Consistent sizing |
| Button font | `15px`, `font-weight: 600`, `text-transform: capitalize` | Both button variants |

## Section order (from preview DOM)

1. **Navbar** — logo left, nav links right, custom order button, mobile menu
2. **Hero Slider** — owl-carousel with 3 slides, each: food catering headline "Food Catering Service." with subtitle + CTA button; background images; zigzag bottom border (`zigzag_bg_2`)
3. **Services** — 6 service cards in 2×3 grid (Birthday Catering, Wedding Service, Party Catering, Event Catering, Corporate Service, Catering On Demand); each has icon + title + description; section heading "Our Services"
4. **Video/CTA** — dark background with video placeholder + "Watch Video" heading; zigzag borders top+bottom (`zigzag_bg_1`, `zigzag_bg_2`)
5. **Popular Orders** — 6 food menu items in 2 rows × 3 columns; each: image, dish name, price tag (badge style)
6. **Testimonials** — dark banner background (`banner-3`), "Feedback from Customers" heading, customer reviews with name
7. **Brands/Partners** — "Brands love to take Our Services" heading, brand logos row
8. **Footer** — dark bg with zigzag top; 4 columns: Top Products, Quick Links, Features, Resources + Newsletter signup; copyright bottom

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Logo and navigation links visible
  Given I load the Planar template
  Then the logo is visible on the left side of the navbar
  And navigation links are displayed horizontally
  And a "Order Now" or custom CTA button is visible

Scenario: Mobile menu toggle works
  Given I view the template on a mobile viewport
  When I tap the hamburger menu icon
  Then the mobile navigation menu opens
  And all navigation links are accessible
```

### Hero Slider
```gherkin
Scenario: Hero slider displays catering headline
  Given I load the Planar template
  Then a slider section is visible with a food-related headline
  And the headline reads "Food Catering Service."
  And a subtitle or description is present below the headline
  And a CTA button is visible

Scenario: Slider transitions between slides
  Given the hero slider is visible
  When 5 seconds pass
  Then the slider transitions to the next slide
  And the new slide shows different content
```

### Services
```gherkin
Scenario: Six service cards displayed
  Given I scroll to the services section
  Then the heading "Our Services" is visible
  And 6 service cards are displayed in a 2-column or 3-column grid
  And each card has an icon, title, and description

Scenario: Service cards cover all catering types
  Given the services section is visible
  Then cards exist for: Birthday Catering, Wedding Service, Party Catering, Event Catering, Corporate Service, Catering On Demand
```

### Video/CTA
```gherkin
Scenario: Video section shows watch prompt
  Given I scroll to the video section
  Then a dark background section is visible
  And a "Watch Video" heading is displayed
  And the section has zigzag decorative borders
```

### Popular Orders
```gherkin
Scenario: Menu items with prices displayed
  Given I scroll to the popular orders section
  Then the heading "Popular Orders" is visible
  And at least 6 food items are displayed
  And each item has a name, image, and price

Scenario: Menu grid layout
  Given the popular orders section is visible
  Then items are arranged in a 3-column grid
  And items flow into 2 or more rows
```

### Testimonials
```gherkin
Scenario: Customer testimonials section
  Given I scroll to the testimonials section
  Then the heading "Feedback from Customers" is visible
  And customer names are displayed
  And the section has a dark banner background
```

### Brands
```gherkin
Scenario: Brand logos section
  Given I scroll to the brands section
  Then the heading "Brands love to take Our Services" is visible
  And brand logos or partner logos are displayed
```

### Footer
```gherkin
Scenario: Footer with multiple columns
  Given I scroll to the footer
  Then 4 content columns are visible
  And a Newsletter signup area is present
  And a copyright line is at the bottom

Scenario: Footer links and newsletter
  Given the footer is visible
  Then columns exist for: Top Products, Quick Links, Features, Resources
  And a newsletter email input and submit button are present
```

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] Josefin Sans font loaded and applied globally
- [ ] Primary green (#78b454) used on buttons and accents
- [ ] Buttons are rectangular (no border-radius) with bordered style
- [ ] Hero slider auto-rotates between slides
- [ ] Services section shows 6 cards with icons
- [ ] Popular Orders section shows 6+ items with prices
- [ ] Testimonials on dark banner background
- [ ] Footer has 4 columns + newsletter
- [ ] Zigzag decorative borders between sections (SVG or CSS)
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile menu, stacking grids
- [ ] `public/CNAME` contains `planar.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://planar.free.componentdock.com`
