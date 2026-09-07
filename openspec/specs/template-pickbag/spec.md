# Template: Pickbag (Multi-Select Form — Chosen Plugin Tag-Style)

## Purpose

Pickbag is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 19"
free template (source: https://colorlib.com/wp/template/multiselect-19/),
built under a DIFFERENT name (**Pickbag**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Chosen jQuery plugin (`chosen.jquery.min.js` + jQuery 3.3.1 +
Bootstrap 4) rendered on a light-grey page: a centered `col-md-5` container
with a single `<select multiple>` element containing 8 flat options (no
optgroups) representing web-development categories. The page title is
"Multi Select #9". The design is minimal — a centered heading
("Multi-Select #9") and a functional multi-select tag/chip widget that shows
selected items as colored tags in a rounded container with a search input.

**WHAT MAKES PICKBAG DISTINCT (signature behaviors):**

1. **Chosen plugin tag-style selection.** Unlike Groupcap (Multiselect 18)
   which uses bootstrap-select with a checkbox dropdown, Pickbag uses the
   Chosen jQuery plugin that transforms `<select multiple>` into a tag/chip
   interface:
   - Selected items appear as individual tags (pills/chips) within a rounded
     container with soft shadow (`box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)`).
   - A search input is embedded inside the tag container for filtering options.
   - Tags have an "x" close button (`.search-choice-close`) to deselect.
   - A dropdown appears below the container with a scrollable list of
     unselected options (no checkboxes — click to select, click again to
     deselect).
   - The container has `border-radius: 4px` and no visible border.
2. **Flat option list — no groups.** The 8 options (Design, HTML5, CSS3,
   jQuery, BS4, Bootstrap, WordPress, FrontEnd) have no `<optgroup>`
   wrappers. This is a simpler, single-level selection compared to Groupcap's
   4-group per-limit structure.
3. **Colored tag backgrounds.** The original CSS defines `.color-1`
   (`#e5e4cc` warm beige), `.color-2` (`#c7f0db` soft green), and `.color-3`
   (`#d3f4ff` light blue) tag background colors. In the default (no
   `.color-*` class), tags use the default Chosen plugin styling. We replicate
   this with a cycling color palette in Tailwind.
4. **Minimal single-section layout.** The entire page is a single content
   area with generous vertical padding (`7rem 0`), centered heading, and a
   moderate-width `col-md-5` column containing the multi-select widget. No
   navbar, no hero, no footer content (beyond the Component Dock attribution).
5. **Placeholder text.** The `<select>` has `data-placeholder="Select
   Categories"`, which the Chosen plugin renders as placeholder text in the
   search input when no items are selected.

## Naming

The ColorLib source name "Multiselect 19" is FORBIDDEN as the app name.
**Pickbag** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `pickbag` in any). Source slug
and preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 19" (page title: "Multi Select #9").
  Listed in TEMPLATES.md under **Bootstrap Multiselect (20)** (section header
  line 835; the item at line 843 — `wp/template/multiselect-19/`).
- **Preview URL — REACHABLE (via bootstrap sub-path):** the naive
  `https://preview.colorlib.com/theme/multiselect-19/` returns 404; the
  REAL preview is the bootstrap path
  `https://preview.colorlib.com/theme/bootstrap/multiselect-19/`
  (HTTP 200, `<title>Multi Select #9</title>`).
  Stylesheets: `css/chosen.css` (Chosen v1.8.7 plugin styling), `css/bootstrap.min.css`
  (Bootstrap 4), `css/style.css` (custom page styles), `fonts/icomoon/style.css`
  (icon font — replace with lucide). Scripts: `js/jquery-3.3.1.min.js`,
  `js/popper.min.js`, `js/bootstrap.min.js`, `js/chosen.jquery.min.js`,
  `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.
- **Design tokens (extracted from preview CSS):**
  - Body font: `"Roboto", sans-serif` (weights 300, 400)
  - Body background: `#efefef` (light grey)
  - Paragraph text: `#b3b3b3` (medium grey), font-weight 300
  - Heading font: same Roboto stack, h2 font-size `20px`
  - Content padding: `7rem 0`
  - Links: transition 0.3s, no underline
  - Chosen container: `border-radius: 4px`, no visible border
  - Chosen choices: `box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)`, padding 7px
  - Chosen dropdown: `border-radius: 4px`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`
  - Tag color-1: `#e5e4cc` (warm beige)
  - Tag color-2: `#c7f0db` (soft green)
  - Tag color-3: `#d3f4ff` (light blue)
  - Search input height: 32px, font-size 14px
  - Tag close button: positioned top 9px, right 8px

## Gherkin scenarios

### Scenario: Page renders with centered heading and select widget

```gherkin
Given the user opens the Pickbag page
Then a centered heading "Multi-Select #9" is visible
And a multi-select widget is displayed in a centered container
And the placeholder text "Select Categories" is shown in the widget
```

### Scenario: Dropdown opens and shows all 8 options

```gherkin
Given the user clicks the multi-select widget
Then a dropdown list opens below the widget
And the dropdown contains exactly 8 options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
And each option is clickable to select
```

### Scenario: Selecting items creates colored tags

```gherkin
Given the user clicks the multi-select widget
When the user clicks "Design"
Then a tag "Design" appears in the container with an "x" close button
And the tag has a colored background from the cycling palette
When the user clicks "HTML5"
Then a second tag "HTML5" appears next to the first
And both tags are visible with distinct backgrounds
```

### Scenario: Deselecting items via tag close button

```gherkin
Given the user has selected "Design" and "HTML5"
And tags for both are visible in the container
When the user clicks the "x" on the "Design" tag
Then the "Design" tag is removed from the container
And "Design" reappears in the dropdown option list
```

### Scenario: Search filtering within the widget

```gherkin
Given the user clicks the multi-select widget
When the user types "boot" in the search input
Then only options matching "boot" are shown in the dropdown (Bootstrap)
And non-matching options (Design, HTML5, CSS3, etc.) are hidden
```

### Scenario: Placeholder reappears when all items deselected

```gherkin
Given the user has selected "Design"
And a "Design" tag is visible
When the user clicks the "x" on the "Design" tag
Then the tag container is empty
And the placeholder text "Select Categories" reappears
```

### Scenario: Responsive layout — narrow viewport

```gherkin
Given the user opens the Pickbag page on a viewport narrower than 768px
Then the heading remains centered
And the select widget remains functional and full-width within its column
```

### Scenario: Component Dock footer link

```gherkin
Given the user opens the Pickbag page
Then a footer link to "https://www.componentdock.com/" is visible
And the link text includes "Component Dock"
```

## Verification checklist

- [ ] All 8 options render in the dropdown (no groups, no missing items)
- [ ] Selecting items creates visible tags/chips with close buttons
- [ ] Deselecting via close button removes the tag and restores the option
- [ ] Placeholder text appears when nothing is selected
- [ ] Search input filters the dropdown options in real time
- [ ] Tag colors cycle through the palette (beige, green, blue)
- [ ] Layout: centered heading, col-md-5 container, 7rem vertical padding
- [ ] Background is `#efefef`, heading is 20px Roboto
- [ ] Chosen-style rounded container (border-radius 4px, soft shadow)
- [ ] Responsive: works on mobile viewports (stacked layout)
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds with no errors
