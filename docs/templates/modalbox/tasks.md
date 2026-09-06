# ModalBox — Implementation Tasks & Design Notes

**Source:** ColorLib Modal 04
**New name:** modalbox
**Preview:** https://preview.colorlib.com/theme/modal-04/ (unreachable)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-04.jpg

## Structure order (section-by-section)

1. **Page background** — underlying page content (can be a simple placeholder or the page the modal overlays)
2. **Modal overlay** — full-viewport semi-transparent gray backdrop
3. **Modal card** — centered white card with rounded corners and drop shadow
4. **Close button** — X icon in top-right of modal card
5. **Left section** — product image / visual area
6. **Right section** — headline + description + CTA button
7. **Bottom banner** — dark navy banner with white text and secondary CTA

## Fidelity notes

### Overlay

- Semi-transparent gray (#7f7f7f at ~60% opacity) covering entire viewport
- Clicking overlay outside modal card dismisses the modal
- The overlay dims/blurs the underlying page content

### Modal card

- White (#ffffff) background
- Rounded corners (~8px)
- Large drop shadow for floating effect
- Max-width ~500px on desktop, full-width with margins on mobile
- Centered horizontally and vertically in viewport

### Close button

- Top-right corner of modal card
- Simple X icon (use lucide-react `X` icon)
- On click: dismiss modal + overlay
- On Escape key: same behavior

### Left section (product image)

- Takes roughly 40% of modal width on desktop
- Displays a placeholder product image (use picsum.photos)
- On mobile: full width, stacked above right section
- Slightly rounded left corners matching modal card

### Right section (coupon details)

- Takes roughly 60% of modal width on desktop
- Contains: bold headline (dark navy #2c2f3e), descriptive body text, teal CTA button
- CTA button: teal (#65c3c3), white text, slightly rounded (~4px), padding for click target
- On mobile: full width, stacked below image

### Bottom banner

- Full width of modal card
- Dark navy (#2c2f3e) background
- White text with secondary message/CTA
- Slightly rounded bottom corners matching modal card

### Trigger behavior

- Modal appears after a configurable delay (default: 3 seconds)
- Also triggers on exit intent (mouse moving toward browser top)
- Uses localStorage to track if modal was already shown/dismissed in session
- Does not reappear once dismissed

### Responsive

- Mobile (< 640px): single column, image on top, details below
- Tablet/Desktop (>= 640px): two-column side-by-side layout

## Component outline

```
src/
  App.tsx              — renders placeholder page + ModalBox
  components/
    ModalOverlay.tsx   — full-viewport overlay backdrop
    ModalCard.tsx      — the centered white card container
    CloseButton.tsx    — X button in top-right corner
    ProductImage.tsx   — left section with product image
    CouponDetails.tsx  — right section: headline, text, CTA button
    BottomBanner.tsx   — dark bottom banner with secondary text
    useModalTrigger.ts — hook for delay + exit intent + localStorage
```

## Dependencies

- lucide-react (for X close icon)
- packages/ui (cn utility)
- No new external dependencies needed
