# Template: Wizardry (Colorlib Wizard 27 Form Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 27 (`https://colorlib.com/wp/template/colorlib-wizard-27/`)
- **New Name**: `wizardry` (App directory: `apps/wizardry`, Package: `@free-react-templates/wizardry`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A clean, modern vertical form wizard template featuring step-by-step navigation, profile setup, billing details, confirmation steps, and responsive layout.

## Design Tokens & Research

- **Source Preview**: https://colorlib.com/wp/template/colorlib-wizard-27/
- **Preview Fallback Note**: Live preview preview.colorlib.com subdomain returned 404; research captured from Colorlib WordPress post description and screenshot (`colorlib-free-wizard-27.jpg`).
- **Brand Colors**:
  - Primary: Indigo/Violet (`#6366f1` / Tailwind `indigo-600`)
  - Accent / Button hover: Deep Indigo (`#4f46e5` / Tailwind `indigo-700`)
  - Background: Soft neutral grey (`#f8fafc` / Tailwind `slate-50`)
  - Card Surface: Pure white (`#ffffff`) with subtle border and soft drop shadow
- **Typography**:
  - Font Family: "Inter", system-ui, sans-serif
  - Headings: Bold font weights (700), dark slate text (`#1e293b`)
  - Body: Regular font weights (400), muted slate text (`#64748b`)
- **Layout & Structure**:
  - Centered card layout with a vertical sidebar step indicator on the left (Step 1: Personal Info, Step 2: Account Setup, Step 3: Billing / Payment, Step 4: Confirmation) and active form pane on the right.
  - Interactive validation and navigation buttons ("Back", "Next", "Submit / Complete").

## Gherkin Requirements & Scenarios

### Feature: Wizardry Multi-Step Form Wizard

#### Scenario: User navigates through wizard steps

- **Given** the user is on the Wizardry form wizard landing view
- **When** the user fills in valid personal info in Step 1 and clicks "Next"
- **Then** the wizard advances to Step 2 (Account Setup) and marks Step 1 as completed

#### Scenario: Form validation prevents advancing on invalid input

- **Given** the user is on Step 1 with empty required fields
- **When** the user clicks "Next"
- **Then** inline validation error messages are displayed and the wizard remains on Step 1

#### Scenario: Successful submission completes the wizard

- **Given** the user has completed all steps up to the final confirmation step
- **When** the user clicks "Submit"
- **Then** a success screen is displayed with a summary and reset option

## Verification Checklist

- [ ] App folder `apps/wizardry` created with package name `@free-react-templates/wizardry`
- [ ] `public/CNAME` contains `wizardry.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] Vitest unit & component tests passing with 100% coverage
- [ ] `npm run spec:validate` passes
