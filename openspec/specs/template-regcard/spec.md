# Spec: Regcard

## Purpose

Regcard is a free customer registration form template recreating ColorLib "Reg Form V14"
(https://colorlib.com/wp/template/colorlib-regform-14/). It features a centered white card
on a light blue background with a clean, minimal registration form containing personal
details (name, birth date, gender, phone, password), an expandable "Additional Info"
section, and a blue Submit button.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
**Preview:** https://preview.colorlib.com/theme/colorlib-regform-14/ (404 — preview unavailable; design sourced from screenshot)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-14.jpg

## Design Tokens

| Token             | Value                        | Source         |
| ----------------- | ---------------------------- | -------------- |
| Page background   | `#d6eaf8` (light sky blue)   | Screenshot     |
| Card background   | `#ffffff`                    | Screenshot     |
| Card shadow       | soft box-shadow, ~8px blur   | Screenshot     |
| Card border-radius| ~8px                         | Screenshot     |
| Primary button    | `#4da6e8` (medium blue)      | Screenshot     |
| Button text       | `#ffffff`                    | Screenshot     |
| Button border-radius | ~4px                      | Screenshot     |
| Label color       | `#333333` (dark gray)        | Screenshot     |
| Label font        | uppercase, bold, small (~11px)| Screenshot     |
| Input border      | `#cccccc` (light gray)       | Screenshot     |
| Input bg          | `#ffffff`                    | Screenshot     |
| Input padding     | ~8px                         | Screenshot     |
| Section link color| `#4da6e8` (matches button)   | Screenshot     |
| Font family       | system sans-serif stack       | Screenshot     |

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport light blue (#d6eaf8) background with a single centered white card.

#### Scenario: Card is centered on the blue background

- **WHEN** I visit the Regcard page
- **THEN** I see a white card centered horizontally and vertically on a light blue background
- **AND** the card has rounded corners and a soft drop shadow

### Requirement: First Name / Last Name row

The form SHALL display two side-by-side text inputs labeled "First Name" and "Last Name" in uppercase bold labels.

#### Scenario: Two text inputs are visible side by side

- **WHEN** I visit the Regcard page
- **THEN** I see a text input labeled "First Name"
- **AND** I see a text input labeled "Last Name"
- **AND** they are displayed in a two-column layout

### Requirement: Birth Date / Gender row

The form SHALL display a date input labeled "Birth Date" (placeholder "MM-DD-YYYY") and a gender toggle with "Male" and "Female" buttons.

#### Scenario: Date input and gender toggle are visible

- **WHEN** I visit the Regcard page
- **THEN** I see a date input labeled "Birth Date" with MM-DD-YYYY placeholder
- **AND** I see a gender toggle with "Male" and "Female" options
- **AND** "Male" is the default selected option (blue background)
- **AND** the unselected option has a white/light background with border

### Requirement: Phone Number row

The form SHALL display a full-width text input labeled "Phone Number".

#### Scenario: Phone input is full width

- **WHEN** I visit the Regcard page
- **THEN** I see a text input labeled "Phone Number" spanning the full width of the form

### Requirement: Password / Repeat Password row

The form SHALL display two side-by-side password inputs labeled "Password" and "Repeat Your Password".

#### Scenario: Two password inputs are visible

- **WHEN** I visit the Regcard page
- **THEN** I see a password input labeled "Password"
- **AND** I see a password input labeled "Repeat Your Password"
- **AND** they are displayed in a two-column layout

### Requirement: Additional Info expandable section

The form SHALL include an "Additional Info" toggle that expands/collapses a hidden section.

#### Scenario: Additional Info section is collapsed by default

- **WHEN** I visit the Regcard page
- **THEN** I see an "Additional Info" link/arrow toggle
- **AND** the additional fields section is hidden

#### Scenario: Clicking Additional Info expands the section

- **WHEN** I click the "Additional Info" toggle
- **THEN** the additional fields section expands and becomes visible
- **AND** the toggle arrow rotates or changes to indicate expanded state

### Requirement: Submit button

The form SHALL contain a blue "Submit" button aligned to the right.

#### Scenario: Submit button is visible and styled

- **WHEN** I visit the Regcard page
- **THEN** I see a "Submit" button with a blue (#4da6e8) background
- **AND** the button is aligned to the right side of the card
- **AND** the button has white text and rounded corners

#### Scenario: Submitting the form shows a success message

- **WHEN** I fill in all required fields and click Submit
- **THEN** I see a success confirmation message
- **AND** the form fields are no longer visible

### Requirement: Dark mode toggle

The navbar SHALL include a dark-mode toggle button.

#### Scenario: Toggling dark mode changes the background

- **WHEN** I click the dark mode toggle
- **THEN** the page background switches to a dark color
- **AND** the card background remains light or adjusts for contrast
- **AND** text colors invert for readability

### Requirement: Footer

The footer SHALL display a link to ComponentDock.

#### Scenario: Footer contains ComponentDock link

- **WHEN** I scroll to the bottom of the page
- **THEN** I see a footer with a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Light blue page background (#d6eaf8)
- [ ] Centered white card with shadow and rounded corners
- [ ] First Name + Last Name side-by-side inputs
- [ ] Birth Date date input with MM-DD-YYYY placeholder
- [ ] Gender toggle (Male/Female) with blue active state
- [ ] Phone Number full-width input
- [ ] Password + Repeat Password side-by-side inputs
- [ ] Expandable "Additional Info" section
- [ ] Blue Submit button (right-aligned)
- [ ] Form submission shows success message
- [ ] Dark mode toggle in navbar
- [ ] Footer with ComponentDock link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] CNAME and homepage configured
