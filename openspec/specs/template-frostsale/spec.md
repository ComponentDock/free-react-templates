## Purpose

Frostsale is a winter sale notification modal template recreating ColorLib Modal 03. It provides a centered modal dialog with a split-screen layout: left panel has teal background with sale text and discount percentage, right panel has a background image with a "Shop now" CTA button. The design uses Pacifico for the "Sale" heading, Lato for body text, and Bootstrap-inspired teal (#39bdc8) as the brand color.

**Source:** [ColorLib Modal 03](https://colorlib.com/wp/template/modal-03/)
**Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-03/
**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens

- **Brand color (teal):** #39bdc8 — used on left panel background, button background, form focus borders
- **Text colors:** #000 (black) on teal background, #fff (white) for discount number
- **Fonts:** "Pacifico" (cursive) for the "Sale" heading, "Lato" (sans-serif) for body text and headings
- **Button:** bg #39bdc8, border #39bdc8, white text; hover: transparent bg with #39bdc8 text; border-radius 4px; uppercase, letter-spacing 1px, font-size 14px
- **Close button:** 40x40px, rgba(0,0,0,0.1) background, positioned top-right
- **Modal:** max-width 700px, border-radius 0 (sharp corners), box-shadow 0px 10px 34px -15px rgba(0,0,0,0.24)
- **Decorative snowflake icons:** flaticon snowflake, rgba(255,255,255,0.3) color, positioned absolute
- **Discount number:** font-size 130px, font-weight 700, white, with % symbol (sup) and "off" (sub) text
- **Section backgrounds:** left panel #39bdc8 (teal), right panel has background image (cover, center)

## Gherkin requirements

### Scenario: Landing page displays centered modal trigger
- Given the user visits the landing page
- When the page loads
- Then a heading "Frostsale" is displayed
- And a "Launch Modal" button is visible

### Scenario: Modal opens on button click
- Given the user is on the landing page
- When the user clicks the "Launch Modal" button
- Then a centered modal dialog appears
- And the modal has a close button in the top-right corner

### Scenario: Modal left panel shows sale content
- Given the modal is open
- Then the left panel has a teal (#39bdc8) background
- And a decorative snowflake icon is visible (white, 30% opacity)
- And a "Winter" subheading is displayed (uppercase, black, letter-spacing)
- And a "Sale" heading is displayed in Pacifico font (black, large)
- And a snowflake icon is visible near the "Sale" heading
- And a discount amount "40" is displayed (large, white, bold)
- And a "%" symbol is displayed next to the discount
- And an "off" label is displayed below the percent
- And a line separator (white, 50px wide) appears under "Sale"
- And a "To all products" text is displayed (uppercase)

### Scenario: Modal right panel shows image and CTA
- Given the modal is open
- Then the right panel has a background image
- And a "Shop now" button is displayed
- And the button has teal background with white text
- And the button spans the full width

### Scenario: Modal closes on close button click
- Given the modal is open
- When the user clicks the close button
- Then the modal is dismissed

### Scenario: Modal closes on overlay click
- Given the modal is open
- When the user clicks outside the modal content
- Then the modal is dismissed

### Scenario: Responsive layout
- Given the modal is open on a mobile viewport (< 768px)
- Then the right panel image area has a minimum height of 300px
- And the modal content stacks vertically

## Verification checklist

- [ ] Modal opens and closes correctly
- [ ] Left panel has teal (#39bdc8) background
- [ ] "Sale" text uses Pacifico cursive font
- [ ] Discount number is large and white
- [ ] Right panel shows background image
- [ ] "Shop now" button has correct teal styling
- [ ] Close button is positioned top-right with semi-transparent background
- [ ] Snowflake decorative icons are visible
- [ ] Modal is centered and has max-width 700px
- [ ] Responsive: stacks on mobile with image panel min-height 300px
- [ ] Footer links to Component Dock
