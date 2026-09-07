# Template: Tripselect (Multi-Select Form — Three Stacked Chosen Widgets with Selection Limit)

## Purpose

Tripselect is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 20"
free template (source: https://colorlib.com/wp/template/multiselect-20/),
built under a DIFFERENT name (**Tripselect**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Chosen jQuery plugin (`chosen.jquery.min.js` + jQuery 3.3.1 +
Bootstrap 4) rendered on a light-grey page: three stacked `col-md-5` centered
containers, each containing a `<select multiple>` element with 8 flat options
representing web-development categories. The page title is "Multi Select #10".
The design is minimal — a centered heading ("Multi-Select #10 (Limit to 5)")
above three colored multi-select widgets stacked vertically, each using a
different tag color palette.

**WHAT MAKES TRIPSELECT DISTINCT (signature behaviors):**

1. **Three stacked multi-select widgets.** Unlike Pickbag (Multiselect 19) which
   has a single widget, Tripselect presents THREE identical Chosen multi-select
   widgets stacked vertically in separate `col-md-5` centered rows. Each widget
   has the same 8 options but each is wrapped in a different color class:
   - Widget 1: `.color-1` — tag background `#e5e4cc` (warm beige)
   - Widget 2: `.color-2` — tag background `#c7f0db` (soft green)
   - Widget 3: `.color-3` — tag background `#d3f4ff` (light blue)
2. **Selection limit of 5.** The heading explicitly states "Limit to 5",
   indicating each widget should cap selections at 5 items. The original
   HTML does not enforce this in JavaScript, but the React implementation
   should honor the limit as a UX constraint.
3. **Flat option list — no groups.** Same 8 options as Multiselect 19: Design,
   HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd. No `<optgroup>`
   wrappers.
4. **Chosen plugin tag-style selection.** Same as Pickbag: selected items appear
   as individual tags/pills within a rounded container with soft shadow, search
   input embedded, "x" close button on each tag, dropdown below.
5. **Minimal single-section layout.** Full viewport page with `7rem` vertical
   padding, centered heading, three stacked widget rows. No navbar, no hero,
   no footer content beyond the Component Dock attribution.

## Naming

The ColorLib source name "Multiselect 20" is FORBIDDEN as the app name.
**Tripselect** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `tripselect` in any). Source slug
and preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 20" (page title: "Multi Select #10").
  Listed in TEMPLATES.md under **Bootstrap Multiselect (20)** (section header
  line 823; the item at line 844 — `wp/template/multiselect-20/`).
- **Preview URL — REACHABLE (via bootstrap sub-path):** the naive
  `https://preview.colorlib.com/theme/multiselect-20/` returns 404; the
  REAL preview is the bootstrap path
  `https://preview.colorlib.com/theme/bootstrap/multiselect-20/`
  (HTTP 200, `<title>Multi Select #10</title>`).
  Stylesheets: `css/chosen.css` (Chosen v1.8.7 plugin styling), `css/bootstrap.min.css`
  (Bootstrap 4), `css/style.css` (custom page styles), `fonts/icomoon/style.css`
  (icon font — replace with lucide). Scripts: `js/jquery-3.3.1.min.js`,
  `js/popper.min.js`, `js/bootstrap.min.js`, `js/chosen.jquery.min.js`,
  `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg`
  shows three stacked multi-select widgets on a light grey background, each
  with a different tag color (beige, green, blue), centered under a single heading.
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
  - Widget spacing: `mb-3` between rows (Bootstrap margin-bottom 1rem)

## Gherkin scenarios

### Scenario: Page renders with centered heading and three widgets

```gherkin
Given the user opens the Tripselect page
Then a centered heading "Multi-Select #10 (Limit to 5)" is visible
And three multi-select widgets are displayed in stacked rows
And each widget is centered in a col-md-5 column
```

### Scenario: Each widget shows placeholder text

```gherkin
Given the user opens the Tripselect page
Then each of the three widgets shows the placeholder text "Select Categories"
And no items are selected in any widget
```

### Scenario: Opening a widget shows dropdown with 8 options

```gherkin
Given the user clicks the first multi-select widget
Then a dropdown list opens below the widget
And the dropdown contains exactly 8 options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
And each option is clickable to select
```

### Scenario: Selecting items creates colored tags

```gherkin
Given the user clicks the first widget
When the user clicks "Design"
Then a tag "Design" appears in the container with an "x" close button
And the tag has a beige background (#e5e4cc)
When the user clicks "HTML5"
Then a second tag "HTML5" appears next to the first
```

### Scenario: Each widget has distinct tag colors

```gherkin
Given the user selects "Design" in widget 1
And selects "Design" in widget 2
And selects "Design" in widget 3
Then widget 1 shows the tag in beige (#e5e4cc)
And widget 2 shows the tag in green (#c7f0db)
And widget 3 shows the tag in blue (#d3f4ff)
```

### Scenario: Selection limit of 5 is enforced

```gherkin
Given the user has selected 5 items in the first widget
When the user tries to select a 6th item
Then the 6th item is not added as a tag
And the 5 existing tags remain visible
```

### Scenario: Deselecting items via tag close button

```gherkin
Given the user has selected "Design" and "HTML5" in the first widget
When the user clicks the "x" on the "Design" tag
Then the "Design" tag is removed from the container
And "Design" reappears in the dropdown option list
```

### Scenario: Search filtering within a widget

```gherkin
Given the user clicks the first multi-select widget
When the user types "boot" in the search input
Then only options matching "boot" are shown in the dropdown (Bootstrap)
And non-matching options are hidden
```

### Scenario: Placeholder reappears when all items deselected

```gherkin
Given the user has selected "Design" in the first widget
When the user clicks the "x" on the "Design" tag
Then the tag container is empty
And the placeholder text "Select Categories" reappears
```

### Scenario: Widgets are independent

```gherkin
Given the user selects "Design" in widget 1
When the user selects "Design" in widget 2
Then widget 1 still shows "Design" selected
And widget 2 also shows "Design" selected
And the selections do not interfere with each other
```

### Scenario: Responsive layout — narrow viewport

```gherkin
Given the user opens the Tripselect page on a viewport narrower than 768px
Then the heading remains centered
And the three widgets stack vertically at full width
And each widget remains functional
```

### Scenario: Component Dock footer link

```gherkin
Given the user opens the Tripselect page
Then a footer link to "https://www.componentdock.com/" is visible
And the link text includes "Component Dock"
```

## Verification checklist

- [ ] Three multi-select widgets render in stacked rows
- [ ] Each widget has 8 options (no groups, no missing items)
- [ ] Selecting items creates visible tags/chips with close buttons
- [ ] Widget 1 tags are beige (#e5e4cc), widget 2 green (#c7f0db), widget 3 blue (#d3f4ff)
- [ ] Selection limit of 5 is enforced per widget
- [ ] Deselecting via close button removes the tag and restores the option
- [ ] Placeholder text appears when nothing is selected in a widget
- [ ] Search input filters the dropdown options in real time
- [ ] Layout: centered heading, three col-md-5 rows with mb-3 spacing
- [ ] Background is #efefef, heading is 20px Roboto
- [ ] Chosen-style rounded container (border-radius 4px, soft shadow)
- [ ] Responsive: widgets stack at full width on mobile
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds with no errors
