# Runemark — Implementation TODO + Design Notes

## Source
- **ColorLib:** Colorlib Wizard 21
- **Slug:** `colorlib-wizard-21`
- **Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-wizard-21/

## Structure Order

1. Full-page background image (cover, centered)
2. Centered white card (851px max-width, rounded, shadow)
3. Step progress bar (3 circular icons + connecting lines)
4. Form content area (blue background, rounded)
5. Navigation buttons (back + next/submit)

## Section-by-Section Fidelity Notes

### Full-Page Background
- Original uses `images/wizard-v1.jpg` — use `https://picsum.photos/seed/runemark-bg/1920/1080` as placeholder
- CSS: `background-size: cover; background-position: center; background-repeat: no-repeat`
- Flexbox centered vertically + horizontally

### Card Container
- White background, 851px width, 10px border-radius
- Shadow: `0px 8px 20px rgba(0,0,0,0.15)`
- Vertical margin: `162px 0` (centered via flexbox)
- Contains the form wrapper

### Step Progress Bar
- Horizontal list of 3 circular step indicators
- Each indicator: 50px diameter circle, centered icon (zmdi icons)
- Inactive: `background: #ccc`, white icon
- Active/Done: `background: #6eba2a`, white icon, box-shadow
- Active step: shadow `0px 5px 18px rgba(0,0,0,0.2)`
- Connecting lines: `#e5e5e5`, 168px wide, 6px tall, positioned between circles
- Step number text below icon (`#666`, 400 weight)
- Step text below number (`#333`, 600 weight)

### Form Content Area
- Blue background: `#359bfa`
- Border-radius: 5px
- Padding: `32px 115px 23px 75px` (desktop)
- Contains the active step's fields

### Form Fields
- Labels: white, 16px, 500 weight, block display, 11px padding-bottom
- Inputs: full-width, white text, `#2f8be0` background, 5px border-radius
- Input padding: `13px 25px`
- Placeholder: `rgba(255,255,255,0.6)`, 15px
- Select dropdowns: same styling as inputs, custom arrow icon, white text
- Form rows: flex layout, 13px horizontal padding per field
- Single-column: `.form-holder-2` (100% width)
- Two-column: `.form-holder` (50% width each)

### Step 1 — Account Information
- zmdi-account icon
- Fields: Username, Email, Password, Confirm Password
- All required, standard HTML5 validation

### Step 2 — Payment Information
- zmdi-card icon
- Fields: Card Type (select), Card Number, CVC, Expiry Month (select), Expiry Year (select)
- Card Number takes ~70% width, CVC takes ~30%
- Month and Year select side by side

### Step 3 — Confirm Details
- zmdi-receipt icon
- "Comfirm Details" heading (note: original has typo "Comfirm" — fix to "Confirm" in implementation)
- Summary table in a blue rounded box (`#2f8be0` background)
- Table rows: label (600 weight, rgba white) | value (400 weight, white)
- Responsive: labels and values stack vertically on mobile

### Navigation
- Actions bar at bottom of content area
- Back button: plain text link (gray `#666`), no background
- Next/Submit button: 50px green circle (`#6eba2a`), white text/icon
- Hover: `#5fa125`
- Shadow: `0px 3px 15px rgba(0,0,0,0.19)`
- Buttons spaced with `justify-content: space-between`
- Disabled/hidden back on step 1 (opacity 0)

### Responsive Behavior
- < 1199px: reduced card margin, smaller content padding
- < 991px: form rows go single-column
- < 575px: card full-width, smaller padding, step indicators resize, table stacks vertically

## Implementation Notes

- Use React state to track current step and form values
- Use `react-hook-form` or controlled components for validation
- Replace zmdi icons with `lucide-react` equivalents (User, CreditCard, ClipboardCheck)
- Step progress: map over steps, apply conditional classes for active/done/pending
- Summary table in step 3: read form state and render key-value pairs
- Footer: add "Made with Component Dock" link to https://www.componentdock.com/
- No ColorLib references in any app code — provenance lives only in spec + TEMPLATES.md
