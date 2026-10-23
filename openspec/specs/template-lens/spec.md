---
name: lens
description: Photography portfolio with fixed sidebar, full-screen hero, photo grid, testimonials, bio, blog, and contact form
source: https://colorlib.com/wp/template/elit/
preview: https://preview.colorlib.com/theme/elit/
---

# Template: Lens (Photography Portfolio)

## Purpose

Recreation of ColorLib "Elit" (https://colorlib.com/wp/template/elit/) as a React 19 + Tailwind CSS 4 + TypeScript photography portfolio template. The template features a fixed sidebar navigation, full-screen hero, photo grid gallery, testimonials, biography, blog, and contact form.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/elit/ (HTTP 200, 25,063 B, sha256 `23d3dbf0cab1…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#df0e62` | 10 declarations — `.site-mobile-menu .site-nav-wrap a.active,.site-mobile-menu .site-nav-wrap a:hover`, `.site-mobile-menu .site-nav-wrap li.active>a` |
| Other chromatic values | `#8bc34a` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 15 declarations — `.form-control`, `.form-control:active,.form-control:focus` |
| Ink / dark surface | `#000000` | 7 declarations — `.header-bar`, `::selection` |
| Typeface | `Oswald` (1 rule — `.h1,.h2,.h3,h1,h2,h3`)<br>loaded via Google Fonts: `Quicksand` | `font-family` declarations in the design sheet |
| Radii | `50%`, `30px` | `50%` (`.custom-pagination a`); `30px` (`.btn`) |

Palette in order of use: `#ffffff` ×15, `#df0e62` ×10, `#000000` ×7, `#cccccc` ×3, `#8bc34a` ×1, `#25262a` ×1, `#212529` ×1, `#f8f9fa` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/elit/fonts/icomoon/style.css` — 79,820 B, sha256 `b696dfc59a40…`; `theme/elit/css/style.css` — 14,049 B, sha256 `c749c31c84d3…`.

## Requirements

### Requirement: Sidebar Navigation

Users SHALL see a fixed left sidebar (250px wide, black background) with the logo "LENS", navigation links, and social media icons.

#### Scenario: Sidebar renders logo and navigation

- **WHEN** the page loads
- **THEN** the logo "LENS" is displayed
- **AND** navigation links are present: Home, Photos, Biography, Blog, Contact
- **AND** social icons (Facebook, Twitter, Instagram) are displayed

#### Scenario: Sidebar is responsive

- **WHEN** the viewport is less than 992px wide
- **THEN** the sidebar collapses to a hamburger menu toggle
- **AND** clicking the toggle opens/closes the sidebar

### Requirement: Hero Section

Users SHALL see a full-screen hero section with a background image, heading, subtitle, and a call-to-action button.

#### Scenario: Hero displays welcome content

- **WHEN** the page loads
- **THEN** a full-screen background image is shown
- **AND** the heading "WELCOME" is displayed in white uppercase
- **AND** a subtitle paragraph is displayed
- **AND** a "CONTACT ME" pink pill button links to the contact section

### Requirement: Photo Grid

Users SHALL see a 3-column photo grid with hover overlays.

#### Scenario: Photo grid displays images

- **WHEN** the user scrolls to the photos section
- **THEN** photos are arranged in a 3-column responsive layout
- **AND** each photo is 300px tall with object-fit cover

#### Scenario: Photo hover effect

- **WHEN** the user hovers over a photo
- **THEN** a dark overlay with a search icon appears

### Requirement: Testimonials

Users SHALL see a testimonial carousel with avatar, name, and quote.

#### Scenario: Testimonial carousel

- **WHEN** the user scrolls to the testimonials section
- **THEN** a heading "TESTIMONIAL" is shown
- **AND** a testimonial with circular avatar, name, and blockquote is displayed
- **AND** navigation dots allow switching between testimonials

### Requirement: Biography Section

Users SHALL see a biography section with dark background, portrait, and skill lists.

#### Scenario: Biography displays content

- **WHEN** the user scrolls to the biography section
- **THEN** the section has a dark background (#1a1a1a)
- **AND** a pink accent bar is positioned at top-left
- **AND** a portrait image, heading, and body text are shown
- **AND** two-column checkmark lists are displayed

### Requirement: Blog Section

Users SHALL see blog entries with images, titles, and excerpts.

#### Scenario: Blog entries

- **WHEN** the user scrolls to the blog section
- **THEN** 4 blog entries are shown
- **AND** each entry has an image, title, author/date meta, and excerpt
- **AND** pagination controls are displayed

### Requirement: Contact Form

Users SHALL see a contact form with standard fields on a dark background.

#### Scenario: Contact form fields

- **WHEN** the user scrolls to the contact section
- **THEN** fields are displayed: First Name, Last Name, Email, Subject, Message
- **AND** a "Send Message" button with pink accent is shown
- **AND** the section has a dark background

### Requirement: Footer

Users SHALL see a footer linking to Component Dock.

#### Scenario: Footer attribution

- **WHEN** the footer is displayed
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/

### Requirement: Accessibility

All sections SHALL use semantic HTML, proper labels, and accessible interactive elements.

#### Scenario: Semantic structure

- **WHEN** inspecting the page
- **THEN** semantic elements are used (nav, main, section, form, label)
- **AND** form labels are associated with inputs via htmlFor
- **AND** interactive elements have accessible names

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lens/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lens/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Sidebar Navigation — the logo "LENS" is displayed
- [ ] Hero Section — a full-screen background image is shown
- [ ] Photo Grid — photos are arranged in a 3-column responsive layout
- [x] Testimonials — a heading "TESTIMONIAL" is shown
- [ ] Biography Section — the section has a dark background (#1a1a1a)
- [ ] Blog Section — 4 blog entries are shown
- [ ] Contact Form — fields are displayed: First Name, Last Name, Email, Subject, Message
- [ ] Accessibility — semantic elements are used (nav, main, section, form, label)
