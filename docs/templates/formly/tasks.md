# Formly — Prep Notes

## Source
- ColorLib: Colorlib Regform 5
- URL: https://colorlib.com/wp/template/colorlib-regform-5/
- Preview: https://preview.colorlib.com/theme/colorlib-regform-5/ (unreachable; screenshot used)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-5.jpg

## Design tokens summary
- Gradient: purple #8B5CF6 → cyan #06B6D4 (135deg diagonal)
- Card header: dark #1E1E2E, white bold uppercase title
- Card body: white, 40px padding, 8px radius, 0 8px 32px rgba(0,0,0,0.12) shadow
- Inputs: gray-200 (#E5E7EB) bg, no border, 6px radius, 44px height
- Labels: gray-800 (#1F2937), 14px, weight 600
- Button: red-500 (#EF4444), white text, uppercase, 6px radius, hover red-600 (#DC2626)
- Radio checked: green-500 (#22C55E), unchecked: gray-200 (#E5E7EB)
- Font: Poppins (400, 600, 700)

## Section order (from top to bottom)
1. Full-page gradient background
2. Centered card container (max-width 700px)
   a. Dark header bar with "EVENT REGISTRATION FORM" title
   b. White form body with:
      - Name: two-column row (First Name / Last Name)
      - Company: full-width
      - Email: full-width
      - Phone: two-column row (Area Code / Phone Number)
      - Subject: dropdown select
      - "Are you an existing customer?" + Yes/No radios
      - REGISTER button

## Fidelity notes
- Simple single-card form — no navbar, no footer content sections, no images
- Two-column layout for Name and Phone (16px gap)
- All inputs share identical styling (gray bg, no border, rounded)
- Radio buttons are custom-styled (not native browser radios)
- Button is uppercase with letter-spacing
- Header is dark (#1E1E2E) — distinctive visual element
- Gradient runs top-left to bottom-right (135deg)

## Implementation tasks
1. Set up app scaffold: `apps/formly/` with package `@free-react-templates/formly`
2. Create `src/App.tsx` with gradient background and centered card
3. Build `src/components/Header.tsx` — dark bar with title
4. Build `src/components/RegistrationForm.tsx` — form with all fields
5. Build reusable `src/components/FormInput.tsx` — labeled input component
6. Build `src/components/FormSelect.tsx` — labeled dropdown
7. Build `src/components/FormRadio.tsx` — custom radio button group
8. Build `src/components/SubmitButton.tsx` — styled button
9. Add Poppins font to `index.html`
10. Configure Tailwind theme tokens in `src/index.css`
11. Add responsive behavior (stack columns on mobile)
12. Add footer with ComponentDock link
13. Write tests for all components
14. Verify 100% coverage, build passes, lint clean
