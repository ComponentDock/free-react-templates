# Dishcraft — Implementation Notes

Source: ColorLib Tasty Recipes (slug: `tastyrecipes`)
Preview: https://preview.colorlib.com/theme/tastyrecipes/

## Section Order (implement top → bottom)

1. Navbar
2. Hero
3. FeaturedRecipes
4. RecipeVideos
5. DishShowcase
6. TrendingCTA
7. Testimonials
8. DownloadApp
9. Footer

## Component Outline

### Navbar
- Sticky header, transparent → white on scroll
- Logo (text or image placeholder)
- Nav links: Home, About, Recipes, Blog (dropdown), Pages (dropdown), Contact
- Search icon (lucide Search)
- Mobile: hamburger menu (lucide Menu) + slide-down nav

### Hero
- Full-viewport section (`h-screen`)
- Background image: `https://picsum.photos/seed/dishcraft-hero/1920/1080`
- Centered content: large Satisfy cursive heading, white text
- No CTA button in original

### FeaturedRecipes
- 3-column grid (`grid grid-cols-1 md:grid-cols-3 gap-8`)
- Each card: image (`picsum.photos/seed/dishcraft-recipe-N/400/300`), title (Satisfy), category tag, cook time, "View Full Recipe" outline pill button
- Responsive: 1 col mobile, 2 col tablet, 3 col desktop

### RecipeVideos
- 2-column split (`grid grid-cols-2`)
- Left: cursive heading (72px desktop), paragraph, circular play button (purple `#918DFE` border, play icon)
- Right: stacked video thumbnails (placeholder images)

### DishShowcase
- Horizontal scroll row or grid of 4 cards
- Each: image + title + short paragraph
- Simple card layout, no button

### TrendingCTA
- Full-width section with background image (`picsum.photos/seed/dishcraft-trending/1920/600`)
- Centered text: uppercase small label + large Satisfy heading
- Solid gold `#FFC000` pill button "View all Recipes"

### Testimonials
- Section heading + subtext
- Carousel of testimonial cards (use a simple CSS scroll-snap or state-based carousel)
- Each card: circular avatar (`picsum.photos/seed/dishcraft-avatar-N/100/100`), name (Satisfy), role (uppercase small), quote
- Cards: white bg, `border border-gray-100`, `rounded-lg`, horizontal flex layout
- Dot indicators below

### DownloadApp
- 2-column split
- Left: phone mockup images (use placeholder)
- Right: cursive heading + two store buttons (dark bg, white text, Apple/Android icons from lucide or FA)
- Buttons: dark background, white icon + text, flex row

### Footer
- Dark `#000` background
- 5-column grid: Top Products, Quick Links, Features, Resources, Subscribe
- Subscribe: email input + submit button
- Copyright bar: text + social icons (lucide: Facebook, Twitter, Dribbble, Behance)
- MUST include ComponentDock link

## Design Token Mapping (CSS → Tailwind)

| Original CSS | Tailwind class / @theme value |
|---|---|
| `#FFC000` brand gold | `@theme { --color-brand: #FFC000; }` → `text-brand`, `bg-brand`, `border-brand` |
| `#918DFE` / `#615CFD` purple | `@theme { --color-accent: #615CFD; }` |
| `#000000` footer bg | `bg-black` |
| `#777777` body text | `text-gray-500` |
| `#1F1F1F` dark text | `text-gray-900` |
| `#EEEEEE` light border | `border-gray-100` |
| `"Satisfy"` heading font | Google Fonts link in `index.html`, `font-satisfy` utility |
| `"Roboto"` body font | Default Tailwind sans (or explicit `font-roboto`) |
| `30px` / `50px` pill radius | `rounded-full` |
| `5px` card radius | `rounded-lg` |
| `50%` avatar radius | `rounded-full` |

## Fidelity Notes

- Hero is image-only (no CTA button in original), keep faithful
- Recipe cards use "View Full Recipe" as an outline pill (border + text, no fill until hover)
- Play button is a circle with purple border, contains a play triangle icon
- Trending section has a parallax/image background — use `bg-fixed` or similar
- Testimonials use a carousel — original uses Owl Carousel; implement with CSS scroll-snap or a simple React carousel
- Download section has phone mockup images — use placeholder images
- Footer subscribe has a simple text input + arrow submit button
- All section headings use Satisfy cursive font
