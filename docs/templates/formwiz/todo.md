# FormWiz — Implementation Todo & Design Notes

## Source

- ColorLib: Colorlib Wizard 30
- Slug: colorlib-wizard-30
- Category: Bootstrap Wizard Templates
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html

## Structure order

1. Full-page background (image via picsum.photos seed)
2. Centered wizard card (850px max, white, 8px radius, shadow)
3. Header bar (brand blue #3760e5, "FORM WIZARD" title)
4. Step indicators (3 circles + connecting lines)
5. Form content (3 steps, 2 fields each)
6. Action buttons (Previous / Next, pill-shaped)

## Section-by-section fidelity notes

### Background & card container
- Use `picsum.photos/seed/formwiz-bg/1920/1080` for background
- Card: white bg, 8px radius, `0 8px 20px rgba(0,0,0,0.15)` shadow
- Center card vertically and horizontally with flexbox

### Header
- Full-width blue bar (#3760e5) at top of card
- "FORM WIZARD" in white, Montserrat, 28px, bold (700)
- Padding: 13px 50px, top corners match card radius (8px)

### Step indicators
- 3 circles (60px diameter, 50% border-radius)
- Inactive: #ccc background
- Active/current: #3760e5 background, white number text
- Completed: same as active (#3760e5)
- Connected by 2px #e5e5e5 horizontal lines (143px wide)
- Numbers: 24px, Montserrat, 600 weight, white, centered

### Form fields
- Each step shows 2 fields in a single row (53.6% each with 10px padding)
- Below 991px: stack vertically
- Labels: #333, 16px, bold (700), 10px bottom padding
- Inputs/selects: full width, 14.5px vertical + 15px horizontal padding
- Border: 1px solid #e5e5e5, 5px radius
- Font: Montserrat, 16px, #333, 600 weight
- Select uses custom chevron icon (Material Design Iconic Font)

### Step 1 fields
- First Name (text input)
- Last Name (text input)

### Step 2 fields
- Email Address (email input, pattern validated)
- Password (password input)

### Step 3 fields
- Subject (select: Finance / Marketing / IT Support)
- Comment (text input)

### Action buttons
- Pill-shaped (25px radius), 50px height, 160px width
- Background: #3760e5, hover: #2b4ab3
- White text, Montserrat, 15px, 600 weight
- Previous button hidden on step 1
- Padding: 15px 42px internal
- Right-aligned within card (margin: 20px 80px 60px)

## Fidelity priorities

1. **Exact colors** — #3760e5 brand, #ccc inactive, #e5e5e5 borders
2. **Exact typography** — Montserrat 600/700 weights throughout
3. **Exact radii** — 8px card, 5px inputs, 25px buttons, 50% circles
4. **Step indicator animation** — smooth color transitions on step change
5. **Responsive behavior** — single-column stacking on mobile
6. **Exact spacing** — 80px content side-padding, 20px field gaps

## Component plan

- `src/App.tsx` — root, background + centered card
- `src/components/WizardHeader.tsx` — blue header bar
- `src/components/StepIndicator.tsx` — 3 connected circles
- `src/components/WizardForm.tsx` — step state machine, field rendering
- `src/components/FormFields.tsx` — field definitions per step
- `src/components/ActionButton.tsx` — pill button with hover
- `src/components/SelectField.tsx` — custom select with chevron icon
- `src/index.css` — Tailwind + @theme tokens for brand colors

## Dependencies

- No external dependencies needed beyond standard stack
- Use lucide-react for chevron-down icon (replaces Material Design Iconic)
- Use picsum.photos for background image
- Use Google Fonts (Montserrat) via link in index.html
