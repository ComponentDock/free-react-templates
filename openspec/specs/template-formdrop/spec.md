# Template: Formdrop (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form 04" — a two-column contact page with a
deep purple form panel on the left and a white contact-info panel on the right.
Features a pink/magenta accent button and a decorative heading underline.

- **Source slug:** `contact-form-04`
- **Source URL:** https://colorlib.com/wp/template/contact-form-04/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-04/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-04/` | HTTP 200 · 13,939 B · title `Contact Form 04` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-04/css/style.css?v=9be41b33` | HTTP 200 · 17,693 B · sha256 `e7a78fbcb3f9` |

**Live palette** (hex × occurrences across the sheets): `#7f279c`×10,
`#2e279d`×9, `#d62196`×4, `#aa1a77`×2, `#f65c78`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#6c63ff`, `#e91e63`.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Contact Form 04** — https://colorlib.com/wp/template/contact-form-04/
- **Preview**: `https://preview.colorlib.com/theme/bootstrap/contact-form-04/` (the slug-only `/theme/contact-form-04/` path 404s; the `bootstrap/` family is the live demo) — HTTP 200 on 2026-10-23, 13,939 bytes, title `Contact Form 04`.
- **Stylesheet measured**: `css/style.css?v=9be41b33` — 17,693 bytes, sha256 `e7a78fbcb3f9…`. One sheet, no inline `<style>`, no webfont `<link>` in the head.
- **Measured how**: hex-literal census of the sheet (count = literal occurrences), then the winning rule per selector. The sheet is a Bootstrap-4 base plus a slim `cl-`-prefixed theme layer; base hues the theme overrides are listed separately and are **not** tokens.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Panel gradient start | `#7f279c` | 10 | `.contact-wrap` `background` and every prefixed `linear-gradient(-45deg …, #7f279c 0%, #2e279d 100%)` fallback |
| Panel gradient end | `#2e279d` | 9 | same rule, stop 100% (`linear-gradient(135deg, #7f279c 0%, #2e279d 100%)` wins) |
| Accent magenta | `#d62196` | 4 | `a` color · `.info-wrap h3:after` (60×3 underline) · `.cl-btn.cl-btn-primary` background + border |
| Accent magenta (hover) | `#aa1a77` | 2 | `.cl-btn.cl-btn-primary:hover, :focus` |
| Page canvas | `#fafafa` | 1 | `body` background |
| Body copy | `#666666` | 1 | `body` color |
| Ink | `#000` | 5 | `h2,h3,.h2,.h3` · `.heading-section` · `.info-wrap h3` · `.dbox p span` · `.dbox .icon span` |
| Card / on-panel text | `#fff` | 10 | `.contact-wrap h3` · `.cl-btn-primary` text · `.cl-form-control` base |
| Error | `#f65c78` | 2 | `#contactForm .error` · `#form-message-warning` |
| Success | `#28a745` | 2 | `#form-message-success` · `.submitting` |
| Input hairline | `rgba(255,255,255,0.2)` → focus `0.5` | — | `.contactForm .cl-form-control` bottom border |
| Icon ring | `1px solid rgba(0,0,0,0.05)` | — | `.info-wrap .dbox .icon` |

Bootstrap-4 residues that the `cl-` layer overrides and that are **not** tokens: `#007bff`×5, `#6c757d`×4, `#212529`×3, `#495057`×3, `#0062cc`×2, `#0056b3`, `#80bdff`, `#ced4da`, `#e9ecef`, `#fcf8e3`.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Poppins", Arial, sans-serif` · 16px / 1.8 · 400 | `body` |
| Page title (`h2.heading-section`) | Poppins · 28px · 400 · `#000` | `.heading-section` |
| Panel headings (`h3`) | Poppins · 400 · `#fff` on the gradient, `#000` in the white panel | `.contact-wrap h3` / `h2,h3` |
| Inputs | 14px (16px inside `#contactForm`) · `rgba(255,255,255,0.8)`; placeholder `rgba(255,255,255,0.5)` | `.cl-form-control` |
| Button | 14px / 400 | `.cl-btn` |

