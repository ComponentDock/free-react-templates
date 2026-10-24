# Derrick — Implementation Tasks

Source design: **Vertex** (`https://colorlib.com/wp/template/vertex/`) → recreation name **derrick**. Shipped at https://derrick.free.componentdock.com.

Scope: Derrick is a construction company template recreating the ColorLib "Vertex" design. It features a blue-overlay hero slider, animated stat counters, four dashed-frame service cards, a portfolio grid, a parallax quote callout, testimonials, three pricing plans, a five-card blog row, a quote-request modal, and a blue footer carrying the Component Dock credit.

> Rewritten 2026-10-24: this file previously described the **Engineers** slug (docs-source drift, `verify-docs-source.py`). Identity, tokens and section order below are the measured Vertex reference; see `design-notes.md` for the evidence tables.

## Component breakdown

Render order as composed in `apps/derrick/src/App.tsx`:

### 1. Navbar
- Users SHALL see a transparent-to-white sticky header with the "Derrick" wordmark, links (Home, About, Project, Services, Blog, Contact) and a "Request a Quote" button.
- Scenario — Desktop navigation links:
  - **WHEN** the page loads at ≥1024 px
  - **THEN** the wordmark, all six links and the quote button are visible
- Scenario — Mobile menu toggle:
  - **WHEN** the viewport is ≤767 px and the hamburger is activated
  - **THEN** the navigation links are revealed in a collapsed panel

### 2. Hero
- Users SHALL see a full-height photo slider under an 80 % brand-blue (`#0962ea`) overlay carrying a two-line headline and a slide control.
- Scenario — Slides render:
  - **WHEN** the page loads
  - **THEN** the first slide shows "We're Derrick, Construction and Development" above "Bringing to life most complex projects"
  - **AND** advancing the slider reveals the second headline

### 3. StatsCounter
- Users SHALL see four statistics — years, brigades, engineering units and employees (5,143).
- Scenario — Stats are rendered:
  - **WHEN** the counter band is in view
  - **THEN** four labelled figures are displayed, including "Employees of the company" / 5,143

### 4. Services
- Users SHALL see four service cards inside 2 px dashed `#dbe9fe` frames.
- Scenario — Service cards are rendered:
  - **WHEN** the services band is visible
  - **THEN** Construction Management, Pre-Construction Services, Construction Services and General Constructing are shown with icon, title and blurb

### 5. Portfolio
- Users SHALL see a light (`#f8f9fa`) band titled "We love to share our accomplishments" with a project tile grid.
- Scenario — Portfolio tiles render:
  - **WHEN** the portfolio band is visible
  - **THEN** at least four project tiles are displayed and each scales on hover

### 6. CtaParallax
- Users SHALL see a full-bleed photo band with "Experience Our Advance Equipments" and a "Request a Quote" button.
- Scenario — Callout CTA opens the modal:
  - **WHEN** the user activates "Request a Quote" in the callout
  - **THEN** the quote modal opens

### 7. Testimonials
- Users SHALL see client quotes with avatar, name and role.
- Scenario — Quotes render:
  - **WHEN** the testimonial band is visible
  - **THEN** quotes attributed to named clients with the role "Civil Engineer" are displayed

### 8. Pricing
- Users SHALL see three plans — Basic, Standard and Premium — each priced and carrying a CTA.
- Scenario — Pricing plans are rendered:
  - **WHEN** the pricing band is visible
  - **THEN** three cards are displayed, each with a plan name, `$29 per month` and a "Get started" button

### 9. Blog
- Users SHALL see five post cards with image, meta line, title and "Read more".
- Scenario — Blog cards render:
  - **WHEN** the blog band is visible
  - **THEN** five cards are displayed with a date, author and read-more affordance

### 10. Footer
- Users SHALL see a brand-blue footer with an about blurb, Quick Links, Contact Information and a Component Dock credit.
- Scenario — Component Dock link is present:
  - **WHEN** the footer is visible
  - **THEN** the text "Component Dock" links to https://www.componentdock.com/ with target="_blank"

### 11. QuoteModal
- Users SHALL be able to open and close a quote-request dialog with name, e-mail, date, time and message fields.
- Scenario — Modal opens on CTA click:
  - **WHEN** the user activates "Request a Quote"
  - **THEN** the dialog is rendered with all five fields
- Scenario — Modal closes:
  - **WHEN** the user activates the close control
  - **THEN** the dialog is removed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/derrick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/derrick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification

- [x] `apps/derrick` ships on https://derrick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/derrick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link [Component Dock](https://www.componentdock.com/). That is the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research quotes the source's own credit string ("… made with ♥ by …"), it is what the source band renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/derrick/` may name the source designer, carry a `colorlib.com` URL, or reuse the source template's name — code, comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/derrick/public/CNAME` = `derrick.free.componentdock.com` and the package `homepage` = `https://derrick.free.componentdock.com`.
