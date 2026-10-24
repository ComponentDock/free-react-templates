# Template: Fotoroll (Photography Portfolio)

> Recreation of ColorLib "Photography 2" (https://colorlib.com/wp/template/photography-2/)

## Purpose

Fotoroll is a photography portfolio template with a navbar, hero, portfolio, blog and footer. It recreates the ColorLib **Photography 2** design (https://colorlib.com/wp/template/photography-2/, preview: https://preview.colorlib.com/theme/photography2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design tokens (live sheet)

Measured from the live reference, not sampled off the screenshot — re-read
2026-10-24s. Preview `https://preview.colorlib.com/theme/photography2/`
(HTTP 200, 6,928 B) and its theme sheet `style.css` (20,293 B, sha256
`bd3253ae7d70a330…`, linked as the last `<link>` after `css/bootstrap.min.css`,
`css/font-awesome.min.css`, `css/swiper.min.css`).

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| **Accent — the design's only chromatic colour** | `#30df7a` (spring green) | 5 declarations — `.site-navigation ul li a:hover, …current-menu-item a`, `.header-email a`, `.single-post .entry-header .post-meta a`, `.footer-navigation ul li a:hover`, `.footer-social ul li a:hover` |
| Ink | `#191919` | `body{color}` |
| Muted greys | `#a6a6a6` (nav links), `#595959` (post body), `#bfbfbf` (byline) | sheet |
| Surface | `#fff` | 11 declarations |
| Hairlines | `#ebebeb` | `.site-navigation ul` border |
| Typeface | `'Work Sans', sans-serif` — imported `fonts.googleapis.com/css?family=Work+Sans:300,400,500,700` | `@import` in `style.css`; `body{font-family}` |
| Radii | `10px` (card), `50%` (slider arrows + counters) | sheet |
| Buttons | Text-only: uppercase underlined links (`VIEW PROJECTS`, `SHOW THUMBNAILS`); no filled button anywhere | `style.css` |

**Prep correction (2026-10-24s).** The first block was sampled off the
screenshot and got both tokens wrong: it named a mint/teal `#4ecdc4` accent
(the sheet has **no** such value) and Montserrat (the sheet imports **Work
Sans**). The correct accent is the spring green `#30df7a`, which is what the
screenshot's green logo dot, "Home" link and email CTA actually show.

Inner pages (live, so they are the authoritative reference for the sections a
one-page recreation has to compress): `portfolio.html` (200, 10,735 B) and
`blog.html` (200, 9,004 B); `index.html` is the page itself (200, byte-count
identical to the directory URL).

## Sections (in order)

1. **Navbar** — White sticky header, "Foto." logo with green dot, nav links (Home, Portfolio, Blog, About, Contact), green email CTA, mobile hamburger
2. **Hero** — Full-width image slider (3 slides), large centered heading, "View Projects" CTA, left/right arrow navigation, "1/3" pagination counter, auto-advance every 6s
3. **Portfolio** — Masonry-style 3-column grid, 12 photography projects with captions, hover scale effect
4. **Blog** — 3-column card grid, image + title + excerpt + date, `#f5f5f5` card backgrounds
5. **Footer** — Dark background, copyright with heart, social icon row, "More templates at Component Dock" link

## Requirements

### Gherkin requirements

Feature: Fotoroll Photography Portfolio

#### Scenario: Navbar renders all navigation links

- **GIVEN** I visit the Fotoroll page
- **THEN** I see the "Foto." logo
- **AND** I see links: Home, Portfolio, Blog, About, Contact
- **AND** I see the email "hello@fotoroll.com"

#### Scenario: Mobile menu opens and closes

- **GIVEN** I visit the Fotoroll page on mobile
- **WHEN** I click the "Open menu" button
- **THEN** I see the mobile navigation
- **WHEN** I click "Close menu"
- **THEN** the mobile navigation is hidden

#### Scenario: Hero slider auto-advances

- **GIVEN** I visit the Fotoroll page
- **THEN** I see "Mountain Vistas" heading
- **WHEN** I wait 6 seconds
- **THEN** I see "Urban Streets" heading

#### Scenario: Hero slider manual navigation

- **GIVEN** I visit the Fotoroll page
- **WHEN** I click "Next slide"
- **THEN** I see "Urban Streets" heading
- **WHEN** I click "Previous slide"
- **THEN** I see "Mountain Vistas" heading

#### Scenario: Portfolio grid displays images

- **GIVEN** I visit the Fotoroll page
- **THEN** I see 12 portfolio images

#### Scenario: Blog section shows posts

- **GIVEN** I visit the Fotoroll page
- **THEN** I see 3 blog post cards with titles and dates

#### Scenario: Footer has Component Dock link

- **GIVEN** I visit the Fotoroll page
- **THEN** I see a "Component Dock" link to componentdock.com
- **AND** I see social media icons

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fotoroll/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fotoroll/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Preview analysis notes

- ⚠️ Pointer status re-probed 2026-10-13: the slug-only path (`https://preview.colorlib.com/theme/photography-2/`) 404s, but the live demo is the alias directory `https://preview.colorlib.com/theme/photography2/` (HTTP 200, 6,928 B)
- Analysis based on ColorLib screenshot: `photography-2-free-template-1.jpg`
- Full-width hero slider is the dominant feature — the page is essentially a slider with a thin footer
- White navbar with green accent (`#4ecdc4` approximate), "Foto." brand name
- Slider has dark overlay, large white text, "VIEW PROJECTS" underline CTA
- Arrow navigation is circular dark buttons on left/right edges
- Footer: copyright + "made with ♥ by Colorlib" + "SHOW THUMBNAIL" + social icons

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders all navigation links — I see the "Foto." logo
- [ ] Mobile menu opens and closes — I see the mobile navigation
- [x] Hero slider auto-advances — I see "Mountain Vistas" heading
- [x] Hero slider manual navigation — I see "Urban Streets" heading
- [ ] Portfolio grid displays images — I see 12 portfolio images
- [ ] Blog section shows posts — I see 3 blog post cards with titles and dates
