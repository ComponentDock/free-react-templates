# Cauldron — Prep Tasks & Design Notes

**Source:** ColorLib Wizard 5 (colorlib-wizard-5)
**Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html
**Status:** Spec complete, ready for implementation

## Tasks (for implementer)

1. **Scaffold app** — Copy simplest existing app, rename to `cauldron`, set package `@free-react-templates/cauldron`, create `public/CNAME`, set `homepage` in `package.json`.
2. **Install dependencies** — No new deps needed. Use lucide-react for arrows (replace Material Design Iconic Font). Use picsum.photos for placeholder images.
3. **Theme tokens** — Add to `index.css` `@theme` block:
   - `--color-brand: #f3d4b7` (warm beige accent)
   - `--color-brand-hover: #d9bda3`
   - `--color-border: #e6e6e6`
   - `--color-text: #666`
   - `--color-heading: #333`
   - `--color-muted: #999`
   - `--color-card: #ffffff`
   - `--color-tooltip: #f2f2f2`
4. **Fonts** — Load Poppins (400, 500, 600) and Muli (700) via Google Fonts `<link>` in `index.html`.
5. **Components** (in order):
   - `WizardLayout.tsx` — Split-screen container (51/49 ratio, responsive breakpoints)
   - `BrandPanel.tsx` — Left panel with lifestyle image on beige bg
   - `ProgressSteps.tsx` — Horizontal segmented progress bar (4 segments)
   - `StepBilling.tsx` — Step 1: First/Last Name, Company, Country select, Address (2 fields), Town/City
   - `StepAdditional.tsx` — Step 2: County, Postcode, Phone, Email, Order Notes textarea, Create Account checkbox
   - `StepOrder.tsx` — Step 3: Product list with thumbnails + order summary
   - `StepPayment.tsx` — Step 4: Payment method radio buttons with tooltip descriptions
   - `WizardNav.tsx` — Back/Next buttons with icon arrows
6. **App.tsx** — Compose layout, manage step state, handle navigation logic
7. **Tests** — TDD: test each component, step transitions, validation, responsive behavior
8. **Footer** — "Made with Component Dock" linking https://www.componentdock.com/

## Design notes

### Layout structure
- Outer: `display: flex; height: 100vh; max-width: 1400px; margin: auto; align-items: center;`
- Left: `width: 51%` — image holder with warm beige bg + image
- Right: `width: 49%` — form container
- At <992px: image hidden, form 60% centered
- At <768px: stacked, image full-width on top

### Progress bar
- Flex container with 4 segments (each ~20% width with margin)
- Active segment: `background: #f3d4b7`, inactive: `#e6e6e6`
- Segment height: 7px, border-radius: 3.5px
- Step title appears above bar as `::before` pseudo-element (use state-driven title instead)

### Form inputs
- Height: 42px, border: 1px solid #e6e6e6, no background
- Focus: border-color #f3d4b7
- Placeholder: #999, font-size 13px
- Labels: block, margin-bottom 8px
- Side-by-side groups: 50% width each with 21px gap

### Buttons
- Height: 51px
- Next: width 135px, bg #f3d4b7, text #333, padding-left 41px (icon on right), no border-radius
- Back: width 135px, bg #e6e6e6, padding-left 48px (icon on left)
- Last step: Back hidden, submit button width 167px
- Hover: Next bg #d9bda3, Back bg #ccc
- Icons: lucide-react ChevronRight (next), ChevronLeft (back)

### Payment radio buttons
- Circular checkmarks (14×14px, border-radius 50%)
- Active inner dot: 6×6px, border-radius 50%, bg #666
- Tooltip: bg #f2f2f2, padding 9px 22px, line-height 1.8
- Tooltip arrow: CSS border trick (bottom border = tooltip bg, sides transparent)
- Tooltip visible only when radio is selected

### Product list (Step 3)
- Each item: flex row, justify-between, border-bottom #e6e6e6
- Thumbnail: 100×90px, border 1px solid #f2f2f2, object-fit contain
- Product name: Poppins Medium 16px, color #333
- Price: 16px
- Summary section: subtotal, shipping notice text, total (Muli Bold 700, color #333)

### Responsive notes
- <1500px: wrapper height auto
- <1191px: card padding reduces to 60px horizontal, margin-right 40px
- <992px: image hidden, form 60% centered, no card margin
- <768px: stacked layout, card padding 70px 20px 40px, form groups stack vertically
