# Checkpad — Implementation Tasks

Source design: **Checkbox 19** (`https://colorlib.com/wp/template/checkbox-19/`) → recreation name **checkpad**. Shipped at https://checkpad.free.componentdock.com.

Scope: Checkpad is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/checkpad/src/App.tsx`:

### 1. CheckboxShowcase
- The template SHALL display a list of checkbox items that can be toggled by the user.
- Scenario — Checkbox items are rendered:
  - Given the page is loaded
  - When I count the checkbox items
  - Then I see at least 4 checkbox items
- Scenario — Checkbox can be toggled:
  - Given the page is loaded
  - When I click on the first checkbox
  - Then the checkbox state changes (checked/unchecked)
- Scenario — Disabled checkbox cannot be toggled:
  - Given the page is loaded
  - When I click on a disabled checkbox
  - Then the checkbox state does not change

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Checkpad · Bootstrap Checkbox Component Demo · Component Dock

### Cross-cutting requirements

- **Renders the main heading and subtitle** — The template SHALL display a centered heading "Checkbox #19" and a subtitle "Bootstrap checkbox component demo" at the top of the page.
  - Scenario — Heading is visible: Given the page is loaded; When I view the page; Then I see a heading with text "Checkbox #19"; And I see a subtitle with text "Bootstrap checkbox component demo"
- **Responsive layout** — The template SHALL display correctly on both desktop and mobile viewports.
  - Scenario — Layout is centered on desktop: Given the viewport width is 1024px; When I view the page; Then the content is centered with appropriate max-width
  - Scenario — Layout is responsive on mobile: Given the viewport width is 375px; When I view the page; Then the content fills the width with appropriate padding
- **Accessibility** — The template SHALL be accessible to screen readers and keyboard navigation.
  - Scenario — Checkboxes are keyboard accessible: Given the page is loaded; When I press Tab to focus a checkbox; Then I can press Space to toggle it
  - Scenario — Checkboxes have labels: Given the page is loaded; When I view each checkbox; Then each checkbox has an associated label
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/checkpad/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/checkpad/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/checkpad` ships on https://checkpad.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/checkpad/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/checkpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checkpad/public/CNAME` = `checkpad.free.componentdock.com`
  and the package `homepage` = `https://checkpad.free.componentdock.com`.
