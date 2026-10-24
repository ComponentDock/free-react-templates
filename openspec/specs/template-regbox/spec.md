# Template: RegBox (Registration Form)

## Purpose

A clean, centered account registration form with a light blue full-viewport background and decorative corner images. Recreation of **Colorlib Reg Form V26**.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-26/
- **Live preview:** https://colorlib.com/etc/regform/colorlib-regform-26/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-26.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Source design:** ColorLib "Colorlib Regform 26" — https://colorlib.com/wp/template/colorlib-regform-26/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-regform-26.zip (HTTP 200, 115,384 B, sha256 `af2216f8dd5b…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#99ccff` | 1 declarations — `button` |
| Other chromatic values | `#accffe` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 2 declarations — `button`, `form` |
| Ink / dark surface | `#333333` | 2 declarations — `.form-holder span`, `h3` |
| Typeface | **Mulish** — request the Google family `Mulish` (400/600) (`Muli` is the same face's former name); the sheet declares the file stems `Muli-Regular` (6 rules — `.cl-form-control::-webkit-input-placeholder`), `Muli-SemiBold` (3 rules — `.cl-form-control`), and a font-file stem is never a family: `css?family=Muli-Regular` answers HTTP 400, so an app that follows the stem falls back to the UA default | `font-family` declarations in the design sheet |

Palette in order of use: `#999999` ×5, `#ffffff` ×2, `#333333` ×2, `#accffe` ×1, `#666666` ×1, `#99ccff` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- No rounding in the sheet: keep buttons and cards square unless a shared `packages/ui` component supplies its own.

Sheet identity (measured 2026-10-24): `etc/regform/colorlib-regform-26/css/style.css?v=bc58c71d` — 5,947 B, sha256 `b8a35e7aad35…`.

## Requirements

### Requirement: Page layout with full-viewport background

The page SHALL render a full-height light blue (#accffe) background with content centered vertically and horizontally.

#### Scenario: Card is centered on the blue background

- **WHEN** I visit the RegBox page
- **THEN** I see a white card centered horizontally and vertically on a light blue background
- **AND** the card has a box shadow of 0px 0px 10px 0px rgba(0, 0, 0, 0.2)

### Requirement: Registration form heading

The card SHALL display the heading "New Account?" in uppercase with letter-spacing.

#### Scenario: Heading is visible

- **WHEN** I visit the RegBox page
- **THEN** I see a heading with text "New Account?"
- **AND** the heading is uppercase with letter-spacing 3px
- **AND** the heading uses SemiBold weight (600)

### Requirement: Form fields

The form SHALL contain five input fields: Username, Phone Number, Mail, Password, and Confirm Password.

#### Scenario: All five fields are rendered with icons

- **WHEN** I visit the RegBox page
- **THEN** I see a text input labeled "Username" with a user icon
- **AND** I see a text input labeled "Phone Number" with a phone icon
- **AND** I see an email input labeled "Mail" with a mail icon
- **AND** I see a password input labeled "Password" with a lock icon
- **AND** I see a password input labeled "Confirm Password" with a lock icon

#### Scenario: Fields have underline-style borders

- **WHEN** I visit the RegBox page
- **THEN** each form field has a bottom border only (no full border box)
- **AND** the border color is #e6e6e6 by default
- **AND** the border color changes to #accffe on focus

### Requirement: Register button

The form SHALL contain a Register button with light blue background and uppercase text.

#### Scenario: Register button is visible and styled

- **WHEN** I visit the RegBox page
- **THEN** I see a "Register" button with a #99ccff background
- **AND** the button text is uppercase with letter-spacing 2px
- **AND** the button has a height of 49px

#### Scenario: Button hover animation

- **WHEN** I hover over the Register button
- **THEN** a semi-transparent blue overlay sweeps in from the left

### Requirement: Decorative images on desktop

The page SHALL display decorative images at the bottom corners of the card on desktop viewports.

#### Scenario: Decorative images appear on desktop

- **WHEN** the viewport is wider than 767px
- **THEN** a decorative image appears at the bottom-left of the form card
- **AND** a decorative image appears at the bottom-right of the form card

#### Scenario: Decorative images hidden on mobile

- **WHEN** the viewport is 767px or narrower
- **THEN** the decorative images are hidden

### Requirement: Footer with Component Dock link

The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present and opens externally

- **WHEN** I visit the RegBox page
- **THEN** I see a footer with a link to "Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Document title

The page SHALL set the document title to "RegBox — Registration Form Template".

#### Scenario: Title is set on mount

- **WHEN** I visit the RegBox page
- **THEN** the document title is "RegBox — Registration Form Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regbox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page layout with full-viewport background — I see a white card centered horizontally and vertically on a light blue background
- [x] Registration form heading — I see a heading with text "New Account?"
- [x] Form fields — I see a text input labeled "Username" with a user icon
- [x] Register button — I see a "Register" button with a #99ccff background
- [ ] Decorative images on desktop — a decorative image appears at the bottom-left of the form card
- [x] Document title — the document title is "RegBox — Registration Form Template"
