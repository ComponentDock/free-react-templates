# Template: BtnLoom (Bootstrap / UI Kit category)

## Purpose

- **Recreation of ColorLib source**: `bootstrap-buttons-14` (`https://colorlib.com/wp/template/bootstrap-buttons-14/`)
- **Preview URL**: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/`
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens (Extracted from Reference)

- **Brand Colors**:
  - Primary / Purple: `#5735ea` (hover `#6a4cec`)
  - Secondary / Cyan: `#32c5f6` (hover `#0ab3eb`)
  - Tertiary / Green: `#48da79` (hover `#28c75d`)
  - Social FB: `#4f69a2`
  - Social Twitter: `#69b6f0`
  - Social LinkedIn: `#2884ba`
  - Social Pinterest: `-#d03940` -> `#d03940`
  - Social Dribbble: `#ea6294`
  - Neutral dark: `#212529`, Neutral light: `#f8f9fa`, Background: `#ffffff`
- **Font Family**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Button Shapes & Radii**:
  - Default: rounded (`0.25rem` / `rounded`)
  - Pill / Round: `40px` (`rounded-full`)
  - Outline: 1px solid border with transparent background
  - Sizes: Small (`5px 20px`), Regular, Large (`17px 24px`)
- **Section Layout**: Single-page component showcase featuring interactive button variants, sizes, social media buttons, dropdown buttons, button groups, and checkbox/radio button states.

## Gherkin Requirements & Scenarios

### Feature: Interactive Button Showcase Hero & Grid

- **Scenario**: User views button categories and variants
  - Given the BtnLoom application is loaded
  - When the user inspects the button showcase sections
  - Then all primary, secondary, tertiary, outline, and social buttons are displayed with correct styles and hover effects

- **Scenario**: User interacts with dropdown buttons
  - Given dropdown buttons are rendered in the showcase
  - When the user clicks a dropdown button
  - Then the dropdown menu opens showing option items

- **Scenario**: User explores button groups and states
  - Given button groups and checkbox/radio button states are present
  - When the user toggles button states
  - Then interactive states respond correctly

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Typecheck and lint pass cleanly
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] Public CNAME contains `btnloom.free.componentdock.com`
