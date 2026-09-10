# Template: Tablecraft (Bootstrap Wizard — Restaurant Booking)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 7 (`https://colorlib.com/wp/template/colorlib-wizard-7/`)
- **Preview URL (live CSS extracted from)**: `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html`
- **New Name**: `tablecraft` (App directory: `apps/tablecraft`, Package: `@free-react-templates/tablecraft`)
- **Category**: Bootstrap Wizards / Multi-step Form Wizard
- **Description**: A dark-themed, upscale 3-step restaurant table reservation wizard. Features a two-column overlapping layout: a full-height food image on the left and a dark form panel on the right. Steps cover booking details (people, date, time), contact info (name, phone, email), and a success confirmation screen.

## Design Tokens

- **Font Family**: Raleway (Google Fonts — Regular 400, SemiBold 600, Bold 700); Satisfy (Google Fonts — cursive script for decorative subheadings)
- **Form panel background**: `#333` (dark charcoal)
- **Form panel border**: `1px solid #524b42` (warm brown accent)
- **Form panel shadow**: `0px 7px 18px rgba(0,0,0,0.2)`
- **Heading color**: `#fff` (white), uppercase, Raleway-Bold 25px
- **Subheading/decorative color**: `#cdaa7c` (warm gold), Satisfy-Regular 18px
- **Label color**: `#ccc` (light gray)
- **Input text color**: `#fff` (white), Raleway-SemiBold
- **Input border**: `2px solid #666` (bottom-only for text inputs)
- **Input focus border**: `#e9e0cf` (warm beige)
- **Placeholder color**: `#666`, uppercase
- **Dropdown hover**: `#81acee` (soft blue)
- **Button style**: transparent with `1px solid #666` border, white text, 41px height, Raleway-SemiBold, uppercase; hover `#cdaa7c` (gold) solid fill, no border
- **Step indicator**: "1 /3" text, Raleway-Regular, `#666` color, positioned absolute bottom-right
- **Success check circle**: 38px diameter, `border-radius: 50%`, `#cdaa7c` (gold) background
- **Success heading**: Raleway-Bold 25px, `#fff`, uppercase
- **Success subtext**: Satisfy-Regular 18px, `#cdaa7c`
- **Page background**: `#fff` (white)
- **Wizard width**: 878px
- **Form panel width**: 41.12%, height 562px
- **Image section width**: 58.88%

## Requirements

### Requirement: Two-column overlapping layout

The wizard SHALL display a two-column layout with a food image on the left and a dark form panel overlapping on the right.

#### Scenario: Desktop layout shows image and form side by side

- **WHEN** the viewport is wider than 992px
- **THEN** the left image section occupies 58.88% width and the dark form panel occupies 41.12%, overlapping with a shadow

#### Scenario: Form panel has dark background and border

- **WHEN** the form panel is rendered
- **THEN** it has background `#333`, border `1px solid #524b42`, shadow `0px 7px 18px rgba(0,0,0,0.2)`, and inner padding of 68px 37px

#### Scenario: Image uses placeholder

- **WHEN** the page loads
- **THEN** the left image section shows a placeholder image via `picsum.photos/seed/tablecraft-<n>` matching the restaurant theme

### Requirement: Step indicator shows current step number

The wizard SHALL display a step indicator "N /3" in the bottom-right of the form panel.

#### Scenario: Step 1 indicator

- **WHEN** the user is on Step 1
- **THEN** the indicator displays "1" in large text (40px) followed by "/ 3" in smaller text (15px), both in `#666`

#### Scenario: Step indicator updates on advance

- **WHEN** the user advances to Step 2
- **THEN** the indicator displays "2 / 3"

#### Scenario: Step 3 indicator

- **WHEN** the user is on Step 3
- **THEN** the indicator displays "3 / 3"

### Requirement: Step 1 — Book a Table

Step 1 SHALL display a booking form with People count, Date, and Time selectors.

#### Scenario: Step 1 header is displayed

