# Pillar — Implementation Tasks

Source design: **Archs** (`https://colorlib.com/wp/template/archs/`) → recreation name **pillar**. Shipped at https://pillar.free.componentdock.com.

Scope: Pillar is an architecture and interior design landing page template recreating the ColorLib "Archs" design in React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/pillar/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- The template SHALL display a sticky navigation bar with the "Pillar" logo and links to Home, About, Team, Pricing, Projects, Blog, Services, and Contact sections.
- Scenario — Desktop navbar displays all links:
  - **WHEN** the page loads on desktop
  - **THEN** I see the "Pillar" logo linking to #home
  - **AND** I see navigation links for Home, About, Team, Pricing, Projects, Blog, Services, Contact
- Scenario — Mobile navbar toggles menu:
  - **WHEN** I am on a mobile viewport and tap the hamburger button
  - **THEN** the mobile menu expands showing all navigation links
  - **AND** tapping a link closes the menu

### 3. Hero
- The template SHALL display a full-width hero section with a dark overlay background image, the heading "Interior Design", a subtitle, and a "Get Started" call-to-action button.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** I see the "Interior Design" heading
  - **AND** I see a "Get Started" button linking to #contact

### 4. Features
- The template SHALL display a features section with three icon cards: Innovative Structure, Architectural Design, and Interior Design.
- Scenario — Features render three cards:
  - **WHEN** I scroll to the features section
  - **THEN** I see three feature cards with icons and descriptions

### 5. About
- The template SHALL display an about section with a split layout: an image on the left and "About Us" text with bullet points and a CTA on the right.
- Scenario — About section renders content:
  - **WHEN** I scroll to the about section
  - **THEN** I see the "About Us" heading
  - **AND** I see bullet points and a "Read More About Us" button

### 6. Team
- The template SHALL display a team section with six members in a 3-column grid, each with a photo, name, role, and social media icons.
- Scenario — Team section renders members:
  - **WHEN** I scroll to the team section
  - **THEN** I see six team members with names and roles

### 7. Pricing
- The template SHALL display a pricing section with three plans: Starter ($99/yr), Professional ($199/yr), and Enterprise ($299/yr), each with a features list and "Buy Now" button.
- Scenario — Pricing renders three plans:
  - **WHEN** I scroll to the pricing section
  - **THEN** I see three pricing cards with prices and "Buy Now" buttons

### 8. FAQ
- The template SHALL display an FAQ section with five expandable questions using an accordion pattern.
- Scenario — FAQ accordion toggles:
  - **WHEN** I click a collapsed FAQ question
  - **THEN** the answer expands and becomes visible
  - **AND** clicking it again collapses the answer

### 9. Testimonials
- The template SHALL display a testimonials section with client quotes in a grid layout.
- Scenario — Testimonials render:
  - **WHEN** I scroll to the testimonials section
  - **THEN** I see client names, roles, and quoted text

### 10. Projects
- The template SHALL display a projects section with six project cards in a 3-column grid, each with an image, title, and category label.
- Scenario — Projects render six cards:
  - **WHEN** I scroll to the projects section
  - **THEN** I see six project cards with titles and categories

### 11. Blog
- The template SHALL display a blog section with three post cards showing dates, images, and titles, plus a "View All Posts" link.
- Scenario — Blog renders posts:
  - **WHEN** I scroll to the blog section
  - **THEN** I see three blog post cards with dates

### 12. Services
- The template SHALL display a services section with six service items in a 3-column grid, each with an icon, title, and description.
- Scenario — Services render six items:
  - **WHEN** I scroll to the services section
  - **THEN** I see six service items with icons and titles

### 13. Contact
- The template SHALL display a contact section with a form containing Full Name, Email, and Message fields, plus a "Send Message" submit button.
- Scenario — Contact form is interactive:
  - **WHEN** I fill in the name, email, and message fields
  - **AND** I click "Send Message"
  - **THEN** the form submits without navigation

### 14. Footer
- The template SHALL display a four-column footer with About, Navigation, More Links, and Recent News sections, a newsletter signup form, social media links, and a copyright line linking to Component Dock.
- Scenario — Footer renders Component Dock link:
  - **WHEN** I look at the footer
  - **THEN** I see a link to https://www.componentdock.com/ labeled "Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pillar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pillar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pillar` ships on https://pillar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pillar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pillar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pillar/public/CNAME` = `pillar.free.componentdock.com`
  and the package `homepage` = `https://pillar.free.componentdock.com`.
