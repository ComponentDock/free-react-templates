# Template: Pulldown (Bootstrap Dropdowns / UI Components category)

## Purpose

- Recreation of ColorLib **Dropdown 01** (`https://colorlib.com/wp/template/dropdown-01/`).
- Preview URL: `https://preview.colorlib.com/theme/bootstrap/dropdown-01/` (HTTP 200, 13,217 bytes DOM; fetched 2026-09-01). Note: the standard preview path `https://preview.colorlib.com/theme/dropdown-01/` returns 404 — the "Bootstrap Dropdowns" series lives under the `/theme/bootstrap/` prefix.
- Stylesheets: `css/style.css` (Bootstrap 4.3.1 + template custom CSS, bundled in one file).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide React icons, Vitest + Testing Library (100% coverage).
- Branding: `https://www.componentdock.com/` in footer.

## Design tokens

### Colors (extracted from preview CSS)

- **Primary Brand Color**: `#0075f6` (bright blue) — used for all buttons and active dropdown items
- **Primary Hover**: `#005dc3` (darker blue) — button hover/focus state
- **Bootstrap Primary**: `#007bff` (standard Bootstrap blue) — fallback in bundled Bootstrap CSS
- **Dropdown Menu Background**: `#ffffff` (white)
- **Dropdown Item Text**: `rgba(0, 0, 0, 0.7)` (dark gray with opacity)
- **Dropdown Item Hover/Active**: `#0075f6` background with white text
- **Dropdown Divider**: `rgba(0, 0, 0, 0.15)` (light gray)
- **Section Background**: `#ffffff` (white page background)
- **Heading Text**: `#000000` (black)
- **Shadow**: `0px 10px 34px -20px rgba(0, 0, 0, 0.41)` — dropdown menu elevation

### Typography

- **Font Family**: `Poppins`, `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` (loaded via Cloudflare fonts)
- **Heading Size**: `28px` (`.heading-section`)
- **Heading Small Size**: `18px` (`.heading-section small`)
- **Button Font Size**: `14px`, weight `400`
- **Dropdown Item Font Size**: `14px`, weight `400`

### Button Shapes & Spacing

- **Button Border Radius**: `5px` (rounded)
- **Button Padding**: `12px 16px`
- **Button Box Shadow**: `0px 10px 20px -6px rgba(0, 0, 0, 0.12)` (subtle elevation)
- **Button Transition**: `0.3s` ease
- **Dropdown Menu Border Radius**: inherited from Bootstrap (rounded corners)
- **Dropdown Menu Padding**: `0` (items fill edge-to-edge)
- **Dropdown Item Padding**: `10px` vertical

### Layout

- **Section Padding**: `7em 0` (`.ftco-section`) — generous vertical spacing
- **Container**: Bootstrap `.container` (max-width responsive)
- **Grid**: 4 equal columns (`.col-md-3`) — each column shows one dropdown variation
- **Column Content**: Each column has a header (`.heading-section` with `<small>` subtitle) + 2 button groups (regular + split variant)
- **Dropdown Variations**: Dropdown (down), Dropup (up), Dropright (right), Dropleft (left)

## Requirements & Scenarios

### Requirement 1: Page Structure

- The template must render a single page section (`.ftco-section`) with generous vertical padding.
- The section must contain a centered main heading "Pulldown" (replacing "Dropdown #01").
- Below the main heading, a responsive 4-column grid (stacking on mobile) must display the four dropdown variations.

#### Scenario 1.1: Main heading renders

**Given** the page loads  
**When** the user views the page  
**Then** a centered heading "Pulldown" is visible at the top of the section

#### Scenario 1.2: Four variation columns render

**Given** the page loads  
**When** the user views the page on desktop (≥768px)  
**Then** four columns are displayed side by side, each with a variation header and two button groups

#### Scenario 1.3: Columns stack on mobile

**Given** the page loads  
**When** the user views the page on mobile (<768px)  
**Then** the four columns stack vertically in order: Dropdown, Dropup, Dropright, Dropleft

### Requirement 2: Dropdown Variation (Column 1)

- Column 1 must display a "Dropdown Variation" header.
- Two button groups must render:
  1. A single button with dropdown toggle (label "Dropdown", down arrow) that opens a menu downward
  2. A split button group: primary button "Split Dropdown" + separate toggle button (down arrow) that opens the same menu

#### Scenario 2.1: Regular dropdown button renders

**Given** column 1 is visible  
**When** the user views the first button group  
**Then** a blue rounded button labeled "Dropdown" with a down chevron icon is displayed

