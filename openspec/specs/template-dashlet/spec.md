# Template: Dashlet (Sidebar)

Recreation of ColorLib Sidebar V05 (https://colorlib.com/wp/template/colorlib-sidebar-v05/)

## Purpose

A left-sidebar navigation template with a content grid. The sidebar contains branding, navigation links, and a "Featured Users" section with avatar cards. The main content area shows article cards in a 2-column grid.
- **Source design:** ColorLib "Colorlib Sidebar V05" — https://colorlib.com/wp/template/colorlib-sidebar-v05/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v05/ (HTTP 200, 8,815 B, fetched 2026-10-23) and its theme stylesheet `theme/sidebar/colorlib-sidebar-v05/css/style.css` (15,244 B, sha256 `62402992f63c…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 3 declarations — `a`, `aside .side-inner .logo` |
| Surface | `#ffffff` | 4 declarations — `body`, `aside` |
| Ink / dark surface | `#000000` | 7 declarations — `.close`, `.close:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `50%`, `2px` | `50%` (aside .side-inner .logo); `2px` (.burger:before) |

Palette in order of use: `#000000` ×7, `#ffffff` ×4, `#007bff` ×3, `#0056b3` ×1, `#212529` ×1, `#b1b1b1` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Sidebar navigation

The sidebar SHALL display a logo circle with the initial letter "D", navigation links (Home, Videos, Books, Store), and highlight the active link with a blue left border.

#### Scenario: Active nav link

- **WHEN** the page loads
- **THEN** "Home" SHALL be highlighted as the active navigation link
- **AND** a blue left border SHALL be visible on the active link

#### Scenario: Nav link click

- **WHEN** the user clicks a navigation link
- **THEN** that link SHALL become the active link
- **AND** the previous active link SHALL lose its highlight

### Requirement: Featured users section

The sidebar SHALL display a "Featured Users" section with 8 user cards, each containing an avatar image and a name.

#### Scenario: Featured users display

- **WHEN** the page loads
- **THEN** 8 featured users SHALL be displayed (Matt, Spike, Jassy, William, Johan, Charise, James, Chris)
- **AND** each user SHALL have a circular avatar image and a name

### Requirement: Article grid

The main content area SHALL display 8 article cards in a 2-column responsive grid. Each card SHALL contain a thumbnail image, a title, and a posted date.

#### Scenario: Article grid layout

- **WHEN** the page loads
- **THEN** 8 article cards SHALL be displayed
- **AND** cards SHALL be arranged in a 2-column grid on desktop
- **AND** each card SHALL show a thumbnail, title, and date "Posted: Dec 17, 2019"

### Requirement: Responsive sidebar

On mobile viewports (< 768px), the sidebar SHALL be hidden by default and toggleable via a button.

#### Scenario: Mobile sidebar toggle

- **WHEN** the viewport width is less than 768px
- **THEN** the sidebar SHALL be hidden
- **AND** a toggle button SHALL be visible
- **WHEN** the user clicks the toggle button
- **THEN** the sidebar SHALL slide in as an overlay

#### Scenario: Mobile sidebar close

- **WHEN** the sidebar is open on mobile
- **AND** the user clicks the overlay or close button
- **THEN** the sidebar SHALL slide out and become hidden

### Requirement: Footer with Component Dock link

The page footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a footer SHALL be present
- **AND** the footer SHALL contain a link to "https://www.componentdock.com/" with the text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dashlet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dashlet/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Sidebar navigation — "Home" SHALL be highlighted as the active navigation link
- [ ] Featured users section — 8 featured users SHALL be displayed (Matt, Spike, Jassy, William, Johan, Charise, James, Chris)
- [ ] Article grid — 8 article cards SHALL be displayed
- [ ] Responsive sidebar — the sidebar SHALL be hidden
