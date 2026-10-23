# Blinkwave — Implementation Tasks

Source design: **Fastnet** (`https://colorlib.com/wp/template/fastnet/`) → recreation name **blinkwave**. Shipped at https://blinkwave.free.componentdock.com.

Scope: Recreate the ColorLib "Fastnet" ISP landing page as a React 19 + Tailwind CSS 4 template under the name "Blinkwave". The template showcases an internet service provider with hero, about, services, pricing, zipcode availability check, testimonials, blog, and footer sections.

## Component breakdown

Render order as composed in `apps/blinkwave/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Call Us: (+84) 939 512 999 · Blinkwave · Get Started

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: View Packages · Learn More

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Us · We listen and work together for a great experience.

### 4. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why Choose Us · Our mission is to bring all the power of every business online. · View Packages

### 5. Pricing
- The pricing section SHALL display three plans with names, prices, and features.
- Scenario — Pricing information:
  - **WHEN** a user views the pricing section
  - **THEN** Single Package is shown at $20.00/mo
  - **AND** Half Package is shown at $25.00/mo
  - **AND** Full Package is shown at $29.00/mo
  - **AND** each card has a View Packages button

### 6. CtaZipcode
- No dedicated spec block — hold this band to the design notes.
- Anchors: Zipcode · Check our super fast Broadband availability in your area. · Check Now

### 7. Testimonials
- The page SHALL display all 9 sections in order: Header, Hero, About, Services, Pricing, CTA/Zipcode, Testimonials, Blog, Footer.
- Scenario — Page loads with all sections:
  - **WHEN** a user visits the Blinkwave page
  - **THEN** the header with navigation is visible
  - **AND** the hero section shows the headline and CTA
  - **AND** the about section shows company information
  - **AND** the services section shows 4 feature cards
  - **AND** the pricing section shows 3 plan cards
  - **AND** the zipcode check form is present
  - **AND** the testimonial section shows customer quotes
  - **AND** the blog section shows 3 posts
  - **AND** the footer contains a Component Dock link

### 8. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Blog · Latest news and updates from Blinkwave. · Read More

### 9. Footer
- The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock attribution:
  - **WHEN** a user scrolls to the footer
  - **THEN** a link to https://www.componentdock.com/ is visible
  - **AND** the link text contains "Component Dock"

### Cross-cutting requirements

- **Mobile navigation toggle works** — The header SHALL support a mobile hamburger menu that opens and closes.
  - Scenario — Mobile menu toggle: **WHEN** a user on a mobile viewport clicks the hamburger button; **THEN** the mobile navigation menu opens; **AND** clicking a navigation link closes the menu
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/blinkwave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/blinkwave/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/blinkwave` ships on https://blinkwave.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/blinkwave/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/blinkwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blinkwave/public/CNAME` = `blinkwave.free.componentdock.com`
  and the package `homepage` = `https://blinkwave.free.componentdock.com`.
