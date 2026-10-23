# Template: Overture (Coming Soon)

## Purpose

A Coming Soon template with heading and subtext, countdown timer, notify us button and social media sections. Recreation of ColorLib **06 Comming Soon** (`https://colorlib.com/wp/template/06-comming-soon/`) as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Preview URL:** `https://preview.colorlib.com/theme/06-comming-soon/` (404 — preview unavailable; design extracted from screenshot)
- **Source screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-21.jpg`
- **App name:** `overture`
- **Package:** `@free-react-templates/overture`
- **Deploy URL:** `https://overture.free.componentdock.com`

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/06-comming-soon/index.html` | HTTP 200 · 4,984 B |
| stylesheet | `https://colorlib.com/etc/cs/06-comming-soon/css/style.css?v=97cb11f3` | HTTP 200 · 9,497 B · sha256 `4bdcddf752e0` |

**Live palette** (hex × occurrences across the sheets): `#f84982`×3.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#e91e63`, `#fffc00`.

## Requirements

### Requirement: Full-screen hero with background image

Users SHALL see a full-viewport background image with a dark semi-transparent overlay covering the entire page.

#### Scenario: Background image renders

- **WHEN** the user visits the Overture page
- **THEN** a full-viewport background image is visible
- **AND** a dark semi-transparent overlay covers the image

### Requirement: Heading and subtext

Users SHALL see a centered "Coming Soon" heading and a maintenance status paragraph.

#### Scenario: Heading and subtext display

- **WHEN** the user visits the Overture page
- **THEN** a heading "Coming Soon" is displayed centered on the page
- **AND** a subtext paragraph describes the maintenance status

### Requirement: Countdown timer

Users SHALL see a countdown timer with 4 units (Days, Hours, Mins, Sec) displayed in white circular elements with pink numbers.

#### Scenario: Countdown timer displays

- **WHEN** the user visits the Overture page
- **THEN** a countdown timer with 4 units (Days, Hours, Mins, Sec) is displayed
- **AND** each unit is shown in a white circular element with pink numbers
- **AND** the countdown targets a future date (e.g. 30 days from page load)

### Requirement: Notify Us button

Users SHALL see a "NOTIFY US" button that shows a thank-you confirmation when clicked.

#### Scenario: Notify button displays and responds

- **WHEN** the user visits the Overture page
- **THEN** a "NOTIFY US" button is displayed below the countdown
- **AND** the button has pink background with white text
- **AND** clicking the button shows a thank-you confirmation message

### Requirement: Social media links

Users SHALL see a "Follow us for update" label and 5 social media icon circles with brand colors.

#### Scenario: Social links display

- **WHEN** the user visits the Overture page
- **THEN** a "Follow us for update" label is displayed near the bottom
- **AND** 5 social media icon circles are shown (Facebook, Twitter, Google+, Pinterest, Snapchat)
- **AND** each icon links to its respective social platform

### Requirement: Responsive layout

Users SHALL see all content centered and readable on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the user views the page on a mobile device
- **THEN** all content remains centered and readable
- **AND** the countdown timer scales down appropriately
- **AND** social icons remain visible at the bottom

### Requirement: Component Dock footer

Users SHALL see a footer link to Component Dock.

#### Scenario: Footer link present

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link text reads "More templates at Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/overture/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/overture/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Full-screen hero with background image — a full-viewport background image is visible
- [x] Heading and subtext — a heading "Coming Soon" is displayed centered on the page
- [ ] Countdown timer — a countdown timer with 4 units (Days, Hours, Mins, Sec) is displayed
- [x] Notify Us button — a "NOTIFY US" button is displayed below the countdown
- [x] Social media links — a "Follow us for update" label is displayed near the bottom
- [ ] Responsive layout — all content remains centered and readable
