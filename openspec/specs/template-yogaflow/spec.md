# Template: YogaFlow (Registration Form)

## Purpose

Recreation of ColorLib **Regform 22** — a free yoga class registration form template that suits other sports and activities too.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-22/
- **Preview (Colorlib):** https://colorlib.com/etc/regform/colorlib-regform-22/
- **New name:** `yogaflow`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token | Value | Source |
|-------|-------|--------|
| Body font | Montserrat (Regular 400, Medium 500) | `@font-face` declarations |
| Heading font | El Messiri SemiBold | `h3 { font-family: "ElMessiri-SemiBold.ttf" }` |
| Body text color | `#666` | `body { color: #666 }` |
| Heading color | `#333` | `h3 { color: #333 }` |
| Card background | `#fff` | `.inner { background: #fff }` |
| Card border-radius | `20px` | `.inner { border-radius: 20px }` |
| Card shadow | `0px 0px 10px 0px rgba(0,0,0,0.2)` | `.inner { box-shadow: ... }` |
| Input border | `1px solid #e6e6e6` | `.cl-form-control { border: ... }` |
| Input focus border | `1px solid #f4d5cc` | `.cl-form-control:focus { border: ... }` |
| Placeholder color | `#999` | `.cl-form-control::-webkit-input-placeholder` |
| Button background | `#84cde1` (teal/cyan) | `button { background: #84cde1 }` |
| Button hover | `#17c8f8` (brighter cyan) | `button:hover { background-color: #17c8f8 }` |
| Button text | white, uppercase, Medium 500 | `button { color: #fff; text-transform: uppercase }` |
| Button border-radius | `5px` | `button { border-radius: 5px }` |
| Input border-radius | `5px` | `.cl-form-control { border-radius: 5px }` |
| Image border-radius | `15px` | `.image-holder img { border-radius: 15px }` |
| Background | Full-viewport image (`bg-registration-form-6.jpg`) | `.wrapper { background: url(...) }` |
| Responsive breakpoint | 991px (tablet), 767px (mobile) | `@media` rules |

## Layout & sections

1. **Full-page wrapper** — flexbox centered, full viewport height, background image (yoga studio/class photo, use picsum placeholder).
2. **Card container** (`.inner`) — white background, 20px border-radius, subtle drop shadow, flex row layout. Min-width 861px on desktop, stacks vertically on mobile (<767px).
3. **Image panel** (left) — yoga class photo, rounded corners (15px), overlaps card slightly via transform.
4. **Form panel** (right, ~64% width):
   - **Heading** — "Make An Appointment", El Messiri SemiBold, 25px, uppercase, centered.
   - **Row 1** — Name input + Email input, side by side.
   - **Row 2** — Phone input + Class select dropdown (custom chevron icon), side by side.
   - **Message** — textarea, 130px height.
   - **Submit button** — "Book Now" with right-arrow icon, centered, teal/cyan (#84cde1), pulsing hover animation.
5. **Footer** — Component Dock attribution link (mandatory per conventions).

## Gherkin requirements

```gherkin
Feature: YogaFlow registration form

  Background:
    Given the page is loaded at the root route

  Scenario: Full-page layout renders
    Then a full-viewport wrapper is visible
    And the wrapper has a background image covering the viewport

  Scenario: Card container displays
    Then a centered white card is visible
    And the card has rounded corners
    And the card has a subtle drop shadow

  Scenario: Left image panel renders
    Then the card has an image panel on the left
    And the image displays a yoga class photo placeholder
    And the image has rounded corners

  Scenario: Form heading renders
    Then the heading reads "Make An Appointment"
    And the heading is uppercase and centered

  Scenario: Name and email inputs render
    Then there is a name input with placeholder "Name"
    And there is an email input with placeholder "Mail"
    And both inputs are displayed side by side

  Scenario: Phone and class select render
    Then there is a phone input with placeholder "Phone"
    And there is a class select dropdown
    And the dropdown has a default disabled option "Choose Your Class"
    And the dropdown has three class options

  Scenario: Message textarea renders
    Then there is a textarea with placeholder "Message"
    And the textarea is approximately 130px tall

  Scenario: Submit button renders
    Then there is a "Book Now" button
    And the button has a right-arrow icon
    And the button is centered below the form fields
    And the button text is uppercase

  Scenario: Button hover effect
    When the user hovers over the submit button
    Then the button background changes to a brighter cyan

  Scenario: Form is interactive
    When the user types "Jane Doe" in the name input
    Then the name input shows "Jane Doe"
    When the user selects "Class 01" from the dropdown
    Then the dropdown shows "Class 01"

  Scenario: Responsive layout on mobile
    Given the viewport is 375px wide
    Then the card stacks vertically
    And the image panel is full width above the form
    And the form rows stack into single columns

  Scenario: Footer links to Component Dock
    Then a footer link points to "https://www.componentdock.com/"
    And the link text mentions "Component Dock"
```

## Verification checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] All tokens match the ColorLib preview CSS
- [ ] Section order matches: image (left) + form (right) inside centered card
- [ ] Font families: Montserrat (body/inputs/button), El Messiri (heading)
- [ ] Brand color #84cde1 used for CTA button
- [ ] Card has 20px border-radius and drop shadow
- [ ] Responsive: stacks vertically below 767px
- [ ] Background image covers full viewport
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
