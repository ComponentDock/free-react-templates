# Signupflare — Design Notes

## Source
- ColorLib: Signup Form 18 ("Sign Up 08")
- URL: https://colorlib.com/wp/template/signup-form-18/
- Preview (LIVE): https://preview.colorlib.com/theme/bootstrap/signup-form-18/
  (naive `/theme/signup-form-18/` 404s — family lives under `/theme/bootstrap/`)
- Preview CSS: `css/style.css` — tokens extracted; screenshot analyzed

## Structure order (top to bottom)
1. Page wrapper (light gray #fafafa, full viewport, centered column, 7em vertical padding)
2. Page heading: "Sign Up #08" (28px, black, centered)
3. Card container (white, 5px radius, soft shadow, centered, ~500px max)
4. Gradient header band (160px, coral→pink, curved bottom-right corner)
5. Avatar (100px circle, white ring, overlapping the band)
6. Card heading: "Sign Up" (light 22px)
7. Form: Name → Email → Password (pill inputs, eye toggle) → "Continue" gradient pill button
8. Sign-in line: "I'm already a member! Sign In"

## Fidelity notes

### Page background
- Solid #fafafa, NO gradient/image
- Generous vertical padding (~7em) around the centered card block

### Page heading
- Black 28px regular (Lato 400), centered, margin below
- Demo text "Sign Up #08" (paraphrase OK — keep a short centered title)

### Card
- White (#fff), subtle 5px radius, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`
- Padding `100px 30px 30px 30px` — top padding reserves room for the band
- `overflow: hidden` + `position: relative` (band must clip to card corners)

### Gradient header band
- Absolutely positioned (like the source's `:after`), height 160px, top:0
- `linear-gradient(135deg, #f75959 0%, #f35587 100%)` — coral-red top-left → pink bottom-right
- `border-radius: 5px 5px 50% 0` — FLAT bottom-left, LARGE curved sweep bottom-right (signature detail; keep the asymmetry)
- Sits behind content (z-index -1 / first child)

### Avatar
- 100×100px circle, `border: 4px solid #fff`, soft shadow, centered, mb 20px
- Straddles the gradient band's lower edge (card top padding 100px positions it)
- Placeholder: `https://picsum.photos/seed/signupflare-1/<w>/<h>` (never the source photo)

### Card heading
- "Sign Up", Lato 300, 22px, #000, centered, ~1.5rem margin below

### Form fields
- Pill shape: height 52px, radius 40px, fill `rgba(0,0,0,0.03)` (≈#f7f7f7), NO border, NO focus ring
- Text #000 16px, padding 0 20px; placeholder `rgba(0,0,0,0.7)`
- Placeholders: "John Doe" / "johndoe@gmail.com" / "Password"
- Visually-hidden `<label>`s for a11y (source uses placeholders only — look stays identical)

### Password field
- Eye toggle absolute right 15px, vertically centered, gray `rgba(0,0,0,0.5)`
- lucide-react Eye/EyeOff swap on click; toggles input type; `aria-label`

### Continue button
- Pill 40px radius, full width, 52px tall, SAME gradient as header band
- Border `1px solid #f35587`, text #fff 15px
- Hover: solid #f35587 background
- `type="submit"`

### Sign-in line
- Gray body text "I'm already a member! " + "Sign In" link in #f35587
- Underline on hover (base link hover); centered below button, ~1rem gap

### Typography
- Lato (Google Fonts `<link>`, weights 300 + 400), fallback Arial/sans-serif
- Body 16px/400 gray; page heading 28px/400 #000; card h3 22px/300 #000; button 15px/400 #fff

### Responsive behavior
- Card centered, max-width ~500px; full-width on mobile with side margins
- Inputs/button stay full width; band + avatar scale with card

## Component outline
- `App.tsx` — page wrapper, centered section
- `components/PageHeading.tsx` — centered 28px title
- `components/SignupCard.tsx` — card + gradient band + avatar + heading + footer line
- `components/SignupForm.tsx` — pill fields + Continue button
- `components/PasswordInput.tsx` — password pill + eye toggle logic
