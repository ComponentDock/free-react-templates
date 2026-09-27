# Template: Reglink (Multi-Step Registration Wizard)

## Purpose

Recreation of **Colorlib Regform 27** — a 3-step wizard registration form with personal info, bank account connection, and financial goals selection. Features a dark sidebar with step indicators and a gradient background.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-27/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-27/ (design extracted from downloaded zip archive)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-27.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from zip CSS)

### Colors

| Token              | Value                | Usage                                                 |
| ------------------ | -------------------- | ----------------------------------------------------- |
| `--gradient-start` | `rgb(116, 235, 213)` | Page background gradient start (teal)                 |
| `--gradient-end`   | `rgb(63, 43, 150)`   | Page background gradient end (purple)                 |
| `--sidebar-bg`     | `#3e4061`            | Steps sidebar background (dark navy)                  |
| `--card-bg`        | `#ffffff`            | Form card and content background                      |
| `--step-active`    | `#4fab40`            | Active step icon, plan selection, nav buttons (green) |
| `--step-inactive`  | `#cccccc`            | Inactive step icon background                         |
| `--step-hover`     | `#36782c`            | Nav button hover (darker green)                       |
| `--text-heading`   | `#333333`            | Heading, input text                                   |
| `--text-body`      | `#666666`            | Body text, descriptions                               |
| `--text-muted`     | `#999999`            | Legend labels                                         |
| `--border-input`   | `#e5e5e5`            | Fieldset borders, select borders, bank grid borders   |
| `--plan-inactive`  | `#999999`            | Plan icon background (inactive)                       |

### Typography

| Token        | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| Font family  | `Open Sans` (Google Fonts — Regular 400, SemiBold 600, Bold 700) |
| Heading size | 22px, bold                                                       |
| Body size    | 14px, semibold                                                   |
| Step text    | 15px, semibold                                                   |
| Legend size  | 11px, bold                                                       |
| Plan title   | 18px, bold                                                       |

### Layout

| Token           | Value                                                                                 |
| --------------- | ------------------------------------------------------------------------------------- |
| Page            | Full viewport, gradient background, flex centered                                     |
| Card            | 820px wide, white, `border-radius: 10px`, `box-shadow: 0px 8px 20px rgba(0,0,0,0.15)` |
| Sidebar         | 280px wide, dark navy bg, left side                                                   |
| Content area    | 540px wide, white bg, right side                                                      |
| Content padding | 50px horizontal                                                                       |
| Wizard header   | 37px top, 30px sides, 13px bottom                                                     |
| Form row        | Flex with 10px gaps                                                                   |
| Fieldset        | 2px solid #e5e5e5, 4px radius, 0-20px horizontal padding                              |
| Input           | No border (inside fieldset), 5px top / 13px bottom padding                            |
| Bank grid       | 146.5px × 130px labels, 3 columns × 2 rows                                            |
| Plan icon       | 65px circle, #999 bg                                                                  |
| Nav button      | 50px circle, green bg                                                                 |

### Step Indicators

| State    | Icon BG | Text Color | Shadow                        |
| -------- | ------- | ---------- | ----------------------------- |
| Inactive | #ccc    | #ccc       | none                          |
| Current  | #4fab40 | #fff       | 0px 3px 10px rgba(0,0,0,0.25) |
| Done     | #4fab40 | #fff       | 0px 3px 10px rgba(0,0,0,0.25) |

### Breakpoints

| Breakpoint | Behavior                                                                  |
| ---------- | ------------------------------------------------------------------------- |
| > 1199px   | Card has 145px vertical margin                                            |
| 992–1199px | Card has 180px vertical margin + 20px horizontal                          |
| 768–991px  | Sidebar full-width, steps horizontal, content below, no shadow on content |
| 576–767px  | Bank labels shrink to 120px, date selects shrink                          |
| < 576px    | Everything stacks vertically, padding reduces                             |

## Structure (section order)

1. **Page wrapper** — gradient background (teal→purple), flex centered
2. **Form card** — white, rounded, shadow, flex layout
   - **Step sidebar** (left, 280px, dark navy)
     - Step 1: "01" icon + "Personal Information" text
     - Step 2: "02" icon + "Connect Bank Account" text
     - Step 3: "03" icon + "Set Financial Goals" text
   - **Content area** (right, 540px, white)
     - **Step 1: Personal Information**
       - Heading + description
       - First Name + Last Name (side by side, fieldset borders)
       - Email (full width, fieldset border)
       - Phone Number (full width, fieldset border)
       - Birth Date (3 selects: MM, DD, YYYY)
       - SSN (full width, input border)
     - **Step 2: Connect Bank Account**
       - Heading + description
       - "Find Your Bank" search input
       - 6 bank logos in 3×2 grid (radio buttons)
     - **Step 3: Set Financial Goals**
       - Heading + description
       - 3 plan options (circular icon + title + description)
     - **Navigation bar** — Back Step + Next/Finish buttons (green circles)

