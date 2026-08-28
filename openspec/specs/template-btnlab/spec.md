# Template: BtnLab (UI Components / Buttons Showcase)

## Purpose

- Recreation of ColorLib **Bootstrap Buttons 13** (`https://colorlib.com/wp/template/bootstrap-buttons-13/`).
- Preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/` (Live preview analyzed — dark-themed button showcase with social, dropdown, group, checkbox, and radio button sections).
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens (Extracted from Live Preview CSS)

- **Body Background**: Dark charcoal `#222222` (entire page on dark background).
- **Typography**: Poppins, Arial, sans-serif (headings in white `#ffffff`, body text light on dark).
- **Brand / Primary Color**: Indigo-blue `#3e64ff` (buttons, checkboxes, radios).
- **Secondary Color**: Soft purple `#bd83ce` (secondary buttons, checkboxes, radios).
- **Tertiary Color**: Vivid violet `#8105d8` (tertiary buttons, checkboxes, radios).
- **Quaternary Color**: Mint green `#52de97` (quaternary buttons, checkboxes, radios).
- **Social Colors**:
  - Twitter: `#69b6f0`
  - Facebook: `#4f69a2`
  - LinkedIn: `#2884ba`
  - Pinterest: `#d03940`
  - Dribbble: `#ea6294`
- **Button Defaults**:
  - Padding: `14px 18px`
  - Border-radius: `2px` (sharp corners, not rounded)
  - Border-width: `2px`
  - Text-transform: `uppercase`
  - Font-size: `13px`
  - Font-weight: `500`
  - Shadow: `0px 10px 20px -6px rgba(0, 0, 0, 0.12)`
  - Hover shadow: `0px 12px 20px -6px rgba(0, 0, 0, 0.21)`
- **Button Variants**:
  - `btn-round`: border-radius `40px` (pill shape)
  - `btn-lg`: padding `17px 24px`, font-size `16px`, border-radius `40px`
  - `btn-sm`: padding `5px 20px`, font-size `12px`
  - `btn-link`: no border, no shadow, white text
  - `btn-outline`: transparent background, `2px solid rgba(255,255,255,0.1)` border
- **Dropdown Menu**: White background, heavy box-shadow `0px 10px 34px -20px rgba(0,0,0,0.41)`, items `13px` font.
- **Checkboxes**: Custom Ionicons-based (✓ checkmark), colored per variant.
- **Radios**: Custom styled with dark circle `#222`, colored inner dot per variant.

---

## Requirements & Gherkin Scenarios

### Requirement 1: Page Header and Hero Introduction

- The template must display a centered heading "Button #03" (or equivalent title like "BtnLab Button Showcase") in white text on a dark background.
- The page must have a dark charcoal body background (`#222222`).

#### Scenario: User loads the button showcase page

- **Given** the user opens the BtnLab template
- **When** the page loads
- **Then** the heading "Button #03" is displayed in white text
- **And** the page background is dark charcoal (`#222222`)

### Requirement 2: Default Button Variants (Solid & Outline)

- The template must display a grid of solid-colored default buttons in primary, secondary, tertiary, quaternary, and white variants.
- Each variant must have both solid and outline styles.
- Buttons must be uppercase with sharp corners (2px radius), 14px/18px padding, and box-shadow on hover.

#### Scenario: User views default button grid

- **Given** the user scrolls to the default buttons section
- **When** the buttons render
- **Then** there are buttons in primary (`#3e64ff`), secondary (`#bd83ce`), tertiary (`#8105d8`), quaternary (`#52de97`), and white variants
- **And** each button has uppercase text, sharp corners, and a hover shadow effect

#### Scenario: User hovers a default button

- **Given** the user hovers over a primary default button
- **When** the hover state activates
- **Then** the shadow intensifies to `0px 12px 20px -6px rgba(0, 0, 0, 0.21)`
- **And** the button color darkens slightly

### Requirement 3: Default Buttons with Icons (Leading & Trailing)

- The template must show buttons with leading icons and trailing icons for each color variant.
- Icons must be Lucide React icons (e.g., ArrowRight, ArrowLeft, Star, Heart).

#### Scenario: User views icon buttons

- **Given** the user scrolls to the icon buttons section
- **When** the icon buttons render
- **Then** there are buttons with icons on the left (leading) and right (trailing)
- **And** icons are aligned correctly within each button

### Requirement 4: Social Media Buttons

