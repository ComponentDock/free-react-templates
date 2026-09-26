# Redawn — Implementation Notes

Source: ColorLib "Rea" (https://preview.colorlib.com/theme/rea/)
New name: redawn (apps/redawn)

## Section order (top to bottom)

1. Header — logo (left) + animated headline (right, typing effect cycling 3 phrases)
2. Hamburger toggle — fixed top-right, 4 black lines of decreasing width, animates to X
3. Full-screen nav overlay — white bg, centered column, big bold links, social row, search input
4. Blog grid — masonry layout, 4-column grid:
   - 1x items (1 col): image, overlay counts, category, title, like
   - 2x items (2 cols): same structure, wider
   - All items have hover image swap
5. Load more — centered arrow image
6. Footer — 3-col flex: categories list, nav links, social icons + copyright

## Fidelity notes

- **Grid:** Original uses Isotope.js for masonry. Recreate with CSS grid or a masonry library. Cards have 15px transparent border for spacing. Images have 2px top border-radius.
- **Animated headline:** Uses Typed.js-style "type" effect (letters appear one by one, then words cycle). Can use a React typing library or CSS animation.
- **Hover image swap:** Each card has two images — second shown on hover with fade transition.
- **Card overlay:** Top-right corner shows preview count (eye icon?) and download count (download icon?). Heart/like at bottom-left with count.
- **Toggle:** 4 divs (lines) of widths 30px, 24px, 15px, 30px. Hover animates lines to the right. Open state rotates lines into X.
- **Menu:** Full-screen fixed overlay, max-width 350px centered, bold 35px links. Social icons at 26px in gray (#CACACA). Search input styled as big centered text.
- **Footer:** Light gray/social icons. Copyright with heart icon. Categories as a simple list.
- **Colors:** Primary pink #f271ab everywhere (links, buttons, selection, active states). Everything else is white/black/gray.
- **Typography:** Lato 300/400/700. Body 20px/35px line-height. Headings bold 700.

## Image strategy

- Portfolio items: use picsum.photos with seed `redawn-n` for deterministic placeholders
- Logo: create a simple text/SVG logo or use a placeholder
- Load more arrow: SVG arrow icon from lucide-react
- Heart icon: lucide-react Heart
- Category badges: simple text labels
