# Template: Sanctum (Church)

## Purpose

Sanctum is a single-page church website with a hero, a bible-study countdown, a services grid, video sermon cards, testimonies, event dates and blog. It recreates the ColorLib **Wisdom** design (https://colorlib.com/wp/template/wisdom/).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/wisdom/ (HTTP 200, 36,915 B, fetched 2026-10-23) and its theme stylesheet `theme/wisdom/css/style.min.css` (196,805 B, sha256 `67f6697ee302…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff5656` | 34 declarations — `.text-primary`, `a` |
| Other chromatic values | `#b82e2e`, `#007bff`, `#007bff40` | `#b82e2e` × 8 (.btn.btn-primary:not(.btn-outline-white):hover); `#007bff` × 6 (.form-check-input:checked); `#007bff40` × 6 (.form-control:focus) |
| Surface | `#ffffff` | 64 declarations — `.kit-video-dialog__stage.is-map`, `.kit-video-dialog` |
| Ink / dark surface | `#000000` | 41 declarations — `.text-bg-primary`, `.text-bg-success` |
| Typeface | `Work Sans, sans-serif` (2 rules — body)<br>`system-ui, sans-serif` (1 rule — .ftco-section .ftco-sub-title) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `50%`, `var(--bs-border-radius)`, `30px` | `50%` (.form-check-input[type=radio]); `var(--bs-border-radius)` (.img-thumbnail); `30px` (.owl-theme:where(.kit-owl) .owl-dots .owl-dot span) |

Palette in order of use: `#ffffff` ×64, `#000000` ×41, `#ff5656` ×34, `#b82e2e` ×8, `#cccccc` ×8, `#007bff` ×6.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with site branding and navigation

The page SHALL display a dark navbar with the site name "Sanctum Church" and navigation links (Home, About, Events, Sermons, Blog, Contact). A mobile hamburger menu SHALL toggle an expandable mobile nav.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads
- **THEN** the site name "Sanctum Church" is visible
- **AND** all six navigation links are present

#### Scenario: Mobile menu toggles on click

- **WHEN** the hamburger button is clicked
- **THEN** the mobile navigation opens
- **AND** clicking a link closes the menu

### Requirement: Hero section with background image and CTA

The page SHALL display a full-height hero with a background image, dark overlay, heading "Needing Jesus Christ Together", and a CTA link "Save your spirit".

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the heading "Needing Jesus Christ Together" is visible
- **AND** the CTA link is present

### Requirement: Bible Study countdown section

The page SHALL display a "Bible Study" section with a countdown timer and an "Events Details" button.

#### Scenario: Countdown and CTA are visible

- **WHEN** the page loads
- **THEN** the "Bible Study" heading is visible
- **AND** countdown values are displayed
- **AND** the "Events Details" button is present

### Requirement: About section with image and text

The page SHALL display a split about section with an image (including play button) and text "Loving God, Loving Others and Serving the World".

#### Scenario: About content renders

- **WHEN** the page loads
- **THEN** the about heading and paragraphs are visible
- **AND** the about image is present

### Requirement: Services grid with four cards

The page SHALL display a "Giving light to someone" section with four service cards: I'm New Here, Care Ministries, Prayer Request, Podcasts.

#### Scenario: All service cards render

- **WHEN** the page loads
- **THEN** four service cards are rendered with unique titles and descriptions

### Requirement: Newsletter subscription section

The page SHALL display a parallax newsletter section with heading, description, email input, and submit button. Form submission SHALL be prevented (no navigation).

#### Scenario: Newsletter form renders and submits safely

- **WHEN** the page loads
- **THEN** the newsletter heading and email input are present
- **AND** form submission does not navigate away

### Requirement: Sermons section with video cards

The page SHALL display a "Watch our sermons" section with three sermon cards, each having a play button, title, and speaker name. A "Watch all sermons" CTA SHALL be present.

#### Scenario: Sermon cards render

- **WHEN** the page loads
- **THEN** three sermon cards are visible with titles and speakers
- **AND** play buttons are present for each

### Requirement: Testimonies section

The page SHALL display a "Testimonies" section with cards containing a user photo, quote, name, and role.

#### Scenario: Testimony cards render

- **WHEN** the page loads
- **THEN** testimony cards are present with unique quotes, names, and roles

### Requirement: Church Achievements counter section

The page SHALL display a "Church Achievements" section with three stat blocks: Churches, Members, Donations.

#### Scenario: Counter values render

- **WHEN** the page loads
- **THEN** three counter values and labels are visible

### Requirement: Events section with date badges

The page SHALL display an events section with a background image, "Our latest events" heading, and event entries with date badges.

#### Scenario: Event entries render

- **WHEN** the page loads
- **THEN** event titles and date badges are present
- **AND** the "View Events" CTA is visible

### Requirement: Blog section with cards

The page SHALL display a "Recent Blog" section with three blog cards showing date, author, comment count, and title.

#### Scenario: Blog cards render

- **WHEN** the page loads
- **THEN** three blog cards are rendered with unique titles

### Requirement: Footer with Component Dock link and contact info

The page SHALL display a dark footer with site name, Quick Links, Contact Information, social icons, copyright, and a "Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders all elements

- **WHEN** the page loads
- **THEN** the copyright line, Component Dock link, contact info, and social icons are present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sanctum/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sanctum/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with site branding and navigation — the site name "Sanctum Church" is visible
- [x] Hero section with background image and CTA — the heading "Needing Jesus Christ Together" is visible
- [x] Bible Study countdown section — the "Bible Study" heading is visible
- [ ] About section with image and text — the about heading and paragraphs are visible
- [ ] Services grid with four cards — four service cards are rendered with unique titles and descriptions
- [ ] Newsletter subscription section — the newsletter heading and email input are present
- [ ] Sermons section with video cards — three sermon cards are visible with titles and speakers
- [ ] Testimonies section — testimony cards are present with unique quotes, names, and roles
- [ ] Church Achievements counter section — three counter values and labels are visible
- [ ] Events section with date badges — event titles and date badges are present
- [ ] Blog section with cards — three blog cards are rendered with unique titles
