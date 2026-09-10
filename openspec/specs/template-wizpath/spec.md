# Template: WizPath (Multi-Step Wizard Form)

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

## Gherkin Requirements

### Feature: WizPath — Multi-Step Wizard Form

#### Scenario: Page renders with four-step progress indicator

- **Given** the user navigates to the WizPath page
- **When** the page loads
- **Then** a 4-step progress indicator is visible at the top
- **And** Step 01 is active (solid green circle with white icon)
- **And** Steps 02, 03, 04 are inactive (green outline circles)
- **And** faint green connector lines link the steps

#### Scenario: Progress indicator updates on step navigation

- **Given** the user is on Step 01
- **When** the user clicks "CONTINUE"
- **Then** Step 01 becomes completed (green check or filled)
- **And** Step 02 becomes active (solid green circle)
- **And** Step 01's icon changes to a completed state

#### Scenario: Step 01 displays Basic Details form

- **Given** the user is on Step 01
- **When** the form renders
- **Then** a heading "BASIC DETAILS" is displayed
- **And** input fields exist for: First Name, Last Name, Email ID, User ID
- **And** a 3-column row exists for: Country, State, City
- **And** a Username field and Password field (with show/hide toggle) exist
- **And** each field has a small matching icon

#### Scenario: Input fields have correct styling

- **Given** any input field on the form
- **When** the field renders
- **Then** the field has a thin light gray border
- **And** the field has a white background (or light blue when active/filled)
- **And** placeholder text is light gray
- **And** fields have rounded corners

#### Scenario: BACK button returns to previous step

- **Given** the user is on Step 02 or later
- **When** the user clicks "BACK"
- **Then** the previous step is displayed
- **And** the progress indicator updates accordingly

#### Scenario: CONTINUE button advances to next step

- **Given** the user has filled required fields on the current step
- **When** the user clicks "CONTINUE"
- **Then** the next step's form is displayed
- **And** the progress indicator advances

#### Scenario: Buttons are styled consistently

- **Given** the form is visible
- **When** the user looks at BACK and CONTINUE buttons
- **Then** both buttons have olive green background (`#78a44e`)
- **And** both buttons have white uppercase text
- **And** both buttons have small rounded corners

#### Scenario: Page background and card styling match design

- **Given** the page loads
- **When** the user views the layout
- **Then** the page background is textured off-white/beige
- **And** the form content sits in a centered white card
- **And** the card has a subtle drop shadow
- **And** the card has rounded corners

#### Scenario: Responsive layout on mobile

- **Given** the user views the page on a mobile device (viewport < 640px)
- **When** the form renders
- **Then** input fields stack in a single column
- **And** the progress indicator scales down appropriately
- **And** buttons remain accessible and tappable

## Verification Checklist

- [ ] Spec written with design tokens extracted from screenshot
- [ ] New name `wizpath` confirmed non-colliding (`ls apps/`, existing specs)
- [ ] All Gherkin scenarios cover the visual design sections
- [ ] No references to ColorLib in spec beyond provenance section
- [ ] Footer links to `https://www.componentdock.com/`
