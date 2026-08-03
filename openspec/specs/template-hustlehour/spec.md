# Template: Hustlehour (Astro Template)

## Purpose

Hustlehour is a single-page podcast landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Hustle Hour" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "The Hustle Hour" — podcast / interview show
  landing template (source: https://colorlib.com/wp/template/the-hustle-hour/).
- **Demo DOM analyzed:** https://hustlehour-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (66KB) extracted; the pages.dev
  slug is `hustlehour` per `preview.colorlib.com/assets/js/products.js`;
  `https://preview.colorlib.com/theme/the-hustle-hour/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev`). The
  TEMPLATES.md screenshot is the visual reference; the design below is
  reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (dark `bg-gray-950/80` blur): logo + links Episodes,
     About, Sponsors, Newsletter, Sponsorships, Blog, Release Notes,
     Contact + "Listen Now" button; mobile nav.
  2. Hero (`bg-gray-950` dark): h1 "Stories That Inspire Action", blurb,
     "Listen Latest Episode" + "Subscribe" buttons; platform links
     (Spotify, Apple Podcasts, Google Podcasts, YouTube).
  3. Featured episode: "Building a $100M Company with No Funding" — with
     Sarah Chen, Founder of TechFlow.
  4. Recent Episodes: 6 episode cards (Building a $100M Company with No
     Funding, The Art of Product-Market Fit, From Side Project to IPO,
     Remote Teams That Actually Work, The Future of AI in Business,
     Scaling Culture at Hypergrowth) with guest + description.
  5. Host: "Meet Your Host" — Alex Morgan + quote.
  6. Sponsors: "Proudly Supported By" — 4 sponsor cards (LinearB, Notion,
     Vercel, Lemon.io) + "Want to sponsor the show? Get in touch".
  7. Testimonials: "What Listeners Say" — listener quotes.
  8. Newsletter: "Never Miss an Episode" — subscribe form ("Join 50,000+
     subscribers").
  9. FAQ: "Frequently Asked Questions" — 5 accordion items (guest booking,
     release frequency, where to listen, sponsorships, topic suggestions).
  10. Contact: "Let's Connect" — message form + "Send Message" + direct
      email hello@thehustlehour.com.
  11. Footer (`bg-gray-950`): brand blurb + Podcast / Follow / More
      columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **red scale** — #dc2626 (red-600 primary; darker
    #b91c1c, #991b1b; lighter #ef4444, #f87171, #fca5a5, #fecaca, #fee2e2,
    #fef2f2). Dark theme throughout: hero/episodes/footer `bg-gray-950`,
    host/testimonials `bg-gray-900`.
  - Neutrals: gray scale — #030712, #111827, #1f2937, #374151, #6b7280,
    #9ca3af, #d1d5db (dark theme on near-black).
  - Font: **"Outfit"** (Outfit, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; dark sections alternate
    gray-950/gray-900 with `py-20 lg:py-28`; light FAQ section on white.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/hustlehour-<n>/<w>/<h>`); icons → lucide-react
  (Mic, Play, Radio, Podcast, Users, Sparkles, Star, ChevronDown, Mail,
  Send, Headphones, Music2, Youtube, Rss); Outfit via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.

Hustlehour lives in `apps/hustlehour` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "The Hustle
Hour", anchor links to the page's sections, a "Listen Now" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hustlehour page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "The Hustle Hour" and links
  to Episodes and Sponsors
- **AND** the navbar SHALL show a "Listen Now" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, episode and
subscribe buttons, and platform links.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Stories That Inspire Action"
- **AND** it SHALL show "Listen Latest Episode" and "Subscribe" buttons
- **AND** it SHALL show platform links for Spotify and Apple Podcasts

### Requirement: Recent episodes

The system SHALL render a recent episodes section with episode cards.

#### Scenario: Episodes content

- **GIVEN** the page is rendered
- **WHEN** the episodes section is displayed
- **THEN** it SHALL contain a heading "Recent Episodes"
- **AND** it SHALL show at least four episode cards with a title and guest
  name

### Requirement: Host section

The system SHALL render a host section with a name and quote.

#### Scenario: Host content

- **GIVEN** the page is rendered
- **WHEN** the host section is displayed
- **THEN** it SHALL contain a heading "Meet Your Host"
- **AND** it SHALL show the host name "Alex Morgan"

### Requirement: Sponsors section

The system SHALL render a sponsors section with at least four sponsor cards.

#### Scenario: Sponsors content

- **GIVEN** the page is rendered
- **WHEN** the sponsors section is displayed
- **THEN** it SHALL contain a heading "Proudly Supported By"
- **AND** it SHALL show sponsor cards for LinearB, Notion, and Vercel

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Listeners Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Newsletter

The system SHALL render a newsletter section with a subscribe form.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a headline "Never Miss an Episode"
- **AND** it SHALL show a subscribe form with an email input and a
  "Subscribe" button

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Contact section

The system SHALL render a contact section with a message form.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Let's Connect"
- **AND** it SHALL show a form with a "Send Message" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Podcast, Follow, More) and a
  copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Hustlehour app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "The Hustle Hour — Podcast Template"
