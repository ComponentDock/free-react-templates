# Optique (ColorLib Multiselect 09) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-optique`. Recreation name: **Optique** (NEW name —
> the ColorLib source keeps its name "Multiselect 09").

## Source mapping

- **ColorLib item:** "Multiselect 09" (TEMPLATES.md line 833; section
  "Bootstrap Multiselect"). The `wp/template/multiselect-09/` slug
  appears once in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/multiselect-09/
- **Preview URL — REACHABLE (verified 2026-09-07):**
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-09/`**
  (HTTP 200, 4,097 bytes, `<title>Multiselect 09</title>`).
  **Note:** the naive URL `https://preview.colorlib.com/theme/multiselect-09/`
  returns 404 — the correct path includes `/bootstrap/` segment.
- **Preview CSS:** `css/style.css` — custom styles on Bootstrap 4.3.1 +
  Select2 4.0.4. Key custom rules for dark theme treatment.
- **Preview HTML:** Single section `.ftco-section` with container, heading
  "Multiselect #09", and a `<select class="js-select2" multiple="multiple">`
  with 13 options.
- **Dependencies in source:** jQuery, Popper.js, Select2 4.0.4 (CDN),
  Font Awesome 4.7 (CDN). For recreation: use React multiselect (custom
  or react-select) instead of jQuery Select2. Replace FA with lucide.
- **Fonts:** Lato 300/400/700 via Cloudflare CDN → **Google Fonts `<link>`**.

## Reference research (done — do not redo)

### Screenshot (`multiselect-09.jpg`, 1200×972 AVIF)

The TEMPLATES.md row embeds the screenshot. Visual description from
CSS analysis and HTML structure: dark gray `#343434` page background,
centered white heading "Multiselect #09" in 28px Lato, below it a dark-
themed multi-select dropdown with semi-transparent black selection area,
gold `#f6c523` accent pills for selected items, and a black dropdown
menu with checkbox-style options. Minimal, component-demo aesthetic.
**No imagery — NO picsum placeholders needed** (solid-color page,
no photos).

### Design tokens (live stylesheet + rendered page, verified 2026-09-07)

| Token               | Value                                 | Use                                                                        |
| ------------------- | ------------------------------------- | -------------------------------------------------------------------------- |
| Page bg             | SOLID `#343434`                       | No photo/gradient; section padding `7em 0`                                 |
| Brand / accent      | `#f6c523`                             | Links, selected pills, checkbox fill, clear button — the ONLY accent color |
| Dropdown selection  | `rgba(0, 0, 0, 0.8)`                  | Semi-transparent black background for the Select2 selection area           |
| Dropdown menu       | `#000`                                | Solid black background when dropdown is open                               |
| Body text           | `gray`                                | Default body text color                                                    |
| Heading             | `#fff` white, 28px weight 400         | `.heading-section` — centered                                              |
| Search text         | `rgba(255, 255, 255, 0.8)`            | Text in the dropdown search/input area                                     |
| Checkbox border     | `rgba(255, 255, 255, 0.18)`           | 2px solid, 4px radius — unchecked state                                    |
| Checkbox selected   | bg `#f6c523`, checkmark `#000`        | Gold fill with black checkmark glyph                                       |
| Selected option row | bg `#000`, text `#f6c523`             | Black row background with gold text when option is selected                |
| Pill                | bg `#f6c523`, text `#000`, 15px       | Padding 2px 10px, no border; remove × in black                             |
| Clear button        | color `#f6c523`                       | Gold × to clear all selections                                             |
| Font                | 'Lato' 300/400/700                    | Google Fonts `<link>`; base 16px/1.8                                       |
| Shadow              | `0px 3px 22px -15px rgba(0,0,0,0.63)` | Applied to selection area and open dropdown menu                           |
| Border radius       | `4px`                                 | Dropdown menu and checkbox corners                                         |
| Transition          | `0.3s all ease`                       | Links, selections, checkbox state transitions                              |
| Section padding     | `7em 0`                               | `.ftco-section`                                                            |

Unused in the source (skip): jQuery (replace with React state), Popper.js
(not needed for custom dropdown), Font Awesome (replace with lucide),
Bootstrap grid (use Tailwind), Select2 library (replace with React
multiselect component).

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph (Font Awesome)     | Recreation     |
| ------------------------------- | -------------- |
| `\f00c` (checkmark in checkbox) | lucide `Check` |
| `×` (remove pill button)        | lucide `X`     |

### Picsum placeholder plan

**NONE.** The template has a SOLID dark gray page background (`#343434`)
and zero photos — it is a pure component demo. Everything is CSS + icons.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/optique` from the simplest existing app
       (`cp -r apps/<simplest> apps/optique`), rename package to
       `@free-react-templates/optique`, add Lato 300/400/700 Google
       Fonts `<link>` in index.html, set `public/CNAME` =
       `optique.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): MultiselectWidget (initial state with
       13 options, no pre-selections, dark selection area), DropdownMenu
       (opens/closes, shows options with checkboxes, hover states),
       OptionCheckbox (unchecked border, selected gold fill + checkmark),
       SelectedPills (gold pills appear for selected items, remove via ×),
       ClearAll (clear button removes all selections), Accessibility
       (keyboard navigation, aria-selected, focus-visible), Footer
       (Component Dock credit), App (landmarks, document title "Optique
       — Dark Multiselect Dropdown").
3. [ ] Layout shell: solid dark gray `#343434` page (`bg-[#343434]`),
       section padding `7em 0`, centered container with heading
       "Multiselect #09" (28px, white, Lato weight 400).
4. [ ] Multiselect widget: dark-themed select area with semi-transparent
       black background `rgba(0, 0, 0, 0.8)`, 2px transparent border,
       box shadow, placeholder text. Implement as a custom React
       multiselect (NOT jQuery Select2) with controlled state.
5. [ ] Dropdown menu: opens below selection area, solid black background,
       4px radius, same shadow, lists 13 options (Option1–Option13)
       with custom checkboxes (20×20px, 4px radius, 2px border).
6. [ ] Checkbox interaction: unchecked = transparent bg + rgba border;
       selected = gold `#f6c523` fill + lucide Check icon; row bg
       turns black, text turns gold; 0.3s transition.
7. [ ] Selected pills: gold `#f6c523` pills in selection area (bg gold,
       text black, 15px, padding 2px 10px) with × remove button.
       Clear button to deselect all.
8. [ ] Accessibility: keyboard navigation (Tab, Enter, Space, Arrows),
       aria-selected on options, selection count announcement,
       focus-visible rings.
9. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
10. [ ] Run `npm run verify:app -- optique` (typecheck → lint → vitest
        100% → build) and fix until green.
11. [ ] Open PR `feat/template-optique` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/bootstrap/` path),
        token list (dark `#343434`, gold `#f6c523`, Lato, shadow,
        4px radius), and what differs (renamed "Optique", Lato via
        Google Fonts, lucide icons replacing FA, React multiselect
        replacing jQuery Select2, accessible semantics + focus rings,
        Component Dock footer).
12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 833 `[x]` + surge
        URL (`https://optique.free.componentdock.com`), `npm run
    readme:status`, push.
