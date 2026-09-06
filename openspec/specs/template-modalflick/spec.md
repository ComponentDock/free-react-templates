# Template: Modalflick (Modal)

## Purpose

Recreation of the ColorLib "Modal V16" template — a registration form pop-up
modal with a split-screen design: promotional image on the left, registration
form with country dropdown, full name, email, date of birth, and sign-up
button on the right.

- **Source:** [ColorLib Modal 16](https://colorlib.com/wp/template/modal-16/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-16.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure:

| Token                    | Value                                                                   | Notes                          |
| ------------------------ | ----------------------------------------------------------------------- | ------------------------------ |
| Body font                | `Roboto`, sans-serif, 300 weight                                        | Main body text, light weight   |
| Heading font             | `Roboto`, sans-serif                                                    | Same family, default weight    |
| Paragraph color (modal)  | `#777`                                                                  | Gray for modal body paragraphs |
| Paragraph font size      | `14px`                                                                  | Smaller body text              |
| Heading color (in modal) | `#000`                                                                  | Black headings                 |
| Heading h3 size          | `22px`                                                                  | Modal heading size             |
| Close button color       | `#000`                                                                  | Black close icon               |
| Modal body background    | `#efefef`                                                               | Light gray background          |
| Button style             | Full-width block button (`btn-block`)                                   | Sharp corners                  |
| Button radius            | `4px`                                                                   | Slightly rounded               |
| Button padding           | `py-3` (10px top/bottom)                                                | Taller button                  |
| Button color             | Bootstrap primary blue (`#007bff`)                                      | Standard Bootstrap primary     |
| Launch button color      | Bootstrap secondary (`#6c757d`)                                         | Gray secondary button          |
| Launch button padding    | `px-4 py-3`                                                             | Wider horizontal padding       |
| Modal border-radius      | `7px`                                                                   | Slightly rounded corners       |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)`                                     | Deep, strong shadow            |
| Modal size               | `modal-lg`                                                              | Large modal                    |
| Modal dialog             | `modal-dialog-centered`                                                 | Vertically centered            |
| Promo image width        | `50%` (`flex: 0 0 50%`)                                                 | Half-width flex item           |
| Promo image style        | `background-size: cover`                                                | Cover background image         |
| Form control border      | `none` (transparent)                                                    | No visible border              |
| Form control shadow      | `0 1px 3px 0 rgba(0,0,0,0.2)`                                           | Subtle shadow                  |
| Custom select shadow     | `0 1px 3px 0 rgba(0,0,0,0.2)`                                           | Same shadow as form controls   |
| Page layout              | Full viewport height, centered                                          | `height: 100vh`                |
| Content alignment        | Vertically + horizontally centered                                      | Flex centering                 |
| Cancel text              | Small, gray color                                                       | Bottom of modal                |
| Custom note color        | `#999`                                                                  | Light gray for privacy text    |
| Custom note link color   | `#555`                                                                  | Darker gray for privacy link   |
| Custom note link weight  | `900`                                                                   | Bold privacy link              |
| Font families loaded     | Roboto (300, 400), Poppins (300, 400, 500), Source Serif Pro (400, 600) | Google Fonts via Cloudflare    |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-16/`):
A full-viewport centered page with "Modal #6" heading and a "Launch modal"
button. Clicking the button opens a large, centered modal dialog with:

- Light gray (#efefef) modal body background
- Flexbox split-screen layout: promotional image (left, 50%) + form content (right, 50%)
- Heading: "Registration form" (h3, 22px, black)
- Description paragraph text (14px, gray #777)
- Registration form with fields:
  - Country dropdown (select with full country list, custom-select styling)
  - Full Name input
  - Email Address input
  - Date of Birth input
  - Privacy Policy agreement text with link
- "Sign up" button (primary blue, full-width block)
- Deep box-shadow, slightly rounded corners (7px), clean professional feel
- No visible cancel/close text in the modal body (close via X button or backdrop)
- Bootstrap modal fade animation

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Modalflick" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a light gray (#efefef) background
- **AND** the modal displays a promotional image on the left side (50% width)
- **AND** the modal displays the title "Registration form"
- **AND** the modal displays a description paragraph
- **AND** the modal displays a country dropdown select
- **AND** the modal displays a full name input field
- **AND** the modal displays an email address input field
- **AND** the modal displays a date of birth input field
- **AND** the modal displays a privacy policy agreement text with link
- **AND** the modal displays a full-width "Sign up" primary button
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
- **AND** the "Sign up" button spans the full width of the text column
- **AND** the modal uses flexbox layout with `d-flex main-content`

### Requirement: Form fields

The modal SHALL display all required form fields.

#### Scenario: Form fields render correctly

- **GIVEN** the modal is open
- **THEN** the country dropdown shows "Afghanistan" as the first option
- **AND** the full name input is empty and editable
- **AND** the email address input is empty and editable
- **AND** the date of birth input is empty and editable
- **AND** the privacy policy text is visible with a link to "Privacy Policy"

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
- **THEN** the footer shows the site name "Modalflick"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [ ] Modal opens with fade-in animation on button click
- [ ] Modal closes on X button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] Light gray (#efefef) background applied to modal body
- [ ] Promotional image renders at 50% width on the left
- [ ] Split-screen flexbox layout is correct
- [ ] Country dropdown renders with full country list
- [ ] Full name, email, and date of birth inputs render correctly
- [ ] Privacy Policy text and link display correctly
- [ ] "Sign up" button is full-width with primary blue color
- [ ] Modal has 7px border-radius and deep box-shadow
- [ ] Layout is responsive (stacks vertically on mobile)
- [ ] Accessibility: focus trap within modal when open
- [ ] Accessibility: aria-modal on modal dialog
- [ ] Accessibility: focus returns to trigger button on close
- [ ] Footer links to https://www.componentdock.com/
