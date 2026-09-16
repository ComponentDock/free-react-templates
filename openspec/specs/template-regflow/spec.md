# Template: Regflow (Registration / Contact Form)

## Purpose

Regflow is a single-page registration/contact form template — a React
recreation of the ColorLib free "Colorlib Regform 23" template
(source: https://colorlib.com/wp/template/colorlib-regform-23/,
demo: https://colorlib.com/etc/regform/colorlib-regform-23/),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Card background: `#39459b` (blue-purple)
- Card border: `#0d99d7` (cyan), 10px solid
- Form label/border color: `#00ade6` (light cyan)
- Focus/valid border: `#fff` (white)
- Button hover fill: `#2098D1` (medium blue)
- Button: uppercase, white text, white 2px border, centered, 162×51px
- Body font: Montserrat (Google Fonts, weights 400, 600, 700)
- Full-viewport background image with centered card
- Mobile: card loses border/shadow, body becomes solid blue background

**Note:** The live preview at `preview.colorlib.com/theme/colorlib-regform-23/`
returns 404. Research used the actual demo at
`colorlib.com/etc/regform/colorlib-regform-23/` and the CSS file
(`css/style.css`, 4,997 bytes, 230 lines — all hand-written, no framework).
The screenshot (`colorlib-reg-form-23.jpg`) was referenced for visual
confirmation.

Regflow lives in `apps/regflow` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Form wrapper

The system SHALL render a full-viewport wrapper with a background image
placeholder, centered horizontally and vertically, containing a styled form
card.

#### Scenario: Wrapper layout

- **GIVEN** the page is rendered
- **WHEN** the wrapper is displayed
- **THEN** it SHALL occupy the full viewport height
- **AND** it SHALL center the form card both horizontally and vertically
- **AND** it SHALL display a background image (picsum.photos placeholder)

### Requirement: Form card

The system SHALL render a centered card with a blue-purple (#39459b)
background, a thick cyan (#0d99d7) border, a subtle box-shadow, and
padding around the form content.

#### Scenario: Card appearance

- **GIVEN** the page is rendered
- **WHEN** the form card is displayed
- **THEN** it SHALL have a background color of #39459b
- **AND** it SHALL have a 10px solid border in #0d99d7
- **AND** it SHALL have a box shadow of `0px 0px 10px 0px rgba(0, 0, 0, 0.2)`
- **AND** it SHALL be capped at 758px max-width

#### Scenario: Mobile card

- **GIVEN** the viewport width is below 768px
- **WHEN** the form card is displayed
- **THEN** the border SHALL be removed
- **AND** the box-shadow SHALL be removed
- **AND** the card padding SHALL be reduced

### Requirement: Form heading and description

The system SHALL render an uppercase heading "CONTACT US" in bold Montserrat
(45px desktop, 38px mobile), followed by a centered descriptive paragraph.

#### Scenario: Heading content

- **GIVEN** the page is rendered
- **WHEN** the form heading is displayed
- **THEN** it SHALL show "CONTACT US" in uppercase, bold, white text
- **AND** it SHALL use Montserrat Bold font
- **AND** it SHALL be centered

### Requirement: Form fields

The system SHALL render three form fields: "Your Name" (text input),
"Your Mail" (text input), and "Your Message" (textarea), each with a
floating label that animates upward on focus/validity and an animated
underline that scales from 0 to full width.

#### Scenario: Field labels

- **GIVEN** the page is rendered
- **WHEN** the form fields are displayed
- **THEN** each field SHALL show a placeholder label in cyan (#00ade6)
- **AND** each field SHALL have a bottom border in #00ade6

#### Scenario: Field focus animation

- **GIVEN** the page is rendered
- **WHEN** the user focuses a form field
- **THEN** the label SHALL translate upward and scale down to 0.8
- **AND** the bottom border SHALL transition to white (#fff)
- **AND** a white underline SHALL animate from left to right (scaleX 0→1)

#### Scenario: Field validation

- **GIVEN** a field contains a valid value
- **WHEN** the field loses focus
- **THEN** the label SHALL remain in the translated/scaled-up position
- **AND** the bottom border SHALL remain white

### Requirement: Submit button

The system SHALL render a centered "SUBMIT" button with a right-arrow icon,
uppercase text, white 2px border, transparent background. On hover, a blue
(#2098D1) fill SHALL slide in from the left (scaleX transition), and the
arrow icon SHALL shift 4px to the right.

#### Scenario: Button appearance

- **GIVEN** the page is rendered
- **WHEN** the submit button is displayed
- **THEN** it SHALL show "SUBMIT" text with a right-arrow icon
- **AND** it SHALL have a white 2px border
- **AND** it SHALL have a transparent background

#### Scenario: Button hover effect

- **GIVEN** the page is rendered
- **WHEN** the user hovers over the submit button
- **THEN** a blue (#2098D1) fill SHALL slide in from the left
- **AND** the arrow icon SHALL translate 4px to the right
- **AND** the transition SHALL take 0.3s

### Requirement: Accessibility

The system SHALL use semantic form elements with proper labels, aria
attributes on inputs, and keyboard-navigable submit button.

#### Scenario: Keyboard navigation

- **GIVEN** the page is rendered
- **WHEN** the user navigates with keyboard
- **THEN** all form fields SHALL be focusable via Tab
- **AND** the submit button SHALL be activatable via Enter/Space

## Verification checklist

- [ ] Full-viewport wrapper with background image and centered card
- [ ] Card has #39459b background, #0d99d7 border, shadow
- [ ] Heading "CONTACT USE" (uppercase) in Montserrat Bold, centered
- [ ] Three fields with floating label animation (translateY + scale)
- [ ] Animated underline on focus (scaleX transition)
- [ ] Submit button with arrow icon, transparent bg, white border
- [ ] Button hover: blue fill slides from left, arrow shifts right
- [ ] Mobile responsive: border/shadow removed, card goes full-width
- [ ] Form fields have proper labels and aria attributes
- [ ] No ColorLib references in any app source files
- [ ] Footer links to Component Dock (not ColorLib) — NOTE: original has
  no footer; add a minimal footer with Component Dock attribution
- [ ] 100% test coverage on all component files
