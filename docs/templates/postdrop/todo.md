# Postdrop — Implementation Todo & Design Notes

## Source
- ColorLib template: Modal 08
- Source slug: `modal-08`
- Preview URL: https://preview.colorlib.com/theme/bootstrap/modal-08/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-08.jpg

## Design Notes

### Section Order (top → bottom)
1. **Page shell** — white background, centered heading "Postdrop", pill-shaped
   "Launch Postdrop" button (salmon pink #fb8691, border-radius 40px)
2. **Modal overlay** — semi-transparent dark backdrop
3. **Modal dialog** (max-width 600px, centered, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`)
   a. **Gradient header** — 230px tall, `linear-gradient(45deg, #915eff 0%, #ff8e59 100%)`
      - Close button (×): white, 40×40px, absolute top-right
      - Decorative skew cuts: two white pseudo-elements at ±10deg, 60px height
   b. **Modal body** — overlaps header by -180px margin-top
      - Circular icon (200×200px, radius 50%) containing email SVG illustration
      - "You've Got Mail!" heading (bold, white or dark depending on overlap)
      - "We sent confirmation link to:" (18px)
      - "johndoe@gmail.com" (22px, weight 800, @ in weight 300)
4. **Footer** — "More templates at Component Dock" link

### Key Fidelity Details
- The modal header is NOT a separate card — it flows directly into the body
  with the circular icon overlapping both regions
- The skew pseudo-elements create diagonal white "cuts" into the gradient,
  giving a distinctive V-shaped transition
- Button hover: background becomes transparent, text turns pink (#fb8691)
- Form controls (if any added) use 1px solid rgba(0,0,0,0.1) border,
  focus border changes to #fb8691
- Font: Poppins (weights 300–900) loaded from Google Fonts

### Implementation Tasks
- [ ] Copy simplest existing app as base (e.g. apps/modalize)
- [ ] Rename package to `@free-react-templates/postdrop`
- [ ] Create `public/CNAME` with `postdrop.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Update `src/App.tsx` to compose new sections
- [ ] Create `src/components/Modal.tsx` — modal dialog with gradient header, skew cuts, close button
- [ ] Create `src/components/ModalBody.tsx` — circular icon + confirmation text
- [ ] Create `src/components/LaunchButton.tsx` — pill-shaped launch button
- [ ] Create `src/components/Footer.tsx` — Component Dock link
- [ ] Write `src/index.css` with Tailwind theme tokens
- [ ] Write tests for all components (100% coverage)
- [ ] Run `scripts/verify-app.sh postdrop` to validate
- [ ] Commit and push
