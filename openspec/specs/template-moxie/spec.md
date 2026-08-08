# Template: Moxie (Creative Agency)

## Purpose

Moxie is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Creativex 3" template (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/).
- **Preview URL:** https://creativex-colorlib.pages.dev/
  (HTTP 200, 58.1 KB DOM, fetched 2026-08-08). NOTE: the classic preview
  `https://preview.colorlib.com/theme/creativex-3/` returns 404 — this
  template has been migrated to a Cloudflare Pages mirror (products.js maps
  slug `creativex` → `creativex-colorlib.pages.dev`). The pages.dev site IS
  the current live preview and matches the TEMPLATES.md screenshot
  (`creativex-template-1770211073725.jpg`) exactly, verified via browser
  vision (same "Pixel Studio" wordmark, same magenta accent, same stats,
  same awards strip). Use the pages.dev URL as the primary reference.
- **Preview CSS:** `https://creativex-colorlib.pages.dev/_astro/Base.BjbRLE8f.css`
  (41 KB, Tailwind v4 build; custom `.btn-primary`, `.card`, `.text-gradient`
  classes). Brand palette is Tailwind fuchsia-500 (`#d946ef`) aliased to
  `primary-*` + orange-500 (`#f97316`) aliased to `accent-*`.
- **Screenshot:** `creativex-template-1770211073725.jpg` (verified via
  browser vision against the live preview — identical design). Modern
  minimal creative-agency one-pager: off-white hero with soft magenta/orange
  glow blobs, pill badge with pulsing dot, giant centered headline with a
  magenta→orange gradient span ("Bold Digital"), pill CTA buttons, 4-stat
  row with a scroll indicator, awards trust strip, 3 service cards, 3 work
  cards with hover overlays, 3 testimonials, contact section with a big
  form, 4-column footer.
- **Section order (1:1):** Fixed navbar (logo left, 4 links center, phone
  icon + "Start a Project" pill right) → Hero (`bg-gray-50`: glow blobs,
  badge, h1 with gradient span, sub, 2 CTAs, 4 stats, scroll mouse
  indicator) → Awards strip (`border-y bg-white`, 4 awards in a row) →
  Services ("What We Do", 3 cards: Web Design / Mobile Apps / Brand
  Identity, each with 4 bullet features + Learn More link) → Selected Work
  (3 image cards, hover overlay with category + title + description) →
  Testimonials ("What Clients Say", 3 quote cards with avatar/name/role) →
  Contact ("Let's Work Together": 4 contact info blocks + form with Name /
  Email / Company / Service select / Budget select / Project Details /
  Send Message) → Footer (`bg-gray-50 border-t`: brand blurb, Navigation,
  Services, Contact + socials, copyright bar).

### Navbar (from live DOM)

- `<header class="fixed left-0 right-0 top-0 z-50 ... bg-white/95 shadow-sm
backdrop-blur-sm dark:bg-gray-950/95">` — fixed, translucent white with
  blur, subtle shadow.
- Inner `<nav class="mx-auto flex max-w-7xl items-center justify-between
px-4 py-4 lg:px-8">`.
- Logo: wordmark image (h-8) + "Pixel Studio." text; replacement = text
  wordmark "Moxie." (two-tone: dark gray + magenta dot).
- Desktop links (hidden lg:flex, gap-8): Work, Services, About, Contact —
  `text-sm font-medium text-gray-700 dark:text-gray-300`, hover
  `text-primary-500`.
- Right side: phone icon link + `.btn-primary` "Start a Project" pill.
- Mobile: hamburger `aria-label="Toggle mobile menu"`; collapsed menu
  repeats the 4 links + CTA (desktop + mobile duplicates in DOM — tests
  must use getAllByRole).

### Hero (from live DOM)

- `<section class="relative overflow-hidden bg-gray-50 dark:bg-gray-900">`.
- Background pattern: two absolutely-positioned glow blobs
  (`h-72 w-72 rounded-full blur-[128px]`): `bg-primary-500` top-left,
  `bg-accent-500` bottom-right, wrapped in `opacity-30` layer.
