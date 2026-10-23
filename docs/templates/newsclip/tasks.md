# Newsclip — Implementation Tasks

Source design: **Thegazette** (`https://colorlib.com/wp/template/thegazette/`) → recreation name **newsclip**. Shipped at https://newsclip.free.componentdock.com.

Scope: NewsClip is a single-page news/magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "TheGazette" news website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/newsclip/src/App.tsx`:

### 1. Header
- The system SHALL render a 3-tier dark header with breaking news ticker, logo, ad banner, and navigation.
- Scenario — Breaking news ticker:
  - GIVEN the header is displayed
  - WHEN the top bar is rendered
  - THEN it SHALL show a "Breaking" label with scrolling news items
  - AND it SHALL show stock ticker values (DOW, S&P, NASDAQ) on the right
- Scenario — Logo and ad:
  - GIVEN the header is displayed
  - WHEN the middle bar is rendered
  - THEN it SHALL show "NewsClip" as a large white wordmark logo
  - AND it SHALL show an advertisement placeholder (728×90)
- Scenario — Navigation:
  - GIVEN the header is displayed
  - WHEN the bottom nav bar is rendered
  - THEN it SHALL show links: Today, Politics, Lifestyle, Travel, Health,
  - AND it SHALL show a search button

### 2. Hero
- The system SHALL render a full-width hero carousel with 4 slides.
- Scenario — Slide content:
  - GIVEN the hero carousel is displayed
  - WHEN a slide is rendered
  - THEN it SHALL show a background photo with overlay, category tag, date,
- Scenario — Navigation controls:
  - GIVEN the hero carousel is displayed
  - WHEN the user navigates
  - THEN it SHALL have prev/next arrows and dot indicators
  - AND it SHALL auto-advance every 5 seconds

### 3. LatestNewsTicker
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest

### 4. MainContent
- The system SHALL render a 2-column layout with featured content and sidebar.
- Scenario — Featured post:
  - GIVEN the main content is displayed
  - WHEN the featured post is rendered
  - THEN it SHALL show a large image, category tag, date, comment count,
- Scenario — Most popular posts:
  - GIVEN the main content is displayed
  - WHEN the popular posts are rendered
  - THEN it SHALL show 2 posts with side-by-side image and text layout
- Scenario — Sidebar widgets:
  - GIVEN the main content sidebar is displayed
  - WHEN widgets are rendered
  - THEN it SHALL show Breaking News (2 image overlay cards),

### 5. CategoryPosts
- The system SHALL render a 3-column category section with featured and text posts.
- Scenario — Category layout:
  - GIVEN the category posts section is displayed
  - WHEN it renders
  - THEN it SHALL show 3 columns with featured posts and text-only posts

### 6. VideoPosts
- The system SHALL render an 8-column grid of video posts with play button overlays and duration labels.
- Scenario — Video grid:
  - GIVEN the video posts section is displayed
  - WHEN it renders
  - THEN it SHALL show video cards in a grid with thumbnails, play buttons, and titles

### 7. Editorial
- The system SHALL render a dark-background editorial carousel with featured posts.
- Scenario — Editorial carousel:
  - GIVEN the editorial section is displayed
  - WHEN it renders
  - THEN it SHALL show a dark background with a featured editorial post
  - AND it SHALL have navigation controls

### 8. Footer
- The system SHALL render a dark footer with 6 widget columns and copyright.
- Scenario — Footer columns:
  - GIVEN the footer is displayed
  - WHEN it is rendered
  - THEN it SHALL show 6 widget areas: Regions, Fashion, Politics, Featured,
- Scenario — Copyright:
  - GIVEN the footer is displayed
  - WHEN the copyright bar is rendered
  - THEN it SHALL show "Component Dock" linking to

### Cross-cutting requirements

- **Latest news ticker** — The system SHALL render a scrolling news ticker with timestamps and headlines.
  - Scenario — Ticker content: GIVEN the latest news ticker is displayed; WHEN the ticker scrolls; THEN it SHALL show timestamps (e.g. "10:40") and headline text; AND it SHALL use a horizontal scrolling marquee effect
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/newsclip/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/newsclip/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [x] `bash scripts/verify-app.sh newsclip` passes (typecheck + lint +; [x] Section order matches the original (header → hero → ticker → main; [x] Tokens wired through `@theme`: brand `#ff084e`, dark bg `#1d1d1d`,; [x] Roboto + PT Serif loaded via Google Fonts `<link>` in `index.html`; [x] Placeholder images use `https://picsum.photos/seed/newsclip-<n>/<w>/<h>`; [x] Footer links to https://www.componentdock.com/; [x] No "colorlib" strings in app source; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/newsclip` ships on https://newsclip.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/newsclip/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/newsclip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newsclip/public/CNAME` = `newsclip.free.componentdock.com`
  and the package `homepage` = `https://newsclip.free.componentdock.com`.
