# Footwell — Design Notes & Implementation Tasks

## Source
- ColorLib: Bootstrap Footer 01 (slug: `bootstrap-footer-01`)
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-01/
- Category: Footer Component

## Structure Order (Section-by-Section)

1. **CTA banner** — purple (#8186d5) bar with heading + button
   - "Ready for a next project?" (h2)
   - "Let's get started!" (h3)
   - "Contact us" dark button (square corners)
   - Offset box-shadow: -20px -20px 0 0 rgba(52,58,64,0.2)
   - Positioned with relative top: -150px (overlaps above footer)
2. **Footer columns** (5-column row):
   - Col 1: Brand logo ("Footwell" uppercase) + copyright
   - Col 2: "Customers" — Buyer, Supplier
   - Col 3: "Company" — About us, Careers, Contact us
   - Col 4: "Further Information" — Terms & Conditions, Privacy Policy
   - Col 5 (md-3): "Follow us" — 5 circular social icons

## Fidelity Notes

- **Fonts:** Roboto loaded via Google Fonts (weights 300, 400, 700)
- **Icons:** Use `lucide-react` for social icons:
  - facebook → Facebook
  - twitter → Twitter
  - linkedin → Linkedin
  - medium → ExternalLink or custom
  - paper-plane → Send
- **Colors:** Footer bg #141d2a, CTA/social #8186d5, links #666873, hover #fff
- **CTA shadow:** Offset box-shadow creates a card-on-card layered effect
- **Social icons:** 40x40px circles with centered icons
- **Button:** Bootstrap dark class + rounded-0 (square corners)
- **Responsive:** CTA stacks on mobile; footer columns wrap

## Tasks

- [ ] Create `apps/footwell/` workspace (copy simplest existing app)
- [ ] Rename package to `@free-react-templates/footwell`
- [ ] Set up Tailwind v4 + theme tokens in `index.css`
- [ ] Create `Footer.tsx` component (main footer wrapper)
- [ ] Create `CtaBanner.tsx` component (purple CTA section)
- [ ] Create `FooterColumn.tsx` component (reusable column)
- [ ] Create `SocialIcons.tsx` component (circular icon links)
- [ ] Create `App.tsx` composing the demo layout
- [ ] Add Google Fonts link for Roboto in index.html
- [ ] Write tests (100% coverage) before implementation
- [ ] Verify: typecheck + lint + test:coverage + build pass
