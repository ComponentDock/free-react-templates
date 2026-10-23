# Adept — Implementation Tasks

Source design: **Expert** (`https://colorlib.com/wp/template/expert/`) → recreation name **adept**. Shipped at https://adept.free.componentdock.com.

Scope: Adept is a consulting/business onepage template that recreates the ColorLib Expert design (https://colorlib.com/wp/template/expert/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

## Component breakdown

Render order as composed in `apps/adept/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Adept · Contact Us

### 2. Hero
- The template SHALL include a hero section with a heading, description, call-to-action button, and background image.
- Scenario — Hero renders heading and CTA:
  - **WHEN** the page loads
  - **THEN** the hero displays the heading "We Do Awesome Things"
  - **AND** a "Get Started" button is visible

### 3. About
- The template SHALL include an about section with a heading and three stat counters.
- Scenario — About section displays stats:
  - **WHEN** the page loads
  - **THEN** the heading "Love Our Works" is displayed
  - **AND** three stat items are shown: 120+ Projects Done, 95% Happy Clients, 10+ Years Experience

### 4. Projects
- The template SHALL include a projects gallery section with four portfolio items.
- Scenario — Projects section displays items:
  - **WHEN** the page loads
  - **THEN** the heading "Our Projects" is displayed
  - **AND** four project images are rendered

### 5. Process
- The template SHALL include a process/approach section with three numbered steps.
- Scenario — Process section displays steps:
  - **WHEN** the page loads
  - **THEN** the heading "Our Approach" is displayed
  - **AND** three steps are shown: Data Gathering, Implementation, Launch

### 6. Testimonials
- The template SHALL include a testimonials section with customer quotes.
- Scenario — Testimonials section displays quotes:
  - **WHEN** the page loads
  - **THEN** the heading "Testimonials" is displayed
  - **AND** testimonial quotes with names and roles are shown

### 7. Services
- The template SHALL include a services section with six service items.
- Scenario — Services section displays items:
  - **WHEN** the page loads
  - **THEN** the heading "Services" is displayed
  - **AND** six services are shown: Branding Design, WordPress Integration, Web Development, HTML5/CSS3, Web Templates, Creative Design

### 8. Pricing
- The template SHALL include a pricing section with three plan tiers.
- Scenario — Pricing section displays plans:
  - **WHEN** the page loads
  - **THEN** the heading "Choose Your Plan" is displayed
  - **AND** three tiers are shown: Starters ($19), Premium ($49), Enterprise ($99)

### 9. Contact
- The template SHALL include a contact section with form fields and contact information.
- Scenario — Contact section displays form and info:
  - **WHEN** the page loads
  - **THEN** the heading "Contact Us" is displayed
  - **AND** contact info is shown (address, phone, email)
  - **AND** form fields are present: name, email, subject, message, submit button

### 10. Footer
- The template SHALL include a footer with about text, navigation links, subscribe form, and Component Dock branding.
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
  - **AND** the link opens in a new tab
- Scenario — Footer subscribe form:
  - **WHEN** the subscribe form is submitted
  - **THEN** the form prevents default submission

### Cross-cutting requirements

- **Navigation** — The template SHALL include a sticky top navbar with the brand name "Adept" and navigation links to all sections.
  - Scenario — Navbar renders all navigation links: **WHEN** the page loads; **THEN** the navbar displays links for Home, Projects, Process, Testimonials, Services, Pricing, and Contact; **AND** each link has the correct href target (#home, #projects, etc.)
  - Scenario — Mobile menu toggle: **WHEN** the mobile menu button is clicked; **THEN** the mobile navigation menu opens; **AND** the aria-expanded attribute toggles
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/adept/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/adept/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/adept` ships on https://adept.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/adept/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/adept/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/adept/public/CNAME` = `adept.free.componentdock.com`
  and the package `homepage` = `https://adept.free.componentdock.com`.
