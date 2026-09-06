# Substructure — Design Notes & Implementation Tasks

## Source
- ColorLib: Bootstrap Footer 05 (slug: `bootstrap-footer-05`)
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-05/
- Category: Footer Component
- Description: "Spice things up on your website with this free light footer template. Keep things clean and minimal."

## Structure Order (Section-by-Section)

1. **Demo content area** (above footer) — light gray bg, centered heading "Footer #5" (70vh height placeholder)
2. **Footer — top section** (border-bottom, pb-5, mb-4):
   - 3-column row (align-items-center):
     - Col lg-3: Email subscribe form — input (gray bg, no border, 45px height) + arrow submit button
     - Col lg-6: Horizontal nav links — Features, Blog, Pricing, Services (centered)
     - Col lg-3: Social icon buttons — Twitter, Instagram, Facebook, Pinterest (circular, right-aligned)
3. **Footer — bottom section**:
   - 3-column row (align-items-center):
     - Col lg-4 (order 2, center on desktop): Site logo "Substructure" — 30px, blue #3e64ff, weight 900
     - Col lg-4 (order 1, left): Secondary links — Terms, About, Privacy, Contact (horizontal)
     - Col lg-4 (order 3, right): Copyright notice — "© 2024. All Rights Reserved." in small gray

## Fidelity Notes

- **Fonts:** Poppins loaded via Google Fonts (weights 300, 400, 500)
- **Icons:** Use `lucide-react` for social icons:
  - twitter → Twitter
  - instagram → Instagram
  - facebook → Facebook
  - pinterest → Pinterest
- **Arrow icon:** Use `lucide-react` `ArrowLeft` rotated 180deg for the submit button (original uses `icon-keyboard_backspace` rotated)
- **Colors:** Footer bg #fff, accent #3e64ff, text #777, social bg #e6e6e6, social color #333
- **Subscribe input:** Gray background (#e6e6e6), no border, placeholder #b3b3b3 at 14px
- **Social buttons:** 40x40px circles, centered icons, light gray background
- **Layout:** Bootstrap grid with col-lg-3/6/3 for top, col-lg-4 for bottom
- **Responsive:** Columns stack on mobile; logo centers on desktop via text-lg-center
- **Border treatment:** Top border (#efefef) on footer, bottom border on top section

## Tasks

- [ ] Create `apps/substructure/` workspace (copy simplest existing app)
- [ ] Rename package to `@free-react-templates/substructure`
- [ ] Set up Tailwind v4 + theme tokens in `index.css`
- [ ] Create `Footer.tsx` component (main footer wrapper with two sections)
- [ ] Create `SubscribeForm.tsx` component (email input + arrow button)
- [ ] Create `SocialIcons.tsx` component (circular icon buttons)
- [ ] Create `App.tsx` composing the demo layout
- [ ] Add Google Fonts link for Poppins in index.html
- [ ] Write tests (100% coverage) before implementation
- [ ] Verify: typecheck + lint + test:coverage + build pass
