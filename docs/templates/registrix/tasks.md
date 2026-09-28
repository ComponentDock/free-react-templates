# Registrix — Implementation Tasks

## Source
- ColorLib: colorlib-regform-31
- Preview: https://colorlib.com/etc/regform/colorlib-regform-31/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-31.jpg

## Design Notes

- **Layout:** Single-column centered card form on teal background (simpler than Reg Form V30 — no split layout, no left info panel).
- **Card:** White 670px, 8px radius, centered with flexbox.
- **Font:** Roboto (regular + bold) via Google Fonts `<link>` in `index.html`.
- **Heading:** "Register Account Form" (h2, 700, 25px, centered) with blue `#3786bd` underline bar (50px × 2px) via `::after` pseudo-element.
- **Inputs:** Full Name, Your Email, Password — each with a right-aligned inline icon (user, envelope, lock from lucide-react). Input border `1px solid #e5e5e5`, 4px radius, focus `#b3b3b3`.
- **Register button:** Blue `#3786bd`, 180px wide, 5px radius, box-shadow `0 5px 15px rgba(0,0,0,0.2)`, centered. Hover: `#2f73a3`.
- **Icons:** Use lucide-react icons (User, Mail, Lock) instead of inline SVGs. Color `#999`, positioned absolute right 15px, centered vertically.
- **Page bg:** `#5eb2b3` (teal), full viewport, flexbox centered.
- **Responsive:** ≤767px → card margin `175px 20px` (horizontal margin only).

## Tasks

1. [ ] Create `apps/registrix/` from simplest existing app (copy + rename)
2. [ ] Set up Tailwind theme tokens in `src/index.css` (`@theme` block with brand colors `--color-brand: #3786bd`, `--color-brand-hover: #2f73a3`, `--color-page-bg: #5eb2b3`, `--color-icon: #999`, `--color-border: #e5e5e5`, `--color-focus: #b3b3b3`)
3. [ ] Add Google Fonts Roboto link to `index.html` (weights 400, 700)
4. [ ] Build `App.tsx` — flexbox centered full-page layout with teal `#5eb2b3` background
5. [ ] Build `RegisterCard.tsx` — white card container (670px, 8px radius, vertical margin 175px)
6. [ ] Build `RegisterForm.tsx` — form with heading, three input rows, submit button
7. [ ] Build `FormField.tsx` — reusable input with label, border (4px radius), right-aligned icon, placeholder
8. [ ] Build `SubmitButton.tsx` — blue button (180px, 5px radius, shadow, hover state)
9. [ ] Add responsive styles (≤767px card margin `175px 20px`)
10. [ ] Add footer with https://www.componentdock.com/ link
11. [ ] Write tests (100% coverage) for all components
12. [ ] Verify: `npm run verify:app registrix`
13. [ ] Commit and open PR

## Fidelity Notes

- The original uses inline SVG for icons (user, envelope, lock) — we use lucide-react (User, Mail, Lock) for consistency with the rest of the monorepo. Visual appearance matches.
- The H2 underline bar is created via `::after` pseudo-element (blue 50px × 2px, centered). Replicate with Tailwind `after:` utilities or a small inline element.
- The Register button uses `box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2)` — include this in Tailwind config or use an inline style.
- Input icons are positioned absolute at `right: 15px; top: 50%; transform: translateX(-50%)` — this centers them vertically within the input row. Match with Tailwind absolute positioning.
- The original CSS uses a `revert` reset at the top — we use Tailwind's preflight instead (same effect).
- The card's vertical margin `175px 0` is generous — keep it for visual fidelity.
- The form `action="#"` is non-functional — keep as presentational with client-side validation only.
- No terms checkbox in this version (unlike Reg Form V30) — just Full Name, Email, Password.
- Responsive breakpoint is 767px (not 991px like V30) — use `max-width: 767px` or Tailwind `max-md:` variant.
