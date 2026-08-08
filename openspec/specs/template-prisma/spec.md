# Template: Prisma (Creative Agency Template)

## Purpose

Prisma is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Creativex 3" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency portfolio template
  (source: https://colorlib.com/wp/template/creativex-3/).
- **Preview URL:** https://preview.colorlib.com/theme/creativex-3/ — returns
  HTTP 404 (classic ColorLib preview infra no longer serves this theme).
  **Fallback used:** the canonical live preview from
  `preview.colorlib.com/assets/js/products.js` slug map →
  https://creativex-colorlib.pages.dev/ (HTTP 200, full rendered DOM + Astro
  `Base.BjbRLE8f.css` extracted), cross-checked against the TEMPLATES.md
  screenshot (`creativex-template-1770211073725.jpg`, viewed — identical
  design: same hero headline, stats, awards row). The demo brands itself
  "Pixel Studio"; our recreation uses the NEW name **Prisma**.
- **Section order (1:1):** Navbar (logo + Work/Services/About/Contact +
  dark-mode toggle + pill "Start a Project" CTA) → Hero (badge, headline
  "We Create **Bold Digital** Experiences", subhead, 2 CTAs, mesh-gradient
  background, scroll indicator) → Stats strip (150+ / 50+ / 12 / 8) →
  Awards strip (Awwwards, CSS Design Awards, FWA, Webby) → Services
  ("What We Do", 4 cards) → Selected Work (3 dark portfolio cards) →
  Testimonials ("What Clients Say") → Contact ("Let's Work Together",
  4 contact chips) → Footer (logo, links, social chips, copyright).
