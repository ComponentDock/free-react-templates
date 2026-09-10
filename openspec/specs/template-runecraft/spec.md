# Template: Runecraft (User Profile Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 9 (`https://colorlib.com/wp/template/colorlib-wizard-9/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-9/` (404 at time of prep; design captured from screenshot + ColorLib page description)
- **New Name**: `runecraft` (App directory: `apps/runecraft`, Package: `@free-react-templates/runecraft`)
- **Category**: Bootstrap Wizard Templates / User Profile
- **Description**: A 3-step user profile wizard with a centered white card overlaying a nature-themed background, blue accent stepper (text counter style), 6 form fields with icons in a 3x2 grid, and NEXT navigation. Designed for user registration / profile creation flows.

## Design Tokens (captured from screenshot)

- **Primary Blue**: `#1976D2` (title text, NEXT button background, active step indicator)
- **Card Background**: `#FFFFFF` (pure white floating card)
- **Card Border**: `#E0E0E0` (light gray on input fields)
- **Card Border Radius**: `8px` (soft rounded corners)
- **Card Shadow**: `0 6px 20px rgba(0,0,0,0.12)` (subtle drop shadow for depth)
- **Dark Gray (Labels/Text)**: `#333333` (field labels, input text)
- **Light Gray (Icons/Helper Text)**: `#999999` (placeholder icons, helper text below fields)
- **Typography**: System sans-serif stack (geometric sans, likely Roboto/Inter from screenshot: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`)
- **Title**: All-caps, bold, ~26px, centered, primary blue `#1976D2`
- **Step Indicator**: Text counter "1/3" in top-right of card; active number in bold primary blue, "/N" in light gray `#999999`
- **Form Fields**: 3 rows x 2 columns symmetric grid, ~24px vertical spacing, ~16px horizontal gap
- **Input Styling**: Light gray border `#E0E0E0`, border-radius `4px`, left-aligned icons in gray `#999999`
- **Button**: Solid primary blue `#1976D2` background, white uppercase text, border-radius `4px`, ~12px vertical / 24px horizontal padding
- **Helper Text**: Regular weight, 12-13px, light gray `#999999`, left-aligned
- **Background**: Full-page nature photo (warm earthy foliage tones `#8C6B3E` / `#A67C52`, blue floral accents `#4169E1` / `#6495ED`)

## Requirements

### Requirement: 3-step user profile wizard navigation

Users SHALL be able to navigate through a 3-step user profile wizard to complete profile creation.

#### Scenario: Step 1 displays user profile fields

- **WHEN** the user loads the page
- **THEN** the wizard shows Step 1 ("USER PROFILE") with fields for Full Name, Education Level, Email ID, Phone Number, Specialization, and Date of Birth

#### Scenario: Step 2 displays additional details

- **WHEN** the user clicks "NEXT" on Step 1
- **THEN** the wizard shows Step 2 with additional profile fields (step 2 content)

#### Scenario: Step 3 displays confirmation or final details

- **WHEN** the user clicks "NEXT" on Step 2
- **THEN** the wizard shows Step 3 with final profile fields or confirmation

#### Scenario: BACK button returns to previous step

- **WHEN** the user is on Step 2 or Step 3
- **THEN** a "BACK" button is visible that returns to the previous step

#### Scenario: Cannot skip steps forward

- **WHEN** the user is on Step 1
- **THEN** there is no way to jump directly to Step 3

### Requirement: Step indicator text counter

Users SHALL see a text-based step counter showing current progress.

#### Scenario: Counter displays current step and total

- **WHEN** the user is on any step
- **THEN** a counter shows "N/3" in the top-right corner of the card, where N is the current step number

#### Scenario: Active step number is highlighted

- **WHEN** the counter is rendered
- **THEN** the current step number is displayed in bold primary blue `#1976D2`

#### Scenario: Total steps shown in light gray

- **WHEN** the counter is rendered
- **THEN** the "/3" portion is displayed in light gray `#999999`

### Requirement: Centered floating white card layout

Users SHALL see a centered white card with drop shadow overlaying a background image.

#### Scenario: Card is centered on the page

- **WHEN** the page loads
- **THEN** the wizard form is displayed in a white card centered horizontally and vertically on the viewport

#### Scenario: Card has rounded corners and shadow

- **WHEN** the card is rendered
- **THEN** it has border-radius of approximately 8px and a subtle drop shadow

#### Scenario: Background image fills the page

- **WHEN** the page loads
- **THEN** a full-page background image is visible behind the card

### Requirement: Form fields with icons in 3x2 grid

Users SHALL see form fields organized in a 3-row, 2-column grid with descriptive icons.

#### Scenario: Step 1 has six fields with icons

- **WHEN** Step 1 is displayed
- **THEN** six fields are shown in a 3x2 grid: Full Name (user icon), Education Level (pencil icon), Email ID (envelope icon), Phone Number (phone icon), Specialization (graduation cap icon), Date of Birth (calendar icon)

#### Scenario: Each field has a left-aligned icon

- **WHEN** any form field is rendered
- **THEN** a gray icon (`#999999`) is displayed on the left side of the input

#### Scenario: Fields have light gray borders

- **WHEN** form fields are rendered
- **THEN** each input has a light gray border (`#E0E0E0`) with 4px border-radius

### Requirement: Primary blue NEXT button

Users SHALL see a primary blue "NEXT" button to advance through the wizard.

#### Scenario: NEXT button is styled with primary blue

- **WHEN** the wizard step is displayed
- **THEN** a "NEXT" button appears at the bottom-right of the card with blue background (`#1976D2`) and white uppercase text

#### Scenario: NEXT button advances to next step

- **WHEN** the user clicks "NEXT"
- **THEN** the wizard advances to the next step

### Requirement: Helper text below form fields

Users SHALL see helper text indicating all fields must be filled.

#### Scenario: Helper text is displayed

- **WHEN** the form fields are rendered
- **THEN** helper text reads "You must fill all fields, to be able to continue" in light gray, small font below the last row of fields

### Requirement: Responsive layout

Users SHALL have a usable form experience on both desktop and mobile viewports.

#### Scenario: Desktop shows 3x2 grid

- **WHEN** the viewport width is ≥768px
- **THEN** form fields display in a 3-row, 2-column grid

#### Scenario: Mobile shows single column

- **WHEN** the viewport width is <768px
- **THEN** form fields stack in a single column

### Requirement: Accessibility

Users SHALL be able to use the wizard with keyboard and screen readers.

#### Scenario: All form fields are keyboard accessible

- **WHEN** the user tabs through the form
- **THEN** focus moves through all fields in logical order

#### Scenario: Buttons have accessible labels

- **WHEN** the NEXT or BACK buttons are rendered
- **THEN** they have proper button roles and accessible text

### Requirement: No ColorLib references in app code

The implementation SHALL NOT contain any references to ColorLib in application source code.

#### Scenario: No colorlib strings in apps/

- **WHEN** any file under `apps/runecraft/` is inspected
- **THEN** no string contains "colorlib" (case-insensitive) in source code, comments, or data

### Requirement: Footer with Component Dock link

Every template footer SHALL link to Component Dock.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page footer is rendered
- **THEN** it contains a link to `https://www.componentdock.com/` labeled "Component Dock"

### Requirement: Deterministic placeholder images

The template SHALL use picsum.photos placeholder images with deterministic seeds.

#### Scenario: Background uses picsum placeholder

- **WHEN** the template loads
- **THEN** the background image uses `https://picsum.photos/seed/runecraft-bg/` with appropriate dimensions

## Verification Checklist

- [ ] Spec covers all 3 wizard steps with field lists
- [ ] Design tokens match screenshot (primary blue #1976D2, card white, gray borders)
- [ ] Step indicator "N/3" counter renders correctly
- [ ] 3x2 form field grid with icons
- [ ] NEXT/BACK navigation between steps
- [ ] Helper text displayed
- [ ] Responsive: single column on mobile
- [ ] Keyboard navigation works
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] placeholder images use picsum.photos with deterministic seeds
- [ ] Package name: `@free-react-templates/runecraft`
- [ ] CNAME: `runecraft.free.componentdock.com`
