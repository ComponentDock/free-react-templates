# Selkit (ColorLib Multiselect 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-selkit`. Recreation name: **Selkit** (NEW name —
> the ColorLib source keeps its name "Multiselect 16").

## Source mapping

- **ColorLib item:** "Multiselect 16" (TEMPLATES.md line 840; section
  "## Multi-Select (7)" at line 835). The
  `wp/template/multiselect-16/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/multiselect-16/
- **Preview URL — REACHABLE (verified by direct fetch):** the naive
  `https://preview.colorlib.com/theme/multiselect-16/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-16/`**
  (HTTP 200, `<title>Multi Select #6</title>`).
- **Preview CSS:** `css/bootstrap-select.min.css` (bootstrap-select v1.13.9
  plugin styling), `css/bootstrap.min.css` (Bootstrap 4), `css/style.css`
  (custom page styles), `fonts/icomoon/style.css` (icon font — replace
  with lucide). Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/bootstrap-select.min.js`, `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.

## Reference research (done — do not redo)

### Screenshot (`multiselect-16.jpg`)

The screenshot was not directly viewable (image/avif format). However,
the live DOM fetch confirms the visual design: light grey `#efefef`
full-page background; centered "Multi-Select #6" heading (20px, dark
text); below it a moderate-width column (`col-md-5`) containing the
multiselect widget (Bootstrap-styled button with "Nothing selected"
placeholder and a caret). The dropdown shows a search input, Select All /
Deselect All buttons, and checkboxes with check marks. The overall
aesthetic is minimal, clean, utility-focused — a component demo page
rather than a full landing page. **No imagery anywhere — NO picsum
placeholders needed** (solid-color page, form-only).

### Design tokens (from fetched CSS)

Body font: Roboto 300/400. Page bg: `#efefef`. Text: `#b3b3b3` (paragraphs),
`#333` (headings). Button placeholder: `#999`. Button: Bootstrap
form-control styling (white bg, standard border, radius, height).
Dropdown: Bootstrap .dropdown-menu styling. Check-mark: 12px font-size.
Search: `.bs-searchbox .form-control`. Action buttons: `.bs-actionsbox`
with btn-group.

### Key difference from Multiselect 14/15 (Picklist/Multiform)

The primary difference is the PLUGIN: Multiselect 16 uses **bootstrap-select**
(v1.13.9) instead of jquery.multiselect. This changes:
- Widget appearance: Bootstrap-styled button with caret (not custom white
  button with "0 selected")
- Dropdown layout: search at top, Select All/Deselect All action buttons,
  checkboxes with check marks on the right
- Placeholder text: "Nothing selected" (not "0 selected")
- Selected items shown as comma-separated names in button (not count)
- The `select` element uses class `selectpicker form-control` (not
  `3col active form-control`)

## Tasks (implementation order)

1. **Scaffold the app** — copy a minimal form template as boilerplate.
   Rename package to `@free-react-templates/selkit`. Add to workspaces.
   Run `npm install`.
2. **Set up Tailwind theme tokens** — define `@theme` block in
   `src/index.css` with brand colors, font family, border-radius,
   shadows extracted from the original CSS.
3. **Build the page shell** — light grey `#efefef` page, centered
   heading "Multi-Select #6" (20px), moderate-width column layout
   (col-md-5 equivalent, ~42% on desktop, full-width on mobile).
4. **Implement multi-select widget (core)** — build a custom
   `<MultiSelect>` component using the Bootstrap Select pattern:
   - Trigger button (Bootstrap form-control styled, "Nothing selected"
     placeholder, caret icon)
   - Dropdown panel with search input at top
   - "Select All" / "Deselect All" action buttons
   - Checkbox list of 50 US state options with check marks
   - Selection state management (checked items array)
   - Button text updates with selected item names (comma-separated)
5. **Add search filtering** — search input in dropdown, filters checkbox
   list by substring match
6. **Add check marks** — display check-mark icon on the right side of
   selected options (use lucide-react Check icon)
7. **Add accessibility** — `aria-haspopup`, `aria-expanded` on trigger,
   `htmlFor` on labels, `aria-label` on search input, focus-visible
   rings on all interactive elements
8. **Add responsive behavior** — column full-width on mobile
   (≤768px), proper padding, no overflow
9. **Add Component Dock footer** — attribution footer linking
   https://www.componentdock.com/
10. **Write tests** — Vitest + Testing Library for all components:
    - MultiSelect renders trigger button and dropdown
    - Checkboxes toggle on click with check marks
    - Select All / Deselect All works
    - Search filters options
    - Button text updates with selected names
    - Dropdown closes on outside click
    - Accessibility attributes present
    - Responsive layout at 768px
11. **Verify** — `npm run verify:app -- selkit` (typecheck + lint +
    100% coverage tests + build)
12. **Commit** — `feat: add Selkit (ColorLib Multiselect 16) template`

## Design notes

- The original uses Bootstrap Select plugin which transforms a native
  `<select multiple>` into a styled checkbox dropdown. The recreation
  implements this as a React component (no jQuery/Bootstrap Select
  dependency).
- The 50 US state options should be preserved as-is (AL through WY).
- The show-tick mode displays check marks on selected items — use
  lucide-react `Check` icon for this.
- The search input appears at the top of the dropdown (not inside the
  button). The Select All / Deselect All buttons are in a btn-group
  below the search.
- Keep the design minimal — no images, no decorative elements, just the
  form widget on a grey background.
- Use `cn()` from packages/ui for class composition throughout.
- Since Selkit is similar to Picklist/Multiform but uses a different
  plugin pattern, implement it as an independent component (do not
  share the MultiSelect component with Picklist).
