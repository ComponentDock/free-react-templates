---
name: huddle
description: >
  Huddle is a conference/event landing page template — a React 19 + Tailwind CSS 4
  recreation of the ColorLib "Confe" template.
template: conference-event
tags: [conference, event, landing, speakers, countdown]
---

# Template: Huddle (Conference Event Landing)

## Purpose

Huddle recreates the ColorLib "Confe" conference template under a new name.
It is a single-page conference/event landing site with sticky navbar, hero with
background image overlay, countdown, speakers grid, features, sponsors, event
cards, quick-contact bar, and dark footer with Component Dock branding.

**Source:** Recreation of ColorLib "Confe" (https://colorlib.com/wp/template/confe/)

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/confe/ (HTTP 200, 29,878 B, fetched 2026-10-23) and its theme stylesheet `theme/confe/css/style.css` (19,555 B, sha256 `ea61cdd19e43…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f23a2e` | 7 declarations — `.form-control:focus`, `.form-control:active` |
| Surface | `#ffffff` | 13 declarations — `.site-footer a:hover`, `.site-navbar .site-navigation .site-menu .has-children .dropdown a` |
| Ink / dark surface | `#000000` | 15 declarations — `h1`, `h2` |
| Typeface | `"Roboto Mono", SFMono-Regular` (1 rule — body)<br>`"Work Sans", sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `line-height: 1.7; color: rgba(0, 0, 0, 0.5); font-weight: 400; font-size: 1rem` | `body{…}` rule |
| Radii | `50%`, `30px !important`, `4px` | `50%` (.site-mobile-menu .site-nav-wrap .arrow-collapse); `30px !important` (.btn.pill); `4px` (#date-countdown .countdown-block) |

Palette in order of use: `#000000` ×15, `#ffffff` ×13, `#f23a2e` ×7, `#cccccc` ×2, `#212529` ×1, `#25262a` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders all major sections

The page SHALL display navbar, hero, about, image split, speakers, features, sponsors, events, quick contact, and footer sections in that order.

#### Scenario: All sections present

- **WHEN** a user visits the Huddle page
- **THEN** the navbar with logo "huddle." and navigation links is visible
- **AND** the hero section shows heading, date, and CTA button
- **AND** the about section shows countdown timer
- **AND** the speakers section shows 6 speaker cards
- **AND** the features section shows 3 feature items
- **AND** the sponsors section shows 6 sponsor placeholders
- **AND** the events section shows 3 event cards
- **AND** the quick contact bar shows Where/When/Email
- **AND** the footer contains a link to Component Dock

### Requirement: Navbar is sticky and responsive

The navbar SHALL be fixed at the top, white background, with mobile hamburger menu.

#### Scenario: Desktop navigation

- **WHEN** a user views the page on desktop
- **THEN** all navigation links are visible without a hamburger menu

#### Scenario: Mobile navigation

- **WHEN** a user views the page on mobile
- **THEN** a hamburger menu button is shown
- **AND** clicking it reveals the navigation links

### Requirement: Countdown timer displays and updates

The about section SHALL show a countdown to the conference date with days, hours, minutes, seconds that update every second.

#### Scenario: Countdown displays values

- **WHEN** a user views the about section
- **THEN** four countdown blocks are shown (Days, Hours, Minutes, Seconds)
- **AND** each block displays a numeric value

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer branding

- **WHEN** a user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/huddle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/huddle/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar is sticky and responsive — all navigation links are visible without a hamburger menu
- [ ] Countdown timer displays and updates — four countdown blocks are shown (Days, Hours, Minutes, Seconds)
