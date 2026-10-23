# Template: Ballot (Custom Checkbox)

Recreation of ColorLib Checkbox 14 (https://colorlib.com/wp/template/checkbox-14/)

## Purpose

Ballot is a custom checkbox template with a checkbox showcase and footer. It recreates the ColorLib **Checkbox 14** design (https://colorlib.com/wp/template/checkbox-14/, preview: https://preview.colorlib.com/theme/bootstrap/checkbox-14/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Source

- **Original:** ColorLib Checkbox 14
- **Preview:** https://preview.colorlib.com/theme/bootstrap/checkbox-14/
- **Category:** Checkbox
- **New name:** Ballot

## Design tokens

- **Font:** Roboto (300, 400, 500, 700)
- **Brand color (accent):** #7e0cf5 (purple)
- **Checkbox indicator bg:** #e6e6e6 (unchecked), #7e0cf5 (checked)
- **Hover indicator bg:** #cccccc
- **Text color:** #26282b (body), headings same
- **Layout:** Centered container, left-aligned content, max-w-md
- **Background:** White (#fff)

## Structure

1. **CheckboxShowcase** — heading ("Checkbox #14") + subtitle + 4 checkbox items
2. **Footer** — template name + Component Dock link

## Checkbox states

| Label              | Default checked | Disabled |
| ------------------ | --------------- | -------- |
| First checkbox     | true            | false    |
| Second checkbox    | false           | false    |
| Disabled           | false           | true     |
| Disabled & checked | true            | true     |

## Requirements

### Feature: CheckboxShowcase

#### Scenario: The heading reads "Checkbox #14"

- **Given** the page loads
- **When** viewing
- **Then** the heading reads "Checkbox #14"

#### Scenario: 4 checkbox inputs are rendered

- **Given** the page loads
- **When** viewing
- **Then** 4 checkbox inputs are rendered

#### Scenario: "First checkbox" is checked by default

- **Given** the page loads
- **When** viewing
- **Then** "First checkbox" is checked by default

#### Scenario: "Second checkbox" is unchecked

- **Given** the page loads
- **When** viewing
- **Then** "Second checkbox" is unchecked

#### Scenario: "Disabled" is unchecked and disabled

- **Given** the page loads
- **When** viewing
- **Then** "Disabled" is unchecked and disabled

#### Scenario: "Disabled & checked" is checked and disabled

- **Given** the page loads
- **When** viewing
- **Then** "Disabled & checked" is checked and disabled

### Feature: Checkbox component

#### Scenario: It toggles checked state

- **Given** a checkbox
- **When** clicking it
- **Then** it toggles checked state

#### Scenario: It starts checked

- **Given** a checkbox with defaultChecked
- **When** the Checkbox component is inspected
- **Then** it starts checked

#### Scenario: It does not toggle

- **Given** a disabled checkbox
- **When** clicking
- **Then** it does not toggle

#### Scenario: The indicator changes color

- **Given** a checkbox
- **When** hovering
- **Then** the indicator changes color

### Feature: Footer

#### Scenario: "Ballot" name appears

- **Given** the page loads
- **When** viewing footer
- **Then** "Ballot" name appears

#### Scenario: Component Dock link points to https://www.componentdock.com/

- **Given** the page loads
- **When** viewing footer
- **Then** Component Dock link points to https://www.componentdock.com/

#### Scenario: Link opens in new tab

- **Given** the page loads
- **When** viewing footer
- **Then** link opens in new tab

### Feature: App

#### Scenario: Document title is "Ballot — Custom Checkbox Template"

- **Given** the page loads
- **When** viewing
- **Then** document title is "Ballot — Custom Checkbox Template"

#### Scenario: Main landmark wraps the showcase

- **Given** the page loads
- **When** viewing
- **Then** main landmark wraps the showcase

#### Scenario: Footer renders with contentinfo role

- **Given** the page loads
- **When** viewing
- **Then** footer renders with contentinfo role

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ballot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ballot/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] CheckboxShowcase — Given** the page loads
- [ ] Checkbox component — Given** a checkbox
- [ ] App — Given** the page loads
