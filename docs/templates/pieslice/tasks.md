# Pieslice — Implementation Tasks

Source design: **Luigis** (`https://colorlib.com/wp/template/luigis/`) → recreation name **pieslice**. Shipped at https://pieslice.free.componentdock.com.

Scope: Pieslice is a pizza restaurant landing page template that recreates the ColorLib "Luigi's" design (https://colorlib.com/wp/template/luigis/) with a React 19 + Vite + Tailwind CSS 4 + TypeScript stack. It features a hero section, our story, best sellers grid, filterable menu, and a branded footer.

## Component breakdown

Render order as composed in `apps/pieslice/src/App.tsx`:

### 1. Navbar
- Users SHALL see a fixed navbar with the site logo, navigation links (Home, About, Menu, Best Sellers, Contact), and a phone order button.
- Scenario — Desktop navbar displays all links:
  - **WHEN** the user loads the page on desktop
  - **THEN** the navbar shows the logo "Pieslice"
  - **AND** all five navigation links are visible
  - **AND** the phone order button with number is visible
- Scenario — Mobile hamburger toggle:
  - **WHEN** the user is on a mobile viewport
  - **AND** clicks the hamburger menu button
  - **THEN** the mobile navigation menu opens
  - **AND** clicking a nav link closes the menu

### 2. Hero
- Users SHALL see a full-width hero with a background image, subtitle, main heading, and a call-to-action button.
- Scenario — Hero content renders correctly:
  - **WHEN** the user loads the page
  - **THEN** the hero shows "Best in Town" subtitle
  - **AND** shows "Pizza & Pasta" as the main heading
  - **AND** shows a "See Today's Menu" button linking to #menu

### 3. OurStory
- Users SHALL see a two-column story section with a heading and descriptive paragraphs.
- Scenario — Story content renders:
  - **WHEN** the user scrolls to the About section
  - **THEN** the "Our Story" heading is visible
  - **AND** two columns of text are displayed

### 4. BestSellers
- Users SHALL see an 8-card grid of best-selling items with names, prices, and order buttons. Some items SHALL have ribbon badges.
- Scenario — Product cards render:
  - **WHEN** the user views the Best Sellers section
  - **THEN** 8 product cards are displayed
  - **AND** each card has a name, price, and "Order Now" button
- Scenario — Ribbon badges display:
  - **WHEN** the Best Sellers section renders
  - **THEN** OFFER, SPECIALITY, and PLUS SIZE badges are visible on their respective items

### 5. OurMenu
- Users SHALL see a tabbed menu with category filters (All, Pizza, Pasta, Salads, Desserts) and a 2-column grid of menu items.
- Scenario — All items visible by default:
  - **WHEN** the user loads the page
  - **THEN** all 8 menu items are visible
- Scenario — Tab filtering works:
  - **WHEN** the user clicks the "Pizza" tab
  - **THEN** only pizza category items are shown
  - **AND** items from other categories are hidden
  - **WHEN** the user clicks the "All" tab
  - **THEN** all 8 menu items are visible again

### 6. Footer
- Users SHALL see a footer with address, phone, email, social media links, and a Component Dock attribution link.
- Scenario — Contact information renders:
  - **WHEN** the user scrolls to the footer
  - **THEN** the address, phone number, and email are displayed
- Scenario — Component Dock link is present:
  - **WHEN** the footer renders
  - **THEN** at least one link to componentdock.com is visible with "Component Dock" text

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pieslice/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pieslice/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pieslice` ships on https://pieslice.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pieslice/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pieslice/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pieslice/public/CNAME` = `pieslice.free.componentdock.com`
  and the package `homepage` = `https://pieslice.free.componentdock.com`.
