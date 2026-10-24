# Template: Btnglow (UI Component Showcase)
<!-- prep-status: shipped-as=btnridge -->
> **SHIPPED-UNDER** — the ColorLib `bootstrap-buttons-12` design this prep describes already
> ships as `apps/btnridge` (<https://btnridge.free.componentdock.com>).
> Do not scaffold `apps/btnglow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-btnridge/spec.md`.

## Purpose

Recreation of ColorLib **Bootstrap Buttons V12** (`https://colorlib.com/wp/template/bootstrap-buttons-12/`), built as a modern React 19 + Tailwind CSS 4 UI component showcase template. Live preview URL: `https://colorlib.com/wp/template/bootstrap-buttons-12/`.

## Design tokens

- **Font Family**: `Poppins, Arial, sans-serif`
- **Background Color**: `#111111` (dark theme background)
- **Primary Button Color**: `#494ca2` (Indigo)
- **Button Radius**: `0px` (sharp rectangular buttons / square aesthetic)
- **Accent Colors**: Success (`#28a745`), Danger (`#dc3545`), Warning (`#ffc107`), Info (`#17a2b8`), Light (`#f8f9fa`), Dark (`#343a40`)

## Requirements

### 1. Header & Navigation

- **Requirement**: Display a clean header with title "Button #12" and navigation items (Home, Support, Free Themes).

#### Scenario: User views header

- **GIVEN** the page is loaded
- **THEN** the header displays title "Button #12" and navigation links

### 2. Pick Your Style Section

- **Requirement**: Showcase buttons in Default, Default Outline, Default Round, and Outline Round variants.

#### Scenario: User tests button styles

- **GIVEN** the "Pick your style" section is visible
- **WHEN** the user inspects button styles
- **THEN** default, outline, and rounded style variations are correctly rendered

### 3. Pick Your Size Section

- **Requirement**: Showcase Small, Regular, and Large button sizes.

#### Scenario: User views button sizes

- **GIVEN** the "Pick your size" section is visible
- **THEN** buttons are displayed in small, regular, and large dimension tiers

### 4. Pick Your Color Section

- **Requirement**: Showcase semantic color variants (Primary, Success, Danger, Warning, Info, Light, Dark) in solid and outline styles.

#### Scenario: User views color variants

- **GIVEN** the "Pick your color" section is visible
- **THEN** all 7 semantic color variants appear in both solid and outline styles

### 5. Buttons with Icons & Social Buttons

- **Requirement**: Showcase buttons with icons and social network integrations (Facebook, Twitter, LinkedIn, Pinterest, Dribbble) with share count badges.

#### Scenario: User interacts with social buttons

- **GIVEN** the social buttons section is visible
- **THEN** social buttons display respective icons and counts (e.g. 8.2k)

### 6. Links, Disabled Buttons & Dropdowns

- **Requirement**: Display text link variants, disabled button states, interactive dropdown buttons, and button groups.

#### Scenario: User inspects interactive states

- **GIVEN** the interactive states section is visible
- **THEN** disabled buttons are non-clickable and dropdowns toggle correctly

### 7. Checkboxes, Radios & Block Buttons

- **Requirement**: Display styled color checkboxes, radio buttons, and full-width block level buttons.

#### Scenario: User tests form controls

- **GIVEN** the form controls section is visible
- **THEN** colored radios and block-level buttons render properly

## Verification checklist

- [ ] Spec validated via `npm run spec:validate`
- [ ] 100% test coverage on all components
- [ ] Footer links https://www.componentdock.com/
- [ ] No mention of ColorLib in app code
- [ ] 1. Header & Navigation — the header displays title "Button #12" and navigation links
- [ ] 2. Pick Your Style Section — default, outline, and rounded style variations are correctly rendered
- [ ] 3. Pick Your Size Section — buttons are displayed in small, regular, and large dimension tiers
- [ ] 4. Pick Your Color Section — all 7 semantic color variants appear in both solid and outline styles
- [ ] 5. Buttons with Icons & Social Buttons — social buttons display respective icons and counts (e.g. 8.2k)
- [ ] 6. Links, Disabled Buttons & Dropdowns — disabled buttons are non-clickable and dropdowns toggle correctly
- [ ] 7. Checkboxes, Radios & Block Buttons — colored radios and block-level buttons render properly
