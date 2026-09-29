# SearchHub — Design Notes

Source: ColorLib Search Form V4 (colorlib-search-4)
Preview: https://colorlib.com/etc/searchf/colorlib-search-4/

## Structure Order

1. Full-viewport container (background image, flex center)
2. Search form wrapper (max-width 790px)
   a. Legend/heading: "WHAT ARE YOU LOOKING FOR?" (white, 36px, 800 weight, centered)
   b. Inner form container
      - Search input field (pill-shaped white bar, 70px height, 34px radius)
      - Search icon button (absolutely positioned right, 70px wide)
   c. Suggestion tags row (white pills, 14px Helvetica)

## Fidelity Notes

- **Background**: full-viewport image (woman in orange shirt). Use a picsum placeholder image. Set as `background: url(...)` with `background-size: cover; background-position: center`.
- **Heading**: "WHAT ARE YOU LOOKING FOR?" — Poppins 800, 36px, white, centered, `margin-bottom: 50px`. All caps.
- **Search bar**: white bg, `border-radius: 34px` (full pill shape), `min-height: 70px`. Not a regular rectangle — very rounded.
- **Input**: inside the pill bar, `padding: 10px 70px 10px 32px`, text color `#666`, font 18px. Placeholder "Type to search..." (browser default color).
- **Search button**: absolutely positioned inside the bar, `width: 70px`, transparent background, dark gray SVG magnifying glass (`#333`), hover `#000`. Icon is 40x40px.
- **Suggestion tags**: white text, `font: 14px Helvetica`, `border-radius: 16px`, `padding: 0 15px`, `line-height: 32px`, `margin-right: 10px`, `margin-bottom: 10px`. No visible background — just white text with pill-shaped outline implied by the border-radius. Tags: New Arrivals, Ladies, Mens, Accessories, Sale.
- **Form max-width**: 790px, centered.

## Implementation Approach

- Single component: `SearchBar.tsx` with heading, input bar, and suggestion tags
- Use lucide-react `Search` icon for the magnifying glass
- Background image: use picsum.photos placeholder
- Tailwind theme tokens: no brand color — neutral palette (white, #333, #666)
- Pill shape via `rounded-full` (Tailwind)
- Suggestion tags: inline flex wrap with individual tag components
- Input styled with appearance-none, transparent bg, custom padding
