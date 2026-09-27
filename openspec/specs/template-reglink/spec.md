# Template: Reglink (Multi-Step Registration Wizard)

## Purpose

Recreation of **Colorlib Regform 27** — a 3-step wizard registration form with personal info, bank account connection, and financial goals selection. Features a dark sidebar with step indicators and a gradient background.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-27/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-27/ (design extracted from downloaded zip archive)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-27.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from zip CSS)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--gradient-start` | `rgb(116, 235, 213)` | Page background gradient start (teal) |
| `--gradient-end` | `rgb(63, 43, 150)` | Page background gradient end (purple) |
| `--sidebar-bg` | `#3e4061` | Steps sidebar background (dark navy) |
| `--card-bg` | `#ffffff` | Form card and content background |
| `--step-active` | `#4fab40` | Active step icon, plan selection, nav buttons (green) |
| `--step-inactive` | `#cccccc` | Inactive step icon background |
| `--step-hover` | `#36782c` | Nav button hover (darker green) |
| `--text-heading` | `#333333` | Heading, input text |
| `--text-body` | `#666666` | Body text, descriptions |
| `--text-muted` | `#999999` | Legend labels |
| `--border-input` | `#e5e5e5` | Fieldset borders, select borders, bank grid borders |
| `--plan-inactive` | `#999999` | Plan icon background (inactive) |

### Typography
| Token | Value |
|-------|-------|
| Font family | `Open Sans` (Google Fonts — Regular 400, SemiBold 600, Bold 700) |
| Heading size | 22px, bold |
| Body size | 14px, semibold |
| Step text | 15px, semibold |
| Legend size | 11px, bold |
| Plan title | 18px, bold |

### Layout
| Token | Value |
|-------|-------|
| Page | Full viewport, gradient background, flex centered |
| Card | 820px wide, white, `border-radius: 10px`, `box-shadow: 0px 8px 20px rgba(0,0,0,0.15)` |
| Sidebar | 280px wide, dark navy bg, left side |
| Content area | 540px wide, white bg, right side |
| Content padding | 50px horizontal |
| Wizard header | 37px top, 30px sides, 13px bottom |
| Form row | Flex with 10px gaps |
| Fieldset | 2px solid #e5e5e5, 4px radius, 0-20px horizontal padding |
| Input | No border (inside fieldset), 5px top / 13px bottom padding |
| Bank grid | 146.5px × 130px labels, 3 columns × 2 rows |
| Plan icon | 65px circle, #999 bg |
| Nav button | 50px circle, green bg |

### Step Indicators
| State | Icon BG | Text Color | Shadow |
|-------|---------|------------|--------|
| Inactive | #ccc | #ccc | none |
| Current | #4fab40 | #fff | 0px 3px 10px rgba(0,0,0,0.25) |
| Done | #4fab40 | #fff | 0px 3px 10px rgba(0,0,0,0.25) |

### Breakpoints
| Breakpoint | Behavior |
|------------|----------|
| > 1199px | Card has 145px vertical margin |
| 992–1199px | Card has 180px vertical margin + 20px horizontal |
| 768–991px | Sidebar full-width, steps horizontal, content below, no shadow on content |
| 576–767px | Bank labels shrink to 120px, date selects shrink |
| < 576px | Everything stacks vertically, padding reduces |

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

## Gherkin Requirements

### Feature: Multi-Step Registration Wizard

  Scenario: Page renders with gradient background
    Given the user navigates to the Reglink page
    Then the page background is a teal-to-purple gradient
    And a centered white form card is visible

  Scenario: Step sidebar displays three steps
    Given the form card is visible
    Then three step indicators are displayed in the sidebar
    And step 1 shows "01" and "Personal Information"
    And step 2 shows "02" and "Connect Bank Account"
    And step 3 shows "03" and "Set Financial Goals"

  Scenario: Step 1 is active by default
    Given the page loads
    Then step 1 icon is green with white text
    And step 2 and step 3 icons are gray
    And the Personal Information form is visible

  Scenario: Step 1 personal info fields
    Given step 1 is active
    Then "First Name" and "Last Name" inputs are visible side by side
    And an "Email" input is visible
    And a "Phone Number" input is visible
    And birth date selects (MM, DD, YYYY) are visible
    And an "SSN" input is visible

  Scenario: Fieldset styling on inputs
    Given step 1 is active
    Then First Name and Last Name have bordered fieldset containers
    And Email and Phone Number have bordered fieldset containers

  Scenario: Next button advances to step 2
    Given step 1 is active
    When the user clicks the Next button
    Then step 2 becomes active
    And the Connect Bank Account form is visible

  Scenario: Step 2 bank selection
    Given step 2 is active
    Then a "Find Your Bank" search input is visible
    And 6 bank logo options are displayed in a grid
    And a bank can be selected via radio button

  Scenario: Next button advances to step 3
    Given step 2 is active
    When the user clicks the Next button
    Then step 3 becomes active
    And the Set Financial Goals form is visible

  Scenario: Step 3 plan selection
    Given step 3 is active
    Then 3 plan options are displayed (Specific, Medium, Special)
    And each plan has a circular icon and description text
    And selecting a plan highlights it green

  Scenario: Back button returns to previous step
    Given step 2 is active
    When the user clicks the Back Step button
    Then step 1 becomes active again

  Scenario: Finish button on last step
    Given step 3 is active
    Then a Finish button (check icon) is visible

  Scenario: Step transition animation
    Given the user is on step 1
    When the user clicks Next
    Then the new step fades in with a 0.3s animation

  Scenario: Mobile responsive — stacked layout
    Given the viewport width is less than 576px
    Then the sidebar and content stack vertically
    And form rows stack vertically
    And padding is reduced

  Scenario: Tablet responsive — horizontal steps
    Given the viewport width is between 768px and 991px
    Then the sidebar steps display horizontally
    And the content area is full-width below

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
