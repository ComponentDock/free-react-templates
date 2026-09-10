# Profilestep — Implementation Tasks

## Overview
Three-step user profile form wizard with photographic background, centered
white card, 2-column form layout, step indicator, and category-selection grid.

Source: ColorLib Wizard 9
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html

## Task breakdown

### 1. Scaffold app
- [ ] Create `apps/profilestep/` from simplest existing app
- [ ] Rename package to `@free-react-templates/profilestep`
- [ ] Set up `public/CNAME` → `profilestep.free.componentdock.com`
- [ ] Add `homepage` to package.json

### 2. Step indicator + wrapper
- [ ] Full-screen background image (placeholder from picsum.photos)
- [ ] Centered white card (819px max-width, padding, shadow)
- [ ] Step indicator top-right: current step / 3

### 3. Step 1 — User Profile
- [ ] Heading: "USER PROFILE" (Poppins SemiBold, uppercase, #3377c0)
- [ ] 6 fields in 2-column grid: Full Name, Education Level, Email ID,
      Phone Number, Specialization, Date of Birth
- [ ] Left-aligned icons in each input (use lucide-react)
- [ ] Date picker for Date of Birth (react-datepicker or native)
- [ ] Form validation: all fields required

### 4. Step 2 — Residential Address
- [ ] Heading: "RESIDENTIAL ADDRESS"
- [ ] Country dropdown (US, UK, Vietnam)
- [ ] Street Address, Apartment, Town/City, County, Postcode/Zip fields
- [ ] 2-column layout matching step 1

### 5. Step 3 — Category Grid
- [ ] Heading: "WHAT ARE YOU DOING?"
- [ ] 3×2 grid of category cards with images
- [ ] Categories: Programming, Sports, Business, Tour Guide, Art-Design, Doctor
- [ ] Vertical text labels (writing-mode or transform)
- [ ] Active card highlight: blue (#3377c0) label background
- [ ] Click to select/toggle active state

### 6. Navigation
- [ ] Previous button (outline style: border #3377c0, transparent bg)
- [ ] Next button (filled: bg #3377c0, white text)
- [ ] Previous hidden on step 1
- [ ] Validation message: "You must fill all fields, to be able to continue"
- [ ] Step transitions with proper state management

### 7. Responsive
- [ ] Below 768px: remove background image, single-column form fields
- [ ] Grid items resize to 2 columns
- [ ] Stack navigation buttons vertically

### 8. Footer
- [ ] Add footer with Component Dock link (https://www.componentdock.com/)
- [ ] No ColorLib references

## Component structure
```
src/
  App.tsx
  components/
    WizardCard.tsx       — outer white card + background
    StepIndicator.tsx    — "N/3" indicator
    UserProfileStep.tsx  — step 1 form fields
    AddressStep.tsx      — step 2 form fields
    CategoryGrid.tsx     — step 3 category selection
    Navigation.tsx       — Previous / Next buttons
    FormField.tsx        — reusable input with icon
  index.css              — Tailwind entry + @theme tokens
```
