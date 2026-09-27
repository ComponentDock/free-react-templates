# RegBox — Design Notes

## Source
- ColorLib Reg Form V26
- Preview: https://colorlib.com/etc/regform/colorlib-regform-26/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-26.jpg

## Section Order
1. **Full-viewport wrapper** — light sky blue (`#accffe`) background, flex centered
2. **Card container** — white card, box-shadow, sharp corners, relative positioning
3. **Heading** — "New Account?" uppercase, letter-spacing, SemiBold
4. **Form fields** (5x) — each with icon + bottom-bordered input
   - Username (user icon)
   - Phone Number (phone icon)
   - Email/Mail (envelope icon)
   - Password (lock icon)
   - Confirm Password (lock icon)
5. **Register button** — full-width, `#99ccff`, sweep animation on hover
6. **Decorative images** — positioned at bottom-left and bottom-right of card (desktop only)

## Fidelity Notes

### Typography
- Original uses "Muli" font family (Muli-Regular 400, Muli-SemiBold 600)
- Muli was renamed to Mulish on Google Fonts — use Mulish
- Heading: 25px, uppercase, letter-spacing 3px, SemiBold, color `#333`
- Input text: 16px, SemiBold, color `#666`
- Placeholder: 14px, Regular weight, color `#999`
- Button: 15px, uppercase, letter-spacing 2px, SemiBold, color `#fff`

### Layout
- Wrapper: `min-height: 100vh`, flex center (both axes)
- Card: fixed width 435px (desktop), fluid on mobile
- Form padding: 77px top, 61px sides, 66px bottom (desktop); 35px all (mobile)
- Decorative images: absolute-positioned at bottom corners (hidden on mobile)

### Colors
- Background: `#accffe` (light sky blue)
- Card: `#fff` white
- Button: `#99ccff` (medium blue)
- Button hover overlay: `rgba(52, 152, 253, 0.25)` (semi-transparent blue)
- Input border: `#e6e6e6` (light gray)
- Input focus border: `#accffe` (matches background)
- Text: `#333` (headings/icons), `#666` (input values), `#999` (placeholders)

### Button Animation
- Two pseudo-elements (:before, :after) slide in from left on hover
- Uses cubic-bezier(0.75, 0, 0.125, 1) timing
- :after has 0.2s delay for staggered sweep effect
- Transition duration: 0.3s

### Icons
- Original uses Linear Icons font (lnr-*)
- We'll use lucide-react equivalents: User, Phone, Mail, Lock

### Responsive
- @media max-width 991px: card width 400px, left 4%
- @media max-width 767px: card full width, no shadow, no background, no decorative images

### Implementation Notes
- Single component: `RegBox.tsx` (or split into `RegBoxForm.tsx` + icons)
- No external assets needed beyond Google Fonts (Mulish) and lucide-react icons
- Decorative images: use picsum.photos or similar placeholder
- Consider: the original has no form submission logic — just visual
