# CouponModal — Design Notes & Implementation TODO

## Source Mapping

- **ColorLib source:** Modal 04
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-04/
- **New name:** couponmodal
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-04.jpg

## Section Order (from preview HTML)

1. **Page section (ftco-section)** — white background, centered flex container
   - Heading: "Modal 04" → rename to template title (e.g. "Coupon Modal")
   - Button: "Launch Modal 04" → "Open Coupon" (brand-primary styled)

2. **Modal overlay** — Bootstrap-style fade-in centered modal
   - Max-width 700px, no border, box-shadow
   - Close button: 40×40px, #12d3cf bg, white × icon, absolute top-right

3. **Modal body (two-column row, no gutters)**
   - Left column: background image (picsum.photos placeholder)
   - Right column: centered text block
     - h2: "50" + "%" (span lighter weight) — 58px, bold, uppercase
     - h4: "On all Colorlib Brands" — 16px, uppercase
     - Form: text input "Enter code" placeholder
     - CTA: "Start Shopping" button — block, uppercase, black text

## Design Token Notes

- Brand primary: #12d3cf (teal/cyan)
- Font: Josefin Sans (Google Fonts, weights 300,400,600,700)
- Modal: 700px max, no border-radius, box-shadow 0px 10px 34px -15px rgba(0,0,0,0.24)
- Close button: 40×40px square, #12d3cf bg, white × icon
- CTA button within modal: black text (#000), uppercase, letter-spacing 1px, 14px
- Decorative border: 1px solid rgba(0,0,0,0.1) with -30px offset (pseudo-element)
- Page background: white (#fff)

## Implementation TODO

### Components
- [ ] Create `src/components/PageSection.tsx` — white bg, centered flex container
  - [ ] Title heading (h1 or h2)
  - [ ] "Open Coupon" launch button (btn-primary styled)
- [ ] Create `src/components/CouponModal.tsx` — centered modal overlay
  - [ ] Modal overlay (fade in/out, backdrop click to close)
  - [ ] Modal content container (700px max, no border, box-shadow)
  - [ ] Close button (40×40px, #12d3cf bg, white × icon, absolute top-right)
  - [ ] Two-column layout (no gutters)
    - [ ] Left column: background image (picsum.photos placeholder)
    - [ ] Right column: text block (h2, h4, input, CTA button)
  - [ ] Decorative border pseudo-element around text content
- [ ] Create `src/components/CouponForm.tsx` — promo code input
  - [ ] Text input with "Enter code" placeholder
  - [ ] "Start Shopping" block button (black text, uppercase, letter-spacing)

### Styling
- [ ] Use Tailwind classes matching design tokens
- [ ] @theme block with `--color-brand: #12d3cf`
- [ ] Josefin Sans via Google Fonts link in index.html
- [ ] Modal backdrop: semi-transparent black overlay
- [ ] Responsive: columns stack on mobile, image height 300px on mobile

### Tests
- [ ] PageSection: renders heading and launch button
- [ ] CouponModal: opens/closes, renders content
- [ ] Close button: triggers close on click
- [ ] Backdrop click: closes modal
- [ ] CouponForm: renders input and CTA button
- [ ] Responsive behavior: columns stack on small viewport
- [ ] Accessibility: aria-labels, focus trap, keyboard escape

### Integration
- [ ] App.tsx composes PageSection + CouponModal
- [ ] State: modal open/close managed in App
- [ ] Footer links to componentdock.com
- [ ] public/CNAME = couponmodal.free.componentdock.com
- [ ] package.json homepage = https://couponmodal.free.componentdock.com
