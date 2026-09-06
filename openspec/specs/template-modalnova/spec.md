# Template: ModalNova (Modal)

## Purpose

Recreation of the ColorLib "Modal V14" template — a coupon form pop-up modal with a centered launch page, two-column modal layout (promo image + coupon content), and warm cream background.

- **Source:** [ColorLib Modal 14](https://colorlib.com/wp/template/modal-14/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-14/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-14.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token                    | Value                                                        | Source                           |
| ------------------------ | ------------------------------------------------------------ | -------------------------------- |
| Body font                | `"Roboto", sans-serif`                                       | style.css `body`                 |
| Heading font             | `"Roboto", sans-serif`                                       | style.css headings               |
| Body text color          | `#b3b3b3` (light gray)                                       | style.css `p`                    |
| Paragraph color (modal)  | `#777` (medium gray)                                         | style.css `.modal-body p`        |
| Modal heading color      | `#000` (black)                                               | style.css `.modal-body h3`       |
| Modal heading size       | `22px`                                                       | style.css `.modal-body h3`       |
| Close button color       | `#000` (black)                                               | style.css `.close-btn`           |
| Modal body background    | `#fff4e4` (warm cream/orange)                                | style.css `.bg-4`                |
| Modal border-radius      | `7px`                                                        | style.css `.modal`               |
| Modal content radius     | `7px`                                                        | style.css `.modal-content`       |
| Modal content border     | `none`                                                       | style.css `.modal-content`       |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)`                          | style.css `.modal-body`          |
| Button border-radius     | `4px`                                                        | style.css `.btn`                 |
| Button border            | `none`                                                       | style.css `.btn`                 |
| Coupon background        | `#fff` (white)                                               | style.css `.coupon`              |
| Coupon border            | `2px dashed #6c757d` (gray dashed)                           | style.css `.coupon`              |
| Coupon text color        | `#000` (black)                                               | style.css `.coupon`              |
| Coupon padding           | `10px`                                                       | style.css `.coupon`              |
| Cancel text color        | `gray`                                                       | style.css `.cancel`              |
| Cancel text size         | `14px`                                                       | style.css `.cancel`              |
| Promo image width        | `200px` (flex-basis)                                         | style.css `.promo-img`           |
| Main content padding     | `20px` left/right                                            | style.css `.main-content`        |
| Page layout              | Full viewport height, centered                               | style.css `.content` = `100vh`   |
| Form control border      | `transparent`                                                | style.css `.form-control`        |
| Logo width               | `70px`                                                       | style.css `.logo img`            |

## Visual design (from screenshot + preview HTML)

The template shows a full-viewport centered layout with a light background. In the center is a heading "Modal #4" and a Bootstrap secondary button labeled "Launch modal". When clicked, a modal dialog appears centered on screen with:

