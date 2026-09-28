# Regspot — Design Notes & Task Outline

## Source
- ColorLib Regform 7: https://colorlib.com/wp/template/colorlib-regform-7/
- Preview: 404 (unavailable)
- Screenshot analyzed: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-7.jpg

## Structure (section order)

1. **Page shell** — full-width gray background (#f5f5f5), centered content
2. **Card A** — white card, shadow, two-column (form left, illustration right)
3. **Card B** — white card, shadow, two-column reversed (illustration left, form right)

## Section-by-section fidelity notes

### Page shell
- Background: solid `#f5f5f5`
- Content max-width ~900px, centered with padding
- Vertical gap between cards ~40px

### Card A (Image Right)
- White background, rounded corners (~8px), subtle box-shadow
- Flexbox two-column: form ~55%, illustration ~45%
- Form column:
  - "Sign up" heading: bold, ~28px, color #222, margin-bottom ~30px
  - 4 inputs: each has a left icon (use lucide-react: User, Mail, Lock, Lock)
  - Input style: no border-box, bottom border only (#e0e0e0), transparent background
  - Placeholder color: #aaa, font-size ~14px
  - Checkbox: standard, label text includes underlined "Terms of service" link
  - Register button: bg #5b9bd5, color white, padding 10px 30px, border-radius 6px, no border
  - "I am already member" link: color #5b9bd5, text-decoration underline, aligned right of button
- Illustration: placeholder via picsum.photos/seed/regspot-desk/450/400

### Card B (Image Left)
- Same card style, flex-direction reversed (or order swap)
- Same form fields, same button/link
- Illustration: placeholder via picsum.photos/seed/regspot-person/450/400

## Component plan

```
apps/regspot/src/
  main.tsx
  App.tsx              — renders both cards in a vertical stack
  components/
    SignupCardA.tsx    — form-left, illustration-right
    SignupCardB.tsx    — illustration-left, form-right (or reuse SignupCard with flipped prop)
    FormField.tsx      — reusable: icon + input + underline border
  index.css            — Tailwind entry + @theme tokens
  test/
    setup.ts           — jest-dom import
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template (copy + rename)
- [ ] Set up index.css with Tailwind + theme tokens
- [ ] Create FormField component (icon + input + underline)
- [ ] Create SignupCard component (heading, fields, checkbox, button, link, illustration slot)
- [ ] Compose App.tsx with Card A (image right) and Card B (image left)
- [ ] Write tests for FormField, SignupCard, App
- [ ] Verify: typecheck, lint, 100% coverage, build
- [ ] Add CNAME + homepage, npm install at root for lockfile
