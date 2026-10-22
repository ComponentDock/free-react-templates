# Template: Modehaus (E-Commerce / Fashion)
<!-- prep-status: shipped-as=threadline -->
> **SHIPPED-UNDER** — the ColorLib `malefashion` design this prep describes already
> ships as `apps/threadline` (<https://threadline.free.componentdock.com>).
> Do not scaffold `apps/modehaus`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-threadline/spec.md`.

## Purpose

Recreation of ColorLib "Malefashion" template
(https://colorlib.com/wp/template/malefashion/).
Preview: https://preview.colorlib.com/theme/malefashion/
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
New name: `modehaus` (German for "fashion house")

## Design tokens (from live preview CSS + screenshot)

- **Font family:** `"Nunito Sans", sans-serif` (loaded via Google Fonts)
- **Brand accent:** `#e53637` (red — section title accents, deal countdown highlights)
- **Primary button:** `background: #000000; color: #ffffff; border-radius: 60px; padding: 14px 30px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 4px;`
- **Body text:** `#111111` (primary headings), `#3d3d3d` (body copy)
- **Muted text:** `#999999` (inactive elements), `#b7b7b7` (section subtitle text)
- **Section backgrounds:** white (default), `#f3f2ee` (warm grey — categories section)
- **Header top bar:** dark/black background, white text
- **Header main:** white background, centered logo, right-aligned nav
- **Product card:** white background, image with hover overlay (color swatches), price
- **Product filter tabs:** horizontal filter bar (Best Sellers / New Arrivals / Hot Sales), active state black text, inactive `#b7b7b7`
- **Section title:** centered, red uppercase subtitle (`<span>`), large bold h2 (`#111111`)
- **Instagram grid:** 5-column equal-width image row
- **Blog cards:** image thumbnail, date (with calendar icon), title, "Read More" link
- **Footer:** dark background (`#111111`), 4-column layout: About/Logo, Quick Links, Contact, Newsletter

## Requirements

### Header

#### Scenario: Top bar with promo text and utility links

- **GIVEN** the user loads the page
- **THEN** a top bar shows "Free shipping, 30-day return or refund guarantee."
- **AND** utility links include "SIGN IN", "FAQS", and a currency selector ("USD")

#### Scenario: Main header with logo, nav, and icons

- **GIVEN** the user loads the page
- **THEN** the logo "Modehaus" is displayed on the left
- **AND** navigation links include "Home", "Shop", "Pages", "Blog", "Contacts"
- **AND** search, wishlist, and cart icons are on the right
- **AND** the cart shows "$0.00"

### Hero

#### Scenario: Hero carousel with collection banner

- **GIVEN** the user views the hero section
- **THEN** a full-width carousel slides through fashion images
- **AND** each slide shows a headline (e.g. "Fall – Winter Collections 2030")
- **AND** a subtitle text describing the brand
- **AND** a "Shop now →" button (black, pill-shaped)
- **AND** social media icons (Facebook, Twitter, Pinterest, Instagram) below
- **AND** left/right navigation arrows are visible

#### Scenario: Hero has multiple slides

- **GIVEN** the user views the hero section
- **THEN** at least 2 slides are available
- **AND** navigation arrows cycle between slides

### Banner

#### Scenario: Three-column product banners

- **GIVEN** the user scrolls to the banner section
- **THEN** 3 banner cards are displayed in a row
- **AND** each banner has a product image and text overlay
- **AND** each banner has a "Shop now" link
- **AND** the middle banner is styled differently (offset or larger)

### Product

#### Scenario: Product filter tabs

- **GIVEN** the user views the product section
- **THEN** filter tabs show "Best Sellers", "New Arrivals", "Hot Sales"
- **AND** "Best Sellers" is active by default

#### Scenario: Product grid display

- **GIVEN** the user views the product section
- **THEN** 8 product cards are displayed in a 4-column grid
- **AND** each card shows an image, product name, and price
- **AND** hovering reveals color swatch options
- **AND** a "New" label badge appears on new-arrival products

#### Scenario: Product filter interaction

- **WHEN** the user clicks "New Arrivals"
- **THEN** only new-arrival products are shown
- **WHEN** the user clicks "Hot Sales"
- **THEN** only hot-sale products are shown
- **WHEN** the user clicks "Best Sellers"
- **THEN** all products are shown again

### Categories

#### Scenario: Categories / deal section

- **GIVEN** the user views the categories section
- **THEN** a section with warm-grey background (`#f3f2ee`) is shown
- **AND** a large heading "Clothing Collections 2030" is displayed
- **AND** a "Shop now" link is present
- **AND** a countdown timer (days/hours/minutes/seconds) is displayed
- **AND** a product image is shown alongside the text

### Instagram

#### Scenario: Instagram photo grid

- **GIVEN** the user views the instagram section
- **THEN** 5 equal-width images are displayed in a row
- **AND** an Instagram icon overlays each image on hover

### Blog

#### Scenario: Latest blog posts

- **GIVEN** the user views the blog section
- **THEN** a section title reads "Latest News" (red subtitle) / "Fashion New Trends" (h2)
- **AND** 3 blog cards are displayed in a 3-column grid
- **AND** each card shows a thumbnail image, publication date, title, and "Read More" link

### Footer

#### Scenario: Footer layout

- **GIVEN** the user views the footer
- **THEN** 4 columns are displayed:
    | Column 1        | Column 2                         | Column 3      | Column 4         |
    | About + logo    | Quick Links (Clothing, Shoes…)  | Contact info  | Newsletter signup |
- **AND** a "Made with Component Dock" link is present
- **AND** the background is dark (`#111111`)

#### Scenario: Newsletter signup in footer

- **GIVEN** the user views the footer newsletter column
- **THEN** a text input for email is shown
- **AND** a "Subscribe" button is present

## Verification checklist

- [ ] All 8 sections present in correct order: Header → Hero → Banner → Product → Categories → Instagram → Blog → Footer
- [ ] Font loaded: Nunito Sans from Google Fonts
- [ ] Brand accent `#e53637` used on section title subtitles and countdown highlights
- [ ] Primary button: black bg, white text, 60px border-radius, uppercase, letter-spacing 4px
- [ ] Hero carousel slides between at least 2 slides with arrows
- [ ] Product filter tabs toggle correctly (Best Sellers / New Arrivals / Hot Sales)
- [ ] 8 product cards with hover color swatches and "New" badges
- [ ] Categories section has `#f3f2ee` warm-grey background and countdown timer
- [ ] Instagram grid shows 5 equal-width images
- [ ] Blog section shows 3 cards with date, title, and "Read More"
- [ ] Footer has 4 columns, dark background, newsletter input, Component Dock link
- [ ] No references to ColorLib in app code — provenance only in spec/TEMPLATES.md
- [ ] `apps/modehaus` package named `@free-react-templates/modehaus`
- [ ] `public/CNAME` contains `modehaus.free.componentdock.com`
- [ ] Placeholder images use `https://picsum.photos/seed/modehaus-<n>/<w>/<h>`
- [ ] 100% test coverage on changed files
