# Findbar — Design Notes & Implementation Outline

Source: ColorLib Search Form Bar 01
Preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-01/
Name: findbar (new original name)

## Structure order

1. **Navbar** — none (snippet, no nav)
2. **Hero / Section** — centered heading + search form
3. **Footer** — Component Dock attribution only

## Section-by-section fidelity notes

### Section: Search Form (main content)

- Full-page centered layout (section padding: 7em 0)
- Container: max-width 720px at md, centered with flexbox
- Heading: "Search Form/Bar #01", 28px, black, centered
- Search form: white background, 40px border-radius (pill), subtle box-shadow
  - Icon button: 50x50px, absolute positioned left, contains magnifying glass SVG
  - Input: left padding 50px (clears icon), full width, no visible border on focus
  - Placeholder text: "Search..."

### Footer

- Minimal footer with Component Dock link
- No other content in the original

## Design tokens for Tailwind @theme

```
--color-brand-bg: #fafafa;
--color-brand-white: #fff;
--color-brand-black: #000;
--color-brand-text: gray;
--color-brand-border: #ced4da;
--color-brand-focus: rgba(0, 123, 255, 0.25);
--font-brand: "Poppins", Arial, sans-serif;
```

## Component breakdown

| Component    | File              | Notes                                    |
| ------------ | ----------------- | ---------------------------------------- |
| App          | `App.tsx`         | Renders SearchSection + Footer           |
| SearchSection| `SearchSection.tsx`| Heading + centered search form          |
| Footer       | `Footer.tsx`      | Component Dock link                      |

## Implementation notes

- Use `lucide-react` `Search` icon for the magnifying glass
- Search input: native `<input type="search">` with rounded-full
- Box shadow: `shadow-[0px_5px_20px_-12px_rgba(0,0,0,0.34)]`
- Icon wrapper: absolute, left-0, top-0, w-12 h-12, flex center
- Input: pl-12 (50px), no border on focus
- Container: max-w-2xl mx-auto
- Font: Google Fonts `<link>` for Poppins in index.html