## Requirements

### Requirement: Page renders with gradient background and white card

Users SHALL see a teal-to-purple gradient background with a centered white form card.

#### Scenario: Page loads with gradient background

- **WHEN** the user navigates to the Reglink page
- **THEN** the page background is a teal-to-purple gradient
- **AND** a centered white form card is visible

### Requirement: Step sidebar displays three steps

Users SHALL see three step indicators in a dark navy sidebar.

#### Scenario: Three step indicators visible

- **WHEN** the form card is visible
- **THEN** three step indicators are displayed in the sidebar
- **AND** step 1 shows "01" and "Personal Information"
- **AND** step 2 shows "02" and "Connect Bank Account"
- **AND** step 3 shows "03" and "Set Financial Goals"

### Requirement: Step 1 is active by default

Users SHALL see step 1 as the active step on page load.

#### Scenario: Step 1 active on load

- **WHEN** the page loads
- **THEN** step 1 icon is green with white text
- **AND** step 2 and step 3 icons are gray
- **AND** the Personal Information form is visible

### Requirement: Step 1 personal info fields

Users SHALL see personal information fields in step 1.

#### Scenario: Personal info fields visible

- **WHEN** step 1 is active
- **THEN** "First Name" and "Last Name" inputs are visible side by side
- **AND** an "Email" input is visible
- **AND** a "Phone Number" input is visible
- **AND** birth date selects (MM, DD, YYYY) are visible
- **AND** an "SSN" input is visible

### Requirement: Next button advances steps

Users SHALL be able to advance to the next step using the Next button.

#### Scenario: Next advances to step 2

- **WHEN** step 1 is active
- **AND** the user clicks the Next button
- **THEN** step 2 becomes active
- **AND** the Connect Bank Account form is visible

#### Scenario: Next advances to step 3

- **WHEN** step 2 is active
- **AND** the user clicks the Next button
- **THEN** step 3 becomes active
- **AND** the Set Financial Goals form is visible

### Requirement: Step 2 bank selection

Users SHALL be able to search and select a bank in step 2.

#### Scenario: Bank search and selection

- **WHEN** step 2 is active
- **THEN** a "Find Your Bank" search input is visible
- **AND** 6 bank logo options are displayed in a grid
- **AND** a bank can be selected via radio button

### Requirement: Step 3 plan selection

Users SHALL be able to select a financial plan in step 3.

#### Scenario: Plan selection

- **WHEN** step 3 is active
- **THEN** 3 plan options are displayed (Specific, Medium, Special)
- **AND** each plan has a circular icon and description text
- **AND** selecting a plan highlights it green

### Requirement: Back button returns to previous step

Users SHALL be able to go back to the previous step.

#### Scenario: Back returns to previous step

- **WHEN** step 2 is active
- **AND** the user clicks the Back Step button
- **THEN** step 1 becomes active again

### Requirement: Finish button on last step

Users SHALL see a Finish button on the last step.

#### Scenario: Finish button visible on step 3

- **WHEN** step 3 is active
- **THEN** a Finish button (check icon) is visible

### Requirement: Step transition animation

Users SHALL see a fade animation when transitioning between steps.

#### Scenario: Fade animation on step change

- **WHEN** the user is on step 1
- **AND** the user clicks Next
- **THEN** the new step fades in with a 0.3s animation

### Requirement: Footer links to Component Dock

Users SHALL see a footer link to Component Dock.

#### Scenario: Footer link visible

- **WHEN** the page renders
- **THEN** a footer link to "https://www.componentdock.com/" is visible
- **AND** the link text says "More templates at Component Dock"

## Verification Checklist

- [ ] Gradient background renders (teal to purple)
- [ ] White card with shadow and rounded corners
- [ ] 3-step sidebar with dark navy background
- [ ] Step icons: green when active, gray when inactive
- [ ] Step 1: Personal Info fields (First/Last Name, Email, Phone, Birth Date, SSN)
- [ ] Step 1: Fieldset borders on Name/Email/Phone fields
- [ ] Step 2: Bank search input + 6 bank logo grid
- [ ] Step 2: Bank selection via radio buttons
- [ ] Step 3: 3 plan options with circular icons
- [ ] Step 3: Plan selection highlights green
- [ ] Navigation: Back Step + Next/Finish buttons (green circles)
- [ ] Step transitions with fade animation
- [ ] Back button hidden on step 1
- [ ] Finish button shown on step 3
- [ ] Responsive: mobile stacked, tablet horizontal steps
- [ ] Open Sans font loaded
- [ ] Uses `packages/ui` components where possible
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
