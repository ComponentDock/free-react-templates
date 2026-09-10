# FormNova — Implementation Notes

## Source

- **ColorLib:** Wizard 7 (colorlib-wizard-7)
- **Preview:** https://preview.colorlib.com/theme/colorlib-wizard-7/ (404 —
  screenshot-only reference as of 2026-09-10)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg

## Design Overview

Dark-themed, multi-step restaurant table booking wizard. Two-panel layout:
a food photography hero on the left, dark charcoal form panel overlapping on
the right. 3-step flow: party/date/time → contact info → confirmation.

## Component Tree (proposed)

```
src/
  main.tsx              — entry (excluded from coverage)
  App.tsx               — composes WizardShell
  index.css             — Tailwind + theme tokens (Montserrat, Dancing Script)
  components/
    WizardShell.tsx     — outer container, holds step state
    HeroPanel.tsx       — background food image (picsum placeholder)
    FormPanel.tsx       — dark card wrapper
    StepIndicator.tsx   — "1 / 3" counter
    StepOne.tsx         — People, Date, Time fields
    StepTwo.tsx         — Contact/details fields (name, email, phone)
    StepThree.tsx       — Booking summary + confirm button
    FormField.tsx       — reusable input row (icon + label + control)
    WizardButton.tsx    — sharp-cornered NEXT/BACK/CONFIRM buttons
```

## Section-by-Section Fidelity Notes

### Hero Panel
- Full-height dark food photography. Use `https://picsum.photos/seed/formnova-hero/800/1000`
  as placeholder. Apply dark overlay to match moody aesthetic.

### Form Panel
- Background: `#2D2D2D`, border: `#3E3E3E`, rounded-none (sharp corners).
- Positioned to overlap hero on desktop; full-width stacked on mobile.

### Heading
- "BOOK A TABLE" — Montserrat bold, uppercase, white (`#FFFFFF`), ~26px.

### Subheading
- "~ Check out our place ~" — Dancing Script italic, cream (`#D4C5A9`), ~14px.
- Load Dancing Script via Google Fonts `<link>` in `index.html`.

### Form Fields (Step 1)
- People: person icon (lucide-react `Users`) + dropdown select.
- Date: calendar icon (lucide-react `Calendar`) + date input, format DD MON YYYY.
- Time: clock icon (lucide-react `Clock`) + two time select dropdowns.
- Input styling: bg `#333333`, border-bottom `#4A4A4A`, text white, icons white.

### Step Indicator
- "1 / 3" — current step number slightly larger, white Montserrat.

### Buttons
- NEXT / BACK / CONFIRM: bg `#2D2D2D`, border `1px solid #FFFFFF`, text white,
  sharp corners (rounded-none), Montserrat medium, uppercase.

### Step Flow
- Step 1: Party size, date, time range.
- Step 2: Contact info (name, email, phone, special requests textarea).
- Step 3: Summary of all selections + "CONFIRM BOOKING" button.

### Responsive
- Below 768px: hero panel hidden or reduced to a banner; form panel full-width.
- Maintain dark theme and spacing rhythm on mobile.

## Dependencies

- No new dependencies expected. Use lucide-react icons, Tailwind utilities.
- Google Fonts: Montserrat + Dancing Script loaded via `<link>` in index.html.
