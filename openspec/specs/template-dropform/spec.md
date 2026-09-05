# Template: DropForm (Dropdown Sign-Up Form Widget)

## Purpose

DropForm is a React recreation of the ColorLib free "Dropdown 07" template — a
Bootstrap-based sign-up dropdown menu form widget. The original is a small,
self-contained component that renders a button triggering a dropdown panel with
a sign-up form.

- **Source**: ColorLib Dropdown 07 (`https://colorlib.com/wp/template/dropdown-07/`)
- **Preview URL**: `https://preview.colorlib.com/theme/bootstrap/dropdown-07/`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo standard)

Design tokens captured from the original (see docs/replication.md):

- **Brand/Primary color**: `#4d80e4` (button background, links)
- **Hover/dark accent**: `#2161dd` (button hover state)
- **Page background**: `#79a0eb` (blue gradient-like solid)
- **Body text color**: gray
- **Heading color**: `#000`
- **Font family**: Roboto (Google Fonts, weights 400, 500, 700)
- **Button shape**: `border-radius: 5px`, padding `12px 16px`, shadow `0px 10px 20px -6px rgba(0,0,0,0.12)`
- **Form control**: height `48px`, `border-radius: 4px`, `border: 2px solid rgba(0,0,0,0.05)`
- **Dropdown menu**: white background, shadow `0px 10px 34px -20px rgba(0,0,0,0.41)`, `min-width: 20rem`, with CSS arrow pseudo-elements (top-border triangle)
- **Heading text**: white, `font-size: 28px`

Assets are NOT copied — placeholder images via `picsum.photos`, icons from
`lucide-react`, fonts via Google Fonts `<link>`.

DropForm lives in `apps/dropform` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Page layout and heading

The system SHALL render a centered page with a solid blue background (`#79a0eb`)
and a white heading "Dropdown #07" at the top, centered.

#### Scenario: Heading content

- **GIVEN** the page is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL show the text "Dropdown #07"
- **AND** it SHALL be centered horizontally
- **AND** it SHALL have white text color

### Requirement: Sign-Up trigger button

The system SHALL render a blue primary button labeled "Sign Up" that opens a
dropdown panel when clicked.

#### Scenario: Button visibility

- **GIVEN** the page is rendered
- **WHEN** the trigger button is displayed
- **THEN** it SHALL show the text "Sign Up"
- **AND** it SHALL have a blue background (`#4d80e4`)
- **AND** it SHALL have white text

#### Scenario: Button opens dropdown

- **GIVEN** the page is rendered
- **WHEN** the user clicks the "Sign Up" button
- **THEN** the dropdown form panel SHALL become visible
- **AND** the button SHALL report `aria-expanded="true"`

#### Scenario: Button closes dropdown

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "Sign Up" button again
- **THEN** the dropdown form panel SHALL be hidden
- **AND** the button SHALL report `aria-expanded="false"`

### Requirement: Dropdown form panel

The system SHALL render a dropdown panel containing a sign-up form that
appears below the trigger button with an arrow indicator pointing to the
button.

#### Scenario: Form heading

- **GIVEN** the dropdown is open
- **WHEN** the form panel is displayed
- **THEN** it SHALL show the heading "Create Your Account"

#### Scenario: Form fields

- **GIVEN** the dropdown is open
- **WHEN** the form panel is displayed
- **THEN** it SHALL contain a "Full Name" input field with placeholder "John Doe"
- **AND** it SHALL contain an "Email address" input field with placeholder "email@example.com"
- **AND** it SHALL contain a "Password" input field (type="password") with placeholder "Password"

#### Scenario: Remember me checkbox

- **GIVEN** the dropdown is open
- **WHEN** the form panel is displayed
- **THEN** it SHALL contain a checkbox labeled "Remember me"
- **AND** the checkbox SHALL be unchecked by default

#### Scenario: Submit button

- **GIVEN** the dropdown is open
- **WHEN** the form panel is displayed
- **THEN** it SHALL contain a "Sign in" button
- **AND** the "Sign in" button SHALL be styled as a blue primary button

#### Scenario: Form layout

- **GIVEN** the dropdown is open
- **WHEN** the form panel is displayed
- **THEN** the "Remember me" checkbox and "Sign in" button SHALL be on the same row
- **AND** the checkbox SHALL be on the left
- **AND** the button SHALL be on the right

### Requirement: Dropdown positioning and arrow

The system SHALL position the dropdown panel below the trigger button with a
CSS-drawn arrow pointing upward toward the button.

#### Scenario: Arrow indicator

- **GIVEN** the dropdown is open
- **WHEN** the form panel is displayed
- **THEN** it SHALL show a white upward-pointing arrow indicator above the panel
- **AND** the arrow SHALL be positioned approximately 30px from the left

### Requirement: Responsive behavior

The system SHALL center the dropdown on small screens.

#### Scenario: Mobile centering

- **GIVEN** the viewport width is less than 768px
- **WHEN** the dropdown is open
- **THEN** the dropdown panel SHALL be horizontally centered on screen

### Requirement: Accessibility

The system SHALL be accessible with proper ARIA attributes and keyboard
navigation.

#### Scenario: ARIA attributes

- **GIVEN** the component is rendered
- **WHEN** inspected for accessibility
- **THEN** the trigger button SHALL have `aria-haspopup="true"` and `aria-expanded`
- **AND** the dropdown form SHALL have an accessible role

#### Scenario: Keyboard dismiss

- **GIVEN** the dropdown is open
- **WHEN** the user presses Escape
- **THEN** the dropdown SHALL close

### Requirement: Footer with Component Dock link

The system SHALL render a footer section containing a link to
`https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to `https://www.componentdock.com/`
- **AND** the link text SHALL mention "Component Dock"

## Verification checklist

- [ ] Heading renders centered with white text on blue background
- [ ] "Sign Up" button renders with correct brand blue `#4d80e4`
- [ ] Clicking button opens/closes dropdown panel
- [ ] `aria-expanded` toggles correctly on trigger button
- [ ] Form contains "Create Your Account" heading
- [ ] Form contains Full Name, Email, and Password fields with correct placeholders
- [ ] "Remember me" checkbox present and unchecked by default
- [ ] "Sign in" button present and styled blue
- [ ] Checkbox and Sign in button aligned on same row
- [ ] Arrow indicator visible above dropdown panel
- [ ] Dropdown centers on mobile viewports (<768px)
- [ ] Escape key closes dropdown
- [ ] Footer links to Component Dock
- [ ] No reference to ColorLib in any app source file
- [ ] `public/CNAME` contains `dropform.free.componentdock.com`
- [ ] `package.json` has `homepage` set to `https://dropform.free.componentdock.com`
- [ ] Tests achieve 100% coverage (lines, functions, branches, statements)
