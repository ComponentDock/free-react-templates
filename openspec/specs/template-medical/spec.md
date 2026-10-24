# Template: Medical (Healthcare Landing)

## Purpose

Medical is a single-page healthcare template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Medical" design
(`https://colorlib.com/wp/template/medical/`, preview
`https://preview.colorlib.com/theme/medical/`), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source design:** ColorLib "Medical" — https://colorlib.com/wp/template/medical/

> **Provenance correction (2026-10-24f, `verify-spec-row-mismatch.py`).** This
> spec named ColorLib "Medical Wordpress Themes" — a round-up article with no
> demo of its own (`colorlib.com/wp/template/medical-wordpress-themes/` has no
> `preview…/theme/` twin and no catalog entry). The design the app recreates,
> and the design on the row that links it, is `medical`. The live DOM, the
> token table below and the section order were already measured from
> `/theme/medical/`; only the provenance name was wrong. The folder equals the
> source slug, so the naming audit reports this app as a rule-5 rename
> candidate (`docs/spec-row-mismatch.md`).

The original is a green-accented medical page: a banner ("We Care for Your
Health Every Moment"), a servicing-hours / appointment band ("Book an
Appointment"), a facilities section ("Our Latest Facilities": 24/7
Emergency, Intensive Care, Family Planning), an offered-services section
(Cardiac Treatment, Routine Checkup, Departments), a consultants team
("Our Consultants": Andy Florence), a client feedback band ("Enjoy our
Client's Feedback": Fannie Rowe), a recent-blogs row ("Portable Fashion for
women", "Summer ware are coming"), and a footer with Top Products / Contact
Us / Newsletter columns. Medical recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Medical" — free medical website template
  (source: https://colorlib.com/wp/template/medical/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/medical/`
  (HTTP 200, 35.0 KB) + stylesheet `css/main.css` (69.5 KB); brand green
  `#69be00`, ink `#222222`, muted `#777777`, paper `#f9f9ff`, Poppins. The
  round-up slug this spec used to cite
  (`https://preview.colorlib.com/theme/medical-wordpress-themes/`) 404s and has
  no catalog entry. The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`medical-website-templates.jpg`) confirms the visual design
  (light sections, green accents).
- **Section order (1:1):**
  1. Banner (`banner-area relative`): "We Care for Your Health Every
     Moment".
  2. Appointment (`appointment-area`): "Servicing Hours" / "Book an
     Appointment".
  3. Facilities (`facilities-area section-gap`): "Our Latest Facilities" +
     3 cards (24/7 Emergency, Intensive Care, Family Planning).
  4. Services (`offered-service-area section-gap`): "Our Offered Services"
     - cards (Cardiac Treatment, Routine Checkup, Departments).
  5. Team (`team-area section-gap`): "Our Consultants" + consultant cards
     (Andy Florence).
  6. Feedback (`feedback-area section-gap relative`): "Enjoy our Client's
     Feedback" + testimonial cards (Fannie Rowe).
  7. Brands (`brands-area`): logo strip.
  8. Blog (`recent-blog-area section-gap`): "Our Recent Blogs" + post
     cards ("Portable Fashion for women", "Summer ware are coming").
  9. Footer (`footer-area section-gap`): Top Products / Contact Us /
     Newsletter columns.
- **Design tokens extracted from `css/main.css`:**
  - Brand color: **#69be00** (green — accents, buttons, headings) + dark
    **#222222** text; light **#f9f9ff** section backgrounds.
  - Font: **"Poppins"** (sans — headings/body) via Google Fonts.
  - Buttons: green filled, uppercase; FontAwesome icons.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; banner = seeded picsum photo + headline;
  appointment band; facilities cards; services with lucide icons; consultant
  cards with initials avatars; feedback band; blog cards with seeded photos;
  footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/medical-N/w/h`); Google Fonts via `<link>`.

Medical lives in `apps/medical` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Medical", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Medical page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Medical" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Banner hero

The system SHALL render a banner section with a level-1 headline.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "We Care for Your Health Every Moment")

### Requirement: Appointment band

The system SHALL render an appointment band with a "Book an Appointment"
call-to-action.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment band is displayed
- **THEN** it SHALL show the heading "Servicing Hours"
- **AND** it SHALL show a "Book an Appointment" button

### Requirement: Facilities

The system SHALL render an "Our Latest Facilities" section with at least
three cards.

#### Scenario: Facility cards

- **GIVEN** the page is rendered
- **WHEN** the facilities section is displayed
- **THEN** it SHALL show the heading "Our Latest Facilities"
- **AND** it SHALL render three cards (24/7 Emergency, Intensive Care, Family Planning)

### Requirement: Offered services

The system SHALL render an "Our Offered Services" section with service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Offered Services"
- **AND** it SHALL render service cards (Cardiac Treatment, Routine Checkup, Departments)

### Requirement: Consultants

The system SHALL render an "Our Consultants" section with at least one
consultant card.

#### Scenario: Consultant content

- **GIVEN** the page is rendered
- **WHEN** the consultants section is displayed
- **THEN** it SHALL show the heading "Our Consultants"
- **AND** it SHALL render at least one consultant card (Andy Florence)

### Requirement: Client feedback

The system SHALL render an "Enjoy our Client's Feedback" band with at least
one testimonial card.

#### Scenario: Feedback content

- **GIVEN** the page is rendered
- **WHEN** the feedback band is displayed
- **THEN** it SHALL show the heading "Enjoy our Client's Feedback"
- **AND** it SHALL render at least one testimonial card (Fannie Rowe)

### Requirement: Recent blogs

The system SHALL render an "Our Recent Blogs" section with at least two post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Our Recent Blogs"
- **AND** it SHALL render at least two post cards

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Medical"
- **AND** it SHALL show link columns (Top Products, Contact Us, Newsletter)

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/medical/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/medical/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Medical" and a "Home" link pointing to the page root
- [x] Banner hero — it SHALL show a level-1 headline (e.g. "We Care for Your Health Every Moment")
- [x] Appointment band — it SHALL show the heading "Servicing Hours"
- [x] Facilities — it SHALL show the heading "Our Latest Facilities"
- [x] Offered services — it SHALL show the heading "Our Offered Services"
- [x] Consultants — it SHALL show the heading "Our Consultants"
- [ ] Client feedback — it SHALL show the heading "Enjoy our Client's Feedback"
- [x] Recent blogs — it SHALL show the heading "Our Recent Blogs"
- [x] Footer — it SHALL show the site name "Medical"
