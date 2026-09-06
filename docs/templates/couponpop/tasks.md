# CouponPop — Tasks

Recreation of ColorLib Modal 04 (coupon modal popup)

## Checklist

- [ ] Scaffold `apps/couponpop/` (copy overlay, rename package)
- [ ] Write spec (`openspec/specs/template-couponpop/spec.md`)
- [ ] TDD: write tests first
  - [ ] Landing.test.tsx — heading, description, Launch Coupon button
  - [ ] CouponModal.test.tsx — renders when open, shows coupon code, copy button, CTA, dismissal
  - [ ] Footer.test.tsx — site name, Component Dock link
  - [ ] App.test.tsx — integration: open/close modal flow
- [ ] Implement components
  - [ ] Landing.tsx — heading + Launch Coupon button
  - [ ] CouponModal.tsx — coupon popup with dashed code box, copy, Shop Now
  - [ ] Footer.tsx — Component Dock link
  - [ ] App.tsx — compose all sections
- [ ] Verify: `bash scripts/verify-app.sh couponpop` (typecheck + lint + 100% coverage + build)
- [ ] Run `npm run spec:validate`
- [ ] Commit, push, PR, merge

## Design Notes

- Brand: red (#e74c3c)
- Font: Poppins (Google Fonts)
- Modal: rounded corners, drop shadow, centered
- Coupon code: dashed border box with copy button
- CTA: "Shop Now" in red
