# Synod — Implementation Tasks

Source design: **Church Wordpress Themes** (`https://colorlib.com/wp/template/church-wordpress-themes/`) → recreation name **synod**. Shipped at https://synod.free.componentdock.com.

Scope: Recreate the ColorLib "Church WordPress Themes" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page church landing template under the name "Synod". The original preview was unreachable; the design is derived from the ColorLib screenshot.

## Component breakdown

Render order as composed in `apps/synod/src/App.tsx`:

### 1. Navbar
- The template SHALL render a dark countdown bar at the top showing time remaining to an event, a navbar with logo, desktop navigation links, search icon, and a red "Donate" button. The mobile hamburger menu SHALL toggle open/closed on click and close when a link is tapped.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a wide screen
  - **THEN** the navbar displays the Synod logo, links (Home, About, Ministries, Sermons, Events, Gallery, News, Giving), a search icon, and a Donate button
- Scenario — Mobile menu toggle:
  - **WHEN** a user clicks the hamburger menu button
  - **THEN** the mobile navigation panel becomes visible and the button label changes to "Close menu"
- Scenario — Mobile menu closes on link click:
  - **WHEN** the mobile menu is open and a user clicks a nav link
  - **THEN** the mobile navigation panel closes

### 2. Hero
- The template SHALL display a full-width hero section with a background image, a large heading, subtitle text, and a "Join us" CTA button linking to the about section. Decorative slide arrows SHALL be rendered.
- Scenario — Hero content renders:
  - **WHEN** the hero section is visible
  - **THEN** the heading "Synod — A Place of Faith", subtitle, background image, and "Join us" button are displayed

### 3. Sermon
- The template SHALL display a sermon section with a circular pastor avatar, a red quote heading, sermon metadata (speaker, date, category), and four media action buttons (watch, listen, gallery, links).
- Scenario — Sermon content renders:
  - **WHEN** the sermon section is visible
  - **THEN** the pastor photo, quote, speaker name, date, and category are displayed with four media buttons

### 4. About
- The template SHALL render a two-column about section with an image on the left and heading, paragraphs, and a "Read More" link on the right.
- Scenario — About section renders:
  - **WHEN** the about section is visible
  - **THEN** the image, heading "Welcome to Synod Church", two paragraphs, and "Read More" link are displayed

### 5. Features
- The template SHALL display a three-column grid of feature cards, each with an icon, title, and description text.
- Scenario — Three features render:
  - **WHEN** the features section is visible
  - **THEN** three cards are displayed with titles "Spread Love", "Bible Study", and "Community"

### 6. Events
- The template SHALL show upcoming church events in a grid, each with a date, title, and location.
- Scenario — Events render:
  - **WHEN** the events section is visible
  - **THEN** at least three events are displayed with dates and locations

### 7. Footer
- The template SHALL render a dark footer with three columns (about, quick links, contact info), a copyright line, and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** the footer is visible
  - **THEN** a link labeled "More templates at Component Dock" points to https://www.componentdock.com/
- Scenario — Footer renders contact info:
  - **WHEN** the footer is visible
  - **THEN** the address, phone number, and email are displayed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/synod/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/synod/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/synod` ships on https://synod.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/synod/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/synod/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/synod/public/CNAME` = `synod.free.componentdock.com`
  and the package `homepage` = `https://synod.free.componentdock.com`.
