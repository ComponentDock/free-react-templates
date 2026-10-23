# Proxy — Implementation Tasks

Source design: **Youragent** (`https://colorlib.com/wp/template/youragent/`) → recreation name **proxy**. Shipped at https://proxy.free.componentdock.com.

Scope: Proxy is a professional real estate agent landing page template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/proxy/src/App.tsx`:

### 1. Navbar
- The template SHALL render an absolute-positioned transparent navbar with the logo "Proxy", four navigation links (Home, About, Blog, Contact), and a hamburger button for mobile.
- Scenario — Desktop navigation:
  - **GIVEN** the page loads on a desktop viewport
  - **WHEN** I look at the header
  - **THEN** I see the "Proxy" logo and four navigation links
- Scenario — Mobile menu toggle:
  - **GIVEN** the page loads on a mobile viewport
  - **WHEN** I click the hamburger button
  - **THEN** the mobile menu opens with all four navigation links
- Scenario — Mobile menu closes on link click:
  - **GIVEN** the mobile menu is open
  - **WHEN** I click any navigation link
  - **THEN** the menu closes

### 2. Hero
- The template SHALL render a full-width hero section with a dark overlay background image, a heading "I'm Your Realtor, Get Your Key", descriptive subtext, and two CTA buttons.
- Scenario — Hero content:
  - **GIVEN** the page loads
  - **WHEN** I look at the hero section
  - **THEN** I see the heading, subtext, "Get In Touch" button, and "Download" button

### 3. Properties
- The template SHALL render a "Popular Properties" section with an 8-card grid showing property images, prices, and addresses.
- Scenario — Property cards:
  - **GIVEN** the page loads
  - **WHEN** I look at the properties section
  - **THEN** I see 8 property cards each with a price and address

### 4. Testimonials
- The template SHALL render a "Happy Customers" section with 3 testimonial cards, each containing a circular avatar, a blockquote, and the author's name.
- Scenario — Testimonial content:
  - **GIVEN** the page loads
  - **WHEN** I look at the testimonials section
  - **THEN** I see 3 testimonials with avatars, quotes, and author names

### 5. About
- The template SHALL render a split-layout About section with a large image on the left and "About Me" heading with bio text on the right.
- Scenario — About content:
  - **GIVEN** the page loads
  - **WHEN** I look at the about section
  - **THEN** I see an image, "About Me" heading, and bio paragraphs

### 6. Features
- The template SHALL render a 3-column features section with icons, titles, and descriptions for "Deal On Time", "Good Reviews", and "24/7 Support".
- Scenario — Feature cards:
  - **GIVEN** the page loads
  - **WHEN** I look at the features section
  - **THEN** I see 3 feature cards with icons, titles, and descriptions

### 7. Blog
- The template SHALL render a "Recent Blog Post" section on a light gray background with 3 blog post cards showing images, dates, and titles.
- Scenario — Blog posts:
  - **GIVEN** the page loads
  - **WHEN** I look at the blog section
  - **THEN** I see 3 blog post cards with dates and titles

### 8. Footer
- The template SHALL render a footer on a blue background with 4-column layout (nav links, contact info, newsletter form), copyright text linking to https://www.componentdock.com/, and social media icons.
- Scenario — Footer content:
  - **GIVEN** the page loads
  - **WHEN** I look at the footer
  - **THEN** I see the Component Dock link, nav links, contact info, and newsletter form
- Scenario — Newsletter form:
  - **GIVEN** the footer newsletter form is visible
  - **WHEN** I type an email and click submit
  - **THEN** the email input clears

### Cross-cutting requirements

- **Design tokens match original** — The template SHALL use the original design tokens: primary blue #007bff, Mukta Mahee body font, Playfair Display heading font, rounded buttons (border-radius 50px), and the section structure matching the original 1:1.
  - Scenario — Visual fidelity: **GIVEN** the page loads; **WHEN** I inspect the rendered output; **THEN** the fonts, colors, and layout match the original ColorLib design
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/proxy/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/proxy/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/proxy` ships on https://proxy.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/proxy/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/proxy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/proxy/public/CNAME` = `proxy.free.componentdock.com`
  and the package `homepage` = `https://proxy.free.componentdock.com`.
