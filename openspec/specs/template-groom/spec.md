# Template: Groom (Barber Shop Landing)

## Purpose

Groom is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barcut" design (see TEMPLATES.md, Beauty category), built under
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light salon page with gold accents: a full-screen photo
slider hero ("For All Occasion HairStyle is a Must Try Fashion" + video play
button), an about split with a dashed-gold-bordered photo collage, a 4-card
services row ("What We Can Do for You"), a "Select Your Style" tab panel over
a background photo, a "We Have All Famous Barbers" team row, a photo-background
testimonial slider, a "Choose Your Package" pricing row ($79/$89/$99), a
"Latest From Blog" area, and a black footer with About Me / Newsletter /
Follow Me widgets. Groom recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barcut" — free barber/salon website template
  (source: https://colorlib.com/wp/template/barcut/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheet `css/main.css` (76.2KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`barcut-free-template.jpg`) confirms the visual design (white header with
  centered scissor logo, full-bleed barber photo hero, gold accents, serif
  headings).
- **Section order (1:1):**
  1. Header (`header-area`): centered logo; left links Home / about /
     barbers / gallery; right links pricing / barbers / gallery / pages
     dropdown / blog / contact.
  2. Hero slider (`home-banner-area`): 3-photo carousel (img/banner/b1..b3.jpg)
     with dark overlay, centered h1 "For All Occasion HairStyle is a Must Try
     Fashion", sub-copy, circular video play button + "Watch Intro Video".
  3. About (`about-area`): left content card — h1 "We Believe that Interior
     beauty Lasts Long", copy, `primary-btn` "Learn More"; right about photo;
     absolute small photo with `1px dashed #b89035` border at bottom-right.
  4. Services (`service-area`): "What We Can Do for You" + 4 image cards:
     Stylish Hair Cutting, Quality Gel Shave, Beard Trimming, Executive Wash.
  5. Catalogue (`catalogue-area`): background photo (`img/catalogue-bg.jpg`),
     white `tab-area` panel — "Select Your Style", "Shaveing" label, 4 icon
     tabs, each with copy + `view-btn` "View Gallery...".
  6. Team (`team-area`): "We Have All Famous Barbers" + 3 members: Peter Baker
     (Head hair Cut Specialist), Nancy Holmes (Spa & Makeup Specialist), Gavin
     Hansen (Hair Styling Expert).
  7. Testimonials (`testimonials-area`): background photo + black overlay
     (opacity .6), quote slider (Fanny Spencer ×4, identical quote) with
     thumbnail nav.
  8. Pricing (`price-area`): "Choose Your Package" + 3 cards on #f9f9f9:
     Basic / Premium / Luxury Hair Cut & Shave — $79.00 / $89.00 / $99.00,
     each "Standard Package", 5 features (Basic hair Cut, Basic Shave, Basic
     Head Wash, Basic Body Massage, Basic Snacks), `primary-btn price-btn`
     "Order Now".
  9. Blog (`blog-area`): "Latest From Blog" + 4 items (2×2): thumb, meta
     (13th Dec / 15 hearts / 04 comments), title "Portable Fashion for women",
     excerpt.
  10. Footer (`footer-area`): black background; About Me widget; Newsletter
      widget (email input + gold arrow sub-btn); Follow Me social (facebook,
      twitter, dribbble, behance); copyright line.
