# Fixero — Implementation Tasks

Source design: **Handyman** (`https://colorlib.com/wp/template/handyman/`) → recreation name **fixero**. Shipped at https://fixero.free.componentdock.com.

Scope: Provide a free, production-ready handyman and construction landing page template built with React 19, Tailwind CSS 4, and TypeScript. Faithfully recreates the ColorLib "Handyman" design under the name "Fixero" with matching sections, layout, and design tokens.

## Component breakdown

Render order as composed in `apps/fixero/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed navigation bar with the "Fixero" logo (orange dot accent), navigation links (Home, About, Services, Projects, Blog, Contact), and a dark mode toggle.
- Scenario — Logo and links are visible:
  - **WHEN** the page loads
  - **THEN** I see "Fixero" with an orange dot in the logo area
  - **AND** I see navigation links: Home, About, Services, Projects, Blog, Contact
- Scenario — Dark mode toggle works:
  - **WHEN** I click the dark mode toggle button
  - **THEN** the page switches to dark mode
  - **AND** the toggle shows a light mode option
- Scenario — Navbar scrolls with background change:
  - **WHEN** I scroll down the page
  - **THEN** the navbar background changes from transparent to dark

### 2. Hero
- The template SHALL display a full-width hero section with a dark overlay on a background image and the heading "Perfection is always in our mind."
- Scenario — Hero heading is visible:
  - **WHEN** the page loads
  - **THEN** I see the heading "Perfection is always in our mind."
  - **AND** the hero has a background image with dark overlay

### 3. QuotationForm
- The template SHALL display a split layout with descriptive text on the left and a contact form (Name, Email, Message fields, Send Message button) on the right.
- Scenario — Form fields are present:
  - **WHEN** the page loads
  - **THEN** I see Name, Email, and Message input fields
  - **AND** I see a "Send Message" button
- Scenario — Form submission shows confirmation:
  - **WHEN** I fill in the form and click Send Message
  - **THEN** I see a thank you confirmation message

### 4. Services
- The template SHALL display 6 service cards on a lavender background (#dedffe) with icons, titles, and descriptions: Renovation, Finishing, Building Construction, House Build, Fence Construction, Bridge Construct.
- Scenario — All service cards are visible:
  - **WHEN** the page loads
  - **THEN** I see 6 service cards with icons and descriptions

### 5. AboutTabs
- The template SHALL display a tabbed "We Are Leader In The Construction World" section with 3 tabs: Technology, Quality, Staff. Each tab shows an image and descriptive text.
- Scenario — Tabs switch content:
  - **WHEN** I click the Quality tab
  - **THEN** I see the Quality image and description
  - **AND** the Technology content is no longer visible

### 6. Testimonials
- The template SHALL display 2 testimonial cards with blockquotes, avatars, names, and roles on a light gray background.
- Scenario — Testimonials are visible:
  - **WHEN** the page loads
  - **THEN** I see 2 testimonial cards with quotes and avatars

### 7. Projects
- The template SHALL display 6 project cards with images that show an overlay with category and title on hover.
- Scenario — Project cards are visible:
  - **WHEN** the page loads
  - **THEN** I see 6 project cards with images

### 8. Blog
- The template SHALL display 3 blog post cards with images, titles, dates, authors, and excerpts.
- Scenario — Blog posts are visible:
  - **WHEN** the page loads
  - **THEN** I see 3 blog post cards with titles and excerpts

### 9. Footer
- The template SHALL display a dark footer with About Us text, 4 Quick Links columns, and a "Component Dock" attribution linking to https://www.componentdock.com/.
- Scenario — Footer has Component Dock link:
  - **WHEN** the page loads
  - **THEN** I see a "Component Dock" link in the footer
  - **AND** the link opens https://www.componentdock.com/
- Scenario — Footer has Quick Links:
  - **WHEN** the page loads
  - **THEN** I see 4 columns of Quick Links in the footer

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fixero/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fixero/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/fixero` ships on https://fixero.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fixero/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fixero/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fixero/public/CNAME` = `fixero.free.componentdock.com`
  and the package `homepage` = `https://fixero.free.componentdock.com`.
