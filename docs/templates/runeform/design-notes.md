# RuneForm — Design Notes & Implementation Outline

## Source Mapping

| Property         | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| ColorLib name    | Colorlib Wizard 9                                            |
| ColorLib slug    | colorlib-wizard-9                                            |
| ColorLib URL     | https://colorlib.com/wp/template/colorlib-wizard-9/         |
| Live preview     | https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html  |
| Preview (404)    | https://preview.colorlib.com/theme/colorlib-wizard-9/       |
| React app name   | runeform                                                     |
| Package          | @free-react-templates/runeform                               |
| Surge domain     | runeform.free.componentdock.com                              |

## Structure Order (replication 1:1)

1. Full-page background image (warm lifestyle photo, dimmed overlay)
2. Centered white card (819px wrapper with 7px padding pattern)
3. Step indicator (top-right corner)
4. Step title (centered, uppercase, Poppins-SemiBold)
5. Form section content (varies per step)
6. Navigation buttons (bottom, prev/next)

## Section-by-Section Fidelity Notes

### Step 1 — User Profile
- Title: "USER PROFILE" — uppercase, 35px, Poppins-SemiBold, #3377c0
- 2-column × 3-row form grid
- Each field: label above input, icon inside (lucide-react equivalents)
- Fields: Full Name (User), Education Level (PenLine), Email (Mail), Phone (Smartphone), Specialization (SpellCheck), Date of Birth (Calendar)
- Input styling: 42px height, 1px solid #ccc border, 46px left padding for icon, #999 placeholder text
- Focus border: #3377c0

### Step 2 — Residential Address
- Title: "RESIDENTIAL ADDRESS" — same heading style
- Same 2-column × 3-row form layout
- Country: select dropdown with chevron-down icon (lucide ChevronDown)
- Street Address: Pin icon (lucide MapPin)
- Apartment: Home icon (lucide Home)
- Town / City: PinDrop icon (lucide MapPin)
- County: Pin icon (lucide MapPin)
- Postcode / Zip: Eye icon toggle for password visibility (lucide Eye / EyeOff)

### Step 3 — What Are You Doing?
- Title: "WHAT ARE YOU DOING?" — same heading style
- 3-column × 2-row grid of selectable cards
- Each card: image thumbnail (86% width) + vertical heading label (14% width)
- Heading uses writing-mode: vertical-rl, rotated 180deg in original
- Inactive heading bg: #b3b3b3, active: #3377c0
- Hover: image opacity 0.6
- Categories: Programming, Sports, Business, Tour Guide, Art-Design, Doctor
- Use picsum.photos/seed/runeform-{n}/w/h for placeholder images

### Navigation
- Previous: outline button (1px solid #3377c0, text #3377c0, transparent bg)
- Next: filled button (#3377c0 bg, white text)
- Both: 112×42px, uppercase, letter-spacing 1px, Poppins-Medium
- Hover: bg changes to #3b87d9
- Validation: when fields incomplete, buttons hidden + "You must fill all fields to continue" shown

### Step Indicator
- Position: absolute top-right
- Current step number: 40px, Poppins-Medium, #ccc
- "/ 3" suffix: 15px, #ccc, positioned to the right of the number
- CSS pseudo-elements for the number and suffix

## Component Outline

```
apps/runeform/
  src/
    App.tsx              — Wizard container, step state management
    components/
      WizardCard.tsx     — White card wrapper with padding
      StepIndicator.tsx  — 1/3, 2/3, 3/3 display
      StepTitle.tsx      — Uppercase section heading
      FormField.tsx      — Label + icon input (reusable)
      SelectField.tsx    — Label + icon select dropdown
      PasswordField.tsx  — Label + icon password input with eye toggle
      CategoryGrid.tsx   — 3-column selectable card grid
      CategoryCard.tsx   — Individual card (thumb + heading)
      NavigationButtons.tsx — Previous/Next button pair
    hooks/
      useWizard.ts       — Step state, validation, navigation logic
    index.css            — Tailwind entry + Poppins font + theme tokens
```

## Tailwind Theme Tokens

```css
@theme {
  --color-brand: #3377c0;
  --color-brand-hover: #3b87d9;
  --color-text-body: #999999;
  --color-text-input: #333333;
  --color-border: #cccccc;
  --color-grid-inactive: #b3b3b3;
}
```

## Tech Notes

- Use react-hook-form or simple useState for multi-step form state
- Date field: use a lightweight datepicker (react-datepicker or custom)
- Category cards: controlled selection via state, only one active at a time
- Responsive breakpoints: mobile-first, 767px breakpoint for single-column
- Font: load Poppins via Google Fonts link in index.html (Regular 400, Medium 500, SemiBold 600)
