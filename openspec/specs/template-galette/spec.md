# Template: Galette (Item Selection Checkboxes)

## Purpose

Galette is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 04"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-04/), built under a
DIFFERENT name (Galette — a crisp, layered pastry, evoking the stacked
checkbox option aesthetic) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a minimalist item-selection checkbox demo: a centered heading
"Checkbox #04", a subtitle prompting user selection, and a set of custom-styled
rectangular checkboxes for quiz/account-style item selection. Each checkbox has
a label and optional description text. The design is clean, white-background,
Poppins font, single-column centered layout.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 04" — fourth of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 736 — mark that line `[x]` when done).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-04/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview may be
  `https://preview.colorlib.com/theme/bootstrap/checkbox-04/`.
  Since neither URL resolved, the design is inferred from the TEMPLATES.md
  description ("item selection checkboxes template for quizzes/account
  creation") and the visual progression of the Checkbox series.
- **Visual design (inferred from series progression + description):**
  Clean, minimalist demo page on a white background. Centered column layout.
  Black heading "Checkbox #04" (h1). Subtitle "Select your preferences" or
  similar prompt text. Below, 3–4 rectangular custom checkboxes with rounded
  corners, each with a bold label and optional description line. Checked state
  shows a filled accent color (teal/blue-green, #20c997) background with white
  checkmark. Unchecked state shows a light gray border on white. Smooth
  transition on toggle. Poppins font family. Footer with "Component Dock" link.
- **Design tokens:**
  - Brand color: `#20c997` (teal/green accent for checked state)
  - Background: white (`#ffffff`)
  - Heading color: dark gray/black (`#333`)
  - Unchecked border: light gray (`#ddd`)
  - Font: Poppins (Google Fonts, weights 300–700)
  - Checkbox shape: rectangular with rounded corners (`rounded-lg`)

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Checkbox #04".

#### Scenario: Heading content

- **GIVEN** the Galette page is rendered
- **WHEN** the page loads
- **THEN** the heading "Checkbox #04" SHALL be displayed as the main heading

### Requirement: Selection prompt

The system SHALL render a subtitle prompting the user to select items.

#### Scenario: Subtitle content

- **GIVEN** the Galette page is rendered
- **WHEN** the page loads
- **THEN** a subtitle "Select your preferences" or similar prompt SHALL be
  displayed below the heading

### Requirement: Custom checkboxes

The system SHALL render at least 3 custom-styled rectangular checkboxes.

#### Scenario: Checkbox rendering

- **GIVEN** the Galette page is rendered
- **WHEN** the page loads
- **THEN** at least 3 checkbox options SHALL be visible
- **AND** each checkbox SHALL have a text label
- **AND** each checkbox SHALL be toggleable

#### Scenario: Checkbox interaction

- **GIVEN** a checkbox is unchecked
- **WHEN** the user clicks the checkbox
- **THEN** the checkbox SHALL become checked
- **AND** the visual style SHALL change to the checked state (accent color)
- **WHEN** the user clicks the checkbox again
- **THEN** the checkbox SHALL become unchecked

#### Scenario: Default state

- **GIVEN** the Galette page is rendered
- **WHEN** the page loads
- **THEN** all checkboxes SHALL be unchecked by default

### Requirement: Footer with Component Dock link

The system SHALL render a footer containing a link to Component Dock.

#### Scenario: Footer link

- **GIVEN** the Galette page is rendered
- **WHEN** the user views the footer
- **THEN** a link labeled "Component Dock" SHALL be present
- **AND** the link SHALL point to https://www.componentdock.com/
- **AND** the link SHALL open in a new tab

### Requirement: Dark mode support

The system SHALL support dark mode via class-based toggling.

#### Scenario: Dark mode rendering

- **GIVEN** the html element has the "dark" class
- **WHEN** the Galette page is rendered
- **THEN** the page SHALL use dark background and light text colors
