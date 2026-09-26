# Fotobox — Prep Notes

Source: ColorLib Photography 2
Preview: https://preview.colorlib.com/theme/photography-2/ (404 — unreachable)
Screenshot: AVIF format, converted to PNG for analysis
Description: "Free Bootstrap photography website template with required features for photo projects. Massive slider, portfolio section, blog section."

## Section order (from screenshot analysis)

1. **Navbar** — white bg, "Foto." logo (bold black + teal dot) left, nav links center (Home [active/teal], Portfolio, Blog, About, Contact), contact email right (teal)
2. **Hero Slider** — near full-viewport height, full-bleed landscape photography images, centered large white heading + underlined "VIEW PROJECTS" CTA, left/right dark semi-transparent circle arrows, slide counter "1 / 2" at bottom
3. **Thumbnail Gallery** (toggled) — "SHOW THUMBNAILS" text link triggers grid of project thumbnails below the slider
4. **Footer** — copyright left, "SHOW THUMBNAILS" center, social icons right (Facebook, Twitter, Instagram, Behance, Pinterest)

## Design notes

- **Ultra-minimalist** — very few visible sections on the front page; most content is in the slider
- **Brand accent:** Teal/green (#4ecdc4 approx) — used on logo dot, active nav, contact email
- **Font:** Clean geometric sans-serif (Montserrat or similar)
- **Hero slider dominates** — takes up nearly the full viewport, with dramatic landscape photos
- **"VIEW PROJECTS" and "SHOW THUMBNAILS"** are text-only CTAs (underlined, uppercase), not buttons
- **Nav arrows:** Semi-transparent dark circles with white chevrons, positioned over the slider image
- **Slide counter:** Small text "1 / 2" centered at bottom of slider
- **Social icons:** Facebook, Twitter, Instagram, Behance, Pinterest — standard icon set
- **Color palette:** Minimal — white bg, dark text, teal accent, dark slider overlays

## Component breakdown

| Component | Source section | Notes |
|-----------|---------------|-------|
| Navbar | header | White bg, logo + nav links + contact email |
| HeroSlider | fullscreen slider | Image carousel with overlay text, arrows, counter |
| ThumbnailGallery | toggle section | Grid of project thumbnails (toggled by "SHOW THUMBNAILS") |
| Footer | footer | Copyright + thumbnails toggle + social icons |

## Placeholder image strategy

- Hero slides: `https://picsum.photos/seed/fotobox-slide-1/1920/1080` etc.
- Thumbnail grid: `https://picsum.photos/seed/fotobox-thumb-1/400/300` etc.
- Use landscape-oriented images for hero slides to match the original feel

## Fidelity risks

- Preview was unreachable (404) — all analysis based on screenshot only
- The "SHOW THUMBNAILS" toggle behavior needs careful implementation (likely JS-driven expand/collapse)
- The hero slider needs smooth transitions and proper auto-play
- The slider appears to be a full-bleed design (edges of image visible) rather than edge-to-edge
- The contact email in the navbar might be a mailto link
- Font identification is approximate — need to verify the exact font from any available CSS references
