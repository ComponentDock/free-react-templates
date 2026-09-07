# Template: Groupcap (Multi-Select Form — Per-Group Selection Limits)

## Purpose

Groupcap is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 18"
free template (source: https://colorlib.com/wp/template/multiselect-18/),
built under a DIFFERENT name (**Groupcap**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap Select plugin (`bootstrap-select.min.js` +
jQuery 3.3.1 + Bootstrap 4) rendered on a light-grey page: a centered
`col-md-5` container with a single `<select multiple>` element containing
50 US state options organized into 4 `<optgroup>` groups, each with its
own per-group selection limit via `data-max-options`. The page title is
"Multi Select #8". The design is minimal — a centered heading
("Multi-Select #8 (Limit selection on groups)") and a functional multi-select
checkbox dropdown widget with grouped options and per-group caps.

**WHAT MAKES GROUPCAP DISTINCT (signature behaviors):**

1. **Per-group selection limits (grouped caps).** Unlike Chklmt (Multiselect
   17) which applies a GLOBAL cap of 7 across all options, Groupcap applies
   DIFFERENT limits to each `<optgroup>`:
   - Group A (Limit 2): Alabama, Alaska, Arizona, Arkansas — max 2 selections
   - Group B (Limit 4): California through Iowa — max 4 selections
   - Group C (Limit 7): Kansas through Nevada — max 7 selections
   - Group D (Limit 4): New Hampshire through Wyoming — max 4 selections
   Total: 50 US states across 4 groups with individual caps.
   Once a group reaches its limit, unchecked options within that group become
   disabled until at least one option in that group is deselected.
2. **Minimal single-section layout.** The entire page is a single content
   area with generous vertical padding (`7rem 0`), centered heading, and a
   moderate-width `col-md-5` column containing the multiselect widget. No
   navbar, no hero, no footer content (beyond the Component Dock
   attribution).
3. **Bootstrap Select plugin behavior.** The plugin transforms a
   `<select multiple>` into a button-triggered checkbox dropdown panel:
   - Button shows placeholder text "Nothing selected" (or selected items
     when checked), styled as a Bootstrap form-control with border,
     height, and radius inherited from Bootstrap 4.
   - Dropdown panel appears below with: a search input at the top,
     "Select All" / "Deselect All" action buttons, and a scrollable list
     of checkbox options grouped under their optgroup headers.
   - Each optgroup has a visual header label (e.g. "Group A (Limit 2)").
   - Each option has a checkbox with the label text and a check-mark icon
     when selected.
   - The button text updates to reflect the selected items (comma-separated
     or count).
4. **Clean, utility-first styling.** Body uses Roboto font, light grey
   `#efefef` background, paragraph text `#b3b3b3`, minimal shadows.
   No gradients, no images, no decorative elements.
5. **Show-tick mode.** The plugin uses `.show-tick` class to display check
   marks next to selected options in the dropdown.

## Naming

The ColorLib source name "Multiselect 18" is FORBIDDEN as the app name.
**Groupcap** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `groupcap` in any). Source slug
and preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 18" (page title: "Multi Select #8").
  Listed in TEMPLATES.md under **Bootstrap Multiselect (20)** (section header
  line 835; the item at line 842 — `wp/template/multiselect-18/`).
- **Preview URL — REACHABLE (via bootstrap sub-path):** the naive
  `https://preview.colorlib.com/theme/multiselect-18/` returns 404; the
  REAL preview is the bootstrap path
  `https://preview.colorlib.com/theme/bootstrap/multiselect-18/`
  (HTTP 200, `<title>Multi Select #8</title>`).
  Stylesheets: `css/bootstrap-select.min.css` (bootstrap-select v1.13.9
  plugin styling), `css/bootstrap.min.css` (Bootstrap 4), `css/style.css`
  (custom page styles), `fonts/icomoon/style.css` (icon font — replace
  with lucide). Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/bootstrap-select.min.js`, `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.
- **Screenshot URL:** `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-18.jpg`
  (1200×972 JPEG; visual fallback).
- **Design tokens extracted from preview stylesheet (`css/style.css`):**

| Token                   | Value                                                                                                               | Usage                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Font family             | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Body, headings, all text                |
| Background              | `#efefef` (light grey)                                                                                              | `body` background                       |
| Text color (paragraphs) | `#b3b3b3`                                                                                                           | `p` elements                            |
| Font weight (body)      | `300` (light)                                                                                                       | `p` elements                            |
| Heading font size       | `20px`                                                                                                              | `h2` element                            |
| Check mark color        | `#8cba51` (green)                                                                                                   | `.check-mark`, `.selected > a.selected` |
| Content padding         | `7rem 0`                                                                                                            | `.content` wrapper                      |
| Layout                  | Bootstrap 4 grid: `col-md-5`, centered (`justify-content-center`)                                                   | Container                               |
| Button                  | Bootstrap `.form-control` (border, height, radius from Bootstrap 4)                                                 | Select trigger                          |
| Dropdown                | Bootstrap `.dropdown-menu` with search input, Select All/Deselect All buttons, grouped optgroup headers             | Plugin-rendered panel                   |
| Optgroup structure      | `<optgroup label="Group X (Limit N)" data-max-options="N">` with child `<option>` elements                          | Grouped selection with per-group caps   |
| Assets                  | `fonts/icomoon/`, `css/bootstrap-select.min.css`, `css/bootstrap.min.css`                                           | Bootstrap Select plugin                 |
| JS                      | `jquery-3.3.1.min.js`, `popper.min.js`, `bootstrap.min.js`, `bootstrap-select.min.js`, `main.js`                    | Bootstrap Select plugin                 |

- **Visual design (from TEMPLATES.md screenshot reference):**
  Light grey page with centered content. A "Multi-Select #8 (Limit selection
  on groups)" heading sits above a single Bootstrap-styled multi-select
  dropdown widget. The dropdown is collapsed by default showing "Nothing
  selected". When opened, it reveals a scrollable checkbox list of US states
  organized under 4 optgroup headers (Group A, B, C, D), each with a
  different selection limit. The design is utilitarian — no decorative
  elements, no colors beyond the green accent.