- Content `relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32`, inner
  `mx-auto max-w-4xl text-center`.
- Badge: `inline-flex items-center gap-2 rounded-full border border-primary-200
bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700` — pulsing
  dot (animate-ping) + "Award-Winning Creative Agency".
- h1: `text-4xl font-bold leading-tight tracking-tight text-gray-900
sm:text-5xl lg:text-6xl` — "We Create **Bold Digital** Experiences" with
  the span in `.text-gradient` (magenta→orange).
- Sub: `mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl` — "We
  craft bold digital experiences that captivate audiences and drive
  results."
- CTAs `mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`:
  - Primary: `inline-flex items-center justify-center gap-2 rounded-full
bg-primary-500 px-8 py-4 text-base font-semibold text-white
shadow-lg shadow-primary-500/25 hover:bg-primary-600` — "View Our Work"
    - arrow icon.
  - Secondary: `rounded-full border-2 border-gray-300 bg-white px-8 py-4
text-base font-semibold text-gray-700 hover:border-gray-400` —
    "Start a Project".
- Stats row (below CTAs, grid of 4 `text-center` columns): number
  `text-3xl font-bold text-gray-900 lg:text-4xl` (150+, 50+, 12, 8) + label
  `mt-1 text-sm text-gray-600` (Projects Delivered, Happy Clients, Team
  Members, Years Experience).
- Scroll indicator: `absolute bottom-8 left-1/2 -translate-x-1/2` mouse
  icon + "Scroll".

### Awards strip (from live DOM)

- `<section class="border-y border-gray-200 bg-white py-8 dark:border-gray-800
dark:bg-gray-900">`, `mx-auto max-w-7xl` grid of 4 items: "Awwwards Site
  of the Day (2024)", "CSS Design Awards (2024)", "FWA of the Month
  (2023)", "Webby Awards Honoree (2023)". Each = award name + year.

### Services ("What We Do", from live DOM)

