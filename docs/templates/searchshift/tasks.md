# SearchShift — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Search Form V25" (slug: `colorlib-search-25`)
New name: `searchshift`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: flex centered, min-h-screen
   - Background image: use `https://picsum.photos/seed/searchshift/1920/1080` as placeholder
   - Compose the SearchForm component

2. **SearchForm component** (`src/components/SearchForm.tsx`)
   - Dark overlay container: `background: rgba(0, 0, 0, 0.5)`, flex layout
   - **Section 1 — Category dropdown**: `width: 200px`, transparent bg, `border: 1px solid rgba(255,255,255,0.3)`, white text, chevron icon
   - **Section 2 — Text input**: `flex-grow: 1`, transparent bg, `border: 1px solid rgba(255,255,255,0.3)`, `border-left: 0`, `border-right: 0`, white text, placeholder "Enter Keywords" (`#e5e5e5`)
   - **Section 3 — Search button**: `width: 164px`, gradient background `linear-gradient(45deg, #2c6dd5 0%, #2c6dd5 28%, #ff4b5a 91%, #ff4b5a 100%)`, white text "Search", `font-weight: 300`, `font-size: 20px`
   - Button hover: pseudo-element with reversed gradient fades in via `opacity: 0→1`, `transition: all .2s ease-out`

3. **CategoryDropdown component** (`src/components/CategoryDropdown.tsx`)
   - Custom select with chevron icon
   - Transparent bg, white border, white text
   - State: open/closed, selected value
   - Keyboard accessible

4. **Styling** (`src/index.css`)
   - Tailwind @theme for brand colors: `#2c6dd5` (blue), `#ff4b5a` (red/coral)
   - Font: Poppins 300+400 via Google Fonts link in `index.html`
   - Gradient button: use Tailwind's `bg-gradient-to-r` or custom CSS

5. **Tests** (`src/components/*.test.tsx`)
   - SearchForm: renders three sections, dark overlay
   - CategoryDropdown: renders options, opens/closes, selects option
   - GradientButton: renders gradient, hover state changes gradient
   - App: renders SearchForm, full viewport layout
   - Accessibility: aria-labels, keyboard navigation
   - Responsive: test mobile/tablet breakpoints

## Fidelity notes

- **Dark overlay**: `background: rgba(0, 0, 0, 0.5)` on the inner form — this creates the cinematic look over the background photo.
- **Transparent inputs**: Both dropdown and text input have transparent backgrounds — the dark overlay shows through.
- **Gradient button**: The default gradient is blue→red (45deg). On hover, a pseudo-element with the reversed gradient (red→blue) fades in via opacity. This creates a smooth color shift effect.
- **Gradient CSS**: `linear-gradient(45deg, #2c6dd5 0%, #2c6dd5 28%, #ff4b5a 91%, #ff4b5a 100%)` — blue on left 28%, then transitions to red on right.
- **Hover gradient**: `linear-gradient(45deg, #ff4b5a 0%, #ff4b5a 28%, #2c6dd5 91%, #2c6dd5 100%)` — reversed.
- **White borders**: `rgba(255,255,255,0.3)` — subtle, semi-transparent.
- **Input borders**: Text input has `border-left: 0` and `border-right: 0` — it sits between dropdown and button with no visible dividers.
- **Form max-width**: 790px centered.
- **Responsive**: At ≤767px — flex-wrap, all sections full-width, `padding: 20px`.

## Potential implementation pitfalls

- The gradient hover effect uses a CSS pseudo-element (`::before`) with `opacity` transition — in React, this needs a CSS class or Tailwind's group-hover.
- The `z-index: -1` on the pseudo-element ensures it sits behind the button text.
- The transparent inputs need careful border handling — `border-left: 0` and `border-right: 0` on the text input to avoid double borders.
- The dropdown's custom select needs `appearance: none` to hide the native arrow, then a custom SVG chevron.
- The dark overlay (`rgba(0,0,0,0.5)`) is on the inner form, not the entire page — the background image is still visible around the form.
