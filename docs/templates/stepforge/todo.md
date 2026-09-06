# Stepforge — Implementation Todo & Design Notes

Source: ColorLib Wizard 7 (`colorlib-wizard-7`)
New name: `stepforge`
Category: Bootstrap Wizards (Multi-step Form)
Preview: https://preview.colorlib.com/theme/colorlib-wizard-7/ (unreachable)
Direct source: https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html

## Structure Order (sections in DOM)

1. **Wizard Container** — full viewport, centered, 878px max-width
2. **Step 1: Book a Table**
   - Left: restaurant/food image (58.88% width)
   - Right: dark form panel (41.12% width, #333 bg, #524b42 border)
     - Header: "Book a table" (Raleway Bold, 25px, uppercase, white)
     - Tagline: "~ Check out our place ~" (Satisfy script, 18px, #cdaa7c)
     - People: custom dropdown (1–5), icon label (zmdi-account-o)
     - Date: datepicker input, icon label (zmdi-calendar-check)
     - Time: two side-by-side selects (from/to), icon label (zmdi-alarm)
3. **Step 2: Contact Details**
   - Left: different image
   - Right: dark form panel
     - Header: "Contact details" (same style)
     - Name: text input with account icon
     - Phone: text input with phone icon
     - Email: text input with email icon
4. **Step 3: Success**
   - Left: different image
   - Right: dark form panel (no inner padding, centered content)
     - Gold circle (38px, #cdaa7c) with white checkmark
     - "Your table is ready" (Raleway Bold, 25px, uppercase)
     - "~ Happy friends with a say ~" (Satisfy script, 18px, #cdaa7c)
5. **Navigation** — absolute positioned at bottom-right
   - Previous / Next buttons (transparent, 1px #666 border, Raleway SemiBold, uppercase)
   - Hover: gold bg (#cdaa7c), border transparent
6. **Step Indicator** — absolute bottom-right, "1 / 3" large format

## Fidelity Notes

- **Images:** Use `picsum.photos/seed/stepforge-<n>/w/h` placeholders for the 3 step images. Each step shows a different image in the original.
- **Icons:** Replace Material Design Iconic Font (zmdi) with `lucide-react` equivalents:
  - zmdi-account-o → `User` or `Users`
  - zmdi-calendar-check → `CalendarCheck`
  - zmdi-alarm → `Clock`
  - zmdi-phone → `Phone`
  - zmdi-email → `Mail`
  - zmdi-check → `Check`
  - zmdi-chevron-down → `ChevronDown`
  - zmdi-caret-down → `ChevronDown`
- **Datepicker:** Use a native HTML date input or a lightweight React datepicker (e.g. `react-datepicker`) instead of the jQuery datepicker.
- **Custom dropdown:** Implement as a controlled React select or custom dropdown component.
- **Step navigation:** Use React state (current step index) instead of jQuery Steps plugin.
- **Fonts:** Load Raleway (400, 600, 700) and Satisfy from Google Fonts.
- **Responsive:** Match the two breakpoints (991px tablet, 767px mobile stacking).
- **Footer:** Add Component Dock link per project conventions.
- **Dark theme:** The form panel is inherently dark (#333) — no dark mode toggle needed.
- **Form validation:** Add basic validation (required fields) before advancing steps.

## Component Outline

```
apps/stepforge/
  src/
    App.tsx              — Wizard state management, step rendering
    components/
      WizardContainer.tsx — Full viewport wrapper, centered layout
      StepIndicator.tsx   — "1 / 3" step counter
      NavigationButtons.tsx — Previous/Next buttons
      Step1BookTable.tsx  — People dropdown, date picker, time selects
      Step2Contact.tsx    — Name, phone, email inputs
      Step3Success.tsx    — Checkmark circle, success message
      ImagePanel.tsx      — Left image column (swaps per step)
      FormPanel.tsx       — Right dark form panel wrapper
    index.css            — Tailwind + theme tokens (@theme block)
```

## Design Token Summary for Tailwind @theme

```css
@theme {
  --color-brand: #cdaa7c;
  --color-panel: #333333;
  --color-border-warm: #524b42;
  --color-input-border: #666666;
  --color-focus-border: #e9e0cf;
  --color-label: #cccccc;
  --color-dropdown-hover: #81acee;
  --font-family-heading: "Raleway", sans-serif;
  --font-family-body: "Raleway", sans-serif;
  --font-family-script: "Satisfy", cursive;
}
```
