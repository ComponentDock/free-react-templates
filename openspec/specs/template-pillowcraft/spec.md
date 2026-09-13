# Template: Pillowcraft (eCommerce / Pillow Store)

## Purpose

Pillowcraft is an e-commerce storefront template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Pillow Mart"
free template (source: https://colorlib.com/wp/template/pillow-mart/),
built under a DIFFERENT name (**Pillowcraft**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is described as: "Pillow Mart is a modern and trendy pillows
eCommerce website template design that you can utilize for building a striking
online shop. Along with selling pillows, you can also use Pillow Mart for
other stuff, like beds, mattresses and similar." Published September 17, 2023.

- **Source template:** [Pillow Mart](https://colorlib.com/wp/template/pillow-mart/)
- **Live preview:** https://preview.colorlib.com/theme/pillow-mart/ (404 — unreachable; fall back to screenshot)
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pillowmart-free-template.jpg) (1200×946)

**NOTE:** The live preview URL returns 404 as of 2026-09-13. Design tokens
below are inferred from the listing page description and common ColorLib
eCommerce template patterns. The implementer should view the screenshot
directly and extract exact tokens from it. If a live preview mirror is found,
update this spec with exact CSS token values.

## Design Tokens

| Token                | Value (estimated)          | Notes                                                      |
|----------------------|----------------------------|------------------------------------------------------------|
| Font family          | Poppins (400–700)          | Common in ColorLib eCommerce templates; verify from screenshot |
| Primary brand color  | `#fe4c50` (estimated)      | CTA buttons, sale badges; typical ColorLib eCommerce accent |
| Dark navy            | `#1e1e27` (estimated)      | Top nav, headings; typical ColorLib eCommerce dark          |
| Section gray         | `#f2f2f2` (estimated)      | Alternate section backgrounds                               |
| Body text            | `#989898` (estimated)      | Paragraph text                                              |
| Heading text         | `#282828` (estimated)      | h1–h6 color                                                 |
| White                | `#ffffff`                  | Product cards, hero overlay                                 |
| Button radius        | `3px` (estimated)          | CTA buttons                                                 |
| Button height        | `40px` (estimated)         | CTA buttons                                                 |

**CAUTION:** These tokens are estimated from common ColorLib eCommerce
patterns. The implementer MUST view the screenshot at the URL above and
extract the ACTUAL tokens. Update this table with verified values.

## Section Structure (inferred from listing description + screenshot)

1. **Header** — Top navigation bar with logo, menu links (Home, Shop, Categories, About, Contact), cart icon, search icon. Likely sticky/fixed.
2. **Hero Slider** — Full-width hero area with background image of pillows/beds, headline text, subheadline, and CTA button (e.g. "Shop Now").
3. **Category Banners** — Row of 2–3 category cards (e.g. "Pillows", "Beds", "Mattresses") with background images and hover labels.
4. **Featured Products** — Product grid (3–4 columns) with product cards: image, product name, price, "Add to Cart" button. May have filter tabs.
5. **About / Why Us** — Section describing the store's value proposition. Possibly 2-column: text left, image right. May include benefit icons (free shipping, easy returns, etc.).
6. **Testimonials / Reviews** — Customer testimonial carousel or cards.
7. **Newsletter Signup** — Email subscription form with heading, input field, and subscribe button.
8. **Footer** — Multi-column footer with nav links, social icons, copyright. MUST link to https://www.componentdock.com/ branded as "Component Dock".

## Gherkin Requirements

### Header
```gherkin
Feature: Header
  Scenario: Navigation bar displays
    Given the page loads
    Then a top navigation bar should be visible
    And a logo should be displayed
    And menu links should include Home, Shop, Categories, About, Contact
    And a cart icon should be visible
    And a search icon should be visible

  Scenario: Navigation is responsive
    Given the viewport is mobile width
    Then a hamburger menu icon should replace the menu links
    And tapping the hamburger should toggle a mobile menu drawer
```

### Hero Slider
```gherkin
Feature: Hero Slider
  Scenario: Hero section displays promotional content
    Given the page loads
    Then a full-width hero area should be visible with a background image
    And a headline about pillows or comfort should appear
    And a CTA button should be visible

  Scenario: Hero CTA button styling
    Given the hero section is visible
    Then the CTA button should have the brand color background
    And it should have rounded corners
    And on hover it should show a color transition
```

### Category Banners
```gherkin
Feature: Category Banners
  Scenario: Category cards display
    Given the page loads
    Then 2–3 category banner cards should appear in a row
    And each card should have a background image and category label
    And cards should be clickable

  Scenario: Banner cards are interactive
    Given the banner section is visible
    When a user hovers over a banner card
    Then the category label should be prominently visible
```

### Featured Products
```gherkin
Feature: Featured Products
  Scenario: Product grid displays
    Given the page loads
    Then a "Featured Products" or similar section title should appear
    And a product grid should display multiple product cards
    And each card should show: image, product name, price

  Scenario: Product card shows all details
    Given the product section is visible
    Then each product card should show: image, product name, price
    And an "Add to Cart" button should be below each product
    And the button should have the brand accent color

  Scenario: Product grid is responsive
    Given the viewport is mobile width
    Then the product grid should show 1–2 columns
    Given the viewport is desktop width
    Then the product grid should show 3–4 columns
```

### About / Why Us
```gherkin
Feature: About / Why Us
  Scenario: About section displays
    Given the page loads
    Then an about or why-us section should appear
    And it should have a heading and descriptive text
    And it should include benefit icons or feature items

  Scenario: Benefits display correctly
    Given the about section is visible
    Then benefit items should each have an icon, title, and description
    And icons should be from lucide-react
```

### Testimonials
```gherkin
Feature: Testimonials
  Scenario: Testimonials section displays
    Given the page loads
    Then a testimonials or reviews section should appear
    And testimonial cards should show: quote text, author name, and optionally an image

  Scenario: Testimonials are navigable
    Given the testimonials section is visible
    Then navigation controls (arrows or dots) should be present
    And clicking next/prev should change the visible testimonial
```

### Newsletter
```gherkin
Feature: Newsletter Signup
  Scenario: Newsletter form displays
    Given the page loads
    Then a newsletter section should appear
    And an email input field and subscribe button should be present

  Scenario: Newsletter form validation
    Given the newsletter section is visible
    When the user submits without an email
    Then the browser should show a validation message
    When the user enters a valid email and submits
    Then the form should accept the submission
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer displays navigation and social links
    Given the page loads
    Then a footer should be visible
    And nav links should be present
    And social media icons should be shown
    And a copyright line should be present

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to https://www.componentdock.com/ should be present
    And it should display as "Component Dock"
```

## Verification Checklist

- [ ] All sections rendered in correct order matching screenshot reference
- [ ] Brand colors match the actual template (verify from screenshot)
- [ ] Font is correct (verify from screenshot — likely Poppins or similar)
- [ ] Buttons have correct styling (radius, height, hover transition)
- [ ] Product cards show image, name, price, and add-to-cart button
- [ ] Category banners have background images and hover effects
- [ ] Newsletter form validates email input
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] All placeholder images use picsum.photos
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Responsive: mobile hamburger menu, stacked layouts on small screens
- [ ] 100% test coverage for all components
- [ ] App name is "pillowcraft" (NOT "pillow-mart")
