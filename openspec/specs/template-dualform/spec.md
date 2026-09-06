# Template: DualForm (Split Sign-In/Up Modal)

## Purpose

Recreation of ColorLib **Modal 02** — a split sign-in/sign-up modal with gradient background.

- **Source:** https://colorlib.com/wp/template/modal-02/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-02/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the live preview stylesheet (css/style.css):

| Token | Value |
|---|---|
| Font family | "Poppins", Arial, sans-serif |
| Font size (modal) | 14px |
| Gradient background | linear-gradient(45deg, #c859ff 0%, #ffab8c 100%) |
| Gradient start | #c859ff (purple) |
| Gradient end | #ffab8c (peach/salmon) |
| Brand/accent color | #f9e090 (golden yellow) |
| Text color | rgba(255, 255, 255, 0.8) |
| Heading color | #fff |
| Heading font-weight | 300 |
| Modal max-width | 900px |
| Modal padding | 50px |
| Modal box-shadow | 0px 10px 34px -15px rgba(0,0,0,0.24) |
| Close button size | 40x40px |
| Close button bg | rgba(0,0,0,0.1) |
| Form control height | 40px |
| Form control bg | transparent |
| Form control border | none (border-bottom: 1px solid rgba(255,255,255,0.2)) |
| Form control text color | rgba(255,255,255,0.8) |
| Button height | 52px |
| Button font-weight | 500 |
| Button primary bg | #f9e090 |
| Social button bg | #fff |
| Social button text | #000 |
| Social button border | 1px solid rgba(255,255,255,0.4) |
| Divider | 1px vertical line, rgba(255,255,255,0.2) |
| Checkbox accent | #f9e090 |
| Checkbox description | rgba(255,255,255,0.6) |
| Modal backdrop | rgba(0,0,0,0.5) |

## Visual description

A wide modal (900px max-width) with a striking diagonal gradient background from purple (#c859ff) to peach (#ffab8c). The modal is split into two columns by a thin vertical divider line. Left column: "Sign In" heading (white, weight 300), username and password inputs (transparent bg, bottom border only), a golden yellow (#f9e090) "Sign In" pill button, "Remember Me" checkbox and "Forgot Password" link, and social login buttons (Facebook, Twitter) in white. Right column: "Sign Up" heading, first name, last name, email, and password inputs, a "Login" button, and terms text. Close button (X) in top-right with semi-transparent dark background.

## Gherkin requirements

### Feature: DualForm Split Auth Modal

```gherkin
Feature: DualForm split sign-in/sign-up modal template

  Background:
    Given the user has loaded the DualForm application
    Then the page displays a centered modal dialog

  Scenario: Modal has gradient background
    Given the page has loaded
    When the user clicks the "Launch Modal" button
    Then the modal displays a diagonal gradient from #c859ff to #ffab8c

  Scenario: Modal is split into two columns
    Given the modal is open
    Then a vertical divider separates the left and right columns
    And the divider is a 1px line with rgba(255,255,255,0.2) color

  Scenario: Left column shows Sign In form
    Given the modal is open
    Then the left column displays "Sign In" heading in white
    And a username input field with transparent background is displayed
    And a password input field with bottom border is displayed
    And a "Sign In" button with golden yellow (#f9e090) background is displayed

  Scenario: Right column shows Sign Up form
    Given the modal is open
    Then the right column displays "Sign Up" heading in white
    And first name, last name, email, and password inputs are displayed
    And a "Login" button with golden yellow background is displayed
    And a terms agreement text is displayed below the button

  Scenario: Form inputs have underline style
    Given the modal is open
    Then all form inputs have transparent background
    And all form inputs have a bottom border of 1px solid rgba(255,255,255,0.2)
    And all form inputs have no other borders

  Scenario: Social login buttons are visible
    Given the modal is open
    Then Facebook and Twitter social login buttons are displayed in the left column
    And the social buttons have white background with black text
    And the social buttons have a border of 1px solid rgba(255,255,255,0.4)

  Scenario: Social button hover effect
    Given the modal is open
    When the user hovers over a social button
    Then the button background becomes transparent
    And the button text becomes white

  Scenario: Close button dismisses modal
    Given the modal is open
    When the user clicks the close button (X)
    Then the modal is dismissed

  Scenario: Close button has dark transparent background
    Given the modal is open
    Then the close button has a background of rgba(0,0,0,0.1)
    And the close button is 40x40px

  Scenario: Remember Me checkbox works
    Given the modal is open
    Then a "Remember Me" checkbox is displayed in the left column
    When the user clicks the checkbox
    Then the checkbox indicator turns golden yellow (#f9e090)

  Scenario: Forgot Password link is visible
    Given the modal is open
    Then a "Forgot Password" link is displayed in the left column
    And the link color is white

  Scenario: Modal has proper accessibility
    Given the modal is open
    Then the modal has role="document"
    And the close button has aria-label="Close"

  Scenario: Font family is Poppins
    Given the page has loaded
    Then the body font is "Poppins", Arial, sans-serif

  Scenario: Responsive layout
    Given the user views on a mobile device
    Then the modal stacks the columns vertically
    And the divider becomes horizontal or hidden
```

## Verification checklist

- [ ] Modal opens on "Launch Modal" button click
- [ ] Gradient background: linear-gradient(45deg, #c859ff, #ffab8c)
- [ ] Two-column layout with vertical divider
- [ ] Left: "Sign In" form (username, password, button, checkbox, social)
- [ ] Right: "Sign Up" form (first name, last name, email, password, button, terms)
- [ ] Underline-style inputs (transparent bg, bottom border only)
- [ ] Golden yellow (#f9e090) buttons and checkbox accent
- [ ] Social buttons (Facebook, Twitter) with white bg, black text
- [ ] Close button (X) with rgba(0,0,0,0.1) background
- [ ] Modal max-width 900px with 50px padding
- [ ] Font family: Poppins, Arial, sans-serif
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Accessible: aria-labels, semantic elements
