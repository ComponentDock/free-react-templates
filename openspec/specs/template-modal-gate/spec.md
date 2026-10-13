# Template: ModalGate (Modal)

## Purpose

Recreation of the ColorLib "Modal 12" template — a centered full-viewport page with a Bootstrap-style modal popup featuring a background image overlay, email subscription form, and "Exclusive Offer" branding.

- **Source:** [ColorLib Modal 12](https://colorlib.com/wp/template/modal-12/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-12/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-12.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token                 | Value                                 | Source                      |
| --------------------- | ------------------------------------- | --------------------------- |
| Body font             | `"Roboto", sans-serif`                | style.css `body`            |
| Heading font          | `"Roboto", sans-serif`                | style.css headings          |
| Body text color       | `#b3b3b3` (light gray)                | style.css `p`               |
| Modal text color      | `#fff` (white)                        | style.css `.modal`          |
| Modal border radius   | `7px`                                 | style.css `.modal`          |
| Modal background      | transparent (uses bg-image + overlay) | style.css `.modal`          |
| Overlay color         | `rgba(0,0,0,0.5)`                     | style.css `.overlay:before` |
| Button border radius  | `4px`                                 | style.css `.btn`            |
| Line separator        | `1px solid rgba(255,255,255,0.3)`     | style.css `.line`           |
| Cancel link color     | `rgba(255,255,255,0.5)`               | style.css `.cancel a`       |
| Cancel link font size | `13px`, bold                          | style.css `.cancel a`       |
| Box shadow (modal)    | `0 10px 50px -10px rgba(0,0,0,0.9)`   | style.css `.modal-body`     |
| Logo width            | `30px`                                | style.css `.logo a img`     |

## Visual design (from screenshot + HTML)

The template shows a full-viewport centered layout with a light background. In the center is a heading "Modal #2" and a Bootstrap primary button labeled "Launch modal". When clicked, a modal dialog appears centered on screen with:

1. **Background image** with a dark semi-transparent overlay (50% black)
2. **Top bar**: small logo icon on the left, "Exclusive Offer" heading centered, close (X) button on the right, separated by a thin white bottom border
3. **Content area**: "Get a free Ebook" heading, descriptive paragraph, email subscription form (input + "Subscribe" button), and a "Maybe later" dismiss link

The overall aesthetic is clean, dark-overlay-modal-on-light-page, with Roboto typography and Bootstrap-inspired button styling.

## Requirements

### Background: page structure

#### Scenario: Page loads with centered content

- **GIVEN** the user visits the ModalGate page
- **THEN** a full-viewport centered layout is displayed
- **AND** the heading "Modal #2" is visible
- **AND** a "Launch modal" button is visible

### Modal trigger

#### Scenario: Opening the modal

- **GIVEN** the user is on the ModalGate page
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered on the screen
- **AND** the modal has a background image with a dark overlay
- **AND** the modal content is readable in white text

### Modal header

#### Scenario: Modal header displays correctly

- **GIVEN** the modal is open
- **THEN** a logo icon is displayed on the left
- **AND** the heading "Exclusive Offer" is centered in the header
- **AND** a close button (X) is displayed on the right
- **AND** the header is separated from the body by a thin white bottom border

### Modal body content

#### Scenario: Modal body shows subscription form

- **GIVEN** the modal is open
- **THEN** the heading "Get a free Ebook" is displayed
- **AND** a descriptive paragraph is shown below the heading
- **AND** an email input field with placeholder "Enter your email address" is visible
- **AND** a "Subscribe" button is displayed next to the input

### Email subscription form

#### Scenario: Email subscription form layout

- **GIVEN** the modal is open
- **THEN** the email input and Subscribe button are displayed inline (horizontal)
- **AND** the form is centered within the modal

### Dismiss actions

#### Scenario: Closing the modal via close button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal closes
- **AND** the page returns to the initial state

#### Scenario: Closing the modal via "Maybe later" link

- **GIVEN** the modal is open
- **WHEN** the user clicks the "Maybe later" link
- **THEN** the modal closes
- **AND** the page returns to the initial state

### Modal overlay

#### Scenario: Modal has dark overlay background

- **GIVEN** the modal is open
- **THEN** the modal body has a background image
- **AND** a dark semi-transparent overlay covers the background
- **AND** the overlay color is approximately rgba(0,0,0,0.5)

### Responsive behavior

#### Scenario: Modal is responsive on mobile

- **GIVEN** the user views the page on a mobile device
- **WHEN** the modal is open
- **THEN** the modal content stacks vertically
- **AND** the email input and subscribe button stack vertically
- **AND** all text remains readable

## Verification checklist

- [ ] Page loads with centered "Modal #2" heading and "Launch modal" button
- [ ] Full viewport height layout (100vh)
- [ ] "Launch modal" button triggers centered modal dialog
- [ ] Modal has background image with dark overlay (rgba(0,0,0,0.5))
- [ ] Modal header: logo left, "Exclusive Offer" center, close (X) right
- [ ] Header separated by thin white bottom border
- [ ] Modal body: "Get a free Ebook" heading + description
- [ ] Email input + "Subscribe" button inline layout
- [ ] "Maybe later" dismiss link at bottom
- [ ] Close button (X) dismisses modal
- [ ] "Maybe later" link dismisses modal
- [ ] Modal border-radius: 7px
- [ ] Button border-radius: 4px
- [ ] Typography: Roboto font family
- [ ] White text on dark overlay
- [ ] Modal box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
