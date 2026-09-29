# SearchQuest — Implementation Notes

## Source
- ColorLib "Colorlib Search 9"
- Source URL: https://colorlib.com/wp/template/colorlib-search-9/
- Preview URL: https://preview.colorlib.com/theme/colorlib-search-9/ (404 — template downloaded instead)

## Structure (section order)

1. **Full viewport container** — light blue background (#d9eff5), flexbox centered
2. **Basic search card** — white background, box-shadow, cyan bottom border
   - Text input ("Type Keywords") — 70px tall, 18px font, Lato
   - Search icon (magnifying glass SVG) — 34px, #ccc fill, positioned right
3. **Advanced search card** — white background, box-shadow, attached below basic search
   - "ADVANCED SEARCH" label — 14px bold #999
   - Row 1: 3 dropdowns (Accessories, Color, Size) — flex space-between
   - Row 2: 3 dropdowns (Sale, Time, Type) — flex space-between
   - Row 3: result count ("108 results", number in cyan #00bbec) + RESET + SEARCH buttons
4. **Footer** — Component Dock attribution (required)

## Component structure

```
src/
  App.tsx          — composes SearchQuest page
  components/
    SearchQuest.tsx    — main container (full viewport bg + centered flex)
    BasicSearch.tsx    — keyword input + search icon
    AdvancedSearch.tsx — label + filter grid + result count + buttons
    FilterSelect.tsx   — reusable dropdown component
    ResultCount.tsx    — shows "N results" with cyan count
    ActionBar.tsx      — RESET + SEARCH buttons
  index.css        — Tailwind entry + @theme tokens
  main.tsx         — entry point (excluded from coverage)
```

## Design token summary (Tailwind @theme)

```css
@theme {
  --color-brand: #00bbec;       /* cyan — accents, search button */
  --color-brand-hover: #00a7d3; /* darker cyan — button hover */
  --color-page-bg: #d9eff5;     /* light sky blue — page background */
  --color-text-primary: #555;   /* main input text */
  --color-text-secondary: #666; /* select text, result count */
  --color-text-muted: #999;     /* placeholder, label */
  --color-icon: #ccc;           /* search icon fill */
  --color-card-bg: #fff;        /* card backgrounds */
  --font-family: 'Lato', sans-serif;
}
```

## Fidelity notes

- **Original uses Choices.js-like custom select rendering** — in React, use native `<select>` elements styled to match (appearance: none, custom arrow via CSS background SVG).
- **Original JS is minimal** — only re-renders selects after web fonts load. In React, `useEffect` + `document.fonts.ready` with a state toggle handles this.
- **No parallax, no images, no multi-section page** — this is a single centered widget, similar to other search form templates (searcharc, searchglow, etc.).
- **Box-shadows are identical on both cards** — `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`.
- **Button border-radius is 0** (sharp corners) — do NOT use rounded-md or similar.
- **Dropdown arrows** use an inline SVG data URI (chevron-down in #999) — can use lucide-react ChevronDown icon instead.
- **Mobile breakpoint** at 767px — all rows stack vertically, padding reduces.

## Implementation checklist

- [ ] Create `apps/searchquest/` from simplest existing app template
- [ ] Set up package name `@free-react-templates/searchquest`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `searchquest.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Implement SearchQuest container with flex centering
- [ ] Implement BasicSearch with input + icon + cyan border
- [ ] Implement AdvancedSearch with 6 dropdowns in 3×2 grid
- [ ] Implement FilterSelect reusable component
- [ ] Implement ResultCount with cyan number
- [ ] Implement ActionBar with RESET + SEARCH buttons
- [ ] Add Lato font via Google Fonts link in index.html
- [ ] Add responsive layout (≤767px stack)
- [ ] Add footer with componentdock.com link
- [ ] Write tests for all components (100% coverage)
- [ ] Run verify-app.sh and confirm all checks pass
