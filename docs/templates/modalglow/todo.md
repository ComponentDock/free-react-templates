# ModalGlow — Implementation Tasks

Source: ColorLib Modal 17 (https://colorlib.com/wp/template/modal-17/)
Preview: https://preview.colorlib.com/theme/bootstrap/modal-17/

## Structure Order (from preview)

1. Page container (full viewport height, centered)
2. Heading "Modal #7" (h3, centered)
3. "Launch modal" button (btn-secondary, centered)
4. Modal dialog (modal-lg, centered, fade animation)
   a. Modal body (split-screen flexbox, orange top border)
   - Left: promotional image (50% width, background-size cover)
   - Right: content-text (50% width, padded)
     - h3 "Log In"
     - p description text
     - Form:
       - Username/Email input (type email)
       - Password input (type password)
       - "Forgot password" link
       - "Login" button (btn-primary, inline with mr-3 px-5)
       - "If you don't have account yet" text
       - "Sign up here" link
         b. Close button (X, top-right)

## Design Notes

- **Key difference from Modal 16:** Orange top border accent (#ed5107), 0px border-radius (sharp corners), login form instead of registration
- **Top border:** 4px solid #ed5107 (bright orange accent)
- **Background:** Page background is white; modal body is light gray (#efefef)
- **Modal:** 0px border-radius (sharp corners), deep shadow (0 10px 50px -10px rgba(0,0,0,0.9))
- **Split screen:** Flexbox with 50/50 split, promo image uses background-image
- **Form controls:** No visible border, subtle box-shadow (0 1px 3px 0 rgba(0,0,0,0.2))
- **Typography:** Roboto font family, 300 weight for body, h3 at 22px black
- **Buttons:** Bootstrap primary blue (#007bff), 4px radius, inline (not full-width)
- **Launch button:** Bootstrap secondary gray (#6c757d), px-4 py-3
- **Links:** "Forgot password" and "Sign up here" in standard link styling

## Fidelity Notes

- Match the split-screen layout exactly: image left, form right at 50% each
- The orange top border is a key distinguishing feature — must be present
- Sharp corners (0px border-radius) on the modal — contrast with Modal 16's 7px
- Login form has username/email + password + forgot password + login button
- "If you don't have account yet / Sign up here" section at the bottom
- Modal should animate with fade-in (Bootstrap modal transition)
- Close via X button, backdrop click, and Escape key
- Placeholder image: use `https://picsum.photos/seed/modalglow/600/800` for the promo image

## Component Outline

- `src/App.tsx` — Page layout with centered content + modal trigger
- `src/components/Modal.tsx` — Modal wrapper with backdrop, close button, focus trap
- `src/components/LoginForm.tsx` — Login form with all fields
- `src/index.css` — Tailwind entry + theme tokens
