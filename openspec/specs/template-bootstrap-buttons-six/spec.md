# Template: Bootstrap Buttons Six (UI Button Showcase & Design System)

## Purpose

Recreation of ColorLib Bootstrap Buttons 06 (`https://colorlib.com/wp/template/bootstrap-buttons-06/`, preview: `https://preview.colorlib.com/theme/bootstrap-buttons-06/`). A clean, modern UI component showcase featuring an extensive palette of bootstrap-inspired button variants, size scales (Large, Medium, Small), solid color variations (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray, White), and full-width block buttons, built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Primary Brand Color**: Indigo / Blue (`#4f46e5` / `#2563eb`)
- **Secondary Accent**: Slate / Gray (`#64748b`)
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded (`rounded-lg`, `rounded-md`, `rounded-full`)
- **Section Backgrounds**: Slate-50 light mode, Slate-900 dark mode, clean card containers

## Requirements

### Requirement 1: Size Scale Showcase

- As a developer visiting the template, I want to explore different button sizes so I can choose the appropriate scale for my user interface.

#### Scenario: Viewing button sizes

- **GIVEN** the user is on the Bootstrap Buttons Six home page
- **WHEN** the user views the size scale section
- **THEN** they should see Large, Medium, and Small button variants with proportional padding and typography

### Requirement 2: Comprehensive Color Palette

- As a developer, I want to see a rich collection of colored buttons so I can match my brand guidelines.

#### Scenario: Viewing color variants

- **GIVEN** the user is viewing the color palette section
- **WHEN** the user scans the buttons
- **THEN** they should see Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray, and White button options with interactive hover states

### Requirement 3: Full Width Block Buttons

- As a designer, I want to test full-width buttons for responsive layouts.

#### Scenario: Viewing full width block button

- **GIVEN** the user is viewing the full width section
- **WHEN** the user checks the block button
- **THEN** it should span 100% of its container width with clear hover feedback

## Verification checklist

- [ ] All size scales (Large, Medium, Small) render correctly
- [ ] All 19 color variants display exact color contrast and hover effects
- [ ] Full width button expands correctly to container bounds
- [ ] Fully responsive on mobile and desktop viewports
- [ ] Footer includes branded Component Dock link (`https://www.componentdock.com/`)

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#6f42c1` (d=48)
- `#2563eb` — nearest `#0069d9` (d=42)
- `#64748b` — nearest `#3f4d71` (d=60)
<!-- live-palette-unverified:end -->
