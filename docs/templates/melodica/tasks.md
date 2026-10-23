# Melodica — Implementation Tasks

Source design: **Music 2** (`https://colorlib.com/wp/template/music-2/`) → recreation name **melodica**. Shipped at https://melodica.free.componentdock.com.

Scope: Melodica is a dark-themed music artist/band landing page template with a deep blue-to-purple gradient color scheme, vibrant accent colors, and music-focused sections. It showcases an artist's brand, tracks, upcoming events, photo gallery, and newsletter signup.

## Component breakdown

Render order as composed in `apps/melodica/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed navigation bar with a logo text, section links (Home, About, Tracks, Events, Gallery, Contact), and a call-to-action button.
- Scenario — Navbar renders on page load:
  - **WHEN** the page loads
  - **THEN** I see a navigation bar at the top with the logo "Melodica" and links to all sections
- Scenario — Navbar contains CTA button:
  - **WHEN** I look at the navigation bar
  - **THEN** I see a call-to-action button (e.g. "Get Tickets")

### 2. Hero
- The template SHALL display a hero section with a large headline, subtitle text, and two call-to-action buttons (primary filled, secondary outline).
- Scenario — Hero displays headline and subtitle:
  - **WHEN** the page loads
  - **THEN** I see a hero section with a large headline "Feel The Music" and a subtitle paragraph
- Scenario — Hero has two CTA buttons:
  - **WHEN** I look at the hero section
  - **THEN** I see two buttons: a primary "Explore Now" button and an outline "Watch Video" button
- Scenario — Primary CTA links to tracks:
  - **WHEN** I click the "Explore Now" button
  - **THEN** the page scrolls to the tracks section

### 3. About
- The template SHALL display an about section with an artist image, bio text, and statistic counters (albums, fans, concerts).
- Scenario — About section shows artist info:
  - **WHEN** I scroll to the about section
  - **THEN** I see an artist image and bio text describing the artist
- Scenario — About section shows statistics:
  - **WHEN** I look at the about section
  - **THEN** I see three stat counters: Albums, Fans, and Concerts with numeric values

### 4. Tracks
- The template SHALL display a tracks section with a grid of featured tracks, each showing an image, title, and play button overlay.
- Scenario — Tracks grid renders:
  - **WHEN** I scroll to the tracks section
  - **THEN** I see a grid of at least 4 track cards with images and titles
- Scenario — Track card has play button:
  - **WHEN** I hover over a track card
  - **THEN** I see a play button icon overlay on the track image

### 5. Events
- The template SHALL display an events section listing upcoming shows with date, venue name, and a ticket button for each event.
- Scenario — Events list renders:
  - **WHEN** I scroll to the events section
  - **THEN** I see a list of upcoming events with date and venue information
- Scenario — Event has ticket button:
  - **WHEN** I look at an event entry
  - **THEN** I see a "Get Tickets" button next to the venue details

### 6. Gallery
- The template SHALL display a gallery section with a responsive grid of placeholder images arranged in 2-3 columns.
- Scenario — Gallery renders images:
  - **WHEN** I scroll to the gallery section
  - **THEN** I see a grid of at least 6 images in a 2-3 column layout

### 7. Newsletter
- The template SHALL display a newsletter section with a heading, email input field, and a subscribe button.
- Scenario — Newsletter form renders:
  - **WHEN** I scroll to the newsletter section
  - **THEN** I see a heading "Subscribe", an email input, and a "Subscribe" button
- Scenario — Newsletter form handles submission:
  - **WHEN** I enter an email address and click "Subscribe"
  - **THEN** the form handles the submission (no page reload)

### 8. Footer
- The template SHALL display a footer with social media links, quick navigation links, and a Component Dock attribution link.
- Scenario — Footer renders:
  - **WHEN** I scroll to the footer
  - **THEN** I see social media icons, quick links, and copyright text
- Scenario — Footer links to Component Dock:
  - **WHEN** I look at the footer
  - **THEN** I see a link to https://www.componentdock.com/ branded as "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/melodica/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/melodica/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/melodica` ships on https://melodica.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/melodica/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/melodica/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/melodica/public/CNAME` = `melodica.free.componentdock.com`
  and the package `homepage` = `https://melodica.free.componentdock.com`.
