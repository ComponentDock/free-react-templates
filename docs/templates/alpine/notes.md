# Alpine — Implementation Notes

**Source:** ColorLib "Montana" (https://colorlib.com/wp/template/montana/)
**Preview:** https://preview.colorlib.com/theme/montana/
**New name:** Alpine
**Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Structure Order (sections top → bottom)

1. `Navbar.tsx` — Transparent header → sticky black on scroll
2. `HeroSlider.tsx` — Full-viewport carousel (4 slides)
3. `About.tsx` — Two-column: text left, stacked images right
4. `Offers.tsx` — 3-column service cards with hover zoom
5. `VideoParallax.tsx` — Full-width bg image + dark overlay + play button
6. `FeaturedRooms.tsx` — 2×2 grid with gradient overlay + hover-reveal link
7. `QueryCTA.tsx` — Heading + phone number, blue left border
8. `InstagramFeed.tsx` — 5-image horizontal strip with hover overlay
9. `Footer.tsx` — 4-column: About, Quick Links, Instagram, Newsletter
10. `BookingPopup.tsx` — Modal with date selects, room type dropdown

## Design Token Notes (for index.css @theme)

```
brand-blue: #009DFF
brand-orange: #ff5e13
dark-text: #1F1F1F
body-text: #4D4D4D
muted-text: #919191
light-bg: #f9f9ff
lavender-bg: #f0e9ff
```

## Component Implementation Notes

### Navbar
- Desktop: 3-column grid — nav links (col-5), logo (col-2), social + book btn (col-5)
- Mobile: hamburger toggle, vertical link list
- Sticky: on scroll > 70px, add `fixed` + black bg + shadow
- Use `useEffect` with scroll listener for sticky behavior

### HeroSlider
- Use a simple CSS-based slider or manual state cycling (no heavy carousel lib needed)
- 4 slides with different background images (use picsum.photos with seeds)
- White centered text: h3 heading + subtitle
- Nav arrows: circular buttons, semi-transparent white bg, show on hover
- Auto-cycle every 5 seconds

### About
- Section padding-top: 200px (desktop), 40px (mobile)
- Left column: section title with blue span ("About Us"), paragraph, "More About Us" link
- Right column: two images, second one offset with margin-left and margin-top

### Offers
- 3-column grid, each card: image (overflow hidden), title, ul of features, button
- Image hover: transform scale(1.1) with 0.3s transition
- Button: boxed-btn style (outline blue, uppercase, letter-spacing 3px)

### VideoParallax
- Full-width section with background image
- Dark overlay (::before pseudo or div with bg-black/50)
- Centered content: subtitle span, h3 heading, circular play button (60px, white bg, border-radius 50%)

### FeaturedRooms
- 2-column grid (50% width each, float or grid)
- Each card: image with ::before gradient overlay (white→black bottom, opacity 0.5)
- Room name + price at bottom of image (absolute positioned, z-index 8)
- Hover: image scales 1.1, "More About Us" link slides up from opacity 0

### QueryCTA
- Flex row: left (col-6) heading + paragraph, right (col-6) phone number + icon
- Left border: blue (#009DFF), 2px solid

### InstagramFeed
- Flex row of 5 equal-width images
- Each image: overflow hidden, dark overlay on hover
- Images fill 100% width of their container

### Footer
- 4-column grid: About (logo + text), Quick Links, Instagram mini-grid, Newsletter
- Newsletter: email input + subscribe button
- Bottom bar: copyright left, social icons right, border-top separator

### BookingPopup
- Modal overlay (bg-black/70) with centered white card
- Form fields: check-in date, check-out date (native date inputs), adults select, children select, room type select
- "Check Availability" button at bottom
- Triggered from "Book a Room" button in navbar
- Close on overlay click or X button

## Fidelity Notes

- **Fonts:** Load Raleway from Google Fonts (weights 300-900). Fallback to system sans-serif.
- **Colors:** Primary #009DFF throughout — buttons, links, section title accents. Secondary #ff5e13 for hover states.
- **Buttons:** Square corners (border-radius 0), uppercase, letter-spacing 3px. Two variants: outline (white bg, blue border) and solid (blue bg, white text).
- **Spacing:** Large section padding (120px), section titles with blue span + large h3 (46px).
- **Hover effects:** Image zoom (scale 1.1), link reveal (opacity + translateY), button color swap.
- **No carousel library needed** — implement simple CSS-based slider with React state.
- **Sticky header:** transparent → black bg with shadow on scroll.

## Placeholder Images

Use picsum.photos with deterministic seeds per section:
- Hero slides: `https://picsum.photos/seed/alpine-hero-1/1920/1080` through `-4`
- About images: `https://picsum.photos/seed/alpine-about-1/600/700` and `-2`
- Offer cards: `https://picsum.photos/seed/alpine-offer-1/400/300` through `-3`
- Room cards: `https://picsum.photos/seed/alpine-room-1/600/400` through `-4`
- Video bg: `https://picsum.photos/seed/alpine-video/1920/800`
- Instagram: `https://picsum.photos/seed/alpine-insta-1/300/300` through `-5`
