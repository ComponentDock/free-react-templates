# Template: Divine (4-Step Order Wizard)

## Purpose

Divine is a single-page four-step ORDER WIZARD in the free-react-templates
monorepo. It is an original React recreation of the ColorLIB "Colorlib Wizard 5"
free template (source: https://colorlib.com/wp/template/colorlib-wizard-5/),
built under a DIFFERENT name (**Divine**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps form wizard: a split-screen layout with an
artistic left visual side and a white billing-details form card on the right,
on a soft peach/beige page background. It features a four-step horizontal
progress bar, a form with billing fields, and a "Next" button with a right-arrow icon.

- **Source template**: [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time — 404; fallback to screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Naming

The ColorLIB source name "Colorlib Wizard 5" is FORBIDDEN as the app name.
**Divine** is the new, original name — single lowercase word, kebab-case, no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name. Source slug + preview URL are recorded above.

## Design tokens

| Token                | Value                         | Notes                                |
| -------------------- | ----------------------------- | ------------------------------------ |
| Background (page)    | `#f5e6d0` (soft peach)        | Full viewport                        |
| Background (card)    | `#ffffff` (pure white)        | Form card on the right side          |
| Accent / CTA         | `#f0a37a` (peach)             | Active step indicator, "Next" button |
| Accent hover         | `#e08960`                     | Button hover state                   |
| Text primary         | `#333333` (dark grey)         | Headings and labels                  |
| Text secondary       | `#999999` (light grey)        | Inactive step segments               |
| Input border         | `#e0e0e0` (subtle light grey) | Minimal input field borders          |
| Step inactive        | `#d9d9d9` (grey)              | Inactive step circles                |
| Font family          | `Poppins, sans-serif`         | Via Google Fonts                     |
| Border radius (card) | `8px`                         | Rounded card corners                 |

## Requirements

### Requirement: Page loads with step 1 active (Billing Details)

A four-step order wizard SHALL be displayed with a split-screen layout:
a decorative left panel (hidden on mobile) and a white form card on the right.

#### Scenario: Page loads with billing form visible

- **WHEN** the user opens the Divine page
- **THEN** a four-step order wizard should be visible
- **AND** step 1 "Billing Details" should be displayed and active
- **AND** steps 2, 3, and 4 should be shown in the progress indicator but inactive
- **AND** the form should contain "First Name" and "Last Name" inputs side by side
- **AND** the form should contain a "Company Name" input
- **AND** the form should contain a "Country" dropdown
- **AND** the form should contain an "Address" input
- **AND** the form should contain an "Apartment, suite, unit etc." input
- **AND** the form should contain a "Town / City" input
- **AND** a "Next" button with a right arrow should be visible

### Requirement: Progress indicator shows step progress

A horizontal progress bar with 4 labeled segments SHALL be displayed,
highlighting the active step in the peach accent color.

#### Scenario: Active step is highlighted

- **WHEN** the user is on any step
- **THEN** a horizontal progress bar with 4 segments should be visible
- **AND** the active step should be highlighted in the peach accent color
- **AND** future steps should appear in light grey
- **AND** completed steps should show as active/highlighted

### Requirement: Required fields validation on step 1

Clicking "Next" on step 1 with empty required fields SHALL show validation
errors and prevent advancement.

#### Scenario: Empty required fields show errors

- **WHEN** the user is on step 1 "Billing Details"
- **AND** the "First Name" field is empty
- **WHEN** the user clicks "Next"
- **THEN** the user should remain on step 1
- **AND** a validation error should appear on the "First Name" field
- **AND** a validation error should appear on the "Last Name" field
- **AND** a validation error should appear on the "Country" field
- **AND** a validation error should appear on the "Address" field
- **AND** a validation error should appear on the "Town / City" field

### Requirement: Navigate to step 2

Filling all required billing fields and clicking "Next" SHALL advance to the
shipping step.

#### Scenario: Advance to shipping step

- **WHEN** the user is on step 1 with valid billing information
- **WHEN** the user clicks "Next"
- **THEN** step 2 should become active
- **AND** the Shipping Information form should be displayed

### Requirement: Navigate back to step 1

Clicking "Back" on step 2 SHALL return to step 1 with data preserved.

#### Scenario: Back navigation preserves data

- **WHEN** the user is on step 2
- **WHEN** the user clicks "Back"
- **THEN** step 1 should become active again
- **AND** the previously entered data should be preserved

### Requirement: Navigate through all steps

The wizard SHALL support forward and backward navigation through all 4 steps.

#### Scenario: Navigate to step 3

- **WHEN** the user is on step 2 with valid shipping information
- **WHEN** the user clicks "Next"
- **THEN** step 2 should show as completed
- **AND** step 3 should become active

#### Scenario: Navigate to final step

- **WHEN** the user is on step 3 with valid payment information
- **WHEN** the user clicks "Next"
- **THEN** step 3 should show as completed
- **AND** step 4 should become active
- **AND** the "Next" button should change to a "Confirm" button

### Requirement: Optional fields do not block advancement

Empty optional fields (Company Name, Apartment) SHALL not prevent advancing.

#### Scenario: Optional fields can be empty

- **WHEN** the user is on step 1
- **AND** the "Company Name" field is empty
- **AND** the "Apartment, suite, unit etc." field is empty
- **WHEN** the user clicks "Next" with all required fields filled
- **THEN** the wizard should advance to step 2

### Requirement: Form submission on final step

Clicking "Confirm" on step 4 SHALL complete the order and show a confirmation.

#### Scenario: Complete form submission

- **WHEN** the user is on step 4 (Confirmation)
- **WHEN** the user clicks "Confirm"
- **THEN** an "Order Confirmed!" message should appear
- **AND** a "Thank you for your order" message should appear

### Requirement: Responsive layout on mobile

The wizard SHALL adapt to mobile viewports with the decorative panel hidden.

#### Scenario: Mobile viewport layout

- **WHEN** the user opens the page on a viewport width less than 768px
- **THEN** the wizard card should fit the screen width
- **AND** all form fields should remain usable and accessible
- **AND** the step indicator should remain visible above the form

### Requirement: Footer links to Component Dock

The page footer SHALL include a link to https://www.componentdock.com/.

#### Scenario: Footer displays correctly

- **WHEN** the user views any page
- **THEN** a footer should be visible with a link to componentdock.com
- **AND** the link should display "More templates at Component Dock"
- **AND** the link should open in a new tab

## Verification checklist

- [ ] Preview unreachable (404) — fallback to screenshot used for all design tokens
- [ ] Page background is a soft peach (`#f5e6d0`)
- [ ] Form card is white with rounded corners (`8px` radius)
- [ ] Step indicator: horizontal 4-segment bar, active = peach, inactive = grey
- [ ] "Billing Details" heading and form on step 1
- [ ] First Name * and Last Name * side by side
- [ ] Company Name (optional, no asterisk)
- [ ] Country dropdown with "Viet Nam" option
- [ ] Address * field with "Street address" placeholder
- [ ] Apartment, suite, unit etc. (optional) field
- [ ] Town / City * required field
- [ ] "Next" button with right arrow icon
- [ ] Required field validation prevents advancement
- [ ] Optional fields do not block advancement
- [ ] Back navigation preserves data
- [ ] Progress bar updates as user advances
- [ ] Responsive layout stacks on mobile
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Uses cn() from packages/ui
- [ ] Font family: Poppins via Google Fonts
- [ ] 100% test coverage
