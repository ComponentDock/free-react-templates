# Template: Piazza (Modal)

## Purpose

Recreation of the ColorLib "Modal 19" template — a product showcase pop-up modal with a centered launch page, two-column modal layout (50/50 product image + product details), social engagement icons, star rating, and a light gray background.

- **Source:** [ColorLib Modal 19](https://colorlib.com/wp/template/modal-19/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-19/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-19.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token                       | Value                                         | Source                         |
| --------------------------- | --------------------------------------------- | ------------------------------ |
| Body font                   | `"Roboto", sans-serif`                        | style.css `body`               |
| Heading font                | `"Roboto", sans-serif`                        | style.css headings             |
| Body text color             | `#b3b3b3` (light gray)                        | style.css `p`                  |
| Modal paragraph color       | `#777` (medium gray)                          | style.css `.modal-body p`      |
| Modal paragraph size        | `14px`                                        | style.css `.modal-body p`      |
| Modal paragraph line-height | `1.5`                                         | style.css `.modal p`           |
| Modal heading color         | `#000` (black)                                | style.css `.modal-body h3`     |
| Modal heading size          | `22px`                                        | style.css `.modal-body h3`     |
| Close button color          | `#000` (black)                                | style.css `.close-btn`         |
| Modal body background       | `#efefef` (light gray)                        | style.css `.modal-body`        |
| Modal border-radius         | `7px`                                         | style.css `.modal`             |
| Modal content radius        | `7px`                                         | style.css `.modal-content`     |
| Modal content border        | `none`                                        | style.css `.modal-content`     |
| Modal shadow                | `0 10px 50px -10px rgba(0,0,0,0.9)`           | style.css `.modal-body`        |
| Button border-radius        | `4px`                                         | style.css `.btn`               |
| Button border               | `none`                                        | style.css `.btn`               |
| Promo image flex            | `0 0 50%` (half-width)                        | style.css `.promo-img`         |
| Price badge position        | `absolute`, top `20px`, left `20px`           | style.css `.price`             |
| Price badge color           | `#fff` (white)                                | style.css `.price`             |
| Share icon color            | `#ccc` (light gray)                           | style.css `.share`             |
| Share icon hover color      | `#000` (black)                                | style.css `.share:hover`       |
| Share icon position         | `absolute`, right `20px`, z-index `4`         | style.css `.share`             |
| Decorative line width       | `70px`                                        | style.css `.line:after`        |
| Decorative line height      | `1px`                                         | style.css `.line:after`        |
| Decorative line color       | `#ccc` (gray)                                 | style.css `.line:after`        |
| Decorative line offset      | `bottom: 0`, centered (`translateX(-50%)`)    | style.css `.line:after`        |
| Line bottom padding         | `20px`                                        | style.css `.line`              |
| Social link font size       | `14px`                                        | style.css `.social a`          |
| Social link color           | `#b3b3b3` (light gray)                        | style.css `.social a`          |
| Heart icon color            | `#dc3545` (red)                               | style.css `.like .icon`        |
| Message icon color          | `#007bff` (blue)                              | style.css `.message .icon`     |
| Add icon color              | `#007bff` (blue)                              | style.css `.add .icon`         |
| Content-text padding        | `p-4 px-5` (16px top/bottom, 20px left/right) | style.css `.content-text`      |
| Form control shadow         | `0 1px 3px 0 rgba(0,0,0,0.2)`                 | style.css `.form-control`      |
| Custom select shadow        | `0 1px 3px 0 rgba(0,0,0,0.2)`                 | style.css `.custom-select`     |
| Page layout                 | Full viewport height, centered                | style.css `.content` = `100vh` |
| Logo width                  | `70px`                                        | style.css `.logo img`          |

## Visual design (from preview HTML)

The template shows a full-viewport centered layout with a light background. In the center is a heading "Modal #9" and a Bootstrap secondary button labeled "Launch modal". When clicked, a large centered modal dialog appears with:

1. **Background**: Light gray (#efefef) — no dark overlay by default
2. **Close button**: Black X icon in the top-right corner
3. **Two-column 50/50 layout** inside the modal body:
   - **Left column**: Product image (background-image, 50% width, cover) with an absolute-positioned white price badge "$2000" at top-left
   - **Right column** (`.content-text`, padded p-4 px-5):
     - Share icon (absolute top-right, gray, hover black)
     - Product title "Grand Prix 4000" (black, 22px) with decorative 70px gray line underneath
     - Star rating row (4 yellow stars, 1 empty star)
     - Description paragraph (gray #777, 14px)
     - Social engagement bar (50% width, centered):
       - Heart icon (red #dc3545) with count "25"
       - Chat icon (blue #007bff) with count "10"
       - Add icon (blue #007bff) with count "55"
4. **Modal shadow**: Deep box-shadow `0 10px 50px -10px rgba(0,0,0,0.9)`
5. **Modal corners**: 7px border-radius, overflow hidden

The overall aesthetic is clean, product-focused, and modern — a light gray background with a split image+details layout. The decorative line under the title and the social engagement bar are the distinctive design elements.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading and a launch button.

#### Scenario: Launch page visible

- **GIVEN** the Piazza app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered column
- **AND** it SHALL show the heading "Modal #9"
- **AND** it SHALL show a button labeled "Launch modal"
- **AND** the button SHALL have slightly rounded corners (border-radius 4px) and comfortable padding

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the product showcase modal SHALL open centered over the page

### Requirement: Product showcase modal shell

The system SHALL render a centered rounded (7px) modal dialog with a light gray background (#efefef).

#### Scenario: Modal appears on trigger

- **GIVEN** the launch button has been clicked
- **THEN** a dialog element SHALL be present with `role="dialog"` and `aria-modal="true"`
- **AND** the modal background SHALL be light gray (#efefef)
- **AND** the modal SHALL have a box-shadow of `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** the modal SHALL have a border-radius of 7px
- **AND** there SHALL be no dark semi-transparent overlay

#### Scenario: Modal does not render when closed

- **GIVEN** the modal is closed
- **THEN** no dialog element SHALL be present in the DOM

### Requirement: Two-column product layout

The system SHALL render a two-column layout inside the modal with a product image on the left and product details on the right.

#### Scenario: Layout structure

- **GIVEN** the modal is open
- **THEN** the modal body SHALL contain a flex container with two child columns
- **AND** the left column SHALL occupy 50% width (`flex: 0 0 50%`)
- **AND** the right column SHALL occupy the remaining 50%

#### Scenario: Product image column

- **GIVEN** the modal is open
- **THEN** the left column SHALL display a background image with `cover` sizing and centered position
- **AND** the image column SHALL be at least 200px tall (modal height)

#### Scenario: Product details column

- **GIVEN** the modal is open
- **THEN** the right column SHALL have padding of 16px top/bottom and 20px left/right
- **AND** it SHALL display the product title, star rating, description, and social bar

### Requirement: Product title with decorative line

The system SHALL render the product title with a decorative horizontal line underneath.

#### Scenario: Title and line rendering

- **GIVEN** the modal is open
- **THEN** the product title "Grand Prix 4000" SHALL be displayed in black, 22px font
- **AND** a decorative line SHALL be rendered below the title
- **AND** the line SHALL be 70px wide, 1px tall, and gray (#ccc)
- **AND** the line SHALL be centered horizontally under the title
- **AND** the title SHALL have 20px bottom padding to accommodate the line

### Requirement: Star rating display

The system SHALL render a star rating row below the title.

#### Scenario: Star rating visible

- **GIVEN** the modal is open
- **THEN** a row of 5 star icons SHALL be displayed below the title
- **AND** the first 4 stars SHALL be styled as filled/yellow (text-warning)
- **AND** the 5th star SHALL be styled as empty/outlined

### Requirement: Product description

The system SHALL render a description paragraph below the star rating.

#### Scenario: Description visible

- **GIVEN** the modal is open
- **THEN** a description paragraph SHALL be displayed below the star rating
- **AND** the paragraph text SHALL be gray (#777) and 14px font size
- **AND** the paragraph SHALL have 1.5 line-height
- **AND** the paragraph SHALL have bottom margin (mb-5)

### Requirement: Social engagement bar

The system SHALL render a social engagement bar with heart, message, and add icons with counts.

#### Scenario: Social bar layout

- **GIVEN** the modal is open
- **THEN** a horizontal flex bar SHALL be rendered below the description
- **AND** the bar SHALL be 50% width and centered horizontally
- **AND** the bar SHALL contain three icon-count pairs: heart, message, add

#### Scenario: Heart icon

- **GIVEN** the social bar is visible
- **THEN** a heart icon SHALL be displayed with count "25"
- **AND** the heart icon SHALL be red (#dc3545)
- **AND** the icon and text SHALL be light gray (#b3b3b3) and 14px

#### Scenario: Message icon

- **GIVEN** the social bar is visible
- **THEN** a chat/message icon SHALL be displayed with count "10"
- **AND** the message icon SHALL be blue (#007bff)

#### Scenario: Add icon

- **GIVEN** the social bar is visible
- **THEN** an add icon SHALL be displayed with count "55"
- **AND** the add icon SHALL be blue (#007bff)

### Requirement: Share icon

The system SHALL render a share icon in the top-right corner of the product details column.

#### Scenario: Share icon visible

- **GIVEN** the modal is open
- **THEN** a share icon SHALL be positioned absolutely in the top-right of the right column
- **AND** the share icon SHALL be gray (#ccc)
- **AND** the share icon SHALL turn black (#000) on hover

### Requirement: Price badge overlay

The system SHALL render a price badge on the product image.

#### Scenario: Price badge visible

- **GIVEN** the modal is open
- **THEN** a price badge SHALL be positioned absolutely over the product image
- **AND** the badge SHALL be at top-left (20px from top, 20px from left)
- **AND** the badge text SHALL be white (#fff)
- **AND** the badge SHALL display "$2000"

### Requirement: Accessibility

The system SHALL provide accessible markup for the modal and its interactive elements.

#### Scenario: ARIA attributes

- **GIVEN** the modal is open
- **THEN** the dialog SHALL have `role="dialog"` and `aria-modal="true"`
- **AND** the dialog SHALL have an `aria-labelledby` pointing to the title element

#### Scenario: Keyboard interaction

- **GIVEN** the modal is open
- **WHEN** the Escape key is pressed
- **THEN** the modal SHALL close
- **AND** focus SHALL return to the launch button

#### Scenario: Focus trap

- **GIVEN** the modal is open
- **THEN** focus SHALL be trapped within the modal dialog
- **AND** Tab key SHALL cycle through interactive elements within the modal

## Verification checklist

- [ ] Launch page renders with centered heading and button
- [ ] Clicking launch button opens modal
- [ ] Modal has light gray (#efefef) background
- [ ] Modal has 7px border-radius and deep box-shadow
- [ ] Two-column 50/50 layout renders correctly
- [ ] Product image displays with cover sizing
- [ ] Price badge shows "$2000" at top-left of image
- [ ] Product title "Grand Prix 4000" is black, 22px
- [ ] Decorative line is 70px wide, centered, gray
- [ ] Star rating shows 4 filled + 1 empty stars
- [ ] Description paragraph is gray, 14px, 1.5 line-height
- [ ] Social bar is 50% width, centered, with 3 icon-count pairs
- [ ] Heart icon is red, message/add icons are blue
- [ ] Share icon is gray, turns black on hover
- [ ] Escape key closes modal
- [ ] Focus returns to launch button after modal closes
- [ ] Focus is trapped within modal when open
- [ ] Footer links to componentdock.com
