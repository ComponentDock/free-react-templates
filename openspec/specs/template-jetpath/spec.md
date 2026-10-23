# Template: Jetpath (Travel / Directory)

## Purpose

Jetpath is a single-page travel and tours template with a search-driven
hero, a destination grid, three tour packages, a "why choose us" feature
row, testimonials and a newsletter capture.

It is an original React recreation of the ColorLib "Travelers" free
template (source: https://colorlib.com/wp/template/travelers/), built
under a DIFFERENT name (**Jetpath**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The reference is a booking-agency landing page: a photographic hero with
a destination search, destination tiles, priced tour cards (duration,
availability) and trust signals. The palette pairs teal `#0d9488` with
deep navy `#0f172a` and an orange `#f97316` CTA accent; Poppins carries
the whole page. The recreation mirrors that section order and the priced
card pattern.

## Design Tokens

| Token          | Value                 | Notes                              |
| -------------- | --------------------- | ---------------------------------- |
| Font family    | `'Poppins', sans-serif` | Whole page                       |
| Brand teal     | `#0d9488`             | Primary accent                     |
| Teal light     | `#14b8a6`             | Hover / secondary                  |
| Navy           | `#0f172a`             | Headings and dark blocks           |
| Navy light     | `#1e293b`             | Dark surfaces                      |
| Accent orange  | `#f97316`             | Primary CTA                        |
| Body text      | `#1e293b`             | Paragraph copy                     |
| Muted          | `#64748b`             | Secondary copy                     |
| Light band     | `#f1f5f9`             | Alternating section background     |

## Requirements

### Requirement 1: Navbar With Search

The navbar SHALL expose the brand, section links, a `Search` button, a
mobile menu toggle and a `Subscribe` entry point.

#### Scenario: Visitor opens the mobile menu

- **WHEN** the visitor activates `Open menu`
- **THEN** the navigation links are revealed and the toggle reads
  `Close menu`

### Requirement 2: Hero And Destinations

The hero SHALL headline the agency offer with a search affordance, and a
destinations section SHALL present region cards, the reference's first
region being `Asia`.

#### Scenario: Visitor browses destinations

- **WHEN** the visitor scrolls into the destinations section
- **THEN** each region card shows an image, the region name and a short blurb

### Requirement 3: Tour Packages

The packages section SHALL render three priced tour cards showing the
price, the trip length (`5 Days / 4 Nights`) and the number of tours
available (e.g. `8 tours available`, `12 tours available`).

#### Scenario: Visitor compares tours

- **WHEN** the visitor reaches the packages section
- **THEN** cards priced `$1,299`, `$2,199` and `$3,499` are visible
- **AND** each card shows its duration and availability count

### Requirement 4: Why Choose Us, Testimonials And Newsletter

The page SHALL render a feature row (including `24/7 Support` and
`500+ Destinations`), a testimonial section, and a newsletter form whose
`Subscribe` button reports success inline.

#### Scenario: Visitor subscribes to the newsletter

- **WHEN** the visitor submits a valid email
- **THEN** an inline success message is shown and the input is cleared

### Requirement 5: Component Dock Footer

The footer SHALL link `https://www.componentdock.com/` alongside the
agency's link columns and social icons.

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reaches the footer
- **THEN** a link to `https://www.componentdock.com/` is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/jetpath/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/jetpath/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/jetpath`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% for `apps/jetpath`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/jetpath`)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` is `jetpath.free.componentdock.com` and `homepage` matches
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
