# Spec: Chronoflow (Calendar 12)
<!-- prep-status: shipped-as=calgrid -->
> **SHIPPED-UNDER** — the ColorLib `calendar-12` design this prep describes already
> ships as `apps/calgrid` (<https://calgrid.free.componentdock.com>).
> Do not scaffold `apps/chronoflow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-calgrid/spec.md`.

## Purpose

Recreation of ColorLib **Calendar 12** (`https://colorlib.com/wp/template/calendar-12/`), named **Chronoflow** (`apps/chronoflow`).
A clean, elegant date picker and calendar scheduling interface featuring a focused input card, modern date selection, responsive form layout, and smooth interactions.

## Design Tokens

- **Font Family**: 'Roboto', sans-serif
- **Brand Primary**: `#4e73df` (Indigo Blue)
- **Background**: Soft neutral gradient/solid background (`#f8f9fc`) with a clean white card (`#ffffff`)
- **Text Color**: `#2e384d` (Dark slate) for headers, `#6c757d` for secondary text
- **Border Radius**: Rounded-xl (`0.75rem`) for cards and inputs, subtle box-shadow (`0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)`)

## Requirements

### Feature: Date Picker Interface

#### Scenario: User views the calendar input form

- **GIVEN** the Chronoflow page is loaded
- **WHEN** the user views the main scheduling card
- **THEN** they see a clear "Pick A Date" input field and interactive calendar trigger

#### Scenario: User selects a date

- **GIVEN** the date picker modal or dropdown is open
- **WHEN** the user selects a specific date
- **THEN** the input field updates with the formatted date value

### Feature: Footer Attribution

#### Scenario: User scrolls to the footer

- **GIVEN** the page is scrolled to the bottom
- **WHEN** the footer is rendered
- **THEN** it displays a link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] App builds successfully without errors
- [ ] Tailwind v4 styling with Roboto font and indigo accent applied
- [ ] Interactive date picker functions correctly
- [ ] Footer links to Component Dock
- [ ] 100% test coverage with Vitest & Testing Library

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/calendar-12/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4e73df` — nearest `#0089ec` (d=82)
- `#2e384d` — nearest `#0056b3` (d=116)
<!-- live-palette-unverified:end -->
