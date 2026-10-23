# Template: Formbox (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form 17" (https://colorlib.com/wp/template/contact-form-17/).
Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-17/

A two-column contact form with a navy blue (#35477d) sidebar showing contact information,
and a white form panel with underline-style inputs. The overall design features a teal
(#8bbabb) background accent on the upper portion.

Design Tokens:

- Font: Roboto (400, 700, 900 weights) via Google Fonts
- Brand color: #35477d (navy blue)
- Brand dark: #2d3d6b (darker navy for hover)
- Background accent: #8bbabb (teal)
- Text primary: #000000 (headings)
- Text secondary: #8c8c8c (body text)
- Label color: #b3b3b3 (light gray)
- Input border: #cccccc (bottom border only)
- Focus border: #000000
- Sidebar background: #35477d
- Sidebar text: rgba(255, 255, 255, 0.5)
- Sidebar icons: #ffffff

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Contact Form 17** — https://colorlib.com/wp/template/contact-form-17/
- **Preview**: `https://preview.colorlib.com/theme/bootstrap/contact-form-17/` — HTTP 200 on 2026-10-23, 6,530 bytes, served `<title>` **`Contact Form #7`** (the demo's own label is one number off its slug; keep the app's own title, do not copy either number as copy).
- **Stylesheet measured**: `css/style.css?v=ba904131` — 15,247 bytes, sha256 `af8d2e44c067…`. One sheet, no webfont `<link>`.
- **Measured how**: hex-literal census + winning rule per selector. Two layers: Bootstrap-4 base (with a lime palette) and a late `cl-` theme layer that repaints the card navy, teal band and black hairlines.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand navy | `#35477d` | 3 | `.cl-btn.cl-btn-primary` background · `.contact-wrap .form h3` · `.contact-wrap .contact-info` background |
| Teal band | `#8bbabb` | 1 | `body:before` — `height: 50vh`, full-width, behind the card's top half |
| Body copy | `#8c8c8c` | 1 | `body` color (line-height 1.9) |
| Ink | `#000` | 4 | `h3,.h3` · `.cl-col-form-label` · input focus border · `.submitting` |
| Card labels | `#b3b3b3` | 1 | `.contact-wrap .cl-col-form-label` (14px) |
| Input hairline | `#ccc` | 1 | `.cl-form-control` single bottom border |
| White | `#fff` | 10 | `body` background · `.contact-wrap .form` · button text · `.contact-info h3` / icon glyphs |
| Sidebar text | `rgba(255,255,255,0.5)` | — | `.contact-wrap .contact-info` and its `li` rows |
| Error | `red` | — | `label.error` (12px) |

The lime `#ccda46`×5 (`a`, `.cl-btn-primary`) and `#e9efb0` (input focus border) are **base-layer only** — `.cl-btn.cl-btn-primary` and the input rules are overridden to `#35477d` / `#000`. The page renders no anchor, so the lime is a dead token: do **not** put it in `@theme`. Other Bootstrap residues (`#212529`×7, `#6c757d`×4, `#495057`×3, `#fcf8e3`, `#ced4da`, `#e9ecef`, `#a3b023`, `#c0d02a`, `#adbb25`, `#b7c628`) are likewise invisible here.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Roboto", sans-serif` · 1rem · 1.9 · `#8c8c8c` | `body` (theme override; the base stack is the Bootstrap system stack) |
| Card headings | Roboto · 20px · `.form h3` navy `#35477d`, `.contact-info h3` `#fff` | `.contact-wrap .form h3`, `.contact-wrap .contact-info h3` |
| Labels | Roboto · 13px base, **14px `#b3b3b3` inside the card** | `.cl-col-form-label` |
| Button | Roboto · 12px · uppercase · `letter-spacing: .2rem` | `.cl-btn` theme override |
| Icons | `.wrap-icon` 20px `#fff` | `.contact-info ul li .wrap-icon` |

Roboto is referenced by name only (no `@font-face`); a machine without it falls back to the system sans. **No serif face.**

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Page band | `.content { padding: 7rem 0 }` over the 50vh teal `body:before` |
| Card | `.contact-wrap` white, `box-shadow: 0 0 20px 0 rgba(0,0,0,0.2)`; form and info panels `padding: 40px` |
| Inputs | `border: none`, single bottom border `1px solid #ccc`, `border-radius: 0`, `height: 45px`, no padding, focus border `#000` |
| Button | `height: 45px`, `border-radius: 0`, `border: none`, 12px uppercase `letter-spacing: .2rem`, `padding: 15px 20px`, navy on white |
| Labels | 14px `#b3b3b3` inside the card, `margin: 0 0 10px` |

Section order measured in the reference DOM: teal top band → white card [left `.form` panel: `h3 "Send us a message"` + Name\*/Email\*/Phone/Company/Message\* + `Send Message` | right `.contact-info` navy panel: `h3 "Contact Information"`, wrapped icon rows] → end. No page title and no footer in the reference; the app supplies the Component Dock footer.

## Requirements

### Requirement: Contact form rendering

The template SHALL display a two-column contact card with a form panel and a sidebar.

#### Scenario: Form panel renders all fields

- **WHEN** the page loads
- **THEN** the "Send us a message" heading is visible
- **AND** the Name, Email, Phone, Company, and Message fields are present
- **AND** the "Send Message" button is visible

#### Scenario: Sidebar renders contact information

- **WHEN** the page loads
- **THEN** the "Contact Information" heading is visible
- **AND** the description paragraph is visible
- **AND** the address, phone, and email are displayed with icons

### Requirement: Form interaction

The template SHALL allow users to type into all form fields and prevent default form submission.

#### Scenario: User types in form fields

- **WHEN** the user types into any form field
- **THEN** the field value updates to reflect the typed text

#### Scenario: Form submission is prevented

- **WHEN** the user clicks the "Send Message" button
- **THEN** the form submission is prevented (no page navigation)

### Requirement: Footer links to Component Dock

The template SHALL display a footer linking to https://www.componentdock.com/.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formbox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Contact form rendering — the "Send us a message" heading is visible
- [ ] Form interaction — the field value updates to reflect the typed text
