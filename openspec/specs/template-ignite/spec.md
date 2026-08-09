# Template: Ignite (Youth Ministry Landing)

## Purpose

Ignite is a single-page youth ministry / church youth-group landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Youthconnect" website template design
(source: https://colorlib.com/wp/template/youthconnect/), built under a
DIFFERENT name per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-09): this is a fresh prep for the "Youthconnect"
> item in TEMPLATES.md (Astro category, unchecked). The name **Ignite** is
> new — single lowercase word, no collision with `apps/` or existing spec
> folders (verified 2026-08-09). A stale prep folder
> `openspec/specs/template-youthconnect/` (forbidden source-name folder) was
> deleted as part of this prep; this spec supersedes it. The demo's internal
> brand is "Elevate Youth"; the recreation brands itself **Ignite Youth** but
> keeps the same section structure, content kinds, and design tokens.

## Design reference (replication findings)

- **Original:** ColorLib "Youthconnect" — youth ministry / church youth group
  landing template (source: https://colorlib.com/wp/template/youthconnect/,
  "Astro" category, published April 2026, CC BY 3.0, author Aigars Silkalns).
- **Preview DOM analyzed (verified 2026-08-09):** the official
  `https://preview.colorlib.com/theme/youthconnect/` returns 404 (Astro
  category — the preview portal loads demos from `<slug>-colorlib.pages.dev`,
  confirmed via `preview.colorlib.com/assets/js/products.js`: slug
  `youthconnect` → `https://youthconnect-colorlib.pages.dev/`). Live demo
  fetched at `https://youthconnect-colorlib.pages.dev/` (HTTP 200, ~53 KB
  HTML) + `/_astro/Base.DGxUKMky.css` (~64 KB) parsed for tokens. The
  TEMPLATES.md screenshot (`youthconnect-template-1770211452999.jpg`,
  2400×1892, viewed in browser) matches the live render: dark-navy hero,
  cyan + orange accents, gradient display headline, hero stats band.
- **Visual design (screenshot + live render):** modern, high-contrast,
  community-focused youth ministry aesthetic. Full-viewport dark hero: moody
  photo of a group of people (arms around each other) under a deep navy/black
  gradient overlay; uppercase badge line "Wednesdays at 6:30 PM" with an
  orange dot; massive display H1 "RISE HIGHER" with a **cyan → orange
  gradient** text effect (`gradient-text`); white sans-serif blurb; two
  pill buttons — solid cyan "Join Us Wednesday" and transparent
  white-outline "Watch Latest Message". A **semi-transparent dark stats band**
  sits at the bottom of the hero: 300+ Students Weekly · 25 Small Groups ·
  12 Leaders. Below: alternating light (white / gray-50) and dark navy
  (`bg-navy-950`/`bg-navy-900`) sections with `py-20 lg:py-28` rhythm, rounded
  cards (`radius-2xl`), cyan primary buttons, orange accent buttons/badges,
  category badges in orange/green/purple, dark navy footer. Full dark mode
  via `.dark` variants (toggle in navbar).
