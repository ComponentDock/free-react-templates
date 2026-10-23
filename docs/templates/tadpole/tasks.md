# Tadpole — Implementation Tasks

Source design: **Kindergarten** (`https://colorlib.com/wp/template/kindergarten/`) → recreation name **tadpole**. Shipped at https://tadpole.free.componentdock.com.

Scope: Tadpole is a single-page kindergarten/preschool landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kindergarten" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/tadpole/src/App.tsx`:

### 1. TopBar
- WHEN the page loads THEN a top bar shows address, phone, and email AND social media icons (Facebook, Twitter, Instagram) are displayed
- Scenario — Top bar renders contact details:
  - **WHEN** the page loads
  - **THEN** the top bar displays the email address, phone number, and physical address
  - **AND** each contact detail has an associated icon
- Scenario — Social media icons are clickable:
  - **WHEN** the page loads
  - **THEN** Facebook, Twitter, and Instagram icons are rendered as links
  - **AND** each icon has an aria-label for accessibility

### 2. Navbar
- WHEN the page loads THEN the navbar displays logo and navigation links AND an "Enroll Now" CTA button is visible
- Scenario — Navigation links are rendered:
  - **WHEN** the page loads
  - **THEN** links for Home, About, Programs, Teachers, Events, Gallery, Blog, Contact are visible
  - **AND** the logo "Tadpole" is displayed
- Scenario — Navbar becomes sticky on scroll:
  - **WHEN** the user scrolls past 100px
  - **THEN** the navbar gets a white background with shadow
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation menu opens
  - **AND** clicking a link closes the menu

### 3. Hero
- WHEN the page loads THEN the hero section shows a headline about kids learning and growing AND a subtext describing the kindergarten AND call-to-action buttons are displayed
- Scenario — Hero content is visible:
  - **WHEN** the page loads
  - **THEN** the headline "Where Little Minds Grow Big Dreams" is displayed
  - **AND** "Explore Programs" and "Learn More" buttons are present

### 4. Features
- WHEN the page loads THEN three feature cards are displayed with icons
- Scenario — Feature cards render correctly:
  - **WHEN** the page loads
  - **THEN** cards for "Playful Learning", "Creative Arts", and "Nature Exploration" appear
  - **AND** each card has a colored icon circle and description text

### 5. About
- WHEN the page loads THEN the about section shows an image and descriptive text
- Scenario — About content is visible:
  - **WHEN** the page loads
  - **THEN** the heading "A Place Where Every Child Matters" is displayed
  - **AND** a "Discover More" CTA button is present

### 6. Programs
- WHEN the page loads THEN three program cards are displayed on a green background
- Scenario — Program cards render correctly:
  - **WHEN** the page loads
  - **THEN** cards for "Tiny Tots", "Little Explorers", and "Big Beginnings" appear
  - **AND** each card has a "Learn More" button

### 7. Teachers
- WHEN the page loads THEN three teacher cards are displayed with photos
- Scenario — Teacher cards render correctly:
  - **WHEN** the page loads
  - **THEN** cards for Sarah Mitchell, James Wilson, and Emily Chen appear
  - **AND** each card shows name, role, and portrait image

### 8. Events
- WHEN the page loads THEN a countdown timer displays days, hours, minutes, seconds
- Scenario — Countdown timer updates:
  - **WHEN** the page loads
  - **THEN** the countdown shows numeric values for Days, Hours, Minutes, Seconds
  - **AND** the timer updates every second
  - **AND** an "RSVP Now" button is present

### 9. Testimonials
- WHEN the page loads THEN a testimonial carousel displays quotes from parents
- Scenario — Testimonial navigation works:
  - **WHEN** the user clicks the next arrow
  - **THEN** the next testimonial slide is shown
  - **WHEN** the user clicks a dot indicator
  - **THEN** the corresponding testimonial is displayed

### 10. Blog
- WHEN the page loads THEN three blog post cards are displayed
- Scenario — Blog cards render correctly:
  - **WHEN** the page loads
  - **THEN** three blog posts with titles, dates, and excerpts appear
  - **AND** each card has a "Read More" link

### 11. Footer
- WHEN the page loads THEN the footer shows about text, navigation links, programs list, and newsletter form
- Scenario — Newsletter form works:
  - **WHEN** the user enters an email and submits the form
  - **THEN** the input field is cleared
- Scenario — Component Dock attribution is present:
  - **WHEN** the page loads
  - **THEN** a link to componentdock.com is displayed with "Component Dock" text

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tadpole/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tadpole/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tadpole` ships on https://tadpole.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tadpole/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tadpole/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tadpole/public/CNAME` = `tadpole.free.componentdock.com`
  and the package `homepage` = `https://tadpole.free.componentdock.com`.
