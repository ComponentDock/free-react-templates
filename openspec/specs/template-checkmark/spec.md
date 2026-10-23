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

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/checkbox-07/` | HTTP 200 · 1,439 B · title `Checkbox 07` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/checkbox-07/css/style.css?v=2070c634` | HTTP 200 · 10,045 B · sha256 `d16399aa0c60` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×3,
`#000000`×2, `#212529`×1, `#fafafa`×1, `#e6e6e6`×1, `#d0a8dc`×1,
`#bd83ce`×1.

**Low-chroma values the sheet actually uses** — `#212529`, `#fafafa`,
`#e6e6e6`; any sampled Tailwind grey above is an approximation of these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#7c3aed`.

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/checkmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/checkmark/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
