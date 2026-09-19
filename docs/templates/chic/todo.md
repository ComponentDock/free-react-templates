# Chic — Implementation Notes

Source: ColorLib Malefashion
Preview: https://preview.colorlib.com/theme/malefashion/
New name: chic
App path: apps/chic

## Section Order (matching source 1:1)

1. **Header** — Dark top bar (#111111) with shipping info + account links. White nav bar with centered logo, nav links, search/wishlist/cart icons.
2. **Hero** — Full-width slider, 2 slides. Left text: red subtitle, dark heading, paragraph, black CTA button with arrow. Social icons below. Right: large product photo with circular overlay element.
3. **Banners** — 3-column grid. Each column: product image with text overlay and "SHOP NOW" link. Columns: Clothing Collections, Accessories, Shoes.
4. **Products** — Tabbed section (Best Sellers / New Arrivals / Hot Sales). 4-column product grid. Cards: image, label badge (New/Sale), product name, price.
5. **Categories** — Warm gray (#f3f2ee) background. Centered featured product image. Product name, price, countdown timer (Days/Hours/Minutes/Seconds).
6. **Instagram** — Heading "Instagram". 3×2 image grid (6 images). Each image is a clickable link.
7. **Latest Blog** — Heading "Fashion New Trends". 3-column blog post cards: image, date, article title.
8. **Footer** — Dark (#111111) background. 4 columns: About (logo + text), Shopping links, Information links, Newsletter (email input + submit). Copyright bar with heart icon and Component Dock link.

## Design Token Mapping (ColorLib → Tailwind)

| ColorLib CSS | Tailwind Token | Usage |
|---|---|---|
| `#e53637` | `--color-brand` / `text-brand` | Accent red — hero subtitle, footer heart, sale badges |
| `#111111` | `--color-dark` / `bg-dark` | Header top, buttons, footer, headings |
| `#000000` | `--color-black` / `bg-black` | Primary CTA button |
| `#333333` | `--color-text` / `text-text` | Body text |
| `#707070` | `--color-text-secondary` / `text-text-secondary` | Secondary text |
| `#b7b7b7` | `--color-text-muted` / `text-text-muted` | Footer text |
| `#f5f5f5` | `--color-bg` / `bg-bg` | Page background |
| `#f3f2ee` | `--color-bg-warm` / `bg-bg-warm` | Categories section |
| `"Nunito Sans"` | `font-sans` | Body + headings |

## Fidelity Notes

- **Buttons are sharp/square** — no border-radius (border-radius: 0). This is a key visual differentiator.
- **Primary CTA button** has `letter-spacing: 4px` for a wide, luxurious feel.
- **Hero has circular overlay** — a large semi-transparent circle behind the model photo (likely a decorative SVG/CSS element). Can recreate with a large div with `rounded-full` and low opacity.
- **Product labels** — "New" in black bg white text, "Sale" in black bg white text (overlaid on product image corner).
- **Categories section** uses warm gray bg (#f3f2ee) — distinct from page bg (#f5f5f5).
- **Countdown timer** in categories section needs Days/Hours/Minutes/Seconds display.
- **Instagram grid** — 3 columns × 2 rows, equal height images with hover effect (overlay with icon).
- **Footer newsletter** — input with bottom border only (no full border), submit button positioned absolute right.
- **Font** — "Nunito Sans" is a Google Font, load via `<link>` in index.html.
- **Social icons** — Facebook, Twitter, Pinterest, Instagram in hero. Use lucide-react icons.
- **Product images** — use `https://picsum.photos/seed/chic-<n>/<w>/<h>` for deterministic placeholders.

## Component Structure

```
apps/chic/
├── src/
│   ├── main.tsx              # Entry (excluded from coverage)
│   ├── App.tsx               # Composes all sections
│   ├── index.css             # Tailwind + theme tokens
│   ├── test/
│   │   └── setup.ts          # jest-dom import
│   └── components/
│       ├── Header.tsx         # Top bar + nav
│       ├── Hero.tsx           # Hero slider
│       ├── Banners.tsx        # 3-column promo banners
│       ├── Products.tsx       # Tabbed product grid
│       ├── Categories.tsx     # Featured product + countdown
│       ├── Instagram.tsx      # 3×2 image grid
│       ├── LatestBlog.tsx     # 3-column blog posts
│       └── Footer.tsx         # 4-column footer + copyright
```

## Implementation TODO

- [ ] Copy simplest existing app (e.g. apps/abjure) as scaffold, rename to chic
- [ ] Set up index.css with @theme tokens (#e53637 brand, #111111 dark, Nunito Sans font)
- [ ] Load Nunito Sans via Google Fonts link in index.html
- [ ] Implement Header component (top bar + nav)
- [ ] Implement Hero component (slider with 2 slides, text overlay, social icons)
- [ ] Implement Banners component (3-column grid with images + text)
- [ ] Implement Products component (tabs + product grid with cards)
- [ ] Implement Categories component (featured product + countdown timer)
- [ ] Implement Instagram component (3×2 image grid)
- [ ] Implement LatestBlog component (3-column blog cards)
- [ ] Implement Footer component (4 columns + newsletter + copyright)
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh and ensure all checks pass
- [ ] Commit, push, and open PR
