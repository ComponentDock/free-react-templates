# Filmstock — Design Notes & Task Outline

Source: ColorLib Photosen
Preview: https://preview.colorlib.com/theme/photosen/

## Structure (section order)

1. **Navbar** — transparent/dark header
   - Logo: "Filmstock" (white text, h2 size)
   - Nav links: Home, Gallery (dropdown), Services, About, Contact
   - Social icons: Facebook, Twitter, Instagram, YouTube
   - Mobile: hamburger menu toggle

2. **Gallery Grid** — 3-column responsive grid
   - 9 category cards in `col-lg-4` layout
   - Each card: full-bleed photo background with grayscale filter
   - Centered overlay: category name (white h2) + "More Photos" button
   - Hover: remove grayscale, add dark overlay, slight scale
   - Categories: Nature, Portrait, People, Architecture, Animals, Sports, Travel (+ 2 duplicates)

3. **Footer** — dark background (#333333)
   - Copyright text with current year
   - Link to Component Dock (replacing ColorLib attribution)

## Fidelity Notes

### Navbar

- Background: transparent or very dark (the original has a dark hero-like header area)
- Logo is white text, not an image
- Nav links are uppercase, 12px, letter-spacing 0.1em, semi-transparent white
- Active/hover state: Bootstrap blue #0d6efd
- Dropdown has icomoon arrow icon

### Gallery Cards

- The key visual effect: **grayscale-to-color transition**
- Default: `filter: grayscale(1)` on img
- Hover: `filter: none` + `transform: scale(1.01)`
- Overlay: transparent → rgba(0,0,0,0.4) on hover (via ::before pseudo-element)
- Image info is absolutely positioned center of card
- h2 is white, button is white outline with uppercase text

### Buttons

- `.btn-outline-white`: 2px white border, 11px font, uppercase, 0.1em letter-spacing
- Hover: white bg, black text
- Uses Bootstrap `.btn` base with custom `.btn-outline-white` variant

### Footer

- Dark background (#333333), light gray text
- Simple centered paragraph with copyright
- Replace "Colorlib" link with "Component Dock" link

### Images

- Use `https://picsum.photos/seed/filmstock-<n>/800/600` for placeholder photos
- 9 unique images for the 9 gallery cards

## Component Structure

```
apps/filmstock/src/
├── main.tsx           (entry)
├── App.tsx            (composes sections)
├── components/
│   ├── Navbar.tsx     (transparent header, logo, nav, social)
│   ├── Gallery.tsx    (3-column grid of image cards)
│   ├── GalleryCard.tsx (single card with grayscale hover)
│   └── Footer.tsx     (dark footer with copyright)
├── index.css          (Tailwind entry + theme tokens)
└── test/
    └── setup.ts       (jest-dom import)
```

## Theme Tokens (index.css)

```css
@theme {
  --color-filmstock-primary: #0d6efd;
  --color-filmstock-dark: #333333;
  --color-filmstock-footer-text: #737373;
  --color-filmstock-footer-link: #999999;
}
```
