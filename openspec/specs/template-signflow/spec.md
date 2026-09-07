# Template: SignFlow (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 21" — a multi-step account registration wizard with payment details and confirmation. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html. Source slug: `colorlib-wizard-21`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with step indicator, form validation, and confirmation summary.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Raleway', sans-serif` | Google Fonts / `css/raleway-font.css` |
| Card background | `#fff` (white) | `.wizard-v1-content` |
| Card border-radius | `10px` | `.wizard-v1-content` |
| Card box-shadow | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)` | `.wizard-v1-content` |
| Form content area bg | `#359bfa` (bright blue) | `.form-register .content` |
| Content border-radius | `5px` | `.form-register .content` |
| Input background | `#2f8be0` (darker blue) | `.inner .form-row .form-holder input` |
| Input border-radius | `5px` | inputs/selects |
| Input text color | `#fff` (white) | inputs |
| Input placeholder | `rgba(255,255,255,0.6)` | `input::placeholder` |
| Label text color | `#fff` (white) | labels |
| Step icon circle inactive | `#ccc` bg, `50%` radius, `50px` size | `.step-icon` |
| Step icon circle active/done | `#6eba2a` (green) bg | `.current .step-icon`, `.done .step-icon` |
| Step icon active shadow | `0px 5px 18px 0px rgba(0, 0, 0, 0.2)` | `.current .step-icon` |
| Step number text | `#666` | `.step-number` |
| Step text label | `#333`, `font-weight: 600` | `.step-text` |
| Step connector line | `#e5e5e5` bg, `6px` height | `li::before` |
| Heading text | `#333`, `font-size: 36px`, `font-weight: 800` | `.wizard-header h3` |
| Description text | `#666`, `font-size: 16px` | `.wizard-header p` |
| Next button bg | `#6eba2a` (green) | `.actions ul li` (non-first) |
| Next button hover | `#5fa125` | `.actions ul li:hover` |
| Next button shape | `50%` border-radius (circular), `50px` size | `.actions ul li` |
| Next button shadow | `0px 3px 15px 0px rgba(0, 0, 0, 0.19)` | `.actions ul li` |
| Back button | transparent bg, no shadow, `#666` text | `.actions ul li:first-child` |
| Table header text | `rgba(255,255,255,0.6)` | `.table-responsive tbody th` |
| Table data text | `#fff` | `.table-responsive tbody td` |
| Confirm section bg | `#2f8be0` (same as inputs) | `.table-responsive` |
| Page background | Full-screen background image (`images/wizard-v1.jpg`) | `.page-content` |
| Select arrow icon | Custom image (`images/wizard_v2_icon.png`) | selects |

## Gherkin Requirements

### Feature: Multi-Step Account Registration Wizard

#### Scenario: Page Load and Layout
  Given the user loads the SignFlow wizard page
  Then a centered white card is displayed on a background image
  And the card has rounded corners (10px) and a drop shadow
  And the Raleway font family is used throughout

#### Scenario: Step Indicator Bar
  Given the wizard form is loaded
  Then a horizontal step indicator bar is displayed above the form
  And three step circles are shown (Step 1, Step 2, Step 3)
  And connecting lines (#e5e5e5) link the step circles
  And step 1 circle is highlighted green (#6eba2a) as active
  And step 2 and step 3 circles are gray (#ccc) as inactive

#### Scenario: Step 1 - Account Information
  Given step 1 is active
  Then the step icon shows an account/person icon
  And "Step 1" label and "Account Infomation" text are visible
  And the form content area has a blue (#359bfa) background
  And fields are displayed: Username*, Email Address*, Password*, Confirm Password*
  And all inputs have a darker blue (#2f8be0) background with white text
  And a "Next" circular green button is shown at bottom-right
  And a "Previous" text link is shown at bottom-left

#### Scenario: Step 1 Validation
  Given the user is on step 1
  When the user clicks "Next" without filling required fields
  Then validation errors appear for Username, Email, Password, and Confirm Password
  And the form does not advance to step 2

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled all required fields on step 1
  When the user clicks "Next"
  Then step 2 "Payment Infomation" is displayed
  And the step indicator updates: step 1 shows green (done), step 2 shows green (active)
  And the "Previous" button is now visible

#### Scenario: Step 2 - Payment Information
  Given step 2 is active
  Then the step icon shows a credit card icon
  And "Step 2" label and "Payment Infomation" text are visible
  And fields are displayed: Card Type (dropdown), Card Number*, CVC*, Expiry Month (dropdown), Expiry Year (dropdown)
  And Card Type dropdown options: Business Credit Cards, Limited Purpose Cards, Prepaid Cards, Charge Cards, Student Credit Cards
  And Expiry Month dropdown options: January through May
  And Expiry Year dropdown options: 2013 through 2018
  And a "Next" circular green button is shown at bottom-right

#### Scenario: Step 2 Validation
  Given the user is on step 2
  When the user clicks "Next" without filling required fields
  Then validation errors appear for Card Number and CVC
  And the form does not advance to step 3

#### Scenario: Step 2 to Step 3 Navigation
  Given the user has filled required fields on step 2
  When the user clicks "Next"
  Then step 3 "Confirm Your Details" is displayed
  And the step indicator updates: steps 1 and 2 show green (done), step 3 shows green (active)

#### Scenario: Step 3 - Confirmation Summary
  Given step 3 is active
  Then the step icon shows a receipt icon
  And "Step 3" label and "Confirm Your Details" text are visible
  And a heading "Comfirm Details" is shown
  And a summary table displays all entered data in a blue (#2f8be0) background panel
  And table rows show: Username, Email Address, Card Type, Card Number, CVC, Expiry Month, Expiry Year
  And labels are in muted white (rgba(255,255,255,0.6)) and values are in white (#fff)

#### Scenario: Previous Button Navigation
  Given the user is on step 2 or step 3
  When the user clicks the "Previous" text link
  Then the form returns to the previous step
  And the step indicator updates accordingly
  And previously entered data is preserved in the form fields

#### Scenario: Back Button Behavior on Step 1
  Given the user is on step 1
  Then the "Previous" button is hidden or disabled

#### Scenario: Responsive Layout
  Given the user views the wizard on a viewport ≤ 575px
  Then the card takes full width with 40px top/bottom padding
  And form fields stack vertically (single column)
  And the step connector lines shrink
  And the confirmation table rows stack vertically

#### Scenario: Form Completes Successfully
  Given all three steps are completed
  When the user views the confirmation on step 3
  Then all entered data is correctly displayed in the summary table
  And the user can review before final submission
