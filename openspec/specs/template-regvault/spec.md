# Template: RegVault (Registration Form)

## Purpose

Recreation of ColorLib **Regform 21** (`colorlib-regform-21`).
Preview URL: https://preview.colorlib.com/theme/colorlib-regform-21/ (unreachable at prep time — design captured from screenshot).
Source: https://colorlib.com/wp/template/colorlib-regform-21/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-21.jpg

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design tokens

Extracted from the screenshot (preview was 404):

| Token           | Value                           | Notes                                                             |
| --------------- | ------------------------------- | ----------------------------------------------------------------- |
| Brand primary   | `#0C1456` (deep navy)           | Left panel background, card background                            |
| Accent / CTA    | `#E88DAA` (pink/coral)          | Heading text, button fill, label color                            |
| Page background | Gradient `#4B2A7A` → `#C47A94`  | Full-viewport purple-to-mauve diagonal                            |
| Text primary    | `#FFFFFF`                       | Body text on dark backgrounds                                     |
| Text secondary  | `#E88DAA`                       | Form labels, headings                                             |
| Button text     | `#FFFFFF`                       | White on pink button                                              |
| Button bg       | `#E88DAA`                       | Pink/coral fill                                                   |
| Input border    | `rgba(255,255,255,0.3)`         | Underline-only (bottom border)                                    |
| Card radius     | `0` (sharp corners)             | No border-radius on the card                                      |
| Button radius   | `4px`                           | Slightly rounded pill shape                                       |
| Font family     | Serif display + sans-serif body | Heading: serif (e.g. Playfair Display); body: sans (e.g. Poppins) |

## Requirements

### Requirement: Card layout

The page SHALL display a centered card split into two equal columns on desktop.

#### Scenario: Desktop card layout

- **WHEN** the page is loaded on a desktop viewport
- **THEN** a centered card is visible
- **AND** the card is split into two equal columns
- **AND** the left column has a dark navy background
- **AND** the right column displays an image with an overlay

#### Scenario: Mobile card layout

- **WHEN** the page is viewed on a mobile viewport
- **THEN** the card stacks vertically (form on top, image below)
- **AND** the form fields remain accessible and properly sized

### Requirement: Form heading

The left panel SHALL display a heading "Set The Event" in pink/coral serif font.

#### Scenario: Heading display

- **WHEN** the card is visible
- **THEN** the heading "Set The Event" appears in pink/coral serif font
- **AND** the heading is left-aligned within the left panel

### Requirement: Price display

The form SHALL display a read-only price field showing "$270".

#### Scenario: Price display

- **WHEN** the card is visible
- **THEN** "Price" label is shown with value "$270"
- **AND** the value is displayed as read-only text (not editable)

### Requirement: People selector

The form SHALL include a people dropdown selector defaulting to "1".

#### Scenario: People dropdown

- **WHEN** the card is visible
- **THEN** "People" label is shown with a dropdown selector defaulting to "1"

### Requirement: Form inputs

The form SHALL include Name, Mail, Phone, and Comment inputs with underline-only border styling.

#### Scenario: Name input

- **WHEN** the card is visible
- **THEN** a "Name" text input is shown with an underline-only border style

#### Scenario: Mail input

- **WHEN** the card is visible
- **THEN** a "Mail" text input is shown with an underline-only border style

#### Scenario: Phone input

- **WHEN** the card is visible
- **THEN** a "Phone" text input is shown with an underline-only border style

#### Scenario: Comment input

- **WHEN** the card is visible
- **THEN** a "Comment" input is shown with an underline-only border style

### Requirement: Submit button

The form SHALL include a "Send your booking" submit button with pink/coral background.

#### Scenario: Submit button display

- **WHEN** the card is visible
- **THEN** a "Send your booking" button is shown
- **AND** the button has a pink/coral background
- **AND** the button text is white

### Requirement: Contact info overlay

The right panel SHALL display contact information in a semi-transparent overlay at the bottom.

#### Scenario: Contact info display

- **WHEN** the card is visible
- **THEN** the right panel shows an overlay at the bottom
- **AND** the overlay displays an address, phone number, and email

### Requirement: Footer

The template SHALL include a footer linking to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the page is loaded
- **THEN** a footer is visible with a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

### Requirement: No ColorLib references

The app code SHALL NOT contain any references to ColorLib.

#### Scenario: Clean source

- **WHEN** the app source files are inspected
- **THEN** no file contains "colorlib" or "ColorLib" strings
- **AND** provenance is only in the spec, TEMPLATES.md, and PR
