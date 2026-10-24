# Template: Regsnap (Registration Forms)

## Purpose

Recreate Colorlib Regform 2 as a React template named Regsnap. This is a food class registration form with a split-screen card layout: hero image on the left, form fields on the right, set against a vibrant red background.

Source: https://colorlib.com/wp/template/colorlib-regform-2/
- **Source design:** ColorLib "Colorlib Regform 2" — https://colorlib.com/wp/template/colorlib-regform-2/

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Regform 2** — https://colorlib.com/wp/template/colorlib-regform-2/
- **Preview**: the `/theme/` family does **not** host this slug
  (`https://preview.colorlib.com/theme/colorlib-regform-2/` → **HTTP 404**). The
  live demo is the form family path
  **`https://colorlib.com/etc/regform/colorlib-regform-2/`** — HTTP 200,
  **5,036 B**, title `Au Register Forms by Colorlib`. (An earlier revision of
  this spec said "preview unreachable"; the DOM was always live, just not under
  `/theme/`.)
- **Stylesheet measured**: `css/style.css?v=9bccf1c0` — **12,022 B** (the only
  theme sheet; self-hosted Roboto 400/500/700 + a `Material-Design-Iconic-Font`
  subset).
- **Measured how**: hex-literal census of that sheet, then the winning rule per
  selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Page red | `#fa4251` | 1 | `.bg-red` — the full-page panel behind the card |
| Action green | `#57b846` | 1 | `.btn--green` — the submit button fill |
| Action green hover | `#4dae3c` | 1 | `.btn--green:hover` |
| Input text | `#808080` | 5 | `input` colour (and the `cl-sel-*` `rgb(128,128,128)` equivalents — the same value written twice) |
| Placeholder | `#aaa` / `#888` | 1 / 1 | placeholder + muted label |
| Lines | `#e5e5e5` / `#ccc` / `#666` | 1 / 2 / 1 | field underline, select arrow, label |
| Card | `#fff` | 3 | white card surface |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `"Roboto", "Arial", "Helvetica Neue", sans-serif` | `body` (14 px, weight 400) + `.font-robo` |
| Field labels | 16 px, weight **500**, `rgb(128,128,128)` | `.cl-sel-0` / `.cl-sel-1` |
| Button label | 40 px line-height, white, `padding: 0 25px` | `.cl-btn` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Card | white, **`10px`** radius (`×3`), drop shadow, max-width 960 px, split image/form |
| Controls | **`3px`** radius (`×6`) on inputs/selects/button, `4px` on the select dropdown panel |
| Fields | underline-style `input` with no border and no box-shadow, full width |
| Bands | one screen: `#fa4251` page ground → white split card (hero photo left, form right) |

## Requirements

### Requirement: Split-screen card layout

The template SHALL render a centered white card (max-width 960px, 10px radius, drop shadow) on a full-page red (#fa4251) background. On desktop the card is split into a left hero image (29.1%) and a right form body (70.9%). On mobile the card stacks vertically with the image on top.

#### Scenario: Desktop layout

- **GIVEN** the viewport is wider than 768px
- **WHEN** the page loads
- **THEN** the card displays a side-by-side layout with the image on the left and the form on the right

#### Scenario: Mobile layout

- **GIVEN** the viewport is 768px or narrower
- **WHEN** the page loads
- **THEN** the card stacks vertically with the image above the form

### Requirement: Registration form fields

The form SHALL include: Name (text input), Birthdate (text input with calendar icon), Gender (select dropdown: Male/Female/Other), Class (select dropdown: Class 1/2/3), Registration Code (text input), and a green Search submit button.

#### Scenario: All fields rendered

- **GIVEN** the page loads
- **WHEN** I inspect the form
- **THEN** the Name, Birthdate, Gender, Class, and Registration Code fields are present
- **AND** the Search button is visible

#### Scenario: Form interaction

- **GIVEN** the form is displayed
- **WHEN** I type in the Name field
- **THEN** the Name field updates with the entered text

#### Scenario: Select interactions

- **GIVEN** the form is displayed
- **WHEN** I select "Male" from the Gender dropdown
- **THEN** the Gender dropdown shows "Male"
- **WHEN** I select "Class 2" from the Class dropdown
- **THEN** The Class dropdown shows "Class 2"

#### Scenario: Form submission

- **GIVEN** the form is displayed
- **WHEN** I click the Search button
- **THEN** the form submits without error

### Requirement: Footer branding

The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/ that opens in a new tab.

#### Scenario: Footer link present

- **GIVEN** the page loads
- **WHEN** I scroll to the footer
- **THEN** a link to componentdock.com is visible with target="_blank"

### Requirement: Design fidelity

The template SHALL use Roboto font (Google Fonts), a vibrant red (#fa4251) page background, white card, bottom-border-only inputs (#e5e5e5), green (#57b846) submit button with 3px border-radius, and placeholder images from picsum.photos (seeded).

#### Scenario: Design tokens applied

- **GIVEN** the page loads
- **WHEN** I inspect the page
- **THEN** the background color is red (#fa4251)
- **AND** the form card has a white background with rounded corners and shadow
- **AND** inputs have bottom borders only

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regsnap/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regsnap/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-screen card layout — the card displays a side-by-side layout with the image on the left and the form on the right
- [ ] Registration form fields — the Name, Birthdate, Gender, Class, and Registration Code fields are present
- [ ] Design fidelity — the background color is red (#fa4251)
