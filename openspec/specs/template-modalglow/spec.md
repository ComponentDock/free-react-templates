# Template: ModalGlow (Modal)

## Purpose

Recreation of the ColorLib "Modal V17" template — a login form pop-up modal
with an orange top accent border, split-screen design: promotional image on
the left, login form with username/email, password, forgot password link,
and sign-up link on the right.

- **Source:** [ColorLib Modal 17](https://colorlib.com/wp/template/modal-17/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-17/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-17.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure:

| Token                    | Value                                                                   | Notes                           |
| ------------------------ | ----------------------------------------------------------------------- | ------------------------------- |
| Body font                | `Roboto`, sans-serif, 300 weight                                        | Main body text, light weight    |
| Heading font             | `Roboto`, sans-serif                                                    | Same family, default weight     |
| Paragraph color (modal)  | `#777`                                                                  | Gray for modal body paragraphs  |
| Paragraph font size      | `14px`                                                                  | Smaller body text               |
| Heading color (in modal) | `#000`                                                                  | Black headings                  |
| Heading h3 size          | `22px`                                                                  | Modal heading size              |
| Close button color       | `#000`                                                                  | Black close icon                |
| Modal body background    | `#efefef`                                                               | Light gray background           |
| Modal top border         | `4px solid #ed5107`                                                     | Orange accent top border        |
| Brand accent color       | `#ed5107`                                                               | Orange (top border accent)      |
| Button style             | Inline button with margins                                              | Not full-width block            |
| Button radius            | `4px`                                                                   | Slightly rounded                |
| Button padding           | `py-3` (10px top/bottom), `px-5`                                        | Taller button, wider horizontal |
| Button color             | Bootstrap primary blue (`#007bff`)                                      | Standard Bootstrap primary      |
| Launch button color      | Bootstrap secondary (`#6c757d`)                                         | Gray secondary button           |
| Launch button padding    | `px-4 py-3`                                                             | Wider horizontal padding        |
| Modal border-radius      | `0px`                                                                   | Sharp corners (no rounding)     |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)`                                     | Deep, strong shadow             |
| Modal size               | `modal-lg`                                                              | Large modal                     |
| Modal dialog             | `modal-dialog-centered`                                                 | Vertically centered             |
| Promo image width        | `50%` (`flex: 0 0 50%`)                                                 | Half-width flex item            |
| Promo image style        | `background-size: cover`                                                | Cover background image          |
| Form control border      | `none` (transparent)                                                    | No visible border               |
| Form control shadow      | `0 1px 3px 0 rgba(0,0,0,0.2)`                                           | Subtle shadow                   |
| Page layout              | Full viewport height, centered                                          | `height: 100vh`                 |
| Content alignment        | Vertically + horizontally centered                                      | Flex centering                  |
| Cancel text              | Small, gray color                                                       | Bottom of modal                 |
| Custom note color        | `#999`                                                                  | Light gray for auxiliary text   |
| Custom note link color   | `#555`                                                                  | Darker gray for links           |
| Custom note link weight  | `900`                                                                   | Bold link weight                |
| Font families loaded     | Roboto (300, 400), Poppins (300, 400, 500), Source Serif Pro (400, 600) | Google Fonts via Cloudflare     |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-17/`):
A full-viewport centered page with "Modal #7" heading and a "Launch modal"
button. Clicking the button opens a large, centered modal dialog with:

- Orange (#ed5107) 4px top border accent on the modal body
- Light gray (#efefef) modal body background
- Sharp corners (0px border-radius)
- Flexbox split-screen layout: promotional image (left, 50%) + login form (right, 50%)
- Heading: "Log In" (h3, 22px, black)
- Description paragraph text (14px, gray #777)
- Login form with fields:
  - Username/Email input (type email, placeholder "Enter email")
  - Password input (type password)
  - "Forgot password" link
  - "Login" button (primary blue, inline with margin)
  - "If you don't have account yet" text
  - "Sign up here" link
- Deep box-shadow, sharp corners, clean professional feel
- Bootstrap modal fade animation

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "ModalGlow" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a light gray (#efefef) background
- **AND** the modal has an orange (#ed5107) 4px top border
- **AND** the modal has sharp corners (0px border-radius)
- **AND** the modal displays a promotional image on the left side (50% width)
- **AND** the modal displays the title "Log In"
- **AND** the modal displays a description paragraph
- **AND** the modal displays a username/email input field
- **AND** the modal displays a password input field
- **AND** the modal displays a "Forgot password" link
- **AND** the modal displays a "Login" button
- **AND** the modal displays "If you don't have account yet" text
- **AND** the modal displays a "Sign up here" link
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

### Requirement: Modal content layout

The modal SHALL display content in the correct split-screen layout.

#### Scenario: Split-screen layout is correct

- **GIVEN** the modal is open
- **THEN** the promotional image occupies a 50% width column on the left
- **AND** the text content column is on the right (50% width)
- **AND** the form fields are stacked vertically in the right column
- **AND** the modal uses flexbox layout with `d-flex main-content`
- **AND** the modal body has a 4px solid orange (#ed5107) top border

### Requirement: Form fields

The modal SHALL display all required login form fields.

#### Scenario: Login form fields render correctly

- **GIVEN** the modal is open
- **THEN** the username/email input is empty and editable
- **AND** the password input is empty and masked
- **AND** the "Forgot password" link is visible and clickable
- **AND** the "Login" button is visible
- **AND** the "If you don't have account yet" text is visible
- **AND** the "Sign up here" link is visible and clickable

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
- **THEN** the footer shows the site name "ModalGlow"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [ ] Modal opens with fade-in animation on button click
- [ ] Modal closes on X button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] Orange (#ed5107) 4px top border applied to modal body
- [ ] Light gray (#efefef) background applied to modal body
- [ ] Sharp corners (0px border-radius) on modal
- [ ] Promotional image renders at 50% width on the left
- [ ] Split-screen flexbox layout is correct
- [ ] Username/email input renders correctly
- [ ] Password input renders with masking
- [ ] "Forgot password" link is visible
- [ ] "Login" button renders with primary blue color
- [ ] "Sign up here" link is visible
- [ ] Modal has deep box-shadow
- [ ] Layout is responsive (stacks vertically on mobile)
- [ ] Accessibility: focus trap within modal when open
- [ ] Accessibility: aria-modal on modal dialog
- [ ] Accessibility: focus returns to trigger button on close
- [ ] Footer links to https://www.componentdock.com/
