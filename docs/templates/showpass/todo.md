# Showpass — Design Notes & Implementation Outline

## Source
- ColorLib: Reg Form V35 (`colorlib-regform-35`)
- Preview: https://preview.colorlib.com/theme/colorlib-regform-35/ (404)
- Downloaded: colorlib-regform-35.zip (index.html + css/style.css + images/form-v9.jpg)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-35.jpg
- Design sourced from downloaded HTML/CSS template (full fidelity)

## Section Order (1:1 with original)

1. Full-screen background — blue (#4077c8) + concert image (use picsum.photos placeholder)
2. Centered form container (border-radius 15px)
   a. Heading: "Registration Form" + underline accent
   b. Row 1: Name | Email (two-column, pill inputs)
   c. Row 2: Password | Confirm Password (two-column, pill inputs)
   d. Submit button: "Register" (red pill, centered)

## Fidelity Notes

### Background
- Original uses a concert photo background (`images/form-v9.jpg`). Use
  `https://picsum.photos/seed/showpass-1/1200/800` as placeholder.
- The background image sits behind the blue overlay on `.form-v9-content`.
- The page background is solid `#4077c8`, the image is on the form container.

### Form Container
- Not a traditional white card — the form sits directly on the blue/image
  background with white text.
- `border-radius: 15px` gives it soft corners.
- Margin `185px 0` vertical centering on desktop.

### Heading
- White text, 35px, centered, with a `::after` pseudo-element creating a
  white underline bar (73px wide, 3px tall, centered).
- Implement with a span or div + a thin accent div below.

### Inputs
- Two-column flex layout (`display: flex; justify-content: space-between`).
- Each input column is `width: 45%`.
- Pill-shaped: `border-radius: 27.5px`, `border: 2px solid #ccc`.
- Background: `rgba(255, 255, 255, 0.2)` (semi-transparent).
- Text color: white (inherited from container), placeholder: `#e5e5e5`.
- Padding: `14.5px 0 14.5px 30px`.
- On focus: border changes to `#999`.
- Margin-bottom on each input: `45px`.

### Button
- Red coral: `#f25d5d`, hover: `#d95252`.
- Pill-shaped: `border-radius: 25px`.
- Width: `180px`, centered (`text-align: center` on parent).
- Box-shadow: `0px 8px 16px 0px rgba(0,0,0,0.2)`.
- White text, bold, 16px.
- Margin: `20px 0 73px 35px` (left offset for centering).

### Responsive
- At `max-width: 1199px`: form container gets `margin: 185px 20px` (horizontal padding).
- At `max-width: 767px`: flex-direction column (stacks to single column).
- At `max-width: 575px`: form padding reduces to `30px 45px 30px 10px`.

## Implementation Tasks

- [ ] Create `apps/showpass/` from simplest existing app, rename package
- [ ] Create `public/CNAME` with `showpass.free.componentdock.com`
- [ ] Set up `src/App.tsx` composing the single page
- [ ] Create `src/components/RegistrationForm.tsx` — full page layout
- [ ] Implement heading with underline accent
- [ ] Implement two-column input rows with pill styling
- [ ] Implement red pill submit button with shadow
- [ ] Add responsive stacking for mobile
- [ ] Load Nunito font via Google Fonts link in `index.html`
- [ ] Use placeholder image from picsum.photos for background
- [ ] Write tests for all form elements and responsive behavior
- [ ] Ensure 100% coverage
- [ ] Run verify-app.sh and gate
