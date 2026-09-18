# Template: MsgDrop (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V13** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source**: https://colorlib.com/wp/template/contact-form-v13/
- **Preview URL**: https://preview.colorlib.com/theme/contact-form-v13/ (returned 404 at time of research — screenshot used as sole reference)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v13.jpg
- **Description**: A split-screen contact form with a dark map background on the left and a clean white form panel on the right. Features a green phone number badge overlay on the map, validated form fields with colored underlines, and a gradient coral-to-pink Send button.

## Requirements

### Requirement: Split-screen contact form layout

The page SHALL display a split-screen layout with a map panel on the left and a contact form on the right.

#### Scenario: Full-page split layout

- **WHEN** the user loads the MsgDrop page
- **THEN** the viewport is split into two equal columns
- **AND** the left column displays a dark map background image
- **AND** the right column displays a white form panel

#### Scenario: Responsive layout on mobile

- **WHEN** the user views on a viewport width less than 768px
- **THEN** the two columns stack vertically
- **AND** the map section appears above the form

### Requirement: Map panel with phone badge

The left panel SHALL display a dark map background with a green phone badge overlay.

#### Scenario: Phone badge display

- **WHEN** the user views the map panel
- **THEN** a green pill-shaped badge is visible on the map
- **AND** the badge displays a phone number "(+00) 345 6389"
- **AND** the badge includes a phone icon to the left of the number

#### Scenario: Phone badge hover

- **WHEN** the user hovers over the phone badge
- **THEN** the badge shows a subtle hover effect (opacity or scale change)

### Requirement: Contact form fields

The right panel SHALL display a form with Name, Email, Phone, and Message fields.

#### Scenario: Form heading

- **WHEN** the user views the form panel
- **THEN** a heading "Contact Us" is displayed at the top
- **AND** the heading is large, bold, and dark colored

#### Scenario: Name field

- **WHEN** the user views the Name field
- **THEN** a "Name" label is displayed above the input
- **AND** the input has a bottom border line

#### Scenario: Email field

- **WHEN** the user views the Email field
- **THEN** an "Email" label is displayed above the input
- **AND** the input has a bottom border line

#### Scenario: Phone field

- **WHEN** the user views the Phone field
- **THEN** a "Phone" label is displayed above the input
- **AND** the input shows placeholder "Phone Number..."
- **AND** the input has a bottom border line

#### Scenario: Message field

- **WHEN** the user views the Message field
- **THEN** a "Message" label is displayed above the textarea
- **AND** the textarea shows placeholder "Questions/Comments..."
- **AND** the textarea has a bottom border line

#### Scenario: Field focus underline

- **WHEN** the user clicks into any form field
- **THEN** the bottom border turns coral/red (#FF6B6B)
- **AND** the border remains coral/red while the field is focused

#### Scenario: Field validation checkmark

- **WHEN** the user fills in a valid Name or Email value
- **THEN** a green checkmark icon appears to the right of the field

### Requirement: Send button

The form SHALL include a Send button with gradient styling.

#### Scenario: Button display

- **WHEN** the user views the form
- **THEN** a "Send" button is displayed at the bottom of the form
- **AND** the button has a coral-to-pink gradient background
- **AND** the button text is white
- **AND** the button is fully rounded (pill shape)

#### Scenario: Button hover

- **WHEN** the user hovers over the Send button
- **THEN** the button shows a hover effect (brightness change or scale)

#### Scenario: Button click

- **WHEN** the user fills all required fields
- **AND** the user clicks the Send button
- **THEN** the form submission is handled (prevent default, show confirmation)

### Requirement: Footer attribution

The page SHALL include a footer with a Component Dock link.

#### Scenario: Component Dock link

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer or attribution line is visible
- **AND** it links to https://www.componentdock.com/
- **AND** the link text reads "Component Dock"

## Verification Checklist

- [ ] Split-screen layout renders correctly (50/50 columns)
- [ ] Left panel shows dark map background image
- [ ] Green phone badge renders on the map with phone icon and number
- [ ] Right panel shows white form with "Contact Us" heading
- [ ] All four fields render: Name, Email, Phone, Message
- [ ] Field labels match the original ("Name", "Email", "Phone", "Message")
- [ ] Placeholder text matches ("Phone Number...", "Questions/Comments...")
- [ ] Focus state shows coral/red underline
- [ ] Validation shows green checkmark on valid fields
- [ ] Send button has coral-to-pink gradient
- [ ] Send button is pill-shaped (fully rounded)
- [ ] Responsive: stacks vertically on mobile (<768px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `msgdrop.free.componentdock.com`
- [ ] `homepage` in package.json is `https://msgdrop.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`
- [ ] Footer credits Component Dock (not ColorLib)
