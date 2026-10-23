# Template: Checksnap (Hover-Effect Checkbox Component)

## Purpose

Checksnap is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 16"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-16/), built under a
DIFFERENT name (Checksnap — evoking the snap-click hover interaction) per the
monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a minimal custom checkbox demo: a centered heading "Checkbox #16",
a subtitle describing the template, and four checkbox items demonstrating
different states: checked, unchecked, disabled, and disabled-and-checked.
The distinguishing feature is a hover effect on each checkbox — a subtle scale
and background color change on hover. The design is clean, white-background,
Roboto font, single-column centered layout with a green accent palette.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 16" — sixteenth of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 748 — mark that line `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/checkbox-16/
  (preview unreachable — falling back to page metadata and analogous templates).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-16.jpg
- **Page metadata:** "Free Checkbox w/ Hover Effect Template" — a Bootstrap checkbox
  component demo with hover effects.
- **Visual design (from page description + analogous templates):** Clean,
  minimalist demo page on a white background. Centered column layout. Black
  heading "Checkbox #16" (h1). Four custom checkboxes using Bootstrap
  custom-control styling with hover effects: First checkbox (checked),
  Second checkbox (unchecked), Disabled (unchecked), Disabled & checked.
  Green accent palette (#28a745) for checked state. Hover effect: subtle
  background color change and slight scale on the checkbox container.
  Roboto font family. No footer in the original; we add a "Component Dock"
  footer per monorepo mandate.
- **Design tokens:**
  - Brand color: `#28a745` (Bootstrap success green for checked checkbox)
  - Hover background: `#f0fdf4` (green-50 light tint)
  - Background: `#ffffff` (white)
  - Text: `#212529` (Bootstrap body text)
  - Disabled text: `#6c757d` (Bootstrap muted)
  - Font: Roboto (Google Fonts)
  - Checkbox border: `#dee2e6` unchecked, `#28a745` checked
  - Hover scale: 1.02 on the container

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/checkbox-16/` | HTTP 200 · 1,636 B · title `Checkbox #6` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/checkbox-16/css/style.css?v=de0b5d78` | HTTP 200 · 8,473 B · sha256 `4139253b65ba` |

> ⚠️ the demo's own `<title>` reads `Checkbox #6` though the path is
> `checkbox-16` — the host's titles are not reliable labels; the readings
> above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#007bff`×7,
`#ffffff`×3, `#0056b3`×2, `#cccccc`×2, `#212529`×1, `#6c757d`×1,
`#e6e6e6`×1, `#7b7b7b`×1.

**Low-chroma values the sheet actually uses** — `#cccccc`, `#212529`,
`#6c757d`, `#e6e6e6`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#28a745`.

**App delta (2026-10-23)** — `apps/checksnap/src/index.css` still carries the
screenshot-era palette: a Tailwind green scale 50–950 plus `#28a745` / `#218838`. The live
sheet paints `#007bff` (links, checked border + fill, 20 % disabled fill), hover
`#0056b3`, disabled icon `#7b7b7b`. The app predates the 2026-10-22 re-read, so this is
implementer debt (**APP-DELTA**), not a spec defect; the rows above are the reference's
values.

## Requirements

### Requirement: Renders the main heading and subtitle

The template SHALL display a centered heading "Checkbox #16" and a subtitle
"Hover effect checkbox component demo" at the top of the page.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** a heading with text "Checkbox #16" is rendered at level 1

#### Scenario: Subtitle is visible

- **WHEN** the page loads
- **THEN** the text "Hover effect checkbox component demo" is displayed

### Requirement: Renders four checkbox items with correct states

The template SHALL render four labeled checkboxes: "First checkbox" (checked
by default), "Second checkbox" (unchecked), "Disabled" (unchecked and
disabled), and "Disabled & checked" (checked and disabled).

#### Scenario: Four checkboxes are rendered

- **WHEN** the page loads
- **THEN** 4 checkbox inputs are present

#### Scenario: Default checked state

- **WHEN** the page loads
- **THEN** the first checkbox is checked
- **AND** the second checkbox is unchecked
- **AND** the third checkbox is unchecked
- **AND** the fourth checkbox is checked

#### Scenario: Disabled checkboxes

- **WHEN** the page loads
- **THEN** the third checkbox is disabled
- **AND** the fourth checkbox is disabled

### Requirement: Toggle behavior

The template SHALL toggle a checkbox's checked state when the user clicks
its label or the checkbox itself.

#### Scenario: Clicking an unchecked checkbox checks it

- **GIVEN** I see an unchecked checkbox labeled "Second checkbox"
- **WHEN** I click the label "Second checkbox"
- **THEN** the checkbox becomes checked

#### Scenario: Clicking a checked checkbox unchecks it

- **GIVEN** I see a checked checkbox labeled "First checkbox"
- **WHEN** I click the label "First checkbox"
- **THEN** the checkbox becomes unchecked

#### Scenario: Disabled checkboxes do not toggle

- **GIVEN** I see a disabled checkbox labeled "Disabled"
- **WHEN** I click the label "Disabled"
- **THEN** the checkbox remains unchecked

### Requirement: Hover effect

The template SHALL apply a visual hover effect to each checkbox container
when the user hovers over it.

#### Scenario: Hover effect changes background

- **WHEN** I hover over a checkbox container
- **THEN** the container background changes to a light green tint

### Requirement: Footer with Component Dock link

The template SHALL display a footer with the template name "Checksnap" and
a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer is visible

- **WHEN** the page loads
- **THEN** a footer element is rendered

#### Scenario: Footer contains Component Dock link

- **WHEN** I look at the footer
- **THEN** I see a link with text "Component Dock"
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

#### Scenario: Footer shows template name

- **WHEN** I look at the footer
- **THEN** I see the text "Checksnap"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/checksnap/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/checksnap/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Renders the main heading and subtitle — a heading with text "Checkbox #16" is rendered at level 1
- [ ] Renders four checkbox items with correct states — 4 checkbox inputs are present
- [ ] Toggle behavior — the checkbox becomes checked
- [ ] Hover effect — the container background changes to a light green tint
