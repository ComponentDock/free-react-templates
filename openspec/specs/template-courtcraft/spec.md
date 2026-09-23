# Template: Courtcraft (Law Firm / Attorney Website Template)

## Purpose

Courtcraft is a single-page law firm / attorney website landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lawmaker" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Lawmaker" — professional law-firm one-pager with
  hero slider, statistics counter, services grid, CTA parallax banner,
  client testimonials, contact form, blog posts, attorney team grid,
  and a multi-column footer. Source: https://colorlib.com/wp/template/lawmaker/
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lawmaker/
  (HTTP 200, 27,335-byte HTML fetched; `css/style.css` 29,141 bytes parsed
  for tokens). Bootstrap-based layout (FlexSlider for hero, Flaticon icon
  font, animate.css for scroll animations); no Tailwind in the source.
  Brand in the preview: "Lawmaker" (logo text).
- **Screenshot analyzed:** `lawmaker-free-template.jpg` (TEMPLATES.md) —
  dark blue/navy hero with legal imagery, bold white headline, blue CTA
  button; below on white: intro section with text + image; statistics
  parallax section; services grid; testimonials; contact form; blog;
  attorney cards; footer. Professional, modern law-firm aesthetic with
  blue brand color.
- **Section order (1:1):** Navbar (`nav.ftco-nav`): "Lawmaker" logo text
  left, menu right — Home (active) / Practice Areas / Won Cases / Gallery /
  Blog (dropdown: Sub Menu 1–4) / About / Contact; mobile burger toggle →
  Hero slider (`aside#ftco-hero.js-fullheight`, FlexSlider with 3 slides,
  each `background-image`, dark overlay-gradient): centered text —
  h1 "Defend Your Constitutional Right with Legal Help", h2 "Visit
  Colorlib..." (paraphrase this away), CTA button `.btn.btn-primary.btn-lg`
  → Statistics counter (`div#ftco-counter.ftco-counters`, parallax
  background-image, dark overlay `rgba(0,0,0,0.7)`): 4-column row —
  lawyer icon 2893 "Our Lawyer", courthouse icon 291 "Our Clients", scales
  icon 952 "Successful Case", badge icon 1921 "Honor & Awards" → Content
  section (`div#ftco-content`): left video thumbnail with play button
  (parallax bg-image), right text — h2 "Far far away..." (heading),
  paragraph, "Learn More" link; below: "Practice Area" heading with
  intro paragraph + 6 service cards (2×3 grid): each card has icon,
  h3 title (Real Estate Law / Insurance Law / Business Law / Personal
  Injury / Medical Negligence / Criminal Defense), paragraph description;
  "View More" button → CTA parallax banner (`div#ftco-started`,
  parallax bg-image, dark overlay): centered h2 "Far far away...",
  paragraph, "Consultation" `.btn.btn-primary.btn-lg` button →
  Testimonials (`div#ftco-testimonial.ftco-bg-section`): centered
  heading "What are the clients says" (sic), carousel/slider with
  3 client quotes (Carl Smith, John Lockwood, Joyce Kroell) each with
  avatar + quote text → Contact form (`div#ftco-consult`): left video
  bg-image with dark overlay, right side form heading "Free Legal Advice"
  with form fields (First Name, Last Name, Email, Subject, Message) and
  Submit button → Blog posts (`div#ftco-blog`): centered heading
  "Recent Post" + paragraph, 3-column grid of blog cards (image + h2
  title + meta date/comments + paragraph) → Attorneys team
  (`div#ftco-about`): centered heading "Our Attorneys" + paragraph,
  3-column grid of attorney cards (image + name + role/paragraph) →
  Intro banner (`div#ftco-intro`): 3-column banner — "Need Legal Services?"
  + paragraph, "Call now (+1) 123-456-7890" + email, "Need Legal Services?"
  + "Consultation" button → Footer (`footer#ftco-footer`): 4-column
  widgets — "Lawfirm" blurb, Navigation links, Contact Information,
  Opening Hours; copyright bar at bottom.
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand blue: **#2f89fc** (primary brand color, used for links, buttons,
    hover states). Also **#3f52e3** as a secondary/deeper blue for
    `btn-primary` background. Hover: **#2f89fc**.
  - Text: **#000** (headings), **#fff** (on dark backgrounds), **#828282**
    (body/muted), **rgba(255,255,255,0.7)** (overlay text).
  - Overlay: **rgba(0,0,0,0.7)** (hero/counter overlays),
    **rgba(0,0,0,0.5)** (content overlay), **rgba(0,0,0,0.4)** (consult
    overlay).
  - Background: **#fff** (body, cards), sections use parallax background
    images with dark overlays.
  - Fonts: **"Work Sans"** (sans-serif, 400 weight — used everywhere for
    body, headings, nav). Source embeds via Google Fonts.
  - Buttons: `.btn` — border-radius **4px**, padding varies by size
    (`.btn-lg` = large). `.btn-primary` — bg **#3f52e3**, color **#fff**,
    hover **#2f89fc**. Clean, slightly rounded rectangle style.
  - Icons: Flaticon icon font (lawyer-1, courthouse, libra/scales,
    police-badge glyphs) — replace with `lucide-react` equivalents.
  - Sections: vertical rhythm via 7em 0 padding (blog, testimonial, about,
    footer, intro); parallax background images with `data-stellar-background-ratio`.
  - Stats counter: icon + animated number + label, white text on dark
    overlay bg-image.
  - Footer: 4-column grid, white bg, widget headings h4, `.ftco-footer-links`
    unordered lists; copyright bar centered.
