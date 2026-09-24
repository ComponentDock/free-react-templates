# Torque — Design Notes & Implementation Outline

Source: ColorLib Force (https://colorlib.com/wp/template/force/)
Preview: https://preview.colorlib.com/theme/force/
New name: torque (apps/torque, @free-react-templates/torque)

## Section order (top → bottom)

1. **Navbar** — Top bar (date + social) → Logo area → Main nav (Home, Category, Archive, Elements, Contact + search)
2. **HeroBanner** — Full-width carousel, 3 slides, background image, dark overlay, centered text
3. **EditorsChoice** — "Editor's Choice" heading, 4-column card grid
4. **NewsArea** — Two-column (8/4):
   - Left: Latest News (4 horizontal posts) → Travel and Food (2×4 small cards)
   - Right sidebar: Most Popular News (featured + carousel), Ad banner, Social Networks (6 items), Newsletter (email form)
5. **ProductList** — 3-column: Best Product Deals (2 cols × 4 items) + Brilliant Ideas (1 col × 4 items)
6. **Footer** — Dark navy bg: Logo/about + Quick Links (2 sub-cols) + Most Viewed News → Bottom bar (copyright + Component Dock + social icons)

## Component breakdown

```
src/
  App.tsx
  components/
    Navbar.tsx           — TopBar, LogoArea, MainNav sub-components
    HeroBanner.tsx       — Carousel with slides, indicators
    EditorsChoice.tsx    — 4-card grid, each ArticleCard
    NewsArea.tsx         — Layout wrapper (8/4)
    LatestNews.tsx       — 4 horizontal media posts
    TravelFood.tsx       — 2×4 small card grid
    Sidebar.tsx          — Wrapper for sidebar widgets
    PopularNews.tsx      — Featured article + carousel of small posts
    SocialNetworks.tsx   — 6-item list with icons + counts
    Newsletter.tsx       — Email form with envelope icon
    ProductList.tsx      — 3-column layout
    ProductColumn.tsx    — Single column of 4 media items
    Footer.tsx           — 3-col + bottom bar
```

## Design tokens to set in @theme

```css
@theme {
  --color-brand: #ff1857;
  --color-brand-light: #ff4d7d;
  --color-cyan: #4cd3e3;
  --color-yellow: #f8b600;
  --color-blue: #38a4ff;
  --color-lime: #f4e700;
  --color-dark: #222222;
  --color-muted: #777777;
  --color-light-text: #999999;
  --color-bg: #ffffff;
  --color-bg-alt: #f9f9ff;
  --color-footer: #04091e;
}
```

## Fidelity notes

- **Buttons/badges**: sharp corners (border-radius: 0), brand accent bg, white text, inline-block
- **Cards**: minimal to no border-radius, clean edges
- **Hero**: 600px min-height, background image with dark overlay, centered white text
- **Sidebar newsletter**: 3px top border in brand accent, envelope icon in 60px pink circle
- **Footer**: very dark navy (#04091e), white text, separator line above bottom bar
- **Typography**: Roboto for body/headings, Open Sans for secondary
- **Layout**: Bootstrap 12-column grid, responsive with hamburger nav on mobile
- **Icons**: Font Awesome → replace with lucide-react equivalents
- **Carousel**: Owl Carousel → replace with simple React carousel or CSS-only
- **Images**: Use picsum.photos/seed/torque-N/W/H placeholders

## Implementation priority

1. Navbar (static, no mobile toggle yet)
2. HeroBanner (static carousel, first slide)
3. EditorsChoice (4 cards)
4. LatestNews (4 posts)
5. TravelFood (8 small cards)
6. Sidebar widgets (PopularNews, SocialNetworks, Newsletter)
7. ProductList (3 columns)
8. Footer
9. Responsive mobile layout
10. Carousel interactivity (if needed)
