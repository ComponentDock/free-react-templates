# Template: Forgefit (Fitness Template)

## Purpose

Forgefit is a single-page fitness/gym landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ironforge" website template design
(source: https://colorlib.com/wp/template/ironforge/), built under a
DIFFERENT name (Forgefit — forge/iron + fitness) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-ironforge/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Forgefit),
> matching the Cloudnest→Stratos precedent.

## Design reference (replication findings)

- **Original:** ColorLib "Ironforge" — fitness center / gym website
  template (source: https://colorlib.com/wp/template/ironforge/).
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/ironforge/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://ironforge-colorlib.pages.dev/` (HTTP 200, ~110 KB HTML +
  `/_astro/Base.DjIvZVUl.css` ~64.6 KB parsed for tokens). The TEMPLATES.md
  screenshot (`ironforge-template-1771943626586.jpg`) is the visual
  reference: dark gym-interior photo hero with burnt-orange accents.
- **Section order (1:1, from live demo DOM):**
  1. Navbar: IronForge logo, links About, Programs, Schedule, Trainers,
     Pricing, Blog, Contact, dark-mode toggle, "Join Now" pill button.
  2. Hero (dark gym photo, heavy gradient overlay): badge "Now Open 24/7",
     H1 "Push Beyond Your Expectations" (two-tone: white + orange), blurb,
     buttons "Start Free Trial" + "View Programs" + "Watch Demo", stats row
     (5,000+ Members / 50+ Classes/Week / 15+ Expert Trainers / 24/7
     Access).
  3. Counters band: animated count-up 0→N — Active Members, Weekly Classes,
     Expert Trainers, Years Open.
  4. Training Programs: "Training Programs for Every Goal" — 6 cards:
     Strength Training, HIIT, Yoga & Flexibility, Boxing & MMA, CrossFit,
     Personal Training (image + title + blurb).
  5. This Week's Classes: Monday–Friday class timetable, 5 classes/day —
     time, class name, coach, level (e.g. Monday: 6:00 AM Morning HIIT /
     Coach Marcus / Intermediate).
  6. Expert Trainers: "Expert Trainers" — 4 cards: Marcus Johnson (Strength
     & Conditioning, 12 yrs), Sarah Chen (Yoga & Flexibility, 8 yrs), Diego
     Reyes (Boxing & MMA, 10 yrs), Emily Park (CrossFit & HIIT, 7 yrs),
     each with photo + Instagram/Twitter icon links + bio.
  7. Choose Your Plan: monthly/yearly billing toggle ("Save 20%"), 3 tiers
     — Basic, Pro, Elite, each with "Start Free Trial" link.
  8. Real Results, Real People: testimonial carousel (4 slides, prev/next
     arrows + slide dots).
  9. Frequently Asked Questions: 5 accordion items — freeze membership,
     personal training, group classes, locker room with showers, bringing a
     guest.
  10. CTA: "Your Transformation Starts Today" + "Claim Free Week" + "Talk to
      a Trainer".
  11. Footer: brand + blurb + social icons (Twitter, Instagram, YouTube),
      link columns PROGRAMS (Programs, Schedule, Personal Training, Group
      Classes), COMPANY (About, Trainers, Blog, Careers), SUPPORT (FAQ,
      Contact, Membership, Terms), STAY UPDATED newsletter (email input +
      Subscribe button), legal links (Privacy Policy, Terms of Service,
      Style Guide).
  12. Extras: cookie-consent dialog (Decline / Accept All), back-to-top
      button.

