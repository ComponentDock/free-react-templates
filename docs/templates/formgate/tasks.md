# FormGate — Tasks & Design Notes

## Source
- ColorLib: Modal 05 (modal-05)
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-05/
- New name: `formgate`

## Structure Order (section-by-section)

1. **PageBackground** — full-height white background, centered layout
2. **LaunchSection** — heading + "Launch Modal" button, vertically centered
3. **RegistrationModal** — Bootstrap-style centered modal with:
   - Modal backdrop (dimmed overlay)
   - Modal container (white, shadow, max-width 450px)
   - Close button (X) top-right
   - Modal body:
     - Heading: "Create Your Account"
     - Social icons row (Twitter, Facebook, Instagram) — circular 40x40px
     - Signup form:
       - Full Name input (placeholder: John Doe)
       - Email Address input (placeholder: johndoe@gmail.com)
       - Password input (placeholder: Password)
       - Sign Up button (blue, rounded, full-width)
       - "I'm already a member" link

## Fidelity Notes

### Colors
- Primary blue: #007bff (Bootstrap default)
- Text: #212529
- Background: #fff
- Labels: rgba(0,0,0,0.3), uppercase, 12px
- Social icon bg: rgba(0,0,0,0.05)
- Social icon hover: #fff background

### Typography
- Font: Poppins (weights 300-900 loaded via Google Fonts)
- Body: 15px, line-height 1.8
- Labels: 12px, uppercase
- Heading: default size, margin-bottom 0 on h2

### Layout
- Full-height section, flex centered
- Modal: centered, max-width 450px
- Form inputs: height 52px, border-radius 5px
- Social icons: 40x40px circles, inline-block, 10px right margin
- Close button: 40x40px, top-right absolute

### Animations
- Modal fade in/out (Bootstrap .fade class)
- Backdrop fade

### Implementation Notes
- Use React state for modal open/close (no jQuery needed)
- Use lucide-react icons instead of Ionicons (X for close, Twitter/Facebook/Instagram for social)
- Use picsum.photos for any placeholder images if needed
- Use Poppins via Google Fonts link in index.html
- Tailwind @theme for primary blue (#007bff)
- All form inputs should use semantic HTML with htmlFor on labels
- Modal should trap focus when open
- ESC key closes modal
- Backdrop click closes modal
- Footer links to https://www.componentdock.com/

## TODO
- [ ] Scaffold apps/formgate from simplest existing app
- [ ] Write component tests (TDD — RED)
- [ ] Implement PageBackground component
- [ ] Implement LaunchSection component
- [ ] Implement RegistrationModal component
- [ ] Implement signup form with validation
- [ ] Add social media icons (lucide-react)
- [ ] Add Poppins font via Google Fonts
- [ ] Style with Tailwind (design tokens in @theme)
- [ ] Add modal open/close state management
- [ ] Add keyboard accessibility (ESC, focus trap)
- [ ] Add backdrop click to close
- [ ] Write footer with Component Dock link
- [ ] Run tests to 100% coverage (GREEN)
- [ ] Verify: typecheck + lint + test:coverage + build
