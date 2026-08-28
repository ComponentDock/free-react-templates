# Template: Arcanum (ColorLib Wizard 26 Recreation)

## Purpose

Recreation of ColorLib **Colorlib Wizard 26** (`https://colorlib.com/wp/template/colorlib-wizard-26/`, preview URL: `https://preview.colorlib.com/theme/colorlib-wizard-26/`) as a modern React 19 + TypeScript + Tailwind CSS 4 application (`apps/arcanum`, `@free-react-templates/arcanum`).

## Design Tokens (Extracted from Reference & Screenshot)

- **Brand Colors**:
  - Primary / Accent: Deep Indigo / Violet (`#4f46e5` / `#6366f1` / `#7c3aed`), with rich gradient backgrounds (e.g. `linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)`).
  - Backgrounds: Clean off-white page background (`#f8fafc`), pure white card container (`#ffffff`), dark slate text (`#1e293b`), muted gray secondary text (`#64748b`).
  - Borders & Inputs: Subtle gray borders (`#e2e8f0`), focus ring in primary indigo (`#6366f1`).
- **Typography**:
  - Font Family: Inter / Sans-serif (`font-sans`).
  - Headings: Bold, clean sans-serif (`text-2xl font-bold text-slate-900`).
  - Body: Readable text (`text-sm text-slate-600`).
- **Button & Control Shapes**:
  - Rounded-lg buttons (`rounded-lg px-6 py-2.5 font-medium transition-all shadow-sm`) with primary indigo hover states.
  - Step indicator pills / progress bar with active/completed states.
- **Section Structure**:
  1. **Header / Wizard Title**: Multi-step booking/form wizard title and descriptive subtitle.
  2. **Step Indicator Navigation**: Visual progress bar showing steps (e.g., 1. Personal Info, 2. Preferences & Booking Details, 3. Review & Confirmation).
  3. **Interactive Step Form**: Active step fields with live validation, next/previous buttons, and summary view.
  4. **Footer**: Clean footer with copyright and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Gherkin Requirements & Scenarios

### Feature: Multi-Step Booking Wizard

As a user visiting Arcanum, I want to step through a multi-step booking form so that I can complete my reservation seamlessly.

#### Scenario: User navigates through wizard steps

- Given the user is on step 1 of the Arcanum booking wizard
- When the user fills out required personal information and clicks "Next"
- Then the wizard advances to step 2 (Preferences & Booking Details)
- And the step indicator updates to reflect the current progress.

#### Scenario: User validates inputs before proceeding

- Given the user is on any step with required fields
- When the user clicks "Next" with empty required fields
- Then validation errors are displayed for each missing field
- And the wizard prevents advancing to the next step.

#### Scenario: User completes final confirmation

- Given the user has reached the final step of the wizard
- When the user clicks "Confirm Booking"
- Then a success confirmation screen is displayed with booking details summary.

## Verification Checklist

- [ ] App builds correctly (`npm run build`).
- [ ] Typecheck passes without errors (`npm run typecheck`).
- [ ] Vitest unit tests pass with 100% test coverage.
- [ ] Footer links to `https://www.componentdock.com/`.
- [ ] Public CNAME contains `arcanum.free.componentdock.com`.
