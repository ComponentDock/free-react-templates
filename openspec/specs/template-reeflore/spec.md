# Template: Reeflore (Travel)

## Purpose

Reeflore is a single-page travel / tour-booking template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Travel Wordpress Themes" HTML template design (see
TEMPLATES.md, line 1495 under **Travel (44)**), built under a different
name ("Reeflore" — reef + explore, matching the tropical ocean aerial
imagery of the source) with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript (strict). No ColorLib references in app
code — provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Travel Wordpress Themes" — free travel / tour
  booking HTML template (source:
  https://colorlib.com/wp/template/travel-wordpress-themes/). Named
  "The Valley" in the original demo (demo.themexpert.com). Single page:
  a transparent navbar (white text over hero, becomes fixed white bar on
  scroll), a full-viewport hero slider (tropical aerial reef/ocean photo,
  large white bold headline, white CTA button with rounded corners,
  left/right carousel arrows), a destination cards grid, an about / feature
  section, a gallery or photo showcase, testimonials, a newsletter band,
  and a dark footer.

- **Live preview UNREACHABLE (HTTP 404):**
  `https://preview.colorlib.com/theme/travel-wordpress-themes/` returned
  404. Falling back to the TEMPLATES.md screenshot
  (`travel-wordpress-themes.jpg`) as the sole visual reference.

- **Visual design (screenshot only):** clean, nature-forward travel
  aesthetic. A full-screen aerial photograph of a tropical reef / turquoise
  ocean with small boats viewed from above dominates the hero. The color
  palette is driven by the image — deep teal / dark ocean tones
  (#1a3a4a to #2a6a7a range) with white text and accents. The navbar is
  transparent at the top with white links and a mountain-peak logo icon
  branded "The Valley". Navigation has dropdown indicators on Home,
  Destination, and Regions. A phone number (+03 86 600 888 33) sits in the
  top-right. The hero headline "Travel WordPress Themes" is large, bold,
  white, left-aligned. Below it, a "Let's go now" CTA button has a white
  background, dark text, and rounded corners (~4px radius). Left/right
  chevron arrows suggest a multi-slide hero carousel. The overall mood is
  premium travel agency — clean typography, generous whitespace, minimal
  UI chrome, image-driven storytelling.

## Design tokens (from screenshot analysis; preview unavailable for CSS extraction)

- **Ocean teal / brand:** `#1a6a7a` — derived from the hero reef/ocean
  photo dominant hue. Use for primary accent elements, CTA button text,
  active nav states, and section highlights.
- **Deep ocean dark:** `#0f3b4a` — darkest tone from the reef image; use
  for dark section backgrounds (footer, overlay panels).
- **Sea foam light:** `#e8f4f5` — light teal tint for alternating section
  backgrounds.
- **White:** `#fff` — navbar text over hero, hero headline, CTA button bg.
- **Ink dark:** `#1a1a2e` — body text color on light backgrounds.
- **Muted:** `rgba(255,255,255,0.7)` — secondary text in hero/footer;
  `rgba(255,255,255,0.4)` — footer links.
- **Font:** Google **Poppins** (sans-serif) — inferred from the clean,
  geometric letterforms visible in the screenshot headline and nav.
  Headlines: 700 weight; body: 400 weight.
- **Buttons:**
  - Primary CTA ("Let's go now") — white `#fff` bg, dark `#1a1a2e` text,
    rounded corners ~4px, padding ~14px 32px, 16px font weight 500.
    Hover: light grey bg or subtle shadow.
  - Navbar phone link — white text, no bg, phone icon.
  - Footer CTA buttons — white bg, dark text or teal bg, white text.
- **Navbar (transparent-to-fixed):** At top — `position: absolute`,
  transparent bg, white brand + white 15px nav links. On scroll —
  `position: fixed`, white bg, dark text, shadow. Mobile: hamburger
  toggler expands collapsed menu.
- **Hero (full-viewport slider):** height 100vh, background-size cover,
  background-position center; left/right chevron arrows (white, semi-
  transparent bg, absolute positioned); content left-aligned with large
  h1 (48–64px, 700 weight, white) + CTA button below.
- **Placeholder images:** `https://picsum.photos/seed/reeflore-<n>/<w>/<h>`.
  Photo slots: hero bg 1–3 (tropical ocean aerial), destination-1..4,
  about.jpg, gallery-1..6, testimonial-bg, testimonial-1..3, newsletter-bg.
  Icons from `lucide-react` (ChevronLeft, ChevronRight, MapPin, Phone,
  Mail, Star, Menu, X, ChevronDown, Compass, Globe, Camera, Send).

## Requirements

### Requirement: Navbar — transparent-to-fixed with brand and dropdowns

The system SHALL render a navbar with a brand logo (mountain-peak icon +
"Reeflore") on the left, five nav links (Home, Destinations, Regions,
Shop, Blog) with dropdown arrows on Home, Destinations, and Regions, and
a phone number on the right. At the top of the page the navbar SHALL be
transparent with white text over the hero; on scroll it SHALL become a
fixed white bar with dark text and a subtle shadow.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the brand logo and name, five nav entries (Home
  first), and the phone number on the right

#### Scenario: Scroll state

- **GIVEN** the page is rendered at the top
- **WHEN** the page is scrolled down past the hero
- **THEN** the navbar becomes fixed with a white background and dark text

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger icon is activated
- **THEN** the nav links appear in a slide-down menu and can be closed

### Requirement: Hero banner carousel

The system SHALL render a full-viewport hero carousel with at least two
slides. Each slide has a travel-photo background, a large white bold
headline, supporting text, and a "Let's go now" CTA button. Left/right
chevron arrows navigate between slides.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows a full-viewport background image with a large white
  headline, supporting text, and a white "Let's go now" button

#### Scenario: Carousel navigation

- **GIVEN** the hero carousel is rendered
- **WHEN** the right chevron arrow is clicked
- **THEN** the next slide is displayed with a different background image
  and headline

- **WHEN** the left chevron arrow is clicked
- **THEN** the previous slide is displayed

### Requirement: Destinations section

The system SHALL render a "Popular Destinations" section with a centered
heading and four destination cards, each showing a photo, a location tag,
a destination title, a short description, and a "Explore" link.

#### Scenario: Destination cards

- **GIVEN** the destinations section is rendered
- **WHEN** the cards are inspected
- **THEN** four cards are shown, each with a photo, location tag, title,
  description, and "Explore" link

### Requirement: About / features section

The system SHALL render an about section with a split layout — a photo
on one side and, on the other, a heading, a paragraph, and three feature
blocks each with an icon, a title, and a short description.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it is inspected
- **THEN** it shows a photo on the left and a heading with a paragraph
  and three feature blocks on the right

### Requirement: Gallery / photo showcase

The system SHALL render a gallery section with a centered heading and a
grid of six travel photos arranged in a responsive 3-column layout.

#### Scenario: Gallery grid

- **GIVEN** the gallery section is rendered
- **WHEN** the grid is inspected
- **THEN** six travel photos are shown in a responsive grid

### Requirement: Testimonials carousel

The system SHALL render a testimonial section on a dark background with
a centered white heading and a carousel of testimonials, each showing a
quote, a traveler name, and a role/location.

#### Scenario: Testimonial slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows a testimonial card with a quote, a name, and a
  role/location

#### Scenario: Carousel controls

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the next/prev controls are activated
- **THEN** the displayed testimonial changes

### Requirement: Newsletter / subscribe band

The system SHALL render a newsletter band with a background image or
solid teal color, a heading, a short paragraph, an email input, and a
"Subscribe" button.

#### Scenario: Newsletter form

- **GIVEN** the newsletter band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, paragraph, email input, and Subscribe
  button

### Requirement: Footer

The system SHALL render a dark footer with four widget columns (brand +
social links, Quick Links, Destinations, Contact info) and a bottom bar
with the copyright line. The credit SHALL read "Made with ♥ by
**Component Dock**" linking https://www.componentdock.com/ (no ColorLib
credit).

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows four columns: brand with social icons, Quick Links
  list, Destinations list, and Contact with address/phone/email

#### Scenario: Footer credit

- **GIVEN** the footer bottom bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Reeflore app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero carousel, destinations,
  about/features, gallery, testimonials, newsletter, and footer in the
  correct order
- **AND** the document title SHALL be "Reeflore — Travel Template"

## Verification checklist

- [ ] `openspec/specs/template-reeflore/spec.md` validated
      (`npm run spec:validate`)
- [ ] App folder `apps/reeflore`, package
      `@free-react-templates/reeflore`, no ColorLib references in app
      code (grep for colorlib/travel-wordpress-themes in apps/reeflore)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) —
      `bash scripts/verify-app.sh reeflore`
