# SearchGlow — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Search Form V22" (slug: `colorlib-search-22`)
New name: `searchglow`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: flex centered, min-h-screen
   - Background image: use `https://picsum.photos/seed/searchglow/1920/1080` as placeholder
   - Compose the search input component

2. **Search input component** (`src/components/SearchInput.tsx`)
   - Single input field with transparent background
   - White text, white placeholder "What are you looking for?"
   - Semi-transparent white bottom border: `border-b-2 border-b-white/50`
   - On focus/hover: border becomes `border-b-white` (full opacity)
   - Large magnifying glass icon (lucide-react `Search` or inline SVG) positioned left
   - Icon: white, 50×50 desktop / 36×36 mobile
   - Input height: 80px desktop, 50px mobile
   - Padding: `10px 32px 10px 70px` desktop, adjusted for mobile

3. **Styling** (`src/index.css`)
   - Tailwind @theme for brand color (if needed)
   - Font: Montserrat 500 via Google Fonts link in `index.html`
   - Background image handling via Tailwind classes

4. **Tests** (`src/components/*.test.tsx`)
   - SearchInput: renders with placeholder, handles focus/hover border change
   - App: renders search input, full viewport layout
   - Accessibility: aria-labels, keyboard focus

## Fidelity notes

- **Background**: Full-viewport photo with `background-size: cover`, `background-position: center`. Use picsum placeholder.
- **Input transparency**: `background: transparent` — the photo shows through.
- **Bottom border animation**: `border-b-2 border-b-white/50` → `border-b-white` on focus, `transition: all .2s ease-out`.
- **Icon placement**: Absolute left, `width: 70px`, vertically centered. SVG `fill: #fff`, `50×50`.
- **Input dimensions**: Height 80px desktop, 50px mobile. Max-width 390px form.
- **Responsive**: At ≤767px — height 50px, padding-left 45px, icon 36×36, font 16px.
- **No outline/shadow on focus**: `outline: 0`, `box-shadow: none`.
- **Placeholder**: White, 18px, same font as input.

## Potential implementation pitfalls

- The original uses `all: revert` CSS reset — in React + Tailwind, this is handled by Tailwind's base layer.
- The `input[type="search"]` needs `-webkit-appearance: textfield` to hide the default search clear button (use type="text" instead, matching the original).
- The background image needs to be a placeholder (picsum) — the original uses a local `search-bg.jpg`.
- The transparent input means the background image is visible through the input — ensure the input doesn't have any default browser background.
- The bottom border transition needs careful handling with Tailwind's transition utilities.