- **Design tokens extracted from `Base.DjIvZVUl.css` + DOM:**
  - Brand color: **#ea580c** (orange-600; scale #f97316, #fb923c, #fdba74,
    #ffedd5, #c2410c) — primary CTAs, accents, headline second half.
  - Neutrals: #030712, #111827, #1f2937, #374151, #4b5563, #6b7280, #9ca3af,
    #d1d5db, #e5e7eb, #f3f4f6, #f9fafb, #fff; dark hero/footer
    (near-black), light gray sections.
  - Fonts: **"Space Grotesk"** (display, 300–700) + **"DM Sans"** (body,
    400–700) via Google Fonts.
  - Shapes: fully rounded **pill buttons** (orange primary, white on dark),
    rounded-xl/2xl cards, dark-mode toggle.
  - Section backgrounds: dark photo hero with gradient overlay; white /
    gray-50 light sections; dark footer.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/forgefit-<n>/<w>/<h>`); icons → lucide-react; Space
  Grotesk + DM Sans via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; testimonial carousel + count-up animation with
  no extra dependencies.

Forgefit lives in `apps/forgefit` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Forgefit",
anchor links to the page's sections, a "Join Now" CTA, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Forgefit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Forgefit" and links to
  Programs, Schedule, Trainers, and Pricing
- **AND** the navbar SHALL show a "Join Now" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width dark hero with a badge, a headline,
a blurb, three CTAs, and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a badge "Now Open 24/7" and a level-1 heading
  "Push Beyond Your Expectations"
- **AND** it SHALL show "Start Free Trial", "View Programs", and
  "Watch Demo" buttons
- **AND** it SHALL show gym stats including 5,000+ Members and 24/7 Access

### Requirement: Counters band

The system SHALL render an animated stats band with four counters.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the counters band is displayed
- **THEN** it SHALL show counters for Active Members, Weekly Classes,
  Expert Trainers, and Years Open
- **AND** the counters SHALL animate from zero to their target values

### Requirement: Programs section

The system SHALL render a programs section with at least six program cards.

#### Scenario: Programs content

- **GIVEN** the page is rendered
- **WHEN** the programs section is displayed
- **THEN** it SHALL contain a heading "Training Programs for Every Goal"
- **AND** it SHALL show cards for Strength Training, HIIT, Yoga &
  Flexibility, Boxing & MMA, CrossFit, and Personal Training

### Requirement: Schedule section

The system SHALL render a weekly class schedule section.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL contain a heading "This Week's Classes"
- **AND** it SHALL show class days including Monday and Friday
- **AND** each day SHALL list classes with time, class name, coach, and
  level

### Requirement: Trainers section

The system SHALL render a trainers section with at least four trainer cards.

#### Scenario: Trainers content

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL contain a heading "Expert Trainers"
- **AND** it SHALL show cards for Marcus Johnson, Sarah Chen, Diego Reyes,
  and Emily Park
- **AND** each card SHALL show the trainer's specialty and years of
  experience

### Requirement: Pricing section

The system SHALL render a pricing section with a billing toggle and at
least three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Plan"
- **AND** it SHALL show Basic, Pro, and Elite tiers
- **AND** it SHALL show a monthly/yearly billing toggle with a "Save 20%"
  hint

### Requirement: Testimonials section

The system SHALL render a testimonial carousel with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Real Results, Real People"
- **AND** it SHALL show at least one testimonial quote
- **AND** the user SHALL be able to move between slides with previous/next
  controls or slide dots

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three accordion
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Your Transformation Starts Today"
- **AND** it SHALL show "Claim Free Week" and "Talk to a Trainer" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup,
and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns PROGRAMS, COMPANY, and SUPPORT
- **AND** it SHALL show a newsletter signup with a Subscribe button
- **AND** it SHALL show a copyright line and legal links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Forgefit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Forgefit — Fitness Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh forgefit` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero, counters, programs,
      schedule, trainers, pricing, testimonials, faq, cta, footer)
- [ ] Design tokens in `@theme`: brand orange `#ea580c` (+ scale #f97316,
      #fb923c, #fdba74, #ffedd5, #c2410c), gray neutrals, near-black dark
      surfaces
- [ ] Fonts: Space Grotesk + DM Sans via Google Fonts
- [ ] Buttons: pill (fully rounded), orange primary with white text
- [ ] Hero on dark gym photo with gradient overlay; footer dark
- [ ] Testimonial carousel + count-up animation without extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/forgefit-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
