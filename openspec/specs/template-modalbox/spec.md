# Template: Modalbox (Modal)

## Purpose

Recreation of the ColorLib "Modal V14" template — a coupon form pop-up modal
with warm cream background, promotional image, dashed coupon code box, and
full-width CTA button.

- **Source:** [ColorLib Modal 14](https://colorlib.com/wp/template/modal-14/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-14/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-14.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token                    | Value                               | Notes                                 |
| ------------------------ | ----------------------------------- | ------------------------------------- |
| Body font                | `Roboto`, sans-serif, 300 weight    | Main body text                        |
| Heading font             | `Roboto`, sans-serif                | Same family, default weight           |
| Paragraph color (modal)  | `#777`                              | Darker gray for modal body paragraphs |
| Heading color (in modal) | `#000`                              | Black headings                        |
| Close button color       | `#000`                              | Black close icon                      |
| Brand color (modal bg)   | `#fff4e4`                           | Warm cream/light orange               |
| Button style             | Full-width block button             | Sharp corners                         |
| Button radius            | `4px`                               | Slightly rounded                      |
| Button padding           | `py-3`                              | Taller button                         |
| Button color             | Bootstrap primary blue (`#007bff`)  | Standard Bootstrap primary            |
| Modal background         | `#fff4e4` (cream)                   | Warm cream background                 |
| Modal border-radius      | `7px`                               | Slightly rounded corners              |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow                   |
| Coupon box bg            | `#fff`                              | White background                      |
| Coupon box border        | `2px dashed #6c757d`                | Dashed gray border                    |
| Coupon box text          | `#000`                              | Black monospace text                  |
| Promo image width        | `200px`                             | Fixed-width flex item                 |
| Page layout              | Full viewport height, centered      | `height: 100vh`                       |
| Content alignment        | Vertically + horizontally centered  | Flex centering                        |
| Cancel text              | Small, gray color                   | Bottom of modal                       |
| Launch button            | `px-6 py-3`                         | Centered on page                      |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-14/`):
A full-viewport centered page with "Modal #4" heading and a "Launch modal" button.
Clicking the button opens a centered modal dialog with:

- Warm cream (#fff4e4) background
- Flexbox layout: promotional image (left) + text content (right)
- Heading: "60% off coupon"
- Description paragraph text
- Dashed-border coupon code box showing "SUMMER60"
- Full-width primary "Use a coupon" button
- "Sorry, I don't want this." cancel/dismiss link at the bottom
- Deep box-shadow, slightly rounded corners (7px), clean promotional feel

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Modalbox" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a warm cream (#fff4e4) background
- **AND** the modal displays a promotional image on the left side
- **AND** the modal displays the title "60% off coupon"
- **AND** the modal displays a description paragraph
- **AND** the modal displays a dashed-border coupon code box with text "SUMMER60"
- **AND** the modal displays a full-width "Use a coupon" primary button
- **AND** the modal displays a "Sorry, I don't want this." cancel link at the bottom
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

### Requirement: Modal closes on cancel link

The modal SHALL close when the user clicks the cancel link.

#### Scenario: User closes via cancel link

- **GIVEN** the modal is open
- **WHEN** the user clicks the "Sorry, I don't want this." link
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Modal content layout

The modal SHALL display content in the correct layout.

#### Scenario: Content layout is correct

- **GIVEN** the modal is open
- **THEN** the promotional image occupies a fixed-width column on the left (200px)
- **AND** the text content column is on the right
- **AND** the coupon code box has a white background with dashed gray border
- **AND** the "Use a coupon" button spans the full width of the text column

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
- **THEN** the footer shows the site name "Modalbox"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [x] Modal opens with fade-in animation on button click
- [x] Modal closes on X button click
- [x] Modal closes on backdrop click
- [x] Modal closes on Escape key
- [x] Modal closes on cancel link click
- [x] Warm cream (#fff4e4) background applied to modal body
- [x] Promotional image renders at 200px width on the left
- [x] Coupon code box shows dashed border with white background
- [x] "Use a coupon" button is full-width with primary blue color
- [x] Cancel link text is gray and small
- [x] Modal has 7px border-radius and deep box-shadow
- [x] Layout is responsive (stacks vertically on mobile)
- [x] Accessibility: focus trap within modal when open
- [x] Accessibility: aria-modal on modal dialog
- [x] Accessibility: focus returns to trigger button on close
- [x] Footer links to https://www.componentdock.com/
