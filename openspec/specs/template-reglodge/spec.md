# Template: Reglodge (Registration Form)

## Purpose

Reglodge is a single-page registration form template — a React recreation of
the ColorLib free "Colorlib Regform 19" template
(source: https://colorlib.com/wp/template/colorlib-regform-19/,
demo: https://colorlib.com/etc/regform/colorlib-regform-19/),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Body font: Muli-Regular (Mulish), 13px, color #666
- Heading font: Abril Fatface (Google Fonts), uppercase, 35px, #6d5555, letter-spacing 3px
- Label font: Muli-Bold, uppercase, 13px
- Button font: Muli-SemiBold, uppercase, 13px
- Button background: #ea9f48 (amber)
- Button hover fill: #f98805 (darker orange) via scaleX transition
- Button text: #fff, 152×42px, flat rectangle
- Inner card: white (#fff) background, max-width 850px, 15px padding
- Form border: 1px solid #d3cccc, padding 62px 65px 64px
- Input height: 42px, border 1px solid #e6e6e6, font-size 15px, color #999 placeholder
- Icons: Material Design Iconic Font (zmdi) → Replace with lucide-react
- Full-viewport background image (cover, centered)
- Checkbox: custom styled, 12×13px, #ebebeb bg, #ccc border
- Mobile breakpoint: 767px — single column, no form border

**Note:** The live preview at `preview.colorlib.com/theme/colorlib-regform-19/`
returns 404. Research used the actual demo at
`colorlib.com/etc/regform/colorlib-regform-19/` and the CSS file
(`css/style.css`, ~200 lines — hand-written, no framework).
The screenshot (`colorlib-reg-form-19.jpg`) was referenced for visual
confirmation.

Reglodge lives in `apps/reglodge` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Form wrapper

The system SHALL render a full-viewport wrapper with a background image
placeholder, centered horizontally and vertically, containing a styled white
form card.

#### Scenario: Wrapper layout

- **GIVEN** the page is rendered
- **WHEN** the wrapper is displayed
- **THEN** it SHALL occupy the full viewport height (min-height: 100vh)
- **AND** it SHALL center the form card both horizontally and vertically using flexbox
- **AND** it SHALL display a background image (picsum.photos placeholder) with cover sizing

### Requirement: Form card

The system SHALL render a centered card with a white (#fff) background,
15px padding, and a max-width of 850px.

#### Scenario: Card appearance

- **GIVEN** the page is rendered
- **WHEN** the form card is displayed
- **THEN** it SHALL have a background color of #fff
- **AND** it SHALL have max-width of 850px
- **AND** it SHALL have 15px padding
- **AND** the card SHALL be horizontally centered (margin: auto)

### Requirement: Form container

The system SHALL render a form element inside the card with a 1px solid
#d3cccc border and generous internal padding.

#### Scenario: Form border and padding

- **GIVEN** the page is rendered
- **WHEN** the form container is displayed
- **THEN** it SHALL have a 1px solid border in #d3cccc
- **AND** it SHALL have padding of 62px 65px 64px on desktop
- **AND** it SHALL have no border and no padding on mobile (< 767px)

### Requirement: Form heading

The system SHALL render an uppercase heading "Registration Form" in
Abril Fatface font, centered, with letter-spacing.

#### Scenario: Heading content

- **GIVEN** the page is rendered
- **WHEN** the form heading is displayed
- **THEN** it SHALL show "Registration Form" in uppercase
- **AND** it SHALL use Abril Fatface font (Google Fonts link)
- **AND** it SHALL be centered
- **AND** it SHALL have font-size 35px (30px on mobile)
- **AND** it SHALL have color #6d5555
- **AND** it SHALL have letter-spacing of 3px
- **AND** it SHALL have margin-bottom of 48px (40px on mobile)

### Requirement: Two-column field groups

The system SHALL arrange form fields in two-column groups, with each
column taking 50% width and a 40px gap between them.

#### Scenario: Field group layout

- **GIVEN** the page is rendered
- **WHEN** the form fields are displayed
- **THEN** fields SHALL be arranged in rows of two columns (50% each)
- **AND** the first column SHALL have margin-right of 40px
- **AND** each field group SHALL have margin-bottom of 27px
- **AND** on mobile (< 767px), fields SHALL stack to single column (100% width, no margin-right)

### Requirement: Form fields — text inputs (Username, Email)

The system SHALL render Username and Email fields as text inputs with
left-aligned icons and uppercase labels.

#### Scenario: Username field

- **GIVEN** the page is rendered
- **WHEN** the Username field is displayed
- **THEN** it SHALL show an uppercase label "Username:" in Muli-Bold
- **AND** it SHALL have a left-positioned user icon (lucide-react User icon)
- **AND** the input SHALL be 42px height, 1px solid #e6e6e6 border
- **AND** the input SHALL have padding 0 20px 0 46px (space for icon)
- **AND** the placeholder text SHALL be color #999

#### Scenario: Email field

- **GIVEN** the page is rendered
- **WHEN** the Email field is displayed
- **THEN** it SHALL show an uppercase label "Email:" in Muli-Bold
- **AND** it SHALL have a left-positioned @ symbol icon (or Mail icon from lucide-react)
- **AND** the input SHALL have the same styling as Username

### Requirement: Form fields — password inputs (Password, Repeat Password)

The system SHALL render Password and Repeat Password fields as password
inputs with lock icons.

#### Scenario: Password fields

- **GIVEN** the page is rendered
- **WHEN** the Password and Repeat Password fields are displayed
- **THEN** each SHALL show an uppercase label ("Password:" and "Repeat Password:") in Muli-Bold
- **AND** each SHALL have a left-positioned lock icon (lucide-react Lock icon)
- **AND** the password input SHALL have placeholder "********"
- **AND** the input SHALL be type="password"

### Requirement: Form fields — select dropdowns (Country, Gender)

The system SHALL render Country and Gender as styled select dropdowns
with custom icons and a custom chevron indicator.

#### Scenario: Country dropdown

- **GIVEN** the page is rendered
- **WHEN** the Country dropdown is displayed
- **THEN** it SHALL show an uppercase label "Country:" in Muli-Bold
- **AND** it SHALL have a left-positioned map pin icon (lucide-react MapPin icon)
- **AND** it SHALL have a custom dropdown chevron on the right
- **AND** it SHALL default to "United States"
- **AND** it SHALL contain options: United States, United Kingdom, Vietnam

#### Scenario: Gender dropdown

- **GIVEN** the page is rendered
- **WHEN** the Gender dropdown is displayed
- **THEN** it SHALL show an uppercase label "Gender:" in Muli-Bold
- **AND** it SHALL have a left-positioned user icon (lucide-react User icon)
- **AND** it SHALL have a custom dropdown chevron on the right
- **AND** it SHALL default to "Male"
- **AND** it SHALL contain options: Male, Female, Other

### Requirement: Custom checkbox

The system SHALL render a custom-styled checkbox with a checkmark that
appears when checked.

#### Scenario: Checkbox appearance

- **GIVEN** the page is rendered
- **WHEN** the checkbox is displayed
- **THEN** it SHALL have a custom checkmark container (12×13px, #ebebeb bg, #ccc border, 2px radius)
- **AND** the native checkbox SHALL be hidden (opacity: 0)
- **AND** the label text SHALL be color #999, Muli-SemiBold font
- **AND** when checked, a checkmark SHALL appear inside the container

#### Scenario: Checkbox interaction

- **GIVEN** the page is rendered
- **WHEN** the user clicks the checkbox label or checkmark area
- **THEN** the checkbox SHALL toggle its checked state
- **AND** the checkmark SHALL appear or disappear accordingly

### Requirement: Register Now button

The system SHALL render a "Register Now" button with an amber background
that transitions to darker orange on hover via a scaleX animation.

#### Scenario: Button appearance

- **GIVEN** the page is rendered
- **WHEN** the Register Now button is displayed
- **THEN** it SHALL show text "REGISTER NOW" in uppercase
- **AND** it SHALL have background color #ea9f48
- **AND** it SHALL have white (#fff) text
- **AND** it SHALL use Muli-SemiBold font, 13px
- **AND** it SHALL be 152px wide, 42px tall
- **AND** it SHALL be floated right

#### Scenario: Button hover animation

- **GIVEN** the page is rendered
- **WHEN** the user hovers over the Register Now button
- **THEN** a darker orange (#f98805) fill SHALL animate in from center (scaleX 0→1)
- **AND** the transition duration SHALL be 0.3s with ease-out timing

### Requirement: Form bottom row layout

The system SHALL arrange the checkbox and button side by side in a
flex row at the bottom of the form.

#### Scenario: Bottom row layout

- **GIVEN** the page is rendered
- **WHEN** the form bottom is displayed
- **THEN** the checkbox SHALL occupy 50% width on the left
- **AND** the button holder SHALL occupy 50% width on the right
- **AND** they SHALL be vertically aligned (align-items: center)
- **AND** on mobile (< 767px), both SHALL stack to 100% width

### Requirement: Responsive design

The system SHALL adapt the form layout for mobile viewports below 767px.

#### Scenario: Mobile layout

- **GIVEN** the viewport width is below 767px
- **WHEN** the form is displayed
- **THEN** the wrapper SHALL use display: block instead of flex
- **AND** the form SHALL have no border and no padding
- **AND** all field groups SHALL stack to single column
- **AND** the bottom row SHALL stack (checkbox and button full width)
- **AND** the button SHALL no longer be floated right
- **AND** the button SHALL have margin-top: 30px
- **AND** the heading font-size SHALL reduce to 30px

### Requirement: Footer with Component Dock attribution

The system SHALL render a minimal footer linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL link to https://www.componentdock.com/
- **AND** it SHALL be branded as "Component Dock"
