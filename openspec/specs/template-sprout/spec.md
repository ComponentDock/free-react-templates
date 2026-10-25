# Template: Sprout (Church / Charity)

## Purpose

Sprout is a single-page church/community charity template.
It is an original React recreation of the ColorLib free "Spring" template
(preview: https://preview.colorlib.com/theme/spring/ — church/charity landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand warm brown `#c7b198` (accents, CTA buttons, highlights), secondary
  `#b59877` (darker warm tone), deep brown `#3c312e` (dark sections)
- Footer `#171717` (near-black), counter/testimony sections `#6c757d` (grey)
- Light section backgrounds: `#f8f9fa`, `#ebe3da` (warm off-white)
- Typeface: Poppins (300, 400, 600, 700) as primary, Raleway as secondary,
  Crimson Text for verse/quote accents — all via Google Fonts `<link>`
- Navbar: dark `#000` background, fixed, with brand wordmark + 7 nav links
- Hero: full-width background image with overlaid heading + subtitle + CTA
  buttons ("New here!" + "Live Stream")
- Service cards: 6-column grid, icon-based (church, prayer, community,
  teaching, helpers, wedding, events), with hover effects
- Counter section: grey background, 4-column stats (Members, Pastors,
  Donation, Churches)
- Testimony carousel: dark background, avatar + name + role, multiple slides
- Sermon detail card: featured sermon with speaker, category, date, CTAs
- Blog cards: 3-column grid with date overlay, title, excerpt
- Gallery: image grid (masonry-like)
- Newsletter: parallax background with email subscribe form
- Footer: dark `#171717`, multi-column (About, Connect, Service Hours)

Sprout lives in `apps/sprout` and uses shared components from `packages/ui`.

## Design tokens (reference re-check, 2026-10-23)

<!-- heading-role-tokens: spring/ink/template-sprout -->
**Heading-ink role (measured 2026-10-25):** the `ink` row states `#212529`, but the page declares it only for non-heading elements (.kit-map__placeholder; body; mark,.mark) — no heading rule carries it. The rendered headings paint rgba(0, 0, 0, 0.8) x16, rgb(255, 255, 255) x7, rgb(0, 0, 0) x6.
<!-- /heading-role-tokens -->

- **Source**: ColorLib **Spring** — https://colorlib.com/wp/template/spring/
- **Preview**: https://preview.colorlib.com/theme/spring/ — HTTP 200 on 2026-10-23; measured `css/style.min.css` (194,600 bytes). Title served: "Spring Church | Helping Grow Your Faith".
- **Path note**: Rebuilt build (`?v=3.0.1`, `vendor/` kit partials, Bootstrap 5.3.8) — drift on this demo is not a prep error.
- **Measured how**: hex-literal census of `css/style.min.css`; the count column is the number of literal occurrences in that sheet (smaller than the number of rules that use it when a declaration repeats the value).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand sand | `#c7b198` | 42 | `.text-primary!important`, nav hover, buttons, links |
| Dark CTA | `#171717` | 22 | `.cta-colored` nav button and footer band |
| Body grey | `#6c757d` | 19 | body copy and counters |
| Paper | `#f8f9fa` | 18 | `.bg-light` bands |
| Bootstrap primary | `#0d6efd` | 28 | stock BS5 `--bs-primary` in the vendor block (not the design) |
| Ink | `#212529` | 18 | headings |

### Typography

| Element | Family | Evidence |
| ------- | ------ | -------- |
| Headings | `Raleway` | 15 declarations |
| Body | `Poppins` | 9 declarations |
| Verse | `Crimson Text` (serif) | 8 declarations — the daily-verse block |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radii | `50%` (15), `var(--bs-border-radius)` (13), `4px` (4) |
| Rhythm | `ftco-intro` -> `ftco-daily-verse` -> alternating `bg-light` sections -> dark footer |
| Accent rule | sand `#c7b198` text-primary overrides on headings and hover states |

### Section order (shipped app, 1:1 with the reference)

`Navbar -> Hero -> IntroBanner -> DailyVerse -> ChurchServices -> Sermon -> Counter -> Testimony -> Events -> RecentSermons -> Blog -> Gallery -> Newsletter -> Footer`

Reference bands: ftco-intro -> ftco-daily-verse -> ftco-section -> bg-light -> ftco-counter -> testimony -> sermon -> bg-light -> gallery -> newsletter -> footer.

### Delta vs shipped app

- `apps/sprout` matches the reference's two brand anchors (`#c7b198`, `#171717`) and all three faces (Poppins / Raleway / Crimson Text).
- The app's `--color-counter-bg #6c757d` reuses the Bootstrap body grey; in the reference sheet `#171717` (22 occurrences) belongs to the `.cta-colored` nav button and the footer band, not to `.ftco-counter` (which only sets background position).
- `#0d6efd` (28 occurrences) is Bootstrap 5's default primary carried through the vendor block, not a Spring design token.

## Requirements

### Requirement: Navbar

The system SHALL render a dark fixed navbar with the brand name and section
navigation links.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Sprout" with subtitle "Church"
- **AND** it SHALL show links to Home, About, Ministries, Sermons, Events, Blog, Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger menu toggle
- **THEN** the mobile navigation menu SHALL open
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
heading text, subtitle, and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "Helping Grow Your Faith"
- **AND** it SHALL show the subtitle "Submit your presence to the creator of the universe"
- **AND** it SHALL show a "New here!" button
- **AND** it SHALL show a "Live Stream" button

### Requirement: Intro / Upcoming Events banner

The system SHALL render a compact intro banner below the hero showing
upcoming event details with a countdown timer.

#### Scenario: Intro banner content

- **GIVEN** the page is rendered
- **WHEN** the intro banner is displayed
- **THEN** it SHALL show the heading "Upcoming Events"
- **AND** it SHALL show an event title (e.g. "The Law Demands, but Grace Supplies")
- **AND** it SHALL show a countdown timer with days, hours, minutes, seconds

### Requirement: Daily Verse section

The system SHALL render a highlighted scripture verse section on a light
background with decorative quote styling.

#### Scenario: Verse content

- **GIVEN** the page is rendered
- **WHEN** the daily verse section is displayed
- **THEN** it SHALL show a quoted scripture passage
- **AND** it SHALL show the attribution (e.g. "John 3:16 KJV")

### Requirement: Church Services section

The system SHALL render a services grid with 6 service cards, each featuring
an icon, title, and description.

#### Scenario: Services grid

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Ministries"
- **AND** it SHALL display 6 service cards: Daily Prayers, Church Community, Teaching, Helpers, Wedding, Events
- **AND** each card SHALL show an icon and description text

### Requirement: Sermon for Today section

The system SHALL render a featured sermon card on a light background with
speaker info, categories, date, description, and action buttons.

#### Scenario: Featured sermon content

- **GIVEN** the page is rendered
- **WHEN** the sermon section is displayed
- **THEN** it SHALL show the heading "Sermon for Today"
- **AND** it SHALL show the sermon title "Lord is Sufficient for all of our needs"
- **AND** it SHALL show the speaker name and category tags
- **AND** it SHALL show "Watch Sermons" and "Download Sermons" buttons

### Requirement: Counter / About section

The system SHALL render a counter/stats section with a brief church description
and 4 animated stat counters.

#### Scenario: Counter stats

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show a description of the church
- **AND** it SHALL show 4 stat counters: Members, Pastors, Donation, Churches
- **AND** the counters SHALL animate from 0 to their target values on scroll

### Requirement: Testimony carousel

The system SHALL render an inspirational testimony carousel with member
testimonials, each showing an avatar, name, role, and quote.

#### Scenario: Testimony content

- **GIVEN** the page is rendered
- **WHEN** the testimony section is displayed
- **THEN** it SHALL show the heading "Testimonials"
- **AND** it SHALL show testimonial cards with member name, role, and quote
- **AND** the carousel SHALL allow cycling through multiple testimonials

### Requirement: Upcoming Events section

The system SHALL render an events listing with event cards showing titles,
dates, and links to learn more.

#### Scenario: Events listing

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show the heading "Upcoming Events"
- **AND** it SHALL display event cards with title and "Know Jesus Christ Better" link

### Requirement: Recent Sermons section

The system SHALL render a recent sermons section with sermon cards showing
title, speaker, and action buttons.

#### Scenario: Sermon cards

- **GIVEN** the page is rendered
- **WHEN** the recent sermons section is displayed
- **THEN** it SHALL show sermon cards with title, speaker, and description
- **AND** each card SHALL have "Watch Sermons" and "Download Sermons" buttons

### Requirement: Recent Blog section

The system SHALL render a 3-column blog card grid on a light background,
each card with a date overlay, title, and excerpt.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest Blog Posts"
- **AND** it SHALL display 3 blog cards, each with a date (day, month, year),
  title, and short excerpt
- **AND** each card SHALL have a "Read more" link

### Requirement: Gallery section

The system SHALL render an image gallery grid with popup-capable images.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a grid of images
- **AND** clicking an image SHALL open it in a lightbox/popup view

### Requirement: Newsletter section

The system SHALL render a newsletter subscribe section with a parallax
background image and an email input with submit button.

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show the heading "Newsletter"
- **AND** it SHALL show an email input field
- **AND** it SHALL show a "Subscribe" button

### Requirement: Footer

The system SHALL render a dark footer with multi-column layout including
about text, navigation links, and service hours.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Sprout Church"
- **AND** it SHALL show an About column with description text
- **AND** it SHALL show a Connect column with navigation links
- **AND** it SHALL show a Service Hours column
- **AND** it SHALL show a link to Component Dock (`https://www.componentdock.com/`)

### Requirement: Responsive layout

The system SHALL provide responsive layouts for all screen sizes.

#### Scenario: Mobile responsiveness

- **GIVEN** the page is rendered on a mobile viewport (≤768px)
- **WHEN** all sections are displayed
- **THEN** the navbar SHALL collapse to a hamburger menu
- **AND** service cards SHALL stack vertically
- **AND** blog cards SHALL stack vertically
- **AND** the newsletter form SHALL be single-column
- **AND** footer columns SHALL stack vertically

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sprout/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sprout/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All sections match the original Spring template's section order: Hero → Intro/Events Banner → Daily Verse → Church Services → Sermon → Counter/About → Testimony → Upcoming Events → Recent Sermons → Recent Blog → Gallery → Newsletter → Footer
- [ ] Design tokens: warm brown `#c7b198`, secondary `#b59877`, deep `#3c312e`, footer `#171717`, light `#f8f9fa`, Poppins font family
- [ ] Navbar: dark fixed, 7 nav links, mobile hamburger
- [ ] Hero: full-width background image, 2 CTA buttons
- [ ] Services: 6-card grid with icons
- [ ] Sermon: featured card with speaker/category/date
- [ ] Counter: 4 animated stats
- [ ] Testimony: carousel with member cards
- [ ] Blog: 3-column grid with date overlays
- [ ] Newsletter: parallax background with email form
- [ ] Footer: dark, multi-column, Component Dock link
- [x] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via `https://picsum.photos/seed/sprout-<n>/<w>/<h>`
- [ ] Google Fonts via `<link>` in `index.html` (Poppins, Raleway, Crimson Text)
- [ ] Icons via `lucide-react`
- [x] `apps/sprout/public/CNAME` contains `sprout.free.componentdock.com`
- [x] `apps/sprout/package.json` homepage is `https://sprout.free.componentdock.com`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
