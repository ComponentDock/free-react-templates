# Template: Formrise (Contact Form)

## Purpose

A single dark card with a form on the left and contact information on the right, featuring an orange/amber "Send Message" button. It also includes and underline-style inputs on a dark background. Recreation of ColorLib **Contact Form 07**.

- **Source slug:** `contact-form-07`
- **Source URL:** https://colorlib.com/wp/template/contact-form-07/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-07/ (404 at
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
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-07/` | HTTP 200 · 13,988 B · title `Contact Form 07` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-07/css/style.css?v=bc1b3538` | HTTP 200 · 17,028 B · sha256 `683de413988c` |

**Live palette** (hex × occurrences across the sheets): `#f39422`×3,
`#d67a0c`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#e8a838`.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Contact Form 07** — https://colorlib.com/wp/template/contact-form-07/
- **Preview**: `https://preview.colorlib.com/theme/bootstrap/contact-form-07/` (the slug-only `/theme/contact-form-07/` path 404s; the `bootstrap/` family is the live demo) — HTTP 200 on 2026-10-23, 13,988 bytes, title `Contact Form 07`.
- **Stylesheet measured**: `css/style.css?v=bc1b3538` — 17,028 bytes, sha256 `683de413988c…`. One sheet, no inline `<style>`, no webfont `<link>`.
- **Measured how**: hex-literal census of the sheet, then the winning rule per selector. Same Bootstrap-4 base + `cl-` theme layer as the other `contact-form-0N` siblings; the theme layer is what paints the page.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Accent orange | `#f39422` | 3 | `a` color · `.cl-btn.cl-btn-primary` background + border |
| Accent orange (hover) | `#d67a0c` | 2 | `.cl-btn.cl-btn-primary:hover, :focus` |
| Form panel (charcoal) | `#272a34` | 1 | `.contact-wrap` background — the whole left column |
| Info panel (near-black) | `#1c1e25` | 1 | `.info-wrap` background — the right column |
| Page canvas | `#fafafa` | 1 | `body` background |
| Body copy | `#666666` | 1 | `body` color |
| Ink | `#000` | 2 | `h2,h3,.h2,.h3` · `.heading-section` (page title only — the card headings are `#fff`/white) |
| Card text | `#fff` | 12 | `.contact-wrap h3`, `.info-wrap h3`, `.dbox .icon span`, input text `rgba(255,255,255,0.8)` |
| Input hairline | `rgba(255,255,255,0.2)` → focus `0.5` | — | `.contactForm .cl-form-control` bottom border |
| Icon plate | `rgba(255,255,255,0.02)` | — | `.info-wrap .dbox .icon` 50×50 circle |
| Error | `#f65c78` | 1 | `#contactForm .error` |

Bootstrap-4 residues, overridden and **not** tokens: `#007bff`×5, `#6c757d`×4, `#212529`×3, `#495057`×3, `#0062cc`×2, `#0056b3`, `#0069d9`, `#005cbf`, `#80bdff`, `#ced4da`, `#e9ecef`, `#fcf8e3`.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Poppins", Arial, sans-serif` · 16px / 1.8 · 400 | `body` (theme override) |
| Page title | Poppins · 28px · 400 · `#000` | `.heading-section` |
| Panel headings | Poppins · `#fff`; info panel `h3` 18px | `.contact-wrap h3`, `.info-wrap h3` |
| Inputs | 14px (16px inside `#contactForm`) · `rgba(255,255,255,0.8)`; placeholder `0.5` | `.cl-form-control` |
| Button | 14px / 400 | `.cl-btn` |

