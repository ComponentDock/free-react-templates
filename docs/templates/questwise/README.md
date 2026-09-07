# QuestWise — Implementation Notes

Source: ColorLib Wizard 21
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
Slug: `colorlib-wizard-21`
New name: QuestWise (`apps/questwise`)

## Structure Order

1. `src/components/ProgressIndicator.tsx` — horizontal step bar with circular icons
2. `src/components/StepAccount.tsx` — Step 1: account info fields
3. `src/components/StepPayment.tsx` — Step 2: payment/credit card fields
4. `src/components/StepConfirm.tsx` — Step 3: confirmation summary table
5. `src/components/WizardForm.tsx` — container managing step state + navigation
6. `src/App.tsx` — wraps WizardForm with background image
7. `src/components/Footer.tsx` — Component Dock link

## Section-by-Section Fidelity Notes

### Progress Indicator
- Horizontal layout, centered, 3 circles connected by gray lines
- Each circle: 50px, border-radius 50%, icon centered (white on gray #ccc inactive, white on green #6eba2a active/done)
- Active circle gets shadow: `0px 5px 18px 0px rgba(0,0,0,0.2)`
- Connector lines: 6px height, #e5e5e5 background, absolute positioned
- Step number (gray #666) and step text (dark #333, weight 600) below each circle

### Step 1 — Account Information
- Blue background content area (#359bfa, border-radius 5px)
- Fields: Username (text, required), Email (email, required, pattern), Password (password, required), Confirm Password (password, required)
- Layout: username full row, email full row, password + confirm side-by-side
- White labels on blue background, white input backgrounds
- Input border-radius: 5px

### Step 2 — Payment Information
- Same blue content area
- Fields: Card Type (select), Card Number (text), CVC (text), Expiry Month (select), Expiry Year (select)
- Layout: Card Type full row, Card Number + CVC side-by-side, Month + Year side-by-side
- Select dropdowns with placeholder "disabled selected" default

### Step 3 — Confirmation Summary
- Darker blue background (#2f8be0) for the table section
- Table with labels in rgba(255,255,255,0.6) and values in #fff
- h3 heading "Comfirm Details" (original typo) in white
- Shows all values from steps 1 and 2

### Navigation Buttons
- Next: green circle (#6eba2a), 50px, shadow, white icon, right-aligned
- Previous: transparent background, no circle, gray text (#666), left-aligned
- Previous invisible (opacity 0) on step 1 (disabled state)
- Hover on Next: darker green (#5fa125)

### Background & Card
- Full-page background image (use placeholder from picsum)
- White card: 851px max-width, 10px border-radius, box-shadow 0px 8px 20px 0px rgba(0,0,0,0.15)
- Centered vertically and horizontally (flexbox)
- Raleway Google Font for all text

## Design Tokens (Tailwind @theme)

```css
@theme {
  --color-brand-blue: #359bfa;
  --color-brand-green: #6eba2a;
  --color-brand-green-dark: #5fa125;
  --color-confirm-blue: #2f8be0;
  --color-step-inactive: #ccc;
  --color-step-connector: #e5e5e5;
  --color-text-heading: #333;
  --color-text-sub: #666;
  --color-text-muted: #999;
  --font-family-brand: 'Raleway', sans-serif;
  --radius-card: 10px;
  --radius-content: 5px;
  --radius-circle: 50%;
  --radius-input: 5px;
}
```
