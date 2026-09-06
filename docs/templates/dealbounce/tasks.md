# DealBounce — Implementation Tasks & Design Notes

## Structure order (section-by-section)

1. **App scaffold** — copy simplest existing modal app, rename to `dealbounce`
2. **PageContent** — static page with "Modal #4" heading + gray "Launch modal" button
3. **ModalDialog** — centered modal container with warm cream (#fff4e4) background
4. **ModalClose** — close button (top-right, black X icon from lucide-react)
5. **PromoImage** — left-side fixed-width (200px) product image with background-size: cover
6. **CouponContent** — right-side content area:
   - Heading: "60% off coupon" (h3, black, 22px, centered)
   - Description paragraph (gray #777, 14px, centered)
   - Coupon code box: white bg, 2px dashed #6c757d border, "SUMMER60" text
   - CTA button: "Use a coupon" (full-width, primary blue #007bff, 4px radius)
   - Dismiss link: "Sorry, I don't want this." (gray, 14px, centered)

## Design fidelity notes

- **Background:** Warm cream #fff4e4 — NOT white, NOT dark overlay. This is `.bg-4` in the original.
- **Layout:** Split — left image (200px flex) + right content. Stack on mobile.
- **Typography:** Roboto, weight 300 for body text. Headings default weight.
- **Colors:** Black headings (#000), gray paragraphs (#777), blue primary (#007bff), gray secondary for cancel.
- **Coupon box:** White bg, 2px dashed #6c757d border, black text, 10px padding.
- **Modal:** 7px border-radius, heavy drop shadow `0 10px 50px -10px rgba(0,0,0,0.9)`, no image overlay.
- **Button:** Bootstrap primary, 4px radius, full-width (btn-block), generous vertical padding.
- **Close:** Black X icon, positioned top-right inside modal.
- **Dismiss link:** Gray text "Sorry, I don't want this.", 14px, centered below CTA.

## Testing approach

- Test modal open/close via button, close icon, dismiss link, and Escape key
- Test responsive layout (split vs stacked)
- Test coupon code box renders correctly
- Test CTA button interaction
- Verify 100% coverage

## Component file plan

- `src/App.tsx` — compose PageContent + ModalDialog
- `src/components/PageContent.tsx` — heading + launch button
- `src/components/ModalDialog.tsx` — modal wrapper with state
- `src/components/PromoImage.tsx` — left-side image
- `src/components/CouponContent.tsx` — right-side content (heading, desc, coupon box, CTA, dismiss)
- `src/index.css` — Tailwind entry + @theme tokens for brand colors

## Key differences from other modal templates

- Split layout (image + content) vs centered single-column
- Coupon code display with dashed border (unique to this template)
- Warm cream background vs dark overlay or white
- Product image on left side
