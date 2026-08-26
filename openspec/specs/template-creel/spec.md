# Template: Creel (UI Component Showcase & Interactive Accordion)

## Purpose

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`), preview URL: `https://preview.colorlib.com/theme/accordion-12/` (preview unreachable, fell back to screenshot and standard ColorLib accordion theme specifications).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary deep slate blue (`#1e293b`), Accent vibrant indigo (`#6366f1`), Neutral light background (`#f8fafc`), Card background (`#ffffff`), Text primary (`#0f172a`), Text muted (`#64748b`).
- **Font Family**: "Inter", sans-serif.
- **Button Shapes**: Rounded-lg (`border-radius: 0.5rem`), subtle shadow, hover elevation with transition.
- **Section Backgrounds**: Alternating clean white and slate-50 sections with structured accordion card containers and interactive tabs.

## Requirements & Gherkin Scenarios

### Feature: Interactive Accordion & FAQ Showcase

As a site visitor, I want to explore collapsible accordion panels, category tabs, and interactive FAQ sections so that I can easily find detailed answers and structured content.

#### Scenario: Expanding and collapsing accordion items

- Given the user is on the Creel template home page
- When the user clicks on an accordion header
- Then the corresponding accordion content panel expands smoothly, displaying detailed text and icons
- And clicking the header again collapses the content panel

#### Scenario: Filtering accordion content by category tabs

- Given the user views the interactive accordion filter section
- When the user clicks on a category tab (e.g., "All", "Getting Started", "Account", "Billing")
- Then the displayed accordion items update to show only the relevant items for that category

#### Scenario: Submitting a support inquiry form

- Given the user scrolls to the contact/inquiry section at the bottom
- When the user fills in name, email, and message fields and clicks submit
- Then a success confirmation message is displayed
- And the input fields are reset
