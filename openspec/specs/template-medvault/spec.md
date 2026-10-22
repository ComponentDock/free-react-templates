# Template: MedVault (Pharmacy / Health Store)

## Purpose

Recreation of ColorLib "Pharma" as a React 19 + Vite + Tailwind 4 + TypeScript template. The original is a clean, modern pharmacy/health store e-commerce landing page with a cyan/teal accent, product grids, carousel, testimonials, and promotional banners.

- **Source:** [ColorLib Pharma](https://colorlib.com/wp/template/pharma/)
- **Preview URL:** https://preview.colorlib.com/theme/pharma/
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `medvault` (apps/medvault, @free-react-templates/medvault)
- **Deploy target:** https://medvault.free.componentdock.com

## Design Tokens

Extracted from live preview CSS (style.css + bootstrap.min.css) and HTML:

| Token | Value | Source |
|-------|-------|--------|
| Brand / accent color | `#51eaea` (cyan/teal) | `.btn-primary`, `.bg-primary`, `.site-section-heading:before`, footer link hover |
| Primary button text | `#212529` (dark) on `#51eaea` bg | `.btn-primary` |
| Button hover | transparent bg, `#51eaea` text/border | `.btn.btn-primary:hover` |
| Green banner | `#74d12b` | `.banner-wrap` default background |
| Warning / yellow | `#ffc107` | `.bg-warning` |
| Sale tag orange | `#e86b00` | `.tag` background |
| Secondary bg | `#6c757d` | `.bg-secondary` |
| Dark text | `#25262a`, `#000` | body, headings, `.site-section-heading` |
| Footer muted text | `#5c626e` | `.site-footer ul li a` |
| Body background | `#ffffff` (white) | Bootstrap default |
| Light section bg | `#f4f5f9` (or Bootstrap `#f8f9fa`) | `.bg-light`, product wrap bg |
| Font family (body) | `Rubik` (Google Fonts, weights 400, 700) | Cloudflare font-face in preview |
| Font family (testimonials) | `Crimson Text` (serif) | `.testimony blockquote p` |
| Button border-radius | `0.25rem` (4 px, slightly rounded) | `.btn` |
| Button text | uppercase, 2px border | `.btn` |
| Button padding | `20px 30px` (hero), `px-5 py-3` / `px-4 py-3` (other) | `.site-blocks-cover .btn`, inline classes |
| Section padding | `5em 0` (desktop), `2.5em 0` (mobile) | `.site-section` |
| Hero height | `100vh` (min 700px) | `.site-blocks-cover` |
| Hero heading | 50px (70px desktop), weight 900, white | `.site-blocks-cover h1` |
| Hero subtitle | 14px, white | `.site-blocks-cover .sub-title` |
| Banner card radius | `4px` | `.banner-wrap` |
| Banner overlap | `margin-top: -150px` | `.section-overlap` |
| Section heading underline | 30px cyan bar before heading | `.site-section-heading:before` |
| Product tag | absolute, orange bg `#e86b00`, white text | `.tag` |
| Product price | `#000` | `.item .price` |
| Footer padding | `6em 0` | `.site-footer` |
| Footer heading | 1.2rem, `#000` | `.site-footer .footer-heading` |
| Testimonial quote | Crimson Text serif, blockquote style | `.testimony blockquote p` |
| Promo banner hover | translateY(-10px), shadow | `.banner-1:hover` |

## Visual Design Notes (from screenshot reference)

The Pharma preview shows:
- Clean, white-dominated design with a medical/pharmacy aesthetic
- Cyan/teal (`#51eaea`) as the primary accent on buttons, links, and decorative elements
- Full-height hero with a pharmacy background image, centered white text, and a large 4 px-rounded "Shop Now" button
- Three overlapping banner cards below the hero (green, white, yellow) with promotional content
- Product grid with clean white cards, product images, names, and prices
- Light gray carousel section for "New Products"
- Testimonials with circular avatars and serif blockquote styling
- Two large promotional banner cards with background images and hover lift effect
- Clean footer with About Us, Quick Links, and Contact Info

## Section Structure (in order)

1. **Navbar** — White/light sticky navbar, logo "MedVault", nav links: Home, Store, Dropdown (categories), About, Contact; search icon, shopping bag icon with count badge
2. **Hero Cover** — Full-height background image, centered content: subtitle "Effective Medicine, New Medicine Everyday", heading "Welcome To MedVault", pill-shaped "Shop Now" CTA button
3. **Promo Banners** — 3-column overlapping cards (margin-top: -150px): green "Free Shipping", white "Season Sale 50% Off", yellow "Buy A Gift Card"; each with italic heading, description, and strong sub-text
4. **Popular Products** — Section heading "Popular Products" with cyan underline, 3-column grid of 6 product cards (product image, name, price, optional "Sale" tag), "View All Products" CTA
5. **New Products** — Light gray background, section heading "New Products", carousel of 4 product cards with images, names, prices
6. **Testimonials** — Section heading "Testimonials", carousel of testimonial cards: circular avatar, serif blockquote quote, author name with em-dash
7. **Promo Banners 2** — Dark background with background image, 2 large banner cards: "MedVault Products" and "Rated by Experts"; each with background image, heading, description; hover lifts card up
8. **Footer** — 3-column: About Us text, Quick Links (Supplements, Vitamins, Diet & Nutrition, Tea & Coffee), Contact Info (address, phone, email); bottom copyright bar with Component Dock link

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Renders brand and navigation links

- **GIVEN** the page loads
- **THEN** a light/white sticky navbar is visible with brand "MedVault"
- **AND** navigation links "Home", "Store", "About", "Contact" are displayed
- **AND** a search icon and shopping bag icon with count badge are shown

#### Scenario: Dropdown menu

- **GIVEN** the user hovers over or clicks the dropdown trigger
- **THEN** a dropdown menu with categories appears: Supplements, Vitamins, Diet & Nutrition, Tea & Coffee

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is 992px wide or less
- **WHEN** the user clicks the hamburger menu button
- **THEN** the navigation menu expands/collapses

### Hero Cover

Feature: Hero Cover

#### Scenario: Displays hero content

- **GIVEN** the hero cover is visible
- **THEN** a background image is displayed at full viewport height
- **AND** a subtitle "Effective Medicine, New Medicine Everyday" is shown
- **AND** a heading "Welcome To MedVault" is displayed
- **AND** a 4 px-rounded (`.btn{border-radius:0.25rem}`) "Shop Now" CTA button is present

### Promo Banners

Feature: Promo Banners Row

#### Scenario: Displays three promotional banners

- **GIVEN** the promo banners section is visible
- **THEN** 3 banner cards are displayed in a row overlapping the hero by -150px
- **AND** the first banner is green (#74d12b) with "Free Shipping"
- **AND** the second banner is white with "Season Sale 50% Off"
- **AND** the third banner is yellow/warning with "Buy A Gift Card"
- **AND** each banner has an italic heading and descriptive text

#### Scenario: Banner overlap layout

- **GIVEN** the banners are displayed on desktop
- **THEN** the banners overlap the hero section above by 150px margin-top

### Popular Products

Feature: Popular Products

#### Scenario: Displays product grid

- **GIVEN** the popular products section is visible
- **THEN** a section heading "Popular Products" with cyan underline is shown
- **AND** 6 product cards are displayed in a 3-column grid
- **AND** each card shows a product image, name, and price
- **AND** some cards have an orange "Sale" tag with strikethrough original price
- **AND** a "View All Products" 4 px-rounded button is at the bottom

#### Scenario: Sale tag styling

- **GIVEN** a product is on sale
- **THEN** an orange (#e86b00) tag with "Sale" text is displayed
- **AND** the original price is shown with strikethrough
- **AND** the sale price is displayed after a dash

### New Products

Feature: New Products

#### Scenario: Displays product carousel

- **GIVEN** the new products section is visible
- **THEN** a section heading "New Products" is shown
- **AND** the section has a light gray background
- **AND** a carousel displays product cards with images, names, and prices

### Testimonials

Feature: Testimonials

#### Scenario: Displays testimonial carousel

- **GIVEN** the testimonials section is visible
- **THEN** a section heading "Testimonials" is shown
- **AND** a carousel displays testimonial cards
- **AND** each card has a circular avatar image
- **AND** a blockquote with serif (Crimson Text) font contains the testimonial text
- **AND** the author name is shown with an em-dash prefix

### Promo Banners 2

Feature: Promo Banners 2

#### Scenario: Displays two promotional banners

- **GIVEN** the second promo banners section is visible
- **THEN** a dark background section with a background image is displayed
- **AND** 2 large banner cards are shown side by side
- **AND** each card has a background image, heading, and description
- **AND** the first card is titled "MedVault Products"
- **AND** the second card is titled "Rated by Experts"

#### Scenario: Hover lift effect

- **GIVEN** a promo banner is hovered
- **THEN** the card lifts up (translateY(-10px)) and gains a shadow

### Footer

Feature: Footer

#### Scenario: Renders footer with about, links, and contact

- **GIVEN** the footer is visible
- **THEN** a 3-column footer is displayed
- **AND** the first column has "About Us" heading with description text
- **AND** the second column has "Quick Links" with category links
- **AND** the third column has "Contact Info" with address, phone, and email
- **AND** all footer links are muted (#5c626e) with cyan (#51eaea) hover color

#### Scenario: Copyright bar with Component Dock link

- **GIVEN** the footer bottom bar is visible
- **THEN** a copyright notice is shown
- **AND** a link to "https://www.componentdock.com/" is present (branded "Component Dock")

## Verification Checklist

- [ ] Navbar renders with correct brand name and all nav links
- [ ] Hero cover displays at full viewport height with background image
- [ ] Hero has subtitle, heading, and a 4 px-rounded CTA button
- [ ] Three promo banners overlap the hero section
- [ ] Banner colors match: green, white, yellow
- [ ] Popular Products grid shows 6 product cards with images, names, prices
- [ ] Sale tags are orange with strikethrough original prices
- [ ] "View All Products" button is present
- [ ] New Products carousel renders on light gray background
- [ ] Testimonials carousel has circular avatars and serif quotes
- [ ] Second promo banners section has dark bg with 2 cards
- [ ] Promo banner hover lifts card with shadow
- [ ] Footer has 3-column layout with About, Links, Contact
- [ ] Footer bottom links to Component Dock
- [ ] Brand color #51eaea used consistently across buttons, links, accents
- [ ] Rubik font loaded from Google Fonts for body
- [ ] Crimson Text loaded for testimonial quotes
- [ ] Buttons are 4 px rounded (border-radius: 0.25rem) with uppercase text
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in any app code (only in spec and TEMPLATES.md)
- [ ] public/CNAME contains medvault.free.componentdock.com
- [ ] homepage in package.json is https://medvault.free.componentdock.com
- [ ] 100% test coverage enforced

## Shape re-verification (live sheet, 2026-10-22)

- `pharma`: `.btn{border-radius:0.25rem}` — 4 px, not circular.
