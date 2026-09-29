# SearchFind (ColorLib Search Form/Bar V01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-searchfind`. Recreation name: **SearchFind** (NEW name —
> the ColorLib source keeps its name "Search Form/Bar V01").

## Source mapping

- **ColorLib item:** "Search Form/Bar V01" (TEMPLATES.md line 2758, Search Form Bar category).
- **Source URL:** https://colorlib.com/wp/template/search-form-bar-01/
- **Preview URL — REACHABLE but minimal:** https://preview.colorlib.com/theme/search-form-bar-01/ (HTTP 200, minimal page)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-01.jpg

## Reference research (done — do not redo)

### Screenshot visual analysis (2026-09-29)

The screenshot shows an extremely minimal design:
- Full-page light gray background
- Centered heading "Search Form/Bar #01" in dark text
- A single pill-shaped search input below the title with:
  - White background
  - Subtle shadow
  - Magnifying-glass icon on the left
  - "Search..." placeholder text
- No navigation, no footer in original (footer will be Component Dock)
- Clean, modern, minimal aesthetic

### Design tokens (derived from screenshot)

| Token | Value | Notes |
|-------|-------|-------|
| Page background | `#f5f5f5` | Light gray |
| Input background | `#ffffff` | White |
| Title color | `#333333` | Dark gray |
| Placeholder/icon color | `#999999` | Medium gray |
| Border radius | ~50px | Pill-shaped |
| Box shadow | `0 2px 8px rgba(0,0,0,0.1)` | Subtle elevation |
| Font | System sans-serif | Clean, minimal |

## Component structure

```
App.tsx
  └── SearchFind (single-page search form)
       ├── Heading ("Search Form Bar")
       ├── SearchBar
       │    ├── SearchIcon (magnifying glass, lucide-react)
       │    └── Input (text, placeholder "Search...")
       └── Footer (Component Dock link)
```

## Fidelity notes

- **Pill-shaped search bar:** Use `rounded-full` or high `border-radius` (40-50px) on the input container. The input itself should have no visible border — only the shadow and white background define its shape.
- **Magnifying glass icon:** Use `lucide-react` `Search` icon. Position absolutely or as flex item inside the input container, left-aligned with padding.
- **Centering:** Use flexbox column with `items-center` and `justify-center` on the page container. Add top padding (~15-20vh) to position content in the upper third.
- **Shadow:** `shadow-md` or `shadow-lg` in Tailwind for the subtle elevation effect.
- **Input styling:** Remove default browser border/outline. Use `bg-white`, `px-5`, `py-3`, `text-gray-800`, `placeholder-gray-400`. Width: `w-full max-w-md` for responsive behavior.
- **Focus state:** Add `focus:outline-none focus:ring-2 focus:ring-blue-500` or similar subtle ring.
- **Typography:** The heading uses a clean sans-serif, ~2rem/36px, font-weight normal (400).
- **No parallax, no images, no complex sections** — this is a single-component template.
- **Footer:** Must link `https://www.componentdock.com/` branded as "Component Dock".
- **No ColorLib references** in any app source files.
