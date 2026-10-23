# Keycraft — Implementation Tasks

Source design: **Locksmith** (`https://colorlib.com/wp/template/locksmith/`) → recreation name **keycraft**. Shipped at https://keycraft.free.componentdock.com.

Scope: Recreation of ColorLib "Locksmith" (https://colorlib.com/wp/template/locksmith/) as a React 19 + Tailwind CSS 4 + TypeScript template. Provides a locksmith/security services landing page with hero, quote form, services grid, stats counter, product showcase, testimonials, and blog.

## Component breakdown

Render order as composed in `apps/keycraft/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky navbar with the brand name "Keycraft", navigation links (Home, About, Services, Shop, News, Contact), and a phone number. The navbar SHALL support a mobile hamburger menu toggle.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the logo "Keycraft", all 6 navigation links, and the phone number "+1 800 556 6688"
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile navigation menu opens with all links visible

### 2. Hero
- The template SHALL render a full-width hero section with a background image, subtitle "Best locksmith", heading "We Provide Best Locksmith Services All Over World", and a "Contact us" CTA button.
- Scenario — Hero displays heading and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section shows the heading and a "Contact us" link pointing to #contact

### 3. GetQuote
- The template SHALL render a dark section with a "Get a quote" heading and a form containing Name, Phone, and Service dropdown fields with a submit button.
- Scenario — Form renders all fields:
  - **WHEN** the get-quote section loads
  - **THEN** the form displays inputs for name, phone, and a service dropdown with options (Access, Safes, Residential, Commercial)

### 4. Services
- The template SHALL display 6 service cards in a 3-column grid: Locksmith Services, Safes & Locks, Access Control, Security Doors, Alarm System, and Video Surveillance.
- Scenario — All 6 services render:
  - **WHEN** the services section loads
  - **THEN** all 6 service card headings are visible

### 5. WhyChooseUs
- The template SHALL display a split layout with an image grid on the left and a checklist of 5 items on the right, plus a "Get a quote" CTA.
- Scenario — Checklist items render:
  - **WHEN** the why-choose-us section loads
  - **THEN** all 5 checklist items are visible

### 6. Counter
- The template SHALL display 5 statistics: 25k+ Happy Customers, 16 World Wide Branch, 28k+ Project Complete, 36 Award Winner, 74k+ Products sold.
- Scenario — All stats render:
  - **WHEN** the counter section loads
  - **THEN** all 5 stat values and labels are visible

### 7. Products
- The template SHALL display 5 product cards with image, price ($55.0), title, and star rating, plus a "View all" link.
- Scenario — Products render with ratings:
  - **WHEN** the products section loads
  - **THEN** 5 product cards with prices are visible

### 8. Testimonial
- The template SHALL display a split layout with a dark overlay + phone CTA on the left and a testimonial slider on the right with dot navigation.
- Scenario — Testimonial navigation:
  - **WHEN** the user clicks a dot indicator
  - **THEN** the corresponding testimonial is displayed

### 9. Blog
- The template SHALL display 4 blog post cards in a 2-column grid with image, category tag, title, date, and comment count.
- Scenario — Blog posts render:
  - **WHEN** the blog section loads
  - **THEN** all 4 blog post titles are visible

### 10. Footer
- The template SHALL render a 4-column footer (About, Feature Services, Quick Links, Newsletter) with a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders with Component Dock link:
  - **WHEN** the footer loads
  - **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/keycraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/keycraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; **Fonts:** Rajdhani (headings/display), Open Sans (body) via Google Fonts; **Brand color:** #ffc446 (golden amber); **Dark navy:** #052336 (header/footer backgrounds); **Dark teal:** #0e1f24 (section title text); **Body text:** #444444; **Heading text:** #111111; **Button:** #ffc446 background, uppercase, letter-spacing, Rajdhani font; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/keycraft` ships on https://keycraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/keycraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/keycraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keycraft/public/CNAME` = `keycraft.free.componentdock.com`
  and the package `homepage` = `https://keycraft.free.componentdock.com`.
