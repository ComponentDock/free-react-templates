# Template: BtnWarp (UI Components / Button Showcase)

## Purpose

- Recreation of ColorLib **Bootstrap Buttons 13** (`https://colorlib.com/wp/template/bootstrap-buttons-13/`).
- Preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-13/`
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens (Inferred from Preview HTML & CSS)

- **Brand Colors & Palette**:
  - Primary: `#3e64ff` (Indigo Blue)
  - Secondary: `#bd83ce` (Orchid Purple)
  - Tertiary: `#8105d8` (Deep Purple)
  - Quarternary: `#52de97` (Mint Green)
  - Background: `#222222` (Dark charcoal showcase background)
  - Social Colors: Twitter (`#69b6f0`), Facebook (`#4f69a2`), LinkedIn (`#2884ba`), Pinterest (`#d03940`), Dribbble (`#ea6294`)
- **Typography**:
  - Font Family: "Poppins", Arial, sans-serif
  - Sizes: Heading sizes up to 32px with white text, subheadings 16px
- **Button Radii & Shapes**:
  - Standard rounded buttons (`rounded-md` / default bootstrap radius)
  - Round / Pill buttons (`rounded-full`)
  - Outline buttons with subtle translucent borders (`border border-white/10 hover:border-white/5`)
  - Block buttons (`w-full`) and social action buttons with counts / badges
- **Section Layout**:
  - Dark-themed card showcase grid with distinct button variant groups (Standard solid buttons, Outline buttons, Round/Pill buttons, Icon buttons, Social media buttons with statistics).

---

## Requirements

### Requirement 1: Header / Showcase Introduction

- The template must display a header with the title "BtnWarp" and subtitle indicating the interactive button component collection.

#### Scenario: User opens the BtnWarp button showcase

- **GIVEN** the user is on the BtnWarp template home page
- **WHEN** the page renders
- **THEN** the title and subtitle are clearly visible against the dark background

### Requirement 2: Solid & Multi-Color Button Variants

- The template must showcase primary, secondary, tertiary, and quarternary solid buttons in standard and block configurations.

#### Scenario: User explores solid button variants

- **GIVEN** the user views the solid buttons section
- **WHEN** they inspect the color options (Primary, Secondary, Tertiary, Quarternary)
- **THEN** all variants display distinct background colors and interactive hover states

### Requirement 3: Outline & Bordered Buttons

- The template must provide outline button variants with translucent borders and hover state fill transitions.

#### Scenario: User interacts with outline buttons

- **GIVEN** the user scrolls to the outline button section
- **WHEN** they hover over an outline button
- **THEN** the border and text opacity transition smoothly

### Requirement 4: Rounded / Pill Button Variants

- The template must provide fully rounded pill button variants across solid and outline styles.

#### Scenario: User views pill buttons

- **GIVEN** the user checks the rounded button section
- **WHEN** the components render
- **THEN** buttons feature pill-shaped border radiuses (`rounded-full`)

### Requirement 5: Icon-Enhanced Buttons

- The template must include buttons with leading and trailing icons using Lucide icons.

#### Scenario: User tests buttons with icons

- **GIVEN** the user views the icon buttons section
- **WHEN** they inspect buttons with heart or directional icons
- **THEN** icons align correctly with text padding

### Requirement 6: Social Media Buttons with Statistics

- The template must showcase social media brand buttons (Twitter, Facebook, LinkedIn, Pinterest, Dribbble) with follower counts and share statistics.

#### Scenario: User inspects social buttons

- **GIVEN** the user scrolls to the social buttons section
- **WHEN** social action buttons render
- **THEN** brand colors and share metrics (e.g., "Share - 8.2k", "Connect with Twitter") are displayed

### Requirement 7: Footer with Component Dock Attribution

- The footer must display copyright and a mandatory link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: User verifies footer link

- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer renders
- **THEN** the Component Dock link is present and correct

## Verification checklist

- [ ] `npm run verify:app -- btnwarp` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 7 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
