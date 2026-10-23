# Signal — Implementation Tasks

Source design: **07 Comming Soon** (`https://colorlib.com/wp/template/07-comming-soon/`) → recreation name **signal**. Shipped at https://signal.free.componentdock.com.

Scope: Signal is a single-page coming-soon / maintenance page in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/signal/src/App.tsx`:

### 1. EmailSignup
- The system SHALL render a pill-shaped email input with an integrated pink submit button.
- Scenario — Email input and button rendering:
  - **GIVEN** the Signal app is rendered
  - **THEN** an email input area SHALL display (450px wide, 53px tall,
  - **AND** an email input SHALL display with pill shape (`border-radius:
  - **AND** a submit button SHALL be positioned at the right end of the
  - **AND** hovering the submit button SHALL change its background to
- Scenario — Input focus state:
  - **GIVEN** the user focuses the email input
  - **THEN** the input border SHALL change to pink `#f89fbc`

### 2. CountdownTimer
- The system SHALL render a simple countdown timer with four circular units that have a white glow ring.
- Scenario — Timer rendering:
  - **GIVEN** the Signal app is rendered
  - **THEN** a countdown timer SHALL display centered below the email form
  - **AND** each unit SHALL be a white circle (90×90px desktop) with
  - **AND** each unit SHALL display a hot-pink number (`#F84982`,
  - **AND** the countdown SHALL target a configurable end date
- Scenario — Timer expiry:
  - **GIVEN** the countdown timer reaches zero
  - **THEN** the timer SHALL display all zeros — no redirect, no animation

### 3. SocialIcons
- The system SHALL render a row of social media icons at the bottom of the page.
- Scenario — Social icons rendering:
  - **GIVEN** the Signal app is rendered
  - **THEN** a "Follow us for update" label SHALL display at the bottom
  - **AND** a row of social media icons SHALL display below the label
  - **AND** each icon SHALL be a 35×35px circle with its own brand color
  - **AND** hovering an icon SHALL make its background white
- Scenario — Social icons accessibility:
  - **GIVEN** the social icons are rendered
  - **THEN** each icon link SHALL have an accessible label

### 4. Footer
- The system SHALL include the required attribution footer.
- Scenario — Component Dock credit:
  - **GIVEN** the Signal app is rendered
  - **THEN** the footer SHALL link to https://www.componentdock.com/

### Cross-cutting requirements

- **Page shell (full-viewport, no wrapper)** — The system SHALL render a full-viewport layout with a background image filling the entire viewport and a blue-to-pink gradient overlay.
  - Scenario — Desktop layout: **GIVEN** the Signal app is rendered on a desktop viewport (>767px); **THEN** the page SHALL occupy 100% height with no overflow; **AND** the main area SHALL have a full-cover background image with no; **AND** a blue-to-pink gradient overlay SHALL apply via `::after`; **AND** the main area SHALL have `box-shadow: 2px 5px 30px; **AND** all content SHALL be vertically and horizontally centered
  - Scenario — Mobile layout: **GIVEN** a viewport at or below 767px; **THEN** heading font size SHALL reduce from 3.5em to 2.8em; **AND** countdown circles SHALL shrink proportionally; **AND** no horizontal overflow SHALL occur
- **Heading and message** — The system SHALL display a bold heading and a maintenance message.
  - Scenario — Heading and text: **GIVEN** the Signal app is rendered; **THEN** an h1 heading reading "Comming Soon" SHALL display in; **AND** a paragraph of maintenance text SHALL display below the heading; **AND** the paragraph SHALL be white, max-width 500px, centered with
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/signal/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/signal/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] `npm run verify:app -- signal` green: typecheck → lint → vitest; [ ] Visual diff vs the live preview at; [ ] Behavior check: email input focus shows pink border, submit button; [ ] Responsive check at 767px (reduced font sizes, no horizontal; [ ] Gradient overlay: must be blue-to-pink (`#6a82fb` → `#fc5c7d`); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/signal` ships on https://signal.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/signal/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/signal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signal/public/CNAME` = `signal.free.componentdock.com`
  and the package `homepage` = `https://signal.free.componentdock.com`.
