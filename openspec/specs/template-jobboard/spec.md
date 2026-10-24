# Template: JobBoard (Job Board / Careers Portal)

## Purpose

A job-board landing page with hero search, trending keywords, a stats counter
band, job cards, a "Looking For A Job?" call to action, a client-logo row, a
mobile-app band and a four-column footer. Recreation of ColorLib "Jobboard"
(`https://colorlib.com/wp/template/jobboard/`, preview
`https://preview.colorlib.com/theme/jobboard/`) as a React 19 + Vite +
Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/jobboard/
- **Preview:** https://preview.colorlib.com/theme/jobboard/
- **New name:** `jobboard`
- **App folder:** `apps/jobboard`
- **Package:** `@free-react-templates/jobboard`
- **Surge target:** `jobboard.free.componentdock.com`
- **Source design:** ColorLib "Jobboard" — https://colorlib.com/wp/template/jobboard/

> **Provenance correction (2026-10-24f, `verify-spec-row-mismatch.py`).** This
> spec named ColorLib "Careers" until this run, and its token table carried that
> design's royal blue `#1644ba`. The app never rendered that design: its copy
> ("The Easiest Way To Get Your Dream Job", "JobBoard Site Stats", "Get The
> Mobile Apps") is the Jobboard demo's, and its palette is Jobboard's lime
> `#89ba16`. The spec now records the design the app actually recreates, which
> is also the design on the row that links it. Note that the folder is the
> source slug — the naming audit reports this app as a rule-5 rename candidate
> (`docs/spec-row-mismatch.md`).

## Design tokens

Measured from the live preview, not a screenshot: `css/style.css` (37,406 B) and
`css/custom-bs.css` (36,236 B).

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#89ba16` | Lime — `.btn-primary` background/border, links, accents |
| Brand text | `#212529` | Ink on lime buttons (`.btn-primary{color:#212529}`) |
| Secondary accent | `#fff568` | `.btn-warning` — highlight badge/pill |
| Text primary | `#343a40` | Body ink |
| Text muted | `#7f848c` | `.btn` default color, meta rows |
| Background light | `#f8f9fa` | Alternating section bands (`.btn-light` too) |
| Background card | `#ebeef0` | Search-select/input fills |
| Border | `#dee2e6` / `#eee` / `#ccc` | Card and input borders |
| Font family | `"Nunito", sans-serif` | Declared 4× in `custom-bs.css`; load via `<link>` |
| Border radius | `0.25rem` (buttons), `7px` / `4px` (cards, pills) | Theme sheet |
| Button style | Solid lime, ink text, `0.25rem` radius, no shadow | `.btn-primary` |
| Overlay | Dark image overlay on hero + CTA | `.section-hero.overlay` |

## Section structure (page order)

1. **Navbar** — "JobBoard" wordmark, links (Home, About, Job Listings, Pages,
   Services, Blog, Contact), "Post a Job" + "Log In" on the right.
2. **Hero** — full-width photo with dark overlay, headline "The Easiest Way To
   Get Your Dream Job", a search form (text "Job title, Company…", two selects
   "Select Region" / "Select Job Type", submit button).
3. **Trending keywords** — "Trending Keywords:" label + tag chips.
4. **Stats counter** — "JobBoard Site Stats" and "43,167 Job Listed" over a
   photo band, four counters.
5. **Job listings** — three-column card grid (Product Designer, Digital
   Marketing Director, Back-end Engineer (Python), Senior Art Director …), each
   card: logo, title, company, location, type, salary, bookmark/apply control.
6. **CTA** — "Looking For A Job?" band with a button.
7. **Company logos** — "Company We've Helped" + client logo row.
8. **Mobile apps** — "Get The Mobile Apps" band: a person cutout beside a
   composite store-badge image; the badges link nowhere (`href="#"`).
9. **Footer** — four columns (Search Trending, Company, Support, Contact Us) and
   the Component Dock credit line.

## Requirements

### Requirement: Navbar

The header SHALL show the JobBoard wordmark, the page links and the two
right-hand actions, and collapse to a menu below the `lg` breakpoint.

#### Scenario: Navigation renders

