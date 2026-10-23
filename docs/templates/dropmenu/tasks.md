# Dropmenu — Implementation Tasks

Source design: **Dropdown 18** (`https://colorlib.com/wp/template/dropdown-18/`) → recreation name **dropmenu**. Shipped at https://dropmenu.free.componentdock.com.

Scope: Recreation of ColorLib **Dropdown 18** — a profile dropdown snippet for membership sites and social networks, featuring a circular avatar, name/location, and a dropdown menu with icon-labeled items and badges.

## Component breakdown

Render order as composed in `apps/dropmenu/src/App.tsx`:

### 1. ProfileDropdown
- The dropdown component SHALL render a profile trigger that toggles a dropdown menu.
- Scenario — Renders the profile trigger:
  - **WHEN** the page loads
  - **THEN** a button with a circular profile image, name "Kevin Thomas", and location "New York City, USA" is visible
- Scenario — Dropdown menu is hidden by default:
  - **WHEN** the page loads
  - **THEN** the dropdown menu items are not visible
- Scenario — Opens dropdown menu on click:
  - **WHEN** the user clicks the profile trigger
  - **THEN** the dropdown menu becomes visible
  - **AND** the menu contains five items: User Dashboard, Inbox, Following, Setting, Log out
- Scenario — Closes menu on second click:
  - **WHEN** the user clicks the profile trigger while the menu is open
  - **THEN** the dropdown menu becomes hidden
- Scenario — Closes on outside click:
  - **WHEN** the user clicks outside the dropdown while the menu is open
  - **THEN** the dropdown menu becomes hidden

### 2. Footer
- The dropdown SHALL use proper ARIA attributes and the page SHALL include a footer linking to Component Dock.
- Scenario — Accessibility:
  - **WHEN** the dropdown trigger renders
  - **THEN** the button has aria-haspopup="true"
  - **AND** the button has aria-expanded="false" when closed
  - **AND** the button has aria-expanded="true" when open
- Scenario — Footer with Component Dock link:
  - **WHEN** the page renders
  - **THEN** a footer is visible
  - **AND** the footer contains a link to "https://www.componentdock.com/"
- Scenario — Heading displays correctly:
  - **WHEN** the page loads
  - **THEN** a centered heading "Dropdown #8" is visible

### Cross-cutting requirements

- **Menu items are correctly structured** — The dropdown menu SHALL display five items with icons, labels, and optional badges.
  - Scenario — Menu contains correct items: **WHEN** the dropdown menu is open; **THEN** "User Dashboard" is visible with a layout-grid icon; **AND** "Inbox" is visible with a mail icon and a "3" badge; **AND** "Following" is visible with a people icon; **AND** "Setting" is visible with a settings icon and a "New" badge; **AND** "Log out" is visible with a logout icon
  - Scenario — Items have icon margin: **WHEN** the dropdown menu is open; **THEN** each menu item icon has a right margin of 15px
  - Scenario — Items have borders: **WHEN** the dropdown menu is open; **THEN** each item (except the last) has a bottom border; **AND** the last item ("Log out") has no bottom border
  - Scenario — Items are links: **WHEN** the dropdown menu is open; **THEN** each menu item is an anchor link with href="#"
- **Menu is styled and animated** — The dropdown menu SHALL have a white background with box-shadow and smooth animation.
  - Scenario — Menu styling: **WHEN** the dropdown menu opens; **THEN** the menu has a white background; **AND** the menu has a box-shadow of 0 15px 30px 0 rgba(0,0,0,0.2); **AND** the menu has no border-radius
  - Scenario — Menu animation: **WHEN** the dropdown menu opens; **THEN** the menu fades in with opacity transition; **AND** the menu slides down with margin-top transition
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dropmenu/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dropmenu/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Heading "Dropdown #8" centered on page; [ ] Profile trigger with circular avatar, name, and location renders; [ ] Click toggles dropdown open/close; [ ] Menu contains: User Dashboard, Inbox, Following, Setting, Log out; [ ] Inbox has orange "3" badge; [ ] Setting has orange "New" badge; [ ] Menu items have icons with 15px right margin; [ ] Items separated by rgba(0,0,0,0.1) borders; [ ] Menu has white background with box-shadow; [ ] Menu animates in (opacity + margin-top); [ ] Outside click closes dropdown; [ ] aria-expanded toggles correctly; [ ] Footer links to Component Dock; [ ] No ColorLib references in app code; [ ] Vitest + Testing Library tests at 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dropmenu` ships on https://dropmenu.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dropmenu/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropmenu/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropmenu/public/CNAME` = `dropmenu.free.componentdock.com`
  and the package `homepage` = `https://dropmenu.free.componentdock.com`.
