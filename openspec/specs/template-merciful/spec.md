# Template: Merciful (Church / Nonprofit)

## Purpose

Merciful is a full-page CHURCH / NONPROFIT WEBSITE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Salvation" free template (source:
https://colorlib.com/wp/template/salvation/), built under a
DIFFERENT name (**Merciful**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 5 multi-page church template with a full-width
hero slider (Swiper), services grid, about section with image, animated
counter bar, sermon listings, testimony carousel, blog cards, event
listings, photo gallery, and a dark footer — all themed with a bold
red accent (`#ce0f3d`) on Poppins font. The recreation renders the
single-page index view with all major sections.

## Naming

The ColorLib source name "Salvation" is FORBIDDEN as the app name.
**Merciful** is the new, original name — single lowercase word,
kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified: zero hits for
`merciful` in TEMPLATES.md, `ls apps/`, `openspec/specs/`,
`docs/templates/`). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Salvation" (page title: "Salvation - Church
  Website Template"). Listed in TEMPLATES.md under **Nonprofit / Church
  (8)** section (line 1305 — `- [ ] **Salvation**`).
- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/salvation/` returns HTTP 200.
  HTML is a Bootstrap 5 multi-page template. Stylesheets:
  `css/style.css` (combined Bootstrap 4.5 + custom Salvation styles),
  `css/swiper-bundle.min.css`, `css/glightbox.min.css`, `css/aos.css`,
  `css/flaticon.css`. External: Font Awesome 7.1.0 CDN, Google Fonts
  Poppins 300–800. Scripts: Bootstrap 5, Swiper, GLightbox, AOS
  (animate-on-scroll), custom `js/main.js`.
- **Live DOM structure (from the fetched HTML + CSS; section order):**
  - **Top bar** (`.wrap`): location text + social media icons (Facebook,
    Twitter, Instagram, Dribbble), full-width, white bg.
  - **Navbar** (`nav.navbar`): dark bg (`bg-dark`), brand "Salvation"
    left, nav links right (Home, About, Ministries, Sermons, Events,
    Blog, Contact, Donate). The "Donate" link triggers a Bootstrap modal
    (`#donateModal`).
  - **Hero section** (`.hero-wrap`): Swiper slider with 2 slides, each
    full-width background image with dark navy overlay (`#00043c`),
    centered text (h2 subtitle + h1 headline + paragraph + CTA button
    "Become A Volunteer"), navigation arrows + pagination dots.
  - **Services grid** (`.ftco-section`): 3-column row with service cards
    (Worship / Connect / God's Love — icon + title + subheading +
    paragraph) + 1 full-height red services block (`.services-block`,
    bg `#ce0f3d`) with a quote.
  - **About section** (`.ftco-section.bg-light`): split layout — image
    left (6 cols), text right (6 cols) with subheading, heading
    "Connect, Grow and Serve with Us", paragraphs, "Learn More" button.
  - **Counter bar** (`.ftco-counter.bg-primary`): red `#ce0f3d`
    full-width bar with a heading left + 4 animated counters right
    (Members: 1,005,000 / Pastors: 65,000 / Donations: 500,000 /
    Churches: 50).
  - **Sermons section** (`.ftco-section`): heading "Watch and Listen to
    our Sermons", 3 sermon entries in alternating layout (image left +
    text right, then reversed). Each has title, speaker, categories,
    date, description, and two buttons ("Watch Sermons" + "Download
    Sermons").
  - **Testimony section** (`.testimony-section`): dark red background
    (`#9e0c2f`) with overlay, heading "Transform Lives", Swiper
    carousel of testimonial cards (avatar image + quote icon + quote
    text + name).
  - **Blog section** (`.ftco-section`): heading "Latest news from our
    blog", 3-column grid of blog cards (image + meta date/author/
    comments + heading + excerpt + "Read more" button).
  - **Events section** (`.ftco-section.ftco-no-pt`): heading "Latest
    Events", 2 event entries with image left + text right (title,
    schedule, location, venue, "More Details" button).
  - **Gallery section** (`.ftco-section.ftco-no-pb.ftco-no-pt`):
    heading "Galleries", 4-column + 2-column grid of clickable gallery
    images with GLightbox overlay.
  - **Footer** (`footer.footer`): dark bg (`#1a1a1a`), 4-column layout:
    brand info + social icons, Latest News (2 thumbnail articles),
    Quick Links (6 nav links), Contact info (address, phone, email).
    Copyright line with "Made with ♥ by Colorlib.com" (replace with
    Component Dock).
  - **Donation modal** (`#donateModal`): Bootstrap modal triggered by
    the navbar "Donate" link. Contains a donation form with amount
    options and payment fields. (Simplify: static form or omit
    functionality; document choice.)

