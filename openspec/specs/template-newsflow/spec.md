# Template: Newsflow (Viral News Magazine)

## Purpose

Newsflow is a single-page viral news / magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Viral" free template (source:
https://colorlib.com/wp/template/viral/), built under a DIFFERENT name
(**Newsflow** — evokes a flowing stream of trending news), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/viral/ (HTTP 200, 53,966 B, fetched 2026-10-23) and its theme stylesheet `theme/viral/style.min.css` (199,634 B, sha256 `4c143cba73ed…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#e20378` | 35 declarations — `#scrollUp`, `.header-area .top-header-area .top-header-content .top-breaking-news-area .ticker ul li a:hover` |
| Other chromatic values | `#e30a73`, `#ee9202`, `#feae04` | `#e30a73` × 14 (.viral-btn); `#ee9202` × 7 (.single-welcome-slide .welcome-post .post-content .tag.tag-3); `#feae04` × 7 (.viral-btn) |
| Surface | `#ffffff` | 36 declarations — `.valid-tooltip`, `.form-range:focus::-moz-range-thumb` |
| Ink / dark surface | `#231f1f` | 36 declarations — `.kit-mobile-nav .menu-search input`, `.kit-mobile-nav .menu-search button` |
| Typeface | `Montserrat, sans-serif` (1 rule — body)<br>`Roboto, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `var(--bs-border-radius)`, `5px`, `50%` | `var(--bs-border-radius)` (.form-control); `5px` (.viral-btn); `50%` (.form-check-input[type=radio]) |

Palette in order of use: `#231f1f` ×36, `#ffffff` ×36, `#e20378` ×35, `#656565` ×16, `#e30a73` ×14, `#000000` ×13.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Top bar displays welcome message and social links

The template SHALL render a top bar with a welcome message on the left and social media icon links on the right.

#### Scenario: Top bar content

- **WHEN** the page loads
- **THEN** a top bar is visible with text "Welcome to Newsflow."
- **AND** four social media link icons are rendered (Google, Pinterest, Facebook, Twitter)

### Requirement: Navbar displays logo, navigation, and CTA

The template SHALL render a navigation bar with the site logo, navigation links, a search button, and an "Add Post" CTA button.

#### Scenario: Navbar elements

- **WHEN** the page loads
- **THEN** the navbar displays the "Viral Story" logo
- **AND** six navigation links are visible (Top 10, Pages, Funny, Videos, Don't Miss, Mega Menu)
- **AND** a search button with aria-label is rendered
- **AND** an "Add Post" button with orange gradient is rendered

#### Scenario: Active nav link

- **WHEN** the page loads
- **THEN** the "Top 10" link is styled as the active link (brand color)

### Requirement: Trending stories section

The template SHALL render a trending stories section with three horizontal story cards.

#### Scenario: Trending stories content

- **WHEN** the page loads
- **THEN** three trending story cards are visible
- **AND** each card has a thumbnail image with alt text, a title, and a timestamp
- **AND** a magenta divider line is rendered below the section

### Requirement: Main content grid

The template SHALL render a magazine-style content grid with a large feature card and two smaller sidebar cards.

#### Scenario: Featured content layout

- **WHEN** the page loads
- **THEN** a large feature card is displayed on the left (2/3 width)
- **AND** two smaller cards are stacked on the right (1/3 width)
- **AND** each card has a category badge, title, timestamp, and background image

#### Scenario: Category badge colors

- **WHEN** a card has a category badge
- **THEN** the badge displays the category label in white text on a colored background

### Requirement: More stories section

The template SHALL render a "more stories" section with three story cards in a grid.

#### Scenario: More stories content

- **WHEN** the page loads
- **THEN** three story cards are displayed in a responsive grid
- **AND** each card has an image, category badge, title, and timestamp

### Requirement: Newsletter signup form

The template SHALL render a newsletter signup section with an email input and subscribe button.

#### Scenario: Newsletter form display

- **WHEN** the page loads
- **THEN** a newsletter section with dark background is visible
- **AND** an email input field and subscribe button are rendered

#### Scenario: Newsletter form submission

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a success message "Thanks for subscribing!" is displayed

#### Scenario: Newsletter empty email

- **WHEN** the user clicks Subscribe without entering an email
- **THEN** no success message is displayed

### Requirement: Footer with Component Dock link

The template SHALL render a footer with site info, navigation links, and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer displays the "Newsflow" brand name
- **AND** footer navigation links are rendered (About, Contact, Privacy Policy, Terms of Service)
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is rendered with target="_blank"
- **AND** the footer has role="contentinfo"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/newsflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/newsflow/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Top bar displays welcome message and social links — a top bar is visible with text "Welcome to Newsflow."
- [x] Navbar displays logo, navigation, and CTA — the navbar displays the "Viral Story" logo
- [ ] Trending stories section — three trending story cards are visible
- [ ] Main content grid — a large feature card is displayed on the left (2/3 width)
- [ ] More stories section — three story cards are displayed in a responsive grid
- [ ] Newsletter signup form — a newsletter section with dark background is visible
