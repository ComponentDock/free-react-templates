# Azureline — Implementation Tasks

Source design: **Blueline** (`https://colorlib.com/wp/template/blueline/`) → recreation name **azureline**. Shipped at https://azureline.free.componentdock.com.

Scope: A business template with hero, features, video, services section with split, newsletter subscription and contact form with split sections. Recreation of ColorLib **Blueline** template as a fullscreen business landing page.

## Component breakdown

Render order as composed in `apps/azureline/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display a logo on the left and navigation links (Home, About, Services, Work, Contact) with smooth scroll, plus a mobile hamburger toggle.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page is loaded
  - **THEN** I see a logo "Azureline" on the left
  - **AND** I see navigation links for Home, About, Services, Work, Contact
- Scenario — Mobile hamburger menu:
  - **WHEN** the page is loaded on a mobile viewport
  - **THEN** I see a hamburger menu toggle button
  - **AND** clicking it reveals the navigation links
  - **AND** clicking a link closes the mobile menu

### 2. Hero
- The hero section SHALL display a fullscreen gradient background with centered "INTRODUCING" subtitle and "AZURELINE" main heading.
- Scenario — Hero renders content:
  - **WHEN** I view the hero section
  - **THEN** I see the subtitle "Introducing"
  - **AND** I see the heading "Azureline" with large text styling
  - **AND** the section has a dark-to-blue gradient background

### 3. Features
- The features section SHALL display three numbered feature cards (01, 02, 03) with gradient text numbers, titles, and descriptions.
- Scenario — Three features render:
  - **WHEN** I scroll to the features section
  - **THEN** I see three feature cards
  - **AND** each card has a gradient number (01, 02, 03)
  - **AND** each card has a title and description paragraph

### 4. VideoSection
- The video section SHALL display a video thumbnail with a play button overlay and a heading with descriptive text below.
- Scenario — Video section renders:
  - **WHEN** I view the video section
  - **THEN** I see a video thumbnail image with a play button
  - **AND** I see the heading "Great Modern Design Built with usability in mind"
  - **AND** I see a descriptive paragraph

### 5. Services
- The services section SHALL display a dark left panel with "Services We Offered" heading and a white right panel with a 2x2 grid of service cards.
- Scenario — Services render correctly:
  - **WHEN** I view the services section
  - **THEN** I see the heading "Services We Offered"
  - **AND** I see four service cards: Graphics Design, Web Development, Mobile Apps, SEO Marketing
  - **AND** each card has an icon, title, and description

### 6. LatestWorks
- The latest works section SHALL display a heading and an image carousel with prev/next navigation.
- Scenario — Works carousel renders:
  - **WHEN** I view the latest works section
  - **THEN** I see the heading "Some Of Our Latest Works"
  - **AND** I see a portfolio image
  - **AND** I see prev/next navigation buttons
- Scenario — Carousel navigation:
  - **WHEN** I click the next button
  - **THEN** the next slide is displayed
  - **WHEN** I click the previous button
  - **THEN** the previous slide is displayed

### 7. Newsletter
- The newsletter section SHALL display a heading, email input, and a "Get Started" CTA button.
- Scenario — Newsletter form renders:
  - **WHEN** I view the newsletter section
  - **THEN** I see "Subscribe for our Newsletter"
  - **AND** I see an email input field
  - **AND** I see a "Get Started" button

### 8. Contact
- The contact section SHALL display an image on the left and a form (name, email, message, send button) on the right.
- Scenario — Contact form renders:
  - **WHEN** I view the contact section
  - **THEN** I see a contact image on the left
  - **AND** I see input fields for name, email, and message
  - **AND** I see a "Send Message" button
- Scenario — Form prevents default submission:
  - **WHEN** I fill in the form and click "Send Message"
  - **THEN** the page does not navigate away

### 9. Footer
- The footer SHALL display copyright text with the current year, social media icon links, and a link to Component Dock.
- Scenario — Footer renders correctly:
  - **WHEN** I scroll to the footer
  - **THEN** I see the copyright text with the current year
  - **AND** I see social media links for Facebook, Twitter, Instagram, LinkedIn
  - **AND** I see a "Component Dock" link pointing to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/azureline/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/azureline/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/azureline` ships on https://azureline.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/azureline/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/azureline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/azureline/public/CNAME` = `azureline.free.componentdock.com`
  and the package `homepage` = `https://azureline.free.componentdock.com`.
