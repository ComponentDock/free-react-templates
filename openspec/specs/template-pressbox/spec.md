# Template: Pressbox (Magazine)

Recreation of ColorLib "Magnews" — https://colorlib.com/wp/template/magnews/

## Purpose

Pressbox is a news and magazine website template built with React 19, Tailwind CSS 4, and TypeScript. It recreates the ColorLib Magnews design with a dark navigation bar, red accent color, hero carousel, trending posts grid, newsletter subscription, and footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/magnews/ (HTTP 200, 62,579 B, fetched 2026-10-23) and its theme stylesheet `theme/magnews/css/style.css` (24,804 B, sha256 `e48bd57bd145…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ef233c` | 23 declarations — `.input-btn`, `a:hover` |
| Other chromatic values | `#00aced`, `#3b5999`, `#d44332` | `#00aced` × 2 (.social-widget ul li a.twitter); `#3b5999` × 2 (.social-widget ul li a.facebook); `#d44332` × 2 (.social-widget ul li a.google) |
| Surface | `#ffffff` | 28 declarations — `.input-btn`, `.main-nav li a` |
| Ink / dark surface | `#222222` | 13 declarations — `.header-links ul li a`, `.main-nav li a:hover` |
| Typeface | `FontAwesome` (2 rules — .galery-widget ul li a:after)<br>`'Lato', sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `color: #2C2C2C; font-size: 15px; font-weight: 300` | `body{…}` rule |
| Radii | `50%` | `50%` (.tweets-widget .tweet i) |

Palette in order of use: `#ffffff` ×28, `#ef233c` ×23, `#dddddd` ×22, `#222222` ×13, `#07090c` ×6, `#00aced` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: TopBar with secondary navigation and social links

The template SHALL render a top bar containing secondary navigation links (About Us, Contact, Advertisement, Privacy) and social media icon links (Facebook, Twitter, Instagram, YouTube, RSS).

#### Scenario: TopBar renders navigation and social icons

- **WHEN** the page loads
- **THEN** the secondary navigation is visible with all four links
- **AND** five social media icon links are present

### Requirement: Dark navbar with branding and category navigation

The template SHALL render a dark navigation bar with the "Pressbox 24H" branding, category links (Home, News, Sport, Lifestyle, Fashion, Music, Business), and a search toggle button.

#### Scenario: Navbar shows branding and categories

- **WHEN** the page loads
- **THEN** the "Pressbox" branding and "24H" badge are visible
- **AND** the category navigation shows all seven categories

#### Scenario: Search toggle shows and hides search input

- **WHEN** the user clicks the search button
- **THEN** a search input field appears
- **WHEN** the user clicks the search button again
- **THEN** the search input field disappears

### Requirement: Hero carousel with featured articles

The template SHALL render a full-width hero carousel displaying featured articles with category badge, title, date, and comment count. The carousel SHALL support prev/next navigation and dot indicators with wrap-around behavior.

#### Scenario: Default state shows first article

- **WHEN** the page loads
- **THEN** the first featured article is displayed with its title, category, date, and comment count

#### Scenario: Next and previous navigation

- **WHEN** the user clicks the next button
- **THEN** the next article is displayed
- **WHEN** the user clicks the previous button
- **THEN** the previous article is displayed

#### Scenario: Dot indicator navigation

- **WHEN** the user clicks a dot indicator
- **THEN** the corresponding article is displayed

#### Scenario: Wrap-around navigation

- **WHEN** the user is on the last slide and clicks next
- **THEN** the first slide is displayed
- **WHEN** the user is on the first slide and clicks previous
- **THEN** the last slide is displayed

### Requirement: Trending posts and recent articles grid

The template SHALL render a grid of trending post cards and a separate grid of recent article cards, each with image, category, title, date, and comment count.

#### Scenario: Trending posts section renders

- **WHEN** the page loads
- **THEN** the "Trending Posts" heading is visible
- **AND** four trending post cards are displayed

#### Scenario: Recent articles section renders

- **WHEN** the page loads
- **THEN** the "Recent Articles" heading is visible
- **AND** three recent article cards are displayed

### Requirement: Newsletter subscription section

The template SHALL render a newsletter subscription section with an email input and subscribe button on a dark background.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** the "Stay Connected" heading is visible
- **AND** an email input field and subscribe button are present

#### Scenario: Form submission clears input

- **WHEN** the user types an email address and clicks subscribe
- **THEN** the email field is cleared

### Requirement: Footer with branding and Component Dock link

The template SHALL render a footer with the site branding, quick links, social media icons, copyright notice, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders all elements

- **WHEN** the page loads
- **THEN** the "Pressbox" branding is visible in the footer
- **AND** quick links are present
- **AND** social media icon links are present
- **AND** the copyright notice is present
- **AND** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pressbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pressbox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar with secondary navigation and social links — the secondary navigation is visible with all four links
- [x] Dark navbar with branding and category navigation — the "Pressbox" branding and "24H" badge are visible
- [ ] Hero carousel with featured articles — the first featured article is displayed with its title, category, date, and comment count
- [x] Trending posts and recent articles grid — the "Trending Posts" heading is visible
- [x] Newsletter subscription section — the "Stay Connected" heading is visible
