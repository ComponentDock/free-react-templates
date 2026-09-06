# PeekView — Design Notes & Implementation TODO

## Source Mapping

- **ColorLib source:** Modal 05
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-05/
- **New name:** peekview
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-05.jpg

## Section Order (from preview HTML)

1. **Page section (ftco-section)** — white background, centered flex container
   - Heading: "Modal 05" → rename to "PeekView" or "Sign Up"
   - Button: "Launch Modal 05" → "Sign Up" (brand-primary styled)

2. **Modal overlay** — Bootstrap-style fade-in centered modal
   - Max-width 450px, no border-radius, box-shadow
   - Close button: standard Bootstrap `.close` with ionicons "×" icon
   - Fade-in animation (0.3s ease-out transform)

3. **Modal body (single column, padded)**
   - h3: "Create Your Account" — centered, mb-3
   - Social media icons row:
     - Twitter (ion-logo-twitter), Facebook (ion-logo-facebook), Instagram (ion-logo-instagram)
     - 50×50px circles, white bg, subtle border, brand-blue on hover
   - Form (`.signup-form`):
     - Full Name input (text, placeholder "John Doe")
     - Email Address input (text, placeholder "johndoe@gmail.com")
     - Password input (password, placeholder "Password")
     - "Sign Up" submit button (full-width, brand-primary bg, rounded)
     - "I'm already a member" link (centered, brand-primary color)

## Design Token Notes

- Brand primary: #3e64ff (blue)
- Font: Poppins (Google Fonts, weights 300–900)
- Modal: 450px max, no border-radius, box-shadow 0px 10px 34px -15px rgba(0,0,0,0.24)
- Close button: standard Bootstrap close, black "×" icon
- Form inputs: 52px height, 5px border-radius, white bg
- Social icons: 50×50px circles, white bg, subtle border, brand-blue hover
- CTA button: brand-primary bg (#3e64ff), white text, full-width, 5px radius
- Page background: white (#fff)

## Implementation TODO

### Components
- [ ] Create `src/components/PageSection.tsx` — white bg, centered flex container
  - [ ] Title heading (h1 or h2)
  - [ ] "Sign Up" launch button (brand-primary styled)
- [ ] Create `src/components/PeekViewModal.tsx` — centered modal overlay
  - [ ] Modal overlay (fade in/out, backdrop click to close)
  - [ ] Modal content container (450px max, no border-radius, box-shadow)
  - [ ] Close button (standard Bootstrap close with × icon)
  - [ ] h3: "Create Your Account" heading
  - [ ] Social media icons row (Twitter, Facebook, Instagram)
    - [ ] 50×50px circular containers
    - [ ] Brand-blue hover effect
  - [ ] Sign-up form
    - [ ] Full Name input (text, placeholder "John Doe")
    - [ ] Email Address input (text, placeholder "johndoe@gmail.com")
    - [ ] Password input (password, placeholder "Password")
    - [ ] "Sign Up" submit button (full-width, brand-primary bg)
    - [ ] "I'm already a member" link (centered, brand-primary color)

### Styling
- [ ] Use Tailwind classes matching design tokens
- [ ] @theme block with `--color-brand: #3e64ff`
- [ ] Poppins via Google Fonts link in index.html
- [ ] Modal backdrop: semi-transparent black overlay
- [ ] Responsive: modal fits screen width on mobile

### Tests
- [ ] PageSection: renders heading and launch button
- [ ] PeekViewModal: opens/closes, renders content
- [ ] Close button: triggers close on click
- [ ] Backdrop click: closes modal
- [ ] Escape key: closes modal
- [ ] Sign-up form: renders all inputs and submit button
- [ ] Social icons: render all three icons
- [ ] "I'm already a member" link: visible and styled
- [ ] Accessibility: aria-labels, focus trap, keyboard escape
- [ ] Responsive behavior: modal adjusts on small viewport

### Integration
- [ ] App.tsx composes PageSection + PeekViewModal
- [ ] State: modal open/close managed in App
- [ ] Footer links to componentdock.com
- [ ] public/CNAME = peekview.free.componentdock.com
- [ ] package.json homepage = https://peekview.free.componentdock.com
