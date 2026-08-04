# Template: Petcare (Pet Care Services Website)

## Purpose

Petcare is a multi-section pet-care services website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Petcare" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a red-and-navy pet-care landing page: hero with a "We
Care Your Pets." headline, three pet services, a stat counter strip, a
commitment/about block, a photo gallery, a call-CTA band, a team section,
recent blog posts, and a multi-column footer. Petcare follows the same
structure and adds the repo's standard dark-mode toggle and accessible
patterns. All imagery is recreated with seeded placeholder images (no assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Petcare" — free pet care services website template
  (source: https://colorlib.com/wp/template/petcare/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/petcare/`
  (HTTP 200) + `assets/css/style.css` (HTTP 200).
- **Structure (1:1, section order):**
  1. Header — nav: Home, About, Services, Blog, Contact + phone button
     "01654.066.456".
  2. Hero — h1 "We Care Your Pets." (slider), copy, CTA.
  3. Services — h2 "Best Pet Care Services"; three cards: Pet Boarding, Pet
     Treatment, Vaccinations (icon + copy + "Read More").
  4. Counters — stat strip (e.g. 354+) with labels.
  5. Commitment — h2 "We are commited for better service" (image + copy).
  6. Gallery — h2 "Pets Photo Gallery"; image grid.
  7. Call CTA band — "Any time you can call us!" + phone + "Contact Us"
     (original heading text is recycled ColorLib copy — paraphrase).
  8. Team — h2 "Our Team Mambers" (sic); three doctor cards (photo, name,
     role "Doctor").
  9. Blog — h2 "Our Recent Blog"; three posts (title, meta, excerpt).
  10. Footer — about blurb, Company / Services / Get in Touch columns,
      bottom bar.
- **Design tokens extracted from the stylesheet (`assets/css/style.css`):**
  - Brand colors: **#ff2121** (red — primary buttons/accents) and
    **#1f2b7b** (dark navy — headings/alt accents); multi-color icon palette
    **#4cd3e3**/**#f4e700**/**#38a4ff**/**#f44a40**.
  - Text/background: **#415094**/**#1f2b7b** (headings), **#999999**/
    **#a3a3a3** (muted), **#f9f9ff** / **#f0e9ff** (light sections), white
    sections.
  - Fonts: **"Muli"** (body) + **"Roboto"** (alt) via Google Fonts.
  - Buttons: filled red `btn` (rounded, uppercase) — `.header-btn` is a red
    pill (`border-radius: 30px`, `#ff2121`), `.white-btn` is white with red
    text (used on the navy call band).
- **Confirmed copy (from the live preview DOM):** header phone
  `01654.066.456`; hero CTA `Contact Now`; counters include `354+` with a
  "Successful Treatments" label; team members **Mike Janathon**, **Mike J
  Smith**, **Pule W Smith** (all role "Doctor"); blog posts **"Amazing Places
  To Visit In Summer"**, **"Developing Creativithout Losing Visual"**,
  **"Winter Photography Tips from Glenn"**; call band phone `+880 4664 216`;
  the call band's big heading in the original is recycled ColorLib copy
  ("World's Leading Law Consultency Agency !") — paraphrased to a pet-care
  message in this recreation.
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-brand` = `#ff2121`, navy `#1f2b7b` accent in `@theme`);
  placeholder images via `https://picsum.photos/seed/petcare-<n>/<w>/<h>`;
  icons from lucide-react; stat counters as static accessible numbers;
  repo-standard Footer chrome; social icons inline SVG; no assets copied.

Petcare lives in `apps/petcare` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Petcare", links
to the main sections, a phone number, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Petcare page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Petcare" and links to the main sections
- **AND** the navbar SHALL show a phone number and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "We Care Your
Pets." and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "We Care Your Pets."
- **AND** it SHALL show a supporting paragraph and a call-to-action button

### Requirement: Services section

The system SHALL render a services section titled "Best Pet Care Services"
with three cards: Pet Boarding, Pet Treatment, and Vaccinations.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Best Pet Care Services"
- **AND** it SHALL show the three service cards, each with an icon, title, and copy

### Requirement: Counters section

The system SHALL render a stat counters strip with at least two counters.

#### Scenario: Counter strip

- **GIVEN** the page is rendered
- **WHEN** the counters section is displayed
- **THEN** it SHALL show at least two stat counters

### Requirement: Commitment section

The system SHALL render a commitment section titled "We are commited for
better service" with an image and descriptive copy.

#### Scenario: Commitment content

- **GIVEN** the page is rendered
- **WHEN** the commitment section is displayed
- **THEN** it SHALL show the heading "We are commited for better service"
- **AND** it SHALL show an image with an accessible label and descriptive copy

### Requirement: Gallery section

The system SHALL render a "Pets Photo Gallery" section with a grid of at
least six images.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Pets Photo Gallery"
- **AND** it SHALL show at least six gallery images with accessible labels

### Requirement: Call CTA section

The system SHALL render a call-to-action band with "Any time you can call
us!", a phone number, and a "Contact Us" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call CTA section is displayed
- **THEN** it SHALL show the call-to-action text and a phone number
- **AND** it SHALL show a "Contact Us" button

### Requirement: Team section

The system SHALL render a team section titled "Our Team Mambers" with at
least three member cards, each with a photo, name, and role.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Team Mambers"
- **AND** it SHALL show at least three team member cards with names and roles

### Requirement: Blog section

The system SHALL render a blog section titled "Our Recent Blog" with at
least three posts, each with a title and an excerpt.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Our Recent Blog"
- **AND** it SHALL show at least three blog posts with titles

### Requirement: Footer

The system SHALL render a footer with an about blurb, link columns
(Company, Services, Get in Touch), and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Petcare" and an about blurb
- **AND** it SHALL show link columns and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Petcare app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Petcare — Pet Care Services Website Template"
