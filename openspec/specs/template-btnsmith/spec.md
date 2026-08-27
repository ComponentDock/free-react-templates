# Template: Btnsmith (UI Components & Interactive Buttons Showcase)

## Purpose

Recreation of ColorLib Bootstrap Buttons 02 (`https://colorlib.com/wp/template/bb/bootstrap-buttons-02/`). A comprehensive, modern button and UI component showcase featuring multiple button variants (primary, secondary, tertiary, quaternary), pill/rounded shapes, outline styles, icon buttons, dropdown menus, button groups, interactive checkboxes/radios, animated slide buttons, and social brand buttons (Facebook, Twitter, LinkedIn, Pinterest, Dribbble), built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Colors**:
  - Primary: `#007bff` (blue), hover `#0069d9`
  - Secondary: `#6c757d` (gray), hover `#5a6268`
  - Tertiary: `#e2c275` (gold/tan), hover `#d9af4b`
  - Quaternary: `#b96b9f` (mauve/pink), hover `#a44d87`
  - Social: Facebook (`#4f69a2`), Twitter (`#69b6f0`), LinkedIn (`#2884ba`), Pinterest (`#d03940`), Dribbble (`#ea6294`)
- **Typography**: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Shapes**: Rounded (`rounded`), Pill/Round (`rounded-full`), Block (`w-full`), Outline variants
- **Background**: Light neutral surface with clean grid layout for interactive components

---

## Requirements & Scenarios

### Requirement 1: Header & Title Section

- The template must display a clean header section with the main title "Button #07" and section subtitles for each button category.
- **Scenario**: User views the button showcase
  - **Given** the user loads the page
  - **Then** they see the main heading "Button #07" and subheadings for Standard Buttons, Dropdown Buttons, Group Buttons, Checkboxes, Radios, Slide Buttons, and Social Buttons.

### Requirement 2: Standard & Styled Buttons

- The template must display standard buttons in primary, secondary, tertiary, and quaternary variants with block sizing, rounded options, and icon-embedded states.
- **Scenario**: User interacts with standard buttons
  - **Given** the user views the standard button grid
  - **Then** they see solid filled buttons, rounded pill buttons, outline buttons, and buttons featuring left/right icons (like Like, Delete, Send, Download).

### Requirement 3: Dropdown Buttons

- The template must provide fully interactive dropdown buttons for each color variant.
- **Scenario**: User clicks a dropdown button
  - **Given** the user clicks a dropdown toggle button
  - **Then** a dropdown menu appears with actionable list items (Action, Another action, Something else here).

### Requirement 4: Button Groups & Checkboxes / Radios

- The template must showcase grouped button toolbars and interactive toggle button groups acting as checkboxes and radio selectors.
- **Scenario**: User toggles button selectors
  - **Given** the user clicks button-style checkboxes or radio groups
  - **Then** the active state toggles visually with appropriate styles.

### Requirement 5: Slide & Social Brand Buttons

- The template must display slide animation buttons and dedicated brand buttons for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble.
- **Scenario**: User explores social and slide buttons
  - **Given** the user hovers over social buttons or slide buttons
  - **Then** smooth hover transitions and brand-specific background colors apply.

---

## Verification Checklist

- [ ] All 7 button categories (Standard, Dropdown, Groups, Checkboxes, Radios, Slide, Social) rendered faithfully.
- [ ] Tailwind CSS 4 theme tokens configured correctly for primary, secondary, tertiary, and quaternary colors.
- [ ] 100% test coverage with Vitest & Testing Library.
- [ ] Fully responsive on mobile, tablet, and desktop viewports.
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock").
- [ ] `public/CNAME` configured as `btnsmith.free.componentdock.com`.
