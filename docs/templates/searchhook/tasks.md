# SearchHook — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Search Form V24" (slug: `colorlib-search-24`)
New name: `searchhook`

## Structure (implementation order)

1. **App shell** (`src/App.tsx`)
   - Full viewport layout: flex centered, min-h-screen
   - Background image: use `https://picsum.photos/seed/searchhook/1920/1080` as placeholder
   - Compose the search form component
   - Footer at bottom with Component Dock link

2. **Search form component** (`src/components/SearchForm.tsx`)
   - Horizontal flex container (`max-w-[940px]`, `justify-between`, `items-center`)
   - Three child segments: SearchInput, CategoryDropdown, SearchButton
   - Responsive: wraps vertically at ≤767px via `flex-wrap`

3. **Search input component** (`src/components/SearchInput.tsx`)
   - Text input with white bg, `border border-[#e5e5e5]`, no right border (`border-r-0`)
   - Height: `h-[68px]` desktop, `h-[60px]` tablet (≤992px)
   - Placeholder: "What are you looking for?" in `#9a9a9a`, font-size 20px
   - Input text color: `#333`, font-size 16px, padding `10px 32px`
   - Flex-grow: `flex-1`
   - Focus: no box-shadow, no outline

4. **Category dropdown component** (`src/components/CategoryDropdown.tsx`)
   - Native `<select>` element styled to match input
   - White bg, `border border-[#e5e5e5]`, no border-radius
   - Min-width: `min-w-[260px]`, height `h-[68px]`
   - Default option: "CATEGORY" (placeholder)
   - Options: "Subject A", "Subject B", "Subject C"
   - Custom chevron: SVG icon positioned right (lucide `ChevronDown`)
   - Font: Poppins 400, size 20px, color `#333`
   - Appearance: none (custom styling)

5. **Search button component** (`src/components/SearchButton.tsx`)
   - Blue bg: `bg-[#4272d7]`, hover: `bg-[#2d62d3]`
   - White text, uppercase, font-weight 300, font-size 20px
   - Width: `w-[164px]`, height `h-[68px]`
   - Transition: `transition-all duration-200`
   - Text: "SEARCH"

6. **Styling** (`src/index.css`)
   - Tailwind @theme for brand color `#4272d7`
   - Font: Poppins 400 via Google Fonts link in `index.html`
   - Background image handling via Tailwind classes

7. **Tests** (`src/components/*.test.tsx`)
   - SearchForm: renders three segments in horizontal layout
   - SearchInput: renders with placeholder, correct border styling
   - CategoryDropdown: renders with "CATEGORY" default, has options
   - SearchButton: renders with correct text, hover state
   - App: renders full viewport layout with background
   - Accessibility: aria-labels, keyboard focus, responsive behavior
   - Footer: renders Component Dock link

## Fidelity notes

- **Background**: Full-viewport photo with `background-size: cover`, `background-position: center`. Use picsum placeholder with seed "searchhook".
- **Form layout**: Horizontal flex row, max-width 940px, centered. Three segments: input (flex-1), dropdown (min-w-260px), button (w-164px).
- **Seamless join**: Text input has NO right border (`border-r-0`), so it visually connects to the dropdown. Dropdown also has no left border/margin gap.
- **Input styling**: White bg, `1px solid #e5e5e5` border, 68px height, Poppins 16px, padding `10px 32px`. Placeholder is larger (20px) and gray (#9a9a9a).
- **Dropdown**: Native select with `appearance: none`, custom chevron SVG (lucide ChevronDown), matching height/border/background as input. Options: "CATEGORY" (placeholder), "Subject A", "Subject B", "Subject C".
- **Button**: Blue `#4272d7`, white text, uppercase "SEARCH", font-weight 300, 20px font, 164px wide. Hover darkens to `#2d62d3`. Transition 0.2s ease-out.
- **Responsive (≤992px)**: Input and dropdown height reduces to 60px.
- **Responsive (≤767px)**: Form wraps vertically, all segments full-width, 20px padding around form, 20px margin between segments.
- **Font**: Poppins 400 via Google Fonts. Input and button both use Poppins.
- **No framework dependencies**: Original uses Choices.js for custom select. In React, a styled native `<select>` with `appearance: none` and a lucide ChevronDown icon achieves the same look.
