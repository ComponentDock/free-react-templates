# Template: FoldKit (Widget / Accordion)

## Purpose

FoldKit is a single-page Bootstrap accordion widget template with four
expandable profile sections, nested navigation links and a clean Roboto
type scale on a light grey page.

It is an original React recreation of the ColorLib "Accordion 15" free
template (source: https://colorlib.com/wp/template/accordion-15/), built
under a DIFFERENT name (**FoldKit**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The reference is a bare widget demo rather than a marketing page: a
centred 700px column on an `#efefef` page, one white card whose rows are
separated by hairline `#efefef` rules, a green `#72c02c` accent for the
active row indicator, `#333333` row labels and `#888888` body copy. The
recreation keeps that minimal widget framing (title bar above, card
below) and adds nothing the original did not have.

Signature behaviours:

1. Four rows — Profile, Messages, Settings, Logout — each a full-width
   button with `aria-expanded` / `aria-controls`.
2. Single-open accordion: opening a row collapses the previously open
   one; clicking an open row collapses it and leaves no row open.
3. The Profile row is open by default (`defaultOpenId="profile"`).
4. Every expanded panel exposes the same nested link list (Profile,
   Messages, Settings, Sales, Marketing).

## Design Tokens

| Token             | Value                | Notes                                     |
| ----------------- | -------------------- | ----------------------------------------- |
| Font family       | `'Roboto', sans-serif` | Page and card typography                |
| Page background   | `#efefef`            | `--color-page` (widget surround)          |
| Card background   | `#ffffff`            | `--color-accordion-bg`                    |
| Row divider       | `#efefef`            | Hairline between rows                     |
| Row label         | `#333333`            | Uppercase-ish bold label                  |
| Body text         | `#888888`            | Expanded panel copy                       |
| Accent            | `#72c02c`            | Active/expanded indicator (green)         |
| Muted text        | `#999999`            | Footer copy                               |
| Radius / shadow   | 0 / subtle           | Flat card, no rounded chrome in reference |

## Requirements

### Requirement 1: Widget Header

The page SHALL show a centred widget header — the `FoldKit Widget` h1 and
the subtitle "Interactive profile and settings accordion interface." — on
the `#efefef` page background.

#### Scenario: Visitor opens the widget

- **WHEN** the page loads
- **THEN** the h1 `FoldKit Widget` and its subtitle are visible, centred,
  above a 700px-wide card
- **AND** the document title is `FoldKit — Interactive Accordion Widget`

### Requirement 2: Four Accordion Rows

The widget SHALL render exactly four accordion rows — Profile, Messages,
Settings, Logout — each exposed as a button with `aria-expanded` and
`aria-controls` pointing at its panel.

#### Scenario: Visitor inspects the rows

- **WHEN** the accordion renders
- **THEN** four buttons are present with the accessible names Profile,
  Messages, Settings and Logout
- **AND** only the Profile row reports `aria-expanded="true"` initially

### Requirement 3: Single-Open Expand / Collapse

Opening a row SHALL collapse any other open row; activating the open row
SHALL collapse it, leaving every row closed.

#### Scenario: Visitor opens a second row

- **WHEN** the visitor activates the Messages row while Profile is open
- **THEN** Messages expands, Profile collapses, and only one panel is in
  the DOM as open

#### Scenario: Visitor closes the open row

- **WHEN** the visitor activates the currently open row
- **THEN** that panel collapses and no row is expanded

### Requirement 4: Nested Links And Keyboard Access

Expanded panels SHALL expose the nested link list — Profile, Messages,
Settings, Sales, Marketing — for all four rows (Logout included), and the
row toggles SHALL be operable by keyboard with a visible focus ring.

#### Scenario: Visitor navigates by keyboard

- **WHEN** a row toggle has focus and Enter or Space is pressed
- **THEN** the row expands or collapses exactly as with a mouse click

### Requirement 5: Component Dock Footer

The footer SHALL link `https://www.componentdock.com/` branded as
"More templates at Component Dock", plus the current year copyright line.

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor scrolls to the footer
- **THEN** a link named "More templates at Component Dock" points at
  `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/foldkit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/foldkit/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/foldkit`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% for `apps/foldkit`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/foldkit`)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` is `foldkit.free.componentdock.com` and `homepage` matches
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Widget Header — the h1 `FoldKit Widget` and its subtitle are visible, centred,
- [ ] Four Accordion Rows — four buttons are present with the accessible names Profile,
- [ ] Single-Open Expand / Collapse — Messages expands, Profile collapses, and only one panel is in
- [ ] Nested Links And Keyboard Access — the row expands or collapses exactly as with a mouse click
