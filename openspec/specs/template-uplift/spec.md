# Template: Uplift (Charity / Nonprofit Landing)

## Purpose

Uplift is a single-page nonprofit fundraising landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hopehand" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Source mapping: `apps/uplift` recreates
https://colorlib.com/wp/template/hopehand/ (ColorLib "Hopehand" — charity /
nonprofit organization template).

## Design reference (replication findings)

- **Original:** ColorLib "Hopehand" — nonprofit / charity organization
  template (source: https://colorlib.com/wp/template/hopehand/).
- **Preview URL:** https://preview.colorlib.com/theme/hopehand/ returns
  **404** (confirmed 2026-08-08). The preview portal loads this template
  from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js` (verified: `hopehand` entry
  maps to `hopehand-colorlib.pages.dev/`). Live demo DOM analyzed:
  https://hopehand-colorlib.pages.dev/ (HTTP 200, Astro build, Tailwind
  utility markup + compiled `/_astro/Base.*.css`). The TEMPLATES.md
  screenshot (`hopehand-template-1771943776003.jpg`, 2400×1892) was
  reviewed via browser vision as the visual reference.
- **Section order (1:1, from the live demo DOM):**
  1. Navbar: About, Mission, Programs, Impact, Stories, Get Involved,
     Donate, Blog, Contact + pill "Donate Now" button (btn-primary).
  2. Hero: pill badge "Together, We Make a Difference", H1 "Change Lives,
     One Community at a Time", mission subtext, "Donate Now" (solid,
     px-10 py-4 text-lg) / "See Our Impact" (white, shadowed) buttons,
     stats row (50,000+ Lives Changed · 120+ Communities · 15 Countries ·
     $10M+ Raised), large rounded photo below.
  3. Mission (`id="mission"`, white): "Building a Better World Together"
     - 3 cards — Education, Healthcare, Sustainability.
  4. Programs (`id="programs"`, `bg-gray-50 dark:bg-gray-900`): "How We
     Help" + 4 cards — Education for All, Health & Wellness, Economic
     Empowerment, Environmental Action.
  5. Impact (`id="impact"`): "Numbers That Matter" stats strip (Funds
     Raised, Lives Impacted, …).
  6. Stories (`id="stories"`, `bg-gray-50 dark:bg-gray-900`): "Lives
     Transformed" — testimonial quotes.
  7. Get Involved (`id="get-involved"`): "Join Our Mission" + 3 cards —
     Volunteer, Fundraise, Partner.
  8. FAQ (`id="faq"`, `bg-white dark:bg-gray-950`): "Frequently Asked
     Questions" — accordion, 5 questions (tax-deductible donations, fund
     allocation, volunteering, recurring donations, international work).
  9. Donate (`id="donate"`, `bg-gray-900`): "Every Dollar Makes a
     Difference" — amount chips $25 / $50 / $100 / $250 / Custom + trust
     badges ("100% Tax Deductible", "Charity Navigator 4-Star").
  10. Footer: blurb + Programs / Organization / Support link columns +
      "Stay Updated" newsletter (Subscribe) + copyright + cookie notice.
- **Visual design (screenshot + DOM):** soft, hopeful nonprofit aesthetic —
  light surfaces with a soft mint→white gradient hero, emerald-green brand
  accents, a warm orange accent word in the headline, pill-shaped buttons
  and badges, rounded cards/images, clean sans-serif typography, generous
  whitespace.

## Design tokens (from the compiled demo stylesheet `/_astro/Base.*.css`)

- **Brand primary (emerald scale):** `#059669` (primary-600, CTA fills,
  stats numerals, logo) · `#047857` (primary-700, button hover) ·
  `#ecfdf5` (primary-50, soft fills) · `#d1fae5` (primary-100, tinted
  chips/badges) · colored button shadow `#0596694d` at 25%.
- **Secondary accent (orange):** `#f97316` (accent-500 — headline accent
  word, secondary highlights).
