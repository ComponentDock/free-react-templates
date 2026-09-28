# Template: Regspot (Registration Form)

## Purpose

Recreation of ColorLib "Regform 7" — a clean, modern registration/signup form
template with two layout variations (image-right and image-left).

- **Source slug:** `colorlib-regform-7`
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-7/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-7/ (404 — preview unavailable; spec based on screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-7.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New name:** `regspot` (app: `apps/regspot`, package: `@free-react-templates/regspot`)

## Design tokens

Extracted from the screenshot (preview was unreachable):

| Token            | Value                          | Notes                                      |
| ---------------- | ------------------------------ | ------------------------------------------ |
| Page background  | `#f5f5f5` (light gray)         | Full-page neutral background               |
| Card background  | `#ffffff`                      | White cards with subtle shadow             |
| Heading color    | `#222222`                      | Dark, bold "Sign up" headings              |
| Primary / accent | `#5b9bd5` (soft blue)          | Register button, links                     |
| Button hover     | `#4a8bc2`                      | Slightly darker on hover                   |
| Input border     | `#e0e0e0` (light gray)         | Underline-style borders on fields          |
| Placeholder text | `#aaaaaa`                      | Gray placeholder text                      |
| Body text        | `#555555`                      | Checkbox label text                        |
| Link color       | `#5b9bd5`                      | "Terms of service" and "I am already member" |
| Font family      | Poppins (Google Fonts)          | Clean sans-serif, used across all elements |
| Button radius    | `0.375rem` (6px)               | Slightly rounded corners                   |
| Card radius      | `0.5rem` (8px)                 | Rounded card corners                       |
| Card shadow      | `0 2px 15px rgba(0,0,0,0.08)`  | Subtle drop shadow                         |

## Sections (in order)

The template presents **two registration form cards** stacked vertically:

### Section 1: Sign-up Card A (Image Right)

- White card centered on gray background, max-width ~900px
- Two-column layout: form fields (left ~55%) + illustration (right ~45%)
- **Left column:**
  - Heading: "Sign up" (bold, ~28px)
  - Four input fields, each with a left icon + underline border:
    1. Person icon + "Your Name"
    2. Envelope icon + "Your Email"
    3. Lock icon + "Password"
    4. Lock icon + "Repeat your password"
  - Checkbox: "I agree all statements in Terms of service" (underline link)
  - Blue "Register" button (left-aligned, rounded)
- **Right column:**
  - Isometric desk illustration: laptop, plant, pink chair, art supplies

### Section 2: Sign-up Card B (Image Left)

- Same card style, reversed layout: illustration (left) + form (right)
- Same form fields and button
- Different illustration: person at desk with flowers

## Gherkin requirements

```gherkin
Feature: Regspot registration form

  Background:
    Given the user navigates to the Regspot template page
    And the page has a light gray (#f5f5f5) background

  Scenario: Card A renders with correct layout
    Then a white card is displayed centered on the page
    And the card contains a "Sign up" heading
    And the form fields are on the left side of the card
    And an illustration is on the right side of the card

  Scenario: Card A displays all form fields with icons
    Then there is a text input with a person icon and placeholder "Your Name"
    And there is a text input with an envelope icon and placeholder "Your Email"
    And there is a password input with a lock icon and placeholder "Password"
    And there is a password input with a lock icon and placeholder "Repeat your password"

  Scenario: Card A shows terms checkbox
    Then there is a checkbox with label "I agree all statements in Terms of service"
    And "Terms of service" is rendered as an underlined link

  Scenario: Card A has register button and login link
    Then there is a blue "Register" button left-aligned below the form
    And there is an "I am already member" link right-aligned below the form

  Scenario: Card A register button is clickable
    When the user clicks the "Register" button
    Then the form submission is triggered

  Scenario: Card B renders with reversed layout
    Then a second white card is displayed below Card A
    And the card contains a "Sign up" heading
    And an illustration is on the left side of the card
    And the form fields are on the right side of the card

  Scenario: Card B displays all form fields with icons
    Then Card B has a text input with a person icon and placeholder "Your Name"
    And Card B has a text input with an envelope icon and placeholder "Your Email"
    And Card B has a password input with a lock icon and placeholder "Password"
    And Card B has a password input with a lock icon and placeholder "Repeat your password"

  Scenario: Card B has register button and login link
    Then Card B has a blue "Register" button
    And Card B has an "I am already member" link

  Scenario: Responsive layout
    When the viewport is less than 768px wide
    Then both cards stack to single-column layout
    And form fields and illustrations are full-width

  Scenario: Accessibility
    Then all form inputs have associated labels
    And the page is navigable by keyboard
    And the heading hierarchy is correct (h1 > h2)
```

## Verification checklist

- [ ] Page background is `#f5f5f5`
- [ ] Cards are white with subtle shadow
- [ ] "Sign up" heading is bold, dark, ~28px
- [ ] All 4 input fields present with correct icons (person, envelope, lock, lock)
- [ ] Input fields use underline-style borders (not full borders)
- [ ] Placeholder text matches: "Your Name", "Your Email", "Password", "Repeat your password"
- [ ] Checkbox label reads "I agree all statements in Terms of service"
- [ ] "Terms of service" is an underlined link
- [ ] "Register" button is blue (#5b9bd5), left-aligned, rounded
- [ ] "I am already member" link is right-aligned, blue
- [ ] Card B has reversed layout (illustration left, form right)
- [ ] Cards are responsive (stack on mobile)
- [ ] Font is Poppins (Google Fonts)
- [ ] Component Dock footer present
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
- [ ] Typecheck passes
- [ ] Build succeeds
