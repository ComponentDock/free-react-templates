# Tasks & Research Notes: Spellforge (Colorlib Wizard 8)

## Research Summary

- **Source**: Colorlib Wizard 8 (`https://colorlib.com/wp/template/colorlib-wizard-8/`)
- **New Name**: `spellforge`
- **Category**: Forms / Multi-step Wizard / Food Store Checkout
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-8/` — **404 (unreachable)**
- **Fallback**: Screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-8.jpg`
- **Colorlib Description**: "A handy free food store checkout template that you can also use for online food ordering."
- **Design Tokens (from screenshot analysis)**:
  - Brand green: `#88b34a` (active step fill, buttons, outline rings)
  - Page background: `#f5f2ec` (warm linen/off-white)
  - Card: white `#ffffff`, rounded ~8–10px, drop shadow
  - Text: `#333333` headings, `#444444` step labels
  - Input borders: `#e0e0e0`, placeholder: `#999999`
  - Dashed connectors: `#d1d1d1`
  - Pre-filled field bg: `#e8f0f8`
  - Font: geometric sans-serif (Poppins)

## Visual Design Notes (from Screenshot)

The template shows a centered white card on a warm linen background with food-themed decorative photos in the four corners (spices, peppercorns, basil, tomatoes). The card contains:

1. **Progress indicator**: 4 circles connected by dashed gray lines. Active step (Step 1) = filled green circle with white fork/spoon icon. Inactive = green outline with green icon (lock, storefront, truck). Labels: "STEP 01"–"STEP 04".
2. **Section title**: "BASIC DETAILS" in bold uppercase dark gray.
3. **Form grid**: 2-column layout with inputs having right-aligned icons. Fields: First Name, Last Name, Email ID, User ID, Country, State, City, Phone Number, Password.
4. **Pre-filled fields**: Some fields show a light blue-gray background (`#e8f0f8`) indicating completed/pre-populated data.
5. **Action buttons**: "BACK" and "CONTINUE" in solid green with white uppercase text.

## Section Implementation Plan

1. **Page Container**: Full-viewport warm linen background (#f5f2ec). Centered white card with shadow and rounded corners.
2. **Progress Indicator Component**: Horizontal row of 4 circular step icons connected by dashed lines. Active = filled green (#88b34a) + white icon; completed = green checkmark; inactive = green outline + green icon. Lucide icons: Utensils (step 1), Lock (step 2), Store (step 3), Truck (step 4).
3. **Step 1 — Basic Details**: Section title "BASIC DETAILS". 2-column form grid: First Name + Last Name, Email + User ID, Country + State + City (3-col), Phone + Password. Each input has a right-aligned Lucide icon. Password input has show/hide toggle.
4. **Step 2 — Security**: Account security fields (username, password setup, security question).
5. **Step 3 — Order Details**: Store/order configuration fields (product selection, quantity, special instructions).
6. **Step 4 — Delivery**: Shipping fields (address, city, postal code, delivery notes).
7. **Navigation Buttons**: "BACK" (hidden on step 1) and "CONTINUE" (becomes "SUBMIT" on step 4). Solid green (#88b34a), white uppercase text.
8. **Form Validation**: Required field validation before advancing steps. Inline error messaging.
9. **Success Screen**: Confirmation display after final step submission.
10. **Footer**: Component Dock branded attribution linking `https://www.componentdock.com/`.

## Component Structure

```
src/
  main.tsx
  App.tsx
  index.css          (Tailwind + @theme with brand green #88b34a)
  components/
    ProgressBar.tsx   (4-step horizontal indicator with icons)
    WizardCard.tsx    (card container + step state management)
    StepOne.tsx       (Basic Details form)
    StepTwo.tsx       (Security form)
    StepThree.tsx     (Order Details form)
    StepFour.tsx      (Delivery form)
    SuccessScreen.tsx (post-submission confirmation)
    Footer.tsx        (Component Dock link)
  test/
    setup.ts
```

## Fidelity Notes

- **Faithful to original**: 4-step horizontal progress indicator with circular icons, dashed connectors, green brand color, card-centered layout, food-themed aesthetic.
- **Adaptations**: No copy-paste of ColorLib assets. Food decorative corner images replaced with placeholder images via picsum.photos. Icons from lucide-react (Utensils, Lock, Store, Truck, User, Mail, Globe, MapPin, Phone, Eye/EyeOff). Font loaded from Google Fonts.
- **No ColorLib references in app code**: Provenance recorded only in spec and TEMPLATES.md.
