# Peakform — Implementation Tasks

Source design: **Ironmuscle** (`https://colorlib.com/wp/template/ironmuscle/`) → recreation name **peakform**. Shipped at https://peakform.free.componentdock.com.

Scope: Peakform is a gym and fitness landing page template, recreating the ColorLib Ironmuscle design in React 19 + Vite + Tailwind CSS 4 + TypeScript. It showcases gym services, class schedules, trainers, and testimonials with a bold red brand palette.

## Component breakdown

Render order as composed in `apps/peakform/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the brand logo "peakform" and navigation links including Home, Classes (with dropdown), Services, News, About, and Contact. The mobile menu toggle SHALL work on small screens.
- Scenario — Renders logo and navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar displays "peakform" logo text and links for Home, Classes, Services, News, About, Contact
- Scenario — Mobile menu toggle works:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu becomes visible
- Scenario — Dropdown appears on hover:
  - **WHEN** the user hovers over the Classes navigation item
  - **THEN** a dropdown menu appears with Running, Yoga, Boxing, Weight Lifting options

### 2. Hero
- The hero section SHALL display full-width slides with background images and centered headlines, auto-rotating between slides.
- Scenario — Renders hero slides with headings:
  - **WHEN** the page loads
  - **THEN** the hero section displays a headline with "Get In Shape" text
- Scenario — Slides rotate via indicators:
  - **WHEN** the user clicks a slide indicator button
  - **THEN** the displayed slide changes to show the corresponding headline

### 3. FeatureBlocks
- The features section SHALL display 4 gym categories (Yoga, Weight Lifting, Boxing, Running) in a responsive grid with icons and descriptions.
- Scenario — Renders 4 feature items:
  - **WHEN** the page loads
  - **THEN** 4 feature items are displayed with Yoga, Weight Lifting, Boxing, and Running titles

### 4. About
- The about section SHALL display a heading, descriptive text, checklist items, a Read More button, and an accompanying image.
- Scenario — Renders heading, checklist, and button:
  - **WHEN** the page loads
  - **THEN** the about section shows "All About Our Gym" heading, checklist items, and a "Read More" button

### 5. FeaturedClasses
- The featured classes section SHALL display horizontally scrollable class cards with images, titles, descriptions, and instructor names.
- Scenario — Renders class cards:
  - **WHEN** the page loads
  - **THEN** class cards are displayed with class titles, descriptions, and instructor names

### 6. Schedule
- The schedule section SHALL display a dark overlay background with day tabs (Sunday through Friday) and class schedule rows showing class name, time, instructor, and a Join Now button.
- Scenario — Renders day tabs and schedule content:
  - **WHEN** the page loads
  - **THEN** day tabs are displayed with Sunday selected by default, showing class schedule rows
- Scenario — Tab switching changes displayed schedule:
  - **WHEN** the user clicks a different day tab
  - **THEN** the schedule content updates to show classes for that day

### 7. Testimonials
- The testimonials section SHALL display a carousel of client testimonials with avatars, names, roles, and blockquote text.
- Scenario — Renders testimonial cards:
  - **WHEN** the page loads
  - **THEN** testimonials are displayed with avatar images, names, and quote text

### 8. Trainers
- The trainers section SHALL display trainer cards in a grid with photos and hover overlays showing name, description, and social icons.
- Scenario — Renders trainer cards:
  - **WHEN** the page loads
  - **THEN** trainer cards are displayed with names and roles

### 9. Footer
- The footer SHALL display About text, Quick Menu links, Contact info, Social icons, and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to componentdock.com branded as "Component Dock"
- Scenario — Renders contact info and social links:
  - **WHEN** the page loads
  - **THEN** the footer displays contact information and social media icons

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/peakform/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/peakform/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/peakform` ships on https://peakform.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/peakform/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/peakform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/peakform/public/CNAME` = `peakform.free.componentdock.com`
  and the package `homepage` = `https://peakform.free.componentdock.com`.
