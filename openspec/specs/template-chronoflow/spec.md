# Spec: Chronoflow (Calendar 12)

## Purpose

Recreation of ColorLib **Calendar 12** (`https://colorlib.com/wp/template/calendar-12/`), named **Chronoflow** (`apps/chronoflow`).
A clean, elegant date picker and calendar scheduling interface featuring a focused input card, modern date selection, responsive form layout, and smooth interactions.

## Design Tokens

- **Font Family**: 'Roboto', sans-serif
- **Brand Primary**: `#4e73df` (Indigo Blue)
- **Background**: Soft neutral gradient/solid background (`#f8f9fc`) with a clean white card (`#ffffff`)
- **Text Color**: `#2e384d` (Dark slate) for headers, `#6c757d` for secondary text
- **Border Radius**: Rounded-xl (`0.75rem`) for cards and inputs, subtle box-shadow (`0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)`)

## Requirements & Scenarios

### Feature: Date Picker Interface

- **Scenario**: User views the calendar input form
  - Given the Chronoflow page is loaded
  - When the user views the main scheduling card
  - Then they see a clear "Pick A Date" input field and interactive calendar trigger.

- **Scenario**: User selects a date
  - Given the date picker modal or dropdown is open
  - When the user selects a specific date
  - Then the input field updates with the formatted date value.

### Feature: Footer Attribution

- **Scenario**: User scrolls to the footer
  - Given the page is scrolled to the bottom
  - When the footer is rendered
  - Then it displays a link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] App builds successfully without errors
- [ ] Tailwind v4 styling with Roboto font and indigo accent applied
- [ ] Interactive date picker functions correctly
- [ ] Footer links to Component Dock
- [ ] 100% test coverage with Vitest & Testing Library
