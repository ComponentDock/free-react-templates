# Template: Squadly (Heavy Equipment Rental Landing)

Recreation of ColorLib "Equipo" (https://colorlib.com/wp/template/equipo/).

## Purpose

Squadly is a heavy equipment rental landing page template featuring a hero, features/services section, about with stats, testimonials, blog, and a branded footer. It recreates the ColorLib Equipo design under a different name using React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/equipo/ (HTTP 200, 34,012 B, fetched 2026-10-23) and its theme stylesheet `theme/equipo/css/style.min.css` (20,269 B, sha256 `a5dccec3eb01…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#042e4f` | 6 declarations — `#menu`, `.site-nav` |
| Other chromatic values | `#ffa931`, `#04223300`, `#15334b` | `#ffa931` × 5 (#menu>a[aria-current]); `#04223300` × 2 (.hero-wrap:after); `#15334b` × 2 (.white) |
| Surface | `#ffffff` | 23 declarations — `.topbar`, `.site-nav` |
| Ink / dark surface | `#042e4f` | 6 declarations — `#menu`, `.site-nav` |
| Body type | `color: #152b39` | `body{…}` rule |
| Radii | `50%`, `2px` | `50%` (.contact-icon); `2px` (.button) |

Palette in order of use: `#ffffff` ×23, `#042e4f` ×6, `#edf1f4` ×5, `#ffa931` ×5, `#f3f6f8` ×4, `#04223300` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: TopBar displays contact information

The template SHALL display a top bar with a phone number and physical address.

#### Scenario: Phone number is visible

- **WHEN** the page loads
- **THEN** the text "Free Call" and "+1 234 456 78910" are visible

#### Scenario: Address is visible

- **WHEN** the page loads
- **THEN** the text "198 West 21th Street" is visible

### Requirement: Navbar provides site navigation

The navbar SHALL show the site name, navigation links, and a CTA button, with a mobile hamburger menu.

#### Scenario: Desktop navigation links

- **WHEN** the page loads on desktop
- **THEN** links for Home, About, Services, Blog, Contact, and "Request A Quote" are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the "Open menu" button on mobile
- **THEN** the mobile navigation menu opens with all links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero section displays headline and CTAs

The hero section SHALL show a background image, heading text, and two CTA buttons.

#### Scenario: Hero heading and buttons

- **WHEN** the page loads
- **THEN** the heading "Lease The Right Equipment For Your Job" is visible
- **AND** "Contact us" and "Request A Quote" buttons are present

### Requirement: Features section shows services and quote form

The features section SHALL display 4 feature items and a quote request form.

#### Scenario: Four features are shown

- **WHEN** the page loads
- **THEN** "24/7 Customer Service", "Prompt Delivery", "Reliable Equipment", and "New Heavy Equipment" headings are visible

#### Scenario: Quote form fields

- **WHEN** the page loads
- **THEN** the form contains First Name, Last Name, Phone, Service select, Message, and Submit Request button

### Requirement: About section shows company stats

The about section SHALL display a welcome message and 4 statistical counters.

#### Scenario: Stats are displayed

- **WHEN** the page loads
- **THEN** the values 50, 4,500, 300, and 300 are visible with labels "Years of Experience", "Customers Served", "Number of Equipment", "Number of Staff"

### Requirement: CTA banner promotes the company

The CTA banner SHALL display a heading and appointment button.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** "We Are Squadly" heading and "Make An Appointment" button are visible

### Requirement: Services section shows equipment cards

The services section SHALL display 4 equipment service cards.

#### Scenario: Service cards

- **WHEN** the page loads
- **THEN** cards for Bulldozer, Forklift, Crane, and Excavator are visible

### Requirement: Testimonials section shows customer reviews

The testimonials section SHALL display customer testimonial cards.

#### Scenario: Testimonials

- **WHEN** the page loads
- **THEN** at least 3 testimonial cards with names are visible

### Requirement: Blog section shows recent posts

The blog section SHALL display blog post cards with read more links.

#### Scenario: Blog posts

- **WHEN** the page loads
- **THEN** 3 blog post cards with "Read more" links are visible

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** the page loads
- **THEN** a link with text "Component Dock" points to https://www.componentdock.com/ with target="_blank"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/squadly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/squadly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] TopBar displays contact information — the text "Free Call" and "+1 234 456 78910" are visible
- [ ] Navbar provides site navigation — links for Home, About, Services, Blog, Contact, and "Request A Quote" are visible
- [x] Hero section displays headline and CTAs — the heading "Lease The Right Equipment For Your Job" is visible
- [x] Features section shows services and quote form — "24/7 Customer Service", "Prompt Delivery", "Reliable Equipment", and "New Heavy Equipment" headings are visible
- [x] About section shows company stats — the values 50, 4,500, 300, and 300 are visible with labels "Years of Experience", "Customers Served", "Number of Equipment", "Number of Staff"
- [x] CTA banner promotes the company — "We Are Squadly" heading and "Make An Appointment" button are visible
- [ ] Services section shows equipment cards — cards for Bulldozer, Forklift, Crane, and Excavator are visible
- [ ] Testimonials section shows customer reviews — at least 3 testimonial cards with names are visible
- [x] Blog section shows recent posts — 3 blog post cards with "Read more" links are visible
