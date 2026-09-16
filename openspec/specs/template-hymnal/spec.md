# Template: Hymnal (Church / Nonprofit)

## Purpose

Hymnal is a full-page CHURCH / NONPROFIT WEBSITE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Wisdom" free template (source:
https://colorlib.com/wp/template/wisdom/), built under a DIFFERENT name
(**Hymnal**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 multi-page church template with a full-
height video hero section, a dark navy Bible Study feature bar, about/
ministry sections, a parallax newsletter signup, sermon entries, a
testimony carousel, animated counters, event listings, blog cards, and a
dark footer — all themed with a teal-to-blue gradient accent and "Work
Sans" font. The recreation renders the single-page index view with all
major sections.

## Naming

The ColorLib source name "Wisdom" is FORBIDDEN as the app name.
**Hymnal** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `hymnal` in TEMPLATES.md,
`ls apps/`, `openspec/specs/`, `docs/templates/`). Source slug + preview
URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Wisdom" (page title: "Wisdom - Free Bootstrap
  4 Template by Colorlib"). Listed in TEMPLATES.md under **Nonprofit /
  Church (8)** section (line 1310 — `- [ ] **Wisdom**`). The
  `wp/template/wisdom/` slug appears exactly ONCE in TEMPLATES.md.
- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/wisdom/`
  (HTTP 200, 35,638 bytes, Bootstrap 4 multi-page church template,
  `<title>Wisdom - Free Bootstrap 4 Template by Colorlib</title>`).
  Stylesheets: `css/style.css` (combined Bootstrap 4 + custom Wisdom
  styles), external: Google Fonts "Work Sans". Scripts: Bootstrap 4 jQuery,
  YouTube background player, GLightbox, AOS, custom `js/main.js`.
- **Live DOM structure (from the fetched HTML + CSS; section order):**
  - **Navbar** (`nav.navbar`): dark bg, brand "Wisdom" → "Hymnal",
    nav links right (Home, About, Events, Sermons, Blog, Contact),
    hamburger toggle on mobile.
  - **Video hero** (`.video-hero`): full-height section (700px),
    background image (`images/bg_1.jpg`) with a teal gradient overlay
    (`#08c299`), YouTube video background embed, centered text:
    h1 "Needing **Jesus Christ** Together" + "Save your spirit" CTA
    button (btn-outline-white, pill shape 30px radius).
  - **Bible study bar** (`.ftco-bible-study`): dark navy (`#272e4f`)
    full-width bar, overlapping hero by -150px margin, 4-column layout
    with: h3 "Bible Study" + description (35% left, bordered right),
    3 feature columns (65% right): "Loving God, Loving Others and
    Serving the World", "I'm New Here", "Care Ministries" — each with
    h3 title, paragraph, and "Events Details" button.
  - **About / Ministry section** (`.ftco-section-2`): heading
    "Giving light to someone", 3 ministry cards (Loving God, I'm New
    Here, Care Ministries) with images, headings, descriptions.
  - **Newsletter parallax** (`.ftco-section-parallax`): full-width
    parallax background image, centered white text, heading "Subscribe
    to our Newsletter", description, email input + submit button.
  - **Sermons section** (`.ftco-section`): heading "Watch our sermons",
    sermon entries with image + text (title "Be at Peace With One
    Another", description, "Watch all sermons" button).
  - **Testimony section** (`.testimony-section.bg-light`): heading
    "Testimonies", carousel of testimonial cards (circular avatar,
    quote icon in coral `#ff5656` on light pink `#ffd6d6`, quote text,
    person name).
  - **Counter section** (`.ftco-counter`): heading "Church
    Achievements", 3 animated counters: Churches (20,254), Members
    (4,200,000), Donations (8,600,000).
  - **Events section** (`.ftco-section-2.bg-light`): heading "Our
    latest events", event entries with date badge (07 Aug 2018),
    time, location, "View Events" button.
  - **Blog section** (`.ftco-section`): heading "Recent Blog", blog
    cards.
  - **Footer** (`footer.ftco-footer.ftco-bg-dark`): dark navy
    (`#272e4f`), 4-column layout: brand info, Quick Links (Church kids,
    Community, Ministries, Message, Sermons, Events), Contact
    Information (address, phone, email), social icons. Copyright line
    with Colorlib attribution (replace with Component Dock).

- **Screenshot (from TEMPLATES.md embedding):** Church template with a
  full-height hero showing a dark teal-overlaid background, centered
  white text "Needing Jesus Christ Together", a white-outlined CTA
  button. Below: a dark navy horizontal bar with service cards, an
  about section with ministry cards and photos, a parallax newsletter
  section, sermon entries, testimony carousel, counters, events, blog,
  and a dark footer. Aesthetic: warm, modern church feel, teal/navy
  color scheme, Work Sans typography, clean Bootstrap grid. **No imagery
  matches — use picsum placeholders.**

## Design tokens

| Token               | Value                          | Notes                                                                          |
| ------------------- | ------------------------------ | ------------------------------------------------------------------------------ |
| `--color-brand`     | `#78d5ef`                      | Light blue — primary button bg, accent color                                   |
| `--color-brand-dark`| `#56caeb`                      | Darker blue — button hover                                                     |
| `--color-brand-deep`| `#4ac7ea`                      | Deepest blue — button active                                                   |
| `--color-navy`      | `#272e4f`                      | Dark navy — Bible study bar, footer background                                 |
| `--color-hero-overlay` | `#08c299`                   | Teal green — hero overlay gradient (teal → transparent)                        |
| `--color-accent`    | `#ff5656`                      | Coral red — testimony quote icons, some CTA buttons                            |
| `--color-accent-light` | `#ffd6d6`                    | Light pink — testimony quote icon background                                   |
| `--color-bg-light`  | `#f8faff`                      | Very light blue-gray — testimony section, events section                       |
| `--color-ink`       | `#212529`                      | Body text, dark text                                                           |
| `--color-white`     | `#fff`                         | Hero text, button text, footer text                                            |
| `--font-body`       | 'Work Sans', sans-serif        | Google Fonts; body base ~16px                                                  |
| `--btn-radius`      | `30px`                         | Pill-shaped buttons                                                            |
| `--navbar-bg`       | Bootstrap dark (`#343a40`)     | Dark navbar background                                                         |

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar with brand text and navigation
links.

#### Scenario: Navbar content

- **GIVEN** the Hymnal app is rendered
- **THEN** a dark-background navbar SHALL render with the brand name
  "Hymnal" on the left
- **AND** navigation links SHALL appear right-aligned: Home, About,
  Events, Sermons, Blog, Contact
- **AND** the navbar SHALL be sticky/fixed on scroll

#### Scenario: Mobile navbar toggle

- **GIVEN** the viewport is at or below 768px
- **THEN** the navbar SHALL collapse to a hamburger menu icon
- **WHEN** the user taps the hamburger
- **THEN** the navigation links SHALL expand vertically

#### Scenario: Smooth scroll to sections

- **GIVEN** the navbar is rendered
- **WHEN** the user clicks a navigation link (e.g. "About")
- **THEN** the page SHALL smooth-scroll to the corresponding section

### Requirement: Video hero section

The system SHALL render a full-height hero section with a background
image, teal overlay, centered text, and a CTA button.

#### Scenario: Hero rendering

- **GIVEN** the Hymnal app is rendered on a desktop viewport
- **THEN** a full-height hero section (700px) SHALL display with a
  background image covering the viewport
- **AND** a teal gradient overlay (`#08c299`) SHALL sit over the image
  (opacity ~0.5)
- **AND** centered white text SHALL show h1 "Needing **Jesus Christ**
  Together" with "Jesus Christ" bolded
- **AND** a "Save your spirit" CTA button SHALL render with white
  outline (btn-outline-white), pill shape (30px radius), transparent
  background with white border

#### Scenario: Hero CTA button hover

- **GIVEN** the hero CTA button is rendered
- **WHEN** the user hovers the button
- **THEN** the button background SHALL turn white and the text SHALL
  turn coral (`#ff5656`)

### Requirement: Bible study bar

The system SHALL render a dark navy feature bar with 4 columns.

#### Scenario: Bible study layout

- **GIVEN** the Hymnal app is rendered
- **THEN** a dark navy (`#272e4f`) full-width bar SHALL display below
  the hero, overlapping it by ~150px negative margin on desktop
- **AND** the bar SHALL contain 4 columns: left column (35%) with h3
  "Bible Study" + description text, bordered right; 3 right columns
  (65% total) each with h3 title + paragraph + "Events Details" button
- **AND** the 3 right columns SHALL be: "Loving God, Loving Others and
  Serving the World", "I'm New Here", "Care Ministries"
- **AND** all text in the bar SHALL be white

### Requirement: About / Ministry section

The system SHALL render an about section with ministry feature cards.

#### Scenario: About layout

- **GIVEN** the Hymnal app is rendered
- **THEN** a section titled "Giving light to someone" SHALL display
- **AND** 3 ministry cards SHALL render with images, headings, and
  descriptions matching the Bible study bar titles (Loving God, I'm
  New Here, Care Ministries)

### Requirement: Newsletter parallax section

The system SHALL render a parallax newsletter signup section.

#### Scenario: Newsletter section

- **GIVEN** the Hymnal app is rendered
- **THEN** a full-width parallax section SHALL display with a background
  image, dark overlay, and centered white text
- **AND** the heading SHALL read "Subscribe to our Newsletter"
- **AND** an email input field + submit button SHALL render centered

### Requirement: Sermons section

The system SHALL render sermon entries with images and text.

#### Scenario: Sermon entries

- **GIVEN** the Hymnal app is rendered
- **THEN** a section titled "Watch our sermons" SHALL display
- **AND** sermon entries SHALL render with image + text layout
- **AND** each entry SHALL have a title, description, and "Watch all
  sermons" button

### Requirement: Testimony section

The system SHALL render a testimony carousel on a light background.

#### Scenario: Testimony layout

- **GIVEN** the Hymnal app is rendered
- **THEN** a light background (`#f8faff`) section titled "Testimonies"
  SHALL display
- **AND** a carousel of testimonial cards SHALL render, each with:
  circular avatar image, quote icon in coral (`#ff5656`) on light pink
  (`#ffd6d6`) background, quote text, and person name
- **AND** the carousel SHALL auto-advance

### Requirement: Counter section

The system SHALL render animated achievement counters.

#### Scenario: Counter display

- **GIVEN** the Hymnal app is rendered
- **THEN** a section titled "Church Achievements" SHALL display with
  3 animated counters: Churches (20,254), Members (4,200,000),
  Donations (8,600,000)
- **AND** counters SHALL animate from 0 on scroll into view

### Requirement: Events section

The system SHALL render event listings with date badges.

#### Scenario: Event entries

- **GIVEN** the Hymnal app is rendered
- **THEN** a light-background section titled "Our latest events" SHALL
  display
- **AND** event entries SHALL have date badges, time, location, and
  "View Events" button

### Requirement: Blog section

The system SHALL render blog cards.

#### Scenario: Blog cards

- **GIVEN** the Hymnal app is rendered
- **THEN** a section titled "Recent Blog" SHALL display with blog card
  entries (image, date, title, excerpt)

### Requirement: Footer

The system SHALL render a dark navy footer with 4 columns and Component
Dock attribution.

#### Scenario: Footer content

- **GIVEN** the Hymnal app is rendered
- **THEN** a dark navy (`#272e4f`) footer SHALL display with 4 columns:
  brand info, Quick Links (6 items), Contact Information (address,
  phone, email), social icons
- **AND** a copyright line SHALL link to
  https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Hymnal app is rendered
- **THEN** the page SHALL use semantic landmarks (`<nav>`, `<main>`,
  `<footer>`)
- **AND** all images SHALL have meaningful alt text
- **AND** interactive elements SHALL have visible focus rings
- **AND** the navbar toggle SHALL have `aria-label` and `aria-expanded`
- **AND** carousel controls SHALL be keyboard-accessible

### Requirement: Responsive design

The system SHALL be fully responsive across all breakpoints.

#### Scenario: Mobile layout

- **GIVEN** the viewport is at or below 768px
- **THEN** the navbar SHALL collapse to a hamburger menu
- **AND** multi-column layouts SHALL stack to single-column
- **AND** the Bible study bar SHALL stack vertically (negative margin
  removed)
- **AND** the hero text SHALL remain readable with reduced font sizes
- **AND** no horizontal overflow SHALL occur

## Verification checklist

- [ ] `npm run verify:app -- hymnal` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/wisdom/:
      dark navbar, full-height hero with teal overlay, dark navy Bible
      study bar, about/ministry cards, parallax newsletter, sermons,
      testimony carousel with coral accents, animated counters, events,
      blog, dark navy footer.
- [ ] Behavior check: hero CTA hover effect, Bible study bar overlaps
      hero, counter animation on scroll, testimonial carousel
      auto-advances, navbar collapses on mobile, smooth scroll to
      sections.
- [ ] Responsive check at 768px and 480px (all columns stack, no
      overflow, readable text).
