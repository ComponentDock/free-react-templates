# Template: Lockwell (Modal)

## Purpose

Recreation of the ColorLib "Modal 20" template — a password-protected content
modal with a centered lock icon, password input field, and submit button.

- **Source:** [ColorLib Modal 20](https://colorlib.com/wp/template/modal-20/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-20/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-20.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-20/`)
and its stylesheet (`css/style.css`):

| Token                      | Value                                   | Notes                                          |
| -------------------------- | --------------------------------------- | ---------------------------------------------- |
| Body font                  | `Roboto`, sans-serif, 300 weight        | Main body text                                 |
| Heading font               | `Roboto`, sans-serif, default weight    | Same family as body                            |
| Paragraph color (modal)    | `#777`                                  | Gray for modal body paragraphs                 |
| Heading color (modal)      | `#000`                                  | Black headings                                 |
| Close button color         | `#000` (hover `#000`, icon `#ccc`)      | Dark close icon, lighter default               |
| Brand color (icon bg)      | `rgba(62, 100, 255, 0.05)`             | Very light blue circle background              |
| Brand color (icon fg)      | `#3e64ff`                               | Blue lock icon color                           |
| Icon circle                | `80x80px`, `border-radius: 50%`         | Centered circular icon container               |
| Button style               | Rounded                                  | `border-radius: 4px`                           |
| Button padding             | `10px 30px`                             | Standard button size                           |
| Button color               | Bootstrap primary blue (`#007bff`)      | Standard Bootstrap primary                     |
| Modal background           | `#fff`                                  | White background                               |
| Modal border-radius        | `7px`                                   | Slightly rounded corners                       |
| Modal shadow               | `0 10px 50px -10px rgba(0,0,0,0.9)`    | Deep, strong shadow                            |
| Modal border               | `none`                                  | No border on modal-content                     |
| Input style                | Underline only                           | `border-bottom: 1px solid #ccc`, no other borders |
| Input focus color          | `#000`                                  | Black underline on focus                       |
| Input border-radius        | `0`                                     | Sharp corners                                  |
| Page layout                | Full viewport height, centered          | `height: 100vh`                                |
| Content alignment          | Vertically + horizontally centered      | Flex centering                                 |

## Visual Design

From the live preview HTML and CSS:

A full-viewport centered page with "Modal #10" heading and a "Launch modal"
button. Clicking the button opens a centered modal dialog with:

- White (#fff) background
- Centered lock icon (blue #3e64ff) in a light blue circular container (80x80px)
- Heading: "This link is password protected"
- Description paragraph: "All their equipment and instruments are alive..."
- Password input field with underline-only border style
- Centered "Submit" primary blue button
- Close button (X) in the top-right corner
- Deep box-shadow, slightly rounded corners (7px), clean/secure feel

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Lockwell" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a white (#fff) background
- **AND** the modal displays a blue lock icon in a circular container
- **AND** the modal displays the title "This link is password protected"
- **AND** the modal displays a description paragraph
- **AND** the modal displays a password input field with placeholder "Enter password"
- **AND** the modal displays a centered "Submit" primary button
- **AND** a close button (X) is visible in the top-right corner

### Requirement: Modal closes on close button

The modal SHALL close when the user clicks the close button.

#### Scenario: User closes via X button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Modal closes on backdrop click

The modal SHALL close when the user clicks outside the modal content.

#### Scenario: User closes via backdrop

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark backdrop area outside the modal
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Modal closes on Escape key

The modal SHALL close when the user presses Escape.

#### Scenario: User closes via Escape

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Password form

The modal SHALL include a password input and submit button.

#### Scenario: Password input is present

- **GIVEN** the modal is open
- **THEN** a password input field is displayed with placeholder "Enter password"
- **AND** the input has an underline-only border style (bottom border only)

#### Scenario: Submit button is present

- **GIVEN** the modal is open
- **THEN** a "Submit" button is displayed centered below the input
- **AND** the button has primary blue styling

### Requirement: Focus trap

The modal SHALL trap focus within itself when open.

#### Scenario: Tab key cycles through focusable elements

- **GIVEN** the modal is open
- **WHEN** the user presses Tab on the last focusable element
- **THEN** focus wraps to the first focusable element

#### Scenario: Shift+Tab cycles backwards

- **GIVEN** the modal is open
- **WHEN** the user presses Shift+Tab on the first focusable element
- **THEN** focus wraps to the last focusable element

### Requirement: Focus restoration

The modal SHALL return focus to the trigger element on close.

#### Scenario: Focus returns to trigger

- **GIVEN** the modal is open and the trigger button was focused
- **WHEN** the modal closes
- **THEN** focus returns to the trigger button

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer displays correctly

- **GIVEN** the page is loaded
- **THEN** the footer shows the site name "Lockwell"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [ ] Modal opens with fade-in animation on button click
- [ ] Modal closes on X button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] White (#fff) background applied to modal body
- [ ] Lock icon renders at 80x80px in blue circular container
- [ ] "This link is password protected" heading displayed
- [ ] Password input shows underline-only border style
- [ ] "Submit" button is centered with primary blue color
- [ ] Modal has 7px border-radius and deep box-shadow
- [ ] Layout is responsive (stacks vertically on mobile)
- [ ] Accessibility: focus trap within modal when open
- [ ] Accessibility: aria-modal on modal dialog
- [ ] Accessibility: focus returns to trigger button on close
- [ ] Footer links to https://www.componentdock.com/