- **Section order (1:1, verified from live DOM):**
  1. Navbar (sticky, dark over hero; white/80 backdrop-blur when scrolled):
     icon + "ELEVATE YOUTH" wordmark; links Events, Groups, Watch, About,
     Parents; phone icon (`tel:5557890123`); orange "I'm New" pill button;
     dark-mode toggle; mobile hamburger. (Links are anchors to
     `/events`, `/groups`, `/media`, `/about`, `/parents`, `/about#new` —
     single-page recreation renders same-kind anchor links.)
  2. Hero (dark navy, min-h-screen, community photo + gradient overlay):
     badge "Wednesdays at 6:30 PM" (+ orange dot), H1 "RISE HIGHER"
     (cyan→orange gradient), blurb "You weren't made to do life alone. Find
     your people, grow your faith, and make an impact.", buttons "Join Us
     Wednesday" (cyan pill) + "Watch Latest Message" (outline pill), and the
     **stats band** (translucent dark container): 300+ Students Weekly,
     25 Small Groups, 12 Leaders.
  3. Events (`id="events"`): heading "UPCOMING EVENTS" + "View All Events"
     link; event cards, two with a "Featured" badge:
     - ELEVATE NIGHT (Featured) — Every Wednesday · 6:30 PM - 8:30 PM,
       "Our weekly gathering! Expect high-energy worship, real talk, and
       your crew. Doors open at 6:00 PM." + "Learn More".
     - SUMMER CAMP 2025 (Featured) — July 14-19, 2025.
     - City Serve Day, Spring Retreat, Worship Night — smaller cards with
       dates + "Register Now".
       (Category badges: orange `category-special`, green `category-camp`,
       purple `category-service`.)
  4. Small groups (`id="groups"`): heading "SMALL GROUPS", blurb "Life
     change happens in circles, not rows. Our small groups meet weekly in
     homes and on campus for real conversations, prayer, and community.",
     filter chips (Guys Groups / Girls Groups / Co-ed Groups), 4 group cards
     (The Forge, Bloom, Foundation, Band of Brothers) + "Find Your Group"
     button.
  5. Content (`id="media"`): heading "LATEST CONTENT" + "View All" link;
     media cards with type + duration — Video 28:42 "Anxious for Nothing",
     Podcast 45:00 "Dating, Relationships & Red Flags", Devotional 5-Day
     "Morning Devotional", Video 35:20 "Made for More".
  6. Leaders (`id="leaders"`): heading "OUR LEADERS", blurb "We're not just
     staff—we're people who genuinely care about your student's faith
     journey.", 4 profile cards (avatar, name, role, blurb, Instagram
     handle): Tyler Reed (Youth Pastor, @pastortyler), Jessica Reed (Girls
     Ministry Director, @jessreed), Marcus Johnson (Guys Ministry Director,
     @marcusj), Sofia Martinez (Middle School Coordinator, @sofia.elevate).
     CTA card: "WANT TO MAKE A DIFFERENCE?" + "Become a Volunteer" button.
  7. Testimonials: heading "WHAT STUDENTS SAY" — quote cards with name +
     grade, e.g. "Elevate isn't just a youth group—it's family. I found real
     friends here who actually care about my faith journey." — Emma T.,
     11th Grade; "I was skeptical about church, but the leaders here are
     real. They don't pretend to have all the answers." — Jordan M.
  8. CTA (dark navy `bg-navy-950`): "DON'T MISS OUT" + "Whether you're new
     or have been coming for years, there's a place for you here. Come as
     you are." + "Plan Your Visit" (cyan) / "Contact Us" (outline) buttons.
  9. Footer (`bg-navy-950`): service times block — Elevate Night 6:30 PM
     Wednesdays, MS Hangout 9:00 AM Sundays, HS Connect 11:00 AM Sundays;
     "ELEVATE YOUTH" blurb "A Christ-centered youth ministry helping
     students rise higher together through authentic community and relevant
     faith."; columns Get Involved (Upcoming Events, Find a Group,
     Volunteer, Give), Resources (Watch Messages, Podcast, Devotionals,
     Parent Info), Connect (Contact Us, Instagram, YouTube, TikTok,
     youth@elevatechurch.com, (555) 789-0123), Location; copyright line.
