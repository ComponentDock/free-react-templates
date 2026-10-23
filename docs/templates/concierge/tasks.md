# Concierge — Implementation Tasks

Source design: **Hotell** (`https://colorlib.com/wp/template/hotell/`) → recreation name **concierge**. Shipped at https://concierge.free.componentdock.com.

Scope: Concierge is a travel-and-hotel one-page template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/concierge/src/App.tsx`:

### 1. Navbar
- The system SHALL render a white booking-widget card overlapping the hero with two date fields, a persons select, and a search button.
- Scenario — Booking fields:
  - **GIVEN** the booking widget is rendered
  - **WHEN** the page loads
  - **THEN** a white card SHALL overlap the hero bottom (negative top margin)
  - **AND** "Date Arrival" and "Date Departure" fields SHALL render with
  - **AND** a "# of Person" select SHALL offer 1, 2, 3, 4, and 5+
  - **AND** a full-width teal pill "Find now" button SHALL render

### 2. Hero
- The system SHALL render a full-height hero over a photo with a dark overlay, a centered white headline, and a video CTA.
- Scenario — Hero content:
  - **GIVEN** the hero is rendered
  - **WHEN** the page loads
  - **THEN** the hero SHALL fill the viewport (min 780px) with a cover photo and
  - **AND** the centered 50px/700 Work Sans headline SHALL read "Once a year go
  - **AND** a teal pill "See video" button SHALL render below the headline
  - **AND** activating it SHALL open a video modal (or link) — no glightbox

### 3. BookingSearch
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search availability

### 4. Services
- The system SHALL render the "Our Services" section on `#f8f9fa` with a carousel of six white feature cards and Prev/Next controls.
- Scenario — Feature cards:
  - **GIVEN** the services section is rendered
  - **WHEN** the page loads
  - **THEN** the uppercase teal heading SHALL read "Our Services"
  - **AND** six white cards SHALL render (teal 70px icon, 20px bold title,
  - **AND** the titles SHALL be Trekking, The Map, Suitcase, Island Hoping,
- Scenario — Carousel navigation:
  - **GIVEN** the services carousel is rendered
  - **WHEN** the Prev/Next pill controls are activated
  - **THEN** the carousel SHALL advance/go back one card (client-side state)

### 5. About
- The system SHALL render the split About section with a photo on a teal bleeding panel and a heading + copy column.
- Scenario — About layout:
  - **GIVEN** the About section is rendered
  - **WHEN** the page loads
  - **THEN** a rounded photo SHALL render on the left with a `#00917c` panel
  - **AND** the right column SHALL show the teal uppercase heading "About

### 6. BlogPosts
- The system SHALL render the "Blog Posts" section with a carousel of image cards and Prev/Next controls.
- Scenario — Post cards:
  - **GIVEN** the blog section is rendered
  - **WHEN** the page loads
  - **THEN** the teal uppercase heading SHALL read "Blog Posts"
  - **AND** at least five cards SHALL render, each with a photo, a pencil icon,
  - **AND** Prev/Next pill controls SHALL advance the carousel

### 7. Faq
- The system SHALL render the "Frequently Asked Questions" section with a left heading column and an accordion of three questions.
- Scenario — Accordion:
  - **GIVEN** the FAQ section is rendered
  - **WHEN** the page loads
  - **THEN** the teal uppercase heading SHALL read "Frequently Asked Questions"
  - **AND** three accordion items SHALL read "Is it free?", "How to install
  - **AND** activating an item SHALL expand its paraphrased answer while the
  - **AND** activating the open item again SHALL collapse it

### 8. Testimonials
- The system SHALL render the "Testimonials" section on `#f8f9fa` with a carousel of white quote cards and centered Prev/Next controls.
- Scenario — Quote cards:
  - **GIVEN** the testimonials section is rendered
  - **WHEN** the page loads
  - **THEN** the teal uppercase heading SHALL read "Testimonials"
  - **AND** at least three white cards SHALL render, each with a floating quote
  - **AND** Prev/Next pill controls SHALL advance the carousel

### 9. Instagram
- The system SHALL render the "Instagram" section with a carousel of image tiles carrying Instagram icons.
- Scenario — Gallery tiles:
  - **GIVEN** the Instagram section is rendered
  - **WHEN** the page loads
  - **THEN** the teal uppercase heading SHALL read "Instagram"
  - **AND** at least six image tiles SHALL render, each with an Instagram icon

### 10. Footer
- The system SHALL render the light `#f8f9fa` footer with three link widgets, a contact column, socials, and a copyright bar linking to Component Dock.
- Scenario — Footer widgets:
  - **GIVEN** the footer is rendered
  - **WHEN** the page loads
  - **THEN** a "Home" widget SHALL list Home, About us, Places, Services,
  - **AND** a "Practice Area" widget SHALL list Travel, Popular places,
  - **AND** a "Services" widget SHALL list Tour, Swimming, Kayak, and Surfing
  - **AND** a "Contact" widget SHALL show a paraphrased street address, two
- Scenario — Socials and copyright:
  - **GIVEN** the footer is rendered
  - **WHEN** the page loads
  - **THEN** a "Connect" widget SHALL render 30px teal circle social icons
  - **AND** the copyright bar SHALL read "© <current year> Concierge — All
  - **AND** it SHALL link to https://www.componentdock.com/ (mandatory)

### Cross-cutting requirements

- **Header / Navigation** — The system SHALL render a transparent-over-hero navbar with a text brand, nav links (including a dropdown), and a phone number, turning solid on scroll.
  - Scenario — Brand and nav links: **GIVEN** the Concierge app is rendered; **WHEN** the page loads; **THEN** the navbar SHALL overlay the hero transparently at the top; **AND** the brand SHALL read "CONCIERGE" (text equivalent of "Hotell"); **AND** the nav SHALL list Home, Destination, Menu One, Menu Two, Dropdown,; **AND** the phone number "123-489-9381" with a phone icon SHALL render on
  - Scenario — Dropdown menu: **GIVEN** the Dropdown nav item is rendered; **WHEN** it is hovered/activated; **THEN** a submenu SHALL open listing Sub Menu One, Sub Menu Two, and Sub
  - Scenario — Mobile menu: **GIVEN** the viewport is narrow; **WHEN** the hamburger trigger is activated; **THEN** a collapsible menu SHALL open listing the same links (dropdown; **AND** activating the close control SHALL close the menu
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/concierge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/concierge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Section order + structure matches the live preview 1:1 (navbar → hero →; [ ] Brand teal `#00917c` in `@theme`; used via Tailwind classes everywhere; [ ] Fonts: Work Sans (headings) + Roboto (body) via Google Fonts `<link>`s; [ ] Placeholder images: `https://picsum.photos/seed/concierge-<n>/<w>/<h>`; [ ] Icons: lucide-react (Mountain, Map, Briefcase, Palmtree, Globe, Plane,; [ ] Buttons: pill (radius 30px), padding 15px 30px, 14px; teal `btn-primary`; [ ] Hero overlay: flat black at 40% (`bg-black/40`-style), NOT a gradient.; [ ] Booking widget: white card with `-mt-12`-style negative top margin over; [ ] Carousels (services, blog, testimonials, Instagram) implemented with; [ ] About teal panel: absolutely-positioned `#00917c` block bleeding; [ ] FAQ accordion: client-side expand/collapse, active = `#008370` on; [ ] Tests: Vitest + Testing Library, 100% lines/functions/branches/; [ ] Gates: `npm run verify:app -- concierge` green; full gate via CI on; [ ] PR description: source template (Hotell), preview URL, design tokens; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/concierge` ships on https://concierge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/concierge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/concierge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/concierge/public/CNAME` = `concierge.free.componentdock.com`
  and the package `homepage` = `https://concierge.free.componentdock.com`.
