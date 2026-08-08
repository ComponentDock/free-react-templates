# Template: Coursely (E-Learning Platform Template)

## Purpose

Coursely is a single-page online-learning platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Learnhub" website template design
(source: https://colorlib.com/wp/template/learnhub/), built under a
DIFFERENT name (Coursely — courses + learning) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-learnhub/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Coursely),
> matching the Cloudnest→Stratos, Ironforge→Forgefit and Launchpad→Blastoff
> precedents.

## Design reference (replication findings)

- **Original:** ColorLib "Learnhub" — e-learning / online courses platform
  template (category per the ColorLib preview portal: Learning). The
  ColorLib page describes it as an Astro + Tailwind 4.x design ("Learnify —
  Learn Without Limits") with top categories, popular courses, instructor
  cards, testimonials, and 3-tier pricing with a billing toggle.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/learnhub/`) returns HTTP 404
  (confirmed 2026-08-08, 9 bytes "Not Found"); the ColorLib preview portal
  hosts demos on Cloudflare Pages at
  `https://learnhub-colorlib.pages.dev/` (HTTP 200, ~88 KB HTML +
  `/_astro/Base.DLlC-awY.css` ~57 KB parsed for tokens). The TEMPLATES.md
  screenshot (`learnhub-template-1770211181840.jpg`, 2400×1892) shows the
  ORIGINAL visual design (see "Visual design" below) and differs from the
  live Astro demo (dark navy hero with teal accents → light indigo demo,
  headline "Learn Without Limits" kept, nav CTA "Sign In"/"Get Started" →
  "Get Started" only, light background) — the live demo DOM is the
  authoritative structure reference; the screenshot records the original
  aesthetic intent.