#### Scenario 2.2: Dropdown menu opens on click

**Given** the "Dropdown" button is clicked  
**When** the dropdown menu opens  
**Then** a white elevated menu appears below the button with items: "Dropdown", "Active" (highlighted), "Something else here", divider, "Separated link"

#### Scenario 2.3: Split dropdown renders

**Given** column 1 is visible  
**When** the user views the second button group  
**Then** a blue "Split Dropdown" button and an adjacent blue toggle button (down chevron only) are displayed

#### Scenario 2.4: Split dropdown menu opens

**Given** the split dropdown's toggle button is clicked  
**When** the menu opens  
**Then** the same menu items appear as the regular dropdown

### Requirement 3: Dropup Variation (Column 2)

- Column 2 must display a "Dropup Variation" header.
- Two button groups must render with upward-opening menus:
  1. Single button "Dropup" with up arrow
  2. Split button group: "Split dropup" + toggle with up arrow

#### Scenario 3.1: Dropup button renders with up arrow

**Given** column 2 is visible  
**When** the user views the first button group  
**Then** a blue rounded button labeled "Dropup" with an up chevron icon is displayed

#### Scenario 3.2: Dropup menu opens upward

**Given** the "Dropup" button is clicked  
**When** the menu opens  
**Then** the menu appears above the button (anchored to bottom)

#### Scenario 3.3: Split dropup renders

**Given** column 2 is visible  
**When** the user views the second button group  
**Then** a blue "Split dropup" button and adjacent toggle with up chevron are displayed

### Requirement 4: Dropright Variation (Column 3)

- Column 3 must display a "Dropright Variation" header.
- Two button groups must render with rightward-opening menus:
  1. Single button "Dropright" with right arrow
  2. Split button group: "Split dropright" + toggle with right arrow

#### Scenario 4.1: Dropright button renders with right arrow

**Given** column 3 is visible  
**When** the user views the first button group  
**Then** a blue rounded button labeled "Dropright" with a right chevron icon is displayed

#### Scenario 4.2: Dropright menu opens to the right

**Given** the "Dropright" button is clicked  
**When** the menu opens  
**Then** the menu appears to the right of the button

#### Scenario 4.3: Split dropright renders

**Given** column 3 is visible  
**When** the user views the second button group  
**Then** a blue "Split dropright" button and adjacent toggle with right chevron are displayed

### Requirement 5: Dropleft Variation (Column 4)

- Column 4 must display a "Dropleft Variation" header.
- Two button groups must render with leftward-opening menus:
  1. Single button "Dropleft" with left arrow (chevron positioned left of text)
  2. Split button group: "Split dropleft" + toggle with left arrow (positioned right of text, pointing left)

#### Scenario 5.1: Dropleft button renders with left arrow

**Given** column 4 is visible  
**When** the user views the first button group  
**Then** a blue rounded button labeled "Dropleft" with a left chevron icon (positioned before text) is displayed

#### Scenario 5.2: Dropleft menu opens to the left

**Given** the "Dropleft" button is clicked  
**When** the menu opens  
**Then** the menu appears to the left of the button

#### Scenario 5.3: Split dropleft renders

**Given** column 4 is visible  
**When** the user views the second button group  
**Then** a blue "Split dropleft" button and adjacent toggle with left chevron (positioned after text) are displayed

### Requirement 6: Dropdown Menu Styling (All Variations)

- All dropdown menus must share consistent styling:
  - White background (`#fff`)
  - Elevated shadow: `0px 10px 34px -20px rgba(0, 0, 0, 0.41)`
  - No border
  - Items: `14px`, `rgba(0, 0, 0, 0.7)` text, `10px` vertical padding
  - Hover/active state: primary blue background (`#0075f6`), white text
  - Divider: `rgba(0, 0, 0, 0.15)` horizontal line
  - Icons in items (if any): `rgba(0, 0, 0, 0.4)` color

#### Scenario 6.1: Menu styling is consistent

**Given** any dropdown menu is open  
**When** the user inspects the menu  
**Then** it has white background, elevated shadow, no border, and consistent item styling

#### Scenario 6.2: Active item is highlighted

**Given** a dropdown menu with an active item is open  
**When** the user views the menu  
**Then** the active item has primary blue background and white text

#### Scenario 6.3: Hover state works

**Given** a dropdown menu is open  
**When** the user hovers a non-active item  
**Then** the item gets primary blue background and white text

### Requirement 7: Button Styling (All Buttons)

