# Cogwork — Implementation Tasks

Source design: **Industries** (`https://colorlib.com/wp/template/industries/`) → recreation name **cogwork**. Shipped at https://cogwork.free.componentdock.com.

Scope: Cogwork is a single-page industrial company landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Industries" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/cogwork/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Cogwork", a "Home" link, an "About" link, a "Projects" link, a "Services" dropdown, a "Blog" link, a "Contact" link, and a mobile hamburger toggle.
- Scenario — Navbar content:
  - **GIVEN** the Cogwork page is rendered
  - **WHEN** the user views the navbar
  - **THEN** the brand text "Cogwork" is visible
  - **AND** the links "Home", "About", "Projects", "Blog", "Contact" are visible
- Scenario — Mobile hamburger toggle:
  - **GIVEN** the Cogwork page is rendered on a mobile viewport
  - **WHEN** the user clicks the hamburger toggle button
  - **THEN** the navigation menu expands
  - **AND** the toggle button's aria-expanded attribute is "true"
- Scenario — Services dropdown:
  - **GIVEN** the Cogwork page is rendered
  - **WHEN** the user clicks the "Services" dropdown button
  - **THEN** the dropdown items "Architectural Design", "Interior", "Building" are visible

### 2. HeroSlider
- The system SHALL render a hero section with two auto-rotating slides, each containing a background image, a play button, a heading, and a subtitle.
- Scenario — Slide content:
  - **GIVEN** the Cogwork page is rendered
  - **WHEN** the user views the hero section
  - **THEN** the heading "We Are Industrial Company" is visible
  - **AND** the heading "Create, Enhance and Sustain" is visible
  - **AND** two play buttons are present
- Scenario — Auto-rotation:
  - **GIVEN** the Cogwork page is rendered
  - **WHEN** 5 seconds pass
  - **THEN** the visible slide transitions to the next one

### 3. Features
- The system SHALL render a features section with three feature cards on a light background, each containing an icon, heading, and description.
- Scenario — Feature cards:
  - **GIVEN** the features section is rendered
  - **WHEN** the user views the section
  - **THEN** three feature cards are visible: "Automotive Parts", "Maintenance Services", "Green Energy"

### 4. Engineering
- The system SHALL render an engineering section with a heading, an image, and four feature items with icons.
- Scenario — Engineering content:
  - **GIVEN** the engineering section is rendered
  - **WHEN** the user views the section
  - **THEN** the heading "We Are Reliable Engineering In House" is visible
  - **AND** four items are visible: "Green Energy", "Precision Mechanics", "Construction Machines", "Reliable and Stable"

### 5. About
- The system SHALL render an about section with an image, a heading, a paragraph, and a "Read More" link.
- Scenario — About content:
  - **GIVEN** the about section is rendered
  - **WHEN** the user views the section
  - **THEN** the heading "Create, Enhance and Sustain" is visible
  - **AND** the "Read More" link is visible

### 6. Projects
- The system SHALL render a projects gallery with a heading, subtitle, and six project cards in a 3-column grid with hover overlay.
- Scenario — Project cards:
  - **GIVEN** the projects section is rendered
  - **WHEN** the user views the section
  - **THEN** the heading "Our Latest Projects" is visible
  - **AND** six project cards are visible

### 7. Testimonials
- The system SHALL render a testimonials section on a light background with a heading and three testimonial cards.
- Scenario — Testimonial cards:
  - **GIVEN** the testimonials section is rendered
  - **WHEN** the user views the section
  - **THEN** the heading "Happy Clients" is visible
  - **AND** three testimonials are visible with names and quotes

### 8. BlogPosts
- The system SHALL render a blog section with a heading and four blog post items in a 2-column layout.
- Scenario — Blog post items:
  - **GIVEN** the blog section is rendered
  - **WHEN** the user views the section
  - **THEN** the heading "Blog Posts" is visible
  - **AND** four blog posts are visible with dates and "Read More" links

### 9. CtaBanner
- The system SHALL render a full-width CTA banner with an orange background, a heading, description text, and a "Contact Us" button.
- Scenario — CTA content:
  - **GIVEN** the CTA banner is rendered
  - **WHEN** the user views the section
  - **THEN** the heading "Create, Enhance and Sustain" is visible
  - **AND** the "Contact Us" button is visible

### 10. Footer
- The system SHALL render a footer with About Us, Contact Info, Quick Links columns, social media links, and a copyright line linking to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the footer is rendered
  - **WHEN** the user views the footer
  - **THEN** the "About Us", "Contact Info", "Quick Links" sections are visible
  - **AND** social media links (Twitter, Facebook, LinkedIn, Instagram) are present
  - **AND** a link to "Component Dock" (https://www.componentdock.com/) is present
- Scenario — Footer accessibility:
  - **GIVEN** the footer is rendered
  - **WHEN** a screen reader accesses the page
  - **THEN** the footer has role="contentinfo"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cogwork/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cogwork/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cogwork` ships on https://cogwork.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cogwork/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cogwork/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cogwork/public/CNAME` = `cogwork.free.componentdock.com`
  and the package `homepage` = `https://cogwork.free.componentdock.com`.
