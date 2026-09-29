# SeekSpot — Implementation Tasks & Design Notes

Source: ColorLib "Search Form Bar 10" (slug: `search-form-bar-10`)
New name: `seekspot`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: flex centered, min-h-screen, bg-[#f5f5f5]
   - Compose the SearchBar component
   - Include footer component with Component Dock link

2. **SearchBar component** (`src/components/SearchBar.tsx`)
   - Title heading: "Search" in dark gray, semibold, centered, mb-8
   - Pill container: relative, flex items-center, bg-[#dfb8e0], rounded-full, h-12, w-72
   - Input inside pill: bg-transparent, placeholder "Search...", text gray, no border, w-full
   - Circular button: absolute, right-[-8px], bg-[#c96eb5], rounded-full, w-12, h-12, flex items-center justify-center
   - Button icon: white "X" (lucide-react X icon or inline SVG), 18px
   - Button hover: bg-[#b55ea1] with transition
   - Input focus: outline-2 outline-[#c96eb5], no box-shadow

3. **Footer component** (`src/components/Footer.tsx`)
   - Simple centered footer with Component Dock link
   - Link to https://www.componentdock.com/

4. **Styling** (`src/index.css`)
   - Tailwind @theme for brand color (#c96eb5 pink/magenta)
   - Font: Montserrat via Google Fonts link in `index.html`

5. **Tests** (`src/components/*.test.tsx`)
   - SearchBar: renders heading, input with placeholder, circular button with X icon
   - SearchBar: input focus state has outline
   - SearchBar: button hover state darkens
   - SearchBar: button clears input on click
   - Footer: renders Component Dock link
   - App: composes SearchBar and Footer
   - Accessibility: keyboard navigation, aria-labels

## Fidelity notes

- **Layout**: Simple micro-component — centered on light gray bg. No complex sections.
- **Pill container**: Fully rounded (rounded-full / border-radius 50px), soft pink/lavender background (#dfb8e0), height 50px, width ~280px.
- **Input**: Transparent background inside the pill — the pink shows through. Gray placeholder "Search...".
- **Circular button**: Darker pink/magenta (#c96eb5), 50×50px, absolutely positioned at the right edge, overlapping the pill. Contains white "X" icon.
- **Overlap effect**: The button sits partially outside the pill container. Use `position: absolute; right: -8px` (or similar) relative to the pill.
- **Title**: Simple centered heading above the bar, dark gray text, semibold weight.
- **Focus**: Outline ring in brand pink on input focus. No box-shadow.
- **Hover**: Button background darkens from #c96eb5 to #b55ea1 with 0.2s ease transition.
- **Button shadow**: Subtle box-shadow: `0 2px 8px rgba(0,0,0,0.1)` for depth.
- **Responsive**: Pill width adapts on smaller screens. Bar stays centered.

## Potential implementation pitfalls

- The circular button **overlaps** the pill container — this requires the pill to have `position: relative` and the button to be `position: absolute` with a negative right offset.
- Pill has right padding to prevent input text from going under the overlapping button: `pr-14` (padding-right ~56px) to make room for the button.
- The button icon is an "X" (close/clear), NOT a magnifying glass — this is a distinctive design choice. The X clears the input.
- When the button clears the input, the component should manage input value state.
- Input has no visible border — the pill background provides the visual boundary.
- The pill's fully rounded shape means the input inside must also respect the rounded corners (overflow hidden on the pill container).
