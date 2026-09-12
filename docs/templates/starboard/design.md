# Starboard — Design Notes & Tasks

## Source
- ColorLib slug: `hotel`
- Preview URL: `https://preview.colorlib.com/theme/hotel/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/hotel-free-template.jpg`
- New name: `starboard`

## Section order (fidelity mapping)

1. **Navbar** → `components/Navbar.tsx`
   - Sticky top, white bg, logo left, nav right
   - Gold `#ae9548` hover/active states
   - Room dropdown: Junior Suite, Double Room, Senior Suite, Single Room

2. **Hero Slider** → `components/HeroSlider.tsx`
   - Full-width carousel, 3 slides
   - Arrow nav buttons in circular containers (`border-radius: 50%`)
   - Nav text labels: Pool, Sauna, Restaurant

3. **Room Availability** → `components/RoomAvailability.tsx`
   - Light bg `#F7F7F7`
   - Check-in/check-out date pickers
   - Room card: image carousel, title, price, feature icons, "info" button
   - Pill-shaped CTA button (`border-radius: 60px`)

4. **About Room** → `components/AboutRoom.tsx`
   - Split layout: text left, image right
   - Quote-style heading in Taviraj serif
   - White background

5. **Facilities** → `components/Facilities.tsx`
   - Section heading "Facilities"
   - 4-column grid of facility cards
   - Each card: circular icon (50% radius), title, description

6. **Testimonials** → `components/Testimonials.tsx`
   - Dark bg `#353535`, gold `#ae9548` accent
   - Carousel of testimonial cards
   - Date, star rating, title, review, author avatar + name

7. **Instagram Feed** → `components/InstagramFeed.tsx`
   - Heading with @yourhotel handle
   - Grid of 4-6 Instagram placeholder images

8. **Footer** → `components/Footer.tsx`
   - Very dark bg `#081624`
   - Logo + 4 widget columns
   - Copyright + privacy links
   - Must link componentdock.com

## Design tokens for Tailwind `@theme`

```
--color-brand: #ae9548;
--color-text-primary: #242424;
--color-text-dark: #081624;
--color-text-secondary: #858585;
--color-bg-light: #F7F7F7;
--color-bg-dark: #353535;
--color-bg-footer: #081624;
--font-heading: "Taviraj", serif;
--font-body: "Taviraj", serif;
```

## Implementation tasks

- [ ] Create `apps/starboard/` workspace from template boilerplate
- [ ] Set up `index.html` with Google Fonts link for Taviraj
- [ ] Define `@theme` tokens in `index.css`
- [ ] Build `Navbar.tsx` with sticky positioning + room dropdown
- [ ] Build `HeroSlider.tsx` with 3-slide carousel + arrow navigation
- [ ] Build `RoomAvailability.tsx` with date picker form + room card carousel
- [ ] Build `AboutRoom.tsx` with split layout
- [ ] Build `Facilities.tsx` with icon grid
- [ ] Build `Testimonials.tsx` with dark bg + carousel
- [ ] Build `InstagramFeed.tsx` with image grid
- [ ] Build `Footer.tsx` with 4-column layout + Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests (Vitest + RTL) → 100% coverage
- [ ] Run `scripts/verify-app.sh starboard` locally
- [ ] Commit, push, open PR, squash merge

## Fidelity notes

- Never copy original CSS/assets. Use Tailwind classes + picsum.photos placeholders
- Original uses Owl Carousel and jQuery — replace with React state-based carousel
- Original uses Flaticon icon font — replace with lucide-react icons
- Room features: Smart TV → Monitor icon, Wi-Fi → Wifi icon, AC → Wind icon, Parking → Car icon, Pool → Waves icon
- Star ratings in testimonials: use lucide-react Star icons
- Quote marks in About section: decorative, can be styled with CSS pseudo-element
