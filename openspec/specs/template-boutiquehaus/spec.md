# Template: BoutiqueHaus (Online Shop)

## Purpose

Recreation of the ColorLib **Shop** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/shop/
- **Preview:** https://preview.colorlib.com/theme/shop/
- **New name:** `boutiquehaus` (app folder `apps/boutiquehaus`, package `@free-react-templates/boutiquehaus`)
- **Surge target:** `boutiquehaus.free.componentdock.com`
- **Category:** E-Commerce / Online Shop

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Accent / pink | `#f41068` | Buttons, selection, highlights |
| Dark bg | `#222222` | Footer, dark sections |
| Body text | `#777777` | Paragraph text |
| Headings | `#222222` | h1, h3 text |
| Font | `"Poppins", sans-serif` | All text |
| Button primary | bg `#f41068`, text `#fff` | Primary CTA |
| Button radius | `0` (square) | All buttons |
| Banner bg | image + pink overlay | Hero banner |
| Men section bg | image + dark overlay | Men's products |
| Footer bg | `#222222` | Dark footer |

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

## Gherkin scenarios

### Nav

```gherkin
Feature: BoutiqueHaus Navigation

  Scenario: Nav displays logo and links
    Given the user is on the BoutiqueHaus page
    Then the logo is visible
    And navigation links are displayed
    And a search icon is present
```

### Banner

```gherkin
Feature: BoutiqueHaus Banner

  Scenario: Hero banner displays promotion
    Given the user is on the BoutiqueHaus page
    Then a full-width banner with background image is visible
    And a "Flat 75% Off" heading is displayed
    And a CTA button is present
```

### Category

```gherkin
Feature: BoutiqueHaus Categories

  Scenario: Category section shows 3 items
    Given the user scrolls to the category section
    Then a "Shop for Different Categories" heading is displayed
    And 3 category cards are shown: Women, Couple, Men
    And each card has an image with overlay and text
```

### MenProduct

```gherkin
Feature: BoutiqueHaus Men Products

  Scenario: Men's products section renders
    Given the user scrolls to the men's products section
    Then the section has a dark background image
    And a "New released Products for Men" heading is shown in white
    And 4 product cards with prices are displayed
```

### WomenProduct

```gherkin
Feature: BoutiqueHaus Women Products

  Scenario: Women's products section renders
    Given the user scrolls to the women's products section
    Then a "New released Products for Women" heading is displayed
    And 4 product cards with prices are displayed
```

### HotDeal

```gherkin
Feature: BoutiqueHaus Hot Deal

  Scenario: Hot deal section renders
    Given the user scrolls to the hot deal section
    Then an "Exclusive Hot Deal Ends in:" heading is displayed
    And a countdown timer is present
```

### RelatedProducts

```gherkin
Feature: BoutiqueHaus Related Products

  Scenario: Related products section renders
    Given the user scrolls to the related products section
    Then a "Related Searched Products" heading is displayed
    And product cards are shown
```

### Brand

```gherkin
Feature: BoutiqueHaus Brands

  Scenario: Brand section renders
    Given the user scrolls to the brand section
    Then brand logos are displayed
```

### Footer

```gherkin
Feature: BoutiqueHaus Footer

  Scenario: Footer displays widgets
    Given the user scrolls to the footer
    Then the footer has a dark (#222222) background
    And widget columns with links and contact info are displayed
    And a copyright bar is at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    Then the copyright includes a link to "Component Dock" (https://www.componentdock.com/)
    And no ColorLib references appear in the app code
```

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
