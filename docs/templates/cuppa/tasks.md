# Cuppa — Prep Notes & Task Outline

## Source mapping
- ColorLib slug: `coffee`
- Preview: https://preview.colorlib.com/theme/coffee/
- New name: `cuppa`
- App folder: `apps/cuppa`

## Section-by-section fidelity notes

1. **Header** — Top bar with hours + phone, navbar with logo + 5 links
   (Home, About, Coffee, Review, Blog). No "Pages" dropdown (skip).
   Mobile: hamburger toggle. Gold is the accent color.

2. **Hero/Banner** — Fullscreen dark background image (use
   `picsum.photos/seed/cuppa-hero/1920/1080`), left-aligned text,
   eyebrow "Now you can feel the Energy", headline, gold pill CTA.

3. **Video/About Section** — Two-column: left = play button overlay on
   a placeholder image (no actual video embed needed), right = heading
   + blurb + signature image. Use `picsum.photos/seed/cuppa-video/`
   and `picsum.photos/seed/cuppa-signature/`.

4. **Coffee Menu** — 3×3 grid, 9 items: Cappuccino, Americano,
   Espresso, Macchiato, Mocha, Coffee Latte, Piccolo Latte, Ristretto,
   Affogato. Each card: name + $49 + description. Gold shadow on hover.

5. **Gallery** — 5 images in mixed grid. Left: 2 stacked small (1:1).
   Right: 1 large (16:9) + 2 medium below (1:1). Use
   `picsum.photos/seed/cuppa-gal-<n>/`. Lightbox click → enlarged view.

6. **Reviews** — 2 reviewer cards (avatar + name + star rating + blurb).
   Counter row below: 4 stats with large numbers + labels. Star color
   is orange; counter numbers are large thin font.

7. **Blog** — 2 cards: feature image + tag pills + title + blurb + date.
   Images have 10px radius. Tags are small pill links.

8. **Footer** — Dark background image, 3 columns: About Us, Newsletter
   (email input + gold arrow button), Follow Us (social icons). Credit
   line links to Component Dock.

## Design tokens (from preview main.css)
- Brand gold: #b68834
- Text: #222222 (primary), #777777 (muted)
- Surface: #fff (cards), #f9f9ff (section bg)
- Font: Poppins (300–700)
- Buttons: border-radius 25px, gold bg, white text, asymmetric padding
- Cards: border-radius 10px, gold-tinted box-shadow
- Counter: font-size 60px, font-weight 100
- Star rating: orange

## Component structure
```
apps/cuppa/src/
├── App.tsx
├── main.tsx
├── index.css (Tailwind entry + @theme tokens)
├── test/
│   └── setup.ts
└── components/
    ├── Header.tsx        (top bar + navbar)
    ├── Hero.tsx          (fullscreen banner)
    ├── VideoSection.tsx  (about + video thumbnail)
    ├── MenuGrid.tsx      (9 coffee items)
    ├── Gallery.tsx       (5-image mixed grid)
    ├── Reviews.tsx       (review cards + counter)
    ├── Blog.tsx          (2 blog cards)
    └── Footer.tsx        (3-column footer)
```

## Open questions for implementer
- Gallery lightbox: consider `yet-another-react-lightbox` or simple
  modal; original uses GLightbox
- Counter animation: original has JS counter animation on scroll;
  implementer may skip or use framer-motion
- Video play button: static overlay only, no video embed needed
