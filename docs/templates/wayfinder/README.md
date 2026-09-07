# Wayfinder — Implementation Notes

Source: ColorLib Wizard 22
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-22/index.html
Slug: `colorlib-wizard-22`
New name: Wayfinder (`apps/wayfinder`)

## Structure Order

1. `src/components/ProgressIndicator.tsx` — horizontal step bar with numbered circles
2. `src/components/StepPersonal.tsx` — Step 1: name, phone, email fields
3. `src/components/StepTravel.tsx` — Step 2: location, date, time fields
4. `src/components/StepConfirm.tsx` — Step 3: confirmation summary table
5. `src/components/WizardForm.tsx` — container managing step state + navigation
6. `src/App.tsx` — wraps WizardForm with split layout (image panel + form panel)
7. `src/components/Footer.tsx` — Component Dock link

## Section-by-Section Fidelity Notes

### Split Layout (App.tsx)
- White card: 993px, 10px border-radius, shadow 0px 8px 20px rgba(0,0,0,0.15)
- Left panel: 66.61% width, background image cover, 10px left corners
- Right panel: form with padding 40px 73px 40px 52px
- Centered on full-page background image using flexbox
- On mobile (< 575px): image panel hidden, form full width

### Progress Indicator
- Horizontal layout, 3 numbered circles connected by lines
- Each circle: 45px, border-radius 50%, white number on gray (#ccc) inactive, blue (#56a3f2) active/done
- Connector lines: 30px width, 2px height, #e5e5e5, positioned after each circle
- Circle spacing: margin-right 30px
- Numbers centered in circles (absolute positioning + transform)

### Step 1 — Personal Information
- Fields: First Name, Last Name (side-by-side, 50% each)
- Fields: Phone Number, Email (side-by-side, 50% each)
- Inputs: border 1px solid #e5e5e5, border-radius 5px, padding 14px 15px
- Text: #333, 16px, weight 600; placeholder: #666
- Font: Muli

### Step 2 — Travel Details
- Location: select dropdown, full width (form-holder-2), custom chevron icon
- Date: text input with datepicker, placeholder "15 / Jan / 2018"
- Time: select dropdown (4 time slot options)
- Date and Time side-by-side (50% each)

### Step 3 — Confirmation Summary
- Bordered box: 1px solid #e5e5e5, border-radius 5px, padding 22px 26px 16px
- Table rows with spacing (padding-bottom 18px)
- Labels (th): #666, 15px, weight 600
- Values (td): #333, 18px, weight 700
- Shows: Full Name, Phone, Email, Travel Location, Date, Time

### Navigation Buttons
- Next: blue rectangle (#56a3f2), 160px × 50px, border-radius 5px
- Next hover: darker blue (#4582bf)
- Previous: same style, hidden on step 1 (display: none)
- Button text: white, 16px, weight 600
- Buttons in actions bar: list-style none, flex layout, margin-top 15px

## Design Tokens (Tailwind @theme)

```css
@theme {
  --color-brand-blue: #56a3f2;
  --color-brand-blue-dark: #4582bf;
  --color-step-inactive: #ccc;
  --color-step-connector: #e5e5e5;
  --color-text-heading: #333;
  --color-text-sub: #666;
  --color-border-input: #e5e5e5;
  --color-confirm-border: #e5e5e5;
  --color-confirm-label: #666;
  --color-confirm-value: #333;
  --font-family-brand: 'Muli', sans-serif;
  --radius-card: 10px;
  --radius-content: 5px;
  --radius-circle: 50%;
  --radius-input: 5px;
}
```
