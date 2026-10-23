# Template: Snip (Barber Shop Landing)

## Purpose

Snip is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hairsalone" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light barber page with hot-pink accents and navy
headings: a photo slider hero ("Good Look Guaranteed" / "Experienced and
traditional stylish barber shop"), an about split with a framed photo, a
services row (Stylish hair cut, Cut & hair style, Color & hair wash), a
pricing list (Stylish hair cut, Hair color, Wedding style, Hair straight), a
two-member expert team, and a dark navy footer with useful links and
contact details. Snip recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hairsalone" — free barber shop website template
  (source: https://colorlib.com/wp/template/hairsalone/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hairsalone/`
  (HTTP 200, 27.6KB) + stylesheet `assets/css/style.css` (70.4KB). The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`hairsalone-free-template.jpg`) confirms the visual design (light
  sections, pink accents, navy headings, dark navy footer).
- **Section order (1:1):**
  1. Header: logo + nav (Home, Services, About, Blog, Blog Details,
     Element, Contact).
  2. Hero slider (`slider-area`): "Good Look Guaranteed" + "Experienced and
     traditional stylish barber shop" + "Book An Appointment" / "About Us"
     buttons; second slide "Connect with your dream style" + lead copy.
  3. About (`about-area section-padding2`): framed photo + copy.
  4. Categories (`categories-area bottom-padding`): "Our Services" section
     intro heading + copy.
  5. Services: "Our Services" + 3 icon cards (Stylish hair cut, Cut & hair
     style, Color & hair wash).
  6. Pricing (`pricing-area section-padding2`): "Pricing List" + priced rows
     (Stylish hair cut $40, Hair color, Wedding style, Hair straight).
  7. Team (`team-area section-padding`): "Expert Team" + member cards
     (Marvin Gardens, Tara Zona — Cutting Master) with social icons.
  8. Footer (`footer-area footer-bg`): logo + blurb, "Useful Links" (Design
     & creatives, Telecommunication, Restaurant, Programing, Architecture),
     "Contact us" (78/A, Green lane, Kings road, NYC-1989 ·
     finlone@gmail.com · +10 (87) 728 2870), social icons, copyright.
- **Design tokens extracted from `assets/css/style.css`:**
  - Brand color: **#FF4495** (hot pink — accents, buttons, hover).
  - Headings/nav: **#00044A** / **#140C40** (dark navy).
  - Light section backgrounds **#f9f9ff**, lavender **#f0e9ff**; footer dark
    navy (`footer-bg`).
  - Font: **"Rufina"** (serif headings) + **"Karla"** (sans body) via Google
    Fonts.
  - Buttons: pink filled, uppercase, small radius.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline and dual CTAs; about split with framed photo; services with
  lucide icons; pricing as priced rows; team cards with initials avatars and
  social icons; footer with contact details and social links; all images
  picsum-seeded (`picsum.photos/seed/snip-N/w/h`); Google Fonts via
  `<link>`.

Snip lives in `apps/snip` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Snip", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Snip page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Snip" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width hero slider with background images, a
level-1 headline per slide, and call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Experienced and traditional stylish barber shop")
- **AND** it SHALL show a call-to-action button ("Book An Appointment")

#### Scenario: Slide navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user presses the next-slide control
- **THEN** the displayed headline SHALL change to the following slide

### Requirement: About section

The system SHALL render an about section with a heading and supporting copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "About Us")
- **AND** it SHALL show at least one paragraph of copy

### Requirement: Services

The system SHALL render a services section with at least three icon cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render three service cards (Stylish hair cut, Cut & hair style, Color & hair wash)

### Requirement: Pricing

The system SHALL render a pricing list with at least three priced rows.

#### Scenario: Pricing rows

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing List"
- **AND** it SHALL render priced rows (Stylish hair cut, Hair color, Wedding style, Hair straight)

### Requirement: Expert team

The system SHALL render an expert team section with member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Expert Team"
- **AND** it SHALL render at least two member cards (Marvin Gardens, Tara Zona)

### Requirement: Footer

The system SHALL render a footer with the site name, useful links, contact
details, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Snip" and useful links
- **AND** it SHALL show contact details (address, email, phone)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Snip app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Snip — Barber Shop Template"

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
`apps/snip/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/snip/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Snip" and a "Home" link pointing to the page root
- [x] Hero slider — it SHALL show a level-1 headline (e.g. "Experienced and traditional stylish barber shop")
- [x] About section — it SHALL show a heading (e.g. "About Us")
- [x] Services — it SHALL show the heading "Our Services"
- [x] Pricing — it SHALL show the heading "Pricing List"
- [x] Expert team — it SHALL show the heading "Expert Team"
- [x] Footer — it SHALL show the site name "Snip" and useful links
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
