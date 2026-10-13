# Template: Runemark (Bootstrap Wizards — Multi-step Registration)

## Purpose

Recreation of ColorLib "Colorlib Wizard 21" — a multi-step registration/payment
wizard form with progress tracking. Source slug: `colorlib-wizard-21`.
Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
ColorLib page: https://colorlib.com/wp/template/colorlib-wizard-21/

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Font family | `Raleway`, sans-serif | Global body + inputs |
| Card background | `#ffffff` | `.wizard-v1-content` |
| Card border-radius | `10px` | `.wizard-v1-content` |
| Card shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.wizard-v1-content` |
| Content area background | `#359bfa` (bright blue) | `.form-register .content` |
| Input background | `#2f8be0` (darker blue) | `.form-holder input/select` |
| Content border-radius | `5px` | `.form-register .content` |
| Active step icon | `#6eba2a` (green) | `.steps li.current/done a .step-icon` |
| Step icon inactive | `#ccc` (light gray) | `.steps li a .step-icon` |
| Step icon size | `50px × 50px`, `border-radius: 50%` | Circular step indicators |
| Step icon shadow | `0px 5px 18px 0px rgba(0,0,0,0.2)` | Active step only |
| Progress bar inactive | `#e5e5e5` | `.steps li::before` (168px wide, 6px tall) |
| Next/Submit button | `#6eba2a` (green), `border-radius: 50%` | `.actions ul li` (50px × 50px circle) |
| Button hover | `#5fa125` | `.actions ul li:hover` |
| Button shadow | `0px 3px 15px 0px rgba(0,0,0,0.19)` | All action buttons |
| Back button | transparent, no shadow | `.actions ul li:first-child` |
| Heading color | `#333` | `.wizard-header h3` |
| Heading font-size | `36px`, weight `800` | `.wizard-header h3` |
| Subtext color | `#666` | `.wizard-header p` |
| Label color | `#fff` | `.form-holder label` (on blue bg) |
| Input text color | `#fff` | `.form-holder input` |
| Placeholder color | `rgba(255,255,255,0.6)` | `.form-holder input::placeholder` |
| Input border-radius | `5px` | `.form-holder input/select` |
| Input padding | `13px 25px` | `.form-holder input/select` |
| Confirm table background | `#2f8be0` | `.table-responsive` |
| Table label color | `rgba(255,255,255,0.6)` | `.table-responsive tbody th` |
| Table value color | `#fff` | `.table-responsive tbody td` |
| Full-page background | Image `images/wizard-v1.jpg` (cover, centered) | `.page-content` |
| Page layout | Flexbox centered vertically | `.page-content` |
| Card width | `851px` (desktop) | `.wizard-v1-content` |
| Card vertical margin | `162px 0` | `.wizard-v1-content` |

## Section Structure (3-step wizard)

### Step 1 — Account Information

Icon: `zmdi-account`. Fields:
- Username* (text input, required)
- Email Address* (email input, required, pattern validated)
- Password* (password input, required)
- Confirm Password* (password input, required)

### Step 2 — Payment Information

Icon: `zmdi-card`. Fields:
- Card Type (select: Business Credit Cards, Limited Purpose Cards,
  Prepaid Cards, Charge Cards, Student Credit Cards)
- Card Number (text input, placeholder "ex: 489050625008xxxx")
- CVC (text input, placeholder "xxx")
- Expiry Month (select: January–May)
- Expiry Year (select: 2013–2018)

### Step 3 — Confirm Details

Icon: `zmdi-receipt`. Read-only summary table showing all entered values:
Username, Email Address, Card Type, Card Number, CVC, Expiry Month,
Expiry Year.

### Navigation

- Progress bar at top with 3 circular step icons connected by lines
- Green circular Next/Submit button (bottom-right)
- Back button (bottom-left, plain text, no circle)
- Disabled/hidden back on step 1

## Requirements

### Feature: Runemark template behaviour

Feature: Multi-step Registration Wizard

Background:
- **GIVEN** the user opens the Runemark wizard page
- **AND** the full-page background image is displayed

#### Scenario: Step 1 renders correctly

- **THEN** the card is centered on the page with white background
- **AND** the progress bar shows 3 step indicators
- **AND** step 1 icon is highlighted in green
- **AND** "Step 1" and "Account Information" text are visible
- **AND** the username, email, password, confirm-password fields are shown
- **AND** a green circular next button is visible

#### Scenario: Required field validation on step 1

- **GIVEN** the user is on step 1
- **WHEN** the user clicks next without filling any fields
- **THEN** the required field validation errors are shown

#### Scenario: Advance to step 2

- **GIVEN** the user fills in valid username, email, password, confirm password
- **WHEN** the user clicks the next button
- **THEN** step 2 "Payment Information" is displayed
- **AND** the progress bar updates with step 2 active

#### Scenario: Step 2 renders correctly

- **GIVEN** the user is on step 2
- **THEN** card type, card number, CVC, expiry month, expiry year fields are shown
- **AND** a green circular next/submit button is visible
- **AND** a back button is visible

#### Scenario: Navigate back from step 2

- **GIVEN** the user is on step 2
- **WHEN** the user clicks the back button
- **THEN** step 1 "Account Information" is displayed

#### Scenario: Advance to step 3

- **GIVEN** the user is on step 2 with valid data
- **WHEN** the user clicks the next button
- **THEN** step 3 "Confirm Your Details" is displayed
- **AND** a summary table shows all entered values

#### Scenario: Confirm details display

- **GIVEN** the user is on step 3
- **THEN** the table shows username, email, card type, card number, CVC, expiry

#### Scenario: Step indicator visual states

- **GIVEN** the user progresses through steps
- **THEN** completed steps show green icons
- **AND** the current step shows a green icon with shadow
- **AND** future steps show gray icons
- **AND** connecting progress lines are visible between icons

#### Scenario: Responsive layout

- **GIVEN** the browser width is below 575px
- **THEN** the form fields stack vertically
- **AND** the card fills the viewport width
- **AND** step indicators resize appropriately

#### Scenario: Form input styling

- **THEN** all inputs have white text on blue background
- **AND** inputs have 5px border radius
- **AND** placeholders appear in semi-transparent white
- **AND** the card has a rounded shadow

## Verification Checklist

- [ ] Card renders centered with white background, rounded corners, shadow
- [ ] Full-page background image is displayed (use picsum.photos placeholder)
- [ ] Raleway font loaded from Google Fonts
- [ ] 3-step progress bar with circular icons
- [ ] Active step icon is green (#6eba2a) with shadow
- [ ] Inactive step icons are gray (#ccc)
- [ ] Progress connecting lines render between step icons
- [ ] Step 1: Account Info fields (username, email, password, confirm)
- [ ] Step 2: Payment fields (card type select, card number, CVC, month, year)
- [ ] Step 3: Summary table with all entered values
- [ ] Green circular Next button (50px, #6eba2a)
- [ ] Back button (plain text, no circle) on steps 2-3
- [ ] Required field validation on step 1
- [ ] Form fields stack vertically on mobile
- [ ] All field labels are white on blue background
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code (only in spec)
