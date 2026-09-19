# Hemline — Prep Notes

Source: ColorLib Fashi (https://colorlib.com/wp/template/fashi/)
Preview: https://preview.colorlib.com/theme/fashi/
New name: hemline (apps/hemline)

## Section order (top to bottom)

1. Header (top bar + main nav + department menu)
2. Hero carousel (full-width, product slides)
3. Women's banner (split: text left, image right)
4. Deal of the Week (featured product + countdown)
5. Men's banner (split: image left, text right)
6. Latest Blog (3-column cards)
7. Instagram photo gallery (6 images, hover overlay)
8. Footer (4-column: about, shop, quick links, newsletter)

## Design tokens (from CSS analysis)

- Brand/accent: #e7ab3c (golden amber)
- Dark backgrounds: #252525, #191919
- Light backgrounds: #ffffff, #f3f3f3, #ebebeb
- Body text: #636363 / #4c4c4c
- Muted text: #b2b2b2
- Primary button: bg #e7ab3c, text #ffffff, border-radius 60px (pill)
- Font: Muli (Google Fonts), weights 300-900
- Section padding: ~60px vertical (spad class)

## Component outline

| Component | File | Notes |
|---|---|---|
| Header | Header.tsx | TopBar sub-component + NavBar + DeptMenu |
| HeroCarousel | Hero.tsx | Auto-rotating carousel with product slides |
| WomenBanner | WomenBanner.tsx | Split section: text + image |
| DealOfWeek | DealOfWeek.tsx | Featured product + countdown timer |
| MenBanner | MenBanner.tsx | Mirror of WomenBanner |
| LatestBlog | LatestBlog.tsx | 3-column blog cards |
| InstagramGallery | InstagramGallery.tsx | 6 square images, hover overlay |
| Footer | Footer.tsx | 4-column with newsletter + social + ComponentDock link |

## Fidelity notes

- Match dark background throughout (#252525 body, #191919 sections)
- Golden accent (#e7ab3c) on buttons, links, price labels
- Pill-shaped primary buttons (border-radius: 60px)
- Hero carousel with overlaid product cards (absolute positioned text)
- Category banners are split 50/50 with parallax-like images
- Deal of week has countdown timer (days/hours/min/sec digits)
- Blog cards: image top, text bottom, with date badge
- Instagram strip: equal-width squares with dark overlay on hover
- Footer: dark background, newsletter input, social icons
