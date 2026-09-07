# Template: Stepflow (3-Step Form Wizard)

## Purpose

Stepflow is a single-page three-step FORM WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 28" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-28/,
preview: https://colorlib.com/etc/bwiz/colorlib-wizard-28/index.html),
built under a DIFFERENT name (**Stepflow**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-wizard jQuery form (jQuery + jquery.validate +
bootstrap-wizard): a centered 690px white CARD (5px radius, soft shadow
`0px 8px 20px rgba(0,0,0,0.15)`) on a FULL-SCREEN VIVID GRADIENT
BACKGROUND (`linear-gradient(316deg, #4158d0 0%, #c850c0 50%, #ffcc70
100%)`). The card contains a "Form Wizard" heading (positioned above
the card at `left:-109px; top:-49px`, Montserrat bold uppercase 55px,
white, 60% opacity), a GREEN progress bar (`#36c240`, rounded pill
17.5px radius, on `#f5f5f5` track with `#e5e5e5` border), and three
tabs with numbered step indicators (hidden via CSS
`.nav-tab { height:0; visibility:hidden }` — visually absent).

**WHAT MAKES STEPFLOW DISTINCT (signature behaviors):**

1. **Vivid tri-color gradient background + white card.** The page is a
   full-viewport gradient `#4158d0 → #c850c0 → #ffcc70` at 316 degrees.
   The card sits centered on this gradient with a 5px radius and a
   pronounced drop shadow. No header, no navbar — just the gradient + card.
2. **Progress bar at 40% start, rounded pill shape.** The `.progress`
   container is 35px tall, border-radius 17.5px, `#f5f5f5` background
   with `#e5e5e5` 1px border. The `.progress-bar` fill is `#36c240`
   (green), starts at 40% width on step 1, transitions with 0.6s ease.
   The percentage text ("40%") is white bold 15px centered inside.
3. **Three-step form with hidden tab navigation.** Steps are:
   - Step 1: Full name, Email, Phone number (required fields)
   - Step 2: Building Number, Street, A Town, Zip code (optional address)
   - Step 3: Card Holder Name, Card Number, CVC, Expiration (payment info)
   The `.nav-tab` unordered list is hidden (`height:0; visibility:hidden`).
   Step indicators (1, 1, 1) exist in the DOM but are invisible.
4. **Green Next/Submit buttons, grey Back buttons.** Buttons are
   border-radius 22.5px (pill), green `#36c240` background for
   Next/Submit, grey `#999` for Back. Hover darkens to `#22ae2c` (green)
   and `#666` (grey). Buttons are 14px Roboto font, white text.
5. **Card heading positioned OUTSIDE the card.** The "Form Wizard" title
   is absolutely positioned at `left:-109px; top:-49px` relative to the
   card, so it floats above-left of the card container. It is 55px
   Montserrat bold uppercase, white, 60% opacity. On mobile it repositions
   to `left:0`.
6. **Input fields with Roboto font, 3px border-radius.** Inputs are
   `.input--style-1` with `border-radius:3px`, Roboto 14px, `#333` text,
   `#999` placeholders. Focused inputs get a green `#36c240` border.
   Card 3 has icon inputs (card number + CVC) with `zmdi` card icons.

## Design tokens (extracted from original CSS)

| Token              | Value                                         |
| ------------------ | --------------------------------------------- |
| Background gradient | `linear-gradient(316deg, #4158d0, #c850c0, #ffcc70)` |
| Card background    | `#fff`                                        |
| Card border-radius | `5px`                                         |
| Card shadow        | `0px 8px 20px rgba(0,0,0,0.15)`              |
| Primary color (green) | `#36c240` (buttons, progress bar, input focus) |
| Primary hover      | `#22ae2c`                                     |
| Back button color  | `#999`                                        |
| Back button hover  | `#666`                                        |
| Progress track     | `#f5f5f5` bg, `#e5e5e5` border               |
| Progress radius    | `17.5px` (pill)                               |
| Button radius      | `22.5px` (pill)                               |
| Input radius       | `3px`                                         |
| Body font          | Roboto 14px, weight 400                        |
| Heading font       | Montserrat, weight 700, uppercase              |
| Title size         | 55px                                          |
| Title position     | `left:-109px; top:-49px` (outside card)       |
| Title color        | `#fff` at 60% opacity                         |
| Input text color   | `#333`                                        |
| Placeholder color  | `#999`                                        |
| Focus border color | `#36c240`                                     |

## Gherkin requirements

```gherkin
Feature: Stepflow 3-Step Form Wizard

  Background:
    Given the user is on the Stepflow page
    Then the page background is a tri-color gradient (#4158d0 → #c850c0 → #ffcc70)
    And a centered white card is visible

  Scenario: Page loads with step 1 active and progress at 40%
    Given the page has loaded
    Then the progress bar shows "40%"
    And the progress bar fill width is 40%
    And the "Full name" input is visible
    And the "Email" input is visible
    And the "Phone number" input is visible
    And a "Next" button is visible

  Scenario: Step 1 fields are displayed
    Given the page has loaded
    Then the card heading shows "Form Wizard"
    And the heading is positioned above-left of the card
    And step 1 contains three input groups

  Scenario: Navigate to step 2 via Next button
    Given the page has loaded
    When the user clicks "Next" on step 1
    Then step 2 becomes active
    And the "Building Number" input is visible
    And the "Street" input is visible
    And the "A Town" input is visible
    And the "Zip code" input is visible
    And a "back" button is visible
    And a "Next" button is visible

  Scenario: Navigate back to step 1
    Given the user is on step 2
    When the user clicks "back"
    Then step 1 becomes active
    And the "Full name" input is visible

  Scenario: Navigate to step 3 via Next button
    Given the user is on step 2
    When the user clicks "Next" on step 2
    Then step 3 becomes active
    And the "Card Holder Name" input is visible
    And the "Card Number" input is visible with a card icon
    And the "CVC" input is visible with a card icon
    And the "Expiration" input is visible
    And a "back" button is visible
    And a "Submit" button is visible

  Scenario: Submit completes the form
    Given the user is on step 3
    When the user clicks "Submit"
    Then the form is submitted

  Scenario: Progress bar updates with steps
    Given the page has loaded
    When the user completes step 1
    Then the progress bar width increases
    When the user completes step 2
    Then the progress bar width increases further

  Scenario: Responsive design
    Given the user views the page on a mobile device
    Then the card heading repositions to left:0
    And the card remains centered

  Scenario: Form validation on required fields
    Given the page has loaded
    When the user clicks "Next" without filling required fields
    Then the form shows validation errors for required fields
```

## Verification checklist

- [ ] Card is centered on the gradient background
- [ ] Progress bar starts at 40% and updates with step navigation
- [ ] Step 1 shows Full name, Email, Phone number inputs
- [ ] Step 2 shows Building Number, Street, A Town, Zip code inputs
- [ ] Step 3 shows Card Holder Name, Card Number, CVC, Expiration inputs
- [ ] Card Number and CVC inputs show a card icon
- [ ] Next button advances to next step
- [ ] Back button returns to previous step
- [ ] Submit button on step 3 completes the form
- [ ] Heading "Form Wizard" is positioned outside the card (above-left)
- [ ] Green color (#36c240) is used for buttons, progress bar, input focus
- [ ] Buttons are pill-shaped (border-radius 22.5px)
- [ ] Progress bar is pill-shaped (border-radius 17.5px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Images use picsum.photos placeholder seeds
- [ ] 100% test coverage
- [ ] TypeCheck passes
- [ ] Build passes
