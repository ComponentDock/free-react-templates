# Template: BtnMatrix (Bootstrap Buttons 20 / UI Components)

## Purpose

Recreation of ColorLib [Bootstrap Buttons 20](https://colorlib.com/wp/template/bootstrap-buttons-20/) (preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/`).
Design category: UI Components & Buttons Showroom.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons (`lucide-react`).

## Requirements

### Requirement: Style showcase section

The app SHALL display a "Pick Your Style" section with default primary buttons (text, icon, icon-only) and outline primary buttons (text, icon, icon-only).

#### Scenario: User views style options

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees "Pick Your Style" heading and default primary and outline primary buttons with text, icons, and icon-only states

### Requirement: Color variants section

The app SHALL display a "Pick Your Color" section with solid and outline buttons for Primary, Secondary, Tertiary, and Quarternary colors.

#### Scenario: User views color variants

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees "Pick Your Color" heading and buttons for Primary, Secondary, Tertiary, and Quarternary in both solid and outline styles

### Requirement: Social action grid

The app SHALL display a 4-column social action grid with Twitter, Facebook, and Dribbble buttons in standard, outline, rounded, and outline-rounded configurations.

#### Scenario: User interacts with social grid

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees Twitter, Facebook, and Dribbble buttons in 4 variant columns

### Requirement: Social brand buttons

The app SHALL display a "Social Buttons" section with rows for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble featuring icon-only, round, outline, outline-round, and badge count variants.

#### Scenario: User views social badges

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees "Social Buttons" heading and brand buttons with counts and share actions

### Requirement: Footer attribution

The app SHALL display a footer linking to https://www.componentdock.com/.

#### Scenario: User views footer attribution

- **WHEN** the user scrolls to the footer
- **THEN** they see a link pointing to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnmatrix/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnmatrix/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
