# Blankslate — Implementation Tasks

Source design: **Whitespace** (`https://colorlib.com/wp/template/whitespace/`) → recreation name **blankslate**. Shipped at https://blankslate.free.componentdock.com.

Scope: A Business / Creative Agency template with hero, about, services, counter, projects gallery and case study sections. Recreation of the ColorLib **Whitespace** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Component breakdown

Render order as composed in `apps/blankslate/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "BlankSlate", anchor links to page sections, and a dark background.
- Scenario — Navbar content:
  - **GIVEN** the BlankSlate page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "BlankSlate" and links to Home, About, Work, Pricing, Blog, Contact
  - **AND** the navbar SHALL have a dark background

### 2. Hero
- The system SHALL render a full-width dark hero with a headline, subheading, and a "Get in touch" CTA button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the hero section
  - **THEN** the heading "We Help to Build You the Product" SHALL be displayed
  - **AND** the subheading "Business Solution" SHALL be displayed
  - **AND** a "Get in touch" button SHALL be visible and styled as a yellow pill button

### 3. About
- The system SHALL render a two-column about section with service list items.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the user scrolls to the about section
  - **THEN** the heading "What We Can Do for You" SHALL be displayed
  - **AND** 7 service items SHALL be listed: Market Research, Financial Services, Online Marketing, 24/7 Support, Business Strategy, Data Analysis, Graphic Design

### 4. Services
- The system SHALL render a 4-column responsive grid of service icon cards.
- Scenario — Services content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the services section
  - **THEN** 4 service cards SHALL be displayed in a grid
  - **AND** each card SHALL have an icon with yellow background and a description

### 5. Counter
- The system SHALL render a counter/facts section with animated count-up numbers.
- Scenario — Counter content:
  - **GIVEN** the page is rendered
  - **WHEN** the user scrolls to the counter section
  - **THEN** the heading "Interesting Facts" SHALL be displayed
  - **AND** at least 4 numeric counters SHALL be shown

### 6. Projects
- The system SHALL render a projects section with a grid of project cards.
- Scenario — Projects content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the projects section
  - **THEN** the heading "Recent Projects" SHALL be displayed
  - **AND** 6 project cards SHALL be displayed in a grid

### 7. Testimonials
- The system SHALL render a testimonials section with a yellow background and customer quotes.
- Scenario — Testimonials content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the testimonials section
  - **THEN** the heading "My satisfied customer says" SHALL be displayed
  - **AND** the section SHALL have a yellow (#fcd307) background
  - **AND** at least 3 testimonial items SHALL be shown with name and role

### 8. CaseStudy
- The system SHALL render a case study section with cards.
- Scenario — Case study content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the case study section
  - **THEN** the heading "Case Study" SHALL be displayed
  - **AND** 3 case study cards SHALL be shown

### 9. Pricing
- The system SHALL render a pricing section on a light background with 4 tiers.
- Scenario — Pricing content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the pricing section
  - **THEN** the heading "Our Best Pricing" SHALL be displayed
  - **AND** 4 pricing tiers SHALL be shown: Free, Startup, Premium, Pro
  - **AND** each tier SHALL have a "Get Started" button
  - **AND** the Free tier SHALL be highlighted as "$0"

### 10. Partner
- The system SHALL render a partner section with client logos.
- Scenario — Partner content:
  - **GIVEN** the page is rendered
  - **WHEN** the user views the partner section
  - **THEN** a display of partner/client logos SHALL be shown

### 11. Footer
- The system SHALL render a dark footer with 4 columns and a Component Dock link.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the user scrolls to the footer
  - **THEN** columns for logo, Useful Links, Quick Links, and Contact SHALL be shown
  - **AND** a "Component Dock" link to https://www.componentdock.com/ SHALL be present

### Cross-cutting requirements

- **Responsive layout** — The system SHALL be responsive with proper breakpoints for mobile and desktop.
  - Scenario — Responsive behavior: **GIVEN** the viewport width is 768px; **WHEN** the page is rendered; **THEN** the navbar SHALL collapse to a hamburger menu; **AND** service items SHALL stack vertically; **AND** project cards SHALL display in 2 columns
- **Dark mode** — The system SHALL support dark mode via a class-based toggle.
  - Scenario — Dark mode support: **GIVEN** the user toggles dark mode; **WHEN** the dark mode is activated; **THEN** the background colors SHALL invert appropriately; **AND** text contrast SHALL remain readable
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/blankslate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/blankslate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All sections render in correct order: Navbar → Hero → About → Services → Counter → Projects → Testimonials → Case Study → Pricing → Partner → Footer; [ ] Brand yellow `#fcd307` used for CTA buttons, icon backgrounds, and testimonials section; [ ] Dark backgrounds (#141313 / #000) for navbar, hero, projects, footer; [ ] Fonts: Poppins for headings, Work Sans for body (via Google Fonts link in index.html); [ ] Button style: pill-shaped (border-radius: 30px), yellow background; [ ] Images use picsum.photos placeholder URLs; [ ] No ColorLib references in app source code (provenance only in spec and TEMPLATES.md); [ ] Footer links to componentdock.com; [ ] Responsive layout: mobile-first with proper breakpoints; [ ] 100% test coverage (lines, functions, branches, statements); [ ] TypeCheck passes (`npx tsc --noEmit`); [ ] Lint passes; [ ] Build succeeds; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/blankslate` ships on https://blankslate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/blankslate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/blankslate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blankslate/public/CNAME` = `blankslate.free.componentdock.com`
  and the package `homepage` = `https://blankslate.free.componentdock.com`.
