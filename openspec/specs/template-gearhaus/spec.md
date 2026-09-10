# Template: Gearhaus (Automotive)

## Purpose

Recreation of the ColorLib "AutoMotive" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site.

- **Source**: https://colorlib.com/wp/template/automotive/
- **Preview**: https://preview.colorlib.com/theme/automotive/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/automotive-free-template.jpg
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript (strict)
- **Category**: Automotive / Garage Services

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

| Token | Value | Notes |
| --- | --- | --- |
| Brand color | `#5F67FF` | Vibrant indigo-blue; used on CTA buttons, active nav underline, counter numbers |
| Text dark | `#353535` | Section headings (h2 40px 700) |
| Text medium | `#727171` | Body / descriptive paragraphs |
| Text light | `#b4b4b4` | Subtitle/secondary text |
| Background light | `#f7f7f7` | Off-white section backgrounds |
| Counter bg | `#25282C` | Dark charcoal for counter/stats section |
| Footer bg | dark with image overlay | `data-setbg="img/footer-bg.jpg"` |
| Top bar bg | `#353535` | Dark utility bar (header top) |
| Font family | `"Public Sans", sans-serif` | Google Fonts; weights 400, 500, 600, 700, 800, 900 |
| Button shape | No border-radius (square), padding `14px 25px 12px` | `primary-btn` class: `#5F67FF` bg, white text, 15px/700 |
| Section title | 40px, `#353535`, 700 weight, centered, 45px bottom margin |
| Product hover | Heart / eye / exchange icons on image hover |
| Testimonial dots | 10px circles, `#b5b5b5` default, `#353535` active |

## Section structure (from preview DOM)

1. **Header** — Two parts: dark utility bar (phone, hours, map link, social icons) + main nav bar (logo left, nav links center, search/cart right)
2. **Hero** — Full-width background image with dark overlay. "Welcome To" subtitle + "Auto-Motive Garage" headline + body text + "Our Services" CTA button
3. **Services** ("What We Do?") — Centered section title. 4 service cards in a 2x2 grid alternating text cards (icon + title + description) and image cards
4. **Choose Us** — Split layout: image on left (48% width, absolute positioned, offset upward), text panel on right with shadow card containing section title, bullet list with checkmarks, and "Our Services" CTA
5. **Products** ("Our Products") — Centered section title. 4 product cards in a 4-column grid. Each: image + hover overlay (heart/eye/exchange icons) + product name + price + "Add To Cart" link
6. **Testimonial** — Carousel/slider with quotation mark icon, quote text, and dot pagination. White background
7. **Counter** — Dark background section with stat counters. Each: icon + large blue number + label. Overlapping hero area (negative margin)
8. **Latest News** ("Latest News") — 3 blog cards in a 3-column grid. Each: image with author/date overlay + title + excerpt
9. **Footer** — Dark background with image overlay. Top row: 3 info cards (Booking/Phone/Location with icons). Middle: 4 columns (About + logo + CTA, Quick Links, News items, Address + social icons). Bottom: copyright + social links

## Gherkin requirements

```gherkin
Feature: Gearhaus — Automotive Service Website Template

  Background:
    Given the user navigates to the Gearhaus template
    Then the page loads without errors
    And all sections are rendered in order

  Scenario: Header renders with utility bar and navigation
    Given the page is loaded
    Then the header shows a dark utility bar with phone number, hours, map link, and social icons
    And the main nav bar shows the Gearhaus logo on the left
    And the nav links include Home, Services, Shop, Pages, Blog
    And search and cart icons appear on the right
    And a mobile hamburger menu is present for narrow viewports

  Scenario: Hero section displays with background image and CTA
    Given the page is loaded
    Then the hero section shows a full-width background image with dark overlay
    And the heading displays "Welcome To" followed by the garage name
    And a body paragraph is present below the heading
    And a "Our Services" primary CTA button is visible
    And the button uses the brand color #5F67FF

  Scenario: Services section shows 4 service cards
    Given the page is loaded
    When the user scrolls to the Services section
    Then the section title reads "What We Do?"
    And 4 service cards are displayed in a 2-column grid
    And each text card shows an icon, title, and description
    And each image card shows an automotive service photo

  Scenario: Choose Us section shows split layout
    Given the page is loaded
    When the user scrolls to the Choose Us section
    Then an image occupies the left portion
    And a text panel on the right shows a section title
    And a bulleted list of features is displayed
    And a "Our Services" CTA button is present

  Scenario: Products section shows 4 product cards
    Given the page is loaded
    When the user scrolls to the Products section
    Then the section title reads "Our Products"
    And 4 product cards are displayed in a 4-column grid
    And each card shows an image, product name, price, and "Add To Cart" link
    And hover icons (heart, eye, exchange) appear on image hover

  Scenario: Testimonial slider renders with quotes
    Given the page is loaded
    When the user scrolls to the Testimonial section
    Then at least one testimonial quote is visible
    And a quotation mark icon is displayed above the quote
    And dot pagination indicators are present

  Scenario: Counter section displays stats on dark background
    Given the page is loaded
    When the user scrolls to the Counter section
    Then the section has a dark background
    And stat counters are displayed with large numbers
    And the numbers use the brand color #5F67FF
    And each stat has an icon and label

  Scenario: Latest News section shows 3 blog cards
    Given the page is loaded
    When the user scrolls to the Latest News section
    Then 3 blog post cards are displayed in a 3-column grid
    And each card shows an image, title, excerpt, and author/date

  Scenario: Footer renders with contact info and links
    Given the page is loaded
    When the user scrolls to the footer
    Then the footer shows a dark background with image overlay
    And a top row displays 3 info cards (Booking, Phone, Location) with icons
    And columns show About, Quick Links, News, and Address sections
    And the footer links to https://www.componentdock.com/
    And a copyright line is displayed

  Scenario: Responsive behavior
    Given the page is loaded on a narrow viewport
    Then the hamburger menu is visible
    And the nav links are hidden
    And the services grid stacks to single column
    And the products grid stacks to 2 columns
    And the footer columns stack vertically
```

## Verification checklist

- [ ] All 9 sections render in correct order
- [ ] Brand color #5F67FF used for CTA buttons, active nav, counter numbers
- [ ] Font: Public Sans loaded from Google Fonts
- [ ] CTA buttons are square (no border-radius), white text on #5F67FF
- [ ] Hero has background image with dark overlay
- [ ] Services: 4 cards alternating text/image in 2-col grid
- [ ] Choose Us: split layout, image left 48%, text card right with shadow
- [ ] Products: 4 cards in 4-col grid with hover overlay icons
- [ ] Testimonial: slider/carousel with quotes and dot pagination
- [ ] Counter: dark background, blue numbers, white labels
- [ ] Latest News: 3 blog cards in 3-col grid
- [ ] Footer: dark bg with image overlay, top info row, 4-col middle, copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: hamburger nav, stacked grids on mobile
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
