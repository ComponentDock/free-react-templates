# Lawscape — Implementation Tasks

Source design: **Lawride** (`https://colorlib.com/wp/template/lawride/`) → recreation name **lawscape**. Shipped at https://lawscape.free.componentdock.com.

Scope: Recreate ColorLib Lawride as a faithful React landing page for a law firm, using the original as the design reference.

## Component breakdown

Render order as composed in `apps/lawscape/src/App.tsx`:

### 1. HeaderTop
- The template SHALL display a dark header top bar with phone number, email address, and social media icon links. The bar SHALL be hidden on mobile viewports.
- Scenario — Header bar renders contact info and social icons:
  - **WHEN** the page loads
  - **THEN** a dark top bar shows a phone number and email address
  - **AND** social media icon links are displayed for Facebook, Twitter, Instagram, and LinkedIn
- Scenario — Header bar hidden on mobile:
  - **WHEN** the user views the page on a mobile viewport
  - **THEN** the top bar is not visible

### 2. Navbar
- The template SHALL display a sticky orange navbar with the "Lawscape" logo text and navigation links: Home, About, Services, Practice Areas, Team, Blog, Contact. The navbar SHALL include a mobile hamburger menu toggle.
- Scenario — Navbar displays all navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar shows the "Lawscape" logo
  - **AND** navigation links include Home, About, Services, Practice Areas, Team, Blog, Contact
- Scenario — Mobile menu toggles on button click:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu expands
  - **AND** clicking a link in the mobile menu closes it

### 3. Hero
- The template SHALL display a full-width hero section with a dark image overlay, a centered headline about understanding client intention, and a "Make an Appointment" CTA button linking to the contact section.
- Scenario — Hero shows headline and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section shows the heading "We Well Understand Your Intention"
  - **AND** a "Make an Appointment" button is displayed linking to #contact

### 4. StatsCounter
- The template SHALL display four statistics cards showing lawyer count, successful cases, satisfied clients, and personal cases, with numbers and labels.
- Scenario — Statistics cards show correct numbers:
  - **WHEN** the page loads
  - **THEN** four statistics cards are visible with values 35, 1526, 720, 680
  - **AND** the cards show labels for Dedicated Lawyers, Successful Cases, Satisfied Clients, Personal Cases

### 5. About
- The template SHALL display an about section with a side-by-side layout containing a video placeholder image and descriptive text with a "Learn More" button.
- Scenario — About section renders heading and button:
  - **WHEN** the page loads
  - **THEN** the about section has the heading "We Properly Understand Your Purpose"
  - **AND** a "Learn More" button is present

### 6. PracticeAreas
- The template SHALL display four practice area cards (Employment Law, Personal Injury, Family Law, Bank & Financial) with images, hover overlays, and a "View All Practices" button.
- Scenario — Practice areas displays four cards and button:
  - **WHEN** the page loads
  - **THEN** four practice area cards are displayed with titles
  - **AND** a "View All Practices" button is shown

### 7. Testimonials
- The template SHALL display client testimonials with names, roles, review text, and profile images on a light background.
- Scenario — Testimonials shows three client reviews:
  - **WHEN** the page loads
  - **THEN** client testimonials are displayed with names and roles

### 8. Team
- The template SHALL display four attorney cards with photo, name, specialization, and social media links.
- Scenario — Team shows four attorneys with social links:
  - **WHEN** the page loads
  - **THEN** four attorney cards are displayed with names and specializations
  - **AND** each card has social media icon links

### 9. CTA
- The template SHALL display a dark-background call-to-action section with a "Free Case Evaluation" heading and a "Contact us Now" button.
- Scenario — CTA section renders heading and button:
  - **WHEN** the page loads
  - **THEN** a "Free Case Evaluation" heading is displayed
  - **AND** a "Contact us Now" button is present

### 10. Blog
- The template SHALL display three blog post cards with images, titles, dates, comment counts, excerpts, and "Read More" links.
- Scenario — Blog shows three posts with Read More links:
  - **WHEN** the page loads
  - **THEN** three blog cards are shown with titles, dates, and excerpts
  - **AND** each card has a "Read More" link

### 11. Newsletter
- The template SHALL display a newsletter section with About, Navigation Links, Newsletter (with email input), and InstaFeed columns.
- Scenario — Newsletter renders all columns:
  - **WHEN** the page loads
  - **THEN** four columns are shown: About Agency, Navigation Links, Newsletter, InstaFeed
  - **AND** an email input is present for newsletter subscription

### 12. Footer
- The template SHALL display a footer with a copyright line that includes a link to https://www.componentdock.com/ branded as "Component Dock", and social media icons.
- Scenario — Footer displays Component Dock link:
  - **WHEN** the user views the footer
  - **THEN** a link to https://www.componentdock.com/ is present
  - **AND** the link text mentions "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/lawscape/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/lawscape/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/lawscape` ships on https://lawscape.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/lawscape/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/lawscape/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lawscape/public/CNAME` = `lawscape.free.componentdock.com`
  and the package `homepage` = `https://lawscape.free.componentdock.com`.
