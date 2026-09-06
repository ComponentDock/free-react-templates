# ReviewCard — Design Notes

Source: ColorLib Modal 19 · https://colorlib.com/wp/template/modal-19/
Preview: https://preview.colorlib.com/theme/bootstrap/modal-19/

## Visual description (from ColorLib screenshot)

A centered Bootstrap modal with a split-screen product review layout:
- Left half: product photo (bicycle Grand Prix 4000) with a "$2000" price badge
  overlaid in white text at the top-left corner
- Right half: light gray (#efefef) background containing:
  - Share icon in the top-right corner (clickable)
  - Product name "Grand Prix 4000" centered with a decorative 70px gray
    underline line beneath it
  - 4-out-of-5 yellow star rating centered
  - Description paragraph in gray (#777) text
  - Three social action icons in a row at the bottom:
    heart (25, red), chat/message (10, blue), add/bookmark (55, blue)
- The modal has rounded corners (7px) and a deep box shadow
- The page behind the modal shows a centered "Launch modal" button

## Section order (fidelity)

1. Page body — centered trigger button ("Launch modal")
2. Modal overlay (backdrop)
3. Modal container (modal-lg, centered)
4. Split screen:
   4a. Left: product image panel with price overlay
   4b. Right: review content panel
       - Share icon (absolute top-right)
       - Product heading with decorative underline
       - Star rating (4/5)
       - Description text
       - Social actions bar (heart, message, add)

## Key design decisions

- **Font:** Roboto (300/400) — consistent throughout, loaded from Google Fonts
- **Background:** Light gray (#efefef) for the modal content area — clean, modern
- **Colors:** Bootstrap utility colors for icons (red danger, blue primary, yellow warning)
- **Shadow:** Deep shadow (0 10px 50px -10px rgba(0,0,0,0.9)) gives the modal
  a floating, elevated feel against the backdrop
- **Layout:** Flexbox 50/50 split — image left, content right. The image panel
  uses background-image: cover with the price badge overlaid absolutely
- **Decorative underline:** A centered gray line (70px wide, 1px height) below
  the heading using a pseudo-element (::after)
- **Star rating:** Bootstrap text-warning utility on icon-star class — 4 filled,
  1 empty

## Implementation notes

- The original uses Bootstrap 4 modal (jQuery + popper). The React version will
  use a controlled modal (useState for open/close) with CSS transitions.
- Star rating should use lucide-react Star icons (filled/unfilled variants).
- The decorative underline can be done with a Tailwind border-bottom or a
  pseudo-element via a utility class.
- The price badge is absolutely positioned inside the image panel relative container.
- Social actions should be accessible with aria-labels and semantic button/link elements.
- Close behavior: click on backdrop area OR press Escape key.

## Placeholder images

- Product image: use picsum.photos with a product-like seed, e.g.
  `https://picsum.photos/seed/reviewcard-1/600/800` for the product photo
