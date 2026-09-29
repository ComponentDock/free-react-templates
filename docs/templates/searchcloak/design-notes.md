# SearchCloak — Implementation Notes

**Source:** ColorLib Search Form Bar 20
**Preview:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-20/
**New name:** searchcloak

## Structure Order

1. `Navbar.tsx` — brand name (left), nav links (right), search icon toggle (far right)
2. `SearchOverlay.tsx` — full-width overlay with text input + close button
3. `ContentSection.tsx` — centered instruction paragraph
4. `Footer.tsx` — Component Dock link

## Section-by-Section Fidelity Notes

### Navbar
- Flex row: brand left (col-md-3), nav links right (col-md-7)
- Brand: `<h3><a>Brand</a></h3>` styled as blue link
- Nav links: `<ul>` with `Home`, `About`, `Contact` — inline-flex, no list-style
- Search icon: magnifying glass SVG, absolutely positioned far right
- Bottom border: `1px solid #dae0e5`
- Box-shadow: `0 1px 5px 0 rgba(0, 0, 0, 0.1)`
- Link padding: `25px 0`, margin-left: `20px`
- Search icon wrap: margin-left `50px` on desktop

### SearchOverlay
- Absolutely positioned over the navbar (top: 0, left: 0, width: 100%)
- White background, full navbar height
- Hidden by default: `opacity: 0; visibility: hidden`
- Active state: `opacity: 1; visibility: visible`
- Transition: `0.3s all ease`
- Input: `height: 50px`, `border: none`, `background: transparent`, `padding-left: 20px`, `border-radius: 0`
- Close button: absolute right, top: 50%, transform: translateY(-50%), padding: 20px
- Close icon color: `#ccc` idle → `#000` hover
- Close icon SVG: X mark (cross)

### ContentSection
- Centered text with `col-md-7` centered container
- Paragraph: "Please click the search icon toggle button top right."
- Text color: `#757575`, font-weight: `300`
- Section padding: `7rem 0`
- Page body height: `200vh` (for scroll demo — can use min-h-screen or similar)

### Footer
- Simple footer with Component Dock link
- Follows standard template footer pattern

## Key Implementation Details

1. **Toggle mechanism:** React state `isSearchOpen` toggled by search icon click and close button click. Also listen for Escape key.
2. **Overlay positioning:** Use `absolute inset-0` or similar to cover the navbar area. The overlay should be a sibling or child of the navbar wrapper.
3. **No framework dependency:** Original uses custom CSS classes (`cl-*`). Replace with Tailwind utility classes.
4. **Font loading:** Add Google Fonts link for Roboto (weights 300, 400) in `index.html`.
5. **SVG icons:** Use `lucide-react` — `Search` icon for the search toggle, `X` icon for the close button.

## Design Token Mapping (Tailwind)

| Original CSS | Tailwind |
|-------------|----------|
| `#007bff` (link blue) | `text-blue-500` or custom `--color-primary` |
| `#0056b3` (link hover) | `hover:text-blue-700` |
| `#212529` (body text) | `text-gray-900` |
| `#757575` (paragraph) | `text-gray-500` |
| `#dae0e5` (border) | `border-gray-200` |
| `rgba(0,0,0,0.1)` (shadow) | `shadow-sm` |
| `#fff` (backgrounds) | `bg-white` |
| `font-weight: 300` | `font-light` |
| `0.3s all ease` | `transition-all duration-300 ease-in-out` |
| `height: 50px` (input) | `h-12` |
| `padding: 7rem 0` (content) | `py-28` |
| `padding: 25px 0` (nav links) | `py-[25px]` |
| `margin-left: 20px` (nav links) | `ml-5` |
| `margin-left: 50px` (search wrap) | `ml-[50px]` |
