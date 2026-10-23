# Orbiter — Implementation Tasks

Source design: **Stodeo** (`https://colorlib.com/wp/template/stodeo/`) → recreation name **orbiter**. Shipped at https://orbiter.free.componentdock.com.

Scope: A modern corporate business agency template. Recreation of ColorLib "Stodeo". **Source**: https://colorlib.com/wp/template/stodeo/ **Preview**: https://preview.colorlib.com/theme/stodeo/ **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript **Package**: `@free-react-templates/orbiter`

## Component breakdown

Render order as composed in `apps/orbiter/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the logo "Orbiter" and navigation links including Home, Why Orbiter, Our Services, Gallery, About, and Contact Us.
- Scenario — Navbar displays all navigation elements:
  - **GIVEN** the page is loaded
  - **THEN** the navbar displays the logo "Orbiter"
  - **AND** navigation links include "Home", "Why Orbiter", "Our Services", "Gallery", "About", "Contact Us"
  - **AND** the "Home" link is marked active
- Scenario — Why Orbiter dropdown shows on hover:
  - **GIVEN** the page is loaded
  - **WHEN** the user hovers over "Why Orbiter"
  - **THEN** a dropdown appears with "Web Design", "Web Development", "SEO Marketing"
- Scenario — Mobile hamburger menu opens and closes:
  - **GIVEN** the page is loaded on mobile viewport
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu opens with all navigation links
  - **WHEN** the user clicks the close button
  - **THEN** the mobile menu closes

### 2. Hero
- The hero section SHALL display a subheading, main heading, description, and "Get started" CTA button.
- Scenario — Hero renders heading and button:
  - **GIVEN** the page is loaded
  - **THEN** the hero shows subheading "Welcome To Our Site"
  - **AND** the hero heading reads "We have the best solution for your business to grow."
  - **AND** a "Get started" button is visible

### 3. Welcome
- The welcome section SHALL display a split layout with a left image and right text area with an "About us" button.
- Scenario — Welcome renders split layout:
  - **GIVEN** the page is loaded
  - **THEN** the welcome section displays a left image and right text area
  - **AND** an "About us" button with arrow icon is visible

### 4. WhyChooseUs
- The why-choose-us section SHALL display stats, a heading, and four feature cards.
- Scenario — Why Choose Us renders all elements:
  - **GIVEN** the page is loaded
  - **THEN** the section displays the heading "You still thinking about why you should choose us?"
  - **AND** two stat counters are shown: "12" Years and "34" Team members
  - **AND** four feature cards are visible: Web Design, Web Development, Branding & Identity, Graphic Design

### 5. Services
- The services section SHALL display a left image and right dark content area with service items.
- Scenario — Services renders split layout:
  - **GIVEN** the page is loaded
  - **THEN** the services section has a left image and right dark content area
  - **AND** the heading reads "Grow your business"
  - **AND** two service items are displayed with icons

### 6. Blog
- The blog section SHALL display three blog post cards with dates and excerpts.
- Scenario — Blog renders post cards:
  - **GIVEN** the page is loaded
  - **THEN** the blog section heading reads "Recent Blog Posts"
  - **AND** three blog post cards are displayed with dates and excerpts

### 7. Testimonials
- The testimonials section SHALL display a slider with client photos, quotes, names, and positions.
- Scenario — Testimonials renders slider:
  - **GIVEN** the page is loaded
  - **THEN** the testimonials heading reads "Happy Clients"
  - **AND** a testimonial slider is visible with person images, quotes, and names
- Scenario — Testimonials navigation works:
  - **GIVEN** the page is loaded
  - **WHEN** the user clicks the next arrow
  - **THEN** the next testimonial is displayed
  - **WHEN** the user clicks a dot indicator
  - **THEN** the corresponding testimonial is displayed

### 8. Footer
- The footer SHALL display four widget columns, social icons, copyright, and a Component Dock link.
- Scenario — Footer renders all widgets:
  - **GIVEN** the page is loaded
  - **THEN** the footer contains widgets for About, Navigation, Services, and Contact
  - **AND** social media icons are visible (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble)
  - **AND** a copyright line is present at the bottom
- Scenario — Footer links to Component Dock:
  - **GIVEN** the page is loaded
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/orbiter/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/orbiter/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 8 sections render in correct top-to-bottom order; [ ] Navbar is sticky with logo and all nav links including dropdown; [ ] Hero text and button match original layout; [ ] Welcome section is 2-col no-gap with image and about button; [ ] Why Choose Us shows counter stats and 4 feature cards; [ ] Services section has dark split layout with 2 service items; [ ] Blog section shows 3 post cards; [ ] Testimonials slider renders with person images and quotes; [ ] Footer has 4 widget columns + social icons + copyright; [ ] Footer links to https://www.componentdock.com/; [ ] Color tokens match: primary #3369e7, secondary #00aaff, heading #081b46, footer bg #efefef; [ ] Font: Noto Sans Google Font loaded in index.html; [ ] Mobile responsive (navbar collapses, columns stack); [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md); [ ] 100% test coverage on all components; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/orbiter` ships on https://orbiter.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/orbiter/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/orbiter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/orbiter/public/CNAME` = `orbiter.free.componentdock.com`
  and the package `homepage` = `https://orbiter.free.componentdock.com`.
