# SearchQuint — Implementation Tasks & Design Notes

Source: ColorLib "Search Form/Bar V15" (slug: `search-form-bar-15`)
New name: `searchquint`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Compose: SearchOverlay + Navbar + Content
   - Toggle state (boolean) shared via context or lifted state
   - Search overlay appears/disappears based on toggle

2. **Navbar component** (`src/components/Navbar.tsx`)
   - Container with "Brand" text link on the left (blue, `#007bff`)
   - Navigation links on the right: Home, About, Contact (inline-flex list)
   - Search icon toggle (magnifying glass SVG from lucide-react `Search`)
   - Click handler toggles the search overlay open
   - Responsive: brand centered on mobile, links stacked or hidden

3. **SearchOverlay component** (`src/components/SearchOverlay.tsx`)
   - Full-width bar, `background: #efefef`
   - Positioned above page, slides down via CSS transition (`margin-top: -150px` → `0`, 1s cubic-bezier)
   - Contains a close button (X icon) at top-right, absolute positioned
   - Contains a centered form (max-width ~7 columns) with:
     - "Search" submit button on the left: blue bg (`#007bff`), white text, no border-radius
     - Search input on the right: placeholder "Search...", standard form-control styling
   - z-index: 99999

4. **Content component** (`src/components/Content.tsx`)
   - Fills remaining viewport height
   - Centered paragraph with instructional text
   - Text color: gray (`#757575`)

5. **Styling** (`src/index.css`)
   - Tailwind @theme for brand color `#007bff`
   - Font: Roboto 400 via Google Fonts link in `index.html`
   - Search bar slide-down transition via Tailwind or inline transition
   - z-index handling for overlay

6. **Tests** (`src/components/*.test.tsx`)
   - Navbar: renders brand, links, search icon; click toggles overlay
   - SearchOverlay: renders form with input + button; close button hides it
   - Content: renders instructional text
   - App: composes all sections, toggle state works
   - Accessibility: aria-labels, keyboard focus, aria-expanded on toggle

## Fidelity notes

- **Search bar animation**: The original uses `margin-top: -150px` transitioning to `0` with `1s cubic-bezier(0.23, 1, 0.32, 1)`. In React, use conditional class + CSS transition or Framer Motion.
- **Button styling**: Bootstrap default button — no border-radius (square corners). The `.cl-btn-primary` uses `background-color: #007bff`, `border-color: #007bff`, white text.
- **Form layout**: Button on LEFT, input on RIGHT — this is the reverse of many search forms. The submit button comes first in the DOM.
- **Close icon**: Positioned `top: 20px, right: 20px` inside the search bar, absolute. Black color, 20px font size.
- **Navbar links**: Simple inline list, no dropdown. The search icon is inside the list as a separate `<li>`.
- **Brand text**: An `<h3>` tag with `<a>` link inside, blue text, no margin/padding.
- **Content section**: Just a simple centered paragraph — this is a snippet/component demo, not a full-page template.
- **z-index**: Search overlay has z-index 99999 to appear above everything.
- **Responsive**: At mobile, the search form stacks (button above input), brand centers, nav links adjust.
- **Placeholder images**: None needed — this is a search form component demo with no photos.
- **Color reference**: Brand palette is Bootstrap blue `#007bff`. Search bar bg is `#efefef`. Content text is `#757575`. Page bg is `#fff`.
