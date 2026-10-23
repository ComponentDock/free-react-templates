# Template: BroadSheet (News & Magazine)

> Recreation of ColorLib "Newspaper" (https://colorlib.com/wp/template/newspaper/).
> Preview: https://preview.colorlib.com/theme/newspaper/

## Purpose

BroadSheet is a full-featured news and magazine website template with breaking
news tickers, featured articles, popular news grid, video section, and editorial
picks. Dense, information-rich layout typical of online newspaper sites.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/newspaper/ (HTTP 200, 67,921 B, fetched 2026-10-23) and its theme stylesheet `theme/newspaper/style.min.css` (188,721 B, sha256 `4a271c922ae3…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#d0002a` | 21 declarations — `.newspaper-btn`, `.section-heading h6` |
| Other chromatic values | `#152535`, `#007bff`, `#ee002d` | `#152535` × 14 (h1); `#007bff` × 6 (.form-check-input:checked); `#ee002d` × 6 (#scrollUp) |
| Surface | `#ffffff` | 36 declarations — `.valid-tooltip`, `.form-range:focus::-moz-range-thumb` |
| Ink / dark surface | `#1c1c1c` | 15 declarations — `a`, `a:hover` |
| Typeface | `Roboto, sans-serif` (2 rules — body)<br>`var(--bs-body-font-family)` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `50%`, `var(--bs-border-radius)`, `1rem` | `50%` (.form-check-input[type=radio]); `var(--bs-border-radius)` (.form-control); `1rem` (.form-range::-webkit-slider-thumb) |

Palette in order of use: `#ffffff` ×36, `#d0002a` ×21, `#1c1c1c` ×15, `#152535` ×14, `#000000` ×11, `#666666` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: TopBar with logo and search

The template SHALL display a top bar with the "BroadSheet" logo on the left,
Login/Register links, and a search input with submit button on the right.

#### Scenario: TopBar renders logo and search

- **WHEN** the page loads
- **THEN** the "BroadSheet" logo is visible
- **AND** Login and Register links are visible
- **AND** a search input with submit button is visible

### Requirement: Navbar with horizontal menu

The template SHALL display a dark-background navbar with menu items: Home,
Politics, Breaking News, Business, Technology, Health, Travel, Sports, Contact.
The Home item SHALL be visually active. The navbar SHALL support mobile toggle.

#### Scenario: Navbar renders all menu items

- **WHEN** the page loads
- **THEN** all 9 menu items are visible
- **AND** the Home item has an active indicator

### Requirement: Hero with breaking news tickers

The template SHALL display a hero area with two breaking news ticker rows
("Breaking News" and "International" badges) and an ad placeholder.

#### Scenario: Hero displays tickers

- **WHEN** the page loads
- **THEN** the "Breaking News" badge is visible
- **AND** the "International" badge is visible
- **AND** ticker headlines are displayed

### Requirement: FeaturedPosts section

The template SHALL display a featured posts section with a main featured post
(large image, category badge, title, author, excerpt, like/comment counts),
2 stacked smaller featured posts, and 6 sidebar small posts with thumbnails.

#### Scenario: Featured posts layout

- **WHEN** the page loads
- **THEN** the main featured post shows image, category, title, author, excerpt
- **AND** like and comment counts are displayed
- **AND** 6 sidebar posts are visible

### Requirement: PopularNews section

The template SHALL display a popular news section with 4 post cards in a 2-column
grid, a "4 Most Popular News" numbered list, and a newsletter signup form.

#### Scenario: Popular news grid and newsletter

- **WHEN** the page loads
- **THEN** 4 post cards are displayed
- **AND** the "4 Most Popular News" list shows 4 numbered items
- **AND** the newsletter form has name, email inputs and subscribe button

### Requirement: Newsletter form interaction

The newsletter form SHALL accept name and email inputs and handle submission
without page navigation.

#### Scenario: Newsletter form submission

- **WHEN** a user enters name and email
- **AND** clicks Subscribe
- **THEN** the form does not navigate away

### Requirement: VideoSection

The template SHALL display a dark-overlay section with 3 video thumbnails
and play button icons.

#### Scenario: Video thumbnails render

- **WHEN** the page loads
- **THEN** 3 video thumbnails are displayed with play button overlays

### Requirement: Editorial section

The template SHALL display an editorial section with "Editor's Pick" (6 posts
in 3-column grid) and "World News" sidebar (5 stacked posts).

#### Scenario: Editorial layout

- **WHEN** the page loads
- **THEN** the Editor's Pick shows 6 posts
- **AND** the World News sidebar shows 5 posts

### Requirement: Footer with Component Dock link

The template SHALL display a dark-background footer with logo, contact info,
4 link columns, and a bottom bar with copyright and a link to
https://www.componentdock.com/ branded "Component Dock".

#### Scenario: Footer renders with Component Dock

- **WHEN** the page loads
- **THEN** the footer shows logo and contact info
- **AND** 4 link columns are visible
- **AND** the bottom bar links to Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/broadsheet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/broadsheet/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] TopBar with logo and search — the "BroadSheet" logo is visible
- [ ] Navbar with horizontal menu — all 9 menu items are visible
- [x] Hero with breaking news tickers — the "Breaking News" badge is visible
- [ ] FeaturedPosts section — the main featured post shows image, category, title, author, excerpt
- [ ] PopularNews section — 4 post cards are displayed
- [ ] Newsletter form interaction — the form does not navigate away
- [ ] VideoSection — 3 video thumbnails are displayed with play button overlays
- [ ] Editorial section — the Editor's Pick shows 6 posts
