# Fmbeat — Implementation Tasks

Source design: **Eighty8** (`https://colorlib.com/wp/template/eighty8/`) → recreation name **fmbeat**. Shipped at https://fmbeat.free.componentdock.com.

Scope: A DJ / Radio Station template with hero, podcast and charts sections. Recreation of ColorLib "Eighty8" template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Component breakdown

Render order as composed in `apps/fmbeat/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle dark mode · Fmbeat

### 2. HeroSlider
- The hero section SHALL display a dark background image with location badges and an auto-advancing carousel.
- Scenario — Hero displays slider with upcoming events:
  - **WHEN** the user visits the page
  - **THEN** a hero section with a dark background image is visible
  - **AND** location badges are displayed at the top (hidden on mobile)
  - **AND** a carousel slider shows items with "Up Next" label and event heading
- Scenario — Hero slider transitions smoothly:
  - **WHEN** 5 seconds elapse
  - **THEN** the slide advances to the next item with a fade animation

### 3. PromoSection
- The promotion section SHALL display three cards in a 3-column grid with background images and overlay headings.
- Scenario — Promotion boxes display three category cards:
  - **WHEN** the user scrolls to the promotion section
  - **THEN** three promo boxes are displayed in a grid
  - **AND** each box shows a background image with a heading overlay ("Our DJ's", "Live Streams", "Events")

### 4. PodcastSection
- The podcast section SHALL display album art, track information, a waveform visualization, and a call-to-action button.
- Scenario — Podcast section shows album art and audio player:
  - **WHEN** the user scrolls to the Latest Podcast section
  - **THEN** a section title "Latest Podcast" with yellow underline is visible
  - **AND** an album art image is displayed on the left
  - **AND** a track name, audio waveform, and "Listen Live" button are visible on the right

### 5. ChartsSection
- The charts section SHALL display a section title with a yellow underline and a background image with logo overlay.
- Scenario — Charts section shows branded banner:
  - **WHEN** the user scrolls to the Charts section
  - **THEN** a section title "Charts" with yellow underline is visible
  - **AND** a large background image with logo overlay is displayed

### 6. Footer
- The footer SHALL display four columns (Locations, Top Shows, Blog, Contact) and a bottom bar with Component Dock attribution.
- Scenario — Footer displays four widget columns:
  - **WHEN** the user scrolls to the footer
  - **THEN** a Locations column with city list is visible
  - **AND** a Top Shows column with numbered list is visible
  - **AND** a Blog column with thumbnail previews is visible
  - **AND** a Contact column with address/phone/email is visible
- Scenario — Footer bottom bar shows copyright:
  - **WHEN** the footer is visible
  - **THEN** a copyright line with Component Dock attribution is displayed
  - **AND** the Component Dock link points to https://www.componentdock.com/

### Cross-cutting requirements

- **Header displays logo, navigation, and social icons** — The header SHALL display a dark background bar with the Fmbeat logo, six navigation links, and social media icons.
  - Scenario — Header renders all elements: **WHEN** the user visits the page; **THEN** a dark header bar is visible at the top; **AND** the site logo "Fmbeat" is displayed on the left; **AND** navigation links (Home, About, Charts, DJs, Blog, Contact) are visible; **AND** social media icons (Twitter, SoundCloud, Instagram, Facebook, YouTube) are displayed on the right
  - Scenario — Header is responsive on mobile: **WHEN** the user views on a mobile viewport; **THEN** a hamburger menu icon is displayed; **AND** when the user taps the hamburger icon the navigation menu opens
- **Layout adapts to mobile viewport** — The template SHALL be responsive and stack columns vertically on mobile viewports.
  - Scenario — Layout adapts to mobile viewport: **WHEN** the user views the page on a 375px wide viewport; **THEN** the location badges are hidden; **AND** the header shows a hamburger menu; **AND** promotion boxes stack vertically; **AND** the podcast section stacks vertically; **AND** footer columns stack vertically
- **Design tokens match original template** — The template SHALL use the specified design tokens: brand yellow #ffe400, dark backgrounds, Roboto font, and yellow-accented buttons.
  - Scenario — Colors and typography are correct: **WHEN** the page renders; **THEN** the brand accent color is yellow (#ffe400); **AND** section backgrounds use dark palette (#212121, #191919, #1a1a1a); **AND** the font family is Roboto; **AND** section titles have yellow underlines
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fmbeat/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fmbeat/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/fmbeat` ships on https://fmbeat.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fmbeat/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fmbeat/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fmbeat/public/CNAME` = `fmbeat.free.componentdock.com`
  and the package `homepage` = `https://fmbeat.free.componentdock.com`.
