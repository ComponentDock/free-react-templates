# ModalVex — Implementation Tasks & Design Notes

## Source mapping

- **ColorLib source:** Modal 03
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-03/
- **New name:** modalvex
- **Package:** `@free-react-templates/modalvex`

## Structure order (match source 1:1)

1. **Section** — full-height centered container (white background)
   - Heading: "ModalVex"
   - Launch button: "Launch Modal" (Bootstrap primary style)
2. **Modal overlay** — centered, 700px max-width, no border-radius
   - **Close button** — top-right, semi-transparent dark bg, X icon
   - **Left panel** (~40%) — teal `#39bdc8` background
     - Snowflake icon watermark (white, 30% opacity, 120px)
     - "Winter" subheading (black, uppercase, letter-spaced)
     - "Sale" heading (Pacifico cursive, 105px, black)
     - "40" discount number (white, bold, 130px) + "%" sup + "off" sub
     - "To all colorlib products" description (uppercase)
   - **Right panel** (~60%) — background image
     - "Shop now" button (Bootstrap primary, full-width)

## Section-by-section fidelity notes

### Section: Centered launch area
- White background, vertically and horizontally centered
- Single heading + single CTA button
- Button: Bootstrap `.btn-primary` rounded style, py-3 px-4 padding

### Modal: Overlay behavior
- Standard modal overlay (backdrop with fade)
- Click backdrop to dismiss (Bootstrap default)
- Smooth fade-in/out transition

### Modal: Close button
- Positioned absolute, top-right of modal content
- 40x40px hit area
- Semi-transparent dark background `rgba(0,0,0,0.1)`
- Uses ionicons `ion-ios-close` icon — replace with lucide-react `X` icon

### Modal: Left panel (promo content)
- Background: solid `#39bdc8` teal
- Snowflake icon: use lucide-react `Snowflake` at 120px, positioned absolute top-right, white 30% opacity
- "Winter" subheading: 14px, uppercase, letter-spacing 1px, black
- "Sale" text: Pacifico font (Google Fonts), 105px, black, with underline bar (50px, 2px, white, centered below)
- Discount: large "40" in white bold 130px, "%" in superscript 30px, "off" in subscript 16px uppercase
- Description: uppercase text

### Modal: Right panel (image + CTA)
- Background image via `picsum.photos` placeholder
- "Shop now" button: Bootstrap primary style, full-width, uppercase, py-3

### Typography
- Body font: Lato (300, 400, 700) via Google Fonts
- Display font: Pacifico (400) via Google Fonts — used only for "Sale" heading
- Use system sans-serif as fallback

### Spacing & layout
- Modal max-width: 700px
- Left panel padding: p-5 (1.5rem)
- Right panel padding: p-5
- No border-radius on modal content
- Box-shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
- Modal vertically centered via flexbox (Bootstrap modal-dialog-centered)

## Implementation notes

- Use `packages/ui` Button component for CTA buttons
- Modal state: React state (`useState` for open/close)
- Background image: `https://picsum.photos/seed/modalvex-1/800/600`
- Snowflake icon: lucide-react `Snowflake`
- Close icon: lucide-react `X`
- Tailwind `@theme` tokens: `--color-brand: #39bdc8`
- Responsive: on mobile (<768px), right panel image stacks to 300px height
