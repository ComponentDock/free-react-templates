# Template: Signgate (Modal)

## Purpose

Recreation of the ColorLib "Modal 15" template — a sign-up form pop-up modal
with a promotional image on the left, three-field form (email, name, password)
on the right, and a full-width "Sign up" CTA button.

- **Source:** [ColorLib Modal 15](https://colorlib.com/wp/template/modal-15/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-15/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-15.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token                     | Value                               | Notes                                    |
| ------------------------- | ----------------------------------- | ---------------------------------------- |
| Body font                 | `Roboto`, sans-serif, 300 weight    | Main body text                           |
| Heading font              | `Roboto`, sans-serif                | Same family, default weight              |
| Heading color (in modal)  | `#000`                              | Black headings (h3, 22px)                |
| Paragraph color (modal)   | `#777`                              | Gray body text in modal                  |
| Page body text color      | `#b3b3b3`                          | Light gray on the landing page           |
| Button color              | Bootstrap primary blue (`#007bff`)  | Standard Bootstrap primary               |
| Button radius             | `4px`                               | Slightly rounded corners                 |
| Button padding            | `py-3`                              | Taller button (secondary launch button)  |
| Launch button             | `px-4 py-3` secondary               | Gray secondary button on landing page    |
| Submit button             | `btn-primary btn-block`             | Full-width primary button in form        |
| Modal background          | `#fff`                              | White modal body                         |
| Modal border-radius       | `7px`                               | Slightly rounded corners                 |
| Modal shadow              | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong box-shadow                  |
| Modal max-width           | `modal-lg`                          | Large Bootstrap modal                    |
| Promo image width         | 50% (`flex: 0 0 50%`)               | Left column in flex layout               |
| Form control border       | `1px solid #ccc`                    | Light gray input borders                 |
| Form control focus        | No box-shadow                       | `box-shadow: none !important` on focus   |
| Close button color        | `#000`                              | Black close icon (X)                     |
| Privacy note color        | `#999`                              | Gray small text below form               |
| Privacy link color        | `#555`, `font-weight: 900`          | Dark bold link in privacy note           |
| Cancel text               | Small, gray color                   | Bottom of modal (if present)             |
| Page layout               | Full viewport height, centered      | `height: 100vh` with flex centering      |
| Content alignment         | Vertically + horizontally centered  | Flex centering on landing page           |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-15/`):
A full-viewport centered page with "Modal #5" heading and a gray "Launch modal" button.
Clicking the button opens a centered modal dialog with:

- White (#fff) background, deep box-shadow, 7px border-radius
- Flexbox layout: promotional image (left, 50%) + form content (right, 50%)
- Right column heading: "Sign up to access all the resourcess" (sic)
- Description paragraph text
- Form with three fields: Email Address, First Name, Password
- Full-width primary "Sign up" button
- Privacy policy note: "By signing up you will agree to our Privacy Policy"
- Close button (X) in the top-right corner
- Clean, professional signup modal aesthetic

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Signgate" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a white (#fff) background
- **AND** the modal displays a promotional image on the left side (50% width)
- **AND** the modal displays the heading "Sign up to access all the resourcess"
- **AND** the modal displays a description paragraph
- **AND** the modal displays a form with Email Address, First Name, and Password fields
- **AND** the modal displays a full-width "Sign up" primary button
- **AND** the modal displays a privacy policy note below the button
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

The modal SHALL display content in the correct layout.

#### Scenario: Content layout is correct

- **GIVEN** the modal is open
- **THEN** the promotional image occupies a 50% column on the left
- **AND** the form content column is on the right (50%)
- **AND** the form has labeled inputs for Email Address, First Name, and Password
- **AND** the "Sign up" button spans the full width of the right column
- **AND** the privacy policy note is displayed below the button in small gray text

### Requirement: Form fields

The form SHALL include three labeled input fields.

#### Scenario: Form has correct fields

- **GIVEN** the modal is open
- **THEN** an Email Address field with type="email" is displayed
- **AND** a First Name field with type="text" is displayed
- **AND** a Password field with type="password" is displayed
- **AND** each field has a visible label above it

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
- **THEN** the footer shows the site name "Signgate"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [ ] Modal opens with fade-in animation on button click
- [ ] Modal closes on X button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] White (#fff) background applied to modal body
- [ ] Promotional image renders at 50% width on the left
- [ ] Form has Email Address, First Name, and Password fields with labels
- [ ] "Sign up" button is full-width with primary blue color
- [ ] Privacy note text is gray (#999) and small
- [ ] Privacy link is dark (#555) and bold
- [ ] Modal has 7px border-radius and deep box-shadow
- [ ] Layout is responsive (stacks vertically on mobile)
- [ ] Accessibility: focus trap within modal when open
- [ ] Accessibility: aria-modal on modal dialog
- [ ] Accessibility: focus returns to trigger button on close
- [ ] Footer links to https://www.componentdock.com/
