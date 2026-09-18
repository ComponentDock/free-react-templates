# Template: Mechbot (Robotics Landing Page)

## Purpose

Mechbot is a single-page robotics company landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Robotics" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Robotics" — robotics company landing page,
  "Free Bootstrap 4 Template by Colorlib"
  (source: https://colorlib.com/wp/template/robotics/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/robotics/
  (static HTML + `css/style.css`).
- **Screenshot analyzed:** landing page shows a white-background design with
  a sticky navbar, split hero (text left + robot image right), light-bg
  product cards, split about section, video overlay, dark-bg features grid,
  brand logos strip, blog cards, and a multi-column footer with newsletter.
  Dominant color is a blue-purple `#8a90ff` (brand) on white/light-gray
  backgrounds; headings are dark `#222222`; body text `#777777`.
- **Section order (1:1 from the DOM of the home page):**
  1. **Navbar** — sticky top, white bg, brand wordmark "Robotics" left,
     nav links HOME / ABOUT / PRODUCTS / FEATURES / BLOG / CONTACT center,
     CTA link right. Links are dark gray `#222`, hover brand `#8a90ff`.
     Mobile: hamburger toggler collapsing to a stacked menu.
  2. **Hero / Banner** — split layout: left column has text content
     (headline "Improved Production level with Robotics", subtitle
     "Everyone wants the innovation through robotics", CTA button
     "View Details" brand blue-purple pill). Right column has a robot /
     industrial arm image. Light bg `#f9f9ff`.
  3. **Products** — light bg `#f9f9ff`, centered heading "Featured
     Robotics Products to Show". 4 product cards in a row, each with an
     image, product name, short blurb, and a "View Details" link:
     The Upper Eye · The Crab Wheel · The Plug Ninja · The Controller.
  4. **HomeAbout** — split layout: left column image, right column text.
     Heading "Globally Connected by Large Network". Paragraph describing
     the company's global robotics network. Light bg `#f9f9ff`.
  5. **AboutVideo** — split layout: left column text, right column video
     overlay (a thumbnail image with a play-button overlay). Heading
     "Brand new app to blow your mind", subtext "We've made a life that
     will change you". Brand blue-purple CTA button.
  6. **Features** — dark bg (`#222222` or similar dark), centered heading
     "Some Features that Made us Unique". 6 feature cards in a 3×2 grid,
     each with a lucide-react icon, title, and short blurb:
     Expert Technicians · Professional Service · Great Support ·
     Technical Skills · Highly Recommended · Positive Reviews.
  7. **BrandLogos** — row of 5 partner / brand logos (grayscale or muted),
     centered, no heading.
  8. **Blog** — light bg, centered heading "Latest News from our Blog".
     2 blog cards in a row, each with an image, date meta, title,
     excerpt, and "Read More" link.
  9. **Footer** — dark bg, 4-column layout: (a) brand "Robotics" + about
     paragraph + social icons, (b) Top Products links, (c) Newsletter form
     (email input + submit button), (d) link column. Bottom bar with
     copyright. Footer MUST include a link to
     `https://www.componentdock.com/` branded as "Component Dock".
- **Design tokens extracted from the original CSS:**
  - Primary brand **blue-purple `#8a90ff`** (hero CTA, buttons, links,
    hover states, accents). Hover shade slightly darker `#7680e6`.
  - Body text **`#777777`** (paragraphs, secondary text).
  - Heading text **`#222222`** (all h1–h6, navbar brand, strong text).
  - Light background **`#f9f9ff`** (hero section, products, about, blog).
  - Dark background **`#222222`** (features section bg, footer bg).
  - Surface: white `#ffffff` (navbar, cards, body).
  - Font: **"Poppins"** (weights 300–700 via Google Fonts, sans-serif
    fallback) for everything. Hero h1 ~42px weight 600; section headings
    ~36px weight 600; body 15px weight 400.
  - Buttons: **rounded-full (9999px)** pill shape, brand `#8a90ff` bg,
    white text. Hover → slightly darker `#7680e6`.
  - Navbar: white bg, dark `#222` links, brand `#8a90ff` active/hover.
  - Feature icons: white on brand `#8a90ff` circular background.
  - Product cards: white bg, shadow, image top, name + blurb + link.
  - Blog cards: white bg, image top, meta date, title, excerpt, link.
  - Footer: dark bg, white headings, `rgba(255,255,255,0.7)` links →
    white hover.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/mechbot-<n>/<w>/<h>`); icons → lucide-react
  (Bot, Eye, Cpu, Plug, Gamepad2, Network, Wrench, Handshake, Headphones,
  Code, ThumbsUp, Star, Play, ChevronRight, Menu, Facebook, Twitter,
  Instagram, Send, Heart, ArrowRight, MapPin, Phone, Mail); Poppins via
  Google Fonts `<link>` in `index.html`; brand `#8a90ff` + body `#777777`
  - heading `#222222` + light bg `#f9f9ff` in `@theme`; rounded-full pill
    buttons; no asset/CSS/font-file copying. Footer MUST link
    `https://www.componentdock.com/` branded as "Component Dock".

## Requirements

### Requirement: Navbar

The system SHALL render a sticky white navbar with the site wordmark,
section links, and a call-to-action.

#### Scenario: Navbar content

- **GIVEN** the Mechbot page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Mechbot" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, PRODUCTS, FEATURES, BLOG, CONTACT
- **AND** the navbar SHALL show a CTA button styled as a brand blue-purple pill

#### Scenario: Navbar link colors

- **GIVEN** the navbar is rendered
- **WHEN** the user hovers over a nav link
- **THEN** the link color SHALL change to brand `#8a90ff`

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered at a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand into a stacked vertical menu

### Requirement: Hero / Banner

The system SHALL render a split hero section with text on the left and a
robot image on the right, on a light background.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "Improved Production level with Robotics"
- **AND** it SHALL show the subtitle "Everyone wants the innovation through robotics"
- **AND** it SHALL show a "View Details" CTA button styled as a brand blue-purple pill

#### Scenario: Hero image

- **GIVEN** the hero section is displayed
- **WHEN** the user inspects the right side of the hero
- **THEN** there SHALL be a placeholder image (picsum.photos) representing a robot or industrial arm

#### Scenario: Hero layout

- **GIVEN** the hero section is displayed
- **WHEN** the viewport is wide (desktop)
- **THEN** the hero SHALL use a split layout with text on the left and the image on the right

### Requirement: Products

The system SHALL render a light-background section with a centered heading
and four product cards.

#### Scenario: Products section heading

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL show the heading "Featured Robotics Products to Show"

#### Scenario: Product cards

- **GIVEN** the products section is displayed
- **WHEN** the user inspects the cards
- **THEN** there SHALL be exactly 4 product cards
- **AND** each card SHALL have a product image, a product name, a short blurb, and a "View Details" link

#### Scenario: Product names

- **GIVEN** the products section is displayed
- **WHEN** the user reads the card titles
- **THEN** the four products SHALL be named "The Upper Eye", "The Crab Wheel", "The Plug Ninja", and "The Controller"

### Requirement: HomeAbout

The system SHALL render a split about section with an image on the left
and text on the right, on a light background.

#### Scenario: HomeAbout content

- **GIVEN** the page is rendered
- **WHEN** the home about section is displayed
- **THEN** it SHALL show the heading "Globally Connected by Large Network"
- **AND** it SHALL show a paragraph describing the company's global robotics network

#### Scenario: HomeAbout image

- **GIVEN** the home about section is displayed
- **WHEN** the user inspects the left side
- **THEN** there SHALL be a placeholder image (picsum.photos)

#### Scenario: HomeAbout layout

- **GIVEN** the home about section is displayed
- **WHEN** the viewport is wide (desktop)
- **THEN** the section SHALL use a split layout with the image on the left and text on the right

### Requirement: AboutVideo

The system SHALL render a split section with text on the left and a video
overlay (thumbnail + play button) on the right.

#### Scenario: AboutVideo content

- **GIVEN** the page is rendered
- **WHEN** the about-video section is displayed
- **THEN** it SHALL show the heading "Brand new app to blow your mind"
- **AND** it SHALL show the subtext "We've made a life that will change you"
- **AND** it SHALL show a brand blue-purple CTA button

#### Scenario: AboutVideo overlay

- **GIVEN** the about-video section is displayed
- **WHEN** the user inspects the right side
- **THEN** there SHALL be a thumbnail image (picsum.photos) with a play-button overlay (lucide-react Play icon)

#### Scenario: AboutVideo layout

- **GIVEN** the about-video section is displayed
- **WHEN** the viewport is wide (desktop)
- **THEN** the section SHALL use a split layout with text on the left and the video overlay on the right

### Requirement: Features

The system SHALL render a dark-background section with a centered heading
and six feature cards in a 3×2 grid.

#### Scenario: Features section heading

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Some Features that Made us Unique"

#### Scenario: Feature cards

- **GIVEN** the features section is displayed
- **WHEN** the user inspects the feature cards
- **THEN** there SHALL be exactly 6 feature cards
- **AND** each card SHALL have a lucide-react icon on a circular brand-blue background, a title, and a short blurb

#### Scenario: Feature names

- **GIVEN** the features section is displayed
- **WHEN** the user reads the card titles
- **THEN** the six features SHALL be titled "Expert Technicians", "Professional Service", "Great Support", "Technical Skills", "Highly Recommended", and "Positive Reviews"

#### Scenario: Features background

- **GIVEN** the features section is displayed
- **WHEN** the user inspects the background
- **THEN** the section background SHALL be dark (`#222222` or similar dark shade)
- **AND** the heading and card text SHALL be white or light-colored for contrast

### Requirement: BrandLogos

The system SHALL render a strip of five brand / partner logos.

#### Scenario: Brand logos strip

- **GIVEN** the page is rendered
- **WHEN** the brand logos section is displayed
- **THEN** it SHALL show exactly 5 logo images in a responsive row
- **AND** the logos SHALL be placeholder images (picsum.photos) rendered in grayscale or muted tones

### Requirement: Blog

The system SHALL render a light-background blog section with a centered
heading and two blog cards.

#### Scenario: Blog section heading

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest News from our Blog"

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the user inspects the cards
- **THEN** there SHALL be exactly 2 blog cards
- **AND** each card SHALL have an image, a date meta line, a title, an excerpt, and a "Read More" link

#### Scenario: Blog card content

- **GIVEN** a blog card is displayed
- **WHEN** the user reads its content
- **THEN** the card SHALL have a placeholder image (picsum.photos)
- **AND** a date formatted as a short string (e.g. "Sep 14, 2026")
- **AND** a title and excerpt paragraph
- **AND** a "Read More" link styled with the brand color

### Requirement: Footer

The system SHALL render a dark four-column footer with brand info, product
links, a newsletter form, and additional links, plus a bottom copyright
bar. The footer MUST include a link to
`https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show 4 columns
- **AND** column 1 SHALL contain the brand "Robotics", an about paragraph, and social media icons (Facebook, Twitter, Instagram)
- **AND** column 2 SHALL contain "Top Products" links
- **AND** column 3 SHALL contain a newsletter form (email input + submit button)
- **AND** column 4 SHALL contain additional navigation or contact links

#### Scenario: Newsletter form

- **GIVEN** the footer is displayed
- **WHEN** the user inspects column 3
- **THEN** there SHALL be an email input field with a placeholder (e.g. "Enter email")
- **AND** a submit button (lucide-react Send icon or text) styled as a brand pill

#### Scenario: Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the user inspects the footer links
- **THEN** there SHALL be a link to `https://www.componentdock.com/` with the display text "Component Dock"
- **AND** the link SHALL open in a new tab (`target="_blank"`, `rel="noopener noreferrer"`)

#### Scenario: Footer styling

- **GIVEN** the footer is displayed
- **WHEN** the user inspects the background
- **THEN** the footer background SHALL be dark (`#222222` or similar)
- **AND** headings SHALL be white
- **AND** body links SHALL be `rgba(255,255,255,0.7)` transitioning to white on hover

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the user inspects the bottom of the footer
- **THEN** there SHALL be a centered copyright bar with a template credit (monorepo credit, not ColorLib)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Mechbot app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, products, home-about, about-video, features, brand-logos, blog, and footer in order
- **AND** the document title SHALL be "Mechbot — Robotics Landing Page"

### Requirement: Design tokens

The system SHALL use the following design tokens consistently across all
components.

#### Scenario: Typography

- **GIVEN** any component is rendered
- **WHEN** text is displayed
- **THEN** the font family SHALL be "Poppins" (Google Fonts, sans-serif fallback)
- **AND** headings SHALL use color `#222222`
- **AND** body text SHALL use color `#777777`

#### Scenario: Brand color

- **GIVEN** any interactive element is rendered
- **WHEN** a button, link, or accent uses the brand color
- **THEN** the color SHALL be `#8a90ff` (blue-purple)
- **AND** primary CTA buttons SHALL have `rounded-full` (pill shape)

#### Scenario: Background colors

- **GIVEN** the page is rendered
- **WHEN** sections are displayed
- **THEN** the hero, products, home-about, about-video, and blog sections SHALL use light bg `#f9f9ff`
- **AND** the features and footer sections SHALL use dark bg `#222222`

## Verification checklist

- [ ] `openspec/specs/template-mechbot/spec.md` present with the full
      section list (navbar → hero → products → home-about → about-video →
      features → brand-logos → blog → footer).
- [ ] Design tokens above (blue-purple `#8a90ff`, body `#777777`,
      heading `#222222`, light bg `#f9f9ff`, dark bg `#222222`, Poppins
      font, rounded-full pill buttons) captured in the spec.
- [ ] Footer requirement includes the mandatory `https://www.componentdock.com/`
      link branded as "Component Dock".
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh mechbot`,
      PR lists source (ColorLib Robotics), preview URL, tokens, and what
      differs.
