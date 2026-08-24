# Template: Crux (Business Landing)

## Purpose

Crux is a single-page business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Olla" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a corporate/business template with a dark navy header bar,
hero slider with email input CTA, services (3 icons), about section with
feature list, brand logos carousel, FAQ accordion + image, pricing cards,
gallery overlay grid, newsletter CTA band, and a light gray footer with
logo, links, newsletter form, and social icons. Crux recreates that
structure section-for-section with matching layout, colors, typography,
and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Olla" — free business website template
  (source: https://colorlib.com/wp/template/olla/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/olla/`
  (HTTP 200, 639 lines). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`olla-colorlib-template.jpg`) confirms the
  visual design (dark navy header bar, blue brand accents, white content
  sections, light gray footer).
- **Section order (1:1):**
  1. **Header top bar** (`header-top`): dark navy `#041735` background,
     white text with announcement + "Learn More" button (pill, white text).
  2. **Header bottom** (`header-bottom`): logo + nav (Home, About, Services,
     Portfolio, Blog with submenu, Contact) + "Free Quote" CTA button
     (blue `#2845BA`, `btn_1` class). Sticky on scroll.
  3. **Hero / Slider** (`slider-area`): headline "Build your website in
     record time." + subtext + email input + "Get Free Quote" button;
     right-side hero image; decorative shape below.
  4. **Services / Categories** (`categories-area`): centered heading
     "Olla helps you to spruk your product's features." + 3 service cards
     (Unlimited Components, Awesome Support, Responsive Design) each with
     SVG icon and description text.
  5. **About** (`about-area1`): left image + right text block "All the
     features you'd expect." + 3 feature items (Tons of pre-made sections,
     Complete CMS integration, Stellar after-sales support).
  6. **Brand logos** (`brand-area`): heading "You'll be in good company."
     - subtext + "Meet Our Customers" CTA button + horizontal carousel of
       brand logos (dark-on-white).
  7. **FAQ / Accordion + Image** (`project-us`): left side heading "Work
     fast, create beautifully." + 3 Bootstrap accordion items; right side
     image.
  8. **Pricing** (`pricing-card-area`): pricing cards (likely 2–3 tiers).
  9. **Gallery** (`gallery-area`): overlay grid of portfolio/project images
     with hover overlay showing title + description.
  10. **Newsletter CTA** (`wantToWork-area`): "Create your amazing website
      with Olla" + "Start Free Trial" CTA button.
  11. **Footer** (`footer-wrapper`): light gray `#F1FBFF` background;
      logo + Quick Links + Support + Newsletter form + social icons
      (Facebook, Instagram, LinkedIn, YouTube). Copyright with Colorlib
      attribution (replaced with Component Dock link).
- **Design tokens extracted from `assets/css/style.css`:**
  - Brand colors: **#2845BA** (royal blue — primary CTA, buttons, links,
    accents), **#041735** (dark navy — header top bar, headings), **#F1FBFF**
    (very light blue-gray — footer background), **#ec583a** (orange — button
    hover sweep).
  - Body text: **#5C6168** (gray), headings: **#041735** (dark navy).
  - Font: **"Cabin"** (sans-serif, headings, weight 500–700) + **"Open Sans"**
    (sans-serif, body, weight 400–800) via Google Fonts.
  - Buttons: `.btn_1` — blue filled `#2845BA`, 4px border-radius, white
    text, uppercase-ish; hover: transparent with blue border. `.btn2` —
    pill shape (30px radius), white text on dark bg.
  - Section padding: 120px top/bottom on desktop.
  - Section titles: Cabin font, 40px h2, weight 700, color `#041735`.
    Overline text in blue `#2845BA`, 13px uppercase with letter-spacing.
  - Subtitle text in sections: `#656565`, 18px.
  - Gray backgrounds: `.gray-bg` = `#F1FBFF`.
  - Card borders: `#DBDEE9` light blue-gray.
  - Footer: light gray `#F1FBFF`, headings in `#041735`, links in `#5C6168`.
- **Recreation decisions:** repo-standard Navbar (site name "Crux", Home
  link, dark-mode toggle) + "Get Started" CTA; hero = seeded picsum photo
  with headline + email input CTA; services as 3-column icon grid with
  lucide icons; about section with photo + feature list; brand logos as
  static row (placeholder logos); FAQ accordion with lucide chevrons;
  pricing cards (3 tiers); gallery with seeded photos + hover overlay;
  newsletter CTA band; footer with newsletter form + Component Dock link;
  all images picsum-seeded (`picsum.photos/seed/crux-N/w/h`); Google Fonts
  via `<link>`.

