# QueryWell — Design Notes

## Source
- ColorLib: Search Form V5 (`colorlib-search-5`)
- Preview: https://preview.colorlib.com/theme/colorlib-search-5/ (unreachable — screenshot only)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-5.jpg

## Structure (top to bottom)

1. **Hero section** — full viewport height, background image (fashion/lifestyle photo), centered content
2. **Heading** — "WHAT ARE YOU LOOKING FOR?" — white, uppercase, bold, clean sans-serif
3. **Search bar** — dark (near-black) background, full-width within a constrained container, flat corners (radius 0), magnifying glass icon on right, placeholder "Type to search."
4. **Category links** — row of text links below search bar: New Arrivals, Ladies, Mens, Accessories, Sale — white text, slightly translucent, hover effect
5. **Footer** — simple footer with Component Dock attribution link

## Component breakdown

| Component    | Notes                                          |
| ------------ | ---------------------------------------------- |
| `Hero.tsx`   | Full-bleed bg image, centered flex column      |
| `SearchBar.tsx` | Dark bar with input + icon, controlled state |
| `CategoryLinks.tsx` | Row of text links, hover opacity transition |
| `Footer.tsx` | Simple footer with Component Dock link         |

## Fidelity notes

- The template is minimal — a single hero section with search + category links. No navbar, no additional sections below the hero.
- The search bar has NO border radius (flat/square corners).
- The search bar background is very dark (near-black), contrasting with the lighter hero image.
- Category links use a clean sans-serif font, white color, with subtle hover transitions.
- Background image: use `https://picsum.photos/seed/querywell-hero/1920/1080` for deterministic placeholder.
- Font: Poppins (Google Fonts) — matches the clean, modern aesthetic.
- The heading is uppercase with generous letter-spacing.
