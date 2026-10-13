# Template: Vortex (Bootstrap Accordions / Account Management UI)

## Purpose

- **Recreation of:** ColorLib Bootstrap Accordion V05 (`accordion-05`)
- **Preview URL:** https://colorlib.com/wp/template/accordion-05/
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript
- **Design Category:** Bootstrap Accordions / Account Management

## Design Tokens (Extracted from ColorLib Reference & Screenshot)

- **Brand Colors:** Clean modern light theme with indigo/blue primary accents (`#4f46e5` / `#6366f1`), neutral slate backgrounds (`#f8fafc`), clean white card containers (`#ffffff`), and dark text (`#0f172a`).
- **Typography:** Sans-serif (Inter / System font stack), clear hierarchical headings, legible accordion headers with chevron rotation indicators.
- **Button & Interactive Styles:** Rounded-lg interactive accordion items, subtle shadow elevations (`shadow-sm`), clear focus rings, smooth transition collapses.
- **Section Layouts:** Header / title banner, multi-panel collapsible account sections (Profile Settings, Security & Password, Notification Preferences, Billing Information, Connected Accounts), footer with copyright and mandatory Component Dock attribution.

## Requirements

### Feature: Interactive Account Accordion Showcase

As a user visiting the Vortex account management template, I want to explore collapsible account settings sections so that I can easily manage my profile and preferences without clutter.

#### Scenario: View initial collapsed accordion state

- **GIVEN** the user loads the Vortex application
- **WHEN** the page renders the main account sections
- **THEN** all accordion panels should be rendered in their default state (first panel open, remaining panels collapsed)
- **AND** the footer should display the Component Dock attribution link (`https://www.componentdock.com/`)

#### Scenario: Expand and collapse accordion panels

- **GIVEN** the user is viewing the account accordion list
- **WHEN** the user clicks on a closed accordion header (e.g. "Security Settings")
- **THEN** that accordion panel expands smoothly to reveal its settings form
- **AND** the previously open panel collapses (or remains open depending on accordion mode)
- **AND** the chevron icon rotates 180 degrees to indicate the expanded state

#### Scenario: Submit account settings form within accordion

- **GIVEN** the user has expanded the "Profile Settings" accordion panel
- **WHEN** the user updates their name or email and clicks "Save Changes"
- **THEN** a success toast or confirmation message is displayed
- **AND** form validation prevents submission of empty required fields

## Verification Checklist

- [ ] App builds successfully with Vite (`npm run build`)
- [ ] Typecheck passes with zero errors (`npm run typecheck`)
- [ ] Linter passes (`npm run lint`)
- [ ] Test suite achieves 100% coverage across all metrics
- [ ] Footer contains mandatory Component Dock link (`https://www.componentdock.com/`)
- [ ] CNAME file configured as `vortex.free.componentdock.com`
