# Forger — Implementation Tasks

Source design: **Niko** (`https://colorlib.com/wp/template/niko/`) → recreation name **forger**. Shipped at https://forger.free.componentdock.com.

Scope: Recreate the ColorLib "Niko" freelance developer portfolio template as a React 19 + Vite + Tailwind CSS 4 app named "Forger".

## Component breakdown

Render order as composed in `apps/forger/src/App.tsx`:

### 1. Navbar
- The app SHALL render a sticky dark navbar with brand logo "F", navigation links (Home, About, Skills, Projects, Blog, Contact), a "Hire me" button, and a mobile hamburger toggle.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the brand link "F", all six navigation links, and the "Hire me" button
- Scenario — Mobile toggle opens and closes menu:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu appears with all links
  - **WHEN** the user clicks a link in the mobile menu
  - **THEN** the mobile menu closes

### 2. Hero
- The app SHALL render a full-width hero section with a background image, "Hello" badge, name heading "Alex Forger", subtitle "A Freelance Web Developer", and a "Hire me" call-to-action button.
- Scenario — Hero displays greeting and name:
  - **WHEN** the page loads
  - **THEN** the hero section shows "Hello" badge, "Alex Forger" heading, and "A Freelance Web Developer" subtitle
- Scenario — Hero has call-to-action:
  - **WHEN** the page loads
  - **THEN** a "Hire me" link is visible in the hero section

### 3. About
- The app SHALL render an About section with an image, "About Me" heading, two service cards (Web Design, Web Application), and a counter showing "200 Finished Projects".
- Scenario — About section displays services:
  - **WHEN** the page loads
  - **THEN** the About section shows "Web Design" and "Web Application" service headings
- Scenario — About section shows project counter:
  - **WHEN** the page loads
  - **THEN** the counter displays "200" and "Finished Projects"

### 4. Skills
- The app SHALL render a Skills section with 6 progress bars: Photoshop (75%), jQuery (60%), HTML5 (85%), CSS3 (90%), WordPress (70%), SEO (80%).
- Scenario — All skill bars render with correct values:
  - **WHEN** the page loads
  - **THEN** 6 progress bars are rendered with aria-valuenow values of 75, 60, 85, 90, 70, and 80 respectively

### 5. WhatIDo
- The app SHALL render 3 service columns (Explore, Create, Learn) each with an icon and a list of sub-services.
- Scenario — Service columns display correctly:
  - **WHEN** the page loads
  - **THEN** headings "Explore", "Create", and "Learn" are visible with their respective service items

### 6. HireMe
- The app SHALL render a blue banner with "I'm Available For Freelancing" text and a white "Hire me" button.
- Scenario — CTA banner renders:
  - **WHEN** the page loads
  - **THEN** the text "Available" and "For Freelancing" are visible with a "Hire me" link

### 7. Projects
- The app SHALL render 5 project cards in a responsive grid layout with background images, overlay, title, and category label.
- Scenario — Projects display correctly:
  - **WHEN** the page loads
  - **THEN** 5 project cards with "Branding & Illustration Design" titles are rendered

### 8. Blog
- The app SHALL render 3 blog cards with images, dates, authors, comment counts, titles, and excerpts.
- Scenario — Blog entries render:
  - **WHEN** the page loads
  - **THEN** 3 blog article elements are rendered with titles and metadata

### 9. Contact
- The app SHALL render a contact form with Name, Email, Subject, Message fields and a "Send Message" button. On submit, a success message appears.
- Scenario — Form fields are interactive:
  - **WHEN** the user types in the form fields
  - **THEN** the field values update accordingly
- Scenario — Form submission shows success:
  - **WHEN** the user clicks "Send Message"
  - **THEN** a thank-you message is displayed

### 10. Footer
- The app SHALL render a dark footer with brand section, navigation links, services links, contact information, and a copyright line linking to componentdock.com.
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present in the footer

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/forger/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/forger/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/forger` ships on https://forger.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/forger/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/forger/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forger/public/CNAME` = `forger.free.componentdock.com`
  and the package `homepage` = `https://forger.free.componentdock.com`.
