# Carepoint — Implementation Tasks

Source design: **Caremed** (`https://colorlib.com/wp/template/caremed/`) → recreation name **carepoint**. Shipped at https://carepoint.free.componentdock.com.

Scope: A medical/healthcare center website template. Recreation of ColorLib "Caremed". **Source slug:** `caremed` **ColorLib URL:** https://colorlib.com/wp/template/caremed/ **Preview URL:** https://preview.colorlib.com/theme/caremed/ **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caremed-free-template.jpg **Stack:** React 19…

## Component breakdown

Render order as composed in `apps/carepoint/src/App.tsx`:

### 1. TopBar
- The page SHALL display a top information bar with FAQ link, appointment request link, and emergency phone number.
- Scenario — Top bar renders contact info:
  - **GIVEN** a visitor loads the page
  - **WHEN** they view the top bar
  - **THEN** they see a FAQ link, "Request an Appointment" link, and emergency phone number "+563 47558 623"

### 2. Header
- The page SHALL display a sticky header with the CarePoint logo, subtitle, and navigation links.
- Scenario — Header renders navigation:
  - **GIVEN** a visitor loads the page
  - **WHEN** they view the header
  - **THEN** they see the CarePoint logo with "Health Care Center" subtitle and navigation links (Home, About us, Services, News, Contact)
- Scenario — Mobile menu toggle:
  - **GIVEN** a visitor on mobile
  - **WHEN** they tap the menu button
  - **THEN** the mobile navigation menu opens and closes on link click

### 3. Hero
- The page SHALL display a full-width hero section with the heading "Medicine made with care" and an appointment button.
- Scenario — Hero renders heading:
  - **GIVEN** a visitor loads the page
  - **WHEN** they view the hero section
  - **THEN** they see "Medicine made with care" as the main heading

### 4. InfoBoxes
- The page SHALL display three information boxes for Working Hours, Appointments, and Emergency Cases on a green background.
- Scenario — Info boxes render content:
  - **GIVEN** a visitor scrolls past the hero
  - **WHEN** they view the info boxes
  - **THEN** they see three cards with Working Hours, Appointments, and Emergency Cases content

### 5. About
- The page SHALL display an about section with a heading, descriptive text, a "Read More" button, and an image.
- Scenario — About section renders:
  - **GIVEN** a visitor views the about section
  - **WHEN** they read the content
  - **THEN** they see "A great medical team to help your needs" heading and descriptive text

### 6. Departments
- The page SHALL display a departments section with a parallax background, department cards with doctor names, and a read more card.
- Scenario — Departments render:
  - **GIVEN** a visitor views the departments section
  - **WHEN** they browse the grid
  - **THEN** they see three department cards (Plastic Surgery, Gastroenterology, Dentistry) with doctor names and a read more card

### 7. Services
- The page SHALL display a services section with six service cards in a grid layout.
- Scenario — Services render:
  - **GIVEN** a visitor views the services section
  - **WHEN** they browse the service cards
  - **THEN** they see six services (Free Checkups, Screening Exams, RMI Services, Dentistry, Neonatology, Biochemistry) with icons and descriptions

### 8. CTA
- The page SHALL display a call-to-action section with a parallax background, heading, description, and request button.
- Scenario — CTA renders:
  - **GIVEN** a visitor reaches the CTA section
  - **WHEN** they see the call to action
  - **THEN** they see "Need a personal health plan?" heading and a "Request a Plan" button

### 9. Footer
- The page SHALL display a footer with contact information, useful links, recent news, and a Component Dock attribution link.
- Scenario — Footer renders:
  - **GIVEN** a visitor reaches the footer
  - **WHEN** they view the footer
  - **THEN** they see contact info, useful links, recent news, and a link to https://www.componentdock.com/ branded as "Component Dock"

### Cross-cutting requirements

- **Responsive Layout** — The page SHALL adapt to mobile viewports with appropriate responsive behavior.
  - Scenario — Mobile layout: **GIVEN** a visitor on a mobile device; **WHEN** they view the page; **THEN** the layout adapts to mobile viewport width
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/carepoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/carepoint/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/carepoint` ships on https://carepoint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/carepoint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/carepoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carepoint/public/CNAME` = `carepoint.free.componentdock.com`
  and the package `homepage` = `https://carepoint.free.componentdock.com`.
