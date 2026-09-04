# Template: Checkmark (Custom Checkbox Showcase)

## Purpose

Checkmark is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 07"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-07/), built under a
DIFFERENT name (Checkmark — evoking the checkbox/checkmark visual motif)
per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a custom checkbox showcase demo: a centered heading "Checkbox #07",
a subtitle describing the template, and three themed sections (Profile Settings,
Notifications, Privacy) each containing 3 color-variant custom checkboxes.
The design is clean, white-background, Poppins font, single-column centered layout
with a violet accent palette.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 07" — seventh of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 739 — mark that line `[x]` when done).
- **Preview URL caveat:** the pattern
  `https://preview.colorlib.com/theme/checkbox-07/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview may be unreachable. Design is inferred from the
  TEMPLATES.md description and the visual progression of the Checkbox series.
- **Visual design (inferred from series progression + description):**
  Clean, minimalist demo page on a white background. Centered column layout.
  Black heading "Checkbox #07" (h1). Subtitle "Custom styled checkboxes with
  color variants". Below, 3 themed sections each with 3 custom checkboxes in
  different color variants (violet, emerald, rose, amber, sky). Each checkbox
  has a rounded container, custom check icon, and smooth toggle animation.
  Checked state shows a filled accent color background with white checkmark.
  Poppins font family. Footer with "Component Dock" link.
- **Design tokens:**
  - Brand color: `#7c3aed` (violet accent for primary variant)
  - Supporting colors: emerald (#10b981), rose (#f43f5e), amber (#f59e0b), sky (#0ea5e9)
  - Font: Poppins (Google Fonts)
  - Background: `#fafafa` light / `#030712` dark
  - Checked container: rounded-xl with subtle ring animation

## Requirements

### Requirement: Renders the main heading and subtitle

The template SHALL display a centered heading "Checkbox #07" and a subtitle
"Custom styled checkboxes with color variants" at the top of the page.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Checkbox #07" is rendered at level 1

#### Scenario: Subtitle is visible

- **WHEN** the page loads
- **THEN** the text "Custom styled checkboxes with color variants" is displayed

### Requirement: Renders all checkbox sections and options

The template SHALL display 3 themed sections (Profile Settings, Notifications,
Privacy), each containing exactly 3 custom checkboxes, for a total of 9
checkbox options.

#### Scenario: All sections are rendered

- **WHEN** the page loads
- **THEN** headings for "Profile Settings", "Notifications", and "Privacy" are visible

#### Scenario: All 9 checkboxes are present

- **WHEN** the page loads
- **THEN** 9 checkbox inputs are rendered in the DOM

### Requirement: Checkboxes have correct default states

Two checkboxes SHALL be pre-checked by default: "Email notifications" and
"Share activity with friends". All other checkboxes SHALL be unchecked.

#### Scenario: Pre-checked checkboxes

- **WHEN** the page loads
- **THEN** "Email notifications" is checked
- **AND** "Share activity with friends" is checked

#### Scenario: Other checkboxes unchecked

- **WHEN** the page loads
- **THEN** "Enable two-factor authentication" is unchecked
- **AND** "Show online status" is unchecked
- **AND** "Allow friend requests" is unchecked

### Requirement: Checkboxes toggle on click

Each checkbox SHALL toggle its checked state when clicked.

#### Scenario: Toggle on click

- **WHEN** I click "Enable two-factor authentication"
- **THEN** "Enable two-factor authentication" becomes checked

#### Scenario: Untoggle on second click

- **WHEN** I click "Enable two-factor authentication" twice
- **THEN** "Enable two-factor authentication" becomes unchecked

### Requirement: Footer with Component Dock link

The template SHALL display a footer containing the template name "Checkmark"
and a link to https://www.componentdock.com/ labeled "Component Dock" that
opens in a new tab.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"
- **AND** the link has target="_blank"

#### Scenario: Footer template name

- **WHEN** the page loads
- **THEN** the text "Checkmark" is visible in the footer area
