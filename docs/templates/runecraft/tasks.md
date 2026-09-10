# Tasks & Research Notes: Runecraft (Colorlib Wizard 9)

## Research Summary

- **Source**: Colorlib Wizard 9 (`https://colorlib.com/wp/template/colorlib-wizard-9/`)
- **New Name**: `runecraft`
- **Category**: Bootstrap Wizard Templates / User Profile Wizard
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-9/` — **404** (design captured from screenshot only)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-9.jpg`
- **Colorlib Description**: "If you are searching for the best free user profile wizard, this three-step snippet will help you get things moving forward immediately."
- **Design Tokens (from screenshot analysis)**:
  - Primary blue: `#1976D2` (title, NEXT button, active step indicator)
  - Card background: `#FFFFFF`
  - Card border-radius: `8px`
  - Card shadow: `0 6px 20px rgba(0,0,0,0.12)`
  - Dark gray text: `#333333` (labels, input text)
  - Light gray: `#999999` (icons, helper text, inactive step counter)
  - Input border: `#E0E0E0`, border-radius `4px`
  - Button: solid `#1976D2`, white text, border-radius `4px`
  - Typography: system sans-serif stack
  - Background: nature photo (warm foliage, earthy tones)

## Section Implementation Plan (top → bottom)

1. **Full-Page Background**: Full-viewport background image (nature/foliage theme). Use `picsum.photos/seed/runecraft-bg/1920/1080` as placeholder. Apply subtle overlay if needed for card contrast.
2. **Wizard Card (centered floating)**: White card centered on page with `border-radius: 8px`, `box-shadow: 0 6px 20px rgba(0,0,0,0.12)`. Contains the step indicator, form fields, and navigation buttons.
3. **Step Indicator**: Text-based counter "N/3" in top-right corner of card. Current step in bold primary blue `#1976D2`, "/3" in gray `#999999`.
4. **Title**: "USER PROFILE" (or similar) in all-caps, bold, primary blue `#1976D2`, centered at top of card.
5. **Form Fields (Step 1)**: 3x2 grid layout with 6 fields:
   - Row 1: Full Name (user icon), Education Level (pencil icon)
   - Row 2: Email ID (envelope icon), Phone Number (phone icon)
   - Row 3: Specialization (graduation cap icon), Date of Birth (calendar icon)
   - Each field: light gray border `#E0E0E0`, border-radius `4px`, left-aligned gray icon
6. **Helper Text**: "You must fill all fields, to be able to continue" — light gray `#999999`, small font, below last row
7. **Navigation Buttons**: NEXT button at bottom-right (solid blue `#1976D2`, white uppercase text). BACK button (visible on steps 2-3).
8. **Step 2**: Additional profile fields (adapt from original — e.g., address, social links)
9. **Step 3**: Confirmation / final details step

## Component Structure

```
src/
  main.tsx
  App.tsx
  index.css              (Tailwind + @theme with primary blue #1976D2)
  components/
    WizardCard.tsx       (centered floating white card container)
    StepIndicator.tsx    (N/3 text counter in top-right)
    ProfileStep1.tsx     (6-field form: name, education, email, phone, spec, DOB)
    ProfileStep2.tsx     (step 2 additional fields)
    ProfileStep3.tsx     (step 3 confirmation/final fields)
    FormField.tsx        (reusable: icon + input with label)
    WizardNav.tsx        (NEXT/BACK buttons)
    Background.tsx       (full-page background image)
  test/
    setup.ts
```

## Fidelity Notes

- **Faithful to original**: Single centered white card wizard on full-page background, 3-step flow, text-based step counter, blue accent color, 3x2 form grid with icons, NEXT/BACK navigation, helper text.
- **Adaptations**: No copy-paste of ColorLib assets. Background → `picsum.photos/seed/runecraft-bg/1920/1080`. Icons from lucide-react (User, Pencil, Mail, Phone, GraduationCap, Calendar). Fonts from Google Fonts or system sans-serif. Step 2 and 3 field content adapted for React (cannot know exact original content without live preview).
- **No ColorLib references in app code**: Provenance recorded only in spec and TEMPLATES.md.
- **Key design choices**: The original uses a simple text counter "1/3" rather than a visual stepper with circles/lines. The card has generous padding and a clean, minimalist aesthetic. The NEXT button is bottom-right aligned, not centered.
