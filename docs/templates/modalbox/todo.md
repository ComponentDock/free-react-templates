# Modalbox — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-14`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-14/
- Category: Bootstrap Modal Templates
- Description: Coupon form pop-up with warm cream background, promotional image, dashed coupon code box, and full-width CTA

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #4") + launch button
3. **ModalDialog** — Overlay/backdrop + centered modal box with cream bg
4. **ModalHeader** — Close button (X) positioned top-right
5. **ModalBody** — Flex layout: promo image (left) + text content (right)

## Design Notes

- Minimal page: one heading + launch button, same pattern as other Modal templates
- Modal is the main visual element — warm cream (#fff4e4) background distinguishes this variant
- Two-column flex layout inside modal: promo image (200px fixed) + text column
- Dashed-border coupon code box is the key visual element (white bg, 2px dashed gray border)
- Full-width primary CTA button ("Use a coupon") below the coupon code
- Cancel/dismiss link at the bottom in small gray text
- Modal has 7px border-radius (slightly rounded)
- Deep box-shadow (0 10px 50px -10px rgba(0,0,0,0.9)) for prominent modal appearance
- Font: Roboto family, body text in light gray (#b3b3b3), modal text in darker (#777)
- Heading in modal is black (#000)
- Button is Bootstrap primary blue with 4px radius

## Component Outline

### `App.tsx`

- Renders PageContent + ModalDialog
- Manages modal open/close state

### `components/PageContent.tsx`

- Full viewport centered container
- Title heading ("Modal #4")
- "Launch modal" button with onClick handler

### `components/ModalDialog.tsx`

- Overlay/backdrop div
- Modal container with cream background
- Props: isOpen, onClose
- Accessibility: role="dialog", aria-labelledby, aria-hidden
- Focus trap on open
- Close on backdrop click, Escape key

### `components/ModalBody.tsx`

- Close button (X) top-right
- Flex layout container
- Left column: promotional image (200px, background-image)
- Right column:
  - Title: "60% off coupon"
  - Description paragraph
  - Coupon code box (dashed border, "SUMMER60")
  - Full-width "Use a coupon" primary button
  - "Sorry, I don't want this." cancel link

## Implementation Priority

1. PageContent (static layout, simplest)
2. ModalDialog (overlay + container, open/close state)
3. ModalBody (two-column layout, coupon box, button)
4. Close button + cancel link interactions
5. Accessibility (focus trap, aria, Escape key)
6. Responsive layout (stack on mobile)
7. Tests (Vitest + Testing Library)

## Fidelity Checklist

- [ ] Warm cream background (#fff4e4) matches original
- [ ] Promo image is 200px fixed width on the left
- [ ] Coupon box has white bg + 2px dashed #6c757d border
- [ ] "Use a coupon" button is full-width, primary blue
- [ ] Cancel link is small gray text at bottom
- [ ] Modal has 7px border-radius + deep shadow
- [ ] Font is Roboto family
- [ ] Heading color is #000, paragraph is #777
- [ ] Layout stacks vertically on mobile screens