- **Design tokens extracted from `/_astro/Base.DGxUKMky.css`:**
  - Brand colors: **cyan scale** — primary `#06b6d4` (500), `#0891b2`
    (600), `#0e7490` (700); light `#22d3ee` (400), `#67e8f9` (300),
    `#a5f3fc` (200), `#cffafe` (100), `#ecfeff` (50). **Navy** dark
    backgrounds — `#080716` (950), `#0f0d24` (900), `#1e1b4b` (800).
    **Orange accent** — `#f97316` (500), `#fb923c` (400). Category badge
    colors: orange `#f97316`, green `#00c758` (green-500), purple
    `#ac4bff` (purple-500).
  - Fonts: **"Bebas Neue"** (display, uppercase headings) + **"Plus Jakarta
    Sans"** (body) via Google Fonts (`font-display` / default body).
  - Shapes: pill buttons (`.btn-primary` solid cyan, `.btn-accent` solid
    orange, `.btn-secondary` outline/transparent), rounded cards
    `border-radius: var(--radius-2xl)` (1rem), `rounded-full` avatars.
  - Section backgrounds: dark navy (`bg-navy-950`, `bg-navy-900`) sections
    alternate with `bg-white` / `bg-gray-50` light sections, vertical rhythm
    `py-20 lg:py-28`; hero gradient overlay over photo.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ignite-<n>/<w>/<h>`); icons → lucide-react (Flame,
  CalendarDays, Clock, Users, Play, Mic, BookOpen, Star, ArrowRight,
  Phone, MapPin, Heart, Instagram, Youtube, Music2, Mail, ChevronDown);
  Bebas Neue + Plus Jakarta Sans via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

Ignite lives in `apps/ignite` (package `@free-react-templates/ignite`) and
uses shared components from `packages/ui` (Button, ButtonLink, Badge, Card,
cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Ignite Youth", anchor links to the page's sections, an "I'm New" button,
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Ignite page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ignite Youth" with an icon
- **AND** the navbar SHALL show links labeled Events, Groups, Watch, About,
  and Parents
- **AND** the navbar SHALL show an "I'm New" button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user presses the hamburger button
- **THEN** the navigation links SHALL become visible in a mobile menu

### Requirement: Hero section

The system SHALL render a full-screen hero with a badge line, a gradient
display headline, a blurb, two call-to-action buttons, and a stats band.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the badge "Wednesdays at 6:30 PM"
- **AND** it SHALL contain a level-1 heading "Rise Higher"
- **AND** it SHALL show the blurb about finding your people and growing
  your faith

#### Scenario: Hero call-to-action buttons

- **GIVEN** the hero is displayed
- **WHEN** the user views the hero actions
- **THEN** it SHALL show a "Join Us Wednesday" button
- **AND** it SHALL show a "Watch Latest Message" button

#### Scenario: Hero stats band

- **GIVEN** the hero is displayed
- **WHEN** the user views the bottom of the hero
- **THEN** it SHALL show the stats "300+ Students Weekly", "25 Small
  Groups", and "12 Leaders"

### Requirement: Events section

The system SHALL render an upcoming events section with event cards, some
marked as featured.

#### Scenario: Events content

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL contain a heading "Upcoming Events"
- **AND** it SHALL show a "View All Events" link
- **AND** it SHALL show at least three event cards with a name and a date
- **AND** the featured event cards SHALL display a "Featured" badge

#### Scenario: Event details

- **GIVEN** the events section is displayed
- **WHEN** the user views the featured event card
- **THEN** it SHALL show the event name "Elevate Night"
- **AND** it SHALL show its schedule "Every Wednesday · 6:30 PM - 8:30 PM"
- **AND** it SHALL show a "Learn More" link

### Requirement: Small groups section

The system SHALL render a small groups section with filter chips and four
group cards.

#### Scenario: Groups content

- **GIVEN** the page is rendered
- **WHEN** the groups section is displayed
- **THEN** it SHALL contain a heading "Small Groups"
- **AND** it SHALL show filter chips for Guys Groups, Girls Groups, and
  Co-ed Groups
- **AND** it SHALL show cards for The Forge, Bloom, Foundation, and Band of
  Brothers
- **AND** it SHALL show a "Find Your Group" button

### Requirement: Content section

The system SHALL render a latest content section with media cards showing a
media type and duration.

#### Scenario: Content display

- **GIVEN** the page is rendered
- **WHEN** the content section is displayed
- **THEN** it SHALL contain a heading "Latest Content"
- **AND** it SHALL show at least four media cards with titles
- **AND** each media card SHALL show its type (Video / Podcast /
  Devotional) and duration

### Requirement: Leaders section

The system SHALL render a leaders section with at least four profile cards
and a volunteer call-to-action.

#### Scenario: Leaders content

- **GIVEN** the page is rendered
- **WHEN** the leaders section is displayed
- **THEN** it SHALL contain a heading "Our Leaders"
- **AND** it SHALL show at least four leader cards with name and role
- **AND** each leader card SHALL show a photo, blurb, and Instagram handle

#### Scenario: Volunteer call-to-action

- **GIVEN** the leaders section is displayed
- **WHEN** the user views the end of the section
- **THEN** it SHALL show a "Want to Make a Difference?" call-to-action
- **AND** it SHALL show a "Become a Volunteer" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with student quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Students Say"
- **AND** it SHALL show at least two quote cards with a quote, name, and
  grade

### Requirement: Final call-to-action

The system SHALL render a closing call-to-action band with two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain the heading "Don't Miss Out"
- **AND** it SHALL show a "Plan Your Visit" button
- **AND** it SHALL show a "Contact Us" button

### Requirement: Footer

The system SHALL render a footer with service times, a ministry blurb, link
columns, and contact details.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show service times (Elevate Night 6:30 PM Wednesdays,
  MS Hangout 9:00 AM Sundays, HS Connect 11:00 AM Sundays)
- **AND** it SHALL show columns for Get Involved, Resources, and Connect
- **AND** it SHALL show the contact email and phone number

## Verification checklist

- [ ] `npm run verify:app ignite` passes: typecheck + lint + vitest with
      100% coverage (lines/functions/branches/statements) + build
- [ ] Section order matches the reference 1:1: navbar → hero (with stats
      band) → events → small groups → content → leaders → testimonials →
      CTA → footer
- [ ] Design tokens match: cyan `#06b6d4` primary, navy `#080716` dark
      sections, orange `#f97316` accent, Bebas Neue + Plus Jakarta Sans
      fonts, pill buttons, rounded cards (`rounded-2xl`)
- [ ] Dark mode toggle flips `.dark` on `document.documentElement` and all
      sections render a correct dark variant
- [ ] Placeholder images use `https://picsum.photos/seed/ignite-<n>/<w>/<h>`
- [ ] No ColorLib assets copied (no images/fonts/CSS from the source)
- [ ] New original name "ignite" used everywhere (folder `apps/ignite`,
      package `@free-react-templates/ignite`); source slug recorded in PR
      description
