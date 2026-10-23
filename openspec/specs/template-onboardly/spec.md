# Template: Onboardly (Bootstrap Wizards)

Recreation of ColorLib Wizard 20 — free account setup wizard template.
Source: https://colorlib.com/wp/template/colorlib-wizard-20/
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html

## Purpose

Onboardly is a multi-step wizard form page with a footer. It recreates the ColorLib **Colorlib Wizard 20** design (https://colorlib.com/wp/template/colorlib-wizard-20/, preview: https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design Tokens (from preview CSS)

- Font: Poppins (300–900 weights) via Google Fonts
- Background: linear-gradient(0deg, #884d80, #9795f0, #2b5876, #4e4376)
- Card: white (#fff), box-shadow 0px 5px 9.5px 0.5px rgba(0,0,0,0.1), border-radius 10px, width 373px
- Step indicators: 44×44px circles, border 3px solid #fff; inactive: bg #ebebeb, color #999; active: gradient bg
- Step connector: 8px tall white bar between indicators
- Inputs: border 1px solid #ebebeb, border-radius 5px, height 40px, Poppins 500, 13px
- Input focus: gradient border-image (simplified to border-color for React/Tailwind)
- Buttons: gradient bg, border-radius 5px, 120×40px, white text
- Body text: #222, weight 500, 13px, line-height 1.92

## Sections (in order)

1. **Full-page gradient background** — entire viewport
2. **Centered card** — white, rounded, shadow, fixed width
3. **Step 1 — Account Setup** — heading "Create your account", fields: Email, Password, Confirm Password
4. **Step 2 — Social Profiles** — heading "Social profiles", fields: Twitter, Facebook, Google Plus
5. **Step 3 — Personal Details** — heading "Personal Details", fields: Name, Phone, Address
6. **Step indicators** — 3 numbered circles connected by a white bar
7. **Navigation buttons** — Next/Previous with gradient background
8. **Footer** — Component Dock link

## Requirements

### Feature: Onboardly account setup wizard

#### Scenario: Renders step 1 by default

- **GIVEN** the wizard is loaded
- **THEN** step 1 "Account Setup" is active
- **AND** the heading "Create your account" is visible
- **AND** the Email, Password, Confirm Password fields are visible

#### Scenario: Navigate between steps

- **WHEN** the user clicks "Next" on step 1
- **THEN** step 2 "Social Profiles" is active
- **AND** the heading "Social profiles" is visible
- **WHEN** the user clicks "Previous"
- **THEN** step 1 is active again

#### Scenario: Complete all steps

- **WHEN** the user clicks "Next" on step 1
- **AND** clicks "Next" on step 2
- **AND** clicks "Finish" on step 3
- **THEN** a completion message "Account Created!" is shown

#### Scenario: Footer links to Component Dock

- **GIVEN** the wizard is loaded
- **THEN** the footer contains a link to componentdock.com

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/onboardly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/onboardly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Renders step 1 by default — step 1 "Account Setup" is active
- [x] Navigate between steps — step 2 "Social Profiles" is active
- [x] Complete all steps — a completion message "Account Created!" is shown
