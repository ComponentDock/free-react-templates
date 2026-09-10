# Template: Ravida (Fine-Dining Restaurant)

## Purpose

Recreation of ColorLib **Buri** — a premium fine-dining restaurant template
with a moody, upscale aesthetic. The React 19 + Vite + Tailwind 4 + TypeScript
recreation preserves section order, design tokens, and layout fidelity while
using placeholder images and the Component Dock brand.

- **Source:** [ColorLib Buri](https://colorlib.com/wp/template/buri/)
- **Preview:** https://preview.colorlib.com/theme/buri/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/buri-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from `preview.colorlib.com/theme/buri/css/style.css` and the live
rendered DOM:

### Colors

| Token             | Value     | Usage                                     |
| ----------------- | --------- | ----------------------------------------- |
| `--brand`         | `#d6ad86` | Warm taupe/gold — CTA buttons, accents    |
| `--brand-dark`    | `#c49b72` | Darker variant for hover states           |
| `--text-dark`     | `#1c1a18` | Near-black — footer bg, headings          |
| `--text-body`     | `#555555` | Body text default                         |
| `--text-muted`    | `#777777` | Secondary/muted text                      |
| `--bg-light`      | `#fff`    | Section backgrounds (about, menu)         |
| `--bg-cream`      | `#f7efe7` | Light cream tint — subtle section bg      |
| `--footer-bg`     | `#1c1a18` | Dark footer background                    |
| `--white`         | `#fff`    | Text on dark backgrounds, buttons         |
| `--border-light`  | `#eeeeee` | Subtle dividers                           |

### Typography

| Role      | Font Family                | Weight  | Usage                              |
| --------- | -------------------------- | ------- | ---------------------------------- |
| Display   | `"Playfair Display", serif` | 700     | Hero headline, section titles      |
| Body      | `"Montserrat", sans-serif` | 400/600 | Navigation, body text, buttons     |

### Spacing & Layout

- Max container width: 1140px (Bootstrap `.container`)
- Section padding: `140px 0` (major sections), `90px 0` (menu)
- Hero height: 1080px (full viewport feel)

### Buttons

- CTA "Book a Table": solid `#d6ad86` background, `#fff` text,
  `border-radius: 0` (sharp rectangular with slight 3-5px radius),
  uppercase Montserrat, generous padding
- Hover: darken background to `#c49b72`

### Section Backgrounds

| Section           | Background                             |
| ----------------- | -------------------------------------- |
| Hero/Banner       | Full-bleed dark food photography       |
| About             | White (`#fff`), offset -250px overlap  |
| Food Menu         | White/light cream                      |
| Intro Video       | Full-bleed parallax dark photography   |
| Testimonials      | White with subtle padding              |
| Contact           | Dark overlay on background image       |
| Footer            | Solid `#1c1a18` dark                   |

## Gherkin Requirements

### Hero / Banner

```gherkin
Scenario: Hero displays with dark food-photography background
  Given the user is on the Ravida homepage
  Then a full-width hero section is visible with a dark food-photography background
  And the headline "Delicious Food Provider Since 1990" is displayed in Playfair Display serif
  And a subtitle describing the restaurant is shown below the headline
  And a "Book a Table" CTA button with warm taupe background is visible

Scenario: Hero navigation bar overlays the banner
  Given the user is on the Ravida homepage
  Then the navigation bar is positioned over the hero section
  And the logo text "Ravida" is displayed in white
  And navigation links include Home, About, Menu, Blog, Contact
  And the navigation collapses to a hamburger on mobile
```

### About Section

```gherkin
Scenario: About section shows two-column layout
  Given the user scrolls past the hero
  Then an "About Us" section is displayed with a white background
  And the left column contains heading and descriptive text
  And the right column contains a food/restaurant image
  And a "Learn More" link is visible

Scenario: About section overlaps the hero
  Given the user views the About section
  Then the section overlaps the hero by approximately 250px using negative margin
```

### Food Menu Section

```gherkin
Scenario: Menu section displays food items in grid
  Given the user scrolls to the Menu section
  Then a section titled "Delicious Food Menu" with subtitle "Popular Menu" is displayed
  And food items are arranged in a 2-column grid
  And each item shows a food image, name, brief description, and price
  And items include: Pork Sandwich ($40.00), Roasted Marrow, Summer Cooking, Easter Delight, Tiener Schnitze, Chicken Roast

Scenario: Menu items have consistent layout
  Given the user views any menu item
  Then the item shows a thumbnail image on the left
  And the food name is displayed in a bold heading
  And a short description is shown below the name
  And the price is displayed at the bottom right
```

### Intro Video / Parallax Section

```gherkin
Scenario: Parallax section displays between menu and testimonials
  Given the user scrolls past the food menu
  Then a full-width parallax section with a dark background image is displayed
  And a centered play icon or heading is visible
  And the section has a height of approximately 550px
```

### Testimonials Section

```gherkin
Scenario: Testimonials section shows client reviews
  Given the user scrolls to the Testimonials section
  Then a section titled "What they said" with subtitle "Testimonials" is displayed
  And client review cards are shown in a carousel/slider
  And each card shows a quote and the reviewer name

Scenario: Testimonials are responsive
  Given the user views testimonials on a mobile device
  Then one testimonial card is visible at a time
  And navigation dots allow swiping between cards
```

### Contact Section

```gherkin
Scenario: Contact section shows reservation and location info
  Given the user scrolls to the Contact section
  Then a "Contact Us" heading is displayed
  And the address "240, Kings Street, New York City USA" is shown
  And operating hours "Mon - Fri (9.00-19.00)" and "Sat - Sun (9.00-19.00)" are displayed
  And a reservation phone number is shown
  And a quick links column includes Reservation, Breakfast, Lunch, Dinner

Scenario: Newsletter subscription is available
  Given the user views the contact section
  Then a "Subscribe Newsletter" input and button are visible
  And descriptive text mentions updates about discounts and offers
```

### Footer

```gherkin
Scenario: Footer displays with dark background
  Given the user scrolls to the bottom
  Then the footer has a dark background (#1c1a18)
  And the footer contains quick links and newsletter subscription
  And a copyright line is displayed at the bottom
  And a "Made with Component Dock" link points to https://www.componentdock.com/
```

### Responsive Behavior

```gherkin
Scenario: Layout adapts to mobile viewport
  Given the user views Ravida on a screen width < 768px
  Then the navigation collapses to a hamburger menu
  And the hero text is centered and reduced in size
  And the about section becomes single-column (text above image)
  And the food menu grid becomes single-column
  And the contact section stacks its columns vertically
  And the footer columns stack vertically
```

## Verification Checklist

- [ ] Hero section: dark food photography background, Playfair Display headline, taupe CTA
- [ ] Navigation: sticky/overlay on hero, responsive hamburger, logo + links
- [ ] About section: two-column, -250px overlap, "Learn More" link
- [ ] Food Menu: 2-column grid, 6 items with images, names, descriptions, prices
- [ ] Parallax section: full-width dark image, centered content
- [ ] Testimonials: carousel with review cards, quote + name
- [ ] Contact: address, hours, reservation info, quick links, newsletter
- [ ] Footer: dark bg (#1c1a18), Component Dock link, copyright
- [ ] Design tokens: Playfair Display + Montserrat fonts, #d6ad86 brand color
- [ ] Responsive: mobile hamburger, stacked columns, adapted grid
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos/seed/ravida-<n>/<w>/<h>