- **GIVEN** the page is loaded
- **WHEN** the viewport is at least 1024 px wide
- **THEN** the wordmark, the section links and "Post a Job" / "Log In" are visible

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than 1024 px
- **WHEN** the user taps the menu toggle
- **THEN** the links open in a stacked panel and the toggle exposes `aria-expanded`

### Requirement: Hero search

The hero SHALL render the reference headline over a photo with a dark overlay and
a three-control search form.

#### Scenario: Hero content

- **GIVEN** the user arrives at the page
- **THEN** the headline "The Easiest Way To Get Your Dream Job" is the page `h1`
- **AND** a text input ("Job title, Company…") and two selects ("Select Region",
  "Select Job Type") are present

#### Scenario: Submitting the search

- **GIVEN** the user has typed a keyword
- **WHEN** the form is submitted
- **THEN** the page does not navigate and the input keeps its value

### Requirement: Trending keywords

The hero SHALL be followed by a keyword strip labelled "Trending Keywords:".

#### Scenario: Keyword chips

- **GIVEN** the user scrolls past the hero
- **THEN** at least four keyword chips are rendered
- **AND** each chip is a link or button with an accessible name

### Requirement: Stats counter

A photo band SHALL show the reference statistics headline and counters.

#### Scenario: Counters render

- **GIVEN** the stats band is in view
- **THEN** "JobBoard Site Stats" and the "43,167 Job Listed" figure are visible
- **AND** every counter shows a numeric value (no blank counters if the
  intersection observer never fires)

### Requirement: Job listings

The listings SHALL be a responsive card grid carrying the reference job titles
and meta rows.

#### Scenario: Card contents

- **GIVEN** the user reaches the listings
- **THEN** at least four cards render
- **AND** each card shows title, company, location, employment type and salary

#### Scenario: Card affordance

- **GIVEN** a card is hovered
- **THEN** it lifts (shadow / border change) without shifting its neighbours

### Requirement: Call to action

A "Looking For A Job?" band SHALL follow the listings.

#### Scenario: CTA band

- **GIVEN** the user scrolls past the listings
- **THEN** the CTA heading and a single primary button are visible

### Requirement: Client logos

A logo row SHALL follow the CTA under the "Company We've Helped" heading.

#### Scenario: Logo row

- **GIVEN** the user scrolls to the logo band
- **THEN** at least five logos render as images with alt text
- **AND** they desaturate by default and colourise on hover

### Requirement: Mobile app band

The page SHALL show the "Get The Mobile Apps" band with a composite store-badge
image.

#### Scenario: App band

- **GIVEN** the user scrolls past the logos
- **THEN** the heading and the badge image are visible
- **AND** the badge is decorative or its links are inert (the reference's are
  `href="#"`)

### Requirement: Footer

The footer SHALL carry the reference link columns and the Component Dock credit.

#### Scenario: Footer columns

- **GIVEN** the user reaches the bottom of the page
- **THEN** the columns Search Trending, Company, Support and Contact Us render
- **AND** the copyright line links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/jobboard/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name beyond the product name itself.

#### Scenario: Source scan

- **GIVEN** the shipped `apps/jobboard` tree
- **WHEN** it is searched for `colorlib` (case-insensitive)
- **THEN** no file matches

## Verification checklist

- [ ] Section order matches the reference 1:1 (navbar → hero search → trending
      keywords → stats → job cards → CTA → logos → mobile apps → footer)
- [ ] Brand lime `#89ba16` is the only button fill; ink text on it
- [ ] "Nunito" is loaded and applied to body copy
- [ ] Hero search has one text input and two selects, and does not navigate
- [ ] Stats band shows the "43,167 Job Listed" figure
- [ ] Job cards carry title, company, location, type and salary
- [ ] Footer has the four reference columns and links to
      https://www.componentdock.com/
- [x] No references to ColorLib anywhere in app code
- [ ] Placeholder images via `picsum.photos` (deterministic seeds)
- [ ] Responsive: single-column cards under 640 px, menu collapse under 1024 px
- [ ] Tests: 100% line/function/branch/statement coverage
- [ ] TypeCheck passes, Lint passes, Build succeeds
