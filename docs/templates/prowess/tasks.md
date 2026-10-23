# Prowess — Implementation Tasks

Source design: **Sportify** (`https://colorlib.com/wp/template/sportify/`) → recreation name **prowess**. Shipped at https://prowess.free.componentdock.com.

Scope: Prowess is a single-page gym & fitness company landing template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/prowess/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the "Prowess" logo and navigation links (Home, About, Programs, Pricing, Contact) with a mobile menu toggle.
- Scenario — Desktop navigation:
  - **WHEN** the viewport is desktop-width
  - **THEN** the nav links are visible without a hamburger button
- Scenario — Mobile menu toggle:
  - **WHEN** I click the mobile menu button
  - **THEN** the mobile navigation panel opens
  - **WHEN** I click a mobile nav link
  - **THEN** the mobile menu closes

### 2. Hero
- The hero SHALL display a background image, subtitle "go to the gym now!", title "never limit yourself" with "never" in a circular highlight, and a "read more" CTA button.
- Scenario — Hero content renders:
  - **WHEN** I view the hero section
  - **THEN** I see the subtitle "go to the gym now!"
  - **AND** I see the title "never limit yourself"
  - **AND** I see a "read more" button

### 3. Intro
- The intro section SHALL display 3 feature boxes: Aerobics Program, Train Hard, Basic Program.
- Scenario — Feature boxes render:
  - **WHEN** I scroll to the intro section
  - **THEN** I see 3 feature boxes with icons, titles, and descriptions

### 4. About
- The about section SHALL display the heading "about prowess", a description, and a "train hard" CTA button alongside an image.
- Scenario — About content renders:
  - **WHEN** I view the about section
  - **THEN** I see the heading "about prowess"
  - **AND** I see a "train hard" button

### 5. Quote
- The quote section SHALL display a motivational quote and author attribution.
- Scenario — Quote renders:
  - **WHEN** I view the quote section
  - **THEN** I see a quote and author name

### 6. Cta
- The CTA section SHALL display "join our gym" heading, description, image, and benefit list.
- Scenario — CTA content renders:
  - **WHEN** I view the CTA section
  - **THEN** I see the heading "join our gym"
  - **AND** I see benefit list items

### 7. Programs
- The programs section SHALL display 3 program cards: Aerobics, Pilates, Yoga.
- Scenario — Program cards render:
  - **WHEN** I view the programs section
  - **THEN** I see 3 program cards with titles and descriptions

### 8. Pricing
- The pricing section SHALL display 3 pricing tiers: Beginner (Free), Pro ($29/mo), Expert ($59/mo).
- Scenario — Pricing tiers render:
  - **WHEN** I view the pricing section
  - **THEN** I see 3 pricing tiers with plan names and prices

### 9. Contact
- The contact section SHALL display phone, email, and location information.
- Scenario — Contact info renders:
  - **WHEN** I view the contact section
  - **THEN** I see phone number, email address, and location

### 10. Footer
- The footer SHALL display the Component Dock link, navigation links, social icons, and copyright.
- Scenario — Footer renders:
  - **WHEN** I view the footer
  - **THEN** I see a link to https://www.componentdock.com/
  - **AND** I see copyright text

### Cross-cutting requirements

- **Page structure and sections** — The template SHALL render a single-page landing with sections in this order: Navbar, Hero, Intro, About, Quote, CTA, Programs, Pricing, Contact, Footer.
  - Scenario — All sections render: **WHEN** the App component mounts; **THEN** the page contains a navigation bar, hero section, intro section, about section, quote section, CTA section, programs section, pricing section, contact section, and footer
  - Scenario — Section headings are present: **WHEN** I scan the page headings; **THEN** I see headings for each major section (About, Programs, Pricing, Contact)
- **Design tokens** — The template SHALL use brand colors (#ff0e3b red, #190a49 navy, #7800ff purple), Open Sans font, and uppercase headings with 0.2em letter-spacing.
  - Scenario — Brand colors applied: **WHEN** I inspect the rendered CSS; **THEN** the brand red color is used for buttons and accents
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/prowess/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/prowess/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/prowess` ships on https://prowess.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/prowess/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/prowess/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/prowess/public/CNAME` = `prowess.free.componentdock.com`
  and the package `homepage` = `https://prowess.free.componentdock.com`.
