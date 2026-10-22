# Template: WizPath (Multi-Step Wizard Form)
<!-- prep-status: shipped-as=wizlane -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-8` design this prep describes already
> ships as `apps/wizlane` (<https://wizlane.free.componentdock.com>).
> Do not scaffold `apps/wizpath`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-wizlane/spec.md`.

## Purpose

Recreation of **ColorLib Wizard 8** — a multi-step onboarding/registration wizard form template for a food/grocery delivery or meal service platform.

- **Source slug:** `colorlib-wizard-8`
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-8/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-8/ (404 — unreachable; design captured from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `wizpath` (app: `apps/wizpath`, package: `@free-react-templates/wizpath`)

## Design Tokens

| Token              | Value / Notes                                                                |
| ------------------ | ---------------------------------------------------------------------------- |
| Brand primary      | `#78a44e` olive green (active step circle, buttons, connector lines)         |
| Page background    | `#f5f2ed` textured off-white / light beige with subtle grain                 |
| Card background    | `#ffffff` pure white with subtle drop shadow                                 |
| Text primary       | Dark gray / near-black (headings, labels)                                    |
| Text secondary     | Light gray `#999` (placeholder text, inactive step labels)                   |
| Input border       | `#e0e0e0` thin light gray                                                    |
| Input active bg    | `#e8f0fe` faint light blue (filled/active field highlight)                   |
| Step inactive ring | Light green outline on white circle                                          |
| Font family        | Clean sans-serif — Roboto or Open Sans (weight: bold titles, regular labels) |
| Button radius      | Small rounded corners (~4–6px)                                               |
| Button style       | Solid green `#78a44e`, white uppercase text, no icon                         |
| Card radius        | Rounded corners (~8–12px) with subtle drop shadow                            |

## Visual Design (from screenshot)

Food/grocery delivery theme with decorative food imagery in corners (spices, herbs, tomatoes). Central white card on textured beige background. Four-step progress indicator at top. "BASIC DETAILS" form section with 2/3-column grid of input fields. Each field has a small matching icon. BACK and CONTINUE buttons at bottom of card. Minimalist, warm, earthy aesthetic.

## Requirements

### Feature: WizPath — Multi-Step Wizard Form

#### Scenario: Page renders with four-step progress indicator

- **GIVEN** the user navigates to the WizPath page
- **WHEN** the page loads
- **THEN** a 4-step progress indicator is visible at the top
- **AND** Step 01 is active (solid green circle with white icon)
- **AND** Steps 02, 03, 04 are inactive (green outline circles)
- **AND** faint green connector lines link the steps

#### Scenario: Progress indicator updates on step navigation

- **GIVEN** the user is on Step 01
- **WHEN** the user clicks "CONTINUE"
- **THEN** Step 01 becomes completed (green check or filled)
- **AND** Step 02 becomes active (solid green circle)
- **AND** Step 01's icon changes to a completed state

#### Scenario: Step 01 displays Basic Details form

- **GIVEN** the user is on Step 01
- **WHEN** the form renders
- **THEN** a heading "BASIC DETAILS" is displayed
- **AND** input fields exist for: First Name, Last Name, Email ID, User ID
- **AND** a 3-column row exists for: Country, State, City
- **AND** a Username field and Password field (with show/hide toggle) exist
- **AND** each field has a small matching icon

#### Scenario: Input fields have correct styling

- **GIVEN** any input field on the form
- **WHEN** the field renders
- **THEN** the field has a thin light gray border
- **AND** the field has a white background (or light blue when active/filled)
- **AND** placeholder text is light gray
- **AND** fields have rounded corners

#### Scenario: BACK button returns to previous step

- **GIVEN** the user is on Step 02 or later
- **WHEN** the user clicks "BACK"
- **THEN** the previous step is displayed
- **AND** the progress indicator updates accordingly

#### Scenario: CONTINUE button advances to next step

- **GIVEN** the user has filled required fields on the current step
- **WHEN** the user clicks "CONTINUE"
- **THEN** the next step's form is displayed
- **AND** the progress indicator advances

#### Scenario: Buttons are styled consistently

- **GIVEN** the form is visible
- **WHEN** the user looks at BACK and CONTINUE buttons
- **THEN** both buttons have olive green background (`#78a44e`)
- **AND** both buttons have white uppercase text
- **AND** both buttons have small rounded corners

#### Scenario: Page background and card styling match design

- **GIVEN** the page loads
- **WHEN** the user views the layout
- **THEN** the page background is textured off-white/beige
- **AND** the form content sits in a centered white card
- **AND** the card has a subtle drop shadow
- **AND** the card has rounded corners

#### Scenario: Responsive layout on mobile

- **GIVEN** the user views the page on a mobile device (viewport < 640px)
- **WHEN** the form renders
- **THEN** input fields stack in a single column
- **AND** the progress indicator scales down appropriately
- **AND** buttons remain accessible and tappable

## Verification Checklist

- [ ] Spec written with design tokens extracted from screenshot
- [ ] New name `wizpath` confirmed non-colliding (`ls apps/`, existing specs)
- [ ] All Gherkin scenarios cover the visual design sections
- [ ] No references to ColorLib in spec beyond provenance section
- [ ] Footer links to `https://www.componentdock.com/`
