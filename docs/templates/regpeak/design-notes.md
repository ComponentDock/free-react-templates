# Regpeak — Design Notes & Task Outline

Source: Colorlib Reg Form V32
Preview: https://colorlib.com/etc/regform/colorlib-regform-32/
CSS file: css/style.css (hand-written, no framework)

## Structure order (top to bottom)

1. Full-viewport gradient wrapper (`linear-gradient(136deg, #000046, #1cb5e0)`)
2. Centered white card (flex row on desktop, column on mobile)
   - Left: image panel (picsum.photos placeholder, border-radius matches card)
   - Right: form section
     - Heading "Register Form" — centered, Nunito Bold 35px, #333
     - Four input rows with underline borders
     - Register button — centered, orange (#fe892a)
3. Footer with Component Dock link

## Fidelity notes

- The gradient angle is 136deg — not a standard 135deg, use exactly 136deg for accuracy.
- Card has no explicit box-shadow in the CSS — it's flat white on gradient.
- Inputs use a "bottom border only" pattern: `border: 2px solid transparent; border-bottom: 2px solid #e5e5e5`.
- Focus accent on inputs: `border-bottom: 2px solid #fe892a` — the orange matches the button.
- Button has a subtle shadow: `box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15)`.
- The button is 160px wide with 13px padding, centered via `text-align: center` on the parent row.
- Image panel border-radius adapts: on desktop, left side gets 8px (top-left, bottom-left); on mobile (stacked), top side gets 8px (top-left, top-right), bottom-left is removed.
- Input width adjusts responsively: 92% desktop, 96% at ≤991px, 94% at ≤767px, 89% at ≤575px.
- The heading margin-bottom is 47px (spacing between heading and first field).
- Each input row has margin-bottom of 35px.

## Tasks

- [ ] Create app scaffold (copy simplest existing app, rename)
- [ ] Implement gradient background wrapper
- [ ] Implement split-screen card layout (image + form)
- [ ] Implement form heading
- [ ] Implement four input fields with underline borders + focus accent
- [ ] Implement Register button with orange background
- [ ] Add mobile responsive stacking (≤991px breakpoint)
- [ ] Add footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: `scripts/verify-app.sh regpeak`
