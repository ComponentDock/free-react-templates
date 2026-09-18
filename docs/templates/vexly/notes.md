# Vexly — Design Notes & Implementation Outline

Source: ColorLib "Parason"
Preview: https://preview.colorlib.com/theme/parason/
New name: vexly

## Section Order (top to bottom)

1. Navbar (transparent overlay → fixed indigo on scroll)
2. Hero Banner (dark indigo, split layout: image left, text right)
3. Awesome Soft Feature (3 feature cards)
4. About Section (magnolia bg, two-column: text left, image right)
5. Features We Offer (2×2 grid of 4 offer cards)
6. Pricing (3 tier cards)
7. Testimonials (carousel with overlapping avatar)
8. Client Logos (grayscale → color on hover)
9. Footer (dark bg, 5 columns, newsletter, social icons)

## Component Breakdown

| Component        | Notes                                                             |
| ---------------- | ----------------------------------------------------------------- |
| `Navbar.tsx`     | Transparent → fixed indigo. Logo, nav links, dropdown, Sign up.   |
| `Hero.tsx`       | Split layout. Headline + paragraph + CTA. Dark indigo bg.         |
| `Features.tsx`   | 3 cards with icons. Heading centered.                             |
| `About.tsx`      | Two-column, magnolia bg. Heading + text + button + image.         |
| `Offers.tsx`     | 2×2 grid, 4 cards with icons. Similar card style to Features.    |
| `Pricing.tsx`    | 3 tier cards. Check/close icons. Hover fills CTA.                |
| `Testimonials.tsx` | Carousel items. Overlapping circular avatar. Italic quotes.     |
| `ClientLogos.tsx` | 5 logos, grayscale filter, hover reveal.                         |
| `Footer.tsx`     | Dark bg, 5 columns, newsletter form, social icons, CD link.      |

## Design Token Mapping to Tailwind

```
--brand: #21146a       → use as primary utility color
--hero-bg: #22195b     → hero section background
--magnolia: #faf9ff    → section backgrounds (about, testimonials)
--heading: #3a414e     → default heading color
--body: #797979        → default body text color
--footer: #0e1424      → footer background
--navbar-fixed: #412fb3 → fixed navbar background
```

Font links (in index.html):
- `https://fonts.googleapis.com/css?family=Rajdhani:400,600,700`
- `https://fonts.googleapis.com/css?family=Roboto:400,500,700`

## Key Fidelity Notes

- Cards (features, offers, pricing) use NO border-radius (square edges).
- Buttons are pill-shaped (30px radius) — this is a strong brand trait.
- The hero illustration should be a software/tech-themed placeholder from
  picsum.photos (e.g. `https://picsum.photos/seed/vexly-hero/600/500`).
- Client logos: use placeholder SVG/image icons from lucide-react or
  simple text placeholders, rendered grayscale.
- Testimonial avatars: use picsum.photos with circle crop.
- Navbar dropdown for "Pages" should have Blog + Blog Details items.
- Footer MUST link to https://www.componentdock.com/ (replacing ColorLib
  attribution).
- No ColorLib references in any app code — provenance is in the spec only.

## Placeholder Images

| Element          | Source                                             |
| ---------------- | -------------------------------------------------- |
| Hero illustration| `https://picsum.photos/seed/vexly-hero/600/500`   |
| About illustration| `https://picsum.photos/seed/vexly-about/700/500`  |
| Testimonial avatar| `https://picsum.photos/seed/vexly-test/120/120`   |
| Client logos     | Simple text/icon placeholders (lucide-react)       |
