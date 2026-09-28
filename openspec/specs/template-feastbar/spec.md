# Template: Feastbar (Food & Restaurant)

## Purpose

Recreation of the ColorLib **Foodbar** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source slug:** `foodbar`
- **ColorLib page:** https://colorlib.com/wp/template/foodbar/
- **Live preview:** https://preview.colorlib.com/theme/foodbar/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foodbar-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Brand color (primary) | `#f42f2c` (vivid red) | CTA buttons, nav hover/active, active dropdown item, price badge, form submit |
| Background light | `#f9f9ff` (very light lavender-gray) | Banner left panel, decorative circle borders |
| Background dark | `#04091e` (near-black navy) | Off-canvas menu, testimonial section background |
| Text dark | `#222222` | Headings (Oswald), nav links, footer title |
| Text muted | `#777777` | Body paragraphs (Roboto) |
| White | `#ffffff` | Button text, dropdown background, menu item bg |
| Border light | `#eeeeee` | Dropdown border top-arrow color |
| Font heading | `"Oswald"` (Google Fonts) — weights 300, 500, 700 | All `<h1>`–`<h6>`, section titles |
| Font body | `"Roboto"` (Google Fonts) — weights 300, 400, 500, 700, 900 | Body text, nav links, buttons |
| Button shape | `border-radius: 0px` (square corners), `padding: 0px 30px` | `.main_btn` — square CTA with red bg, white text, red shadow on hover |
| Button shadow | `box-shadow: -10px 10px 40px rgba(244, 47, 44, 0.32)` | Red glow shadow on `.main_btn` |
| Section heading | Oswald, 48px, weight 300, `#222222`, centered, with decorative rotating planet shapes behind |
| Section spacing | `padding: 120px 0` (`.section_gap`) |
| Responsive heading | 36px on tablet, 36px on mobile |

## Sections (in order)

1. **Header/Navbar** — Transparent absolute-positioned navbar. Logo left, horizontal nav links right (Home, About, Menu, Book a table, Pages dropdown, Blog dropdown, Contact). Mobile hamburger toggle. Off-canvas side menu with social links.
2. **Hero/Banner** — Full-height split: left panel (`#f9f9ff` bg) with heading "delicious cupcakes", paragraph, CTA button ("check our menu"). Right panel with decorative rotating concentric circles/shapes (CSS animations). Hero image (cupcake) overlaid.
3. **Top Rated Dishes** — Centered section title "Our Top Rated Dishes". 3-column grid of dish cards: image thumbnail, dish name `<h4>`, description `<p>`, price `<h5>` in red.
4. **Menu Area** — Centered section title "Our favourite Menu". Two-column layout, each column a vertical list of menu items: dish name `<h4>` with price `<span>`, description `<p>` below.
5. **Gallery Area** — Centered section title "foodbar galleries". Image grid (7 images in asymmetric grid: 7/5, 4/4/4, 5/7 column widths). Each image has a hover overlay with icon. Lightbox on click.
6. **Testimonials** — Dark background (`#04091e`), owl-carousel slider. Each slide: 4-col image left, 8-col text right with name `<h4>`, role `<h5>`, quote `<p>`.
7. **Reservation/Book Table** — Centered section title "Make Reservation". Form with fields: name, email, phone, date/time, event select, submit button (`.submit_btn`, full-width, red bg).
8. **Footer** — Light background, 5 columns: Top Products (2-col), Quick Links (2-col), Features (2-col), Resources (2-col), Newsletter (4-col with email input + arrow submit button). Bottom row: copyright text + social icon links (Facebook, Twitter, Dribbble, Behance). Footer links to Component Dock.

## Gherkin Requirements

### Scenario: Header renders navigation links
```
Given the user visits the Feastbar page
Then a transparent navigation bar is visible at the top
And it contains links: Home, About, Menu, Book a table, Pages, Blog, Contact
```

### Scenario: Mobile hamburger opens off-canvas menu
```
Given the viewport width is less than 992px
When the user taps the hamburger toggle icon
Then an off-canvas side menu slides in from the left
And the menu displays the same nav links plus social icons
```

### Scenario: Hero section displays headline and CTA
```
Given the user is on the homepage
Then a full-height hero section is visible
And it shows the heading "delicious cupcakes"
And a "check our menu" CTA button is present
And the right side displays decorative animated shapes
```

### Scenario: Top Rated Dishes shows three dish cards
```
Given the user scrolls to the Top Rated Dishes section
Then three dish cards are displayed in a 3-column grid
And each card shows an image, dish name, description, and price
```

### Scenario: Menu section displays two-column menu list
```
Given the user scrolls to the Menu section
Then a two-column menu list is displayed
And each menu item shows a dish name with price and description
```

### Scenario: Gallery section displays image grid
```
Given the user scrolls to the Gallery section
Then 7 gallery images are shown in an asymmetric grid layout
And hovering over an image shows an overlay with an icon
```

### Scenario: Testimonials carousel slides
```
Given the user scrolls to the Testimonials section
Then a carousel with testimonial slides is visible
And each slide shows a person's image, name, role, and quote
And the section has a dark background
```

### Scenario: Reservation form accepts input
```
Given the user scrolls to the Reservation section
Then a form with fields for name, email, phone, date/time, and event select is displayed
And a "Make Reservation" submit button is visible
When the user fills in all required fields and submits
Then the form processes the submission
```

### Scenario: Footer displays columns and newsletter
```
Given the user scrolls to the footer
Then 5 footer columns are displayed: Top Products, Quick Links, Features, Resources, Newsletter
And the Newsletter column has an email input with a submit arrow
And social links (Facebook, Twitter, Dribbble, Behance) are shown
And the footer contains a "Made with ❤ by Component Dock" copyright line
```

### Scenario: Brand colors and fonts are applied
```
Given the user views any section of the page
Then headings use the Oswald font family
And body text uses the Roboto font family
And CTA buttons use the brand red color (#f42f2c)
And buttons have square corners (no border-radius)
```

## Verification Checklist

- [ ] Header renders with correct nav links and transparent background
- [ ] Off-canvas menu works on mobile viewport
- [ ] Hero section is full-height with split layout (text left, shapes right)
- [ ] "check our menu" CTA button styled with brand red
- [ ] Top Rated Dishes: 3 cards in grid with images, names, descriptions, prices
- [ ] Menu section: two-column layout with menu items and prices
- [ ] Gallery: 7 images in asymmetric grid with hover overlay
- [ ] Testimonials: dark background, carousel with person info
- [ ] Reservation form: all fields rendered, submit button styled
- [ ] Footer: 5 columns, newsletter input, social links, Component Dock link
- [ ] Brand red (#f42f2c) used consistently for CTAs and accents
- [ ] Oswald for headings, Roboto for body text
- [ ] Square button corners (border-radius: 0)
- [ ] Decorative rotating shapes in section titles (optional, nice-to-have)
- [ ] Responsive layout adapts correctly at tablet/mobile breakpoints
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
