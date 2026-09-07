# Template: QuestWise (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 21" — a multi-step account registration and payment wizard form with progress tracking, validation, and confirmation summary. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html. Source slug: `colorlib-wizard-21`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with progress indicator, form validation (zod + react-hook-form), and confirmation summary table.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Raleway', sans-serif` | Google Fonts (`css/raleway-font.css`) |
| Page background | Full-page image (`images/wizard-v1.jpg` — landscape) | `.page-content` |
| Card background | `#fff` (white) | `.wizard-v1-content` |
| Card border-radius | `10px` | `.wizard-v1-content` |
| Card box-shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.wizard-v1-content` |
| Card max-width | `851px` | `.wizard-v1-content` |
| Heading color | `#333` (dark gray) | `.wizard-form .wizard-header h3` |
| Heading font-weight | `800` | `.wizard-form .wizard-header h3` |
| Heading font-size | `36px` | `.wizard-form .wizard-header h3` |
| Subheading color | `#666` | `.wizard-form .wizard-header p` |
| Subheading font-weight | `600` | `.wizard-form .wizard-header p` |
| Content area background | `#359bfa` (blue) | `.form-register .content` |
| Content area border-radius | `5px` | `.form-register .content` |
| Content area padding | `32px 115px 23px 75px` | `.form-register .content` |
| Step circle inactive bg | `#ccc` (light gray) | `.form-register .steps li a .step-icon` |
| Step circle active/done bg | `#6eba2a` (green) | `.form-register .steps li.current a .step-icon` |
| Step circle size | `50px × 50px` | `.form-register .steps li a .step-icon` |
| Step circle border-radius | `50%` (circle) | `.form-register .steps li a .step-icon` |
| Step circle icon color | `#fff` | `.form-register .steps li a .step-icon` |
| Step circle active shadow | `0px 5px 18px 0px rgba(0,0,0,0.2)` | `.form-register .steps li.current a .step-icon` |
| Step number color | `#666` | `.form-register .steps li a .step-number` |
| Step text color | `#333` | `.form-register .steps li a .step-text` |
| Step text font-weight | `600` | `.form-register .steps li a .step-text` |
| Step connector bg | `#e5e5e5` | `.form-register .steps li::before` |
| Step connector height | `6px` | `.form-register .steps li::before` |
| Label color | Inherits (white on blue bg) | `.inner .form-row .form-holder label` |
| Input border-radius | `5px` | `.inner .form-row .form-holder input` |
| Input background | `#fff` | `.inner .form-row .form-holder input` |
| Placeholder color | `#999` | `.inner .form-row .form-holder input::placeholder` |
| Action button bg | `#6eba2a` (green) | `.actions ul li` |
| Action button hover bg | `#5fa125` (darker green) | `.actions ul li:hover` |
| Action button shape | `50% border-radius` (circle) | `.actions ul li` |
| Action button size | `50px × 50px` | `.actions ul li` |
| Action button shadow | `0px 3px 15px 0px rgba(0,0,0,0.19)` | `.actions ul li` |
| Action button icon color | `#fff` | `.actions ul li a` |
| Previous button bg | `transparent` (no circle) | `.actions ul li:first-child` |
| Previous button text | `#666` | `.actions ul li:first-child a` |
| Confirmation section bg | `#2f8be0` (darker blue) | `.inner .form-row.table-responsive` |
| Confirmation section border-radius | `5px` | `.inner .form-row.table-responsive` |
| Confirmation label color | `rgba(255,255,255,0.6)` | `.inner .table-responsive tbody th` |
| Confirmation value color | `#fff` | `.inner .table-responsive tbody td` |
| Inner h3 color | `#fff` | `.inner h3` |

## Gherkin Requirements

### Feature: Multi-Step Account & Payment Wizard

#### Scenario: Step 1 — Account Information
  Given the wizard form is loaded
  When step 1 is displayed
  Then the heading "Account Infomation" is visible (note: original typo preserved)
  And the step indicator shows Step 1 as active (green circle)
  And the following fields are displayed:
    - Username (text input, required)
    - Email Address (email input, required, pattern validated)
    - Password (password input, required)
    - Confirm Password (password input, required)
  And fields are arranged in rows (full-width username row, full-width email row, side-by-side password row)
  And the content area has a blue background (#359bfa)
  And a green circular "Next" button is displayed at bottom-right
  And a hidden "Previous" link is at bottom-left (invisible on step 1)

#### Scenario: Step 1 Validation
  Given the user is on step 1
  When the user clicks "Next" without filling required fields
  Then validation errors appear for: Username, Email, Password, Confirm Password
  And the form does not advance to step 2

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled all required fields on step 1
  When the user clicks "Next"
  Then step 2 "Payment Infomation" is displayed
  And the step indicator shows Step 1 as done (green), Step 2 as active (green)

#### Scenario: Step 2 — Payment Information
  Given step 2 is displayed
  Then the heading "Payment Infomation" is visible
  And the following fields are displayed:
    - Card Type (select dropdown with options: Business Credit Cards, Limited Purpose Cards, Prepaid Cards, Charge Cards, Student Credit Cards)
    - Card Number (text input, placeholder "ex: 489050625008xxxx")
    - CVC (text input, placeholder "xxx")
    - Expiry Month (select dropdown with months: January–May)
    - Expiry Year (select dropdown with years: 2013–2018)
  And Card Number and CVC are on the same row
  And Expiry Month and Expiry Year are on the same row

#### Scenario: Step 2 Navigation Back
  Given the user is on step 2
  When the user clicks "Previous"
  Then step 1 is displayed again with previously entered values preserved

#### Scenario: Step 2 to Step 3 Navigation
  Given the user is on step 2
  When the user clicks "Next"
  Then step 3 "Confirm Your Details" is displayed

#### Scenario: Step 3 — Confirmation Summary
  Given step 3 is displayed
  Then the heading "Comfirm Details" is visible (note: original typo)
  And a summary table is shown on a darker blue (#2f8be0) background
  And the table displays all entered values from steps 1 and 2
  And table labels are in lighter color (rgba(255,255,255,0.6))
  And table values are in white (#fff)
  And a green "Next"/"Submit" button is displayed

#### Scenario: Progress Indicator
  Given the wizard form is loaded
  Then a horizontal progress bar is displayed above the form
  And three step circles are shown (1, 2, 3)
  And each circle contains an icon (account, card, receipt)
  And step circles are connected by gray lines (#e5e5e5)
  And the current step circle has a green background (#6eba2a) with shadow
  And completed step circles also show green background

#### Scenario: Responsive Layout
  Given the user resizes the browser to mobile width (< 575px)
  Then the wizard card is centered and full-width
  And form fields stack vertically
  And the step progress bar adapts to smaller spacing

## Verification Checklist

- [ ] Card renders centered on a full-page background image
- [ ] 3-step horizontal progress bar with circular icons (account, card, receipt)
- [ ] Active step circle is green (#6eba2a) with shadow
- [ ] Step 1: Username, Email, Password, Confirm Password — all required
- [ ] Step 2: Card Type (select), Card Number, CVC, Expiry Month/Year (selects)
- [ ] Step 3: Confirmation summary table on blue (#2f8be0) background
- [ ] Green circular Next button (#6eba2a, 50px circle)
- [ ] Previous link (text only, no circle, #666 color)
- [ ] Validation prevents advancing with empty required fields
- [ ] Previous button preserves entered values
- [ ] Raleway Google Font loaded
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: stacked fields on mobile
- [ ] No ColorLib references in app code (provenance only in spec)
