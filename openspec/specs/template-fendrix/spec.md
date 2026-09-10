# Template: Fendrix (Fine Dining Restaurant)

## Purpose

Recreation of the ColorLib **Buri** template — a premium fine-dining restaurant
website with a moody, sophisticated aesthetic.

- **Source**: https://colorlib.com/wp/template/buri/
- **Preview**: https://preview.colorlib.com/theme/buri/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Name mapping**: `apps/fendrix` recreates ColorLib `buri`

## Design tokens

Extracted from the live preview's `css/style.css` stylesheet and screenshot analysis.

| Token | Value | Usage |
| --- | --- | --- |
| Brand / accent color | `#d6ad86` (warm tan) | CTA buttons, subtitle text |
| Hover accent | `#ffb830` (warm gold) | Button hover states |
| Dark base (footer) | `#1c1a18` | Footer background |
| Text color | `#2c3033` (dark slate) | Headings, body text |
| White | `#ffffff` | About section bg, nav text, hero text |
| Body font | `Montserrat`, sans-serif | Body text, nav, buttons |
| Heading font | `Playfair Display`, serif | h1–h6, section headings |
| Button 1 | bg `#d6ad86`, text `#fff`, hover bg `#ffb830`, uppercase, padding 23px 60px | Primary CTA |
| Button 3 | bg `#000`, text `#fff`, hover bg `#ffb830`, capitalize | Secondary CTA |
| Section title | Centered, margin-bottom 70px (mobile 30px) | Section headings |

## Section structure (order)

1. **Navbar** — transparent overlay on hero; logo left, nav links center (Home, About, Menu, Blog dropdown, Pages dropdown, Contact), social icons right (Facebook, Instagram)
2. **Banner / Hero** — full-height image bg (`banner_bg.png`), left-aligned: subtitle "Expensive but the best", h1 "Modern restaurant in center of the city", CTA "book a table" (btn_1)
3. **About Us** — white bg, overlapping hero with negative margin (-250px desktop / -100px mobile); split: left = subtitle + heading + 2 paragraphs + "learn More" btn_3; right = food image
4. **Food Menu** — centered section title "Popular Menu / Delicious Food Menu"; 2-column grid of 6 food items (image + name + description + price)
5. **Intro Video** — parallax image bg, centered play button (YouTube popup)
6. **Testimonials / Reviews** — section title "Testimonials / What they said"; owl-carousel of review cards (quote text, client avatar, name, 5-star rating)
7. **Contact** — image bg; white card (left half) with heading + address + hours + reservation phone/email
8. **Footer** — dark bg `#1c1a18`; 3-column layout: logo + phone + email + social | Quick links list | Newsletter form + description; copyright bar with Component Dock link

## Gherkin requirements

### Feature: Navbar

```gherkin
Scenario: Navbar displays all navigation links
  Given the user is on the Fendrix page
  Then the navbar shows links: Home, About, Menu, Blog, Contact
  And social icons for Facebook and Instagram are visible

Scenario: Navbar collapses on mobile
  Given the viewport width is less than 992px
  When the user clicks the hamburger toggle
  Then the navigation links are shown in a collapsible menu
```

### Feature: Hero Banner

```gherkin
Scenario: Hero section displays headline and CTA
  Given the user is on the Fendrix page
  Then a subtitle reads "Expensive but the best"
  And a heading reads "Modern restaurant in center of the city"
  And a "book a table" button is visible

Scenario: Hero uses background image
  Given the user is on the Fendrix page
  Then the hero section has a background food photography image
```

### Feature: About Section

```gherkin
Scenario: About section overlaps hero
  Given the user is on the Fendrix page
  Then the about section overlaps the hero by approximately 250px

Scenario: About section shows content
  Given the user is on the Fendrix page
  Then a heading reads "Delicious food provider since 1990"
  And a "learn More" button is visible
  And a food image is displayed on the right
```

### Feature: Food Menu

```gherkin
Scenario: Menu displays 6 food items
  Given the user is on the Fendrix page
  When the user scrolls to the food menu section
  Then 6 food items are displayed in a 2-column grid
  And each item shows a name, description, and price

Scenario: Menu has section title
  Given the user is on the Fendrix page
  Then the menu section title reads "Popular Menu" / "Delicious Food Menu"
```

### Feature: Video Intro

```gherkin
Scenario: Video section shows play button
  Given the user is on the Fendrix page
  When the user scrolls to the video intro section
  Then a centered play button is visible
  And clicking it opens a YouTube video popup
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials carousel displays reviews
  Given the user is on the Fendrix page
  When the user scrolls to the testimonials section
  Then review cards are shown in a carousel
  And each card has a quote, client name, avatar, and 5-star rating

Scenario: Testimonials section title
  Given the user is on the Fendrix page
  Then the testimonials section title reads "Testimonials" / "What they said"
```

### Feature: Contact

```gherkin
Scenario: Contact section shows info
  Given the user is on the Fendrix page
  When the user scrolls to the contact section
  Then address, opening hours, and reservation phone/email are displayed
  And the info is inside a white card overlaying a background image
```

### Feature: Footer

```gherkin
Scenario: Footer shows links and newsletter
  Given the user is on the Fendrix page
  Then the footer has a dark background
  And quick links are listed
  And a newsletter email subscription form is present

Scenario: Footer links to Component Dock
  Given the user is on the Fendrix page
  Then the footer contains a link to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] Design tokens match: brand `#d6ad86`, hover `#ffb830`, footer `#1c1a18`, headings Playfair Display, body Montserrat
- [ ] Hero is full-height with background image and CTA
- [ ] About section overlaps hero with negative margin
- [ ] Food menu: 6 items in 2-column grid with prices
- [ ] Video intro with play button
- [ ] Testimonials carousel with star ratings
- [ ] Contact section with white card on image bg
- [ ] Footer dark bg with newsletter form + Component Dock link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via `https://picsum.photos/seed/fendrix-<n>/<w>/<h>`
- [ ] Google Fonts: Playfair Display + Montserrat loaded in index.html
