# Lockwell — Design Notes & Task Outline

## Source

- **ColorLib template:** Modal 20
- **Source URL:** https://colorlib.com/wp/template/modal-20/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-20/
- **Category:** Bootstrap Modal Templates

## Structure Order

1. Page container (full viewport, centered content)
2. Page heading ("Modal #10" → "Lockwell")
3. Launch button ("Launch modal")
4. Modal overlay (backdrop)
5. Modal dialog (centered)
   - Modal content (white bg, 7px border-radius, deep shadow)
     - Modal body (padding)
       - Close button (X, top-right absolute)
       - Lock icon (80x80px circle, blue #3e64ff on light blue bg)
       - Form
         - Heading: "This link is password protected"
         - Description paragraph
         - Password input (underline-only border)
         - Submit button (centered, primary blue)

## Section-by-Section Fidelity Notes

### Page Container
- Full viewport height (`100vh`)
- Flexbox centered (vertically + horizontally)
- Light/neutral background (white or very light gray)

### Modal Dialog
- Bootstrap modal fade-in animation
- Centered in viewport (modal-dialog-centered)
- White background, no border
- 7px border-radius
- Deep box-shadow: `0 10px 50px -10px rgba(0,0,0,0.9)`
- Responsive: stacks on mobile

### Lock Icon
- 80x80px circular container
- Background: `rgba(62, 100, 255, 0.05)` (very light blue)
- Icon color: `#3e64ff` (blue)
- Font size: 40px (icon inside circle)
- Use `lucide-react` Lock icon

### Form
- Centered text alignment
- Heading: "This link is password protected" (22px, #000)
- Description: 14px, #777, 300 weight
- Input: underline-only border (`border-bottom: 1px solid #ccc`), no other borders
- Input focus: border turns black (#000), no shadow
- Submit button: primary blue, `border-radius: 4px`, `padding: 10px 30px`

### Close Button
- Absolute positioned, top-right (20px from edges)
- Font-size: 20px
- Default icon color: #ccc, hover: #000
- Use `lucide-react` X icon

## Implementation Tasks

1. [ ] Copy base app template (e.g., modalbox or another modal app)
2. [ ] Rename package to `@free-react-templates/lockwell`
3. [ ] Update `public/CNAME` to `lockwell.free.componentdock.com`
4. [ ] Update `homepage` in `package.json`
5. [ ] Create `Navbar.tsx` — minimal nav or skip if not needed
6. [ ] Create `Hero.tsx` — page heading + launch button
7. [ ] Create `PasswordModal.tsx` — the modal component
8. [ ] Create `Footer.tsx` — site name + Component Dock link
9. [ ] Create `App.tsx` — compose all sections
10. [ ] Update `index.css` with Tailwind theme tokens (brand blue #3e64ff)
11. [ ] Write tests for each component (100% coverage)
12. [ ] Run `npm run spec:validate` to verify spec
13. [ ] Run per-app verification: `scripts/verify-app.sh lockwell`

## Design Token Reference (for Tailwind @theme)

```css
@theme {
  --color-brand: #3e64ff;
  --color-brand-light: rgba(62, 100, 255, 0.05);
  --color-heading: #000000;
  --color-body: #777777;
  --color-close: #cccccc;
  --color-input-border: #cccccc;
}
```

## Notes

- The preview URL works: `https://preview.colorlib.com/theme/bootstrap/modal-20/`
- Font is Roboto (300 for body, default for headings) — use Google Fonts
- Modal uses Bootstrap's fade animation class
- The lock icon in the original uses an icon font (`icon-lock2`) — replace with `lucide-react` Lock icon
- The close button uses an icon font (`icon-close2`) — replace with `lucide-react` X icon
- Password input has no border except bottom — this is a key fidelity detail
- The form is purely visual (no actual password validation needed for the template)