- [ ] Section order matches the source: header → hero carousel →
      destinations → about/features → gallery → testimonials →
      newsletter → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #1a6a7a`,
      `--color-deep: #0f3b4a`, `--color-seafoam: #e8f4f5`,
      `--color-ink: #1a1a2e`; Google Fonts `<link>` in `index.html`:
      Poppins
- [ ] Navbar: transparent at top (white brand/links), fixed white with
      dark text on scroll, phone number on right, mobile hamburger →
      nav toggle
- [ ] Hero: full-viewport photo carousel with large white headline,
      supporting text, white "Let's go now" CTA button, left/right
      chevron arrows
- [ ] Destinations: centered heading + 4 cards (photo + location tag +
      title + description + "Explore" link)
- [ ] About/Features: split layout with photo + heading + paragraph +
      3 icon-feature blocks
- [ ] Gallery: centered heading + 6 travel photos in responsive grid
- [ ] Testimonials: dark bg + white heading + carousel (quote + name +
      role), prev/next controls
- [ ] Newsletter: background + heading + paragraph + email input +
      Subscribe button
- [ ] Footer: dark bg, 4 columns (brand + socials / Quick Links /
      Destinations / Contact) + bottom bar with Component Dock credit +
      no ColorLib credit
- [ ] Placeholder images via `https://picsum.photos/seed/reeflore-<n>/<w>/<h>`
      (hero 1–3, 4 destinations, about, 6 gallery, testimonial-bg,
      3 testimonials, newsletter-bg); icons from `lucide-react` +
      inline SVG brand icons
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/travel-wordpress-themes/` — note:
      404, screenshot-only reference), design tokens, diffs (name,
      placeholder images, React carousel + mobile nav, Component Dock
      footer credit)
