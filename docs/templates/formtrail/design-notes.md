# FormTrail — Design Notes & Task Outline

Source: ColorLib Wizard 9 (colorlib-wizard-9)
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html

## Section order (top to bottom)

1. **Full-screen background** — warm nature photo (copper-brown foliage + blue flowers). Use `picsum.photos/seed/formtrail-bg/1920/1080` as placeholder.
2. **Centered white card** (819px, sharp corners, no border-radius) containing:
   - Step indicator (top-right corner, "1 / 3" format)
   - Section heading (centered, uppercase, brand blue, Poppins SemiBold)
   - Form fields (2-column grid with icons)
   - Navigation buttons (Previous + Next, bottom)
3. **No footer in original** — add Component Dock footer per project rules.

## Component breakdown

| Component         | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `WizardCard`      | Container: white bg, 819px max-width, padding 64px/58px |
| `StepIndicator`   | Shows "N / 3" in top-right, updates on step change       |
| `WizardHeading`   | Uppercase, Poppins SemiBold 35px, brand blue, centered   |
| `FormField`       | Label + input with left icon, 42px height, #ccc border   |
| `FormRow`         | 2-column flex row with 40px gap                          |
| `StepOne`         | User Profile: 6 fields in 3 rows                         |
| `StepTwo`         | Residential Address: 6 fields in 3 rows                  |
| `StepThree`       | Category grid: 3x2 selectable cards with vertical labels |
| `CategoryCard`    | Thumbnail + vertical text sidebar, active/inactive state |
| `WizardNav`       | Previous (outlined) + Next (filled) buttons              |
| `ValidationMsg`   | "You must fill all fields to continue" (typo fixed)      |

## Fidelity notes

- **Icons:** Original uses Material Design Iconic Font. Replace with
  lucide-react equivalents: User, GraduationCap, Mail, Phone, PenTool,
  Calendar, MapPin, Home, Building, Map, FileText, Lock.
- **Datepicker:** Original uses a jQuery datepicker. Replace with a
  native HTML date input or a lightweight React datepicker.
- **Grid selector (step 3):** Cards with vertical text sidebar. Use
  CSS `writing-mode: vertical-rl; transform: rotate(180deg)` to match
  the vertical text layout. Active state = brand blue sidebar.
- **Background:** Full-viewport nature photo. Use `picsum.photos` with
  a warm-toned seed. `bg-cover bg-center` on the page wrapper.
- **Validation:** Original shows a text message replacing the Next button
  when fields are empty. Recreate with conditional rendering.
- **Navigation arrows:** Original jQuery Steps plugin provides Previous/
  Next. Build with React state (`currentStep`).
- **Responsive:** At <=767px, form rows go single-column, grid items go
  2-column, background image is hidden, card gets full-width with
  reduced padding (20px).
- **No border-radius anywhere** — original uses sharp rectangular shapes.
