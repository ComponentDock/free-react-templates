# Roamwise — Implementation Notes

## Source

- ColorLib: Safario (https://colorlib.com/wp/template/safario/)
- Preview: https://preview.colorlib.com/theme/safario/
- Category: Travel Agency

## Section order (from live preview)

1. **Navbar** — Transparent overlay header. Logo left, nav links center (Home, About, Packages, Pages dropdown, Blog dropdown, Contact), "Get Started" button right. Fixed on scroll with shadow.
2. **Hero Banner** — Split layout: left side has h1 "Travel More To Discover Yourself" + paragraph + "Get Started" pill button; right side has hero illustration. Decorative "magic-ball" background shapes.
3. **Services** — 3 equal cards in a row (col-lg-4): Hotel Booking, Flight Booking, Destination Booking. Each has an illustration icon, heading, and short description. White background.
4. **About** — Split layout on light gray (#f8f8ff) bg: left side has large image, right side has heading + paragraph + "Learn More" pill button. Decorative "magic-ball" shapes.
5. **Tour Packages** — 2-column asymmetric grid of 4 tour cards. Each card has a full-bleed image with an overlay showing tour name, duration, description, and price ($65/day). Centered heading above: "We offer worldwise tour plan recently".
6. **Testimonials** — Carousel on light gray bg. Each slide has avatar (left), name/role/quote (right), quote icon. Heading: "Our client says". Decorative "magic-ball" shapes.
7. **Search Package** — Split: left side has heading "Search suitable and affordable plan for your tour" + paragraph + "Learn More" button; right side has a form with 5 fields (text search, category, duration, date, price range) + "Search Package" submit button.
8. **Blog** — 3 equal cards (col-lg-4) on light gray bg. Each card: image, title link, date + comment count, excerpt. Heading: "From our Blog".
9. **Footer** — Dark navy (#04091e) background. 4 columns: About Agency, Navigation Links (2 sub-cols), Newsletter (email input), InstaFeed (8-item image grid). Bottom bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance). Footer MUST link Component Dock.

## Key design tokens to set in index.css @theme

```css
@theme {
  --color-primary: #6059f6;
  --color-primary-hover: #201aa3;
  --color-heading: #2a2a2a;
  --color-body: #888888;
  --color-bg-gray: #f8f8ff;
  --color-footer: #04091e;
  --color-accent-light: #ebebff;
  --color-accent-medium: #d1cff4;
  --font-heading: "Roboto Condensed", sans-serif;
  --font-body: "Roboto", sans-serif;
}
```

## Components to build

| Component | File | Notes |
|---|---|---|
| Navbar | Navbar.tsx | Transparent, fixed on scroll. Links with dropdowns for Pages/Blog. "Get Started" button. |
| Hero | Hero.tsx | Split: text left, image right. Pill CTA button. |
| Services | Services.tsx | 3 ServiceCard sub-components. Section intro with icon + heading + subtitle. |
| About | About.tsx | Split: image left, content right. Light gray bg. |
| TourPackages | TourPackages.tsx | Asymmetric 2-col grid, 4 TourCard with image overlay + price. |
| Testimonials | Testimonials.tsx | Carousel (use a simple CSS-based carousel or state-based). Avatar + quote layout. |
| SearchPackage | SearchPackage.tsx | Split: text left, form right. 5 form fields + submit. |
| Blog | Blog.tsx | 3 BlogCard: image, title, date/comments, excerpt. Light gray bg. |
| Footer | Footer.tsx | 4-column grid + bottom bar. Dark bg. Component Dock link. |

## Fidelity notes

- The original uses Bootstrap grid (col-md-6, col-lg-4, etc.) → replicate with Tailwind grid/flex.
- "magic-ball" decorative shapes are SVG/CSS background decorations; use CSS or SVG shapes in Tailwind.
- Tour cards use a CSS overlay technique (absolute positioned content over image with opacity transitions).
- Testimonial carousel: original uses Owl Carousel. Build a simple React state-based carousel or CSS-only.
- Section intros use a small icon image above the heading — use a Lucide icon instead.
- Pill buttons: border-radius 30px, primary bg, white text, darker hover.
- Navbar goes from transparent to solid on scroll — implement with IntersectionObserver or scroll listener.
- Images: use picsum.photos with deterministic seeds (e.g. `https://picsum.photos/seed/roamwise-hero/800/600`).
