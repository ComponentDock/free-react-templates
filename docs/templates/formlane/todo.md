# Formlane — Implementation Notes

Source: Colorlib Regform 26 (https://colorlib.com/wp/template/colorlib-regform-26/)
Design: Single-page registration form on blue background

## Section Order

1. Full-page blue wrapper (`min-h-screen flex items-center justify-center bg-[#accffe]`)
2. Centered white form card (`w-[435px] bg-white shadow-lg p-[77px_61px_66px]`)
3. Heading: "New Account?" (uppercase, tracking-[3px], semibold)
4. Username input + user icon
5. Phone Number input + phone icon
6. Email input + envelope icon
7. Password input + lock icon
8. Confirm Password input + lock icon
9. Register button (full-width, blue, uppercase, hover sweep)
10. Two decorative images (absolute, bottom-left + bottom-right)

## Fidelity Notes

- **Font:** Original uses "Muli" woff2 — use Google Fonts "Mulish" (same typeface, renamed)
- **Colors:** Light blue bg (#accffe), blue primary (#99ccff), dark text (#333), gray body (#999)
- **Inputs:** Border-bottom only (no full border), icons absolutely positioned left
- **Button:** Full-width, blue (#99ccff), hover animation via two pseudo-elements sweeping in from left with staggered delays (0s and 0.2s), cubic-bezier timing
- **Shadow:** Form card has subtle shadow `0 0 10px rgba(0,0,0,0.2)`
- **Decorative images:** Use `https://picsum.photos/seed/formlane-1/400/600` and `https://picsum.photos/seed/formlane-2/400/600`
- **Responsive:** 3 breakpoints — desktop (>991px), tablet (768-991px), mobile (<768px). Mobile hides images, removes shadow/background.
- **Icons:** Use `lucide-react` — User, Phone, Mail, Lock icons

## Component Structure

```
src/
  main.tsx          — entry point
  App.tsx           — compose page
  components/
    RegistrationForm.tsx  — the form card with all fields
  index.css         — Tailwind entry + @theme tokens
```

## Reuse from packages/ui

- Button component (with custom variant for the blue registration style)
- cn() utility for class merging
