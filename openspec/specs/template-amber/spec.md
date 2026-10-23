# Template: Amber (Barber Shop Landing)

## Purpose

Amber is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Barber" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light barber page with orange and gold accents: a hero
("Best Barber in your Town", "Professional Care", Opening Hour panel), an
"our service" row, an "Our Gallery" grid, a video band ("Watch the Video
How we Work?"), an "Our Cutter Masters" team (Macau Wilium, Dan Jacky,
Luka Luka, Rona Dana), a "How to Find Us" band (Location, Call Us, Mail
Us, Join With Us), and a dark footer with address, navigation links, a
newsletter form, and an appointment CTA. Amber recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "The Barber" — free barber shop website template
  (source: https://colorlib.com/wp/template/the-barber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/thebarber/`
  (HTTP 200, 34.9KB — the `the-barber` preview slug returns "Not Found",
  so the `thebarber` preview target hosts the rendered page) + stylesheet
  `css/style.css` (136.4KB). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`thebarber-free-template.jpg`) confirms the
  visual design (light sections, orange/gold accents, dark footer).
- **Section order (1:1):**
  1. Header (`header-area`): logo + nav (home, About, service, blog, blog
     single-blog, pages, elements, Contact) + "Make an Appointment" CTA.
  2. Hero (`slider_area`): "Best Barber in your Town" + "Professional
     Care" + "Opening Hour" panel (Mon-Fri 9.00-11.00, Sat 10.00-4.00).
  3. About (`about_area`): "Experienced and Traditional Stylish Barber
     Shop" + blurb + "Learn More" link.
  4. Services: "our service" + price-list cards (Men's Facial, Clean Cut,
     Close Shave, Razor Cut, Face Massage, Classic haircut, Haircut and
     shampoo, Hair treatment, Beard trimming, Beard and moustache — all
     $15) + "Make an Appointment" CTA.
  5. Gallery: "Our Gallery" + photo tiles.
  6. Video band (`video_area`): "Watch the Video How we Work?" + play
     button + "book now" CTA.
  7. Team: "Our Cutter Masters" + 4 member cards (Macau Wilium — Massage
     Master, Dan Jacky — Mens Cut, Luka Luka — Mens Cut, Rona Dana —
     Ladies Cut).
  8. Find us (`find_us_area`): "How to Find Us" — Location, Call Us, Mail
     Us, Join With Us cards + appointment form band.
  9. Footer: address, Navigation, Newsletter form ("Subscribe newsletter
     to get updates") + "Make an Appointment" CTA + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand colors: **#ff5e13** (orange) + **#BC9321** (gold) + dark brown
    **#4A3600**.
  - Light section backgrounds **#f9f9ff** / lavender **#f0e9ff**; footer
    dark brown.
  - Font: **"Playfair Display"** (serif headings) + **"Roboto"** (sans
    body) via Google Fonts.
  - Buttons: orange/gold filled, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name "Amber", Home
  link, dark-mode toggle) + "Make an Appointment" CTA; hero = seeded
  picsum photo with the headline and an Opening Hour panel; about section
  with photo + blurb; services as a price-list grid with lucide icons;
  gallery with seeded photo tiles; video band with play button; team cards
  with initials avatars; find-us band with icon cards; footer with
  newsletter form; all images picsum-seeded
  (`picsum.photos/seed/amber-N/w/h`); Google Fonts via `<link>`.

Amber lives in `apps/amber` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Amber", a
"Home" link, a "Make an Appointment" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Amber page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Amber" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button
- **AND** the navbar SHALL show a "Make an Appointment" link

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and an opening-hours panel.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Best Barber in your Town")
- **AND** it SHALL show an "Opening Hour" panel with weekday hours

### Requirement: About

The system SHALL render an about section with a heading, a blurb, and a
"Learn More" link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Experienced and Traditional Stylish Barber Shop"
- **AND** it SHALL show a "Learn More" link

### Requirement: Services

The system SHALL render an "our service" section with at least three service
price cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "our service"
- **AND** it SHALL render at least three service cards with a name and a price

### Requirement: Gallery

The system SHALL render an "Our Gallery" section with at least four photo
tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Our Gallery"
- **AND** it SHALL render at least four photo tiles

### Requirement: Video band

The system SHALL render a video band with a "Watch the Video How we Work?"
heading and a play button.

#### Scenario: Video content

- **GIVEN** the page is rendered
- **WHEN** the video band is displayed
- **THEN** it SHALL show the heading "Watch the Video How we Work?"
- **AND** it SHALL show a play button

### Requirement: Cutter masters team

The system SHALL render an "Our Cutter Masters" section with at least four
member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Cutter Masters"
- **AND** it SHALL render at least four member cards (Macau Wilium, Dan Jacky, Luka Luka, Rona Dana)

### Requirement: How to Find Us

The system SHALL render a "How to Find Us" section with contact cards.

#### Scenario: Find-us content

- **GIVEN** the page is rendered
- **WHEN** the find-us section is displayed
- **THEN** it SHALL show the heading "How to Find Us"
- **AND** it SHALL show Location, Call Us, Mail Us, and Join With Us cards

### Requirement: Footer

The system SHALL render a footer with the site name, navigation links, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Amber" and navigation links
- **AND** it SHALL show a newsletter form
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Amber app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Amber — Barber Shop Template"

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
`apps/amber/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/amber/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation bar — the navbar SHALL show the site name "Amber" and a "Home" link pointing to the page root
- [ ] Hero — it SHALL show a level-1 headline (e.g. "Best Barber in your Town")
- [ ] About — it SHALL show the heading "Experienced and Traditional Stylish Barber Shop"
- [ ] Services — it SHALL show the heading "our service"
- [ ] Gallery — it SHALL show the heading "Our Gallery"
- [ ] Video band — it SHALL show the heading "Watch the Video How we Work?"
- [ ] Cutter masters team — it SHALL show the heading "Our Cutter Masters"
- [ ] How to Find Us — it SHALL show the heading "How to Find Us"
- [ ] Footer — it SHALL show the site name "Amber" and navigation links
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
