# Joystick — Implementation Tasks

Source design: **Egames** (`https://colorlib.com/wp/template/egames/`) → recreation name **joystick**. Shipped at https://joystick.free.componentdock.com.

Scope: Joystick is a gaming magazine website template featuring a hero slider, game showcase grid, tabbed monthly picks, video reviews with interactive navigation, latest articles section, and a full footer. It recreates the ColorLib Egames design using React, Tailwind CSS 4, and TypeScript under the "Joystick" brand name.

## Component breakdown

Render order as composed in `apps/joystick/src/App.tsx`:

### 1. Navbar
- Joystick SHALL render a top bar with brand logo, search form, and login link, followed by a sticky dark navigation bar with links (Home, Games, Articles, Reviews, Contact) and social media icons.
- Scenario — Navbar renders brand and navigation links:
  - **WHEN** the page loads
  - **THEN** the brand name "Joystick" is visible in the top bar
  - **AND** navigation links for Home, Games, Articles, Reviews, and Contact are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu expands
  - **AND** clicking it again collapses the menu
- Scenario — Search form submission:
  - **WHEN** the user submits the search form
  - **THEN** the form's default submit behavior is prevented

### 2. Hero
- Joystick SHALL display a full-width hero section with a background image, dark overlay, heading text "The Power of Gaming", and descriptive paragraph.
- Scenario — Hero renders heading and description:
  - **WHEN** the page loads
  - **THEN** the hero heading "The Power of Gaming" is visible
  - **AND** descriptive text about gaming is displayed

### 3. Games
- Joystick SHALL display a 3-column grid of game cards, each with a game image and a "View Games" button.
- Scenario — Games section shows 3 cards:
  - **WHEN** the page loads
  - **THEN** 3 game cards are visible
  - **AND** each card has a "View Games" button

### 4. MonthlyPicks
- Joystick SHALL display a "This Month's Pick" section with three tabs (Popular, Latest, Editor's Pick) that show different game cards when clicked. Each game card shows an image, title, user rating, and genre badge.
- Scenario — Default tab shows popular games:
  - **WHEN** the page loads
  - **THEN** the Popular tab is active by default
  - **AND** games like "Grand Theft Auto V" and "Doom" are visible
- Scenario — Tab switching:
  - **WHEN** the user clicks the "Latest" tab
  - **THEN** the Latest tab becomes active
  - **AND** games like "Elden Ring" are visible
- Scenario — Editor's Pick tab:
  - **WHEN** the user clicks the "Editor's Pick" tab
  - **THEN** games like "Persona 5" are visible

### 5. VideoReviews
- Joystick SHALL display a video reviews section with a vertical list of video items on the left and a main video preview area on the right. Clicking a video item updates the active selection and main preview.
- Scenario — Default video selection:
  - **WHEN** the page loads
  - **THEN** the first video is highlighted as active
  - **AND** a play button is visible in the main video area
- Scenario — Video switching:
  - **WHEN** the user clicks a different video item
  - **THEN** that video becomes highlighted as active

### 6. LatestArticles
- Joystick SHALL display a "Latest Articles" section with article cards (thumbnail, title, date, comment count, excerpt) and a sidebar with a deal/promo widget.
- Scenario — Articles render correctly:
  - **WHEN** the page loads
  - **THEN** 3 articles are visible with titles, dates, and excerpts
  - **AND** a "This week's deal" sidebar is visible

### 7. Footer
- Joystick SHALL render a 4-column footer with brand description, Game Reviews links, Useful Links, and What's New links. The copyright bar MUST link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders all columns:
  - **WHEN** the page loads
  - **THEN** Game Reviews, Useful Links, and What's New columns are visible
  - **AND** the copyright contains a link to Component Dock
- Scenario — Footer nav links:
  - **WHEN** the page loads
  - **THEN** footer navigation links (Home, Games, Articles, Reviews, Contact) are visible

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/joystick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/joystick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/joystick` ships on https://joystick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/joystick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/joystick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joystick/public/CNAME` = `joystick.free.componentdock.com`
  and the package `homepage` = `https://joystick.free.componentdock.com`.
