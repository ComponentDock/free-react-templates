# Cosyhaus — Implementation Tasks

Source design: **Theinterior** (`https://colorlib.com/wp/template/theinterior/`) → recreation name **cosyhaus**. Shipped at https://cosyhaus.free.componentdock.com.

Scope: Cosyhaus is a single-page interior design landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Theinterior" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/cosyhaus/src/App.tsx`:

### 1. Navbar
- Cosyhaus SHALL display a sticky header with the "Cosyhaus" logo, navigation links (Home, About, Services, Gallery, Blog, Contact), a dark mode toggle button, a "Contact Us" CTA button, and a responsive mobile hamburger menu.
- Scenario — Navbar renders all navigation links:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see links for "Home", "About", "Services", "Gallery", "Blog", "Contact"
  - **AND** I see a "Contact Us" button
- Scenario — Dark mode toggle works:
  - **WHEN** I click the dark mode toggle button
  - **THEN** the document root element has the CSS class "dark"
- Scenario — Mobile menu opens and closes:
  - **WHEN** I click the "Open menu" button
  - **THEN** a mobile navigation panel appears
  - **AND** I see a "Close menu" button

### 2. Hero
- Cosyhaus SHALL display a full-width hero section with a background image overlay, a "Welcome to Cosyhaus" tagline, and the headline "Modern Interior & Design".
- Scenario — Hero displays headline and tagline:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see the text "Modern Interior & Design"
  - **AND** I see the tagline "Welcome to Cosyhaus"

### 3. InfoHighlights
- Cosyhaus SHALL display a dark-background section with three info columns (Clean and Services, Clean and Modern, Elegant and Modern).
- Scenario — Three highlight cards render:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see three info cards with titles "Clean and Services", "Clean and Modern", "Elegant and Modern"

### 4. ProfessionalServices
- Cosyhaus SHALL display a full-width background image section with the heading "Our Professional Services", descriptive text, and a "Discover More About Us" CTA button.
- Scenario — Professional services section displays CTA:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see the heading "We will create modern and first class interior"
  - **AND** I see a "Discover More About Us" link

### 5. Services
- Cosyhaus SHALL display a full-width background image section with the heading "Our Professional Services", descriptive text, and a "Discover More About Us" CTA button.
- Scenario — Professional services section displays CTA:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see the heading "We will create modern and first class interior"
  - **AND** I see a "Discover More About Us" link

### 6. Gallery
- Cosyhaus SHALL display a 4-column asymmetric grid of 6 project gallery items with overlay labels and arrow links.
- Scenario — Gallery shows six items:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see at least 6 gallery items with images

### 7. Team
- Cosyhaus SHALL display three team member cards with circular photos, names, and roles.
- Scenario — Three team members display:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see 3 team members with names and "Creative Director" roles

### 8. Testimonials
- Cosyhaus SHALL display a testimonial carousel with author quotes, names, and roles, with prev/next navigation and dot indicators.
- Scenario — Testimonial shows author info:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see a testimonial with author "Christine Eve"
- Scenario — Testimonial navigation works:
  - **WHEN** I click the "Next testimonial" button
  - **THEN** the next testimonial appears

### 9. BrandLogos
- No dedicated spec block — hold this band to the design notes.

### 10. CtaBanner
- Cosyhaus SHALL display a CTA banner with "Are you Searching For a First-Class Consultant?" and a "Contact Us" button.
- Scenario — CTA banner has contact button:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see "Are you Searching For a First-Class Consultant?"
  - **AND** I see a "Contact Us" link

### 11. Blog
- Cosyhaus SHALL display two blog post cards with images, dates, author stats, titles, and "Read more" links.
- Scenario — Two blog posts render:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** I see 2 blog post titles
  - **AND** I see 2 "Read more" links

### 12. Footer
- Cosyhaus SHALL display a dark footer with logo, description, phone/email, address columns, Instagram grid, social icons, newsletter form with validation, and a "Made with Component Dock" attribution linking to https://www.componentdock.com/.
- Scenario — Footer links to Component Dock:
  - **WHEN** I visit the Cosyhaus page
  - **THEN** the footer contains a link to "https://www.componentdock.com/"
- Scenario — Footer newsletter accepts valid email:
  - **WHEN** I enter "jane@example.com" in the newsletter email field
  - **AND** I click "Subscribe"
  - **THEN** I see "Thanks for subscribing!"
- Scenario — Footer newsletter rejects invalid email:
  - **WHEN** I enter "not-an-email" in the newsletter email field
  - **AND** I click "Subscribe"
  - **THEN** I see an error message about valid email

### Cross-cutting requirements

- **Services grid with three cards** — Cosyhaus SHALL display three service cards (Lighting, Interior Design, Office Decoration) each with an image, title, short description, and longer description.
  - Scenario — Three service cards render: **WHEN** I visit the Cosyhaus page; **THEN** I see service cards for "Lighting", "Interior Design", "Office Decoration"; **AND** I see the section heading "Best Interior Services"
- **Document title** — Cosyhaus SHALL set the document title to "Cosyhaus — Interior Design Template" on mount.
  - Scenario — Page title updates: **WHEN** I visit the Cosyhaus page; **THEN** the document title is "Cosyhaus — Interior Design Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cosyhaus/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cosyhaus/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cosyhaus` ships on https://cosyhaus.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cosyhaus/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cosyhaus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cosyhaus/public/CNAME` = `cosyhaus.free.componentdock.com`
  and the package `homepage` = `https://cosyhaus.free.componentdock.com`.
