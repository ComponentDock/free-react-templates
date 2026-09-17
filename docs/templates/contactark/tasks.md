# ContactArk — Implementation Notes

Source: ColorLib Contact Form V7
Preview: https://colorlib.com/etc/cf/ContactFrom_v7/index.html
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v7.jpg
Note: preview.colorlib.com/theme/contact-form-v7/ returns 404; design
reference extracted from the demo URL above + the ColorLib screenshot.

## Structure (section order, top to bottom)

This is a **single-section** template — one centered contact form.

1. **Full-page wrapper** — flex centering, #e6e6e6 background, 100vh min-height
2. **Form container** — 550px width, transparent background
3. **Form title** — "Get in Touch", Oswald-Medium 30px, #43383e
4. **Name input** — white bg, 62px height, User icon (lucide-react) on left
5. **Email input** — white bg, 62px height, Mail icon on left
6. **Phone input** — white bg, 62px height, Phone icon on left
7. **Message textarea** — white bg, min-height 199px
8. **Checkbox** — "Send copy to my email", unchecked default
9. **Submit button** — "Send Email", pill shape (31px radius), gradient #d5007d→#e53935
10. **Footer** — Component Dock link (per AGENTS.md rule 5)

## Component breakdown

| Component        | File                    | Notes                                   |
| ---------------- | ----------------------- | --------------------------------------- |
| `App.tsx`        | `src/App.tsx`           | Full-page flex wrapper + ContactForm    |
| `ContactForm.tsx`| `src/components/`       | Form with title, inputs, checkbox, btn  |
| `index.css`      | `src/index.css`         | Tailwind entry + `@theme` tokens        |

## Design fidelity notes

- **Oswald font:** import via Google Fonts `<link>` in `index.html` (not self-hosted)
- **Icons:** use `lucide-react` (User, Mail, Phone) — NOT FontAwesome or Linearicons
- **Button gradient:** Tailwind `bg-gradient-to-br from-[#d5007d] to-[#e53935]`
  with hover slide animation via `translate-x` transition
- **Input left icon:** absolute-positioned icon container (58px wide, centered vertically)
- **Checkbox:** custom styled with hidden native input + pseudo-element checkmark
- **Validation:** client-side with error tooltip positioned at right of input,
  red border (#c80000), shows on hover over the errored input
- **Responsive:** form container goes full-width with padding on small screens
- **No carousel, no parallax, no multi-section layout** — pure single-form page

## Implementation order

1. Scaffold app from simplest existing template (e.g. `apps/contactbreeze`)
2. Remove all source-specific content, rename package to `@free-react-templates/contactark`
3. Add Google Fonts link for Oswald in `index.html`
4. Build `ContactForm.tsx` with all fields, icons, checkbox, button
5. Style with Tailwind using extracted tokens
6. Add validation with error tooltips
7. Write tests (100% coverage)
8. Add footer with Component Dock link
9. Verify no ColorLib references in app code
