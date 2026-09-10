# Registease — Design Notes & Implementation Outline

Source: ColorLib "Colorlib Wizard 9"
Preview: https://preview.colorlib.com/theme/colorlib-wizard-9/ (404 — screenshot-only reference)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-9.jpg

## Structure order (top → bottom, single-page)

1. Full-viewport background layer (image + gradient fallback)
2. Floating card container (centered, max-width ~800px, white, drop-shadow)
   2a. Card header — "USER PROFILE" title
   2b. Step indicator — "1 / 3" positioned top-right inside card
   2c. Form body — rendered per active step
       Step 1: 2-column grid of 6 labeled inputs with left-edge icons
       Step 2: Additional profile fields (bio, address, social links)
       Step 3: Review summary of entered data + optional profile picture
   2d. Instruction text — below form fields
   2e. Navigation bar — PREV / NEXT (or SUBMIT on final step)
3. Footer — Component Dock link

## Section-by-section fidelity notes

### Background
- Original: full-bleed nature photo (person + brown foliage + blue flowers)
- Recreation: use a picsum.photos placeholder or CSS gradient (dark brown → blue)
  as fallback; attempt background image with `bg-cover bg-center`
- CSS: `min-h-screen bg-cover bg-center relative` on outer container

### Floating card
- White (#FFFFFF), sharp corners (no border-radius on the card itself)
- Subtle drop shadow: `shadow-lg` or custom `shadow-[0_4px_20px_rgba(0,0,0,0.15)]`
- Centered: `max-w-2xl mx-auto mt-16 mb-16`
- Internal padding: generous (~40-50px all sides)

### Header
- Text: "USER PROFILE" (all caps, bold)
- Color: dark blue `#1A5276`
- Font: Montserrat or Roboto (load via Google Fonts link in index.html)
- Alignment: centered

### Step indicator
- Position: top-right inside card (absolute or flex justify-end)
- Text: "1 / 3" format, dark gray `#555555`
- Small font size (~0.875rem)

### Form fields (Step 1)
- 2-column grid: `grid grid-cols-2 gap-5`
- Each field: label (small, `#666666`) above an input with left icon
- Input style: white background, `#DDDDDD` border, `rounded-sm` (2-4px)
- Icons: lucide-react (User, Pencil, Mail, Phone, GraduationCap, Calendar)
- Field list:
  1. Full Name (User icon)
  2. Education Level (Pencil icon)
  3. Email ID (Mail icon) — type="email"
  4. Phone Number (Phone icon) — type="tel"
  5. Specialization (GraduationCap icon)
  6. Date of Birth (Calendar icon) — type="date" with date picker

### Instruction text
- Italic, gray `#666666`, small font
- Below the field grid, left-aligned

### Navigation
- NEXT button: solid dark blue `#1A5276`, white uppercase text, `rounded-sm`
- PREV button: same style, only shown on steps 2–3
- SUBMIT button: replaces NEXT on step 3
- Alignment: right-aligned at bottom of card

### Step 2 (additional info)
- Fields: Street Address, City, Country, Bio (textarea), Social Links
- Same 2-column layout, same styling

### Step 3 (review)
- Read-only summary of all entered fields
- Section headers for Step 1 data and Step 2 data
- Optional: profile picture upload area

## Component plan

```
src/
  App.tsx              — wizard state machine (currentStep, formData)
  components/
    WizardCard.tsx     — floating card container + header + step indicator
    StepIndicator.tsx  — "1 / 3" display
    Step1Form.tsx      — profile fields (6 inputs)
    Step2Form.tsx      — additional info fields
    Step3Review.tsx    — read-only summary
    FormField.tsx      — reusable labeled input with icon
    Navigation.tsx     — PREV/NEXT/SUBMIT buttons
    InstructionText.tsx — italic helper text
  index.css            — Tailwind entry + @theme tokens
  main.tsx             — entry point (excluded from coverage)
```

## State management

- Local state in App.tsx: `{ step: 1 | 2 | 3, data: FormData }`
- FormData: Record of all field values
- On NEXT: validate current step fields → advance
- On PREV: go back (preserve data)
- On SUBMIT: display success state

## Design tokens (Tailwind @theme)

```
--color-brand: #1A5276;
--color-brand-light: #2E6BA6;
--color-label: #666666;
--color-step-indicator: #555555;
--color-input-border: #DDDDDD;
```

## Accessibility notes

- Use `<label htmlFor>` for every input
- aria-invalid on fields with validation errors
- aria-describedby linking error messages
- Keyboard navigation through form fields
- Focus-visible rings on all interactive elements
