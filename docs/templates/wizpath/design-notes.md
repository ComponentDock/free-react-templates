# WizPath — Design Notes & Implementation Outline

Source: ColorLib Wizard 19
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-19.jpg

## Structure Order (top → bottom)

1. Page wrapper — full-viewport gradient background (purple/blue diagonal)
2. White container card — centered, rounded corners
3. Step indicator bar — three tabs (Account | Room type | Extra details)
4. Form content area — fieldsets switch based on active step
   - Step 1: two form-rows (email+country, password+budget) + checkbox
   - Step 2: radio group with three options
   - Step 3: textarea
5. Navigation buttons — Previous (left, gray) / Next-Finish (right, blue)

## Section-by-Section Fidelity Notes

### Gradient Background
- Original CSS: `background-image: linear-gradient(0deg, #d9afd9 0%, #5a2170 0%, #a1c4fd 0%, #c2e9fb 100%)`
- This is a multi-stop gradient from purple-magenta (#d9afd9) → dark purple (#5a2170) → light blue (#a1c4fd) → pale cyan (#c2e9fb)
- Direction: 0deg (bottom to top)
- Implementation: CSS gradient in Tailwind theme or inline style

### White Container
- White background, centered with auto margins
- Content padding: 80px left, 70px right (desktop), 30px on tablet
- Content height: 410px (fixed to accommodate step content)
- No visible box-shadow in the CSS (clean white card)

### Step Indicator Bar
- Horizontal tabs, evenly spaced (justify-content: space-between)
- Each tab has the step name in uppercase, bold, Poppins font
- Active tab: text color #6dbdfe, 3px underline bar (#6dbdfe)
- Inactive tabs: text color #999999, no underline
- Border-bottom: 1px solid #ebebeb on the steps container
- Tab width: 330px each (with 75px margins)

### Step 1 — Account
- Two form-rows, each with two fields side by side (50% width each)
- Fields: Email (input type email), Country (select dropdown), Password (input type password), Daily Budget (select dropdown)
- Newsletter checkbox at bottom-left (custom styled, 18px)
- Custom select dropdowns with arrow icon (Material Design Iconic Font)

### Step 2 — Room Type
- Heading: "What type of room would you want?"
- Three radio options in a vertical flex column
- Custom circular radio buttons (18px, border-radius 50%)
- Checked state: blue border + blue filled circle (#6dbdfe)
- Default: "Business room" pre-selected

### Step 3 — Extra Details
- Label: "Room description"
- Textarea: 150px height, 22px margin-top
- Placeholder: "Eg : The room must have air conditional . . ."

### Navigation Buttons
- Positioned absolute at bottom of card (31px from bottom)
- Previous button: gray background (#ebebeb), gray text (#999999), 140×50px
- Next/Finish button: blue background (#6dbdfe), white text, 140×50px
- Hover: darker blue (#3aa6fe)
- Text: uppercase, no text-decoration
- Previous hidden on step 1 (uses "disabled" class)
- Button text changes from "Next" to "Finish" on last step

## Component Breakdown

```
WizPath (App.tsx)
├── GradientBackground (page wrapper)
│   └── ContainerCard (white card)
│       ├── StepIndicator (3 tabs)
│       │   ├── StepTab ("Account")
│       │   ├── StepTab ("Room type")
│       │   └── StepTab ("Extra details")
│       ├── StepContent
│       │   ├── AccountStep (Step 1)
│       │   │   ├── FormRow (email + country)
│       │   │   ├── FormRow (password + budget)
│       │   │   └── NewsletterCheckbox
│       │   ├── RoomTypeStep (Step 2)
│       │   │   └── RadioGroup (3 options)
│       │   └── ExtraDetailsStep (Step 3)
│       │       └── TextareaField
│       └── StepNavigation
│           ├── PreviousButton
│           └── NextFinishButton
```

## State Management

- `currentStep: number` (1, 2, or 3)
- `formData: { email, country, password, budget, newsletter, roomType, description }`
- Step validation before advancing (email required on step 1)
- Step indicator updates based on currentStep

## Tailwind Theme Tokens to Define

```css
@theme {
  --color-brand: #6dbdfe;
  --color-brand-hover: #3aa6fe;
  --color-brand-muted: #d2d2d2;
  --color-surface: #ffffff;
  --color-muted: #999999;
  --color-text: #222222;
  --color-border: #ebebeb;
  --color-input-bg: #f8f8f8;
}
```

## Fonts

- Primary: Poppins (weights 300–600) via Google Fonts `<link>`
- Icons: Material Design Iconic Font (for select dropdown arrows, checkbox)
  - Alternative: use lucide-react for all icons (per project conventions)
