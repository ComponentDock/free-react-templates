# FormFlow — Task Outline & Design Notes

## Structure order (top → bottom)

1. **Background** — full-page dark image/gradient background
2. **Wrapper** — flex container, 1400px max-width, centered
   - **Image holder** (left, 41%) — illustration image, aligned to bottom
   - **Form** (right, 59%) — centered vertically, 100px padding
     - **Form header** — badge "#Academic Programs" + heading
     - **Wizard container** — white border, rounded, semi-transparent bg
       - **Progress bar** — 3-segment bar at bottom
       - **Step 1** — course selection fields
       - **Step 2** — personal info fields
       - **Step 3** — course details + T&C
       - **Actions** — back + next/finish buttons

## Component breakdown

| Component | File | Notes |
|---|---|---|
| App | src/App.tsx | Renders full-page layout |
| WizardLayout | src/components/WizardLayout.tsx | Split layout wrapper |
| FormHeader | src/components/FormHeader.tsx | Badge + heading |
| WizardContainer | src/components/WizardContainer.tsx | Border container + progress bar |
| Step1 | src/components/Step1.tsx | Course selection form |
| Step2 | src/components/Step2.tsx | Personal info form |
| Step3 | src/components/Step3.tsx | Course details + T&C |
| ProgressBar | src/components/ProgressBar.tsx | 3-segment progress indicator |
| WizardActions | src/components/WizardActions.tsx | Back + Next/Finish buttons |

## Design notes

### Background
- Dark blue/image background (form-wizard.png)
- Use a gradient or dark image placeholder
- Full viewport height

### Typography
- Body: Poppins-Regular (15px, white)
- Headings: Poppins-SemiBold (22px, uppercase, letter-spacing 3px)
- Buttons: Muli-Bold (uppercase, letter-spacing 1.3px)

### Brand color
- Primary: #e4bd37 (golden yellow) — badge, next/finish buttons
- Hover: #c9a630
- Use as Tailwind custom theme token

### Form controls
- Height: 41px
- Background: rgba(255,255,255,0.2) — glass effect
- Border: 1px solid rgba(255,255,255,0.4)
- Border-radius: 5px
- Focus: border #ceebf7, shadow rgba(255,255,255,0.7)
- Placeholder: white, uppercase

### Wizard container
- Border: 1px solid #fff
- Border-radius: 10px
- Background: rgba(255,255,255,0.1)
- Padding: 47px 57px 50px 50px

### Progress bar
- Container: rgba(255,255,255,0.3), border-radius 6px, height 12px
- Filled: rgba(255,255,255,0.8)
- Positioned at bottom of wizard container

### Buttons
- Next/Finish: height 54px, bg #e4bd37, border-radius 27px, white text
- Back: height 54px, bg #fff, color #666, width 136px
- Both: Muli-Bold font, uppercase, letter-spacing 1.3px

### Responsive
- < 991px: image hidden, form full width
- < 767px: form rows stack, buttons stack, wizard border/bg removed

### Fidelity notes
- The original uses jQuery Steps plugin — recreate with React state machine
- Date picker uses a vendor plugin — use a React date picker or native input
- Select dropdowns use custom styling — implement with Tailwind
- Progress bar is CSS-only with transitions
- The image is decorative — use a placeholder
- Form labels are 34.9% width, inputs are 65.1%
