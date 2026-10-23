# Template: Focal (Photography Portfolio)

> Recreation of ColorLib "Bato" (https://colorlib.com/wp/template/bato/)
> Preview: https://preview.colorlib.com/theme/bato/

## Purpose

Focal is a photography portfolio template with a navbar, hero, work gallery, about band, contact and footer. It recreates the ColorLib **Bato** design (https://colorlib.com/wp/template/bato/, preview: https://preview.colorlib.com/theme/bato/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (extracted from preview CSS)

| Token          | Value                                             |
| -------------- | ------------------------------------------------- |
| Brand accent   | `#F9CE00` (golden yellow)                         |
| Body bg        | `#ffffff`                                         |
| Body text      | `gray`                                            |
| Heading color  | `rgba(0,0,0,0.8)` (near-black)                    |
| Span text      | `rgba(114,114,114,0.8)`                           |
| Selection bg   | `#b7c2c2` (teal-gray)                             |
| Footer bg      | `#ffffff`                                         |
| Footer text    | `#000000`                                         |
| Body font      | `"Karla", sans-serif`                             |
| Heading font   | `"Playfair Display", Georgia, serif`              |
| CTA button     | uppercase, letter-spacing 7px, color black, no bg |
| Primary button | bg `#F9CE00`, text white, border 2px `#F9CE00`    |
| Submit button  | bg `#000000`, text white                          |
| Slide number   | 220px font, watermark style, bottom-positioned    |
| Tag badge      | uppercase, small, yellow bg or text               |
| Surface (measured) | `#ffd614` — paints it ×2 — `background` on `.btn-primary:hover, .btn-primary:focus, .btn-primary:active`; style.css (29,136 B, sha256 a504b168f021) · <https://preview.colorlib.com/theme/bato/> |

## Sections (in order)

1. **Navbar** — Brand name "Focal" left-aligned, hamburger menu right-aligned (mobile: slides in side nav from right with links: Home, Work, Blog, About, Contact)
2. **Hero** — Full-height section: 60% background image (left) + 40% text panel (right). Each slide has:
   - Slide number (large watermark style, e.g. "01/03")
   - Tag label (uppercase, small)
   - Heading (Playfair Display, 58px, bold)
   - Description paragraph
   - CTA button ("View Galleries →")
3. **Work Gallery** — Grid of portfolio images with hover overlay (search icon)
4. **About** — Split layout: image left, text right with heading + description
5. **Contact** — Contact info + form (name, email, message, submit button)
6. **Footer** — Social icons row, copyright text, "More templates at Component Dock" link

## Requirements

### Navbar

#### Scenario: Brand name renders

- **GIVEN** the page loads
- **THEN** the navbar displays "Focal"

#### Scenario: Mobile nav toggle

- **GIVEN** the viewport is narrow
- **WHEN** the user clicks the hamburger icon
- **THEN** the side navigation slides in from the right

### Hero

#### Scenario: Hero content renders

- **GIVEN** the page loads
- **THEN** the hero section displays a slide number "01/03"
- **AND** the hero section displays heading text
- **AND** the hero section displays a "View Galleries" CTA button

#### Scenario: Slide navigation

- **GIVEN** the hero has multiple slides
- **WHEN** the user clicks next/prev controls
- **THEN** the visible slide changes

### Work Gallery

#### Scenario: Gallery images render

- **GIVEN** the page loads
- **THEN** the gallery section displays portfolio images

### About

#### Scenario: About section renders

- **GIVEN** the page loads
- **THEN** the about section displays heading and description text

### Contact

#### Scenario: Contact form renders

- **GIVEN** the page loads
- **THEN** the contact section displays name, email, and message fields
- **AND** a submit button

### Footer

#### Scenario: Footer component link

- **GIVEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/focal/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/focal/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — the navbar displays "Focal"
- [ ] Hero — the hero section displays a slide number "01/03"
- [ ] Work Gallery — the gallery section displays portfolio images
- [ ] About — the about section displays heading and description text
- [ ] Contact — the contact section displays name, email, and message fields
