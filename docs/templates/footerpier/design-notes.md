# FooterPier — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 19
- URL: https://colorlib.com/wp/template/bootstrap-footer-19/
- Preview: https://preview.colorlib.com/theme/bootstrap-footer-19/ (unreachable — design based on screenshot)
- New name: footerpier

## Structure Order (top to bottom)

1. **Content Area** — Full-viewport-height light section with centered heading "Footer #19" (matches other footer templates' preview pattern)
2. **Footer Main** — Four-column row on purple background (#7C4DFF):
   - Col 1: Brand logo + description + newsletter subscribe form
   - Col 2: Latest news blog entries (title + date + link)
   - Col 3: Additional info or navigation links
   - Col 4: Instagram photo grid (2x3 or similar)
3. **Social Icons Row** — Horizontal row of social media icons
4. **Footer Copyright** — Full-width centered row with top border

## Section-by-Section Fidelity Notes

### Content Area
- Use `min-h-[70vh]` with `bg-gray-50` and flexbox centering
- H2 text "Footer #19" centered, w-full
- Matches the preview convention of other Bootstrap Footer templates

### Footer Main
- `bg-[#7C4DFF] text-white py-20 px-0` (5rem = 20 * 0.25rem)
- Container width, 4-column grid on md+ (`grid grid-cols-1 md:grid-cols-4 gap-8`)
- **Column 1 (Brand + Subscribe):**
  - Logo `<a>` tag: `text-white text-[1.5rem] block mb-4 font-bold`
  - Description `<p>`: `text-white/80` with placeholder lorem ipsum text
  - Subscribe form: `<form>` with email `<input>` and submit `<button>`
  - Input: `bg-white/20 text-white placeholder-white/50 border-none rounded px-4 py-2 mb-3 w-full`
  - Button: `bg-white text-[#7C4DFF] border-none rounded px-6 py-2 font-semibold`
- **Column 2 (Latest News):**
  - Heading: "Latest News" in white
  - 2-3 blog entry items, each with title + date
  - Title: `text-white font-semibold`
  - Date: `text-white/60 text-sm`
  - Link: `text-white/80 hover:text-white`
- **Column 3 (Additional Info / Links):**
  - Could contain quick nav links or additional brand info
  - Follows same white/semi-transparent text pattern
- **Column 4 (Instagram Grid):**
  - Heading: "Instagram" in white
  - 2x3 grid of placeholder images: `grid grid-cols-3 gap-2`
  - Images: `w-full aspect-square object-cover rounded`
  - Use `picsum.photos/seed/footerpier-<n>/150/150` for deterministic placeholders

### Social Icons Row
- Horizontal flex row with gap
- Icons: `text-white/70 hover:text-white transition-colors`
- Use `lucide-react` icons: Instagram, Twitter, Facebook, etc.
- Each wrapped in an `<a>` with `aria-label`

### Copyright Bar
- Full-width centered row below the main content
- `border-t border-white/10 mt-5 pt-5 text-center`
- `<p><small>` with copyright text
- Component Dock link: `<a href="https://www.componentdock.com/" target="_blank" rel="noreferrer">`

### Design Tokens for Tailwind @theme

```css
@theme {
  --color-brand-footer: #7C4DFF;
  --color-footer-text: #ffffff;
  --color-footer-text-muted: rgba(255, 255, 255, 0.7);
  --color-footer-border: rgba(255, 255, 255, 0.1);
  --font-family-footer: "Poppins", sans-serif;
}
```
