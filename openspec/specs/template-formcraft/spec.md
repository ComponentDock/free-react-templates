# Template: FormCraft (Form Wizard / Interactive App)

## Purpose

Recreation of ColorLib Wizard 28 (`https://colorlib.com/wp/template/colorlib-wizard-28/`), live preview demo at `https://colorlib.com/etc/bwiz/colorlib-wizard-28/index.html`. Implemented as a multi-step form wizard with animated progress bar, step navigation, validation, and responsive design using React 19, TypeScript, and Tailwind CSS 4.

## Design tokens

- **Brand / Primary Color:** Green `#36c240` (hover `#22ae2c`)
- **Background Gradient:** `linear-gradient(316deg, #4158d0 0%, #c850c0 50%, #ffcc70 100%)`
- **Fonts:** Roboto / Montserrat (Google Fonts)
- **Card & UI:** Pure white container with deep shadow (`shadow-2xl`, rounded corners), subtle gray inputs (`#e5e5e5`) with green focus ring.

## Requirements & Gherkin Scenarios

### Feature: Multi-Step Form Wizard Navigation & Progress

As a user filling out the form wizard, I want to step through personal, address, and payment information with a live progress indicator so that the process is clear and intuitive.

#### Scenario: Step 1 Initial State

- **Given** the FormCraft wizard is loaded
- **When** the user views the form
- **Then** Step 1 (Personal Information) is active
- **And** the progress bar shows 40% completion
- **And** fields for Full Name, Email, and Phone Number are displayed

#### Scenario: Step Navigation & Validation

- **Given** the user is on Step 1
- **When** the user fills in valid details and clicks "Next"
- **Then** the wizard transitions to Step 2 (Address Details)
- **And** the progress bar updates to 70%
- **And** fields for Building Number, Street, Town, and Zip Code are displayed

#### Scenario: Final Submission

- **Given** the user navigates through Step 2 to Step 3 (Payment Information)
- **When** the user completes Card Details and clicks "Submit"
- **Then** a success confirmation message is displayed
- **And** the form state resets or completes successfully

## Verification Checklist

- [ ] Multi-step navigation works cleanly with prev/next buttons
- [ ] Progress bar updates accurately per step
- [ ] Tailwind brand colors and background gradient match specification
- [ ] Responsive layout looks polished on mobile and desktop
- [ ] Footer includes branded link to Component Dock (`https://www.componentdock.com/`)
- [ ] 100% test coverage with Vitest & Testing Library
