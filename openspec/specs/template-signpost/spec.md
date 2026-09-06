# Template: Signpost (Multi-Step Form Wizard)

## Purpose

Signpost is a multi-step form wizard template recreating ColorLib Wizard 30.
Source: https://colorlib.com/wp/template/colorlib-wizard-30/
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

The template displays a centered multi-step registration form over a full-page
background image. A blue header reads "FORM WIZARD", followed by a 3-step
progress indicator (circular numbered steps connected by lines), a form area
with two-column input layouts per step, and Previous/Next action buttons.

## Design Tokens

Extracted from the ColorLib preview CSS (`css/style.css`):

| Token                  | Value                                  | Source                                              |
| ---------------------- | -------------------------------------- | --------------------------------------------------- |
| Brand primary          | `#3760e5` (blue)                       | `.wizard-header`, `.steps li.current a`, action btns |
| Body font              | Montserrat (400/500/600/700)           | `@font-face` declarations, `.wizard-v10-content`     |
| Container background   | `#fff` (white)                         | `.wizard-v10-content`                                |
| Container width        | 850px                                  | `.wizard-v10-content`                                |
| Container border-radius| 8px                                    | `.wizard-v10-content`, `.wizard-form`                |
| Container shadow       | `0px 8px 20px 0px rgba(0,0,0,0.15)`   | `.wizard-v10-content`                                |
| Step indicator size    | 60px circle                            | `.steps li a`                                        |
| Step indicator active  | `#3760e5` (brand blue)                 | `.steps li.current a`, `.steps li.done a`            |
| Step indicator inactive| `#ccc` (light grey)                    | `.steps li a` default                                |
| Step connector         | `#e5e5e5`, 2px height                 | `.steps li a::before`                                |
| Step number color      | `#fff` (white)                         | `.steps .title`                                      |
| Step number font-size  | 24px, weight 600                       | `.steps .title`                                      |
| Header background      | `#3760e5`                              | `.wizard-header`                                     |
| Header text color      | `#fff`                                 | `.wizard-header h3`                                  |
| Header font-size       | 28px, weight 700                       | `.wizard-header h3`                                  |
| Label color            | `#333`                                 | `.form-holder label`                                 |
| Label font-size        | 16px, weight 700                       | `.form-holder label`                                 |
| Input border           | `1px solid #e5e5e5`                    | `.form-control`                                      |
| Input border-radius    | 5px                                    | `.form-control`                                      |
| Input text color       | `#333`                                 | `.form-control`                                      |
| Input font-size        | 16px, weight 600                       | `.form-control`                                      |
| Select placeholder     | `#666`                                 | `select`                                             |
| Action button bg       | `#3760e5`                              | `.actions ul li`                                     |
| Action button hover    | `#2b4ab3`                              | `.actions ul li:hover`                               |
| Action button radius   | 25px (pill)                            | `.actions ul li`                                     |
| Action button size     | 50px height × 160px width              | `.actions ul li`                                     |
| Action button text     | `#fff`, 15px, weight 600               | `.actions ul li a`                                   |
| Page background        | Full-bleed image (`images/wizard-v10-bg.jpg`) | `.page-content`                              |

### Visual Design Notes (from TEMPLATES.md screenshot)

The screenshot shows a full-page background image (appears to be a dark
abstract/gradient pattern) with a centered white card. The card has a blue
header bar with "FORM WIZARD" in white. Below is a 3-step progress indicator
with circular numbered nodes (1, 2, 3) connected by horizontal lines — the
active/completed steps are blue, inactive are grey. The form area shows two
columns of labeled inputs. At the bottom are Previous/Next pill-shaped blue
buttons. The overall aesthetic is clean, modern, and professional.

## Requirements

### Requirement: Full-page background layout

The template SHALL display a full-page background image with a centered white
wizard card overlaid on top.

#### Scenario: Background renders correctly

- **WHEN** the app loads
- **THEN** a full-viewport background is visible
- **AND** a centered white card (max-width 850px, border-radius 8px) with drop
  shadow is displayed over the background

#### Scenario: Card is vertically centered

- **WHEN** the app loads on a desktop viewport
- **THEN** the wizard card is vertically and horizontally centered on the page

### Requirement: Wizard header

The card SHALL display a blue header bar with the title "FORM WIZARD" in white.

#### Scenario: Header displays correctly

