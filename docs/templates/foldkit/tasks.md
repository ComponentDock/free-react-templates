# Foldkit — Implementation Tasks

Source design: **Accordion 15** (`https://colorlib.com/wp/template/accordion-15/`) → recreation name **foldkit**. Shipped at https://foldkit.free.componentdock.com.

Scope: FoldKit is a single-page Bootstrap accordion widget template with four expandable profile sections, nested navigation links and a clean Roboto type scale on a light grey page.

## Component breakdown

Render order as composed in `apps/foldkit/src/App.tsx`:

### 1. Accordion
- The widget SHALL render exactly four accordion rows — Profile, Messages, Settings, Logout — each exposed as a button with `aria-expanded` and `aria-controls` pointing at its panel.
- Scenario — Visitor inspects the rows:
  - **WHEN** the accordion renders
  - **THEN** four buttons are present with the accessible names Profile,
  - **AND** only the Profile row reports `aria-expanded="true"` initially

### 2. Footer
- The footer SHALL link `https://www.componentdock.com/` branded as "More templates at Component Dock", plus the current year copyright line.
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor scrolls to the footer
  - **THEN** a link named "More templates at Component Dock" points at

### Cross-cutting requirements

- **Widget Header** — The page SHALL show a centred widget header — the `FoldKit Widget` h1 and the subtitle "Interactive profile and settings accordion interface." — on the `#efefef` page background.
  - Scenario — Visitor opens the widget: **WHEN** the page loads; **THEN** the h1 `FoldKit Widget` and its subtitle are visible, centred,; **AND** the document title is `FoldKit — Interactive Accordion Widget`
- **Single-Open Expand / Collapse** — Opening a row SHALL collapse any other open row; activating the open row SHALL collapse it, leaving every row closed.
  - Scenario — Visitor opens a second row: **WHEN** the visitor activates the Messages row while Profile is open; **THEN** Messages expands, Profile collapses, and only one panel is in
  - Scenario — Visitor closes the open row: **WHEN** the visitor activates the currently open row; **THEN** that panel collapses and no row is expanded
- **Nested Links And Keyboard Access** — Expanded panels SHALL expose the nested link list — Profile, Messages, Settings, Sales, Marketing — for all four rows (Logout included), and the row toggles SHALL be operable by keyboard with a visible focus ring.
  - Scenario — Visitor navigates by keyboard: **WHEN** a row toggle has focus and Enter or Space is pressed; **THEN** the row expands or collapses exactly as with a mouse click
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/foldkit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/foldkit/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/foldkit`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/foldkit`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/foldkit`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `foldkit.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/foldkit` ships on https://foldkit.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/foldkit/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/foldkit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/foldkit/public/CNAME` = `foldkit.free.componentdock.com`
  and the package `homepage` = `https://foldkit.free.componentdock.com`.
