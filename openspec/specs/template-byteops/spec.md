---
name: byteops
description: >
  Recreation of ColorLib "Digilab" (https://colorlib.com/wp/template/digilab/)
  — a digital agency landing page with green brand (#31de79), Nunito Sans font,
  tabbed services, project gallery, team section, stats counters, process steps,
  FAQ accordion, testimonials carousel, blog cards, and contact form with map.
---

# Template: ByteOps (Digital Agency)

## Purpose

Recreate ColorLib "DigiLab" as a React 19 + Vite + Tailwind CSS 4 + TypeScript
template under the name "ByteOps". The template is a full-page digital agency
landing with 15 sections: navbar, hero, services (tabbed), features, projects,
about, team, stats, process, partners, FAQ (accordion), testimonials, blog,
contact (form + map), and footer with Component Dock attribution.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/digilab/ (HTTP 200, 68,114 B, sha256 `fa5ac7ba2291…`, fetched 2026-10-23) and its design stylesheet(s) `style.min.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#31de79` | 57 declarations — `.form-check-input:focus`, `.form-control:focus` |
| Other chromatic values | `#9ff669` (12), `#15803d` (6), `#98eebc` (3) | secondary hues in the same sheet |
| Surface | `#ffffff` | 63 declarations — `.form-range:focus::-moz-range-thumb`, `.form-range:focus::-webkit-slider-thumb` |
| Ink / dark surface | `#000000` | 62 declarations — `.text-bg-info`, `.text-bg-primary` |
| Typeface | `Nunito Sans` (1 rule — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `4px`, `1rem`, `30px` | `50%` (`.form-check-input[type=radio]`); `4px` (`.contact-section .box`); `1rem` (`.form-range::-moz-range-thumb`); `30px` (`.btn`) |
| Gradients | 19 declarations | `.ftco-navbar-light .navbar-brand span`, `.ftco-navbar-light.scrolled .navbar-brand span` |

Palette in order of use: `#ffffff` ×63, `#000000` ×62, `#31de79` ×57, `#9ff669` ×12, `#15803d` ×6, `#98eebc` ×3, `#232931` ×3, `#4a7d1c` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: App renders all sections

The app renders without errors and all 15 sections are present in the DOM.

#### Scenario: Full page render

- **WHEN** the app loads
- **THEN** the document title is "ByteOps — Digital Agency Template"
- **AND** a banner (navbar), main landmark, and contentinfo (footer) are present
- **AND** "Component Dock" link is visible in the footer

### Requirement: Navbar with mobile toggle

The navbar shows all section links on desktop and a toggleable mobile menu.

#### Scenario: Desktop navigation

- **WHEN** the page renders
- **THEN** the Primary navigation contains at least 7 section links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the "Open menu" button
- **THEN** the mobile menu becomes visible and the button changes to "Close menu"
- **WHEN** the user clicks the "Close menu" button
- **THEN** the mobile menu hides and the button changes to "Open menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a nav link
- **THEN** the mobile menu closes

#### Scenario: Mobile menu closes on CTA click

- **WHEN** the mobile menu is open and the user clicks "Get in touch"
- **THEN** the mobile menu closes

### Requirement: Tabbed services section

The services section shows 7 service tabs with switchable content panels.

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** "Business Strategy" content is visible

#### Scenario: Tab switching

- **WHEN** the user clicks the "Research" tab
- **THEN** the "Research" heading is visible
- **WHEN** the user clicks the "UI Design" tab
- **THEN** the "UI Design" heading is visible

### Requirement: FAQ accordion

The FAQ section shows 5 questions with expand/collapse behavior.

#### Scenario: First question expanded

- **WHEN** the page loads
- **THEN** "What services do you offer?" is visible

#### Scenario: Toggle questions

- **WHEN** the user clicks "How long does a typical project take?"
- **THEN** the answer about timelines is visible
- **WHEN** the user clicks the same question again
- **THEN** the answer is hidden

### Requirement: Stats counters

The stats section displays 4 numeric values.

#### Scenario: Render stats

- **WHEN** the page loads
- **THEN** the values 500, 850, 20, and 24 are all visible

### Requirement: Team section

The team section shows 4 staff members with names and positions.

#### Scenario: Render team

- **WHEN** the page loads
- **THEN** Lloyd Wilson, Rachel Parker, Ian Smith, and Alicia Henderson are visible

### Requirement: Blog section

The blog section shows 3 blog post cards with titles.

#### Scenario: Render blog posts

- **WHEN** the page loads
- **THEN** blog post titles about lead generation, marketing trends, and online presence are visible

### Requirement: Contact form

The contact section has a form with inputs and a submit button.

#### Scenario: Render contact form

- **WHEN** the page loads
- **THEN** inputs for name, email, subject, and message are visible
- **AND** a "Send Message" button is present

#### Scenario: Form submission

- **WHEN** the user clicks "Send Message"
- **THEN** the form's default submit behavior is prevented

### Requirement: Footer with Component Dock

The footer links to componentdock.com.

#### Scenario: Footer attribution

- **WHEN** the page loads
- **THEN** "Component Dock" text is visible in the footer
- **AND** it links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/byteops/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/byteops/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with mobile toggle — the Primary navigation contains at least 7 section links
- [x] Tabbed services section — "Business Strategy" content is visible
- [x] FAQ accordion — "What services do you offer?" is visible
- [ ] Stats counters — the values 500, 850, 20, and 24 are all visible
- [ ] Team section — Lloyd Wilson, Rachel Parker, Ian Smith, and Alicia Henderson are visible
- [ ] Blog section — blog post titles about lead generation, marketing trends, and online presence are visible
- [ ] Contact form — inputs for name, email, subject, and message are visible
