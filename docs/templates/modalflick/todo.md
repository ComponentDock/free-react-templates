# Modalflick — Implementation Tasks

Source: ColorLib Modal 16 (https://colorlib.com/wp/template/modal-16/)
Preview: https://preview.colorlib.com/theme/bootstrap/modal-16/

## Structure Order (from preview)

1. Page container (full viewport height, centered)
2. Heading "Modal #6" (h3, centered)
3. "Launch modal" button (btn-secondary, centered)
4. Modal dialog (modal-lg, centered, fade animation)
   a. Modal body (split-screen flexbox)
   - Left: promotional image (50% width, background-size cover)
   - Right: content-text (50% width, padded)
     - h3 "Registration form"
     - p description text
     - Form:
       - Country dropdown (select, custom-select)
       - Full Name input
       - Email Address input
       - Date of Birth input
       - Privacy Policy text with link
       - "Sign up" button (btn-primary, btn-block)
         b. Close button (X, top-right)

## Design Notes

- **Background:** Page background is white; modal body is light gray (#efefef)
- **Modal:** 7px border-radius, deep shadow (0 10px 50px -10px rgba(0,0,0,0.9))
- **Split screen:** Flexbox with 50/50 split, promo image uses background-image
- **Form controls:** No visible border, subtle box-shadow (0 1px 3px 0 rgba(0,0,0,0.2))
- **Typography:** Roboto font family, 300 weight for body, h3 at 22px black
- **Buttons:** Bootstrap primary blue (#007bff), 4px radius, full-width block
- **Launch button:** Bootstrap secondary gray (#6c757d), px-4 py-3
- **Privacy text:** Small, gray (#999), link in darker gray (#555) bold weight

## Fidelity Notes

- Match the split-screen layout exactly: image left, form right at 50% each
- Country dropdown should have a representative subset of countries (not all 200+)
- Form fields should use proper labels and input types
- Modal should animate with fade-in (Bootstrap modal transition)
- Close via X button, backdrop click, and Escape key
- The original uses Bootstrap JS for modal; React version should use state-based modal
- Placeholder image: use `https://picsum.photos/seed/modalflick/600/800` for the promo image

## Component Outline

- `src/App.tsx` — Page layout with centered content + modal trigger
- `src/components/Modal.tsx` — Modal wrapper with backdrop, close button, focus trap
- `src/components/RegistrationForm.tsx` — Form with all fields
- `src/components/CountrySelect.tsx` — Country dropdown component
- `src/index.css` — Tailwind entry + theme tokens
