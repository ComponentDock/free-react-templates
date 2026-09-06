# Template: ModalOffer (Modal)

## Purpose

Recreation of the ColorLib "Modal V18" template — a free offer with CTA modal for promoting exclusive offers, deals, and projects.

- **Source:** [ColorLib Modal 18](https://colorlib.com/wp/template/modal-18/)
- **Preview:** https://preview.colorlib.com/theme/modal-18/ (404 at time of prep — using page analysis)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-18.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the template page analysis and screenshot:

| Token            | Value                             | Notes                     |
| ---------------- | --------------------------------- | ------------------------- |
| Layout           | Centered modal with promo content | Single-column, focused    |
| Modal background | White (#ffffff)                   | Clean, minimal            |
| Accent color     | Orange/amber (#ff6b35)            | CTA button, highlights    |
| Headline font    | Bold, dark                        | Strong visual hierarchy   |
| Body text        | Gray (#666666)                    | Readable, subdued         |
| CTA button       | Orange (#ff6b35)                  | Rounded, prominent        |
| Button text      | White (#ffffff)                   | Bold                      |
| Close button     | Top-right corner                  | X icon                    |
| Modal shadow     | Deep shadow                       | Elevated appearance       |
| Modal corners    | Rounded                           | ~12px radius              |
| Image            | Promo/offer image                 | Top section or background |

## Visual Design

From the screenshot: A centered modal with a promotional offer layout. The modal features a headline like "Special Offer" or "Limited Time Deal", a promotional image or graphic, descriptive text about the offer, and a prominent orange CTA button. The design is clean and focused on conversion, with visual hierarchy guiding the eye from headline to image to CTA. The overall aesthetic is modern, urgent, and conversion-oriented.

## Gherkin Requirements

### Background

Given the page loads with a modal overlay
When the viewport is displayed
Then the modal is centered in the viewport
And the modal has a promotional offer layout

### Scenario: Modal displays offer content

Given the modal is open
When the user views the modal
Then a headline (e.g., "Special Offer") is visible
And a promotional image or graphic is displayed
And descriptive text about the offer is shown
And a CTA button is prominently displayed

### Scenario: CTA button interaction

Given the modal is open
When the user clicks the CTA button
Then the button shows a hover state (darker orange)
And the click triggers the intended action (e.g., navigation, form)

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
And focus cycles through CTA button and close button

### Scenario: Accessibility - aria attributes

Given the modal is rendered
Then the modal container has `role="dialog"`
And the modal has `aria-labelledby` pointing to the headline
And the modal has `aria-hidden="true"` when closed
And the close button has `aria-label="Close"`

### Scenario: Responsive layout

Given the page is viewed on a mobile viewport (375px width)
Then the modal scales appropriately
And the CTA button remains prominent
And the close button remains accessible

### Scenario: Design token verification

Given the page is rendered
Then the modal background is white
And the CTA button color is orange (#ff6b35)
And the button text is white
And the modal has rounded corners
