# Template: Healwise (ColorLib Drcare Recreation)

## Purpose

Recreation of ColorLib **Drcare** (`https://colorlib.com/wp/template/drcare/`, preview: `https://preview.colorlib.com/theme/drcare/`). Built as a modern React 19 + Tailwind CSS 4 healthcare/medical landing page.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/drcare/ (HTTP 200, 63,043 B, fetched 2026-10-23) and its theme stylesheet `theme/drcare/css/style.css` (85,924 B, sha256 `7951bd841041…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#2f89fc` | 40 declarations — `a`, `a:hover` |
| Other chromatic values | `#ff8000`, `#007bff`, `#0062cc` | `#ff8000` × 10 (.btn.btn-secondary); `#007bff` × 9 (a); `#0062cc` × 2 (.btn-primary:hover) |
| Surface | `#ffffff` | 74 declarations — `body`, `.table .table` |
| Ink / dark surface | `#000000` | 30 declarations — `.close`, `.close:hover` |
| Typeface | `-apple-system, sans-serif` (3 rules — body)<br>`"Work Sans", sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529` | `body{…}` rule |
| Radii | `0.25rem`, `50%`, `2px` | `0.25rem` (.form-control); `50%` (.topper .icon); `2px` (.blog-entry .text) |

Palette in order of use: `#ffffff` ×74, `#2f89fc` ×40, `#000000` ×30, `#6c757d` ×12, `#ff8000` ×10, `#007bff` ×9.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar displays contact info and navigation

Users SHALL see a top info bar with address, email, and phone number, and a dark navbar with the Healwise logo, navigation links (Home, About, Doctor, Departments, Pricing, Blog, Contact), and a "Make Appointment" CTA button.

#### Scenario: Top info bar displays contact information

- **WHEN** the page loads
- **THEN** the top info bar shows address, email, and phone number

#### Scenario: Dark navbar shows logo and navigation links

- **WHEN** the page loads
- **THEN** the navbar displays "Healwise" as the logo
- **AND** navigation links include Home, About, Doctor, Departments, Pricing, Blog, Contact
- **AND** a "Make Appointment" button is visible

### Requirement: Hero section displays headline and CTA

Users SHALL see a hero section with a healthcare headline, subheading, and a CTA button.

#### Scenario: Hero section displays headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows a healthcare headline
- **AND** a subheading about patient care
- **AND** a "View our works" CTA button

### Requirement: Services section shows 4 service cards

Users SHALL see 4 service cards with icons and descriptions.

#### Scenario: Four service cards are displayed

- **WHEN** the page loads
- **THEN** 4 service cards are visible
- **AND** they show Qualified Doctors, Emergency Care, Outdoor Checkup, 24 Hours Service
- **AND** each card has an icon and description

### Requirement: About section shows split layout

Users SHALL see a split layout with an image and text content including 4 mini-features.

#### Scenario: About section shows split layout

- **WHEN** the page loads
- **THEN** the about section has an image on the left
- **AND** text content on the right with "About Healwise" subheading
- **AND** 4 mini-feature items: Primary Care, Lab Test, Symptom Check, Heart Rate

### Requirement: CTA banner displays consultation offer

Users SHALL see a full-width banner with a consultation offer and button.

#### Scenario: CTA banner displays consultation offer

- **WHEN** the page loads
- **THEN** a full-width banner shows "We Provide Free Health Care Consultation"
- **AND** a "Free Consultation" button is visible

### Requirement: Department tabs switch content

Users SHALL see 5 department tabs that switch content when clicked.

#### Scenario: Department tabs switch content

- **WHEN** the page loads
- **THEN** 5 department tabs are visible: Neurology, Surgical, Dental, Ophthalmology, Cardiology
- **WHEN** the user clicks "Surgical"
- **THEN** the Surgical department content is displayed
- **AND** the Neurology content is hidden

### Requirement: Testimonials section shows cards

Users SHALL see testimonial cards with names and positions.

#### Scenario: Testimonials section shows cards

- **WHEN** the page loads
- **THEN** testimonial cards with names and positions are visible

### Requirement: Stats counter shows 4 metrics

Users SHALL see 4 stat items with counters.

#### Scenario: Stats counter shows 4 metrics

- **WHEN** the page loads
- **THEN** 4 stat items are visible: Years of Experience, Happy Patients, Number of Doctors, Number of Staff

### Requirement: Pricing section shows 4 plans

Users SHALL see 4 pricing cards with prices and CTA buttons.

#### Scenario: Pricing section shows 4 plans

- **WHEN** the page loads
- **THEN** 4 pricing cards are visible: Basic, Standard, Premium, Platinum
- **AND** each card shows a price and "Get Offer" button

### Requirement: Blog section shows 3 posts

Users SHALL see 3 blog post cards with images, dates, titles, and read more links.

#### Scenario: Blog section shows 3 posts

- **WHEN** the page loads
- **THEN** 3 blog post cards are visible
- **AND** each has an image, date, title, author, and "Read More" button

### Requirement: Footer displays brand and navigation

Users SHALL see a dark footer with logo, contact info, navigation links, and a Component Dock link.

#### Scenario: Footer displays brand and navigation

- **WHEN** the page loads
- **THEN** the footer shows the Healwise logo
- **AND** contact information
- **AND** navigation links
- **AND** services list
- **AND** a "More templates at Component Dock" link to componentdock.com

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/healwise/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/healwise/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar displays contact info and navigation — the top info bar shows address, email, and phone number
- [ ] Hero section displays headline and CTA — the hero section shows a healthcare headline
- [ ] Services section shows 4 service cards — 4 service cards are visible
- [ ] About section shows split layout — the about section has an image on the left
- [x] CTA banner displays consultation offer — a full-width banner shows "We Provide Free Health Care Consultation"
- [ ] Department tabs switch content — 5 department tabs are visible: Neurology, Surgical, Dental, Ophthalmology, Cardiology
- [ ] Testimonials section shows cards — testimonial cards with names and positions are visible
- [ ] Stats counter shows 4 metrics — 4 stat items are visible: Years of Experience, Happy Patients, Number of Doctors, Number of Staff
- [ ] Pricing section shows 4 plans — 4 pricing cards are visible: Basic, Standard, Premium, Platinum
- [ ] Blog section shows 3 posts — 3 blog post cards are visible