- **Recreation decisions:** hero/parallax/counter bg-images → seeded picsum
  (`courtcraft-hero-1..3`, `courtcraft-counter`, `courtcraft-cta`,
  `courtcraft-consult`, `courtcraft-intro`); attorney/team photos → seeded
  picsum (`courtcraft-attorney-1..3`); blog images → seeded picsum
  (`courtcraft-blog-1..3`); Flaticon icons → `lucide-react` equivalents
  (Scale for lawyer, Building for courthouse, Scale⚖ for libra,
  Shield for badge); fonts Work Sans via Google Fonts `<link>` in
  `index.html`; tokens `#2f89fc` / `#3f52e3` / `#828282` / `#000` /
  `#fff` in `@theme`.

Courtcraft lives in `apps/courtcraft` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Header + navigation

The system SHALL render a navbar with the brand logo on the left and a nav
menu on the right; on mobile the menu SHALL be reachable via a burger toggle.

#### Scenario: Header content

- **GIVEN** the Courtcraft page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Courtcraft" on the left in Work Sans
- **AND** the header SHALL show the nav links Home, Practice Areas, Won Cases,
  Blog (with dropdown), About, and Contact
- **AND** the Home link SHALL be marked active

#### Scenario: Blog dropdown

- **GIVEN** the header is rendered on a wide viewport
- **WHEN** the user hovers or activates the "Blog" link
- **THEN** a dropdown SHALL open with submenu items (e.g. Sub Menu 1–4)

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user activates the burger toggle
- **THEN** the nav links SHALL be reachable via a collapsible drawer with
  aria-expanded toggled

### Requirement: Hero slider

The system SHALL render a full-width hero with a background-image slider,
dark overlay gradient, centered headline, and CTA button.

#### Scenario: Hero content

- **GIVEN** the hero slider is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the width with a full-height background image
  (seeded picsum) and a dark overlay gradient
- **AND** it SHALL show the headline "Defend Your Constitutional Right with
  Legal Help" in white, centered
- **AND** it SHALL show a primary CTA button (blue, large) below the headline
- **AND** it SHALL cycle through 3 slides automatically (FlexSlider-style)

### Requirement: Statistics counter

The system SHALL render a statistics section with 4 counters over a parallax
background image.

#### Scenario: Counter values

- **GIVEN** the statistics section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display 4 counters in a row: "Our Lawyer" (2893),
  "Our Clients" (291), "Successful Case" (952), "Honor & Awards" (1921)
- **AND** each counter SHALL have a relevant icon above it (lucide-react:
  Scale, Building2, Scale⚖, Shield)
- **AND** the section SHALL have a dark overlay (rgba(0,0,0,0.7)) over a
  parallax background image
- **AND** the numbers SHALL animate counting up from 0

### Requirement: Services / Practice Areas

