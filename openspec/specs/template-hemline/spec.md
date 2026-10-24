# Template: Hemline (Ecommerce / Fashion)
<!-- prep-status: shipped-as=threadcraft -->
> **SHIPPED-UNDER** — the ColorLib `fashi` design this prep describes already
> ships as `apps/threadcraft` (<https://threadcraft.free.componentdock.com>).
> Do not scaffold `apps/hemline`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-threadcraft/spec.md`.

## Purpose

Recreation of ColorLib **Fashi** — a fashion e-commerce single-page template.

- **Source:** https://colorlib.com/wp/template/fashi/
- **Preview:** https://preview.colorlib.com/theme/fashi/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `hemline` (apps/hemline, @free-react-templates/hemline)

## Replication reference

### Screenshot analysis

The template is a dark-themed fashion e-commerce landing page with a golden/amber accent color. The hero section is a full-width image carousel with overlaid product cards (bedside table, sweater) with price labels and CTA buttons. Below are two split category banners (Women's / Men's) showing mannequin images, a "Deal of the Week" featured product section with countdown timer, a blog grid, and an Instagram photo strip. The overall aesthetic is modern, high-contrast, editorial fashion.

### Live preview DOM structure (section order)

1. **Header** — top bar (email, phone, login, language select) + main nav (logo, categories dropdown, search, cart, wishlist) + department menu
2. **Hero carousel** — full-width Owl Carousel with single-hero-items (product image + name + price + CTA)
3. **Women's banner** — split section: text left ("Women's" + "Shop Now") + mannequin image right
4. **Deal of the Week** — featured product card with countdown timer (days/hours/minutes/seconds)
5. **Men's banner** — mirror of women's banner (image left + text right)
6. **Latest Blog** — 3-column blog post cards (image + date + title + excerpt)
7. **Instagram gallery** — row of 6 square photo thumbnails with hover overlay
8. **Footer** — multi-column: logo + about text, shop links, quick links, newsletter signup + social icons

### CSS / design tokens

| Token | Value |
|---|---|
| Brand / accent | `#e7ab3c` (golden amber) |
| Dark background | `#252525` / `#191919` |
| Light background | `#ffffff` / `#f3f3f3` / `#ebebeb` |
| Body text | `#636363` / `#4c4c4c` |
| Muted text | `#b2b2b2` |
| Primary button bg | `#e7ab3c`, text `#ffffff` |
| Button radius | `60px` (pill) for `.primary-btn`, `5px` for cards |
| Circle radius | `50%` |
| Font family | Muli (Google Fonts) — weights 300–900, sans-serif |
| Section spacing | `spad` class = consistent vertical padding (~60px) |

## Requirements

### Feature: Hemline template behaviour

#### Scenario: Header renders with navigation and top bar

- **GIVEN** the user loads the Hemline page
- **THEN** the top bar shows email, phone, login link, and language selector
- **AND** the main navigation shows the logo, categories dropdown, search bar, cart icon, and wishlist icon

#### Scenario: Hero carousel displays product slides

- **GIVEN** the user loads the page
- **THEN** a hero carousel renders with product slides
- **AND** each slide shows a product image, product name, price, and "Shop Now" CTA button
- **AND** the carousel auto-rotates between slides

#### Scenario: Women's banner section

- **GIVEN** the hero section is rendered
- **THEN** a "Women's" banner section appears below the hero
- **AND** it shows a heading "Women's" and a "Shop Now" link
- **AND** a mannequin/fashion image occupies the right side

#### Scenario: Deal of the week section

- **GIVEN** the women's banner is rendered
- **THEN** a "Deal of the Week" section appears
- **AND** it shows a featured product image and name
- **AND** a countdown timer displays days, hours, minutes, seconds

#### Scenario: Men's banner section

- **GIVEN** the deal of the week section is rendered
- **THEN** a "Men's" banner section appears
- **AND** it mirrors the women's banner layout (image left, text right)

#### Scenario: Latest blog section

- **GIVEN** the men's banner is rendered
- **THEN** a "From The Blog" section appears
- **AND** it shows 3 blog post cards in a row
- **AND** each card has an image, date, title, and excerpt

#### Scenario: Instagram photo gallery

- **GIVEN** the blog section is rendered
- **THEN** an Instagram photo strip appears
- **AND** it shows 6 square images in a row
- **AND** each image has a hover overlay effect

#### Scenario: Footer renders

- **GIVEN** the Instagram strip is rendered
- **THEN** the footer renders with logo and about text, shop links, quick links, and newsletter signup
- **AND** the newsletter section has an email input and submit button
- **AND** social media icons are displayed
- **AND** a "Made with Component Dock" link appears

#### Scenario: Responsive layout

- **GIVEN** the user loads the page on a mobile viewport
- **THEN** the navigation collapses to a hamburger menu
- **AND** sections stack vertically
- **AND** blog cards stack to single column
- **AND** Instagram images wrap to multiple rows

## Verification checklist

- [ ] Header top bar: email, phone, login, language
- [ ] Header nav: logo, categories, search, cart, wishlist
- [ ] Hero carousel: product slides with image, name, price, CTA
- [ ] Women's banner: heading + "Shop Now" + image
- [ ] Deal of the Week: featured product + countdown timer
- [ ] Men's banner: mirrored layout
- [ ] Blog section: 3 cards with image, date, title, excerpt
- [ ] Instagram gallery: 6 images with hover overlay
- [ ] Footer: logo, shop links, quick links, newsletter, social, Component Dock link
- [ ] Brand color `#e7ab3c` used throughout
- [ ] Muli font family applied
- [ ] Button pill shape (60px radius)
- [ ] Dark theme backgrounds (#252525, #191919)
- [ ] Responsive breakpoints (mobile hamburger, stacked columns)
- [ ] No ColorLib references in app code
- [ ] CNAME: hemline.free.componentdock.com
- [ ] Package name: @free-react-templates/hemline
