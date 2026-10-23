# Loop — Implementation Tasks

Source design: **Repeat** (`https://colorlib.com/wp/template/repeat/`) → recreation name **loop**. Shipped at https://loop.free.componentdock.com.

Scope: Loop is a digital agency landing page template recreating the ColorLib "Repeat" design. It features a dark navy + coral palette, Comfortaa display font, service slider, stat counters, and a three-column footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/loop/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the "Loop" logo and desktop navigation links (Home, Services, Pricing, About, Contact Us). On mobile it SHALL show a hamburger toggle.
- Scenario — Desktop nav renders all links:
  - **GIVEN** the Loop template is loaded on a desktop viewport
  - **THEN** the navbar shows "Loop" logo
  - **AND** desktop nav has Home, Services, Pricing, About, Contact Us links
- Scenario — Mobile menu toggle:
  - **GIVEN** the viewport is mobile
  - **WHEN** I click the hamburger button
  - **THEN** the mobile menu opens
  - **AND** the button shows "Close menu"

### 2. Hero
- The hero section SHALL display a background image with dark overlay, the heading "We are pretty Awesome", descriptive subtext, and a "Our Services" CTA link.
- Scenario — Hero renders heading and CTA:
  - **GIVEN** the Loop template is loaded
  - **THEN** the hero shows heading "We are pretty Awesome"
  - **AND** a "Our Services" link pointing to #services

### 3. About
- The about section SHALL display "About Us" subheading, a heading, an image, and descriptive text with a coral left border.
- Scenario — About section renders all content:
  - **GIVEN** the Loop template is loaded
  - **THEN** the about section shows "About Us" subheading
  - **AND** a heading "We are here to help grow your business"
  - **AND** an image and descriptive paragraphs

### 4. Services
- The services section SHALL display a service slider with 4 services (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) and prev/next navigation.
- Scenario — Services slider shows initial service:
  - **GIVEN** the services section is visible
  - **THEN** "What We Offer" heading is shown
  - **AND** the first service "Web Design" is displayed
- Scenario — Next service navigation:
  - **WHEN** I click "Next service"
  - **THEN** the displayed service changes to "Graphic Design"
- Scenario — Previous service navigation:
  - **WHEN** I click "Previous service"
  - **THEN** the previous service "Brand Identity" is shown
- Scenario — Dot indicator navigation:
  - **WHEN** I click the third dot indicator
  - **THEN** "Web/Mobile Application" is displayed

### 5. Stats
- The stats section SHALL display four stat counters: Projects (230), Happy Clients (229), Leadership (8), Years Experience (15).
- Scenario — Stats render all counters:
  - **GIVEN** the stats section is visible
  - **THEN** it shows Projects: 230, Happy Clients: 229, Leadership: 8, Years Experience: 15

### 6. Media
- The media section SHALL display "Get anything done in one place" heading, description text, a CTA link, and two images.
- Scenario — Media section renders all content:
  - **GIVEN** the media section is visible
  - **THEN** heading "Get anything done in one place" is shown
  - **AND** a "Our Services" link pointing to #contact
  - **AND** two images are displayed

### 7. Footer
- The footer SHALL display Contact info, Sources links, Links + social icons, and a copyright line with a Component Dock link.
- Scenario — Footer renders all sections:
  - **GIVEN** the footer is visible
  - **THEN** Contact section shows address, phone, email
  - **AND** Sources section shows navigation links
  - **AND** Links section shows social icons (Instagram, Twitter, Facebook, LinkedIn)
  - **AND** copyright includes a link to componentdock.com

### Cross-cutting requirements

- **App renders all sections** — The App component SHALL compose all sections in order: Navbar, Hero, About, Services, Stats, Media, Footer.
  - Scenario — All sections are present: **GIVEN** the Loop template is loaded; **THEN** all main sections are rendered in the correct order
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/loop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/loop/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/loop` ships on https://loop.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/loop/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loop/public/CNAME` = `loop.free.componentdock.com`
  and the package `homepage` = `https://loop.free.componentdock.com`.
