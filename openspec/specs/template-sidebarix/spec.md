# Template: Sidebarix (Sidebar / Profile Layout)

## Purpose

A left-profile-panel sidebar layout with a blog post grid. Recreation of ColorLib Sidebar V02.

- **Source:** https://colorlib.com/wp/template/colorlib-sidebar-v02/
- **Preview:** https://preview.colorlib.com/theme/colorlib-sidebar-v02/ (404 — preview unreachable; design captured from TEMPLATES.md screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v02/` — HTTP 200, 8,848 B, title `Sidebar #1`.
>
> Sheet: `https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v02/css/style.css?v=6d7b392b` (15,347 B).
> Faces it actually declares: `Roboto`, `Segoe UI`, `Helvetica Neue`, `Noto Sans`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
- **Source design:** ColorLib "Colorlib Sidebar V02" — https://colorlib.com/wp/template/colorlib-sidebar-v02/

## Design tokens (from screenshot analysis) — **re-probed 2026-10-23: the demo serves** (measured record below)

| Token             | Value                                     |
| ----------------- | ----------------------------------------- |
| Background        | #ffffff (white)                           |
| Sidebar bg        | #ffffff (white, left panel)               |
| Text primary      | #222222 (near-black)                      |
| Text secondary    | #999999 (light gray, dates, bio)          |
| Verified badge    | #1da1f2 or green-teal accent              |
| Accent / brand    | Clean white minimal — no strong brand color |
| Font family       | System sans-serif (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif) |
| Border radius     | 0 (sharp corners on cards)                |
| Card style        | No visible border/shadow; thumbnail left, text right |
| Sidebar width     | ~300px fixed left column                  |
| Main content      | Remaining width, 2-column grid of posts    |

## Section structure (from screenshot)

1. **Sidebar Profile** — left fixed panel (~300px)
   - Profile photo (large, rounded or square)
   - Name ("Dan Williams") + verified badge
   - Stats row: "892 Photos · 56k Followers"
   - Bio paragraph (lorem ipsum)
   - Favourite Tags (comma-separated tags)
   - Activity ("Professional Photographer")
   - Location ("New York, USA")
   - Fav Profiles (row of small avatar circles)
2. **Main Content** — right area
   - Close (X) button at top-left of content area
   - Blog post grid (2 columns)
   - Each post card: small square thumbnail (left) + title + "Posted: date" (right)
   - 8 posts shown in the screenshot (4 rows × 2 cols)

## Requirements

### Feature: Sidebarix template behaviour

Feature: Sidebarix template layout

Background:
- **GIVEN** the user opens the Sidebarix template page

#### Scenario: Sidebar profile panel renders

- **THEN** a left sidebar panel is visible
- **AND** the sidebar contains a profile photo
- **AND** the sidebar displays the profile name
- **AND** a verified badge is shown next to the name
- **AND** stats (photos count, followers count) are displayed

#### Scenario: Sidebar bio and metadata

- **THEN** a bio paragraph is visible below the stats
- **AND** favourite tags are listed below the bio
- **AND** an activity/occupation line is shown
- **AND** a location is shown

#### Scenario: Fav profiles row

- **THEN** a row of small avatar circles appears at the bottom of the sidebar
- **AND** each avatar is a linked profile

#### Scenario: Main content area renders

- **THEN** the main content area is to the right of the sidebar
- **AND** a close button (X) is visible at the top-left of the content area

#### Scenario: Blog post grid

- **THEN** blog posts are displayed in a 2-column grid
- **AND** each post card shows a thumbnail image on the left
- **AND** each post card shows a title and posted date on the right
- **AND** clicking a post card navigates to the post detail

#### Scenario: Responsive behavior

- **WHEN** the viewport is below 768px
- **THEN** the sidebar becomes a top panel or slide-in drawer
- **AND** the post grid switches to a single column

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
`apps/sidebarix/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sidebarix/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Left sidebar panel renders with profile photo, name, verified badge
- [ ] Stats row shows photo count and follower count
- [ ] Bio, favourite tags, activity, location sections present
- [ ] Fav profiles row renders small avatars
- [ ] Main content area has close button and 2-column post grid
- [ ] Each post card has thumbnail + title + date
- [ ] Responsive: mobile sidebar collapses, grid goes single-column
- [ ] Footer links to Component Dock
- [x] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder images
- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Sidebarix template behaviour — a left sidebar panel is visible
