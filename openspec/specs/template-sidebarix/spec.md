# Template: Sidebarix (Sidebar / Profile Layout)

## Purpose

A left-profile-panel sidebar layout with a blog post grid. Recreation of ColorLib Sidebar V02.

- **Source:** https://colorlib.com/wp/template/colorlib-sidebar-v02/
- **Preview:** https://preview.colorlib.com/theme/colorlib-sidebar-v02/ (404 — preview unreachable; design captured from TEMPLATES.md screenshot)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (from screenshot analysis)

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

## Verification checklist

- [ ] Left sidebar panel renders with profile photo, name, verified badge
- [ ] Stats row shows photo count and follower count
- [ ] Bio, favourite tags, activity, location sections present
- [ ] Fav profiles row renders small avatars
- [ ] Main content area has close button and 2-column post grid
- [ ] Each post card has thumbnail + title + date
- [ ] Responsive: mobile sidebar collapses, grid goes single-column
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder images
