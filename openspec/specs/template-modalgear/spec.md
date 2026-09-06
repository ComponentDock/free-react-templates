# Template: ModalGear (Modal)

## Purpose

Recreation of the ColorLib "Modal 15" template — a centered full-viewport page with a Bootstrap-style signup form modal popup featuring a two-column layout (promo image left, form fields right), email/name/password inputs, and a primary CTA button.

- **Source:** [ColorLib Modal 15](https://colorlib.com/wp/template/modal-15/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-15/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-15.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token                 | Value                                                        | Source                       |
| --------------------- | ------------------------------------------------------------ | ---------------------------- |
| Body font             | `"Roboto", sans-serif, 300`                                  | style.css `body`             |
| Heading font          | `"Roboto", sans-serif`                                       | style.css headings           |
| Body text color       | `#b3b3b3` (light gray)                                       | style.css `p`                |
| Modal text color      | `#777` (darker gray)                                         | style.css `.modal-body p`    |
| Modal heading color   | `#000` (black)                                               | style.css `.modal-body h3`   |
| Modal background      | `#fff` (white)                                               | style.css `.modal-body`      |
| Modal border-radius   | `7px`                                                        | style.css `.modal`           |
| Modal content radius  | `7px`                                                        | style.css `.modal-content`   |
| Box shadow (modal)    | `0 10px 50px -10px rgba(0,0,0,0.9)`                          | style.css `.modal-body`      |
| Close button color    | `#000` (black)                                               | style.css `.close-btn`       |
| Button border radius  | `4px`                                                        | style.css `.btn`             |
| Button padding (launch)| `px-4 py-3`                                                 | HTML `.btn-secondary`        |
| Button padding (submit)| `py-2` (via `.btn-primary`)                                 | style.css `.btn-primary`     |
| Button color (primary)| Bootstrap primary blue (`#007bff`)                            | Bootstrap `.btn-primary`     |
| Button color (secondary)| Bootstrap secondary gray (`#6c757d`)                        | Bootstrap `.btn-secondary`   |
| Form control border   | `1px solid #ccc`                                             | style.css `.form-control`    |
| Form focus shadow     | `none`                                                       | style.css `.form-control:focus`|
| Promo image width     | `50%` (flex: 0 0 50%)                                        | style.css `.promo-img`       |
| Page layout           | Full viewport height, centered                               | style.css `.content`         |
| Content alignment     | Vertically + horizontally centered                           | Flex centering               |
| Custom note color     | `#999`                                                       | style.css `.custom-note`     |
| Custom note link      | `#555`, font-weight 900                                      | style.css `.custom-note a`   |
| Logo width            | `70px` (independent)                                         | style.css `.logo img`        |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-15/`):
A full-viewport centered page with "Modal #5" heading and a "Launch modal" button (secondary/gray style, `px-4 py-3`).

Clicking the button opens a centered modal dialog with:

- White background, 7px border-radius, deep box-shadow
- Two-column flex layout: promo image (left, 50%) + form content (right, 50%)
- Heading: "Sign up to access all the resourcess" (note: original has typo "resourcess")
- Description paragraph text in gray (#777)
- Form fields: Email Address, First Name, Password (each with label + text input, border #ccc)
- Full-width primary "Sign up" button (Bootstrap blue #007bff)
- Privacy policy note: "By signing up you will agree to our Privacy Policy" (#999 text, #555 bold link)
- Clean, minimal, professional signup form aesthetic

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "ModalGear" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a white background with 7px border-radius
- **AND** the modal has a deep box-shadow (`0 10px 50px -10px rgba(0,0,0,0.9)`)

#### Scenario: Modal has two-column layout

- **GIVEN** the modal is open
- **WHEN** the modal content is visible
- **THEN** a promo image occupies the left 50% of the modal
- **AND** form content occupies the right 50% of the modal

### Requirement: Modal content

The modal SHALL display a signup form with the correct heading and fields.

#### Scenario: Modal heading and description

- **GIVEN** the modal is open
- **WHEN** the modal content is visible
- **THEN** the heading "Sign up to access all the resources" is displayed
- **AND** a description paragraph is displayed below the heading
- **AND** the heading is black (#000) and 22px font size

#### Scenario: Form fields

- **GIVEN** the modal is open
- **WHEN** the form is visible
- **THEN** an "Email Address" field is displayed (type: email)
- **AND** a "First Name" field is displayed (type: text)
- **AND** a "Password" field is displayed (type: password)
- **AND** all form fields have 1px solid #ccc border
- **AND** form fields remove box-shadow on focus

#### Scenario: Submit button

- **GIVEN** the modal is open
- **WHEN** the form is visible
- **THEN** a full-width "Sign up" button is displayed
- **AND** the button is Bootstrap primary blue (#007bff)
- **AND** the button has 4px border-radius

#### Scenario: Privacy policy note

- **GIVEN** the modal is open
- **WHEN** the form is visible
- **THEN** a note "By signing up you will agree to our Privacy Policy" is displayed
- **AND** "Privacy Policy" is a bold link (#555)
- **AND** the note text is #999 color

### Requirement: Modal closes

The modal SHALL close when the user clicks outside or the close button.

#### Scenario: Close via close button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (×)
- **THEN** the modal closes
- **AND** the page returns to the centered launch state

#### Scenario: Close via backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks outside the modal dialog
- **THEN** the modal closes

### Requirement: Accessibility

The modal SHALL be accessible.

#### Scenario: Focus management

- **GIVEN** the modal opens
- **WHEN** focus is managed
- **THEN** focus moves into the modal
- **AND** the modal has proper ARIA attributes (`role="dialog"`, `aria-labelledby`, `aria-hidden`)
- **AND** tab focus is trapped within the modal while open

### Requirement: Component Dock footer

Every template MUST link Component Dock in the footer.

#### Scenario: Footer link

- **GIVEN** the page loads
- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text includes "Component Dock"
