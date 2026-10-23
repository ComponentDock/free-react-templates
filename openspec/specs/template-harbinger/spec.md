# Template: Harbinger (Coming Soon)

## Purpose

A Coming Soon template with under construction heading, email subscription and social media sections. Recreation of ColorLib "04 Comming Soon" (`04-comming-soon`).

- **Source:** https://colorlib.com/wp/template/04-comming-soon/
- **Preview (template HTML):** https://colorlib.com/etc/cs/04-comming-soon.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-19.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Coming Soon / Under Construction

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/cs/04-comming-soon.html (HTTP 200, 5,437 B, fetched 2026-10-23) and its theme stylesheet `etc/cs/04-comming-soon/css/style.css` (10,118 B, sha256 `c86c1afbed9f…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#2a61d6` | 2 declarations — `.right-section .footer-icons > li > a > i[class*="facebook"]` |
| Other chromatic values | `#3aa4f8`, `#8f614a`, `#e1c013` | `#3aa4f8` × 2 (.right-section .footer-icons > li > a > i[class*="twitter"]); `#8f614a` × 2 (.right-section .footer-icons > li > a > i[class*="instagram"]); `#e1c013` × 2 (.right-section .footer-icons > li > a > i[class*="pinterest"]) |
| Surface | `#ffffff` | 2 declarations — `.main-content .email-input-area .submit-btn`, `.main-area` |
| Ink / dark surface | `#0c0d0f` | 1 declarations — `.main-area` |
| Typeface | `'Open Sans', sans-serif` (1 rule — body)<br>`'Poppins', sans-serif` (1 rule — h1) | `font-family` declarations in the theme sheet |
| Radii | `0 2px 2px 0`, `2px`, `40px` | `0 2px 2px 0` (.main-content .email-input-area .submit-btn); `2px` (.main-content .email-input-area .email-input); `40px` (.right-section .footer-icons > li > a > i) |

Palette in order of use: `#2a61d6` ×2, `#3aa4f8` ×2, `#8f614a` ×2, `#e1c013` ×2, `#f43846` ×2, `#ffffff` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Split layout with hero image

The page SHALL display a full-viewport split layout with a hero image on the left and content on the right. On mobile, the layout stacks vertically.

#### Scenario: Desktop split layout

- **WHEN** I visit the Harbinger template on a desktop viewport
- **THEN** I see a hero image occupying the left half of the viewport
- **AND** I see content on the right half

#### Scenario: Mobile stacked layout

- **WHEN** I visit the Harbinger template on a mobile viewport
- **THEN** the hero image and content stack vertically

### Requirement: Under Construction heading

The page SHALL display an "Under Construction" heading and a maintenance description paragraph.

#### Scenario: Heading and description visible

- **WHEN** I visit the Harbinger template
- **THEN** I see a heading with text "Under Construction"
- **AND** I see a paragraph describing scheduled maintenance

### Requirement: Email subscription form

The page SHALL include an email input field and a "NOTIFY US" submit button. On submission, the form is replaced with a confirmation message.

#### Scenario: Email form rendered

- **WHEN** I visit the Harbinger template
- **THEN** I see an email input field
- **AND** I see a button labeled "NOTIFY US"

#### Scenario: Successful email submission

- **WHEN** I enter an email address in the input field
- **AND** I click the "NOTIFY US" button
- **THEN** I see a confirmation message
- **AND** the email form is no longer visible

### Requirement: Social media links

The page SHALL display social media icon links for Facebook, Twitter, Google, Instagram, and Pinterest.

#### Scenario: Social icons present

- **WHEN** I visit the Harbinger template
- **THEN** I see links labeled Facebook, Twitter, Google, Instagram, and Pinterest
- **AND** each link has an aria-label

### Requirement: Component Dock footer

The page SHALL display a footer with a link to Component Dock.

#### Scenario: Footer link

- **WHEN** I visit the Harbinger template
- **THEN** I see a link to "Component Dock" pointing to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/harbinger/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/harbinger/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split layout with hero image — I see a hero image occupying the left half of the viewport
- [x] Under Construction heading — I see a heading with text "Under Construction"
- [ ] Email subscription form — I see an email input field
- [ ] Social media links — I see links labeled Facebook, Twitter, Google, Instagram, and Pinterest
