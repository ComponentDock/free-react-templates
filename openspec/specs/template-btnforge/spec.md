# Template: BtnForge (Bootstrap Buttons 06 Recreation)

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

## Requirements & Scenarios

### Requirement 1: Header & Navigation

- **Scenario**: User views the top navigation bar and title section.
  - **Given** the app is loaded
  - **When** the user views the header
  - **Then** it displays the brand title "#06 — Bootstrap 4 Buttons" with a clean navbar and dark/light mode toggle.

### Requirement 2: Button Sizes Showcase

- **Scenario**: User views button sizes.
  - **Given** the user scrolls to the sizes section
  - **When** the section is rendered
  - **Then** it displays Large, Medium, and Small buttons with appropriate padding and font sizes.

### Requirement 3: Button Colors Showcase

- **Scenario**: User views the comprehensive color palette of buttons.
  - **Given** the user scrolls to the button colors section
  - **When** the color grid is rendered
  - **Then** it displays Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray, and White buttons.

### Requirement 4: Full-width Button

- **Scenario**: User views the block/full-width button.
  - **Given** the user scrolls to the bottom actions
  - **When** the section is rendered
  - **Then** it displays a full-width primary button.

### Requirement 5: Footer & Component Dock Link

- **Scenario**: User scrolls to the footer.
  - **Given** the user reaches the bottom of the page
  - **When** the footer is rendered
  - **Then** it displays copyright information and a prominent link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] `npm run spec:validate` passes
- [ ] `npm run test:coverage` achieves 100% lines/functions/branches/statements
- [ ] `scripts/verify-app.sh btnforge` passes successfully
- [ ] Footer links `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `btnforge.free.componentdock.com`
