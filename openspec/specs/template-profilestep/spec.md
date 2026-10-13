# Template: Profilestep (User Profile Wizard)

## Purpose

Recreation of ColorLib's **Colorlib Wizard 9** — a three-step user profile
form wizard with a photographic background, centered white card, 2-column
form fields, step indicator, and a category-selection grid.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-9/
- **Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html
- **Category:** Bootstrap Wizard / Multi-step Form
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the original `css/style.css` at the preview URL above.

| Token               | Value                                  |
| ------------------- | -------------------------------------- |
| **Font family**     | Poppins (Regular, Medium, SemiBold) via Google Fonts |
| **Base font size**  | 14px                                   |
| **Body text color** | `#999`                                 |
| **Body background** | Full-screen photographic image (person lying in autumn leaves with blue grape hyacinths), `background-size: cover` |
| **Card background** | `#ffffff` (white), centered, fixed width |
| **Heading color**   | `#3377c0` (steel blue)                 |
| **Heading style**   | Poppins SemiBold, 35px, uppercase, letter-spacing 3px |
| **Input border**    | `1px solid #ccc`                       |
| **Input text**      | Poppins Medium, 15px, color `#999`     |
| **Input focus**     | border-color `#3377c0`                 |
| **Label color**     | `#333`                                 |
| **Button fill**     | background `#3377c0`, color `#fff`, uppercase, letter-spacing 1px |
| **Button hover**    | background `#3b87d9`                   |
| **Button outline**  | border `1px solid #3377c0`, color `#3377c0`, bg transparent |
| **Button outline hover** | border transparent, color `#fff`, bg `#3b87d9` |
| **Grid item label (inactive)** | background `#b3b3b3`, color `#fff`, vertical text (writing-mode: tb-rl) |
| **Grid item label (active)** | background `#3377c0` |
| **Step indicator**  | Poppins Medium, large number `#ccc`, suffix `/ 3` smaller |
| **Card dimensions** | 819px wide wrapper, padding 7px outer, wizard inner padding 64px 58px |
| **Form field height** | 42px                                  |
| **Grid layout**     | 3 columns, items 31.25% width          |

## Requirements

### Feature: Three-step user profile wizard

#### Scenario: Step 1 — User Profile form renders with all fields

- **GIVEN** the user opens the wizard
- **THEN** the heading "User Profile" is displayed in uppercase
- **AND** the step indicator shows "1/3"
- **AND** the following fields are visible in two columns:
      | Field            | Column |
      | Full Name        | Left   |
      | Education Level  | Right  |
      | Email ID         | Left   |
      | Phone Number     | Right  |
      | Specialization   | Left   |
      | Date of Birth    | Right  |
- **AND** each input has a left-aligned icon
- **AND** the "Date of Birth" field is a date picker

#### Scenario: Step 1 — Validation blocks Next when fields empty

- **GIVEN** the user opens the wizard
- **WHEN** the user clicks "Next"
- **THEN** validation helper text appears
- **AND** the user stays on step 1

#### Scenario: Step 1 — Next advances to step 2

- **GIVEN** the user fills all step-1 fields
- **WHEN** the user clicks "Next"
- **THEN** the heading changes to "Residential Address"
- **AND** the step indicator shows "2/3"

#### Scenario: Step 2 — Residential Address form renders

- **GIVEN** the user is on step 2
- **THEN** the heading "Residential Address" is displayed
- **AND** the following fields are visible:
      | Field              | Type     |
      | Country            | Select   |
      | Street Address     | Text     |
      | Apartment          | Text     |
      | Town / City        | Text     |
      | County             | Text     |
      | Postcode / Zip     | Password |
- **AND** the Country dropdown contains "United States", "United Kingdom", "Viet Nam"

#### Scenario: Step 2 — Previous returns to step 1

- **GIVEN** the user is on step 2
- **WHEN** the user clicks "Previous"
- **THEN** the heading changes to "User Profile"
- **AND** the step indicator shows "1/3"

#### Scenario: Step 2 — Next advances to step 3

- **GIVEN** the user fills all step-2 fields
- **WHEN** the user clicks "Next"
- **THEN** the heading changes to "What are you doing?"
- **AND** the step indicator shows "3/3"

#### Scenario: Step 3 — Category grid renders with 6 options

- **GIVEN** the user is on step 3
- **THEN** a 3-column grid displays 6 category cards:
      | Category    |
      | Programming |
      | Sports      |
      | Business    |
      | Tour Guide  |
      | Art-Design  |
      | Doctor      |
- **AND** each card has an image thumbnail and a vertical text label
- **AND** "Programming" is active (highlighted) by default

#### Scenario: Step 3 — Category selection toggles active state

- **GIVEN** the user is on step 3
- **WHEN** the user clicks "Sports"
- **THEN** "Sports" becomes the active card
- **AND** "Programming" is no longer active

#### Scenario: Step 3 — Previous returns to step 2

- **GIVEN** the user is on step 3
- **WHEN** the user clicks "Previous"
- **THEN** the heading changes to "Residential Address"
- **AND** the step indicator shows "2/3"

#### Scenario: Responsive — mobile layout

- **GIVEN** the viewport width is below 768px
- **THEN** the form fields stack into single columns
- **AND** the grid items resize to 2 columns
- **AND** the background image is hidden

## Verification checklist

- [ ] Poppins font family loaded (Regular, Medium, SemiBold)
- [ ] Step indicator shows current step / 3
- [ ] 3-step form: User Profile → Residential Address → Category Grid
- [ ] 2-column form layout on desktop, single column on mobile
- [ ] Input icons aligned left inside each field
- [ ] Date picker on "Date of Birth" field
- [ ] Country dropdown with 3 options
- [ ] Category grid: 3 columns, vertical text labels, active highlight
- [ ] Previous / Next navigation between steps
- [ ] Validation message when required fields empty
- [ ] Steel blue (#3377c0) brand color used consistently
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images from picsum.photos
