# Template: StepForge (Payment Account Wizard)

## Purpose

Recreation of ColorLib Colorlib Wizard 25 (`https://colorlib.com/wp/template/colorlib-wizard-25/`, demo at `https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html`). A sleek 3-step payment account creation and registration wizard featuring personal info, bank details, and confirmation summary with a dark slate card aesthetic, step indicators, and fully responsive layout built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Body Background**: Dark slate `#383a4f`
- **Card Background**: Purplish slate `#525575` with subtle box shadow (`0px 8px 20px 0px rgba(0, 0, 0, 0.15)`) and 10px border radius
- **Primary Brand / Active Color**: Vibrant green `#25b45b` (active step icons, next/submit buttons)
- **Typography**: Nunito, sans-serif (`font-sans`)
- **Inputs**: Solid white (`#fff`) background with dark gray text (`#000` / `#666`) and 3px border radius
- **Footer**: Required Component Dock attribution link (`https://www.componentdock.com/`)

## Gherkin Requirements & Scenarios

### Feature: Multi-Step Payment Account Registration

#### Scenario: User navigates through all 3 steps of the wizard

- Given the user is on Step 1 (Personal Information) of the StepForge wizard
- When the user fills in first name, last name, gender, address, phone, zip code, and date of birth
- And clicks the Next button
- Then the wizard advances to Step 2 (Bank Information)
- When the user fills in bank name, branch name, email address, account name, account number, and expiry date
- And clicks the Next button
- Then the wizard advances to Step 3 (Confirm Details)
- And the summary table correctly displays all entered values from Step 1 and Step 2

#### Scenario: Form validation prevents advancing on invalid input

- Given the user is on Step 1 of the wizard
- When required fields are left blank and the Next button is clicked
- Then validation errors are shown and the wizard stays on Step 1

## Verification Checklist

- [ ] All 3 wizard steps render with correct section structure and order
- [ ] Step navigation (Next / Back) functions correctly with state persistence across steps
- [ ] Step 3 confirmation summary accurately reflects all data entered in steps 1 and 2
- [ ] Tailwind CSS 4 design tokens match the dark slate & vibrant green aesthetic
- [ ] Footer includes branded link to https://www.componentdock.com/
- [ ] 100% test coverage with Vitest + Testing Library
- [ ] Passes per-app verification gate (`scripts/verify-app.sh stepforge`)
