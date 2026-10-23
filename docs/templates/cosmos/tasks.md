# Cosmos — Implementation Tasks

Source design: **Space** (`https://colorlib.com/wp/template/space/`) → recreation name **cosmos**. Shipped at https://cosmos.free.componentdock.com.

Scope: Cosmos is a minimal, clean portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Space" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/cosmos/src/App.tsx`:

### 1. Navbar
- Cosmos SHALL display a fixed dark navbar with the "Cosmos." logo (dot in primary color), navigation links (Home, Portfolio, Services, About, Contact), and a responsive mobile hamburger menu.
- Scenario — Navbar renders all navigation links:
  - **WHEN** I visit the Cosmos page
  - **THEN** I see links for "Home", "Portfolio", "Services", "About", "Contact"
  - **AND** I see the "Cosmos" logo
- Scenario — Mobile menu opens and closes:
  - **WHEN** I click the "Open menu" button
  - **THEN** a mobile navigation panel appears
  - **AND** I see a "Close menu" button
- Scenario — Clicking a nav link closes mobile menu:
  - **WHEN** I open the mobile menu
  - **AND** I click a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- Cosmos SHALL display a hero section with the heading "Hey! I'm Cosmos.", a subtitle about the portfolio template, and a CTA button linking to Component Dock.
- Scenario — Hero displays headline and CTA:
  - **WHEN** I visit the Cosmos page
  - **THEN** I see the text "Hey! I'm"
  - **AND** I see the CTA "More free templates here"

### 3. Portfolio
- Cosmos SHALL display a 3-column grid of 9 portfolio items, each with an image, hover overlay showing title and tags, and a link icon.
- Scenario — Portfolio grid shows 9 items:
  - **WHEN** I visit the Cosmos page
  - **THEN** I see 9 portfolio project images
  - **AND** I see project titles like "Project Alpha"

### 4. Services
- Cosmos SHALL display a services section with a heading, wavy underline SVG, and 6 service cards (Web Design, Photography, Marketing, App Development, Branding, Search Ranking) in a 3x2 grid.
- Scenario — Six service cards render:
  - **WHEN** I visit the Cosmos page
  - **THEN** I see "Web Design", "Photography", "Marketing", "App Development",

### 5. About
- Cosmos SHALL display an about section with an experience badge ("12 Years of experience"), a portfolio/CV links, an image, bio text, and work experience cards in a 2x2 grid.
- Scenario — About section displays bio and experience:
  - **WHEN** I visit the Cosmos page
  - **THEN** I see "Bio" and "Work Experience" headings
  - **AND** I see "12 Years of experience"
  - **AND** I see work experience cards with company names

### 6. Contact
- Cosmos SHALL display a contact form with Name, Email, Subject, and Message fields, a "Send Message" button, and client-side validation that requires Name, Email, and Message.
- Scenario — Contact form renders all fields:
  - **WHEN** I visit the Cosmos page
  - **THEN** I see inputs for Name, Email, Subject, Message
  - **AND** I see a "Send Message" button
- Scenario — Contact form submits successfully:
  - **WHEN** I fill in Name, Email, and Message
  - **AND** I click "Send Message"
  - **THEN** I see "Thank you!"
- Scenario — Contact form validates required fields:
  - **WHEN** I submit the contact form without filling required fields
  - **THEN** the form remains visible

### 7. Footer
- Cosmos SHALL display a dark footer with copyright text and a "Component Dock" link to https://www.componentdock.com/.
- Scenario — Footer links to Component Dock:
  - **WHEN** I visit the Cosmos page
  - **THEN** the footer contains a link to "https://www.componentdock.com/"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cosmos/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cosmos/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cosmos` ships on https://cosmos.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cosmos/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cosmos/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cosmos/public/CNAME` = `cosmos.free.componentdock.com`
  and the package `homepage` = `https://cosmos.free.componentdock.com`.
