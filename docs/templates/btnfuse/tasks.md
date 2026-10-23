# Btnfuse — Implementation Tasks

Source design: **Bootstrap Buttons 19** (`https://colorlib.com/wp/template/bootstrap-buttons-19/`) → recreation name **btnfuse**. Shipped at https://btnfuse.free.componentdock.com.

Scope: BtnFuse is a dashboard-style button showcase template featuring stat card buttons with colored icon panels and numeric displays. It presents four brand colors (purple, teal, pink, green) across white-background and colored-background card buttons, each displaying an icon, a number, and a label.

## Component breakdown

Render order as composed in `apps/btnfuse/src/App.tsx`:

### 1. StatCard
- The template SHALL display four white-background stat cards in a row with icons on the left side.
- Scenario — White left-icon cards render:
  - **WHEN** the page loads
  - **THEN** four white cards are visible: "275 New Posts" (purple icon), "109 New Comment" (teal icon), "68 % Bounce Rate" (pink icon), "343 Total Visits" (green icon)

### 2. Footer
- The template SHALL include a footer with a link to Component Dock.
- Scenario — Footer renders:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

### Cross-cutting requirements

- **Page Title** — The template SHALL display a heading "Button #09" at the top of the page.
  - Scenario — Page heading renders: **WHEN** the page loads; **THEN** the heading "Button #09" is visible at the top in the heading-section style (32px font)
- **Pick Your Color Section** — The template SHALL display a "Pick Your Color" subheading with four default buttons: Default Primary, Default Secondary, Default Tertiary, Default Gradient.
  - Scenario — Color buttons render: **WHEN** the page loads; **THEN** four buttons are visible: "Default Primary" (purple bg), "Default Secondary" (teal bg), "Default Tertiary" (pink bg), "Default Gradient" (green bg)
- **White Card Stats — Icon Right** — The template SHALL display four white-background stat cards in a row with icons on the right side.
  - Scenario — White right-icon cards render: **WHEN** the page loads; **THEN** four white cards are visible: "275 New Projects" (green icon), "109 New Clients" (purple icon), "68 % Conversion Rate" (teal icon), "343 Support Tickets" (pink icon)
- **Colored Card Stats — Icon Left** — The template SHALL display four colored-background stat cards in a row with icons on the left side.
  - Scenario — Colored left-icon cards render: **WHEN** the page loads; **THEN** four colored cards are visible: "275 New Posts" (purple bg), "109 New Comment" (teal bg), "68 % Bounce Rate" (pink bg), "343 Total Visits" (green bg)
- **Colored Card Stats — Icon Right** — The template SHALL display four colored-background stat cards in a row with icons on the right side.
  - Scenario — Colored right-icon cards render: **WHEN** the page loads; **THEN** four colored cards are visible: "275 New Projects" (green bg), "109 New Clients" (purple bg), "68 % Conversion Rate" (teal bg), "343 Support Tickets" (pink bg)
- **Responsive Layout** — The template SHALL use a 4-column responsive grid that stacks on smaller screens.
  - Scenario — Grid layout: **WHEN** the page loads at desktop width; **THEN** stat cards display in a 4-column grid
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/btnfuse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/btnfuse/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/btnfuse` ships on https://btnfuse.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/btnfuse/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/btnfuse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/btnfuse/public/CNAME` = `btnfuse.free.componentdock.com`
  and the package `homepage` = `https://btnfuse.free.componentdock.com`.
