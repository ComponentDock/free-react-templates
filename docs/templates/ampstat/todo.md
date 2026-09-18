# Ampstat — Implementation Todo

Source: ColorLib Music (https://preview.colorlib.com/theme/music/)
New name: ampstat
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Components to build (in order)

1. `Header.tsx` — Logo (equalizer bars SVG + "music" text), nav links,
   login/register, hamburger toggle
2. `HomeSlider.tsx` — Fullscreen carousel with background image, headline
   "your music.", ticket form (event dropdown, ticket input, CTA), social
   sidebar, scroll-down indicator
3. `SongPlayer.tsx` — Parallax section with "Song of the Week" player:
   album art, play/stop, progress bar, artist label, volume controls
4. `TourDates.tsx` — Two-column: promo card (bg image, year/title/subtitle,
   CTA) + tour date list (date/venue/location per row, CTA, "See All" link)
5. `AppDownload.tsx` — Two-column: app image + heading + description +
   App Store / Google Play badges
6. `FeaturedAlbums.tsx` — Centered title + playlist/album list
7. `NewsGrid.tsx` — 3-column grid of news cards (image + date + title +
   excerpt), second card reversed layout
8. `Newsletter.tsx` — "Subscribe & Follow" + email input + subscribe button
9. `Footer.tsx` — Background image, logo, social icons, copyright, Component
   Dock link

## Design notes

- Font: Google Fonts `Josefin Sans` (all weights used: 300, 400, 600, 700)
- Primary green: #2ac275 — use as `@theme` brand color
- Dark purple: #3b125d — section backgrounds, gradients
- Yellow accent: #cbdc0b / #eeff2d — button gradients, highlights
- Button shape: pill (border-radius 22px), green-to-yellow gradient
- Card shape: border-radius 15px
- Section backgrounds: alternating white / #eef2f6 light gray
- Overlay: rgba(0,0,0,0.66) on footer and hero
- Parallax on Song section background
- Placeholder images: `https://picsum.photos/seed/ampstat-<n>/<w>/<h>`
- Icons: lucide-react (replace Font Awesome)
- Social icons: Pinterest, Facebook, Twitter, Dribbble, Behance

## Fidelity notes

- Match section order exactly: Header → Home Slider → Song → Tours →
  App → Featured Albums → News → Newsletter → Footer
- Hero is fullscreen (100vh) with centered content
- Tour list items are flex rows with date/venue/location left, CTA right
- News grid: 3 equal columns; second card has image below text (reversed)
- Footer uses background image with dark overlay
- Logo uses equalizer-bar icon (5 vertical bars of varying height)
