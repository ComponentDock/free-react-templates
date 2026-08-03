# Template: Youthconnect (Astro Template)

## Purpose

Youthconnect is a single-page youth ministry landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Youthconnect" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Youthconnect" — youth ministry / church youth
  group landing template
  (source: https://colorlib.com/wp/template/youthconnect/).
- **Demo DOM analyzed:** https://youthconnect-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (64KB) extracted;
  `https://preview.colorlib.com/theme/youthconnect/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`youthconnect-template-1770211452999.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Fixed navbar (blur): "ELEVATE YOUTH" logo + links Events, Groups,
     Watch, About, Parents, "I'm New" button.
  2. Hero (`bg-navy-950` dark): h1 "RISE HIGHER", blurb "You weren't made
     to do life alone...", buttons "Join Us Wednesday" + "Watch Latest
     Message".
  3. Events: "UPCOMING EVENTS" — event cards (Elevate Night, Summer Camp
     2025, City Serve Day, Spring Retreat, Worship Night) + "View All
     Events".
  4. Small groups: "SMALL GROUPS" — 4 cards (The Forge, Bloom, Foundation,
     Band of Brothers) + "Find Your Group".
  5. Content: "LATEST CONTENT" — media cards (Who You Really Are video,
     Anxious for Nothing, Dating Relationships & Red Flags podcast,
     5-Day Morning Devotional, Made for More) with type/duration.
  6. Leaders: "OUR LEADERS" — 4 profile cards (Tyler Reed Youth Pastor,
     Jessica Reed Girls Ministry Director, Marcus Johnson Guys Ministry
     Director, Sofia Martinez Middle School Coordinator) + "WANT TO MAKE A
     DIFFERENCE?" volunteer CTA.
  7. Testimonials: "WHAT STUDENTS SAY" — student quotes.
  8. CTA (`bg-navy-950`): "DON'T MISS OUT" + "Plan Your Visit" / "Contact
     Us".
  9. Footer (`bg-navy-950`): service times (Elevate Night 6:30 PM, MS
     Hangout 9:00 AM, HS Connect 11:00 AM) + "ELEVATE YOUTH" blurb +
     Get Involved / Resources / Connect / Location columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **cyan scale** — #06b6d4 (cyan-500 primary; #0891b2,
    #0e7490 darker; #22d3ee, #67e8f9, #a5f3fc, #cffafe, #ecfeff lighter) +
    **navy** backgrounds #1e1b4b (navy-950 #080716, navy-900) + orange
    accent #f97316.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937.
  - Fonts: **"Bebas Neue"** (display, Impact sans-serif) + **"Plus Jakarta
    Sans"** (body) via Google Fonts.
  - Shapes: rounded cards, pill buttons; dark navy sections
    (bg-navy-950/bg-navy-900) alternate with gray-50/white with
    `py-20 lg:py-28`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/youthconnect-<n>/<w>/<h>`); icons → lucide-react
  (Flame, Sprout, Anchor, Users, Play, Mic, BookOpen, Star, ChevronDown,
  MapPin, Clock, CalendarDays, Heart, ArrowRight, Video); Bebas Neue + Plus
  Jakarta Sans via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.

Youthconnect lives in `apps/youthconnect` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Elevate
Youth", anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Youthconnect page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Elevate Youth" and links to
  Events and Groups
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-screen hero with a headline and two
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Rise Higher"
- **AND** it SHALL show "Join Us Wednesday" and "Watch Latest Message"
  buttons

### Requirement: Events section

The system SHALL render an upcoming events section with event cards.

#### Scenario: Events content

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL contain a heading "Upcoming Events"
- **AND** it SHALL show at least three event cards

### Requirement: Small groups section

The system SHALL render a small groups section with four group cards.

#### Scenario: Groups content

- **GIVEN** the page is rendered
- **WHEN** the groups section is displayed
- **THEN** it SHALL contain a heading "Small Groups"
- **AND** it SHALL show cards for The Forge, Bloom, and Foundation

### Requirement: Content section

The system SHALL render a latest content section with media cards.

#### Scenario: Content display

- **GIVEN** the page is rendered
- **WHEN** the content section is displayed
- **THEN** it SHALL contain a heading "Latest Content"
- **AND** it SHALL show at least four media cards with titles

### Requirement: Leaders section

The system SHALL render a leaders section with at least four profile cards.

#### Scenario: Leaders content

- **GIVEN** the page is rendered
- **WHEN** the leaders section is displayed
- **THEN** it SHALL contain a heading "Our Leaders"
- **AND** it SHALL show at least four leader cards with names and roles

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Students Say"
- **AND** it SHALL show at least three student quotes

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and visit buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Don't Miss Out"
- **AND** it SHALL show "Plan Your Visit" and "Contact Us" buttons

### Requirement: Footer

The system SHALL render a footer with service times, link columns, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Get Involved, Resources, Connect,
  Location) and a copyright line
- **AND** it SHALL show service times

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Youthconnect app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Elevate Youth — Ministry Template"
