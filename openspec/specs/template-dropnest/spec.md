# Template: Dropnest (Bootstrap Dropdowns)

> Recreation of ColorLib Dropdown 19 (https://colorlib.com/wp/template/dropdown-19/).

## Purpose

A dropdown menu designed for online education platforms. The dropdown displays
a trigger button labeled "Courses" and, when opened, reveals three category
columns: Design, Development, and Marketing. Each category has a heading and
a list of course links. The design uses a clean white card with subtle
shadow, category headings in brand color, and muted link text.

Design tokens: Roboto font (300/400/500/700), brand #3fc5f0, hover #12b5ea,
background #fafafa, card #ffffff, text #6c757d, heading #000000,
border rgba(0,0,0,0.1), shadow 0 15px 30px rgba(0,0,0,0.2).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib "Dropdown 19" — https://colorlib.com/wp/template/dropdown-19/
- **Preview**: slug-only `https://preview.colorlib.com/theme/dropdown-19/` returns **HTTP 404**; the live demo is https://preview.colorlib.com/theme/bootstrap/dropdown-19/ — **HTTP 200** on 2026-10-23, title "Dropdown #9". Its `css/style.css` is byte-identical (sha256 `6d6485dcaaf8029c...`, 12,597 bytes) to `dropdown-19/css/style.css` in `https://preview.colorlib.com/downloads/free/dropdown-19.zip`.
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-19.jpg
- **Measured how**: hex-literal census of `dropdown-19/css/style.css` extracted from the official free-template ZIP.

### Colors

| Token                       | Value     | Occurrences | Role                                     |
| --------------------------- | --------- | ----------- | ---------------------------------------- |
| Column accent - Design      | `#007bff` | 5           | Heading + left rule of the first column  |
| Column accent - Development | `#ffc107` | 3           | Heading + left rule of the second column |
| Column accent - Marketing   | `#dc3545` | 3           | Heading + left rule of the third column  |
| Ink                         | `#212529` | 3           | Trigger label, link text                 |
| Muted                       | `#6c757d` | 1           | Secondary link text                      |
| Shadow tone                 | `#16181b` | 1           | Panel shadow                             |
| Surface                     | `#fff`    | 3           | Trigger + dropdown panel                 |

### Typography

| Element | Family   | Evidence                                        |
| ------- | -------- | ----------------------------------------------- |
| All UI  | `Roboto` | 6 `font-family` rules; app loads Roboto 300-700 |

### Shapes & rhythm

| Property | Reference value                                                      |
| -------- | -------------------------------------------------------------------- |
| Radii    | `0.25rem` — dropdown panel corners                                   |
| Panel    | white card, subtle shadow, three link columns with coloured headings |
| Layout   | centred Courses trigger on white -> mega-panel below                 |

### Section order (shipped app, 1:1 with the reference)

`CoursesDropdown -> Footer`

### Delta vs shipped app

- `--color-dropnest-brand: #3fc5f0` (cyan) and `#fafafa` occur **0 times** in the reference stylesheet. The reference column accents are Bootstrap blue `#007bff`, amber `#ffc107`, crimson `#dc3545`.
- Slug `dropdown-19` vs demo label: the live page's own `<title>` is "Dropdown #9" and the TEMPLATES.md screenshot is captioned the same way — one demo, numbering differs between slug and label.

## Requirements

### Requirement: Rendering

The page SHALL render a heading, a Courses trigger button, and a footer with Component Dock branding.

#### Scenario: Page renders correctly

- **WHEN** the app loads
- **THEN** the heading "Dropdown #19" is visible
- **AND** a "Courses" button is visible
- **AND** the footer shows "Dropnest" and a Component Dock link
- **AND** the document title is "Dropnest — Courses Dropdown"

### Requirement: Dropdown open and close

The dropdown SHALL open on trigger click, close on second click, outside click, or Escape key.

#### Scenario: Open dropdown

- **WHEN** the user clicks the Courses trigger
- **THEN** three category columns appear (Design, Development, Marketing)
- **AND** aria-expanded is "true" on the trigger

#### Scenario: Close on second click

- **WHEN** the dropdown is open and the user clicks the trigger again
- **THEN** the dropdown closes and categories are hidden

#### Scenario: Close on outside click

- **WHEN** the dropdown is open and the user clicks outside
- **THEN** the dropdown closes

#### Scenario: Close on Escape

- **WHEN** the dropdown is open and the user presses Escape
- **THEN** the dropdown closes

### Requirement: Category content

Each category SHALL display a heading and at least three course links.

#### Scenario: Course links visible

- **WHEN** the dropdown is open
- **THEN** each category shows its heading and course links
- **AND** all links have href="#"

### Requirement: Customization

The component SHALL accept custom category data via props.

#### Scenario: Custom categories

- **WHEN** custom categories are passed via the categories prop
- **THEN** only those categories are displayed

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dropnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dropnest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Dropdown open and close — three category columns appear (Design, Development, Marketing)
- [ ] Category content — each category shows its heading and course links
- [ ] Customization — only those categories are displayed
