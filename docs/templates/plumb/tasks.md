# Plumb — Implementation Tasks

Source design: **Gravity** (`https://colorlib.com/wp/template/gravity/`) → recreation name **plumb**. Shipped at https://plumb.free.componentdock.com.

Scope: Plumb is a product landing page with a parallax hero, a latest-product band, four-column features, news cards and testimonials. It recreates the ColorLib **Gravity** creative agency design as a React template.

## Component breakdown

Render order as composed in `apps/plumb/src/App.tsx`:

### 1. Navbar
- The template SHALL render a navigation bar with the logo "Plumb", five navigation links (Home, About, Services, News, Contact), and a hamburger menu toggle for mobile viewports.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the user views the page
  - **THEN** the logo "Plumb" is visible
  - **AND** links for Home, About, Services, News, and Contact are all present
- Scenario — Mobile menu opens and closes:
  - **WHEN** the user clicks the "Open menu" button
  - **THEN** a "Close menu" button appears
  - **AND** the mobile nav links are visible

### 2. Hero
- The template SHALL render a full-width hero section with a background image, a heading, and a "Let's get started" call-to-action button linking to the contact section.
- Scenario — Hero renders heading and CTA button:
  - **WHEN** the user views the page
  - **THEN** a heading is visible with the text "Far far away, behind the word mountains"
  - **AND** a "Let's get started" link is visible and points to the contact section

### 3. LatestProduct
- The template SHALL render a split section showing a "Latest Product" caption, a heading "Poisson Blanc", a paragraph of text, and an image.
- Scenario — Latest product renders content:
  - **WHEN** the user scrolls to the about section
  - **THEN** the text "Latest Product" is visible
  - **AND** the heading "Poisson Blanc" is visible
  - **AND** an image with alt text "Latest product showcase" is present

### 4. Features
- The template SHALL render four numbered feature items (1 through 4) each with a paragraph of text and a "Read more" link.
- Scenario — All four features are displayed:
  - **WHEN** the user scrolls to the features section
  - **THEN** numbers 1, 2, 3, and 4 are visible
  - **AND** four "Read more" links are present

### 5. WebResources
- The template SHALL render a split section with an illustration image, a "Web Resources" heading, descriptive text, two statistics (99% success rate and 20391 happy customers), a five-item checklist, and a "Contact us" CTA.
- Scenario — Web resources stats and checklist render:
  - **WHEN** the user views the web resources section
  - **THEN** the heading "Web Resources" is visible
  - **AND** "99%" and "20391" statistics are displayed
  - **AND** five checklist items are visible
  - **AND** a "Contact us" button is present

### 6. News
- The template SHALL render an "On The News" heading followed by a grid of three article cards, each with an author photo, author name, heading, excerpt, and "Read more" link.
- Scenario — News cards render with author names:
  - **WHEN** the user scrolls to the news section
  - **THEN** the heading "On The News" is visible
  - **AND** three author names are displayed (James Watson, Carl Anderson, Michelle Allison)
  - **AND** three "Read more" links are present

### 7. Subscribe
- The template SHALL render a newsletter section with a heading, description text, an email input field, and a "Send" submit button. Submitting the form SHALL clear the email input.
- Scenario — Newsletter form clears on submit:
  - **WHEN** the user enters an email address and clicks "Send"
  - **THEN** the email input is cleared

### 8. Services
- The template SHALL render a "Services" heading followed by a 2x2 grid of service cards (Web Development, Web Design, Graphic Design, Copywriting), each with an icon, heading, and description.
- Scenario — All four services are displayed:
  - **WHEN** the user scrolls to the services section
  - **THEN** headings for Web Development, Web Design, Graphic Design, and Copywriting are visible

### 9. Testimonials
- The template SHALL render a "Testimonials" heading followed by a grid of testimonial cards, each with a blockquote, author photo, author name, and title.
- Scenario — Testimonial cards render with authors:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** the heading "Testimonials" is visible
  - **AND** three author names are displayed (Carl Anderson, Drew Wood, Michelle Allison)
  - **AND** each shows the title "Director at Google"

### 10. CTA
- The template SHALL render a full-width hero section with a background image, a heading, and a "Let's get started" call-to-action button linking to the contact section.
- Scenario — Hero renders heading and CTA button:
  - **WHEN** the user views the page
  - **THEN** a heading is visible with the text "Far far away, behind the word mountains"
  - **AND** a "Let's get started" link is visible and points to the contact section

### 11. Footer
- The template SHALL render a footer with four columns (About, Pages, Resources, Contact), social links, copyright text with the current year, and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders all columns and Component Dock link:
  - **WHEN** the user scrolls to the footer
  - **THEN** headings for About, Pages, Resources, and Contact are visible
  - **AND** contact info (info@plumb.dev, +1 222 212 3819) is displayed
  - **AND** the copyright line includes the current year
  - **AND** a link to Component Dock (https://www.componentdock.com/) is present

### Cross-cutting requirements

- **Call to action section** — The template SHALL render a dark-background CTA section with a heading "Ready to get started?", description text, and two buttons ("Contact us" and "Make a demo").
  - Scenario — CTA buttons render: **WHEN** the user scrolls to the CTA section; **THEN** the heading "Ready to get started?" is visible; **AND** "Contact us" and "Make a demo" buttons are present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/plumb/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/plumb/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/plumb` ships on https://plumb.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/plumb/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/plumb/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/plumb/public/CNAME` = `plumb.free.componentdock.com`
  and the package `homepage` = `https://plumb.free.componentdock.com`.
