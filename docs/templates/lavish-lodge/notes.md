# LavishLodge — Design Notes & Implementation Tasks

Source: ColorLib LuxuryHotel
Preview: https://preview.colorlib.com/theme/luxuryhotel/
Design category: Hotel / Accommodation

## Section Order (fidelity to original)

1. **Navbar** — dark bg, Playfair Display brand, nav links with Rooms dropdown, Book Now CTA
2. **Hero** — full-width bg-image, rgba(0,0,0,0.4) overlay, centered heading + subtitle + CTA
3. **About ("Stay and Enjoy")** — 4+7 column split, text left + image right, subheading + heading + "More About Us" btn
4. **Rooms ("Featured Rooms")** — #f2f2f2 bg, subheading, heading, Presidential Room text, Book Now From $20 btn, 3 room cards
5. **Parallax ("Relax and Enjoy")** — full-width bg-image, rgba(0,0,0,0.5) overlay, centered white text
6. **Blog ("Our Recent Blog")** — #f2f2f2 bg, subheading, heading, 3 blog cards with image + title + Read More
7. **Footer** — #000 bg, Phone Support + Connect With Us + copyright → componentdock.com

## Design Token Notes

- Brand primary: #c9ac88 (warm gold) — used for btn-primary bg + border, section accents
- Brand dark: #b99365 (bronze) — used for section-cover bg, footer accents
- Accent: #ffc107 (yellow) — footer highlight
- Heading font: Playfair Display (Google Fonts, serif) — all h1–h4
- Body font: Rubik (Google Fonts, sans-serif) — paragraphs, nav, buttons
- Button: bg #c9ac88, border 2px #c9ac88, white text, border-radius 4px
- Card radius: 7px (room cards)
- Section bg-light: #f2f2f2
- Hero overlay: rgba(0,0,0,0.4); parallax overlay: rgba(0,0,0,0.5)

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `Navbar.tsx` | Dark navbar, Rooms dropdown (useState for toggle), Book Now CTA button |
| Hero | `Hero.tsx` | Background image via CSS, overlay div, centered text block |
| About | `About.tsx` | 2-col grid (text + image), subheading + heading + paragraph + button |
| Rooms | `Rooms.tsx` | Subheading, heading, Presidential Room intro text, grid of 3 RoomCard |
| RoomCard | `RoomCard.tsx` | Image + dark overlay + room name + price, card with radius 7px |
| Parallax | `Parallax.tsx` | Full-width bg-image section, dark overlay, centered white heading |
| Blog | `Blog.tsx` | Subheading, heading, grid of 3 BlogCard |
| BlogCard | `BlogCard.tsx` | Image + date + title + Read More link |
| Footer | `Footer.tsx` | Dark bg, phone support, connect section, copyright → componentdock.com |

## Implementation Tasks

- [ ] Scaffold app from existing template (copy simplest app, rename)
- [ ] Set up Google Fonts (Playfair Display + Rubik) in index.html
- [ ] Define brand tokens in index.css @theme
- [ ] Build Navbar with dropdown
- [ ] Build Hero section with bg-image + overlay
- [ ] Build About section (2-col layout)
- [ ] Build Rooms section with RoomCard
- [ ] Build Parallax section
- [ ] Build Blog section with BlogCard
- [ ] Build Footer with componentdock.com link
- [ ] Wire up App.tsx section composition
- [ ] Add placeholder images (picsum.photos/seed/lavish-lodge-N/W/H)
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
