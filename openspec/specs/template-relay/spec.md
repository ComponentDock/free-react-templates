# Spec: Relay — Email Confirmation Modal Template

> Recreation of ColorLib Modal 08
> (https://colorlib.com/wp/template/modal-08/)

## Purpose

A single-page React template featuring a centered launch button that opens a
confirmation modal for email/newsletter subscriptions. The modal displays a
gradient header with a skewed bottom edge, an email envelope icon, a
"You've Got Mail!" heading, and the recipient's email address.

## Requirements

### Requirement: Page layout and launch button

The template SHALL render a centered hero section with the template name "Relay",
a description, and a "Launch Modal" button.

#### Scenario: Page loads with launch button

- **GIVEN** the page is loaded
- **THEN** I see a heading "Relay"
- **AND** I see a button "Launch Modal"

#### Scenario: Document title is set

- **GIVEN** the page is loaded
- **THEN** the document title is "Relay — Email Confirmation Modal Template"

### Requirement: Modal opens on button click

Clicking the "Launch Modal" button SHALL open a centered confirmation modal dialog.

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** I click the "Launch Modal" button
- **THEN** I see a dialog with the title "You've Got Mail!"
- **AND** I see the text "We sent confirmation link to:"
- **AND** I see the email address "johndoe@gmail.com"

### Requirement: Modal closes on user action

The modal SHALL close when the user clicks the close button, the backdrop,
presses Escape, or clicks "Go to inbox".

#### Scenario: Modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** I click the close button
- **THEN** the modal is not visible

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** I click the backdrop overlay
- **THEN** the modal is not visible

#### Scenario: Modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** I press the Escape key
- **THEN** the modal is not visible

#### Scenario: Modal closes on Go to inbox click

- **GIVEN** the modal is open
- **WHEN** I click the "Go to inbox" button
- **THEN** the modal is not visible

### Requirement: Focus management

The modal SHALL restore focus to the previously focused element when closed.

#### Scenario: Focus restored on close

- **GIVEN** the modal is open and a trigger button was focused
- **WHEN** the modal closes
- **THEN** focus returns to the trigger button

### Requirement: Accessibility

The modal SHALL have proper ARIA attributes.

#### Scenario: ARIA attributes

- **GIVEN** the modal is open
- **THEN** the dialog has aria-modal="true"
- **AND** the dialog has an aria-label "Email confirmation modal"

### Requirement: Footer with Component Dock link

The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer link

- **GIVEN** the page is loaded
- **THEN** I see a link to "https://www.componentdock.com/"
- **AND** the link text is "More templates at Component Dock"

## Design Tokens

| Token                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Font family           | Poppins (300–700 via Google Fonts)       |
| Primary button        | #007bff bg, #0069d9 hover                |
| Modal header gradient | linear-gradient(45deg, #915eff, #ff8e59) |
| Modal header height   | 230px                                    |
| Modal max-width       | 600px                                    |
| Icon container        | 100×100px circle                         |
| Body background       | #fff (white)                             |
| Text color            | #212529                                  |
| Shadow                | 0px 10px 34px -15px rgba(0,0,0,0.24)     |

## Component Architecture

```
App.tsx
├── LaunchSection.tsx        — hero area with title + launch button
├── ConfirmationModal.tsx    — modal dialog with gradient header
└── Footer.tsx               — Component Dock attribution
```

## Notes

- Reuses `packages/ui` where applicable
- Uses `lucide-react` `X` icon for close button
- Email icon rendered as inline SVG envelope
- Skewed header bottom edge approximated with CSS clip-path
- No ColorLib references in app source
