# Template: Codex (Colorlib Wizard 29 Registration Wizard)

## Purpose

Recreation of ColorLib Wizard 29 — a free registration wizard template with a 4-step form wizard. The original is a Bootstrap-based page with a full-page background image, a white card containing a "Register Wizard" heading, and a horizontal tab-style step indicator for username, email, password, and confirm-password steps.

- **Source template**: [Colorlib Wizard 29](https://colorlib.com/wp/template/colorlib-wizard-29/)
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-29/index.html` (live preview reachable; the `preview.colorlib.com` URL returns 404)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design Tokens

> Extracted from the live preview CSS (`css/main.css`) at
> `https://colorlib.com/etc/bwiz/colorlib-wizard-29/css/main.css`.

- **Background (page)**: Full-page background image (`bg-img-01.jpg`) — use a Picsum placeholder; covers entire viewport
- **Background (card body)**: `#ffffff` (white) — white card with rounded corners and shadow
- **Accent / CTA**: `#3155cc` (blue) — active tab background, "next step" / "Confirm" button
- **Button hover**: `#1d41b8` (darker blue) — hover state for all CTA buttons
- **Active step circle**: `#3d6aff` (bright blue) — circular step indicator inside active tab
- **Inactive tab background**: `#999999` (gray) — inactive step pill
- **Inactive step circle**: `#666666` (dark gray) — number circle inside inactive tab
- **Title text**: `#ffffff` (white) — "REGISTER WIZARD" heading on page background
- **Input text**: `#666666` — text typed into form fields
- **Input placeholder**: `#999999` — placeholder text inside inputs
- **Input border**: `1px solid #e5e5e5` (light gray) — subtle border on input fields
- **Font family**: `"Lato", "Arial", "Helvetica Neue", sans-serif` — system fallback stack
- **Font weight (body)**: `400` — normal body text
- **Font weight (title)**: `700` — bold uppercase title
- **Font weight (tabs/buttons)**: `700` — bold step labels and CTA buttons
- **Border radius (input)**: `25px` — full pill / rounded pill shape
- **Border radius (button right)**: `25px` (top-right and bottom-right only) — button flush right inside the input
- **Border radius (step pill)**: `22.5px` — pill-shaped step indicator tabs
- **Border radius (step circle)**: `50%` — circular number indicator
- **Border radius (card body)**: `5px` — slightly rounded card corners
- **Box shadow (card)**: `0px 8px 20px 0px rgba(0,0,0,0.15)` — soft drop shadow on the card body
- **Step pill width**: `162px` — fixed width for each step indicator
- **Step circle size**: `45px × 45px` — circular step number indicator
- **Input line-height**: `48px` — height of the input field
- **Button line-height**: `50px` — height of the CTA button
- **Transition**: `all 0.4s ease` — smooth transitions on tabs, inputs, links
- **Responsive breakpoint**: `767px` — tabs stack vertically, padding reduces

## Requirements

### Requirement: Page Load and Layout

The wizard SHALL display a full-page background image with a white card centered on the page and a "Register Wizard" heading in white uppercase text above the card.

#### Scenario: Page renders correctly

- **WHEN** the user loads the Codex registration wizard page
- **THEN** a full-page background image covers the viewport
- **AND** the heading "Register Wizard" is displayed in white, uppercase, bold text
- **AND** a white card with rounded corners and drop shadow is centered below the heading
- **AND** the card contains a step indicator and a form input with a button

### Requirement: Step Indicator

The wizard SHALL display 4 horizontal pill-shaped step tabs, each with a circular step number and a text label.

#### Scenario: Step indicator renders correctly

- **WHEN** the wizard form is loaded
- **THEN** four horizontal step tabs are displayed: username, email, password, confirm password
- **AND** each tab has a circular step number (45px) and a text description label
- **AND** step 1 tab is shown as active with a blue (#3155cc) background
- **AND** steps 2-4 tabs are shown as inactive with gray (#999) backgrounds
- **AND** active step circle is bright blue (#3d6aff)
- **AND** inactive step circles are dark gray (#666)

#### Scenario: Step indicator updates on navigation

- **WHEN** the user advances to step 2
- **THEN** step 1 tab shows as completed/active with blue background
- **AND** step 2 tab is highlighted blue (active)
- **AND** steps 3-4 tabs remain gray (inactive)

### Requirement: Step 1 — Username

The wizard SHALL display a username text input with a "next step" button flush-right inside the input field.

#### Scenario: Username input renders

- **WHEN** the user is on step 1
- **THEN** a text input with placeholder "Username here" is displayed
- **AND** a "next step" button is visible inside the input field on the right
- **AND** the input has a pill shape (25px border-radius)

#### Scenario: Navigate from step 1 to step 2

- **WHEN** the user types "john_doe" in the username input
- **AND** the user clicks "next step"
- **THEN** step 2 "email" becomes active with a blue background
- **AND** step 2 displays an email input with placeholder "ex: example@email.com"

### Requirement: Step 2 — Email

The wizard SHALL display an email input with validation and a "next step" button.

#### Scenario: Email input renders

- **WHEN** the user is on step 2
- **THEN** an email input with placeholder "ex: example@email.com" is displayed
- **AND** the input has type="email" for browser validation

#### Scenario: Navigate from step 2 to step 3

- **WHEN** the user types "john@example.com" in the email input
- **AND** the user clicks "next step"
- **THEN** step 3 "password" becomes active with a blue background
- **AND** step 3 displays a password input with placeholder "Password"

### Requirement: Step 3 — Password

The wizard SHALL display a password input field with masked characters.

#### Scenario: Password input renders

- **WHEN** the user is on step 3
- **THEN** a password input with placeholder "Password" is displayed
- **AND** the input has type="password" for masking

#### Scenario: Navigate from step 3 to step 4

- **WHEN** the user types a password
- **AND** the user clicks "next step"
- **THEN** step 4 "confirm password" becomes active
- **AND** the button text changes to "Confirm"

### Requirement: Step 4 — Confirm Password

The wizard SHALL display a confirm password input and a "Confirm" button.

#### Scenario: Confirm password input renders

- **WHEN** the user is on step 4
- **THEN** a password input with placeholder "Password" is displayed
- **AND** the button text reads "Confirm" instead of "next step"

#### Scenario: Complete registration

- **WHEN** the user types a matching password
- **AND** the user clicks "Confirm"
- **THEN** a success/completion state is displayed
- **AND** the success view shows "Registration Complete" heading
- **AND** the success view shows "Welcome, <username>!" message

### Requirement: Form Validation

The wizard SHALL prevent advancing when required fields are empty using browser native validation.

#### Scenario: Empty field prevents advancing

- **WHEN** the user leaves the username field empty
- **AND** the user clicks "next step"
- **THEN** the browser's native validation prevents submission
- **AND** the form does not advance to step 2

### Requirement: Responsive Layout

The wizard SHALL stack step tabs vertically on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the user views the wizard on a viewport narrower than 768px
- **THEN** the step tabs stack vertically instead of horizontally
- **AND** each step tab takes full width

### Requirement: Footer with Component Dock Branding

The wizard SHALL include a footer that links to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

## Verification Checklist

- [ ] Page displays "Register Wizard" heading in white, uppercase, bold
- [ ] Full-page background image covers the viewport (use Picsum placeholder)
- [ ] White card with rounded corners and drop shadow is centered
- [ ] Four step tabs displayed horizontally: username, email, password, confirm password
- [ ] Active step tab has blue (#3155cc) background with bright blue (#3d6aff) circle
- [ ] Inactive step tabs have gray (#999) background with dark gray (#666) circle
- [ ] Each step shows a pill-shaped input field with rounded corners (25px)
- [ ] "next step" / "Confirm" button is flush-right inside the input (pill + button combo)
- [ ] Button background is #3155cc, hover is #1d41b8
- [ ] Step navigation advances one step at a time with validation
- [ ] Final step button text reads "Confirm"
- [ ] Password fields use type="password" for masking
- [ ] Responsive: tabs stack vertically below 768px
- [ ] Footer links to https://www.componentdock.com/ labeled "Component Dock"
- [ ] Font is Lato (loaded via Google Fonts)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
