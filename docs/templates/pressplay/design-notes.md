# PressPlay — Design Notes & Implementation Todo

Source: ColorLib Mixtape (https://colorlib.com/wp/template/mixtape/)
Preview: https://preview.colorlib.com/theme/mixtape/
New name: pressplay

## Section Order (matches original 1:1)

1. **Header** — Fixed/sticky, logo left, nav center/right, Login/Register top-right. Mobile: hamburger overlay.
2. **Hero Slider** — Fullscreen background image carousel, centered content (subtitle + heading + CTA link). Dark overlay on images.
3. **Featured Album** — Two-column: left = album art with red-tinted overlay (`#de4f32`), right = dark card (`#333232`) with artist/title/itunes link + embedded playlist player.
4. **Shows** — White bg, two-column: left = show list (date + name + location + Buy Tickets), right = venue image with overlay.
5. **Artist** — White bg, two-column: left = portrait image, right = bio text + signature image + single-track player.
6. **Extra/CTA** — Full-width parallax bg, large heading, description, black button ("Buy Now").
7. **Footer** — Black bg, newsletter form (left), three link columns (right), copyright bar.

## Design Token Mapping (Tailwind)

| Original | Tailwind / CSS variable |
|---|---|
| Font: Futura | Google Fonts "Jost" or "Poppins" as geometric sans substitute |
| Primary: #de4f33 | `brand: #de4f33` in `@theme` |
| Black bg: #000000 | `bg-black` / `bg-neutral-950` |
| Card bg: #333232 | `bg-neutral-800` |
| White text: #FFFFFF | `text-white` |
| Muted text: rgba(255,255,255,0.67) | `text-white/67` |
| Faint text: rgba(255,255,255,0.5) | `text-white/50` |
| Border radius: 0px | `rounded-none` |
| Overlay: rgba(0,0,0,0.85) | `bg-black/85` |

## Component Todo

- [ ] `Navbar.tsx` — Logo + nav links + Login/Register. Mobile hamburger toggle.
- [ ] `HeroSlider.tsx` — Fullscreen bg image carousel with centered text. Use CSS transitions (no heavy carousel lib).
- [ ] `FeaturedAlbum.tsx` — Two-column: album art (left) + player card (right). Player card: artist name, track title, iTunes link, play/pause, seek bar, volume.
- [ ] `ShowsList.tsx` — Section with subtitle/title, show entries (date, name, location, Buy Tickets button), venue image.
- [ ] `ArtistBio.tsx` — Two-column: portrait (left) + bio text + signature + single-track player (right).
- [ ] `ExtraCta.tsx` — Parallax background, heading, description, CTA button.
- [ ] `Footer.tsx` — Newsletter form (left), 3 link columns (right), copyright bar linking Component Dock.
- [ ] `App.tsx` — Compose all sections in order.

## Fidelity Notes

- **Images**: Use `picsum.photos/seed/pressplay-<n>/<w>/<h>` for placeholder images.
- **Audio players**: Render static player UI (play button, seek bar, time labels). No actual audio playback needed — just the visual layout.
- **Carousel**: Use CSS transitions for hero slider (auto-advance + dots). No OwlCarousel dependency.
- **Parallax**: CSS `background-attachment: fixed` for the Extra/CTA section.
- **Section subtitles**: All use "Events" subtitle in original — keep this content.
- **Footer**: Replace Colorlib attribution with "Made with Component Dock" linking `https://www.componentdock.com/`.
