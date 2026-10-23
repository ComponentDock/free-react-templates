# Template: Landing (WordPress Themes Collection)

## Purpose

Landing Page is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Landing Page
Wordpress Themes" entry in TEMPLATES.md (App Landing Page category), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Landing Page Wordpress Themes" — a landing-page
  website template from the free catalog
  (source: https://colorlib.com/wp/template/landing-page-wordpress-themes/).
  NOTE: the URL 301-redirects to a roundup article ("42 Best Landing Page
  WordPress Themes (Free & Premium)"), so the item is treated as a single
  landing-page design; the TEMPLATES.md screenshot is the reference.
- **Live preview UNREACHABLE (re-verified 2026-08-06):**
  `https://preview.colorlib.com/theme/landing-page-wordpress-themes/`
  returned HTTP 404 (variants `landing-page-wordpress`, `landing-page-themes`,
  `landing-page` also 404; note `/theme/landing/` returns 200 but belongs to
  the separate "Landing" checklist item). Per `docs/replication.md`, the
  design is reconstructed from the TEMPLATES.md screenshot
  (`landing-page-themes.jpg`, HTTP 200) as the sole visual reference.
- **Design reference (from screenshot, programmatic color analysis):** the
  screenshot (1200×891) shows a classic marketing landing page — white/very
  light-gray background (`#ffffff`, `#f4f4f4`, `#fafafa`) with a **violet
  brand color** (23712 violet-dominant pixels sampled):
  - Deep violet `#7020c0` / `#6020b0` (buttons/CTAs)
  - Mid violet `#7c44d6` (average of all violet pixels — primary)
  - Light violet `#8060e0` / `#9050e0` (gradients/accents)
    Structure (from screenshot + genre): top navigation with logo and menu
    links, hero with headline + CTA button, feature/service cards with icons,
    an about split, and a footer.
- **Recreation decisions:** standard landing structure (Navbar → Hero →
  Features → About split → CTA band → Footer); photos → seeded picsum
  placeholders (`picsum.photos/seed/landing-<n>/<w>/<h>`); icons →
  lucide-react; violet primary in `@theme`; "Poppins" (Google Fonts) as the
  display/body font (approximation — not extractable from a screenshot); no
  assets copied.

Landing Page lives in `apps/landing` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
No machine-readable reference: the demo path
`https://preview.colorlib.com/theme/landing/` and the source bundle
`https://preview.colorlib.com/downloads/free/landing.zip` both return HTTP 404
(checked 2026-10-23 — this ColorLib entry publishes no free demo under that slug).
Per `docs/replication.md` the published screenshot is the sole reference, so the
values below are **sampled from the screenshot** (quantised, 12-colour median cut),
not read from CSS. Treat them as approximate: match the hue, not the byte.

![reference screenshot](https://colorlib.com/wp/wp-content/uploads/sites/2/landing-free-template.jpg) — 1200×946, 134,167 B.

`https://preview.colorlib.com/theme/landing/` does answer ("Landing Template"), but it is a different free demo than this round-up entry, so its CSS is **not** used here.

| Token | Value | Evidence in the screenshot |
| --- | --- | --- |
| Accent (dominant chromatic) | `none declared — see note` | 6.6% of sampled pixels |
| — | — | the only chromatic clusters are `#8f6153` (6.6%) and neighbours — that is screenshot photography, not page chrome; the UI itself is neutral |
| Surface | `#dee2e1` | dominant light ground |
| Ink / dark surface | `#242625` | darkest text / section ground |
| Header band | `#eae9ea` | most common colour in the top 12% |
| Typeface | not recoverable from a screenshot | pick a neutral geometric sans already used by neighbouring templates (Poppins / Inter) and keep the screenshot's weight contrast |

Palette sampled in order of area: `#242625` ×39.5%, `#dee2e1` ×35.4%, `#8f6153` ×6.6%.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Because these values are sampled rather than declared, keep the palette to these few hues — do not derive new shades from the screenshot's photo areas.
- Spacing/radii are not recoverable either: reuse the shared `packages/ui` button and card radii instead of guessing from the thumbnail.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Landing",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Landing page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Landing" and links to Home, Features, About, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a supporting blurb and a call-to-action button

### Requirement: Features section

The system SHALL render a features section with a heading and at least three
feature cards, each with an icon, a title, and a blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading
- **AND** it SHALL show at least three feature cards with titles and blurbs

### Requirement: About split section

The system SHALL render an about split section with a heading, a blurb, and
a call-to-action button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading and a blurb
- **AND** it SHALL show a call-to-action button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Landing app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Landing — App Landing Template"

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
`apps/landing/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/landing/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Landing" and links to Home, Features, About, and Contact
- [ ] Hero section — it SHALL contain a level-1 heading
- [ ] Features section — it SHALL contain a heading
- [ ] About split section — it SHALL contain a heading and a blurb
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
