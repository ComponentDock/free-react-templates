# Snowdrift — Implementation Notes

## Source Mapping

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| ColorLib source | Modal 03                                               |
| Source slug     | `modal-03`                                             |
| Preview URL     | https://preview.colorlib.com/theme/bootstrap/modal-03/ |
| New name        | `snowdrift`                                            |
| App path        | `apps/snowdrift`                                       |
| Spec            | `openspec/specs/template-snowdrift/spec.md`            |

## Section Order (fidelity)

1. **Landing page** — Centered section with "Snowdrift" heading + "Launch Sale" button
2. **Modal dialog** — Two-column layout:
   - Left panel (teal background): decorative snowflake icon, "Winter" subheading, "Sale" cursive heading, "40% off" discount, "To all products" text
   - Right panel (background image): "Shop now" CTA button
3. **Footer** — Component Dock link

## Design Notes

### Colors

- Primary brand: `#39bdc8` (teal/cyan) — used for left panel background, buttons
- Text on teal: `#000` (black) for subheading, sale text
- Discount text: `#fff` (white), 130px bold
- Close button: `#000`

### Typography

- Body: Lato (300, 400, 700) — via Google Fonts
- Accent/cursive: Pacifico (400) — for "Sale" heading, 105px
- Subheading: 14px, uppercase, letter-spacing 1px
- Discount: 130px, bold, white

### Layout

- Modal max-width: 700px
- Border-radius: 0 (sharp corners)
- Shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
- Two-column: left col-md-5, right col-md-7 (no gutters)
- Mobile: stacks vertically, image panel height 300px

### Decorative Elements

- Large snowflake icon (120px, faded white rgba(255,255,255,0.3)) in top-right of left panel
- Small snowflake icon overlay on "Sale" text (60px, white)
- White underline bar below "Sale" text (50px wide, 2px height)

### Close Button

- Absolute positioned top-right of modal content
- X icon (ion-ios-close from ionicons)

## Task Outline

1. [ ] Scaffold `apps/snowdrift` from simplest existing modal app (overlay)
2. [ ] Rename package to `@free-react-templates/snowdrift`
3. [ ] Set up Tailwind theme tokens in `src/index.css`:
   - Brand color: `--color-brand: #39bdc8`
   - Font families: Lato (body), Pacifico (accent)
4. [ ] Add Google Fonts links to `index.html` (Lato 300/400/700, Pacifico 400)
5. [ ] Add ionicons CSS for the close button icon (or use lucide-react X icon)
6. [ ] Build `LandingPage` component: centered section with heading + trigger button
7. [ ] Build `SaleModal` component:
   - Two-column layout (flex/grid)
   - Left panel: teal bg, decorative snowflake, "Winter" subheading, "Sale" cursive, "40% off" discount, "To all products"
   - Right panel: background image (picsum placeholder), "Shop now" button
   - Close button (X) top-right
   - Sharp corners (no border-radius), drop shadow
   - Responsive: stacks on mobile
8. [ ] Build `Footer` component with Component Dock link
9. [ ] Compose in `App.tsx`
10. [ ] Write tests (TDD): modal open/close, keyboard dismiss, backdrop dismiss, responsive layout
11. [ ] Verify: `scripts/verify-app.sh snowdrift`

## Fidelity Differences

- ColorLib uses Bootstrap 4 grid + jQuery; we use Tailwind CSS + React
- ColorLib uses ionicons; we'll use lucide-react for icons (or inline SVG)
- Background image replaced with picsum.photos placeholder
- "Colorlib products" → "all products" (remove ColorLib branding)
- ColorLib uses Bootstrap modal JS; we use React state for modal open/close
