# Template: ModalVault (Password-Protected Modal)

## Purpose

Recreation of the ColorLib "Modal 20" template — a centered full-viewport page with a password-protected content modal featuring a lock icon, password input field, and submit button. Clean, minimal aesthetic with a blue accent.

- **Source:** ColorLib Modal 20 — https://colorlib.com/wp/template/modal-20/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-20/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token                  | Value                                     |
| ---------------------- | ----------------------------------------- |
| Body font              | `"Roboto", sans-serif` (weights 300, 400) |
| Heading font           | `"Roboto", sans-serif`                     |
| Brand color            | `#3e64ff` (blue)                          |
| Brand color light bg   | `rgba(62, 100, 255, 0.05)`               |
| Modal body background  | `#fff` (white)                            |
| Modal border-radius    | `7px`                                     |
| Modal shadow           | `0 10px 50px -10px rgba(0,0,0,0.9)`       |
| Heading color          | `#000` (black)                            |
| Description text color | `#777`                                    |
| Paragraph text color   | `#b3b3b3`, font-weight 300                |
| Close button color     | `#ccc`, hover `#000`                      |
| Button border-radius   | `4px` (overrides Bootstrap .btn default)  |
| Button padding         | `10px 30px`                               |
| Input border           | none; `border-bottom: 1px solid #ccc`     |
| Input focus border     | `border-bottom: 1px solid #000`           |
| Icon container size    | `80px × 80px`, circle, `rgba(62,100,255,0.05)` bg |
| Icon color             | `#3e64ff`                                 |

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading and a launch button.

#### Scenario: Launch page

- **GIVEN** the ModalVault app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered column
- **AND** it SHALL show the heading "ModalVault"
- **AND** it SHALL show a button labeled "Launch modal"

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the password-protected modal SHALL open centered over the page

### Requirement: Modal shell

The system SHALL render a centered modal dialog with a white background, rounded corners, and a prominent shadow.

#### Scenario: Modal appears on trigger

- **GIVEN** the launch button has been clicked
- **THEN** a dialog element SHALL be present with `role="dialog"` and `aria-modal="true"`
- **AND** the modal background SHALL be white (#fff)
- **AND** the modal SHALL have a border-radius of 7px
- **AND** the modal SHALL have a box-shadow of `0 10px 50px -10px rgba(0,0,0,0.9)`

#### Scenario: Modal does not render when closed

- **GIVEN** the modal is closed
- **THEN** no dialog element SHALL be present in the DOM

### Requirement: Lock icon

The system SHALL display a circular lock icon container centered at the top of the modal body.

#### Scenario: Lock icon container

- **GIVEN** the modal is open
- **THEN** a circular container SHALL be displayed at the top center of the modal
- **AND** the container SHALL be 80px × 80px
- **AND** the container SHALL have a light blue background (`rgba(62, 100, 255, 0.05)`)
- **AND** the container SHALL contain a lock icon in brand blue (#3e64ff)

### Requirement: Password protection label

The system SHALL display a text label indicating the content is password protected.

#### Scenario: Protection label

- **GIVEN** the modal is open
- **THEN** the text "This link is password protected" SHALL be displayed centered below the lock icon
- **AND** the label SHALL be styled as a label/heading element

### Requirement: Description text

The system SHALL display a description paragraph below the label.

#### Scenario: Description content

- **GIVEN** the modal is open
- **THEN** a paragraph SHALL be displayed with placeholder description text
- **AND** the description text SHALL be in gray color (#777)
- **AND** the font-size SHALL be 14px

### Requirement: Password input

The system SHALL render a password input field with a bottom-border-only style.

#### Scenario: Input field

- **GIVEN** the modal is open
- **THEN** a password input SHALL be displayed centered below the description
- **AND** the input SHALL have placeholder text "Enter password"
- **AND** the input SHALL have a bottom border of 1px solid #ccc (no other borders)
- **AND** the input SHALL be centered horizontally

#### Scenario: Input focus state

- **WHEN** the user focuses the password input
- **THEN** the bottom border SHALL change to 1px solid #000
- **AND** no box-shadow or outline SHALL appear

### Requirement: Submit button

The system SHALL render a submit button centered below the input.

#### Scenario: Submit button visible

- **GIVEN** the modal is open
- **THEN** a button labeled "Submit" SHALL be displayed centered below the input
- **AND** the button SHALL be styled as a primary button (brand blue background)

#### Scenario: Submit button style

- **GIVEN** the modal is open
- **THEN** the submit button SHALL have a border-radius of 4px
- **AND** the button SHALL have padding of 10px vertical and 30px horizontal

### Requirement: Close button

The system SHALL render a close button (×) in the top-right corner of the modal.

#### Scenario: Close button visible

- **GIVEN** the modal is open
- **THEN** a button with aria-label "Close" SHALL be visible in the top-right corner of the modal
- **AND** the close icon SHALL be in light gray color (#ccc)

#### Scenario: Close button hover

- **WHEN** the user hovers over the close button
- **THEN** the close icon color SHALL change to #000

#### Scenario: Close button dismisses modal

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button
- **THEN** the modal SHALL close

### Requirement: Dismiss actions

The system SHALL close the modal when the user clicks the close button, presses Escape, or clicks the backdrop.

#### Scenario: Dismiss via close button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (×)
- **THEN** the modal SHALL close

#### Scenario: Dismiss via Escape key

- **GIVEN** the modal is open
- **WHEN** the user presses Escape
- **THEN** the modal SHALL close

#### Scenario: Dismiss via backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks the backdrop (outside the modal content)
- **THEN** the modal SHALL close

#### Scenario: No dismiss on content click

- **GIVEN** the modal is open
- **WHEN** the user clicks inside the modal content
- **THEN** the modal SHALL NOT close

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer link

- **GIVEN** the app is rendered
- **THEN** a footer SHALL be present with a link to https://www.componentdock.com/
- **AND** the link SHALL open in a new tab with `rel="noopener noreferrer"`
- **AND** the link text SHALL be "Component Dock"

### Requirement: Document title

The system SHALL set the document title on load.

#### Scenario: Title set

- **GIVEN** the app is rendered
- **THEN** the document title SHALL be "ModalVault — Password-Protected Modal"