- **Key differences from Chklmt (Multiselect 17):**
  Chklmt has a single GLOBAL limit of 7 (`data-max-options="7"` on the
  `<select>` element). Groupcap has per-group limits (`data-max-options`
  on each `<optgroup>` element) with different caps per group (2, 4, 7, 4).
  This means users can select up to 2 from Group A, up to 4 from Group B,
  etc. — the limits are independent per group. The structural layout and
  visual design are otherwise identical.

## Gherkin scenarios

### Scenario: Page renders with grouped multiselect widget
  Given the user navigates to the Groupcap page
  Then the heading "Multi-Select #8 (Limit selection on groups)" is visible
  And a multi-select dropdown button is visible showing "Nothing selected"

### Scenario: Dropdown opens showing grouped options
  Given the user clicks the multi-select dropdown button
  Then a dropdown panel appears with a search input
  And "Select All" and "Deselect All" buttons are visible
  And 4 optgroup headers are visible: Group A, Group B, Group C, Group D
  And each group header shows its selection limit
  And all 50 state options are visible with unchecked checkboxes

### Scenario: Selecting options within a group
  Given the dropdown is open
  When the user clicks "Alabama" in Group A
  Then the checkbox next to "Alabama" is checked
  And the dropdown button text updates to show "Alabama"
  And a green check mark appears next to "Alabama"

### Scenario: Group A limit enforcement (max 2)
  Given the dropdown is open
  And Group A has 2 items selected (Alabama and Alaska)
  When the user views Group A
  Then the remaining unchecked options in Group A (Arizona, Arkansas) are disabled
  And the "Select All" action for Group A is unavailable

### Scenario: Deselecting restores group capacity
  Given Group A has 2 items selected and 2 disabled
  When the user deselects "Alabama" from Group A
  Then "Alabama" is unchecked
  And "Arizona" and "Arkansas" in Group A become enabled again

### Scenario: Group B limit enforcement (max 4)
  Given the dropdown is open
  When the user selects 4 items from Group B (California, Colorado, Connecticut, Delaware)
  Then the remaining unchecked options in Group B are disabled
  But options in Group A, Group C, and Group D remain unaffected

### Scenario: Independent group limits
  Given Group A has 2 items selected (at its limit)
  And Group B has 4 items selected (at its limit)
  When the user views Group C
  Then all unchecked options in Group C remain enabled
  And the user can select up to 7 items from Group C

### Scenario: Search filters within groups
  Given the dropdown is open
  When the user types "New" in the search input
  Then only options containing "New" are visible (New Hampshire, New Jersey, New Mexico, New York)
  And the optgroup structure is preserved for visible results

### Scenario: Deselect All clears all groups
  Given items are selected across multiple groups
  When the user clicks "Deselect All"
  Then all checkboxes are unchecked
  And the dropdown button shows "Nothing selected"
  And all options in all groups are enabled

### Scenario: Button text reflects selections
  Given the dropdown is open
  When the user selects "Alabama", "California", "Kansas"
  Then the dropdown button text shows the selected items
  And the count reflects 3 total selections across 3 groups

## Verification checklist

- [ ] Page renders with centered heading and single `col-md-5` container
- [ ] Dropdown button shows "Nothing selected" by default
- [ ] Dropdown opens with search input, Select All/Deselect All, and grouped options
- [ ] 4 optgroups present with correct labels and limits (A:2, B:4, C:7, D:4)
- [ ] 50 US state options across 4 groups
- [ ] Per-group limit enforcement: selecting at-limit disables remaining unchecked in that group
- [ ] Deselecting re-enables disabled options in the same group
- [ ] Group limits are independent (Group A at limit doesn't affect Group B)
- [ ] Search filters options while preserving group structure
- [ ] Select All / Deselect All work correctly per-group and globally
- [ ] Button text updates to reflect current selections
- [ ] Green check marks (#8cba51) on selected items
- [ ] Roboto font, #efefef background, #b3b3b3 paragraph text
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` contains `groupcap.free.componentdock.com`
- [ ] `homepage` in package.json is `https://groupcap.free.componentdock.com`
