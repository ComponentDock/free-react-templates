# Spec: BtnMatrix (Bootstrap Buttons 20 / UI Components)

## Purpose

Recreation of ColorLib [Bootstrap Buttons 20](https://colorlib.com/wp/template/bootstrap-buttons-20/) (preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/`).
Design category: UI Components & Buttons Showroom.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons (`lucide-react`).

## Design Tokens (Extracted from Reference)

- **Font Family**: `Poppins`, sans-serif
- **Primary Color**: `#007bff` (Blue)
- **Secondary Color**: `#6c757d` (Gray)
- **Tertiary Color**: `#ff4893` (Pink)
- **Quarternary Color**: `#01d28e` (Green / Emerald)
- **Brand Social Colors**:
  - Facebook: `#4f69a2`
  - Twitter: `#69b6f0`
  - LinkedIn: `#2884ba`
  - Pinterest: `#d03940`
  - Dribbble: `#ea6294`
- **Button Radius**: `5px` (default), `40px` (`btn-round`), `0px` (square)
- **Spacing / Padding**: `7em` section vertical padding (`py-28`), button padding (`px-4 py-3`)
- **Shadows**: Soft drop shadows (`box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12)`)

## Section Structure & Requirements

1. **Header / Showcase Intro (`#buttons`)**
   - Title: "Button #10" / "BtnMatrix Showcase"
   - Subheading: "Pick Your Style"
   - Default primary buttons with/without icons and icon-only.
   - Outline primary buttons with/without icons and icon-only.
2. **Color Variants Section**
   - Subheading: "Pick Your Color"
   - Solid and outline buttons across Primary, Secondary, Tertiary (`#ff4893`), and Quarternary (`#01d28e`).
3. **Social Action Grid**
   - 4-column layout showcasing Twitter, Facebook, and Dribbble buttons across solid, outline, rounded, and outline-rounded variants.
4. **Social Brand Buttons Section**
   - Subheading: "Social Buttons"
   - Rows for Facebook, Twitter, LinkedIn, Pinterest, Dribbble featuring icon-only, round, outline, badge counts (e.g. "Share - 8.2k", "Connect with Twitter", "Pin it - 1k").
5. **Footer**
   - Branded footer linking `https://www.componentdock.com/` ("Component Dock").

## Gherkin Requirements & Scenarios

### Feature: BtnMatrix Component Showcase

Scenario: User views style options
Given the BtnMatrix app is loaded
When the user views the "Pick Your Style" section
Then they should see default primary and outline primary buttons with text, icons, and icon-only states

Scenario: User views color variants
Given the BtnMatrix app is loaded
When the user views the "Pick Your Color" section
Then they should see buttons for Primary, Secondary, Tertiary, and Quarternary in both solid and outline styles

Scenario: User interacts with social grid
Given the BtnMatrix app is loaded
When the user views the social action grid
Then they should see Twitter, Facebook, and Dribbble buttons in standard, outline, and rounded configurations

Scenario: User views social badges
Given the BtnMatrix app is loaded
When the user views the social buttons section
Then they should see brand buttons with counts and share actions

Scenario: User views footer attribution
Given the BtnMatrix app is loaded
When the user scrolls to the footer
Then they should see a link pointing to https://www.componentdock.com/

## Verification Checklist

- [ ] Spec validates (`npm run spec:validate`)
- [ ] Tests cover all requirements at 100%
- [ ] Footer links Component Dock
- [ ] Design tokens correctly applied via Tailwind
