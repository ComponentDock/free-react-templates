# Template: Calzeal (Calendar / Datepicker)
<!-- prep-status: shipped-as=caldesk -->
> **SHIPPED-UNDER** — the ColorLib `calendar-14` design this prep describes already
> ships as `apps/caldesk` (<https://caldesk.free.componentdock.com>).
> Do not scaffold `apps/calzeal`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-caldesk/spec.md`.

## Purpose

Recreation of ColorLib Calendar 14 (`https://colorlib.com/wp/template/calendar-14/`), preview URL `https://preview.colorlib.com/theme/bootstrap/calendar-14/`. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens

- **Font Family**: `"Roboto"`, sans-serif (imported via Google Fonts)
- **Background**: White (`#fff`) base with clean card / container layout
- **Primary Accent**: Clean neutral/indigo focus rings, dark text (`#212529`), muted gray helper text (`#b3b3b3`)
- **Interactive**: Smooth transition on focus and hover, modern datepicker input UI

## Requirements

### Requirement 1: Header and Branding

#### Scenario: Header and Branding

- The template must display a centered section heading (e.g. "Calendar Scheduler" / "Calzeal") with clean typography.
- The footer must link to `https://www.componentdock.com/` as "Component Dock".

### Requirement 2: Interactive Datepicker Form

#### Scenario: Interactive Datepicker Form

- The main section must feature a clean form group with a "Select Date" label and an interactive date input / calendar popover widget.
- Users can click the input to open a functional calendar month view, select dates, and see the selected date populate the input field.

### Requirement 3: Verification & Responsive Layout

#### Scenario: Verification & Responsive Layout

- Responsive design adapting cleanly on mobile, tablet, and desktop viewports.
- Fully accessible with proper label associations and keyboard navigation.

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Test coverage at 100% (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock
- [ ] Surge CNAME and homepage configured correctly
- [ ] Interactive Datepicker Form — The main section must feature a clean form group with a "Select Date" label and an interactive date input / calendar popover widget
- [ ] Verification & Responsive Layout — Responsive design adapting cleanly on mobile, tablet, and desktop viewports
