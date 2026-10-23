# Newsflow — Implementation Tasks

Source design: **Viral** (`https://colorlib.com/wp/template/viral/`) → recreation name **newsflow**. Shipped at https://newsflow.free.componentdock.com.

Scope: Newsflow is a single-page viral news / magazine website template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/newsflow/src/App.tsx`:

### 1. TopBar
- The template SHALL render a top bar with a welcome message on the left and social media icon links on the right.
- Scenario — Top bar content:
  - **WHEN** the page loads
  - **THEN** a top bar is visible with text "Welcome to Newsflow."
  - **AND** four social media link icons are rendered (Google, Pinterest, Facebook, Twitter)

### 2. Navbar
- The template SHALL render a navigation bar with the site logo, navigation links, a search button, and an "Add Post" CTA button.
- Scenario — Navbar elements:
  - **WHEN** the page loads
  - **THEN** the navbar displays the "Viral Story" logo
  - **AND** six navigation links are visible (Top 10, Pages, Funny, Videos, Don't Miss, Mega Menu)
  - **AND** a search button with aria-label is rendered
  - **AND** an "Add Post" button with orange gradient is rendered
- Scenario — Active nav link:
  - **WHEN** the page loads
  - **THEN** the "Top 10" link is styled as the active link (brand color)

### 3. TrendingStories
- The template SHALL render a trending stories section with three horizontal story cards.
- Scenario — Trending stories content:
  - **WHEN** the page loads
  - **THEN** three trending story cards are visible
  - **AND** each card has a thumbnail image with alt text, a title, and a timestamp
  - **AND** a magenta divider line is rendered below the section

### 4. MainContent
- The template SHALL render a magazine-style content grid with a large feature card and two smaller sidebar cards.
- Scenario — Featured content layout:
  - **WHEN** the page loads
  - **THEN** a large feature card is displayed on the left (2/3 width)
  - **AND** two smaller cards are stacked on the right (1/3 width)
  - **AND** each card has a category badge, title, timestamp, and background image
- Scenario — Category badge colors:
  - **WHEN** a card has a category badge
  - **THEN** the badge displays the category label in white text on a colored background

### 5. MoreStories
- The template SHALL render a "more stories" section with three story cards in a grid.
- Scenario — More stories content:
  - **WHEN** the page loads
  - **THEN** three story cards are displayed in a responsive grid
  - **AND** each card has an image, category badge, title, and timestamp

### 6. Newsletter
- The template SHALL render a newsletter signup section with an email input and subscribe button.
- Scenario — Newsletter form display:
  - **WHEN** the page loads
  - **THEN** a newsletter section with dark background is visible
  - **AND** an email input field and subscribe button are rendered
- Scenario — Newsletter form submission:
  - **WHEN** the user enters a valid email and clicks Subscribe
  - **THEN** a success message "Thanks for subscribing!" is displayed
- Scenario — Newsletter empty email:
  - **WHEN** the user clicks Subscribe without entering an email
  - **THEN** no success message is displayed

### 7. Footer
- The template SHALL render a footer with site info, navigation links, and a link to Component Dock.
- Scenario — Footer content:
  - **WHEN** the page loads
  - **THEN** the footer displays the "Newsflow" brand name
  - **AND** footer navigation links are rendered (About, Contact, Privacy Policy, Terms of Service)
  - **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is rendered with target="_blank"
  - **AND** the footer has role="contentinfo"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/newsflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/newsflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/newsflow` ships on https://newsflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/newsflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/newsflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newsflow/public/CNAME` = `newsflow.free.componentdock.com`
  and the package `homepage` = `https://newsflow.free.componentdock.com`.
