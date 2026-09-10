# Template: Billflow (Multi-step Order Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 5 (`https://colorlib.com/wp/template/colorlib-wizard-5/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time — design tokens extracted from screenshot)
- **New Name**: `billflow` (App directory: `apps/billflow`, Package: `@free-react-templates/billflow`)
- **Category**: Forms / Multi-step Checkout Wizard
- **Description**: A warm, modern multi-step checkout form wizard with split-screen layout — decorative illustration on the left, vertical form card on the right. Designed for e-commerce order/billing flows with a 5-step progress indicator and warm peach-beige color palette.

## Design Tokens

> Extracted from the screenshot (preview URL returned 404).

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#F2D7B9` | Warm peach-beige, used for page background + Next button |
| Brand secondary | `#E6C6A6` | Darker beige, footer/bottom strip |
| Accent | `#D98E56` | Orange-peach, active step indicator |
| Surface | `#FFFFFF` | White form card |
| Text primary | `#333333` | Dark grey headings |
| Text secondary | `#555555` | Form labels and body text |
| Text placeholder | `#999999` | Input placeholder text |
| Border | `#E0E0E0` | Light grey input borders |
| Required asterisk | `#E04040` | Red required field markers |
| Step inactive | `#D0D0D0` | Grey inactive step segments |
| Font family | `"Poppins", sans-serif` | Clean modern sans-serif (inferred from style) |
| Button radius | ~4px | Subtle rounded corners on button and inputs |
| Card shadow | subtle drop shadow | White card on beige background |

## Section Structure

Based on the screenshot, the template is a single-page multi-step wizard (no separate page sections — the entire template IS the wizard).

### 1. Page background + Split layout
- Full-viewport warm peach-beige background (`#F2D7B9`)
- Two-column split: left = decorative illustration, right = form card
- Responsive: stacks vertically on mobile

### 2. Left panel — Decorative illustration
- 3D isometric minimalist room scene
- Olive-green floor lamp (`#8A9B68`) casting cool blue light area (`#BDE2E7`)
- Yellow side table (`#F7C52B`) with pink-beige bird figurines
- Dark green palm frond (`#3E6541`), grey watering can (`#949A99`)
- For React recreation: use a placeholder image from picsum or a solid color panel with decorative SVG icons

### 3. Right panel — White form card
- White (`#FFFFFF`) tall card with subtle drop shadow
- Vertically centered on the right half

### 4. Step indicator (progress bar)
- Title: "Billing Details" in bold dark grey
- 5 horizontal segments below the title
- Active segment: solid orange-peach (`#D98E56`)
- Inactive segments: light grey (`#D0D0D0`)
- Equal-width segments

### 5. Form fields (Step 1 — Billing Details)
- Two-column top row: First Name * + Last Name *
- Full-width stacked fields:
  - Company Name (optional)
  - Country * (dropdown/select)
  - Address * (Street address + Apartment/suite/unit optional)
  - Town / City *
- All inputs: thin light grey border, white background, placeholder text, ~3-4px radius
- Required fields marked with red asterisk

### 6. Navigation button
- "Next →" button at bottom-right of card
- Solid warm peach-beige background (`#F2D7B9`)
- Dark grey text, bold, with arrow indicator
- Subtle rounded corners
- Hidden on last step (replaced by Submit)

## Gherkin Requirements & Scenarios

### Requirement: Multi-step wizard navigation

Users SHALL navigate through a 5-step checkout wizard with a visual progress indicator.

#### Scenario: Initial view shows step 1

- **WHEN** the user loads the Billflow form wizard
- **THEN** the wizard displays Step 1 (Billing Details) with form fields for first name, last name, company, country, address, and city
- **AND** the progress indicator shows segment 1 as active (orange-peach) and segments 2-5 as inactive (grey)

#### Scenario: User advances to next step

- **WHEN** the user fills in all required fields on Step 1 and clicks "Next"
- **THEN** the wizard transitions to Step 2
- **AND** the progress indicator shows segments 1-2 active

#### Scenario: User navigates backward

- **WHEN** the user is on Step 2 and clicks "Back"
- **THEN** the wizard returns to Step 1 with previously entered data preserved

### Requirement: Form validation on each step

Users SHALL see validation errors when attempting to advance with invalid or missing required fields.

#### Scenario: Empty required fields on step 1

- **WHEN** the user clicks "Next" on Step 1 with empty first name, last name, country, address, or city
- **THEN** inline validation error messages are displayed for the empty required fields
- **AND** the wizard does NOT advance to Step 2

#### Scenario: Optional fields accepted empty

- **WHEN** the user clicks "Next" on Step 1 with company name left empty
- **THEN** the wizard advances to Step 2 without error for company name

#### Scenario: Country dropdown selection

- **WHEN** the user clicks the Country dropdown
- **THEN** a list of countries is displayed for selection
- **AND** the selected country is shown in the field

### Requirement: Step indicator reflects progress

The progress indicator SHALL accurately reflect the current step and completed steps.

#### Scenario: Progress on intermediate step

- **WHEN** the user is on Step 3
- **THEN** progress segments 1-3 are shown as active (orange-peach)
- **AND** segments 4-5 are shown as inactive (grey)

#### Scenario: Final step indicator

- **WHEN** the user is on Step 5
- **THEN** all 5 progress segments are shown as active

### Requirement: Final step submission

Users SHALL be able to submit the form on the last step.

#### Scenario: Submit on final step

- **WHEN** the user completes all fields on Step 5
- **THEN** a "Submit" button is displayed instead of "Next"
- **AND** clicking Submit processes the form

#### Scenario: Successful submission feedback

- **WHEN** the user successfully submits the form
- **THEN** a success confirmation message or screen is displayed

### Requirement: Responsive layout

The wizard SHALL be fully responsive across device sizes.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport width is less than 768px
- **THEN** the left illustration panel and right form card stack vertically
- **AND** the form card takes full width with appropriate padding

#### Scenario: Desktop split layout

- **WHEN** the viewport width is 768px or greater
- **THEN** the illustration and form card display side by side

### Requirement: Component Dock branding

The template footer SHALL include Component Dock attribution.

#### Scenario: Footer link present

- **WHEN** the user views the template
- **THEN** a footer link to `https://www.componentdock.com/` is present with text "Component Dock"

## Verification Checklist

- [ ] Spec matches ColorLib Wizard 5 screenshot section order and layout
- [ ] 5-step wizard with progress indicator implemented
- [ ] Form validation with inline error messages
- [ ] Back/Next/Submit navigation between steps
- [ ] Split-screen layout (illustration + form card) responsive
- [ ] Design tokens match extracted values (peach-beige palette, Poppins font)
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md/PR)
- [ ] Footer links to Component Dock
- [ ] All tests pass with 100% coverage
- [ ] TypeScript strict mode, no `any`
- [ ] Uses `packages/ui` components where applicable (cn, Button, etc.)
