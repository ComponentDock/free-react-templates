# Template: Rafter (Architecture Template)

## Purpose

Rafter is a single-page architecture & furniture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Woodrox" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Woodrox" — architecture template
  (source: https://colorlib.com/wp/template/woodrox/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/woodrox/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`woodrox-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Pages, Project, Blog,
  Contact) → Hero ("Precise concept design for stylish living" + Get
  Started) → Furniture ("Most Popular Furnitures" + Green Butter Sofa cards)
  → Projects ("Alex Complex for esidence" gallery) → Features ("Some
  Features that Made us Unique" + 6 feature cards) → Blog ("Recent Posts
  from our blog" + 3 post cards) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#faba00`** (buttons, accents); dark `#222222`
    (footer, headings).
  - Light backgrounds `#f9f9ff` (furniture area, feature chips, blog
    button); body text `#777777`.
  - Fonts: **"Roboto"** (body) + **"Heebo"** (display).
  - `.main_btn`: `background: #faba00`, white text, `border-radius: 0`,
    padding `0 35px`, line-height 38px, Heebo 13px/500; hover: transparent
    bg + yellow text.
  - `.blog_btn`: `border: 1px solid #eeeeee`, `background: #f9f9ff`,
    `color: #222222`; hover: `#faba00` bg + white text.
  - `.feature_item`: `background: #f9f9ff`, `border-radius: 10px`, padding
    `40px 60px 40px 40px`.
  - Hero: full-width background image with dark overlay.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/rafter-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied. Nav/hero/feature/service copy paraphrased but same kinds
  of content.

Rafter lives in `apps/rafter` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#faba00` | live sheet paints it ×50 — `background` on `.header_area .navbar .nav .nav-item.submenu ul .nav-item:hover .nav-link`; style.css (66,690 B, sha256 6066da362eac) · <https://preview.colorlib.com/theme/woodrox/> |
| Surface (measured) | `#f8b600` | paints it ×19 — `background` on `.genric-btn.primary`; style.css (66,690 B, sha256 6066da362eac) · <https://preview.colorlib.com/theme/woodrox/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Rafter",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Rafter page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Rafter" and links to Home, About, Projects, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get
Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Get Started" button

### Requirement: Furniture section

The system SHALL render a furniture section with a heading and product
cards.

#### Scenario: Furniture content

- **GIVEN** the page is rendered
- **WHEN** the furniture section is displayed
- **THEN** it SHALL contain a heading "Most Popular Furnitures"
- **AND** it SHALL show at least three product cards with images and titles

### Requirement: Projects section

The system SHALL render a projects section with a project gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions

### Requirement: Features section

The system SHALL render a features section with a heading and six feature
cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Some Features that Made us Unique"
- **AND** it SHALL show six feature cards with titles and descriptions

### Requirement: Blog section

The system SHALL render a blog section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent Posts from our blog"
- **AND** it SHALL show at least three post cards with category, date, and a "Read Details" link

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Rafter app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Rafter — Architecture Template"

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
`apps/rafter/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/rafter/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Rafter" and links to Home, About, Projects, Blog, and Contact
- [ ] Hero section — it SHALL contain a level-1 heading
- [x] Furniture section — it SHALL contain a heading "Most Popular Furnitures"
- [ ] Projects section — it SHALL show at least three project images with captions
- [x] Features section — it SHALL contain a heading "Some Features that Made us Unique"
- [x] Blog section — it SHALL contain a heading "Recent Posts from our blog"
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
