# Alibi — Implementation Tasks

Source design: **Marco 2** (`https://colorlib.com/wp/template/marco-2/`) → recreation name **alibi**. Shipped at https://alibi.free.componentdock.com.

Scope: Alibi is a single-page lawyer landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Marco 2" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/alibi/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky dark navigation bar with the site name "Alibi", navigation links (Home, About Me, Practice Areas, Legal Team, Blog, Contact), a "Contact Me" CTA button, and a mobile hamburger toggle.
- Scenario — Navbar content:
  - **GIVEN** the Alibi page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the brand name "Alibi" linked to #home
  - **AND** the navbar SHALL show links for Home, About Me, Practice Areas, Legal Team, Blog, and Contact
  - **AND** the navbar SHALL show a "Contact Me" button linking to #contact
- Scenario — Mobile menu toggle:
  - **GIVEN** the page is rendered in a mobile viewport
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu SHALL open
  - **AND** clicking a link in the mobile menu SHALL close the menu

### 2. Hero
- The system SHALL render a split hero section with text on the left ("Hello, I'm Marco Sebastián", "A Corporate Lawyer", Contact Me button) and a background image with a play button overlay on the right.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** the hero SHALL show heading text "Marco Sebastián"
  - **AND** the hero SHALL show heading text "A Corporate Lawyer"
  - **AND** the hero SHALL show a "Contact Me" button linking to #contact
  - **AND** the hero SHALL display a background image from picsum.photos

### 3. ConsultationForm
- The system SHALL render an inline consultation form with Name, Email, and Categories fields and a Contact submit button.
- Scenario — Form fields:
  - **GIVEN** the page is rendered
  - **WHEN** the consultation form is displayed
  - **THEN** the form SHALL contain a Name text input
  - **AND** the form SHALL contain an Email Address input
  - **AND** the form SHALL contain a Categories dropdown with options
  - **AND** the form SHALL contain a Contact submit button
- Scenario — Category selection:
  - **GIVEN** the form is displayed
  - **WHEN** the user selects "Criminal Law" from the Categories dropdown
  - **THEN** the dropdown value SHALL be "Criminal Law"

### 4. Services
- The system SHALL render a services section with three service cards: Legal Consultation, Trial Representation, and Case Review.
- Scenario — Service cards:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** the section SHALL show a "Our Services" heading
  - **AND** the section SHALL contain three cards with titles "Legal Consultation", "Trial Representation", and "Case Review"

### 5. Counter
- The system SHALL render a counter/stats section with four stat blocks: 18 Years Experience, 450 Case Won, 56 Practice Areas, 1,000+ Happy Clients.
- Scenario — Stats display:
  - **GIVEN** the page is rendered
  - **WHEN** the counter section is displayed
  - **THEN** the section SHALL show the value "18" with label "Years Experience"
  - **AND** the section SHALL show "450" with label "Case Won"
  - **AND** the section SHALL show "56" with label "Practice Areas"
  - **AND** the section SHALL show "1,000+" with label "Happy Clients"

### 6. PracticeAreas
- The system SHALL render a practice areas section with three image cards: Family Law, Drug Offense, and Assault.
- Scenario — Practice area cards:
  - **GIVEN** the page is rendered
  - **WHEN** the practice areas section is displayed
  - **THEN** the section SHALL show a "Practice Areas" heading
  - **AND** the section SHALL contain three cards for "Family Law", "Drug Offense", and "Assault"
  - **AND** each card SHALL display an image from picsum.photos

### 7. Testimonials
- The system SHALL render a testimonials section with a carousel of three testimonials, each showing a quote, star rating, avatar, name, and role.
- Scenario — First testimonial:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** the section SHALL show a "Testimonials" heading
  - **AND** the first testimonial from "David Williams" SHALL be visible
- Scenario — Switch testimonial:
  - **GIVEN** the testimonials section is displayed
  - **WHEN** the user clicks the avatar button for "Jennifer Martinez"
  - **THEN** the testimonial from "Jennifer Martinez" SHALL be displayed

### 8. ContactCta
- The system SHALL render a contact CTA section with four social media links: Twitter, Facebook, Google, and Instagram.
- Scenario — Social links:
  - **GIVEN** the page is rendered
  - **WHEN** the contact CTA section is displayed
  - **THEN** the section SHALL contain links for Twitter, Facebook, Google, and Instagram

### 9. Blog
- The system SHALL render a blog section with three blog entry cards, each showing an image, date, title, excerpt, and a Read More link.
- Scenario — Blog entries:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** the section SHALL show a "Latest From Blog" heading
  - **AND** the section SHALL contain three blog entries with titles
  - **AND** each entry SHALL have a "Read More" link

### 10. Footer
- The system SHALL render a dark four-column footer with About Me, Useful Links, Quick Links, and Have a Questions? sections. The footer SHALL link to Component Dock (https://www.componentdock.com/) and show a copyright line with the current year.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** the footer SHALL show "About Me" section
  - **AND** the footer SHALL show "Useful Links" and "Quick Links" sections
  - **AND** the footer SHALL show "Have a Questions?" with contact info
  - **AND** the footer SHALL contain a link to https://www.componentdock.com/ with target="_blank"
  - **AND** the footer SHALL show a copyright line containing the current year

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/alibi/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/alibi/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/alibi` ships on https://alibi.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/alibi/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/alibi/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/alibi/public/CNAME` = `alibi.free.componentdock.com`
  and the package `homepage` = `https://alibi.free.componentdock.com`.
