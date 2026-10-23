# Overture — Implementation Tasks

Source design: **06 Comming Soon** (`https://colorlib.com/wp/template/06-comming-soon/`) → recreation name **overture**. Shipped at https://overture.free.componentdock.com.

Scope: A Coming Soon template with heading and subtext, countdown timer, notify us button and social media sections. Recreation of ColorLib **06 Comming Soon** (`https://colorlib.com/wp/template/06-comming-soon/`) as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/overture/src/App.tsx`:

### 1. CountdownTimer
- Users SHALL see a countdown timer with 4 units (Days, Hours, Mins, Sec) displayed in white circular elements with pink numbers.
- Scenario — Countdown timer displays:
  - **WHEN** the user visits the Overture page
  - **THEN** a countdown timer with 4 units (Days, Hours, Mins, Sec) is displayed
  - **AND** each unit is shown in a white circular element with pink numbers
  - **AND** the countdown targets a future date (e.g. 30 days from page load)

### 2. NotifyButton
- Users SHALL see a "NOTIFY US" button that shows a thank-you confirmation when clicked.
- Scenario — Notify button displays and responds:
  - **WHEN** the user visits the Overture page
  - **THEN** a "NOTIFY US" button is displayed below the countdown
  - **AND** the button has pink background with white text
  - **AND** clicking the button shows a thank-you confirmation message

### 3. SocialLinks
- Users SHALL see a "Follow us for update" label and 5 social media icon circles with brand colors.
- Scenario — Social links display:
  - **WHEN** the user visits the Overture page
  - **THEN** a "Follow us for update" label is displayed near the bottom
  - **AND** 5 social media icon circles are shown (Facebook, Twitter, Google+, Pinterest, Snapchat)
  - **AND** each icon links to its respective social platform

### 4. Footer
- Users SHALL see a footer link to Component Dock.
- Scenario — Footer link present:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** a link to https://www.componentdock.com/ is visible
  - **AND** the link text reads "More templates at Component Dock"

### Cross-cutting requirements

- **Full-screen hero with background image** — Users SHALL see a full-viewport background image with a dark semi-transparent overlay covering the entire page.
  - Scenario — Background image renders: **WHEN** the user visits the Overture page; **THEN** a full-viewport background image is visible; **AND** a dark semi-transparent overlay covers the image
- **Heading and subtext** — Users SHALL see a centered "Coming Soon" heading and a maintenance status paragraph.
  - Scenario — Heading and subtext display: **WHEN** the user visits the Overture page; **THEN** a heading "Coming Soon" is displayed centered on the page; **AND** a subtext paragraph describes the maintenance status
- **Responsive layout** — Users SHALL see all content centered and readable on mobile devices.
  - Scenario — Mobile layout: **WHEN** the user views the page on a mobile device; **THEN** all content remains centered and readable; **AND** the countdown timer scales down appropriately; **AND** social icons remain visible at the bottom
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/overture/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/overture/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/overture` ships on https://overture.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/overture/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/overture/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/overture/public/CNAME` = `overture.free.componentdock.com`
  and the package `homepage` = `https://overture.free.componentdock.com`.
