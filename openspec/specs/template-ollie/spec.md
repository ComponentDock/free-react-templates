# Template: Ollie (Skateboarding Personal Site)

## Purpose

Ollie is a single-page skateboarding personal-site template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Skater" website template design
(source: https://colorlib.com/wp/template/skater/), built under a
DIFFERENT name (Ollie — a skateboarding trick) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Skater" — skateboarding personal site template
  (source: https://colorlib.com/wp/template/skater/).
- **Section order (1:1, from source DOM):**
  1. Navbar: "Ollie" logo text, links Home, Services, About, Team, Pricing,
     FAQ, Testimonials, Blog, Contact.
  2. Hero carousel: full-width background images with headline and CTA button,
     auto-advancing slides.
  3. Services grid: 6 cards with icons — Skate for Beginners, Personal
     Training, Best Skater, Advance Skater, Novice to Pro, Skate Boarding.
     Each card has an icon, title, and short description.
  4. Performance split section: image on the left, text with checklist items
     on the right. Dark background.
  5. Mentor split section: text with description on the left, image on the
     right (reversed layout from Performance section). Dark background.
  6. Video/About section: background image with a play-button overlay for a
     video modal, plus 4 stat counters: 30+ Years of Experience, 4+ Expert
     Trainers, 4+ Professional Trainers, 1500+ Happy Members.
  7. Team grid: 3 team members, each with a photo, name, role, and social
     media icon links (Facebook, Twitter/X, Instagram, LinkedIn).
  8. Pricing section: 3-column pricing table — Basic ($47/yr), Premium
     ($200/yr), Professional ($750/yr). Each tier shows a feature checklist
     and a "Buy Now" button. The Premium tier is highlighted as featured.
  9. FAQ accordion: 8 questions displayed in 2 columns with expand/collapse
     accordion behavior.
  10. Testimonials carousel: 4 testimonials, each with a quote, author photo,
      author name. Carousel with prev/next navigation.
  11. Blog grid: 2 blog post cards, each with an image, title, date, author,
      excerpt text, and a "Read More" link.
  12. Contact section: a contact form with fields for First Name, Last Name,
      Email, and Message, plus a sidebar CTA (e.g. "Get in Touch" heading
      with a short description).
  13. Footer: About Us text, Features link list, Newsletter subscribe form
      (email input + subscribe button), social media links, and a
      "Component Dock" link (https://www.componentdock.com/).
- **Design tokens:**
  - Brand color: **#ff8b00** (orange) — CTAs, accents, highlights.
  - Dark backgrounds: **#222222**, **#333333** — page and section surfaces.
  - Fonts: **Oswald** (headings/display) + **Rubik** (body text) via
    Google Fonts.
  - Overall theme: dark background with orange accent, skateboarding imagery.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ollie-<n>/<w>/<h>`); icons → lucide-react; Oswald
  - Rubik via Google Fonts; repo-standard Navbar + Footer chrome; testimonial
    carousel and FAQ accordion with no extra dependencies; footer MUST link
    https://www.componentdock.com/.

Ollie lives in `apps/ollie` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Ollie" and
anchor links to the page's sections.

#### Scenario: Navbar content

- **GIVEN** the Ollie page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL display the logo text "Ollie"
- **AND** the navbar SHALL contain links to Home, Services, About, Team,
  Pricing, FAQ, Testimonials, Blog, and Contact

#### Scenario: Navbar scroll behavior

- **GIVEN** the Ollie page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the navbar SHALL remain visible (sticky or fixed) at the top of
  the viewport

### Requirement: Hero carousel

The system SHALL render a full-width hero carousel with background images,
a headline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the Ollie page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL contain at least one full-width background image
- **AND** the hero SHALL display a headline text
- **AND** the hero SHALL contain a call-to-action button

#### Scenario: Hero carousel navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the carousel has multiple slides
- **THEN** the slides SHALL advance automatically on a timed interval
- **AND** the user SHALL be able to navigate between slides (prev/next or
  indicator dots)

### Requirement: Services section

The system SHALL render a services grid section with six service cards.

#### Scenario: Services content

- **GIVEN** the Ollie page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL contain a heading
- **AND** it SHALL show exactly 6 service cards in a grid layout
- **AND** each card SHALL contain an icon, a title, and a description
- **AND** the service titles SHALL be: Skate for Beginners, Personal
  Training, Best Skater, Advance Skater, Novice to Pro, Skate Boarding

### Requirement: Performance section

The system SHALL render a performance split section with an image on the
left and text content with a checklist on the right.

#### Scenario: Performance content

- **GIVEN** the Ollie page is rendered
- **WHEN** the performance section is displayed
- **THEN** the section SHALL show an image on the left side
- **AND** it SHALL show text content and a checklist of items on the right
  side
- **AND** the section SHALL have a dark background

### Requirement: Mentor section

The system SHALL render a mentor split section with text content on the
left and an image on the right (reversed layout from the Performance
section).

#### Scenario: Mentor content

- **GIVEN** the Ollie page is rendered
- **WHEN** the mentor section is displayed
- **THEN** the section SHALL show text content on the left side
- **AND** it SHALL show an image on the right side
- **AND** the layout SHALL be the reverse of the Performance section
- **AND** the section SHALL have a dark background

### Requirement: Video/About section

The system SHALL render a video/about section with a play-button overlay
and four stat counters.

#### Scenario: Video play button

- **GIVEN** the Ollie page is rendered
- **WHEN** the video/about section is displayed
- **THEN** the section SHALL show a background image with a play-button
  overlay
- **AND** clicking the play button SHALL open a video modal or navigate to
  a video URL

#### Scenario: Stats counters

- **GIVEN** the Ollie page is rendered
- **WHEN** the video/about section is displayed
- **THEN** the section SHALL show 4 stat counters
- **AND** the counters SHALL display: 30+ Years of Experience, 4+ Expert
  Trainers, 4+ Professional Trainers, 1500+ Happy Members

### Requirement: Team section

The system SHALL render a team grid with three team member cards.

#### Scenario: Team content

- **GIVEN** the Ollie page is rendered
- **WHEN** the team section is displayed
- **THEN** the section SHALL contain a heading
- **AND** it SHALL show exactly 3 team member cards in a grid
- **AND** each card SHALL display a photo, name, and role
- **AND** each card SHALL contain social media icon links (at minimum
  Facebook and Twitter/X)

### Requirement: Pricing section

The system SHALL render a pricing section with three pricing tiers in a
column layout.

#### Scenario: Pricing tiers

- **GIVEN** the Ollie page is rendered
- **WHEN** the pricing section is displayed
- **THEN** the section SHALL contain a heading
- **AND** it SHALL show 3 pricing tiers: Basic, Premium, and Professional
- **AND** the Basic tier SHALL show $47/yr
- **AND** the Premium tier SHALL show $200/yr
- **AND** the Professional tier SHALL show $750/yr

#### Scenario: Pricing tier details

- **GIVEN** the pricing section is displayed
- **WHEN** a user views a pricing tier
- **THEN** each tier SHALL display a list of features included
- **AND** each tier SHALL contain a "Buy Now" button
- **AND** the Premium tier SHALL be visually highlighted as the featured
  plan

### Requirement: FAQ section

The system SHALL render an FAQ section with eight accordion questions
arranged in two columns.

#### Scenario: FAQ content

- **GIVEN** the Ollie page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** the section SHALL contain a heading
- **AND** it SHALL show 8 question items
- **AND** the questions SHALL be arranged in a 2-column layout

#### Scenario: FAQ accordion behavior

- **GIVEN** the FAQ section is displayed with all questions collapsed
- **WHEN** the user clicks on a question
- **THEN** the answer for that question SHALL expand and become visible
- **AND** clicking the same question again SHALL collapse the answer

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with four testimonials.

#### Scenario: Testimonials content

- **GIVEN** the Ollie page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL contain a heading
- **AND** it SHALL contain at least 4 testimonials
- **AND** each testimonial SHALL display a quote, an author photo, and the
  author name

#### Scenario: Testimonials carousel navigation

- **GIVEN** the testimonials section is displayed
- **WHEN** the user interacts with the carousel
- **THEN** the user SHALL be able to navigate between testimonials using
  previous/next controls or indicator dots

### Requirement: Blog section

The system SHALL render a blog grid with two blog post cards.

#### Scenario: Blog content

- **GIVEN** the Ollie page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL contain a heading
- **AND** it SHALL show exactly 2 blog post cards in a grid
- **AND** each card SHALL display an image, title, date, author, and
  excerpt text
- **AND** each card SHALL contain a "Read More" link

### Requirement: Contact section

The system SHALL render a contact section with a form and a sidebar CTA.

#### Scenario: Contact form

- **GIVEN** the Ollie page is rendered
- **WHEN** the contact section is displayed
- **THEN** the section SHALL contain a contact form
- **AND** the form SHALL have fields for First Name, Last Name, Email, and
  Message
- **AND** the form SHALL contain a submit button

#### Scenario: Contact sidebar CTA

- **GIVEN** the contact section is displayed
- **WHEN** the user views the contact area
- **THEN** there SHALL be a sidebar or adjacent area with a CTA heading
  and descriptive text inviting the user to get in touch

### Requirement: Footer

The system SHALL render a footer with an about section, feature links,
newsletter subscribe, social links, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the Ollie page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show an "About Us" section with descriptive
  text
- **AND** it SHALL show a list of feature links
- **AND** it SHALL show a newsletter subscribe form with an email input
  and a subscribe button
- **AND** it SHALL show social media links (Facebook, Twitter/X, Instagram,
  LinkedIn or similar)
- **AND** it SHALL contain a link to https://www.componentdock.com/
  ("Component Dock")

### Requirement: Design tokens

The system SHALL use the Ollie design tokens consistently across all
components.

#### Scenario: Brand color

- **GIVEN** any component is rendered on the Ollie page
- **WHEN** the brand accent color is used
- **THEN** the color SHALL be #ff8b00 (orange)

#### Scenario: Dark backgrounds

- **GIVEN** the Ollie page is rendered
- **WHEN** dark section backgrounds are displayed
- **THEN** the background colors SHALL use #222222 or #333333

#### Scenario: Typography

- **GIVEN** the Ollie page is rendered
- **WHEN** headings are displayed
- **THEN** the heading font family SHALL be Oswald (via Google Fonts)
- **AND** when body text is displayed, the body font family SHALL be
  Rubik (via Google Fonts)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Ollie app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Ollie — Skateboarding Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh ollie` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero carousel, services,
      performance, mentor, video/about, team, pricing, faq, testimonials,
      blog, contact, footer)
- [ ] Design tokens in `@theme`: brand orange `#ff8b00`, dark surfaces
      `#222222` / `#333333`
- [ ] Fonts: Oswald + Rubik via Google Fonts
- [ ] Dark-themed throughout with orange accent
- [ ] Hero carousel with full-width background images
- [ ] FAQ accordion with 8 questions in 2 columns
- [ ] Testimonials carousel with 4 items
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images seeded (`picsum.photos/seed/ollie-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge
      URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
