# Template: Expanda (Dashboard & FAQ Accordion)

## Purpose

- Recreation of ColorLib Accordion 05 (`https://colorlib.com/wp/template/accordion-05/`, preview URL: `https://colorlib.com/preview/theme/accordion-05/`)
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide icons.
- Category: Dashboard / Interactive Accordion & Settings

## Design Tokens

- Brand Primary: `#6366f1` (Indigo 500), Accent: `#a855f7` (Purple 500)
- Background: `#f8fafc` (Slate 50), Card background: `#ffffff` (White)
- Text Primary: `#0f172a` (Slate 900), Text Muted: `#64748b` (Slate 500)
- Font Family: Inter, sans-serif
- Border Radius: `rounded-xl` (12px) for cards, `rounded-lg` for interactive items

## Requirements

### Requirement: Accordion Section Navigation

The application SHALL provide expandable/collapsible accordion sections for viewing management settings, location details, and hobbies.

#### Scenario: Expand Manage Section

- **WHEN** the Expanda application is loaded
- **THEN** the Manage section is expanded by default showing items: 01 Account, 02 Settings, 03 Profile

#### Scenario: Toggle Manage Section Off

- **WHEN** the user clicks on the "Manage" accordion header while it is open
- **THEN** the Manage section collapses and hides its sub-items

#### Scenario: Expand Location Section

- **WHEN** the user clicks on the "Location" accordion header
- **THEN** the Location section expands to show Regional Headquarters details

#### Scenario: Toggle Location Section Off

- **WHEN** the user clicks on the "Location" accordion header while it is open
- **THEN** the Location section collapses

#### Scenario: Expand Hobbies Section

- **WHEN** the user clicks on the "Hobbies" accordion header
- **THEN** the Hobbies section expands to show Photography & Hiking interests

#### Scenario: Toggle Hobbies Section Off

- **WHEN** the user clicks on the "Hobbies" accordion header while it is open
- **THEN** the Hobbies section collapses

#### Scenario: Footer Component Dock Link

- **WHEN** the Expanda application is loaded
- **THEN** the footer contains a link to https://www.componentdock.com/ branded as "Component Dock"
