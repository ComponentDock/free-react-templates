# Critique — Design Notes & Implementation Todo

Source: ColorLib Modal 19 (split-screen product review modal)
Preview: https://preview.colorlib.com/theme/bootstrap/modal-19/

## Structure Order

1. `App.tsx` — page layout: centered trigger button, modal component
2. `components/TriggerButton.tsx` — "Launch modal" button (Bootstrap secondary style → Tailwind gray bg, white text, px-4 py-3)
3. `components/ReviewModal.tsx` — the split-screen modal container
4. `components/ProductImage.tsx` — left panel: background image + price badge overlay
5. `components/ProductDetails.tsx` — right panel: share icon, title, underline, stars, description, social counters
6. `components/SocialCounters.tsx` — like/message/add row with icon colors

## Section-by-Section Fidelity Notes

### Trigger Button
- Centered on page using flexbox (100vh height)
- Gray background (Bootstrap secondary = #6c757d), white text, px-4 py-3
- Rounded corners (4px border-radius)

### Modal Shell
- Use a React portal or overlay approach (no Bootstrap JS dependency)
- Centered: flexbox center on the overlay backdrop
- Max-width ~800px (Bootstrap modal-lg), border-radius 7px
- Deep shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- Backdrop: semi-transparent black, click to close
- Escape key closes modal

### Left Panel — Product Image
- 50% width of the modal body
- Full height of the modal
- background-size: cover, background-position: center
- Placeholder: picsum.photos/seed/critique-product/600/600
- Price badge: absolute top-left (top: 20px, left: 20px), white text, font-size ~18px

### Right Panel — Product Details
- 50% width, background-color: #efefef
- Padding: p-4 px-5
- **Share icon**: absolute top-right (right: 20px), gray #ccc, hover black #000, z-index 4
- **Product title**: h3, black #000, font-size 22px, centered, mb-3
  - Decorative underline: position relative, ::after pseudo-element: 70px wide, 1px tall, #ccc, centered below
- **Star rating**: 4 filled stars (yellow/amber) + 1 empty star, centered, mb-3
- **Description**: centered paragraph, color #777, font-size 14px, mb-5, max-width constrained
- **Social row**: flex, 50% width, mx-auto, centered
  - Like: red heart icon (#dc3545) + "25" count, left-aligned
  - Message: blue chat icon (#007bff) + "10" count, center
  - Add: blue plus icon (#007bff) + "55" count, right-aligned

### Icon Mapping (lucide-react)
- Heart → `Heart` (for like)
- Message → `MessageCircle` (for messages)
- Add → `Plus` (for add count)
- Share → `Share2` (for share icon)
- Star → `Star` (for ratings, filled vs outline)

## Testing Notes
- Test trigger button click opens modal
- Test modal backdrop click closes
- Test Escape key closes
- Test correct colors and layout (snapshot or style assertions)
- Test social counter values rendered
- Test star rating shows 4/5
- Test responsive stacking at narrow viewport
- Test accessibility: aria-label on modal, aria-hidden when closed

## Duplicate Files Risk
- This modal is self-contained; no shared files touched
- Only creates: apps/critique/ and openspec/specs/template-critique/
