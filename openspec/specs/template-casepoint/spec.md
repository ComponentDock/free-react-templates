# Template: Casepoint (Law Firm Landing)

## Purpose

A Law Firm template with navigation header, hero, practice areas, about, contact and case studies sections. Casepoint is a single-page law firm landing template — a React recreation of the ColorLib free "TheLawyer" template (preview: https://preview.colorlib.com/theme/thelawyer/ — law firm landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Reference-measured design tokens are recorded in **Design tokens** below —
re-measured 2026-10-23 from the preview stylesheet (see `docs/replication.md`).

- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Casepoint lives in `apps/casepoint` and uses shared components from `packages/ui`
(cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Thelawyer** — https://colorlib.com/wp/template/thelawyer/
- **Preview**: `https://preview.colorlib.com/theme/thelawyer/` — HTTP 200, **43,455 bytes**, title `Lawyer HTML-5 Template`; original build (no `?v=` asset markers).
- **Stylesheets measured**: `assets/css/style.css` — **71,683 bytes** (theme layer); vendored `bootstrap.min.css` 27,394 B, `slicknav.css`, `magnific-popup.css`, `nice-select.css`, `animate.min.css`, `slick.css`, icon sheets are framework code.
- **Measured how**: hex-literal census per sheet, then the winning rule per selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Action blue | `#3957ff` | 45 | `.header-btn` fill, `.btn`, `.submit-btn`, `.boxed-btn:hover` fill, eyebrow/subtitle text |
| Heading ink | `#092c3f` | 2 | `h1`–`h6` (Josefin Sans 500) |
| Deep navy | `#112957` | 4 | `.hero-btn` fill (its `::before` flips to `#3957ff`), `.post-btn`, `#back-top`, header-right block |
| Near-black | `#0b1416` | 1 | `.btn-black` fill |
| Footer | `#11141b` | 1 | `.footer-area` background (`.footer-bottom` `30px 0 50px`) |
| Card band | `#f7f9ff` | 4 | `.services-caption` cards |
| Off-white band | `#f9f9ff` | 27 | alternating section band, inputs |
| Hairline lilac | `#f0e9ff` | 12 | input borders, card hairlines |
| Muted copy | `#999999` | 10 | paragraphs, placeholders |
| Secondary cyan | `#4cd3e3` | 7 | icon tiles — declared only by `.confirm-switch input:checked+label:before` in the shared sheet — 5 declaring rule(s), every one hanging off a class the page markup never uses (block absent from the page markup) |
| Hero H1 ink | `#212025` | — | `.hero__caption h1` (Rubik) |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Roboto", sans-serif`, 16 px | theme `body` rule |
| Headings | `"Josefin Sans", sans-serif`, 500, `#092c3f` | `h1`–`h6` |
| Hero H1 | 68 px / 500 / `#212025` / **Rubik**, 60 px at the next breakpoint | `.slider-area .hero__caption h1` |
| Buttons | Josefin Sans, 14 px, uppercase, `padding: 18px 44px` | `.boxed-btn`, `.header-btn` |
| Fonts loaded | `Josefin Sans` 300–600, `Roboto`, `Rubik` (Google Fonts `@import` inside the sheet) | sheet head |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Hero | split hero: `.slider-area` cover photo `img/hero/h1_hero.jpg` on the right, white copy panel on the left, decorative pastel squares; `.slider-area2` (inner pages) uses `hero2.png` |
| Buttons | **sharp corners** (`border-radius: 0`), `.header-btn` `19px 44px`, `.boxed-btn` white fill + `#3957ff` label, hover fills `#3957ff`; `.hero-btn` `30px 38px` on `#112957` flipping to `#3957ff` |
| Radius | **0** on buttons; **3 px** on small icon tiles, **8 px** on cards, **50%** avatars |
| Section rhythm | `.section-padding` 120 px; `.pt-50/.pb-80` helpers on the about block |
| Bands | white nav → split photo hero → white services grid (`#f7f9ff` cards) → white about → photo "Are you Searching For a First-Class Consultant?" band (white 48 px/700 heading) → white case studies → white contact → `#11141b` footer |

## Requirements

### Requirement: Navigation header

The system SHALL render a sticky white header with the brand name "Casepoint",
navigation links (Home, About, Services, Case Studies, Blog, Contact), a phone
number button "01654.066.456", and a hamburger toggle for mobile.

#### Scenario: Desktop navigation

- **WHEN** the user views the page on desktop
- **THEN** the header shows the "Casepoint" logo, 6 navigation links, and a phone CTA button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** a mobile navigation panel opens with all links and the phone number

#### Scenario: Mobile menu close

- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section

The system SHALL render a hero section with a background image, a subtitle
"Committed to success" with a blue accent line, an h1 heading "Don't Feel
Helpless We Fight for Justice", a descriptive paragraph, and a "Learn About Us"
CTA button linking to #about.

#### Scenario: Hero content

- **WHEN** the user views the hero section
- **THEN** the heading, subtitle, paragraph, and CTA button are visible

#### Scenario: Hero background

- **WHEN** the user views the hero section
- **THEN** a background image is displayed

### Requirement: Practice Areas

The system SHALL render a section with subtitle "Our Practicing area", heading
"Area Of Practice That Can Help You To Win", and three practice area cards
(Health Law, Insurance Law, Vehicle Accident) with icons, descriptions, and
"Read More >" links.

#### Scenario: Practice area cards

- **WHEN** the user views the Practice Areas section
- **THEN** three cards are displayed with icons, titles, descriptions, and read more links

### Requirement: About section

The system SHALL render a split-layout About section with an image on the left,
subtitle "About Our Law agency", heading "We are committed for better service",
two descriptive paragraphs, and a "Learn About Us" button.

#### Scenario: About content

- **WHEN** the user views the About section
- **THEN** the subtitle, heading, two paragraphs, image, and CTA button are visible

### Requirement: Contact form

The system SHALL render a contact form section with a background image, subtitle
"Fill up to get a quote", heading "World's Leading Law Consultancy Agency!", and
form fields: Name, Phone, Practice Area (select), Email, Message, and a
"Submit Now" button.

#### Scenario: Form fields

- **WHEN** the user views the contact form
- **THEN** all 5 form fields and the submit button are visible

#### Scenario: Form submission

- **WHEN** the user fills all fields and clicks Submit Now
- **THEN** a thank-you confirmation message is displayed

#### Scenario: Empty form submission

- **WHEN** the user submits the form with empty fields
- **THEN** no confirmation is shown (early return)

### Requirement: Case Studies

The system SHALL render a tabbed Case Studies section with subtitle "our recent
work", heading "Reliable, Effective & Winning Law For Customers", and three tabs
(Accident Law, Health Law, Insurance Law) each showing a 2x2 grid of case cards.

#### Scenario: Tab switching

- **WHEN** the user clicks a different tab
- **THEN** the active tab highlights and the card grid updates

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** Accident Law is the active tab with 4 case cards

### Requirement: CTA Banner

The system SHALL render a CTA banner with a background image, heading "Are you
Searching For a First-Class Consultant?", and a "Contact Now" button.

#### Scenario: CTA content

- **WHEN** the user views the CTA banner
- **THEN** the heading and Contact Now button are visible

### Requirement: Team section

The system SHALL render a Team section with subtitle "Our lawyers", heading
"Meet Our Dedicated Team Members.", and three team member cards (Ethan Welch,
Trevor Stanley, Allen Guzman) with photos and role titles.

#### Scenario: Team members

- **WHEN** the user views the Team section
- **THEN** three team members are displayed with names, roles, and photos

### Requirement: Testimonial section

The system SHALL render a Testimonial section with a background image, a quote
SVG icon, a testimonial paragraph, founder name "Oliva Jems", role "Chief
Lawyer", and a founder photo.

#### Scenario: Testimonial content

- **WHEN** the user views the Testimonial section
- **THEN** the quote, founder name, role, and photo are visible

### Requirement: Blog section

The system SHALL render a Blog section with subtitle "Insight and Trends
Articles", heading "Lawyers news from around the world selected by us.", and two
blog post cards with images, date overlays, titles, and descriptions.

#### Scenario: Blog cards

- **WHEN** the user views the Blog section
- **THEN** two blog cards are displayed with images, dates, titles, and descriptions

### Requirement: Footer

The system SHALL render a footer with a dark background image, the "Casepoint"
logo, description, phone number "+564 7885 3222", email "youremail@gmail.com",
"Our Support" links, "Quick Link" links, a newsletter form with email input and
Send button, social icons (Twitter, Facebook, Globe, Instagram), copyright line,
and a "Component Dock" attribution link to https://www.componentdock.com/.

#### Scenario: Footer content

- **WHEN** the user views the footer
- **THEN** all footer sections, links, newsletter form, social icons, and Component Dock link are visible

#### Scenario: Newsletter form

- **WHEN** the user types an email and clicks Send
- **THEN** the email field is cleared

### Requirement: No ColorLib references

The system SHALL NOT contain any references to "colorlib" in app source files,
comments, or component code. Provenance lives only in the spec and TEMPLATES.md.

#### Scenario: Clean source code

- **WHEN** searching app source files for "colorlib"
- **THEN** no matches are found

## Verification checklist

- [ ] `npm run verify:app -- casepoint` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 19 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navigation header
      - Hero section
      - Practice Areas
      - About section
      - Contact form
      - Case Studies
      - CTA Banner
      - Team section
      - Testimonial section
      - Blog section
      - Footer
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
