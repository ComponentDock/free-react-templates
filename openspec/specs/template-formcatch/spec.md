# Template: Formcatch (Contact Form)

## Purpose

A contact page with a horizontal info bar at the top (four items with circular teal icons) and a two-column card below. It also includes image on right). Recreation of ColorLib "Contact Form 03".

- **Source slug:** `contact-form-03`
- **Source URL:** https://colorlib.com/wp/template/contact-form-03/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-03/ (404 at
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
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-03/` | HTTP 200 · 14,195 B · title `Contact Form 03` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-03/css/style.css?v=3656ea60` | HTTP 200 · 16,560 B · sha256 `9f28e79f2e1f` |

**Live palette** (hex × occurrences across the sheets): `#46b5d1`×6,
`#2d9bb7`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#7ec8e3`.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Contact Form 03** — https://colorlib.com/wp/template/contact-form-03/
- **Preview**: `https://preview.colorlib.com/theme/bootstrap/contact-form-03/` (the slug-only `/theme/contact-form-03/` path 404s; the `bootstrap/` path is the live demo) — HTTP 200 on 2026-10-23, 14,195 bytes, title `Contact Form 03`.
- **Stylesheet measured**: `css/style.css?v=3656ea60` — 16,560 bytes, sha256 `9f28e79f2e1f…`. No second sheet, no inline `<style>`, no Google-Fonts `<link>` in the head.
- **Measured how**: hex-literal census of the sheet (count = literal occurrences), then the winning rule per selector (the sheet is Bootstrap-4 base + a slim `cl-`-prefixed override layer, so several Bootstrap defaults survive in the file but are re-painted with `!important`).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand teal | `#46b5d1` | 6 | `a`, `.dbox p a`, `.dbox .icon` fill, `.cl-form-control:focus` border, `.cl-btn.cl-btn-primary` background + border |
| Brand teal (hover) | `#2d9bb7` | 2 | `.cl-btn.cl-btn-primary:hover/:focus` background + border |
| Page canvas | `#fafafa` | 1 | `body` background |
| Body copy | `#666666` | 1 | `body` color |
| Ink | `#000` | 4 | `.heading-section`, `h2/h3`, `.dbox p span`, `.contactForm .label` |
| Card white | `#fff` | 12 | `.contact-wrap`, `.dbox .icon span` (glyph), `.cl-btn-primary` text, Bootstrap `body` base |
| Success green | `#28a745` | 1 | `#form-message-success` confirmation copy |
| Input hairline | `rgba(0,0,0,0.1)` | — | single `border-bottom` on `.contactForm .cl-form-control` |
| Placeholder | `rgba(0,0,0,0.3)` | — | `::placeholder` in the form |

Bootstrap-4 residues still present but **not visible** on this page (all overridden by the teal `!important` layer): `#007bff`×5, `#6c757d`×4, `#212529`×3, `#495057`×3, `#0062cc`×2, `#0069d9`, `#0056b3`, `#005cbf`, `#80bdff`, `#ced4da`, `#e9ecef`, `#fcf8e3`. Do not treat them as design tokens.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Poppins", Arial, sans-serif` · 16px / 1.8 | `body` override rule |
| Headings (`h2`, `h3`, `.heading-section`) | same Poppins stack · 28px · `#000` · weight 400 | `h2, h3, .h2, .h3` + `.heading-section` |
| Form labels | Poppins · 12px · 600 · uppercase | `.contactForm .label` |
| Icons | Font Awesome 4 (`.fa fa-map-marker` / `fa-phone` / `fa-paper-plane` / `fa-globe`) | markup; 20px glyphs in 60px circles |

Four `@font-face` blocks declare **Roboto**, but the `body`/heading overrides replace that stack with Poppins and the page loads no webfont file for it — in a browser without Poppins installed the reference falls back to Arial. **There is no serif face anywhere in this template** (see delta).

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Section band | `.ftco-section { padding: 7em 0 }` on `#fafafa` |
| Card | 7/5 split, `.cl-no-gutters`: `.contact-wrap` white (7 cols) + `.info-wrap` (5 cols, `height: 400px`, `p-5`) |
| Info icons | `.dbox .icon` 60×60, `border-radius: 50%`, `background: #46b5d1`, glyph `#fff` 20px; `.dbox` `padding: 0 20px`, `margin-bottom: 25px` |
| Inputs | no box: `border: none; border-bottom: 1px solid rgba(0,0,0,0.1); padding: 0`; focus border `#46b5d1`; `border-radius: 2px` (Bootstrap base 0.25rem overridden) |
| Button | `.cl-btn.cl-btn-primary` `padding: 12px 16px`, `border-radius: 5px`, 14px/400, `#fff` on `#46b5d1`, `box-shadow: 0 10px 20px -6px rgba(0,0,0,0.12)`, hover `#2d9bb7` |
| Right panel | `.info-wrap.img` = `background-size: cover / center`, inline `background-image: url(images/img.jpg)` — a **CSS background photo**, not an `<img>` (the demo file is a B&W lioness) |

### Section order (reference DOM, top to bottom)

`h2.heading-section ("Contact Form #03") -> 4-column info bar (.dbox ×4: address, phone, email, website) -> 7/5 card (white form panel with h3 "Contact Us" + underline form + Send Message, photo panel right) -> end of page`

The reference has **no footer**; the shipped app appends the mandatory Component Dock footer.

