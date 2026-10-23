# Confetti — Implementation Tasks

Source design: **Eventz** (`https://colorlib.com/wp/template/eventz/`) → recreation name **confetti**. Shipped at https://confetti.free.componentdock.com.

Scope: A Digital Conference template with hero, countdown, about, gallery, pricing and sponsors sections. Provide a free React recreation of the ColorLib "Eventz" digital conference template, featuring a hero with countdown, about section, gallery, pricing cards, sponsors, blog posts, and a branded footer.

## Component breakdown

Render order as composed in `apps/confetti/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display navigation links (Home, About, Speakers, Schedule, Blog, Contact) and a "Get Your Ticket" CTA button. On mobile, a hamburger menu toggles the nav links.
- Scenario — Desktop navbar shows all links and CTA:
  - **GIVEN** the page is loaded on a desktop viewport
  - **WHEN** the navbar renders
  - **THEN** links for Home, About, Speakers, Schedule, Blog, Contact are visible
  - **AND** a "Get Your Ticket" button is visible
- Scenario — Mobile menu toggles open and closed:
  - **GIVEN** the page is loaded on a mobile viewport
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile nav menu opens with all links
  - **AND** clicking the close button hides the menu

### 2. Hero
- The hero section SHALL display "Committed to success" subtitle, "Digital Conference For Designers" heading, a Download button, and a play video icon.
- Scenario — Hero renders heading and buttons:
  - **GIVEN** the page is loaded
  - **WHEN** the hero section renders
  - **THEN** a heading "Digital Conference For Designers" is visible
  - **AND** a subtitle "Committed to success" is visible
  - **AND** a Download button is visible
  - **AND** a play video button is visible

### 3. Countdown
- The countdown section SHALL display four time unit circles: Days, Hours, Min, Sec with numeric values.
- Scenario — Countdown renders all units:
  - **GIVEN** the page is loaded
  - **WHEN** the countdown section renders
  - **THEN** four items are visible: Days (96), Hrs (15), Min (7), Sec (2)

### 4. About
- The about section SHALL display "The Biggest Digital Conference" heading, Where/When info cards, a "Get Your Ticket" button, and an image.
- Scenario — About renders info and CTA:
  - **GIVEN** the page is loaded
  - **WHEN** the about section renders
  - **THEN** heading "The Biggest Digital Conference" is visible
  - **AND** "Where" shows "New York, United States"
  - **AND** "When" shows "Jan. 21, 2025"
  - **AND** a "Get Your Ticket" button is visible

### 5. Gallery
- The gallery SHALL display 5 placeholder images in a grid layout.
- Scenario — Gallery renders 5 images:
  - **GIVEN** the page is loaded
  - **WHEN** the gallery section renders
  - **THEN** 5 images are visible

### 6. Pricing
- The pricing section SHALL display 3 pricing cards with day labels, prices, feature lists, and "View Details" buttons.
- Scenario — Pricing renders 3 cards with correct prices:
  - **GIVEN** the page is loaded
  - **WHEN** the pricing section renders
  - **THEN** cards for Day 1 ($5), Day 1-2-3 ($8), Day 1-2 ($6) are visible
  - **AND** each card has a "View Details" button

### 7. Sponsors
- The sponsors section SHALL display "Our Top General Sponsors" heading and 6 sponsor logo placeholders on a dark purple background.
- Scenario — Sponsors renders heading and logos:
  - **GIVEN** the page is loaded
  - **WHEN** the sponsors section renders
  - **THEN** heading "Our Top General Sponsors" is visible
  - **AND** 6 sponsor logos are visible

### 8. Blog
- The blog section SHALL display 2 blog cards with images, date overlays, categories, titles, and "Read more" links.
- Scenario — Blog renders 2 cards:
  - **GIVEN** the page is loaded
  - **WHEN** the blog section renders
  - **THEN** 2 blog cards are visible
  - **AND** each has a "Read more" link

### 9. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock". It SHALL include About Us, Contact Info, Important Links, Newsletter sections, and stats.
- Scenario — Footer renders Component Dock link:
  - **GIVEN** the page is loaded
  - **WHEN** the footer renders
  - **THEN** a link to "https://www.componentdock.com/" is visible with text "Component Dock"
- Scenario — Newsletter form prevents default submit:
  - **GIVEN** the page is loaded
  - **WHEN** the user types an email and clicks Subscribe
  - **THEN** the form submission is prevented (no page reload)

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/confetti/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/confetti/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/confetti` ships on https://confetti.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/confetti/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/confetti/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/confetti/public/CNAME` = `confetti.free.componentdock.com`
  and the package `homepage` = `https://confetti.free.componentdock.com`.
