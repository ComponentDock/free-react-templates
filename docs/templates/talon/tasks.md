# Talon — Implementation Tasks

Source design: **Zeta** (`https://colorlib.com/wp/template/zeta/`) → recreation name **talon**. Shipped at https://talon.free.componentdock.com.

Scope: Talon is a single-page modern business landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Zeta" website template design (see TEMPLATES.md), built under a DIFFERENT name ("Talon") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/talon/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Talon.", anchor links to the page's sections, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Talon page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Talon." and links to Home, Services, Elements, Blog, and Contact
  - **AND** the navbar SHALL show a dark-mode toggle button
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. SocialBar
- The system SHALL render a horizontal bar of social media icon links.
- Scenario — Social icons content:
  - **GIVEN** the page is rendered
  - **WHEN** the social bar is displayed
  - **THEN** it SHALL contain links to Facebook, Twitter, Pinterest, Dribbble, Behance, and LinkedIn
  - **AND** each link SHALL open in a new tab

### 3. Hero
- The system SHALL render a full-width hero with a headline, blurb, and a call-to-action button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL contain a level-1 heading "Do you need a modern website?"
  - **AND** it SHALL show "Discover" button linking to services section
- Scenario — Hero background image:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is visible
  - **THEN** it SHALL display a background image

### 4. Services
- The system SHALL render a services grid with 4 service cards.
- Scenario — Services content:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL show the heading "Our Services"
  - **AND** it SHALL render 4 service cards: Web Design, Development, SEO, Marketing
  - **AND** each card SHALL have an icon, title, and description

### 5. Features
- The system SHALL render a features grid with key benefits.
- Scenario — Features content:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it SHALL show the heading "Why Choose Us"
  - **AND** it SHALL render at least 3 feature items

### 6. About
- The system SHALL render an about split with text and image.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL show the heading "About Us"
  - **AND** it SHALL display a description and an image
  - **AND** it SHALL show stats (projects, clients, awards)

### 7. Milestones
- The system SHALL render counter-style milestone stats.
- Scenario — Milestones content:
  - **GIVEN** the page is rendered
  - **WHEN** the milestones section is displayed
  - **THEN** it SHALL show 4 milestone items with numeric values
  - **AND** each milestone SHALL have a label (e.g. "Projects", "Happy Clients")

### 8. Testimonials
- The system SHALL render customer testimonials.
- Scenario — Testimonials content:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL show the heading "What People Say"
  - **AND** it SHALL render at least 2 testimonial cards
  - **AND** each card SHALL have a quote, author name, and role

### 9. Blog
- The system SHALL render blog post previews.
- Scenario — Blog content:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL show the heading "Latest Blog"
  - **AND** it SHALL render 3 blog post cards
  - **AND** each card SHALL have a category, title, excerpt, and read-more link

### 10. Footer
- The system SHALL render a multi-column footer with brand info, links, and a copyright line.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the site name "Talon." and an about blurb
  - **AND** it SHALL show Quick Links and Support columns
  - **AND** it SHALL show Contact Info (address, phone, email)
  - **AND** it SHALL show the copyright year and a Component Dock link
- Scenario — Footer year:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** the copyright line SHALL show the current year

### Cross-cutting requirements

- **App composition** — The system SHALL compose all sections into a complete single-page layout.
  - Scenario — Full page render: **GIVEN** the Talon app is rendered; **WHEN** the page loads; **THEN** it SHALL set the document title to "Talon — Modern Business Template"; **AND** it SHALL include the navbar, social bar, hero, services, features, about, milestones, testimonials, blog, and footer; **AND** it SHALL have a `<main>` landmark containing all content sections
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/talon/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/talon/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/talon` ships on https://talon.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/talon/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/talon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/talon/public/CNAME` = `talon.free.componentdock.com`
  and the package `homepage` = `https://talon.free.componentdock.com`.
