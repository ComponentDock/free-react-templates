# Template: Prismshot (Photography Portfolio)

## Purpose

Prismshot is a single-page PHOTOGRAPHY PORTFOLIO in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Elit" free
template (source: https://colorlib.com/wp/template/elit/; preview:
https://preview.colorlib.com/theme/elit/), built under a DIFFERENT name
(**Prismshot**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a one-page photographer portfolio with a FIXED LEFT SIDEBAR
(250px black panel with logo, nav, social icons), a FULL-VIEWPORT hero section
(parallax background image, centered heading + CTA), a 3-column photo gallery
grid (6 images with hover overlay), a dark biography section (portrait + bio
text + checkmark skill lists), a dark blog section (4 entries with thumbnails),
a dark contact form section, and a simple copyright footer.

**WHAT MAKES PRISMSHOT DISTINCT (signature behaviors):**

1. **Fixed left sidebar (250px, black).** The entire navigation lives in a
   fixed left panel — not a top bar. It contains the logo ("Prismshot Photo"),
   vertical nav links (Home, Gallery, Biography, Blog, Contact), and social
   icons (Facebook, Twitter, Instagram). Active nav link is highlighted in the
   brand pink color. On mobile (<992px) the sidebar collapses to a horizontal
   top bar (70px height) with a hamburger menu toggle.

2. **Full-viewport hero with parallax.** The hero section occupies 100vh
   (min 500px) with a background image, dark overlay (rgba(0,0,0,0.4)),
   centered "Welcome" heading (Oswald, uppercase, 4rem desktop / 2.5rem
   mobile), subtitle paragraph, and a pill-shaped pink CTA button ("Contact
   Me") that smooth-scrolls to the contact section.

3. **3-column photo gallery grid.** Six images in a responsive grid
   (col-lg-4, col-md-6, col-6) with uniform 300px height (object-fit:cover).
   Each image has a dark overlay on hover with a centered search icon
   (lightbox trigger). The grid uses container-fluid with no side padding.

4. **Dark biography section.** Dark background (#1a1a1a) with a pink
   accent bar (100px wide, 4px tall, #df0e62) via a ::before pseudo-element
   at the top-left. Contains a centered heading ("Biography"), a portrait
   photo (50% width, rounded), intro paragraphs, a subheading, and two
   columns of green checkmark (#8bc34a) bullet lists.

5. **Dark blog section.** Same dark background with pink accent bar.
   Four blog entries in a vertical list, each with a 250px thumbnail
   (flexbox layout), title, meta text ("Posted by {name} on {date}"), and
   excerpt. Includes a circular pagination control at the bottom.

6. **Dark contact form section.** Same dark background with pink accent bar.
   Two-column name fields (First Name, Last Name), full-width Email,
   Subject, Message textarea (7 rows), and a pink pill "Send Message" button.
   Form inputs have no border — only a gray bottom rule (2px solid),
   transparent background, white text.

7. **Minimal copyright footer.** Centered text with copyright symbol,
   year, and "Made with Component Dock" attribution link.

## Naming

The ColorLib source name "Elit" is FORBIDDEN as the app name. The new name
is **Prismshot** (apps/prismshot, package @free-react-templates/prismshot).
Source slug: `elit`. Preview: https://preview.colorlib.com/theme/elit/.

## Design tokens (extracted from preview CSS)

| Token | Value | Source |
|-------|-------|--------|
| Brand accent | `#df0e62` (hot pink/magenta) | `.btn-primary`, nav active, hover states, dark section `::before` accent bar |
| Body background | `#000` (black) | `body { background: #000 }` |
| Dark section bg | `#1a1a1a` | `.site-section.darken-bg { background: #1a1a1a }` |
| Heading font | `"Oswald", arial, sans-serif` | `h1, h2, h3 { font-family: "Oswald" }` — uppercase, condensed |
| Body font | `"Quicksand", sans-serif` (weights 300–900) | Google Fonts link in `<head>` |
| Button radius | `30px` (pill shape) | `.btn { border-radius: 30px }` |
| Button padding | `15px 30px`, uppercase, letter-spacing 0.1em | `.btn.btn-md { padding: 15px 30px; text-transform: uppercase; letter-spacing: .1em }` |
| Form inputs | No box border, 2px solid gray bottom border, transparent bg, white text | `.form-control { border: none; border-bottom: 2px solid gray; background: none; color: #fff }` |
| Sidebar width | `250px`, black bg, fixed left | `.header-bar { width: 250px; background: #000; position: fixed; left: 0 }` |
| Sidebar collapse | <992px → full-width top bar, 70px height | `@media (max-width: 991.98px) { .header-bar { width: 100%; height: 70px !important } }` |
| Photo grid height | `300px` (200px on mobile <576px), object-fit cover | `.photos .photo-item img { height: 300px; object-fit: cover }` |
| Photo hover overlay | `rgba(0,0,0,0.6)` with centered white search icon | `.photo-item:after { background: rgba(0,0,0,0.6) }` |
| Checkmark color | `#8bc34a` (green) | `.ul-check.success li:before { color: #8bc34a }` |
| Accent bar (dark sections) | 100px wide, 4px tall, `#df0e62`, positioned top-left | `.darken-bg:before { width: 100px; height: 4px; background: #df0e62 }` |
| Hero overlay | `rgba(0,0,0,0.4)` | `.site-section-hero:before { background: rgba(0,0,0,0.4) }` |
| Hero heading | 4rem desktop, 2.5rem mobile, uppercase, white | `.site-section-hero .heading { font-size: 2.5rem }` + media query |
| Section heading | 4rem desktop, 2.5rem mobile, uppercase | `.site-section .heading { font-size: 4rem; text-transform: uppercase }` |
| Blog thumbnail | 250px flex-basis | `.blog-entry .img-wrap { flex: 0 0 250px }` |
| Blog meta color | `#737373` | `.blog-entry .meta { color: #737373 }` |
| Pagination circles | 40×40px, border-radius 50%, hover bg `#df0e62` | `.custom-pagination a { border-radius: 50% }` |

## Gherkin requirements

### Requirement: Fixed left sidebar

The system SHALL render a fixed left sidebar with logo, navigation, and social
links.

#### Scenario: Sidebar renders on desktop

- **GIVEN** the Prismshot app is rendered on a viewport wider than 992px
- **THEN** a 250px-wide fixed left sidebar SHALL render with black background
- **AND** the sidebar SHALL contain the logo text ("Prismshot Photo") at the
  top, a vertical nav list (Home, Gallery, Biography, Blog, Contact), and
  social icon links (Facebook, Twitter, Instagram)
- **AND** the active nav link SHALL be highlighted in `#df0e62`

#### Scenario: Sidebar collapses to top bar on mobile

- **GIVEN** the Prismshot app is rendered on a viewport narrower than 992px
- **THEN** the sidebar SHALL collapse to a fixed top bar (full width, 70px
  height) with a hamburger menu toggle
- **WHEN** the user taps the hamburger toggle
- **THEN** a slide-in mobile menu SHALL open from the right (300px wide,
  white background, shadow) with the same nav links

#### Scenario: Smooth-scroll navigation

- **GIVEN** the sidebar is visible
- **WHEN** the user clicks a nav link (e.g. "Gallery")
- **THEN** the page SHALL smooth-scroll to the corresponding section
  (e.g. `#section-gallery`)

### Requirement: Full-viewport hero section

The system SHALL render a full-viewport hero section with a background image,
dark overlay, heading, subtitle, and CTA button.

#### Scenario: Hero renders at full viewport

- **GIVEN** the Prismshot app is rendered
- **THEN** the hero section SHALL occupy 100vh (min-height 500px) with a
  background image (cover, centered) and a dark overlay (rgba(0,0,0,0.4))
- **AND** a centered "Welcome" heading SHALL render in white Oswald font
  (4rem desktop, 2.5rem mobile, uppercase)
- **AND** a subtitle paragraph SHALL render below the heading in white

#### Scenario: Hero CTA button

- **GIVEN** the hero section is rendered
- **THEN** a pill-shaped pink button ("Contact Me") SHALL render below the
  subtitle with `border-radius: 30px`, padding 15px 30px, uppercase text,
  letter-spacing 0.1em
- **WHEN** the user clicks the CTA button
- **THEN** the page SHALL smooth-scroll to the Contact section

### Requirement: Photo gallery grid

The system SHALL render a 3-column responsive photo gallery with hover
overlay effects.

#### Scenario: Gallery grid layout

- **GIVEN** the Prismshot app is rendered
- **THEN** a photo gallery section SHALL render with 6 images in a responsive
  grid (3 columns on desktop lg, 2 columns on md, 2 columns on mobile)
- **AND** each image SHALL have object-fit:cover with 300px height (200px
  on screens <576px)

#### Scenario: Photo hover overlay

- **GIVEN** the gallery is rendered
- **WHEN** the user hovers over a photo
- **THEN** a dark overlay (rgba(0,0,0,0.6)) SHALL fade in over the image
- **AND** a centered white search icon SHALL appear (indicating lightbox
  capability)

### Requirement: Biography section

The system SHALL render a dark-background biography section with portrait,
bio text, and checkmark skill lists.

#### Scenario: Biography layout

- **GIVEN** the Prismshot app is rendered
- **THEN** a biography section SHALL render with dark background (#1a1a1a)
- **AND** a pink accent bar (100px wide, 4px tall, #df0e62) SHALL appear
  at the top-left of the section
- **AND** a centered "Biography" heading SHALL render (uppercase, 4rem
  desktop / 2.5rem mobile)
- **AND** a portrait image (50% width, rounded) SHALL render below the
  heading

#### Scenario: Bio content and skill lists

- **GIVEN** the biography section is rendered
- **THEN** intro paragraphs and a subheading SHALL render below the portrait
- **AND** two columns of green checkmark (#8bc34a) bullet items SHALL render
  (using the `.ul-check.success` pattern)

### Requirement: Blog section

The system SHALL render a dark-background blog section with entries and
pagination.

#### Scenario: Blog entries

- **GIVEN** the Prismshot app is rendered
- **THEN** a blog section SHALL render with dark background (#1a1a1a) and
  pink accent bar
- **AND** a "Blog" heading SHALL render (uppercase, 4rem desktop / 2.5rem
  mobile)
- **AND** 4 blog entries SHALL render in a vertical list, each with a 250px
  thumbnail (flex-basis), title (white, 24px), meta text (#737373), and
  excerpt paragraph

#### Scenario: Blog pagination

- **GIVEN** the blog section is rendered
- **THEN** a pagination control SHALL render at the bottom with circular
  buttons (40×40px, border-radius 50%)
- **AND** the active page SHALL have a pink (#df0e62) background

### Requirement: Contact form section

The system SHALL render a dark-background contact form with validation.

#### Scenario: Contact form layout

- **GIVEN** the Prismshot app is rendered
- **THEN** a contact section SHALL render with dark background (#1a1a1a)
  and pink accent bar
- **AND** a "Contact" heading SHALL render (uppercase, white)
- **AND** a form SHALL render with: two-column name fields (First Name,
  Last Name), full-width Email, Subject, Message textarea (7 rows), and
  a pink pill "Send Message" button

#### Scenario: Form input styling

- **GIVEN** the contact form is rendered
- **THEN** all inputs SHALL have no box border, a 2px solid gray bottom
  border, transparent background, and white text
- **AND** focused inputs SHALL show a white bottom border

#### Scenario: Form submission

- **GIVEN** the contact form is rendered with all fields filled
- **WHEN** the user clicks "Send Message"
- **THEN** the form SHALL prevent default submission (no page reload)
- **AND** a success feedback state SHALL be displayed (no real network request)

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Prismshot app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"
- **AND** the footer SHALL display a copyright line with the current year

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for all interactive elements.

#### Scenario: Semantics

- **GIVEN** the Prismshot app is rendered
- **THEN** the sidebar nav SHALL use `<nav>` with semantic list markup
- **AND** all images SHALL have descriptive `alt` attributes
- **AND** the contact form SHALL have `<label htmlFor>` for every input
- **AND** interactive elements SHALL have visible focus-visible rings
- **AND** the mobile menu toggle SHALL have `aria-expanded` and `aria-label`

## Verification checklist

- [ ] `npm run verify:app -- prismshot` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/elit/: black 250px left sidebar
      with pink active nav, full-viewport hero (dark overlay, "Welcome"
      heading, pink pill CTA), 3-column photo grid with hover overlay,
      dark biography section with green checkmarks, dark blog section
      with 4 entries + pagination, dark contact form, copyright footer.
- [ ] Behavior check: sidebar nav smooth-scrolls to sections; hero CTA
      smooth-scrolls to contact; photo hover shows overlay + icon; mobile
      sidebar collapses to top bar with hamburger toggle; contact form
      prevents default and shows success state.
- [ ] Responsive check at 768px (sidebar → top bar, hero heading shrinks
      to 2.5rem, gallery → 2 columns, biography → single column,
      blog thumbnails stack).
- [ ] Responsive check at 375px (mobile: gallery → 2 columns, all
      sections readable, form inputs full width).
- [ ] Accessibility: all images have alt text, form inputs have labels,
      nav uses semantic markup, focus-visible on interactive elements.