- **Section order (1:1, from live demo DOM):**
  1. Navbar: Coursely logo (graduation-cap icon), links Courses,
     Categories, Instructors, Pricing, About, dark-mode toggle, "Get
     Started" CTA button; mobile hamburger ("Open menu") with slide-down
     panel.
  2. Hero (light, gradient from-primary-50 → white): pill badge "Trusted
     by 50,000+ learners worldwide", H1 "Learn Without Limits", subcopy
     ("Master new skills with world-class instructors. Access thousands of
     courses in technology, business, design, and more."), buttons
     "Explore Courses" (primary) + "View Pricing" (outline), trust badges
     (4.8 average rating / 30-day money-back guarantee / Lifetime access),
     stats row (50K+ Active Students, 500+ Expert Instructors, 2,500+
     Quality Courses, 95% Success Rate), then "Browse Categories" pill
     link into the categories section.
  3. Top Categories (bg-white): eyebrow pill "Explore Our Top Categories",
     H2 "Browse by category", subcopy, 8 cards (icon tile + title + course
     count + arrow): Web Development (156 courses), Data Science, UI/UX
     Design (124 courses), Business, Digital Marketing, Mobile Development,
     Cloud & DevOps, Photography.
  4. Most Popular Courses (bg-gray-50): eyebrow "Most Popular Courses", H2
     "Courses for every skill level", 4 course cards (thumbnail +
     BESTSELLER/55% OFF badges, category pill, title, rating stars +
     reviews, hours + lessons meta, instructor avatar + name, price /
     strikethrough old price): The Complete Web Development Bootcamp 2032,
     Machine Learning A-Z: AI, Python & R, UI/UX Design: The Complete
     Guide, AWS Certified Solutions Architect 2032.
  5. Why Learnify ("The Best Platform to Learn New Skills", bg-white): 4
     cards (icon tile + title + blurb): Learn at Your Pace, Expert
     Instructors, Hands-on Projects, Certificates.
  6. Instructors ("Learn From the Best", bg-gray-50): 4 avatar cards
     (photo, name, role, company): Sarah Johnson — Senior Engineer at
     Google, Michael Chen — ML Engineer at Netflix, Emily Rodriguez —
     Product Designer at Airbnb, David Kim — Cloud Architect at AWS.
  7. Testimonials ("What Our Students Say", bg-white): 3 quote cards with
     avatar, quote, name + role: Alex Thompson — Software Engineer at
     Stripe, Data Scientist at Meta, Product Designer at Figma.
  8. Pricing ("Choose Your Learning Path", bg-gray-50): billing toggle
     (monthly/yearly, "Save 20%"), 3 tiers: Free ($0 — Get started with
     free courses: 50+ free courses, basic certificates, community forum,
     mobile app), Pro ($29/mo or $232/yr — "Perfect for serious learners",
     "Save $58/year"; Unlimited access, Verified certificates, Offline
     downloads, Priority support, Advanced progress tracking), Team
     ($49/mo or $392/yr — "For teams and organizations", "Save
     $118/year"; Everything in Pro, Team management dashboard, Custom
     learning paths, Analytics & reporting, Dedicated support). Each card
     has a CTA button; Pro highlighted (primary border/badge "Most
     Popular").
  9. CTA band (gradient from-primary-600 to-primary-800): H2 "Ready to
     Start Learning?", subcopy, "Browse Courses" button, note "No credit
     card required. 7-day free Pro trial. Cancel anytime."
  10. Footer (bg-gray-900, text-gray-300): brand blurb, 3 link columns
      Categories / Company / Support, copyright line, cookie notice.
- **Visual design (screenshot `learnhub-template-1770211181840.jpg`):**
  the ORIGINAL design — dark navy/indigo gradient hero with a subtle tech
  grid overlay, white "Learn Without Limits" headline with "Learnify" in a
  bright teal accent, white pill "Explore Courses" CTA + outlined pill
  "View Pricing", trust badges row, stats row, white navbar with logo
  (blue square icon) + centered links + "Get Started" indigo pill button.
  The live Astro demo re-skins this (light indigo-on-white, dark-mode
  toggle) — use the live demo DOM as the authoritative structure/token
  reference; keep the pill-button + indigo-brand spirit from the
  screenshot.
- **Design tokens (extracted from `Base.DLlC-awY.css` + demo DOM):**
  - Brand: `#6366f1` (indigo-500; Tailwind indigo aliased as `primary`,
    scale `#eef2ff` `#e0e7ff` `#c7d2fe` `#a5b4fc` `#818cf8` `#6366f1`
    `#4f46e5` `#4338ca` `#312e81` `#1e1b4b`) — primary buttons, accents,
    gradient hero, icon tiles (`bg-primary-100`, `dark:bg-primary-900/30`).
  - Accents: emerald `#10b981` (success/ratings, `#064e3b` dark),
    amber `#fbbf24` (stars/badges), red `#82181a` (BESTSELLER badge),
    `#8b0836` (55% OFF badge).
  - Neutrals: white / gray scale / `#101828`; light surfaces (`#f3f4f6`
    gray-50 section bands) with class-based dark mode (`gray-800/900`
    cards).
  - Fonts: **"Plus Jakarta Sans"** (display, 500–800) + **"Inter"**
    (body, 400–700) via Google Fonts.
  - Shapes: `rounded-full` pill buttons and badges, `rounded-2xl` cards,
    `rounded-xl` icon tiles, `rounded-lg` mobile menu links.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/coursely-<n>/<w>/<h>`); icons → lucide-react
  (GraduationCap logo, Star, Clock, PlayCircle, Users, etc.); Plus Jakarta
  Sans + Inter via Google Fonts `<link>` in index.html; repo-standard
  Navbar (dark-mode toggle, `window.localStorage` + Storage polyfill in
  test setup — Keyhaven pattern) + Footer chrome.

Coursely lives in `apps/coursely` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn). Course/instructor
names are fictional renames of the demo's (Sarah Johnson → keep or
substitute similar fictional names; keep the same card structure).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name, anchor
links to the page's sections, a "Get Started" CTA button, and a dark-mode
toggle.

#### Scenario: Navbar content

- **GIVEN** the Coursely page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Coursely" and links to
  Courses and Pricing
- **AND** the navbar SHALL show a "Get Started" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, subcopy, two
call-to-action buttons, trust badges, and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Learn Without Limits"
- **AND** it SHALL show "Explore Courses" and "View Pricing" buttons and
  the trust badge "Trusted by 50,000+ learners worldwide"

#### Scenario: Hero stats

- **GIVEN** the hero is displayed
- **WHEN** the stats row is visible
- **THEN** it SHALL show stats for Active Students, Expert Instructors,
  Quality Courses, and Success Rate

### Requirement: Categories section

The system SHALL render a categories section with at least six category
cards, each with an icon, title, and course count.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL contain the heading "Explore Our Top Categories"
- **AND** it SHALL show cards for Web Development, Data Science, and UI/UX
  Design with their course counts

### Requirement: Courses section

The system SHALL render a popular courses section with at least four
course cards.

#### Scenario: Courses content

- **GIVEN** the page is rendered
- **WHEN** the courses section is displayed
- **THEN** it SHALL contain the heading "Most Popular Courses"
- **AND** it SHALL show course cards including "The Complete Web
  Development Bootcamp 2032" with a BESTSELLER badge

### Requirement: Why-us section

The system SHALL render a value-proposition section with at least four
cards.

#### Scenario: Why-us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain the heading "The Best Platform to Learn New
  Skills"
- **AND** it SHALL show cards for Learn at Your Pace and Expert
  Instructors

### Requirement: Instructors section

The system SHALL render an instructors section with at least four
instructor cards.

#### Scenario: Instructors content

- **GIVEN** the page is rendered
- **WHEN** the instructors section is displayed
- **THEN** it SHALL contain the heading "Learn From the Best"
- **AND** it SHALL show cards for Sarah Johnson and Michael Chen with
  their companies

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain the heading "What Our Students Say"
- **AND** it SHALL show at least three testimonial quotes with author
  names

### Requirement: Pricing section

The system SHALL render a pricing section with three tiers and a billing
toggle.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain the heading "Choose Your Learning Path"
- **AND** it SHALL show Free, Pro, and Team tiers

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches the billing toggle to yearly
- **THEN** the Pro and Team prices SHALL update to their annual amounts

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a browse button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain the heading "Ready to Start Learning?"
- **AND** it SHALL show a "Browse Courses" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Categories, Company, and Support link columns and
  a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Coursely app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Coursely — Learning Template"

## Verification checklist (implementer)

- [ ] `scripts/verify-app.sh coursely` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] `npm run spec:validate` passes for `openspec/specs/template-coursely`
- [ ] Section order matches the reference 1:1 (Navbar → Hero → Categories →
      Courses → Why-us → Instructors → Testimonials → Pricing → CTA →
      Footer)
- [ ] Design tokens applied via `@theme` (indigo primary `#6366f1`,
      Plus Jakarta Sans + Inter, pill buttons, rounded-2xl cards)
- [ ] Dark mode toggles `.dark` on root; localStorage persistence with
      Storage polyfill in test setup
- [ ] No ColorLib assets copied; seeded picsum placeholders + lucide icons
- [ ] PR description includes: source (ColorLib Learnhub), preview URL,
      tokens used, differences (new name, placeholders)
