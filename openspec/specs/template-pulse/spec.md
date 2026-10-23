# Template: Pulse (Business — Digital Agency)

Recreation of ColorLib "Saita" (https://colorlib.com/wp/template/saita/).

## Purpose

Pulse is a single-page digital-agency landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Saita" design (see `TEMPLATES.md`), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The design is a confident agency page: a teal-to-blue gradient hero with a
headline, a paragraph and two calls to action, a four-card feature band that
overlaps the hero, an about block with progress bars, a dark counters band, a
services grid, a filterable portfolio, a team row, three pricing plans, a
testimonial carousel, a three-post blog row, a gradient CTA banner and a navy
footer. Pulse follows the same section order and rhythm and uses Google Fonts
(Poppins), `picsum.photos` placeholders and `lucide-react` icons.

Pulse lives in `apps/pulse` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Design reference (replication findings)

- **Source:** ColorLib "Saita" — https://colorlib.com/wp/template/saita/
- **Source slug:** `saita` — mapped to `apps/pulse` in `TEMPLATES.md`
  (rows 623 and 1158 both resolve to `pulse.free.componentdock.com`).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/saita/ —
  **HTTP 200**, 14,471 B, fetched 2026-10-23 (page `<title>`:
  "Clear ideas. Considered design. — Saita"; stylesheet
  `css/style.min.css?v=3.1.0`, 207,866 B).
- **Live demo was re-skinned.** The current `saita` demo ships a v3.1.0 studio
  aesthetic — nav `Home · Work · Services · Process · Studio · Insights ·
  Contact`, sections `.hero-wrap`, `.s-intro`, `.s-tint`, `.s-dark`, `.s-cta`,
  headline "We Build Digital Brands People Remember", "Studio articles" blog
  band. The screenshot in `TEMPLATES.md` **and** the shipped app both recreate
  the earlier teal digital-agency design ("We Are Digital Agency Helping To
  Boost Your sales"). Both readings are recorded here; the shipped app is not
  changed by this spec.
- **Design tokens read from the live stylesheet** (same fetch, literals counted,
  not guessed): `font-family: Poppins, Arial, sans-serif` (8 declarations);
  brand teal `#0b7466` (38 literals, `.btn-primary{background:#0b7466}`,
  `.btn-outline-primary` border/text `#0b7466`); hero
  `background: linear-gradient(135deg, #0b6f62, #1a5a73)` with a 550 px
  decorative circle `rgba(255,255,255,.07)` bleeding off the top-right; hero
  caption panel `#0b5c54e6`, 20 px padding, 4 px radius; dominant radius
  **4 px** (16 declarations), buttons `13 px / 600 / uppercase / letter-spaced`,
  `.hero-wrap` height 800 px and 600 px under `md`.
- **Screenshot (visual reference):**
  https://colorlib.com/wp/wp-content/uploads/sites/2/saita-colorlib-template.jpg
  — teal hero graded toward blue with a right-side cut-out photo, white
  "START A PROJECT" pill plus a "WATCH THE VIDEO" text link, a four-card band
  straddling the hero edge (one white card, three `#5579fa` blue cards with
  circular yellow icons), an "ABOUT US" eyebrow above a bold two-line heading,
  white body sections with generous vertical padding.
- **Tokens implemented** (`apps/pulse/src/index.css` `@theme`, from the
  screenshot design): teal scale `--color-pulse-400 #1fc1a9` → `900 #03302a`;
  blue accent `--color-accent-400 #5579fa`; navy `--color-navy-700 #052c43`,
  `800 #031d2c`; Poppins body type; navy headings; uppercase letter-spaced
  eyebrows.
- **Provenance:** this spec was corrected on 2026-10-23 — it previously claimed
  "Colorlib Error 404 V16" (already owned by `apps/scarlet`, `TEMPLATES.md`
  row for `colorlib-error-404-16`), while `apps/pulse` ships the Saita
  digital-agency page. A spec that names the wrong source is an implementation
  hazard: it invites a "fix" that would rewrite a shipped template.

## Design tokens

| Token        | Value                                                        |
| ------------ | ------------------------------------------------------------ |
| Brand teal   | `#1fc1a9` (`--color-pulse-400`) — hero start, accents        |
| Hero end     | `#5579fa` (`--color-accent-400`) — gradient blue end         |
| Hero bg      | `bg-gradient-to-br from-pulse-400 to-accent-400`              |
| Navy         | `#052c43` (`--color-navy-700`) counters band                 |
| Footer       | `#031d2c` (`--color-navy-800`)                                |
| Headings     | `--color-navy-700`, bold                                      |
| Body text    | `text-gray-600` / `text-gray-500` (muted blurbs)              |
| Tint section | `bg-gray-50` (team, testimonials)                             |
| Type         | Poppins (`Arial, sans-serif` fallback), loaded via `<link>`   |
| Radii        | 4 px on cards (`rounded-lg`); fully round (`rounded-full`) on hero/CTA actions and filters |
| Buttons      | White pill on gradient (`rounded-full border-white bg-white text-pulse-700`), uppercase, tracking-wide |
| Rhythm       | `py-20` sections, `max-w-6xl` container, `px-4 sm:px-6` gutters |

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navy header containing the wordmark "Pulse.", a
primary navigation with Home, About, Work, Services, Pricing, Blog and Contact
anchors, and a mobile menu toggle.

#### Scenario: Desktop navigation
- **GIVEN** the Pulse page is rendered at a desktop width
- **WHEN** the header is displayed
- **THEN** the wordmark "Pulse." SHALL link to `#home`
- **AND** a `Primary` navigation SHALL list Home, About, Work, Services, Pricing, Blog and Contact, each anchored to its section (`#home`, `#about`, `#work`, `#services`, `#pricing`, `#blog`, `#contact`).

#### Scenario: Mobile menu toggle
- **GIVEN** the page is rendered at a mobile width
- **WHEN** the user activates the menu button
- **THEN** the button SHALL expose `aria-expanded="true"` and `aria-controls="mobile-menu"`
- **AND** its accessible name SHALL switch from "Open menu" to "Close menu"
- **AND** the menu SHALL list the same seven links.

### Requirement: Hero section

The system SHALL render a teal-to-blue gradient hero with a headline, a
supporting paragraph and two calls to action.

#### Scenario: Hero content
- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the single `h1` "We Are Digital Agency Helping To Boost Your Sales"
- **AND** a supporting paragraph about digital experiences and business growth
- **AND** a white pill action "START A PROJECT"
- **AND** a ghost action "WATCH THE VIDEO" carrying a play icon.

#### Scenario: Hero treatment
- **GIVEN** the hero is displayed
- **THEN** its background SHALL be the brand gradient (`from-pulse-400 to-accent-400`)
- **AND** its text SHALL be white on that gradient with at least AA contrast.

### Requirement: About section

The system SHALL render an about block with heading, intro copy, three
capability entries and three progress bars.

#### Scenario: About content
- **GIVEN** the user scrolls to `#about`
- **THEN** the heading SHALL read "We have experience for your project"
- **AND** three capability entries SHALL be listed: Strategy, Design, Development, each with a one-sentence description.

#### Scenario: Skill bars
- **GIVEN** the about block is displayed
- **THEN** labelled bars SHALL show Design 70%, Branding 85% and Marketing 75%, filled with brand teal on a `bg-gray-200` track, the fill width driven by the percentage.

### Requirement: Counters band

The system SHALL render a dark navy band with four animated statistics.

#### Scenario: Statistics
- **GIVEN** the user scrolls past the about block
- **THEN** a navy band SHALL show 60 Projects, 9200 Happy Clients, 5800 Cups of Coffee and 100 Expert Workers
- **AND** each figure SHALL count up from zero on mount and settle on its final value.

### Requirement: Services section

The system SHALL render an eight-card services grid.

#### Scenario: Service cards
- **GIVEN** the user scrolls to `#services`
- **THEN** eight cards SHALL be shown — Creative Design, Digital Marketing, Application Design, Web Development, Branding, Graphic Design, Email Marketing and Web Design
- **AND** each card SHALL pair a `lucide-react` icon with a title and a two-line blurb.

### Requirement: Portfolio section

The system SHALL render a filterable portfolio grid.

#### Scenario: Filters
- **GIVEN** the user scrolls to `#work`
- **THEN** filter controls SHALL offer All, Web Design, Web Development, Branding, Marketing and UI/UX Design
- **AND** "All" SHALL be active by default.

#### Scenario: Filtering
- **GIVEN** the portfolio is displayed with all eight projects
- **WHEN** the user selects a category
- **THEN** only projects in that category SHALL remain visible
- **AND** the active filter SHALL be visually distinct (teal fill, white text) from the inactive `bg-gray-100` chips.

#### Scenario: Tiles
- **GIVEN** the grid is displayed
- **THEN** each tile SHALL show a placeholder image, and on hover/focus reveal a navy overlay with a labelled zoom action, the project title and its category.

### Requirement: Team section

The system SHALL render four team members in a light tinted band.

#### Scenario: Team content
- **GIVEN** the user scrolls to the team band
- **THEN** the heading SHALL read "Meet Our Team"
- **AND** four members SHALL be shown with circular portraits, names and roles (Jason Smith — President & CEO, Jeffrey Rockenson — Executive Vice President, and two further roles: General Manager and Strategic Consultant)
- **AND** each member SHALL expose social icon links with accessible names.

### Requirement: Pricing section

The system SHALL render three pricing plans with one highlighted.

#### Scenario: Plans
- **GIVEN** the user scrolls to `#pricing`
- **THEN** Starter ($49/mo), Professional ($99/mo) and Enterprise ($199/mo) SHALL be shown
- **AND** each plan SHALL list its features with check icons
- **AND** the Professional plan SHALL be visually highlighted as the popular choice.

#### Scenario: Plan actions
- **GIVEN** a plan card is displayed
- **THEN** it SHALL offer a call to action that is reachable by keyboard and shows a focus ring.

### Requirement: Testimonials section

The system SHALL render a testimonial carousel with previous/next controls.

#### Scenario: Carousel
- **GIVEN** the user scrolls to the testimonials band
- **THEN** one testimonial SHALL be visible at a time with its quote, author portrait, name and role
- **AND** "Previous testimonial" and "Next testimonial" buttons SHALL be labelled
- **AND** advancing SHALL move between Sarah Johnson (CEO, TechStart) and Michael Chen (Marketing Director, GrowthCo), wrapping around.

### Requirement: Blog section

The system SHALL render three recent posts.

#### Scenario: Post cards
- **GIVEN** the user scrolls to `#blog`
- **THEN** three cards SHALL be shown — "How to Build a Strong Digital Brand Presence", "Top 10 Web Design Trends for 2025" and "The Power of Social Media Marketing"
- **AND** each card SHALL show a placeholder image, a date, a blurb and a read-more link.

### Requirement: Call-to-action banner

The system SHALL render a gradient CTA banner above the footer.

#### Scenario: CTA content
- **GIVEN** the user scrolls to the banner
- **THEN** it SHALL show the eyebrow "Prepare For Takeoff", the heading "Looking for business opportunity?", a supporting line and a "Get Started" action
- **AND** the banner background SHALL be the brand gradient.

### Requirement: Footer with Component Dock attribution

The system SHALL render a four-column navy footer and credit Component Dock.

#### Scenario: Footer columns
- **GIVEN** the user reaches the footer (`#contact`)
- **THEN** it SHALL show the wordmark, a short agency blurb and four social links (Facebook, Twitter, Instagram, LinkedIn, each with an `aria-label`)
- **AND** a "Recent Posts" column, a "Services" column and a "Contact" column with mail, phone and address items.

#### Scenario: Attribution
- **GIVEN** the footer is displayed
- **THEN** it SHALL link https://www.componentdock.com/ ("Component Dock")
- **AND** no other external attribution line SHALL be present.

### Requirement: Page composition and document metadata

The system SHALL compose the sections in order and set the document title.

#### Scenario: Section order
- **GIVEN** the page is rendered
- **THEN** the order SHALL be Navbar, Hero, About, Counters, Services, Portfolio, Team, Pricing, Testimonials, Blog, CTA banner, Footer
- **AND** exactly one `main` landmark SHALL wrap the sections between header and footer.

#### Scenario: Document title
- **GIVEN** the page mounts
- **THEN** `document.title` SHALL be "Pulse — Digital Agency Template".

### Requirement: Provenance hygiene

The system SHALL keep the design's provenance out of the app.

#### Scenario: No source references in the app
- **GIVEN** the repository state is inspected
- **THEN** no file under `apps/pulse/` SHALL contain a `colorlib.com` URL or the source template's name
- **AND** provenance SHALL live only in this spec, `TEMPLATES.md` and the pull request.

## Known gaps (recorded, not part of this contract)

Verified against `apps/pulse` on 2026-10-23 — listed so a later a11y sweep owns
them instead of rediscovering them:

- Skill bars in `About` are width-only `div`s with a text label; no
  `role="progressbar"`/`aria-valuenow`.
- Portfolio filter chips convey the active state by colour only; no
  `aria-pressed`.
- The counters band has no `prefers-reduced-motion` path (always counts up).

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-pulse`.
- [ ] Section order matches the list above; one `h1`; one `main` landmark.
- [ ] Design tokens: teal `#1fc1a9` → blue `#5579fa` gradient, navy `#052c43` counters, footer `#031d2c`, Poppins via `<link>`.
- [ ] Placeholder images use `https://picsum.photos/seed/pulse-<n>/<w>/<h>`; icons come from `lucide-react`.
- [ ] Filters and carousel controls are keyboard reachable and labelled.
- [x] Mobile menu toggle exposes `aria-expanded` + `aria-controls="mobile-menu"`.
- [x] Footer links https://www.componentdock.com/; no `colorlib.com` string anywhere under `apps/pulse/`.
- [x] `public/CNAME` = `pulse.free.componentdock.com`; package `homepage` = `https://pulse.free.componentdock.com`.
- [ ] `scripts/verify-app.sh pulse` green: typecheck, lint, 100% coverage, build.
