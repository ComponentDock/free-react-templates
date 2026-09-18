# Placeboard — Implementation Tasks & Design Notes

Source: ColorLib Listed — https://preview.colorlib.com/theme/listed/

## Section order (top to bottom)

1. Navbar
2. Hero with search
3. Feature Destinations (3 cards)
4. Top Destinations (6-grid)
5. Promo Cover (parallax banner)
6. Featured Destinations Carousel
7. Footer (4 columns)

## Component breakdown

| Component         | File                    | Notes                                                    |
| ----------------- | ----------------------- | -------------------------------------------------------- |
| Navbar            | src/components/Navbar.tsx| Transparent bg, absolute position, white links, dropdown|
| Hero              | src/components/Hero.tsx  | Full-viewport, parallax bg image, dark overlay, search  |
| FeatureDestinations | src/components/FeatureDestinations.tsx | 3 equal-width image cards, dark overlay, icon+text |
| TopDestinations   | src/components/TopDestinations.tsx | 6-col responsive grid, image+h2+p cards           |
| PromoCover        | src/components/PromoCover.tsx | Parallax full-width, heading+subtext+black button  |
| FeaturedCarousel  | src/components/FeaturedCarousel.tsx | Split layout: left text+arrows, right carousel   |
| Footer            | src/components/Footer.tsx| 4 columns: About/Links/Blog/Connect, Component Dock link |

## Design notes

- **Hero parallax:** Use `background-attachment: fixed` + `background-size: cover` for the parallax effect. Overlay via `::before` pseudo-element with `rgba(0,0,0,0.5)`.
- **Search form:** Inline layout (flex row), input square corners 55px height, button blue #007bff 160px wide square corners.
- **Feature Destinations cards:** Each card is a full-width background image link. Dark overlay via `::before`. Text absolutely positioned bottom. Icon above heading.
- **Top Destinations grid:** Use CSS grid or flexbox. 6-col desktop, 3-col tablet, 2-col mobile. Cards have image + h2 + small gray text. Hover reduces opacity to 0.7.
- **Promo Cover:** `background-attachment: fixed` for parallax. 500px height. White text, centered content. Black (#000) button with square corners.
- **Carousel:** Use a lightweight carousel library (e.g. embla-carousel or swiper) instead of Owl Carousel. Split layout: left 33% for text/arrows, right 67% for carousel.
- **Footer:** Light gray #f2f2f2 background. 4-col grid. Social icons from lucide-react. Bottom copyright with Component Dock link.
- **Typography:** Load Playfair Display (headings) + Raleway (body) via Google Fonts `<link>` in index.html.

## Fidelity notes

- The original uses Bootstrap 4 grid classes — translate to Tailwind grid/flex utilities.
- The original uses Ionicons + FontAwesome — use lucide-react for icons.
- The original uses jQuery + Owl Carousel for the slider — use a React carousel library.
- Placeholder images via `https://picsum.photos/seed/placeboard-<n>/<w>/<h>`.
- All buttons are square corners (no border-radius).
- Primary color is #007bff (Bootstrap blue), hover #3395ff.
