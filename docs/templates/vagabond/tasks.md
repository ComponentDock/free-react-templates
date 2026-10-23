# Vagabond — Implementation Tasks

Source design: **Bootstrap Sidebar 06** (`https://colorlib.com/wp/template/bootstrap-sidebar-06/`) → recreation name **vagabond**. Shipped at https://vagabond.free.componentdock.com.

Scope: Recreation of ColorLib "Bootstrap Sidebar V06" — a two-column sidebar layout template designed for a travel agency site. Fixed left sidebar with gradient background, icon-based navigation, newsletter signup, and a clean white content area.

## Component breakdown

Render order as composed in `apps/vagabond/src/App.tsx`:

### 1. Sidebar
- The sidebar SHALL display "Travel" as the brand name and "Travel Agency" as a subtitle in bold white text on a gradient background.
- Scenario — Brand text renders:
  - **WHEN** the user loads the page
  - **THEN** the sidebar displays "Travel" as the brand name
  - **AND** the sidebar displays "Travel Agency" as a subtitle below the brand
  - **AND** the sidebar text is white

### 2. ContentArea
- The content area SHALL fill the remaining viewport width to the right of the sidebar with a white background.
- Scenario — Content area renders:
  - **WHEN** the user loads the page
  - **THEN** a right content area fills the remaining viewport width
  - **AND** the content area has a white background
  - **AND** a heading is displayed at the top
  - **AND** body text paragraphs are displayed below the heading

### Cross-cutting requirements

- **Sidebar navigation items** — The sidebar SHALL contain six navigation links with icons: Home, About, Destination, Blog, Services, Contacts.
  - Scenario — All nav items render: **WHEN** the user loads the page; **THEN** the sidebar contains navigation links: Home, About, Destination, Blog, Services, Contacts; **AND** each nav item has an icon to its left; **AND** all nav items are white text on the gradient background
- **Sidebar newsletter section** — The sidebar SHALL include a newsletter subscription form with an email input and submit button.
  - Scenario — Newsletter form renders: **WHEN** the sidebar is visible; **THEN** a "Subscribe for newsletter" heading is displayed below the nav; **AND** an email input with placeholder "Enter Email Address" is shown; **AND** a submit button is present
- **Sidebar footer** — The sidebar footer SHALL display a copyright notice and a link to Component Dock.
  - Scenario — Footer renders: **WHEN** the sidebar footer is visible; **THEN** a copyright notice is displayed at the bottom of the sidebar; **AND** a link to Component Dock is present in the footer
- **Sidebar gradient background** — The sidebar SHALL have a purple-to-pink gradient overlay over a landscape image.
  - Scenario — Gradient renders: **WHEN** the sidebar is visible; **THEN** the sidebar has a purple-to-pink gradient overlay; **AND** a landscape image is visible behind the gradient
- **Responsive sidebar toggle** — The sidebar SHALL collapse on mobile viewports and be toggleable via a hamburger button.
  - Scenario — Mobile toggle works: **WHEN** the viewport is narrower than 768px; **THEN** the sidebar is hidden by default; **AND** a hamburger menu icon appears to toggle the sidebar; **AND** clicking the hamburger shows the sidebar; **AND** clicking the overlay closes the sidebar
- **Component Dock attribution** — The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock". No ColorLib references SHALL appear in app code.
  - Scenario — Footer link renders: **WHEN** the sidebar footer is visible; **THEN** a "Component Dock" link points to https://www.componentdock.com/; **AND** no reference to ColorLib appears in the app code or UI

## Verification

- [x] `apps/vagabond` ships on https://vagabond.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vagabond/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vagabond/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vagabond/public/CNAME` = `vagabond.free.componentdock.com`
  and the package `homepage` = `https://vagabond.free.componentdock.com`.
