# Spellcraft — Implementation Tasks & Design Notes

## Source
- ColorLib: Colorlib Wizard 7 (https://colorlib.com/wp/template/colorlib-wizard-7/)
- Category: Bootstrap Wizard Templates (Restaurant Booking)
- Preview: https://preview.colorlib.com/theme/colorlib-wizard-7/ (404 at prep — screenshot-only)

## Structure Order (top → bottom)

1. **Page wrapper** — full-viewport dark background (#1a1a1a), flexbox split layout
2. **Left panel (50%)** — food photography, black background, full-height image
3. **Right panel (50%)** — dark charcoal card with subtle border, centered content
4. **Card header** — "BOOK A TABLE" (bold white uppercase), subtitle in peach cursive
5. **Step 1 fields** — People (dropdown), Date (display), Time start/end (dropdowns)
6. **Step 2 fields** — Name, phone, email contact fields
7. **Step 3 fields** — Special requests textarea, confirmation summary
8. **Navigation** — "NEXT" white-outline button (steps 1-2), "BOOK" submit (step 3), back option
9. **Step indicator** — "1 / 3" counter, bottom-right of card
10. **Footer** — Component Dock branding link

## Section-by-Section Fidelity Notes

### Split Layout
- Two equal-width panels side by side on desktop
- Left: pure black background with a centered food/premium photo
- Right: dark charcoal form card with thin light border
- On mobile (<768px): stack vertically, image on top

### Card Header
- Title "BOOK A TABLE" — bold, uppercase, white, sans-serif (Poppins)
- Subtitle "Check out our place" — peach/warm orange (#e8a87c), cursive script font (Dancing Script)
- Centered text alignment

### Form Fields (Step 1)
- "People" — dropdown with chevron arrow, underline-style border (no full border)
- "Date" — read-only display field, same underline style
- "Time" — two side-by-side dropdowns (start time, end time)
- All labels in off-white, values in white
- Thin gray underline per field (not full border boxes)

### Navigation Button
- "NEXT" — white outline (border: 1px solid white), white text, no background fill
- Slightly rounded corners (border-radius: 4px)
- Positioned bottom-right of the form card
- Becomes "BOOK" on step 3

### Step Indicator
- Text: "1 / 3" in muted gray
- Positioned at bottom-right of card, below the NEXT button
- Updates with each step transition

### Dark Theme
- Background: #1a1a1a (near-black)
- Card: #2a2a2e (dark charcoal) with 1px #3a3a3e border
- All text: white or light gray
- Warm accent only in subtitle (peach/orange)

## Fonts
- Headings/Body: Poppins (Google Fonts)
- Subtitle: Dancing Script or similar cursive (Google Fonts)

## Images
- Use `https://picsum.photos/seed/spellcraft-<n>/w/h` for placeholder food photos
- Left panel image should evoke luxury dining (dark background, plated food)

## Implementation Notes
- Copy from simplest existing wizard app (e.g. formwalk, formpad)
- Rename package to @free-react-templates/spellcraft
- Multi-step state: useState for current step + form data object
- Each step renders a different set of fields conditionally
- Form validation: validate current step before advancing
- Responsive: Tailwind breakpoints (lg: flex-row, default flex-col)
