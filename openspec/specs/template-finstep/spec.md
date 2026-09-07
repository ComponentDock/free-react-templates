# Template: FinStep (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 24" — a 4-step financial sign-up wizard with floating labels, gradient accents, and progress tracking. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-24/index.html. Source slug: `colorlib-wizard-24`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with floating labels, gradient step indicators, date picker, and form validation.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family (form) | `'Open Sans', sans-serif` | Google Fonts / `css/opensans-font.css` |
| Font family (buttons) | `'Roboto', sans-serif` | Google Fonts / `css/roboto-font.css` |
| Card background | `#fff` (white) | `.wizard-v4-content` |
| Card width | `780px` | `.wizard-v4-content` |
| Card border-radius | `10px` | `.wizard-v4-content` |
| Card box-shadow | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)` | `.wizard-v4-content` |
| Heading text | `#333`, `32px`, `font-weight: 700` | `.wizard-header .heading` |
| Description text | `#666`, `18px`, `font-weight: 400` | `.wizard-header p` |
| Step icon inactive | `#ccc` bg, `60px` size, `50%` radius | `.step-icon` |
| Step icon active/done | Gradient: `rgb(242,113,33) → rgb(233,64,87) → rgb(138,35,135)` (orange → pink → purple) | `.current .step-icon`, `.done .step-icon` |
| Step icon active shadow | `0px 4px 10px 0px rgba(0, 0, 0, 0.25)` | `.current .step-icon` |
| Step connector inactive | `#e5e5e5`, `108px` width, `2px` height | `li .step-icon::before` |
| Step connector active | Same gradient as step icons | `.current .step-icon::before` |
| Step text inactive | `#999`, `18px`, `font-weight: 400` | `.step-text` |
| Step text active/done | `#333` | `.current .step-text`, `.done .step-text` |
| Content area | White bg, `5px` border-radius, shadow `0px 3px 10px 0px rgba(0, 0, 0, 0.15)` | `.form-register .content` |
| Content padding | `35px 55px 60px` | `.form-register .content` |
| Section heading | `#333`, `25px`, `font-weight: 700` | `.inner h3` |
| Input border-bottom | `2px solid #e5e5e5` | inputs |
| Input focus/valid border | `2px solid #6bc734` (green) | `.form-control:focus`, `.form-control:valid` |
| Floating label | `#666`, italic, `15px`, animates up on focus | `.label` |
| Input text | `#333`, `18px` | inputs |
| Select text | `#666`, `15px` | selects |
| Radio/checkbox text | `#666`, `15px` | `#radio`, `#checkbox` |
| Next button | Gradient: `rgb(242,113,33) → rgb(233,64,87) → rgb(138,35,135)`, `140px × 45px`, `3px` radius | `.actions ul li` (non-first) |
| Next button hover | Darker gradient: `rgb(212,103,23) → rgb(203,34,57) → rgb(128,25,105)` | `.actions ul li:hover` |
| Previous button | `#999` bg, `140px × 45px`, `3px` radius | `.actions ul li:first-child` |
| Previous button hover | `#666` bg | `.actions ul li:first-child:hover` |
| Button text | `#fff` | buttons |
| Button shadow | `0px 3px 10px 0px rgba(0, 0, 0, 0.15)` | `.actions ul li` |
| Page background | Full-screen background image (`images/wizard-v4.jpg`) | `.page-content` |

## Gherkin Requirements

### Feature: 4-Step Financial Sign-Up Wizard

#### Scenario: Page Load and Layout
  Given the user loads the FinStep wizard page
  Then a centered white card (780px, 10px border-radius) is displayed on a background image
  And the card has a drop shadow
  And the heading "Sign Up To Financial" is centered at the top
  And the description "Fill all form field to go next step" is shown below the heading
  And the Open Sans font family is used throughout the form

