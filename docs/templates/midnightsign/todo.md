# Midnightsign — Implementation Todo & Design Notes

## Source
- ColorLib template: Modal 09
- Source slug: `modal-09`
- Preview URL: https://preview.colorlib.com/theme/bootstrap/modal-09/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-09.jpg

## Design Notes

### Section Order (top → bottom)
1. **Page shell** — white background, centered heading "Midnightsign", amber
   "Launch Midnightsign" button (#e3b04b, border-radius 4px, height 52px)
2. **Modal overlay** — semi-transparent dark backdrop
3. **Modal dialog** (max-width 900px, centered, shadow 0px 10px 34px -15px
   rgba(0,0,0,0.24), border-radius 0)
   a. **Close button** — 40x40px, absolute top-right, background rgba(0,0,0,0.1),
      white × icon
   b. **Left panel** — background image (placeholder: picsum.photos), min-height
      400px (300px on mobile)
   c. **Right panel** — dark charcoal background (#2b2b28) containing:
      i. **Tab bar** — "Sign In" / "Sign Up" tabs
         - Active tab: #e3b04b text
         - Inactive tab: rgba(255,255,255,0.1) text
         - No visible border on tabs
      ii. **Sign In form** (default active)
         - "Sign In" heading (h3)
         - Username input (uppercase label, 12px, letter-spacing 1px)
         - Password input
         - Amber "Sign In" button (border-radius 4px, height 52px)
         - "Remember Me" checkbox (16x16px, radius 3px, border rgba(255,255,255,0.4))
         - "Forgot Password" link (right-aligned)
         - "Not a member? Sign Up" text with link
      iii. **Sign Up form** (hidden by default)
         - "Sign Up" heading (h3)
         - Full Name input (placeholder "John Doe")
         - Email Address input (placeholder "johndoe@gmail.com")
         - Password input
         - "I agree all statements in terms of service" checkbox with link
         - Amber "Sign Up" button
         - "I'm already a member! Sign In" text with link
4. **Footer** — "More templates at Component Dock" link

### Key Fidelity Details
- The modal splits into TWO equal columns (not a header/body pattern)
- The LEFT column is purely a background image panel (no text content)
- The RIGHT column has dark background with tabbed forms
- Form inputs in the modal use bottom-border-only styling (no full border)
  and transparent backgrounds
- Labels are uppercase with letter-spacing: 1px, font-size: 12px
- Font: Roboto (weights 300, 400, 700) loaded from Google Fonts
- Button hover: background becomes transparent, text and border remain #e3b04b
- Checkbox checked state: background changes to #e3b04b with white checkmark SVG
- The close button sits absolutely positioned at the top-right of the ENTIRE
  modal content (not just one panel)
- Modal has square corners (border-radius: 0)

### Color Palette
- Brand/primary: #e3b04b (amber/golden)
- Dark panel: #2b2b28
- Page background: #fff
- Form text: rgba(255,255,255,0.7)
- Placeholder: rgba(255,255,255,0.2)
- Tab inactive: rgba(255,255,255,0.1)
- Checkbox border: rgba(255,255,255,0.4)
- Checkbox description: rgba(255,255,255,0.3)
- Close button bg: rgba(0,0,0,0.1)

### Implementation Tasks
- [ ] Copy simplest existing app as base (e.g. apps/modalize)
- [ ] Rename package to `@free-react-templates/midnightsign`
- [ ] Create `public/CNAME` with `midnightsign.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Update `src/App.tsx` to compose new sections
- [ ] Create `src/components/LaunchButton.tsx` — amber launch button
- [ ] Create `src/components/Modal.tsx` — two-column modal with close button
- [ ] Create `src/components/BackgroundPanel.tsx` — left image panel
- [ ] Create `src/components/FormPanel.tsx` — right dark panel with tabs
- [ ] Create `src/components/SignInForm.tsx` — username/password form
- [ ] Create `src/components/SignUpForm.tsx` — name/email/password form
- [ ] Create `src/components/Footer.tsx` — Component Dock link
- [ ] Write `src/index.css` with Tailwind theme tokens (#e3b04b brand)
- [ ] Write tests for all components (100% coverage)
- [ ] Run `scripts/verify-app.sh midnightsign` to validate
- [ ] Commit and push