- The template must display social media buttons for Twitter, Facebook, Dribbble, LinkedIn, and Pinterest in multiple layout styles.
- Each social button uses its brand color and includes an icon + label.
- Layouts include: icon-only squares, icon + label with count (e.g., "SHARE - 8.2K"), and full-width connected styles.

#### Scenario: User views social button variants

- **Given** the user scrolls to the social buttons section
- **When** the social buttons render
- **Then** there are Twitter (`#69b6f0`), Facebook (`#4f69a2`), and Dribbble (`#ea6294`) buttons
- **And** each social button has an icon and label

#### Scenario: User views social buttons with counts

- **Given** the user views the social buttons with count badges
- **When** the buttons render
- **Then** buttons display labels like "SHARE - 8.2K" and "CONNECT WITH TWITTER"
- **And** LinkedIn (`#2884ba`) and Pinterest (`#d03940`) buttons are also present

### Requirement 5: Dropdown Buttons

- The template must include dropdown buttons with a caret icon.
- The dropdown menu must have a white background with a prominent box-shadow.
- Dropdown items must be `13px` font with hover transitions.

#### Scenario: User interacts with dropdown buttons

- **Given** the user scrolls to the dropdown buttons section
- **When** they click a dropdown button
- **Then** a white dropdown menu appears with a box-shadow
- **And** the dropdown items are `13px` font size with subtle hover states

### Requirement 6: Group Buttons

- The template must display connected button groups (button groups with shared borders).
- Groups must contain a mix of solid and outline buttons.

#### Scenario: User views button groups

- **Given** the user scrolls to the group buttons section
- **When** the groups render
- **Then** there are two button groups with connected borders
- **And** each group contains "BUTTON 1" / "BUTTON 2" and "OUTLINE BUTTON"

### Requirement 7: Custom Checkboxes

- The template must display custom-styled checkboxes with Ionicons checkmarks.
- Checkboxes come in primary, secondary, tertiary, quaternary, and dark color variants.
- Checked state shows a colored checkmark; unchecked shows an empty square icon.

#### Scenario: User views checkbox variants

- **Given** the user scrolls to the checkboxes section
- **When** the checkboxes render
- **Then** there are checkbox items labeled "Primary", "Success", "Danger", "Warning", "Disabled"
- **And** each checkbox has a custom icon-based appearance

#### Scenario: User toggles a checkbox

- **Given** the user clicks on a primary checkbox
- **When** the checkbox is toggled
- **Then** the checkmark color changes to primary (`#3e64ff`)

### Requirement 8: Custom Radio Buttons

- The template must display custom-styled radio buttons with colored inner dots.
- Radio variants: primary, secondary, tertiary, quaternary, dark.
- Radio circles have a dark `#222` background with a colored inner dot when checked.

#### Scenario: User views radio button variants

- **Given** the user scrolls to the radios buttons section
- **When** the radio buttons render
- **Then** there are radio items labeled "Primary", "Success", "Danger", "Warning", "Disabled"
- **And** each radio has a custom circular appearance with colored fill when selected

#### Scenario: User selects a radio button

- **Given** the user clicks on a primary radio button
- **When** the radio is selected
- **Then** the inner dot appears in primary color (`#3e64ff`)

### Requirement 9: Action Buttons Row

- The template must show a row of mixed action buttons: "WATCH PHOTOS", "DOWNLOAD", "ADD COMMENT", "LIKE 2", "CREATE ACCOUNT".
- Buttons use various styles (solid primary, outlined, icon-only).

#### Scenario: User views action buttons

- **Given** the user scrolls to the action buttons section
- **When** the action buttons render
- **Then** buttons for "WATCH PHOTOS", "DOWNLOAD", "ADD COMMENT", "LIKE 2", and "CREATE ACCOUNT" are visible
- **And** some buttons include leading icons

### Requirement 10: Footer with Component Dock Attribution

- The footer must display copyright info and a mandatory link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: User checks the footer

- **Given** the user scrolls to the bottom of the page
- **When** the footer renders
- **Then** it contains the Component Dock link and copyright notice

---

## Verification Checklist

- [ ] TypeScript strict compilation passes (`npm run typecheck`).
- [ ] Linting passes without errors (`npm run lint`).
- [ ] Vitest test suite runs with 100% coverage (`npm run test:coverage`).
- [ ] Build succeeds (`npm run build`).
- [ ] Component Dock footer attribution is present and links correctly.
- [ ] Dark background (#222222) renders correctly across all sections.
- [ ] All button variants (primary, secondary, tertiary, quaternary, social, outline, round) render with correct colors.
- [ ] Custom checkboxes and radios function correctly with proper color variants.
