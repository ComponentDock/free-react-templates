# Template: Toggle (Day/Night Switch Toggle)

## Purpose

Toggle is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 08"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-08/), built under a
DIFFERENT name (Toggle — evoking the day/night toggle switch motif)
per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a day/night switch toggle demo: a centered heading "Toggle #08",
a subtitle "Day & Night Switch Toggle", and two toggle switches (one unchecked,
one checked). The toggle is a pill-shaped track with a circular knob that slides
left/right, showing a moon icon when unchecked and a sun icon when checked.
Golden amber brand color (#f1bc31). White background, Poppins font, single-column
centered layout.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 08" — eighth of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 740 — mark that line `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/checkbox-08/
  (live, successfully fetched HTML + CSS).
- **Visual design (from live preview):** Clean, minimalist demo page on a white
  background. Centered column layout. Black heading "Checkbox #08" (h2, 28px).
  Subtitle "Day & Night Switch Toggle" (18px, semi-transparent black). Two
  toggle switches centered vertically. Each toggle is a 50x30px pill track
  (#e6e6e6 gray, checked: #f6d379 gold) with a 24x24px white circular knob.
  Unchecked knob shows a moon icon (dark circle, white moon). Checked knob
  slides right and shows a sun icon (gold circle, black sun). Smooth CSS
  transitions with cubic-bezier easing. Golden shadow on checked state.
- **Design tokens:**
  - Brand color: `#f1bc31` (golden amber)
  - Brand light: `#f6d379` (light gold, checked track)
  - Track off: `#e6e6e6` (light gray)
  - Knob off: `#ffffff` with `box-shadow: 0 3px 8px rgba(0,0,0,0.2)`
  - Knob on: `#f1bc31` with `box-shadow: 0 3px 8px rgba(241,188,49,0.7)`
  - Font: Poppins (Google Fonts, 300–900)
  - Background: `#ffffff`
  - Body text: `gray` (#6c757d)
  - Heading: `#000`, 28px, weight 400
  - Subtitle: 18px, `rgba(0,0,0,0.5)`

## Requirements

### Requirement: Day/Night toggle switch display

The page SHALL display a centered demo section with heading, subtitle, and
two day/night toggle switches.

#### Scenario: Page renders heading and subtitle

- **WHEN** the page is loaded
- **THEN** the heading "Toggle #08" is visible
- **AND** the subtitle "Day & Night Switch Toggle" is visible

#### Scenario: Two toggle switches are displayed

- **WHEN** the page is loaded
- **THEN** two toggle switches are visible

#### Scenario: Default toggle states

- **WHEN** the page is loaded
- **THEN** the first toggle is unchecked
- **AND** the second toggle is checked

### Requirement: Toggle interaction

Each toggle switch SHALL toggle between checked and unchecked states on click
or keyboard interaction, with visual feedback.

#### Scenario: Clicking an unchecked toggle checks it

- **GIVEN** a toggle switch is unchecked
- **WHEN** the user clicks the toggle
- **THEN** the toggle becomes checked
- **AND** the knob animates to the right

#### Scenario: Clicking a checked toggle unchecks it

- **GIVEN** a toggle switch is checked
- **WHEN** the user clicks the toggle
- **THEN** the toggle becomes unchecked
- **AND** the knob animates to the left

#### Scenario: Toggle displays moon icon when unchecked

- **GIVEN** a toggle switch is unchecked
- **THEN** the toggle knob shows a moon icon

#### Scenario: Toggle displays sun icon when checked

- **GIVEN** a toggle switch is checked
- **THEN** the toggle knob shows a sun icon

#### Scenario: Toggles are keyboard accessible

- **GIVEN** a toggle switch has focus
- **WHEN** the user presses Space
- **THEN** the toggle state changes

### Requirement: Footer

The page SHALL include a footer with a Component Dock link.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is loaded
- **THEN** the footer is visible
- **AND** the footer contains a link to componentdock.com
