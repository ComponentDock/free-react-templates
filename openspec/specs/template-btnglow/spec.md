# Template: Btnglow (UI Component Showcase)

## Purpose

Recreation of ColorLib **Bootstrap Buttons V12** (`https://colorlib.com/wp/template/bootstrap-buttons-12/`), built as a modern React 19 + Tailwind CSS 4 UI component showcase template. Live preview URL: `https://colorlib.com/wp/template/bootstrap-buttons-12/`.

## Design tokens

- **Font Family**: `Poppins, Arial, sans-serif`
- **Background Color**: `#111111` (dark theme background)
- **Primary Button Color**: `#494ca2` (Indigo)
- **Button Radius**: `0px` (sharp rectangular buttons / square aesthetic)
- **Accent Colors**: Success (`#28a745`), Danger (`#dc3545`), Warning (`#ffc107`), Info (`#17a2b8`), Light (`#f8f9fa`), Dark (`#343a40`)

## Sections & Gherkin Requirements

### 1. Header & Navigation

- **Requirement**: Display a clean header with title "Button #12" and navigation items (Home, Support, Free Themes).
- **Scenario**: User views header
  - Given the page is loaded
  - Then the header displays title "Button #12" and navigation links

### 2. Pick Your Style Section

- **Requirement**: Showcase buttons in Default, Default Outline, Default Round, and Outline Round variants.
- **Scenario**: User tests button styles
  - Given the "Pick your style" section is visible
  - When the user inspects button styles
  - Then default, outline, and rounded style variations are correctly rendered

### 3. Pick Your Size Section

- **Requirement**: Showcase Small, Regular, and Large button sizes.
- **Scenario**: User views button sizes
  - Given the "Pick your size" section is visible
  - Then buttons are displayed in small, regular, and large dimension tiers

### 4. Pick Your Color Section

- **Requirement**: Showcase semantic color variants (Primary, Success, Danger, Warning, Info, Light, Dark) in solid and outline styles.
- **Scenario**: User views color variants
  - Given the "Pick your color" section is visible
  - Then all 7 semantic color variants appear in both solid and outline styles

### 5. Buttons with Icons & Social Buttons

- **Requirement**: Showcase buttons with icons and social network integrations (Facebook, Twitter, LinkedIn, Pinterest, Dribbble) with share count badges.
- **Scenario**: User interacts with social buttons
  - Given the social buttons section is visible
  - Then social buttons display respective icons and counts (e.g. 8.2k)

### 6. Links, Disabled Buttons & Dropdowns

- **Requirement**: Display text link variants, disabled button states, interactive dropdown buttons, and button groups.
- **Scenario**: User inspects interactive states
  - Given the interactive states section is visible
  - Then disabled buttons are non-clickable and dropdowns toggle correctly

### 7. Checkboxes, Radios & Block Buttons

- **Requirement**: Display styled color checkboxes, radio buttons, and full-width block level buttons.
- **Scenario**: User tests form controls
  - Given the form controls section is visible
  - Then colored radios and block-level buttons render properly

## Verification Checklist

- [ ] Spec validated via `npm run spec:validate`
- [ ] 100% test coverage on all components
- [ ] Footer links https://www.componentdock.com/
- [ ] No mention of ColorLib in app code
