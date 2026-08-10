# Template: Pose (Model Agency Landing)

## Purpose

Pose is a single-page model-agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Stylistic"
design (see TEMPLATES.md — three duplicate rows at lines 231, 1189, 1731; ALL
must be marked `[x]` when done), built under a NEW name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark, cinematic model-agency page: a fixed dark navbar
("Stylistic / MODEL AGENCY" logo + hamburger), a full-height video/photo hero
("Welcome to / Stylistic / A Professional Model Agency" + a pink pill "Become
A Model" button), a featured-model section ("A Professional Model Agency"
with four model cards — Andrea/Andrea Smith, Nicole/Nicole Wall,
Cindy/Cindy Smith, Jannah/Jannah Doe — each with height/bust/waist/hips/shoe
stats), an about strip ("Hello! Pose"), a dark services band (Fashion Shows,
Corporate Events, Commercial Photo Shots, Exhibitions/Trade Shows), an "Our
Tops Model's" grid (Andrea, Cassy, Angela, May, Nicole, Jannah, Mariel,
Maria, Ozawa, Maine), a "Recent Blog" row ("Asia's Next Top Model"), a
testimony band (Mike Lewis, Architect), an appointment section ("Contact Us"
/ "Become A Model?" / "Model Courses"), a quote band ("Request a Quote"),
and a dark footer (brand + Recent Blog / Site Links / "Have a Questions?").
Pose recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Stylistic" — free model agency website template
  (source: https://colorlib.com/wp/template/stylistic/). TEMPLATES.md has
  **THREE copies** of this item (lines 231, 1189, 1731 — Beauty, Corporate,
  and Portfolio categories — all `- [ ]`); mark ALL `[x]` when done.
- **Preview URL:** `https://preview.colorlib.com/theme/stylistic/` — **HTTP
  200** (51.7 KB), fully reachable; structure + tokens below are from this
  live DOM and its `css/style.css` (71.5 KB). Screenshot
  (`stylistic-free-template.jpg`, 1200×946) confirms the visual design (see
  below).
- **Screenshot (verified via browser vision):** dark cinematic aesthetic.
  Header: "STYLISTIC" tall condensed serif with "MODEL AGENCY" beneath +
  hamburger menu right. Hero: runway-show photo/video background (dark),
  centered white text "WELCOME TO" (small serif) / "STYLISTIC" (very large
  outlined serif) / "A PROFESSIONAL MODEL AGENCY" (small sans), below a
  bright hot-pink pill button "Become A Model". Bottom: row of four model
  portrait cards (different women, direct gaze). Black/dark-charcoal
  backgrounds, white text, vibrant pink/magenta accent.
- **Section structure (from the live DOM, in order):**
  1. `header` — fixed dark navbar (`ftco_navbar`): logo "Stylistic / MODEL
     AGENCY" (recreate as "Pose / MODEL AGENCY" with a lucide sparkle/user
     icon) + nav links (Home, Models, Services, Blog, Contact in the
     recreation; the original uses a hamburger) + dark-mode toggle.
  2. `section.video-hero.js-fullheight` — full-height hero, dark runway
     photo bg (original is a video): eyebrow "Welcome to", giant serif
     "Stylistic" (→ "Pose"), tagline "A Professional Model Agency", pink
     pill `.btn.btn-primary` "Become A Model".
  3. `section.ftco-featured-model` (`margin-top: -50px` — cards overlap the
     hero bottom): heading "A Professional Model Agency" + **4** model
     cards: photo + name (Andrea/Andrea Smith, Nicole/Nicole Wall,
     Cindy/Cindy Smith, Jannah/Jannah Doe) + stats row **Height 185 ·
     Bust 79 · Waist 40 · Hips 87 · Shoe 40**.
  4. `section.ftco-about-section` — "Hello! Pose" + "A Professional Model
     Agency" + lorem paragraphs (Vokalia/Bookmarksgrove filler text).
  5. `section.ftco-section.bg-dark` (bg **#343a40**) — services: **4**
     cards, each a 100px **pink `#f34573` circle icon** (radius 50%) +
     title (Fashion Shows, Corporate Events, Commercial Photo Shots,
     Exhibitions/Trade Shows) + lorem blurb.
  6. `section.ftco-section` — "Our Tops Model's" + grid of **10** model
     tiles (Andrea, Cassy, Angela, May, Nicole, Jannah, Mariel, Maria,
     Ozawa, Maine) with photos + names.
  7. `section.ftco-section` — "Recent Blog" + post cards ("Asia's Next Top
     Model", "May 17, 2019 / Admin / 3").
  8. `section.testimony-section.img` — client feedback band: lorem quote +
     "Mike Lewis" / "Architect".
  9. `section.ftco-appointment` (bg **#191919**) — "Contact Us" + address
     (198 West 21th Street, Suite 721, New York NY 10016), phone
     (+ 1235 2355 98), email (info@yoursite.com), website; plus "Become A
     Model?" and "Model Courses" blocks.
  10. `section.ftco-quote` — band with "Become A Model? Call us now to know
      how!" / "Model Courses / Know more" + "Request a Quote" heading.
  11. `footer.ftco-footer` (dark) — brand "Pose" + blurb + social icons;
      **Recent Blog** links; **Site Links**; **"Have a Questions?"**
      (address/phone/email).
- **Behavior notes:** the original's hero is a background video; the
  recreation uses a seeded picsum runway-like photo (dark overlay) — or an
  optional `<video>` placeholder; the original uses a hamburger/slide-in
  nav; the recreation ships a standard repo Navbar (site name, Home link,
  dark-mode toggle) as the spec requires. The original is a multi-page
  demo; the recreation is ONE page with nav links as in-page anchors.

## Design tokens (extracted from `css/style.css`)

- Brand primary: **#f34573** (hot pink; 30 uses — `.btn.btn-primary` bg,
  `a`/`a:hover`, `.colorlib-logo i`, `.services .icon` circle bg, owl dots,
  `.ftco-about-section .subheading`). Buttons: pill (border-radius 30px),
  white text, hover = transparent bg + pink border/text.
- Dark neutrals: **#212529** (ink text), **#343a40** (`bg-dark` service
  band), **#191919** (appointment band bg), **#6c757d** (gray-600),
  **#f8f9fa** (light alt).
- Fonts:
  - Headings: **"Vidaloka", Arial, serif** (Google Fonts `<link>` in the
    recreation) — tall serif display; hero wordmark is large outlined.
  - Body: **"Poppins", Arial, sans-serif** (Google Fonts `<link>`);
    bootstrap system sans is only the framework fallback.
- Buttons (`.btn.btn-primary`): bg `#f34573`, `border: 1px solid #f34573`,
  white text, pill radius (30px), padding ~1rem 2rem, uppercase; hover
  `background: transparent; color: #f34573`.
- Sections: hero dark photo bg; featured model white (cards overlap hero by
  -50px); about white; services **#343a40** dark band; top models white;
  blog white; testimony photo bg with dark overlay; appointment **#191919**;
  quote dark; footer dark (#212529-ish). Section rhythm: `ftco-section` =
  `padding: 7em 0` (~112px).
- `.services .icon`: 100×100, bg `#f34573`, `border-radius: 50%` (pink
  circle icons).
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/pose-<n>/<w>/<h>` (deterministic per
  template); icons from `lucide-react` (sparkles, menu, x, moon, sun,
  calendar, user, chevron-right, map-pin, phone, mail, globe; brand social
  icons via inline SVG); no ColorLib assets.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Pose", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pose page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pose" (with a "MODEL AGENCY"
  subtitle) and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width, dark hero section with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Pose") on a dark
  full-height background with the tagline "A Professional Model Agency"
- **AND** it SHALL show a pink "Become A Model" button

### Requirement: Featured model

The system SHALL render a featured model section with the heading "A
Professional Model Agency" and at least four model cards.

#### Scenario: Featured cards

- **GIVEN** the page is rendered
- **WHEN** the featured model section is displayed
- **THEN** it SHALL show the heading "A Professional Model Agency"
- **AND** it SHALL render at least four model cards (Andrea, Nicole, Cindy,
  Jannah) each with a photo, full name, and the stats Height 185 / Bust 79 /
  Waist 40 / Hips 87 / Shoe 40

### Requirement: Services

The system SHALL render a dark services band with at least four cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services band is displayed
- **THEN** it SHALL use the `#343a40` dark background
- **AND** it SHALL render four cards (Fashion Shows, Corporate Events,
  Commercial Photo Shots, Exhibitions/Trade Shows) each with a pink circular
  icon

### Requirement: Top models

The system SHALL render an "Our Tops Model's" section with at least eight
model tiles.

#### Scenario: Top models grid

- **GIVEN** the page is rendered
- **WHEN** the top models section is displayed
- **THEN** it SHALL show the heading "Our Tops Model's"
- **AND** it SHALL render at least eight model tiles (Andrea, Cassy, Angela,
  May, Nicole, Jannah, Mariel, Maria, Ozawa, Maine)

### Requirement: Recent Blog

The system SHALL render a "Recent Blog" section with at least three post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL render at least three post cards, including "Asia's Next
  Top Model"

### Requirement: Testimony

The system SHALL render a client testimony band.

#### Scenario: Testimony content

- **GIVEN** the page is rendered
- **WHEN** the testimony band is displayed
- **THEN** it SHALL show a testimonial quote attributed to "Mike Lewis,
  Architect"

### Requirement: Contact / Appointment

The system SHALL render an appointment section with "Contact Us", "Become A
Model?" and "Model Courses" content.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show the heading "Contact Us" with address, phone, email
  and website details
- **AND** it SHALL show the heading "Become A Model?"
- **AND** it SHALL show the heading "Model Courses"

### Requirement: Quote band

The system SHALL render a "Request a Quote" band.

#### Scenario: Quote content

- **GIVEN** the page is rendered
- **WHEN** the quote band is displayed
- **THEN** it SHALL show the heading "Request a Quote"
- **AND** it SHALL show a "Become A Model? Call us now to know how!" callout

### Requirement: Footer

The system SHALL render a dark footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Pose"
- **AND** it SHALL show link columns (Recent Blog, Site Links, "Have a
  Questions?")

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Pose app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: navbar → hero → featured
  model → about → services → top models → blog → testimony → appointment →
  quote → footer
- **AND** the document title SHALL be "Pose — Model Agency"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- pose` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Layout matches the original 1:1: dark navbar, dark full-height hero
      (headline + "A Professional Model Agency" + pink "Become A Model"
      pill), 4 featured model cards (overlapping the hero by -50px), about
      strip, #343a40 services band (4 pink-circle cards), 10 top-model
      tiles, Recent Blog (3+ cards incl. "Asia's Next Top Model"), testimony
      band, #191919 appointment (Contact Us / Become A Model? / Model
      Courses), "Request a Quote" band, dark footer (11 sections in the
      order above).
- [ ] Design tokens applied: primary `#f34573`, dark `#212529` / `#343a40` /
      `#191919`, headings Vidaloka serif, body Poppins, pink pill buttons
      (radius 30px, outline hover), services icons in 100px pink circles.
- [ ] All images are picsum-seeded placeholders (`pose-<n>`); icons from
      lucide-react / inline SVG; Google Fonts via `<link>`; no ColorLib
      assets.
- [ ] Navbar dark-mode toggle persists + cleans up; mobile menu
      keyboard-operable.
- [ ] PR description records source (ColorLib Stylistic), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks ALL THREE copies
      (lines 231, 1189, 1731) `[x]` when done.
