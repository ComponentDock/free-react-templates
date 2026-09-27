# Template: RegBox (Registration Form)

## Purpose

Recreation of **Colorlib Reg Form V26** — a clean, centered account registration form with a light blue full-viewport background and decorative corner images.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-26/
- **Live preview:** https://colorlib.com/etc/regform/colorlib-regform-26/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-26.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout with full-viewport background

The page SHALL render a full-height light blue (#accffe) background with content centered vertically and horizontally.

#### Scenario: Card is centered on the blue background

- **WHEN** I visit the RegBox page
- **THEN** I see a white card centered horizontally and vertically on a light blue background
- **AND** the card has a box shadow of 0px 0px 10px 0px rgba(0, 0, 0, 0.2)

### Requirement: Registration form heading

The card SHALL display the heading "New Account?" in uppercase with letter-spacing.

#### Scenario: Heading is visible

- **WHEN** I visit the RegBox page
- **THEN** I see a heading with text "New Account?"
- **AND** the heading is uppercase with letter-spacing 3px
- **AND** the heading uses SemiBold weight (600)

### Requirement: Form fields

The form SHALL contain five input fields: Username, Phone Number, Mail, Password, and Confirm Password.

#### Scenario: All five fields are rendered with icons

- **WHEN** I visit the RegBox page
- **THEN** I see a text input labeled "Username" with a user icon
- **AND** I see a text input labeled "Phone Number" with a phone icon
- **AND** I see an email input labeled "Mail" with a mail icon
- **AND** I see a password input labeled "Password" with a lock icon
- **AND** I see a password input labeled "Confirm Password" with a lock icon

#### Scenario: Fields have underline-style borders

- **WHEN** I visit the RegBox page
- **THEN** each form field has a bottom border only (no full border box)
- **AND** the border color is #e6e6e6 by default
- **AND** the border color changes to #accffe on focus

### Requirement: Register button

The form SHALL contain a Register button with light blue background and uppercase text.

#### Scenario: Register button is visible and styled

- **WHEN** I visit the RegBox page
- **THEN** I see a "Register" button with a #99ccff background
- **AND** the button text is uppercase with letter-spacing 2px
- **AND** the button has a height of 49px

#### Scenario: Button hover animation

- **WHEN** I hover over the Register button
- **THEN** a semi-transparent blue overlay sweeps in from the left

### Requirement: Decorative images on desktop

The page SHALL display decorative images at the bottom corners of the card on desktop viewports.

#### Scenario: Decorative images appear on desktop

- **WHEN** the viewport is wider than 767px
- **THEN** a decorative image appears at the bottom-left of the form card
- **AND** a decorative image appears at the bottom-right of the form card

#### Scenario: Decorative images hidden on mobile

- **WHEN** the viewport is 767px or narrower
- **THEN** the decorative images are hidden

### Requirement: Footer with Component Dock link

The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present and opens externally

- **WHEN** I visit the RegBox page
- **THEN** I see a footer with a link to "Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Document title

The page SHALL set the document title to "RegBox — Registration Form Template".

#### Scenario: Title is set on mount

- **WHEN** I visit the RegBox page
- **THEN** the document title is "RegBox — Registration Form Template"
