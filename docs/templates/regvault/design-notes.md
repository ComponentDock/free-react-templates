# RegVault — Design Notes

## Source
- ColorLib: Regform 21
- Slug: colorlib-regform-21
- Preview: https://preview.colorlib.com/theme/colorlib-regform-21/ (404 at prep time)
- Screenshot used: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-21.jpg

## Section order (top to bottom)

1. **Full-viewport gradient background** — purple (#4B2A7A) bottom-left to mauve (#C47A94) top-right, diagonal
2. **Centered card** — two-column split layout
   - **Left panel (form):** dark navy (#0C1456) background
     - Heading: "Set The Event" — pink/coral serif font, large
     - Price row: label "Price" + value "$270" (read-only text)
     - People row: label "People" + dropdown (default "1")
     - Name row: label "Name" + underline-input
     - Mail row: label "Mail" + underline-input
     - Phone row: label "Phone" + underline-input
     - Comment row: label "Comment" + underline-input
     - Submit button: "Send your booking" — pink fill, white text, rounded
   - **Right panel (image):** photo of performer with bottom overlay
     - Semi-transparent overlay at bottom with:
       - "31st East Street, New York, NY"
       - "T: 987 2345 743"
       - "E: INFO@YOURWEB.COM"

## Fidelity notes

- The form uses underline-only input styling (no box borders) — implement with `border-b` only
- Labels are pink/coral colored, left-aligned, bold weight
- Values are right-aligned on same row as labels (label-value pairs in a grid/flex row)
- The card has no border-radius (sharp corners)
- Button has slight border-radius (~4px), full-width within the form padding
- The right panel image fills the full height of the card
- Contact overlay is semi-transparent dark background at bottom of image
- Font: heading appears to be a serif display font (Playfair Display recommended); body/sans-serif (Poppins recommended)
- Gradient background is full viewport (100vw × 100vh), not just the card area

## Component structure

```
App.tsx
├── RegVault.tsx (main layout component)
│   ├── FormPanel.tsx (left column)
│   │   ├── Heading ("Set The Event")
│   │   ├── FormField (Price — read-only)
│   │   ├── FormField (People — select dropdown)
│   │   ├── FormField (Name — text input)
│   │   ├── FormField (Mail — email input)
│   │   ├── FormField (Phone — tel input)
│   │   ├── FormField (Comment — textarea)
│   │   └── SubmitButton ("Send your booking")
│   └── ImagePanel.tsx (right column)
│       ├── Performer photo (placeholder: picsum)
│       └── ContactOverlay (address, phone, email)
```

## Implementation notes

- Use Tailwind `bg-gradient-to-br from-[#4B2A7A] to-[#C47A94]` for page background
- Left panel: `bg-[#0C1456]` with padding
- Right panel: relative positioning for image + absolute overlay at bottom
- Form inputs: `border-b border-white/30 bg-transparent text-white` — no side/top borders
- Labels: `text-[#E88DAA] font-semibold` (pink/coral)
- Button: `bg-[#E88DAA] text-white rounded` with hover state
- Contact overlay: `bg-black/40` or `bg-[#0C1456]/60` semi-transparent
- Mobile: use `flex-col` instead of `flex-row` at `md:` breakpoint
