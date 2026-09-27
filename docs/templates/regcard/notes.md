# Regcard — Prep Notes

## Source

- **ColorLib template:** Reg Form V14
- **Slug:** `colorlib-regform-14`
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-regform-14/
- **Preview:** https://preview.colorlib.com/theme/colorlib-regform-14/ (404 — unavailable)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-14.jpg

## Structure Order (section-by-section)

1. **Navbar** — minimal, contains logo/title + dark mode toggle
2. **Form card** — centered white card on light blue background:
   - Row 1: First Name + Last Name (two-column)
   - Row 2: Birth Date (date picker, MM-DD-YYYY) + Gender (Male/Female toggle)
   - Row 3: Phone Number (full-width)
   - Row 4: Password + Repeat Password (two-column)
   - Expandable: "Additional Info" section
   - Submit button (blue, right-aligned)
3. **Footer** — simple, ComponentDock link

## Design Notes

- **Aesthetic:** Ultra-minimal, clean registration form. No header image, no decorative elements — just form fields on a pastel blue background. Very business-like.
- **Color palette:** Light sky blue (#d6eaf8) background, white card, medium blue (#4da6e8) button and accents, dark gray labels.
- **Typography:** Uppercase bold labels (~11px), standard sans-serif for inputs.
- **Form layout:** Two-column grid for name and password rows; full-width for phone. Gender is a button toggle, not a select dropdown.
- **Additional Info:** Expandable section with chevron arrow — collapses by default.
- **Button:** Blue, right-aligned, white text, subtle rounded corners (~4px).
- **Card:** White, ~8px border-radius, soft drop shadow, generous padding (~40px).

## Fidelity Notes

- Match the exact field order and two-column layout from the screenshot.
- The gender toggle should use button-style (not select/radio), with blue active state.
- Additional Info toggle should animate open/close smoothly.
- Submit button must be right-aligned, not centered or full-width.
- No header image — this is a pure form card design.
- Keep the light blue background consistent across viewport sizes.
