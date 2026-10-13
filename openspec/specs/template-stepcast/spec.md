# Template: StepCast (Multi-Step Checkout Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 8", a multi-step food store checkout
wizard form template.

- **Source:** [colorlib.com/wp/template/colorlib-wizard-8/](https://colorlib.com/wp/template/colorlib-wizard-8/)
- **Live preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-8/index.html (demo URL — preview.colorlib.com/theme/ returned 404; demo extracted instead)
- **Screenshot:** [colorlib-free-wizard-8.jpg](https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-8.jpg)
- **Category:** Bootstrap Wizard / Multi-Step Form
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from source CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | Lato (Regular 400, Bold 700, Black 900) | Google Fonts `Lato` substitute |
| Base font size | 14px | Body text |
| Heading font | Lato Black, 20px, uppercase, letter-spacing 2px | `<h3>` sections |
| Step label font | 12px, uppercase, color #666 | Step indicators |
| Brand / accent | #8eb852 (olive green) | Active step circle, buttons, focus border |
| Accent hover | #a1d15e | Button hover state |
| Price green | #92c752 | Cart total prices |
| Body text | #999 | Inputs, placeholders, body |
| Heading text | #333 | Section headings, bold labels |
| Secondary text | #666 | Step labels, table headers |
| Border color | #e6e6e6 | Input borders, table row separators, card thumbnails |
| Input background | transparent (white) | Default input |
| Quantity background | #f2f2f2 | Quantity stepper background |
| Card background | #fff (white) | Form wrapper, 826×620px fixed card |
| Button radius | 3px | Slightly rounded rectangle buttons |
| Button height | 42px | Action buttons and inputs match |
| Input height | 42px | All form inputs |
| Button letter-spacing | 1px | Uppercase action text |
| Radio checkmark | 13px circle, #999 border/fill | Custom radio for shipping |

## Visual design (from screenshot analysis)

The template shows a **centered white card** on a **food-themed photographic
background** (cream/off-white with scattered food props: basil, tomatoes,
peppercorns, bowls). The card contains:

1. **Step indicator** — horizontal 4-step progress with connected circles.
   Active step: solid olive-green circle with white icon. Inactive: outlined
   green circle with grey icon. Step labels below each circle.
2. **Section heading** — bold uppercase dark text ("BASIC DETAILS").
3. **Form fields** — 2/3-column grid with icon adornments on the right side
   of each input. Clean borders, rounded inputs.
4. **Action buttons** — olive-green "BACK" and "CONTINUE" at bottom.

The overall aesthetic is **clean, modern, organic/earthy minimalist UI**
tailored for food-focused services.

## Requirements

### Feature: Multi-step checkout wizard

As a user completing a food store checkout, I want a guided multi-step form
so that I can fill details, review my cart, and confirm totals incrementally.

#### Scenario: Step indicator displays 4 steps

- **GIVEN** the wizard has loaded
- **THEN** 4 step circles are visible in a horizontal row
- **AND** step 1 is highlighted (solid olive-green fill)
- **AND** steps 2–4 are inactive (outlined, grey icons)

#### Scenario: Navigate forward through steps

- **GIVEN** the user is on step 1
- **WHEN** the user clicks "CONTINUE"
- **THEN** step 2 becomes active
- **AND** step 1 icon becomes inactive (outlined)
- **AND** the step 2 form section is displayed

#### Scenario: Navigate backward through steps

- **GIVEN** the user is on step 2
- **WHEN** the user clicks "BACK"
- **THEN** step 1 becomes active again
- **AND** the step 1 form section is restored with previous values

#### Scenario: Step 1 — Basic details form

- **GIVEN** the wizard is on step 1
- **THEN** the heading "BASIC DETAILS" is displayed
- **AND** form fields exist for: First Name, Last Name, Email ID, User ID, Country, State, City, Phone Number, Reference Coder
- **AND** each input has a right-aligned icon
- **AND** inputs are arranged in 2-column and 3-column rows

#### Scenario: Step 1 — Focus state

- **GIVEN** the wizard is on step 1
- **WHEN** the user focuses an input
- **THEN** the input border color changes to olive-green (#8eb852)

#### Scenario: Step 2 — Password change form

- **GIVEN** the wizard is on step 2
- **THEN** the heading "PASSWORD CHANGE" is displayed
- **AND** form fields exist for: Current Password, Enter Current Password, New Password, Confirm New Password
- **AND** each field is full-width with a lock icon

#### Scenario: Step 3 — My Cart table

- **GIVEN** the wizard is on step 3
- **THEN** the heading "MY CART" is displayed
- **AND** a cart table is shown with columns: thumbnail, Product Detail, Quantity, Total Price, remove button
- **AND** each product row shows a thumbnail image, product name with price, a quantity stepper (+ / input / -), and a total price in green
- **AND** a remove button (close-circle icon) is on each row

#### Scenario: Step 3 — Quantity adjustment

- **GIVEN** the cart table is visible
- **WHEN** the user clicks "+"
- **THEN** the quantity increments by 1
- **AND** the total price for that row updates

#### Scenario: Step 3 — Quantity decrement

- **GIVEN** the cart table is visible with quantity > 1
- **WHEN** the user clicks "-"
- **THEN** the quantity decrements by 1
- **AND** the total price for that row updates

#### Scenario: Step 3 — Remove product

- **GIVEN** the cart table has products
- **WHEN** the user clicks the remove button on a row
- **THEN** that row is removed from the cart

#### Scenario: Step 4 — Cart totals

- **GIVEN** the wizard is on step 4
- **THEN** the heading "CART TOTALS" is displayed
- **AND** a totals table shows: Subtotal, Shipping (radio: Free Shipping / Local pickup), Service (estimated), Total
- **AND** the total row uses bold dark text
- **AND** the BACK button is hidden on the final step

#### Scenario: Step 4 — Shipping selection

- **GIVEN** the cart totals are visible
- **WHEN** the user selects "Local pickup"
- **THEN** the radio is checked and Free Shipping is unchecked
- **AND** the shipping cost updates accordingly

#### Scenario: Responsive layout

- **GIVEN** the viewport is ≤ 767px
- **THEN** the form card is full-width with 20px padding
- **AND** form fields stack vertically (single column)
- **AND** action buttons stack vertically aligned to the right

### Feature: Visual design compliance

#### Scenario: Brand colors applied

- **GIVEN** the template is rendered
- **THEN** buttons use background #8eb852 with white text
- **AND** active step circle uses #8eb852 fill
- **AND** focus borders use #8eb852

#### Scenario: Typography matches source

- **GIVEN** the template is rendered
- **THEN** headings use Lato Black weight, uppercase, 20px, letter-spacing 2px
- **AND** body text uses Lato Regular at 14px
- **AND** step labels use 12px uppercase

#### Scenario: Card layout matches source

- **GIVEN** the template is rendered
- **THEN** the form card has white background
- **AND** the page background is a photographic food-themed image
- **AND** inputs have 1px #e6e6e6 borders with 42px height
- **AND** buttons have 3px border-radius, 42px height, uppercase text

## Verification checklist

- [ ] 4-step wizard with step indicator (active/inactive states)
- [ ] Step 1: Basic Details — 9 inputs in 2/3-column grid with icons
- [ ] Step 2: Password Change — 4 full-width password fields with lock icons
- [   ] Step 3: My Cart — table with thumbnails, names, quantities, prices, remove
- [ ] Step 4: Cart Totals — subtotal, shipping radio, service, total
- [ ] Back/Continue navigation between steps
- [ ] Focus border color #8eb852 on inputs
- [ ] Olive-green buttons (#8eb852) with 3px radius
- [ ] Lato font family (Google Fonts), uppercase headings
- [ ] Responsive: single-column stacking at ≤767px
- [ ] Quantity stepper (+/-) functional in cart
- [ ] Product removal from cart
- [ ] Shipping radio toggle in cart totals
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via picsum.photos
- [ ] package.json name: @free-react-templates/stepcast
- [ ] CNAME: stepcast.free.componentdock.com
- [ ] 100% test coverage (Vitest + Testing Library)
