# Template: Courselex (Directory)

## Purpose

Recreation of ColorLib "Educature" (https://colorlib.com/wp/template/educature/) — an education and online courses landing page. The template features a gradient hero with course search, about section, course categories, features grid, faculty members, testimonials, and a multi-column footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/educature/ (HTTP 200, 42,909 B, sha256 `7e1fdde32345…`, fetched 2026-10-23) and its design stylesheet(s) `main.css`, `inline-style-1`, `inline-style-0`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#39cfca` | 33 declarations — `.primary-btn, .primary-btn.white:hover, .banner-content .input-wrap .search-btn, .courses-`, `::selection` |
| Other chromatic values | `#4cd3e3` (5), `#3279bb` (5), `#38a4ff` (4) | secondary hues in the same sheet |
| Surface | `#ffffff` | 84 declarations — `.primary-btn`, `.text-white` |
| Ink / dark surface | `#000000` | 7 declarations — `.primary-btn.transparent:hover`, `.primary-btn.white` |
| Typeface | `Montserrat` (2 rules — `.h1, .h2, .h3, .h4, .h5, .h6`)<br>`Roboto` (1 rule — `body`) | `font-family` declarations in the design sheet |
| Radii | `3px`, `8px`, `8.5px`, `50%` | `3px` (`.genric-btn.radius`); `8px` (`.confirm-radio`); `8.5px` (`.default-switch`); `50%` (`.default-switch input + label`) |
| Gradients | 5 declarations | `.primary-btn, .primary-btn.white:hover, .banner-content .input-wrap .search-btn, .courses-` |

Palette in order of use: `#ffffff` ×84, `#39cfca` ×33, `#222222` ×27, `#f9f9ff` ×26, `#777777` ×16, `#cccccc` ×9, `#000000` ×7, `#f1f9ff` ×7.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/educature/css/main.css` — 60,996 B, sha256 `9024aae1f856…`.

## Requirements

### Requirement: Navbar navigation

The template SHALL display a fixed navigation bar with logo and links to Home, About, Courses, Pages, Blog, and Contact sections.

#### Scenario: Navbar renders all navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, About, Courses, Pages, Blog, and Contact

#### Scenario: Navbar displays logo

- **WHEN** the page loads
- **THEN** the navbar shows the Courselex brand name

### Requirement: Hero section with search

The template SHALL display a full-screen hero section with a gradient background (#39cfca to #3279bb), a headline, subtitle, search form, and top course tag buttons.

#### Scenario: Hero headline is displayed

- **WHEN** the page loads
- **THEN** the hero section shows "We Rank the Best Courses on the Web"

#### Scenario: Search form is functional

- **WHEN** the hero section renders
- **THEN** a search input and search button are visible

#### Scenario: Top course tags are displayed

- **WHEN** the hero section renders
- **THEN** course category tags (Python, Marketing, etc.) are shown

### Requirement: About section

The template SHALL display an about section with an image, heading "Over 2500 Courses from 5 Platform", descriptive text, and an "Explore Courses" CTA button.

#### Scenario: About section content

- **WHEN** the user scrolls to the about section
- **THEN** an image and the heading "Over 2500 Courses from 5 Platform" are visible

#### Scenario: About CTA button

- **WHEN** the about section renders
- **THEN** an "Explore Courses" button is displayed

### Requirement: Course categories

The template SHALL display 14 course category links organized in two columns with book icons.

#### Scenario: Course categories are listed

- **WHEN** the courses section renders
- **THEN** 14 course categories are displayed (Development, IT & Software, Photography, Language, Life Science, Business, Social Science, Data Science, Design, Training, Humanities, Marketing, Economics, Personal Dev)

#### Scenario: Course section heading

- **WHEN** the courses section renders
- **THEN** the heading "This is Why We have Solid Idea" is displayed

### Requirement: Features grid

The template SHALL display 6 feature cards in a 3×2 grid with icons, titles, and descriptions.

#### Scenario: Features heading

- **WHEN** the features section renders
- **THEN** "Features That Make Us Hero" heading is shown

#### Scenario: Feature cards

- **WHEN** the features section renders
- **THEN** 6 feature items are displayed (Architecture, Interior Design, Concept Design, Lifetime Access, Source File Included, Live Support)

### Requirement: Faculty members

The template SHALL display 4 faculty member cards with photos, names, designations, bios, and social media links.

#### Scenario: Faculty heading

- **WHEN** the faculty section renders
- **THEN** "Faculty Members" heading is shown

#### Scenario: Faculty cards

- **WHEN** the faculty section renders
- **THEN** 4 faculty members are displayed with names, photos, and designations

#### Scenario: Social media links

- **WHEN** a faculty card renders
- **THEN** Facebook, Twitter, and LinkedIn links are present

### Requirement: Testimonials

The template SHALL display a testimonials section with quote icons, author names, star ratings, and review text.

#### Scenario: Testimonials content

- **WHEN** the testimonials section renders
- **THEN** testimonial items with author names and 5-star ratings are displayed

### Requirement: Footer with Component Dock link

The template SHALL display a multi-column footer with link groups, a newsletter form, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer columns

- **WHEN** the footer renders
- **THEN** columns for Top Products, Quick Links, Features, Resources, and Newsletter are shown

#### Scenario: Newsletter form

- **WHEN** the footer renders
- **THEN** an email input and submit button for newsletter subscription are visible

#### Scenario: Component Dock attribution

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/courselex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/courselex/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar navigation — the navbar displays links for Home, About, Courses, Pages, Blog, and Contact
- [x] Hero section with search — the hero section shows "We Rank the Best Courses on the Web"
- [x] About section — an image and the heading "Over 2500 Courses from 5 Platform" are visible
- [ ] Course categories — 14 course categories are displayed (Development, IT & Software, Photography, Language, Life Science, Business, Social Science, Data Science, Design, Training, Humanities…
- [x] Features grid — "Features That Make Us Hero" heading is shown
- [x] Faculty members — "Faculty Members" heading is shown
- [ ] Testimonials — testimonial items with author names and 5-star ratings are displayed
