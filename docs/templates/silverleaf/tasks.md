# Silverleaf — Implementation Tasks

Source design: **Elderly** (`https://colorlib.com/wp/template/elderly/`) → recreation name **silverleaf**. Shipped at https://silverleaf.free.componentdock.com.

Scope: Silverleaf is a single-page senior care and elderly living template. It is an original React recreation of the ColorLib free "Elderly" template (preview: https://preview.colorlib.com/theme/elderly/ — elderly care landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/silverleaf/src/App.tsx`:

### 1. Navbar
- The system SHALL render a navbar with the site name "Silverleaf", section links (Home, Services, Testimonials, Blog, About, Contact), social icons, and a hamburger toggle that opens a mobile menu on small screens.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered on a desktop viewport
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "Silverleaf" with a blue accent period
  - **AND** it SHALL show links to Home, Services, Testimonials, Blog, About, Contact
  - **AND** it SHALL show social icon links for Facebook, Twitter, and LinkedIn
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered on a mobile viewport
  - **WHEN** the user taps the hamburger menu button
  - **THEN** a mobile navigation menu SHALL appear with all nav links
  - **AND** the button label SHALL change to "Close menu"
- Scenario — Sticky header on scroll:
  - **GIVEN** the page is scrolled past 60px
  - **WHEN** the scroll event fires
  - **THEN** the header SHALL have a white background and shadow

### 2. Hero
- The system SHALL render a full-viewport hero section with a background image, dark overlay, heading "Expert Care for the Elderly", descriptive text, and a primary pill CTA button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is visible
  - **THEN** it SHALL display the heading "Expert Care for the Elderly"
  - **AND** it SHALL display a descriptive paragraph about care services
  - **AND** it SHALL display a "Get In Touch" pill button linking to #contact
  - **AND** it SHALL have a minimum height of 760px

### 3. FeatureStrip
- The system SHALL render a 3-column feature strip on a light background with icons, subheadings, headings, and "Learn More" links.
- Scenario — Three features:
  - **GIVEN** the page is rendered
  - **WHEN** the feature strip section is visible
  - **THEN** it SHALL display 3 feature items: Independent Living, Senior Care, Patient Care
  - **AND** each item SHALL show "Try Our Services" subheading and a "Learn More" link

### 4. ServicesGrid
- The system SHALL render a 4-column grid of service cards with square images, titles, and descriptions.
- Scenario — Four service cards:
  - **GIVEN** the page is rendered
  - **WHEN** the services grid section is visible
  - **THEN** it SHALL display 4 service cards with images and "Special Care" titles
  - **AND** each card SHALL have a description paragraph

### 5. StatsCounter
- The system SHALL render a full-width counter section with a brand blue background and 4 statistics: Rooms Available, Nurse Staff, Senior Living, Happy People.
- Scenario — Counter stats:
  - **GIVEN** the page is rendered
  - **WHEN** the counter section is visible
  - **THEN** it SHALL display 4 statistics with large numbers and labels

### 6. AboutSection
- The system SHALL render a split about section with heading, description, checklist with blue checkmarks, and a media card with blue text overlay.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is visible
  - **THEN** it SHALL display the heading "Senior Care Center is for Your Family"
  - **AND** it SHALL show a checklist with 3 items and blue checkmarks
  - **AND** it SHALL display a media card with "You can live here with love" text

### 7. CoverGoals
- The system SHALL render a full-width background image section with overlay, heading, and 3 circle-icon feature items.
- Scenario — Goals display:
  - **GIVEN** the page is rendered
  - **WHEN** the cover section is visible
  - **THEN** it SHALL display "Our Goal is to Make Your Life Better" heading
  - **AND** it SHALL show 3 feature items: Expert Nursing Staff, Community Living, Medical Support

### 8. Testimonials
- The system SHALL render 3 testimonial cards on a light background with circular avatars, italic quotes, and author citations.
- Scenario — Testimonial cards:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is visible
  - **THEN** it SHALL display 3 testimonial cards with quotes and author names

### 9. Opportunities
- The system SHALL render 2 media cards with blue text panels and background images.
- Scenario — Opportunity cards:
  - **GIVEN** the page is rendered
  - **WHEN** the opportunities section is visible
  - **THEN** it SHALL display 2 cards: "Join Our Community" and "Volunteer With Us"
  - **AND** each card SHALL have a "Learn More" outline-white button

### 10. AboutCTA
- The system SHALL render a brand blue background section with illustration, heading, blockquote, and white CTA button.
- Scenario — CTA display:
  - **GIVEN** the page is rendered
  - **WHEN** the about CTA section is visible
  - **THEN** it SHALL display "Senior & Elder Home Care Center" heading
  - **AND** it SHALL show a blockquote "We care for elderly people"
  - **AND** it SHALL have a "Learn More" white button

### 11. BlogNews
- The system SHALL render 3 blog cards with cover images, meta bars with blue icons, titles, and excerpts.
- Scenario — Blog posts:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is visible
  - **THEN** it SHALL display 3 blog cards with meta information (date, author, comments)

### 12. Footer
- The system SHALL render a light gray footer with 4 columns (About, Quick Links, Helpful Links, Resources), social icons, and copyright with Component Dock link.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is visible
  - **THEN** it SHALL display 4 columns of links
  - **AND** it SHALL show social icons for Facebook, Twitter, Instagram, LinkedIn
  - **AND** it SHALL display a "More templates at Component Dock" link to https://www.componentdock.com/

### Cross-cutting requirements

- **Design tokens fidelity** — The system SHALL use design tokens matching the original ColorLib Elderly template.
  - Scenario — Brand colors and fonts: **GIVEN** the template is built; **WHEN** design tokens are applied; **THEN** brand color SHALL be #3c90f7; **AND** body font SHALL be Open Sans; **AND** heading font SHALL be Playfair Display; **AND** buttons SHALL use pill shape (rounded-full)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/silverleaf/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/silverleaf/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/silverleaf` ships on https://silverleaf.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/silverleaf/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/silverleaf/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/silverleaf/public/CNAME` = `silverleaf.free.componentdock.com`
  and the package `homepage` = `https://silverleaf.free.componentdock.com`.
