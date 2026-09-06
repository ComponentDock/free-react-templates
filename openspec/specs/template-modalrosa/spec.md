# Template: ModalRosa (Modal)

## Purpose

Recreation of the ColorLib "Modal 13" template — a centered full-viewport page with a Bootstrap-style light pink modal popup featuring an email subscription form, Instagram branding, and a "No, thanks" / "Subscribe" dual-button layout.

- **Source:** [ColorLib Modal 13](https://colorlib.com/wp/template/modal-13/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-13/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-13.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token                 | Value                                                        | Source                       |
| --------------------- | ------------------------------------------------------------ | ---------------------------- |
| Body font             | `"Roboto", sans-serif`                                       | style.css `body`             |
| Heading font          | `"Roboto", sans-serif`                                       | style.css headings           |
| Body text color       | `#b3b3b3` (light gray)                                       | style.css `p`                |
| Modal text color      | `#fff` (white)                                               | style.css `.modal`           |
| Modal heading color   | `#000` (black)                                               | style.css `.modal h3`        |
| Modal body background | `#f9eaf2` (light pink)                                       | style.css `.bg-3`            |
| Modal border radius   | `7px`                                                        | style.css `.modal`           |
| Modal content radius  | `7px`                                                        | style.css `.modal-content`   |
| Overlay color         | transparent (no dark overlay)                                | — (no `.overlay` class used) |
| Button border radius  | `4px`                                                        | style.css `.btn`             |
| Close button color    | `#000` (black)                                               | style.css `.close-btn`       |
| Form control border   | `transparent` with `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1)` | style.css `.form-control`    |
| Box shadow (modal)    | `0 10px 50px -10px rgba(0,0,0,0.9)`                          | style.css `.modal-body`      |
| Logo width            | `70px`                                                       | style.css `.logo img`        |
| Cancel text color     | `rgba(255,255,255,0.5)`                                      | style.css `.cancel a`        |
| Cancel text size      | `13px`, bold                                                 | style.css `.cancel a`        |
| Separator line        | `1px solid rgba(255,255,255,0.3)`                            | style.css `.line`            |

## Visual design (from screenshot + HTML)

The template shows a full-viewport centered layout with a light background. In the center is a heading "Modal #3" and a Bootstrap secondary button labeled "Launch modal". When clicked, a modal dialog appears centered on screen with:

1. **Background**: Light pink (`#f9eaf2`) — no dark overlay, no background image
2. **Close button**: Black X icon in the top-right corner, with transition on hover
3. **Logo**: Instagram SVG icon centered at the top, 70px wide
4. **Heading**: "Exclusives offer from Instagram" in black, 22px
5. **Description**: Paragraph text in light gray (#777) with the template's lorem ipsum
6. **Email form**: Full-width email input with transparent border and subtle shadow, placeholder "Enter your email address"
7. **Dual buttons**: Two equal-width buttons in a 2-column row:
   - Left: "No, thanks" (secondary/outline style)
   - Right: "Subscribe" (primary style)
8. **Cancel link**: Small text at the bottom: "The sky was cloudless and of a deep dark blue." in semi-transparent white, 13px bold

The overall aesthetic is clean, minimal, and friendly — light pink background with black text, Bootstrap-style form and buttons. No dark overlay, no background image, just a solid pink modal.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading and a launch button.

#### Scenario: Launch page

- **GIVEN** the ModalRosa app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered column
- **AND** it SHALL show the heading "Modal #3"
- **AND** it SHALL show a button labeled "Launch modal"
- **AND** the button SHALL have slightly rounded corners (border-radius 4px) and comfortable padding

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the offer modal SHALL open centered over the page

### Requirement: Offer modal shell

The system SHALL render a centered (max-width 500px) rounded (7px) modal dialog with a light pink background.

#### Scenario: Modal appears on trigger

- **GIVEN** the launch button has been clicked
- **THEN** a dialog element SHALL be present with role="dialog" and aria-modal="true"
- **AND** the modal background SHALL be light pink (#f9eaf2)
- **AND** the modal SHALL have a box-shadow of `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** there SHALL be no dark semi-transparent overlay

#### Scenario: Modal does not render when closed

- **GIVEN** the modal is closed
- **THEN** no dialog element SHALL be present in the DOM

### Requirement: Close button

The system SHALL render a black close button (X) in the top-right corner of the modal.

#### Scenario: Close button visible

- **GIVEN** the modal is open
- **THEN** a button with aria-label "Close" SHALL be visible in the top-right corner
- **AND** the close button SHALL display a black X icon

#### Scenario: Close button dismisses modal

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button
- **THEN** the modal SHALL close

### Requirement: Modal logo

The system SHALL render a logo icon centered at the top of the modal, approximately 70px wide.

#### Scenario: Logo displays

- **GIVEN** the modal is open
- **THEN** a centered SVG logo SHALL be rendered at the top of the modal content
- **AND** the logo SHALL be approximately 70px wide

### Requirement: Modal heading

The system SHALL display a heading "Exclusives offer from Instagram" in black text, approximately 22px.

#### Scenario: Heading visible

- **GIVEN** the modal is open
- **THEN** the heading "Exclusives offer from Instagram" SHALL be displayed
- **AND** the heading SHALL be in black color and approximately 22px font size

### Requirement: Modal description

The system SHALL display a descriptive paragraph below the heading in light gray text.

#### Scenario: Description visible

- **GIVEN** the modal is open
- **THEN** a paragraph SHALL be shown below the heading
- **AND** the paragraph text SHALL be in a light gray color (#777)

### Requirement: Email subscription form

The system SHALL render an email input and a dual-button row for subscription.

#### Scenario: Form layout

- **GIVEN** the modal is open
- **THEN** an email input field with placeholder "Enter your email address" SHALL be visible
- **AND** the input SHALL have a transparent border with subtle box-shadow
- **AND** a "No, thanks" button SHALL be displayed in the left column
- **AND** a "Subscribe" button SHALL be displayed in the right column
- **AND** both buttons SHALL be full-width within their columns
- **AND** the buttons SHALL have a border-radius of 4px

#### Scenario: Form submission closes modal

- **GIVEN** the modal is open
- **WHEN** the user enters an email and clicks "Subscribe"
- **THEN** the modal SHALL close

### Requirement: Cancel text

The system SHALL display cancel text at the bottom of the modal in semi-transparent white, 13px bold.

#### Scenario: Cancel text visible

- **GIVEN** the modal is open
- **THEN** the text "The sky was cloudless and of a deep dark blue." SHALL be displayed at the bottom
- **AND** the text SHALL be in semi-transparent white color
- **AND** the text SHALL be 13px and bold

### Requirement: Dismiss actions

The system SHALL close the modal when the user clicks the close button, the "No, thanks" button, presses Escape, or clicks the backdrop.

#### Scenario: Dismiss via close button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal SHALL close

#### Scenario: Dismiss via no-thanks button

- **GIVEN** the modal is open
- **WHEN** the user clicks the "No, thanks" button
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
- **AND** the link SHALL open in a new tab with rel="noopener noreferrer"
- **AND** the link text SHALL be "Component Dock"

### Requirement: Responsive behavior

The system SHALL ensure the modal is responsive on mobile devices.

#### Scenario: Mobile layout

- **GIVEN** the user views the page on a mobile device
- **WHEN** the modal is open
- **THEN** the modal content SHALL stack vertically
- **AND** the email input and buttons SHALL stack vertically
- **AND** all text SHALL remain readable

### Requirement: Document title

The system SHALL set the document title on load.

#### Scenario: Title set

- **GIVEN** the app is rendered
- **THEN** the document title SHALL be "ModalRosa — Subscription Modal Popup"
