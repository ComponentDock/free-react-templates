# Template: BtnCraft (UI Component Library)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 01** (`https://colorlib.com/wp/template/bootstrap-buttons-01/`).
_Note: The live preview URL returned 404, so replication fidelity is based on the official ColorLib screenshot and standard modern Bootstrap design principles._
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide icons.
New Name: `btncraft` (Package: `@free-react-templates/btncraft`).

## Design Tokens

- **Brand Colors**:
  - Primary: `#0d6efd` (Blue)
  - Secondary: `#6c757d` (Gray)
  - Success: `#198754` (Green)
  - Danger: `#dc3545` (Red)
  - Warning: `#ffc107` (Yellow)
  - Info: `#0dcaf0` (Cyan)
  - Light: `#f8f9fa`
  - Dark: `#212529`
- **Typography**: `font-sans` (system-ui, Inter, sans-serif)
- **Radii**: `rounded-md` (default), `rounded-full` (pill), `rounded-none` (square)
- **Aesthetic**: Clean, responsive button showcase gallery demonstrating solid, outline, pill, block, icon-augmented, and stateful (hover, active, disabled) variants.

## Sections / Components Structure

1. **Navbar** — Brand logo (`BtnCraft`), navigation links (Showcase, Variants, Sizes, States, Code), GitHub link, and theme toggle.
2. **Hero** — Title ("BtnCraft — Modern Bootstrap Button Showcase"), subtitle, and quick action buttons.
3. **Solid Variants** — Standard solid buttons across all semantic color intents (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark).
4. **Outline Variants** — Transparent background with solid border and hover fill.
5. **Pill & Square Radii** — Demonstration of rounded-full pill buttons and sharp-edged square buttons.
6. **Sizes & States** — Small, medium, large buttons, plus active, disabled, and loading spinner states.
7. **Icon Buttons** — Buttons augmented with Lucide icons (leading and trailing).
8. **Interactive Playground** — Customizer where users can select variant, size, shape, and state, copy generated Tailwind/JSX code.
9. **Footer** — Copyright, links, and mandatory attribution: "Made with Component Dock" linking `https://www.componentdock.com/`.

## Gherkin Requirements & Scenarios

### Feature: Button Showcase & Interactive Playground

As a developer or designer visiting BtnCraft,
I want to explore a comprehensive catalog of button styles, variants, and states,
So that I can easily copy and use them in my React applications.

#### Scenario: View standard solid buttons

- Given the user is on the BtnCraft home page
- When they view the Solid Variants section
- Then all semantic color buttons (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark) should be visible with correct styling and hover effects.

#### Scenario: Test interactive button states

- Given the user is in the interactive playground section
- When they toggle the disabled or loading state
- Then the button should update immediately to show disabled opacity or loading spinner.

#### Scenario: Copy button code snippet

- Given the user selects a custom button configuration in the playground
- When they click the "Copy Code" button
- Then the JSX/Tailwind code should be copied to the clipboard with a success toast notification.

## Verification Checklist

- [ ] TypeScript strict compilation passes (`npm run build`)
- [ ] 100% test coverage on all components (`npm run test:coverage`)
- [ ] Footer contains Component Dock link (`https://www.componentdock.com/`)
- [ ] No mention of ColorLib in app source code
- [ ] Workspace correctly registered in root `package.json` and `package-lock.json`
- [ ] Surge CNAME and homepage configured correctly
