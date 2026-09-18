# Indexly — Design & Implementation Notes

## Source mapping
- **ColorLib source:** Browse (slug: `browse`)
- **Preview:** https://preview.colorlib.com/theme/browse/
- **New name:** `indexly`

## Section order (top to bottom)

1. **Navbar** — transparent over hero, white text, teal pill on active "Home"
2. **Hero** — full-width background image, dark overlay, large heading,
   subtitle, floating search bar card (3 inputs + dropdown + button)
3. **Most Visited Places** — teal heading, 3-col grid of 6 place cards
   (image + title + location)
4. **Popular Categories** — 4 items in grid (icon + name + count)
5. **Why Us** — 3 feature cards (icon + title + description)
6. **How It Works** — 3 numbered steps (teal circle + title + description)
7. **Satisfied Customers** — testimonial cards (quote + name + avatar)
8. **Tips & Articles** — blog card grid (image + date + title)
9. **CTA** — dark bg, "Create your account" + Sign Up button
10. **Footer** — 4 columns (Quick Links, Products, Features, Follow Us) +
    newsletter subscription + Component Dock attribution

## Design token summary

| Token | Value |
|-------|-------|
| Primary teal | `#00918e` |
| Primary dark | `#007875` |
| Text body | `#737373` |
| Font | Rubik (Google Fonts) |
| Button shape | Pill (radius 30px) |
| Card radius | 7px |
| Section bg alt | `#f4f5f9` |

## Component breakdown

- `Navbar.tsx` — brand + nav links + mobile hamburger menu
- `Hero.tsx` — background image + overlay + heading + SearchBar
- `SearchBar.tsx` — floating card with 3 fields + button
- `MostVisitedPlaces.tsx` — heading + 3-col card grid
- `PlaceCard.tsx` — image + title + location
- `PopularCategories.tsx` — 4 category items
- `WhyUs.tsx` — 3 feature cards
- `HowItWorks.tsx` — 3 numbered steps
- `Testimonials.tsx` — testimonial cards carousel
- `TipsArticles.tsx` — blog card grid
- `CtaSection.tsx` — dark background CTA
- `Footer.tsx` — 4-column footer + newsletter + Component Dock

## Fidelity notes

- Match the teal `#00918e` brand color exactly; use in `@theme` as
  `--color-brand: #00918e`
- Rubik font via Google Fonts link in `index.html`
- Pill-shaped buttons (border-radius: 30px) for primary CTAs
- Search bar is a white floating card with box-shadow
- Hero uses a full-width background image with dark overlay (use
  `picsum.photos/seed/indexly-hero/1920/800` for placeholder)
- Cards use 7px border-radius
- Testimonial avatars are circular (50% radius)
- Footer has white background, 4 columns, newsletter form
- Component Dock link in footer

## Placeholder images

- Hero background: `https://picsum.photos/seed/indexly-hero/1920/800`
- Place cards: `https://picsum.photos/seed/indexly-place-1/600/400` through `-6`
- Article cards: `https://picsum.photos/seed/indexly-article-1/600/400` through `-3`
- Testimonial avatars: `https://picsum.photos/seed/indexly-avatar-1/80/80` through `-4`
