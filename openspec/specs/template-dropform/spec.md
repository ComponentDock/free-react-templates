# Template: DropForm (Contact Form V8)

## Purpose

DropForm is a React recreation of the ColorLib free "Contact Form V8" template —
a clean contact form with a map background, white card layout, and green accent
button.

- **Source**: ColorLib Contact Form V8 (`https://colorlib.com/wp/template/contact-form-v8/`)
- **Preview URL**: `https://preview.colorlib.com/theme/contact-form-v8/`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo standard)

Design tokens captured from the original (see docs/replication.md):

- **Brand/Primary color (button)**: `#4caf50` (green submit button, checkbox accent)
- **Button hover**: `#43a047`
- **Page background**: map image overlay (light gray `#e8e8e8`)
- **Card background**: `#ffffff` with shadow
- **Heading text color**: `#333333`
- **Body text / labels**: `#666666`
- **Input border**: `#cccccc`
- **Placeholder text**: `#999999`
- **Font family**: Poppins (Google Fonts, weights 300–600)
- **Input height**: 48px, `border-radius: 4px`, `border: 1px solid #ccc`
- **Button**: green `#4caf50`, uppercase, rounded, `padding: 10px 24px`

Assets are NOT copied — placeholder images via `picsum.photos`, icons from
`lucide-react`, fonts via Google Fonts `<link>`.

DropForm lives in `apps/dropform` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Page layout and heading

The system SHALL render a centered page with a map-like background and a white
card panel containing the contact form. The heading "Contact Us" SHALL be
displayed at the top of the card.

#### Scenario: Heading content

- **GIVEN** the page is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL show the text "Contact Us"
- **AND** it SHALL be left-aligned within the card
- **AND** it SHALL have dark text color

### Requirement: Contact form fields

The system SHALL render a contact form with Full Name, Email, and Message fields.

#### Scenario: Full Name field

- **GIVEN** the page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL contain a text input with placeholder "Full Name"

#### Scenario: Email field

- **GIVEN** the page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL contain an email input with placeholder "Email address"

#### Scenario: Message textarea

- **GIVEN** the page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL contain a textarea with placeholder "Your Message"

### Requirement: Send copy checkbox

The system SHALL render a checkbox labeled "Send copy to my-email" that is
unchecked by default.

#### Scenario: Checkbox default state

- **GIVEN** the page is rendered
- **WHEN** the checkbox is displayed
- **THEN** it SHALL be unchecked by default

#### Scenario: Checkbox toggle

- **GIVEN** the page is rendered
- **WHEN** the user clicks the checkbox
- **THEN** it SHALL toggle between checked and unchecked states

### Requirement: Submit button

The system SHALL render a green "SEND EMAIL" submit button.

#### Scenario: Button visibility

- **GIVEN** the page is rendered
- **WHEN** the button is displayed
- **THEN** it SHALL show the text "SEND EMAIL"
- **AND** it SHALL have a green background (`#4caf50`)
- **AND** it SHALL have white text

### Requirement: Form layout

The checkbox and submit button SHALL be on the same row at the bottom of the
form.

#### Scenario: Bottom row layout

- **GIVEN** the page is rendered
- **WHEN** the form bottom is displayed
- **THEN** the checkbox SHALL be on the left
- **AND** the submit button SHALL be on the right

### Requirement: Footer with Component Dock link

The system SHALL render a footer section containing a link to
`https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to `https://www.componentdock.com/`
- **AND** the link text SHALL mention "Component Dock"

## Verification checklist

- [ ] Heading renders "Contact Us" left-aligned in card
- [ ] Full Name, Email, and Message fields render with correct placeholders
- [ ] "Send copy to my-email" checkbox unchecked by default
- [ ] Checkbox toggles on click
- [ ] "SEND EMAIL" button renders with green background
- [ ] Checkbox and button aligned on same row
- [ ] Footer links to Component Dock
- [ ] No reference to ColorLib in any app source file
- [ ] `public/CNAME` contains `dropform.free.componentdock.com`
- [ ] `package.json` has `homepage` set to `https://dropform.free.componentdock.com`
- [ ] Tests achieve 100% coverage (lines, functions, branches, statements)