- `<section class="bg-white py-20 dark:bg-gray-950 lg:py-28">`.
- Header: centered h2 + lead `text-gray-600` ("We offer a full range of
  creative services to help your business stand out and succeed in the
  digital world.").
- 3 cards (`grid gap-8 lg:grid-cols-3`), each `.card`:
  `border-radius:1rem; background:#fff; padding:24px; box-shadow:0 4px 16px
-4px #0000001a; hover:0 12px 32px -8px #00000024`.
  - h3 title (Web Design / Mobile Apps / Brand Identity) + one-line blurb.
  - 4 feature bullets with check icons (e.g. Web Design: Custom Design,
    Responsive Development, CMS Integration, SEO Optimization).
  - "Learn More" link: `text-sm font-semibold text-primary-500
hover:text-primary-600` + arrow.

### Selected Work (from live DOM)

- `<section class="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">`.
- Header row: h2 "Selected Work" + lead + "View All Projects" link
  (`text-primary-500`, arrow icon) on the right.
- 3 cards in a grid; each card = image (unsplash, aspect cover, rounded)
  with a hover overlay `absolute inset-0 flex flex-col justify-end
bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent p-6
opacity-0 transition-opacity hover:opacity-100` containing category tag
  (Branding / Mobile App / Web Design), title (Nova Fintech Rebrand /
  Mindful Wellness App / Urban Eats Platform), one-line description.

### Testimonials ("What Clients Say", from live DOM)

- `<section class="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">` (same bg
  as work section; separated by its own header block).
- Centered h2 "What Clients Say" + lead ("Don't just take our word for
  it…").
- 3 quote cards (`grid gap-8 lg:grid-cols-3`): quote text (large, gray-700)
  - author row: avatar image + name (bold) + role ("CEO, Nova Financial",
    "Founder, Mindful Inc.", "CTO, Urban Eats").

### Contact ("Let's Work Together", from live DOM)

- `<section class="bg-white py-20 dark:bg-gray-950 lg:py-28">`.
- Centered h2 + lead ("Have a project in mind? We'd love to hear about it.
  Fill out the form below and we'll get back to you within 24 hours.").
- Left column: 4 contact blocks (icon + title + detail): Email Us
  (hello@pixelstudio.com), Call Us ((555) 987-6543), Visit Us (456 Creative
  Ave, Suite 200, Los Angeles, CA 90028), Follow Us (4 social icons).
- Right column: form with fields Name, Email, Company (optional), Service
  Interested In (select: Web Design / Mobile Apps / Brand Identity / Digital
  Marketing / Other), Budget Range (select: $5,000–$10,000 / $10,000–$25,000
  / $25,000–$50,000 / $50,000+), Project Details (textarea), and a
  `.btn-primary` "Send Message" submit. Inputs are bordered rounded fields
  with focus ring `focus:border-primary-500 focus:ring-primary-500/20`.

### Footer (from live DOM)

- `<footer class="border-t border-gray-200 bg-gray-50 dark:border-gray-800
dark:bg-gray-900">`, inner `grid gap-12 lg:grid-cols-4`.
- Col 1: logo + blurb ("We craft bold digital experiences that captivate
  audiences and drive results.") + social icons.
- Col 2 "Navigation": Work, Services, About, Contact.
- Col 3 "Services": Web Design, Mobile Apps, Brand Identity, Digital
  Marketing.
- Col 4 "Contact": email, phone, address.
- Bottom copyright bar (border-t): "© 2026 Pixel Studio. All rights
  reserved." — use Moxie in the recreation.

## Design tokens (extracted from the live preview CSS)

| Token                 | Value                                                           | Usage                                                |
| --------------------- | --------------------------------------------------------------- | ---------------------------------------------------- |
| `--color-primary-500` | `#d946ef` (fuchsia-500)                                         | brand magenta: buttons, links, hover, gradient start |
| `--color-accent-500`  | `#f97316` (orange-500)                                          | gradient end, hero glow blob                         |
| `primary-50`          | `#fdf4ff`                                                       | badge background                                     |
| `primary-100`         | `#fae8ff`                                                       | icon tints                                           |
| `primary-200`         | `#f5d0fe`                                                       | badge border                                         |
| `primary-400`         | `#e879f9`                                                       | ping dot                                             |
| `primary-600`         | `#c026d3`                                                       | button hover, link hover                             |
| `primary-700`         | `#a21caf`                                                       | badge text                                           |
| `gray-900`            | `#111827`                                                       | headings, stat numbers                               |
| `gray-700`            | `#374151`                                                       | secondary text, outline button text                  |
| `gray-600`            | `#4b5563`                                                       | body/lead text                                       |
| `gray-400`            | `#9ca3af`                                                       | muted text                                           |
| `gray-50`             | `#f9fafb`                                                       | hero/work/testimonials/footer backgrounds            |
| `gray-100`            | `#f3f4f6`                                                       | input backgrounds                                    |
| `gray-200`            | `#e5e7eb`                                                       | borders, awards strip borders                        |
| `gray-300`            | `#d1d5db`                                                       | outline button border                                |
| white                 | `#ffffff`                                                       | cards, services section, contact section             |
| Font                  | Inter (400–800)                                                 | Google Fonts `<link>`; body + headings               |
| Button radius         | `9999px` (pill)                                                 | `.btn-primary`, `.btn-outline`, badge                |
| Card radius           | `1rem`                                                          | service cards; work/testimonial images               |
| Card shadow           | `0 4px 16px -4px #0000001a`; hover `0 12px 32px -8px #00000024` | `.card`                                              |
| Primary shadow        | `shadow-lg shadow-primary-500/25`                               | primary button                                       |
| Text gradient         | `linear-gradient(to right, #d946ef, #f97316)`                   | "Bold Digital" span                                  |
| Section padding       | `py-20 lg:py-28`                                                | all content sections                                 |
| Header                | `fixed bg-white/95 backdrop-blur-sm shadow-sm z-50`             | navbar                                               |
| Focus ring            | `focus:border-primary-500 focus:ring-primary-500/20`            | form fields                                          |

## Requirements

### Requirement: Navbar

The system SHALL render a fixed, translucent-white navbar with a wordmark,
four navigation links, and a call-to-action pill button.

#### Scenario: Desktop navbar content

- **GIVEN** the Moxie page is rendered
- **WHEN** the page loads
- **THEN** the fixed header SHALL show the "Moxie." wordmark on the left
- **AND** it SHALL show links Work, Services, About, and Contact
- **AND** it SHALL show a "Start a Project" pill button on the right
- **AND** the header SHALL have a translucent white background with a subtle
  shadow (fixed, backdrop-blur)

#### Scenario: Navbar link hover

- **GIVEN** the desktop navbar is rendered
- **WHEN** a nav link is hovered
- **THEN** the link text SHALL turn brand magenta (`#d946ef`)

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is mobile-sized
- **WHEN** the "Toggle mobile menu" button is pressed
- **THEN** a collapsed menu with the four links and the CTA SHALL appear
- **AND** the button SHALL reflect the open state via `aria-expanded`

### Requirement: Hero

The system SHALL render a light-gray hero section with soft glow blobs, a
badge, a gradient-highlighted headline, two pill CTAs, a stats row, and a
scroll indicator.

#### Scenario: Hero headline and CTAs

- **GIVEN** the page is rendered
- **WHEN** the hero section loads
- **THEN** it SHALL show the pill badge "Award-Winning Creative Agency" with
  a pulsing dot
- **AND** it SHALL show the h1 "We Create Bold Digital Experiences" with the
  words "Bold Digital" rendered as a magenta→orange gradient
- **AND** it SHALL show the subtitle about crafting bold digital experiences
- **AND** it SHALL show a primary "View Our Work" pill button with an arrow
- **AND** it SHALL show a secondary outlined "Start a Project" pill button

#### Scenario: Stats row and scroll indicator

- **GIVEN** the hero section is rendered
- **WHEN** the stats row loads
- **THEN** it SHALL show four stats: 150+ Projects Delivered, 50+ Happy
  Clients, 12 Team Members, and 8 Years Experience
- **AND** it SHALL show a "Scroll" mouse indicator at the bottom of the hero

#### Scenario: Hero glow blobs

- **GIVEN** the hero section is rendered
- **WHEN** the background renders
- **THEN** it SHALL contain a blurred magenta glow top-left
- **AND** a blurred orange glow bottom-right on the light gray background

### Requirement: Awards strip

The system SHALL render a bordered trust strip listing four industry awards.

#### Scenario: Awards strip content

- **GIVEN** the page is rendered
- **WHEN** the section below the hero loads
- **THEN** a bordered strip SHALL show Awwwards Site of the Day (2024),
  CSS Design Awards (2024), FWA of the Month (2023), and Webby Awards
  Honoree (2023)

### Requirement: Services

The system SHALL render a "What We Do" section with three service cards, each
with feature bullets and a Learn More link.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section loads
- **THEN** it SHALL show the heading "What We Do" and its lead paragraph
- **AND** it SHALL show three cards: Web Design, Mobile Apps, and Brand
  Identity

#### Scenario: Service card features and link

- **GIVEN** a service card is rendered
- **WHEN** the card content loads
- **THEN** the Web Design card SHALL list Custom Design, Responsive
  Development, CMS Integration, and SEO Optimization
- **AND** the Mobile Apps card SHALL list iOS & Android, React Native,
  UI/UX Design, and App Store Launch
- **AND** the Brand Identity card SHALL list Logo Design, Brand Guidelines,
  Visual Identity, and Brand Strategy
- **AND** each card SHALL show a "Learn More" link in brand magenta

#### Scenario: Service card hover

- **GIVEN** a service card is rendered
- **WHEN** it is hovered
- **THEN** its shadow SHALL deepen (hover shadow)

### Requirement: Selected Work

The system SHALL render a "Selected Work" section with a header row and three
image cards that reveal a gradient overlay on hover.

#### Scenario: Work section content

- **GIVEN** the page is rendered
- **WHEN** the work section loads
- **THEN** it SHALL show the heading "Selected Work" and a "View All
  Projects" link
- **AND** it SHALL show three projects: Nova Fintech Rebrand (Branding),
  Mindful Wellness App (Mobile App), and Urban Eats Platform (Web Design)

#### Scenario: Work card hover overlay

- **GIVEN** a work card with an image is rendered
- **WHEN** the card is hovered
- **THEN** an overlay with a gradient scrim, category tag, title, and
  description SHALL fade in

### Requirement: Testimonials

The system SHALL render a "What Clients Say" section with three quote cards.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section loads
- **THEN** it SHALL show the heading "What Clients Say"
- **AND** it SHALL show three quotes with author names and roles:
  David Kim — CEO, Nova Financial; Lisa Thompson — Founder, Mindful Inc.;
  and Michael Torres — CTO, Urban Eats

### Requirement: Contact

The system SHALL render a "Let's Work Together" section with four contact
info blocks and a validated inquiry form.

#### Scenario: Contact section content

- **GIVEN** the page is rendered
- **WHEN** the contact section loads
- **THEN** it SHALL show the heading "Let's Work Together" and its lead
  paragraph
- **AND** it SHALL show four contact blocks: Email Us, Call Us, Visit Us,
  and Follow Us
- **AND** it SHALL show a form with Name, Email, Company (optional),
  Service Interested In, Budget Range, and Project Details fields
- **AND** a "Send Message" primary button SHALL submit the form

#### Scenario: Form validation

- **GIVEN** the contact form is rendered
- **WHEN** the form is submitted with empty Name, Email, and Project Details
- **THEN** per-field error messages SHALL be shown
- **AND** the submit SHALL be blocked until all required fields are valid

#### Scenario: Select options

- **GIVEN** the contact form is rendered
- **WHEN** the selects are opened
- **THEN** Service Interested In SHALL offer Web Design, Mobile Apps, Brand
  Identity, Digital Marketing, and Other
- **AND** Budget Range SHALL offer $5,000–$10,000, $10,000–$25,000,
  $25,000–$50,000, and $50,000+

### Requirement: Footer

The system SHALL render a light-gray four-column footer with a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer loads
- **THEN** it SHALL show the brand blurb and social icons
- **AND** it SHALL show Navigation (Work, Services, About, Contact)
- **AND** it SHALL show Services (Web Design, Mobile Apps, Brand Identity,
  Digital Marketing)
- **AND** it SHALL show Contact details (email, phone, address)
- **AND** it SHALL show a copyright bar

### Requirement: Page composition

The system SHALL compose all sections in the reference order and support
dark-mode variants.

#### Scenario: Full page render

- **GIVEN** the page is rendered
- **WHEN** the full page loads
- **THEN** sections SHALL appear in this order: navbar, hero, awards strip,
  services, selected work, testimonials, contact, footer

#### Scenario: Dark mode variants

- **GIVEN** the page is rendered with `.dark` on the root element
- **WHEN** the page loads
- **THEN** headings and body text SHALL invert to light text on dark section
  backgrounds (`dark:bg-gray-900` / `dark:bg-gray-950`) matching the
  reference

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] `apps/moxie` exists with package `@free-react-templates/moxie`;
      lockfile registers the workspace (`grep -c free-react-templates/moxie
    package-lock.json`).
- [ ] `vite.config.ts` registers `injectUiSource()`.
- [ ] Google Fonts Inter 400–800 `<link>` in `index.html`.
- [ ] `@theme` tokens: `--color-brand: #d946ef`, `--color-ember: #f97316`
      (+ 50/100/200/400/600/700 tints) in `index.css`.
- [ ] All sections implemented per the Gherkin scenarios above.
- [ ] `bash scripts/verify-app.sh moxie` passes (typecheck + lint + 100%
      coverage + build).
- [ ] Browser check: matches the reference preview at
      https://creativex-colorlib.pages.dev/ (layout, colors, pill shapes,
      section order 1:1).
- [ ] TEMPLATES.md: mark the Creativex 3 item `[x]` with surge URL
      `https://free-react-templates-moxie.surge.sh`; run
      `npm run readme:status`.
- [ ] PR description includes: source template + preview URL, design
      tokens, renames (Pixel Studio → Moxie), placeholder images.
