# Trailside — ColorLib Ecoland Replication

## Source

- **ColorLib**: Ecoland (https://colorlib.com/wp/template/ecoland/)
- **Preview**: https://preview.colorlib.com/theme/ecoland/
- **Category**: Travel / Eco-Tourism / Destination

## Design Tokens Summary

- Primary blue: #007bff (Bootstrap default — CTAs, active states)
- Accent rose-beige: #e2c0bb (links, brand hover, subheadings, vertical label bg)
- Loader orange: #F96D00 (spinner)
- Font: Poppins (body, sans-serif) + Cormorant Garamond (headings, serif)
- Body text: #999999
- Headings: rgba(0,0,0,0.9)
- Button border-radius: 0.25rem
- Navbar: transparent on desktop, #000 on mobile
- Brand color: #000 desktop, #e2c0bb when scrolled
- Footer: dark background

## Section Order (fidelity to original)

1. Navbar (transparent desktop, black mobile, 8 links)
2. Hero Slider (split layout: text left + image right, SVG blob, vertical label)
3. Search Form ("Where do you want to go?" — destination, dates, price, search)
4. Services (4-column icon grid: Activities, Travel Arrangement, Private Guide, Location Manager)
5. About (side-by-side: image left, dark bg text right, 2 CTA buttons)
6. Destination CTA (parallax bg, heading, white button)
7. Destinations (3-col grid × 6 cards: image, price, duration, name, stars)
8. Hotel CTA (parallax bg, "$99/night", white button)
9. Hotels (3-col grid × 3 cards)
10. Restaurant (3-col grid × 3 cards)
11. Blog (3 entries on light bg: image, date, title, excerpt, Read More)
12. Contact (form left + info boxes right)
13. Gallery (6 images, hover overlay, popup)
14. Footer (4 columns: About/social, Information, Experience, Contact)

## Implementation Notes

- Hero slider: state-based slides with split flex layout (text column + image column)
- SVG blob: decorative element in hero, can be a simple SVG shape
- Vertical label: absolute-positioned rotated text on the image side
- Search form: controlled inputs with date pickers (or text inputs for simplicity)
- Cards: use a shared Card component with image, price badge, title, stars, review count
- Parallax sections: CSS background-attachment: fixed (or IntersectionObserver for mobile)
- Gallery: CSS grid with hover overlay (opacity transition)
- Blog cards: background-image with dark overlay, floating date badge
- Contact form: Name, Email, Subject, Message textarea, Send button
- All placeholder images via picsum.photos with deterministic seeds

## Component Outline

```
src/
  App.tsx
  components/
    Navbar.tsx         — transparent/dark navbar with 8 links
    HeroSlider.tsx     — split-layout hero with SVG blob + vertical label
    SearchForm.tsx     — travel search form (destination, dates, price)
    Services.tsx       — 4-column icon service cards
    About.tsx          — side-by-side image + dark bg text section
    ParallaxCTA.tsx    — reusable parallax background CTA section
    DestinationCards.tsx — 3-column grid of destination cards
    HotelCards.tsx     — 3-column grid of hotel cards
    RestaurantCards.tsx — 3-column grid of restaurant cards
    Blog.tsx           — 3-column blog entries on light bg
    Contact.tsx        — form + info boxes side-by-side
    Gallery.tsx        — 6-image grid with hover overlay
    Footer.tsx         — dark 4-column footer
```
