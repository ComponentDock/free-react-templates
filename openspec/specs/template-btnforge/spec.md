# Template: BtnForge (Bootstrap Buttons 06 Recreation)
<!-- prep-status: shipped-as=btnvibe -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-06` design this prep describes already
> ships as `apps/btnvibe` (<https://btnvibe.free.componentdock.com>).
> Do not scaffold `apps/btnforge`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnvibe/spec.md`.

## Purpose

Recreation of ColorLib Bootstrap Buttons 06 (`https://colorlib.com/wp/template/bootstrap-buttons-06/`, preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/`) as a modern React + Vite + Tailwind CSS 4 application (`apps/btnforge`, `@free-react-templates/btnforge`).

## Design Tokens & Styling

- **Font Family**: Roboto, sans-serif
- **Primary Color**: `#007bff` (Primary Blue)
- **Secondary Color**: `#6c757d` (Secondary Gray)
- **Success Color**: `#28a745` (Green)
- **Info Color**: `#17a2b8` (Cyan/Info)
- **Warning Color**: `#ffc107` (Yellow/Warning)
- **Danger Color**: `#dc3545` (Red/Danger)
- **Custom Palette**: Orange (`#fd7e14`), Indigo (`#6610f2`), Pink (`#e83e8c`), Deep Orange (`#ffac8e`), Aqua (`#3fc5f0`), Dark (`#393e46`), Black (`#000000`), Purple (`#6f42c1`), Brown (`#a0855b`), Blue Gray (`#3f4d71`), White (`#ffffff`)
- **Border Radius**: 4px (`rounded`) for buttons
- **Background**: Light clean white background with crisp typography and card groupings.

## Requirements

### Requirement 1: Header & Navigation

#### Scenario: User views the top navigation bar and title section.

- **GIVEN** the app is loaded
- **WHEN** the user views the header
- **THEN** it displays the brand title "#06 — Bootstrap 4 Buttons" with a clean navbar and dark/light mode toggle

### Requirement 2: Button Sizes Showcase

#### Scenario: User views button sizes.

- **GIVEN** the user scrolls to the sizes section
- **WHEN** the section is rendered
- **THEN** it displays Large, Medium, and Small buttons with appropriate padding and font sizes

### Requirement 3: Button Colors Showcase

#### Scenario: User views the comprehensive color palette of buttons.

- **GIVEN** the user scrolls to the button colors section
- **WHEN** the color grid is rendered
- **THEN** it displays Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray, and White buttons

### Requirement 4: Full-width Button

#### Scenario: User views the block/full-width button.

- **GIVEN** the user scrolls to the bottom actions
- **WHEN** the section is rendered
- **THEN** it displays a full-width primary button

### Requirement 5: Footer & Component Dock Link

#### Scenario: User scrolls to the footer.

- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it displays copyright information and a prominent link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `npm run test:coverage` achieves 100% lines/functions/branches/statements
- [ ] `scripts/verify-app.sh btnforge` passes successfully
- [ ] Footer links `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `btnforge.free.componentdock.com`
