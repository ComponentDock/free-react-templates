# Template: BtnQuint (UI Component Showcase)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 05** (`https://colorlib.com/wp/template/bootstrap-buttons-05/`).
New app name: `btnquint` (package `@free-react-templates/btnquint`).

## Design Tokens & Visual Style

- **Font Family**: "Poppins", sans-serif
- **Base Button Shape**: Rounded (`border-radius: 4px`), uppercase text, letter spacing `.03rem`, box-shadow.
- **Hover Effect**: Bottom-to-top absolute pseudo-element overlay (`rgba(255,255,255,0.2)`) with smooth transition.
- **Background**: Clean minimal white/light-gray background with centered cards for button showcases.
- **Palette**: Primary blue (#007bff or accent colors), neutral dark text, colorful custom background variants.

## Structure Order (top → bottom)

1. Header / Page Title ("#05 — Bootstrap Buttons")
2. Button Sizes & Variations Showcase
3. Color Variants Grid (18+ colored buttons with hover transitions)
4. Block / Full-Width Buttons
5. Footer (with Component Dock link)

## Gherkin Requirements & Scenarios

### Feature: BtnQuint Component Showcase

Scenario: User views the button showcase
Given the user navigates to the BtnQuint template
Then they should see the header `#05 — Bootstrap Buttons`
And the button size variations (Large, Default, Small)
And the color variants grid with hover overlay effects
And the full-width block button
And the footer with a link to `https://www.componentdock.com/`

Scenario: User interacts with buttons
Given the user hovers over a button in the color grid
Then the button should display the smooth pseudo-element highlight transition
And clicking the button should trigger its active state cleanly
