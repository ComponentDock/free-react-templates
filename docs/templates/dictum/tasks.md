# Dictum — Implementation Tasks

Source design: **Consula** (`https://colorlib.com/wp/template/consula/`) → recreation name **dictum**. Shipped at https://dictum.free.componentdock.com.

Scope: A business consulting template with top bar, hero, about, how it works, specialties, team and testimonials sections. Recreation of the ColorLib "Consula" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site.

## Component breakdown

Render order as composed in `apps/dictum/src/App.tsx`:

### 1. TopBar
- The system SHALL render a top bar with social media icons (Facebook, Twitter, Instagram, LinkedIn) on the left and phone + email contact info on the right, on a light gray background.
- Scenario — Top bar content:
  - **GIVEN** the user views the top bar
  - **THEN** social media icons are on the left
  - **AND** phone number and email are on the right
  - **AND** the top bar has a light gray background

### 2. Navbar
- The system SHALL render a sticky white navbar with the logo "Dictum." on the left and navigation links (Home, About Us, Team, Services, Testimonials, Blog, Contact) on the right.
- Scenario — Sticky navbar content:
  - **GIVEN** the user is on any section
  - **WHEN** they look at the top
  - **THEN** a white sticky navbar is visible
  - **AND** a logo "Dictum" with teal dot is on the left
  - **AND** nav links are: Home, About Us, Team, Services, Testimonials, Blog, Contact
- Scenario — Mobile menu toggle:
  - **GIVEN** the user is on a mobile device
  - **WHEN** they click the hamburger menu button
  - **THEN** the mobile navigation menu opens
  - **AND** clicking a link closes the menu

### 3. Hero
- The system SHALL render a hero section with a background image, dark overlay, large white heading, descriptive text, and a teal "Get Started" CTA button.
- Scenario — Hero content:
  - **GIVEN** the user views the hero
  - **THEN** a background image fills the hero area
  - **AND** a dark overlay covers the background
  - **AND** a large white heading is shown
  - **AND** a teal CTA button is visible

### 4. About
- The system SHALL render a split-layout about section with an image + experience badge on the left and heading + description on the right.
- Scenario — About section layout:
  - **GIVEN** the user scrolls to the about section
  - **THEN** an image is on the left with an experience badge overlay
  - **AND** a heading "Welcome To Dictum" is on the right
  - **AND** descriptive paragraphs are below the heading

### 5. Team
- The system SHALL render three team member cards in a 3-column grid, each with a circular avatar, name, and role.
- Scenario — Team grid:
  - **GIVEN** the user scrolls to the team section
  - **THEN** three team member cards are displayed in a 3-column grid
  - **AND** each card has a circular avatar, name, and role

### 6. HowItWorks
- The system SHALL render three process steps (Innovate, Create, Scale) in a 3-column layout.
- Scenario — Process steps:
  - **GIVEN** the user scrolls to the how-it-works section
  - **THEN** three steps are shown: Innovate, Create, Scale
  - **AND** each step has a heading and description paragraph

### 7. Services
- The system SHALL render six service cards in a 3-column grid, each with an icon, title, and description.
- Scenario — Service cards:
  - **GIVEN** the user scrolls to the services section
  - **THEN** six service cards are displayed in a 3-column grid
  - **AND** each card has an icon, title, and description

### 8. Testimonials
- The system SHALL render a testimonial carousel with quotes, circular avatars, and author names, centered with max-width.
- Scenario — Testimonial carousel:
  - **GIVEN** the user scrolls to the testimonials section
  - **THEN** a carousel of testimonials is shown
  - **AND** each testimonial has a circular avatar, quote text, and author
  - **AND** navigation arrows allow cycling through testimonials

### 9. Specialties
- The system SHALL render two specialty cards (Web & Mobile Specialties and Intuitive Thinkers) in a 2-column grid.
- Scenario — Specialty cards:
  - **GIVEN** the user scrolls to the specialties section
  - **THEN** two specialty cards are displayed
  - **AND** each card has a heading and description

### 10. Blog
- The system SHALL render three blog post cards with images, dates, titles, and descriptions.
- Scenario — Blog posts:
  - **GIVEN** the user scrolls to the blog section
  - **THEN** three blog post cards are shown
  - **AND** each card has a title, date, and description

### 11. Contact
- The system SHALL render a contact form with five fields (First Name, Last Name, Email, Subject, Message) and a sidebar with services list and contact info.
- Scenario — Contact form:
  - **GIVEN** the user scrolls to the contact section
  - **THEN** a contact form with five fields is on the right
  - **AND** an "Our Services" sidebar is on the left
  - **AND** a submit button is below the form

### 12. CTABanner
- The system SHALL render a full-width teal banner with a white "Let's Get Started" heading.
- Scenario — CTA banner:
  - **GIVEN** the user scrolls to the CTA banner
  - **THEN** a full-width teal background is shown
  - **AND** a white heading is centered

### 13. Footer
- The system SHALL render a dark four-column footer with About Us, Quick Links, Follow Us (social icons), and Subscribe Newsletter sections, plus a copyright line linking to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the user scrolls to the footer
  - **THEN** a dark background is visible
  - **AND** four columns are shown: About Us, Quick Links, Follow Us, Subscribe Newsletter
  - **AND** the copyright links to https://www.componentdock.com/

### Cross-cutting requirements

- **Design Tokens** — The system SHALL use Roboto font, teal accent color (#46ddb0), button border-radius 30px, and dark footer (#333333) matching the original design.
  - Scenario — Design fidelity: **GIVEN** the template is rendered; **THEN** the font family is Roboto; **AND** the primary accent color is teal (#46ddb0); **AND** buttons have 30px border-radius; **AND** the footer has a dark background
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dictum/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dictum/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All sections present in correct order: Top Bar, Navbar, Hero, About Us, Team, How It Works, Services, Testimonials, Blog, Contact, CTA Banner, Footer; [ ] Font family is Roboto (loaded via Google Fonts in index.html); [ ] Primary accent #46ddb0 used for buttons, section sub-titles, nav active, form focus; [ ] Button border-radius 30px, correct padding; [ ] Hero: background image with dark overlay, white heading, teal CTA; [ ] Top bar: light gray bg, social icons, contact info; [ ] Navbar: white bg, sticky, logo with teal dot; [ ] About: split layout with experience badge; [ ] Team: 3 cards with circular avatars; [ ] How It Works: 3 steps (Innovate, Create, Scale); [ ] Services: 6 cards in 3-col grid; [ ] Testimonials: centered carousel with avatars; [ ] Blog: 3 post previews; [ ] Contact: form with 5 fields + sidebar; [ ] CTA Banner: full-width teal bg, white heading; [ ] Footer: 4 columns, dark bg, social icons, newsletter; [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] CNAME file: dictum.free.componentdock.com; [ ] Placeholder images use picsum.photos; [ ] Icons from lucide-react; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dictum` ships on https://dictum.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dictum/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dictum/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dictum/public/CNAME` = `dictum.free.componentdock.com`
  and the package `homepage` = `https://dictum.free.componentdock.com`.
