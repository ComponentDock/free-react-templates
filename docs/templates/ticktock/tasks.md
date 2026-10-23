# Ticktock — Implementation Tasks

Source design: **Watch** (`https://colorlib.com/wp/template/watch/`) → recreation name **ticktock**. Shipped at https://ticktock.free.componentdock.com.

Scope: TickTock is a single-page smartwatch landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Watch" free template (source: https://colorlib.com/wp/template/watch/), built under a DIFFERENT name (**TickTock**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/ticktock/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navbar with the TickTock brand and 6 navigation links (Home, About, Services, Products, Reviews, FAQ).
- Scenario — Desktop navbar renders all links:
  - **GIVEN** a user loads the page on a desktop viewport
  - **WHEN** the navbar renders
  - **THEN** the brand name "TickTock" and all 6 nav links are visible
- Scenario — Mobile hamburger menu toggles:
  - **GIVEN** a user is on a mobile viewport
  - **WHEN** they tap the hamburger button
  - **THEN** the mobile menu opens showing all nav links
  - **WHEN** they tap a nav link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL display a full-screen hero with gradient background, subtitle, heading, and a Buy Now call-to-action.
- Scenario — Hero renders content:
  - **GIVEN** a visitor lands on the page
  - **WHEN** the hero section renders
  - **THEN** the subtitle "Now you can feel the heat" and heading "Smart New Future" are visible
  - **AND** a "Buy Now" link points to the products section

### 3. About
- The template SHALL display an about section with text on the left and a video thumbnail on the right.
- Scenario — About section renders:
  - **GIVEN** a visitor scrolls to the about section
  - **WHEN** the section renders
  - **THEN** the heading, description text, video play button, and "Get Started Now" link are visible

### 4. Features
- The template SHALL display 4 feature cards with icons and a central watch image.
- Scenario — Features render all cards:
  - **GIVEN** a visitor scrolls to the features section
  - **WHEN** the section renders
  - **THEN** 4 feature cards (High Performance, Smart Design, Built to Last, Seamless Connect) are visible
  - **AND** a watch collection image is displayed

### 5. Products
- The template SHALL display 4 product cards with images, names, prices, and Pre Order buttons on a dark background.
- Scenario — Products render with prices:
  - **GIVEN** a shopper views the products section
  - **WHEN** the section renders
  - **THEN** 4 product cards with names and prices are visible
  - **AND** each card has a "Pre Order" button

### 6. Services
- The template SHALL display 6 service cards in a responsive grid.
- Scenario — Services render all cards:
  - **GIVEN** a visitor views the services section
  - **WHEN** the section renders
  - **THEN** 6 service cards are visible (Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews)

### 7. Reviews
- The template SHALL display review cards with reviewer names, text, and star ratings.
- Scenario — Reviews render with star ratings:
  - **GIVEN** a visitor views the reviews section
  - **WHEN** the section renders
  - **THEN** 6 review cards are visible with star ratings between 2 and 4 stars

### 8. FAQ
- The template SHALL display an FAQ accordion with single-open behavior.
- Scenario — First FAQ item is open by default:
  - **GIVEN** a visitor views the FAQ section
  - **WHEN** the section renders
  - **THEN** the first FAQ item is expanded
- Scenario — Clicking FAQ items toggles them:
  - **GIVEN** a visitor clicks a closed FAQ item
  - **WHEN** the click completes
  - **THEN** the clicked item expands
  - **AND** any previously open item collapses

### 9. Footer
- The template SHALL display a footer with the brand, newsletter signup form, social links, and Component Dock attribution.
- Scenario — Footer renders all elements:
  - **GIVEN** a visitor scrolls to the footer
  - **WHEN** the footer renders
  - **THEN** the brand name, newsletter form, social links (Facebook, Twitter, Dribbble), and a "Component Dock" link to https://www.componentdock.com/ are visible
- Scenario — Newsletter form prevents default submission:
  - **GIVEN** a visitor submits the newsletter form
  - **WHEN** the form submission event fires
  - **THEN** the default form submission is prevented

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/ticktock/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/ticktock/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/ticktock` ships on https://ticktock.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/ticktock/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/ticktock/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ticktock/public/CNAME` = `ticktock.free.componentdock.com`
  and the package `homepage` = `https://ticktock.free.componentdock.com`.
