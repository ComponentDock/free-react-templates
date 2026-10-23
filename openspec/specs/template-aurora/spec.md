# Template: Aurora (Style & Fashion Landing)

## Purpose

Aurora is a single-page style & fashion template — the flagship template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Maze" template
(preview: https://preview.colorlib.com/theme/maze/ — personal/fashion landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand pink `#f66483` (banner/newsletter backgrounds), white content areas,
  dark grey text
- Typeface: Poppins (Google Fonts via `<link>`)
- White pill buttons with pink text; uppercase section headings
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Aurora lives in `apps/aurora` and uses shared components from `packages/ui`
(Button, cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Maze** — https://colorlib.com/wp/template/maze/
- **Preview**: `https://preview.colorlib.com/theme/maze/` — HTTP 200 on 2026-10-23, 15,186 bytes, title `Maze`.
- **Stylesheets measured**: theme sheet `css/main.css` — 29,314 bytes, sha256 `6a44b919f7f9…`; base `css/bootstrap.css` 7,749 B plus icon/plugin sheets (`linearicons.css`, `font-awesome.min.css`, `nice-select.css`, `magnific-popup.css`). Only `main.css` paints brand colour.
- **Measured how**: hex-literal census of `main.css` + winning rule per selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand blush | `#f67590` | 25 | `body` background · `a:hover` · `.genric-btn.primary` fill/border · `.newsletter-area` band · `.process-area .lnr` is a separate `#f5204b` |
| Blush (banner, deeper) | `#f66483` | 1 | `.banner-area` background — the hero band is one step deeper than the page |
| Off-white canvas | `#f9f9ff` | 27 | `.genric-btn.default` · card/tile surfaces · the light section bands |
| Section tint | `#f9faff` | 1 | `.process-area` background (feature grid) |
| Ink | `#222222` | 13 | `a`, all `h1`–`h6`, `.h1`–`.h6`, body copy |
| White | `#fff` | 54 | `.banner-content` + `h1` · `.featured-area` / `.image-gallery-area` / `.about-area` bands · `.primary-btn` fill · `.footer-area` text |
| Footer icon hover | `#000` | — | `.footer-area i:hover`, `.footer-area a:hover` |

`#56e4d2` (success), `#38a4ff` (info), `#f4e700` (warning), `#f44a40` (danger) are the `.genric-btn.*` demo palette — they are **not** brand tokens.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body / everything | `"Poppins", sans-serif` · `#222222` | `body` + the `/* Typography */` block |
| `h1` | 36px | base heading rules |
| `h2` | 30px | same block |
| Banner copy | white, `h1` weight 600 | `.banner-content h1` |
| Footer | white on a photographic background (`img/f-bg.jpg`) | `.footer-area` |

Only Poppins is used — no serif, no icon-font colour tokens.

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Bands | `.banner-area` `#f66483` → `.featured-area` `#fff` → `.special-offer-area` → `.image-gallery-area` `#fff` → `.process-area` `#f9faff` (icon tiles white, 28px `#f5204b` glyphs) → `.about-area` `#fff` → `.newsletter-area` `#f67590` with white text → `.footer-area` (`background: url(../img/f-bg.jpg)`, `margin-bottom: 90px`) |
| Primary CTA | `.primary-btn` white pill: `line-height: 40px`, `padding: 0 30px`, `border-radius: 20px`, `border: 1px solid #eee`, `#000` label, weight 500 |
| Generic buttons | `.genric-btn` `line-height: 40px`, `padding: 0 30px`, `border-radius: 3px`, weight 500 |
| Newsletter field | `.subscription` form with a `.primary-btn` submit inside the blush band |
| Nav | `.header-area` fixed over the hero; `.banner-content` white text |

Section order measured in the reference DOM: `header` + `nav.hide` → `.banner-area` (blush) hero `h1` → `.featured-area` ("Fresh Arrivals" / "Online Store" tiles) → `.special-offer-area` (16:9 offers) → `.image-gallery-area` → `.process-area` (6 icon features) → `.about-area` (two-up performance blocks) → `.newsletter-area` (`h3 "Subscribe for our Newsletter"` + `form.subscription`) → `.footer-area` (photo band, white text) → end.

## Requirements

### Requirement: Navigation bar

The system SHALL render a pink navbar with the site name "Aurora", section links
(Home, Arrivals, Gallery, Features, Contact), and a hamburger toggle that opens
a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Aurora" linking to `#home`
- **AND** it SHALL show links to Home, Arrivals, Gallery, Features and Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a split hero on the brand pink background with a
headline, supporting paragraph, a white pill "Send Message" button, and a
portrait image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "New Styles, Suited for You Unlike Any
  Other"
- **AND** it SHALL contain a "Send Message" button and a portrait image with an
  accessible label

### Requirement: Arrivals section

The system SHALL render a white "What's New" section with three cards, each with
an image, a title, a blurb and a "Learn Details" link.

#### Scenario: Arrival cards

- **GIVEN** the page is rendered
- **WHEN** the arrivals section is displayed
- **THEN** it SHALL show the section heading
- **AND** it SHALL show cards titled "Fresh Arrivals", "Online Store" and
  "New Collection", each with a "Learn Details" link

### Requirement: Parallax tiles

The system SHALL render two full-width image tiles with dark gradient overlays,
titles and captions.

#### Scenario: Image tiles

- **GIVEN** the page is rendered
- **WHEN** the parallax section is displayed
- **THEN** it SHALL show tiles titled "Peak Collection" and "Night Market",
  each with an image and a caption

### Requirement: Gallery section

The system SHALL render a "Lookbook" gallery with a grid of six images.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery is displayed
- **THEN** it SHALL show the "Lookbook" heading
- **AND** it SHALL show six images with accessible labels

### Requirement: Features section

The system SHALL render a "Why Aurora" section with six feature tiles, each with
a pink icon, a title and a blurb.

#### Scenario: Feature tiles

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the "Why Aurora" heading
- **AND** it SHALL show tiles titled "Parallax Support", "HTML5 Video",
  "Retina Ready Graphics", "Endless Possibilities", "Documentation" and
  "Boxed & Wide Layouts"

### Requirement: Performance section

The system SHALL render a two-column "Built to Perform" section with two points
("Powerful Performance", "Light & Dark Color Schemes") and an image.

#### Scenario: Performance content

- **GIVEN** the page is rendered
- **WHEN** the performance section is displayed
- **THEN** it SHALL show the "Built to Perform" heading and both point headings
- **AND** it SHALL show the section image

### Requirement: Newsletter form

The system SHALL render a pink newsletter section with an email form. Submitting
an invalid email SHALL show an error; a valid email SHALL show a success message
and clear the field.

#### Scenario: Invalid email

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an empty or invalid email
- **THEN** an error message SHALL be displayed
- **AND** the success message SHALL NOT be shown

#### Scenario: Successful subscription

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits a valid email
- **THEN** a success message SHALL be displayed
- **AND** the email field SHALL be cleared

### Requirement: Footer

The system SHALL render a dark footer with the site name, a tagline, and social
links (Facebook, Twitter, Instagram, LinkedIn) that open in a new tab.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name and tagline
- **AND** it SHALL show the four social links with `target="_blank"`

### Requirement: Page composition

The system SHALL compose all sections in order (Navbar, Hero, Arrivals,
Parallax, Gallery, Features, Performance, Newsletter, Footer) inside a main
landmark, and set the document title.

#### Scenario: Full page render

- **GIVEN** the Aurora app is rendered
- **WHEN** the page loads
- **THEN** all sections SHALL be present in the main landmark
- **AND** the document title SHALL be "Aurora — Style & Fashion Template"

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/aurora/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/aurora/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — it SHALL show the site name "Aurora" linking to `#home
- [ ] Hero section — it SHALL contain the headline "New Styles, Suited for You Unlike Any
- [ ] Arrivals section — it SHALL show the section heading
- [x] Parallax tiles — it SHALL show tiles titled "Peak Collection" and "Night Market",
- [x] Gallery section — it SHALL show the "Lookbook" heading
- [x] Features section — it SHALL show the "Why Aurora" heading
- [x] Performance section — it SHALL show the "Built to Perform" heading and both point headings
- [ ] Newsletter form — an error message SHALL be displayed
- [ ] Footer — it SHALL show the site name and tagline
- [ ] Page composition — all sections SHALL be present in the main landmark
