# Template: StepFlow (Colorlib Wizard 6 Multi-step Form Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 6 (`https://colorlib.com/wp/template/colorlib-wizard-6/`)
- **New Name**: `stepflow` (App directory: `apps/stepflow`, Package: `@free-react-templates/stepflow`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A modern, pastel-themed 3-step registration wizard with avatar upload, role selection grid, and address collection. Uses pill-shaped inputs, soft color palette, fade transitions, and bottom pagination dots.
- **Preview URL**: https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html (verified HTTP 200)
- **Preview CSS**: `css/style.css` (9,111 bytes, 345 lines — all hand-written, no Bootstrap)
- **Stack**: jQuery Steps plugin in original; React 19 + state machine in recreation. Replace Material Design Iconic Font icons with `lucide-react`. Replace local Poppins/Muli fonts with Google Fonts `<link>`.

## Design Tokens

- **Font family**: Poppins (Regular, Medium, SemiBold) — via Google Fonts link (weights 400, 500, 600). Original also loads Muli Bold but it is only used for icon font fallback; drop it.
- **Brand / accent colors**:
  - Input circle indicator (inactive): `#f6c2ec` (pastel pink/lavender) border
  - Input circle indicator (active): `#f6c2ec` filled
  - Continue / Next button: `#aac1f0` (soft pastel blue)
  - Continue / Next button hover: `#98add6`
  - Back button: `#f6c2ec` (pastel pink)
  - Back button hover: `#dbadd2`
- **Neutral colors**:
  - Body text / placeholder: `#808080`
  - Input text: `#333333`
  - Input background: `#f7f7f7`
  - Card background: `#ffffff`
  - Pagination dots (inactive): `#ffffff` solid circle (10×10)
  - Pagination dots (active): `#ffffff` pill (22×10, border-radius 5.5px)
- **Page background**: Background image (`form-wizard-bg.jpg`) — use a gradient fallback: `linear-gradient(135deg, #c2d1f5, #f2c0e2)` (lavender-to-pink, matching the screenshot)
- **Card**: white, border-radius `10px`, box-shadow `0px 2px 7px rgba(0,0,0,0.1)`, fixed dimensions `738×554px` (centered)
- **Inputs / buttons**: pill-shaped — border-radius `23px`, height `46px`
- **Grid items** (Step 2 role cards): border-radius `7px`, `background-size: cover`, `height: 134px`, `width: 30%` with `27px` gap
- **Transitions**: Step fade — 500ms ease

## Requirements

### Requirement: Three-step wizard with bottom pagination

Users SHALL see a 3-step wizard with bottom pagination dots indicating current step.

#### Scenario: Initial load shows Step 1

- **WHEN** the page loads
- **THEN** Step 1 (Personal Info) is displayed with avatar upload, name fields, email, and password
- **AND** 3 pagination dots are visible below the card, with the first dot widened to a pill shape

#### Scenario: Current step dot is highlighted

- **WHEN** the user is on Step 2
- **THEN** the second pagination dot is a pill shape and the first is a regular circle

#### Scenario: Steps fade in on transition

- **WHEN** the user clicks "Continue" to advance to Step 2
- **THEN** the new step fades in over approximately 500ms

### Requirement: Step 1 — Personal Information with Avatar

Users SHALL see a split layout with an avatar picker on the left and form fields on the right, plus full-width email and password fields.

#### Scenario: Avatar section displays

- **WHEN** Step 1 is visible
- **THEN** a circular avatar placeholder image is shown on the left
- **AND** a "Choose Picture" link with a camera icon is shown below the avatar

#### Scenario: Name fields are side by side

- **WHEN** Step 1 is visible
- **THEN** "First Name", "Last Name", and "Team Name" inputs are displayed in a row on the right side of the avatar

#### Scenario: Full-width fields

- **WHEN** Step 1 is visible
- **THEN** "Email" and "Create a password" inputs span the full card width below the header

#### Scenario: Active field indicator

- **WHEN** the user focuses an input field
- **THEN** the circle indicator to the left of that field is filled with the brand color `#f6c2ec`
- **AND** previous indicators return to outline-only state

### Requirement: Step 2 — Role / Category Selection

Users SHALL see a 3×2 grid of selectable role cards with background images and labels.

#### Scenario: Grid cards display

- **WHEN** Step 2 is visible
- **THEN** 6 cards are shown in two rows of three: Programming, Research, Teacher, Tour Guide, Business, Artist

#### Scenario: Card styling

- **WHEN** the Step 2 grid is rendered
- **THEN** each card has a background image (cover), rounded corners (7px), centered icon, and uppercase white label text

#### Scenario: Card hover effect

- **WHEN** the user hovers over a role card
- **THEN** a subtle box-shadow appears (0px 2px 7px rgba(0,0,0,0.25))

### Requirement: Step 3 — Address Information

Users SHALL see two rows of paired form fields for address details.

#### Scenario: Address fields display

- **WHEN** Step 3 is visible
- **THEN** "Street Name" and "Street Number" are displayed side by side
- **AND** "City" and "Country" are displayed side by side below them

### Requirement: Navigation buttons

Users SHALL have "Continue" and "Back" buttons for wizard navigation.

#### Scenario: Continue button on all steps

- **WHEN** the user is on any step
- **THEN** a pill-shaped "Continue" button (blue `#aac1f0`) with a right-arrow icon is visible

#### Scenario: Back button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** the "Back" button is not visible

#### Scenario: Back button visible on later steps

- **WHEN** the user is on Step 2 or Step 3
- **THEN** a pill-shaped "Back" button (pink `#f6c2ec`) with a left-arrow icon is visible that returns to the previous step

#### Scenario: Button hover animation

- **WHEN** the user hovers over either navigation button
- **THEN** the button color darkens slightly and a wobble animation plays on the arrow icon

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] All 3 wizard steps render with correct fields and layout
- [ ] Avatar placeholder and "Choose Picture" link present
- [ ] Pagination dots reflect current step
- [ ] Step transitions use fade effect (~500ms)
- [ ] Active input circle indicator fills on focus
- [ ] Step 2 shows 6 role cards in a 3×2 grid with hover shadow
- [ ] Step 3 shows address fields in 2×2 paired layout
- [ ] Continue button visible on all steps (blue pill, right arrow)
- [ ] Back button hidden on Step 1, visible on Steps 2–3 (pink pill, left arrow)
- [ ] Button hover darkens color and triggers arrow wobble
- [ ] Footer links to Component Dock
- [ ] Responsive: card full-width on mobile, grid stacks vertically, pagination dots hidden
- [ ] Design tokens match: Poppins font, #aac1f0 blue, #f6c2ec pink, #f7f7f7 input bg, 23px pill radius
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
