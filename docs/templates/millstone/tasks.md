# Millstone — Implementation Tasks

Source design: **Inds** (`https://colorlib.com/wp/template/inds/`) → recreation name **millstone**. Shipped at https://millstone.free.componentdock.com.

Scope: Recreate the ColorLib "Inds" industrial company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Millstone". The template provides a full-featured industrial company website with top bar, navbar, hero, services, about, mission, team, CTA, and footer sections.

## Component breakdown

Render order as composed in `apps/millstone/src/App.tsx`:

### 1. TopBar
- The template SHALL display a top bar with phone number, email address, and business hours.
- Scenario — TopBar renders all contact details:
  - **WHEN** the page loads
  - **THEN** the top bar shows the phone number "+880166 253 232"
  - **AND** the top bar shows the email "info@domain.com"
  - **AND** the top bar shows the business hours "Mon - Fri: 9:00 - 19:00"
- Scenario — TopBar has dark background:
  - **WHEN** the top bar renders
  - **THEN** it has a dark navy background

### 2. Navbar
- The template SHALL have a sticky navigation bar with logo, 6 links, and a Get A Quote button.
- Scenario — Navbar renders logo and links:
  - **WHEN** the page loads
  - **THEN** the navbar displays the "Millstone" logo
  - **AND** 6 navigation links are present (Home, About, Industries, Works, Blog, Contact)
  - **AND** a "Get A Quote" CTA button is visible
- Scenario — Navbar toggles mobile menu:
  - **WHEN** the user clicks the mobile hamburger button
  - **THEN** the mobile menu opens with all navigation links
  - **AND** the toggle button shows aria-expanded="true"
  - **WHEN** the user clicks the toggle again
  - **THEN** the mobile menu closes

### 3. Hero
- The template SHALL have a full-width hero with a heading, subtitle, and CTA button.
- Scenario — Hero renders heading and button:
  - **WHEN** the page loads
  - **THEN** the hero displays "Industry Solutions!" as the main heading
  - **AND** an "Our Services" button is present

### 4. Services
- The template SHALL display 3 service cards with icons, headings, descriptions, and arrow links.
- Scenario — Services renders 3 cards:
  - **WHEN** the services section loads
  - **THEN** 3 service cards are displayed
  - **AND** each card has a heading ("Automotive Manufacturing", "Heavy Industry Market", "Industry Analysis")
  - **AND** each card has a description and an arrow link

### 5. About
- The template SHALL have an about section with a heading, image, and description.
- Scenario — About renders heading and image:
  - **WHEN** the about section loads
  - **THEN** the heading "Safe Industry Solutions" is visible
  - **AND** a descriptive paragraph is present
  - **AND** an image is displayed

### 6. Mission
- The template SHALL display 4 mission/value proposition cards.
- Scenario — Mission renders 4 cards:
  - **WHEN** the mission section loads
  - **THEN** 4 mission cards are displayed
  - **AND** each card has a title (Quality Control, Safety First, Innovation, Sustainability)

### 7. Team
- The template SHALL display 5 team member cards with photos, names, and roles.
- Scenario — Team renders 5 members:
  - **WHEN** the team section loads
  - **THEN** 5 team member cards are displayed
  - **AND** each card shows a name, role, and social links

### 8. CTA
- The template SHALL have a sticky navigation bar with logo, 6 links, and a Get A Quote button.
- Scenario — Navbar renders logo and links:
  - **WHEN** the page loads
  - **THEN** the navbar displays the "Millstone" logo
  - **AND** 6 navigation links are present (Home, About, Industries, Works, Blog, Contact)
  - **AND** a "Get A Quote" CTA button is visible
- Scenario — Navbar toggles mobile menu:
  - **WHEN** the user clicks the mobile hamburger button
  - **THEN** the mobile menu opens with all navigation links
  - **AND** the toggle button shows aria-expanded="true"
  - **WHEN** the user clicks the toggle again
  - **THEN** the mobile menu closes

### 9. Footer
- The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders with Component Dock link:
  - **WHEN** the footer loads
  - **THEN** a link to "https://www.componentdock.com/" is present
  - **AND** the link text reads "Component Dock"
  - **AND** 4 column sections are displayed (logo, quick links, services, newsletter)
  - **AND** a copyright line is present

### Cross-cutting requirements

- **CTA section drives contact** — The template SHALL have a call-to-action section encouraging users to get in touch.
  - Scenario — CTA renders heading and button: **WHEN** the CTA section loads; **THEN** the heading "Want To Work With Us?" is visible; **AND** a "Contact Us" button is present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/millstone/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/millstone/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/millstone` ships on https://millstone.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/millstone/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/millstone/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/millstone/public/CNAME` = `millstone.free.componentdock.com`
  and the package `homepage` = `https://millstone.free.componentdock.com`.
