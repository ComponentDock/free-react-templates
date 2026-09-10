# FormVane — Design Notes

## Structure Order (top to bottom)

1. **Page wrapper** — full-viewport background image (nature/floral scene), flex-centered, use `picsum.photos` placeholder or CSS gradient
2. **Card wrapper** — subtle repeating pattern background behind card (original: `form-bg.png`); apply as body background or omit for simplicity
3. **Centered card** — white (`#fff`), sharp corners (no border-radius), fixed ~819px width, padding 64px top / 58px sides
4. **Step indicator** — absolute positioned top-right of card, shows "N / 3" in gray. Large number (40px, `#cccccc`) + small "/ 3" suffix (15px)
5. **Step heading** — Poppins SemiBold 35px, blue `#3377c0`, uppercase, letter-spacing 3px, centered
6. **Step content** — varies per step (see below)
7. **Action buttons** — BOTTOM of card, flex justify-between
   - BACK: outlined (blue border + blue text, no fill), only visible on steps 2–3
   - NEXT: filled blue (`#3377c0` bg, white text), uppercase, 42px height, 112px wide, sharp corners

### Step 1: User Profile
- 2-column grid of input fields (3 rows × 2 columns)
- Fields: Full Name, Education Level, Email ID, Phone Number, Specialization, Date of Birth
- Each field: label (dark `#333`) + input with left-side icon (Material Design icon style → use `lucide-react`)
- Input: 42px height, `#ccc` border, no border-radius, 46px left padding for icon
- Date of Birth: datepicker (use `<input type="date">` or a lightweight date picker)
- Validation message appears below buttons when fields are empty

### Step 2: Residential Address
- 2-column grid (3 rows × 2 columns)
- Fields: Country (dropdown), Street Address, Apartment, Town/City, County, Postcode/Zip
- Country: `<select>` with chevron-down icon on right, options: US, UK, Vietnam
- Postcode/Zip: password-type input with eye toggle (show/hide)

### Step 3: What Are You Doing?
- 3-column flex grid of 6 category cards
- Each card: thumbnail image (86% width) + vertical text label strip (14% width)
- Label: uppercase, 11px, white text on gray (`#b3b3b3`) background, `writing-mode: tb-rl`, rotated 180°
- Active card: label bg changes to blue `#3377c0`
- Hover: image opacity → 0.6
- Categories: Programming, Sports, Business, Tour Guide, Art-Design, Doctor

## Fidelity Notes

- **Three-step wizard is the core UX** — must implement actual step navigation with React state
- **Sharp-cornered design is distinctive** — zero border-radius on card, buttons, and inputs. This is NOT a rounded/soft UI
- **Icons per field** — use `lucide-react` icons matching the field purpose (User, GraduationCap, Mail, Smartphone, BookOpen, Calendar, MapPin, Home, MapPin, ChevronDown, Eye, EyeOff)
- **Vertical text labels on category cards** — the original uses `writing-mode: tb-rl` + `transform: rotate(-180deg)` for vertical text. Implement with CSS `writing-mode` or rotate transform
- **Step indicator is CSS-driven** — uses `::before`/`::after` pseudo-elements for the number and "/ 3" text in original; in React, render as positioned elements
- **Disabled/empty state** — when fields are not filled, buttons are hidden and helper text "Your must fill all fields, to be able to continue" appears
- **Fixed card width (819px)** — matches original; use `max-w-[819px]` on desktop, full width on mobile
- **No form submission logic** — this is a UI template; fields can be uncontrolled
- **Font**: load Poppins via Google Fonts `<link>` in index.html (weights: 400, 500, 600)

## Component Breakdown

| Component         | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| `FormVane.tsx`    | Root — manages step state, renders card + background           |
| `StepIndicator.tsx` | "N / 3" indicator, absolute positioned top-right            |
| `StepHeading.tsx` | Blue uppercase heading for each step                           |
| `StepForm.tsx`    | Switches content based on current step index                   |
| `UserProfileForm.tsx` | Step 1: 6 icon-labeled inputs in 2-column grid            |
| `AddressForm.tsx` | Step 2: Country dropdown + 5 inputs in 2-column grid          |
| `CategoryGrid.tsx` | Step 3: 3x2 selectable category cards                        |
| `FormInput.tsx`   | Reusable input with icon, label, focus border                  |
| `SelectInput.tsx` | Dropdown select with icon and chevron                          |
| `ActionButtons.tsx` | BACK/NEXT buttons with disabled state                      |

## Color Palette Reference

```
Brand Blue:       #3377c0  (headings, buttons, active states, focus)
Button Hover:     #3b87d9  (lighter blue)
Text Primary:     #333333  (labels, input text, headings)
Text Secondary:   #999999  (body text, placeholders)
Input Border:     #cccccc  (thin gray border)
Step Number:      #cccccc  (gray, inactive-looking)
Grid Inactive:    #b3b3b3  (inactive category label bg)
Card BG:          #ffffff  (pure white)
Card Shadow:      subtle drop shadow
```

## Reference Sources

- **Source HTML**: `https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html`
- **Source CSS**: `https://colorlib.com/etc/bwiz/colorlib-wizard-9/css/style.css`
- **Preview (404)**: `https://preview.colorlib.com/theme/colorlib-wizard-9/`
- **Template page**: `https://colorlib.com/wp/template/colorlib-wizard-9/`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-9.jpg`
- **Analysis date**: 2026-09-10