The sheet declares **no** `@font-face` and links no webfont, so Poppins falls back to Arial on a machine without it. **No serif face anywhere.**

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Section band | `.ftco-section { padding: 7em 0 }` on `#fafafa` |
| Card | full-width `.wrapper`, `box-shadow: 0 21px 41px -13px rgba(0,0,0,0.18)`; 7/5 split inside |
| Form panel | `.contact-wrap` 135° gradient `#7f279c → #2e279d` |
| Info panel | white; `h3` underline 60×3 `#d62196`; `.dbox` rows `margin-bottom: 25px`; `.text` = `calc(100% - 50px)` |
| Inputs | transparent, `height: 52px`, `border-radius: 0`, single bottom border 1px `rgba(255,255,255,0.2)`; focus `0.5`; `textarea` `height: inherit` |
| Button | `padding: 12px 16px`, `border-radius: 5px`, shadow `0 10px 20px -6px rgba(0,0,0,0.12)`, hover shadow `… 0.22` |
| Info icons | 50×50, `border-radius: 50%`, 1px `rgba(0,0,0,0.05)` ring, 20px `#000` glyph |

Section order measured in the reference DOM: `h2 "Contact Form #04"` → `.wrapper` [left 7-col gradient panel: `h3 "Send us a message"` + Name/Email/Subject/Message + submit `Send Message` | right 5-col white panel: `h3 "Contact us"`, line "We're open for any suggestion or just to have a chat", four `.dbox` rows — Address / Phone / Email / Website] → end. The reference has **no footer**; the shipped app appends the mandatory Component Dock footer.

## Requirements

### Requirement: Page layout

The page SHALL display a centered two-column card on a light gray background with
the page title above the card.

#### Scenario: Two-column card renders

- **WHEN** I visit the Formdrop page
- **THEN** I see a centered card with two columns on a light gray background
- **AND** the page title "Contact Form #04" is displayed above the card

#### Scenario: Left column is purple and contains the form

- **WHEN** I visit the Formdrop page
- **THEN** the left column has a purple background
- **AND** it contains a "Send us a message" heading

#### Scenario: Right column is white and contains contact info

- **WHEN** I visit the Formdrop page
- **THEN** the right column has a white background
- **AND** it contains a "Contact us" heading

### Requirement: Contact form fields

The form SHALL contain Name, Email, Subject, and Message fields stacked
vertically with underline styling on a purple background.

#### Scenario: Form displays all fields

- **WHEN** I visit the Formdrop page
- **THEN** I see a Name input field
- **AND** I see an Email input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea
- **AND** I see a Send Message button

#### Scenario: Form fields are stacked vertically

- **WHEN** I visit the Formdrop page
- **THEN** all form fields are displayed in a single vertical column

#### Scenario: Inputs have underline style

- **WHEN** I visit the Formdrop page
- **THEN** all form inputs have a bottom border only (underline style)

#### Scenario: Send Message button is styled

- **WHEN** I visit the Formdrop page
- **THEN** the Send Message button has a pink background and white text

#### Scenario: Form fields accept input

- **WHEN** I type "John" into the Name field
- **THEN** the Name field displays "John"

#### Scenario: Form submission is prevented

- **WHEN** I click the Send Message button
- **THEN** the form does not navigate or reload

### Requirement: Contact info panel

The info panel SHALL display a heading with pink underline decoration, subtext,
and four contact items with gray circular icons.

#### Scenario: Info panel has heading underline

- **WHEN** I visit the Formdrop page
- **THEN** the "Contact us" heading has a short pink underline decoration below it

#### Scenario: Info panel displays subtext

- **WHEN** I visit the Formdrop page
- **THEN** I see "We're open for any suggestion or just to have a chat" below the heading

#### Scenario: Info panel displays address

- **WHEN** I visit the Formdrop page
- **THEN** I see an address icon and text "198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Info panel displays phone

- **WHEN** I visit the Formdrop page
- **THEN** I see a phone icon and text "+ 1235 2355 98"

#### Scenario: Info panel displays email

- **WHEN** I visit the Formdrop page
- **THEN** I see an email icon and text "info@yoursite.com"

#### Scenario: Info panel displays website

- **WHEN** I visit the Formdrop page
- **THEN** I see a globe icon and text "yoursite.com"

#### Scenario: Info panel icons have circular gray backgrounds

- **WHEN** I visit the Formdrop page
- **THEN** each contact info item has a circular gray icon container

### Requirement: Responsive behavior

The layout SHALL stack columns vertically on mobile viewports.

#### Scenario: Columns stack on mobile

- **WHEN** I visit the Formdrop page on a mobile viewport
- **THEN** the two columns stack vertically
- **AND** the form appears above the contact info panel

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** I visit the Formdrop page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formdrop/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page layout — I see a centered card with two columns on a light gray background
- [ ] Contact form fields — I see a Name input field
- [x] Contact info panel — the "Contact us" heading has a short pink underline decoration below it
- [ ] Responsive behavior — the two columns stack vertically
