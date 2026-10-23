# Knob — Implementation Tasks

Source design: **Checkbox 18** (`https://colorlib.com/wp/template/checkbox-18/`) → recreation name **knob**. Shipped at https://knob.free.componentdock.com.

Scope: A toggle buttons template showcasing smooth, pill-shaped toggle switches in various states (on/off, disabled, color variants). Clean centered layout with a heading, subtitle, and a vertical stack of toggle controls.

## Component breakdown

Render order as composed in `apps/knob/src/App.tsx`:

### 1. ToggleShowcase
- The template SHALL display a showcase section with a heading, subtitle, and a vertical stack of 4 toggle switches in different states.
- Scenario — renders heading:
  - **WHEN** the ToggleShowcase is rendered
  - **THEN** a heading "Checkbox #18" is present
- Scenario — renders subtitle:
  - **WHEN** the ToggleShowcase is rendered
  - **THEN** the text "Toggle Buttons" is present
- Scenario — renders all toggles:
  - **WHEN** the ToggleShowcase is rendered
  - **THEN** 4 toggle inputs are present
- Scenario — Notifications is checked by default:
  - **WHEN** the ToggleShowcase is rendered
  - **THEN** "Notifications" is checked
- Scenario — Dark mode is unchecked by default:
  - **WHEN** the ToggleShowcase is rendered
  - **THEN** "Dark mode" is not checked
- Scenario — Marketing emails is disabled:
  - **WHEN** the ToggleShowcase is rendered
  - **THEN** "Marketing emails" is disabled

### 2. Footer
- The Footer component SHALL display the template name and a link to Component Dock.
- Scenario — renders template name:
  - **WHEN** the Footer is rendered
  - **THEN** the text "Knob" is present
- Scenario — renders Component Dock link:
  - **WHEN** the Footer is rendered
  - **THEN** a link to "https://www.componentdock.com/" is present
  - **AND** the link has target="_blank"
  - **AND** the link has rel="noreferrer"

### Cross-cutting requirements

- **Toggle switch component** — The template SHALL provide a reusable toggle switch component (KnobToggle) that renders an accessible checkbox input with a visible pill-shaped track and sliding knob.
  - Scenario — renders with label: **WHEN** a KnobToggle is rendered with label "Notifications"; **THEN** a checkbox input with accessible name "Notifications" is present
  - Scenario — unchecked by default: **WHEN** a KnobToggle is rendered without defaultChecked; **THEN** the checkbox is not checked
  - Scenario — toggles on click: **WHEN** a KnobToggle is rendered; **AND** the user clicks the toggle; **THEN** the checkbox becomes checked; **AND** when clicked again the checkbox becomes unchecked
  - Scenario — respects defaultChecked: **WHEN** a KnobToggle is rendered with defaultChecked=true; **THEN** the checkbox is checked
  - Scenario — disabled state: **WHEN** a KnobToggle is rendered with disabled=true; **THEN** the checkbox is disabled; **AND** clicking the toggle does not change its state
- **App composition** — The App component SHALL compose the ToggleShowcase and Footer, set the document title, and render inside a full-height flex column.
  - Scenario — composes showcase and footer: **WHEN** the App is rendered; **THEN** the main element contains the showcase heading; **AND** the footer is present
  - Scenario — sets document title: **WHEN** the App is rendered; **THEN** the document title is "Knob — Toggle Buttons Template"
  - Scenario — footer links to Component Dock: **WHEN** the App is rendered; **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/knob/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/knob/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/knob` ships on https://knob.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/knob/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/knob/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/knob/public/CNAME` = `knob.free.componentdock.com`
  and the package `homepage` = `https://knob.free.componentdock.com`.
