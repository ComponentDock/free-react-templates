# Pediment — Implementation Tasks

Source design: **Staging** (`https://colorlib.com/wp/template/staging/`) → recreation name **pediment**. Shipped at https://pediment.free.componentdock.com.

Scope: Recreation of ColorLib's **Staging** template (`https://colorlib.com/wp/template/staging/`). Live preview: `https://preview.colorlib.com/theme/staging/`. Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/staging-free-template.jpg`. Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).

## Component breakdown

Render order as composed in `apps/pediment/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the template logo, navigation links (Home, Projects, About, Blog, Contact), and a phone number.
- Scenario — Desktop navbar content:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the logo "Pediment", all navigation links, and the phone number "+01 123 456 789"
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu opens with all links visible

### 2. Hero
- The hero section SHALL display a heading, primary CTA button, secondary CTA button, and social media links.
- Scenario — Hero content:
  - **WHEN** the hero section renders
  - **THEN** it displays the heading "Quality is not only our standard.", a "See Project" button linking to #projects, and a "Discover more" button linking to #about

### 3. About
- The about section SHALL display a section label, heading, description paragraphs, and a CTA button.
- Scenario — About content:
  - **WHEN** the about section renders
  - **THEN** it displays the label "who are we", the heading "We propose and discuss design rules", description text, and a "Learn More" button

### 4. Projects
- The projects section SHALL display a heading and 4 project cards with category, title, and image.
- Scenario — Projects grid:
  - **WHEN** the projects section renders
  - **THEN** it displays 4 project cards with titles and category labels

### 5. Services
- The services section SHALL display 4 service cards with icons, titles, descriptions, and counter statistics.
- Scenario — Services and stats:
  - **WHEN** the services section renders
  - **THEN** it displays 4 service cards (Interior Design, Office Design, Home Design, Design drawing) and 4 counter stats (85, 127, 36, 74)

### 6. Testimonials
- The testimonials section SHALL display client quotes with star ratings, names, roles, and avatar images.
- Scenario — Testimonials content:
  - **WHEN** the testimonials section renders
  - **THEN** it displays 3 testimonial quotes with client names and roles

### 7. Team
- The team section SHALL display team member cards with background images, names, roles, and social links.
- Scenario — Team members:
  - **WHEN** the team section renders
  - **THEN** it displays 3 team members with names, roles, and social media links

### 8. Cta
- The hero section SHALL display a heading, primary CTA button, secondary CTA button, and social media links.
- Scenario — Hero content:
  - **WHEN** the hero section renders
  - **THEN** it displays the heading "Quality is not only our standard.", a "See Project" button linking to #projects, and a "Discover more" button linking to #about

### 9. Blog
- The blog section SHALL display blog post cards with category, title, image, and read more link.
- Scenario — Blog posts:
  - **WHEN** the blog section renders
  - **THEN** it displays 3 blog cards with categories and titles

### 10. Footer
- The footer SHALL display a newsletter form, Company and Services link columns, Get In Touch information, and a copyright notice with a Component Dock link.
- Scenario — Footer content:
  - **WHEN** the footer renders
  - **THEN** it displays the newsletter heading "Ready To Work With Us?", Company links, Services links, Get In Touch info, and a "Component Dock" link pointing to https://www.componentdock.com/

### Cross-cutting requirements

- **CTA section shows heading and button** — The call-to-action section SHALL display a heading and a contact button.
  - Scenario — CTA content: **WHEN** the CTA section renders; **THEN** it displays the heading and a "Contact Us" button
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pediment/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pediment/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pediment` ships on https://pediment.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pediment/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pediment/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pediment/public/CNAME` = `pediment.free.componentdock.com`
  and the package `homepage` = `https://pediment.free.componentdock.com`.
