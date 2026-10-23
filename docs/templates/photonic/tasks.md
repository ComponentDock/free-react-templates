# Photonic — Implementation Tasks

Source design: **Fotograp** (`https://colorlib.com/wp/template/fotograp/`) → recreation name **photonic**. Shipped at https://photonic.free.componentdock.com.

Scope: Photonic is a professional photography portfolio template. It features a clean navbar with dropdown navigation, a full-width hero section with a photographer profile and specialties, a 4-column services grid showcasing photography types, a testimonials section with star ratings, a photo gallery grid with hover overlays, and a dark footer…

## Component breakdown

Render order as composed in `apps/photonic/src/App.tsx`:

### 1. Navbar
- The template SHALL render a white navbar with the brand name "photonic." (purple dot accent), horizontal navigation links (Home, Photography dropdown, Services, About, Contact), social media icons (Facebook, Twitter, Instagram, Youtube), and a mobile hamburger toggle.
- Scenario — Desktop navigation:
  - **WHEN** the page loads on desktop
  - **THEN** the navbar displays "photonic." with a purple dot
  - **THEN** all 5 navigation links are visible
  - **THEN** social media icons are visible
- Scenario — Photography dropdown:
  - **WHEN** the user hovers over "Photography"
  - **THEN** a dropdown appears with Nature, Portrait, Wedding
  - **WHEN** the user moves the mouse away
  - **THEN** the dropdown closes
- Scenario — Mobile menu toggle:
  - **WHEN** the user taps the hamburger icon on mobile
  - **THEN** the mobile navigation menu opens
  - **THEN** all navigation links are visible
  - **WHEN** the user taps a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL render a full-width hero section with a background image, dark overlay, circular profile portrait, the name "Ben Botsford", the subtitle "a Professional Photographer", the location "Live in Oakland", photography specialty tags, and a "View My Work" CTA button.
- Scenario — Hero content:
  - **WHEN** the page loads
  - **THEN** the hero displays the photographer's name and subtitle
  - **THEN** the location "Live in Oakland" is shown
  - **THEN** specialty tags (Nature Photography, Portrait Photography) are visible
  - **THEN** a "View My Work" button is rendered

### 3. Services
- The template SHALL render a 4-column grid of photography service cards, each with an icon, title, and description.
- Scenario — Services grid:
  - **WHEN** the user scrolls to the services section
  - **THEN** 4 service cards are displayed: Nature Photography, Portrait Photography, Wedding Photography, Food & Drink Photography
  - **THEN** each card has an icon, title, and description text

### 4. Testimonials
- The template SHALL render a testimonials section with 3 testimonial cards, each containing a 5-star rating, a quote, and an author name.
- Scenario — Testimonials content:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** 3 testimonial cards are displayed
  - **THEN** each card shows 5 star icons, a quote, and an author name

### 5. Gallery
- The template SHALL render a photo gallery grid with 6 items, each displaying a photo with a hover overlay showing the title and photo count.
- Scenario — Gallery grid:
  - **WHEN** the user scrolls to the gallery section
  - **THEN** the heading "My Photography" is displayed
  - **THEN** 6 gallery items are shown in a responsive grid
  - **THEN** each item has an image with alt text and a hover overlay

### 6. Footer
- The template SHALL render a dark footer with navigation links, social media icons, a copyright notice, and a "More templates at Component Dock" link to https://www.componentdock.com/.
- Scenario — Footer content:
  - **WHEN** the user scrolls to the footer
  - **THEN** navigation links are displayed
  - **THEN** social media icons are visible
  - **THEN** a copyright line is shown
  - **THEN** "More templates at Component Dock" links to componentdock.com

### Cross-cutting requirements

- **Page Composition** — The template SHALL compose all sections in a single page with the document title set.
  - Scenario — Full page render: **WHEN** the Photonic app is rendered; **THEN** all sections are composed in order: Navbar, Hero, Services, Testimonials, Gallery, Footer; **AND** the document title is "Photonic — Photography Portfolio Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/photonic/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/photonic/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/photonic` ships on https://photonic.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/photonic/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/photonic/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/photonic/public/CNAME` = `photonic.free.componentdock.com`
  and the package `homepage` = `https://photonic.free.componentdock.com`.
