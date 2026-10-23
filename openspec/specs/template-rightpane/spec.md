# Template: Rightpane (Sidebar Navigation)

Recreation of ColorLib "Bootstrap Sidebar V10" (https://colorlib.com/wp/template/bootstrap-sidebar-10/).

## Purpose

A Sidebar Navigation template with brand header, navigation items, mountain landscape and main sections. Recreation of **ColorLib Bootstrap Sidebar 10** (`bootstrap-sidebar-10`) as a right-side sidebar navigation template with a mountain landscape background, brand header, nav links, newsletter signup, and footer.

## Design reference (replication findings)

- **Source:** ColorLib "Bootstrap Sidebar V10" — https://colorlib.com/wp/template/bootstrap-sidebar-10/
- **Source slug:** `bootstrap-sidebar-10`
- **Preview URL analyzed:** https://colorlib.com/etc/bootstrap-sidebar/sidebar-10/ — **HTTP 200**, 8,645 B, fetched 2026-10-23 (page `<title>`: "Sidebar 04"). The slug-only path `https://preview.colorlib.com/theme/bootstrap-sidebar-10/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://colorlib.com/etc/bootstrap-sidebar/sidebar-10/css/style.css?v=12d6bffa`, fetched 2026-10-23): brand `#2f89fc`, `#5effc9`, `#007bff`, `#0062cc`; dominant neutrals `#6c757d`, `#212529`, `#495057`; type Poppins, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170724.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/rightpane` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#2f89fc` | live sheet paints it ×20 — `background` on `#sidebar:after`; style.css?v=12d6bffa (17,555 B, sha256 3473a8d2b7cf) · <https://colorlib.com/etc/bootstrap-sidebar/sidebar-10/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Right sidebar layout

The template SHALL display a fixed right-side sidebar at approximately 300px width spanning full viewport height.

#### Scenario: Sidebar visible on right side

- **WHEN** the user loads the Rightpane template
- **THEN** the right sidebar is visible on the right side of the viewport
- **AND** the main content area occupies the remaining space on the left

### Requirement: Brand header

The sidebar SHALL display a brand name "Kenitic" in bold white text with a "Blog Agency" subtitle.

#### Scenario: Brand header display

- **WHEN** the sidebar is visible
- **THEN** "Kenitic" is displayed in bold white text at the top
- **AND** "Blog Agency" is displayed below the brand name

### Requirement: Navigation items

The sidebar SHALL display 5 navigation items (Home, About, Blog, Services, Contacts) each with a lucide-react icon and white text label.

#### Scenario: Navigation items rendered

- **WHEN** the sidebar is visible
- **THEN** the following navigation items are displayed in order: Home, About, Blog, Services, Contacts
- **AND** each item shows an icon on the left and a text label on the right
- **AND** all items have white text

### Requirement: Newsletter section

The sidebar SHALL include a newsletter subscription section with a heading and email input field.

#### Scenario: Newsletter form

- **WHEN** the sidebar is visible
- **THEN** a "Subscribe for newsletter" heading is displayed below the navigation
- **AND** an email input field with placeholder "Enter Email Address" is shown
- **AND** a subscribe button is displayed

### Requirement: Footer with Component Dock link

The sidebar footer SHALL display copyright text and a link to https://www.componentdock.com/.

#### Scenario: Footer content

- **WHEN** the sidebar is visible
- **THEN** a copyright line "Copyright ©2019 All rights reserved" is displayed
- **AND** a "More templates at Component Dock" link points to https://www.componentdock.com/

### Requirement: Toggle button

The main content area SHALL include a blue toggle button that collapses or expands the sidebar.

#### Scenario: Toggle sidebar visibility

- **WHEN** the user clicks the toggle button
- **THEN** the sidebar collapses or expands
- **AND** the main content area adjusts its width accordingly

### Requirement: Mountain landscape background

The sidebar SHALL display a mountain landscape background image with a blue gradient overlay for text readability.

#### Scenario: Background styling

- **WHEN** the sidebar is visible
- **THEN** a mountain landscape background is visible behind a blue gradient overlay
- **AND** all text on the sidebar is readable against the background

### Requirement: Main content area

The main content area SHALL display a heading "Sidebar #04" and body text paragraphs on a white background.

#### Scenario: Content display

- **WHEN** the sidebar is visible
- **THEN** a heading "Sidebar #04" is displayed
- **AND** body text paragraphs are shown below the heading
- **AND** the content area has a white background

### Requirement: Responsive layout

The sidebar SHALL be responsive — on mobile viewports it may be hidden by default with the toggle button accessible to reveal it.

#### Scenario: Mobile viewport

- **WHEN** the user is on a mobile viewport
- **THEN** the sidebar may be hidden by default
- **AND** the toggle button is accessible to reveal the sidebar

### Requirement: Accessibility

The sidebar navigation SHALL be accessible with proper ARIA labels and semantic HTML.

#### Scenario: Accessible navigation

- **WHEN** the sidebar renders
- **THEN** the navigation has an appropriate aria-label
- **AND** icons have aria-hidden="true"
- **AND** form inputs have associated labels

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/rightpane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/rightpane/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Right sidebar layout — the right sidebar is visible on the right side of the viewport
- [x] Brand header — "Kenitic" is displayed in bold white text at the top
- [ ] Navigation items — the following navigation items are displayed in order: Home, About, Blog, Services, Contacts
- [x] Newsletter section — a "Subscribe for newsletter" heading is displayed below the navigation
- [ ] Toggle button — the sidebar collapses or expands
- [ ] Mountain landscape background — a mountain landscape background is visible behind a blue gradient overlay
- [ ] Main content area — a heading "Sidebar #04" is displayed
- [ ] Responsive layout — the sidebar may be hidden by default
- [ ] Accessibility — the navigation has an appropriate aria-label
