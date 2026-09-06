# Template: Snowdrift (Bootstrap Modal)

## Purpose

Snowdrift is a winter sale modal popup template recreating ColorLib Modal 03.
Source: https://colorlib.com/wp/template/modal-03/
Preview: https://preview.colorlib.com/theme/bootstrap/modal-03/
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

The template displays a centered landing page with a "Launch" button that opens
a two-column modal dialog: a teal left panel with a winter sale announcement
(40% off) and a right panel with a background image and "Shop now" CTA.

## Design Tokens

Extracted from the ColorLib preview CSS (`style.css`):

| Token                  | Value                                  | Source                                               |
| ---------------------- | -------------------------------------- | ---------------------------------------------------- |
| Brand primary          | `#39bdc8` (teal/cyan)                  | `.btn.btn-primary`, `.modal-body.color-1` background |
| Body font              | Lato (300/400/700)                     | `@font-face` declarations                            |
| Accent font            | Pacifico (400)                         | `.sale` heading cursive                              |
| Button radius          | 0 (sharp corners)                      | Bootstrap `.btn` defaults                            |
| Modal radius           | 0 (sharp corners)                      | `.modal-content { border-radius: 0 }`                |
| Modal shadow           | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.modal-content`                                     |
| Modal max-width        | 700px                                  | `.modal-dialog { max-width: 700px }`                 |
| Close button color     | `#000`                                 | `.close`                                             |
| Subheading color       | `#000` (black)                         | `.subheading`                                        |
| Discount text color    | `#fff` (white)                         | `h2 span`                                            |
| Discount font-size     | 130px bold                             | `h2 span`                                            |
| Sale heading font-size | 105px Pacifico                         | `.sale`                                              |
| Snowflake icon color   | `rgba(255,255,255,0.3)`                | `.icon-2` (decorative)                               |
| Background image       | `images/bg-1.jpg` (placeholder)        | Right panel                                          |

### Visual Design Notes (from TEMPLATES.md screenshot)

The screenshot shows a centered modal with:

- Left panel: solid teal (#39bdc8) background with a large decorative snowflake
  icon (faded white), "Winter" subheading in uppercase, "Sale" in large cursive
  (Pacifico), "40%" in large bold white with "% off" sub/superscript, and
  "To all colorlib products" text.
- Right panel: product image background with a "Shop now" button overlay.
- Close button (X) in the top-right corner of the modal.
- The modal has no border-radius (sharp rectangular corners) and a soft drop
  shadow.

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the heading
"Snowdrift" and a "Launch Sale" button that opens the modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "Snowdrift" heading and a "Launch Sale" button

#### Scenario: Clicking Launch Sale opens the modal

- **WHEN** the user clicks the "Launch Sale" button
- **THEN** a modal dialog appears with `aria-modal="true"` and focus is trapped inside

### Requirement: Two-column modal layout

The modal SHALL display a two-column layout: a left panel with a teal
background containing the winter sale content, and a right panel with a
background image and a "Shop now" button.

#### Scenario: Left panel displays sale content

- **WHEN** the modal is open
- **THEN** the left panel shows a decorative snowflake icon, "Winter" subheading,
  "Sale" cursive heading, "40% off" discount display, and "To all products" text
- **AND** the left panel background is teal (#39bdc8)

#### Scenario: Right panel displays image and CTA

- **WHEN** the modal is open
- **THEN** the right panel shows a background image and a "Shop now" button
- **AND** the "Shop now" button uses the brand teal color

#### Scenario: Modal has sharp corners and drop shadow

- **WHEN** the modal is open
- **THEN** the modal content has no border-radius (sharp corners)
- **AND** the modal has a drop shadow (`0px 10px 34px -15px rgba(0,0,0,0.24)`)

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

- **WHEN** the user clicks inside the modal content
- **THEN** the modal remains open

### Requirement: Typography and design fidelity

The template SHALL use Lato as the body font and Pacifico as the cursive accent
font for the "Sale" heading, matching the original ColorLib design.

#### Scenario: Fonts are loaded correctly

- **WHEN** the app renders
- **THEN** the body text uses Lato and the "Sale" heading uses Pacifico
- **AND** Google Fonts are loaded via `<link>` in `index.html`

### Requirement: Footer with Component Dock link

The template footer SHALL display the site name, a tagline, and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a link labeled "More templates at Component Dock" points to
  https://www.componentdock.com/

### Requirement: Responsive layout

The modal SHALL be responsive: on mobile the two-column layout stacks
vertically with the image panel below the sale panel.

#### Scenario: Mobile layout stacks columns

- **WHEN** the viewport is below 768px
- **THEN** the modal columns stack vertically
- **AND** the image panel height is constrained to 300px
