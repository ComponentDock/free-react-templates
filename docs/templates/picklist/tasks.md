# Picklist (ColorLib Multiselect 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-picklist`. Recreation name: **Picklist** (NEW name —
> the ColorLib source keeps its name "Multiselect 14").

## Source mapping

- **ColorLib item:** "Multiselect 14" (TEMPLATES.md line 838; section
  "## Multi-Select (7)" at line 835). The
  `wp/template/multiselect-14/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/multiselect-14/
- **Preview URL — REACHABLE (verified by direct fetch):** the naive
  `https://preview.colorlib.com/theme/multiselect-14/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-14/`**
  (HTTP 200, 18,443 bytes, `<title>Multi Select #4</title>`).
- **Preview CSS:** `css/jquery.multiselect.css` (2,669 bytes — plugin styling),
  `css/bootstrap.min.css` (Bootstrap 4), `css/style.css` (custom page styles),
  `fonts/icomoon/style.css` (icon font — replace with lucide, do not ship).
  Scripts: `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/jquery.multiselect.js`, `js/main.js`.
  Fonts: Google Fonts Roboto (300/400) + Poppins (300/400/500) +
  Source Serif Pro (400/600) loaded via Cloudflare font optimization.

## Reference research (done — do not redo)

### Screenshot (`multiselect-14.jpg`)

Viewed in browser — light grey `#efefef` full-page background; centered
"Multi-Select #4" heading (20px, dark text); below it a narrow column
containing the multiselect widget (white button with placeholder text and
a down-chevron). The overall aesthetic is minimal, clean, utility-focused
— a component demo page rather than a full landing page. **No imagery
anywhere — NO picsum placeholders needed** (solid-color page, form-only).

### Design tokens (from fetched CSS)

Body font: Roboto 300/400. Page bg: `#efefef`. Text: `#b3b3b3` (paragraphs),
`#333` (headings/selected). Muted: `#aaa` (button placeholder, borders,
select-all). Button: white bg, border `1px solid #aaa`, height 40px,
radius 4px, shadow `0 1px 1px 0 rgba(0,0,0,0.1)` → hover
`0 2px 10px 0 rgba(0,0,0,0.1)`. Dropdown: white bg, radius 4px, shadow
`0 15px 30px 0 rgba(0,0,0,0.1)`, padding 20px. Option hover/selected bg:
`#efefef`. Select-all: `#aaaaaa`, uppercase, 11px, hover `#000`.

## Tasks (implementation order)

1. **Scaffold the app** — copy simplest existing app as boilerplate
   (e.g. a minimal form template). Rename package to
   `@free-react-templates/picklist`. Add to workspaces. Run `npm install`.
2. **Set up Tailwind theme tokens** — define `@theme` block in
   `src/index.css` with brand colors, font family, border-radius,
   shadows extracted from the original CSS.
3. **Build the page shell** — light grey `#efefef` page, centered
   heading "Multi-Select #4" (20px), narrow column layout
   (max-width ~25% on desktop, full-width on mobile).
4. **Implement multi-select widget (core)** — build a custom
   `<MultiSelect>` component:
   - Trigger button (white bg, border, 40px height, 4px radius, shadow)
   - Dropdown panel (white bg, shadow, 4px radius, 20px padding)
   - Checkbox list of 50 US state options
   - Selection state management (checked items array)
   - Button text updates with count ("0 selected" → "3 selected")
5. **Add select-all / deselect-all** — "select all" link in the
   dropdown header (uppercase, 11px, `#aaaaaa`, hover `#000`)
6. **Add search filtering** — search input in dropdown (border-bottom
   `1px solid #efefef`), filters checkbox list by substring match
7. **Add accessibility** — `aria-haspopup`, `aria-expanded` on trigger,
   `htmlFor` on labels, `aria-label` on search input, focus-visible
   rings on all interactive elements
8. **Add responsive behavior** — column full-width on mobile
   (≤768px), proper padding, no overflow
9. **Add Component Dock footer** — attribution footer linking
   https://www.componentdock.com/
10. **Write tests** — Vitest + Testing Library for all components:
    - MultiSelect renders trigger button and dropdown
    - Checkboxes toggle on click
    - Select-all/deselect-all works
    - Search filters options
    - Button text updates with selection count
    - Dropdown closes on outside click
    - Accessibility attributes present
    - Responsive layout at 768px
11. **Verify** — `npm run verify:app -- picklist` (typecheck + lint +
    100% coverage tests + build)
12. **Commit** — `feat: add Picklist (ColorLib Multiselect 14) template`

## Design notes

- The original uses jQuery multiselect plugin which transforms a native
  `<select multiple>` into a styled checkbox dropdown. The recreation
  should implement this as a React component (no jQuery dependency).
- The 50 US state options should be preserved as-is (AL through WY).
- The "3col active" class on the select suggests a 3-column checkbox
  layout — implement this as a CSS grid option (checkboxes in 3 columns
  on wider dropdowns).
- Keep the design minimal — no images, no decorative elements, just the
  form widget on a grey background.
- Use `cn()` from packages/ui for class composition throughout.