### Delta vs shipped app (`apps/formcatch`)

- **Brand drift**: app `@theme` carries `--color-brand #7ec8e3` / `--color-brand-dark #5fb8d8` (the lighter teal read off the screenshot); the live sheet paints `#46b5d1` / `#2d9bb7`. Spec target = `#46b5d1`.
- **Canvas drift**: app `--color-bg-page #f5f5f5`, reference `#fafafa`.
- **Body copy**: app `--color-text-primary #333333`, reference `#666666` (headings alone are `#000`).
- **Typography**: app loads **Playfair Display** (serif) for the page `h1` and the card `h2` and styles both `font-bold`; the reference is Poppins/Arial **sans** at weight 400 with `#000`. This is the one structural fidelity gap — the spec's "serif" wording above is the prep-time screenshot reading, not the measured reference.
- **Icon size**: app `h-12 w-12` (48px) circles, reference 60px.
- **Button radius**: app `rounded-[3px]`, reference `5px`; app has no shadow, reference `0 10px 20px -6px rgba(0,0,0,0.12)`.
- **Heading level**: reference title is an `h2` (28px), app renders `h1` — acceptable for a11y, note it when parity-tuning.
- Underline inputs, uppercase 12px labels, 4-up info bar, uppercase field order (name/email → subject → message) and the 7/5 card split all match 1:1.

## Requirements

### Requirement: Page title rendering

The page SHALL display "Contact Form #03" centered at the top in a serif font.

#### Scenario: Title is visible

- **WHEN** I visit the Formcatch page
- **THEN** I see a heading "Contact Form #03" centered at the top of the page

### Requirement: Info bar with contact items

The page SHALL display a horizontal info bar with four contact items (Address,
Phone, Email, Website), each with a circular teal icon container.

#### Scenario: Info bar shows four items

- **WHEN** I visit the Formcatch page
- **THEN** I see a horizontal row of four contact items below the title

#### Scenario: Info bar items have circular teal icons

- **WHEN** I visit the Formcatch page
- **THEN** each info bar item has a circular teal icon container

#### Scenario: Info bar displays address

- **WHEN** I visit the Formcatch page
- **THEN** I see an address icon and text containing "198 West 21th Street"

#### Scenario: Info bar displays phone

- **WHEN** I visit the Formcatch page
- **THEN** I see a phone icon and text containing "+ 1235 2355 98"

#### Scenario: Info bar displays email

- **WHEN** I visit the Formcatch page
- **THEN** I see an email icon and text containing "info@yoursite.com"

#### Scenario: Info bar displays website

- **WHEN** I visit the Formcatch page
- **THEN** I see a globe icon and text containing "yoursite.com"

### Requirement: Two-column contact card

The page SHALL display a two-column card with a contact form on the left and a
placeholder image on the right.

#### Scenario: Card renders form and image

- **WHEN** I visit the Formcatch page
- **THEN** I see a centered card with a form on the left and an image on the right

#### Scenario: Right column displays image

- **WHEN** I visit the Formcatch page
- **THEN** the right column of the card displays a placeholder image

### Requirement: Contact form fields

The form SHALL display Full Name, Email Address, Subject, and Message fields
with a Send Message button.

#### Scenario: Form displays all fields

- **WHEN** I visit the Formcatch page
- **THEN** I see a Full Name input, Email Address input, Subject input, Message textarea, and Send Message button

#### Scenario: Full Name and Email are side by side

- **WHEN** I visit the Formcatch page
- **THEN** the Full Name and Email Address inputs are displayed in the same row on desktop

#### Scenario: Subject spans full width

- **WHEN** I visit the Formcatch page
- **THEN** the Subject input spans the full width of the form

### Requirement: Form input styling

All form inputs SHALL use underline style (bottom border only) with uppercase labels.

#### Scenario: Inputs have underline style

- **WHEN** I visit the Formcatch page
- **THEN** all form inputs have a bottom border only

#### Scenario: Labels are uppercase

- **WHEN** I visit the Formcatch page
- **THEN** all form field labels are displayed in uppercase

### Requirement: Send Message button styling

The Send Message button SHALL have a teal background with white text and slight border radius.

#### Scenario: Button is styled

- **WHEN** I visit the Formcatch page
- **THEN** the Send Message button has a teal background and white text

### Requirement: Footer with Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** I visit the Formcatch page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references "Component Dock"

### Requirement: Responsive behavior

The page SHALL be responsive: info bar wraps on mobile, card columns stack on mobile.

#### Scenario: Info bar wraps on mobile

- **WHEN** I visit the Formcatch page on a mobile viewport
- **THEN** the info bar items wrap to multiple rows

#### Scenario: Card columns stack on mobile

- **WHEN** I visit the Formcatch page on a mobile viewport
- **THEN** the form and image columns stack vertically

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formcatch/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formcatch/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page title rendering — I see a heading "Contact Form #03" centered at the top of the page
- [ ] Info bar with contact items — I see a horizontal row of four contact items below the title
- [ ] Two-column contact card — I see a centered card with a form on the left and an image on the right
- [ ] Contact form fields — I see a Full Name input, Email Address input, Subject input, Message textarea, and Send Message button
- [ ] Form input styling — all form inputs have a bottom border only
- [ ] Send Message button styling — the Send Message button has a teal background and white text
- [ ] Responsive behavior — the info bar items wrap to multiple rows
