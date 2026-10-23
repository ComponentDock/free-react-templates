# Wagly — Implementation Tasks

Source design: **Breed** (`https://colorlib.com/wp/template/breed/`) → recreation name **wagly**. Shipped at https://wagly.free.componentdock.com.

Scope: Wagly is a single-page dog-breed landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Breed" website template design (see TEMPLATES.md), built under the new name Wagly with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/wagly/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "wagly", links to the page's sections, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Wagly page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "wagly" and links to About,
  - **AND** the navbar SHALL show a dark-mode toggle button
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. Hero
- The system SHALL render a full-height hero slider with two slides, each with a headline, a short subheading, and two call-to-action buttons, plus prev/next controls.
- Scenario — First slide content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** the first slide SHALL contain a level-1 heading "We Love Pets"
  - **AND** it SHALL show "Get Started" and "Download" buttons
- Scenario — Slide navigation:
  - **GIVEN** the first slide is displayed
  - **WHEN** the user activates the next control
  - **THEN** the second slide SHALL be displayed with the heading "Care for dogs"

### 3. About
- The system SHALL render an about section with a heading, a small sub heading, and two paragraphs of copy.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL contain a heading "It's a Dog Life" and a sub heading
  - **AND** it SHALL show an image beside the text

### 4. Team
- The system SHALL render a team section with a heading and four member cards.
- Scenario — Team content:
  - **GIVEN** the page is rendered
  - **WHEN** the team section is displayed
  - **THEN** it SHALL contain a heading "Every Dog Needs A Good Owner"
  - **AND** it SHALL show the members "Mellisa Howard" and "Mike Richardson"

### 5. Breeds
- The system SHALL render a breed collections section with a heading and six breed cards.
- Scenario — Breed collections content:
  - **GIVEN** the page is rendered
  - **WHEN** the breed collections section is displayed
  - **THEN** it SHALL contain a heading "Dog Breed Collections"
  - **AND** it SHALL show the breeds "German Shepherd", "Labrador", and

### 6. Blog
- The system SHALL render a blog section with a heading and three post cards, each with a date, title, excerpt, and a "Read more" button.
- Scenario — Blog content:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL contain a heading "Recent Blog Post"
  - **AND** it SHALL show the post "How to Train Your Dog" with a "Read more"

### 7. Footer
- The system SHALL render a footer with an about blurb, contact info, quick links, social icons, and a copyright line.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the "About Wagly" blurb, "Contact Info" with a
  - **AND** it SHALL show a copyright line

### Cross-cutting requirements

- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Wagly app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the Navbar in the banner landmark, all; **AND** the document title SHALL be "Wagly — Dog Breed Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/wagly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/wagly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/wagly` ships on https://wagly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/wagly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/wagly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wagly/public/CNAME` = `wagly.free.componentdock.com`
  and the package `homepage` = `https://wagly.free.componentdock.com`.
