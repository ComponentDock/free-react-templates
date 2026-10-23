# Eduforge — Implementation Tasks

Source design: **Edusite** (`https://colorlib.com/wp/template/edusite/`) → recreation name **eduforge**. Shipped at https://eduforge.free.componentdock.com.

Scope: Provide a free, production-ready online education landing page template with hero, about, course catalog, call-to-action, and footer sections. Built for training providers, online course platforms, and education businesses.

## Component breakdown

Render order as composed in `apps/eduforge/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky navigation bar with logo and links.
- Scenario — Logo text:
  - **WHEN** the page loads
  - **THEN** the navbar displays "Eduforge" as logo text
- Scenario — Navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar shows Home, About, Courses, Blog, and Contact links
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation menu opens
  - **AND** clicking a link closes the menu

### 2. Hero
- The template SHALL render a full-viewport hero with background image, headline, and CTA.
- Scenario — Hero heading:
  - **WHEN** the page loads
  - **THEN** the hero displays "Eduforge Online Training Courses" as the main heading
- Scenario — Hero CTA:
  - **WHEN** the page loads
  - **THEN** a "Get Started!" button is visible in the hero

### 3. About
- The template SHALL render an about section with features and an image.
- Scenario — About heading:
  - **WHEN** the page loads
  - **THEN** the about section displays "Welcome to Eduforge"
- Scenario — Feature items:
  - **WHEN** the page loads
  - **THEN** three features are shown: Online Courses, Expert Teachers, Community

### 4. Courses
- The template SHALL render a course catalog grid with 8 course cards.
- Scenario — Course heading:
  - **WHEN** the page loads
  - **THEN** the heading reads "Explore Courses"
- Scenario — Course cards:
  - **WHEN** the page loads
  - **THEN** 8 course cards are displayed, each with title, category badge, and price badge
- Scenario — More Courses button:
  - **WHEN** the page loads
  - **THEN** a "More Courses" button is visible below the grid

### 5. CtaSection
- The template SHALL render a call-to-action section with parallax background.
- Scenario — CTA content:
  - **WHEN** the page loads
  - **THEN** the CTA section shows a headline mentioning Eduforge and a "Get Started!" button

### 6. WhyUs
- The template SHALL render a "Why Eduforge" section with features and a video thumbnail.
- Scenario — Why Us heading:
  - **WHEN** the page loads
  - **THEN** the heading reads "Why Eduforge"
- Scenario — Features and video:
  - **WHEN** the page loads
  - **THEN** three feature items and a video thumbnail with play icon are displayed

### 7. ContactCta
- The template SHALL render a contact call-to-action section.
- Scenario — Contact heading:
  - **WHEN** the page loads
  - **THEN** the heading reads "Contact Us"
- Scenario — Contact button:
  - **WHEN** the page loads
  - **THEN** a "Contact Us Now" button is visible

### 8. Footer
- The template SHALL render a footer with Component Dock branding.
- Scenario — Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
- Scenario — Copyright:
  - **WHEN** the page loads
  - **THEN** the footer shows the copyright text with the current year
- Scenario — Social icons:
  - **WHEN** the page loads
  - **THEN** social media icon links are displayed (Facebook, Twitter, Instagram, LinkedIn)

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/eduforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/eduforge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/eduforge` ships on https://eduforge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/eduforge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/eduforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/eduforge/public/CNAME` = `eduforge.free.componentdock.com`
  and the package `homepage` = `https://eduforge.free.componentdock.com`.
