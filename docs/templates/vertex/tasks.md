# Vertex — Implementation Tasks

Source design: **Boxus** (`https://colorlib.com/wp/template/boxus/`) → recreation name **vertex**. Shipped at https://vertex.free.componentdock.com.

Scope: Vertex is a creative digital agency single-page landing template with services, portfolio, team, stories, video features and contact sections. It recreates the ColorLib **Boxus** design (https://colorlib.com/wp/template/boxus/) as `apps/vertex`.

## Component breakdown

Render order as composed in `apps/vertex/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed dark purple (#221C5A) top navigation bar with the "Vertex" logo on the left and 8 section anchor links on the right (Home, Services, Portfolio, Crafters, Stories, Offer, Expertise, Contact). The nav SHALL be responsive with a hamburger menu toggle on mobile.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** I see "Vertex" logo and 8 nav links (Home, Services, Portfolio, Crafters, Stories, Offer, Expertise, Contact)
- Scenario — Mobile menu toggles open and closed:
  - **WHEN** I click the hamburger menu button on mobile
  - **THEN** the mobile nav menu opens with all 8 links visible
- Scenario — Mobile menu closes on link click:
  - **WHEN** I click a nav link in the mobile menu
  - **THEN** the menu closes

### 2. Hero
- The template SHALL display a full-width hero with the headline "We Craft Awesome Web And Graphic Design Solutions", a subtitle, and a "Get Started" CTA linking to the contact section.
- Scenario — Hero displays headline and CTA:
  - **WHEN** I view the hero section
  - **THEN** I see the headline, subtitle, and a "Get Started" button
- Scenario — Get Started links to contact:
  - **WHEN** I click the "Get Started" button
  - **THEN** the page scrolls to the contact section

### 3. Services
- The template SHALL display 4 service cards (Branding, Mobile Apps, Web, Graphic) each with a lucide-react icon, title, and description paragraph. The section SHALL be numbered "01" in large green text.
- Scenario — Four service cards render:
  - **WHEN** I scroll to the services section
  - **THEN** I see 4 cards with icons for Branding, Mobile Apps, Web, and Graphic

### 4. Portfolio
- The template SHALL display 4 portfolio items in a grid, each with a placeholder image (picsum.photos), a "PSD Mockup" tag, and a title. Items SHALL show a hover overlay effect. The section SHALL be numbered "02".
- Scenario — Four portfolio items render:
  - **WHEN** I scroll to the portfolio section
  - **THEN** I see 4 portfolio items with images and a "Load More" button

### 5. Crafters
- The template SHALL display 3 team member cards with photos (picsum.photos), names, roles (Lead Designer, SEO Master, PSD Guru), and short bio paragraphs. The section SHALL be numbered "03".
- Scenario — Three team members render:
  - **WHEN** I scroll to the crafters section
  - **THEN** I see Robert Williams (Lead Designer), John Doe (SEO Master), and Ann Peterson (PSD Guru)

### 6. Stories
- The template SHALL display 4 blog post cards in a 2-column grid, each with a number (01-04), author name, category tag, and excerpt paragraph. A "Go To Blog" CTA SHALL be present. The section SHALL be numbered "04".
- Scenario — Four blog posts render:
  - **WHEN** I scroll to the stories section
  - **THEN** I see 4 post cards with authors, categories, and excerpts

### 7. Offer
- The template SHALL display a dark purple section with 6 feature items (Video Editing, Premium Clear, For All Displays, Right On Time, Innovative Ideas, Perfect Sound), each with a lucide-react icon. The section SHALL be numbered "05".
- Scenario — Six feature items render:
  - **WHEN** I scroll to the offer section
  - **THEN** I see 6 feature icons with labels

### 8. Expertise
- The template SHALL display 4 skill progress bars (HTML 81%, CSS 93%, PSD 72%, Design 99%) with green (#32DB8A) fill. The section SHALL be numbered "06".
- Scenario — Four skill bars render with correct percentages:
  - **WHEN** I scroll to the expertise section
  - **THEN** I see 4 progress bars showing HTML 81%, CSS 93%, PSD 72%, Design 99%

### 9. Contact
- The template SHALL display a contact form with 4 required fields (Name, Email, Subject, Message) and a "Send Message" submit button. The section SHALL be numbered "07".
- Scenario — Contact form renders all fields:
  - **WHEN** I scroll to the contact section
  - **THEN** I see input fields for Name, Email, Subject, Message, and a submit button
- Scenario — Form fields accept input:
  - **WHEN** I type into the Name field
  - **THEN** the field displays the typed text

### 10. Footer
- The template SHALL display a dark purple footer with the "Vertex" logo, copyright notice, and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer links to Component Dock:
  - **WHEN** I scroll to the footer
  - **THEN** I see a "Component Dock" link pointing to https://www.componentdock.com/
- Scenario — Footer renders in new tab:
  - **WHEN** I look at the Component Dock link
  - **THEN** it opens in a new tab (target="_blank")

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/vertex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/vertex/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/vertex` ships on https://vertex.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vertex/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vertex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vertex/public/CNAME` = `vertex.free.componentdock.com`
  and the package `homepage` = `https://vertex.free.componentdock.com`.
