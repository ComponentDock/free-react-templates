# Template: Selectify (Form — Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect 04" — a free custom select dropdown menu template.

- **Source**: https://colorlib.com/wp/template/multiselect-04/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-04/
- **Description**: Fully responsive custom select dropdown menu. Minimal centered layout with a heading and a multiselect dropdown for selecting cities from a list.
- **Stack**: React 19 + Tailwind CSS 4 + TypeScript (Vite)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Lato", Arial, sans-serif` | Body, headings |
| Font weights | 300 (light), 400 (normal), 700 (bold) | Via Google Fonts |
| Body font size | 16px, line-height 1.8 | Base typography |
| Brand / accent color | `#f30e5c` (pink-red) | Links, `.bg-primary`, selectpicker checkmarks |
| Body text color | `gray` | Paragraph text |
| Heading color | `#000` (black) | h1–h5 |
| Background | `#fff` (white) | Page background |
| Section padding | `7em 0` | `.ftco-section` vertical rhythm |
| Heading font size | 28px | `.heading-section` |
| Button radius | Default Bootstrap (`.btn` has `border-radius: 0.25rem`) | N/A — no buttons in this template |
| Dropdown styling | Bootstrap-select `selectpicker` with custom checkmark color `#f30e5c` | Multiselect component |

### Visual design notes (from TEMPLATES.md screenshot reference)

- Clean white background, vertically and horizontally centered content.
- Single heading "Multiselect #04" in bold black text, 28px.
- A single multiselect dropdown (Bootstrap-select plugin) below the heading.
- Dropdown shows a "Nothing selected" placeholder with a caret icon.
- When opened, displays a list of city options (Toronto, Bucharest, Paris) with checkboxes.
- Selected items show a pink-red checkmark (`#f30e5c`).
- Minimal, no navigation, no footer, no images — pure form component showcase.
- Responsive: dropdown column adjusts across breakpoints (col-md-6 col-lg-4).

## Requirements

### Requirement: Page renders with heading and dropdown

**Scenario: Initial page load**
- Given the user visits the Selectify page
- Then a centered heading "Selectify" is visible
- Then a multiselect dropdown is visible below the heading
- Then the dropdown shows a placeholder text (e.g. "Nothing selected")
- Then a caret/chevron icon is visible in the dropdown

**Scenario: Responsive layout**
- Given the user views the page on a mobile viewport (< 768px)
- Then the heading is centered and full-width
- Then the dropdown is centered and occupies available width
- Given the user views the page on a desktop viewport (>= 992px)
- Then the heading is centered
- Then the dropdown is narrower (approximately 1/3 of container width)

### Requirement: Multiselect dropdown functionality

**Scenario: Opening the dropdown**
- Given the user clicks on the dropdown
- Then a list of city options appears
- Then each option has a checkbox indicator

**Scenario: Selecting a single option**
- Given the dropdown is open
- When the user clicks "Toronto"
- Then "Toronto" is marked as selected (checkbox checked, pink-red checkmark)
- Then the dropdown label updates to show "Toronto"
- Then the dropdown remains open for additional selections

**Scenario: Selecting multiple options**
- Given "Toronto" is already selected
- When the user clicks "Bucharest"
- Then both "Toronto" and "Bucharest" are marked as selected
- Then the dropdown label shows "Toronto, Bucharest" (or similar count)

**Scenario: Deselecting an option**
- Given "Toronto" is selected
- When the user clicks "Toronto" again
- Then "Toronto" is deselected
- Then the checkbox is unchecked

**Scenario: Closing the dropdown**
- Given the dropdown is open
- When the user clicks outside the dropdown
- Then the dropdown closes
- Then selected items remain visible in the collapsed label

### Requirement: Accessibility

**Scenario: Keyboard navigation**
- Given the user focuses the dropdown via keyboard (Tab)
- Then a focus ring or visual indicator is visible
- When the user presses Enter or Space
- Then the dropdown opens
- When the user presses ArrowDown/ArrowUp
- Then focus moves between options
- When the user presses Enter on an option
- Then the option is toggled (selected/deselected)
- When the user presses Escape
- Then the dropdown closes

**Scenario: Screen reader support**
- Given the dropdown is rendered
- Then the dropdown has an accessible label (e.g. `aria-label="Select cities"`)
- Then each option has an accessible role and state

## Verification checklist

- [ ] Heading is centered, 28px, black, "Lato" font
- [ ] White page background
- [ ] Brand color `#f30e5c` used for checkmarks and accent
- [ ] Multiselect dropdown allows selecting multiple cities
- [ ] Placeholder text shown when nothing selected
- [ ] Checkboxes toggle on click
- [ ] Dropdown closes on outside click
- [ ] Responsive: centered on mobile, narrower on desktop
- [ ] Keyboard accessible: Tab focus, Enter/Space to open, Arrow keys to navigate
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `selectify.free.componentdock.com`
- [ ] `package.json` homepage is `https://selectify.free.componentdock.com`
- [ ] `npm install` run at root to register workspace in lockfile
- [ ] Tests pass at 100% coverage
