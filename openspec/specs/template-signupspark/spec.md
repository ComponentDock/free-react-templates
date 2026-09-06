# Template: Signupspark (Modal)

## Purpose

Recreation of the ColorLib "Modal V16" template — a Bootstrap-based
registration form pop-up modal with split-screen design, promotional
image on the left, and a multi-field registration form on the right.

- **Source:** [ColorLib Modal 16](https://colorlib.com/wp/template/modal-16/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-16.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)
- **Description:** "A full-blown, easy-to-use and Bootstrap-based free
  registration form pop-up modal that features a split-screen design."

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token                    | Value                               | Notes                                  |
| ------------------------ | ----------------------------------- | -------------------------------------- |
| Body font                | `Roboto`, sans-serif, 300 weight    | Main body text, light weight           |
| Heading font             | `Roboto`, sans-serif                | Same family, default weight            |
| Paragraph color (modal)  | `#777`                              | Darker gray for modal body paragraphs  |
| Heading color (in modal) | `#000`                              | Black headings                         |
| Page body background     | `#efefef`                           | Light gray page background             |
| Modal body background    | `#efefef`                           | Same light gray                        |
| Button style             | Full-width block button             | Rounded corners                        |
| Button radius            | `4px`                               | Slightly rounded                       |
| Button padding           | `py-10px` (Bootstrap btn-primary)   | Standard button height                 |
| Button color             | Bootstrap primary blue (`#007bff`)  | Standard Bootstrap primary             |
| Modal border-radius      | `7px`                               | Slightly rounded corners               |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow                    |
| Form control border      | `transparent`                       | No visible border                      |
| Form control shadow      | `0 1px 3px 0 rgba(0,0,0,0.2)`      | Subtle drop shadow                     |
| Custom select shadow     | Same as form control                | Consistent shadow treatment            |
| Promo image width        | `50%` (flex: 0 0 50%)              | Half-width image column                |
| Page layout              | Full viewport height, centered      | `height: 100vh`                        |
| Content alignment        | Vertically + horizontally centered  | Flex centering                         |
| Privacy note color       | `#999`                              | Gray small text                        |
| Privacy link color       | `#555`                              | Dark gray, bold link                   |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-16/`):

A full-viewport centered page with "Modal #6" heading and a "Launch modal"
secondary button. Clicking the button opens a centered modal dialog with:

- Light gray (#efefef) background
- Split-screen flexbox layout: promotional image (left, 50%) + registration form (right, 50%)
- Left column: background image (cover/center), fixed 50% width
- Right column: padding with form content
- Heading: "Registration form" (h3, black, 22px)
- Description paragraph below heading
- Country dropdown (full-width custom-select)
- Full Name text input
- Email Address text input
- Date of Birth: 3-column row (MM / DD / YYYY text inputs)
- Full-width primary "Sign up" button
- Privacy policy note: "By signing up you will agree to our Privacy Policy"
- Deep box-shadow, 7px border-radius, clean professional feel
- Form controls: borderless with subtle shadow (0 1px 3px 0 rgba(0,0,0,0.2))

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Signupspark" is visible
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
- **AND** the modal displays a "Full Name" text input
- **AND** the modal displays an "Email Address" text input
- **AND** the modal displays a Date of Birth row with MM/DD/YYYY inputs
- **AND** the modal displays a full-width "Sign up" primary button
- **AND** the modal displays a privacy policy note with link
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

### Requirement: Registration form fields

The modal SHALL contain a complete registration form.

#### Scenario: Form fields are present and functional

- **GIVEN** the modal is open
- **THEN** the Country dropdown is present with a list of countries
- **AND** the Full Name input accepts text
- **AND** the Email Address input accepts email
- **AND** the Date of Birth has three separate inputs for MM, DD, and YYYY
- **AND** the "Sign up" button is full-width and styled as primary

### Requirement: Modal content layout

The modal SHALL display content in the correct split-screen layout.

#### Scenario: Content layout is correct

- **GIVEN** the modal is open
- **THEN** the promotional image occupies 50% width on the left
- **AND** the registration form occupies 50% width on the right
- **AND** the form controls have borderless inputs with subtle shadow
- **AND** the "Sign up" button spans the full width of the form column

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
- **THEN** the footer shows the site name "Signupspark"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [ ] Modal opens with fade-in animation on button click
- [ ] Modal closes on X button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] Light gray (#efefef) background applied to modal body
- [ ] Split-screen layout: image left (50%), form right (50%)
- [ ] Country dropdown renders with country list
- [ ] Full Name input accepts text
- [ ] Email Address input accepts email
- [ ] Date of Birth has 3 separate inputs (MM, DD, YYYY)
- [ ] "Sign up" button is full-width with primary blue color
- [ ] Privacy policy note with link is displayed
- [ ] Form controls have borderless inputs with subtle shadow
- [ ] Modal has 7px border-radius and deep box-shadow
- [ ] Layout is responsive (stacks vertically on mobile)
- [ ] Accessibility: focus trap within modal when open
- [ ] Accessibility: aria-modal on modal dialog
- [ ] Accessibility: focus returns to trigger button on close
- [ ] Footer links to https://www.componentdock.com/
