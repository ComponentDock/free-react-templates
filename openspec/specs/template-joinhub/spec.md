# Template: Joinhub (Split-Layout Signup Form with Social Login)

## Purpose

Recreation of ColorLib **Signup Form 16** (`https://colorlib.com/wp/template/signup-form-16/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-16/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a split-layout signup form with a left image panel (purple overlay)
and a right form panel containing social login buttons, form fields, terms
checkbox, and a submit button. The left panel shows a background image with
a purple overlay and welcome text. The right panel has social login circles
(Google, Facebook, Twitter), an "or" divider, four form fields (Full Name,
Username in a 2-column row, Email Address, Password), a terms checkbox
(checked by default), a full-width blue "Create an account" button, and a
"Sign In" link below.

## Design Tokens

| Token           | Value                                  | Notes                                          |
| --------------- | -------------------------------------- | ---------------------------------------------- |
| brand-purple    | `#6807f9`                              | Purple overlay, social icon hover              |
| brand-blue      | `#007bff`                              | Button background, checkbox accent, link color |
| brand-blue-dark | `#0069d9`                              | Button hover state                             |
| page-bg         | `#ffffff`                              | White page background                          |
| input-border    | `#ced4da`                              | Input field borders                            |
| input-text      | `#495057`                              | Input value text color                         |
| divider         | `#e6e6e6`                              | "or" divider horizontal lines                  |
| or-text         | `#999999`                              | "or" text color                                |
| label-text      | `rgba(0,0,0,0.3)`                      | Form label color                               |
| checkbox-text   | `rgba(0,0,0,0.4)`                      | Terms checkbox label color                     |
| heading         | `#000000`                              | Page heading color                             |
| card-shadow     | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Card elevation                                 |
| card-radius     | `5px`                                  | Card border radius                             |
| social-hover-bg | `#6807f9`                              | Social button hover background                 |

### Font

- **Google Font:** Roboto, weight 400
- Fallback: Arial, sans-serif
- Loaded in `index.html` via `<link>` to Google Fonts

## Requirements

### Requirement: Split layout renders two panels

The system SHALL render a horizontal split layout with a left image panel
(40% width) and a right form panel (60% width) on desktop viewports.

#### Scenario: Desktop split layout

- **GIVEN** the page loads on a viewport wider than 992px
- **THEN** a horizontal split layout SHALL be displayed
- **AND** the left panel SHALL show a background image with a purple overlay
  (`#6807f9` at 40% opacity)
- **AND** the left panel SHALL display "Welcome to signup form" heading
  and descriptive text in white
- **AND** the right panel SHALL show the signup form on white background

#### Scenario: Mobile vertical layout

- **GIVEN** the page loads on a viewport narrower than 992px
- **THEN** the image panel SHALL appear on top
- **AND** the form panel SHALL appear below

### Requirement: Social login buttons

The form panel SHALL render three circular social login buttons (Google,
Facebook, Twitter) as 40px circles with thin borders.

#### Scenario: Social buttons render

- **GIVEN** the form panel is visible
- **THEN** three social login buttons SHALL be displayed: Google, Facebook, Twitter
- **AND** each button SHALL be a 40px circle with a thin border

#### Scenario: Social button hover

- **GIVEN** the social buttons are visible
- **WHEN** a user hovers over a social button
- **THEN** the button SHALL get a purple background (`#6807f9`) with white icon

### Requirement: Or divider

The form panel SHALL render an "or" text divider with horizontal lines
below the social buttons.

#### Scenario: Or divider visible

- **GIVEN** the social buttons are visible
- **THEN** an "or" text divider with horizontal lines SHALL appear below
  the social buttons

### Requirement: Form fields render correctly

The form SHALL contain four input fields: Full Name and Username in a
2-column row, Email Address full width, and Password full width.

#### Scenario: All form fields present

- **GIVEN** the form is visible
- **THEN** a "Full Name" text input SHALL be shown
- **AND** a "Username" text input SHALL be shown next to Full Name (2-column row)
- **AND** an "Email Address" text input SHALL be shown (full width)
- **AND** a "Password" input SHALL be shown (type=password, full width)

### Requirement: Terms checkbox

The form SHALL display a checkbox labeled "I agree all statements in terms
of service" that is checked by default.

#### Scenario: Terms checkbox renders checked

- **GIVEN** the form is visible
- **THEN** a checkbox labeled "I agree all statements in terms of service"
  SHALL be displayed
- **AND** the checkbox SHALL be checked by default

#### Scenario: Terms checkbox toggles

- **GIVEN** the terms checkbox is visible
- **WHEN** the user clicks the checkbox
- **THEN** the checkbox SHALL toggle its checked state

### Requirement: Submit button

The form SHALL render a full-width "Create an account" button with blue
background (`#007bff`) and white text.

#### Scenario: Submit button renders

- **GIVEN** the form is visible
- **THEN** a "Create an account" button SHALL be shown at full width
- **AND** the button SHALL have blue background (`#007bff`) with white text

#### Scenario: Submit button hover

- **GIVEN** the submit button is visible
- **WHEN** a user hovers over the button
- **THEN** the button SHALL darken to `#0069d9`

### Requirement: Sign-in link

The form SHALL display "I'm already a member!" text with a "Sign In" link
styled in blue below the form.

#### Scenario: Sign-in link renders

- **GIVEN** the form is visible
- **THEN** "I'm already a member!" text SHALL be displayed below the form
- **AND** "Sign In" SHALL be a clickable link styled in `#007bff`

### Requirement: Form validation

The form SHALL prevent submission when required fields are empty (HTML5
required validation).

#### Scenario: Empty fields blocked

- **GIVEN** the user submits the form with empty required fields
- **THEN** the form SHALL prevent submission via HTML5 required validation

#### Scenario: Valid form submits

- **GIVEN** the user fills all required fields
- **WHEN** the user clicks "Create an account"
- **THEN** the form SHALL submit (preventDefault called, no navigation)

### Requirement: Footer with Component Dock link

The page SHALL include a footer linking to Component Dock.

#### Scenario: Footer renders

- **GIVEN** the page is fully loaded
- **THEN** a footer SHALL be present with a link to
  `https://www.componentdock.com/` branded as "Component Dock"

### Requirement: No ColorLib references in app code

The app source files SHALL NOT contain any references to ColorLib in code,
comments, or data.

#### Scenario: No colorlib strings

- **GIVEN** the joinhub app source is inspected
- **THEN** there SHALL be no strings containing "colorlib" in any file
  under `apps/joinhub/src/`

### Requirement: Responsive layout

The layout SHALL be responsive and stack vertically on mobile.

#### Scenario: Mobile stacking

- **GIVEN** the viewport is narrower than 992px
- **THEN** the split layout SHALL stack vertically
- **AND** the image panel SHALL appear above the form panel
