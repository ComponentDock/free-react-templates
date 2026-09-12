# Template: Focuspoint (Photography Portfolio)

## Purpose

Focuspoint is a single-page photography portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Halo" photography portfolio website template design (see
TEMPLATES.md), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Halo" — photography portfolio template
  (source: https://colorlib.com/wp/template/halo/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/halo/
  (HTTP 200, full rendered DOM + `css/style.css` (27KB) extracted).
  The TEMPLATES.md screenshot (`halo-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Visual design (from screenshot + DOM):** dark, moody photography
  portfolio with a full-bleed hero slider, clean white intro section,
  masonry-style image grid portfolio, dark milestone counters, services
  with icon boxes on white, dark contact section with form, and a near-
  black footer. Minimal color palette: dark charcoal + white + red accent.
- **Section order (1:1):** Header/Navbar ("FOCUSPOINT" logo + search
  icon + nav links: Home, About Us, Services, Portfolio, Blog, Contact)
  → Hero slider (full-width background image, "Focuspoint" title,
  "We Create Awesome Photographies and more" subtitle) → Intro ("Amazing
  studio" / "We Are So Creative" + body text + "Read More" button +
  large image) → Portfolio (7-item masonry grid with overlay hover
  showing title + "Landscape Photography" category) → Milestones (dark
  `#222121` bg, 4 stat counters: Video Games, Awards Won, Pictures
  Taken, Video Tutorials with flaticon icons) → Services ("Amazing
  studio" / "See What We Offer" + 4 icon boxes: Video Footages, Photo
  Shootings, Photo Albums, Original Ideas + arrow navigation link) →
  Contact ("Amazing studio" / "Stay in Touch" + contact info: phone,
  email, address + contact form: name, email, subject, message, Send
  button) → Footer (near-black `#0d0d0d` bg, "Let's work together!"
  + email + social icons: Pinterest, Facebook, Twitter, Dribbble +
  copyright).
- **Design tokens extracted from `css/style.css`:**
  - **Font:** `"Open Sans"` (Google Fonts, weights 300/400/600/700).
  - **Primary text:** `#222121` (near-black).
  - **Secondary text:** `#868686` (medium gray).
  - **Light text / accent:** `#d3d3d3` (light gray).
  - **Brand accent:** `#cc1847` (red — active dot indicator).
  - **Dark section bg:** `#222121` (milestones), `#0d0d0d` (footer),
    black with overlay (contact).
  - **Button style:** `.site-btn` — uppercase, 12px, min-width 135px,
    font-weight 600, padding 18px 10px 20px, border-top/bottom 2px solid
    `#222121`, transparent bg, color `#222121`. Variant `.light` for
    dark backgrounds: white border/text/bg.
  - **Section padding:** `.spad` and `.sp-pad` (consistent section
    padding across all sections).
  - **Icon color:** `#d3d3d3` (services icon-box), `#7a7a7a` (arrow btn).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/focuspoint-<n>/<w>/<h>`); icons → lucide-react;
  Open Sans via Google Fonts `<link>`; forms prevent default (no backend);
  dark palette with `#222121` primary in `@theme`; red accent `#cc1847`
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Focuspoint lives in `apps/focuspoint` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Focuspoint", anchor links to the page's sections, a search icon button,
and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Focuspoint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Focuspoint" and links to
  Home, About Us, Services, Portfolio, Blog, and Contact
- **AND** the navbar SHALL show a search icon button
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Navbar is fixed/sticky

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL remain visible (sticky/fixed position)

### Requirement: Hero section

The system SHALL render a hero section with a large background image
slideshow and headline text.

#### Scenario: Hero headline

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL display the title "Focuspoint"
- **AND** the hero SHALL display the subtitle "We Create Awesome
  Photographies and more"

#### Scenario: Hero background images

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL display at least one background image from
  `picsum.photos/seed/focuspoint-hero-<n>/1920/800`

### Requirement: Intro section

The system SHALL render an introduction section with a heading, body text,
a CTA button, and a large image.

#### Scenario: Intro content

- **GIVEN** the intro section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the subtitle "Amazing Studio"
- **AND** the section SHALL show the heading "We Are So Creative"
- **AND** the section SHALL show a body paragraph
- **AND** the section SHALL show a "Read More" button

#### Scenario: Intro layout

- **GIVEN** the intro section is rendered
- **WHEN** the page loads
- **THEN** the text content SHALL occupy the left side (col-xl-4)
- **AND** the image SHALL occupy the right side (col-xl-7)

### Requirement: Portfolio section

The system SHALL render a masonry-style image grid showing portfolio
items with hover overlay.

#### Scenario: Portfolio grid

- **GIVEN** the portfolio section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL display 7 portfolio items
- **AND** each item SHALL show a background image from
  `picsum.photos/seed/focuspoint-port-<n>/<w>/<h>`

#### Scenario: Portfolio hover overlay

- **GIVEN** the portfolio section is rendered
- **WHEN** the user hovers over a portfolio item
- **THEN** an overlay SHALL appear with the item title and category
  (e.g. "Summer in the Desert" / "Landscape Photography")

### Requirement: Milestones section

The system SHALL render a statistics section with dark background and
four stat counters.

#### Scenario: Milestones content

- **GIVEN** the milestones section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show 4 stat items with icons, numbers, and
  labels
- **AND** the section background SHALL be `#222121` (dark charcoal)
- **AND** the stat items SHALL use lucide-react icons (Gamepad2, Trophy,
  Clock, Monitor)

#### Scenario: Milestones layout

- **GIVEN** the milestones section is rendered
- **WHEN** the page loads
- **THEN** the 4 stats SHALL be laid out in a 4-column grid (lg:col-3)

### Requirement: Services section

The system SHALL render a services section with heading, body text, a
CTA button, and four service icon boxes.

#### Scenario: Services content

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the subtitle "Amazing Studio"
- **AND** the section SHALL show the heading "See What We Offer"
- **AND** the section SHALL show 4 service items: "Video Footages",
  "Photo Shootings", "Photo Albums", "Original Ideas"

#### Scenario: Service icon boxes

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **AND** each service item SHALL have a lucide-react icon, a heading,
  and a description paragraph
- **AND** an arrow navigation link SHALL appear below the service items

### Requirement: Contact section

The system SHALL render a contact section with contact information and
a contact form on a dark background.

#### Scenario: Contact info

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the subtitle "Amazing Studio"
- **AND** the section SHALL show the heading "Stay in Touch"
- **AND** the section SHALL show phone, email, and address info with
  lucide-react icons

#### Scenario: Contact form

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the form SHALL contain fields: name (text), email (email),
  subject (text), message (textarea)
- **AND** the form SHALL show a "Send" button with `.site-btn.light`
  styling

#### Scenario: Form submission prevention

- **GIVEN** the contact form is rendered
- **WHEN** the user clicks "Send"
- **THEN** the form SHALL prevent default submission
- **AND** the form SHALL NOT make any backend requests

### Requirement: Footer section

The system SHALL render a footer with a CTA heading, email, social links,
and copyright.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show the heading "Let's Work Together!"
- **AND** the footer SHALL show the email "office@template.com"
- **AND** the footer SHALL show social links (Pinterest, Facebook,
  Twitter, Dribbble) using lucide-react icons
- **AND** the footer SHALL show a copyright line
- **AND** the footer SHALL link to `https://www.componentdock.com/`
  (branded as "Component Dock")

#### Scenario: Footer styling

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer background SHALL be `#0d0d0d` (near-black)
- **AND** text and icons SHALL be white

## Verification checklist

- [ ] Navbar renders with correct links, search icon, and dark-mode toggle
- [ ] Hero section displays with background image and headline text
- [ ] Intro section shows "Amazing Studio" / "We Are So Creative" + image
- [ ] Portfolio grid shows 7 items with hover overlays
- [ ] Milestones section shows 4 stats on dark background
- [ ] Services section shows 4 icon boxes + arrow link
- [ ] Contact section shows info + form with correct fields
- [ ] Footer shows CTA, email, social links, copyright, and Component Dock link
- [ ] All sections use correct design tokens (Open Sans, #222121, #cc1847)
- [ ] No references to ColorLib in any app code or comments
- [ ] Placeholder images use seeded picsum URLs
- [ ] Footer links to componentdock.com
- [ ] Tests pass at 100% coverage
- [ ] Per-app gate passes: `bash scripts/verify-app.sh focuspoint`
