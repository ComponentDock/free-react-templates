# Shuttle (ColorLib Multiselect 01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shuttle`. Recreation name: **Shuttle** (NEW name
> — the ColorLib source keeps its name "Multiselect 01").

## Source mapping

- **ColorLib item:** "Multiselect 01" (TEMPLATES.md line 825; section
  "## Bootstrap Multiselect (20)" at line 823). The
  `wp/template/multiselect-01/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/multiselect-01/
- **Preview URL — REACHABLE via alternative path (verified 2026-09-06):**
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-01/`** (HTTP
  200, 3,643 bytes, `<title>Multiselect 01</title>`). **The naive
  `https://preview.colorlib.com/theme/multiselect-01/` returns 404** — the
  real path includes `/bootstrap/` in the URL.
- **Preview CSS:** `css/style.css` (full Bootstrap 4.3.1 + custom styles,
  ~222 KB). Icon font: Font Awesome 4.7.0 → **replace with lucide-react**
  (do NOT ship the font). Scripts: jQuery, Popper.js, Bootstrap 4,
  bootstrap-multiselect.js, main.js. Fonts: Google Fonts Lato (300, 400, 700).

## Reference research (done — do not redo)

### Screenshot (`multiselect-01.jpg`, AVIF format)

Downloaded from ColorLib CDN (200 OK, 6,293 bytes). The image is in AVIF
format and could not be rendered in the headless environment. Based on DOM +
CSS analysis: a clean, minimal page with a centered section, light gray-blue
background (#f8f9fd), a bold heading ("Multiselect #01"), and a green-accented
multiselect dropdown with custom checkboxes. The label "Select Language:" sits
inline to the left of the dropdown.

### Family shape (series context)

20-member "Bootstrap Multiselect" family (`multiselect-01` … `-20`): all are
the same bootstrap-multiselect.js skeleton — page bg, centered section, label +
select dropdown — differing per member in options, labels, and color scheme.
**Shuttle fills the multiselect-01 slot** (the first member). No sibling specs
exist yet for multiselect-02 through -20.

### Design tokens (live stylesheet, verified 2026-09-06)

| Token             | Value                                    | Use                                                                        |
| ----------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| Page background   | `#f8f9fd`                                | body background (light gray-blue)                                          |
| Brand green       | `#52de97`                                | Link color, active checkbox bg, `bg-primary` class                         |
| Text color        | `gray`                                   | Body text, label text, button text                                         |
| Heading color     | `#000`                                   | h1–h5 headings                                                             |
| Button bg         | `#fff`                                   | Dropdown trigger button background                                         |
| Button shadow     | `0px 10px 23px -16px rgba(0,0,0,0.14)`  | Button + dropdown container box-shadow                                     |
| Checkbox border   | `2px solid rgba(0,0,0,0.2)`             | Unchecked checkbox border                                                  |
| Checkbox radius   | `4px`                                    | Checkbox and button border-radius                                          |
| Active checkbox   | `#52de97` bg, white checkmark            | Selected item checkbox                                                     |
| Font family       | `"Lato", Arial, sans-serif`             | Body + headings (Google Fonts Lato 300, 400, 700)                          |
| Font size         | `16px`                                   | Body base                                                                  |
| Line height       | `1.8`                                    | Body                                                                       |
| Heading font size | `28px`                                   | `.heading-section`                                                         |
| Label width       | `150px`                                  | `.sl` label (fixed width inline)                                           |
| Dropdown width    | `calc(100% - 150px)`                    | `.btn-group` (remaining space after label)                                 |
| Section padding   | `7em 0`                                  | `.ftco-section` vertical rhythm                                            |

## Implementation task outline

### Phase 1: Scaffold

1. Copy simplest existing app (e.g. `apps/aurora`) → `apps/shuttle`
2. Rename package to `@free-react-templates/shuttle`
3. Set `public/CNAME` to `shuttle.free.componentdock.com`
4. Set `homepage` in `package.json` to `https://shuttle.free.componentdock.com`
5. Add Google Fonts Lato (300, 400, 700) link in `index.html`
6. Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens

7. Set `@theme` brand color in `index.css`: `--color-brand: #52de97`
8. Set body background to `#f8f9fd`
9. Set font family to Lato via Tailwind config or `@theme`

### Phase 3: Components (TDD)

10. **Heading component** (`src/components/Heading.tsx`)
    - Renders h2 with text "Multiselect #01"
    - Uses Lato font, 28px, black, centered
    - Test: renders heading text, correct styling

11. **MultiselectDropdown component** (`src/components/MultiselectDropdown.tsx`)
    - Custom dropdown with checkbox list (6 options)
    - Toggle open/close on button click
    - Check/uncheck individual options
    - Show selected count or "Select Language" on trigger button
    - Box-shadow on trigger and dropdown panel
    - Custom checkboxes: 20px, 4px radius, gray border
    - Active checkboxes: green #52de97 bg, white checkmark
    - Test: renders 6 options, toggles open, selects/deselects, multiple select

12. **Label component** (`src/components/Label.tsx`)
    - Renders "Select Language:" as bold inline label
    - Fixed 150px width, gray text
    - Test: renders label text, correct width

13. **Page layout** (`src/App.tsx`)
    - Section with 7em vertical padding, bg #f8f9fd
    - Centered container with heading + label/dropdown row
    - Footer linking to Component Dock
    - Test: renders all sections, footer link present

### Phase 4: Polish

14. Close dropdown on outside click
15. Keyboard navigation (arrow keys, escape)
16. Accessibility: aria-labels, role="listbox", aria-selected
17. Responsive: stack label above dropdown on mobile
18. Remove any ColorLib references from app code

### Phase 5: Verify

19. Run `npm run spec:validate` — spec must pass
20. Run `scripts/verify-app.sh shuttle` — typecheck + lint + 100% coverage + build
21. Commit as `feat: add Shuttle template (ColorLib Multiselect 01)`
22. Open PR, merge immediately, deploy via Surge

## Design fidelity notes

- **Section order:** Single section only (heading + dropdown). No nav, no
  footer in the original — the recreation adds a minimal footer per the
  monorepo convention (Component Dock link).
- **Dropdown behavior:** The original uses bootstrap-multiselect.js (jQuery
  plugin). The recreation uses a pure React implementation with the same
  visual output: custom checkboxes in a dropdown panel with box-shadow.
- **Icon replacement:** Font Awesome 4.7 checkmark (`\f00c`) → lucide-react
  `Check` icon or inline SVG.
- **Images:** No images in the original template (it's a pure form component).
  No placeholder images needed.
- **No validation:** The original has no form validation. The recreation
  follows suit — it's a展示 (display) component, not a functional form.
