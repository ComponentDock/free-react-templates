# SpellCraft — Design Notes

## Template Overview
- **New Name:** SpellCraft
- **Source:** ColorLib Wizard 21 (`colorlib-wizard-21`)
- **Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-21.jpg
- **Category:** Multi-step account & payment wizard form

## Structure Order
1. Full-page background image (cover, centered)
2. Centered white card (851px wide, border-radius 10px, shadow)
3. Horizontal progress indicator (3 step circles + connecting lines)
4. Step 1: Account Information (form fields)
5. Step 2: Payment Information (form fields)
6. Step 3: Confirm Your Details (summary table)
7. Navigation: Previous (text) + Next (circular green button)

## Section-by-Section Fidelity Notes

### Background & Card
- Full-page background: image covering the entire viewport, centered
- White card centered on page with `box-shadow: 0px 8px 20px rgba(0,0,0,0.15)`
- Card border-radius: 10px
- Card inner padding: 15px 25px

### Progress Indicator
- Horizontal layout, centered above the form content
- 3 step circles (50x50px, border-radius 50%)
- Inactive: #ccc background, white icon
- Active/Done: #6eba2a (green) background, white icon
- Active has shadow: `0px 5px 18px rgba(0,0,0,0.2)`
- Connecting lines: #e5e5e5, 6px height, positioned between circles
- Below each circle: step number (#666, font-weight 400) and step text (#333, font-weight 600)

### Content Area
- Background: #359bfa (bright blue)
- Border-radius: 5px
- Padding: 32px 115px 23px 75px (adjusts on smaller screens)

### Step 1: Account Information
- Full-width: Username, Email Address
- Side-by-side row: Password, Confirm Password (50% each)
- Labels: white, font-weight 500, font-size 16px
- Inputs: #2f8be0 background, white text, border-radius 5px, padding 13px 25px
- Placeholder: rgba(255,255,255,0.6), font-size 15px

### Step 2: Payment Information
- Full-width: Card Type dropdown
- Side-by-side row: Card Number (wider, ~66%), CVC (narrower, ~33%)
- Side-by-side row: Expiry Month dropdown, Expiry Year dropdown
- Select dropdowns have custom arrow icon image
- Same blue styling as step 1 inputs

### Step 3: Confirmation Summary
- "Confirm Details" subheading (white, font-weight 600)
- Summary table with blue background (#2f8be0), border-radius 5px
- Table padding: 24px 26px 31px
- Labels: rgba(255,255,255,0.6), font-weight 400
- Values: #fff, font-weight 400
- Row spacing: 18px bottom padding

### Navigation Buttons
- Next: circular green button (50x50px, #6eba2a), white arrow icon
- Hover: #5fa125 (darker green)
- Shadow: `0px 3px 15px rgba(0,0,0,0.19)`
- Previous: text link, #666 color, no background
- Layout: flexbox, space-between

## Design Tokens Reference
- Font: Raleway (Google Fonts — Bold, SemiBold, Thin weights)
- Primary green (active/CTA): #6eba2a
- Green hover: #5fa125
- Blue content bg: #359bfa
- Blue input bg: #2f8be0
- Card bg: #fff
- Text heading: #333
- Text secondary: #666
- White text: #fff
- Muted text: rgba(255,255,255,0.6)
- Inactive circle: #ccc
- Connector line: #e5e5e5
- Card radius: 10px
- Content radius: 5px
- Input radius: 5px
- Button: 50% radius (circular)

## Implementation Notes
- Use react-hook-form for multi-step form state management
- Use zod for validation schemas (username, email, password matching)
- Replace Material Design icons (zmdi) with lucide-react equivalents
- Background image: use placeholder (picsum.photos/seed/spellcraft-bg)
- Card Type and Expiry dropdowns can be native `<select>` elements
- Progress indicator is horizontal (not vertical like RuneWizard)
- Confirmation table is a styled `<table>` or grid layout
- Navigation: Previous (text button) + Next (circular icon button)