- **Design tokens extracted from the live preview CSS:**
  - Brand **fuchsia `#d946ef`** (primary-500) — buttons, link hover, logo
    mark, icon chips; hover `#c026d3` (primary-600).
  - Accent **orange `#f97316`** (accent-500); hero gradient text
    `.text-gradient` is `linear-gradient(to right, #d946ef → #f97316)`
    (oklab) with background-clip: text.
  - Full fuchsia scale in use: `#fdf4ff` (50), `#fae8ff` (100), `#f5d0fe`
    (200), `#f0abfc` (300), `#e879f9` (400), `#d946ef` (500), `#c026d3`
    (600), `#a21caf` (700), `#86198f` (800), `#701a75` (900); orange-100
    `#ffedd5` for soft blobs.
  - Neutrals: Tailwind gray scale — 50 `#f9fafb`, 100 `#f3f4f6`, 200
    `#e5e7eb`, 300 `#d1d5db`, 400 `#9ca3af`, 500 `#6b7280`, 600 `#4b5563`,
    700 `#374151`, 800 `#1f2937`, 900 `#111827`, 950 `#030712`.
  - Font: Inter-style system sans stack (Tailwind default); the screenshot
    reads as Inter/Poppins — use "Inter" via Google Fonts `<link>`.
  - Buttons: **pill (rounded-full)**; primary = solid fuchsia, white text,
    `shadow-lg shadow-primary-500/25`, hover `bg-primary-600` + stronger
    shadow; secondary = white bg, 1px gray border, dark text.
  - Radii: `rounded-full` (buttons/badge), `rounded-2xl` (work cards),
    `rounded-lg` (social icon chips).
  - Section backgrounds alternate **white** ↔ **gray-50** `#f9fafb`; work
    cards are **dark** (`bg-gray-900`, rounded-2xl, hover overlay gradient
    `from-gray-900 via-gray-900/60 to-transparent` with a "View Case Study"
    label).
  - **Dark mode:** full dark theme — page `gray-950`, sections `gray-900`,
    cards `gray-800`, text white/gray-300; toggle button in the navbar
    (aria-label "Toggle dark mode").
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/prisma-<n>/<w>/<h>`); icons → lucide-react (social
  brand icons as inline SVG per repo rule — lucide-react has no brand
  icons); Inter via Google Fonts `<link>`; no assets copied. Copy
  paraphrased but same content kinds (badge, headline, stats numbers,
  award names, service titles, work titles, contact details).

Prisma lives in `apps/prisma` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Prisma", a
logo mark, anchor links, a dark-mode toggle, a pill "Start a Project" button,
and a mobile menu button.

#### Scenario: Navbar content

- **GIVEN** the Prisma page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show a fuchsia logo mark with the wordmark
  "Prisma"
- **AND** the navbar SHALL show links Work, Services, About, and Contact
- **AND** the navbar SHALL show a pill "Start a Project" button (desktop)
- **AND** the navbar SHALL show a dark-mode toggle and a mobile menu button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user presses the mobile menu button
- **THEN** a menu SHALL open with the Work, Services, About, and Contact
  links and a "Start a Project" button
- **AND** the menu SHALL close when a link is selected

### Requirement: Hero section

The system SHALL render a centered hero with a badge pill, a large headline
with a gradient span, a subheadline, two call-to-action buttons, a soft
mesh-gradient background, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the Prisma page is rendered
- **WHEN** the hero section loads
- **THEN** the hero SHALL show a pill badge "Award-Winning Creative Agency"
- **AND** the hero SHALL show the headline "We Create Bold Digital
  Experiences" where "Bold Digital" is rendered with the fuchsia→orange
  gradient text treatment
- **AND** the hero SHALL show the subheadline "We craft bold digital
  experiences that captivate audiences and drive results."
- **AND** the hero SHALL show a primary pill button "View Our Work" and a
  secondary outline pill button "Start a Project"
- **AND** the hero background SHALL show soft pastel (lavender/pink/peach)
  gradient blobs behind the text
- **AND** the hero SHALL show a "Scroll" indicator with a mouse icon

### Requirement: Stats strip

The system SHALL render a bordered strip with four key metrics in a row.

#### Scenario: Stats

- **GIVEN** the Prisma page is rendered
- **WHEN** the stats section is displayed
- **THEN** the strip SHALL be separated by top and bottom borders
- **AND** the strip SHALL show the stats 150+ Projects Delivered, 50+ Happy
  Clients, 12 Team Members, and 8 Years Experience, each with a bold number
  and a label

### Requirement: Awards strip

The system SHALL render a row of text-based award mentions.

#### Scenario: Awards

- **GIVEN** the Prisma page is rendered
- **WHEN** the awards section is displayed
- **THEN** the section SHALL show the four award entries: "Awwwards Site of
  the Day (2024)", "CSS Design Awards (2024)", "FWA of the Month (2023)",
  and "Webby Awards Honoree (2023)"

### Requirement: Services section

The system SHALL render a "What We Do" section with four service cards.

#### Scenario: Service cards

- **GIVEN** the Prisma page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL have the heading "What We Do"
- **AND** the section SHALL show 4 cards: Web Design, Mobile Apps, Brand
  Identity, and Digital Marketing
- **AND** each card SHALL show an icon, a title, and a short description

### Requirement: Selected Work section

The system SHALL render a "Selected Work" portfolio section with three dark
image cards.

#### Scenario: Work cards

- **GIVEN** the Prisma page is rendered
- **WHEN** the selected work section is displayed
- **THEN** the section SHALL have the heading "Selected Work"
- **AND** the section SHALL show 3 cards with dark (gray-900) backgrounds and
  rounded-2xl corners, each with a photo, a title, and a category
- **AND** each card SHALL reveal a "View Case Study" label on hover via a
  bottom gradient overlay

### Requirement: Testimonials section

The system SHALL render a "What Clients Say" section with client quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the Prisma page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL have the heading "What Clients Say"
- **AND** the section SHALL show at least 2 testimonial cards, each with a
  quote, the client name, and their role (e.g. "CEO, Nova Financial")

### Requirement: Contact section

The system SHALL render a "Let's Work Together" contact section with four
contact channels.

#### Scenario: Contact channels

- **GIVEN** the Prisma page is rendered
- **WHEN** the contact section is displayed
- **THEN** the section SHALL have the heading "Let's Work Together"
- **AND** the section SHALL show four contact chips: Email Us (mailto link),
  Call Us (tel link), Visit Us (street address), and Follow Us (social icon
  chips)

### Requirement: Footer

The system SHALL render a footer with the logo, tagline, quick links, social
chips, and a copyright bottom bar.

#### Scenario: Footer content

- **GIVEN** the Prisma page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the "Prisma" wordmark and a short tagline
- **AND** the footer SHALL show quick links (Work, Services, About, Contact)
- **AND** the footer SHALL show social icon chips (Twitter, Instagram,
  LinkedIn, Dribbble)
- **AND** the footer SHALL show a copyright line in a bottom bar

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/prisma` created from the section-rich landing app pattern
      (Aurora), package renamed to `@free-react-templates/prisma`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
  test:coverage -- --project apps/prisma` or `scripts/verify-app.sh prisma`)
- [ ] Brand fuchsia `#d946ef` + accent orange `#f97316` in `@theme`;
      gradient text via `bg-gradient-to-r from-fuchsia-500 to-orange-500`
      with `bg-clip-text`; Inter via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Dark mode implemented (`.dark` root class, gray-950/900 sections,
      toggle in navbar)
- [ ] Placeholder images via `picsum.photos/seed/prisma-<n>/<w>/<h>`; no
      assets copied; social brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (`free-react-templates-prisma.surge.sh`) + homepage + `npm run
  readme:status`
