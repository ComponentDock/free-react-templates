# Template: BtnVault (Bootstrap Buttons UI Component Showcase)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 07** (`https://colorlib.com/wp/template/bootstrap-buttons-07/`), preview URL: `https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-07.jpg`, stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens (Inferred from reference aesthetic)

- **Brand Colors**: Primary indigo/blue (`#4f46e5`, `#6366f1`), Accent violet/purple (`#8b5cf6`), Neutral dark (`#1f2937`), Neutral light (`#f9fafb`), Success emerald (`#10b981`), Warning amber (`#f59e0b`), Danger rose (`#ef4444`).
- **Font Family**: Inter, system-ui, sans-serif.
- **Button Shapes**: Rounded-full (pill / circular buttons), rounded-lg, sharp edges, outline variants, gradient fills, shadow effects, icon-badge buttons, social buttons, floating action buttons.
- **Section Backgrounds**: Clean white and light gray (`#f8fafc`) cards with soft drop shadows and border accents.

## Gherkin Requirements & Scenarios

### Feature: Interactive Button Showcase & Playground

As a developer or designer visiting BtnVault, I want to explore various styled button components, copy code snippets, and test button states interactively.

#### Scenario: View button categories

- Given the user opens the BtnVault page
- When the page loads
- Then the user sees navigation tabs for Solid Buttons, Gradient Buttons, Outline Buttons, Pill & Circular Buttons, Social Buttons, and Floating Action Buttons.

#### Scenario: Interactive state testing

- Given the user is on the button showcase section
- When the user hovers or clicks a button variant
- Then the button exhibits interactive feedback (scale, shadow elevation, color shift, ripple or loading spinner state).

#### Scenario: Copy button snippet

- Given the user clicks "Copy Code" on a button card
- When the action is triggered
- Then the Tailwind / React JSX code snippet is copied to the clipboard with a success toast confirmation.

#### Scenario: Footer attribution

- Given the user scrolls to the bottom of the page
- When the footer is rendered
- Then it contains a copyright notice and a mandatory link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] Header banner with title, description, and category filter pills.
- [ ] Multiple interactive button sections with diverse shapes, colors, and shadows.
- [ ] Interactive click handlers / demo states (disabled, loading, active).
- [ ] Code snippet copy functionality with feedback.
- [ ] Responsive grid layout across mobile, tablet, and desktop viewports.
- [ ] Footer with Component Dock link (`https://www.componentdock.com/`).
- [ ] 100% test coverage with Vitest and Testing Library.
