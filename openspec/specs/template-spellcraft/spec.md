# Template: SpellCraft (Account & Payment Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 21" — a 3-step account registration and payment wizard form with progress tracking and confirmation summary. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html. Source slug: `colorlib-wizard-21`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step wizard with horizontal progress indicator, form validation, credit card inputs, and a confirmation table.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Raleway', sans-serif` | Google Fonts (raleway-font.css) |
| Card background | `#fff` (white) | `.wizard-v1-content` |
| Card border-radius | `10px` | `.wizard-v1-content` |
| Card box-shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.wizard-v1-content` |
| Content area background | `#359bfa` (bright blue) | `.form-register .content` |
| Content area border-radius | `5px` | `.form-register .content` |
| Input background | `#2f8be0` (slightly darker blue) | `.form-holder input, select` |
| Input border-radius | `5px` | Inputs |
| Input text color | `#fff` (white) | `.form-holder input` |
| Placeholder color | `rgba(255,255,255,0.6)` | `::placeholder` |
| Step icon inactive | `#ccc` bg, `50%` radius, `50x50px` | `.step-icon` |
| Step icon active/done | `#6eba2a` (green) | `.current .step-icon, .done .step-icon` |
| Step icon active shadow | `0px 5px 18px 0px rgba(0,0,0,0.2)` | `.current .step-icon` |
| Next/Back button bg | `#6eba2a` (green), `50%` radius, `50x50px` | `.actions ul li` |
| Button hover | `#5fa125` (darker green) | `.actions ul li:hover` |
| Button box-shadow | `0px 3px 15px 0px rgba(0,0,0,0.19)` | `.actions ul li` |
| Heading text | `#333` | `.wizard-header h3` |
| Step number text | `#666` | `.step-number` |
| Step text | `#333`, font-weight 600 | `.step-text` |
| Label text | `#fff`, font-weight 500 | `.form-holder label` |
| Confirmation table bg | `#2f8be0` | `.table-responsive` |
| Table label text | `rgba(255,255,255,0.6)` | `tbody th` |
| Table value text | `#fff` | `tbody td` |
| Progress connector | `#e5e5e5`, `6px` height | `li::before` |
| Full-page background | `url('images/wizard-v1.jpg')`, cover | `.page-content` |

## Gherkin Requirements

### Feature: Multi-Step Account & Payment Wizard

#### Scenario: Page Load and Layout
  Given the user opens the SpellCraft wizard page
  Then a full-page background image is displayed
  And a centered white card (border-radius 10px, shadow) is visible
  And the card contains a horizontal progress indicator at the top
  And 3 step circles are shown (Account, Payment, Confirm)
  And step 1 is highlighted green (active)

#### Scenario: Step 1 — Account Information
  Given step 1 is active
  Then the heading shows "Step 1" and "Account Information"
  And an account icon is displayed in the step circle
  And fields are displayed: Username, Email Address, Password, Confirm Password
  And Password and Confirm Password are side-by-side in the same row
  And Username and Email are full-width
  And all input backgrounds are #2f8be0 with white text
  And placeholder text is semi-transparent white

#### Scenario: Step 1 Validation
  Given the user is on step 1
  When the user clicks "Next" without filling required fields
  Then validation errors appear for Username, Email, Password, Confirm Password
  And the form does not advance to step 2

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled all required fields on step 1
  When the user clicks the "Next" circular green button
  Then step 2 "Payment Information" is displayed
  And the progress indicator updates: step 1 shows done (green), step 2 is active (green)
  And a "Previous" text link appears to go back

#### Scenario: Step 2 — Payment Information
  Given step 2 is active
  Then the heading shows "Step 2" and "Payment Information"
  And a payment card icon is displayed in the step circle
  And a "Card Type" dropdown is shown with options: Business Credit Cards, Limited Purpose Cards, Prepaid Cards, Charge Cards, Student Credit Cards
  And a "Card Number" input (full-width) and "CVC" input (narrow) are side-by-side
  And "Expiry Month" dropdown and "Expiry Year" dropdown are side-by-side

#### Scenario: Step 2 to Step 3 Navigation
  Given the user has selected a card type
  When the user clicks the "Next" button
  Then step 3 "Confirm Your Details" is displayed

#### Scenario: Step 3 — Confirmation Summary
  Given step 3 is active
  Then the heading shows "Step 3" and "Confirm Your Details"
  And a receipt icon is displayed in the step circle
  And a "Confirm Details" subheading is shown
  And a summary table displays all entered values: Username, Email, Card Type, Card Number, CVC, Expiry Month, Expiry Year
  And table labels are semi-transparent white, values are solid white
  And the table background is #2f8be0

#### Scenario: Previous Navigation
  Given the user is on step 2 or step 3
  When the user clicks "Previous"
  Then the form returns to the previous step
  And the progress indicator updates accordingly

#### Scenario: Progress Indicator Behavior
  Given the wizard is loaded
  When the user advances through steps
  Then completed steps show green circles with the step icon
  And the current step shows a green circle with shadow
  And inactive steps show gray (#ccc) circles
  And connecting lines (#e5e5e5) appear between step circles

#### Scenario: Responsive Layout
  Given the form is displayed on mobile (max-width 575px)
  Then form rows stack vertically
  And the card padding adjusts
  And the table becomes scrollable
  And all form fields remain accessible

## Verification Checklist

- [ ] 3-step wizard form with horizontal progress indicator
- [ ] Step 1: Account Info (Username, Email, Password, Confirm Password)
- [ ] Step 2: Payment Info (Card Type dropdown, Card Number, CVC, Expiry Month/Year)
- [ ] Step 3: Confirmation table with all entered values
- [ ] Next/Previous navigation between steps
- [ ] Form validation on required fields (step 1)
- [ ] Progress indicator updates (active green #6eba2a, inactive gray #ccc)
- [ ] Green circular next/previous buttons with hover effect
- [ ] Blue content area (#359bfa) with blue inputs (#2f8be0)
- [ ] White card on full-page background image
- [ ] Font: Raleway (Google Fonts)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
