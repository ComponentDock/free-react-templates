# Template: ModalGate (Modal)

## Purpose

Recreation of the ColorLib "Modal V17" template — a centered login pop-up
modal with an orange top-border accent, a single-column form layout, and
subtle shadow treatment.

- **Source:** [ColorLib Modal 17](https://colorlib.com/wp/template/modal-17/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-17/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-17.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)
- **Description:** A free responsive log-in modal featuring a highly adaptive
  design with an orange accent border at the top, clean single-column form
  layout, and strong drop shadow — suitable for any website, online store,
  or blog.

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token                     | Value                               | Notes                                            |
| ------------------------- | ----------------------------------- | ------------------------------------------------ |
| Body font                 | `Roboto`, sans-serif, 300 weight    | Main body text                                   |
| Heading font              | `Roboto`, sans-serif                | Same family, default weight                      |
| Paragraph color           | `#b3b3b3`                           | Light gray, weight 300                           |
| Modal heading color       | `#000` (black)                      | font-size: 22px                                  |
| Modal paragraph color     | `#777`                              | font-size: 14px                                  |
| Modal body background     | `#efefef` (light gray)              |                                                  |
| Modal top border          | `4px solid #ed5107` (orange)        | Accent color for the login modal                 |
| Button primary (Login)    | Bootstrap `btn-primary` (#007bff)   | border-radius: 4px, px-5 padding                 |
| Button secondary (Launch) | Bootstrap `btn-secondary` (#6c757d) | px-4 py-3 for launch button                      |
| Modal border-radius       | `0px` (sharp corners)               | No rounded corners on modal-content              |
| Modal shadow              | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow                              |
| Form control              | No border, transparent bg           | box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2)          |
| Form control focus        | Same shadow                         | No focus ring glow                               |
| Custom note color         | `#999`                              | Small text for "Forgot password" / sign-up links |
| Custom note link color    | `#555`                              | font-weight: 900                                 |
| Launch button             | `btn-secondary` with `px-4 py-3`    | Triggers the modal                               |
| Content layout            | Full viewport height, centered      | `height: 100vh`                                  |
| Modal size                | `modal-md`                          | Medium-width centered modal                      |

## Visual Design

From the preview HTML/CSS and ColorLib page metadata: A full-viewport page
with vertically and horizontally centered content showing a "Modal #7"
heading and a gray "Launch modal" button. Clicking the button opens a
medium-width, centered Bootstrap modal with a distinctive orange top-border
accent (4px solid #ed5107) on a light gray (#efefef) background. The modal
contains a single-column login form with:

- Bold heading "Log In" (black, 22px)
- Descriptive paragraph in medium gray (#777, 14px)
- Username/Email input field
- Password input field
- Blue primary "Login" button (px-5) with "Forgot password" link to the right
- "If you don't have account yet Sign up here" note in light gray (#999)
- Form inputs have no visible borders but subtle box-shadows

The overall aesthetic is clean, focused, and minimal — the orange accent
provides visual distinction while the sharp corners (no border-radius) and
strong shadow give the modal a bold, modern appearance.

## Requirements

### Feature: ModalGate template behaviour

**Background**

- **GIVEN** the page loads with a centered layout
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Modal #7" is visible
- **AND** a "Launch modal" button is displayed below the title

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal displays a single-column form layout
- **AND** the modal has an orange top-border accent (4px solid)
- **AND** the modal body has a light gray background
- **AND** the heading "Log In" is visible at the top

#### Scenario: Login form contains required fields

- **GIVEN** the modal is open
- **WHEN** the user inspects the form
- **THEN** a "Username/Email" input field is visible
- **AND** a "Password" input field is visible
- **AND** a "Login" submit button is visible
- **AND** a "Forgot password" link is visible next to the button
- **AND** a "Sign up here" link is visible below the form

#### Scenario: Form input styling

- **GIVEN** the modal is open
- **WHEN** the user focuses an input field
- **THEN** the input shows a subtle box-shadow
- **AND** the input has no visible border
- **AND** the input has a transparent background

#### Scenario: Modal has no rounded corners

- **GIVEN** the modal is open
- **WHEN** the user inspects the modal content
- **THEN** the modal border-radius is 0px (sharp corners)
- **AND** the modal has a deep drop shadow (0 10px 50px -10px rgba(0,0,0,0.9))

#### Scenario: Modal closes on backdrop click or close button

- **GIVEN** the modal is open
- **WHEN** the user clicks outside the modal or the close button
- **THEN** the modal dialog disappears
- **AND** the page returns to the initial state with the "Launch modal" button

#### Scenario: Responsive layout

- **GIVEN** the page loads on a mobile viewport
- **WHEN** the viewport width is less than 576px
- **THEN** the content remains vertically and horizontally centered
- **AND** the launch button remains visible and clickable
- **AND** the modal adapts to the smaller viewport width

## Verification checklist

- [ ] Page renders with centered content and "Modal #7" heading
- [ ] Launch button triggers modal
- [ ] Modal has orange top-border accent (#ed5107, 4px)
- [ ] Modal body background is #efefef
- [ ] "Log In" heading is displayed in bold, black, 22px
- [ ] Username/Email input with label
- [ ] Password input with label
- [ ] Blue primary "Login" button with px-5 padding
- [ ] "Forgot password" link visible next to login button
- [ ] "Sign up here" link visible below form
- [ ] Form inputs have no visible border, subtle box-shadow
- [ ] Modal has sharp corners (0px border-radius)
- [ ] Modal has deep drop shadow
- [ ] Modal closes on backdrop click or close button
- [ ] Responsive on mobile viewports
- [ ] No reference to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