Crux lives in `apps/crux` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with a dark navy announcement
bar ("This handy little bar is great for informing visitors of various
features. Learn More"), a sticky header with site name "Crux", navigation
links (Home, About, Services, Portfolio, Blog, Contact), and a "Get
Started" CTA button.

#### Scenario: Navbar content

- **GIVEN** the Crux page is rendered
- **THEN** the announcement bar is visible with dark navy background
- **AND** the nav contains links: Home, About, Services, Portfolio, Blog,
  Contact
- **AND** a "Get Started" CTA button is visible
- **AND** the site name/logo "Crux" is displayed

#### Scenario: Sticky header

- **GIVEN** the user scrolls past the announcement bar
- **THEN** the navigation header sticks to the top of the viewport
- **AND** nav links and CTA remain accessible

### Requirement: Hero section

The system SHALL render a hero area with a headline "Build your website in
record time.", descriptive subtext, an email input with "Get Free Quote"
button, and a hero image on the right side.

#### Scenario: Hero content

- **GIVEN** the Crux page is rendered
- **THEN** the headline "Build your website in record time." is visible
- **AND** a descriptive paragraph is shown below the headline
- **AND** an email input field with placeholder "Enter your email" is present
- **AND** a "Get Free Quote" button is adjacent to the input
- **AND** a hero image is displayed to the right

### Requirement: Services section

The system SHALL render a services section with a centered heading, subtext,
and three service cards (Unlimited Components, Awesome Support, Responsive
Design), each with an icon and description.

#### Scenario: Services content

- **GIVEN** the Crux page is rendered
- **THEN** a heading "Crux helps you to showcase your product's features."
  is visible
- **AND** three service cards are displayed in a row
- **AND** each card has a title, icon, and description text

### Requirement: About section

The system SHALL render an about section with a left-side image and right-side
feature list ("All the features you'd expect.") with three items: pre-made
sections, CMS integration, and after-sales support.

#### Scenario: About content

- **GIVEN** the Crux page is rendered
- **THEN** a heading "All the features you'd expect." is visible
- **AND** an about image is displayed on the left
- **AND** three feature items are listed with title and description

### Requirement: Brand logos section

The system SHALL render a brand logos section with a heading "You'll be in
good company.", descriptive text, a "Meet Our Customers" CTA, and a row
of brand logo images.

#### Scenario: Brand logos content

- **GIVEN** the Crux page is rendered
- **THEN** the heading "You'll be in good company." is visible
- **AND** descriptive text is shown below
- **AND** a "Meet Our Customers" button is displayed
- **AND** a row of brand logo images is visible

### Requirement: FAQ accordion section

The system SHALL render a FAQ/accordion section with a heading "Work fast,
create beautifully.", three collapsible accordion items, and a right-side
image.

#### Scenario: FAQ accordion content

- **GIVEN** the Crux page is rendered
- **THEN** the heading "Work fast, create beautifully." is visible
- **AND** three accordion items are displayed
- **AND** the first item is expanded by default
- **AND** clicking an accordion header toggles its content visibility

#### Scenario: FAQ accordion interaction

- **GIVEN** the FAQ section is rendered
- **WHEN** the user clicks on a collapsed accordion header
- **THEN** the accordion content expands
- **AND** other expanded items collapse (single-expand behavior)

### Requirement: Pricing section

The system SHALL render a pricing section with pricing cards showing tier
names, prices, feature lists, and CTA buttons.

#### Scenario: Pricing content

- **GIVEN** the Crux page is rendered
- **THEN** pricing cards are displayed
- **AND** each card shows a tier name, price, feature list, and CTA button

### Requirement: Gallery section

The system SHALL render a gallery section with a grid of project images
that show an overlay with title and description on hover.

#### Scenario: Gallery content

- **GIVEN** the Crux page is rendered
- **THEN** a grid of project images is displayed
- **AND** each image shows a hover overlay with title and short description

### Requirement: Newsletter CTA section

The system SHALL render a newsletter CTA section with a heading "Create your
amazing website with Crux", descriptive text, and a "Start Free Trial" CTA
button.

#### Scenario: Newsletter CTA content

- **GIVEN** the Crux page is rendered
- **THEN** the heading "Create your amazing website with Crux" is visible
- **AND** descriptive text is shown
- **AND** a "Start Free Trial" button is displayed

### Requirement: Footer

The system SHALL render a footer with a light gray background (#F1FBFF),
logo, Quick Links column, Support column, Newsletter form with email input
and submit button, social media icons (Facebook, Instagram, LinkedIn, YouTube),
and a copyright line with a link to https://www.componentdock.com/.

#### Scenario: Footer content

- **GIVEN** the Crux page is rendered
- **THEN** the footer is visible with light gray background
- **AND** a logo is displayed
- **AND** Quick Links column has links (Work, Services, Tips & Tricks)
- **AND** Support column has links (FAQ, Submit Ticket, Contact Us)
- **AND** a newsletter form with email input and submit arrow is present
- **AND** social media icons are displayed
- **AND** copyright text links to https://www.componentdock.com/

## Verification checklist

- [ ] All sections render in the correct order (11 sections total)
- [ ] Dark navy announcement bar matches #041735
- [ ] Sticky header works on scroll
- [ ] Hero email input and CTA button are functional
- [ ] Services cards show 3 items with icons
- [ ] About section shows image + 3 feature items
- [ ] Brand logos row displays placeholder logos
- [ ] FAQ accordion toggles correctly (single-expand)
- [ ] Pricing cards display tiers with features
- [ ] Gallery shows overlay on hover
- [ ] Newsletter CTA button is clickable
- [ ] Footer links to componentdock.com
- [ ] All images use picsum-seeded placeholders
- [ ] Google Fonts (Cabin + Open Sans) load correctly
- [ ] Dark mode toggle works (if implemented)
- [ ] Mobile responsive layout (hamburger menu, stacked sections)
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
