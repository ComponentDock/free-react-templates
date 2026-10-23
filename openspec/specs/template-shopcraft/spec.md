# Template: Shopcraft (E-Commerce Store Template)

## Purpose

Shopcraft is a single-page e-commerce store template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Shop" website
template design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Shop" — e-commerce / shop template
  (source: https://colorlib.com/wp/template/shop/).
- **Preview URL:** `https://preview.colorlib.com/theme/shop/`
- **Screenshot:** `shop-free-ecommerce-website-template.jpg`
- **Font:** Poppins (Google Fonts)
- **Brand color:** #f41068 (hot pink/magenta)
- **Body text:** #777777, Headings: #222222
- **Light background:** #f9f9ff

## Sections (in order)

1. TopBar — phone, email, login (dark bg)
2. Navbar — logo, Home/Category/Men/Women/Latest/Pages
3. Hero Banner — "Flat 75% Off", "It's Happening this Season!", Purchase Now
4. Category Grid — "Shop for Different Categories", 4 cards with hover overlay
5. Men Products — dark overlay bg, 4 product cards with hover overlay icons
6. Women Products — light bg, 4 product cards
7. Countdown Timer — "Exclusive Hot Deal Ends in:", days/hours/minutes/seconds
8. Related Products — product cards with image + name + price
9. Brand Logos — 5 partner logos
10. Footer — About Us, Newsletter, Instagram Feed, Follow Us, Component Dock link

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/shop/ (HTTP 200, 34,757 B, sha256 `78e8a0c446b7…`, fetched 2026-10-23) and its design stylesheet(s) `main.css`, `inline-style-0`, `ion.rangeSlider.css`, `ion.rangeSlider.skinFlat.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f41068` | 22 declarations — `.genric-btn.primary`, `::selection` |
| Other chromatic values | `#fbd600` (5), `#4cd3e3` (5), `#38a4ff` (4) | secondary hues in the same sheet |
| Surface | `#ffffff` | 83 declarations — `.sample-text-area`, `.text-white` |
| Ink / dark surface | `#000000` | 13 declarations — `.navbar-nav a`, `.primary-btn a` |
| Typeface | `Poppins` (3 rules — `.h1, .h2, .h3, .h4, .h5, .h6`) | `font-family` declarations in the design sheet |
| Radii | `3px`, `50%`, `20px`, `8px` | `3px` (`.genric-btn.radius`); `50%` (`.default-switch input + label`); `20px` (`.genric-btn.circle`); `8px` (`.confirm-radio`) |
| Gradients | 4 declarations | `.countdown-area .countdown .countdown-item .countdown-timer, .footer-social a:hover i, .si`, `.single-search-product .desc .title` |

Palette in order of use: `#ffffff` ×83, `#222222` ×28, `#f9f9ff` ×25, `#f41068` ×22, `#777777` ×14, `#000000` ×13, `#f9fafc` ×9, `#cccccc` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/shop/css/main.css` — 153,644 B, sha256 `8085253d9695…`; `theme/shop/css/ion.rangeSlider.css` — 3,355 B, sha256 `e5ce02a6caed…`; `theme/shop/css/ion.rangeSlider.skinFlat.css` — 2,206 B, sha256 `ab3085180d4e…`.

## Requirements

### Requirement: TopBar displays contact information

The template SHALL display a top bar with phone number, email address, and a login link.

#### Scenario: TopBar renders contact info

- **WHEN** the user visits the page
- **THEN** a top bar is visible containing a phone number
- **AND** an email address is displayed
- **AND** a login link is present

### Requirement: Navbar provides navigation

The template SHALL display a navigation bar with logo and links to main sections.

#### Scenario: Navbar renders all links

- **WHEN** the user visits the page
- **THEN** a navigation bar with a logo is visible
- **AND** nav links include Home, Category, Men, Women, Latest
- **AND** a Pages dropdown menu is present

### Requirement: Hero banner displays promotional content

The template SHALL display a full-width hero banner with sale messaging and a CTA button.

#### Scenario: Hero renders promotional content

- **WHEN** the user visits the page
- **THEN** the hero banner displays "Flat 75% Off"
- **AND** the heading "It's Happening this Season!" is visible
- **AND** a "Purchase Now" button is present

### Requirement: Category grid shows product categories

The template SHALL display a grid of product category cards with hover overlay titles.

#### Scenario: Category grid renders categories

- **WHEN** the user scrolls to the category section
- **THEN** the heading "Shop for Different Categories" is visible
- **AND** category cards are displayed for Women, Couple, and Men
- **AND** each card shows its title

### Requirement: Men's products section with dark overlay

The template SHALL display men's products on a dark overlay background with hover action icons.

#### Scenario: Men's products render correctly

- **WHEN** the user scrolls to the men's products section
- **THEN** the heading "New released Products for Men" is visible
- **AND** product cards with images, names, and prices are displayed
- **AND** hover overlay shows action icons (heart, layers, cart, expand)

### Requirement: Women's products section

The template SHALL display women's products on a light background.

#### Scenario: Women's products render correctly

- **WHEN** the user scrolls to the women's products section
- **THEN** the heading "New released Products for Women" is visible
- **AND** product cards with images, names, and prices are displayed

### Requirement: Countdown timer for deals

The template SHALL display a countdown timer with days, hours, minutes, and seconds.

#### Scenario: Countdown timer renders

- **WHEN** the user scrolls to the countdown section
- **THEN** "Exclusive Hot Deal Ends in:" heading is visible
- **AND** countdown units (Days, Hours, Minutes, Seconds) are displayed
- **AND** a "Shop Now" button is present

### Requirement: Related products grid

The template SHALL display a grid of related product cards with images, names, and prices.

#### Scenario: Related products render

- **WHEN** the user scrolls to the related products section
- **THEN** "Related Searched Products" heading is visible
- **AND** product cards with images, names, and prices are displayed

### Requirement: Brand logos row

The template SHALL display a row of brand/partner logos.

#### Scenario: Brand logos render

- **WHEN** the user scrolls to the brand section
- **THEN** brand logo images are displayed in a row

### Requirement: Footer with Component Dock link

The template SHALL display a footer with About Us, Newsletter, Instagram Feed, Follow Us sections, and a link to Component Dock.

#### Scenario: Footer renders all sections

- **WHEN** the user scrolls to the footer
- **THEN** an About Us column with description is visible
- **AND** a Newsletter signup form is present
- **AND** social media links are present
- **AND** a "More templates at Component Dock" link to https://www.componentdock.com/ is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/shopcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/shopcraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar displays contact information — a top bar is visible containing a phone number
- [ ] Navbar provides navigation — a navigation bar with a logo is visible
- [ ] Hero banner displays promotional content — the hero banner displays "Flat 75% Off"
- [x] Category grid shows product categories — the heading "Shop for Different Categories" is visible
- [ ] Men's products section with dark overlay — the heading "New released Products for Men" is visible
- [ ] Women's products section — the heading "New released Products for Women" is visible
- [ ] Countdown timer for deals — "Exclusive Hot Deal Ends in:" heading is visible
- [x] Related products grid — "Related Searched Products" heading is visible
- [ ] Brand logos row — brand logo images are displayed in a row
