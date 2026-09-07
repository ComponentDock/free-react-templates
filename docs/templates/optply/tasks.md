# Optply (ColorLib Multiselect 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-optply`. Recreation name: **Optply** (NEW name —
> the ColorLib source keeps its name "Multiselect 15").

## Source mapping

- **ColorLib item:** "Multiselect 15" (TEMPLATES.md line 839; section
  "## Multi-Select (7)" at line 835). The
  `wp/template/multiselect-15/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/multiselect-15/
- **Preview URL — REACHABLE (verified by direct fetch):** the naive
  `https://preview.colorlib.com/theme/multiselect-15/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-15/`**
  (HTTP 200, `<title>Multi Select #5</title>`).
- **Preview CSS:** `css/jquery.multiselect.css` (plugin styling),
  `css/bootstrap.min.css` (Bootstrap 4), `css/style.css` (custom page
  styles), `fonts/icomoon/style.css` (icon font — replace with lucide).
  Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/jquery.multiselect.js`, `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.

## Reference research (done — do not redo)

### Screenshot (`multiselect-15.jpg`)

The screenshot was not directly viewable (image/avif format). However,
the live DOM fetch confirms the visual design: light grey `#efefef`
full-page background; centered "Multi-Select #5" heading (20px, dark
text); below it a moderate-width column (`col-md-5`, wider than
Multiselect 14's `col-md-3`) containing the multiselect widget (white
button with placeholder text and a down-chevron). The overall aesthetic
is minimal, clean, utility-focused — a component demo page rather than a
full landing page. **No imagery anywhere — NO picsum placeholders needed**
(solid-color page, form-only).

### Design tokens (from fetched CSS)

Body font: Roboto 300/400. Page bg: `#efefef`. Text: `#b3b3b3` (paragraphs),
`#333` (headings/selected). Muted: `#aaa` (button placeholder, borders,
select-all). Button: white bg, border `1px solid #aaa`, height 40px,
radius 4px, shadow `0 1px 1px 0 rgba(0,0,0,0.1)` → hover
`0 2px 10px 0 rgba(0,0,0,0.1)`. Dropdown: white bg, radius 4px, shadow
`0 15px 30px 0 rgba(0,0,0,0.1)`, padding 20px. Option hover bg:
`#f7f7f7`. Option selected bg: `#e1f2fb` (light blue). Select-all:
`#aaaaaa`, uppercase, 11px, hover `#000`. Search border-bottom:
`1px solid #efefef`.

### Key difference from Multiselect 14 (Picklist)

The only structural difference is the column width: Multiselect 14 uses
`col-md-3` (narrow) while Multiselect 15 uses `col-md-5` (moderate).
Everything else — fonts, colors, shadows, widget behavior, options — is
identical. The heading text changes from "Multi-Select #4" to
"Multi-Select #5".

## Tasks (implementation order)

1. **Scaffold the app** — copy the Picklist app as boilerplate (closest
   sibling — same widget, same tokens, same page structure). Rename package
   to `@free-react-templates/optply`. Rename all internal references from
   picklist → optply. Add to workspaces. Run `npm install`.
2. **Adjust layout** — change the column width from col-md-3 to col-md-5.
   Update the heading text from "Multi-Select #4" to "Multi-Select #5".
3. **Verify Tailwind theme tokens** — confirm `@theme` block in
   `src/index.css` has the same brand colors, font family, border-radius,
   shadows as the original CSS (should already match from Picklist copy).
4. **Verify all component behavior** — since this is a near-identical
   sibling of Picklist, verify:
   - Trigger button renders correctly
   - Dropdown opens/closes on button click
   - Checkboxes toggle on click
   - Select-all/deselect-all works
   - Search filters options
   - Button text updates with count
   - 50 US state options present
   - Accessibility attributes present
5. **Update tests** — adjust any tests that hardcode "Multi-Select #4" or
   col-md-3 references to use "Multi-Select #5" and col-md-5.
6. **Add Component Dock footer** — attribution footer linking
   https://www.componentdock.com/ (should already exist from Picklist copy).
7. **Verify** — `npm run verify:app -- optply` (typecheck + lint +
   100% coverage tests + build)
8. **Commit** — `feat: add Optply (ColorLib Multiselect 15) template`

## Design notes

- The original uses jQuery multiselect plugin which transforms a native
  `<select multiple>` into a styled checkbox dropdown. The recreation
  implements this as a React component (no jQuery dependency).
- The 50 US state options should be preserved as-is (AL through WY).
- The "3col active" class on the select suggests a 3-column checkbox
  layout — implement this as a CSS grid option (checkboxes in 3 columns
  on wider dropdowns).
- Keep the design minimal — no images, no decorative elements, just the
  form widget on a grey background.
- Use `cn()` from packages/ui for class composition throughout.
- Since Optply is nearly identical to Picklist, the implementer should
  consider whether to share the MultiSelect component or duplicate it.
  Duplicating is safer for independence (each template ships standalone);
  sharing creates a coupling that complicates future changes to either.
