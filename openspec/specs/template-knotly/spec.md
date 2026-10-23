# Template: Knotly (App Landing Page)

## Purpose

Knotly is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appli"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

The original design is a purple/indigo app-promo landing page: a full-bleed
purple→blue gradient hero ("Stay connected together in your own business
network"), an overlapping app-dashboard screenshot, a logo strip, six service
cards, two alternating about sections, a play-video band, customer
testimonials, a "Browse Job" CTA, and a dark multi-column footer. Knotly
recreates the structure and tokens and adds the repo's standard dark-mode
toggle and accessible patterns. All imagery is recreated with seeded
placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Appli" — free app landing template
  (source: https://colorlib.com/wp/template/appli/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/appli/`
  (HTTP 200) + stylesheet `assets/css/style.css` (HTTP 200, 55KB).
- **Structure (1:1, section order):**
  1. Header — transparent nav over the hero: Home, Features, About, FAQ,
     Blog, Contact + ghost pill "Log in".
  2. Hero (slider) — h1 "Stay connected together in your own business
     network", subcopy "Personalized experiences are proven to increase
     conversions…", big pill CTA "Get Started Now".
  3. Project screen — app dashboard mockup image overlapping the hero
     (`margin-top:-500px`).
  4. Brand area — bordered logo strip (8 client logos).
  5. Services — "Finally focus on my marketing strategy and delegate" + 6
     icon cards (icon in a 80px soft-shadow circle + h5 + blurb).
  6. About 1 (light bg) — icon badge, "You have the power to personalize
     your website coding.", copy, underlined "See how it work" link, image.
  7. About 2 (white, reversed) — "Personalized experiences are proven to
     increase conversions" + same link + image.
  8. Video band — background image + centered round play button (gradient).
  9. Testimonials — "Amazing customer review" + quote slides with founder
     name/role (Robart Brown — Creative designer).
  10. CTA — rounded wrapper ("Start finding your dream job") + pink pill
      button "Browse Job".
  11. Footer — dark navy; brand blurb + social circles (Twitter, Facebook,
      Pinterest); "Our solutions" / "Company" / "Support" link columns;
      copyright bottom bar.
- **Design tokens extracted from the stylesheet (`assets/css/style.css`):**
  - Brand primary: **#404DFF** (indigo — `.btn`, links, sticky header).
  - Hero/gradient band: **linear-gradient #c054ff → #5274ff** (purple →
    blue; verified by sampling `assets/img/hero/h1_hero.png` and
    `assets/img/gallery/section_bg02.png`).
  - CTA button: **#F067FF** (pink, `border-radius:30px`); play button
    gradient **#c054ff → #5274ff**; about icon badge **#CC51FF**.
  - Headings **#1D2547** (navy); muted body **#717b9b** / **#999999** /
    **#A5A7C5**; light sections **#f9f9ff** / **#f0e9ff**; footer **#1d2547**.
  - Fonts: **"Raleway"** (headings/buttons) + **"Muli"** (body) via Google
    Fonts.
  - Buttons: `.btn` — `background:#404DFF`, Raleway, `border-radius:30px`,
    padding 25px 38px (hero variant 30px 62px), hover sweep #AE59FF;
    `.border-btn` — ghost white pill `border-radius:30px`; `.all-btn` —
    underlined `#404DFF` text link.
  - Section rhythm: services `padding 130px`, testimonial `pt 100 / pb 160`,
    `section-padding40` = 120px.
- **Recreation decisions:** repo-standard Navbar chrome (dark-mode toggle)
  sits over the gradient hero; sections recreated with Tailwind tokens in
  `@theme` (`--color-primary-600: #404dff` indigo scale, purple/blue gradient
  stops, pink CTA, navy headings, Muli/Raleway fonts); placeholder images via
  `https://picsum.photos/seed/knotly-<n>/<w>/<h>`; icons from lucide-react
  (Palette, Phone, UtensilsCrossed, Code2, Building2, Camera, Sparkles,
  Quote, Play); brand social icons (X, Facebook, Pinterest) as inline SVG
  paths (lucide-react removed brand icons); no assets copied.

Knotly lives in `apps/knotly` and uses shared components from `packages/ui`
(ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar over the hero with the site name
"Knotly", links to the main sections (Home, Features, About, FAQ, Blog,
Contact), a "Log in" button, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Knotly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Knotly" and links to the main sections
- **AND** the navbar SHALL show a "Log in" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width purple-to-blue gradient hero with a
headline, supporting copy, and a "Get Started Now" call-to-action button,
followed by an overlapping app-dashboard placeholder image.

#### Scenario: Hero content

- **GIVEN** the Knotly page is rendered
- **WHEN** the user views the top of the page
- **THEN** the hero SHALL show the headline "Stay connected together in your own business network"
- **AND** the hero SHALL show supporting copy about personalized experiences
- **AND** the hero SHALL show a "Get Started Now" link styled as a rounded primary button
- **AND** the dashboard screenshot image SHALL render below the hero

### Requirement: Brand strip

The system SHALL render a bordered strip of client wordmarks below the hero.

#### Scenario: Brand strip content

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls past the hero
- **THEN** a strip of six client wordmarks SHALL be visible with a top border

### Requirement: Services

The system SHALL render a "Finally focus on my marketing strategy and
delegate" section with a 3×2 grid of six service cards, each with an icon,
title, and description.

#### Scenario: Services grid

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls to the services section
- **THEN** the section SHALL show the heading and its supporting paragraph
- **AND** the section SHALL show six cards, each with an icon, a title, and a description

### Requirement: About sections

The system SHALL render two alternating about sections, each with an icon
badge, a heading, copy, a "See how it work" link, and an image.

#### Scenario: First about section

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls to the first about section
- **THEN** the section SHALL show the heading "You have the power to personalize your website coding."
- **AND** the section SHALL show the "See how it work" link and an image

#### Scenario: Second about section

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls to the second about section
- **THEN** the section SHALL show the heading "Personalized experiences are proven to increase conversions"
- **AND** the layout SHALL alternate (image on the left, copy on the right)

### Requirement: Video band

The system SHALL render a play-video band with a centered round gradient play
button.

#### Scenario: Video play button

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls to the video band
- **THEN** a play button with the accessible label "Play video" SHALL be visible

### Requirement: Testimonials

The system SHALL render an "Amazing customer review" section with at least
two customer quotes, each with a founder name and role.

#### Scenario: Testimonial cards

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls to the testimonials section
- **THEN** the section SHALL show the heading and its supporting paragraph
- **AND** the section SHALL show two quotes, each with a name and a role

### Requirement: CTA band

The system SHALL render a rounded gradient CTA band with the heading "Start
finding your dream job", supporting copy, and a "Browse Job" button.

#### Scenario: CTA content

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls to the CTA band
- **THEN** the band SHALL show the heading, copy, and a "Browse Job" button

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, social links (X,
Facebook, Pinterest), three link columns ("Our solutions", "Company",
"Support"), and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Knotly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show the brand blurb and three social links
- **AND** the footer SHALL show the "Our solutions", "Company", and "Support" link columns
- **AND** the footer SHALL show the copyright line

### Requirement: Page composition

The system SHALL compose all sections in the documented order with the
document title "Knotly — App Landing Page Template".

#### Scenario: Full page composition

- **GIVEN** the Knotly page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Knotly — App Landing Page Template"
- **AND** the page SHALL contain a banner, a main landmark with every section, and a contentinfo landmark

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
`apps/knotly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/knotly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Knotly" and links to the main sections
- [x] Hero — the hero SHALL show the headline "Stay connected together in your own business network"
- [ ] Brand strip — a strip of six client wordmarks SHALL be visible with a top border
- [ ] Services — the section SHALL show the heading and its supporting paragraph
- [x] About sections — the section SHALL show the heading "You have the power to personalize your website coding."
- [x] Video band — a play button with the accessible label "Play video" SHALL be visible
- [ ] Testimonials — the section SHALL show the heading and its supporting paragraph
- [x] CTA band — the band SHALL show the heading, copy, and a "Browse Job" button
- [ ] Footer — the footer SHALL show the brand blurb and three social links
- [x] Page composition — the document title SHALL be "Knotly — App Landing Page Template"
