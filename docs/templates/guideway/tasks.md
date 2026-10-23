# Guideway — Implementation Tasks

Source design: **Consulotion** (`https://colorlib.com/wp/template/consulotion/`) → recreation name **guideway**. Shipped at https://guideway.free.componentdock.com.

Scope: A consulting and IT agency template with top utility bar, hero banner, features, services and stats counter sections. Recreation of ColorLib's **Consulotion** template as a modern consulting business website.

## Component breakdown

Render order as composed in `apps/guideway/src/App.tsx`:

### 1. TopBar
- The system SHALL render a top utility bar with logo "Guideway" on the left, email and phone contact info in the center, and a "Free Consulting" blue CTA button on the right.
- Scenario — Utility bar content:
  - **GIVEN** the user views the top utility bar
  - **THEN** the logo "Guideway" is displayed on the left
  - **AND** an email address and phone number are visible in the center
  - **AND** a "Free Consulting" button is displayed on the right

### 2. Navbar
- The system SHALL render a dark navbar with six navigation links (Home, About, Projects, Services, Blog, Contact) and a search icon on the right.
- Scenario — Navbar content:
  - **GIVEN** the user views the navigation bar
  - **THEN** the nav bar has a dark navy background
  - **AND** links "Home", "About", "Projects", "Services", "Blog", "Contact" are visible
  - **AND** a search icon is displayed on the right
- Scenario — Mobile hamburger toggle:
  - **GIVEN** the viewport width is less than 768px
  - **THEN** a hamburger menu icon is visible
  - **AND** clicking it toggles the mobile nav menu open/closed

### 3. Hero
- The system SHALL render a full-width hero section with a background image, dark gradient overlay, sub-headline "WELCOME TO GUIDEWAY", main heading, and a blue pill-shaped CTA button.
- Scenario — Hero content:
  - **GIVEN** the user views the hero section
  - **THEN** a full-width background image is displayed
  - **AND** a dark gradient overlay ensures text readability
  - **AND** the sub-headline "WELCOME TO GUIDEWAY" is visible in white uppercase
  - **AND** the main heading "We Are The Best Consulting Agency" is large, bold, and white
  - **AND** a blue pill-shaped "Our Services" CTA button is below the heading

### 4. Features
- The system SHALL render a two-column features section with heading "Our Main Features", descriptive text, and two feature cards with distinct styling.
- Scenario — Features content:
  - **GIVEN** the user scrolls to the features section
  - **THEN** the heading "Our Main Features" is visible
  - **AND** a descriptive paragraph is shown below the heading
  - **AND** two feature cards are displayed with distinct styling

### 5. Stats
- The system SHALL render a dark background band with at least four animated counter values with labels.
- Scenario — Stats band:
  - **GIVEN** the user scrolls to the stats section
  - **THEN** a dark background band is displayed
  - **AND** at least 4 counter values are visible with labels
  - **AND** the counters animate on scroll into view

### 6. CtaBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: You Always Get the Best Guidance · Request Quote

### 7. Services
- The system SHALL render a grid of at least three service cards, each with an icon, title, and description.
- Scenario — Services grid:
  - **GIVEN** the user scrolls to the services section
  - **THEN** at least 3 service cards are displayed in a grid
  - **AND** each card shows an icon, title, and description

### 8. Projects
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Recent Projects

### 9. Testimonials
- The system SHALL render a testimonials section with at least one testimonial card showing an avatar, name, role, star rating, and quote.
- Scenario — Testimonials content:
  - **GIVEN** the user scrolls to the testimonials section
  - **THEN** a heading is visible
  - **AND** at least one testimonial card shows an avatar, name, role, star rating, and quote

### 10. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Recent · Blog · June · Read More

### 11. Contact
- The system SHALL render a contact form with fields (name, email, subject, message) and a submit button, alongside address, phone, and email info.
- Scenario — Contact form:
  - **GIVEN** the user scrolls to the contact section
  - **THEN** a form with fields: name, email, subject, message is displayed
  - **AND** a submit button is visible
  - **AND** address, phone number, and email are displayed

### 12. Footer
- The system SHALL render a dark footer with 3-4 columns (logo + blurb, Quick Links, Services, Contact info + social icons) and a copyright bar linking to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the user scrolls to the footer
  - **THEN** a dark background is applied
  - **AND** the logo and company blurb are displayed
  - **AND** Quick Links column is present
  - **AND** Contact info with social icons is present
- Scenario — Footer Component Dock link:
  - **GIVEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/

### Cross-cutting requirements

- **Design Fidelity** — The system SHALL use Inter for body text, Poppins for headings, brand color #3b82f6 as accent, dark navbar background #0f172a, and pill-shaped buttons (border-radius: 9999px).
  - Scenario — Design tokens applied: **GIVEN** the template is rendered; **THEN** the body font is Inter; **AND** the heading font is Poppins; **AND** the brand accent color is #3b82f6; **AND** the navbar has a dark background (#0f172a); **AND** buttons have pill shape (border-radius: 9999px)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/guideway/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/guideway/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Top utility bar with logo, contact info, and "Free Consulting" CTA; [ ] Dark navbar with 6 nav links and search icon; [ ] Hero section with background image, overlay, heading, sub-headline, CTA; [ ] Features section with heading, paragraph, and two styled cards; [ ] Services grid with icon + title + description cards; [ ] Stats counter band with dark bg and animated numbers; [ ] Testimonials with avatar, name, rating, quote; [ ] Contact form (name, email, subject, message) + contact info; [ ] Dark footer with 3-4 columns + Component Dock link; [ ] Fonts: Inter (body), Poppins (headings); [ ] Brand color #3b82f6 applied as accent; [ ] Dark navbar bg #0f172a; [ ] Pill-shaped buttons (border-radius: 9999px); [ ] Responsive breakpoints: hamburger nav at <768px, stacking columns; [ ] No ColorLib references in app code; [ ] Footer links to componentdock.com; [ ] CNAME set to guideway.free.componentdock.com; [ ] Coverage 100% lines/functions/branches/statements; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/guideway` ships on https://guideway.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/guideway/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/guideway/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/guideway/public/CNAME` = `guideway.free.componentdock.com`
  and the package `homepage` = `https://guideway.free.componentdock.com`.
