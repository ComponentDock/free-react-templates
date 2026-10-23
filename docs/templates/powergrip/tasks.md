# Powergrip — Implementation Tasks

Source design: **Robust** (`https://colorlib.com/wp/template/robust/`) → recreation name **powergrip**. Shipped at https://powergrip.free.componentdock.com.

Scope: PowerGrip is a gym and fitness landing page template that recreates the ColorLib "Robust" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It features a hero slider, program cards, services, class schedule, testimonials, trainers, classes, events, blog, newsletter, and a footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/powergrip/src/App.tsx`:

### 1. Navbar
- Users SHALL see a sticky dark navbar with the "PowerGrip" logo and navigation links (Home, Classes, Schedule, Trainers, Events, Blog, Contact).
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on desktop
  - **THEN** the user sees the "PowerGrip" logo and all seven navigation links
- Scenario — Mobile menu opens and closes:
  - **WHEN** the user taps the hamburger button on mobile
  - **THEN** a full-screen mobile menu opens with all nav links
  - **WHEN** the user taps a link in the mobile menu
  - **THEN** the menu closes

### 2. Hero
- Users SHALL see a full-width hero section with a background image, dark overlay, motivational headline, and a "Join Classes" CTA button that auto-advances.
- Scenario — First slide is displayed by default:
  - **WHEN** the page loads
  - **THEN** the hero shows the first slide title and CTA button
- Scenario — Navigation controls work:
  - **WHEN** the user clicks the next/previous arrow
  - **THEN** the hero advances to the next/previous slide
  - **WHEN** the user clicks a dot indicator
  - **THEN** the hero navigates to that slide

### 3. IntroPrograms
- Users SHALL see three program cards (Body Building, Yoga Program, Aerobics Classes) each with an image, description, and price.
- Scenario — All three programs render:
  - **WHEN** the user scrolls to the programs section
  - **THEN** three program cards are visible with titles and prices

### 4. Services
- Users SHALL see four service cards (Cardio, Body Building, Karate, Boxing) with icons and descriptions.
- Scenario — All four services render:
  - **WHEN** the user scrolls to the services section
  - **THEN** four service cards are visible with headings and descriptions

### 5. Schedule
- Users SHALL see a weekly schedule with day tabs and class entries.
- Scenario — Day tabs switch active state:
  - **WHEN** the user clicks a day tab
  - **THEN** that tab becomes active and class entries are displayed

### 6. Testimonials
- Users SHALL see three testimonial cards with quotes and avatars over a parallax background.
- Scenario — All testimonials render:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** three testimonial cards with names and quotes are visible

### 7. Trainers
- Users SHALL see four trainer cards with photos and specialties.
- Scenario — All trainers render:
  - **WHEN** the user scrolls to the trainers section
  - **THEN** four trainer cards are visible with names and images

### 8. Classes
- Users SHALL see three class cards with images, prices, titles, and "Learn More" links.
- Scenario — All classes render:
  - **WHEN** the user scrolls to the classes section
  - **THEN** three class cards are visible with "Learn More" links

### 9. Events
- Users SHALL see three event cards with dates, organizers, titles, and locations.
- Scenario — All events render:
  - **WHEN** the user scrolls to the events section
  - **THEN** three event cards are visible with dates and locations

### 10. Blog
- Users SHALL see three blog cards with images, dates, authors, titles, and excerpts.
- Scenario — All blog posts render:
  - **WHEN** the user scrolls to the blog section
  - **THEN** three blog cards are visible with authors and titles

### 11. Newsletter
- Users SHALL see an email subscription form with an input field and subscribe button.
- Scenario — Email form accepts input:
  - **WHEN** the user types an email address
  - **THEN** the input field displays the typed email

### 12. Footer
- Users SHALL see a four-column footer (About, Quick Links, Recent Posts, Contact) with a Component Dock copyright link.
- Scenario — Footer columns render:
  - **WHEN** the user scrolls to the footer
  - **THEN** all four columns are visible with the Component Dock link

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/powergrip/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/powergrip/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/powergrip` ships on https://powergrip.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/powergrip/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/powergrip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/powergrip/public/CNAME` = `powergrip.free.componentdock.com`
  and the package `homepage` = `https://powergrip.free.componentdock.com`.
