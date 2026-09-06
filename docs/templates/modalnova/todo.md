# ModalNova — Design Notes & Implementation Outline

**Source:** ColorLib Modal V14
**Preview:** https://preview.colorlib.com/theme/bootstrap/modal-14/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-14.jpg

## Structure order

1. **App.tsx** — Compose the page: LaunchSection + CouponModal + Footer
2. **LaunchSection.tsx** — Full-viewport centered page with heading + launch button
3. **CouponModal.tsx** — Modal dialog with two-column layout (promo image + coupon content)
4. **Footer.tsx** — Component Dock attribution link

## Section-by-section fidelity notes

### LaunchSection

- Full viewport height, vertically + horizontally centered content
- Heading: "Modal #4" — black, centered
- Button: "Launch modal" — secondary Bootstrap-style, px-4 py-3, 4px border-radius
- Page background: white

### CouponModal

- Triggered by launch button click
- Bootstrap-style modal with `role="dialog"` and `aria-modal="true"`
- Modal dialog: centered, max-width ~500px, 7px border-radius
- Modal content: transparent background, no border
- Modal body: bg-4 class = `#fff4e4` warm cream, 7px border-radius, overflow hidden
- Deep shadow: `0 10px 50px -10px rgba(0,0,0,0.9)`
- No dark overlay backdrop (or light overlay)

**Two-column flex layout inside modal body:**

Left column:
- Promo image area: 200px flex-basis, background-size cover, background-position center
- Use `https://picsum.photos/seed/modalnova/400/300` as placeholder

Right column:
- Heading: "60% off coupon" — black, 22px, centered
- Description: gray #777, 14px, centered
- Coupon code: "SUMMER60" — white bg, 2px dashed #6c757d border, 10px padding, black text, centered
- Action button: "Use a coupon" — primary style, full-width (btn-block), 4px border-radius, py-3
- Cancel link: "Sorry, I don't want this." — gray, 14px, centered

**Close button:** Black X in top-right corner, aria-label "Close"

**Dismiss interactions:**
- Close button click
- Escape key
- Cancel link click
- Focus management: trap focus in modal, return to launch button on close

### Footer

- Link to https://www.componentdock.com/ ("Component Dock")
- Simple, minimal footer matching other modal templates

## Design tokens summary

| Token             | Value              |
| ----------------- | ------------------ |
| Brand color       | #fff4e4 (cream)    |
| Body font         | Roboto             |
| Modal radius      | 7px                |
| Button radius     | 4px                |
| Coupon border     | 2px dashed #6c757d |
| Modal shadow      | 0 10px 50px -10px rgba(0,0,0,0.9) |
| Promo image width | 200px              |

## Implementation notes

- Copy structure from `apps/modalrosa` (nearest completed modal template)
- Rename package to `@free-react-templates/modalnova`
- No ColorLib references in any app file
- Use Lucide React for close icon (X)
- Use picsum.photos for promo image placeholder
- All text content from the preview (verbatim where possible)
