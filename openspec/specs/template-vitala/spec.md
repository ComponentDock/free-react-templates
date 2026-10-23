---
name: Vitala
slug: medicare2
source: https://colorlib.com/wp/template/medicare2/
preview: https://preview.colorlib.com/theme/medicare2/
type: medical-landing
---

# Template: Vitala (Health Fitness)

## Purpose

Vitala is a medical and healthcare landing page template. It recreates the ColorLib "Medicare2" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with a blue gradient brand palette, Playfair Display headings, and Roboto body text.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/medicare2/ (HTTP 200, 26,460 B, fetched 2026-10-23) and its theme stylesheet `theme/medicare2/css/style.css` (79,586 B, sha256 `4d31b82e0b84…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0ba9ff` | 47 declarations — `.blog_right_sidebar .widget_title`, `#search_input_box` |
| Other chromatic values | `#f8b600`, `#56d9ff`, `#4cd3e3` | `#f8b600` × 18 (b); `#56d9ff` × 15 (#search_input_box); `#4cd3e3` × 11 (.success) |
| Surface | `#ffffff` | 94 declarations — `.primary-btn`, `.primary-btn:hover` |
| Ink / dark surface | `#222222` | 34 declarations — `h1`, `h2` |
| Typeface | `"Roboto", sans-serif` (7 rules — body)<br>`"Playfair Display", serif` (2 rules — h1) | `font-family` declarations in the theme sheet |
| Body type | `line-height: 24px; font-size: 14px; font-weight: 500; color: #777777` | `body{…}` rule |
| Radii | `3px`, `8px`, `20px` | `3px` (.radius); `8px` (.primary-radio); `20px` (.circle) |

Palette in order of use: `#ffffff` ×94, `#0ba9ff` ×47, `#222222` ×34, `#f8b600` ×18, `#eeeeee` ×17, `#f9f9ff` ×16.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page loads with all sections

The page SHALL render all required sections in the correct order: TopBar, Navbar, Hero, Features, About, Departments, Counters, Team, Blog + Appointment, and Footer.

#### Scenario: All sections are visible

- **GIVEN** I visit the Vitala page
- **THEN** I should see the top bar with phone and email
- **AND** I should see the navbar with navigation links
- **AND** I should see the hero banner heading
- **AND** I should see 3 feature cards
- **AND** I should see the about section
- **AND** I should see 6 department icons
- **AND** I should see 4 counter stats
- **AND** I should see 4 team members
- **AND** I should see 3 blog posts
- **AND** I should see the appointment form
- **AND** I should see the footer with Component Dock link

### Requirement: Mobile navigation toggle

The navbar SHALL provide a hamburger menu toggle for mobile viewports that shows/hides the mobile navigation.

#### Scenario: Toggle mobile menu

- **GIVEN** I visit the Vitala page on mobile
- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation should be visible
- **WHEN** I click the close button
- **THEN** the mobile navigation should be hidden

### Requirement: Appointment form interaction

The appointment form SHALL accept patient details and allow form submission.

#### Scenario: Fill and submit appointment form

- **GIVEN** I see the appointment form
- **WHEN** I fill in the patient name field
- **AND** I fill in the email field
- **AND** I submit the form
- **THEN** the form should remain visible

### Requirement: Department icons are displayed

The departments section SHALL display 6 medical department icons with labels.

#### Scenario: Department names visible

- **GIVEN** I see the departments section
- **THEN** I should see Cardiology, Urology, Dental Care, Eye Care, Neurology, and Plastic Surgery

### Requirement: Footer contains Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link present

- **GIVEN** I see the footer
- **WHEN** I look at the copyright area
- **THEN** I should see a link to Component Dock with target="_blank"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/vitala/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/vitala/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Mobile navigation toggle — the mobile navigation should be visible
- [ ] Appointment form interaction — the form should remain visible
- [ ] Department icons are displayed — I should see Cardiology, Urology, Dental Care, Eye Care, Neurology, and Plastic Surgery