1. **Background**: Warm cream (#fff4e4) — no dark overlay by default
2. **Close button**: Black X icon in the top-right corner
3. **Two-column layout** inside the modal body:
   - **Left column**: Promotional image (background-image, 200px wide, cover)
   - **Right column**: 
     - Title "60% off coupon" (black, 22px, centered)
     - Description paragraph (gray #777, 14px)
     - Coupon code display ("SUMMER60") — white background, 2px dashed gray border
     - "Use a coupon" primary button (full width, 4px radius)
     - Cancel link "Sorry, I don't want this." (gray, 14px)
4. **Modal shadow**: Deep box-shadow `0 10px 50px -10px rgba(0,0,0,0.9)`
5. **Modal corners**: 7px border-radius, overflow hidden

The overall aesthetic is clean, promotional, and warm — a cream/orange background with a split image+text layout inside the modal. The dashed coupon code box is the focal point.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading and a launch button.

#### Scenario: Launch page visible

- **GIVEN** the ModalNova app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered column
- **AND** it SHALL show the heading "Modal #4"
- **AND** it SHALL show a button labeled "Launch modal"
- **AND** the button SHALL have slightly rounded corners (border-radius 4px) and comfortable padding

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the coupon modal SHALL open centered over the page

### Requirement: Coupon modal shell

The system SHALL render a centered rounded (7px) modal dialog with a warm cream background (#fff4e4).

#### Scenario: Modal appears on trigger

- **GIVEN** the launch button has been clicked
- **THEN** a dialog element SHALL be present with `role="dialog"` and `aria-modal="true"`
- **AND** the modal background SHALL be warm cream (#fff4e4)
- **AND** the modal SHALL have a box-shadow of `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** the modal SHALL have a border-radius of 7px
- **AND** there SHALL be no dark semi-transparent overlay

#### Scenario: Modal does not render when closed

- **GIVEN** the modal is closed
- **THEN** no dialog element SHALL be present in the DOM

### Requirement: Close button

The system SHALL render a close button (X) in the top-right corner of the modal.

#### Scenario: Close button visible

- **GIVEN** the modal is open
- **THEN** a button with `aria-label` "Close" SHALL be visible in the top-right corner
- **AND** the close button SHALL display a black X icon

#### Scenario: Close button dismisses modal

- **GIVEN** the modal is open
- **WHEN** the close button is clicked
- **THEN** the modal SHALL close
- **AND** the modal dialog SHALL no longer be present in the DOM

### Requirement: Two-column layout

The modal body SHALL display a two-column flex layout with a promo image on the left and coupon content on the right.

#### Scenario: Two-column structure

- **GIVEN** the modal is open
- **THEN** the modal body SHALL contain a flex container with two children
- **AND** the left child SHALL be a promotional image area (background-image, 200px flex-basis, cover sizing)
- **AND** the right child SHALL contain the coupon content

### Requirement: Coupon content section

The right column SHALL display a title, description, coupon code, action button, and cancel link.

#### Scenario: Coupon heading and description

- **GIVEN** the modal is open
- **THEN** the right column SHALL show the heading "60% off coupon" (black, 22px, centered)
- **AND** it SHALL show a description paragraph (gray #777, 14px)

#### Scenario: Coupon code display

- **GIVEN** the modal is open
- **THEN** a coupon code box SHALL be visible with text "SUMMER60"
- **AND** the coupon box SHALL have a white background (#fff)
- **AND** the coupon box SHALL have a 2px dashed gray (#6c757d) border
- **AND** the coupon box SHALL have 10px padding
- **AND** the coupon text SHALL be black and centered

#### Scenario: Use coupon button

- **GIVEN** the modal is open
- **THEN** a button labeled "Use a coupon" SHALL be visible below the coupon code
- **AND** the button SHALL be full-width (btn-block)
- **AND** the button SHALL have a primary style with 4px border-radius
- **AND** the button SHALL have 3px vertical padding

#### Scenario: Cancel link

- **GIVEN** the modal is open
- **THEN** a cancel link "Sorry, I don't want this." SHALL be visible below the button
- **AND** the cancel link SHALL be gray, 14px, centered

### Requirement: Modal dismiss interactions

The modal SHALL support multiple dismiss methods.

#### Scenario: Dismiss via Escape key

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal SHALL close

#### Scenario: Dismiss via cancel link

- **GIVEN** the modal is open
- **WHEN** the cancel link is clicked
- **THEN** the modal SHALL close

### Requirement: Accessibility

The modal SHALL be accessible.

#### Scenario: ARIA attributes

- **GIVEN** the modal is open
- **THEN** the dialog SHALL have `role="dialog"` and `aria-modal="true"`
- **AND** the dialog SHALL have an `aria-labelledby` pointing to the heading element
- **AND** the close button SHALL have an `aria-label` of "Close"

#### Scenario: Focus management

- **GIVEN** the modal opens
- **THEN** focus SHALL move into the modal
- **WHEN** the modal closes
- **THEN** focus SHALL return to the launch button

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer link

- **GIVEN** the ModalNova app is rendered
- **THEN** the footer SHALL contain a link to `https://www.componentdock.com/`
- **AND** the link text SHALL include "Component Dock"

## Verification checklist

- [ ] Preview layout matches: centered page with "Modal #4" heading + button
- [ ] Modal opens on button click
- [ ] Modal has warm cream (#fff4e4) background
- [ ] Two-column layout: promo image (200px) + coupon content
- [ ] Coupon code "SUMMER60" in dashed-border box
- [ ] "Use a coupon" primary button full-width
- [ ] Cancel link "Sorry, I don't want this." visible
- [ ] Close button (X) in top-right corner
- [ ] Modal closes via close button, Escape key, and cancel link
- [ ] Deep box-shadow on modal
- [ ] 7px border-radius on modal
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
