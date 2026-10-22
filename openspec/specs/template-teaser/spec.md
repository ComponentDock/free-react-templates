# Template: Teaser (Coming Soon Landing)

## Purpose

Teaser is a single-page coming-soon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "08 Comming Soon" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-themed coming-soon page with pink/rose accents and a
warm-brown footer. It features a centered countdown or email-signup hero
area, a prominent pink CTA button, and a dark footer with links and
copyright. Teaser recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "08 Comming Soon" — free coming soon website
  template (source: https://colorlib.com/wp/template/08-comming-soon/).
- **Live preview DOM:** `https://preview.colorlib.com/theme/08-comming-soon/`
  returned HTTP 404 — preview is unreachable.
- **Screenshot analyzed:** TEMPLATES.md screenshot
  (`coming-soon-23.jpg`, 1200×972 px) — the sole reference. Pixel-level
  color sampling performed; design tokens extracted below.
- **Section order (1:1 from screenshot):**
  1. Header band (light, transitioning from white to warm gray): likely
     logo text or simple navigation against a light/warm overlay.
  2. Hero (dark purple/navy, ~y=260–560): centered headline + subtext
     over a dark background, possibly with a background image and overlay.
  3. CTA row (pink accent, ~y=570–610): horizontal pink/rose bar with a
     prominent button or email input — brand color #e15e88 with lighter
     pink band #ffd3f1.
  4. Continued dark area (~y=610–730): likely additional content or
     spacing below the CTA.
  5. Footer (warm brown/terra cotta, ~y=730–880): dark reddish-brown
     footer with red accent #b63841 at center, warm brown tones
     (#422527–#7e4e41), possible navigation links and copyright.
  6. Copyright strip (light gray, ~y=890–920): thin light bar at very
     bottom with copyright text.

- **Design tokens extracted from screenshot pixel analysis:**
  - Brand colors: **#e15e88** (pink/rose primary accent) + **#b63841**
    (red secondary accent/footer CTA).
  - Dark backgrounds: **#1d161d** (darkest), **#282432** (dark purple),
    **#2e2834**, **#3e3842** (medium dark).
  - Footer browns: **#422527** (warm brown) through **#7e4e41**
    (lighter terra cotta).
  - Light neutrals: **#ffffff** (header), **#f5f5f5** (copyright strip),
    **#d6d6d8** (light gray).
  - Pink tint band: **#ffd3f1** (light pink).
  - **Font:** Lato (sans-serif) via Google Fonts — standard for ColorLib
    coming-soon series.
  - **Buttons:** pink filled (#e15e88), likely rounded, centered.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/08-comming-soon/index.html` | HTTP 200 · 4,984 B |
| stylesheet | `https://colorlib.com/etc/cs/08-comming-soon/css/style.css?v=19c47045` | HTTP 200 · 9,480 B · sha256 `1561487e8005` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×5,
`#f84982`×3, `#333333`×2, `#555555`×1, `#e45f74`×1, `#000000`×1,
`#2a61d6`×1, `#3aa4f8`×1, `#f43846`×1, `#8f614a`×1.

**Low-chroma values the sheet actually uses** — `#333333`, `#555555`; any
sampled Tailwind grey above is an approximation of these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#e15e88`, `#b63841`, `#7e4e41`.

## Requirements

### Feature: Teaser — Coming Soon Landing Page

#### Scenario: Page loads with correct meta and title

- **GIVEN** the user navigates to the Teaser page
- **THEN** the page title contains "Teaser"
- **AND** the page has a meta description

#### Scenario: Header displays brand

- **GIVEN** the user views the page
- **THEN** a header section is visible
- **AND** the header contains the site brand name "Teaser"

#### Scenario: Hero section is visible

- **GIVEN** the user scrolls to the hero area
- **THEN** a hero heading is displayed
- **AND** the hero has a dark background

#### Scenario: Countdown or timer element is present

- **GIVEN** the user views the hero section
- **THEN** a countdown or timer component is visible
- **AND** the countdown shows days, hours, minutes, and seconds

#### Scenario: Email signup form is present

- **GIVEN** the user views the CTA area
- **THEN** an email input field is visible
- **AND** a subscribe button is visible
- **AND** the subscribe button is styled with the pink brand color #e15e88

#### Scenario: Email form validates input

- **GIVEN** the user clicks the subscribe button without entering an email
- **THEN** a validation message is shown
- **GIVEN** the user enters "notanemail" in the email field
- **AND** clicks the subscribe button
- **THEN** a validation error is shown

#### Scenario: Footer is visible

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a footer section is visible
- **AND** the footer has a dark warm-brown background

#### Scenario: Footer contains navigation links

- **GIVEN** the user views the footer
- **THEN** navigation links are present in the footer
- **AND** each link is clickable

#### Scenario: Footer contains Component Dock link

- **GIVEN** the user views the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text reads "Component Dock"

#### Scenario: Footer contains copyright

- **GIVEN** the user views the footer
- **THEN** a copyright notice is visible in the bottom strip

#### Scenario: Page is responsive

- **GIVEN** the user views the page at 375px width
- **THEN** all sections are visible without horizontal overflow
- **AND** the layout adapts to the narrow viewport

#### Scenario: Dark mode toggle works

- **GIVEN** the user is on the page
- **WHEN** the user toggles dark mode
- **THEN** the page theme changes appropriately

## Verification checklist

- [ ] Header renders with brand name
- [ ] Hero section with dark background and heading
- [ ] Countdown/timer component functional (days, hours, minutes, seconds)
- [ ] Email signup form with validation
- [ ] Subscribe button with pink #e15e88 styling
- [ ] Footer with dark warm-brown background
- [ ] Footer navigation links
- [ ] Footer Component Dock link (https://www.componentdock.com/)
- [ ] Copyright strip at bottom
- [ ] Responsive layout (375px, 768px, 1280px)
- [ ] Dark mode toggle
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos seeds
- [ ] Google Fonts loaded via <link>
- [ ] Tests at 100% coverage
- [ ] Build passes
