# Template: BtnGlow (Bootstrap Button Color Palette Showcase)

## Purpose

Recreation of ColorLib Bootstrap Buttons 07 (https://colorlib.com/wp/template/bootstrap-buttons-07/). A clean, minimal button color palette showcase featuring standard Bootstrap button sizes (Large, Medium, Small), comprehensive color variants across semantic and extended palettes, and a full-width button demonstration — built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Primary Brand Color**: Bootstrap Blue `#0d6efd` (standard Bootstrap 4/5 primary)
- **Semantic Colors**:
  - Primary: `#0d6efd`
  - Secondary: `#6c757d`
  - Success: `#198754`
  - Info: `#0dcaf0`
  - Warning: `#ffc107`
  - Danger: `#dc3545`
  - Light: `#f8f9fa` (dark text)
  - Dark: `#212529`
- **Extended Palette**:
  - Orange: `#fd7e14`
  - Indigo: `#6610f2`
  - Pink: `#d63384`
  - Deep Orange: `#e83e2c`
  - Aqua: `#0dcaf0`
  - Black: `#000000`
  - Purple: `#6f42c1`
  - Blue: `#0d6efd`
  - Brown: `#795548`
  - Blue Gray: `#607d8b`
- **Font Family**: System UI stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)
- **Button Radii**: Pill/rounded-full (`rounded-full` / `rounded-pill` equivalent) for all button variants
- **Button Sizes**:
  - Large: `px-6 py-3 text-lg`
  - Medium: `px-4 py-2 text-base`
  - Small: `px-3 py-1.5 text-sm`
- **Section Backgrounds**: White (`bg-white`) light mode; Slate-900 (`bg-slate-900`) dark mode
- **Typography**: Clean system fonts, muted grey labels (`text-slate-500`) for section headings

## Requirements & Gherkin Scenarios

### Requirement 1: Navigation Bar

- As a user, I want a simple navigation bar with the brand name and dark mode toggle so I can navigate and control theme.

Scenario: Display navbar
Given the user loads BtnGlow
When the page renders
Then they see a sticky navbar with brand name "BtnGlow" and a dark mode toggle button

Scenario: Toggle dark mode
Given the user is on BtnGlow
When they click the theme toggle
Then the page switches between light (white background) and dark (slate-900 background) modes
And the toggle icon updates to reflect the current mode

### Requirement 2: Hero / Title Section

- As a user, I want a clear page title identifying the template so I know what I'm viewing.

Scenario: Display page title
Given the user loads BtnGlow
When the hero renders
Then they see a centered heading "#07 - Bootstrap 4 Buttons" (or "BtnGlow - Bootstrap Button Palette") in dark text

### Requirement 3: Button Size Variations

- As a developer, I want to see Bootstrap's three standard button sizes (Large, Medium, Small) so I can choose the right size for my UI.

Scenario: View button size demonstrations
Given the user scrolls to the "Button Sizes" section
When the section renders
Then they see three labeled button groups:

- "Large" — a large pill-shaped primary button
- "Medium" — a medium pill-shaped primary button
- "Small" — a small pill-shaped primary button
  And all buttons use the primary Bootstrap blue color
  And all buttons have pill/rounded-full border radius

### Requirement 4: Semantic Color Palette

- As a developer, I want to see all standard Bootstrap semantic button colors so I can reference the correct color for each intent.

Scenario: View semantic button colors
Given the user scrolls to the "Button Colors" section
When the section renders
Then they see a grid of pill-shaped buttons in these colors with white text (except Light which uses dark text):

- Primary (Bootstrap blue)
- Secondary (slate grey)
- Success (green)
- Info (cyan)
- Warning (yellow, dark text)
- Danger (red)
- Light (off-white, dark text)
- Dark (near-black)
  And each button displays its color name as label

### Requirement 5: Extended Color Palette

- As a developer, I want to see Bootstrap's extended color palette so I have more design options.

Scenario: View extended button colors
Given the user continues scrolling in the "Button Colors" section
When the extended palette renders
Then they see additional rows of pill-shaped buttons in:

- Row 2: Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple
- Row 3: Blue, Brown, Blue Gray
  And each button displays its color name as label
  And text color is white for dark backgrounds, dark for light backgrounds (Warning, Light)

### Requirement 6: Full Width Button

- As a developer, I want to see a full-width button example so I understand the block-level button pattern.

Scenario: View full-width button
Given the user scrolls to the "Full Width Button" section
When the section renders
Then they see a single pill-shaped primary button spanning the full container width
With the label "Button"

### Requirement 7: Component Dock Footer

- As a user, I want a footer linking to Component Dock so I can discover more templates.

Scenario: Footer attribution
Given the user scrolls to the bottom of the page
Then the footer displays "Made with Component Dock" linking to https://www.componentdock.com/

## Verification Checklist

- [ ] Navbar renders with brand name and functional dark mode toggle
- [ ] Hero/title section displays correctly
- [ ] Button Sizes section shows Large, Medium, Small primary buttons with correct sizing
- [ ] Button Colors section displays all 8 semantic colors with correct Bootstrap hex values
- [ ] Extended palette shows 11 additional colors (Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray)
- [ ] Full Width Button section shows a block-level primary button
- [ ] All buttons use pill/rounded-full border radius
- [ ] Dark mode toggles correctly (white ↔ slate-900 backgrounds, text colors adapt)
- [ ] Footer contains mandatory Component Dock link
- [ ] 100% test coverage with Vitest & Testing Library
- [ ] TypeScript strict mode passes
- [ ] ESLint + Prettier pass
- [ ] Build succeeds
