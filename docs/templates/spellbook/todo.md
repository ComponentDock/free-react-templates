# Spellbook — Implementation Notes

**Source:** ColorLib Wizard 20 (`colorlib-wizard-20`)
**Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
**New name:** `spellbook` (apps/spellbook, @free-react-templates/spellbook)

## Structure Order

1. **GradientBackground** — full-page gradient wrapper (#884d80 → #9795f0 → #2b5876 → #4e4376)
2. **WizardCard** — centered white card (330px wide, 10px border-radius, box-shadow)
3. **StepIndicator** — 3 numbered circles (44px, 50% radius) with progress line
4. **StepContent** — conditionally renders current step's form fields
5. **ActionButtons** — Previous/Next (and Finish on step 3)

## Section-by-Section Fidelity Notes

### Gradient Background
- CSS gradient on body: `linear-gradient(0deg, #884d80 0%, #9795f0 0%, #2b5876 0%, #4e4376 100%)`
- Full viewport coverage; form centered vertically with `padding: 270px 0`

### Wizard Card
- Fixed width 330px (mobile: 100% - 40px)
- White background, 10px border-radius
- Subtle box-shadow: `0px 5px 9.5px 0.5px rgba(0,0,0,0.1)`
- Internal padding: 42px left, 37px right (current fieldset)

### Step Indicator
- Horizontal row of 3 circles connected by a white progress line
- Each circle: 44px, border-radius 50%, 3px white border, box-shadow
- Active: gradient background, white text
- Inactive: #ebebeb background, #999 text
- Progress line: 8px height, 290px width, white, z-index behind circles

### Step 1: Account Setup
- Heading: "Creat your account" (note: original typo preserved in source)
- Fields: email, password, confirm password
- All inputs: transparent bg, 1px #ebebeb border, 5px radius, 40px height

### Step 2: Social Profiles
- Heading: "Social profiles"
- Fields: Twitter, Facebook, Google Plus (text inputs)

### Step 3: Personal Details
- Heading: "Personal Details"
- Fields: Your name, Phone, Address (text inputs)

### Action Buttons
- 120×40px, gradient background, 5px border-radius, white text
- Hover: dark background (#090909)
- Previous/Next on steps 1–2; Previous/Finish on step 3
- Disabled state: `display: none` on Previous when on step 1

### Input Focus Effect
- Gradient border-image: `linear-gradient(0deg, #a1c4fd, #884d80, #2b5876, #4e4376)`
- Applied via `border-image-source` with `border-image-slice: 1`
- Border-radius preserved alongside border-image (tricky CSS)

## Implementation Notes

- Use React state for current step index (0, 1, 2)
- Form data accumulated across steps; validate per-step before advancing
- Step indicator is a pure presentation component driven by current step
- The gradient focus effect on inputs can be approximated with a pseudo-element or outline + gradient border
- Google Fonts: load Poppins via `<link>` in index.html (weights 300, 400, 500, 600, 700)
- Responsive: Tailwind breakpoint at `max-w-[480px]` for container/button sizing
