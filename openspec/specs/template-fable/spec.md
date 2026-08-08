# Template: Fable (Food & Lifestyle Blog Template)

## Purpose

Fable is a single-page food & lifestyle blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Stories" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Stories" — food & lifestyle blog template
  (source: https://colorlib.com/wp/template/stories/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/stories/
  (HTTP 200, ~37 KB HTML fetched + `css/style.css` ~74 KB parsed).
- **Screenshot analyzed:** `stories-free-template.jpg` (TEMPLATES.md) —
  clean white minimalist blog aesthetic; split hero (left: food
  flat-lay photo, right: solid **yellow** text panel); "Recent Stories"
  row of three photo thumbnails below; serif headlines.
- **Section order (1:1):** Navbar (Home, About, Foods, Lifestyle, Contact)
  → Hero slider (2 slides, split image + yellow panel) → Recent Stories
  (3 large photo cards with overlay) → Blog list + sidebar (About Me /
  Categories) → About Stories (dark) → Counter (image background) →
  Subscribe newsletter → Footer (4 columns).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#fd5f00** (orange) — link hover/focus, active nav item,
    `.btn.btn-primary` background (white text, 1px border; hover inverts).
  - Accent yellow: **#ffd615** — logo accent span, hero text panel
    background (width 34%, height 680px), blog card subheading text,
    10px yellow square dot after section headings, contact icons.
  - Counter icons: **#6b75ff** → linear-gradient to **#59b7ff** (blue).
  - Body font: **"Poppins", Arial, sans-serif**. Headings: **"Playfair
    Display", serif** (weight 400, line-height 1.5, color rgba(0,0,0,.8)).
  - Footer: background **#1f1f1f**, padding 7em 0. Subscribe section:
    `bg-light` (#f8f9fa). About section: `bg-darken` (dark). Hero CTA:
    `.btn-black` (black "Read More" + arrow icon). Container max-width
    1200px. Subscribe input: height 64px, radius 5px 0 0 5px, bg
    rgba(0,0,0,.05).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/fable-<n>/<w>/<h>`); icons → lucide-react (arrow,
  socials as inline SVG brands); Poppins + Playfair Display via Google
  Fonts `<link>`; orange/yellow accents in `@theme`; no assets copied.

Fable lives in `apps/fable` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Fable",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Fable page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Fable" (serif, with a yellow accent dot/span)
- **AND** the navbar SHALL show links to Home, About, Foods, Lifestyle, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Active link styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is the current section
- **THEN** the active link SHALL be highlighted with the orange accent (#fd5f00)

### Requirement: Hero slider

The system SHALL render a full-width hero slider with two slides, each split
between a food photograph and a solid yellow text panel.

#### Scenario: Slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** each slide SHALL contain a subheading ("Featured Posts"), a serif level-1 heading, a short paragraph, and a black "Read More" button with an arrow icon
- **AND** slide headings SHALL be "Love the Delicious & Tasty Foods" and "I Am A Blogger & I Love Foods"

#### Scenario: Slide navigation

- **GIVEN** the hero slider has two slides
- **WHEN** the user activates the next/previous control
- **THEN** the slider SHALL advance to the other slide and show the active slide's heading

### Requirement: Recent stories section

The system SHALL render a "Recent Stories" section with a heading (yellow
square dot after the last word) and three large photo cards with category
overlays.

#### Scenario: Recent stories content

- **GIVEN** the page is rendered
- **WHEN** the recent stories section is displayed
- **THEN** it SHALL contain a heading "Recent Stories"
- **AND** it SHALL show at least three photo cards, each with a category label (e.g. Food, Dessert), a serif title, and a "Read More" link with an arrow

### Requirement: Blog list with sidebar

The system SHALL render a blog list with dated entries beside a sidebar
containing an "About Me" box and a "Categories" box.

#### Scenario: Blog entries

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show blog entries with a thumbnail, a category label, a date (e.g. "March 01, 2018"), a title, an excerpt, and a "Read More" link

#### Scenario: Sidebar boxes

- **GIVEN** the sidebar is rendered
- **WHEN** the user views the sidebar
- **THEN** it SHALL show an "About Me" box with an avatar and a bio
- **AND** it SHALL show a "Categories" box with links (Foods, Lifestyle, Others)

### Requirement: About section

The system SHALL render a dark "About Stories"-style section with a heading,
paragraph, and an italic serif signature.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading, a short paragraph, and an italic serif signature line
- **AND** the section background SHALL be dark

### Requirement: Counter section

The system SHALL render a counter section over a background image with
numbered stat blocks.

#### Scenario: Counter stats

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show at least four stat blocks, each with an icon in a blue-gradient circle, a bold number, and a label (e.g. "Years of Experienced", "Happy Customers")

### Requirement: Newsletter subscribe

The system SHALL render a subscribe section with a heading, an email input,
and a submit button.

#### Scenario: Subscribe form

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL contain a heading "Subscribe to our Newsletter", an email input, and an orange submit button
- **AND** submitting with an invalid email SHALL show an error and block submission

### Requirement: Footer

The system SHALL render a dark footer with four columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand "Fable" with a short description
- **AND** it SHALL show an Information column (Terms of Uses, Privacy Policy, Accessibility Help, Advertise with us)
- **AND** it SHALL show a Categories column (Food, Restaurant, Dessert, Lifestyle, Recipes)
- **AND** it SHALL show a "Have a Questions?" column with an address, a phone number, and an email
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Fable app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Fable — Food & Lifestyle Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/fable` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- fable` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; brand tokens (#fd5f00, #ffd615, Poppins + Playfair Display) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `fable-<n>`, Google Fonts links, lucide/inline-SVG icons only)
