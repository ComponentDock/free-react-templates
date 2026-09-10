# Steplink — Implementation TODO & Design Notes

## Source
- **ColorLib**: Colorlib Wizard 7 (`colorlib-wizard-7`)
- **Category**: Bootstrap Wizard Templates / Restaurant Reservation
- **Description**: 3-step restaurant table booking wizard with dark panel + hero image split layout

## Structure Order (section-by-section)

1. **App shell** — `App.tsx` composes the full-page split layout
2. **HeroImage** (left column) — full-height food image placeholder (picsum.photos)
3. **BookingForm** (right column) — dark panel container with:
   - **Header** — "BOOK A TABLE" headline (geometric sans, uppercase, white)
   - **Tagline** — cursive script subtitle (e.g. "Check out our place", gold/beige)
   - **StepIndicator** — "1 / 3" counter at bottom-right
4. **Step1 — PartyDetails** — person icon + "People" label + number selector (1-10)
5. **Step2 — DateTime** — calendar icon + date input + clock icon + start/end time selectors
6. **Step3 — Confirmation** — summary display of party size, date, time + Confirm button
7. **SuccessScreen** — "Your table is booked!" message + Book Another button
8. **Footer** — "Made with Component Dock" link to componentdock.com

## Design Notes

### Colors
- Panel background: `#1a1a1a` (dark charcoal)
- Page background: `#ffffff` (white)
- Text on panel: `#ffffff` (white)
- Text on page: `#333333` (dark gray)
- Accent/tagline: `#c9a96e` (warm gold/beige)
- Button border: `rgba(255,255,255,0.5)` → full white on hover
- Input borders: `rgba(255,255,255,0.3)`

### Typography
- Headings: Montserrat 700, uppercase, letter-spacing 2px
- Cursive tagline: Dancing Script or Caveat, ~18px
- Body/labels: system sans-serif or Inter, 14px
- Step counter: monospace or light weight sans, 14px

### Layout
- Full viewport height (`min-h-screen`)
- Two equal columns (50/50 split), flex row
- Left: object-cover food image
- Right: dark panel, vertically centered, max-width ~480px, padding 40px
- Mobile: stack vertically, image on top (40vh), form below

### Wizard Behavior
- State managed in `BookingForm` with `currentStep` (1-3)
- Step transitions: simple fade/slide animation (optional)
- Form data persisted across steps via parent state
- Back button restores previous step values

### Fidelity Notes from Screenshot
- The original uses a single dark panel with ALL fields visible (not a multi-page wizard visually)
- The screenshot shows People/Date/Time all in one panel with a "1/3" counter
- This may mean the 3 steps are within the SAME panel, just revealed progressively
- The implementer should verify whether steps are separate panels or progressive disclosure within one panel
- The food image is high-quality moody photography (black ceramic plate, sushi/seafood) — use a dark food image from picsum

### Images
- Hero: `https://picsum.photos/seed/steplink-food/800/1200` (vertical dark food photo)
- No other images needed

### Dependencies
- No new dependencies expected
- Use `packages/ui` Button/ButtonLink components
- lucide-react icons: `User`, `Calendar`, `Clock` (or similar)
