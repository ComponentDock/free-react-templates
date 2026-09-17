# FormTouch — Design Notes

Recreation of ColorLib Contact Form V20 (https://colorlib.com/wp/template/contact-form-v20/).
Preview: https://colorlib.com/etc/cf/ContactFrom_v20/index.html

## Section structure (top → bottom)

1. **Full-screen Map Background** — Google Maps fills viewport; semi-transparent gray overlay (`rgba(173,173,173,0.4)`) between map and card. In the React version, use a static map-like background image (e.g. from picsum or a map tile) since the Google Maps API key is specific to the original.
2. **Contact Form Card** — centered white card (800px max-width, 2px radius, subtle shadow). Contains:
   - Circular mail icon (100px, overlaps top by 55px)
   - Title "Drop Us A Message" (30px, #333333, centered)
   - Name + Email inputs (side-by-side, 60px height, 20px font)
   - Message textarea (full-width, min-height 199px, 15px font)
   - Send button (right-aligned, #ff4b5a, 50px height, 18px white text)
3. **Focus animation** — coral red (#ff4b5a) border scales in on input focus (0.4s)
4. **Validation tooltips** — error messages in #c80000 appear on invalid submit

## Design fidelity notes

- Brand color is `#ff4b5a` (coral red). Use as primary in `@theme`.
- Font: Open Sans (all text). Load via Google Fonts `<link>` in index.html.
- Form card: white (#fff), 2px border-radius, `box-shadow: 0 3px 20px rgba(0,0,0,0.1)`.
- Inputs: 1px #dbdbdb border, 2px radius, 60px height for text inputs.
- Focus effect: border color transitions to #ff4b5a with scale animation.
  Implement with CSS `transition` + `:focus-within` or controlled state.
- Button: flat coral (#ff4b5a), hover to dark gray (#333333), 0.4s transition.
- Validation errors: tooltip-style overlay inside the input area, not below it.
  Use absolute positioning with red border + white background.
- Background: original uses Google Maps API. In React, use a static map-style
  image from picsum (e.g. `https://picsum.photos/seed/formtouch-map/1920/1080`)
  with the gray overlay. Do NOT use a Google Maps API key.
- Mail icon: originally a PNG image. In React, use lucide-react `Mail` icon
  inside the circular symbol container.
- Responsive: Name+Email stack to full-width on <768px. Card padding reduces
  on <576px.

## Component outline

```
src/
  App.tsx            — compose background + form card
  components/
    MapBackground.tsx — full-viewport map-like bg + overlay
    ContactForm.tsx   — the centered white card with all form elements
    MailIcon.tsx      — circular mail symbol at card top
    FormInput.tsx     — reusable input with focus animation
    FormTextarea.tsx  — message textarea with focus animation
    SendButton.tsx    — coral red button with hover transition
    ValidationTooltip.tsx — error tooltip overlay for invalid fields
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template, rename package to @free-react-templates/formtouch
- [ ] Set up index.css with Tailwind @theme tokens (brand #ff4b5a, Open Sans font)
- [ ] Add Google Fonts link (Open Sans) to index.html
- [ ] Implement MapBackground component (static bg image + gray overlay)
- [ ] Implement ContactForm card (centered white box with shadow)
- [ ] Implement MailIcon circle (positioned overlapping card top)
- [ ] Implement FormInput with focus animation (red border scale-in)
- [ ] Implement Name + Email inputs in 2-column row
- [ ] Implement FormTextarea for message
- [ ] Implement SendButton (coral red, hover to dark gray)
- [ ] Implement ValidationTooltip for error states
- [ ] Add form validation (zod or custom): Name, Email (valid format), Message required
- [ ] Wire up validation errors to tooltips
- [ ] Add responsive behavior (stack inputs on mobile, reduce padding)
- [ ] Add Component Dock footer link
- [ ] Write tests for all components (Vitest + RTL, 100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
