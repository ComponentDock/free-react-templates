# BtnSpark — Button Showcase (ColorLib Bootstrap Buttons 02)

- Recreates: https://colorlib.com/wp/template/bootstrap-buttons-02/
- Source slug: `bootstrap-buttons-02`
- Preview: https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/
- App Folder: `apps/btnspark`
- Package: `@free-react-templates/btnspark`
- Deployment: `https://btnspark.free.componentdock.com`
- Reference state: re-measured 2026-10-24 — `index.html` 200 / 51,199 B
  (sha256 `5bf46576…`), `css/style.css` 200 / 30,764 B (sha256 `4226c497…`),
  `js/snippet.js` 200 / 2,677 B, archive `downloads/free/bootstrap-buttons-02.zip`
  200 / 110,958 B. The design calls itself **"Button #07"** (page `<title>` and
  the `h2`), which is why the WP slug and the artwork name disagree — trust the
  slug, the heading is the design's own label.

## The design in one paragraph

A bare white swatch sheet: one 1140px section, 7em top/bottom padding, a 32px
"Button #07" heading, and then nothing but buttons in four theme colours —
coral, sage, gold, mauve. No navbar, no hero, no cards, no footer copy.

## Design tokens (measured from `css/style.css`)

| token | value | where |
| --- | --- | --- |
| primary | `#ec8f6a`, hover `#e66d3d` | column 1, "Primary" checkbox/radio |
| secondary | `#8bbabb`, hover `#6ba7a8` | column 2, "Success" |
| tertiary | `#e2c275`, hover `#d9af4b` | column 3, "Danger" |
| quarternary | `#b96b9f`, hover `#a44d87` | column 4, "Warning" |
| ink | `#000` (`#212529` default text) | white-pill labels |
| hairline | `rgba(0,0,0,0.1)` | white-pill border, unchecked radio ring |
| surface | `#fff` | page, icon panels |
| toggle on / off | `#03A9F4` on `#ebf7fc` / `#f44336` on `#fcebeb` | slide switches |
| social | fb `#4f69a2` · twitter `#69b6f0` · linkedin `#2884ba` · pinterest `#d03940` · dribbble `#ea6294` | social band |
| font | `"Poppins", Arial, sans-serif` | everything |
| body | `15px / 1.8`, weight 400 | global |
| button box | `12px 16px`, `1px` border, `14px`, weight 500 | every button |
| radius | `5px`; `40px` pill; `50%` round icon panel | — |
| shadow | `0 10px 20px -6px rgba(0,0,0,0.12)` | every button |
| icon panel | 45px wide, full height, white, 20px glyph in the column colour | icon buttons |
| container / rhythm | `.cl-container` max 1140px, section `7em 0`, rows `1.5rem` / `3rem` | layout |
| headings | `.heading-section` 32px weight 400; its `small` 16px | band titles |

Fonts: the archive self-hosts Poppins 300–900; use Google Fonts
`family=Poppins:wght@300;400;500;600;700` in `index.html` instead of copying
files (fidelity rule: never copy assets).

## Structure order (1:1 with the reference)

1. `h2` "Button #07" — 32px, left aligned, black.
2. **State matrix** — four equal full-width columns (`.cl-col-md-3`), one per
   colour; each column stacks five `width:100%` buttons:
   1. solid "Default"
   2. solid, label + 45px white icon panel flush right (Like ♥ / Delete 🗑 /
      Send ✈ / Download ⬇), glyph in the column colour
   3. same as 2 but a 40px pill, and the white panel is a **circle**
   4. outline: transparent, 1px border + label in the column colour, hover fills
      and turns the label white
   5. white 40px pill, `rgba(0,0,0,.1)` hairline, black label (ignores the colour)
3. `h2 small` "Dropdown Buttons" — four full-width colour toggles, menu items
   Action · Another action · Something else here (12 dead links on the source).
4. `h2 small` "Group Buttons" — two segmented triples:
   `[Button 1 | Outline Button | Button 1]` coral, `[Button 2 | Outline Button |
   Button 2]` sage; rounded outside corners, square inside.
5. Three-column row — **Checkboxes** (Primary · Success · Danger · Warning ·
   Disabled, all checked, coloured Ionicons glyphs, Disabled at 0.65 opacity),
   **Radios Buttons** (same five, 18px ring filled in the row colour),
   **Slide Button** (two 74×36 switches: ON blue on a pale blue track, OFF red
   on a pale red track, captions "Toggle is on" / "Toggle is Off").
6. `h2 small` "Social Buttons" — five brand blocks (7 shapes each: solid, solid
   pill, outline, outline pill, solid + icon panel, outline + icon panel, text
   link) then a closing 7-pill action row: Watch Photos · Download · ✦ ·
   Add Comment · ✦ · Like 2 · Create Account (last one solid coral with a white
   icon circle).

## Section-by-section fidelity notes

- **Container width is fixed at 1140px** with `min-width: 992px` on `body` in the
  source — a desktop-first artifact. Recreate responsively (stack the matrix to
  2 columns below `md`, the 3-column utilities row to 1) rather than copying the
  min-width.
- **The matrix is a state table, not a feature grid.** Keep the reading order
  state-major per column (solid → icon → icon pill → outline → white pill) so a
  reviewer can compare colours across rows.
- **The icon panel is the signature detail.** `position:absolute; top:0; right:0;
  width:45px; bottom:0; background:#fff` — the label needs `padding-right` so it
  never slides under it, and the pill variant needs `border-radius:50%` on the
  panel with the button's `overflow:hidden` doing the clipping.
- **Group triples** rely on the first/last child radius rules in the source;
  in React build one component (`ButtonGroup`) that takes three children and
  applies `rounded-l-[5px] rounded-r-none` / the mirror to the ends.
- **Checkbox and radio glyphs are font characters** (`\f148` / `\f15c` Ionicons)
  in the source. Use `lucide-react` `Check` and a CSS dot instead — same colour
  per row, no icon font.
- **Slide switches are pure CSS** (hidden checkbox + sibling selectors). In React
  keep a real `<input type="checkbox" role="switch">` with a labelled caption so
  the state is exposed; the knob label flips ON ↔ OFF and the track colour
  cross-fades in 0.3s.
- **Every link in the source is dead** (`href="#"`, 12 of them). The recreation
  should render the dropdown items as inert buttons rather than dead anchors.
- **No images exist in the design** — nothing to substitute with picsum; do not
  invent photography.
- **No footer exists either.** The only chrome the recreation adds is the
  Component Dock credit line required by AGENTS.md rule 5.

## App deltas (as shipped — the app is NOT changed by this prep)

Recorded 2026-10-24. The shipped `apps/btnspark` was built from an invented
brief, so it differs from this reference in five ways; the spec carries the same
list under `## App deltas (as shipped)`.

1. Palette is the Bootstrap-5 default set (`#0d6efd`, `#6c757d`, `#198754`,
   `#dc3545`, `#ffc107`, `#0dcaf0`) + Inter — the reference has none of these.
2. It renders a Navbar + Hero + Footer; the reference is a bare section.
3. Bands are Solid/Outline/Shape/Sizes/Icon/Playground (incl. gradient and
   loading buttons that do not exist in the source) instead of the state matrix,
   dropdowns, groups, form controls and social set.
4. Geometry is `rounded-lg` / pill with gap spacing, not 5px + 40px pill with the
   `0 10px 20px -6px rgba(0,0,0,.12)` shadow.
5. The 45px white icon panel is missing entirely.