#### Scenario: Step Indicator Bar
  Given the wizard form is loaded
  Then a horizontal step indicator bar is displayed
  And four step circles are shown: About, Account, Ownership, Financing
  And step circles are 60px diameter with 50% border-radius
  And connecting lines (#e5e5e5, 2px) link the step circles
  And step 1 circle is highlighted with the orange-pink-purple gradient as active
  And steps 2-4 circles are gray (#ccc) as inactive

#### Scenario: Step 1 - About (Personal Information)
  Given step 1 is active
  Then the step icon shows an account/person icon
  And "About" text is visible below the step icon
  And section heading "Personal Information:" is displayed
  And fields are displayed: First Name, Last Name (side by side), Address Location (84.1% width), Zip Code, Phone Number (full width)
  And all inputs use the floating label pattern (label animates up on focus)
  And inputs have a bottom border (#e5e5e5) that turns green (#6bc734) on focus
  And a "Next" gradient button is shown at bottom-right
  And a "Previous" gray button is shown at bottom-left (hidden on step 1)

#### Scenario: Step 1 Validation
  Given the user is on step 1
  When the user clicks "Next" without filling required fields
  Then validation errors appear for First Name, Last Name, Address, Zip Code, and Phone Number
  And the form does not advance to step 2

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled all required fields on step 1
  When the user clicks "Next"
  Then step 2 "Account" is displayed
  And the step indicator updates: step 1 shows gradient (done), step 2 shows gradient (active)
  And the connecting line between step 1 and 2 turns gradient

#### Scenario: Step 2 - Account
  Given step 2 is active
  Then the step icon shows a lock icon
  And "Account" text is visible
  And section heading "Do you have an account?" is displayed
  And radio options are shown: "I already have an account" (checked), "I'm newbie"
  And fields are displayed: E-Mail, Password, Confirm Password
  And all inputs use the floating label pattern

#### Scenario: Step 2 Validation
  Given the user is on step 2
  When the user clicks "Next" without filling required fields
  Then validation errors appear for E-Mail, Password, and Confirm Password
  And the form does not advance

#### Scenario: Step 2 to Step 3 Navigation
  Given the user has filled required fields on step 2
  When the user clicks "Next"
  Then step 3 "Ownership" is displayed
  And the step indicator updates accordingly

#### Scenario: Step 3 - Ownership (More About Yourself)
  Given step 3 is active
  Then the step icon shows a receipt icon
  And "Ownership" text is visible
  And section heading "More About Yourself" is displayed
  And fields are displayed: First Name, Last Name (side by side), Position dropdown, Business Area dropdown
  And Date of Birth is shown as three dropdowns: Day, Month, Year (with "Date of Birth:" label)

#### Scenario: Step 3 Dropdowns
  Given step 3 is active
  Then Position dropdown options: Manager, Employee, Director
  And Business Area dropdown options: Marketing, Finance, IT Support
  And Day dropdown options: 16-19
  And Month dropdown options: Feb-May
  And Year dropdown options: 2013-2017

#### Scenario: Step 3 to Step 4 Navigation
  Given the user has completed step 3
  When the user clicks "Next"
  Then step 4 "Financing" is displayed
  And the step indicator updates: steps 1-3 show gradient (done), step 4 shows gradient (active)

#### Scenario: Step 4 - Financing Information
  Given step 4 is active
  Then the step icon shows a money icon
  And "Financing" text is visible
  And section heading "Financing Information" is displayed
  And a "Buy Inventory" dropdown is shown (Yes/No options)
  And a checkbox group "Do you have existing business financing?" with Yes/No options
  And sub-heading "Existing Balance" is shown
  And fields: Business name (full width), Current Balance (full width)

#### Scenario: Previous Button Navigation
  Given the user is on step 2, 3, or 4
  When the user clicks the "Previous" button (gray, left side)
  Then the form returns to the previous step
  And the step indicator updates accordingly
  And previously entered data is preserved

#### Scenario: Back Button on Step 1
  Given the user is on step 1
  Then the "Previous" button is hidden or disabled (opacity: 0)

#### Scenario: Floating Label Animation
  Given a form field with a floating label is displayed
  When the user focuses on the input
  Then the label animates upward (translateY(-31px))
  And the input border-bottom turns green (#6bc734)
  And a green underline animation scales in from left

#### Scenario: Responsive Layout (Mobile)
  Given the user views the wizard on a viewport ≤ 575px
  Then the card takes 90% width
  And form fields stack vertically (single column)
  And step icons shrink to 40px
  And step text font reduces to 12px
  And content padding reduces to 35px 30px 60px

#### Scenario: Responsive Layout (Tablet)
  Given the user views the wizard on a viewport ≤ 991px
  Then step indicator centers with space-around layout
  And connector lines between steps are hidden
  And step icons are centered without margin-right
