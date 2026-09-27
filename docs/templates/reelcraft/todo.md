# ReelCraft — Implementation Todo & Design Notes

**Source:** ColorLib Videograph (https://preview.colorlib.com/theme/videograph/)
**New Name:** reelcraft
**Design Category:** Video Production / Portfolio

## Structure Order (section-by-section)

1. **Navbar** — Transparent header overlay, fixed/absolute position
2. **Hero** — Full-width Swiper slider, background images, left-aligned text
3. **Services** — Two-column: left title + right 2x2 grid of service items
4. **Work Gallery** — Masonry grid with play button overlays and hover reveals
5. **Counter** — 4-column stat items with icons, numbers, labels
6. **Team** — Background image, centered title, 4 team member cards with social links
7. **Blog** — Centered title, horizontal Swiper slider of blog post cards
8. **CTA** — Dark background image, large heading, subtext, CTA link
9. **Footer** — Logo + social row, 4-column options row, copyright row

## Design Notes

### Color Palette
- Primary brand: `#00bfe7` (cyan/teal) — used on buttons, active states
- Dark CTA: `#100028` (deep purple-black)
- Dark footer: `#0a0119` (near-black with purple tint)
- Body: white / light backgrounds for content sections
- Text: white on dark sections, dark on light sections

### Typography
- Headings + buttons: `Play` (Google Fonts) — condensed, geometric feel
- Body text: `Josefin Sans` (Google Fonts) — clean, light weights
- Load both via `<link>` in index.html

### Button Style
- `.primary-btn` pattern: transparent background + white border
- Hover: brand cyan fill `#00bfe7`, white text
- Sharp corners (no border-radius)
- Font: Play, 15px, bold

### Layout Notes
- Uses Bootstrap-style grid (12-col) in the original — convert to Tailwind grid/flex
- Hero uses Swiper.js for slider (consider react-slick or embla-carousel for React)
- Work gallery uses masonry layout (CSS grid with varying spans)
- Blog section also uses a Swiper carousel
- Counter section: use animated counters (framer-motion or CSS animation)

### Section-Specific Fidelity Notes

1. **Navbar:** Absolute overlay, transparent bg, becomes semi-transparent on scroll. Logo left, nav center, social right. Dropdown under "Pages".

2. **Hero:** Full-viewport height slider. Dark overlay on background images. Left-aligned text (6/12 cols). Subtitle in small caps, heading large bold, CTA button. Swiper pagination dots.

3. **Services:** Left column (4/12) has section title "What We do?", description paragraph, and "View all services" button. Right column (8/12) has 2x2 grid of service items, each with icon (use lucide-react), title (h4), and description (p).

4. **Work Gallery:** Masonry grid with items of varying sizes (wide, large, small). Each item has a background image, a centered play button (circle with triangle icon), and on hover a dark overlay with the project title text.

5. **Counter:** 4 items in a row. Each has an icon image (use lucide-react icons), a large number counter, and a label text. Numbers animate on scroll into view.

6. **Team:** Full-width section with a dark background image. Centered section title. 4 team member cards (3/12 each). Each card has a portrait background image. On hover, the card reveals name, role, and 4 social media icon links (Facebook, X, Dribbble, Instagram — use lucide-react).

7. **Blog:** Centered section title "Blog Update" / "Our Blog". Horizontal slider of blog cards. Each card has: title (h4), date + comment count in a list, excerpt paragraph, and "Read more →" link.

8. **CTA:** Full-width section with dark background image + overlay. Left-aligned (8/12 cols) large heading text, small subtext, and a text link CTA ("Start your stories").

9. **Footer:** Dark `#0a0119` background. Top row: logo left, social icons right (border-bottom). Options row: 4 columns — About us (text + read more), Who we are (link list), Our work (link list), Newsletter (text + email input + submit button). Copyright row: centered text with year, "All rights reserved", heart icon, "Component Dock" link.

### Component Mapping

| Original Class          | React Component        | Notes                          |
| ----------------------- | ---------------------- | ------------------------------ |
| `.header`               | `Navbar.tsx`           | Sticky, transparent → solid    |
| `.hero`                 | `Hero.tsx`             | Carousel + overlay + text      |
| `.services`             | `Services.tsx`         | Two-col layout + 2x2 grid     |
| `.work`                 | `WorkGallery.tsx`      | Masonry grid + hover overlays  |
| `.counter`              | `Counter.tsx`          | Animated stat cards            |
| `.team`                 | `Team.tsx`             | Background image + card grid   |
| `.latest`               | `Blog.tsx`             | Horizontal slider of cards     |
| `.callto`               | `CallToAction.tsx`     | Dark bg + heading + CTA        |
| `.footer`               | `Footer.tsx`           | Multi-column footer            |
