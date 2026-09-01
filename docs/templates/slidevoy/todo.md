# SlideVoy — Template Prep Notes

## Source

- ColorLib: Carousel V18
- Slug: `carousel-18`
- Preview: https://preview.colorlib.com/theme/bootstrap/carousel-18/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-18.jpg

## Design analysis

### Overall aesthetic

Clean, minimal carousel template. White background, centered content. Split 50/50 layout — image on one side, text on the other. Strong typography contrast: Roboto (sans-serif) for body/navigation, Playfair Display (serif) for featured headings.

### Color palette

- Background: white (#ffffff implied, no explicit bg-color in style.css)
- Body text: #999999 (gray-400)
- Category labels: #adb5bd (gray-500), uppercase
- Headings: #000000 (black)
- Tab nav inactive: #999999
- Tab nav active: #000000
- Tab nav border: #cccccc (gray-300)

### Typography

- Body + nav: "Roboto", 300/400 weight
- Featured headings (in cards): "Playfair Display", 400 weight, serif
- Category labels: 12px, uppercase, bold, letter-spacing 0.2rem

### Layout structure (section order)

1. **Centered heading** — "Carousel #8" as h2, centered, large margin
2. **Tab navigation bar** — horizontal flex row, full width, bottom border `1px solid #ccc`. Active tab has `::before` pseudo-element with black bottom border.
3. **Carousel area** — Owl Carousel-based, 3 slides:
   - Each slide: 50/50 flex split
   - Left: image (img-fluid, full height of card)
   - Right: padded text area with category label, heading (Playfair Display), paragraph
4. **Dot indicators** — centered, 7px circles, active=white, inactive=50% white
5. **Prev/Next arrows** — absolute positioned at slide edges, centered vertically, 40px font-size

### Section-by-section fidelity notes

#### Heading

- Simple centered h2, "Carousel #8"
- Generous top margin (`my-5`), `text-center`
- In React: use a simple `<h2>` with Tailwind `text-center my-5 text-2xl`

#### Tab navigation

- Full width flex row with bottom border
- Each tab: inline-block, centered text, 20px padding
- Active tab: `::before` pseudo with `border-bottom: 1px solid #000`
- Colors: inactive=#999, active=#000
- In React: useState for active tab index; conditional classes

#### Carousel slides

- 50/50 horizontal split (flexbox)
- Left: image container, 50% width, full height, `object-cover`
- Right: 50% width, 50px padding (20px mobile), vertical flex
  - Category: uppercase, gray, small, spaced letters
  - Heading: Playfair Display, 2rem, black, line-height 1.3
  - Paragraph: gray (#999), weight 300
- In React: Use CSS or Tailwind for the 50/50 split. Each slide is a component.

#### Arrow navigation

- Absolute positioned at slide edges
- Left arrow: `left: 20px`, Right arrow: `right: 20px`
- Vertically centered (`top: 50%`, `transform: translateY(-50%)`)
- Icon font: icomoon (use Lucide ChevronLeft/ChevronRight instead)
- White color on transparent/no background

#### Dot indicators

- Absolute positioned, bottom: 40px, centered with `transform: translateX(-50%)`
- 7px × 7px circles, border-radius 50%
- Active: white, Inactive: rgba(255,255,255,0.5)

### Asset notes

- Images: Use `https://picsum.photos/seed/slidevoy-1/800/600` etc.
- Fonts: Google Fonts link for Roboto (300,400) + Playfair Display (400)
- Icons: lucide-react ChevronLeft/ChevronRight for arrows

### Component breakdown

1. `SlideVoy.tsx` — main page layout
2. `CarouselHeading.tsx` — centered h2
3. `TabNavigation.tsx` — horizontal tab links
4. `CarouselSlide.tsx` — 50/50 split card (image + text)
5. `CarouselArrows.tsx` — prev/next navigation arrows
6. `CarouselDots.tsx` — dot indicators

### Footer

- Must link `https://www.componentdock.com/` branded as "Component Dock"
- Replace any ColorLib attribution
