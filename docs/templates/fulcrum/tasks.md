# Fulcrum — Implementation Tasks

Source design: **Services** (`https://colorlib.com/wp/template/services/`) → recreation name **fulcrum**. Shipped at https://fulcrum.free.componentdock.com.

Scope: Recreation of ColorLib "Services" (https://colorlib.com/wp/template/services/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page digital services/agency landing page.

## Component breakdown

Render order as composed in `apps/fulcrum/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky top navbar with a bordered logo "Fulcrum" on the left and navigation links (Home, About, Services, Projects, Blog, Contact) on the right. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.
- Scenario — Desktop navbar renders logo and nav links:
  - **GIVEN** the page is loaded on a desktop viewport
  - **THEN** I see a sticky navbar with the logo "Fulcrum"
  - **AND** I see navigation links: Home, About, Services, Projects, Blog, Contact
- Scenario — Mobile menu toggles open and closed:
  - **GIVEN** the page is loaded on mobile
  - **WHEN** I click the "Open menu" button
  - **THEN** the mobile menu appears with all nav links
  - **AND** the button label changes to "Close menu"
- Scenario — Mobile menu closes when a link is clicked:
  - **GIVEN** the mobile menu is open
  - **WHEN** I click a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL render a full-width hero section with a background image, a dark overlay (black/50), a heading "We Are Digital Services", a subtitle paragraph, and an "Our Services" CTA button with lime green background linking to the services section.
- Scenario — Hero renders heading and CTA:
  - **GIVEN** the page is loaded
  - **THEN** I see the heading "We Are Digital Services"
  - **AND** I see a CTA button labeled "Our Services" linking to "#services"

### 3. About
- The template SHALL render an "About Us" section with a centered heading, a 3-column grid containing text in the left column, an image in the center column, and text in the right column.
- Scenario — About section renders heading, text, and image:
  - **GIVEN** the page is loaded
  - **THEN** I see a heading "About Us"
  - **AND** I see descriptive text paragraphs
  - **AND** I see an about image

### 4. ServiceCards
- The template SHALL render a "Services" section with a centered heading and 6 service cards arranged in a 2-column grid. Each card SHALL contain an icon, a title, and a description. The services are: Content Marketing, Social Media Marketing, Brand & Logo Design, Social Media Advertising, PPC Advertising, Web Design & Development.
- Scenario — Services section renders all 6 cards:
  - **GIVEN** the page is loaded
  - **THEN** I see a heading "Services"
  - **AND** I see 6 service card headings
  - **AND** I see all 6 service titles

### 5. Projects
- The template SHALL render a "Projects" section with filter tabs (All, Web, Design, Brand) and a grid of project images. Clicking a tab SHALL filter the displayed projects to only show items matching that category.
- Scenario — All projects shown by default:
  - **GIVEN** the page is loaded
  - **THEN** I see all 12 project images
- Scenario — Clicking a filter tab shows only matching projects:
  - **GIVEN** the projects section is visible
  - **WHEN** I click the "Web" tab
  - **THEN** only web-category projects are shown

### 6. Testimonials
- The template SHALL render a testimonials section with a lime green (#C2E54F) background, a centered heading "What Clients Are Saying", a blockquote with the current testimonial text and author, and previous/next navigation buttons.
- Scenario — First testimonial shown by default:
  - **GIVEN** the page is loaded
  - **THEN** I see the first testimonial quote and author "Jean Smith"
- Scenario — Navigation buttons cycle through testimonials:
  - **GIVEN** the page is loaded
  - **WHEN** I click the "Next testimonial" button
  - **THEN** the next testimonial is displayed

### 7. Blog
- The template SHALL render a "Blog Posts" section with 3 blog post cards, each containing an image, title, date, excerpt, and a "Read More" link.
- Scenario — Blog section renders 3 post cards:
  - **GIVEN** the page is loaded
  - **THEN** I see a heading "Blog Posts"
  - **AND** I see 3 blog article cards
  - **AND** I see 3 "Read More" links

### 8. Contact
- The template SHALL render a "Contact Form" section with a form on the left (first name, full name, email, subject, message textarea, submit button) and office addresses (London, New York) on the right. Submitting the form SHALL reset all fields.
- Scenario — Contact form renders all fields:
  - **GIVEN** the page is loaded
  - **THEN** I see a heading "Contact Form"
  - **AND** I see form fields for first name, full name, email, subject, and message
  - **AND** I see a "Send Message" submit button
  - **AND** I see office addresses for London and New York
- Scenario — Form resets on submit:
  - **GIVEN** the contact form has been filled in
  - **WHEN** I submit the form
  - **THEN** all form fields are cleared

### 9. Footer
- The template SHALL render a footer with the brand name "Fulcrum", three link columns (Services, Resources, Templates), social media icon links (Twitter, Facebook, Instagram, Dribbble, LinkedIn), and a copyright line with a link to Component Dock (https://www.componentdock.com/).
- Scenario — Footer renders brand, links, socials, and copyright:
  - **GIVEN** the page is loaded
  - **THEN** I see the brand name "Fulcrum" in the footer
  - **AND** I see link columns for Services, Resources, and Templates
  - **AND** I see social icon links for Twitter, Facebook, Instagram, Dribbble, and LinkedIn
  - **AND** I see a copyright line with a link to Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fulcrum/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fulcrum/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/fulcrum` ships on https://fulcrum.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fulcrum/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fulcrum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fulcrum/public/CNAME` = `fulcrum.free.componentdock.com`
  and the package `homepage` = `https://fulcrum.free.componentdock.com`.
