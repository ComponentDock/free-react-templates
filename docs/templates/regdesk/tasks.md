# RegDesk — Implementation Tasks

## Source
- ColorLib: colorlib-regform-30
- Preview: https://colorlib.com/etc/regform/colorlib-regform-30/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-30.jpg

## Design Notes

- **Layout:** Split card — left info panel + right form, centered on teal background.
- **Left panel:** Blue `#3786bd` background, white text (heading + paragraphs), "Have An Account" button (white bg, skewed radius 5px/5px).
- **Right form:** White background, blue heading, 5 inputs across 3 rows (name pair, email, password pair), terms checkbox, register button (blue bg, skewed radius 5px/5px).
- **Card:** 850px wide, 10px radius, shadow `0 8px 20px rgba(0,0,0,0.15)`.
- **Font:** Open Sans (use Google Fonts `<link>` in `index.html`).
- **Skewed radius:** Buttons and inputs use `border-top-left-radius: 5px; border-bottom-right-radius: 5px` (not uniform rounded corners).

## Tasks

1. [ ] Create `apps/regdesk/` from simplest existing app (copy + rename)
2. [ ] Set up Tailwind theme tokens in `src/index.css` (`@theme` block with brand colors)
3. [ ] Add Google Fonts Open Sans link to `index.html`
4. [ ] Build `App.tsx` — flexbox centered full-page layout with teal background
5. [ ] Build `Card.tsx` — white card container (850px, radius, shadow, flex row)
6. [ ] Build `InfoPanel.tsx` — left blue panel with heading, paragraphs, "Have An Account" button
7. [ ] Build `RegisterForm.tsx` — right form with heading, field rows, checkbox, register button
8. [ ] Build `FormField.tsx` — reusable input with label, border, focus state, skewed radius
9. [ ] Add responsive styles (column at ≤991px, stacked fields at ≤575px)
10. [ ] Add footer with https://www.componentdock.com/ link
11. [ ] Write tests (100% coverage) for all components
12. [ ] Verify: `npm run verify:app regdesk`
13. [ ] Commit and open PR

## Fidelity Notes

- The "Have An Account" button on the left panel acts as a toggle/link — keep it as a styled button with href.
- The checkbox uses a custom styled checkmark (CSS-only) — recreate with Tailwind + checkbox input.
- The heading "INFOMATION" in the original is a typo for "INFORMATION" — fix the typo in the recreation.
- The form `action="#"` is non-functional — keep as a presentational form with client-side validation.
- Inputs have no explicit height — they use padding `11.5px 15px`. Match this.
- The "Have An Account" button uses `padding: 15px` (from `.form-left-last input`).
