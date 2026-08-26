# Template: Creel (FAQ Accordion)

## Purpose

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`), preview URL: `https://preview.colorlib.com/theme/accordion-12/` (preview unreachable, fell back to screenshot and standard ColorLib accordion theme specifications).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary deep slate blue (`#1e293b`), Accent vibrant indigo (`#6366f1`), Neutral light background (`#f8fafc`), Card background (`#ffffff`), Text primary (`#0f172a`), Text muted (`#64748b`).
- **Font Family**: "Inter", sans-serif.
- **Button Shapes**: Rounded-lg (`border-radius: 0.5rem`), subtle shadow, hover elevation with transition.
- **Section Backgrounds**: Alternating clean white and slate-50 sections with structured accordion card containers.

## Requirements

### Requirement: Interactive Accordion & FAQ Showcase

The system SHALL provide an interactive accordion FAQ section with collapsible panels for browsing structured content.

#### Scenario: Expanding and collapsing accordion items

- **GIVEN** the user is on the Creel template home page
- **WHEN** the user clicks on an accordion header
- **THEN** the corresponding accordion content panel expands smoothly, displaying detailed text and icons
- **AND** clicking the header again collapses the content panel

#### Scenario: Submitting a support inquiry form

- **GIVEN** the user scrolls to the contact/inquiry section at the bottom
- **WHEN** the user fills in name, email, and message fields and clicks submit
- **THEN** a success confirmation message is displayed
- **AND** the input fields are reset
