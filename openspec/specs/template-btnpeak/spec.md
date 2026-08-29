# Template: BtnPeak (UI Component Showcase / Buttons)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 19** (`https://colorlib.com/wp/template/bootstrap-buttons-19/`, live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-19/`). A rich interactive UI component showcase featuring styled color-coded action buttons, statistic card buttons with left/right icons, gradient variants, hover states, and responsive grid layouts. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**:
  - Primary: `#6c5ce7` (Purple)
  - Secondary: `#1ee3cf` (Turquoise)
  - Tertiary: `#ff00c8` (Pink)
  - Quaternary / Accent: `#a1dd70` (Lime Green)
  - Background: `#ffffff` (White container/body), `#f8f9fa` (Light section background)
  - Text: `#212529` (Dark body text), `rgba(255, 255, 255, 0.8)` (Button subtitle text)
- **Typography**:
  - Font Family: `Poppins`, sans-serif
  - Heading Font Size: 32px (`heading-section`), Subheadings 16px (`small`)
- **Button Shapes & Radii**:
  - Border Radius: `4px` (`rounded`)
  - Box Shadow: `0px 7px 15px -13px rgba(0, 0, 0, 0.17)`
  - Icon Box Width: `60px` with 30px icon size (`ion-ios-*` rendered via Lucide equivalents)

## Requirements & Gherkin Scenarios

### Requirement 1: Section Header and Color Picker Showcase

- **As a** visitor,
- **I want** to see the main heading and color picker action buttons,
- **So that** I can preview primary, secondary, tertiary, and gradient buttons.

#### Scenario: Display color picker buttons

- **Given** the BtnPeak page is loaded
- **When** the user views the top buttons section
- **Then** four primary color buttons ("Default Primary", "Default Secondary", "Default Tertiary", "Default Gradient") are displayed with correct brand colors and hover states.

### Requirement 2: White Stat Buttons with Left Icons

- **As a** visitor,
- **I want** to see white statistic card buttons with left-aligned icons,
- **So that** I can view metrics like New Posts, New Comments, Bounce Rate, and Total Visits.

#### Scenario: Display white left-icon stat buttons

- **Given** the stat buttons section is visible
- **When** the user inspects the white card buttons with left icons
- **Then** four cards showing 275 New Posts, 109 New Comments, 68% Bounce Rate, and 343 Total Visits are rendered with 60px colored icon containers on the left and right-aligned text.

### Requirement 3: White Stat Buttons with Right Icons

- **As a** visitor,
- **I want** to see white statistic card buttons with right-aligned icons,
- **So that** I want to check New Projects, New Clients, Conversion Rate, and Support Tickets.

#### Scenario: Display white right-icon stat buttons

- **Given** the stat buttons section is visible
- **When** the user inspects the white card buttons with right icons
- **Then** four cards showing New Projects, New Clients, Conversion Rate, and Support Tickets are rendered with left-aligned text and right-aligned 60px colored icon containers.

### Requirement 4: Solid Colored Stat Buttons with Left and Right Icons

- **As a** visitor,
- **I want** to see solid colored stat buttons with both left and right icon alignments,
- **So that** I can explore fully filled metric action buttons.

#### Scenario: Display solid colored stat buttons

- **Given** the solid stat buttons rows are visible
- **When** the user views the filled primary, secondary, tertiary, and quaternary stat buttons
- **Then** each button displays solid background colors (`#6c5ce7`, `#1ee3cf`, `#ff00c8`, `#a1dd70`), white text, and icon containers.

### Requirement 5: Footer Attribution

- **As a** visitor,
- **I want** to see the Component Dock attribution link in the footer,
- **So that** I know where to find more templates.

#### Scenario: Footer link present

- **Given** the page footer is rendered
- **Then** it contains a link to `https://www.componentdock.com/` labeled "Component Dock".

## Verification Checklist

- [ ] Vite + React 19 + Tailwind CSS 4 workspace configured at `apps/btnpeak`
- [ ] Package name `@free-react-templates/btnpeak`
- [ ] `public/CNAME` contains `btnpeak.free.componentdock.com`
- [ ] `package.json` homepage is `https://btnpeak.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
- [ ] All 5 Gherkin requirements tested with Vitest at 100% coverage
- [ ] `scripts/verify-app.sh btnpeak` passes successfully
