# Template: BtnSpark (Bootstrap Buttons Showcase)

## Purpose

- **Recreation of ColorLib source**: Bootstrap Buttons 14 (`https://colorlib.com/wp/template/bootstrap-buttons-14/`)
- **New Name**: `btnspark`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript, Lucide Icons, `packages/ui`

## Design tokens

- **Brand Colors**: Primary indigo/blue (`#4f46e5`), accent violet (`#7c3aed`), neutral slate (`#1e293b`), background light (`#f8fafc`).
- **Typography**: Inter / system sans-serif font family.
- **Button Shapes**: Rounded-lg and pill buttons with subtle shadow and smooth hover transitions.
- **Section Backgrounds**: Clean white card containers on a soft neutral slate background.

## Requirements and Scenarios

### Requirement 1: Navigation and Header

- The page must render a clean header with title "BtnSpark - Interactive Button Showcase" and navigation links.
- Scenario: User loads the page and sees the primary heading and quick-jump category links.

### Requirement 2: Button Showcase Categories

- The page must showcase diverse button variants including Solid, Outline, Gradient, Pill, Icon Buttons, Floating Action Buttons, and Loading state buttons.
- Scenario: User browses through grouped button styles and interacts with hover states.

### Requirement 3: Interactive States

- Buttons must provide clear active, focus, and disabled states.
- Scenario: User clicks or focuses on buttons to verify visual feedback.

### Requirement 4: Footer

- The page footer must display copyright info and a required link to `https://www.componentdock.com/` ("Component Dock").
- Scenario: User scrolls to the footer and clicks the Component Dock link.

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage at 100%
- [ ] Footer links to Component Dock
- [ ] No mention of ColorLib in code
