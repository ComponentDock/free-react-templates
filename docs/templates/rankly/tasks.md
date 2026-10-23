# Rankly — Implementation Tasks

Source design: **Seo** (`https://colorlib.com/wp/template/seo/`) → recreation name **rankly**. Shipped at https://rankly.free.componentdock.com.

Scope: Rankly is a single-page SEO/analysis landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Seo" design (https://colorlib.com/wp/template/seo/), built under a DIFFERENT name (**Rankly**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/rankly/src/App.tsx`:

### 1. TopBar
- The template SHALL display a top bar with phone number, email, and a "Free SEO Analysis" link.
- Scenario — Top bar renders contact info:
  - **WHEN** the page loads
  - **THEN** the top bar shows a phone number and email address
  - **AND** a "Free SEO Analysis" link is visible

### 2. Navbar
- The template SHALL display a sticky navigation bar with logo and nav links.
- Scenario — Desktop navigation:
  - **WHEN** the page loads on a wide screen
  - **THEN** the navbar shows the "Rankly" logo
  - **AND** navigation links for Home, Service, Plan, Team, and Blog are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation menu opens
  - **AND** clicking a link closes the menu

### 3. Hero
- The template SHALL display a hero section with headline, description, and CTA.
- Scenario — Hero content:
  - **WHEN** the page loads
  - **THEN** a headline about SEO analysis is visible
  - **AND** a "Get a Quote" button links to the contact section

### 4. Services
- The template SHALL display three service cards with icons, titles, and descriptions.
- Scenario — Service cards render:
  - **WHEN** the user scrolls to the services section
  - **THEN** three service cards are visible (Site Audit, Keyword Research, Content Optimization)

### 5. About
- The template SHALL display an about section with a chart placeholder and text.
- Scenario — About content:
  - **WHEN** the user scrolls to the about section
  - **THEN** a heading about strategy driving growth is visible
  - **AND** a "See Details" CTA button is present

### 6. Features
- The template SHALL display a features section with text and image.
- Scenario — Features content:
  - **WHEN** the user scrolls to the features section
  - **THEN** a heading about ranking improvement is visible
  - **AND** a "Research Details" CTA button is present

### 7. Pricing
- The template SHALL display three pricing cards with plan names, prices, and feature lists.
- Scenario — Pricing cards render:
  - **WHEN** the user scrolls to the pricing section
  - **THEN** three pricing plans are visible (Standard, Business, Ultimate)
  - **AND** each plan shows a price and a "Purchase Plan" button

### 8. Team
- The template SHALL display four team members with photos, names, and roles.
- Scenario — Team members render:
  - **WHEN** the user scrolls to the team section
  - **THEN** four team member cards are visible
  - **AND** each card shows a name, role, and social media links

### 9. Testimonials
- The template SHALL display testimonials with quotes, names, and roles.
- Scenario — Testimonials render:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** testimonial quotes with author names and roles are visible

### 10. Blog
- The template SHALL display four blog post cards with images, dates, titles, and engagement counts.
- Scenario — Blog posts render:
  - **WHEN** the user scrolls to the blog section
  - **THEN** four blog post cards are visible
  - **AND** each card shows a date, title, excerpt, and like/comment counts

### 11. Brands
- The template SHALL display a row of brand logos.
- Scenario — Brand logos render:
  - **WHEN** the user scrolls to the brands section
  - **THEN** five brand logo placeholders are visible

### 12. Contact
- The template SHALL display a contact form with name, email, subject, and message fields.
- Scenario — Contact form renders:
  - **WHEN** the user scrolls to the contact section
  - **THEN** a form with name, email, subject, and message fields is visible
  - **AND** a "Send Message" submit button is present

### 13. Footer
- The template SHALL display a footer with product links, newsletter form, Instagram feed, social icons, and a Component Dock attribution.
- Scenario — Footer content:
  - **WHEN** the user scrolls to the footer
  - **THEN** product links, newsletter form, and social icons are visible
  - **AND** the copyright line links to Component Dock

### Cross-cutting requirements

- **Accessibility** — The template SHALL use semantic HTML elements and ARIA attributes for accessibility.
  - Scenario — Semantic landmarks: **WHEN** the page loads; **THEN** banner, main, and contentinfo landmarks are present in the DOM
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/rankly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/rankly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/rankly` ships on https://rankly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/rankly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rankly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rankly/public/CNAME` = `rankly.free.componentdock.com`
  and the package `homepage` = `https://rankly.free.componentdock.com`.
