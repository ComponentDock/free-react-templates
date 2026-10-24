# Template: Sidegate (Spec)

## Purpose

Sidegate is a sidebar navigation layout. It recreates the ColorLib "Colorlib Sidebar V08" design (https://colorlib.com/wp/template/colorlib-sidebar-v08/, preview: https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v08/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Overview

Sidegate is a minimal sidebar navigation template recreating ColorLib Sidebar V08. It features a clean white sidebar with profile info and navigation items, paired with a 2-column blog post grid on a light gray background.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-sidebar-v08.zip (HTTP 200, 1,486,269 B, sha256 `500cade7e349…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff7315` | 1 declarations — `aside .side-inner .nav-menu ul li a:before` |
| Surface | `#fcfcfc` | 4 declarations — `aside .side-inner .nav-menu ul li a:hover`, `aside .side-inner .nav-menu ul li.cl-active a` |
| Ink / dark surface | `#000000` | 7 declarations — `.close`, `.close:hover` |
| Typeface | `Roboto` (2 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `2px` | `50%` (`aside .side-inner .profile img`); `2px` (`.burger:before, .burger span, .burger:after`) |

Palette in order of use: `#000000` ×7, `#fcfcfc` ×4, `#ffffff` ×2, `#212529` ×1, `#007bff` ×1, `#0056b3` ×1, `#cfcfcf` ×1, `#8b8b8b` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `style.css` — 15,792 B, sha256 `53a76465a359…` (member of `downloads/free/colorlib-sidebar-v08.zip`). These sheets are archive members: no live demo serves this skin.

## Requirements

### Sidebar

#### Scenario: Sidebar

- White background sidebar, 288px wide (w-72)
- Profile section: circular photo, name "Craig David", title "Web Designer"
- Navigation items: Feed (Home, with chevron), Explore (Search, with chevron), Notifications (Bell), Direct (Send), Stats (BarChart3), Sign out (LogOut)
- Active item highlighted with left border accent (#6c757d)
- Mobile: overlay-style with hamburger toggle and X close button
- Desktop: always visible, main content offset by sidebar width
- Footer: "Made with Component Dock" linking to componentdock.com

### Main Content

#### Scenario: Main Content

- Light gray (#f5f5f5) background
- 2-column responsive grid of post cards
- 8 post cards with profile photo thumbnail, title, and date "Posted: Dec 17, 2019"

### Design

#### Scenario: Design

- Poppins font from Google Fonts
- Neutral color scheme with blue-gray accent (#6c757d)
- picsum.photos for placeholder images with deterministic seeds
- lucide-react for icons

### Testing

#### Scenario: Testing

- Sidebar: profile rendering, nav items, active state switching, mobile toggle, overlay close, desktop visibility, footer link
- PostCard: title, date, image, custom className
- App: rendering, heading, grid composition, toggle, navigation landmark

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sidegate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sidegate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Main Content — Light gray (#f5f5f5) background
- [ ] Design — Poppins font from Google Fonts
- [ ] Testing — Sidebar: profile rendering, nav items, active state switching, mobile toggle, overlay close, desktop visibility, footer link
