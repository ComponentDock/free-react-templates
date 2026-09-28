# Festreg — Design Notes & Task Outline

Source: ColorLib Reg Form V35 (`colorlib-regform-35`)
Preview: https://colorlib.com/etc/regform/colorlib-regform-35/ (Form-v9)
Category: Concert/Event Registration Form

## Structure order (top to bottom)

1. Full-viewport blue background wrapper
2. Rounded card (15px radius) with background image
3. "Registration Form" heading with white underline bar
4. Two-column input rows (Name + Email, Password + Confirm Password)
5. "Register" submit button (coral red, pill-shaped, shadowed)

## Fidelity notes

- The original uses a solid `#4077c8` blue background — NOT a gradient. The background image sits on the card element, not the page.
- Inputs are pill-shaped (`border-radius: 27.5px`) with semi-transparent white (`rgba(255,255,255,0.2)`) — they let the card's background image show through.
- The submit button has a distinctive left offset (`margin-left: 35px`) and heavy bottom margin (`73px`). It's coral red, not blue or green.
- Font is Nunito (Google Fonts) with weight 700 used everywhere — both inputs and headings are bold.
- The heading underline is a simple white bar (73px × 3px) positioned absolutely under the heading, NOT a border.
- On mobile (≤767px), the two-column rows stack vertically. On very small screens (≤575px), padding reduces.
- Use `https://picsum.photos/seed/festreg-hero/975/600` for the card background image.

## Implementation tasks

- [ ] Set up app scaffold (`apps/festreg`, package `@free-react-templates/festreg`)
- [ ] Add Nunito font link to `index.html` (weights 400, 700)
- [ ] Create `Festreg.tsx` — page wrapper with blue background, centered card
- [ ] Create `RegistrationForm.tsx` — heading, two-column input grid, submit button
- [ ] Style inputs: pill shape, semi-transparent bg, focus state border change
- [ ] Style button: coral red, pill shape, shadow, hover darken
- [ ] Add responsive breakpoints (767px, 575px)
- [ ] Write tests (Vitest + Testing Library)
- [ ] Verify 100% coverage
- [ ] Add footer with Component Dock link
