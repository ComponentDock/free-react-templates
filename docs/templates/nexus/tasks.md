# Nexus — Implementation Tasks

Source design: **Pageone** (`https://colorlib.com/wp/template/pageone/`) → recreation name **nexus**. Shipped at https://nexus.free.componentdock.com.

Scope: Nexus is a multi-section web agency landing template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/nexus/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky top navigation bar with the logo "Nexus.", anchor links to page sections (Home, Services, Process, Clients, About, Contact), and a mobile hamburger menu.
- Scenario — Navbar content:
  - **GIVEN** the Nexus page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the logo text "Nexus."
  - **AND** the navbar SHALL show links for Home, Services, Process, Clients, About, and Contact
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered on a narrow viewport
  - **WHEN** the user opens the mobile menu
  - **THEN** the navigation links SHALL be revealed in a menu
  - **AND** the menu SHALL be dismissible via a close button

### 2. Hero
- The system SHALL render a hero section with a large heading, primary category pills, and secondary pills.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL contain a level-1 heading "We are web agency based in Los Angeles, CA"
  - **AND** it SHALL show primary pills: Technology, Marketing, Product & Design
  - **AND** it SHALL show secondary pills: Strategic Consulting, Business Synergies, Fundraising

### 3. Services
- The system SHALL render a services section with a heading, CTA button, and four service cards.
- Scenario — Services content:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL show the heading "Services"
  - **AND** it SHALL show a "Get in Touch" CTA button
  - **AND** it SHALL show four cards: Graphic Design, Web Development, Branding, Iconography

### 4. Process
- The system SHALL render a process section with a heading, CTA button, and six numbered steps.
- Scenario — Process content:
  - **GIVEN** the page is rendered
  - **WHEN** the process section is displayed
  - **THEN** it SHALL show the heading "Our process"
  - **AND** it SHALL show a "Learn More" CTA button
  - **AND** it SHALL show six steps: Information Gathering, Planning, Design, Development, Testing and Delivery, Maintenance

### 5. Clients
- The system SHALL render a clients section with a heading and five client logo cards.
- Scenario — Clients content:
  - **GIVEN** the page is rendered
  - **WHEN** the clients section is displayed
  - **THEN** it SHALL show the heading "Our clients"
  - **AND** it SHALL show client cards: Goldline, Foxhub, Ideaa, Nirastate, Treva

### 6. Features
- The system SHALL render a features section with a heading and six feature cards.
- Scenario — Features content:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it SHALL show the heading "Features"
  - **AND** it SHALL show six feature cards: Illustration, 24/7 Support, Easy to use, Web development, Intuitive, Documentation

### 7. Team
- The system SHALL render a team section with office description and team member cards.
- Scenario — Team content:
  - **GIVEN** the page is rendered
  - **WHEN** the team section is displayed
  - **THEN** it SHALL show the heading "Office and team"
  - **AND** it SHALL show subheadings "Our Office" and "Our Team"
  - **AND** it SHALL show three team members: Bradley Costa, Chanice Muir, Alisha Ellison
  - **AND** each team card SHALL have social media links (Facebook, Twitter, LinkedIn)

### 8. Contact
- The system SHALL render a contact section with a form and map embed.
- Scenario — Contact form:
  - **GIVEN** the page is rendered
  - **WHEN** the contact section is displayed
  - **THEN** it SHALL show the heading "Contact Us"
  - **AND** it SHALL show a form with First name, Last name, Email, Message fields
  - **AND** it SHALL show a "Send Message" button
- Scenario — Contact form submission:
  - **GIVEN** the contact form is filled out
  - **WHEN** the user submits the form
  - **THEN** a success message SHALL be displayed
  - **AND** the form fields SHALL be replaced by the success message

### 9. Footer
- The system SHALL render a footer with about info, page links, resources, contact details, and Component Dock attribution.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the brand "Nexus."
  - **AND** it SHALL show Page links: Home, Services, Process, Clients, About
  - **AND** it SHALL show Resource links: Documentation, Support, Blog, Careers
  - **AND** it SHALL show contact info: email, phone, address
  - **AND** it SHALL show a link to Component Dock (https://www.componentdock.com/)

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/nexus/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/nexus/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/nexus` ships on https://nexus.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/nexus/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/nexus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nexus/public/CNAME` = `nexus.free.componentdock.com`
  and the package `homepage` = `https://nexus.free.componentdock.com`.