- **Neutrals:** body white bg + text `#111827`; `bg-gray-50` (#f9fafb)
  alternating section bands; `bg-gray-900` (#111827) donate section +
  footer; gray-400/500/600 for muted copy; dark-mode variants
  `dark:bg-gray-900` / `dark:bg-gray-950`.
- **Font:** "Manrope" (300–800) via Google Fonts
  (`fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800`).
- **Buttons:** pill shape (border-radius 3.40282e38px → `rounded-full`),
  `px-6 py-3 text-sm` for navbar CTA, `px-10 py-4 text-lg font-bold` for
  hero CTA; white secondary with soft shadow; colored shadow on primary.
- **Shapes/radii:** `rounded-full` (pills: buttons, badge, chips),
  `rounded-xl` / `rounded-lg` (cards, hero image).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Uplift",
anchor links to the page's sections, a "Donate Now" CTA, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Uplift page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Uplift" and links to
  About, Mission, Programs, Impact, Stories, Get Involved, Donate, Blog,
  and Contact
- **AND** the navbar SHALL show a pill "Donate Now" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a badge, headline, mission
subtext, two call-to-action buttons, and impact stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the pill badge "Together, We Make a Difference"
- **AND** it SHALL contain a level-1 heading "Change Lives, One Community
  at a Time"
- **AND** it SHALL show "Donate Now" and "See Our Impact" buttons
- **AND** it SHALL show the impact stats 50,000+ Lives Changed, 120+
  Communities, 15 Countries, and $10M+ Raised

#### Scenario: Hero image

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** a large rounded photo SHALL be rendered below the stats

### Requirement: Mission section

The system SHALL render a mission section with at least three cause cards.

#### Scenario: Mission content

- **GIVEN** the page is rendered
- **WHEN** the mission section is displayed
- **THEN** it SHALL contain a heading "Building a Better World Together"
- **AND** it SHALL show cards for Education, Healthcare, and Sustainability

### Requirement: Programs section

The system SHALL render a programs section with at least four program
cards on an alternating gray band.

#### Scenario: Programs content

- **GIVEN** the page is rendered
- **WHEN** the programs section is displayed
- **THEN** it SHALL contain a heading "How We Help"
- **AND** it SHALL show cards for Education for All, Health & Wellness,
  Economic Empowerment, and Environmental Action

### Requirement: Impact section

The system SHALL render an impact section with a stats display.

#### Scenario: Impact content

- **GIVEN** the page is rendered
- **WHEN** the impact section is displayed
- **THEN** it SHALL contain a heading "Numbers That Matter"
- **AND** it SHALL show at least one impact statistic

### Requirement: Stories section

The system SHALL render a stories section with at least one testimonial
quote.

#### Scenario: Stories content

- **GIVEN** the page is rendered
- **WHEN** the stories section is displayed
- **THEN** it SHALL contain a heading "Lives Transformed"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Get involved section

The system SHALL render a "Join Our Mission" section with at least three
involvement cards.

#### Scenario: Get involved content

- **GIVEN** the page is rendered
- **WHEN** the get-involved section is displayed
- **THEN** it SHALL contain a heading "Join Our Mission"
- **AND** it SHALL show cards for Volunteer, Fundraise, and Partner

### Requirement: FAQ section

The system SHALL render an FAQ accordion with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons that expand to
  reveal their answers

### Requirement: Donate section

The system SHALL render a donate section on a dark band with donation
amount options and trust badges.

#### Scenario: Donate content

- **GIVEN** the page is rendered
- **WHEN** the donate section is displayed
- **THEN** it SHALL contain a heading "Every Dollar Makes a Difference"
- **AND** it SHALL show donation amount chips including $25, $50, $100,
  $250, and Custom
- **AND** it SHALL show trust badges such as "100% Tax Deductible" and
  "Charity Navigator 4-Star"

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup,
and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Programs, Organization, Support)
- **AND** it SHALL show a "Stay Updated" newsletter signup with a
  Subscribe button
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Uplift app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Uplift — Nonprofit Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/uplift`
- [ ] `npm run lint` passes for `apps/uplift`
- [ ] `scripts/verify-app.sh uplift` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: "Uplift" logo, 9 anchor links, pill "Donate Now" CTA,
      dark-mode toggle (aria-expanded)
- [ ] Hero: badge pill, H1 with orange accent word, subtext, Donate Now /
      See Our Impact pill buttons, 4 stats, rounded photo
- [ ] Mission: "Building a Better World Together" + 3 cause cards
- [ ] Programs: gray band, "How We Help" + 4 program cards
- [ ] Impact: "Numbers That Matter" stats strip
- [ ] Stories: gray band, "Lives Transformed" testimonials
- [ ] Get Involved: "Join Our Mission" + 3 cards
- [ ] FAQ: "Frequently Asked Questions" accordion (5 questions)
- [ ] Donate: dark band, $25/$50/$100/$250/Custom chips, trust badges
- [ ] Footer: 3 link columns + newsletter form + copyright
- [ ] Brand tokens in `@theme`: emerald #059669 scale, orange #f97316,
      Manrope font; pill buttons; dark-mode variants on gray bands
- [ ] Placeholder images via `picsum.photos/seed/uplift-<n>/<w>/<h>`;
      icons from lucide-react (brand icons as inline SVG)
