# Droptile — Implementation Tasks

Source design: **Dropdown 16** (`https://colorlib.com/wp/template/dropdown-16/`) → recreation name **droptile**. Shipped at https://droptile.free.componentdock.com.

Scope: A mega menu dropdown navigation snippet with an image hero area and category columns. Recreation of ColorLib "Dropdown V16".

## Component breakdown

Render order as composed in `apps/droptile/src/App.tsx`:

### 1. MegaDropdown
- The component SHALL display a clickable trigger labeled "Dropdown" with a down-arrow icon.
- Scenario — Trigger renders with default label:
  - **WHEN** the component is mounted
  - **THEN** I see "Dropdown" text in gray (#888)
  - **AND** I see a down-arrow icon next to it

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Droptile · Mega Menu Dropdown · Component Dock

### Cross-cutting requirements

- **Dropdown opens on trigger click** — The mega menu panel SHALL appear when the trigger is clicked.
  - Scenario — Dropdown opens on click: **WHEN** I click the "Dropdown" trigger; **THEN** the mega menu panel appears with opacity transition; **AND** the trigger text turns black (#000); **AND** the arrow icon rotates 180 degrees
- **Dropdown closes on trigger click again** — The mega menu panel SHALL disappear when the trigger is clicked while open.
  - Scenario — Dropdown closes on second click: **WHEN** I click the "Dropdown" trigger while open; **THEN** the mega menu panel disappears; **AND** the arrow icon rotates back to 0 degrees
- **Dropdown closes on outside click** — The mega menu panel SHALL close when clicking outside the dropdown area.
  - Scenario — Dropdown closes on outside click: **WHEN** I click outside the dropdown area while open; **THEN** the mega menu panel disappears
- **Dropdown closes on Escape key** — The mega menu panel SHALL close when the Escape key is pressed.
  - Scenario — Dropdown closes on Escape: **WHEN** I press Escape while the dropdown is open; **THEN** the mega menu panel disappears
- **Mega menu has three columns** — The mega menu panel SHALL display three equal-width columns in a flex row.
  - Scenario — Three columns render: **WHEN** the dropdown is open; **THEN** I see three columns of equal width (33.33%); **AND** the columns are laid out in a flex row
- **Left column has image and link** — The first column SHALL display a hero image and a PSD Mockups link.
  - Scenario — Left column content: **WHEN** the dropdown is open and I look at the first column; **THEN** I see a hero image at the top; **AND** I see a bold "PSD Mockups" link below the image; **AND** I see "View All Here" in muted text
- **Middle column has category list** — The second column SHALL display a vertical list of 6 category links with counts.
  - Scenario — Middle column content: **WHEN** the dropdown is open and I look at the second column; **THEN** I see a vertical list of 6 category links; **AND** each link shows a category name followed by a count in parentheses
- **Right column has category list** — The third column SHALL display a vertical list of 6 category links with counts.
  - Scenario — Right column content: **WHEN** the dropdown is open and I look at the third column; **THEN** I see a vertical list of 6 category links; **AND** each link shows a category name followed by a count in parentheses
- **Category link hover state** — Category links SHALL change to pink (#e83e8c) on hover.
  - Scenario — Category link hover: **WHEN** I hover over a category link; **THEN** the link color changes to #e83e8c (pink)
- **Dropdown styling** — The dropdown panel SHALL have the correct visual styling.
  - Scenario — Dropdown panel styling: **WHEN** the dropdown is open; **THEN** the panel has a white background (#fff); **AND** it has a box shadow of 0 15px 30px 0 rgba(0,0,0,0.2); **AND** its minimum width is 680px; **AND** it has 10px padding
- **Mega menu internal spacing** — The mega menu SHALL have correct internal spacing.
  - Scenario — Mega menu spacing: **WHEN** the dropdown is open; **THEN** the mega menu has 20px padding; **AND** each column has 10px left/right padding
- **Accessibility — ARIA attributes** — The trigger element SHALL have proper ARIA attributes.
  - Scenario — ARIA on trigger: **WHEN** the component is mounted; **THEN** the trigger has role="button"; **AND** it has aria-expanded attribute; **AND** it has aria-haspopup="true"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock; [ ] Dropdown trigger renders with "Dropdown" text and arrow icon; [ ] Trigger text is #888, turns #000 when open; [ ] Arrow rotates 180deg when open; [ ] Dropdown opens/closes on trigger click with opacity animation; [ ] Dropdown closes on outside click; [ ] Dropdown closes on Escape key; [ ] Three equal-width columns in flex row; [ ] Left column: hero image + "PSD Mockups" bold link + "View All Here" muted text; [ ] Middle column: 6 category links with counts; [ ] Right column: 6 category links with counts; [ ] Category links are #000, hover to #e83e8c; [ ] Dropdown panel: white bg, shadow, 680px min-width, 10px padding; [ ] Mega menu: 20px padding, 33.33% columns; [ ] Transition: 0.3s all ease on links; [ ] ARIA: aria-expanded, aria-haspopup on trigger; [ ] No references to ColorLib in source code; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/droptile` ships on https://droptile.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/droptile/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/droptile/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/droptile/public/CNAME` = `droptile.free.componentdock.com`
  and the package `homepage` = `https://droptile.free.componentdock.com`.
