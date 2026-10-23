# Needlecraft — Implementation Tasks

Source design: **Acupuncture** (`https://colorlib.com/wp/template/acupuncture/`) → recreation name **needlecraft**. Shipped at https://needlecraft.free.componentdock.com.

Scope: A Health & Wellness template with hero, services row, about / why choose us, service cards, blog and cta banner sections. Recreation of ColorLib's **Acupuncture** free website template.

## Component breakdown

Render order as composed in `apps/needlecraft/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navbar with the brand name and navigation links.
- Scenario — Navbar renders with brand and links:
  - **WHEN** the page is loaded
  - **THEN** the navbar displays "Needlecraft." as brand text (teal dot after name)
  - **AND** links "Home", "Services", "Testimonials", "Blog", "About", "Contact" are visible
  - **AND** on mobile the hamburger menu toggles the nav drawer

### 2. Hero
- The template SHALL display a hero section with a background image, headline, and play button.
- Scenario — Hero section shows headline and play button:
  - **WHEN** the page is loaded
  - **THEN** the hero has a full-width background image
  - **AND** the headline reads "Improve your overall health." with "health." in teal
  - **AND** a subheading text is shown below
  - **AND** a circular play-video button labeled "Watch intro video" is centered

### 3. Services
- The template SHALL display five service icons in equal columns.
- Scenario — Five service icons displayed in equal columns:
  - **WHEN** the page is loaded
  - **THEN** 5 service items are shown in a full-width row (equal columns)
  - **AND** each has a circular icon and a label: "Acupuncture", "Therapy", "Foot", "Natural", "Healing"

### 4. About
- The template SHALL display an about section with text on the left and an image on the right.
- Scenario — About section with image and text:
  - **WHEN** the page is loaded
  - **THEN** the "Why Choose Us" section has an image on the right and heading + text on the left
  - **AND** a "Contact us now" button (primary) is shown below the text

### 5. ServiceCards
- The template SHALL display four service detail cards in a 2x2 grid.
- Scenario — Four service detail cards in a 2x2 grid:
  - **WHEN** the page is loaded
  - **THEN** 4 service detail cards are shown in 2 columns
  - **AND** each has a circular icon, heading, and description paragraph

### 6. Testimonials
- The template SHALL display a testimonials section on a light background with three quote cards.
- Scenario — Testimonials section on light background:
  - **WHEN** the page is loaded
  - **THEN** the testimonials section has a light gray background (#f8f9fa)
  - **AND** "Happy Customers" heading is shown with "Testimonials" label in teal above
  - **AND** 3 testimonial cards each with a blockquote and author (avatar, name, role)

### 7. Blog
- The template SHALL display a blog section with three post cards.
- Scenario — Blog posts section:
  - **WHEN** the page is loaded
  - **THEN** "News & Tips" heading is shown with "Blog" label in teal above
  - **AND** 3 blog post cards are shown in 3 columns
  - **AND** each has an image, meta date/author, heading, and description

### 8. CtaBanner
- The template SHALL display a full-width teal call-to-action banner.
- Scenario — Full-width call-to-action banner:
  - **WHEN** the page is loaded
  - **THEN** a teal (#2fc4b2) full-width banner is shown
  - **AND** heading "What are you waiting for?" in white
  - **AND** subtext below, plus a "Contact us now" white button

### 9. Footer
- The template SHALL display a footer with contact information and a Component Dock link.
- Scenario — Footer with contact info and copyright:
  - **WHEN** the page is loaded
  - **THEN** 3 columns show phone, address, and email contact info
  - **AND** copyright line with "Component Dock" link replaces original attribution
  - **AND** "Terms" and "Privacy" links are in the bottom-right

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/needlecraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/needlecraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/needlecraft` ships on https://needlecraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/needlecraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/needlecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/needlecraft/public/CNAME` = `needlecraft.free.componentdock.com`
  and the package `homepage` = `https://needlecraft.free.componentdock.com`.
