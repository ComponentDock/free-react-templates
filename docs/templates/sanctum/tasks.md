# Sanctum — Implementation Tasks

Source design: **Wisdom** (`https://colorlib.com/wp/template/wisdom/`) → recreation name **sanctum**. Shipped at https://sanctum.free.componentdock.com.

Scope: Sanctum is a single-page church website with a hero, a bible-study countdown, a services grid, video sermon cards, testimonies, event dates and blog. It recreates the ColorLib **Wisdom** design (https://colorlib.com/wp/template/wisdom/).

## Component breakdown

Render order as composed in `apps/sanctum/src/App.tsx`:

### 1. Navbar
- The page SHALL display a dark navbar with the site name "Sanctum Church" and navigation links (Home, About, Events, Sermons, Blog, Contact). A mobile hamburger menu SHALL toggle an expandable mobile nav.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads
  - **THEN** the site name "Sanctum Church" is visible
  - **AND** all six navigation links are present
- Scenario — Mobile menu toggles on click:
  - **WHEN** the hamburger button is clicked
  - **THEN** the mobile navigation opens
  - **AND** clicking a link closes the menu

### 2. Hero
- The page SHALL display a full-height hero with a background image, dark overlay, heading "Needing Jesus Christ Together", and a CTA link "Save your spirit".
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** the heading "Needing Jesus Christ Together" is visible
  - **AND** the CTA link is present

### 3. BibleStudy
- The page SHALL display a "Bible Study" section with a countdown timer and an "Events Details" button.
- Scenario — Countdown and CTA are visible:
  - **WHEN** the page loads
  - **THEN** the "Bible Study" heading is visible
  - **AND** countdown values are displayed
  - **AND** the "Events Details" button is present

### 4. About
- The page SHALL display a split about section with an image (including play button) and text "Loving God, Loving Others and Serving the World".
- Scenario — About content renders:
  - **WHEN** the page loads
  - **THEN** the about heading and paragraphs are visible
  - **AND** the about image is present

### 5. Services
- The page SHALL display a "Giving light to someone" section with four service cards: I'm New Here, Care Ministries, Prayer Request, Podcasts.
- Scenario — All service cards render:
  - **WHEN** the page loads
  - **THEN** four service cards are rendered with unique titles and descriptions

### 6. Newsletter
- The page SHALL display a parallax newsletter section with heading, description, email input, and submit button. Form submission SHALL be prevented (no navigation).
- Scenario — Newsletter form renders and submits safely:
  - **WHEN** the page loads
  - **THEN** the newsletter heading and email input are present
  - **AND** form submission does not navigate away

### 7. Sermons
- The page SHALL display a "Watch our sermons" section with three sermon cards, each having a play button, title, and speaker name. A "Watch all sermons" CTA SHALL be present.
- Scenario — Sermon cards render:
  - **WHEN** the page loads
  - **THEN** three sermon cards are visible with titles and speakers
  - **AND** play buttons are present for each

### 8. Testimonies
- The page SHALL display a "Testimonies" section with cards containing a user photo, quote, name, and role.
- Scenario — Testimony cards render:
  - **WHEN** the page loads
  - **THEN** testimony cards are present with unique quotes, names, and roles

### 9. Counter
- The page SHALL display a "Church Achievements" section with three stat blocks: Churches, Members, Donations.
- Scenario — Counter values render:
  - **WHEN** the page loads
  - **THEN** three counter values and labels are visible

### 10. Events
- The page SHALL display an events section with a background image, "Our latest events" heading, and event entries with date badges.
- Scenario — Event entries render:
  - **WHEN** the page loads
  - **THEN** event titles and date badges are present
  - **AND** the "View Events" CTA is visible

### 11. Blog
- The page SHALL display a "Recent Blog" section with three blog cards showing date, author, comment count, and title.
- Scenario — Blog cards render:
  - **WHEN** the page loads
  - **THEN** three blog cards are rendered with unique titles

### 12. ContactInfo
- The page SHALL display a dark footer with site name, Quick Links, Contact Information, social icons, copyright, and a "Component Dock" link pointing to https://www.componentdock.com/.
- Scenario — Footer renders all elements:
  - **WHEN** the page loads
  - **THEN** the copyright line, Component Dock link, contact info, and social icons are present

### 13. Footer
- The page SHALL display a dark footer with site name, Quick Links, Contact Information, social icons, copyright, and a "Component Dock" link pointing to https://www.componentdock.com/.
- Scenario — Footer renders all elements:
  - **WHEN** the page loads
  - **THEN** the copyright line, Component Dock link, contact info, and social icons are present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sanctum/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sanctum/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sanctum` ships on https://sanctum.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sanctum/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sanctum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sanctum/public/CNAME` = `sanctum.free.componentdock.com`
  and the package `homepage` = `https://sanctum.free.componentdock.com`.
