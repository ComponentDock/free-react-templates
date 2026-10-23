# Shotwise — Implementation Tasks

Source design: **Pemodule** (`https://colorlib.com/wp/template/pemodule/`) → recreation name **shotwise**. Shipped at https://shotwise.free.componentdock.com.

Scope: Shotwise is a photographer/creative portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Pemodule" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/shotwise/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Shotwise · Home · About · Services · Contact

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Your best partner · Shotwise · Get Started

### 3. Featured
- The contact section SHALL provide a form with name, email, and message fields.
- Scenario — Contact form fields are present:
  - **WHEN** the Shotwise app is rendered
  - **THEN** the contact form has a name input, email input, and message textarea
  - **AND** a send message button is present

### 4. Parallax
- No dedicated spec block — hold this band to the design notes.
- Anchors: Reasons To · Choose · Shotwise · Get Started

### 5. Services
- No dedicated spec block — hold this band to the design notes.

### 6. Contact
- The contact section SHALL provide a form with name, email, and message fields.
- Scenario — Contact form fields are present:
  - **WHEN** the Shotwise app is rendered
  - **THEN** the contact form has a name input, email input, and message textarea
  - **AND** a send message button is present

### 7. Newsletter
- The newsletter section SHALL provide an email subscription form.
- Scenario — Newsletter form is present:
  - **WHEN** the Shotwise app is rendered
  - **THEN** the newsletter section has an email input and a subscribe button

### 8. Footer
- The footer SHALL link to https://www.componentdock.com/ with the brand name "Component Dock".
- Scenario — Footer contains Component Dock link:
  - **WHEN** the Shotwise app is rendered
  - **THEN** the footer contains a link to componentdock.com
  - **AND** the link text reads "Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page loads with all sections in correct order** — Shotwise SHALL render all sections in the order specified by the original design: Header, Hero, Featured, Parallax, Services, Contact, Newsletter, Footer.
  - Scenario — All sections render on page load: **WHEN** the Shotwise app is rendered; **THEN** the page contains a header with logo and navigation; **AND** a hero section with heading and CTA button; **AND** a featured section with heading, paragraph, and CTA; **AND** a parallax section with text content; **AND** a services section with 4 service cards; **AND** a contact section with a form; **AND** a newsletter section with email input and subscribe button; **AND** a footer with navigation links and Component Dock link
- **Navigation is accessible** — The header SHALL provide navigation links that are keyboard-accessible.
  - Scenario — Desktop navigation links are present: **WHEN** the Shotwise app is rendered; **THEN** the navigation contains links for Home, About, Services, Contact; **AND** all links are focusable
  - Scenario — Mobile menu toggles: **WHEN** the user clicks the mobile menu toggle button; **THEN** the mobile navigation menu becomes visible; **AND** the toggle button changes to a close icon
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/shotwise/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/shotwise/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/shotwise` ships on https://shotwise.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/shotwise/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/shotwise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shotwise/public/CNAME` = `shotwise.free.componentdock.com`
  and the package `homepage` = `https://shotwise.free.componentdock.com`.
