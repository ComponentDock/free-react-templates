# SearchLens — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Search Form V24" (slug: `colorlib-search-24`)
New name: `searchlens`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: flex centered, min-h-screen
   - Background image: use `https://picsum.photos/seed/searchlens/1920/1080` as placeholder
   - Compose the SearchForm component

2. **SearchForm component** (`src/components/SearchForm.tsx`)
   - Flex container: three sections side-by-side
   - **Section 1 — Text input**: `flex-grow: 1`, white bg, `border: 1px solid #e5e5e5`, `border-right: 0`, `height: 68px`, placeholder "What are you looking for?" (`#9a9a9a`, `20px`)
   - **Section 2 — Category dropdown**: Custom styled select, `min-width: 260px`, `#f9f9f9` bg, `1px solid #e5e5e5`, chevron-down SVG icon, options: Subject A/B/C
   - **Section 3 — Search button**: `width: 164px`, `background: #4272d7`, white text, uppercase "SEARCH", `font-weight: 300`, `font-size: 20px`
   - Button hover: `background: #2d62d3`, `transition: all .2s ease-out`

3. **CategoryDropdown component** (`src/components/CategoryDropdown.tsx`)
   - Custom select with chevron icon
   - State: open/closed, selected value
   - Keyboard accessible (Enter/Space to toggle, Arrow keys to navigate)
   - Click outside to close

4. **Styling** (`src/index.css`)
   - Tailwind @theme for brand colors: `#4272d7` (blue), `#2d62d3` (dark blue), `#f9f9f9` (light gray), `#e5e5e5` (border gray)
   - Font: Poppins 400 via Google Fonts link in `index.html`

5. **Tests** (`src/components/*.test.tsx`)
   - SearchForm: renders three sections, input has placeholder
   - CategoryDropdown: renders options, opens/closes, selects option
   - App: renders SearchForm, full viewport layout
   - Accessibility: aria-labels, keyboard navigation
   - Responsive: test mobile/tablet breakpoints

## Fidelity notes

- **Three-section layout**: Input (flex-grow) + Category (fixed min-width) + Button (fixed width). On desktop, they sit side-by-side with no gaps.
- **Input styling**: White bg, `border: 1px solid #e5e5e5`, but `border-right: 0` to connect to the category dropdown.
- **Category dropdown**: Uses Choices.js in the original. In React, implement as a custom select with similar styling: `#f9f9f9` bg, border, chevron icon. The `min-width: 260px` ensures it doesn't shrink too much.
- **Search button**: Blue `#4272d7` → `#2d62d3` on hover. Fixed 164px width.
- **Background**: Full-viewport photo with `background-size: cover`.
- **Responsive**: At ≤767px — flex-wrap, all sections full-width, `padding: 20px`, margin-bottom between sections.
- **Form max-width**: 940px centered.

## Potential implementation pitfalls

- The original uses Choices.js for the dropdown — in React, use a controlled `<select>` with custom styling or a headless UI dropdown.
- The input's `border-right: 0` creates a visual connection to the dropdown — make sure the borders align properly.
- The `min-width: 260px` on the dropdown means the form won't shrink below that on smaller screens — the responsive breakpoint handles wrapping.
- The placeholder font-size (20px) is larger than the input text font-size (16px) — this is intentional in the original.
