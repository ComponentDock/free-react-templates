# Template: Precept (Education & Courses Landing)

## Purpose

An Education & Courses template with hero, features, popular courses, cta, reviews and search course sections. Precept is a single-page education template — an original React recreation of the ColorLib free "Education" template (preview: https://preview.colorlib.com/theme/education/ — education/courses landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand orange `#f7631b` (CTAs, accents, highlights), navy `#04091e` (header top bar, footer), light grey `#f9f9ff` (section backgrounds)
- Typeface: Poppins (Google Fonts via `<link>`)
- Orange primary buttons with white text; uppercase section headings
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Precept lives in `apps/precept` and uses shared components from `packages/ui`.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Education** — https://colorlib.com/wp/template/education/
- **Preview**: `https://preview.colorlib.com/theme/education/` — HTTP 200 on 2026-10-23, **41,573 bytes**, title `Education`.
- **Stylesheet measured**: `css/main.css` — **60,089 bytes**, sha256 `0615670e1059…`, the theme layer over `css/bootstrap.css` (13,681 B). Nine sheets total (`linearicons`, `font-awesome`, `bootstrap`, `magnific-popup`, `nice-select`, `animate`, `owl.carousel`, `jquery-ui`, `main`); the census below is `main.css` only.
- **Measured how**: hex-literal census of `main.css`, then the winning rule per selector. Not a rebuild (no version marker, BS3/BS4-era markup, no `/kit/`).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand orange | `#f7631b` | 88 | `.primary-btn` · `.genric-btn.primary` · `::selection` · link/icon accents · banner CTA |
| Surface lilac-white | `#f9f9ff` | 22 | `.whole-wrap` · `.sample-text-area` · `.button-area` · `.genric-btn.default` |
| Ink | `#222` | 33 | `h1–h6` · `.genric-btn.default` label · dark buttons |
| Body copy | `#777` | 23 | `body` · ordered/typography lists |
| Body copy (alt) | `#777777` | 3 | comment bodies, `.comment-form .form-control` |
| Ink (alt) | `#222222` | 2 | accordion/toggle `dt > a` |
| Teal (kit) | `#4cd3e3` | 7 | `.genric-btn.success*` — the button kit, not page brand |
| Blue (kit) | `#38a4ff` | 6 | `.genric-btn.info*` — the button kit |
| Danger / warning (kit) | `#f44a40` / `#f4e700` | — | `.genric-btn.danger*`, `.genric-btn.warning*` |
| Hero scrim | `rgba(4,9,30,0.8)` | — | `.banner-area .overlay-bg` over the right-aligned banner photo |
| On-brand text | `#fff` | — | `.primary-btn`, `.primary-btn.white`, banner headings |

The `genric-btn` palette (success/info/warning/danger) is a styleguide section on the same sheet; only `primary` is used by the page.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Poppins", sans-serif` · 14 px / **300** / 1.625em · `#777` | `body` |
| Headings | Poppins · 600 · `#222` (H1 36 px, H2 30 px) | `h1–h6` |
| Banner H1 | 48 px / 700 · `#fff` (36 → 45 → 32 at breakpoints) | `.banner-content h1` |
| Buttons | 500 · `.genric-btn` `font-size: .8em`, `padding: 0 30px` | `.genric-btn` / `.primary-btn` |

One face family, no serif, no second script.

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radius | **3 px** (`.genric-btn.radius`, 7 rules); `.genric-btn.circle` 20 px; 8 px on three cards; `50%` on review avatars |
| Bands | `.section-gap` (100 px) alternating white and `#f9f9ff`; `.section-top-border` 50 px |
| Banner | full-width photo anchored `right`, `rgba(4,9,30,0.8)` scrim, 48 px white H1, orange CTA |
| Split bands | `.search-course-area` (photo left / copy + CTA right) and `.cta-one-area` / `.cta-two-area` (dark band, white label, orange or white button) |
| Cards | course cards with the `355 / 35 / $150` stat row; event cards; blog cards with date/author meta |

Section order measured in the reference DOM: `.header` (phone +953 012 3654 896, support@colorlib.com, nav Home/About/Courses/Events/Gallery/Blog) → `.banner-area` ("We Ensure better education for a better world") → `.feature-area` (Learn Online Courses, 3 items) → `.popular-course-area` (3 course cards, `355 / 35 / $150` stats) → `.search-course-area` ("Get reduced fee during this Summer!") → `.upcoming-event-area` (2 events) → `.review-area` (testimonial carousel, Fannie Rowe) → `.cta-one-area` ("Become an instructor") → `.blog-area` (3 posts) → `.cta-two-area` ("Not Yet Satisfied with our Trend?" + view our blog) → `.footer-area` (Top Products / Quick links / newsletter / copyright).

**Deltas vs the shipped app**: none found — `--color-brand: #f7631b`, `--color-navy: #04091e` (the `rgba(4,9,30,0.8)` scrim), `--color-heading: #222222`, `--color-body: #777777` and `--color-bg-light: #f9f9ff` are all reference literals, and Poppins is the reference face.

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed navbar with a dark top bar (social icons, phone, email), the site name "Precept" with an orange left border, and navigation links (Home, About, Courses, Events, Blog, Contact) with a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Precept" as a link
- **AND** it SHALL show links to Home, About, Courses, Events, Blog, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report `aria-expanded="true"`
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-height hero banner with a dark overlay background image, a headline "We Ensure Better Education for a Better World", supporting paragraph, and an orange "Get Started" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline text
- **AND** it SHALL contain a "Get Started" button

### Requirement: Features section

The system SHALL render a 3-column feature section with cards for "Learn Online Courses", "No.1 of Universities", and "Huge Library", each with a description and a "Join Now" link.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show three feature cards with titles and "Join Now" links

### Requirement: Popular courses section

The system SHALL render a course carousel section titled "Popular Courses We Offer" with course cards showing an image, user/comment counts, price, title, and description.

#### Scenario: Course cards

- **GIVEN** the page is rendered
- **WHEN** the courses section is displayed
- **THEN** it SHALL show at least three course cards with prices and titles
- **AND** each card SHALL display user and comment counts

### Requirement: CTA section

The system SHALL render a call-to-action section with a background image, dark overlay, headline "Enhance Your Skills With Best Online Courses", and an "Enroll Now" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the headline and an "Enroll Now" button

### Requirement: Reviews section

The system SHALL render an instructor/testimonial section titled "Our Expert Instructors" with instructor cards showing an avatar, name, role, star rating, and review text.

#### Scenario: Instructor cards

- **GIVEN** the page is rendered
- **WHEN** the reviews section is displayed
- **THEN** it SHALL show instructor cards with names and star ratings

### Requirement: Search course section

The system SHALL render a search section with a dark overlay background, heading "Search For Available Courses", and a search input with submit button.

#### Scenario: Search input

- **GIVEN** the page is rendered
- **WHEN** the user types in the search input
- **THEN** the input value SHALL update to reflect the typed text
- **AND** submitting the form SHALL not cause a page reload

### Requirement: Upcoming events section

The system SHALL render an events section titled "Upcoming Events" with event cards showing an image, title, date/time, and venue.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show event cards with titles, dates, and venues

### Requirement: Blog section

The system SHALL render a blog section titled "Latest Posts From Blog" with post cards showing an image, author, date, comment count, title, excerpt, and a "View More" button.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show blog post cards with titles and "View More" buttons

### Requirement: Newsletter section

The system SHALL render a newsletter subscription section with an orange background, heading "Subscribe to Get Updated Information", email input, and a "Subscribe" button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the user types an email and clicks Subscribe
- **THEN** the form SHALL submit without page reload

### Requirement: Footer

The system SHALL render a dark navy footer with the site name "Precept", link columns (Quick Links, Resources, Contact), and a bottom bar with a "Made with ❤ by Component Dock" link pointing to `https://www.componentdock.com/`.

#### Scenario: Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to `https://www.componentdock.com/` with target `_blank`
- **AND** the link text SHALL include "Component Dock"

#### Scenario: No ColorLib references

- **GIVEN** the page is rendered
- **WHEN** the footer text is inspected
- **THEN** it SHALL NOT contain the string "colorlib" (case-insensitive)

## Verification checklist

- [ ] `npm run verify:app -- precept` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 13 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navigation bar
      - Hero section
      - Features section
      - Popular courses section
      - CTA section
      - Reviews section
      - Search course section
      - Upcoming events section
      - Blog section
      - Newsletter section
      - Footer
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
- [x] Navigation bar — it SHALL show the site name "Precept" as a link
- [ ] Hero section — it SHALL contain the headline text
- [x] Features section — it SHALL show three feature cards with titles and "Join Now" links
- [ ] Popular courses section — it SHALL show at least three course cards with prices and titles
- [x] CTA section — it SHALL show the headline and an "Enroll Now" button
- [ ] Reviews section — it SHALL show instructor cards with names and star ratings
- [ ] Search course section — the input value SHALL update to reflect the typed text
- [ ] Upcoming events section — it SHALL show event cards with titles, dates, and venues
- [x] Blog section — it SHALL show blog post cards with titles and "View More" buttons
- [ ] Newsletter section — the form SHALL submit without page reload
