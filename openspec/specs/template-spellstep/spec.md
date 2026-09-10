# Template: SpellStep (Multi-step Account Creation Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 6 (`https://colorlib.com/wp/template/colorlib-wizard-6/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-6/` (404 at time of research — screenshot used as sole reference)
- **New Name**: `spellstep` (App directory: `apps/spellstep`, Package: `@free-react-templates/spellstep`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A 3-step account creation wizard with profile photo upload, personal info fields, and a pastel gradient background. Designed for team-based SaaS onboarding with pill-shaped inputs and a centered card layout.

## Design Tokens

> Extracted from screenshot analysis (ColorLib preview unreachable).

- **Background gradient**: Periwinkle blue (`#b4c8e2`) at top → Rose pink (`#f0c6e2`) at bottom
- **Card**: White (`#ffffff`), rounded corners (~12px), soft gray drop shadow (`#d5d5d5`)
- **Input fields**: Light gray background (`#e0e4ec`), pill-shaped (fully rounded corners), no visible border, small lavender indicator dot (`#d2c4e5`) to the left
- **Button (CONTINUE)**: Muted blue (`#8ea4c9`), rounded rectangle, white uppercase text, arrow icon
- **Progress dots**: Active dot dark gray (`#666666`), inactive dots light gray (`#cccccc`)
- **Text color**: Dark gray (`#444444`) for labels/placeholders (uppercase)
- **Background decorative text**: Large faded italic text ("TELL US ABOUT YOURS"), very low opacity light gray
- **Profile circle**: Lavender border (`#d2c4e5`), circular crop
- **Typography**: Poppins (or similar clean rounded sans-serif)

## Requirements

### Requirement: 3-step wizard navigation

Users SHALL navigate through 3 steps of an account creation wizard with visible step progress indicators.

#### Scenario: Initial state shows Step 1

- **WHEN** the user loads the SpellStep form wizard
- **THEN** Step 1 is displayed with profile photo upload, First Name, Last Name, Team Name, Email, and Password fields

#### Scenario: Step progress indicator

- **WHEN** the user is on Step 1
- **THEN** three circular progress dots are shown at the bottom of the card, with the first dot filled (active) and the other two hollow (inactive)

#### Scenario: Advancing to Step 2

- **WHEN** the user fills in all required fields on Step 1 and clicks "Continue"
- **THEN** the wizard transitions to Step 2 with the second progress dot active

#### Scenario: Advancing to Step 3

- **WHEN** the user completes Step 2 and clicks "Continue"
- **THEN** the wizard transitions to Step 3 with the third progress dot active

### Requirement: Profile photo upload

Users SHALL be able to select and preview a profile picture on Step 1.

#### Scenario: Choose picture area

- **WHEN** the user is on Step 1
- **THEN** a circular photo placeholder with a "CHOOSE PICTURE" label and camera icon is displayed to the left of the form fields

#### Scenario: Photo selection

- **WHEN** the user clicks the "CHOOSE PICTURE" area
- **THEN** a file picker dialog opens to select an image file

#### Scenario: Photo preview

- **WHEN** the user selects a valid image file
- **THEN** the selected image is displayed in the circular preview area

### Requirement: Form input fields on Step 1

Step 1 SHALL contain text inputs for personal and account information with consistent pill-shaped styling.

#### Scenario: Required fields present

- **WHEN** the user is on Step 1
- **THEN** the following fields are visible: First Name, Last Name, Team Name, Email, Create a Password

#### Scenario: Input field styling

- **WHEN** any input field is rendered
- **THEN** it has a pill-shaped rounded background, a small lavender indicator dot to the left, and uppercase placeholder text

#### Scenario: Fields accept user input

- **WHEN** the user types into any input field
- **THEN** the entered text is displayed in the field

### Requirement: Form validation prevents advancing on invalid input

Users SHALL see inline validation errors when attempting to advance with invalid or missing required fields.

#### Scenario: Empty required fields show errors

- **WHEN** the user clicks "Continue" on Step 1 with empty required fields
- **THEN** inline validation error messages are displayed for the missing fields

#### Scenario: Invalid email format shows error

- **WHEN** the user enters an invalid email format and clicks "Continue"
- **THEN** an email format validation error is displayed

#### Scenario: Short password shows error

- **WHEN** the user enters a password shorter than the minimum length and clicks "Continue"
- **THEN** a password length error is displayed

### Requirement: Back navigation

Users SHALL be able to return to the previous step.

#### Scenario: Back button on Step 1

- **WHEN** the user is on Step 1
- **THEN** no Back button is displayed

#### Scenario: Back button on later steps

- **WHEN** the user is on Step 2 or Step 3
- **THEN** a Back button is visible that returns to the previous step

#### Scenario: Back preserves entered data

- **WHEN** the user navigates back from Step 2 to Step 1
- **THEN** all previously entered data in Step 1 fields is preserved

### Requirement: Completion screen

Users SHALL see a completion confirmation after finishing all 3 steps.

#### Scenario: Success display

- **WHEN** the user completes all 3 steps with valid data
- **THEN** a success screen is displayed confirming account creation

#### Scenario: Reset wizard

- **WHEN** the user clicks a reset/start over action on the completion screen
- **THEN** the wizard resets to Step 1 with all fields cleared

### Requirement: Pastel gradient background

The page SHALL display a full-page pastel gradient background.

#### Scenario: Background gradient

- **WHEN** the page is rendered
- **THEN** a vertical gradient from periwinkle blue at the top to rose pink at the bottom covers the entire viewport

#### Scenario: Decorative background text

- **WHEN** the page is rendered
- **THEN** large, faded, italic decorative text is visible behind the form card at low opacity

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] 3-step wizard navigates correctly with progress dots updating
- [ ] Profile photo upload and circular preview work
- [ ] All Step 1 fields render with pill-shaped styling and indicator dots
- [ ] Form validation blocks advancement on invalid input
- [ ] Back navigation preserves entered data
- [ ] Completion screen displays after all steps
- [ ] Pastel gradient background renders correctly
- [ ] Decorative background text visible at low opacity
- [ ] Footer links to Component Dock
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeCheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
