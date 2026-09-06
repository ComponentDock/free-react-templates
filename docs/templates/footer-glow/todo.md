# FooterGlow — Implementation Notes

## Structure order

1. **SectionHeading** — centered "Footer #06" text (h2)
2. **Newsletter** — two-column (4:8 split) with left label + right form
3. **FooterLinks** — three link columns (Information, Application, API) + right-aligned logo/copyright

## Section-by-section fidelity notes

### SectionHeading
- Centered h2, 30px, white, uppercase, Poppins font
- Padding: 12em 0 (top/bottom)
- No background — just text on the page body background

### Newsletter
- Two-column layout: 4 (left) / 8 (right) on md+ screens
- Left column: `#322b3c` background, vertically centered content
  - "Subscribe to our" — `rgba(255,255,255,0.3)`, uppercase, 2px letter-spacing
  - "Newsletter" heading — `#fff`, 30px, uppercase
- Right column: `#372f42` background, vertically centered
  - Pill-shaped form wrapper: `#fff` background, `border-radius: 40px`, 3px padding
  - Input: transparent background, no border, 16px font, 56px height, `rgba(0,0,0,0.3)` placeholder
  - Submit button: 150×56px, `#352d3f` bg, `#fff` text, 14px uppercase, 1px letter-spacing, `border-radius: 40px`

### FooterLinks
- Footer background: `#302939`
- Padding: 7em 0
- Radial glow overlay: `radial-gradient(ellipse at center, #d7b8ff 0%, transparent 100%)` at 20% opacity (use `::after` pseudo-element)
- Top row: three columns on left (col-md-4 each), right side has logo + copyright
  - Each column: h2 heading (`#fff`, 20px) + unordered list of links
  - Links: `rgba(255,255,255,0.5)`, `py-1 d-block`, checkmark circle icon prefix
- Bottom row: right-aligned logo "Colorlib" + copyright with dynamic year
- **Replace** "Colorlib" branding with "Component Dock" / site name
- Footer link MUST point to `https://www.componentdock.com/`

### Responsive behavior
- On mobile: newsletter columns stack vertically, link columns stack
- Footer columns stack to single column on mobile
- Form input and button stack on very small screens

## Component breakdown

```
App.tsx
├── SectionHeading.tsx
├── Newsletter.tsx
│   ├── NewsletterLabel (left column)
│   └── NewsletterForm (right column)
└── FooterLinks.tsx
    ├── LinkColumn.tsx (×3)
    └── FooterBrand (logo + copyright)
```

## Assets

- **Fonts:** Poppins via Google Fonts `<link>` in index.html
- **Icons:** lucide-react `CheckCircle` (replaces Ionicons `ion-ios-checkmark-circle-outline`)
- **Images:** none (pure CSS/footer design)
- **Colors:** all in Tailwind `@theme` config as custom tokens

## Pitfalls

- The radial gradient glow must be on an `::after` pseudo-element with `z-index: -1` to sit behind content
- The form pill shape is achieved by wrapping the input+button in a white rounded div with 3px padding
- Submit button is fixed 150px wide — do not make it fluid
- Copyright year must be dynamic: `new Date().getFullYear()`
