# Template: Zenbloom (Yoga Studio Landing)

## Purpose

Zenbloom is a single-page yoga studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Yogabest" template
(preview: https://preview.colorlib.com/theme/yogabest/ — yoga studio landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand green `#6cae22` (accent subheadings, icons, counters)
- Accent orange `#F96D00` (loader, CTA hover)
- Typeface: Poppins (Google Fonts via `<link>`) + Reenie Beanie (display font)
- Dark overlays on background images; alternating white / light gray sections
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Zenbloom lives in `apps/zenbloom` and uses shared components from `packages/ui`
(cn, Button).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Yogabest** — https://colorlib.com/wp/template/yogabest/
- **Preview**: `https://preview.colorlib.com/theme/yogabest/` — HTTP 200 on 2026-10-23, **44,489 bytes**, title `Yogabest - Free Bootstrap 4 Template by Colorlib`.
- **Stylesheet measured**: `css/style.css` — **82,521 bytes**, sha256 `e4172187ba7f…`, over Bootstrap 4 + Font Awesome (CDN) + owl-carousel / animate / magnific-popup / flaticon.
- **Measured how**: hex-literal census of `css/style.css`, then the winning rule per selector.
- **The rebuild flag on this demo was a FALSE POSITIVE**: the detector used to match `3\.0\.\d` anywhere in the HTML and this page loads `js/jquery-migrate-3.0.1.min.js`. There is no `?v=` marker, no `/kit/`, no Bootstrap 5, and the title still self-identifies as a **Bootstrap 4** Colorlib build — the demo is the original, so app mismatches are prep-level facts, not drift. It now keys on asset/version markers only (`?v=3.`, `/kit/`, `Bootstrap v5.3`, a `generator` meta naming 3.0.x), so this demo reports `rebuilt=False` again.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Olive green | `#6cae22` | 60 | `a`/`button` · nav active · `.btn.btn-primary` (`!important`) · footer link + social hover · counter labels · `.text span` kicker |
| Light green | `#9acb56` | 9 | `.hero-wrap .overlay-2` — `linear-gradient(to bottom, #9acb56 0%, rgba(255,255,255,0) 71%, rgba(255,255,255,0) 100%)` |
| Ink | `rgba(0,0,0,0.8)` | — | `h1–h5` at **400** |
| Body copy | `#999999` | 1 | `body` (16 px) |
| Dark panel | `#141b25` | 3 | `.ftco-footer` · `.classes .text h3 a` · `.table thead th` |
| Scrim | `#000000` | — | `.hero-wrap .overlay`, `.hero-wrap-2 .overlay`, `.ftco-about .overlay` |
| White overlay | `#fff` | — | `.ftco-services .overlay` |
| On-brand | `#fff` | — | `.btn-primary` label, footer headings, social glyphs |

**Markup-level colour, not a sheet token**: `#F96D00` appears exactly once in the
page, on the `#ftco-loader` preloader's inline SVG `stroke` (`<circle … stroke="#F96D00">`).
It is a loader artefact — a stylesheet-only census can never see it, and it must
not be promoted to a brand/accent role.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Poppins", Arial, sans-serif` · 16 px / 400 · `#999999` | `body` |
| Headings | Poppins · **400** · `rgba(0,0,0,0.8)` | `h1–h5` |
| Script accent | `"Reenie Beanie", cursive` | testimonial numerals (40 px), blog meta (14 px) |
| Class meta | 12 px / 500 · uppercase · `#000` | `.classes .text .meta p` |
| Footer widget head | 20 px / 600 · `#fff` | `.ftco-footer-widget h2` |
| Buttons | 14 px / 400 · `padding: 9px 12px` | `.btn` |

Two faces only: Poppins for everything, Reenie Beanie as a handwritten accent —
no serif.

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radius | **4 px** on `.btn`; `50%` on `.ftco-footer-social` circles; 2 px on a couple of small chips; Bootstrap's `0.25rem` elsewhere |
| Bands | `.ftco-section { padding: 7em 0 }` (6em small), alternating white / `bg-light` |
| Hero | `.hero-wrap` **900 px**, cover photo + `#000` overlay (+`#9acb56` gradient variant), white H1 + CTA |
| Counters | `.ftco-counter` over a photo, white numerals, green `.text span` kicker |
| Testimonials | `block-18` with a 40 px Reenie Beanie numeral and a 14 px uppercase green kicker |
| Footer | `#141b25`, 6em top padding, white headings, `rgba(255,255,255,0.7)` links → `#6cae22` hover |

Section order measured in the reference DOM: top bar (phone +00 1234 567, email, 4 social chips) → navbar (Yogabest, Home/About/Trainer/Classes/Schedule/Blog/Contact) → `.hero-wrap` 900 px ("Welcome to Yogabest", "Yoga Enhances Your Life", CTA) → `.ftco-services bg-light` (Outdoor Activities …) → `.ftco-about img` (0 Year Of Experienced / "Relish in Nature's Natural Gift") → `.ftco-services img` ("Control Your Body To Free Your Soul", Body & Mind Balance) → `.ftco-counter img` (4 counters) → `.ftco-section` Yoga Classes (class cards, `Mon, Tue, Wed 8:00 am-9:00am`) → `testimony-section` → Yoga Schedule (Mon–Sun tabs) → Yoga Trainer (Elizabeth Nelson) → `bg-light` Our Blog (Oct. 10, 2020) → `.ftco-footer` `#141b25`.

**Deltas vs the shipped app** (drift is not a prep error — the app is already on main):
- Brand `#6cae22` matches exactly; the app's sage ramp around it is an invention, the reference has no ramp.
- The app's `--color-ember-400: #f96d00` traces to the **preloader spinner stroke**, not to any section colour — keep it out of component styling.
- The hero's `#9acb56` gradient overlay (9 occurrences) is unmodelled in the app.
- The app's `--color-display: 'Reenie Beanie'` and `--font-sans: 'Poppins'` match the reference pair exactly.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#6cae22` | live sheet paints it ×60 — `background` on `.icon-video`; style.css (82,521 B, sha256 e4172187ba7f) · <https://preview.colorlib.com/theme/yogabest/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Top bar

The system SHALL render a top bar with phone number, email address, and social
links (Facebook, Twitter, Instagram, Dribbble).

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show "Phone no:" with a clickable phone link
- **AND** it SHALL show "email us:" with a clickable email link

#### Scenario: Social links

- **GIVEN** the page is rendered
- **WHEN** the top bar social icons are displayed
- **THEN** it SHALL show Facebook, Twitter, Instagram, and Dribbble links

### Requirement: Navigation bar

The system SHALL render a dark navigation bar with the brand name "Zenbloom",
section links (Home, About, Trainers, Classes, Schedule, Blog, Contact), and a
hamburger toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Zenbloom" linking to `#home`
- **AND** it SHALL show links to Home, About, Trainers, Classes, Schedule, Blog, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered
- **WHEN** the hamburger button is clicked
- **THEN** the mobile menu SHALL become visible
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-height hero section with a background image,
overlay, heading "Yoga Enhances Your Life", subheading "Zenbloom Studio", and a
video play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the heading "Yoga Enhances Your Life"
- **AND** it SHALL show the subheading "Zenbloom Studio"
- **AND** it SHALL show a "Play introduction video" button

### Requirement: Services section

The system SHALL render a services section on light background with three
service items: "Outdoor Activities", "Experienced Trainers", and "Happy
Environment", each with an icon and description.

#### Scenario: Service items

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL display three service cards
- **AND** each card SHALL have a heading and description

### Requirement: About section

The system SHALL render an about section with an image, "42 Years Experience"
counter overlay, heading "Life in Divine Yoga", and a "Learn More" button.

#### Scenario: Experience counter

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL show the number "42" with "Years Experience" label
- **AND** it SHALL show the heading "Life in Divine Yoga"

### Requirement: Features section

The system SHALL render a features section with dark background image, heading
"Control Your Body To Free Your Soul", and three feature items: "Body & Mind
Balance", "Healthy Daily Life", and "Improves Flexibility".

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the features section is visible
- **THEN** it SHALL display the heading "Control Your Body To Free Your Soul"
- **AND** it SHALL show three feature items with headings

### Requirement: Counter section

The system SHALL render a counter section with four statistics: "150 Yoga
Classes", "1,000 Yoga Conducted", "65 Years Experienced", and "71,650 Happy
Customers".

#### Scenario: Statistics display

- **GIVEN** the page is rendered
- **WHEN** the counter section is visible
- **THEN** it SHALL display four statistic values and labels

### Requirement: Classes section

The system SHALL render a classes section with six class cards: "Vinyasa Flow",
"Power Yoga", "Hatha Yoga", "Yin Yoga", "Ashtanga Yoga", and "Restorative
Yoga", each with trainer name, time, and category.

#### Scenario: Class cards

- **GIVEN** the page is rendered
- **WHEN** the classes section is visible
- **THEN** it SHALL display six class cards with titles
- **AND** each card SHALL show a trainer name

### Requirement: Testimonials section

The system SHALL render a testimonials section with heading "What They Are
Saying", two mini features ("Certified Instructors", "Personalized Programs"),
and testimonial cards with star ratings.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL show the heading "What They Are Saying"
- **AND** it SHALL show mini feature items

### Requirement: Schedule section

The system SHALL render a schedule section with a 7-column weekly timetable
(Monday through Sunday) showing class names, trainers, and time slots.

#### Scenario: Weekly timetable

- **GIVEN** the page is rendered
- **WHEN** the schedule section is visible
- **THEN** it SHALL display all seven day headers
- **AND** it SHALL show time slots

### Requirement: Trainers section

The system SHALL render a trainers section with four trainer cards: Elizabeth
Nelson, Scarlett Torres, Victoria Wright, and Stella Perry, each with "Owner /
Head Coach" label and social links.

#### Scenario: Trainer cards

- **GIVEN** the page is rendered
- **WHEN** the trainers section is visible
- **THEN** it SHALL display four trainer cards with names
- **AND** each card SHALL show "Owner / Head Coach" role

### Requirement: Blog section

The system SHALL render a blog section with three blog entries: "Treat Your
Body Like A Temple", "Morning Yoga Routines For Energy", and "Mindfulness And
Meditation Tips", each with a date and read-more link.

#### Scenario: Blog entries

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL display three blog cards with titles and dates

### Requirement: Footer

The system SHALL render a footer with logo, social links, recent blog entries,
explore navigation links, contact information, and a copyright bar linking to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show the "Zenbloom" logo
- **AND** it SHALL link to Component Dock (https://www.componentdock.com/)
- **AND** it SHALL show contact information

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/zenbloom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/zenbloom/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Top bar — it SHALL show "Phone no:" with a clickable phone link
- [x] Navigation bar — it SHALL show the brand name "Zenbloom" linking to `#home
- [x] Hero section — it SHALL display the heading "Yoga Enhances Your Life"
- [ ] Services section — it SHALL display three service cards
- [x] About section — it SHALL show the number "42" with "Years Experience" label
- [x] Features section — it SHALL display the heading "Control Your Body To Free Your Soul"
- [ ] Counter section — it SHALL display four statistic values and labels
- [ ] Classes section — it SHALL display six class cards with titles
- [x] Testimonials section — it SHALL show the heading "What They Are Saying"
- [ ] Schedule section — it SHALL display all seven day headers
- [ ] Trainers section — it SHALL display four trainer cards with names
- [ ] Blog section — it SHALL display three blog cards with titles and dates
