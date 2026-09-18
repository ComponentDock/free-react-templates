# Template: Relic (Mining / Industrial Landing Template)

## Purpose

Relic is a single-page mining/industrial landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Unearth" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Unearth" — mining / industrial landing template
  (source: https://colorlib.com/wp/template/unearth/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unearth/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`unearth-free-template.jpg`) shows the
  visual design: a dark industrial aesthetic with orange accents, hero
  sliders with mining imagery, and a gradient footer.
- **Section order (1:1):**
  1. Top bar (contact info + social — gradient purple→orange bg)
  2. Navbar (logo "Relic" in orange, nav links: Home, Services, About Us,
     Press, Testimonials, Blog, Contact; sticky on scroll)
  3. Hero slider (owl-carousel, 2 slides with full-bleed background images,
     dark overlay, white headline + white outline CTA button)
  4. Services (two alternating image+text split blocks: "Land & Property",
     "Surface Mining" — image left/text right, then swapped)
  5. Features grid (6 icon cards on light bg: Surface Mining, Gold Nuggets,
     Soil Carrier, Gold Refinery, Anvil Blacksmith, Gold Melt Crucible)
  6. About / Counter section (video thumbnail + 4 animated counters on
     dark bg: 30+ years, 300+ engineers, 2000+ employees, 1500+ golds)
  7. Team (6 member cards in 3-column grid, circular photos, social icons)
  8. Pricing (3 tiers on light bg: Basic $47, Premium $200, Professional
     $750 — checkmark lists, highlighted "Premium" with primary btn)
  9. FAQ (2-column, 8 Q&A items — within the same light-bg section)
  10. Press (3 articles with dates on white bg)
  11. Testimonials (carousel slider, 4 testimonials with circular photos,
      italic blockquotes on light bg)
  12. Blog (2 posts with images, date + author metadata)
  13. Contact (form + sidebar text on light bg)
  14. Footer (gradient purple→orange bg: About Us, Features links,
      Newsletter form, social icons, copyright)

- **Design tokens extracted from `css/style.css`:**
  - Primary brand **orange `#ff8b00`** (buttons, active states, accents,
    checkmarks, dropdown borders, section headings, social hover).
  - Footer/top-bar gradient: **`#7a5e86` → `#a75e67` → `#f77b2e`**
    (purple → rose → orange, left-to-right).
  - Body text: `#939393` (gray); headings: `#000` (black).
  - Light bg sections: Bootstrap `#f8f9fa` (`.bg-light`).
  - Dark bg section (About/Counters): `#343a40` (Bootstrap `.bg-dark`).
  - Fonts: **"Oswald"** (headings, 400 + 700, uppercase, Google Fonts) +
    **"Rubik"** (body, 300 + 400 + 700, Google Fonts).
  - Buttons: white outline on hero (`btn-outline-white`, 2px border);
    orange primary (`btn-primary` = `#ff8b00`) with white text; secondary
    for pricing.
  - Team cards: white bg, 1px `#e9ecef` border, hover lift `-4px` with
    shadow.
  - Testimonial blockquotes: Georgia serif italic, white bg, orange active
    carousel dots.
  - Counter numbers: white, 4rem, with 50px underline bar
    (`rgba(255,255,255,0.3)`).
  - Section padding: `7rem 0` desktop, `3rem 0` mobile.
  - Hero height: `calc(100vh - 196px)`, min 577px.

- **Recreation decisions:**
  - Photos → seeded picsum placeholders (`picsum.photos/seed/relic-<n>/<w>/<h>`).
  - Icons → lucide-react (replacing flaticon/icomoon mining icons).
  - Fonts → Google Fonts `<link>` for Oswald + Rubik.
  - Hero slider → React state-based carousel (no owl-carousel dependency).
  - Testimonial slider → React state-based carousel.
  - Animated counters → React useEffect + requestAnimationFrame.
  - Video play button → overlay with play icon (no actual video embed).
  - Forms → prevent default (no backend).
  - No assets copied; no ColorLib references in app code.
  - Footer links to `https://www.componentdock.com/` ("Component Dock").

## Requirements

### Requirement: Top bar

The system SHALL render a top bar with contact info (email, phone) and
social links (Twitter, Instagram) on a gradient background.

#### Scenario: Top bar content

- **GIVEN** the Relic page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL display an email address and phone number
- **AND** the top bar SHALL display Twitter and Instagram social links
- **AND** the top bar SHALL have a gradient background (`#7a5e86` →
  `#a75e67` → `#f77b2e`)

#### Scenario: Top bar responsive

- **GIVEN** the viewport is less than 768px wide
- **WHEN** the top bar is rendered
- **THEN** the email and phone text labels SHALL be hidden
- **AND** the icon labels SHALL still be visible

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with the site name "Relic"
in the primary orange color, navigation links, and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Relic page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Relic" in orange (`#ff8b00`)
- **AND** the navbar SHALL show links to Home, Services, About, Press,
  Testimonials, Blog, and Contact

#### Scenario: Navbar sticky behavior

- **GIVEN** the Relic page is scrolled past the hero
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL become sticky with a white background
- **AND** the logo color SHALL change to orange
- **AND** nav link colors SHALL change from white to black

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is less than 992px wide
- **WHEN** the user taps the hamburger menu icon
- **THEN** a slide-in mobile menu SHALL appear from the right
- **AND** the mobile menu SHALL contain all navigation links

### Requirement: Hero slider

The system SHALL render a full-bleed hero slider with two slides, each
featuring a background image, dark overlay, white headline, description
text, and a white outline CTA button.

#### Scenario: Hero slide content

- **GIVEN** the hero slider is rendered
- **WHEN** the page loads
- **THEN** slide 1 SHALL display "Welcome to Relic" headline
- **AND** slide 2 SHALL display "New Generation of Mining" headline
- **AND** each slide SHALL have a "Get in touch" outline button

#### Scenario: Hero slide transition

- **GIVEN** the hero slider is visible
- **WHEN** the auto-advance interval fires
- **THEN** the slider SHALL transition to the next slide
- **AND** navigation arrows SHALL allow manual prev/next

#### Scenario: Hero overlay

- **GIVEN** a hero slide is displayed
- **WHEN** rendered
- **THEN** a dark overlay (`rgba(0,0,0,0.3)`) SHALL be applied over the
  background image
- **AND** the headline text SHALL be white and uppercase

### Requirement: Services section

The system SHALL render two alternating image+text split blocks describing
services ("Land & Property" and "Surface Mining").

#### Scenario: Services layout

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** block 1 SHALL show an image on the left and text on the right
- **AND** block 2 SHALL show text on the left and image on the right
- **AND** each block SHALL have a heading, two paragraphs, and a
  checkmark list with 4 items

#### Scenario: Services checkmark styling

- **GIVEN** a services checkmark list is displayed
- **WHEN** rendered
- **THEN** each checkmark icon SHALL be orange (`#ff8b00`)

### Requirement: Features grid

The system SHALL render a 3-column grid of 6 feature cards with mining-
themed icons, titles, and descriptions on a light background.

#### Scenario: Features grid content

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** 6 feature cards SHALL be displayed in a 3-column grid
- **AND** each card SHALL have an icon, a title, and a short description
- **AND** the section background SHALL be light (`#f8f9fa`)

#### Scenario: Features card content

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** the card titles SHALL be: Surface Mining, Gold Nuggets,
  Soil Carrier, Gold Refinery, Anvil Blacksmith, Gold Melt Crucible

### Requirement: About / Counter section

The system SHALL render an about section with a video thumbnail and four
animated counters on a dark background.

#### Scenario: About section layout

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** a video thumbnail with a play button overlay SHALL be displayed
- **AND** 4 counter blocks SHALL be displayed below the video
- **AND** the section background SHALL be dark

#### Scenario: Counter animation

- **GIVEN** the counter section is visible
- **WHEN** the section scrolls into view
- **THEN** the counters SHALL animate from 0 to their target values
- **AND** the counters SHALL show: 30+, 300+, 2000+, 1500+
- **AND** counter captions SHALL be: Year of Experience, Expert Engineers,
  Number of Employees, Number of Golds

#### Scenario: Counter styling

- **GIVEN** a counter is displayed
- **WHEN** rendered
- **THEN** the number SHALL be white, 4rem font size
- **AND** a 50px horizontal bar SHALL appear below each number
- **AND** the caption SHALL be white, 14px, letter-spaced

### Requirement: Team section

The system SHALL render a team section with 6 member cards in a 3-column
grid, each showing a circular photo, name, role, and social icons.

#### Scenario: Team card content

- **GIVEN** the team section is rendered
- **WHEN** the page loads
- **THEN** 6 team member cards SHALL be displayed
- **AND** each card SHALL have a circular profile photo, name, role
  subtitle, and 3 social icon buttons (Facebook, Twitter, Instagram)

#### Scenario: Team card hover

- **GIVEN** a team card is displayed
- **WHEN** the user hovers over the card
- **THEN** the card SHALL lift up 4px
- **AND** a subtle box shadow SHALL appear

#### Scenario: Team social icon hover

- **GIVEN** a social icon button is displayed
- **WHEN** the user hovers over it
- **THEN** the icon border and background SHALL change to orange (`#ff8b00`)

### Requirement: Pricing section

The system SHALL render a pricing section with 3 tier cards on a light
background.

#### Scenario: Pricing tiers

- **GIVEN** the pricing section is rendered
- **WHEN** the page loads
- **THEN** 3 pricing cards SHALL be displayed: Basic ($47/yr),
  Premium ($200/yr), Professional ($750/yr)
- **AND** each card SHALL have a plan name, price, feature checklist,
  and a "Buy Now" button

#### Scenario: Pricing feature lists

- **GIVEN** a pricing card is displayed
- **WHEN** rendered
- **THEN** Basic SHALL have 2 included features and 3 excluded
- **AND** Premium SHALL have 4 included features and 1 excluded
- **AND** Professional SHALL have 5 included features and 0 excluded

#### Scenario: Pricing button styles

- **GIVEN** pricing cards are rendered
- **WHEN** the page loads
- **THEN** the Premium card "Buy Now" button SHALL use the primary
  orange style with white text
- **AND** Basic and Professional buttons SHALL use the secondary style

### Requirement: FAQ section

The system SHALL render a FAQ section with 8 questions and answers in a
2-column layout within the pricing light-bg section.

#### Scenario: FAQ layout

- **GIVEN** the FAQ section is rendered
- **WHEN** the page loads
- **THEN** 8 FAQ items SHALL be displayed in a 2-column layout
- **AND** each item SHALL have a question heading and an answer paragraph

#### Scenario: FAQ heading

- **GIVEN** the FAQ section is rendered
- **WHEN** the page loads
- **THEN** the section title SHALL be "Frequently Ask Questions"
- **AND** the title SHALL be orange (primary color)

### Requirement: Press section

The system SHALL render a press section with 3 article entries.

#### Scenario: Press layout

- **GIVEN** the press section is rendered
- **WHEN** the page loads
- **THEN** a "Press" heading SHALL appear on the left
- **AND** 3 press articles SHALL be listed on the right
- **AND** each article SHALL have a date, title link, and description

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with 4 testimonial cards
on a light background.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** 4 testimonials SHALL be available in the carousel
- **AND** each testimonial SHALL have an italic blockquote, circular
  photo, and person name

#### Scenario: Testimonial styling

- **GIVEN** a testimonial card is displayed
- **WHEN** rendered
- **THEN** the blockquote SHALL use Georgia serif font, italic
- **AND** the blockquote background SHALL be white
- **AND** carousel navigation dots SHALL use orange for the active dot

### Requirement: Blog section

The system SHALL render a blog section with 2 post previews.

#### Scenario: Blog layout

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** 2 blog post cards SHALL be displayed side by side
- **AND** each card SHALL have a featured image, title, date/author
  metadata, excerpt, and a "Read More" link

### Requirement: Contact section

The system SHALL render a contact section with a form and sidebar text
on a light background.

#### Scenario: Contact form

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the form SHALL have fields for: first name, last name
  (side by side), email, message textarea
- **AND** a "Send Message" submit button SHALL be displayed

#### Scenario: Contact sidebar

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** a sidebar text block SHALL be displayed to the right of the form
- **AND** the sidebar SHALL have a heading, description, and a
  "Get Started" primary button

### Requirement: Footer

The system SHALL render a footer with a gradient background, about text,
links, newsletter form, social icons, and copyright.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a gradient background
  (`#7a5e86` → `#a75e67` → `#f77b2e`)
- **AND** the footer SHALL contain: About Us text, Features links,
  Newsletter form, and social icons

#### Scenario: Footer copyright

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a copyright line SHALL be displayed at the bottom
- **AND** the copyright SHALL link to `https://www.componentdock.com/`
  ("Component Dock")

### Requirement: Dark mode

The system SHALL support dark mode via a toggle that adds/removes the
`.dark` class on the document root.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user activates dark mode
- **THEN** the `.dark` class SHALL be toggled on `document.documentElement`
- **AND** all sections SHALL adapt their colors for dark mode

### Requirement: Responsive layout

The system SHALL be fully responsive across desktop, tablet, and mobile
viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport is less than 768px wide
- **WHEN** the page is rendered
- **THEN** the hero heading SHALL reduce to 2rem
- **AND** the features grid SHALL stack to 1 column
- **AND** the team grid SHALL stack to 1 column
- **AND** the pricing grid SHALL stack to 1 column
- **AND** the navbar SHALL show a hamburger menu

## Verification checklist

- [ ] Spec validated: `npm run spec:validate`
- [ ] All sections match the 1:1 section order from the original
- [ ] Design tokens match: orange `#ff8b00`, gradient footer, Oswald + Rubik
- [ ] All images use seeded picsum placeholders
- [ ] No ColorLib references in `apps/relic/`
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` contains `relic.free.componentdock.com`
- [ ] `package.json` homepage is `https://relic.free.componentdock.com`
- [ ] Per-app gate passes: `bash scripts/verify-app.sh relic`
- [ ] 100% test coverage on all new code
