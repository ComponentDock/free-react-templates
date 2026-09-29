# SearchScope — Implementation Tasks & Design Notes

Source: ColorLib "Search Form Bar 09" (slug: `search-form-bar-09`)
New name: `searchscope`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: flex centered, min-h-screen, bg-[#f5f5f5]
   - Compose the SearchBar component
   - Include footer component with Component Dock link

2. **SearchBar component** (`src/components/SearchBar.tsx`)
   - Title heading: "Search" in dark gray, semibold, centered, mb-8
   - Input + button row: flex, no gap, centered horizontally
   - Input: white bg, h-12, w-72, rounded-l, border, placeholder "Search..."
   - Button: green bg (#5cb85c), rounded-r, white text, h-12, px-6, font-semibold
   - Button hover: bg-[#4cae4c] with transition
   - Input focus: outline-2 outline-[#5cb85c], no box-shadow

3. **Footer component** (`src/components/Footer.tsx`)
   - Simple centered footer with Component Dock link
   - Link to https://www.componentdock.com/

4. **Styling** (`src/index.css`)
   - Tailwind @theme for brand color (#5cb85c)
   - Font: Montserrat via Google Fonts link in `index.html`

5. **Tests** (`src/components/*.test.tsx`)
   - SearchBar: renders heading, input with placeholder, button with label
   - SearchBar: input focus state has outline
   - SearchBar: button hover state darkens
   - Footer: renders Component Dock link
   - App: composes SearchBar and Footer
   - Accessibility: keyboard navigation, aria-labels

## Fidelity notes

- **Layout**: Very simple micro-component — centered on light gray bg. No complex sections.
- **Input**: White background, rounded-left only (4px), 1px solid #e0e0e0 border, height 50px, width 300px.
- **Button**: Green (#5cb85c), rounded-right only (4px), white text, same height as input, no border.
- **Unified bar**: Input + button form one continuous bar with no gap. Outer corners are 4px, inner corners are 0.
- **Title**: Simple centered heading above the bar, dark gray text, semibold weight.
- **Focus**: Outline ring in brand green on input focus. No box-shadow.
- **Hover**: Button background darkens from #5cb85c to #4cae4c with 0.2s ease transition.
- **Placeholder**: Light gray text "Search..." in the input.
- **Responsive**: Input width adapts on smaller screens. Bar stays centered.
- **No background image**: This is a plain solid-color background (unlike SearchGlow which has a photo).

## Potential implementation pitfalls

- The input and button must have **zero gap** between them — use `flex` without gap and ensure no margin between the two elements.
- Border handling: when input and button are adjacent, the shared border should not double. Use `border-r-0` on the input to avoid double borders at the junction.
- Input rounded-left only: use `rounded-l` (Tailwind) which sets `border-radius: 0.375rem 0 0 0.375rem`.
- Button rounded-right only: use `rounded-r`.
- Focus ring: use `focus:outline-2 focus:outline-[#5cb85c]` and ensure no conflicting `focus:ring-*` from Tailwind's default.
- The button height must exactly match the input height (both 50px / h-12) to form a clean unified bar.
