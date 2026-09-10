# Batterly — Design Notes

Source: ColorLib "Cakes" → https://preview.colorlib.com/theme/cakes/
New name: batterly

## Section order (from preview DOM)

1. **Header** — sticky white navbar, logo + nav + phone + "Order Online" button
2. **Hero** — full-width image bg, watermark "Delicious" (Lobster), main heading, paragraph, CTA
3. **Popular Items** — "Our Exclusive Cakes" heading, 3-4 product cards in carousel
4. **About** — split layout: image left, text right + "Our Story" button
5. **Services/Features** — "Quality is Our First Priority", 3 icon cards
6. **Video** — full-width dark bg image, centered play button
7. **Testimonials** — "What Customers Say", carousel of quote cards with avatars
8. **Instagram Feed** — horizontal carousel of images with hover overlay
9. **Footer** — 4 columns (logo+social, links, cake list, contact), copyright bottom

## Component breakdown

| Component         | Notes                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| Navbar.tsx        | Sticky, white bg, logo left, nav center, phone+button right. Mobile hamburger.                                      |
| Hero.tsx          | Full-width bg image, overlay watermark text in Lobster, heading, paragraph, pill button. Floating decorative shape. |
| PopularItems.tsx  | Carousel of product cards. Each card: image, name, desc, price button. Cards: #FFF5F2 bg, 60px bottom-right radius. |
| About.tsx         | Two-column: image left, text right. Subtitle "Fresh & Delicious", heading, paragraph, "Our Story" button.           |
| Features.tsx      | 3-column icon cards. Subtitle "Our Features", heading, icons from lucide-react (not SVG images).                    |
| VideoSection.tsx  | Full-width bg image with centered play icon. Popup-video behavior (can just link or use modal).                     |
| Testimonials.tsx  | Carousel of quote cards. Each: quote text, avatar image, name, role.                                                |
| InstagramFeed.tsx | Horizontal scrolling carousel of square images. Dark overlay on hover + Instagram icon.                             |
| Footer.tsx        | 4-col: logo+social, quick links, cake varieties, contact. Bottom: copyright + Component Dock link.                  |

## Fidelity notes

- The original CSS uses Bootstrap grid classes. In React/Tailwind, translate to equivalent grid/flex.
- Product cards use carousel (owl-carousel). Use a simple CSS scroll-snap or lightweight carousel.
- Hero watermark text "Delicious" is 160px Lobster font at 6% opacity of brand color. Position absolute.
- Video section uses a YouTube popup. Implement as a play button that could open a modal or just link out.
- Instagram section is a carousel of 6 images. Use CSS scroll-snap or a simple auto-scroll.
- The "Services" section has placeholder "Pet Boarding" text (copy-paste from another template). Replace with bakery-relevant feature names (e.g., "Custom Cakes", "Fresh Ingredients", "Same-Day Delivery").
- Button styles: pill (border-radius 30px), gradient background (#F04506 → #d83e06), orange-tinted box-shadow.
- All placeholder images should use picsum.photos with seed "batterly-N".

## Design token map for Tailwind

```
@theme {
  --color-brand: #F04506;
  --color-brand-dark: #d83e06;
  --color-card: #FFF5F2;
  --color-footer: #FFF7F3;
  --color-text: #000000;
  --color-text-muted: #5E5E5E;
  --font-body: "DM Sans", sans-serif;
  --font-heading: "Quicksand", sans-serif;
  --font-decorative: "Lobster", cursive;
}
```

## Verification gates

After implementation, verify:

1. `npm run verify:app batterly` (typecheck + lint + test:coverage + build)
2. Visual comparison with preview screenshot
3. All 9 sections present in correct order
4. No ColorLib references in apps/batterly/ code
