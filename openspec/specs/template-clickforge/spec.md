# Template: ClickForge (UI Components Showcase)

## Purpose

Recreation of ColorLib Bootstrap Buttons 12 (`https://colorlib.com/wp/template/bootstrap-buttons-12/`).
Preview URL: https://colorlib.com/wp/template/bootstrap-buttons-12/ (Preview URL unreachable / archived; recreated faithfully from template screenshot and design system patterns).
Stack: React 19, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens

- Primary: Indigo (`#4f46e5`, `bg-indigo-600`)
- Secondary: Emerald (`#10b981`, `bg-emerald-600`)
- Neutral Dark: Slate 900 (`#0f172a`)
- Neutral Light: Slate 50 (`#f8fafc`)
- Typography: Inter (`font-sans`)
- Radii: Rounded-lg (`0.5rem`), Pill (`9999px`), Sharp (`0px`)

## Requirements & Gherkin Scenarios

### Feature: ClickForge UI Showcase

As a developer or designer visiting ClickForge,
I want to explore a comprehensive interactive library of modern button styles and interactive components,
So that I can copy or inspect production-ready Tailwind/React buttons.

#### Scenario: Hero and Quick Filter

- Given the user lands on ClickForge
- When the page loads
- Then the hero displays the title "ClickForge Component Library", subtitle, and category filter tabs (All, Solid, Outline, Gradients, Interactive).

#### Scenario: Solid Buttons Section

- Given the user views the Solid Buttons section
- When examining the buttons
- Then primary, secondary, success, danger, warning, and dark buttons are rendered with hover and active states.

#### Scenario: Outline and Ghost Buttons

- Given the user views the Outline & Ghost section
- When examining the buttons
- Then border-only buttons and transparent hover background buttons are displayed.

#### Scenario: Gradient and Glow Buttons

- Given the user views the Gradient & Glow section
- When examining the buttons
- Then vibrant gradient buttons with subtle drop shadows/glows are rendered.

#### Scenario: Interactive State Buttons

- Given the user views the Interactive States section
- When the user clicks a loading button
- Then it transitions to a loading spinner state and then to a success checkmark state.

#### Scenario: Footer Attribution

- Given the user scrolls to the bottom of the page
- When viewing the footer
- Then it displays copyright and a link to Component Dock (`https://www.componentdock.com/`).

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate`)
- [ ] 100% test coverage on new components
- [ ] No mention of ColorLib in app code
- [ ] Footer links https://www.componentdock.com/
- [ ] CNAME configured for clickforge.free.componentdock.com
