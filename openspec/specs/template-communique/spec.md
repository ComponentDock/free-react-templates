# Template: Communique (Bootstrap Modal)

## Purpose

Communique is a free consultation modal template recreating ColorLib Modal 07.
Source: https://colorlib.com/wp/template/modal-07/
Preview: https://preview.colorlib.com/theme/bootstrap/modal-07/
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

The template displays a centered landing page with a "Launch Modal" button that
opens a two-column modal dialog: a left panel with a background image and a
right panel with an olive-toned consultation contact form (name, email, subject,
message, submit).

## Design Tokens

Extracted from the ColorLib preview CSS (`style.css`):

| Token                  | Value                                       | Source                                                     |
| ---------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| Brand primary          | `#afa939` (olive/yellow-green)              | `.modal-body.color-1` background, button hover color       |
| Brand secondary        | `#2b2b28` (dark charcoal)                   | `.btn.btn-secondary` background (submit button)            |
| Body font              | Poppins (300–900)                           | `@font-face` declarations in `style.css`                   |
| Button radius          | 0 (sharp corners)                           | Bootstrap `.btn` defaults                                  |
| Submit button radius   | rounded (Bootstrap `.rounded`)               | `.btn-secondary.rounded.submit`                            |
| Modal radius           | 0 (sharp corners)                           | `.modal-content { border-radius: 0 }`                      |
| Modal shadow           | `0px 10px 34px -15px rgba(0,0,0,0.24)`     | `.modal-content`                                           |
| Modal max-width        | 950px                                       | `.modal-dialog { max-width: 950px }`                       |
| Close button background| `rgba(0,0,0,0.1)` (semi-transparent dark)   | `.modal-content button.close`                              |
| Close button text      | `#fff` (white)                              | `.modal-content button.close { color: #fff }`              |
| Close button size      | 40px × 40px                                 | `.modal-content button.close`                              |
| Body text color (right)| `rgba(255,255,255,0.8)` (80% white)         | `.modal-content .modal-body`                               |
| Form input background  | `rgba(255,255,255,0.05)` (5% white)         | `.modal-content .form-control`                             |
| Form input text color  | `rgba(255,255,255,0.7)` (70% white)         | `.modal-content .form-control`                             |
| Placeholder color      | `rgba(255,255,255,0.4)` (40% white)         | `.modal-content .form-control::placeholder`                |
| Section background     | `#fff` (white)                              | `.ftco-section`                                            |
| Form input radius      | 0 (sharp corners)                           | `.modal-content .form-control { border-radius: 0 }`        |
| Submit button height   | 52px                                        | `.modal-content .btn-secondary`                            |

### Visual Design Notes (from TEMPLATES.md screenshot)

The screenshot shows a centered modal with:
- Left panel: full-height background image (lifestyle/business photo)
- Right panel: olive/yellow-green (#afa939) background with white text:
  - "Booking an Appointment" subheading (bold, uppercase implied by style)
  - "Free Consultation" heading (bold, h3)
  - Contact form with 4 fields:
    - Full Name input
    - Email address input
    - Subject input
    - Message textarea (4 rows)
  - "Send Message" submit button (dark charcoal #2b2b28, rounded)
- Close button (X icon) in top-right corner, semi-transparent dark background
- Modal has sharp corners (border-radius: 0) and soft drop shadow
- Semi-transparent dark backdrop overlay
- On mobile, image panel stacks above form at 300px height

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the heading
"Communique" and a "Launch Modal" button that opens the modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "Communique" heading and a "Launch Modal" button

#### Scenario: Clicking Launch Modal opens the modal

- **WHEN** the user clicks the "Launch Modal" button
- **THEN** a modal dialog appears with `aria-modal="true"` and focus is trapped inside

### Requirement: Two-column modal layout

The modal SHALL display a two-column layout: a left panel with a background
image, and a right panel with the consultation form on an olive background.

#### Scenario: Left panel displays background image

- **WHEN** the modal is open
- **THEN** the left panel shows a full-height background image
- **AND** the left panel has no text content (image-only)

#### Scenario: Right panel displays consultation form

- **WHEN** the modal is open
- **THEN** the right panel shows "Booking an Appointment" subheading, "Free Consultation" heading, and a contact form
- **AND** the right panel background is olive (#afa939)
- **AND** the text color is 80% white

#### Scenario: Modal has sharp corners and drop shadow

- **WHEN** the modal is open
- **THEN** the modal content has no border-radius (sharp corners)
- **AND** the modal has a drop shadow (`0px 10px 34px -15px rgba(0,0,0,0.24)`)

### Requirement: Consultation contact form

The modal SHALL contain a contact form with four fields and a submit button.

#### Scenario: Form displays all fields

- **WHEN** the modal is open
- **THEN** the form shows Full Name input, Email address input, Subject input, Message textarea, and "Send Message" button

#### Scenario: Form inputs accept text

- **WHEN** the user types in any form field
- **THEN** the field displays the typed text with 70% white color

#### Scenario: Form submission is prevented

- **WHEN** the user fills in the form and clicks "Send Message"
- **THEN** the form submission is prevented (no page reload)

### Requirement: Modal dismissal

The modal SHALL be closable via the close button (X icon), pressing Escape, or
clicking the backdrop overlay outside the modal content.

#### Scenario: Close button dismisses modal

- **WHEN** the user clicks the X close button
- **THEN** the modal closes

#### Scenario: Escape key dismisses modal

- **WHEN** the user presses Escape
- **THEN** the modal closes

#### Scenario: Backdrop click dismisses modal

- **WHEN** the user clicks the dark backdrop outside the modal card
- **THEN** the modal closes

#### Scenario: Clicking inside modal does not close it

- **WHEN** the user clicks inside the modal content (e.g. on an input)
- **THEN** the modal remains open

### Requirement: Footer with Component Dock link

The template footer SHALL display the site name, a tagline, and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a link labeled "More templates at Component Dock" points to https://www.componentdock.com/

### Requirement: Dark mode toggle

The navbar SHALL include a dark mode toggle that adds/removes the `dark` class
on the document root.

#### Scenario: Toggle switches dark mode

- **WHEN** the user clicks the dark mode toggle
- **THEN** the `dark` class is added to `<html>` and the button label changes to "Light mode"

#### Scenario: Toggle reverts dark mode

- **WHEN** the user clicks the toggle again
- **THEN** the `dark` class is removed and the button label changes back to "Dark mode"

#### Scenario: Cleanup on unmount

- **WHEN** the navbar unmounts
- **THEN** the `dark` class is removed from the document root

## Verification checklist

- [ ] Landing page renders with "Communique" heading and "Launch Modal" button
- [ ] Modal opens on button click with `aria-modal="true"`
- [ ] Two-column layout: left image panel, right olive (#afa939) form panel
- [ ] "Booking an Appointment" subheading displays (bold)
- [ ] "Free Consultation" heading displays (bold, h3)
- [ ] Form has Full Name, Email address, Subject, Message fields
- [ ] "Send Message" button is dark charcoal (#2b2b28) and rounded
- [ ] Form inputs have semi-transparent white backgrounds
- [ ] Placeholder text is 40% white
- [ ] Typed text is 70% white
- [ ] Close button (X) dismisses modal (semi-transparent dark bg, white icon)
- [ ] Escape key dismisses modal
- [ ] Backdrop click dismisses modal
- [ ] Modal has sharp corners (border-radius: 0)
- [ ] Modal has drop shadow
- [ ] Modal max-width is 950px
- [ ] Font is Poppins
- [ ] Footer links to Component Dock
- [ ] Dark mode toggle works
- [ ] 100% test coverage
