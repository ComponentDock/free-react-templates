# Vex — Implementation Tasks

Source design: **Checkbox 17** (`https://colorlib.com/wp/template/checkbox-17/`) → recreation name **vex**. Shipped at https://vex.free.componentdock.com.

Scope: A modern, minimal checkbox template featuring smooth animation effects on toggle. The design uses bold geometric checkbox styling with a vibrant indigo accent color, clean typography, and satisfying check/uncheck transitions. Demonstrates accessible checkbox patterns with disabled states.

## Component breakdown

Render order as composed in `apps/vex/src/App.tsx`:

### 1. DemoSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Checkbox #17 · Modern animated checkbox with indigo accent

### 2. Footer
- The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer displays Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link to "https://www.componentdock.com/" SHALL be visible
  - **AND** the link text SHALL be "Component Dock"
  - **AND** the link SHALL open in a new tab

### Cross-cutting requirements

- **Animated checkbox rendering** — The template SHALL render geometric square checkboxes with rounded corners, an indigo (#6366f1) fill when checked, a light border when unchecked, and a smooth scale + color transition animation on toggle.
  - Scenario — Checked checkbox displays indigo fill and checkmark: **WHEN** a checkbox is checked; **THEN** it SHALL display an indigo (#6366f1) square background with rounded corners; **AND** it SHALL display a white checkmark SVG icon centered inside; **AND** it SHALL animate with a scale transition from 0.8 to 1.0
  - Scenario — Unchecked checkbox displays bordered empty state: **WHEN** a checkbox is unchecked; **THEN** it SHALL display a white background with a gray-300 border; **AND** it SHALL NOT display a checkmark icon
- **Checkbox interaction** — The template SHALL allow users to toggle checkboxes by clicking the label or the visual indicator.
  - Scenario — User toggles an unchecked checkbox: **GIVEN** a checkbox is unchecked; **WHEN** the user clicks the checkbox label; **THEN** the checkbox SHALL become checked with an animation
  - Scenario — User toggles a checked checkbox off: **GIVEN** a checkbox is checked; **WHEN** the user clicks the checkbox label; **THEN** the checkbox SHALL become unchecked with an animation
- **Disabled state** — The template SHALL support disabled checkboxes that cannot be toggled and appear with reduced opacity.
  - Scenario — Disabled unchecked checkbox cannot be toggled: **GIVEN** a checkbox is disabled and unchecked; **WHEN** the user clicks the checkbox; **THEN** the checkbox SHALL remain unchecked
  - Scenario — Disabled checked checkbox cannot be unchecked: **GIVEN** a checkbox is disabled and checked; **WHEN** the user clicks the checkbox; **THEN** the checkbox SHALL remain checked
  - Scenario — Disabled checkbox has reduced opacity: **GIVEN** a checkbox is disabled; **THEN** the checkbox container SHALL have opacity-50 applied
- **Showcase layout** — The template SHALL display a centered showcase section with heading "Checkbox #17", a subtitle, and four checkbox items: Design the mockups (checked), Build the components (unchecked), Write the tests (unchecked), Ship to production (disabled unchecked).
  - Scenario — All checkboxes render with correct labels: **WHEN** the page loads; **THEN** four checkboxes SHALL be visible with labels "Design the mockups", "Build the components", "Write the tests", "Ship to production"
  - Scenario — First checkbox is checked by default: **WHEN** the page loads; **THEN** the "Design the mockups" SHALL be checked; **AND** the "Build the components" SHALL be unchecked
- **Typography and styling** — The template SHALL use Inter font via Google Fonts and a white background with dark text.
  - Scenario — Inter font is loaded: **WHEN** the page loads; **THEN** the body SHALL use the Inter font family
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/vex/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/vex/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; **Font**: Inter (400, 500, 600, 700); **Background**: white (#fff); **Heading**: 28px, font-weight 600, dark color; **Label text**: 16px, font-weight 500, gray-700; **Checkbox shape**: square with rounded corners (border-radius: 6px); **Checkbox size**: 22px x 22px; **Unchecked background**: white with gray-300 border; **Checked background**: #6366f1 (indigo); **Checked hover**: #4f46e5; **Checkmark icon**: white, centered, 14px; **Disabled opacity**: 0.5; **Transition**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for scale + color; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/vex` ships on https://vex.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vex/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vex/public/CNAME` = `vex.free.componentdock.com`
  and the package `homepage` = `https://vex.free.componentdock.com`.
