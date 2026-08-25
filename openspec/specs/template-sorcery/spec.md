# Template: Sorcery (Financial Form Wizard)

## Purpose

Recreation of ColorLib **Colorlib Wizard 24** (`https://colorlib.com/wp/template/colorlib-wizard-24/`), preview URL `https://preview.colorlib.com/theme/colorlib-wizard-24/` (preview unreachable, designed from ColorLib screenshot and clean financial wizard / multi-step form patterns). Built with Vite, React 19, Tailwind CSS 4, TypeScript.

## Design Tokens

- Brand Primary: `#2563eb` (Blue 600)
- Brand Accent: `#10b981` (Emerald 500)
- Neutral Dark: `#0f172a` (Slate 900)
- Neutral Light: `#f8fafc` (Slate 50)
- Font Family: `Inter, sans-serif`
- Border Radius: `0.5rem` (rounded-lg)

## Requirements & Gherkin Scenarios

### Feature: Multi-Step Financial Form Wizard & Interactive Validation

- Scenario: User navigates through multi-step financial wizard steps
  - Given the user is on the Sorcery financial wizard template home page
  - When the user views Step 1 (Personal & Account Information)
  - And fills in valid details and clicks "Next"
  - Then the wizard advances to Step 2 (Financial Profile & Income)
  - And displays real-time input validation and progress indicators

- Scenario: User completes the wizard and submits
  - Given the user has reached the final step of the wizard
  - When the user reviews their summary and clicks "Submit Application"
  - Then a success confirmation screen is rendered with reference details
