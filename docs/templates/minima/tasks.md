# Minima — Implementation Tasks

Source design: **Avo** (`https://colorlib.com/wp/template/avo/`) → recreation name **minima**. Shipped at https://minima.free.componentdock.com.

Scope: Minima is a minimalist portfolio/agency landing page template, recreating the ColorLib "Avo" design under a new name. It features a dark hero with stat counters, about/services section, portfolio showcase, testimonials, CTA banner, blog grid, and multi-column footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/minima/src/App.tsx`:

### 1. Navbar
- The template SHALL render a fixed top navigation bar with the brand logo and links to all sections (Home, About, Services, Portfolio, Blog, Contact).
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** all 6 navigation links are visible in the navbar
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** a dropdown menu appears with all navigation links

### 2. Hero
- The template SHALL render a full-screen hero section with a dark overlay background image, stat counters, headline, description, and a CTA button.
- Scenario — Hero displays stat counters:
  - **WHEN** the hero section renders
  - **THEN** the "400+" and "21+" stat counters are displayed
- Scenario — Hero CTA button links to portfolio:
  - **WHEN** the user views the hero section
  - **THEN** a "Start Project" button links to the portfolio section

### 3. About
- The template SHALL display a services grid with 5 service cards and a split about section with text and an image.
- Scenario — Services grid shows 5 items:
  - **WHEN** the services section renders
  - **THEN** 5 service cards are visible (UI/UX Design, Web Development, Product Design, Mobile Apps, SEO)
- Scenario — Welcome text is displayed:
  - **WHEN** the about section renders
  - **THEN** a welcome heading and description paragraph are present

### 4. Portfolio
- The template SHALL display 3 portfolio items with alternating image/text layout, each with category, title, description, author, and CTA.
- Scenario — Portfolio renders 3 items:
  - **WHEN** the portfolio section renders
  - **THEN** 3 portfolio items are visible with "View Portfolio" buttons

### 5. Testimonials
- The template SHALL display client testimonials with quotes, author names, and positions.
- Scenario — Testimonials render 3 cards:
  - **WHEN** the testimonials section renders
  - **THEN** 3 testimonial cards with author info are displayed

### 6. CtaBanner
- The template SHALL display a call-to-action banner with a dark background, heading, and primary action button.
- Scenario — CTA banner displays heading and button:
  - **WHEN** the CTA section renders
  - **THEN** the heading "Fill in the brief and get the project estimate" and a "Get Started" button are visible

### 7. Blog
- The template SHALL display 4 recent blog post cards with images, titles, dates, authors, and comment counts.
- Scenario — Blog renders 4 posts:
  - **WHEN** the blog section renders
  - **THEN** 4 blog cards with titles and metadata are visible

### 8. Footer
- The template SHALL render a multi-column footer with brand info, link columns, contact information, and a copyright line linking to https://www.componentdock.com/.
- Scenario — Footer includes Component Dock link:
  - **WHEN** the footer renders
  - **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- Scenario — Footer has 5 column groups:
  - **WHEN** the footer renders
  - **THEN** brand, Community, About Us, Company, and contact sections are visible

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/minima/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/minima/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/minima` ships on https://minima.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/minima/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/minima/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/minima/public/CNAME` = `minima.free.componentdock.com`
  and the package `homepage` = `https://minima.free.componentdock.com`.
