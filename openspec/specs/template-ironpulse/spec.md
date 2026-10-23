---
name: ironpulse
description: Crossfit & Fitness landing page template — recreation of ColorLib Crossbody
template: ironpulse
original: crossbody
original_url: https://colorlib.com/wp/template/crossbody/
preview_url: https://preview.colorlib.com/theme/crossbody/
---

# Template: Ironpulse (Bootstrap)

## Purpose

IronPulse is a free crossfit and fitness landing page template built with React 19, Tailwind CSS 4, and TypeScript. It recreates the ColorLib Crossbody design under a new, original name. The template provides a complete gym/fitness website with hero, pricing, programs, stats, coaches, testimonials, blog, contact form, gallery, and footer sections.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/crossbody/ (HTTP 200, 42,127 B, fetched 2026-10-23) and its theme stylesheet `theme/crossbody/css/style.css` (85,816 B, sha256 `bad604c4de39…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff0055` | 126 declarations — `.pricing-wrap .text .btn-custom`, `.program .icon` |
| Other chromatic values | `#ff6600`, `#ff0000`, `#78d5ef` | `#ff6600` × 108 (.pricing-wrap .text span.price); `#ff0000` × 30 (a); `#78d5ef` × 8 (a) |
| Surface | `#ffffff` | 57 declarations — `body`, `.table .table` |
| Ink / dark surface | `#000000` | 23 declarations — `.close`, `.close:hover` |
| Typeface | `"Work Sans", sans-serif` (3 rules — body)<br>`"Work Sans", sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529` | `body{…}` rule |
| Radii | `50%`, `0.25rem`, `4px` | `50%` (.ftco-about .one-half .icon); `0.25rem` (.form-control); `4px` (.tagcloud a) |

Palette in order of use: `#ff0055` ×126, `#ff6600` ×108, `#ffffff` ×57, `#ff0000` ×30, `#000000` ×23, `#212529` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL display a fixed dark top navbar with the brand name "IRONPULSE" and navigation links (Home, Program, Coaches, Schedule, About, Blog, Contact). On mobile, a hamburger button SHALL toggle the mobile menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the brand "IRONPULSE" is visible
- **AND** all navigation links are visible

#### Scenario: Mobile menu toggles on hamburger click

- **WHEN** the hamburger button is clicked
- **THEN** the mobile menu expands
- **AND** all navigation links are visible

### Requirement: Hero section with headline and video play

The template SHALL display a full-height hero section with a background image, dark overlay, large "Iron Pulse" headline, subtitle "Crossfit. Working Harder", and a play button that opens a video overlay.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the "Iron Pulse" headline is visible
- **AND** the subtitle "Crossfit. Working Harder" is visible
- **AND** a play button is visible

#### Scenario: Play button opens video overlay

- **WHEN** the play button is clicked
- **THEN** a video overlay dialog appears

### Requirement: Pricing section with 3 course cards

The template SHALL display a "Pricing For Courses" section with 3 pricing cards (Weight Lifting, Crossfit Training, Cardio Blast) each showing a price of $240 and an "Enroll Now" CTA button.

#### Scenario: Pricing cards render

- **WHEN** the page loads
- **THEN** 3 pricing cards are visible
- **AND** each card has an "Enroll Now" button

### Requirement: Programs section with 5 fitness programs

The template SHALL display a split-layout programs section with 5 programs (Crossfit, Aerobic Classes, Fitness, Yoga Classes, Cardio Training) on the left and an image on the right.

#### Scenario: Programs render

- **WHEN** the page loads
- **THEN** 5 program items are visible

### Requirement: Stats counter with 4 statistics

The template SHALL display a dark-background stats section with 4 counters: 5000+ Happy Customers, 4560+ Perfect Bodies, 570+ Working Hours, 900+ Success Stories.

#### Scenario: Stats render

- **WHEN** the page loads
- **THEN** all 4 stat values are visible

### Requirement: Coaches section with 4 trainer cards

The template SHALL display an "Our Coaches" section with 4 coach cards (Travor James, Leonard Smith, James Buffer, Maricar Collins) each with social media icons.

#### Scenario: Coaches render

- **WHEN** the page loads
- **THEN** 4 coach cards are visible

### Requirement: Testimonials section

The template SHALL display a dark-background testimonials section with 3 testimonial cards containing quotes and avatars.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** testimonial quotes are visible

### Requirement: Blog section with 3 posts

The template SHALL display a "Recent Blog" section with 3 blog cards showing date, author, comments count, title, and excerpt.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 3 blog posts are visible

### Requirement: Contact form with fields

The template SHALL display a contact form with First Name, Last Name, Email, Phone, and Message fields plus an "Appointment" submit button. On submit, a thank-you message SHALL appear.

#### Scenario: Contact form renders

- **WHEN** the page loads
- **THEN** a form with all input fields is visible

#### Scenario: Form submission shows confirmation

- **WHEN** the form is filled and submitted
- **THEN** a thank-you message is displayed

### Requirement: Gallery with 4 images

The template SHALL display a 4-column image gallery with search icon overlay on hover.

#### Scenario: Gallery renders

- **WHEN** the page loads
- **THEN** 4 gallery images are visible

### Requirement: Footer with Component Dock link

The template SHALL display a dark 4-column footer (About, Recent Blog, Services, Contact) with a bottom bar linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ironpulse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ironpulse/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and mobile menu — the brand "IRONPULSE" is visible
- [x] Hero section with headline and video play — the "Iron Pulse" headline is visible
- [ ] Pricing section with 3 course cards — 3 pricing cards are visible
- [ ] Programs section with 5 fitness programs — 5 program items are visible
- [ ] Stats counter with 4 statistics — all 4 stat values are visible
- [ ] Coaches section with 4 trainer cards — 4 coach cards are visible
- [ ] Testimonials section — testimonial quotes are visible
- [ ] Blog section with 3 posts — 3 blog posts are visible
- [ ] Contact form with fields — a form with all input fields is visible
- [ ] Gallery with 4 images — 4 gallery images are visible
