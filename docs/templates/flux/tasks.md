# Flux — Implementation Tasks

Source design: **Pixel** (`https://colorlib.com/wp/template/pixel/`) → recreation name **flux**. Shipped at https://flux.free.componentdock.com.

Scope: A Digital Agency template with category tiles, newsletter subscription and contact sections. Recreation of ColorLib's **Pixel** digital agency website template.

## Component breakdown

Render order as composed in `apps/flux/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navbar with logo, navigation links (Home, About, Services, Portfolio, Contact), and social icon links (Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest).
- Scenario — Desktop navbar renders all elements:
  - **WHEN** the page loads on desktop viewport
  - **THEN** the navbar displays the logo, all five navigation links, and all six social icon links
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile menu expands showing navigation links and social icons
  - **AND** clicking the close button collapses the menu

### 2. Hero
- The template SHALL display a full-width hero section with a background image, heading text ("Digital Agency of the year 2024"), subtitle with credit and client info, and a "View Project" CTA button.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section displays the heading "Digital Agency", subheading "of the year 2024", credit text, and a "View Project" button

### 3. CategoryTiles
- The template SHALL display two side-by-side category tiles with background images and labels ("Agency" and "What We Do?").
- Scenario — Category tiles render:
  - **WHEN** the page loads
  - **THEN** two category tiles are displayed with the labels "Agency" and "What We Do?"

### 4. Newsletter
- The template SHALL display a newsletter section with blue background, heading "Stay in touch with us", email input field, and a "View Project" button.
- Scenario — Newsletter form accepts email input:
  - **WHEN** the user types an email address in the newsletter input
  - **THEN** the input displays the typed email
  - **AND** submitting the form clears the input

### 5. Portfolio
- The template SHALL display a portfolio section with filter buttons (All Projects, Visual, Advertising, Web Development) and a gallery grid of project items with hover overlays.
- Scenario — Default view shows all projects:
  - **WHEN** the page loads
  - **THEN** all three gallery items are visible
- Scenario — Filtering by category:
  - **WHEN** the user clicks a filter button (e.g. "Visual")
  - **THEN** only items matching that category are shown

### 6. Contact
- The template SHALL display a contact form with fields for Name, Email, Subject, Message, and a "Send Message" submit button.
- Scenario — Contact form accepts input and submits:
  - **WHEN** the user fills all form fields and clicks "Send Message"
  - **THEN** the form clears all fields

### 7. Footer
- The template SHALL display a footer with blue background, logo, address, support phone, social icons, copyright text with a Component Dock link (https://www.componentdock.com/), and footer navigation links.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
  - **AND** the link opens in a new tab
- Scenario — Footer renders social icons:
  - **WHEN** the page loads
  - **THEN** the footer displays social icon links for Facebook, Dribbble, Flickr, Instagram, LinkedIn, and Pinterest

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/flux/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/flux/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/flux` ships on https://flux.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/flux/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/flux/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flux/public/CNAME` = `flux.free.componentdock.com`
  and the package `homepage` = `https://flux.free.componentdock.com`.