- All buttons must share consistent styling:
  - Primary blue background: `#0075f6`
  - White text
  - Border: `1px solid #0075f6`
  - Border radius: `5px`
  - Padding: `12px 16px`
  - Font: `14px`, weight `400`, `Poppins` font family
  - Box shadow: `0px 10px 20px -6px rgba(0, 0, 0, 0.12)`
  - Transition: `0.3s` ease
  - Hover/focus: background `#005dc3`, border `#005dc3`
  - Focus ring: `0 0 0 0.2rem rgba(38, 143, 255, 0.5)`

#### Scenario 7.1: Buttons have consistent appearance

**Given** any button in the template  
**When** the user views the page  
**Then** all buttons match the primary blue style with rounded corners and subtle shadow

#### Scenario 7.2: Hover/focus states work

**Given** a button is hovered or focused  
**When** the interaction occurs  
**Then** the button darkens to `#005dc3` with matching border and focus ring

### Requirement 8: Footer with Component Dock Link

- The page must include a footer linking to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario 8.1: Footer link exists

**Given** the page loads  
**When** the user scrolls to the bottom  
**Then** a footer with a link to Component Dock is visible

### Requirement 9: Responsive Behavior

- The 4-column grid must collapse to single column on mobile (<768px).
- Buttons and menus must remain usable on touch devices.
- Menu positioning must work correctly at all viewport sizes.

#### Scenario 9.1: Mobile single column

**Given** viewport width < 768px  
**When** the page renders  
**Then** all four variations stack vertically

#### Scenario 9.2: Touch-friendly buttons

**Given** mobile viewport  
**When** the user taps a button  
**Then** the dropdown menu opens and is dismissible

### Requirement 10: Accessibility

- Buttons must use semantic `<button>` elements.
- Dropdown toggles must have `aria-haspopup="true"` and `aria-expanded` attributes.
- Dropdown menus must use `role="menu"` with `role="menuitem"` items.
- Keyboard navigation: Enter/Space opens menu, Arrow keys navigate, Escape closes.
- Focus management: focus moves to first menu item on open, returns to trigger on close.
- Screen reader labels for icon-only toggle buttons (split button toggles).

#### Scenario 10.1: Keyboard opens menu

**Given** focus is on a dropdown toggle button  
**When** the user presses Enter or Space  
**Then** the menu opens and focus moves to first item

#### Scenario 10.2: Arrow keys navigate

**Given** a menu is open with focus on an item  
**When** the user presses Arrow Down/Up  
**Then** focus moves to next/previous item (wrapping at ends)

#### Scenario 10.3: Escape closes menu

**Given** a menu is open  
**When** the user presses Escape  
**Then** the menu closes and focus returns to the trigger button

#### Scenario 10.4: ARIA attributes present

**Given** any dropdown toggle  
**When** inspected  
**Then** `aria-haspopup="true"`, `aria-expanded` (true/false), and proper roles are present

## Verification Checklist

- [ ] Page renders with centered "Pulldown" heading
- [ ] Four variation columns render in correct order (Dropdown, Dropup, Dropright, Dropleft)
- [ ] Each column has variation header with subtitle
- [ ] Each column has two button groups (regular + split)
- [ ] All 8 dropdown toggles open menus in correct direction
- [ ] Menu items: Dropdown, Active (highlighted), Something else here, divider, Separated link
- [ ] Split buttons have separate toggle with only chevron icon
- [ ] Button styling: blue `#0075f6`, white text, 5px radius, shadow, 0.3s transition
- [ ] Hover/focus: darkens to `#005dc3` with focus ring
- [ ] Menu styling: white bg, elevated shadow, no border, consistent items
- [ ] Active item highlighted with blue bg + white text
- [ ] Hover item gets blue bg + white text
- [ ] Dividers render as light gray lines
- [ ] Responsive: 4 columns desktop, single column mobile (<768px)
- [ ] Footer with Component Dock link present
- [ ] All buttons are semantic `<button>` elements
- [ ] ARIA attributes on toggles (`aria-haspopup`, `aria-expanded`)
- [ ] Menu roles (`role="menu"`, `role="menuitem"`)
- [ ] Keyboard navigation: Enter/Space, Arrow keys, Escape
- [ ] Focus management on open/close
- [ ] Screen reader labels on icon-only toggles
- [ ] Poppins font loads (via Google Fonts or local)
- [ ] No ColorLib references in app code (only in spec)
- [ ] TypeScript strict mode passes
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Build succeeds
- [ ] Lint passes
