# DropFold (ColorLib Dropdown 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dropfold`. Recreation name: **DropFold** (NEW name —
> the ColorLib source keeps its name "Dropdown 16").

## Source mapping

- **ColorLib item:** "Dropdown 16" (TEMPLATES.md line 771; section
  "## Dropdown Menus (10)" at line 769).
- **Source URL:** https://colorlib.com/wp/template/dropdown-16/
- **Preview URL — REACHABLE (verified 2026-09-06 by direct fetch):**
  **`https://preview.colorlib.com/theme/bootstrap/dropdown-16/`**
  (HTTP 200, 22,095 bytes). The naive URL without `/bootstrap/` returns
  404 — the dropdown family lives under `/theme/bootstrap/dropdown-<n>/`.
- **Preview CSS:** `css/style.css` (3,474 bytes — hand-written custom
  styles on top of Bootstrap 4). Also loads `css/bootstrap.min.css`,
  `css/owl.carousel.min.css`, `fonts/icomoon/style.css` (icon font —
  REPLACE with lucide), `js/main.js` (minimal Bootstrap dropdown toggle).
  Fonts: Roboto 300/400/700, Poppins 300/400/500, Source Serif Pro 400/600
  (only Roboto is used in CSS; Poppins and Source Serif Pro loaded but unused).

## Reference research (done — do not redo)

### Screenshot (colorlib-dropdown-16.jpg)

The screenshot shows a white page with centered "Dropdown #6" heading, a
dropdown trigger below it, and when open, a wide mega-menu panel with a
hero image on the left and two columns of category links on the right. The
aesthetic is clean and minimal: white background, grey trigger text, black
links in the menu, pink hover. Deep shadow on the panel.

### Design tokens (live stylesheet + rendered page, verified 2026-09-06)

| Token           | Value                                  | Use                                                                        |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| Body font       | 'Roboto' 300/400/700                   | Google Fonts `<link>` (400, 700 — 300 is body weight)                     |
| Heading font    | Same Roboto stack as body              | `h1-h6` use the same family                                                |
| Paragraph color | `#b3b3b3`                              | `p { color: #b3b3b3 }` — light grey descriptive text                      |
| Link grey       | `#888`                                 | dropdown trigger link color (inactive state)                               |
| Link black      | `#000`                                 | trigger when `.show` active; mega-menu links default                       |
| Hover pink      | `#e83e8c`                              | mega-menu link hover (magenta/pink)                                        |
| Badge blue      | `#007bff`                              | Bootstrap primary blue (defined but not rendered in this demo)             |
| Panel shadow    | `0 15px 30px 0 rgba(0,0,0,0.2)`        | mega-menu box-shadow                                                       |
| Panel border    | `1px solid transparent`                | invisible border for sizing                                                |
| Page bg         | white (default)                        | no explicit background set                                                 |
| Content padding | `7rem 0`                               | `.content` vertical padding                                                |
| Title style     | 12px, bold 700, uppercase              | `.title` class (defined but not rendered)                                  |
| Mega-menu min-w | 680px                                  | `.dropdown-menu { min-width: 680px }`                                      |
| Mega-menu cols  | 3 × 33.333%                           | `.mega-menu > div { width: 33.3333% }`                                     |
| Mega-menu pad   | 20px inner, 10px outer                 | `.mega-menu { padding: 20px }`, `.dropdown-menu { padding: 10px }`          |
| Animation       | 300ms ease (opacity, margin-top,       | transition on `.dropdown-menu`                                             |
|                 | visibility)                            |                                                                            |
| Chevron rotate  | 180° transform on `.show`              | `.custom-dropdown.show a span { transform: rotate(180deg) }`               |
| Link transition | 0.3s all ease                           | `a { transition: .3s all ease }`                                           |

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph                        | Recreation                      |
| ----------------------------------- | ------------------------------- |
| `icon-keyboard_arrow_down` (toggle) | lucide `ChevronDown`            |

No brand icons needed. No other icons in the demo.

### Picsum placeholder plan

One hero image in the left column of the mega-menu. Use:
`https://picsum.photos/seed/dropfold-hero/300/200` (deterministic).

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/dropfold` from the simplest existing app,
       rename package to `@free-react-templates/dropfold`, add Roboto
       400/700 Google Fonts `<link>` in index.html, set `public/CNAME` =
       `dropfold.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): DropdownMenu (trigger renders with
       "Dropdown" text + ChevronDown; click toggles panel open/close;
       chevron rotates on open; trigger color changes; click outside
       closes), MegaMenuPanel (3-column layout; min-width 680px; centered
       below trigger; shadow + transparent border; animation classes),
       MegaMenuLinks (category lists render with counts; links are #000
       default, #e83e8c on hover; list-unstyled; block links with padding),
       HeroImage (picsum placeholder renders with caption "PSD Mockups"
       + "View All Here" subtitle), Footer (Component Dock credit),
       App (landmarks, document title "DropFold — Dropdown Menu").
3. [ ] Layout shell: white page, Roboto font, 7rem vertical padding,
       centered content, heading "Dropdown Menu".
4. [ ] Dropdown trigger component: text link "Dropdown" with ChevronDown
       icon, color #888 default, #000 when open, 0.3s transition.
       Toggle state managed via React useState. ChevronDown rotates 180°
       on open via CSS transform.
5. [ ] Mega-menu panel: 680px min-width, centered below trigger (left: 50%,
       transform: translateX(-50%)), 3-column flex layout (33.33% each),
       10px outer padding + 20px inner padding, shadow
       `0 15px 30px 0 rgba(0,0,0,0.2)`, transparent 1px border.
       Animation: opacity 0→1, visibility hidden→visible, margin-top
       0→10px, all 300ms ease. Use conditional classes for open/closed.
6. [ ] Mega-menu content: Left column = hero image (picsum
       `seed/dropfold-hero/300/200`) + "PSD Mockups" caption + "View All
       Here" subtitle. Middle column = list of 6 categories with counts.
       Right column = list of 6 categories with counts. All links #000
       default, #e83e8c on hover, 0.3s transition, no underline.
7. [ ] Click-outside handler: close the dropdown when clicking outside
       the dropdown container (useRef + useEffect with document click
       listener, cleanup on unmount).
8. [ ] Responsive: ensure no horizontal overflow on narrow viewports
       (the source has no mobile-specific rules — the 680px min-width
       panel may cause overflow; add a note about this in the spec or
       implement a scrollable container if needed).
9. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
10. [ ] Run `npm run verify:app -- dropfold` (typecheck → lint → vitest
        100% → build) and fix until green.
11. [ ] Open PR `feat/template-dropfold` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (Roboto 400/700,
        #888 trigger, #000/#e83e8c links, 680px panel, 3-column
        mega-menu, 300ms animation, shadow), and what differs (renamed
        "DropFold", Roboto via Google Fonts, lucide ChevronDown — no
        icomoon font, picsum placeholder for hero image, React state
        for toggle, click-outside close, Component Dock footer).
12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 771 `[x]` + surge
        URL (`https://dropfold.free.componentdock.com`), `npm run
        readme:status`, push.
