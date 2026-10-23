# Bizmark — Implementation Tasks

Source design: **Bizcon** (`https://colorlib.com/wp/template/bizcon/`) → recreation name **bizmark**. Shipped at https://bizmark.free.componentdock.com.

Scope: A business/consulting website with a gradient-orange accent, clean corporate aesthetic, and animated decorative elements. Recreation of ColorLib's **Bizcon** template.

## Component breakdown

Render order as composed in `apps/bizmark/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky top navigation bar with the site name "Bizmark" on the left, navigation links (Home, About, Blog, Page, Contact) on the right, and a hamburger toggle button visible on mobile viewports. Clicking the hamburger toggle SHALL expand the mobile nav menu, and clicking a link SHALL collapse it.
- Scenario — Navbar content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Bizmark" and navigation links
  - **AND** the navbar SHALL be sticky at the top of the viewport
- Scenario — Mobile hamburger toggle:
  - **GIVEN** the Bizmark page is rendered on a mobile viewport
  - **WHEN** the user taps the hamburger toggle button
  - **THEN** the mobile nav menu SHALL expand with all navigation links
  - **AND** tapping a link SHALL collapse the menu

### 2. Banner
- The system SHALL render a full-width hero section with a level-1 headline containing "Lead from", a "Learn More" gradient button, an "Intro Video" link, and decorative animated blobs. A hero image SHALL be displayed on desktop.
- Scenario — Hero content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show a level-1 headline containing "Lead from"
  - **AND** it SHALL show a "Learn More" button with gradient styling
  - **AND** it SHALL show an "Intro Video" link
  - **AND** decorative animated blobs SHALL be present

### 3. About
- The system SHALL render an about section with a two-column layout (image on one side, text on the other), a headline mentioning "Experience" and "consulting", a paragraph of body text, and a "Read More" gradient button.
- Scenario — About content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL show a headline mentioning "Experience" and "consulting"
  - **AND** it SHALL show a "Read More" button
  - **AND** it SHALL show an illustration image

### 4. Services
- The system SHALL render a services section with a light gray background, a headline "We Provide Best Services", an introductory text block with a "Load More" button, and at least two service cards each with an icon, title, description, and "Learn More" link.
- Scenario — Services content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL have a light gray background
  - **AND** it SHALL show a headline "We Provide Best Services"
  - **AND** it SHALL show at least two service cards with icons, titles, and "Learn More" links

### 5. Testimonials
- The system SHALL render a testimonials section with a centered headline "Customer Are Saying", thumbnail avatar buttons for navigation, and a main quote display showing testimonial text, reviewer name, and reviewer title. Clicking a thumbnail SHALL switch the displayed testimonial.
- Scenario — Testimonials content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL show a headline "Customer Are Saying"
  - **AND** it SHALL show thumbnail avatar buttons
  - **AND** clicking a thumbnail SHALL display the corresponding testimonial quote

### 6. Portfolio
- The system SHALL render a portfolio section with a masonry-style grid containing a quote card with "Explore Our Best Practice Area" and at least four project cards, each with an image, title, and short description.
- Scenario — Portfolio content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the portfolio section is displayed
  - **THEN** it SHALL show a quote card with "Explore Our Best Practice Area"
  - **AND** it SHALL show at least four project cards with images and titles

### 7. AdvisoryService
- The system SHALL render an advisory service section that mirrors the About section layout (image on one side, text on the other), with a headline about "adviser service", body text, and a "Read More" gradient button.
- Scenario — Advisory content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the advisory service section is displayed
  - **THEN** it SHALL show a headline about "adviser service"
  - **AND** it SHALL show an illustration image
  - **AND** it SHALL show a "Read More" button

### 8. Blog
- The system SHALL render a blog section with a centered headline "Update From Blog" and at least three blog post cards, each with an image, category label, date, title, and comment/like counts.
- Scenario — Blog content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL show a headline "Update From Blog"
  - **AND** it SHALL show at least three blog cards with images, categories, dates, titles, and engagement counts

### 9. Footer
- The system SHALL render a footer with four link columns (Top Products, Quick Links, Features, Resources), a newsletter section with an email input and "Subscribe" button, and a dark copyright bar with a link to componentdock.com.
- Scenario — Footer content:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the footer section is displayed
  - **THEN** it SHALL show four link columns
  - **AND** it SHALL show a newsletter section with email input and "Subscribe" button
- Scenario — Copyright bar:
  - **GIVEN** the Bizmark page is rendered
  - **WHEN** the copyright bar is displayed
  - **THEN** it SHALL show a dark bar with copyright text
  - **AND** it SHALL contain a link to componentdock.com

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/bizmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/bizmark/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Navbar: sticky, logo + links, mobile hamburger toggle; [ ] Banner: headline, subtext, gradient CTA button, video link, decorative blobs; [ ] About: two-column image + text, headline, "Read More" CTA; [ ] Services: gray bg, intro text, 2 service cards with icons; [ ] Testimonials: centered headline, thumbnail carousel, quote + reviewer; [ ] Portfolio: masonry grid, quote card + 4 project cards; [ ] Advisory Service: mirror about layout (reversed), headline + image + CTA; [ ] Blog: 3 blog cards with image, category, date, title, engagement; [ ] Footer: 4 link columns + newsletter with email input; [ ] Copyright: dark bar with copyright text; [ ] Design tokens: gradient buttons (#feb47b → #ff7e5f), pill shape (50px radius), Poppins headings, Roboto body; [ ] Responsive: all sections stack properly at mobile widths; [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md; [ ] Footer links to componentdock.com; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/bizmark` ships on https://bizmark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/bizmark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/bizmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bizmark/public/CNAME` = `bizmark.free.componentdock.com`
  and the package `homepage` = `https://bizmark.free.componentdock.com`.
