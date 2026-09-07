# PickSet (ColorLib Multiselect 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-pickset`. Recreation name: **PickSet** (NEW name —
> the ColorLib source keeps its name "Multiselect 10").

## Source mapping

- **ColorLib item:** "Multiselect 10" (TEMPLATES.md line 834; section
  "## Bootstrap Multiselect (20)" at line 823).
- **Source URL:** https://colorlib.com/wp/template/multiselect-10/
- **Preview URL — REACHABLE (verified 2026-09-07 by direct fetch):**
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-10/`**
  (HTTP 200, 3,665 bytes, 77 lines, `<title>Multiselect 10</title>`).
- **Preview CSS:** `css/style.css` (221KB — bundled with Bootstrap 4.3.1 +
  custom styles). Fonts: Lato 300/400/700 via Cloudflare CDN. Icons:
  Font Awesome 4.7.0 (cdnjs). Scripts: jQuery, Popper.js, Bootstrap 4,
  Lodash 3.5.0, `js/main.js`.
- **Screenshot:** `multiselect-10.jpg` (1200x972, AVIF format on ColorLib CDN).
  Preview fallback not needed — live preview was reachable.

## Structure (from preview HTML)

```
section.ftco-section
  .container
    .row.justify-content-center
      .col-md-6.text-center.mb-5
        h2.heading-section "Multiselect #10"
    .row.justify-content-center
      .col-md-5 (centered, flex align-center)
        .dropdown-container
          .dropdown-button.noselect.w-100
            .dropdown-label "States"
            .dropdown-quantity "(Any)"
            i.fa.fa-chevron-down
          .dropdown-list (hidden)
            input[type=search].dropdown-search (placeholder "Search states")
            ul (options list)
```

## Design token notes

| Token       | Value                   | Source                                   |
| ----------- | ----------------------- | ---------------------------------------- |
| Font family | `"Lato", Arial, sans-serif` | `@font-face` + body style           |
| Page bg     | `#f8f9fd`              | body `background`                        |
| Card bg     | `#fff`                 | dropdown-button, dropdown-list           |
| Accent      | `#ff5959`              | `a` color, bg-primary, dropdown-quantity, fa icon color |
| Body text   | `gray`                 | body `color`                             |
| Heading     | `#000`                 | h1-h6 `color`                           |
| Card shadow | `0px 10px 30px -4px rgba(0,0,0,0.15)` | dropdown-container |
| Card radius | `5px`                  | dropdown-container `border-radius`       |
| Search bg   | `rgba(0,0,0,0.05)`     | input[type=search] background            |
| Search radius | `4px`                | input[type=search] border-radius         |
| Button padding | `15px 20px`          | dropdown-button padding                  |
| Section padding | `7em 0`             | ftco-section                             |

## Implementation tasks

1. **Copy a minimal app scaffold** (e.g., from optpick or topicdrop) into `apps/pickset/`.
2. **Rename package** to `@free-react-templates/pickset`.
3. **Set up index.css** with Tailwind entry + `@theme` block for:
   - `--color-accent: #ff5959`
   - `--color-bg: #f8f9fd`
   - Font: Lato (Google Fonts `<link>` in index.html)
4. **Create components:**
   - `src/components/Multiselect.tsx` — main dropdown with search + checkboxes
   - `src/components/MultiselectItem.tsx` — individual checkbox option
   - `src/components/SearchInput.tsx` — search input field
5. **Implement Multiselect logic:**
   - State: open/closed, selected items (Set<string>), search query
   - Toggle open/close on button click
   - Close on click outside (useRef + useEffect)
   - Close on Escape key
   - Filter options by search query (case-insensitive substring match)
   - Update trigger label: "States (N)" or "States (Any)" based on selection count
6. **Implement keyboard navigation:**
   - ArrowDown/ArrowUp to move focus between options
   - Space/Enter to toggle selection on focused option
   - Escape to close
7. **Style with Tailwind** matching the CSS tokens above.
8. **Add ARIA attributes:** aria-haspopup, aria-expanded, role="listbox", aria-multiselectable, role="option", aria-selected.
9. **Add footer** with Component Dock link.
10. **Write tests** (Vitest + Testing Library) for all Gherkin scenarios.
11. **Verify** 100% coverage with `npm run test:coverage`.
12. **Set public/CNAME** to `pickset.free.componentdock.com`.
