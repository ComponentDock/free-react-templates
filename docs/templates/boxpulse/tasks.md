# Boxpulse — Implementation Tasks

Source design: **Boxus** (`https://colorlib.com/wp/template/boxus/`) → recreation name **boxpulse**. Shipped at https://boxpulse.free.componentdock.com.

Scope: Recreation of ColorLib **Boxus** as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application. Original preview: https://preview.colorlib.com/theme/boxus/ Source: https://colorlib.com/wp/template/boxus/

## Component breakdown

Render order as composed in `apps/boxpulse/src/App.tsx`:

### 1. Navbar
- The section Navbar SHALL display navigation links and mobile menu.
- Scenario — Navbar displays all 8 navigation links:
  - **WHEN** the user is on the page
  - **THEN** the navbar shows links: Home, Services, Portfolio, About, News, Video, Skills, Contact
- Scenario — Mobile hamburger menu toggles navigation:
  - **WHEN** the user taps the hamburger menu on mobile
  - **THEN** the nav links are displayed in a mobile overlay

### 2. Hero
- The section Hero SHALL display headline and subtitle.
- Scenario — Hero displays headline and subtitle:
  - **WHEN** the hero section is visible
  - **THEN** the headline reads "We Craft Awesome Web And Graphic Design Solutions"
  - **AND** "Graphic Design" appears in the accent green color

### 3. Services
- The section Services SHALL display 8 service items.
- Scenario — Services section shows 8 service items:
  - **WHEN** the user scrolls to the Services section
  - **THEN** section number "01" and title "Services" are displayed
  - **AND** 8 service items are visible

### 4. Portfolio
- The section Portfolio SHALL display project grid.
- Scenario — Portfolio section shows project grid:
  - **WHEN** the user scrolls to the Portfolio section
  - **THEN** section number "02" and title "Portfolio" are displayed
  - **AND** at least 4 project cards are visible
  - **AND** a "LOAD MORE" button is present

### 5. About
- The section About SHALL display timeline and team.
- Scenario — About section displays timeline and team:
  - **WHEN** the user scrolls to the About section
  - **THEN** section number "03" and title "CRAFTERS" are displayed
  - **AND** a timeline with at least 5 entries is visible
  - **AND** 3 team member cards are displayed

### 6. News
- The section News SHALL display blog posts and testimonials.
- Scenario — News section displays blog posts and testimonials:
  - **WHEN** the user scrolls to the News section
  - **THEN** section number "04" and title "STORIES" are displayed
  - **AND** 4 blog post cards are visible
  - **AND** 3 testimonial quotes are displayed

### 7. VideoSection
- No dedicated spec block — hold this band to the design notes.

### 8. Skills
- The section Skills SHALL display progress bars.
- Scenario — Skills section shows progress bars:
  - **WHEN** the user scrolls to the Skills section
  - **THEN** section number "06" and title "EXPERTISE" are displayed
  - **AND** 4 progress bars are visible (HTML 81%, CSS 93%, PSD 72%, Design 99%)

### 9. Contact
- The section Contact SHALL have a working form.
- Scenario — Contact section has a working form:
  - **WHEN** the user scrolls to the Contact section
  - **THEN** section number "07" and title "Contact" are displayed
  - **AND** a form with Name, Email, Subject, and Message fields is visible
  - **AND** a submit button is present

### 10. Footer
- The section Footer SHALL show copyright and branding.
- Scenario — Footer shows copyright and branding:
  - **WHEN** the user scrolls to the footer
  - **THEN** a copyright notice is displayed
  - **AND** a "Made with Component Dock" link to componentdock.com is present

### Cross-cutting requirements

- **Video display feature items** — The section Video SHALL display feature items.
  - Scenario — Video section shows feature items: **WHEN** the user scrolls to the Video section; **THEN** section number "05" and title "OFFER" are displayed; **AND** a video placeholder is visible; **AND** 6 feature items are displayed
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/boxpulse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/boxpulse/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/boxpulse` ships on https://boxpulse.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/boxpulse/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/boxpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/boxpulse/public/CNAME` = `boxpulse.free.componentdock.com`
  and the package `homepage` = `https://boxpulse.free.componentdock.com`.