- **WHEN** the wizard renders
- **THEN** a blue (#3760e5) header bar appears at the top of the card
- **AND** the header contains "FORM WIZARD" text in white, 28px, bold

### Requirement: Step progress indicator

The template SHALL display a 3-step progress indicator with circular numbered
nodes connected by horizontal lines.

#### Scenario: Step indicator renders 3 steps

- **WHEN** the wizard renders
- **THEN** 3 circular step indicators (60px diameter) are displayed horizontally
- **AND** the indicators are connected by grey (#e5e5e5) horizontal lines

#### Scenario: Current step is highlighted

- **WHEN** the user is on step 1
- **THEN** step 1's circle is blue (#3760e5) with white number
- **AND** steps 2 and 3 are grey (#ccc) with white numbers

#### Scenario: Completed steps update

- **WHEN** the user advances to step 2
- **THEN** step 1's circle turns blue (completed)
- **AND** step 2's circle turns blue (current)
- **AND** step 3 remains grey

### Requirement: Multi-step form sections

The form SHALL contain 3 steps with the following fields:
- Step 1: First Name, Last Name
- Step 2: Email Address, Password
- Step 3: Subject (select dropdown), Comment

#### Scenario: Step 1 displays name fields

- **WHEN** the wizard is on step 1
- **THEN** "First Name" and "Last Name" input fields are visible
- **AND** both fields are full-width in a two-column layout

#### Scenario: Step 2 displays account fields

- **WHEN** the user advances to step 2
- **THEN** "Email Address" and "Password" input fields are visible
- **AND** the email field has `type="email"` and the password field has
  `type="password"`

#### Scenario: Step 3 displays subject and comment

- **WHEN** the user advances to step 3
- **THEN** a "Subject" dropdown with options (Finance, Marketing, IT Support)
  is visible
- **AND** a "Comment" text input is visible

### Requirement: Form navigation buttons

The form SHALL display Previous and Next action buttons at the bottom.

#### Scenario: Next button advances steps

- **WHEN** the user clicks the Next button on step 1
- **THEN** the form transitions to step 2
- **AND** the step indicator updates to show step 2 as current

#### Scenario: Previous button goes back

- **WHEN** the user is on step 2 and clicks Previous
- **THEN** the form transitions back to step 1

#### Scenario: First step hides Previous

- **WHEN** the wizard is on step 1
- **THEN** only the Next button is visible (Previous is hidden)

#### Scenario: Last step shows Submit

- **WHEN** the wizard is on step 3
- **THEN** the action button reads "Submit" instead of "Next"

### Requirement: Button styling

Action buttons SHALL be pill-shaped (border-radius 25px), blue (#3760e5)
background, white text, 50px tall × 160px wide.

#### Scenario: Button hover state

- **WHEN** the user hovers over an action button
- **THEN** the button background darkens to #2b4ab3

### Requirement: Typography and design fidelity

The template SHALL use Montserrat as the primary font, matching the original
ColorLib design.

#### Scenario: Font is loaded correctly

- **WHEN** the app renders
- **THEN** the body text uses Montserrat (loaded via Google Fonts or self-hosted)

### Requirement: Responsive layout

The wizard SHALL be responsive: on mobile the two-column form layout stacks
vertically and the card width adjusts.

#### Scenario: Mobile layout stacks columns

- **WHEN** the viewport is below 768px
- **THEN** form fields stack vertically (single column)

#### Scenario: Small screens reduce padding

- **WHEN** the viewport is below 575px
- **THEN** the form content padding reduces and step indicator circles shrink

### Requirement: Footer with Component Dock link

The template footer SHALL display the site name, a tagline, and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a link labeled "More templates at Component Dock" points to
  https://www.componentdock.com/

## Verification checklist

- [ ] Full-page background image with centered white card
- [ ] Blue header bar with "FORM WIZARD" title
- [ ] 3-step circular progress indicator with connecting lines
- [ ] Active/completed steps turn blue, inactive stay grey
- [ ] Step 1: First Name + Last Name fields
- [ ] Step 2: Email + Password fields
- [ ] Step 3: Subject dropdown + Comment field
- [ ] Previous/Next navigation buttons
- [ ] Pill-shaped blue action buttons (border-radius 25px)
- [ ] Hover state darkens button to #2b4ab3
- [ ] Montserrat font loaded and applied
- [ ] Responsive: columns stack on mobile
- [ ] Footer with Component Dock link
- [ ] No references to ColorLib in app code
