# SliceHaus — Design Notes & Task Outline

## Source
- ColorLib: Pizza (https://colorlib.com/wp/template/pizza/)
- Preview: https://preview.colorlib.com/theme/pizza/

## Section Order (from preview DOM)
1. **HeroSlider** — Owl-carousel style slider, 3 slides, full-width bg images, dark overlay, headings + 2 CTAs each
2. **IntroBar** — Horizontal bar: phone/address/hours (3 cols) + social icons right
3. **About** — Split 50/50: image left, heading + paragraph right
4. **Services** — Dark bg (#121618), centered heading, 3 service cards (icon + title + desc)
5. **Gallery** — 4-column image grid, hover overlay with search icon
6. **Counter** — Dark bg with parallax image + overlay, 4 stats with icons + animated count-up
7. **Menu** — Split: image left (col-4), tabbed menu right (col-8), 4 tabs (Pizza/Drinks/Burgers/Pasta), 3 items per tab with image + name + desc + price
8. **Blog** — "Recent from blog", 3 blog cards (image + date/author/comments + title + excerpt)
9. **Contact** — Split: map left (col-6), form right (col-6) with First Name/Last Name/Message + Send button
10. **Footer** — Dark bg + overlay, 4 columns: About Us (social), Recent Blog (2 entries), Newsletter (email input), Contact info

## Design Token Notes
- Brand gold: #f8b500 — use for primary buttons, accent highlights
- Dark sections: #121618 — navbar, services bg, counter bg, footer bg
- Light sections: #f7f7f7 or white
- Accent blue: #3fc3e8 — borders, focus rings
- Fonts: Poppins (primary), Josefin Sans, Work Sans, Nothing You Could Do (decorative)
- Buttons: sharp corners (no border-radius), padded (p-3 px-xl-4 py-xl-3)
- Dark sections use semi-transparent overlay div over background images

## Component Plan
- `src/components/Navbar.tsx` — Fixed top, logo + nav links + CTA button
- `src/components/HeroSlider.tsx` — Auto-rotating carousel with 3 slides
- `src/components/IntroBar.tsx` — Contact info bar with 3 items + social icons
- `src/components/About.tsx` — Split image/text layout
- `src/components/Services.tsx` — Dark section, 3 service cards
- `src/components/Gallery.tsx` — 4-column image grid with hover
- `src/components/Counter.tsx` — Dark parallax, 4 animated stats
- `src/components/Menu.tsx` — Tabbed menu with image sidebar
- `src/components/Blog.tsx` — 3 blog post cards
- `src/components/Contact.tsx` — Map + form split layout
- `src/components/Footer.tsx` — 4-column dark footer

## Fidelity Notes
- Original uses Bootstrap grid (col-md-*, row, container) — translate to Tailwind grid/flex
- Owl-carousel for hero — use CSS-based carousel or lightweight React carousel
- Bootstrap pill tabs for menu — translate to Tailwind tab component
- AOS (Animate on Scroll) animations — use intersection observer or framer-motion
- Parallax on counter section — CSS background-attachment: fixed
- Overlay pattern: `<div class="overlay"></div>` inside sections — use absolute positioned div with bg-black/50
- All background images → picsum.photos with deterministic seeds
