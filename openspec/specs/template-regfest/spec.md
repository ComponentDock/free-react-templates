# Template: Regfest (Event Registration Form)

## Purpose

Recreation of ColorLib **Regform 21** (`colorlib-regform-21`) — a full-viewport
event registration form with a two-column card layout over a gradient background.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-21/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-21/ (unreachable at time of prep; screenshot used as primary reference)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

Extracted from the screenshot (preview unreachable, CSS not fetchable):

| Token              | Value                                   | Source                              |
| ------------------ | --------------------------------------- | ----------------------------------- |
| Background gradient | `linear-gradient(135deg, #5b2d8e 0%, #8b4494 40%, #c56b8a 100%)` | Full-viewport bg |
| Card left panel    | `#1a1040` (dark navy)                   | Form container background           |
| Accent / brand     | `#e8836b` (coral/salmon)                | Title text, button, contact info    |
| Button bg          | `#e8836b` (coral/salmon)                | "Send your booking" button          |
| Button text        | `#ffffff`                               | Button label color                  |
| Form input border  | `rgba(255,255,255,0.2)` (translucent white) | Underline-style input borders   |
| Title font         | Serif — Playfair Display or Georgia     | "Set The Event" heading             |
| Body font          | System sans-serif                       | Form labels, contact info           |
| Card layout        | Two-column: left form (50%), right image + contact (50%) | Centered card |
| Card width         | ~700px max                              | Centered in viewport                |
| Card border-radius | ~0px (sharp corners)                    | From screenshot                     |
| Button border-radius | ~4px (slight rounding)              | From screenshot                     |

## Visual Design Notes

- Full-viewport purple-to-mauve gradient background.
- Centered card split into two columns:
  - **Left:** Dark navy panel with the form. Title "Set The Event" in coral serif.
    Fields: Price (displayed as text "$270"), People (dropdown, default "1"),
    Name (text input), Mail (text input), Phone (text input), Comment (textarea).
    All inputs are underline-only style. Submit button "Send your booking" in
    coral with white text.
  - **Right:** Full-height image (performer/event photo). Below the image, contact
    details in coral: address line, phone, email.
- No visible card border or shadow — the dark navy background creates contrast
  against the gradient.

## Requirements

### Feature: Regfest — Event Registration Form

#### Scenario: Full-viewport gradient background renders

- **GIVEN** the page loads
- **THEN** a full-viewport gradient background is visible transitioning from deep purple to mauve/pink

#### Scenario: Centered two-column card layout

- **GIVEN** the page loads
- **THEN** a centered card is displayed with two columns
- **AND** the left column has a dark navy background
- **AND** the right column contains an image

#### Scenario: Form title is displayed

- **GIVEN** the card is visible
- **THEN** the title "Set The Event" is displayed in coral serif font
- **AND** the title is in the left column

#### Scenario: Form fields render correctly

- **GIVEN** the form is visible
- **THEN** a "Price" field displays "$270" as text
- **AND** a "People" field renders a dropdown with default value "1"
- **AND** "Name", "Mail", "Phone" text inputs are rendered with underline borders
- **AND** a "Comment" textarea is rendered with an underline border

#### Scenario: Submit button renders

- **GIVEN** the form is visible
- **THEN** a "Send your booking" button is displayed in coral with white text
- **AND** the button has slight rounded corners

#### Scenario: Contact information displays

- **GIVEN** the right column is visible
- **THEN** an event image is displayed in the right column
- **AND** contact details are displayed below the image in coral text
- **AND** the contact details include an address, phone number, and email

#### Scenario: Responsive layout stacks columns

- **GIVEN** the viewport width is below 640px
- **THEN** the two columns stack vertically
- **AND** the image appears above the form

## Verification Checklist

- [ ] Gradient background fills entire viewport
- [ ] Card is centered horizontally and vertically
- [ ] Left panel has dark navy (#1a1040) background
- [ ] Title "Set The Event" uses coral (#e8836b) serif font
- [ ] All form fields have underline-only borders
- [ ] Price field displays "$270" (non-editable or text display)
- [ ] People dropdown defaults to "1"
- [ ] Comment field is a textarea (not input)
- [ ] Submit button styled in coral with white text
- [ ] Right column shows an image + contact info
- [ ] Contact info text is coral colored
- [ ] Responsive: columns stack on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
