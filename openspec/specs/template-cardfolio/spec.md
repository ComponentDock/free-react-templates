# Template: Cardfolio (Personal vCard / Portfolio)

## Purpose

Cardfolio is a personal vCard / portfolio single-page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Noah" free template (source:
https://colorlib.com/wp/template/noah/), built under a DIFFERENT name
(**Cardfolio**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 3 + jQuery personal vCard site with an Owl
Carousel, Magnific Popup gallery, Waypoints scroll animations, and a
slide-out nav. The live preview at
https://preview.colorlib.com/theme/noah/ renders a single-page layout with:
sticky header with logo, about section (carousel images + bio text + social
icons + CTA button), services section (4 service cards in a 2-col grid with
a side image), works/portfolio section (4 full-width project entries with
background images + overlay titles + descriptions), blog section (3-card
Owl Carousel with image + overlay + date/title/description), testimonials
section (Owl Carousel with blockquotes), and a 3-column footer (contact +
latest blog entries + newsletter form).

## Naming

The ColorLib source name "Noah" is FORBIDDEN as the app name. **Cardfolio**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name (verified: zero hits for `cardfolio` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`). It reflects the personal card/vCard
+ portfolio nature of the template. Source slug: `noah`. Preview URL:
https://preview.colorlib.com/theme/noah/

## Design reference (replication findings)

- **Original:** ColorLib "Noah" (page title: "Noah Template"). Listed in
  TEMPLATES.md as a personal vcard website template. Source:
  https://colorlib.com/wp/template/noah/
- **Live preview — REACHABLE (verified):**
  https://preview.colorlib.com/theme/noah/ returns HTML (543 lines,
  `<title>Noah Template</title>`). Stylesheets: `css/animate.css`,
  `css/icomoon.css`, `css/bootstrap.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/magnific-popup.css`, `css/style.css`
  (1,157 lines — ALL custom styling). Scripts: jQuery, jQuery Easing,
  Bootstrap JS, Waypoints, Owl Carousel, Magnific Popup, main.js.
  Fonts loaded via inline @font-face: **Karla** (400, 700) and **Playfair
  Display** (400, 400i) — both from Cloudflare Fonts CDN.
- **Live DOM structure (from fetched HTML + CSS):**
  - `body` → slide-out `nav#colorlib-main-nav` (hidden by default, toggled
    by `.js-colorlib-nav-toggle`): full-height overlay with search input,
    nav links (Home, Services, Work, Blog, About, Contact), and 4 gallery
    thumbnail links (work-1 through work-4).
  - `div#colorlib-page` →
    - `header` — sticky top bar: container → row → `.colorlib-navbar-brand`
      with logo text "Noah" (split into two spans, likely different font
      weights) + hamburger toggle.
    - `div#colorlib-about` — About section: centered heading "About",
      left column (5/12) with Owl Carousel of about images, right column
      (6/12, push-1) with Owl Carousel of name/title headings ("Noah
      Henderson" / "I'm A Designer"), bio text paragraph, social icons
      row (Facebook, Twitter, Google+, Dribbble via icomoon), and
      "Contact Me!" outlined button.
    - `div#colorlib-services` — Services section: centered heading
      "Services", intro text "My Services" / "Here Are Some of My Skills",
      4 service cards in 2-column grid: (1) Graphic Design, (2)
      Illustration, (3) Front End Development, (4) Web Marketing — each
      with a numbered heading and bullet list. Side image panel
      (services-img-1.jpg).
    - `div#colorlib-work` — Works/Portfolio section: centered heading
      "Works", intro "Portfolio" / "Done Projects", 4 full-width project
      entries each with: background image link (work-1 through work-4),
      overlay title on hover ("Pursuing Best", "Coordinates", "Cristall",
      "Black"), centered description paragraph below, "View details" link.
    - `div#colorlib-blog` — Blog section: centered heading "Blog", intro
      "Blog" / "Read Our Case", Owl Carousel of 3 blog cards: each with
      image, dark overlay, "Read more" link, date, title ("A Japanese
      Constellation"), excerpt.
    - `div#colorlib-testimony` — Testimonials: centered heading
      "Testimonies", intro "Testimonies" / "Clients Says", Owl Carousel
      of 3 blockquotes with attribution (George Brooks, Daniel Foster,
      Liam Jenkins).
    - `footer` — 3-column: "Let's Talk" (contact + social icons), "Latest
      Blog" (3 mini-entry items with thumbnail + date + title),
      "Newsletter" (text + email input + Subscribe button). Copyright
      line at bottom.

## Design tokens

| Token               | Value                                  | Notes                                                             |
| ------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| `--color-primary`   | `#CA82F8`                              | Brand purple — buttons, accent highlights                         |
| `--color-primary-hover` | `#d49af9`                          | Hover state for primary buttons                                   |
| `--color-gold`      | `#fdba04`                              | Secondary accent (sparingly used)                                 |
| `--color-pink`      | `#ed687c`                              | Tertiary accent                                                   |
| `--color-teal`      | `#1abc9c`                              | Accent (used sparingly)                                           |
| `--color-blue`      | `#049dff`                              | Accent link color                                                 |
| `--color-warm-bg`   | `#FFE9E3`                              | Warm pink background (newsletter / footer area)                   |
| `--color-ink`       | `#333333`                              | Body text                                                         |
| `--color-muted`     | `#4d4d4d`                              | Secondary text                                                    |
| `--color-bg`        | `#fff`                                 | Page / section default background                                 |
| `--color-bg-alt`    | `#fafafa`                              | Alternate section background                                      |
| `--color-line`      | `#d9d9d9`                              | Border/separator                                                  |
| `--color-grey`      | `#b7c2c2`                              | Grey background elements                                          |
| `--color-black`     | `#000`                                 | Dark overlays, dark section backgrounds                           |
| `--font-heading`    | 'Playfair Display', serif              | Google Fonts 400, 400i — headings and logo                        |
| `--font-body`       | 'Karla', sans-serif                    | Google Fonts 400, 700 — body text and UI                          |
| `--btn-radius`      | 30px (rounded-pill)                    | `.btn` border-radius                                              |
| `--btn-primary`     | `#CA82F8` bg, `#fff` text, 2px solid `#CA82F8` | Primary button style                                      |
| `--btn-outline`     | transparent bg, `#4d4d4d` text, 1px solid `#d9d9d9` | Outlined button style (Contact Me!)                   |

## Requirements

### Requirement: Page shell

The system SHALL render a single-page personal vCard / portfolio layout
with a sticky header, slide-out navigation, and six content sections in
order: About, Services, Works, Blog, Testimonials, Footer.

#### Scenario: Desktop layout

- **GIVEN** the Cardfolio app is rendered on a desktop viewport
- **THEN** the page SHALL display a sticky header with the "Cardfolio"
  logo text and a hamburger toggle
- **AND** the sections SHALL render in order: About → Services → Works →
  Blog → Testimonials → Footer
- **AND** the body font SHALL be Karla (400, 700 from Google Fonts) and
  the heading font SHALL be Playfair Display (400, 400i from Google
  Fonts)

#### Scenario: Responsive layout

- **GIVEN** a viewport at or below 768px
- **THEN** all section columns SHALL stack vertically
- **AND** the header logo SHALL remain visible with the hamburger toggle
- **AND** no horizontal overflow SHALL occur

### Requirement: Header

The system SHALL render a sticky header with the brand logo and a
hamburger menu toggle that opens a full-screen slide-out navigation.

#### Scenario: Header rendering

- **GIVEN** the Cardfolio app is rendered
- **THEN** a sticky header SHALL display with the brand name "Cardfolio"
  (replacing "Noah") split as styled logo text
- **AND** a hamburger toggle button SHALL be visible on the right

#### Scenario: Slide-out navigation

- **WHEN** the user clicks the hamburger toggle
- **THEN** a full-screen slide-out navigation panel SHALL slide in from
  the left with a search input, navigation links (Home, Services, Work,
  Blog, About, Contact), and a gallery thumbnail grid
- **WHEN** the user clicks the toggle again or a nav link
- **THEN** the panel SHALL close

### Requirement: About section

The system SHALL render the About section with a centered heading, an
image carousel on the left, and a text/bio column on the right with
name/title, description, social icons, and a CTA button.

#### Scenario: About section layout

- **GIVEN** the About section is rendered on desktop
- **THEN** the left column (5/12 width) SHALL display a carousel of
  about images (use picsum.photos placeholders)
- **AND** the right column (6/12 width) SHALL display:
  - A heading with the person's name ("Cardfolio" or a placeholder name)
    and title ("I'm A Designer" or similar)
  - A bio paragraph
  - Social media icon links (Facebook, Twitter, Instagram, Dribbble —
    use lucide-react icons replacing icomoon)
  - A "Contact Me!" outlined button

#### Scenario: About heading animation

- **GIVEN** the About section renders the name/title
- **THEN** the heading SHALL alternate between two states via carousel:
  state 1: "{Name}" / "{Role}", state 2: "I'm" / "A Designer"

### Requirement: Services section

The system SHALL render a Services section with a centered heading, intro
text, 4 service cards in a 2-column grid, and a side decorative image.

#### Scenario: Services section layout

- **GIVEN** the Services section is rendered on desktop
- **THEN** the section SHALL display centered heading "Services"
- **AND** intro text: "My Services" / "Here Are Some of My Skills"
- **AND** 4 service cards in a 2×2 grid:
  1. Graphic Design (UI Design, Website & Digital Design, Branding &
     Visual Identity, Print Design)
  2. Illustration (Editorial, Narrative, Motion Graphics, Animation,
     Visual Effects)
  3. Front End Development (HTML/CSS, JS & jQuery, WordPress, Joomla)
  4. Web Marketing (Sales Marketing, Invoice, eCommerce)
- **AND** a side decorative image panel on the right

### Requirement: Works / Portfolio section

The system SHALL render a Works section with 4 full-width project entries,
each showing a background image with an overlay title and a centered
description below.

#### Scenario: Work entry rendering

- **GIVEN** the Works section is rendered
- **THEN** centered heading "Works" with intro "Portfolio" / "Done
  Projects" SHALL display
- **AND** 4 full-width project entries SHALL render in order:
  1. "Pursuing Best"
  2. "Coordinates"
  3. "Cristall"
  4. "Black"
- **AND** each entry SHALL have a full-width background image
  (picsum.photos placeholder) with an overlay that shows the project
  title on hover
- **AND** below each image, a centered description paragraph SHALL
  display with a "View details" link

### Requirement: Blog section

The system SHALL render a Blog section with a carousel of 3 blog cards,
each showing an image with an overlay "Read more" link, date, title, and
excerpt.

#### Scenario: Blog carousel

- **GIVEN** the Blog section is rendered on desktop
- **THEN** centered heading "Blog" with intro "Blog" / "Read Our Case"
  SHALL display
- **AND** 3 blog cards SHALL render in a horizontal carousel:
  - Each card SHALL have a blog image (picsum.photos), a dark overlay
    with "Read more" link on hover
  - Below: date (e.g. "Feb 15, 2018"), title, and a short excerpt
- **AND** the carousel SHALL support horizontal scrolling / cycling

#### Scenario: Blog responsive

- **GIVEN** a mobile viewport
- **THEN** the blog cards SHALL stack vertically or show one at a time

### Requirement: Testimonials section

The system SHALL render a Testimonials section with a centered heading,
intro text, and a carousel of blockquotes.

#### Scenario: Testimonial carousel

- **GIVEN** the Testimonials section is rendered on desktop
- **THEN** centered heading "Testimonies" with intro "Testimonies" /
  "Clients Says" SHALL display
- **AND** 3 testimonial cards SHALL render in a horizontal carousel:
  1. George Brooks — "A small river named Duden flows by their place..."
  2. Daniel Foster — "Even the all-powerful Pointing has no control..."
  3. Liam Jenkins — "When she reached the first hills of the Italic
     Mountains..."
- **AND** each testimonial SHALL be a centered blockquote with the
  quote text and an em-dash attribution

#### Scenario: Testimonials responsive

- **GIVEN** a mobile viewport
- **THEN** testimonials SHALL show one at a time with swipe / scroll

### Requirement: Footer

The system SHALL render a 3-column footer with contact info, latest blog
entries, and a newsletter form, plus a copyright line. The footer MUST
include the Component Dock attribution link.

#### Scenario: Footer columns

- **GIVEN** the Footer is rendered on desktop
- **THEN** three columns SHALL display:
  1. "Let's Talk" — short intro text, email link, social icons
  2. "Latest Blog" — 3 mini-entry items with thumbnail image, date, and
     title
  3. "Newsletter" — intro text, email input field, "Subscribe" button

#### Scenario: Component Dock attribution

- **GIVEN** the Footer is rendered
- **THEN** the copyright line SHALL include a link to
  https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Slide-out navigation gallery

The system SHALL show a gallery of work thumbnails in the slide-out nav
panel with hover search icons.

#### Scenario: Gallery in nav

- **GIVEN** the slide-out nav is open
- **THEN** a "Works" heading SHALL display above 4 gallery thumbnail
  links with background images
- **AND** each thumbnail SHALL show a search icon overlay on hover

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics, semantic HTML elements,
and focus-visible rings on interactive elements.

#### Scenario: Semantics

- **GIVEN** the Cardfolio app is rendered
- **THEN** all sections SHALL use semantic elements (`<header>`,
  `<nav>`, `<section>`, `<footer>`)
- **AND** all images SHALL have descriptive alt text (placeholder-based)
- **AND** the hamburger toggle SHALL expose `aria-expanded` and
  `aria-controls` for the slide-out panel
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements

## Verification checklist

- [ ] `npm run verify:app -- cardfolio` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/noah/: sticky header, about
      section (image carousel + bio + social icons + CTA), services
      (2-col grid + side image), works (4 full-width entries), blog
      (carousel), testimonials (carousel), 3-column footer.
- [ ] Behavior check: hamburger opens/closes slide-out nav, carousel
      interactions work, responsive stacking at 768px, no horizontal
      overflow.
- [ ] Responsive check at 768px (columns stack, nav toggle visible, no
      overflow).
- [ ] Footer links to https://www.componentdock.com/ (Component Dock).
