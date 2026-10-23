# Headliner — Implementation Tasks

Source design: **Awesome Magazine** (`https://colorlib.com/wp/template/awesome-magazine/`) → recreation name **headliner**. Shipped at https://headliner.free.componentdock.com.

Scope: Recreation of the ColorLib "Awesome Magazine" template as a React 19 + Vite + Tailwind 4 + TypeScript application. The original is a responsive online magazine / newspaper template with a clean, minimal editorial aesthetic.

## Component breakdown

Render order as composed in `apps/headliner/src/App.tsx`:

### 1. TopBar
- Users SHALL see a top bar with a blue (#1a73e8) background containing a search input on the left and social media icons (Twitter, Facebook, Pinterest) on the right.
- Scenario — Top bar renders with search input:
  - **WHEN** a user loads the page
  - **THEN** the top bar displays a search input with placeholder "Search Your Interest..."
  - **AND** the search input is labeled for accessibility
- Scenario — Social media icons render:
  - **WHEN** a user loads the page
  - **THEN** Twitter, Facebook, and Pinterest icon links are visible in the top bar

### 2. Header
- Users SHALL see a centered site title "Headliner" in Playfair Display serif font with navigation links (About, Contact, Log In Or Sign Up) right-aligned.
- Scenario — Header renders the site title:
  - **WHEN** a user loads the page
  - **THEN** the heading "Awesome Magazine" is visible in the header area
- Scenario — Header navigation links render:
  - **WHEN** a user loads the page
  - **THEN** About, Contact, and Log In Or Sign Up links are visible

### 3. CategoryNav
- Users SHALL see a horizontal category navigation bar with links: Lifestyle, Business, Fashion, Design, Health, Harmful, Technology, Travel, Food, Creative. Links are uppercase with medium font weight.
- Scenario — Category nav renders all categories:
  - **WHEN** a user loads the page
  - **THEN** all 10 category links are visible and uppercase
- Scenario — Mobile category toggle:
  - **WHEN** a user clicks the hamburger menu button on mobile
  - **THEN** the category list expands/collapses

### 4. TrendingGrid
- Users SHALL see a 4-column grid of trending article cards, each with a large image, a "TRENDING" badge, and a headline.
- Scenario — Trending grid renders 4 cards:
  - **WHEN** a user loads the page
  - **THEN** 4 trending article cards are displayed in a single row
- Scenario — Each card has image, badge, and headline:
  - **WHEN** a trending card renders
  - **THEN** it shows a picsum.photos placeholder image, a "TRENDING" label, and a headline

### 5. LatestPosts
- Users SHALL see a "LATEST POSTS" section with a featured post on the left and two smaller posts on the right.
- Scenario — Latest posts heading and layout:
  - **WHEN** a user scrolls to the latest posts section
  - **THEN** the "LATEST POSTS" heading is visible
  - **AND** a featured post with a large image is shown on the left
  - **AND** two smaller posts with category badges and excerpts are shown on the right
- Scenario — All images use placeholders:
  - **WHEN** any image renders in the latest posts section
  - **THEN** it uses a deterministic picsum.photos placeholder URL

### 6. Footer
- Users SHALL see a dark footer with a copyright line and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** a user scrolls to the footer
  - **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible
- Scenario — Footer renders copyright:
  - **WHEN** a user scrolls to the footer
  - **THEN** copyright text with the current year and "Headliner Magazine" is visible

### Cross-cutting requirements

- **Responsive layout on mobile** — Users SHALL see a responsive layout where category nav collapses to a hamburger menu, trending cards stack vertically, and latest posts stack vertically.
  - Scenario — Mobile viewport layout: **WHEN** a user loads the page on a viewport width of 375px; **THEN** the category navigation shows a hamburger menu toggle; **AND** trending article cards stack vertically
- **No ColorLib references in app code** — The application SHALL NOT contain any references to "colorlib" in source files, comments, or data. Provenance lives only in the spec and TEMPLATES.md.
  - Scenario — Clean app source: **WHEN** any file under apps/headliner/ is inspected; **THEN** no strings contain "colorlib" (case-insensitive)
- **Tailwind theme tokens** — The application SHALL define design tokens in @theme matching the original design: brand accent (#1a73e8), body text (#26282b), trending badge (#e74c3c), border (#eeeeee), Playfair Display for headings, Poppins for body.
  - Scenario — Theme tokens are defined: **WHEN** the index.css is compiled; **THEN** brand, ink, accent, border, and font tokens are available

## Verification

- [x] `apps/headliner` ships on https://headliner.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/headliner/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/headliner/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/headliner/public/CNAME` = `headliner.free.componentdock.com`
  and the package `homepage` = `https://headliner.free.componentdock.com`.
