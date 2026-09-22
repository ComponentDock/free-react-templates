# Wavecrest — Design Notes & Implementation Tasks

Source: ColorLib Major
Preview: https://preview.colorlib.com/theme/major/
Design category: Beach Hotel / Resort

## Section Order (fidelity to original)

1. **Navbar** — dark bg, brand "Wavecrest", nav links (Home, About us, Rooms, News, Contact), hamburger on mobile
2. **Hero** — full-width bg-image, dark overlay rgba(14,14,14,0.76), centered heading "Luxury & Comfort" + subtitle
3. **Search/Booking Box** — floating form over hero, date inputs, search button (pill, terracotta)
4. **Intro/Testimonial** — 2-col: image left + text right, "Deluxe Room" heading, testimonial quote (Michael Williams, client)
5. **Room Features** — 4-column grid: Deluxe Room, Beautiful Rooms, Swimming Pool, Luxury Resort (icon + heading each)
6. **Gallery** — Owl Carousel-style slider, 5 images, hover overlay with "+" icon
7. **Newsletter** — dark bg, "Our Newsletter" heading, email input + "subscribe" button
8. **Footer** — dark bg, "Contact Info", brand logo, "book now" pill button, copyright → componentdock.com

## Design Token Notes

- Brand primary: #da8661 (warm terracotta/coral) — buttons, CTA, accents
- Brand dark: #0b1423 (very dark navy) — hero bg, dark sections
- Brand medium: #2e3f61 (navy blue) — section backgrounds
- Brand light-navy: #4c5c7e — alternate section bg
- Accent red: #db5246
- Accent coral-light: #ffa07f
- Background light: #dadfe5 (light gray-blue)
- Text body: #6b6b6b (gray)
- Heading font: Playfair Display (serif, Google Fonts)
- Body font: Roboto (sans-serif, Google Fonts)
- Decorative font: Alike (sans-serif, Google Fonts)
- Button radius: 50% (pill shape) — this is a key differentiator from other templates

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `Navbar.tsx` | Dark bg, brand, nav links, hamburger toggle |
| Hero | `Hero.tsx` | Bg-image via CSS, dark overlay div, centered text |
| SearchBox | `SearchBox.tsx` | Floating form: check-in, check-out, guests, search btn |
| Intro | `Intro.tsx` | 2-col grid: image left + testimonial right |
| RoomFeatures | `RoomFeatures.tsx` | 4-col grid of FeatureCard items |
| FeatureCard | `FeatureCard.tsx` | Icon (lucide) + heading |
| Gallery | `Gallery.tsx` | Horizontal scroll/carousel of 5 images with hover overlay |
| Newsletter | `Newsletter.tsx` | Dark bg, heading, email input + subscribe btn |
| Footer | `Footer.tsx` | Dark bg, contact info, book now btn, copyright → componentdock.com |

## Implementation Tasks

- [ ] Scaffold app from existing template (copy simplest app, rename)
- [ ] Set up Google Fonts (Playfair Display + Roboto + Alike) in index.html
- [ ] Define brand tokens in index.css @theme
- [ ] Build Navbar with hamburger toggle
- [ ] Build Hero section with bg-image + dark overlay
- [ ] Build SearchBox floating form
- [ ] Build Intro section (2-col layout + testimonial)
- [ ] Build RoomFeatures section (4-col grid)
- [ ] Build Gallery carousel with hover overlay
- [ ] Build Newsletter section with subscribe form
- [ ] Build Footer with book now button + componentdock.com link
- [ ] Wire up App.tsx section composition
- [ ] Add placeholder images (picsum.photos/seed/wavecrest-N/W/H)
- [ ] Use lucide-react icons for room feature icons
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
