# Template: Fragzone (Business)

Recreation of ColorLib "Game Warrior" (https://colorlib.com/wp/template/game-warrior/).

## Purpose

Fragzone is a gaming website template recreating the ColorLib Game Warrior design under a new original name. It provides a complete gaming community site with navbar, hero banner, latest news ticker, game category cards, recent games gallery, tournament listings, review cards, and a dark footer.

## Design reference (replication findings)

- **Source:** ColorLib "Game Warrior" — https://colorlib.com/wp/template/game-warrior/
- **Source slug:** `game-warrior`
- **Preview URL status:** `https://preview.colorlib.com/theme/game-warrior/` answered **HTTP 404** on 2026-10-23 and the preview catalog (`assets/js/catalog-products-*.js`) holds **no demo entry** for the slug, so no live token read exists. The design page https://colorlib.com/wp/template/game-warrior/ still answers, and the TEMPLATES.md screenshot below is the visual reference.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/gamewarrior-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/fragzone` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/gamewarrior/ (HTTP 200, 16,380 B, fetched 2026-10-23) and its theme stylesheet `theme/gamewarrior/css/style.min.css` (86,549 B, sha256 `d475389635cc…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ffb320` | 21 declarations — `.site-btn`, `.user-panel` |
| Other chromatic values | `#ffc12c`, `#ff205f`, `#202630` | `#ffc12c` × 10 (.header-section .main-menu a[aria-current]); `#ff205f` × 6 (.cata.new); `#202630` × 3 (.gw-section) |
| Surface | `#ffffff` | 37 declarations — `.text-bg-primary`, `.text-bg-success` |
| Ink / dark surface | `#131313` | 17 declarations — `h1`, `h2` |
| Typeface | `Roboto, sans-serif` (1 rule — html)<br>`var(--bs-body-font-family)` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `50%`, `3px`, `30px` | `50%` (.review-item .review-cover .score); `3px` (.owl-theme:where(.kit-owl) .owl-nav [class*=owl-]); `30px` (.owl-theme:where(.kit-owl) .owl-dots .owl-dot span) |

Palette in order of use: `#ffffff` ×37, `#ffb320` ×21, `#131313` ×17, `#ffc12c` ×10, `#666666` ×6, `#ff205f` ×6.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with logo, navigation links, and join button

The navbar SHALL display a logo with gaming icon, navigation links to all sections, and a "Join Now" pill button. The mobile view SHALL show a hamburger menu that toggles a dropdown.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on desktop
- **THEN** the Fragzone logo is visible
- **AND** navigation links (Home, Games, Blog, Forums, Contact) are displayed
- **AND** a "Join Now" button is visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** a mobile navigation menu opens with all nav links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section with background image and CTA

The hero section SHALL display a full-width background image with a dark overlay, a heading "The Best Games Out There" with a gold-accented "Games" word, descriptive text, and an "Explore Games" call-to-action button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "The Best Games Out There" heading
- **AND** a descriptive paragraph about gaming news is visible
- **AND** an "Explore Games" button links to the games section

### Requirement: Latest news ticker bar

The latest news section SHALL show a split bar with a gold "Latest News" label on the left and a dark ticker on the right with badge-tagged news items.

#### Scenario: News bar renders items

- **WHEN** the page loads
- **THEN** the "Latest News" label is visible
- **AND** three news items with badges (New, Hot, Patch) are displayed

### Requirement: Game types category cards

The game types section SHALL display four equal-width cards with background images, dark overlays, category badges (New Release, Strategy, RPG, Racing), titles, descriptions, and comment counts.

#### Scenario: Game type cards render

- **WHEN** the games section loads
- **THEN** four game type cards are visible
- **AND** each card shows a category badge, title, description, and comment count

### Requirement: Recent games gallery

The recent games section SHALL display three game cards on a light background, each with a badge overlay, image, title, description, and comment count.

#### Scenario: Recent games render

- **WHEN** the recent games section loads
- **THEN** the "Recent Games" heading is centered
- **AND** three game cards with badges, titles, and descriptions are visible

### Requirement: Tournament listings

The tournaments section SHALL display two tournament cards on a dark background, each with a "Premium Tournament" badge, image, game title, dates, participant count, organizer, and prize information.

#### Scenario: Tournament cards render

- **WHEN** the tournaments section loads
- **THEN** the "Tournaments" badge is visible
- **AND** two tournament cards with details are displayed

### Requirement: Recent reviews section

The recent reviews section SHALL display four review cards on a dark background, each with a color-coded circular rating badge, game image, title, and description.

#### Scenario: Review cards render

- **WHEN** the reviews section loads
- **THEN** the "Recent Reviews" heading is centered
- **AND** four review cards with rating badges are visible

### Requirement: Footer with Component Dock attribution

The footer SHALL display a dark background with three columns (brand, latest posts, top comments), and a bottom bar with "Made with ♥ by Component Dock" linking to https://www.componentdock.com/ and footer navigation links.

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer loads
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is visible
- **AND** latest posts and top comments sections are rendered
- **AND** footer navigation links are present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fragzone/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fragzone/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with logo, navigation links, and join button — the Fragzone logo is visible
- [x] Hero section with background image and CTA — the hero section shows "The Best Games Out There" heading
- [x] Latest news ticker bar — the "Latest News" label is visible
- [ ] Game types category cards — four game type cards are visible
- [x] Recent games gallery — the "Recent Games" heading is centered
- [x] Tournament listings — the "Tournaments" badge is visible
- [x] Recent reviews section — the "Recent Reviews" heading is centered
