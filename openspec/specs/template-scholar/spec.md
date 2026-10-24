# Template: Scholar (Online Courses)

> Recreation of the ColorLib "Onedu" design for the free-react-templates monorepo.

## Purpose

Scholar is an online courses template. It recreates the ColorLib **Onedu** design (https://colorlib.com/wp/template/onedu/, preview: https://preview.colorlib.com/theme/onedu/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/onedu/ (HTTP 200, 44,578 B, fetched 2026-10-23) and its theme stylesheet `theme/onedu/assets/css/style.css` (74,106 B, sha256 `b97df0fe66ce…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ea5252` | 39 declarations — `.btn_1`, `.submit-btn:hover` |
| Other chromatic values | `#ff6f00`, `#415094`, `#4cd3e3` | `#ff6f00` × 20 (.submit-btn); `#415094` × 7 (.genric-btn.default); `#4cd3e3` × 7 (.genric-btn.success) |
| Surface | `#ffffff` | 78 declarations — `a`, `button` |
| Ink / dark surface | `#000000` | 4 declarations — `.single-post-area .navigation-area .nav-left .thumb`, `.login-form-area .login-form .input-box .single-input-fields input` |
| Typeface | `"Jost", sans-serif` (13 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `font-weight: normal; font-size: 16px` | `body{…}` rule |
| Radii | `50%`, `3px`, `4px` | `50%` (#back-top); `3px` (.genric-btn.radius); `4px` (.btn) |

Palette in order of use: `#ffffff` ×78, `#ea5252` ×39, `#f9f9ff` ×27, `#ff6f00` ×20, `#3c3b37` ×12, `#999999` ×10.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

<!-- role-rule-tokens: onedu/ink -->
**Role rule (measured 2026-10-25):** 6 rule(s) own ink; strongest `h6{color:#3C3B37}` — the design declares `#3c3b37`; this prep states `#000000`, which no rule that owns the heading ink declares. The sibling prep `edunova` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Feature: Navbar

#### Scenario: Renders logo, search, nav links, cart, and sign-in button

- **GIVEN** the page is loaded
- **THEN** the navbar shows the "Scholar" logo link
- **AND** a search input is visible
- **AND** the following nav links are present: "Home", "Browse Courses", "About", "Blog", "Contact"
- **AND** a cart icon with badge is visible
- **AND** a "Sign In" button is visible

### Feature: Hero Section

#### Scenario: Displays headline, subtext, and search form

- **GIVEN** the page is loaded
- **THEN** the hero heading "Learn new skills online with top educators" is visible
- **AND** the subtext "Learn 100% online with world-class universities and industry experts." is visible
- **AND** a search form with a search button is visible
- **AND** a hero image is displayed

### Feature: Popular Courses

#### Scenario: Shows course cards with images, prices, titles, instructors, and ratings

- **GIVEN** the page is loaded
- **THEN** the heading "The world's largest selection of courses" is visible
- **AND** 5 course cards are rendered
- **AND** each course card shows a price "$118"
- **AND** each course card shows a star rating "4.9"

### Feature: About Split

#### Scenario: Displays heading, description, and browse button with an image

- **GIVEN** the page is loaded
- **THEN** the heading "The world's largest selection of online courses" is visible
- **AND** a "Browse Courses" button is visible
- **AND** an about image is displayed

### Feature: Students Viewing

#### Scenario: Shows "Students are viewing" heading and course cards

- **GIVEN** the page is loaded
- **THEN** the heading "Students are viewing" is visible
- **AND** 5 course cards are rendered in the students section

### Feature: Testimonial

#### Scenario: Shows student testimonial with quote, avatar, name, and role

- **GIVEN** the page is loaded
- **THEN** the heading "Student says about us" is visible
- **AND** the quote text is visible
- **AND** the name "Petey Cruiser" is visible
- **AND** the role "Student at Scholar" is visible

### Feature: Categories Grid

#### Scenario: Displays category cards with images and view-courses links

- **GIVEN** the page is loaded
- **THEN** the heading "Explore top categories" is visible
- **AND** 8 category cards are rendered
- **AND** each category card has a "View Courses" link
- **AND** the categories include "Programming", "VFX", "App Development", "Technology", "Graphics Design", "Music", "Product Design", "Video Editing"

### Feature: Become Instructor

#### Scenario: Shows heading, description, features, and CTA button

- **GIVEN** the page is loaded
- **THEN** the heading "Become an Instructor" is visible in the instructor section
- **AND** 3 checkmark features are visible
- **AND** a "Become an Instructor" button is visible
- **AND** a "Watch Video" link is visible

### Feature: Footer

#### Scenario: Displays columns, newsletter form, and Component Dock link

- **GIVEN** the page is loaded
- **THEN** the footer content info is visible
- **AND** a newsletter form with email input and subscribe button is visible
- **AND** a link to "https://www.componentdock.com/" branded "Component Dock" is visible
- **AND** the copyright text is visible
- **AND** the footer contains "Subjects", "Community", and "Company" column headings

### Feature: Back to Top

#### Scenario: Button appears after scrolling and scrolls to top on click

- **GIVEN** the page is loaded
- **THEN** the back-to-top button is not visible
- **WHEN** the user scrolls down
- **THEN** the back-to-top button becomes visible
- **WHEN** the user clicks the back-to-top button
- **THEN** the page scrolls to the top

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/scholar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/scholar/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — the navbar shows the "Scholar" logo link
- [x] Hero Section — the hero heading "Learn new skills online with top educators" is visible
- [ ] Popular Courses — the heading "The world's largest selection of courses" is visible
- [ ] About Split — the heading "The world's largest selection of online courses" is visible
- [x] Students Viewing — the heading "Students are viewing" is visible
- [x] Testimonial — the heading "Student says about us" is visible
- [x] Categories Grid — the heading "Explore top categories" is visible
- [x] Become Instructor — the heading "Become an Instructor" is visible in the instructor section
- [ ] Back to Top — the back-to-top button is not visible
