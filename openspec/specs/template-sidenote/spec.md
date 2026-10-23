# Template: Sidenote (Newsletter Sidebar)

Recreation of ColorLib "Colorlib Sidebar V03" (https://colorlib.com/wp/template/colorlib-sidebar-v03/).

## Purpose

A newsletter signup sidebar panel on a bright blue background, with a right-hand email form and a left-hand blog post grid. Recreation of ColorLib Sidebar V03.

## Design reference (replication findings)

- **Source:** ColorLib "Colorlib Sidebar V03" — https://colorlib.com/wp/template/colorlib-sidebar-v03/
- **Source slug:** `colorlib-sidebar-v03`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v03/ — **HTTP 200**, 6,369 B, fetched 2026-10-23 (page `<title>`: "Sidebar #3"). The slug-only path `https://preview.colorlib.com/theme/colorlib-sidebar-v03/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v03/css/style.css?v=8eadd222`, fetched 2026-10-23): brand `#007bff`, `#0062cc`, `#0069d9`, `#0056b3`; dominant neutrals `#6c757d`, `#212529`, `#495057`; type Roboto, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-sidebar-v03.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/sidenote` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Sidebar rendering

The template SHALL render a right-hand sidebar with a bright blue (#4361ee) background, a large heading "Share Your Article to the World", a description paragraph, an email input field, and a "SIGN UP" submit button.

#### Scenario: Sidebar is visible on desktop

- **WHEN** the page loads
- **THEN** the sidebar heading "Share Your Article to the World" is visible
- **AND** the email input field is visible
- **AND** the "SIGN UP" button is visible

### Requirement: Post grid

The template SHALL render a grid of 4 blog post cards in the main content area. Each card SHALL display a thumbnail image, a title, and a posted date.

#### Scenario: Post cards render

- **WHEN** the page loads
- **THEN** 4 article elements are visible
- **AND** each article contains an image, a title, and a date

### Requirement: Newsletter form

The template SHALL provide a newsletter signup form with a required email input and a submit button. The form SHALL prevent default browser submission.

#### Scenario: Email input accepts text

- **WHEN** the user types an email address into the email input
- **THEN** the input field reflects the typed value

#### Scenario: Required email validation

- **WHEN** the user clicks "SIGN UP" without entering an email
- **THEN** the browser's native required validation triggers

### Requirement: Sidebar toggle on mobile

The template SHALL provide a close button (X icon) that toggles the sidebar visibility. On mobile viewports, clicking the close button SHALL hide the sidebar, and clicking the menu button SHALL show it again.

#### Scenario: Close sidebar

- **WHEN** the user clicks the close button
- **THEN** the sidebar is removed from the DOM

#### Scenario: Reopen sidebar

- **WHEN** the sidebar is hidden and the user clicks the menu button
- **THEN** the sidebar reappears

### Requirement: Footer with Component Dock link

The template SHALL render a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a footer link to https://www.componentdock.com/ is visible with text "Component Dock"

### Requirement: Accessibility

The template SHALL provide accessible labels, alt text, and semantic HTML elements.

#### Scenario: Sidebar accessible label

- **WHEN** the page loads
- **THEN** the sidebar has an aria-label "Newsletter signup sidebar"

#### Scenario: Image alt text

- **WHEN** the page loads
- **THEN** all images have descriptive alt text

#### Scenario: Email input label

- **WHEN** the page loads
- **THEN** the email input has an associated label

### Requirement: Document title

The template SHALL set the document title to "Sidenote — Newsletter Sidebar Template" on mount.

#### Scenario: Title is set

- **WHEN** the page loads
- **THEN** the document title contains "Sidenote"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sidenote/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sidenote/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Sidebar rendering — the sidebar heading "Share Your Article to the World" is visible
- [ ] Post grid — 4 article elements are visible
- [ ] Newsletter form — the input field reflects the typed value
- [ ] Sidebar toggle on mobile — the sidebar is removed from the DOM
- [ ] Accessibility — the sidebar has an aria-label "Newsletter signup sidebar"
- [ ] Document title — the document title contains "Sidenote"
