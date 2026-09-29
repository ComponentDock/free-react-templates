# SearchVale — Design Notes

Source: ColorLib Search Form V3 (colorlib-search-3)
Preview: https://colorlib.com/etc/searchf/colorlib-search-3/

## Structure Order

1. Full-viewport container (purple background, flex center)
2. Search form wrapper (max-width 790px)
3. Inner form (white bg, flex row, shadow, border-radius 3px)
   a. Category dropdown (200px, left)
   b. Text input (flex-grow, center)
   c. Search button (74px, green, right)

## Fidelity Notes

- **Background**: solid `#a598ee` — no gradient, no image. Full viewport height.
- **Search bar**: white bg, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`, `border-radius: 3px`. Not perfectly round — subtle rounding.
- **Category dropdown**: 200px wide on desktop, full-width on mobile. Right border `rgba(0,0,0,0.1)` separator. Chevron is `#e5e5e5` triangle. Font: Poppins 14px, color `#888`.
- **Text input**: transparent bg, no border, placeholder "Enter Keywords?" in `#888`, text in `#555`, padding `10px 32px`.
- **Search button**: `#63c76a` bg, white SVG magnifying glass (16px), hover `#50c058`, transition `all .2s ease-out`. Width 74px, height matches input field.
- **Height**: 68px on desktop, 50px on mobile (max-width 992px breakpoint).
- **Mobile layout**: below 768px, flex-wrap, 20px padding, each field becomes full-width with bottom border separator. Input gets a visible border `rgba(255,255,255,0.3)`.

## Implementation Approach

- Single component: `SearchBar.tsx` composing three sub-elements
- Use native `<select>` styled with Tailwind (appearance-none, custom chevron)
- SVG search icon inline (lucide-react `Search` icon as alternative)
- Tailwind theme tokens: `--color-brand: #a598ee`, `--color-btn: #63c76a`, `--color-btn-hover: #50c058`
- Responsive via Tailwind breakpoints: `md:` for desktop, base for mobile

## Categories (dropdown options)

Category, New Arrivals, Sale, Ladies, Men, Clothing, Footwear, Accessories
