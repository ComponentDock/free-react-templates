# Template: Chill (Sale Modal Popup)

## Purpose

Chill is a SALE MODAL POPUP component in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Modal V03" free template
(source: https://colorlib.com/wp/template/modal-03/), built under a
DIFFERENT name (**Chill**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 modal window template: a centered modal dialog
(700px max-width, no border-radius, sharp corners) with a two-column split
layout. The LEFT column (~40%) has a solid teal (`#39bdc8`) background with
decorative snowflake icon (flaticon), "WINTER" subheading, large cursive
"Sale" text in Pacifico font, a giant "40% off" number display, and "TO ALL
COLORLIB PRODUCTS" uppercase text. The RIGHT column (~60%) has a background
image (winter scene) with a full-height teal "Shop now" CTA button at the
bottom. A close button (X) sits at top-right with a semi-transparent black
background. The page behind the modal is a simple white section with the
title "Modal 03" and a "Launch Modal 03" trigger button.

**WHAT MAKES CHILL DISTINCT (signature behaviors):**

1. **Two-column split modal.** Unlike typical centered-content modals,
   Chill uses a `row no-gutters` split: left column with sale typography
   and decorative elements, right column with a full-bleed background
   image and CTA button. The modal has NO border-radius (sharp corners).

2. **Teal brand palette + Pacifico cursive heading.** The signature
   color is `#39bdc8` (teal/cyan) used for the left panel background,
   buttons, links, and form focus states. "Sale" is rendered in
   `font-family: "Pacifico", cursive` at 105px — a decorative script
   font that dominates the left panel.

3. **Decorative snowflake icons (flaticon).** Two snowflake icons:
   a large `icon-2` (120px, positioned top-right, 30% opacity white)
   and a smaller `icon` (60px, positioned top-left of the "Sale" text,
   full white). These are REPLACE with lucide-react Snowflake icons.

4. **Giant discount number display.** The "40" is 130px bold white with
   `sup` "%" (30px, absolute top-right) and `sub` "OFF" (16px uppercase,
   absolute bottom-right) — a distinctive typographic treatment.

5. **Close button overlay.** The close (X) button is 40×40px, positioned
   absolute top-right of the modal, with `background: rgba(0,0,0,0.1)`
   semi-transparent overlay. Uses `ion-ios-close` icon — REPLACE with
   lucide-react X icon.

## Design tokens (extracted from live preview CSS)

| Token               | Value                                | Source                          |
| ------------------- | ------------------------------------ | ------------------------------- |
| Brand color         | `#39bdc8` (teal/cyan)               | `.color-1`, `.btn-primary`      |
| Body font           | `"Lato", Arial, sans-serif`          | `body { font-family }`          |
| Decorative font     | `"Pacifico", cursive`                | `.sale { font-family }`         |
| Body font-size      | 15px                                 | `body { font-size }`            |
| Body line-height    | 1.8                                  | `body { line-height }`          |
| Body font-weight    | normal (400)                         | `body { font-weight }`          |
| Heading font-weight | 400 (light)                          | `h1-h5 { font-weight }`         |
| Link color          | `#39bdc8`                            | `a { color }`                   |
| Button border-radius| 4px                                  | `.btn { border-radius }`        |
| Button font-size    | 15px                                 | `.btn { font-size }`            |
| Button text transform| uppercase (CTA)                     | `.btn-primary .upper { text-transform }` |
| Button letter-spacing| 1px (CTA)                           | `.modal-body .btn-primary`      |
| Modal max-width     | 700px                                | `.modal-dialog { max-width }`   |
| Modal border-radius | 0 (sharp corners)                    | `.modal-content { border-radius }` |
| Modal shadow        | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.modal-content { box-shadow }` |
| Modal bg (left)     | `#39bdc8`                            | `.modal-body.color-1 { background }` |
| Close button bg     | `rgba(0,0,0,0.1)`                    | `.modal-content button.close`   |
| Close button size   | 40×40px                              | `.modal-content button.close`   |
| Sale heading size   | 105px                                | `.modal-body .sale { font-size }` |
| Discount number size| 130px bold                           | `.modal-body h2 span { font-size }` |
| Subheading style    | 14px uppercase, letter-spacing 1px, black | `.modal-body .subheading`  |
| "off" text style    | 16px uppercase bold, white           | `.modal-body h2 sub`            |
| Decorative icon size| 120px (bg), 60px (inline)            | `.icon-2`, `.icon`              |
| Decorative icon color| `rgba(255,255,255,0.3)` (bg) / `#fff` (inline) | CSS |
| Page section bg     | `#fff`                               | `.ftco-section { background }`  |
| Form focus border   | `#39bdc8`                            | `.form-control:focus`           |

## Gherkin requirements

### Feature: Chill — Sale Modal Popup

  Background:
    Given the app is loaded at the root URL
    And the "Chill" page is visible

  Scenario: Page renders with title and launch button
    Then I should see a heading "Winter Sale Modal"
    And I should see a "Launch Sale" button

  Scenario: Modal opens on button click
    Given the modal is not visible
    When I click the "Launch Sale" button
    Then the modal should appear centered on screen
    And the modal should have a close button (X) at top-right

  Scenario: Modal displays left panel with sale content
    Given the modal is open
    Then I should see a "Winter" subheading in the left panel
    And I should see a large "Sale" heading in cursive font
    And I should see a discount number "40" with "%" and "off" labels
    And I should see "To all products" uppercase text
    And I should see decorative snowflake icons in the left panel

  Scenario: Modal displays right panel with image and CTA
    Given the modal is open
    Then I should see a background image in the right panel
    And I should see a "Shop now" button in the right panel

  Scenario: Modal closes on close button click
    Given the modal is open
    When I click the close button
    Then the modal should not be visible

  Scenario: Modal closes on backdrop click
    Given the modal is open
    When I click outside the modal dialog
    Then the modal should not be visible

  Scenario: Modal closes on Escape key
    Given the modal is open
    When I press the Escape key
    Then the modal should not be visible

  Scenario: Design tokens match reference
    Then the brand color should be #39bdc8
    And the body font should be Lato
    And the decorative font should be Pacifico
    And the modal should have sharp corners (no border-radius)
    And the modal shadow should be 0px 10px 34px -15px rgba(0,0,0,0.24)

  Scenario: Accessibility — modal trap and ARIA
    Given the modal is open
    Then focus should be trapped inside the modal
    And the modal should have role="dialog"
    And the close button should have an accessible label

## Verification checklist

- [ ] Spec matches live preview structure (two-column split, teal left, image right)
- [ ] All design tokens extracted from preview CSS are captured above
- [ ] Font families: Lato (body) + Pacifico (decorative heading) via Google Fonts
- [ ] Brand color #39bdc8 applied consistently (left panel, buttons, links, focus states)
- [ ] Modal has sharp corners (border-radius: 0)
- [ ] Close button is 40×40px with rgba(0,0,0,0.1) background
- [ ] Snowflake icons replaced with lucide-react Snowflake
- [ ] Discount number: 130px bold white "40" with sup/sub for %/off
- [ ] "Sale" text in Pacifico cursive at 105px
- [ ] Subheading: 14px uppercase, letter-spacing 1px, black
- [ ] Modal max-width 700px, centered
- [ ] CTA button: uppercase, letter-spacing 1px, 14px, teal border, transparent hover
- [ ] Background image: use picsum.photos placeholder (seed: chill-1, 800x600)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] TDD: tests written first, 100% coverage enforced
- [ ] App package: @free-react-templates/chill
- [ ] App folder: apps/chill/
- [ ] CNAME: chill.free.componentdock.com
