# Template: Troth (Wedding / Couple's Website)

## Purpose

Troth is a single-page wedding couple's website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Wordpress Wedding Themes" free template item
(source: https://colorlib.com/wp/template/wordpress-wedding-themes/), built
under a DIFFERENT name (Troth — archaic word for a pledge of fidelity /
betrothal, as in "I plight thee my troth") per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a full-screen-photo wedding site: a top nav row (left: "Our
story", "Photos", "When & Where", "Events" links in small uppercase sans;
right: a circular logo mark), over a full-viewport candid photograph of a
wedding couple walking down stone steps with confetti raining down and guests'
heads in the foreground, with the page title "Wedding WordPress Themes" set in
a large elegant serif centered mid-screen and a "Getting married!" subhead in
a clean sans-serif below it. Troth recreates that structure 1:1 with matching
layout, colors, typography, and content types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Wordpress Wedding Themes" is FORBIDDEN
> as the app name. **Troth** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-09). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes". Listed in TEMPLATES.md
  under **Beauty (28)** (line 235). ⚠ RESEARCH FINDING (verified 2026-08-09):
  the `colorlib.com/wp/template/wordpress-wedding-themes/` page is NOT a
  single-template page — it is a ROUNDUP ARTICLE ("10+ Best Wedding WordPress
  Themes for Planning & Photography 2026") listing third-party ThemeForest
  wedding themes (veil, partymaker, alanzo, july morison, …). There is no
  downloadable ColorLib template behind this item. The recreation brands
  itself **Troth** and follows the design shown in the item's own screenshot.
- **Live preview DOM — UNREACHABLE (verified 2026-08-09):** the official
  preview `https://preview.colorlib.com/theme/wordpress-wedding-themes/`
  returns **HTTP 404** (page body "404"). No Astro-era mirror exists for this
  slug, and the roundup article's demo links point to third-party ThemeForest
  previews (e.g. `theme.pixflow.net` — root returns a phpinfo() page, no
  template structure). Per docs/replication.md, the fallback applies: **the
  screenshot is the SOLE reference** (see below). The PR description MUST say
  the preview was unreachable and note the fallback.
- **Visual design (screenshot `wedding-wordpress-themes.jpg`, 1200×892,
  browser-verified 2026-08-09 — sole reference):** a wedding couple's website
  demo rendered in Safari. Top nav row over the hero photo — LEFT: four menu
  links in small, subtle uppercase (small-caps) sans-serif: "Our story",
  "Photos", "When & Where", "Events"; RIGHT: a small circular logo mark (white
  outline ring with a pink/magenta dot inside). Main content: a centered text
  block mid-screen — an H1 "Wedding WordPress Themes" in a large elegant
  **serif** (Playfair Display / Bodoni-like) and below it "Getting married!"
  in a smaller, clean **sans-serif**. The full-viewport background photograph
  is a candid shot of the couple on stone steps (groom in grey suit, bride in
  knee-length lace dress holding pink peonies), confetti raining down, guests'
  heads in the near foreground; no heavy color grading. No rectangular CTA
  buttons visible in the hero — the nav links are the primary interactive
  elements.
- **Section order (1:1):**
  1. **Header / nav** (VERIFIED from screenshot) — top row over the hero
     photo: left nav links "Our story", "Photos", "When & Where", "Events"
     (small uppercase sans); right circular logo mark.
  2. **Hero** (VERIFIED from screenshot) — full-viewport background photo,
     centered text block: serif H1 + sans subhead ("Getting married!").
  3. **Our story** (INFERRED from nav label) — couple's story section:
     heading + narrative text + couple photo (standard wedding-site content
     kind).
  4. **Photos** (INFERRED from nav label) — photo gallery grid.
  5. **When & Where** (INFERRED from nav label) — date + venue(s) info block.
  6. **Events** (INFERRED from nav label) — event schedule list (ceremony,
     reception, …).
  7. **Footer** (INFERRED — standard for this template family) — minimal:
     names + wedding date + small nav repeat.
  > Only the header and hero are directly verified; sections 3–7 are inferred
  > from the nav labels (the canonical wedding-site structure this template
  > family uses). The implementer SHALL build them with the content kinds
  > listed and note the inference in the PR description.
- **JS behaviors (original):** none observable — the screenshot shows a
  static single-page site; nav links are anchors. Recreate with smooth-scroll
  anchor navigation between sections (no router needed).

## Design tokens (from screenshot analysis — screenshot fallback in effect)

> ⚠ Token extraction from a screenshot is best-effort: hex values that cannot
> be read from the image are given as recommended faithful matches and MUST be
> documented as such in the PR.

- **Fonts:** elegant serif for headings — Playfair Display (weights 500–700,
  Google Fonts) matches the H1's high-contrast Bodoni/Playfair look; clean
  sans-serif for nav/subhead/body — Poppins (300–600). Load both via Google
  Fonts `<link>` in `index.html`.
- **Brand colors:**
  - `#ffffff` — hero headline/subhead text over the photo.
  - `#ec4899` (pink-500) — recommended accent matching the logo mark's
    pink/magenta dot; exact source hex unverifiable from screenshot (a
    pink/magenta in the #e0437a–#ec4899 range). Used for the logo dot and
    small accent details (link hovers, section titles).
  - Photo-dominant palette otherwise — no solid brand background; sections
    alternate white / warm light-gray (`#faf9f7`) to keep the romantic
    neutral look of the reference.
- **Radii:** none on nav (text links); circular logo mark (rounded-full);
  gallery/story images square or softly rounded (unverifiable — pick
  `rounded-none`/`rounded-lg` consistently and document). No rectangular
  buttons in the hero; any CTA (e.g. RSVP) follows a flat rectangular or
  pill treatment consistent with the minimal aesthetic.
- **Spacing:** full-viewport hero (`min-h-screen`), text block centered
  horizontally and vertically; nav row with comfortable top padding
  (approx. 24–32px), links letter-spaced uppercase small text; generous
  vertical rhythm between sections (py-24-ish).
- **Responsive:** hero text scales down on mobile (clamp or `text-4xl`→
  `text-6xl`); nav links collapse to a compact row (or simple hamburger with
  `aria-expanded` per repo conventions — the screenshot shows a desktop
  nav only).
- **Placeholder images (never copy ColorLib assets):**
  - hero → `https://picsum.photos/seed/troth-hero/1920/1080` (source photo is
    portrait-of-a-couple on steps; any landscape seed works)
  - story couple photo → `https://picsum.photos/seed/troth-story/800/1000`
  - gallery → `https://picsum.photos/seed/troth-gallery-<n>/600/400` for n in
    1..6
- **Icons:** lucide-react (`Heart`, `MapPin`, `CalendarDays`, `Clock`,
  `Camera`) for section markers; logo mark = a `Heart` in the accent color
  inside a white ring.

## Requirements

### Requirement: Full-screen hero with photo background

The system SHALL render a full-viewport hero whose background is a cover
photograph (wedding couple / celebration scene — recreate with a seeded
placeholder photo), with the header nav and centered text block overlaid on it.

#### Scenario: Hero layout

- **GIVEN** the Troth page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL fill the viewport height (`min-h-screen`) with a
  cover background photo, centered, no repeat
- **AND** the hero text block SHALL be centered horizontally and vertically
  over the photo

#### Scenario: Hero copy

- **GIVEN** the hero section is displayed
- **WHEN** the page loads
- **THEN** the H1 SHALL be the couple's names / site title set in the serif
  display font, white
- **AND** a smaller sans-serif subhead SHALL sit below it with the
  "Getting married!"-style tagline (paraphrased, same kind of content) with
  the wedding date

### Requirement: Header nav with wedding sections

The system SHALL render a top nav row over the hero photo with the four
wedding-section links on the left and a circular logo mark on the right.

#### Scenario: Header content

- **GIVEN** the Troth page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL be a flex row (`space-between`, `align-items:
center`) with comfortable top padding
- **AND** the left side SHALL show four links in small, letter-spaced
  uppercase sans: "Our story", "Photos", "When & Where", "Events"
- **AND** the right side SHALL show a circular logo mark (white ring with a
  pink heart/dot inside, lucide `Heart`, `aria-label="Troth — home"`)
- **AND** each nav link SHALL anchor-scroll to its section

#### Scenario: Mobile nav

- **GIVEN** the Troth page is rendered on a viewport ≤768px
- **WHEN** the header is displayed
- **THEN** the nav links SHALL either fit as a compact row or collapse into a
  toggleable menu button with `aria-expanded` (per repo accessibility
  conventions)

### Requirement: Our story section

The system SHALL render an "Our story" section with a heading, narrative
text, and a couple photo.

#### Scenario: Story content

- **GIVEN** the Our story section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a serif heading ("Our story"), two or three
  short narrative paragraphs about the couple (paraphrased placeholder copy),
  and a seeded placeholder couple photo
- **AND** the section background SHALL be white or warm light-gray with a
  small accent-colored detail (per the token palette)

### Requirement: Photos gallery

The system SHALL render a "Photos" gallery section with a responsive grid of
placeholder photos.

#### Scenario: Gallery grid

- **GIVEN** the Photos section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a serif heading ("Photos") and a responsive
  grid (1 col mobile / 2–3 cols desktop) of at least six seeded placeholder
  photos
- **AND** each gallery image SHALL have descriptive alt text

### Requirement: When & Where section

The system SHALL render a "When & Where" section presenting the ceremony
date, time, and venue(s).

#### Scenario: Date and venue info

- **GIVEN** the When & Where section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a serif heading ("When & Where") with the
  wedding date, time, and venue name/address placeholder copy
- **AND** the info SHALL be marked up with lucide `CalendarDays` / `MapPin`
  icons and `aria-label`s

### Requirement: Events schedule

The system SHALL render an "Events" section listing the wedding-day events in
order.

#### Scenario: Event list

- **GIVEN** the Events section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a serif heading ("Events") and an ordered
  list of at least three events (e.g. Ceremony, Reception, After-party) each
  with a time and short description
- **AND** the list SHALL be keyboard-focusable and navigable

### Requirement: Footer

The system SHALL render a minimal footer with the couple's names, the wedding
date, and a repeat of the section links.

#### Scenario: Footer content

- **GIVEN** the Troth page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL be present with the couple's names, the wedding
  date, and the four section links
- **AND** the footer SHALL use the accent color for the names or a small
  heart detail

### Requirement: Responsive behavior

The system SHALL adapt the hero text size and section spacing for mobile
viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Troth page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the hero H1 SHALL scale down (e.g. `text-4xl`) and remain centered
- **AND** section paddings SHALL reduce accordingly and grids SHALL collapse
  to one column

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-troth`
- [ ] `scripts/verify-app.sh troth` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): header (nav links + logo mark)
      → full-screen hero (serif H1 + sans subhead) → Our story → Photos →
      When & Where → Events → footer. Only header + hero are verified from
      the screenshot; sections 3–6 are inferred from the nav labels — note
      the inference in the PR.
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#ffffff` hero
      text, `#ec4899` accent (documented as a recommended match — source hex
      unverifiable), warm light-gray section backgrounds
- [ ] Fonts: Playfair Display (headings) + Poppins (body/nav) via Google
      Fonts `<link>` in `index.html`, title "Troth — Wedding Template"
- [ ] Hero/gallery photos = seeded picsum (`troth-hero`, `troth-story`,
      `troth-gallery-<n>`); icons from lucide-react (`Heart`, `MapPin`,
      `CalendarDays`, `Clock`, `Camera`) — no copied assets
- [ ] Nav links anchor-scroll to sections; mobile nav accessible
      (`aria-expanded` on toggle)
- [ ] PR description MUST state: preview URL 404 + ColorLib page is a
      roundup article → screenshot fallback used (docs/replication.md rule)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Wordpress Wedding Themes" row,
      line 235 — Beauty category)
