# Template: BtnSpark (Bootstrap Buttons Showcase)

## Purpose

A Bootstrap Buttons Showcase template with navigation and header, button showcase categories and interactive states sections. - **Recreation of ColorLib source**: Bootstrap Buttons 14 (`https://colorlib.com/wp/template/bootstrap-buttons-14/`) - **New Name**: `btnspark` - **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript, Lucide Icons, `packages/ui`
- **Source design:** ColorLib "Bootstrap Buttons 14" — https://colorlib.com/wp/template/bootstrap-buttons-14/

## Design tokens

- **Brand Colors**: Primary indigo/blue (`#4f46e5`), accent violet (`#7c3aed`), neutral slate (`#1e293b`), background light (`#f8fafc`).
- **Typography**: Inter / system sans-serif font family.
- **Button Shapes**: Rounded-lg and pill buttons with subtle shadow and smooth hover transitions.
- **Section Backgrounds**: Clean white card containers on a soft neutral slate background.

## Requirements

### Requirement 1: Navigation and Header

#### Scenario: Navigation and Header

- The page must render a clean header with title "BtnSpark - Interactive Button Showcase" and navigation links.
- Scenario: User loads the page and sees the primary heading and quick-jump category links.

### Requirement 2: Button Showcase Categories

#### Scenario: Button Showcase Categories

- The page must showcase diverse button variants including Solid, Outline, Gradient, Pill, Icon Buttons, Floating Action Buttons, and Loading state buttons.
- Scenario: User browses through grouped button styles and interacts with hover states.

### Requirement 3: Interactive States

#### Scenario: Interactive States

- Buttons must provide clear active, focus, and disabled states.
- Scenario: User clicks or focuses on buttons to verify visual feedback.

### Requirement 4: Footer

#### Scenario: Footer

- The page footer must display copyright info and a required link to `https://www.componentdock.com/` ("Component Dock").
- Scenario: User scrolls to the footer and clicks the Component Dock link.

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage at 100%
- [ ] Footer links to Component Dock
- [x] No mention of ColorLib in code
- [ ] Navigation and Header — The page must render a clean header with title "BtnSpark - Interactive Button Showcase" and navigation links
- [ ] Button Showcase Categories — The page must showcase diverse button variants including Solid, Outline, Gradient, Pill, Icon Buttons, Floating Action Buttons, and Loading state buttons
- [ ] Interactive States — Buttons must provide clear active, focus, and disabled states

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#5635ea` (d=19)
- `#7c3aed` — nearest `#6a4cec` (d=25)
<!-- live-palette-unverified:end -->
