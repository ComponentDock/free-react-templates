# Template: Buzzer (Business Consulting)

## Purpose

Buzzer is a single-page business consulting landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bravo" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Bravo" — business / consulting / corporate
  template (source: https://colorlib.com/wp/template/bravo/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/bravo/
  (HTTP 200, ~31 KB HTML fetched; `assets/css/style.css` ~172 KB parsed
  for tokens). Title tag: "Bravo — Website by Colorlib". Bootstrap 4 +
  owl-carousel + slick carousel + fontawesome/themify icons, AOS +
  animated-headline animations.
- **Screenshot analyzed:** `bravo-free-template.jpg` (TEMPLATES.md) —
  modern professional B2B business site: clean white base with deep navy
  headings, coral/salmon accents on underlines and borders, blue (#4760FF)
  primary buttons with rounded pill shape, hero with portrait illustration
  and large bold headline "Entrepreneur. Investor. Marketing Extraordinaire.",
  service cards with hover overlays, testimonials over background image,
  team section with social icons, dark navy footer with newsletter form.
- **Section order (1:1):**
  1. Header (`.header-area`, sticky) — logo left, nav links center (Home,
     About, Services, Blog with submenu, Contact), `.border-btn` phone
     number right (+880 156 278 256, pill-shaped border #FA8F77, radius
     30px), mobile hamburger menu.
  2. Hero slider (`.slider-area`, `.slider-active`) — owl-carousel with 2
     identical slides: right-side hero image (portrait illustration), left
     caption: h1 "Entrepreneur. Investor. Marketing Extraordinaire." (80px
     / 500 weight, dark navy #140C40, "Entrepreneur." in coral #FA8F77
     underline via `<span class="tittle-light">`), subtext paragraph,
     `.btn` "Explore Our Services" (blue #4760FF, white text, pill-shaped).
     Decorative shape image (`.hero-shape`).
  3. About section (`.about-low-area.section-padding40`) — split: left
     col-xl-6 has `.section-tittle` ("About Us" eyebrow + h2 "Build trust
     fast using the most engaging technology" with coral accent), paragraph,
     `.about-btn` "More About Us", experience stats row (10 Years, $40M+);
     right col-xl-5 has two stacked image cards with short descriptions.
  4. Popular Items / Services (`.popular-items.section-padding40`) —
     `.section-tittle` ("How we can help?" + "We're helping employers get"),
     3 `.single-popular-items` cards in 3-col grid: each has `.popular-img`
     (image with hover `.img-cap` overlay sliding up from bottom — "Read
     More" on blue #4760FF), `.popular-caption` with h3 title.
  5. Testimonials (`.testimonial-area.testimonial-padding.section-bg2`,
     bg image `section_bg01.png`) — centered `.h1-testimonial-active`
     dot-style carousel: each slide has `.testimonial-top-cap` (logo image
     + quote paragraph) and `.testimonial-founder` (name in bold + role).
  6. Team (`.team-area.section-padding40`) — centered `.section-tittle`
     ("Our Team" + "Meet with our amazing team"), 3 `.single-team` cards
     in 3-col: team photo (hover scale transition), `.team-caption` with
     name, role (span), and social icons (twitter, facebook, pinterest).
  7. Popular Items 2 (`.popular-items.section-padding40`) — 2 larger
     `.single-popular-items` cards in 2-col: same image + overlay + title
     pattern as services section.
  8. CTA (`.contact-animal-owner.section-bg2`, bg image `section_bg02.png`)
     — centered: h3 "Get started with our awesome service today", subtext
     paragraph, `.btn` "Get Started Now" (blue #4760FF).
  9. Footer (`.footer-area.footer-padding`, bg #140C40) — 4-column: logo
     + description + social icons (twitter, facebook, pinterest), About
     links (5 items), Services links (5 items), Newsletter (heading +
     description + email input + Send button). Copyright bar at bottom
     (`.footer-bottom-area`, same #140C40 bg, centered text).
- **Design tokens extracted from the preview CSS:**
  - Font: **"Roboto"**, sans-serif (Google Fonts, weights 300–700).
  - Primary blue: **#4760FF** — `.btn` background (white text), image
    hover overlay (`.img-cap span` background), slider dots active.
  - Coral/salmon accent: **#FA8F77** — `.section-tittle .tittle-light`
    color (h2 accent spans), `.border-btn` border + icon color,
    `.boxed-btn` text color, hero underline accent, section title
    eyebrow styling alternative.
  - Dark navy: **#140C40** — h1 hero text (80px/500), `.section-tittle
    > span` color (20px/600), footer background, footer-bottom background,
    body heading color.
  - Neutral grays: **#635c5c** (body text), **#7a8290** (section title
    paragraph), **#C2C5DB** (footer text), **#f7f7f7** (section bg).
  - Buttons: `.btn` — #4760FF bg, white text, capitalize, 18px/400,
    padding implied by Bootstrap; `border-radius: 30px` (pill). `.border-btn`
    — transparent bg, 1px solid #FA8F77 border, #140C40 text, border-radius
    30px (pill). `.boxed-btn` — white bg, #FA8F77 text, padding 18px 44px,
    border-radius 5px.
  - Section title: `.section-tittle > span` — 20px/600, #140C40,
    capitalize, margin-bottom 22px; `.section-tittle h2` has
    `.tittle-light` spans in #FA8F77; `.section-tittle p` — #7a8290.
  - Hero: `.slider-area` — position relative, `.hero__caption h1` 80px/500
    #140C40, `.hero__img` right-side illustration with fade-in animation.
  - Cards: `.popular-img` overflow hidden, `.img-cap` absolute bottom -20%
    slides to 0 on hover with opacity transition; `.single-team .team-img`
    hover scale(1) transition.
  - Footer: bg #140C40, `.footer-pera p` #C2C5DB 16px/1.8, `.footer-tittle
    h4` white, copyright bar #C2C5DB 18px/300.
- **Recreation decisions:** hero illustration → seeded picsum photo (not
  copied); hero shape decoration → omitted or replaced with subtle CSS
  gradient; service/team images → `picsum.photos/seed/buzzer-<n>/<w>/<h>`;
  testimonial logo → omit (use text); social icons → lucide-react
  (Twitter, Facebook, Pinterest or equivalent SVG); Roboto via Google
  Fonts `<link>` in `index.html`; #4760FF / #FA8F77 / #140C40 / #f7f7f7
  in `@theme`; no assets copied.

Buzzer lives in `apps/buzzer` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navbar with the brand name "Buzzer" and
navigation links.

#### Scenario: Navbar content

- **GIVEN** the Buzzer page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show "Buzzer" as the brand on the left
- **AND** the navbar SHALL show links for Home, About, Services, Blog
  (with a submenu containing Blog, Blog Details, Elements), and Contact
- **AND** the navbar SHALL show a pill-shaped phone contact button on the
  right with a phone icon and number

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be sticky at the top of the viewport
- **AND** the phone button SHALL have a transparent background with a
  coral (#FA8F77) border and 30px border-radius (pill shape)

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the nav links SHALL be accessible via a hamburger menu

### Requirement: Hero slider

The system SHALL render a full-width hero slider with an illustration
image, a large headline with coral accent, subtext, and a blue CTA button.

#### Scenario: Hero content

- **GIVEN** the hero slider is rendered
- **WHEN** the hero is in view
- **THEN** the hero SHALL show the headline "Entrepreneur. Investor.
  Marketing Extraordinaire." in dark navy (#140C40), 80px/500 weight
- **AND** "Entrepreneur." SHALL have a coral (#FA8F77) accent treatment
- **AND** the hero SHALL show a subtext paragraph and a blue (#4760FF)
  "Explore Our Services" button

#### Scenario: Hero layout

- **GIVEN** the hero slider is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a portrait illustration image on the right
  side and the caption content on the left side
- **AND** the hero SHALL support slide transitions (auto-advancing slider)

#### Scenario: Hero button styling

- **GIVEN** the hero CTA button is rendered
- **WHEN** the button is displayed
- **THEN** the button SHALL have a blue (#4760FF) background, white text,
  30px border-radius (pill shape), and capitalize text-transform

### Requirement: About section

The system SHALL render a split two-column section with text content and
experience stats on the left, and two stacked image cards on the right.

#### Scenario: About content

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the eyebrow "About Us" and the
  heading "Build trust fast using the most engaging technology" with
  coral accent on "Build trust fast"
- **AND** the left column SHALL show a paragraph description and a
  "More About Us" button

#### Scenario: Experience stats

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show two experience stat items: "10
  Years of experience" and "$40M+ invested in projects"

#### Scenario: About images

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** the right column SHALL show two stacked image cards, each with
  a product/service image and a short description

### Requirement: Services grid

The system SHALL render a 3-column service card grid with hover overlays.

#### Scenario: Services heading

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the eyebrow "How we can help?" and the
  heading "We're helping employers get"

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show 3 service cards in a 3-column grid (stacking
  on mobile)
- **AND** each card SHALL have a service image that reveals a "Read More"
  overlay on hover (blue #4760FF background sliding up from bottom)
- **AND** each card SHALL show a title below the image

### Requirement: Testimonials carousel

The system SHALL render a testimonial carousel over a background image.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL use a background image with a section-bg2
  treatment
- **AND** it SHALL show a centered carousel of testimonial slides, each
  with a quote paragraph and a founder attribution (name + role)

#### Scenario: Testimonial styling

- **GIVEN** a testimonial slide is displayed
- **WHEN** the page loads
- **THEN** the quote SHALL be centered with a logo/image above it
- **AND** the founder attribution SHALL show the name in bold followed by
  the role

### Requirement: Team section

The system SHALL render a 3-column team member grid with photos, names,
roles, and social links.

#### Scenario: Team heading

- **GIVEN** the team section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the eyebrow "Our Team" and the heading
  "Meet with our amazing team"

#### Scenario: Team cards

- **GIVEN** the team section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show 3 team member cards in a 3-column grid
- **AND** each card SHALL have a team photo (with hover scale transition),
  a name, a role label, and social icon links (Twitter, Facebook,
  Pinterest)

### Requirement: Secondary services grid

The system SHALL render a 2-column grid of larger service cards.

#### Scenario: Secondary service cards

- **GIVEN** the secondary services section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show 2 service cards in a 2-column layout
- **AND** each card SHALL use the same image + hover overlay pattern as
  the primary services grid

### Requirement: Call-to-action section

The system SHALL render a centered CTA section over a background image.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Get started with our
  awesome service today"
- **AND** the section SHALL show a subtext paragraph
- **AND** the section SHALL show a blue "Get Started Now" button

#### Scenario: CTA styling

- **GIVEN** the CTA section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL use a background image with the section-bg2
  treatment
- **AND** all content SHALL be centered

### Requirement: Footer

The system SHALL render a dark navy 4-column footer with logo, link
widgets, newsletter form, and a copyright bar.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a dark navy (#140C40) background
- **AND** it SHALL show 4 columns: logo + description + social icons,
  About links (5 items), Services links (5 items), Newsletter (heading +
  description + email input + Send button)

#### Scenario: Footer newsletter

- **GIVEN** the footer newsletter is rendered
- **WHEN** the user enters an email and clicks Send
- **THEN** the newsletter form SHALL display an email input field and a
  Send button

#### Scenario: Footer copyright

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show a centered copyright bar at the bottom
- **AND** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Full page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Buzzer app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections (Hero, About, Services, Testimonials, Team, Secondary
  Services, CTA) in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Buzzer — Business Consulting"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/buzzer` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- buzzer` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#4760FF, #FA8F77, #140C40, #f7f7f7, Roboto) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `buzzer-<n>`, Google Fonts link for Roboto, lucide-react icons only)