- **Design tokens extracted from `css/main.css`:**
  - Brand color: **#ba9236** (gold — 68 uses: nav hover, headings accents) +
    gradient partner **#fdc136**; dashed-border gold **#b89035**.
  - Buttons: `.primary-btn` = gold gradient
    `linear-gradient(90deg, #ba9236 0%, #fdc136 100%)`, uppercase text.
  - Section backgrounds: header **#fff**; hero full-bleed photo + overlay
    `rgba(0,0,0,0.3)`; about content card `rgba(255,255,255,0.8)`; catalogue
    photo bg + white panel; testimonials photo bg + black overlay (opacity
    .6); price cards **#f9f9f9**; footer **#000000**.
  - Fonts: **"Playfair Display"** (serif — headings) + **"Roboto"** (sans —
    body/nav) via Google Fonts.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo slider with
  the headline and a circular play button; about split with dashed-gold-border
  accent image; services with picsum image cards; catalogue tab panel (4 tabs,
  icon + copy + View Gallery link); team cards; testimonial band with quote +
  author; pricing cards with feature list + gold CTA; blog items with meta
  row; footer with About Me / Newsletter (success-state form) / Follow Me
  social links (inline SVG brand icons — lucide-react dropped brand icons);
  all images picsum-seeded (`picsum.photos/seed/groom-N/w/h`); Google Fonts
  via `<link>`.

Groom lives in `apps/groom` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Groom", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Groom page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Groom" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, sub-copy, and a video play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "For All Occasion HairStyle is a Must Try Fashion")
- **AND** it SHALL show supporting copy
- **AND** it SHALL show a circular play button labeled "Watch Intro Video"

### Requirement: About section

The system SHALL render an about section with a heading, supporting copy, a
"Learn More" button, and imagery.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "We Believe that Interior beauty Lasts Long")
- **AND** it SHALL show at least one lead paragraph and a "Learn More" button
- **AND** it SHALL show a main image with a smaller dashed-border accent image

### Requirement: Services grid

The system SHALL render a services section with a heading and four image
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What We Can Do for You"
- **AND** it SHALL render four service cards (Stylish Hair Cutting, Quality Gel Shave, Beard Trimming, Executive Wash)

### Requirement: Catalogue tabs

The system SHALL render a "Select Your Style" catalogue panel with tabbed
content over a background image.

#### Scenario: Catalogue content

- **GIVEN** the page is rendered
- **WHEN** the catalogue section is displayed
- **THEN** it SHALL show the heading "Select Your Style"
- **AND** it SHALL render tab buttons whose content includes copy and a "View Gallery..." link

### Requirement: Team

The system SHALL render a team section with a heading and three member cards.

#### Scenario: Team members

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "We Have All Famous Barbers"
- **AND** it SHALL render three member cards, each with a name and a role (e.g. Peter Baker — Head hair Cut Specialist)

### Requirement: Testimonials

The system SHALL render a testimonials section with a quote and an author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quote about the salon experience
- **AND** it SHALL show an author name (e.g. "Fanny Spencer")

### Requirement: Pricing

The system SHALL render a "Choose Your Package" section with three pricing
cards, each with a name, price, feature list, and an "Order Now" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose Your Package"
- **AND** it SHALL render three pricing cards (Basic / Premium / Luxury Hair Cut & Shave)
- **AND** each card SHALL show a price (e.g. $79.00) and an "Order Now" button

### Requirement: Blog

The system SHALL render a "Latest From Blog" section with at least two blog
items, each with an image, meta, title, and excerpt.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest From Blog"
- **AND** it SHALL render blog items with a meta row (date, likes, comments), a title, and an excerpt

### Requirement: Footer

The system SHALL render a footer with the site name, an About Me blurb, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Groom" and an About Me blurb
- **AND** it SHALL show a newsletter form with an email input and submit button
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

#### Scenario: Newsletter submit

- **GIVEN** the footer is rendered
- **WHEN** the user submits the newsletter form with a valid email
- **THEN** the form SHALL show a success message
- **AND** the email input SHALL no longer be present

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Groom app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Groom — Barber Shop Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- groom` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → about →
      services → catalogue → team → testimonials → pricing → blog → footer).
- [ ] Design tokens applied: gold brand #ba9236/#fdc136 gradient buttons,
      Playfair Display headings, Roboto body, dark footer, #f9f9f9 price cards.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Barcut), preview URL, tokens,
      and renames.
