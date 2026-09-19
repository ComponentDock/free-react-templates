# Template: BoutiqueHaus (Online Shop)

## Purpose

Recreation of the ColorLib **Shop** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/shop/
- **Preview:** https://preview.colorlib.com/theme/shop/
- **New name:** `boutiquehaus` (app folder `apps/boutiquehaus`, package `@free-react-templates/boutiquehaus`)
- **Surge target:** `boutiquehaus.free.componentdock.com`
- **Category:** E-Commerce / Online Shop

## Design tokens

| Token          | Value                     | Usage                          |
| -------------- | ------------------------- | ------------------------------ |
| Accent / pink  | `#f41068`                 | Buttons, selection, highlights |
| Dark bg        | `#222222`                 | Footer, dark sections          |
| Body text      | `#777777`                 | Paragraph text                 |
| Headings       | `#222222`                 | h1, h3 text                    |
| Font           | `"Poppins", sans-serif`   | All text                       |
| Button primary | bg `#f41068`, text `#fff` | Primary CTA                    |
| Button radius  | `0` (square)              | All buttons                    |
| Banner bg      | image + pink overlay      | Hero banner                    |
| Men section bg | image + dark overlay      | Men's products                 |
| Footer bg      | `#222222`                 | Dark footer                    |

## Section structure (page order)

1. **Nav** — Default header, logo left, nav links right, search icon.
2. **Banner** — Full-width hero with background image, pink overlay. Heading "Flat 75% Off", subheading text, CTA button.
3. **Category** — "Shop for Different Categories" heading, 3 category cards: "Product for Women", "Product for Couple", "Product For Men". Each with image overlay and "Shop Now" text.
4. **MenProduct** — Dark background image section. "New released Products for Men" heading (white). 4 product cards with prices ($150.00).
5. **WomenProduct** — "New released Products for Women" heading. 4 product cards with prices.
6. **HotDeal** — "Exclusive Hot Deal Ends in:" heading with countdown timer.
7. **RelatedProducts** — "Related Searched Products" heading, product grid.
8. **Brand** — Brand logos area (bottom padding).
9. **Footer** — Dark (#222222) background. Widgets: about, links, contact, newsletter. Copyright with Component Dock.

## Requirements

### Requirement: Navigation header

The application SHALL display a sticky navigation header with logo, nav links, and search icon.

#### Scenario: Nav displays logo and links

- **WHEN** the user visits the BoutiqueHaus page
- **THEN** the logo is visible
- **AND** navigation links (Home, Category, Men, Women, Latest) are displayed
- **AND** a search icon is present

### Requirement: Hero banner

The application SHALL display a full-width hero banner with a promotional offer.

#### Scenario: Hero banner displays promotion

- **WHEN** the user visits the BoutiqueHaus page
- **THEN** a full-width banner with background image is visible
- **AND** a "Flat 75% Off" heading is displayed
- **AND** a "Purchase Now" CTA button is present

### Requirement: Category section

The application SHALL display category cards for different product types.

#### Scenario: Category section shows cards

- **WHEN** the user scrolls to the category section
- **THEN** a "Shop for Different Categories" heading is displayed
- **AND** category cards are shown for Women, Couple, and Men
- **AND** each card has an image with overlay and text

### Requirement: Men's products

The application SHALL display men's products on a dark background.

#### Scenario: Men's products section renders

- **WHEN** the user scrolls to the men's products section
- **THEN** the section has a dark background image
- **AND** a "New released Products for Men" heading is shown
- **AND** 4 product cards with prices are displayed

### Requirement: Women's products

The application SHALL display women's products.

#### Scenario: Women's products section renders

- **WHEN** the user scrolls to the women's products section
- **THEN** a "New released Products for Women" heading is displayed
- **AND** 4 product cards with prices are displayed

### Requirement: Hot deal countdown

The application SHALL display a countdown timer for a hot deal.

#### Scenario: Hot deal section renders

- **WHEN** the user scrolls to the hot deal section
- **THEN** an "Exclusive Hot Deal Ends in:" heading is displayed
- **AND** a countdown timer with Days, Hours, Minutes, Seconds is present
- **AND** a "Shop Now" button is displayed

### Requirement: Related products

The application SHALL display related product items.

#### Scenario: Related products section renders

- **WHEN** the user scrolls to the related products section
- **THEN** a "Related Searched Products" heading is displayed
- **AND** product cards with thumbnail, name, and price are shown

### Requirement: Brand logos

The application SHALL display partner brand logos.

#### Scenario: Brand section renders

- **WHEN** the user scrolls to the brand section
- **THEN** brand logo images are displayed

### Requirement: Footer

The application SHALL display a dark footer with widget columns and Component Dock branding.

#### Scenario: Footer displays widgets

- **WHEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** widget columns with About Us, Newsletter, Instagram Feed, and Follow Us are displayed

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is rendered
- **THEN** the copyright includes a link to "Component Dock" (https://www.componentdock.com/)
- **AND** no ColorLib references appear in the app code

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Design tokens match: #f41068 accent, Poppins font, #222222 dark
- [ ] Square buttons (no border-radius)
- [ ] Hero banner with pink overlay and "Flat 75% Off"
- [ ] 3 category cards with overlays
- [ ] Men's products with dark bg image
- [ ] Women's products section
- [ ] Hot deal countdown timer
- [ ] Related products grid
- [ ] Brand logos area
- [ ] Footer with dark bg and Component Dock link
- [ ] No ColorLib references in app code
