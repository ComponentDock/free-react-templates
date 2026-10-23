# Template: Learnwise (Education & Courses)

## Purpose

Recreation of ColorLib's "Clever" template — an education and online courses website. The React version preserves the same section structure, design tokens, and layout patterns while using modern React 19 + Vite + Tailwind CSS 4 + TypeScript.

- **Source**: ColorLib Clever (https://colorlib.com/wp/template/clever/)
- **Preview**: https://preview.colorlib.com/theme/clever/
- **Package**: `@free-react-templates/learnwise`
- **Surge target**: `learnwise.free.componentdock.com`

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Clever** — https://colorlib.com/wp/template/clever/
- **Preview**: `https://preview.colorlib.com/theme/clever/` — HTTP 200 on 2026-10-23, **33,694 bytes**, title `Clever - Education & Courses Template | Home`.
- **Stylesheet measured**: `style.css` — **59,857 bytes**, sha256 `28551082308e…`. One theme sheet; it `@import`s `css/classy-nav.min.css` and links Font Awesome, so the census below is the theme layer only.
- **Measured how**: hex-literal census of the theme sheet, then the winning rule per selector. Not a rebuild — no `?v=` marker, no `/kit/`, Bootstrap-4-era markup.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand blue | `#3762f0` | 19 | `.clever-btn` background · links · `#scrollUp` · counters · prices · `.register-login-area a` · play-button hover glyph |
| Brand blue (hover) | `#2c56df` | 7 | `.clever-btn:hover`, `.active`, `.btn-2:hover`, blog headline hover, `#scrollUp:hover` |
| Brand tint | `#d7e0fc` | 1 | `.register-login-area a.active/:hover` fill; also `rgba(215,224,252,0.9)` on `.clever-catagory::after` |
| Accent yellow | `#e3d21b` | 7 | `.course-fee a` (price badge), course star ratings, curriculum markers |
| Surface light | `#f7f7f7` | 13 | `.top-header-area`, preloader, course meta strip, instructor cards |
| Surface edge | `#ebebeb` | 21 | `.clever-btn.btn-2` base, borders, active tab fill |
| Ink | `rgba(0,0,0,0.8)` | — | `h1–h6` at **700** |
| Body copy | `#5a5a5a` | 2 | `p`, collapsed accordion heading |
| Nav / meta muted | `rgba(0,0,0,0.45)` → `.8` hover | — | `.clever-main-menu .classynav ul li a` |
| Footer band | `#252525` | 1 | `.top-footer-area` |
| Footer base | `#1f1f1f` | 1 | `.bottom-footer-area` |
| Hover ink | `#1b1b1b` | 3 | top-header link hovers, category hover |
| Hero scrim | `rgba(0,0,0,0.2)` | — | `.bg-overlay-2by5::after` on the hero photo (`.bg-overlay` elsewhere is `0.6`, `.foo-bg-overlay` `0.91`) |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Open Sans", sans-serif` · 14 px / 400 | `body` |
| Headings | the **body face** (Open Sans) · 700 · `rgba(0,0,0,0.8)` | `h1–h6` set weight + colour only, no family |
| Paragraphs / long copy | `"Raleway", sans-serif` · 14 px / 400 · `#5a5a5a` | `p` |
| Hero H2 | 40 px / 700 · `#ffffff` | `.hero-area .hero-content h2` |
| Section heading | 30 px (24 px small) | `.section-heading h3` |
| Buttons / tabs | 14 px / 600 · uppercase · `letter-spacing: 1px` | `.clever-btn`, `.nav-tabs .nav-link` |
| Stat number | 36 px · `#3762f0` | `.single-cool-facts-area h2` |

Note the split: **Raleway is the prose face, Open Sans the UI/heading face.** Neither is a serif.

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radius | **6 px** everywhere (11 rules: buttons, inputs, cards, tabs, blog images `6px 6px 0 0`, comment cards, fact tiles) |
| Section band | `.section-padding-100` (100 px) / `-100-0` (top only), alternating white and `#f7f7f7` |
| Buttons | `.clever-btn { padding: 0 30px; border-radius: 6px; text-transform: uppercase }`, `.btn-2` transparent with `rgba(0,0,0,0.25)` label flipping to blue on hover |
| Hero | background photo + `rgba(0,0,0,0.2)` scrim, centred `h2` + `Get Started` |
| Cards | course cards with the `#e3d21b` price chip and `#f7f7f7` meta strip; tutor carousel cards |
| Form panel | `.register-contact-form` white card, 6 px radius, 40 px padding |

Section order measured in the reference DOM: `.header-area` (phone +44 300 303 0266, email, "Follow us", nav Home/Pages/Courses, search, register-login) → `.hero-area` "Let's Study Together" + Get Started → `.cool-facts-area` (1912 / 123 / 89 / 56) → `.popular-courses-area` (3 course cards) → `.best-tutors-area` (carousel) → `.register-now` split (copy + white form card) → `.upcoming-events` (event cards) → `.blog-area` (2 posts) → `.footer-area` (`#252525` + `#1f1f1f`).

**Deltas vs the shipped app** (drift is not a prep error — the app is already on main):
- Every colour matches the reference exactly (`#3762f0`, `#2c56df`, `#e3d21b`, `#252525`, `#1f1f1f`).
- **Font roles are swapped**: the app declares `--font-heading: 'Raleway'` and `--font-body: 'Open Sans'`; the reference sets headings in **Open Sans** (700) and prose in **Raleway**.
- The app's `--color-register-overlay: rgba(214,223,251,0.7)` is one step off the reference's `rgba(215,224,252,0.9)`.

## Requirements

### Requirement: TopHeader displays contact info and social links

The template SHALL render a top header bar with contact information (phone, email) and social media icon links.

#### Scenario: Contact info visible

- **WHEN** the page loads
- **THEN** the top header shows "Phone: +44 300 303 0266" and "Email: info@learnwise.com"

#### Scenario: Social links open in new tab

- **WHEN** the user clicks a social icon in the top header
- **THEN** the link opens in a new tab

### Requirement: Navbar with navigation and actions

The template SHALL render a sticky navbar with logo, navigation links, search icon, and Register/Login buttons.

#### Scenario: Desktop nav links

- **WHEN** the page loads on desktop
- **THEN** navigation links for Home, Courses, Instructors, Blog, and Contact are visible

#### Scenario: Register and Login buttons

- **WHEN** the page loads
- **THEN** "Register" and "Login" buttons are rendered in the navbar

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the viewport width is less than 768px and the user clicks the hamburger icon
- **THEN** the mobile navigation menu opens with all nav links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a nav link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero section with parallax background

The template SHALL render a full-width hero section with a parallax background image, dark overlay, heading, and CTA button.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "Let's Study Together" heading and a "Get Started" CTA button

### Requirement: CoolFacts section with four statistics

The template SHALL render a four-column grid of statistics with icons, numbers, and labels.

#### Scenario: Four statistics displayed

- **WHEN** the cool facts section is visible
- **THEN** four statistics are displayed: "1912 Success Stories", "123 Dedicated Tutors", "89 Scheduled Events", "56 Available Courses"

### Requirement: PopularCourses section with three course cards

The template SHALL render a three-column grid of course cards with images, titles, metadata, descriptions, and fees.

#### Scenario: Three course cards rendered

- **WHEN** the popular courses section is visible
- **THEN** three course cards are displayed with titles "English Grammar", "Vocabulary", and "Expository Writing"

#### Scenario: Course fees displayed

- **WHEN** the popular courses section is visible
- **THEN** each card shows a fee: "Free", "$20", or "$45"

### Requirement: BestTutors section with carousel

The template SHALL render a horizontal scrollable carousel of tutor cards with photos, names, roles, bios, and social icons.

#### Scenario: Tutor cards rendered

- **WHEN** the best tutors section is visible
- **THEN** five tutor cards are displayed with names "Alex Parker", "Maria Johnson", "James Wilson", "Sophie Chen", and "David Brown"

#### Scenario: Carousel navigation buttons

- **WHEN** the best tutors section is visible
- **THEN** "Previous tutor" and "Next tutor" navigation buttons are rendered

### Requirement: RegisterNow split section with form

The template SHALL render a split section with a registration form on the left and CTA text on the right.

#### Scenario: Registration form fields

- **WHEN** the register section is visible
- **THEN** a form with Name, Email, Phone, and Site input fields and a "Send Message" button is rendered

#### Scenario: Form submission

- **WHEN** the user submits the registration form
- **THEN** the form does not navigate away (preventDefault)

### Requirement: UpcomingEvents section with event cards

The template SHALL render a three-column grid of event cards with images, date badges, titles, times, and fees.

#### Scenario: Three event cards rendered

- **WHEN** the upcoming events section is visible
- **THEN** three event cards are displayed with titles "Networking Day", "Open Doors Day", and "Creative Leadership"

#### Scenario: Date badges displayed

- **WHEN** the upcoming events section is visible
- **THEN** each card shows a date badge with the event date

### Requirement: Blog section with two post cards

The template SHALL render a two-column grid of blog post cards with images, headlines, metadata, and excerpts.

#### Scenario: Two blog posts rendered

- **WHEN** the blog section is visible
- **THEN** two blog posts are displayed with titles "Effective Study Habits" and "Online Learning Tips"

### Requirement: Footer with Component Dock link

The template SHALL render a dark footer with logo, copyright, contact info, social links, and a link to Component Dock.

#### Scenario: Footer displays copyright and contact

- **WHEN** the footer is visible
- **THEN** the footer shows the "Learnwise" logo, copyright text, phone number, and email

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" branded as "Component Dock" is present and opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/learnwise/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/learnwise/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Top header with contact info and social links
- [ ] Sticky navbar with logo, nav links, search, register/login
- [ ] Hero with parallax background, heading, CTA button
- [ ] Cool facts with 4 counters (1912, 123, 89, 56) and icons
- [ ] Popular courses with 3 cards (image, title, meta, description, price)
- [ ] Best tutors carousel with tutor slides (photo, name, role, bio, social)
- [ ] Register Now split section with form and CTA text
- [ ] Upcoming events with 3 cards (image, date badge, title, time, fee)
- [ ] Blog with 2 cards (image, headline, meta, excerpt)
- [ ] Footer with logo, copyright, contact info, social links, Component Dock link
- [ ] Design tokens: #3762f0 primary blue, #e3d21b accent yellow, Raleway + Open Sans fonts
- [ ] Button style: height 40px, min-width 160px, #3762f0 bg, uppercase, 6px radius
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] 100% test coverage (lines, functions, branches, statements)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
