# SearchFlow (ColorLib Search Form Bar 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-searchflow`. Recreation name: **SearchFlow** (NEW name —
> the ColorLib source keeps its name "Search Form Bar 18").

## Source mapping

- **ColorLib item:** "Search Form Bar 18" (TEMPLATES.md line 2775; section
  "## Search Form Bars (20+)" at the Search Form Bar block).
- **Source URL:** https://colorlib.com/wp/template/search-form-bar-18/
- **Preview URL — UNREACHABLE (404 at prep time):** `https://preview.colorlib.com/theme/search-form-bar-18/` returned 404. Fallback: screenshot only.
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-18.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Dark Overlay Search

## Reference research (done — do not redo)

### Screenshot analysis (search-form-bar-18.jpg)

Browsed visually. Design is a full-viewport dark overlay with a white search strip at the top:

- **Dark overlay:** Solid medium-dark gray (#757575) background covering the entire viewport. No content, no images — just a flat gray field. This creates a modal-like atmosphere that focuses attention on the search bar.
- **White search strip:** Full-width white strip at the top of the viewport (~60px height). Contains a left-aligned search bar with "Search..." placeholder text and a blue "Search" button on the right side of the bar.
- **Search bar:** White background, light gray border, slightly rounded corners (~4px, NOT pill-shaped). Input is ~600px wide.
- **Search button:** Medium blue (#4a8cf7), white text, slightly rounded corners (~4px, NOT pill-shaped).
- **Close button:** Gray "X" in the top-right corner of the viewport.
- **Typography:** Poppins (sans-serif), clean and modern.
- **Aesthetic:** Very minimal — flat, utilitarian, focus-on-search. The dark overlay dominates the visual space.

### Key differences from other Search Form Bar variants

- SearchSnap (Bar 14): Full-screen light gray overlay with centered pill-shaped search bar
- SearchPulse (Bar 17): Navbar with dropdown search panel
- SearchFlow (Bar 18): Full-screen dark gray overlay with white search strip at top, squared-off (not pill) search bar

## Implementation tasks

### 1. Scaffold app folder
- [ ] Create `apps/searchflow/` (copy from simplest existing search app, e.g. `apps/searchsnap/`)
- [ ] Rename package to `@free-react-templates/searchflow`
- [ ] Update `public/CNAME` to `searchflow.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://searchflow.free.componentdock.com`

### 2. Component structure
- [ ] `src/App.tsx` — main layout composing Overlay + SearchBar + Footer
- [ ] `src/components/Overlay.tsx` — full-viewport dark gray background
- [ ] `src/components/SearchStrip.tsx` — white top strip containing search form
- [ ] `src/components/SearchForm.tsx` — input + Search button (squared-off style)
- [ ] `src/components/Footer.tsx` — Component Dock link
- [ ] `src/components/CloseButton.tsx` — X button, top-right

### 3. Design tokens & styling
- [ ] `src/index.css` — Tailwind v4 theme tokens: overlay gray (#757575), brand blue (#4a8cf7), Poppins font
- [ ] Overlay: bg-gray-500, fixed position, full viewport
- [ ] Search strip: white bg, full width, fixed at top
- [ ] Search bar: white bg, light gray border, slightly rounded (rounded, not rounded-full)
- [ ] Search button: bg-blue-500 (#4a8cf7), white text, slightly rounded
- [ ] Close button: gray, top-right, hover darkens

### 4. Interactions
- [ ] Overlay displays on page load (or via toggle)
- [ ] Close button dismisses overlay, shows "Search closed" message
- [ ] Search submit: capture query, log to console (placeholder)
- [ ] Enter key in input triggers same submit

### 5. Testing (TDD)
- [ ] Overlay renders full viewport with dark gray background
- [ ] White search strip renders at top
- [ ] Close button displays in top-right, hover darkens
- [ ] Close button dismisses overlay
- [ ] Search input accepts text, shows placeholder
- [ ] Search button triggers submit
- [ ] Enter key triggers submit
- [ ] Footer renders Component Dock link
- [ ] 100% coverage maintained

### 6. Verification
- [ ] Run `scripts/verify-app.sh searchflow`
- [ ] Confirm no ColorLib references in app code
- [ ] Confirm footer links to Component Dock
