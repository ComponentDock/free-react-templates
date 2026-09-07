---
name: stepnova
description: >
  Multi-step payment account creation wizard with 3 sections (Personal
  Information, Bank Information, Confirm Details). Recreation of ColorLib
  "Colorlib Wizard 25" (https://colorlib.com/wp/template/colorlib-wizard-25/).
---

## Purpose

Stepnova is a multi-step wizard form for account registration with personal and
banking details. It provides a clean, guided UX with three steps: Personal
Information, Bank Information, and a Confirmation Summary. The design features a
centered card on a full-viewport dark navy background, muted purple card body,
white step header, green circular action buttons, and a read-only confirmation
table.

- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-25/
- **Live preview URL (verified):** `https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html`
  (HTTP 200; the naive `https://preview.colorlib.com/theme/colorlib-wizard-25/` returns 404.
  The entire 30-member wizard family lives under `colorlib.com/etc/bwiz/`.)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (from live stylesheet `css/style.css`, verified via fetch)

| Token | Value | Use |
| --- | --- | --- |
| Page bg | `#383a4f` (dark navy/slate) | `.page-content` flex center, full viewport |
| Wizard card bg | `#525575` (muted purple/slate) | `.wizard-form` container, 851px wide |
| Card shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.wizard-v5-content` |
| Card radius | `10px` | `.wizard-v5-content` and `.wizard-form` |
| Steps header bg | `#fff` (white) | `.steps` block, top border-radius 10px |
| Step icon pending | `rgba(0,0,0,0.1)` bg, `#666` text | `.step-icon`, 40x40px circle |
| Step icon current | `rgba(37,180,91,0.2)` bg, `#25b45b` border + text | `.current .step-icon` |
| Step icon done | `#25b45b` solid bg, `#fff` text | `.done .step-icon` |
| Step text | `#333` | `.step-text` |
| Brand green | `#25b45b` | Action buttons, current step, hover `#219c50` |
| Form labels | `#fff` | `.form-holder label` |
| Input bg | `#fff` | `.form-holder input, select` |
| Input text | `#000` | `.form-holder input` |
| Input radius | `3px` | `.form-holder input, select` |
| Input placeholder (default) | `#999` | first/last name fields |
| Input placeholder (dark) | `#333` | address, phone fields |
| Input placeholder (mid) | `#666` | bank fields |
| Radio label | `#fff` | `#radio` |
| Select text | `#666` | `.form-holder select` |
| Confirm table bg | `rgba(255,255,255,0.1)` | `.table-responsive`, 5px radius |
| Confirm table header | `#ccc`, 16px, weight 400 | `tbody th` |
| Confirm table data | `#fff`, 16px, weight 600 | `tbody td` |
| Confirm table border | `rgba(255,255,255,0.2)` | row dividers |
| Confirm heading | `#fff`, 25px, weight 600 | `.inner h3` |
| Action buttons | 50x50px circles, `#25b45b` bg, white icons | `.actions ul li` |
| Button hover | `#219c50` | `.actions ul li:hover` |
| Back button | `opacity: 0` on step 1 (hidden) | `.actions ul li:first-child` |
| Font | Nunito (Google Fonts), 18px base | `.wizard-v5-content` |
| Card margin | `160px 0 115px` (desktop) | `.wizard-v5-content` |
| Content padding | `45px` horizontal | `.actions`, `.inner h3` |
| Form row padding | `10px 220px 5px 45px` (step 0/1 content) | `#form-total-p-0`, `#form-total-p-1` |

## Requirements

### Requirement: Multi-step wizard form

Users SHALL be guided through three sequential steps to complete registration.

#### Scenario: Renders step 1 by default

- **WHEN** the page loads
- **THEN** the user sees the Personal Information section (First Name, Last Name, Gender, Address, Phone, Zip, DOB)
- **AND** the step indicator shows step 1 as current (green border)

#### Scenario: Navigate forward through steps

- **WHEN** the user clicks the Next button on step 1
- **THEN** the Bank Information section is displayed
- **WHEN** the user clicks the Next button on step 2
- **THEN** the Confirm Details summary table is displayed

#### Scenario: Navigate backward through steps

- **WHEN** the user is on step 2 and clicks Back
- **THEN** the Personal Information section is displayed again
- **WHEN** the user is on step 3 and clicks Back
- **THEN** the Bank Information section is displayed again

#### Scenario: All steps are enabled (no validation gating)

- **WHEN** the user is on any step and clicks Next
- **THEN** the next step is always shown (no field validation blocks navigation)

### Requirement: Step indicator shows correct state

The step indicator SHALL visually distinguish current, completed, and pending steps.

#### Scenario: Step indicator states

- **WHEN** the user is on step 2
- **THEN** step 1 shows as completed (solid green circle with white check)
- **AND** step 2 shows as current (green border, light green background, green text)
- **AND** step 3 shows as pending (gray circle, gray text)

### Requirement: Personal information form (step 1)

Step 1 SHALL collect first name, last name, gender, address, phone, zip code, and date of birth.

#### Scenario: Two-column layout for name fields

- **WHEN** step 1 renders
- **THEN** First Name and Last Name appear side by side (50% width each)

#### Scenario: Gender radio buttons

- **WHEN** step 1 renders
- **THEN** Male and Female radio buttons are shown with Male selected by default

#### Scenario: Address field is full width with icon

- **WHEN** step 1 renders
- **THEN** Address Location spans full width with a pin icon on the right

#### Scenario: Phone and Zip side by side

- **WHEN** step 1 renders
- **THEN** Phone Number (60% width) and Zip Code (40% width) appear side by side

#### Scenario: Date of birth selects

- **WHEN** step 1 renders
- **THEN** three select dropdowns (day, month, year) appear in a row with "Date of Birth:" label

### Requirement: Bank information form (step 2)

Step 2 SHALL collect bank name, branch, email, account name, account number, and expiry date.

#### Scenario: Bank and Branch fields side by side

- **WHEN** step 2 renders
- **THEN** Bank Name (with search icon) and Branch Name appear side by side

#### Scenario: Email address field

- **WHEN** step 2 renders
- **THEN** Email Address is a full-width field with email input type

#### Scenario: Account fields

- **WHEN** step 2 renders
- **THEN** Account Name and Account Number (with card icon, left-padded) are full-width fields

#### Scenario: Expiry date selects

- **WHEN** step 2 renders
- **THEN** three select dropdowns (day, month, year) appear in a row with "Expiry Date:" label

### Requirement: Confirmation summary (step 3)

Step 3 SHALL display all entered data in a read-only summary table.

#### Scenario: Summary displays all values

- **WHEN** the user reaches step 3
- **THEN** a table shows: Full Name, Email Address, Phone Number, Address Location, Gender, Account Name, Account Number
- **AND** each row has a label (th, light gray) and value (td, white bold)

#### Scenario: Summary heading

- **WHEN** step 3 renders
- **THEN** the heading "Confirm Details" is shown above the table

### Requirement: Back button visibility

#### Scenario: Back button hidden on first step

- **WHEN** the user is on step 1
- **THEN** the Back button is not visible (opacity: 0)

#### Scenario: Back button visible after step 1

- **WHEN** the user navigates to step 2 or 3
- **THEN** the Back button becomes visible

### Requirement: Responsive layout

The wizard SHALL be responsive and usable on mobile devices.

#### Scenario: Mobile layout (≤575px)

- **WHEN** the viewport is narrow (≤575px)
- **THEN** form fields stack vertically
- **AND** selects go full width

#### Scenario: Tablet layout (≤1199px)

- **WHEN** the viewport is ≤1199px
- **THEN** content padding reduces to 30px horizontal

### Requirement: Fade transition between steps

#### Scenario: Smooth step transition

- **WHEN** the user navigates between steps
- **THEN** the transition uses a fade effect over 500ms

### Requirement: Footer with Component Dock link

The footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer branding

- **WHEN** the page renders
- **THEN** the footer contains a link to Component Dock
- **AND** the link opens in a new tab

## Verification checklist

- [ ] Wizard renders 3 sections (Personal, Bank, Confirm)
- [ ] Step indicator: 3 circles with correct current/done/pending states
- [ ] Step 1: First Name + Last Name side by side, Gender radios, Address full-width with pin icon, Phone + Zip side by side, DOB selects
- [ ] Step 2: Bank Name with search icon + Branch side by side, Email full-width, Account Name full-width, Account Number with card icon full-width, Expiry Date selects
- [ ] Step 3: Confirm heading, read-only table with all 7 rows
- [ ] Back button: hidden on step 1, visible on steps 2-3
- [ ] All steps enabled (no validation gating)
- [ ] Fade transition 500ms between steps
- [ ] Responsive: ≤575px stacked, ≤1199px reduced padding
- [ ] Dark navy page bg `#383a4f`, purple card `#525575`, green `#25b45b` buttons
- [ ] Nunito font via Google Fonts
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` = `stepnova.free.componentdock.com`
- [ ] `package.json` `"homepage"` = `https://stepnova.free.componentdock.com`
