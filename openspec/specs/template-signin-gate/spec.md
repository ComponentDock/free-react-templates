# Template: SigninGate (Sign-In Modal)

## Purpose

Recreation of ColorLib **Modal V01** — a responsive free sign-in popup design.

- **Source:** https://colorlib.com/wp/template/modal-01/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-01/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the live preview stylesheet (css/style.css):

| Token | Value |
|---|---|
| Font family | "Poppins", Arial, sans-serif |
| Font size (base) | 15px, line-height 1.8 |
| Brand color | #fb8691 (coral pink) |
| Background | #fff |
| Button border-radius | 40px (pill) |
| Button background | #fb8691 |
| Button border | 1px solid #fb8691 |
| Button text color | #fff |
| Button hover | transparent bg, #fb8691 text |
| Form control height | 52px |
| Form control border-radius | 5px |
| Form control border | 1px solid rgba(0,0,0,0.1) |
| Form focus border | #fb8691 |
| Modal max-width | 450px |
| Modal box-shadow | 0px 10px 34px -15px rgba(0,0,0,0.24) |
| Icon circle diameter | 80px |
| Icon circle border | 1px solid #fb8691 |
| Icon circle border-radius | 50% |
| Icon color | #fb8691 |
| Modal footer background | #f8f8f8 |
| Close button size | 40x40px |
| Link color | #fb8691 |
| Section background | #fff |

## Visual description

A centered modal dialog with a white background and subtle drop shadow. The modal header contains a close button (X) in the top-right corner. The modal body displays a circular icon (person silhouette) with a coral pink (#fb8691) border, followed by an "Sign In" heading, a login form with username and password inputs (rounded, 52px height), a full-width pill-shaped "Login" button in coral pink, a "Remember Me" checkbox and "Forgot Password" link. The modal footer shows "Not a member? Create an account" text on a light gray (#f8f8f8) background. The page behind the modal is minimal — just the template name "Modal 01" centered with a "Launch Modal" button.

## Gherkin requirements

### Feature: Sign-In Modal Template

```gherkin
Feature: SigninGate sign-in modal template

  Background:
    Given the user has loaded the SigninGate application
    Then the page displays a centered modal dialog

  Scenario: Modal is visible on page load
    Given the page has loaded
    Then a modal dialog is displayed in the center of the viewport
    And the modal has a maximum width of 450px
    And the modal has a subtle box shadow

  Scenario: Close button dismisses modal
    Given the modal is open
    When the user clicks the close button (X) in the top-right corner
    Then the modal is dismissed

  Scenario: Icon displays above heading
    Given the modal is open
    Then a circular icon with coral pink border is displayed
    And the icon contains a person silhouette
    And the heading "Sign In" is displayed below the icon

  Scenario: Login form has username field
    Given the modal is open
    Then a username input field is displayed with placeholder "Username"
    And the input has a height of 52px
    And the input has rounded corners (border-radius 5px)

  Scenario: Login form has password field
    Given the modal is open
    Then a password input field is displayed with placeholder "Password"
    And the input has a height of 52px

  Scenario: Login button submits form
    Given the modal is open
    When the user fills in the username field
    And the user fills in the password field
    And the user clicks the "Login" button
    Then the form is submitted

  Scenario: Login button has pill shape
    Given the modal is open
    Then the Login button has border-radius 40px (pill shape)
    And the Login button background is #fb8691
    And the Login button text color is white

  Scenario: Remember Me checkbox works
    Given the modal is open
    Then a "Remember Me" checkbox is displayed
    When the user clicks the checkbox
    Then the checkbox becomes checked
    And the checkbox indicator turns coral pink (#fb8691)

  Scenario: Forgot Password link is visible
    Given the modal is open
    Then a "Forgot Password" link is displayed
    And the link color is #fb8691

  Scenario: Footer shows sign-up prompt
    Given the modal is open
    Then the modal footer displays "Not a member?"
    And the footer contains a "Create an account" link
    And the footer background is #f8f8f8

  Scenario: Modal has proper accessibility
    Given the modal is open
    Then the modal has role="document"
    And the close button has aria-label="Close"
    And the modal header is marked as aria-labelledby

  Scenario: Page behind modal shows title and launch button
    Given the page has loaded
    Then a heading "SigninGate" is displayed
    And a "Launch Modal" button is displayed
    When the user clicks the "Launch Modal" button
    Then the modal opens

  Scenario: Font family is Poppins
    Given the page has loaded
    Then the body font is "Poppins", Arial, sans-serif

  Scenario: Responsive layout
    Given the user views on a mobile device
    Then the modal adapts to the viewport width
    And the form inputs remain usable
```

## Verification checklist

- [ ] Modal opens on "Launch Modal" button click
- [ ] Close button (X) dismisses modal
- [ ] Circular coral pink icon with person silhouette
- [ ] "Sign In" heading below icon
- [ ] Username input with placeholder, 52px height, 5px border-radius
- [ ] Password input with placeholder, 52px height
- [ ] Pill-shaped Login button (#fb8691, border-radius 40px)
- [ ] "Remember Me" checkbox with coral pink indicator on check
- [ ] "Forgot Password" link (#fb8691)
- [ ] Footer with "Not a member? Create an account" on #f8f8f8 background
- [ ] Modal max-width 450px with box-shadow
- [ ] Font family: Poppins, Arial, sans-serif
- [ ] Brand color #fb8691 used consistently
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images from picsum.photos where needed
- [ ] Accessible: aria-labels, semantic elements, focus management
