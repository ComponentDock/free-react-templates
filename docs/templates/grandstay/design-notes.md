# GrandStay — Design Notes & Implementation Outline

## Source
- ColorLib: https://colorlib.com/wp/template/hotel/
- Preview: https://preview.colorlib.com/theme/hotel/

## Section Order (top to bottom)

1. **Navbar** — Fixed/sticky. Logo left. Right-aligned nav links with Facilities dropdown (white bg, gold border, pill radius 50px). Dark charcoal bg `#353535`. Text color white. Hover: gold accent.

2. **Hero Slider** — Full-width bg image, large serif heading (Taviraj), left-aligned. Below heading: 3 thumbnail cards (Pool, Sauna, Gym) each with small image + label + gold arrow. Implement as static (single slide) or simple carousel.

3. **Room Availability** — Two-column layout:
   - Left: Room card with image carousel (3 images), "Junior Suite" title, "$252" price, feature row (icons: size m², guests, bed, view). Images use picsum.
   - Right: Check form — "Check Availability" title, date-from/date-to pickers, room quantity, room type dropdown, submit button. Gold border `#AE9548` around the form card.
   - Below both: About Room quote (centered serif) + 2-column body text.

4. **Facilities** — Section title "Facilities". Two facility blocks, each: large image (left) + text panel (right), alternating direction. Text: h2 title, paragraph, gold pill CTA "Visit Center →".

5. **Guestbook** — Section title "Guestbook". Tabbed testimonials (3 tabs). Each: date, 5 gold stars, h4 title, paragraph review. Tab navigation with dots or text labels.

6. **Follow Instagram** — Simple centered heading on white bg. Optional: could add image grid below for visual richness.

7. **Footer Room Pics** — Full-width row of 4 room images (picsum). No text overlay.

8. **Footer** — Dark bg. Logo centered top. 4 columns: Location (map pin icon), Reception (phone icon), Shuttle Service (car icon), Restaurant (utensil icon). Bottom: Component Dock attribution link.

## Component Outline

```
src/
  App.tsx
  components/
    Navbar.tsx        — nav links, dropdown, mobile menu toggle
    HeroSlider.tsx    — bg image, heading, 3 thumbnail nav cards
    RoomAvailability.tsx — room card + check form (two-col)
    AboutRoom.tsx     — centered quote + 2-col text
    Facilities.tsx    — alternating image/text blocks
    Guestbook.tsx     — tabbed testimonials
    InstagramCta.tsx  — centered heading
    FooterRoomPics.tsx — 4-image row
    Footer.tsx        — 4-col contact info + Component Dock
  index.css           — Tailwind + @theme tokens
```

## Fidelity Notes

- **Fonts:** Load Taviraj (serif, headings) and Open Sans (sans-serif, body) via Google Fonts link in index.html.
- **Colors:** Brand gold `#AE9548` → `@theme { --color-brand: #AE9548; }`. Use `brand` in Tailwind classes.
- **Buttons:** `border-2 border-brand text-brand uppercase font-bold px-8 py-4 rounded-full`. Arrow icon right-aligned.
- **Navbar:** Dark bg `bg-[#353535]`, white text, dropdown with `bg-white border border-brand rounded-[50px]`.
- **Room card:** White bg, no border-radius (sharp), image carousel (use state for image switching), feature icons via lucide-react.
- **Check form:** `border-2 border-brand` card, dark text `#081624`.
- **Facilities:** Alternating `flex-row` / `flex-row-reverse` with image left, text right.
- **Guestbook tabs:** Use state for active tab index. Star rating via lucide `Star` filled gold.
- **Footer room pics:** `grid grid-cols-4` with picsum images, no gaps.
- **Footer:** Dark bg, 4-col grid, lucide icons (MapPin, Phone, Car, UtensilsCrossed). Component Dock link at bottom.
