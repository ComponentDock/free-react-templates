# Template: Gearhaus (Automotive)
<!-- prep-status: shipped-as=motorly -->
> **SHIPPED-UNDER** — the ColorLib `automotive` design this prep describes already
> ships as `apps/motorly` (<https://motorly.free.componentdock.com>).
> Do not scaffold `apps/gearhaus`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-motorly/spec.md`.

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

## Requirements

### Feature: Gearhaus template behaviour

Feature: Gearhaus — Automotive Service Website Template

Background:
- **GIVEN** the user navigates to the Gearhaus template
- **THEN** the page loads without errors
- **AND** all sections are rendered in order

#### Scenario: Header renders with utility bar and navigation

- **GIVEN** the page is loaded
- **THEN** the header shows a dark utility bar with phone number, hours, map link, and social icons
- **AND** the main nav bar shows the Gearhaus logo on the left
- **AND** the nav links include Home, Services, Shop, Pages, Blog
- **AND** search and cart icons appear on the right
- **AND** a mobile hamburger menu is present for narrow viewports

#### Scenario: Hero section displays with background image and CTA

- **GIVEN** the page is loaded
- **THEN** the hero section shows a full-width background image with dark overlay
- **AND** the heading displays "Welcome To" followed by the garage name
- **AND** a body paragraph is present below the heading
- **AND** a "Our Services" primary CTA button is visible
- **AND** the button uses the brand color #5F67FF

#### Scenario: Services section shows 4 service cards

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the Services section
- **THEN** the section title reads "What We Do?"
- **AND** 4 service cards are displayed in a 2-column grid
- **AND** each text card shows an icon, title, and description
- **AND** each image card shows an automotive service photo

#### Scenario: Choose Us section shows split layout

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the Choose Us section
- **THEN** an image occupies the left portion
- **AND** a text panel on the right shows a section title
- **AND** a bulleted list of features is displayed
- **AND** a "Our Services" CTA button is present

#### Scenario: Products section shows 4 product cards

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the Products section
- **THEN** the section title reads "Our Products"
- **AND** 4 product cards are displayed in a 4-column grid
- **AND** each card shows an image, product name, price, and "Add To Cart" link
- **AND** hover icons (heart, eye, exchange) appear on image hover

#### Scenario: Testimonial slider renders with quotes

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the Testimonial section
- **THEN** at least one testimonial quote is visible
- **AND** a quotation mark icon is displayed above the quote
- **AND** dot pagination indicators are present

#### Scenario: Counter section displays stats on dark background

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the Counter section
- **THEN** the section has a dark background
- **AND** stat counters are displayed with large numbers
- **AND** the numbers use the brand color #5F67FF
- **AND** each stat has an icon and label

#### Scenario: Latest News section shows 3 blog cards

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the Latest News section
- **THEN** 3 blog post cards are displayed in a 3-column grid
- **AND** each card shows an image, title, excerpt, and author/date

#### Scenario: Footer renders with contact info and links

- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the footer
- **THEN** the footer shows a dark background with image overlay
- **AND** a top row displays 3 info cards (Booking, Phone, Location) with icons
- **AND** columns show About, Quick Links, News, and Address sections
- **AND** the footer links to https://www.componentdock.com/
- **AND** a copyright line is displayed

#### Scenario: Responsive behavior

- **GIVEN** the page is loaded on a narrow viewport
- **THEN** the hamburger menu is visible
- **AND** the nav links are hidden
- **AND** the services grid stacks to single column
- **AND** the products grid stacks to 2 columns
- **AND** the footer columns stack vertically

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