The system SHALL render a content section with a video/image block, a heading,
and a 6-card grid of practice areas.

#### Scenario: Section heading

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a heading "Welcome To Our Legal Office" with
  introductory text
- **AND** it SHALL show a "Learn More" link

#### Scenario: Practice area cards

- **GIVEN** the services grid is rendered
- **WHEN** the page loads
- **THEN** it SHALL show 6 practice area cards in a 2×3 grid
- **AND** each card SHALL have an icon, a title (Real Estate Law, Insurance
  Law, Business Law, Personal Injury, Medical Negligence, Criminal Defense),
  and a description paragraph
- **AND** a "View More" button SHALL appear below the grid

### Requirement: CTA parallax banner

The system SHALL render a call-to-action section with a parallax background
image, heading, text, and a large button.

#### Scenario: CTA content

- **GIVEN** the CTA banner is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a parallax background image with dark overlay
- **AND** it SHALL show a centered heading and paragraph
- **AND** it SHALL show a "Consultation" primary button (blue, large)

### Requirement: Testimonials

The system SHALL render a testimonials section with client quotes in a
carousel.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "What Our Clients Say"
- **AND** it SHALL display at least 3 client testimonials, each with an avatar,
  client name, and quoted text
- **AND** the testimonials SHALL be navigable via carousel controls

### Requirement: Contact form

The system SHALL render a contact section with a form on the right and a
background image on the left.

#### Scenario: Contact form fields

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a heading "Free Legal Advice"
- **AND** it SHALL show a form with fields: First Name, Last Name, Email,
  Subject, Message (textarea)
- **AND** a "Send Message" submit button SHALL be present

### Requirement: Blog posts

The system SHALL render a blog section with a heading and a 3-column grid
of blog post cards.

#### Scenario: Blog content

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show the heading "Recent Post" with a subtitle paragraph
- **AND** it SHALL display 3 blog cards in a row, each with a thumbnail image
  (seeded picsum), a title, meta info (date + comments count), and a
  short description

### Requirement: Attorney team

The system SHALL render an attorney team section with a heading and a
3-column grid of attorney cards.

#### Scenario: Attorney cards

- **GIVEN** the attorney section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show the heading "Our Attorneys" with a subtitle paragraph
- **AND** it SHALL display 3 attorney cards in a row, each with a photo
  (seeded picsum), name, and role/description

### Requirement: Intro banner

The system SHALL render a 3-column intro banner with contact info and a
CTA button.

#### Scenario: Intro banner content

- **GIVEN** the intro banner is rendered
- **WHEN** the page loads
- **THEN** it SHALL show 3 columns: "Need Legal Services?" with description,
  "Call now (+1) 123-456-7890" with email, and "Need Legal Services?" with
  a "Consultation" button

### Requirement: Footer

The system SHALL render a footer with 4 widget columns and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** it SHALL show 4 columns: brand blurb ("Courtcraft"), Navigation
  links, Contact Information (address, phone, email), and Opening Hours
- **AND** a copyright bar SHALL appear at the bottom

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the user inspects the footer
- **THEN** a link to https://www.componentdock.com/ SHALL be present
  (branded "Component Dock")

### Requirement: Design tokens and theme

The system SHALL use the extracted design tokens in a Tailwind `@theme` block.

#### Scenario: Brand color in theme

- **GIVEN** the template's index.css is loaded
- **WHEN** the Tailwind theme is configured
- **THEN** the `@theme` block SHALL define `--color-brand: #2f89fc` (primary blue)
- **AND** `--color-brand-dark: #3f52e3` (darker blue for button bg)
- **AND** `--color-text-muted: #828282`
- **AND** the font family SHALL be "Work Sans" via Google Fonts

### Requirement: Footer compliance

The system SHALL NOT reference ColorLib anywhere in the app code (source
files, comments, data, CSS token notes). Provenance lives only in the spec
and TEMPLATES.md.

#### Scenario: No ColorLib references in app

- **GIVEN** the courtcraft app source is inspected
- **WHEN** any file under `apps/courtcraft/src/` is searched
- **THEN** no file SHALL contain the strings "colorlib" or "ColorLib" or
  "preview.colorlib.com"
