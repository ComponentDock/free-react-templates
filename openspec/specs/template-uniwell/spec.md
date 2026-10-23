# Template: Uniwell (Education)

## Purpose

Recreation of ColorLib "Unicat" (https://colorlib.com/wp/template/unicat/)
as "Uniwell" — a free e-learning & university landing page template.
Built with React 19 + Vite + Tailwind CSS 4 + TypeScript.

Design tokens extracted from the ColorLib Unicat preview:

- Primary: #34c3eb (teal/cyan)
- Navy: #1b1b2f (dark top bar)
- Cloud: #f8f9fa (light section bg)
- Heading font: Merriweather (serif)
- Body font: Open Sans (sans-serif)

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Unicat** — https://colorlib.com/wp/template/unicat/
- **Preview**: `https://preview.colorlib.com/theme/unicat/` — HTTP 200 on 2026-10-23, **35,758 bytes**, title `Unicat`.
- **Stylesheet measured**: `styles/main_styles.css` — **34,637 bytes**, sha256 `ae7a80996e71…`; plus `styles/responsive.css` (5,618 B) and `styles/bootstrap4/bootstrap.min.css` (127,343 B) as base.
- **Measured how**: hex-literal census of `main_styles.css`, then the winning rule per selector. Not a rebuild (Bootstrap 4, no version marker, no `/kit/`).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand cyan | `#14bdee` | 31 | `.top_bar` · `.logo_text span` · active nav + its `::after` underline · `.header_search_container` · `.course_price` · `.courses_button` · every card-title hover |
| Ink | `#384158` | 14 | `h1–h6` (Roboto Slab 700) · `.logo_text` · nav links · course/event/team/news titles |
| Body copy | `#a5a5a5` | 1 | `body` |
| Subtitle | `#76777a` | 4 | `p` · `.home_slider_subtitle` (24 px) · `.team_subtitle` · social icons |
| Placeholder | `#b5b8be` | 17 | `.home_search_input::placeholder` · `.course_price span` |
| Icon ink | `#181818` | 1 | `.search_button i`, `.shopping_cart i` (hover → `#14bdee`) |
| Footer navy | `#1e2434` | 1 | `.footer` |
| Surface | `#FFFFFF` | — | `body`, `.features`, `.feature`, `.counter`, `.course` cards |
| Card shadow | `rgba(29,34,47,0.1)` → `0 1px 10px` | — | `.course` |
| On-brand | `#FFFFFF` | — | `.home_search_button`, `.courses_button a`, `.counter_title` |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `'Roboto', sans-serif` · 14 px / 400 · `#a5a5a5` | `body` |
| Headings | `'Roboto Slab', serif` · **700** · `#384158` (H1 48 px, H2 36 px) | `h1–h6` |
| Slider H1 | Roboto Slab 60 px / 700 · `#384158` | `.home_slider_title` |
| Slider sub | 24 px · `#76777a` | `.home_slider_subtitle` |
| Buttons | 14 px / 500 · uppercase · `letter-spacing: .1em` | `.home_search_button`, `.courses_button a` |
| Card titles | Roboto Slab 20 px, hover `#14bdee` | `.course_title a`, `.event_title a`, `.team_title a` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radius | **3 px** on buttons/search field (5 rules); **6 px** on `.course` cards; `50%` social chips |
| Hero | full-width photo slide (`.home_slider_background` cover/centre) + a separately floated `.counter_background` photo on the stats band |
| Search panel | 3–4 control row under the H1 (Category / Price / Type / Search), cyan submit `#14bdee`, fields 3 px radius |
| Sections | `.features` 93/103 px padding; `.counter` white card row over the photo band |
| Cards | white, 6 px radius, `0 1px 10px rgba(29,34,47,0.1)` shadow; header strip + title + meta rows |
| Footer | `#1e2434`, 94 px top padding, `.footer_background` photo layer |

Section order measured in the reference DOM: `.header` (phone 001-1234-88888, email, Register or Login, navbar Home/About/Courses/Blog/Page/Contact + search toggle) → home slider (H1 + subtitle + 3-field search) → `Welcome To Unicat E-Learning` + 4 feature cards (The Experts, Book & Library, Best Courses, Award & Reward) → `Popular Online Courses` (3 course cards + view all) → `Register Now` counter band with course-picker form → `Upcoming events` (3) → `The Best Tutors in Town` (4) → `Latest News` (5 posts) + newsletter → `.footer` `#1e2434`.

**Deltas vs the shipped app** (drift is not a prep error — the app is already on main):
- The app ships an **invented cyan ramp** (`--color-primary-400: #34c3eb`, `-500: #1fb0dc`, …). The reference brand is a single literal, `#14bdee`, with no ramp.
- **Faces are invented**: app `--font-sans: 'Open Sans'` + `--font-display: 'Merriweather'` (serif). The reference is Roboto (UI) + **Roboto Slab** (headings) — a slab serif, not a transitional one.
- App `--color-navy: #1b1b2f` is close to, but not, the reference footer `#1e2434`.

## Requirements

### Requirement: TopBar displays contact info and login link

The template MUST display a dark navy top bar with phone number, email, and a Register/Login link.

#### Scenario: User loads the page

- **WHEN** the page loads
- **THEN** the top bar shows "Have any questions?", phone "001-1234-88888", email "info@uniwell.edu", and "Register or Login"

#### Scenario: User clicks phone link

- **WHEN** the user clicks the phone number link
- **THEN** it navigates to tel:001-1234-88888

### Requirement: Navbar provides navigation and search

The navbar MUST show the Uniwell logo, navigation links, search icon, cart icon, and a mobile hamburger menu.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a wide screen
- **THEN** the logo, Home/About/Courses/Blog/Page/Contact links, search and cart icons are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user is on a mobile viewport and clicks the hamburger
- **THEN** a mobile menu opens showing all nav links

#### Scenario: Mobile menu close

- **WHEN** the user opens the mobile menu and clicks a nav link
- **THEN** the menu closes

### Requirement: Hero section with search bar

The hero MUST display a heading, subtitle, background image, and a course search form with keyword/category/price fields.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the heading "The Premium System Education", subtitle "Future Of Education Technology", and search form are visible

#### Scenario: Search form interaction

- **WHEN** the user types in the keyword field
- **THEN** the text appears in the input

### Requirement: Welcome section with feature cards

The welcome section MUST display a heading, description, and four feature cards.

#### Scenario: Welcome content

- **WHEN** the page loads
- **THEN** "Welcome To Uniwell E-Learning" heading and cards for Online Courses, Expert Instructors, Certified Programs, and Campus Life are visible

### Requirement: Course categories grid

The categories section MUST display six category cards with icons and course counts.

#### Scenario: Categories visible

- **WHEN** the page loads
- **THEN** Web Development (120), Mobile Development (85), Data Science (95), Business (110), Design (75), and Marketing (65) categories are shown

### Requirement: Popular courses grid

The courses section MUST display six course cards with images, ratings, prices, and enroll buttons.

#### Scenario: Course cards visible

- **WHEN** the page loads
- **THEN** six course cards with titles, instructor names, star ratings, student counts, durations, prices, and Enroll Now buttons are shown

#### Scenario: Enroll button interaction

- **WHEN** the user clicks an Enroll Now button
- **THEN** the button responds without navigation errors

### Requirement: Registration CTA banner

The registration banner MUST display a call-to-action with heading and Get Started button.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** "Register for Free Today" heading and a "Get Started" button linking to #register are visible

### Requirement: Footer with Component Dock attribution

The footer MUST display brand info, quick links, categories, contact details, and a Component Dock attribution link.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** brand name, Quick Links, Categories, Contact info, copyright with current year, and a "Component Dock" link to https://www.componentdock.com/ (opens in new tab) are visible

### Requirement: 100% test coverage

All source files MUST have 100% statement, branch, function, and line coverage.

#### Scenario: Coverage check

- **WHEN** the verification gate runs
- **THEN** all coverage thresholds are met at 100%

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/uniwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/uniwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] TopBar displays contact info and login link — the top bar shows "Have any questions?", phone "001-1234-88888", email "info@uniwell.edu", and "Register or Login"
- [ ] Navbar provides navigation and search — the logo, Home/About/Courses/Blog/Page/Contact links, search and cart icons are visible
- [x] Hero section with search bar — the heading "The Premium System Education", subtitle "Future Of Education Technology", and search form are visible
- [ ] Welcome section with feature cards — "Welcome To Uniwell E-Learning" heading and cards for Online Courses, Expert Instructors, Certified Programs, and Campus Life are visible
- [ ] Course categories grid — Web Development (120), Mobile Development (85), Data Science (95), Business (110), Design (75), and Marketing (65) categories are shown
- [ ] Popular courses grid — six course cards with titles, instructor names, star ratings, student counts, durations, prices, and Enroll Now buttons are shown
- [x] Registration CTA banner — "Register for Free Today" heading and a "Get Started" button linking to #register are visible
- [ ] 100% test coverage — all coverage thresholds are met at 100%
