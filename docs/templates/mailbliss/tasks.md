# MailBliss — Tasks & Design Notes

## Source
- ColorLib: Modal 08 (modal-08)
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-08/
- New name: `mailbliss`

## Structure Order (section-by-section)

1. **PageBackground** — full-height white background, centered layout
2. **LaunchSection** — heading + "Launch Modal" button, vertically centered
3. **ConfirmationModal** — Bootstrap-style centered modal with:
   - Modal backdrop (dimmed overlay)
   - Modal container (white, shadow, max-width 600px)
   - Modal header:
     - Gradient background: #915eff → #ff8e59 at 45deg
     - Height 230px
     - Skewed angle effect (V-shape) via pseudo-elements (skewY ±10deg, 60px height)
     - Close button (X) top-right (40x40px)
   - Modal body (overlaps header by -180px margin-top):
     - "You've Got Mail!" heading (white, bold, over gradient)
     - Circular email icon (200x200px, SVG image)
     - "We sent confirmation link to:" subheading (18px)
     - "johndoe@gmail.com" email display (22px, bold, @ in light weight 300)

## Fidelity Notes

### Colors
- Primary blue: #007bff (Bootstrap default, for launch button)
- Gradient purple: #915eff
- Gradient orange: #ff8e59
- Gradient angle: 45deg (bottom-left to top-right)
- Text: #212529
- Background: #fff
- Modal heading (over gradient): #fff

### Typography
- Font: Poppins (weights 300-900 loaded via Google Fonts)
- Body: 15px, line-height 1.8
- "You've Got Mail!" h2: white, bold (700)
- Subheading h4: 18px
- Email h3: 22px, font-weight 800
- Email @ symbol: font-weight 300 (light contrast)

### Layout
- Full-height section, flex centered
- Modal: centered, max-width 600px
- Modal header: 230px height, gradient background
- Modal body: margin-top -180px (overlaps header)
- Email icon: 200x200px circle, centered
- Close button: 40x40px, top-right absolute

### Special Effects
- Skewed angle on header bottom edge via ::before and ::after pseudo-elements
- Left pseudo: width 50%, height 60px, skewY(10deg), white background
- Right pseudo: width 50%, height 60px, skewY(-10deg), white background
- Creates a dynamic V-shaped bottom edge on the gradient header

### Implementation Notes
- Use React state for modal open/close (no jQuery needed)
- Use lucide-react icons (Mail for email icon, X for close)
- Use picsum.photos for any placeholder images if needed
- Use Poppins via Google Fonts link in index.html
- Tailwind @theme for gradient colors (#915eff, #ff8e59)
- CSS clip-path or transform for the skewed header effect (alternative to pseudo-elements)
- All content should use semantic HTML
- Modal should trap focus when open
- ESC key closes modal
- Backdrop click closes modal
- Footer links to https://www.componentdock.com/

## TODO
- [ ] Scaffold apps/mailbliss from simplest existing app
- [ ] Write component tests (TDD — RED)
- [ ] Implement PageBackground component
- [ ] Implement LaunchSection component
- [ ] Implement ConfirmationModal component
- [ ] Implement gradient header with skewed angle effect
- [ ] Implement email icon display (SVG or lucide-react Mail icon)
- [ ] Add Poppins font via Google Fonts
- [ ] Style with Tailwind (design tokens in @theme)
- [ ] Add modal open/close state management
- [ ] Add keyboard accessibility (ESC, focus trap)
- [ ] Add backdrop click to close
- [ ] Write footer with Component Dock link
- [ ] Run tests to 100% coverage (GREEN)
- [ ] Verify: typecheck + lint + test:coverage + build