- **Screenshot (from TEMPLATES.md embedding):** Church template with a
  full-width hero slider showing a dark overlay on a church/worship
  background image, white text headlines ("Transform Live" / "Total
  Surrender to God"), bold red "Become A Volunteer" CTA button. Below:
  service cards on white, a red services block, an about section with
  an interior church photo, a red counter bar, sermon entries with
  photos, a dark-red testimony carousel, blog cards, events with photos,
  a photo gallery grid, and a dark footer. Aesthetic: bold, warm, church-
  themed, red accent throughout, Poppins typography, clean Bootstrap
  grid. **No imagery matches — use picsum placeholders.**

## Design tokens

| Token               | Value                          | Notes                                                                       |
| ------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| `--color-brand`     | `#ce0f3d`                      | Bold red — buttons, links, subheading, services-block bg, counter bg        |
| `--color-brand-dark`| `#9e0c2f`                      | Darker red — testimony section background                                   |
| `--color-hero-overlay` | `#00043c`                   | Dark navy overlay on hero slides                                            |
| `--color-bg-light`  | `#f4f4f4`                      | Light gray — about section, sermon entries bg                               |
| `--color-footer`    | `#1a1a1a`                      | Very dark gray — footer background                                          |
| `--color-ink`       | `#40415e`                      | Body text color                                                             |
| `--color-white`     | `#fff`                         | Hero text, button text, counter text                                        |
| `--font-body`       | 'Poppins', Arial, sans-serif   | Google Fonts weights 300–800; body base 16px/1.6                            |
| `--btn-radius`      | `40px`                         | Pill-shaped buttons (border-radius 40px)                                    |
| `--btn-bg`          | `#ce0f3d`                      | Primary button background                                                   |
| `--btn-hover`       | transparent / `#ce0f3d` outline| Outline variant for secondary buttons                                       |
| `--navbar-bg`       | `#343a40` (Bootstrap dark)     | Dark navbar background                                                      |
| `--topbar-bg`       | `#fff`                         | White top bar                                                               |

## Requirements

### Requirement: Top bar

The system SHALL render a full-width top bar with location text and
social media icon links.

#### Scenario: Top bar content

- **GIVEN** the Merciful app is rendered on a desktop viewport
- **THEN** a full-width white bar SHALL display at the very top with
  location text ("203 Fake St. Mountain View, San Francisco, California,
  USA") on the left
- **AND** social media icon links (Facebook, Twitter, Instagram) SHALL
  render on the right as small circular icon buttons
- **AND** the location icon SHALL be a map marker (lucide `MapPin`)

### Requirement: Navbar

The system SHALL render a dark navbar with brand text, navigation links,
and a Donate CTA button.

#### Scenario: Navbar content

- **GIVEN** the Merciful app is rendered
- **THEN** a dark-background navbar SHALL render with the brand name
  "Merciful" on the left
- **AND** navigation links SHALL appear right-aligned: Home, About,
  Ministries, Sermons, Events, Blog, Contact
- **AND** a "Donate" link SHALL be styled as a CTA button in the brand
  red (`#ce0f3d`) or a highlighted accent style
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

### Requirement: Hero section (slider)

The system SHALL render a full-width hero section with a background
image, dark overlay, centered text, and a CTA button.

#### Scenario: Hero slider rendering

- **GIVEN** the Merciful app is rendered on a desktop viewport
- **THEN** a full-width hero section SHALL display with a background
  image covering the viewport height
- **AND** a dark navy overlay (`#00043c`) SHALL sit over the image
- **AND** centered white text SHALL show an h2 subtitle ("Transforming
  Lives") and an h1 headline ("Total Surrender to God")
- **AND** a paragraph of descriptive text SHALL render below the headline
- **AND** a "Become A Volunteer" button SHALL render in the brand red
  (`#ce0f3d`) with pill shape (40px radius)

#### Scenario: Hero slider navigation

- **GIVEN** the hero section is rendered
- **THEN** left/right navigation arrows SHALL be present (lucide
  `ChevronLeft` / `ChevronRight`)
- **AND** pagination dots SHALL indicate the current slide
- **WHEN** the user clicks an arrow or dot
- **THEN** the slide SHALL transition with a crossfade

### Requirement: Services grid

The system SHALL render a 4-column services section with 3 service
cards and 1 red accent block.

#### Scenario: Services layout

- **GIVEN** the Merciful app is rendered
- **THEN** a services section SHALL display with a 3-column row of
  service cards (Worship, Connect, God's Love) each with an icon,
  title, subheading, and description paragraph
- **AND** a fourth column SHALL display a full-height red block
  (`#ce0f3d`) with a quote text in white
- **AND** the red block SHALL have the text: "A Christian should live
  for the glory of God and the well-being of others."

#### Scenario: Service card styling

- **GIVEN** a service card is rendered
- **THEN** the card icon SHALL render in black above the title
- **AND** the title SHALL be an h3
- **AND** the subheading SHALL be in the brand red (`#ce0f3d`) with a
  red underline decoration

### Requirement: About section

The system SHALL render a split about section with image on the left
and text on the right.

#### Scenario: About layout

- **GIVEN** the Merciful app is rendered
- **THEN** a light gray (`#f4f4f4`) section SHALL display with a
  6-column image on the left and 6-column text content on the right
- **AND** the text SHALL include a subheading ("Welcome to Merciful
  Church"), heading ("Connect, Grow and Serve with Us"), two paragraphs,
  and a "Learn More" button in brand red

### Requirement: Counter bar

The system SHALL render a red full-width counter bar with animated
statistics.

#### Scenario: Counter display

- **GIVEN** the Merciful app is rendered
- **THEN** a full-width red (`#ce0f3d`) bar SHALL display with a
  heading on the left ("We're on a mission to help all your problems")
- **AND** 4 animated counters on the right: Members (1,005,000),
  Pastors (65,000), Donations (500,000), Churches (50)
- **AND** each counter SHALL animate from 0 to its target number on
  scroll into view (using AOS or intersection observer)
- **AND** counter numbers and labels SHALL be white text

### Requirement: Sermons section

The system SHALL render sermon entries in an alternating image/text
layout.

#### Scenario: Sermon entries

- **GIVEN** the Merciful app is rendered
- **THEN** a section titled "Watch and Listen to our Sermons" SHALL
  display with subheading "Our Sermons"
- **AND** 3 sermon entries SHALL render in alternating layout: sermon 1
  (image left, text right), sermon 2 (text left, image right), sermon 3
  (image left, text right)
- **AND** each sermon SHALL have: title, speaker name, categories,
  date, description, and two buttons ("Watch Sermons" + "Download
  Sermons")

#### Scenario: Sermon entry styling

- **GIVEN** a sermon entry is rendered
- **THEN** the image SHALL fill the left/right column
- **AND** the text area SHALL have a light gray (`#f4f4f4`) background
- **AND** buttons SHALL be pill-shaped in brand red

### Requirement: Testimony section

The system SHALL render a dark-red testimony section with a carousel
of testimonials.

#### Scenario: Testimony layout

- **GIVEN** the Merciful app is rendered
- **THEN** a dark red (`#9e0c2f`) section SHALL display with heading
  "Transform Lives" and subheading "Testimony"
- **AND** a carousel of 4–5 testimonials SHALL render, each with:
  circular avatar image, quote icon, quote text, and person's name
- **AND** the carousel SHALL auto-advance with pagination dots

### Requirement: Blog section

The system SHALL render a 3-column blog card grid.

#### Scenario: Blog cards

- **GIVEN** the Merciful app is rendered
- **THEN** a section titled "Latest news from our blog" SHALL display
  with subheading "Our Blog"
- **AND** 3 blog cards SHALL render in a 3-column grid, each with:
  image thumbnail, meta info (date, author, comment count), heading,
  excerpt, and "Read more" button in brand red

### Requirement: Events section

The system SHALL render event entries with images and details.

#### Scenario: Event entries

- **GIVEN** the Merciful app is rendered
- **THEN** a section titled "Latest Events" SHALL display with
  subheading "Events"
- **AND** 2 event entries SHALL render, each with: image on the left,
  text on the right (title, schedule time, location, venue address,
  "More Details" button in brand red)

### Requirement: Gallery section

The system SHALL render a photo gallery grid with lightbox.

#### Scenario: Gallery layout

- **GIVEN** the Merciful app is rendered
- **THEN** a section titled "Galleries" SHALL display with subheading
  "Gallery"
- **AND** a 4-column grid of 6+ images SHALL render, each clickable
  to open in a lightbox overlay (GLightbox or equivalent)

### Requirement: Footer

The system SHALL render a dark footer with 4 columns of content and
a Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the Merciful app is rendered
- **THEN** a dark (`#1a1a1a`) footer SHALL display with 4 columns:
  1. Brand name "Merciful" + description + social icons (Twitter,
     Facebook, Instagram)
  2. "Latest News" with 2 thumbnail article entries
  3. "Quick Links" with 6 nav links (Home, About, Sermons, Events,
     Blog, Contact)
  4. "Have a Questions?" with address, phone, and email contact info
- **AND** a copyright line SHALL link to
  https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Donation modal

The system SHALL provide a donation interaction triggered from the
navbar.

#### Scenario: Donate trigger

- **GIVEN** the Merciful app is rendered
- **WHEN** the user clicks the "Donate" link in the navbar
- **THEN** a modal dialog SHALL open with donation form fields
  (amount selection, optional contact info)
- **AND** the modal SHALL have a close button and close on backdrop
  click or Escape key

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Merciful app is rendered
- **THEN** the page SHALL use semantic landmarks (`<nav>`, `<main>`,
  `<footer>`)
- **AND** all images SHALL have meaningful alt text
- **AND** interactive elements SHALL have visible focus rings
- **AND** the navbar toggle SHALL have `aria-label` and
  `aria-expanded`
- **AND** all carousel controls SHALL be keyboard-accessible

### Requirement: Responsive design

The system SHALL be fully responsive across all breakpoints.

#### Scenario: Mobile layout

- **GIVEN** the viewport is at or below 768px
- **THEN** the navbar SHALL collapse to a hamburger menu
- **AND** multi-column layouts (services, about, sermons, blog, events,
  gallery, footer) SHALL stack to single-column
- **AND** the hero text SHALL remain readable with reduced font sizes
- **AND** no horizontal overflow SHALL occur

## Verification checklist

- [ ] `npm run verify:app -- merciful` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/salvation/:
      dark navbar, full-width hero slider with navy overlay, 3+1
      services grid, split about section, red counter bar, alternating
      sermon entries, dark-red testimony carousel, 3-column blog cards,
      event entries, photo gallery, dark 4-column footer.
- [ ] Behavior check: hero slider auto-advances + manual arrows/dots,
      counter animation on scroll, testimonial carousel auto-advances,
      donation modal opens/closes, navbar collapses on mobile, smooth
      scroll to sections.
- [ ] Responsive check at 768px and 480px (all columns stack, no
      overflow, readable text).
