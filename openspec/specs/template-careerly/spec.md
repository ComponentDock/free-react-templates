# Template: Careerly (Job Board & Career Portal)

## Purpose

A Job Board & Career Portal template with hero search, popular categories, recent jobs, featured jobs and cta banner sections. Recreation of ColorLib "Jobfinder" (https://colorlib.com/wp/template/jobfinder/).

A job board and career portal template with a search hero, category browsing, recent/featured job listings, testimonials, and a call-to-action banner. Brand color: `#28a745` (green). Font: 'Work Sans', sans-serif.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/jobfinder/ (HTTP 200, 43,119 B, sha256 `cfa3d41d0ff5…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `style.css`, `mediaelementplayer.min.css`, `inline-style-0`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#21f8f8` | 1 declarations — `.mejs__captions-selected,.mejs__chapters-selected` |
| Other chromatic values | `#23923d` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 24 declarations — `.site-footer a:hover`, `.site-navbar-wrap` |
| Ink / dark surface | `#000000` | 14 declarations — `.text-black`, `::selection` |
| Typeface | `Roboto Mono` (1 rule — `body`)<br>`Work Sans` (1 rule — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `4px`, `2px`, `30px` | `50%` (`.block-15 .owl-dots .owl-dot > span, .block-16 .owl-dots .owl-dot > span`); `4px` (`.feature-item`); `2px` (`.mejs__horizontal-volume-current,.mejs__horizontal-volume-total`); `30px` (`.btn.pill`) |
| Gradients | 4 declarations | `.mejs__controls:not([style*="display: none"])`, `.mejs__time-buffering` |

Palette in order of use: `#ffffff` ×24, `#000000` ×14, `#28a745` ×11, `#cccccc` ×4, `#eeeeee` ×2, `#0d0d0d` ×1, `#343a40` ×1, `#25262a` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/jobfinder/fonts/icomoon/style.css` — 79,820 B, sha256 `b696dfc59a40…`; `theme/jobfinder/css/style.css` — 23,091 B, sha256 `09f6cddf05d1…`; `npm/mediaelement@4.2.7/build/mediaelementplayer.min.css` — 11,407 B, sha256 `8e2d5b7c9693…`.

## Requirements

### Requirement: Navbar

The navbar displays the "Careerly" logo and navigation links.

#### Scenario: Logo and links rendered

- **WHEN** the page loads
- **THEN** the navbar shows the "Career" logo text and links: "For Candidates", "For Employers", "About", "Contact"

#### Scenario: Mobile menu toggle

- **WHEN** the viewport is narrow
- **THEN** a hamburger menu button is visible with label "Toggle menu"

### Requirement: Hero search section

The hero section displays a search form for finding jobs.

#### Scenario: Heading displayed

- **WHEN** the hero section renders
- **THEN** the heading "Find Your Dream Job" is displayed

#### Scenario: Search form inputs

- **WHEN** the hero form renders
- **THEN** there is a keyword input labeled "Search keywords", a location input labeled "Location", and a "Search" submit button

#### Scenario: Form submission prevention

- **WHEN** the user clicks the Search button
- **THEN** the default form submission is prevented

#### Scenario: Category browse links

- **WHEN** the hero renders
- **THEN** "browse by category" links for Accounting, Healthcare, and Technology are shown

### Requirement: Popular Categories

The categories section displays a grid of job category cards.

#### Scenario: Category cards rendered

- **WHEN** the categories section loads
- **THEN** 8 category cards are displayed: Accounting/Finance, Automotive, Construction, Telecommunications, Healthcare, Design/Multimedia, Transportation, Restaurant/Food

#### Scenario: Category job counts

- **WHEN** a category card renders
- **THEN** it shows the category name and job count (e.g. "10,391 jobs")

### Requirement: Recent Jobs

The recent jobs section lists available job postings.

#### Scenario: Job listings rendered

- **WHEN** the recent jobs section loads
- **THEN** 5 job postings are displayed with title, company, location, salary, and type

#### Scenario: Job tags

- **WHEN** a job listing renders
- **THEN** it displays relevant tags (e.g. "Food", "JavaScript", "React")

### Requirement: Featured Jobs

The featured jobs section shows highlighted job cards.

#### Scenario: Featured cards rendered

- **WHEN** the featured jobs section loads
- **THEN** 4 featured job cards are displayed with title, company, salary, and description

#### Scenario: Bookmark buttons

- **WHEN** a featured card renders
- **THEN** it has a bookmark button with an accessible label (e.g. "Bookmark Restaurant Crew")

### Requirement: Testimonials

The testimonials section displays user reviews.

#### Scenario: Testimonial cards rendered

- **WHEN** the testimonials section loads
- **THEN** 3 testimonial cards are displayed with name, role, quote, and avatar image

### Requirement: CTA Banner

The call-to-action banner encourages job search.

#### Scenario: CTA heading

- **WHEN** the CTA section renders
- **THEN** the heading "Your Dream Job is Waiting" is displayed

#### Scenario: CTA button

- **WHEN** the CTA renders
- **THEN** a "Browse Jobs" button/link is visible

### Requirement: Footer

The footer provides site navigation and branding.

#### Scenario: Footer sections

- **WHEN** the footer renders
- **THEN** it shows the "Careerly" logo, about text, Quick Links, For Candidates, and For Employers sections

#### Scenario: Component Dock attribution

- **WHEN** the footer renders
- **THEN** a link to "Component Dock" at https://www.componentdock.com/ is present

#### Scenario: Copyright

- **WHEN** the footer renders
- **THEN** a copyright line with the current year is displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/careerly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/careerly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — the navbar shows the "Career" logo text and links: "For Candidates", "For Employers", "About", "Contact"
- [x] Hero search section — the heading "Find Your Dream Job" is displayed
- [ ] Popular Categories — 8 category cards are displayed: Accounting/Finance, Automotive, Construction, Telecommunications, Healthcare, Design/Multimedia, Transportation, Restaurant/Food
- [ ] Recent Jobs — 5 job postings are displayed with title, company, location, salary, and type
- [ ] Featured Jobs — 4 featured job cards are displayed with title, company, salary, and description
- [ ] Testimonials — 3 testimonial cards are displayed with name, role, quote, and avatar image
- [x] CTA Banner — the heading "Your Dream Job is Waiting" is displayed
