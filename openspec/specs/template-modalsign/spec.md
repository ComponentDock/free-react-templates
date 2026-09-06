# Template: ModalSign (Modal)

## Purpose

Recreation of the ColorLib "Modal V16" template — a full-blown, easy-to-use registration form pop-up modal with a split-screen design.

- **Source:** [ColorLib Modal 16](https://colorlib.com/wp/template/modal-16/)
- **Preview:** https://preview.colorlib.com/theme/modal-16/ (404 at time of prep — using screenshot + page analysis)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-16.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the template page analysis and screenshot:

| Token                 | Value                           | Notes                              |
| --------------------- | ------------------------------- | ---------------------------------- |
| Layout                | Split-screen modal              | Left image panel, right form panel |
| Form panel background | White (#ffffff)                 | Clean, minimal                     |
| Image panel           | Full-height background image    | Left side of modal                 |
| Form fonts            | System sans-serif               | Clean, modern                      |
| Form labels           | Dark text (#333333)             | Bold, clear                        |
| Input fields          | Light gray background (#f5f5f5) | Rounded corners                    |
| Input borders         | Light gray (#e0e0e0)            | Subtle                             |
| Primary button        | Blue (#007bff)                  | Full-width, rounded                |
| Button text           | White (#ffffff)                 | Bold                               |
| Close button          | Top-right corner                | X icon                             |
| Modal shadow          | Deep shadow                     | Subtle elevation                   |
| Modal corners         | Rounded                         | ~8px radius                        |

## Visual Design

From the screenshot: A split-screen modal with a left panel featuring a full-height image (likely a nature/lifestyle photo) and a right panel containing a registration form. The right panel has a clean white background with centered form elements: headline "Create Account", input fields for name/email/password, a prominent blue "Sign Up" button, and a close button (X) in the top-right corner. The overall aesthetic is modern, clean, and professional — focused on conversion with minimal distractions.

## Gherkin Requirements

### Background

Given the page loads with a modal overlay
When the viewport is displayed
Then the modal is centered in the viewport
And the modal has a split-screen layout (image left, form right)

### Scenario: Modal displays registration form

Given the modal is open
When the user views the form panel
Then a "Create Account" headline is visible
And input fields for name, email, and password are displayed
And a "Sign Up" button is visible
And the form panel has a white background

### Scenario: Modal displays image panel

Given the modal is open
When the user views the image panel
Then a full-height image is displayed on the left side
And the image covers the entire left panel

### Scenario: Form submission

Given the modal is open
When the user fills in all required fields
And clicks the "Sign Up" button
Then the form validates the inputs
And shows success feedback or error messages

### Scenario: Modal closes on close button click

Given the modal is open
When the user clicks the close button (X)
Then the modal closes with a fade-out animation
And the page content is visible again

### Scenario: Modal closes on backdrop click

Given the modal is open
When the user clicks the dark backdrop area outside the modal
Then the modal closes
And the page content is visible again

### Scenario: Modal closes on Escape key

Given the modal is open
When the user presses the Escape key
Then the modal closes
And the page content is visible again

### Scenario: Accessibility - modal focus trap

Given the modal is open
When the user presses Tab repeatedly
Then focus stays trapped within the modal
And focus cycles through form fields and close button

### Scenario: Accessibility - aria attributes

Given the modal is rendered
Then the modal container has `role="dialog"`
And the modal has `aria-labelledby` pointing to the headline
And the modal has `aria-hidden="true"` when closed
And the close button has `aria-label="Close"`

### Scenario: Responsive layout

Given the page is viewed on a mobile viewport (375px width)
Then the modal stacks vertically (image on top, form below)
And the form remains usable
And the close button remains accessible

### Scenario: Design token verification

Given the page is rendered
Then the form panel background is white
And the primary button color is blue (#007bff)
And the button text is white
And the modal has rounded corners
