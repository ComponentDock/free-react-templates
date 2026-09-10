# Template: Steplink (Restaurant Book-a-Table Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 7 (`https://colorlib.com/wp/template/colorlib-wizard-7/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-7/` (unreachable at time of prep; design captured from screenshot)
- **New Name**: `steplink` (App directory: `apps/steplink`, Package: `@free-react-templates/steplink`)
- **Category**: Bootstrap Wizard Templates / Restaurant Reservation
- **Description**: A premium restaurant table reservation form with a 3-step wizard process (party details → date/time → confirmation), split-layout with moody food photography and a dark form panel.

## Design Tokens (captured from ColorLib preview screenshot)

- **Primary Brand**: Dark charcoal panel (`#1a1a1a` / `#222222`)
- **Accent Color**: Muted gold/beige for subtitle text (`#c9a96e` or similar warm gold)
- **Background**: White (`#ffffff`) page background
- **Text Colors**: White (`#ffffff`) on dark panel, dark gray (`#333333`) on white background
- **Typography**: Geometric sans-serif for headings (Montserrat/Roboto style), cursive script for tagline (e.g. Dancing Script), clean sans-serif for form labels
- **Buttons**: Outline style — transparent fill, white border, uppercase text
- **Form Inputs**: Thin white borders on dark background, small icon + label + value layout
- **Layout**: Two-column split — left: hero food image (full-height), right: dark form panel (centered vertically)
- **Wizard Indicator**: "1 / 3" counter at bottom-right of form, current step / total steps
- **Border Radius**: Minimal (0-4px on inputs, 0px on panel)
- **Icons**: Inline SVG — person silhouette, calendar, clock

## Requirements

### Requirement: 3-step reservation wizard navigation

Users SHALL be able to navigate through a 3-step wizard to complete a table reservation.

#### Scenario: Step 1 displays party details

- **WHEN** the user loads the page
- **THEN** the wizard shows Step 1 with fields for party size (People) with a person icon and dropdown selector

#### Scenario: Step 2 displays date and time selection

- **WHEN** the user advances to Step 2
- **THEN** the wizard shows fields for date (calendar icon + date input) and time range (clock icon + start/end time selectors)

#### Scenario: Step 3 displays confirmation/review

- **WHEN** the user advances to Step 3
- **THEN** the wizard shows a summary of the reservation details (party size, date, time) with a submit/confirm button

### Requirement: Wizard step indicator

Users SHALL see their current progress in the 3-step wizard.

#### Scenario: Step counter shows current position

- **WHEN** the user is on any wizard step
- **THEN** a step indicator (e.g. "1 / 3") is visible showing current step number and total steps

#### Scenario: Step indicator updates on navigation

- **WHEN** the user clicks Next or Back
- **THEN** the step counter updates to reflect the new current step

### Requirement: Next and Back navigation buttons

Users SHALL have navigation buttons to move between wizard steps.

#### Scenario: Next button advances the wizard

- **WHEN** the user clicks "Next" on Step 1 or Step 2
- **THEN** the wizard advances to the next step

#### Scenario: Back button returns to previous step

- **WHEN** the user clicks "Back" on Step 2 or Step 3
- **THEN** the wizard returns to the previous step with previously entered values preserved

#### Scenario: Back button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** the Back button is not visible

#### Scenario: Confirm button on final step

- **WHEN** the user is on Step 3
- **THEN** the Next button is replaced with a "Confirm" or "Book" button

### Requirement: Form validation prevents advancing on invalid input

Users SHALL see validation feedback when attempting to advance with missing required fields.

#### Scenario: Empty party size shows error

- **WHEN** the user clicks "Next" on Step 1 without selecting a party size
- **THEN** a validation message is shown indicating party size is required

#### Scenario: Missing date shows error

- **WHEN** the user clicks "Next" on Step 2 without selecting a date
- **THEN** a validation message is shown indicating date is required

### Requirement: Successful submission completes the wizard

Users SHALL see a confirmation screen after completing all steps.

#### Scenario: Confirmation screen shown after booking

- **WHEN** the user completes all steps and clicks "Confirm"
- **THEN** a success/confirmation message is displayed (e.g. "Your table is booked!")

#### Scenario: Reset after confirmation

- **WHEN** the user clicks "Book Another" or similar on the confirmation screen
- **THEN** the wizard resets to Step 1 with all fields cleared

### Requirement: Split layout with hero image

The template SHALL display a two-column split layout.

#### Scenario: Left column shows food image

- **WHEN** the page is rendered
- **THEN** a full-height hero food image is displayed on the left half of the viewport

#### Scenario: Right column shows dark form panel

- **WHEN** the page is rendered
- **THEN** a dark (charcoal/off-black) form panel occupies the right half of the viewport, vertically centered

### Requirement: Dark theme form panel

The form panel SHALL use a dark aesthetic.

#### Scenario: Dark background with white text

- **WHEN** the form panel is rendered
- **THEN** the background is dark charcoal (#1a1a1a) and all text is white

#### Scenario: Gold accent tagline

- **WHEN** the form panel is rendered
- **THEN** a decorative tagline (e.g. "- Check out our place -") appears in a muted gold/beige color using a cursive font

#### Scenario: Outline-style action button

- **WHEN** the form panel is rendered
- **THEN** the primary action button ("Next" / "Confirm") uses an outline style (transparent fill, white border, white uppercase text)

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Step 1 shows party size selector with person icon
- [ ] Step 2 shows date input and time range selectors with calendar/clock icons
- [ ] Step 3 shows reservation summary with confirm button
- [ ] Step indicator (e.g. "1 / 3") updates on navigation
- [ ] Next/Back buttons navigate correctly
- [ ] Back button hidden on Step 1
- [ ] Confirm button replaces Next on Step 3
- [ ] Validation prevents advancing with missing required fields
- [ ] Confirmation screen shown after successful booking
- [ ] Wizard resets cleanly after confirmation
- [ ] Split layout: hero image left, dark form panel right
- [ ] Dark charcoal panel background with white text
- [ ] Gold/beige cursive tagline
- [ ] Outline-style action button
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] All placeholder images use picsum.photos
- [ ] Typography matches: geometric sans for headings, cursive script for tagline