- **WHEN** Step 1 is visible
- **THEN** the heading "BOOK A TABLE" appears in white uppercase, with "~ Check out our place ~" in gold script font below

#### Scenario: People dropdown is displayed

- **WHEN** Step 1 is visible
- **THEN** a People dropdown shows options 1-5 with a person icon, defaulting to 1

#### Scenario: Date picker is displayed

- **WHEN** Step 1 is visible
- **THEN** a date picker input shows the current date in "DD MMM YYYY" format with a calendar icon

#### Scenario: Time selectors are displayed

- **WHEN** Step 1 is visible
- **THEN** two time dropdown selectors (arrival and departure) are shown side by side — arrival defaults to "9 AM", departure defaults to "7 PM"

### Requirement: Step 2 — Contact Details

Step 2 SHALL display a contact form with Name, Phone, and Email fields.

#### Scenario: Step 2 header is displayed

- **WHEN** the user advances to Step 2
- **THEN** the heading "CONTACT DETAILS" appears with "~ Check out our place ~" subtitle

#### Scenario: Contact fields are displayed

- **WHEN** Step 2 is visible
- **THEN** three input fields are shown: Name, Phone (placeholder "My phone"), Email (placeholder "Your Email"), each with a relevant icon (user, phone, envelope)

#### Scenario: Navigation button changes to "Book Now"

- **WHEN** the user is on Step 2
- **THEN** the forward button text changes from "Next" to "Book Now"

### Requirement: Step 3 — Confirmation / Success

Step 3 SHALL display a success message with a check icon and confirmation text.

#### Scenario: Success screen is displayed

- **WHEN** the user completes Step 2 and advances to Step 3
- **THEN** a gold circular check icon appears centered, with "YOUR TABLE IS READY" in white uppercase heading and "~ Happy friends with a say ~" in gold script

#### Scenario: Navigation buttons are hidden on final step

- **WHEN** the user is on Step 3
- **THEN** the Back and Next/Book Now buttons are hidden

### Requirement: Navigation buttons — Back and Next

The wizard SHALL have Back and Next buttons with outlined styling.

#### Scenario: Back button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** only the "Next" button is visible

#### Scenario: Both buttons visible on step 2

- **WHEN** the user is on Step 2
- **THEN** both "Back" and "Book Now" buttons are visible, positioned at the bottom-right of the form panel

#### Scenario: Button hover turns gold

- **WHEN** the user hovers over any navigation button
- **THEN** the button background becomes `#cdaa7c` (gold) and the border disappears

#### Scenario: Clicking Back returns to previous step

- **WHEN** the user clicks "Back" on Step 2
- **THEN** the wizard transitions back to Step 1 with a fade animation

### Requirement: Fade transitions between steps

The wizard SHALL animate between steps with a fade transition.

#### Scenario: Fade on step change

- **WHEN** the user clicks Next/Back
- **THEN** the current step fades out and the new step fades in over 500ms

### Requirement: Responsive layout

The wizard SHALL be responsive across breakpoints.

#### Scenario: Medium screens (768-991px)

- **WHEN** the viewport is between 768px and 991px
- **THEN** the "Book Now" button width reduces to 100px and navigation buttons reduce width

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport is narrower than 768px
- **THEN** the image section and form panel stack vertically (both 100% width), navigation buttons span full width with padding

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Two-column layout: image left (58.88%), dark form panel right (41.12%)
- [ ] Step indicator "N /3" updates correctly across steps
- [ ] Step 1: People dropdown, Date picker, Time selectors
- [ ] Step 2: Name, Phone, Email inputs with icons; "Book Now" button
- [ ] Step 3: Success screen with gold check icon, heading, script subtext; buttons hidden
- [ ] Back button hidden on Step 1, visible on Step 2
- [ ] Button hover: gold fill `#cdaa7c`, no border
- [ ] Fade transitions between steps (500ms)
- [ ] Responsive: stacks vertically on mobile (<768px)
- [ ] Fonts: Raleway + Satisfy via Google Fonts
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
