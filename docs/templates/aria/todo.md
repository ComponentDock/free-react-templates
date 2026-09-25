# Aria — Implementation Todo & Design Notes

Recreation of ColorLib "Musica" → named "Aria"
Preview: https://preview.colorlib.com/theme/musica/
Source slug: musica

## Section Order (match 1:1)

1. **Navbar** — Sticky top, logo left, nav links center, social icons right.
   Mobile: hamburger toggle with slide-in menu.
2. **Hero Slider** — Full-width carousel with background images, large
   centered display text (172px desktop, scales down), subtitle below.
   5px gradient bar (#cc1573 → #5722a9) underneath.
3. **Artist Bio / About** — Parallax background with dark purple overlay
   (rgba(21,4,48,0.89)). Split: image left, heading + bio text + signature
   right. White heading, lavender subtitle (#c5afd9).
4. **Upcoming Shows** — Dark section (#0c0527). Heading in white. Vertical
   list of show cards: date badge (day big + month small), thumbnail,
   show name, city, venue, time, gradient "Buy Tickets" button.
5. **Music Player Carousel** — Horizontal scrolling cards with album art,
   artist name, song title, inline audio controls.
6. **Featured Album** — Split: left = parallax album thumbnail, right =
   album info + track listing with audio players + "Now Playing" bar.
   Gradient "Buy it on iTunes" button.
7. **Music / Artists Split Cards** — Two equal-width side-by-side image
   cards with dark overlay (#rgba(21,4,48,0.5)). Left = "Music", right =
   "Artists". Each has heading + subtitle.
8. **Footer** — 4-column: logo + copyright, About links, Links, Social
   links. Subscribe form with email input + button. Replace Colorlib
   attribution with "More templates at Component Dock".

## Design Token Mapping (Tailwind @theme)

```css
@theme {
  --color-brand-pink: #cc1573;
  --color-brand-purple: #5722a9;
  --color-brand-magenta: #bd177a;
  --color-dark-bg: #0c0527;
  --color-overlay-dark: rgba(21, 4, 48, 0.89);
  --color-overlay-light: rgba(21, 4, 48, 0.5);
  --color-heading: #262626;
  --color-body: #6a6a6a;
  --color-subtitle: #c5afd9;
}
```

## Key Implementation Notes

- Hero: Use a React state for slide index, CSS transitions or a lightweight
  carousel. No Owl Carousel dependency. The 5px gradient bar is a simple
  div with `bg-gradient-to-r from-[#cc1573] to-[#5722a9]`.
- Background overlays: Use `bg-overlay` pattern — absolute positioned
  pseudo-element or a div with `bg-[rgba(21,4,48,0.89)]` over a
  `bg-cover bg-center` background image.
- Buttons: `.musica-btn` → Tailwind `bg-gradient-to-r from-[#cc1573]
  to-[#5722a9] text-white rounded-none px-8 py-3 font-semibold`.
- Audio players: Use HTML `<audio>` elements with `controls` attribute.
  No third-party audio library needed.
- Placeholder images: Use `https://picsum.photos/seed/aria-<n>/<w>/<h>`
  for all images (hero bg, about photo, album art, show thumbnails).
- Font: Load Raleway + Allura via Google Fonts `<link>` in index.html.
  Use `font-family: 'Raleway', sans-serif` as default, Allura for
  decorative/display text where the original uses Allura.
- Footer subscribe: Simple form with email input, no backend needed.
- Dark sections: Upcoming Shows uses `bg-[#0c0527]`. Music/Artists uses
  `bg-overlay2` pattern (rgba(21,4,48,0.5)).
- Mobile responsive: Navbar collapses to hamburger, hero text scales,
  columns stack to single column, show cards wrap.

## Verification Checklist

- [ ] Navbar renders with logo, links, social icons
- [ ] Mobile hamburger menu opens/closes
- [ ] Hero slider displays background images with large text
- [ ] Gradient accent bar visible below hero
- [ ] About section: parallax bg, split layout, signature
- [ ] Upcoming shows: dark bg, date badges, Buy Tickets buttons
- [ ] Music player carousel with audio controls
- [ ] Featured album: track listing + Now Playing bar
- [ ] Music/Artists split cards with overlays
- [ ] Footer: 4 columns, subscribe form, Component Dock link
- [ ] Zero ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] Google Fonts (Raleway + Allura) loaded in index.html
- [ ] No ColorLib assets copied (images, CSS, JS)
