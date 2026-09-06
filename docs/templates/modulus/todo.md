# Modulus — Implementation Notes

Source: ColorLib Modal 01
Preview: https://preview.colorlib.com/theme/bootstrap/modal-01/
New name: modulus (apps/modulus)

## Component structure

```
apps/modulus/src/
  App.tsx           — LaunchSection + Modal composition
  components/
    LaunchSection.tsx — Full-height centered section with heading + button
    SignInModal.tsx    — Modal dialog with form
    ModalOverlay.tsx   — Backdrop + portal wrapper
  index.css         — Tailwind entry + @theme tokens
  test/setup.ts     — jest-dom import
```

## Section order (1:1 with original)

1. LaunchSection — full viewport height, flex centered
   - Heading "Modulus" (replaces "Modal 01" for uniqueness)
   - "Launch Modal" button (pill-shaped, brand color)
2. SignInModal — conditionally rendered
   - Header: close button (X icon from lucide-react)
   - Body:
     - Person icon (lucide-react `User` icon) in circle
     - "Sign In" heading
     - Form: username, password, login button, remember me + forgot password row
   - Footer: "Not a member? Create an account"

## Design fidelity notes

- Brand color #fb8691 (coral/salmon) — set as CSS custom property in @theme
- Font: Poppins from Google Fonts
- Buttons: pill-shaped (border-radius: 40px), bg #fb8691, hover → transparent outline
- Inputs: 52px height, 5px radius, 1px rgba(0,0,0,0.1) border, focus → #fb8691
- Modal: max-width 450px, centered, box-shadow 0px 10px 34px -15px rgba(0,0,0,0.24)
- Modal footer bg: #f8f8f8
- Icon circle: 80px diameter, 1px solid #fb8691 border, 50% radius
- Checkbox: custom styled, #fb8691 accent fill on check
- Close button: 40x40, absolute top-right of modal header

## Dependencies

- lucide-react: User icon, X (close) icon
- packages/ui: cn() utility for class merging

## Implementation steps

1. Create apps/modulus workspace with package.json + vite.config.ts
2. Set up index.css with Tailwind @theme tokens (brand color, fonts)
3. Implement LaunchSection component
4. Implement ModalOverlay with portal + backdrop
5. Implement SignInModal with form
6. Write App.tsx composition
7. TDD: write tests for each component before implementation
8. Verify: typecheck, lint, 100% coverage, build
9. Add CNAME + homepage, run npm install at root
