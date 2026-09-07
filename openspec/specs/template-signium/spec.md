# Signium — Four-Step Sign-Up Wizard Template

> Recreation of ColorLib Wizard 17 (https://colorlib.com/wp/template/colorlib-wizard-17/)
> Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-17/index.html
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-17.jpg

## Purpose

A four-step sign-up wizard form with a split-screen layout. The left panel
(white) contains branding, tagline, description, and an illustration image.
The right panel (lavender #efeeff) contains a multi-step form with Previous/Next/Finish
buttons and a "Step X / 4" indicator. The original uses jQuery Steps; we use
React state for step navigation.

## Design Tokens

| Token              | Value                     | Source             |
|--------------------|---------------------------|--------------------|
| Brand color        | `#7c7cdd` (purple)        | CSS `.actions ul li a`, `.step-current` |
| Body font          | Poppins 300–900           | CSS `@font-face`    |
| Heading font       | Muli 800                  | CSS `h2`            |
| Button/label font  | Montserrat 300–900        | CSS `.actions`, `.step-current` |
| Page background    | `#222` (dark)             | CSS `body`          |
| Container bg       | `#efeeff` (lavender)      | CSS `.container`    |
| Left panel bg      | `#fff`                    | CSS `.signup-desc`  |
| Input border       | `#bfbfbf` (light gray)    | CSS `input`         |
| Input label        | `#888` (medium gray)      | CSS `input + label` |
| Heading text       | `#222` (dark)             | CSS `h2`            |
| Heading span       | `#7c7cdd` (brand purple)  | CSS `h2 span`       |
| Description text   | `#999` (muted)            | CSS `p.desc`        |
| Step indicator     | `#7c7cdd` (brand purple)  | CSS `.step-current`  |
| Button primary bg  | `#7c7cdd`                 | CSS `.actions ul li a` |
| Button primary text| `#fff`                    | CSS `.actions ul li a` |
| Button secondary bg| `#fff`                    | CSS `.actions ul li:first-child a` |
| Button secondary   | `#999`                    | CSS `.actions ul li:first-child a` |
| Button border-radius| rounded (no explicit px)  | CSS classes         |
| Button dimensions  | 140px × 50px              | CSS `.actions ul li a` |

## Requirements

### Requirement: Renders split-screen layout on load

The template SHALL display a split-screen layout with a left description panel
and a right form panel.

#### Scenario: Initial page load

- **WHEN** the user loads the page
- **THEN** a left panel with heading and description is visible
- **AND** a right panel with form fields is visible
- **AND** the page has a dark (#222) body background

### Requirement: Left panel contains branding and illustration

The left panel SHALL display a heading, tagline, description paragraph, and an
illustration image.

#### Scenario: Left panel content

- **WHEN** the user views the left panel
- **THEN** heading "Au Creative" is visible (with "Au" styled in brand purple)
- **AND** tagline "Sign up now to try undraw 30 days for free" is visible
- **AND** description text "MIT licensed illustrations for every project..." is visible
- **AND** an illustration image is visible

### Requirement: Step 1 shows name input

The form SHALL display a name input field on step 1 with a "Step 1 / 4" indicator.

#### Scenario: Step 1 visible

- **WHEN** the user loads the page
- **THEN** "Step 1 / 4" text is visible
- **AND** a "Your Name" input field is visible
- **AND** a "Next" button is visible

### Requirement: Step 2 shows email input

The form SHALL advance to step 2 showing an email input field with "Step 2 / 4".

#### Scenario: Navigate to step 2

- **WHEN** the user fills in the name and clicks Next
- **THEN** "Step 2 / 4" text becomes visible
- **AND** "Step 1 / 4" is no longer visible
- **AND** a "Your Email" input field is visible

### Requirement: Step 3 shows password input with toggle

The form SHALL advance to step 3 showing a password input with a visibility
toggle icon and "Step 3 / 4".

#### Scenario: Navigate to step 3

- **WHEN** the user fills in the email and clicks Next
- **THEN** "Step 3 / 4" text becomes visible
- **AND** a "Your Password" input field is visible
- **AND** a password visibility toggle icon is visible

#### Scenario: Toggle password visibility

- **WHEN** the user clicks the password toggle icon
- **THEN** the password input type switches to text (visible)
- **AND** the toggle icon changes to an eye-off icon

### Requirement: Step 4 shows confirm password input

The form SHALL advance to step 4 showing a confirm password input with "Step 4 / 4"
and a "Finish" button.

#### Scenario: Navigate to step 4

- **WHEN** the user fills in the password and clicks Next
- **THEN** "Step 4 / 4" text becomes visible
- **AND** a "Confirm your password" input field is visible
- **AND** a "Finish" button is visible
- **AND** a "Previous" button is visible

### Requirement: Step navigation with Previous button

The user SHALL be able to navigate backward to any previous step.

#### Scenario: Go back to previous step

- **WHEN** the user is on step 2 and clicks Previous
- **THEN** step 1 becomes visible again
- **AND** "Step 1 / 4" text is shown

### Requirement: Form completes on Finish

The form SHALL show a completion action when the user clicks Finish on the last step.

#### Scenario: Finish form

- **WHEN** the user clicks Finish on step 4
- **THEN** a completion signal is emitted (submit handler called)

### Requirement: Responsive layout

The template SHALL stack the split-screen panels vertically on small screens.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrower than 768px
- **THEN** the left panel stacks above the right panel
- **AND** both panels take full width

## Verification Checklist

- [ ] Split-screen layout renders correctly (left panel white, right panel lavender)
- [ ] Heading "Au Creative" with purple "Au" span
- [ ] Tagline and description text match original
- [ ] 4-step form with name, email, password, confirm password fields
- [ ] Step indicator updates ("Step X / 4")
- [ ] Previous/Next/Finish buttons functional
- [ ] Password visibility toggle works on steps 3 and 4
- [ ] Floating label animation on input focus
- [ ] Dark (#222) body background
- [ ] Brand purple (#7c7cdd) used for buttons and accents
- [ ] Responsive: panels stack vertically below 768px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for illustration placeholder
- [ ] Google Fonts (Poppins, Montserrat) loaded via index.html
