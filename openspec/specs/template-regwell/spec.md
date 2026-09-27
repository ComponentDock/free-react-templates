# Regwell — Education Appointment Form Template

Recreation of ColorLib "Colorlib Reg Form V12"
(https://colorlib.com/wp/template/colorlib-regform-12/)

## Source

- **Original name:** Colorlib Reg Form V12
- **Slug:** colorlib-regform-12
- **Preview:** https://preview.colorlib.com/theme/colorlib-regform-12/ (unreachable at build time — screenshot used as sole reference)
- **Description:** Free education appointment form template for online and offline educational platforms and institutions.

## Design Tokens (extracted from screenshot)

| Token         | Value                    | Usage                         |
| ------------- | ------------------------ | ----------------------------- |
| Brand color   | `#4e5b87` (slate-blue)   | Submit button, accents        |
| Background    | Full-viewport photo      | Dark overlay, people studying |
| Card bg       | `#ffffff` (white)        | Form card background          |
| Card shadow   | Subtle drop shadow       | Card elevation                |
| Title color   | `#222222` (near-black)   | Form heading                  |
| Label color   | `#999999` (gray)         | Field placeholders/labels     |
| Border color  | `#dddddd` (light gray)   | Input underlines              |
| Button radius | ~6px rounded             | Submit button                 |
| Font family   | Inter (via Google Fonts) | Clean sans-serif body text    |

## Section Structure (from screenshot, top-to-bottom)

1. **Background layer** — full-viewport photo (students at desk) with dark overlay
2. **Form card** — white card, left-of-center, with subtle shadow
   - Heading: "EDUCATION APPOINTMENT FORM" (uppercase, bold)
   - Fields: Title, Your Name, Email, Phone number (text inputs, underline style)
   - Course Type (dropdown/select)
   - Sub-section: "How would you like to be located?" heading
     - By phone (dropdown/select)
     - Hours : 8am 10pm (dropdown/select)
   - Checkbox: "I agree to the Terms and Conditions"
   - Submit button: "Request an appointment" (dark blue, rounded)

## Implementation Plan

- **App folder:** `apps/regwell`
- **Package:** `@free-react-templates/regwell`
- **Components:**
  - `App.tsx` — layout with background + form card
  - `components/Background.tsx` — full-viewport background image + overlay
  - `components/AppointmentForm.tsx` — the form card with all fields
  - `components/Footer.tsx` — branded footer linking componentdock.com
- **Styling:** Tailwind CSS 4, `@theme` tokens for brand colors
- **Form handling:** Controlled inputs, validation with zod (for type safety)
- **Testing:** Vitest + Testing Library, 100% coverage
