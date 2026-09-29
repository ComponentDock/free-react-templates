# SearchPea — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Search Form V23" (slug: `colorlib-search-23`)
New name: `searchpea`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: min-h-screen, background image positioned bottom-right
   - Use `https://picsum.photos/seed/searchpea/1920/1080` as placeholder background
   - Push form down ~24vh from top
   - Compose the SearchBar component

2. **SearchBar component** (`src/components/SearchBar.tsx`)
   - Pill-shaped card: `border-radius: 34px`, `box-shadow: 0px 8px 20px rgba(0,0,0,0.15)`, `overflow: hidden`
   - Flex layout: input area (left, flex-grow) + search button (right)
   - **Input area**: `background: #d9f1e3`, flex centered, magnifying glass icon (36×36, `fill: #222`) + text input
   - Input: `height: 68px`, transparent bg, no border, `font-size: 16px`, color `#000`, placeholder "What are you looking for?" (`#222`)
   - **Search button**: `min-width: 216px`, `background: #00ad5f`, white text, uppercase "SEARCH", `font-weight: 300`, `font-size: 16px`
   - Button hover: `background: #009451`, `transition: all .2s ease-out`

3. **Hint text** (inline in SearchBar or separate component)
   - Below the pill card: `font-size: 15px`, `color: #ccc`, `padding-left: 26px`
   - Text: "ex. Game, Music, Video, Photography"

4. **Styling** (`src/index.css`)
   - Tailwind @theme for brand colors: `#d9f1e3` (mint green), `#00ad5f` (green), `#009451` (dark green)
   - Font: Poppins 400 via Google Fonts link in `index.html`

5. **Tests** (`src/components/*.test.tsx`)
   - SearchBar: renders input with placeholder, renders SEARCH button, button hover state
   - App: renders SearchBar, full viewport layout with background
   - Accessibility: aria-labels, keyboard navigation
   - Responsive: test mobile/tablet breakpoints

## Fidelity notes

- **Pill shape**: `border-radius: 34px` + `overflow: hidden` creates the rounded card.
- **Shadow**: `box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15)` — subtle, soft.
- **Input area color**: `#d9f1e3` (light mint green) — exact from CSS.
- **Button color**: `#00ad5f` (green) → `#009451` (dark green) on hover.
- **Icon**: SVG magnifying glass, `fill: #222`, 36×36 desktop, 26×26 mobile.
- **Icon wrapper**: `min-width: 80px` desktop, `40px` mobile.
- **Form positioning**: `padding-top: 24vh` pushes the card down from the top.
- **Background**: Image at bottom-right, `background-size: 100%`, `no-repeat`.
- **Responsive**: At ≤992px — input height 50px. At ≤767px — icon 26×26, button min-width 100px, font 13px.

## Potential implementation pitfalls

- The original uses `all: revert` CSS reset — Tailwind's base layer handles this.
- The `overflow: hidden` on the pill card clips the button's hover effect — make sure the button background extends to the card edges.
- The `padding-top: 24vh` means the card is not vertically centered — it's pushed down. Use `pt-[24vh]` or equivalent.
- The background image is positioned `bottom right` with `background-size: 100%` — this means it fills the width and sits at the bottom. Use `bg-[url(...)] bg-bottom bg-no-repeat bg-[length:100%_auto]`.
- The form has `max-width: 790px` but the inner card extends to full form width.
