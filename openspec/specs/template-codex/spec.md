# Template: Codex (Colorlib Wizard 29 Registration Wizard)

## Purpose

Recreation of ColorLib Wizard 29 — a free registration wizard template with a 4-step form wizard. The original is a Bootstrap-based page with a full-page background image, a white card containing a "Register Wizard" heading, and a horizontal tab-style step indicator for username, email, password, and confirm-password steps.

- **Source template**: [Colorlib Wizard 29](https://colorlib.com/wp/template/colorlib-wizard-29/)
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-29/index.html` (live preview reachable; the `preview.colorlib.com` URL returns 404)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the live preview CSS (`css/main.css`) at
> `https://colorlib.com/etc/bwiz/colorlib-wizard-29/css/main.css`.

| Token | Value | Notes |
|-------|-------|-------|
| Background (page) | Full-page background image (`bg-img-01.jpg`) | Use a Picsum placeholder; covers entire viewport |
| Background (card body) | `#ffffff` (white) | White card with rounded corners and shadow |
| Background (card wrapper) | `transparent` | Card header sits on the page background |
| Accent / CTA | `#3155cc` (blue) | Active tab background, "next step" / "Confirm" button |
| Button hover | `#1d41b8` (darker blue) | Hover state for all CTA buttons |
| Active step circle | `#3d6aff` (bright blue) | Circular step indicator inside active tab |
| Inactive tab background | `#999999` (gray) | Inactive step pill |
| Inactive step circle | `#666666` (dark gray) | Number circle inside inactive tab |
| Title text | `#ffffff` (white) | "REGISTER WIZARD" heading on page background |
| Input text | `#666666` | Text typed into form fields |
| Input placeholder | `#999999` | Placeholder text inside inputs |
| Input border | `1px solid #e5e5e5` (light gray) | Subtle border on input fields |
| Font family | `"Lato", "Arial", "Helvetica Neue", sans-serif` | System fallback stack |
| Font weight (body) | `400` | Normal body text |
| Font weight (title) | `700` | Bold uppercase title |
| Font weight (tabs/buttons) | `700` | Bold step labels and CTA buttons |
| Border radius (input) | `25px` | Full pill / rounded pill shape |
| Border radius (button right) | `25px` (top-right and bottom-right only) | Button flush right inside the input |
| Border radius (step pill) | `22.5px` | Pill-shaped step indicator tabs |
| Border radius (step circle) | `50%` | Circular number indicator |
| Border radius (card body) | `5px` | Slightly rounded card corners |
| Box shadow (card) | `0px 8px 20px 0px rgba(0,0,0,0.15)` | Soft drop shadow on the card body |
| Step pill width | `162px` | Fixed width for each step indicator |
| Step circle size | `45px × 45px` | Circular step number indicator |
| Input line-height | `48px` | Height of the input field |
| Button line-height | `50px` | Height of the CTA button |
| Transition | `all 0.4s ease` | Smooth transitions on tabs, inputs, links |
| Responsive breakpoint | `767px` | Tabs stack vertically, padding reduces |

## Gherkin requirements

### Feature: Codex — 4-Step Registration Wizard

  Scenario: Page loads with step 1 active
    Given the user opens the Codex registration wizard page
    Then the "REGISTER WIZARD" heading is displayed in white uppercase text
    And step 1 "username" tab is shown as active with a blue background
    And step 1 displays a text input with placeholder "Username here"
    And a "next step" button is visible inside the input field on the right
    And steps 2, 3, 4 are shown as inactive with gray backgrounds

  Scenario: Step indicator shows numbered tabs
    Given the user views the wizard
    Then four horizontal step tabs are displayed: 1-username, 2-email, 3-password, 4-confirm password
    And each tab has a circular step number and a text description label

  Scenario: Navigate from step 1 to step 2
    Given the user is on step 1 "username"
    When the user types "john_doe" in the username input
    And the user clicks "next step"
    Then step 2 "email" becomes active with a blue background
    And step 2 displays an email input with placeholder "ex: example@email.com"
    And step 1 is shown as completed/inactive

  Scenario: Navigate from step 2 to step 3
    Given the user is on step 2 "email"
    When the user types "john@example.com" in the email input
    And the user clicks "next step"
    Then step 3 "password" becomes active with a blue background
    And step 3 displays a password input with placeholder "Password"

  Scenario: Navigate from step 3 to step 4
    Given the user is on step 3 "password"
    When the user types "securePass123" in the password input
    And the user clicks "next step"
    Then step 4 "confirm password" becomes active with a blue background
    And step 4 displays a password input with placeholder "Password"
    And the button text changes to "Confirm"

  Scenario: Complete registration (step 4)
    Given the user is on step 4 "confirm password"
    When the user types "securePass123" in the confirm password input
    And the user clicks "Confirm"
    Then a success/completion state is displayed

  Scenario: Form validation prevents advancing with empty fields
    Given the user is on step 1 "username"
    When the user leaves the username field empty
    And the user clicks "next step"
    Then the form does not advance to step 2
    And the browser's native validation prevents submission

  Scenario: Email format validation
    Given the user is on step 2 "email"
    When the user types "not-an-email" in the email input
    And the user clicks "next step"
    Then the browser's native email validation prevents advancement

  Scenario: Password mismatch on confirm step
    Given the user is on step 4 "confirm password"
    And the user entered "password123" in step 3
    When the user types "differentPass" in the confirm password field
    And the user clicks "Confirm"
    Then a password mismatch error or validation message is shown

  Scenario: Responsive layout on mobile
    Given the user views the wizard on a viewport narrower than 768px
    Then the step tabs stack vertically instead of horizontally
    And the page padding-top reduces from 275px to 120px
    And each step tab takes full width

  Scenario: Footer with Component Dock branding
    Given the page is rendered
    Then the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification checklist

- [ ] Page displays "REGISTER WIZARD" heading in white, uppercase, bold
- [ ] Full-page background image covers the viewport (use Picsum placeholder)
- [ ] White card with rounded corners and drop shadow is centered
- [ ] Four step tabs displayed horizontally: username, email, password, confirm password
- [ ] Active step tab has blue (#3155cc) background with bright blue (#3d6aff) circle
- [ ] Inactive step tabs have gray (#999) background with dark gray (#666) circle
- [ ] Each step shows a pill-shaped input field with rounded corners (25px)
- [ ] "next step" / "Confirm" button is flush-right inside the input (pill + button combo)
- [ ] Button background is #3155cc, hover is #1d41b8
- [ ] Step navigation advances one step at a time with validation
- [ ] Final step button text reads "Confirm"
- [ ] Password fields use type="password" for masking
- [ ] Responsive: tabs stack vertically below 768px
- [ ] Footer links to https://www.componentdock.com/ labeled "Component Dock"
- [ ] Font is Lato (loaded via Google Fonts)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