No `@font-face`, no webfont link — Poppins falls back to Arial. **No serif face anywhere.**

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Section band | `.ftco-section { padding: 7em 0 }` on `#fafafa` |
| Card | `.wrapper` `border-radius: 10px`, `overflow: hidden`, `box-shadow: 0 21px 41px -13px rgba(0,0,0,0.18)` |
| Split | `.contact-wrap` (form) + `.info-wrap` (info), both `cl-p-md-5 cl-p-4`, 6/6 columns |
| Inputs | transparent, `height: 52px`, `border-radius: 0`, bottom border 1px `rgba(255,255,255,0.2)` |
| Button | `padding: 12px 16px`, `border-radius: 2px`, shadow `0 10px 20px -6px rgba(0,0,0,0.12)`, hover shadow `… 0.22` |
| Info icons | 50×50, `border-radius: 50%`, `background: rgba(255,255,255,0.02)`, 20px `#fff` glyph |

Section order measured in the reference DOM: `h2 "Contact Form #07"` → `.wrapper` [left `.contact-wrap` `#272a34`: `h3 "Write us"` + Name/Email/Subject/Message + submit `Send Message` | right `.info-wrap.img` `#1c1e25`: `h3 "Contact information"`, line "We're open for any suggestion or just to have a chat", four `.dbox` rows — Address / Phone / Email / Website] → end. No footer in the reference; the app appends the Component Dock footer.

## Requirements

### Requirement: Page layout

The page SHALL display a centered dark card on a light gray background with a page title above it.

#### Scenario: Page renders centered dark card

- **WHEN** I visit the Formrise page
- **THEN** I see a centered card with a dark background on a light gray page

#### Scenario: Page title displayed

- **WHEN** I visit the Formrise page
- **THEN** I see "Contact Form #07" as a centered heading above the card

### Requirement: Dark card structure

The card SHALL have two sections divided by a vertical divider.

#### Scenario: Card has form and info sections

- **WHEN** I visit the Formrise page
- **THEN** the card contains a form section on the left
- **AND** a contact information section on the right
- **AND** a vertical divider separates the two sections

### Requirement: Contact form

The form SHALL display all fields with underline styling and an orange submit button.

#### Scenario: Form displays all fields

- **WHEN** I visit the Formrise page
- **THEN** I see a Name input field
- **AND** I see an Email input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea
- **AND** I see a Send Message button

#### Scenario: Inputs have underline style on dark background

- **WHEN** I visit the Formrise page
- **THEN** all form inputs have a bottom border only (underline style)
- **AND** the input borders are light colored against the dark background

#### Scenario: Send Message button is styled

- **WHEN** I visit the Formrise page
- **THEN** the Send Message button has an orange background and white text

### Requirement: Contact information

The info section SHALL display heading, subtext, and four contact items with icons.

#### Scenario: Info section displays heading and subtext

- **WHEN** I visit the Formrise page
- **THEN** I see "Contact information" heading on the right side of the card
- **AND** I see "We're open for any suggestion or just to have a chat" below the heading

#### Scenario: Info section displays contact items

- **WHEN** I visit the Formrise page
- **THEN** I see an address icon and text "198 West 21th Street, Suite 721 New York NY 10016"
- **AND** I see a phone icon and text "+ 1235 2355 98"
- **AND** I see an email icon and text "info@yoursite.com"
- **AND** I see a globe icon and text "yoursite.com"

### Requirement: Responsive behavior

The card sections SHALL stack vertically on mobile viewports.

#### Scenario: Sections stack on mobile

- **WHEN** I visit the Formrise page on a mobile viewport
- **THEN** the form and contact information sections stack vertically

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** I visit the Formrise page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

### Requirement: Design fidelity

The template SHALL match the original ColorLib design tokens.

#### Scenario: Dark card background

- **WHEN** I visit the Formrise page
- **THEN** the card has a dark charcoal background (#343A40)
- **AND** the card has rounded corners (~5px)

#### Scenario: Typography

- **WHEN** I visit the Formrise page
- **THEN** headings use Playfair Display serif font
- **AND** body text uses Poppins sans-serif font

#### Scenario: No ColorLib references

- **WHEN** I inspect the app source code
- **THEN** there are no references to "colorlib" in any app file

## Verification checklist

- [ ] `npm run verify:app -- formrise` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 13 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page layout
      - Dark card structure
      - Contact form
      - Contact information
      - Footer
      - Design fidelity
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
