# Template: Wizstep (Account Creation Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 6 (`https://colorlib.com/wp/template/colorlib-wizard-6/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-6/` (unreachable — 404 at time of research; screenshot used as sole reference)
- **New Name**: `wizstep` (App directory: `apps/wizstep`, Package: `@free-react-templates/wizstep`)
- **Category**: Forms / Multi-step Account Creation Wizard
- **Description**: A clean, modern multi-step account creation wizard with a pastel gradient background, floating white card, step dot indicators, profile picture upload, and three steps (Personal Info, Team Details, Credentials).

## Design Tokens

Extracted from the ColorLib Wizard 6 screenshot (preview URL was 404):

- **Background**: Pastel gradient — light lavender (#e8d5f5) at top fading to soft pink (#f5c6d0) at bottom
- **Card**: Solid white (#ffffff) background, large rounded corners (border-radius ~20px), subtle drop shadow
- **Primary Button**: Muted periwinkle blue (#7e8bd4) with white (#ffffff) text, rounded corners (~8px), uppercase
- **Input Fields**: Light gray (#f5f5f5) background, rounded corners (~8px), clean borders
- **Status Indicators**: Small circles next to input fields — filled pink (#e87ca0) for focused/active, outlined for inactive
- **Typography**: Sans-serif throughout — Inter or similar; uppercase labels in dark gray (#333333), large heading semi-transparent white
- **Heading**: Bold, sans-serif, uppercase, semi-transparent white (blended with gradient background)
- **Section Background**: Full-page pastel gradient (no separate section backgrounds)
- **Shadow**: Subtle box shadow on card (0 10px 40px rgba(0,0,0,0.1))
- **Step Indicators**: Three dots centered below the card — active dot filled, inactive outlined
- **Icons**: Camera icon for profile upload, arrow icon on Continue button

## Visual Design Notes (from Screenshot)

The template presents a centered, single-viewport wizard form:

1. **Large heading** at top — semi-transparent white, bold sans-serif, uppercase text (template title or branding placeholder)
2. **Floating white card** centered vertically — contains the form fields and step content
3. **Step 1 (Personal Info)** contains:
   - Circular profile picture placeholder with camera icon + "CHOOSE PICTURE" label
   - First Name, Last Name fields (side by side or stacked)
   - Team Name field
   - Email field
   - Password field
   - "CONTINUE →" button at bottom
4. **Step indicators** — three dots below the card showing progress (step 1 of 3 active)
5. **Overall aesthetic**: Soft, modern, user-centric — the pastel gradient and white card create a welcoming onboarding feel

## Requirements

### Requirement: Multi-step wizard with 3 steps

Users SHALL navigate through a 3-step account creation wizard.

#### Scenario: Wizard starts at Step 1

- **WHEN** the user loads the wizstep page
- **THEN** Step 1 (Profile Setup) is displayed with a profile picture upload area, name fields, team name, email, and password

#### Scenario: Step 2 shows team and additional details

- **WHEN** the user completes Step 1 and clicks "Continue"
- **THEN** Step 2 (Team Details) is displayed with additional form fields (role, team description, or similar)

#### Scenario: Step 3 shows confirmation

- **WHEN** the user completes Step 2 and clicks "Continue"
- **THEN** Step 3 (Confirmation) is displayed with a summary or terms agreement

### Requirement: Step indicator shows progress

Users SHALL see a dot-based step indicator showing their current position.

#### Scenario: First step indicator is active

- **WHEN** the user is on Step 1
- **THEN** the first of three dots is filled/active, the other two are outlined/inactive

#### Scenario: Progress updates on step change

- **WHEN** the user advances to Step 2
- **THEN** the first dot is filled (completed), the second dot is filled (current), the third is outlined

### Requirement: Profile picture upload

Users SHALL be able to select a profile picture on Step 1.

#### Scenario: Choose picture displays placeholder

- **WHEN** no picture is selected
- **THEN** a circular placeholder with a camera icon and "CHOOSE PICTURE" label is shown

#### Scenario: Picture selection updates display

- **WHEN** the user selects an image
- **THEN** the selected image replaces the circular placeholder

### Requirement: Form validation

Users SHALL see validation errors when advancing with invalid input.

#### Scenario: Empty required fields show errors

- **WHEN** the user clicks "Continue" with empty required fields
- **THEN** inline validation error messages are displayed for each missing field

#### Scenario: Invalid email shows error

- **WHEN** the user enters an invalid email format
- **THEN** an email validation error is displayed

#### Scenario: Short password shows error

- **WHEN** the user enters a password shorter than minimum length
- **THEN** a password length validation error is displayed

### Requirement: Navigation buttons

Users SHALL have Back and Next/Submit buttons for wizard navigation.

#### Scenario: Back button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** the Back button is not visible

#### Scenario: Back button visible on later steps

- **WHEN** the user is on Step 2 or Step 3
- **THEN** a Back button is visible that returns to the previous step

#### Scenario: Submit button on final step

- **WHEN** the user is on Step 3
- **THEN** the Continue button is replaced with a Submit/Complete button

### Requirement: Successful submission

Users SHALL see a success screen after completing all steps.

#### Scenario: Completion displays success message

- **WHEN** the user completes all steps and submits
- **THEN** a success screen is displayed with a "Complete!" header and confirmation message

#### Scenario: Start Over resets wizard

- **WHEN** the user clicks "Start Over" on the success screen
- **THEN** the wizard resets to Step 1 with all fields cleared

### Requirement: Responsive design

The wizard SHALL work across desktop and mobile viewports.

#### Scenario: Desktop layout

- **WHEN** viewed on a desktop viewport (≥768px)
- **THEN** the card is centered with generous padding, fields may be side by side

#### Scenario: Mobile layout

- **WHEN** viewed on a mobile viewport (<768px)
- **THEN** the card takes full width with stacked fields and appropriate spacing

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] 3-step wizard with dot indicators working correctly
- [ ] Profile picture upload on Step 1
- [ ] Form validation with inline errors
- [ ] Back/Next/Submit navigation
- [ ] Success screen with Start Over
- [ ] Pastel gradient background matching screenshot
- [ ] White floating card with rounded corners and shadow
- [ ] Periwinkle blue Continue button
- [ ] Responsive layout (desktop + mobile)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] TypeScript strict mode
- [ ] 100% test coverage
