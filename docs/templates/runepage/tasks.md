# RunePage — Implementation Tasks & Design Notes

Source: ColorLib "Colorlib Wizard 4"
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html
Spec: openspec/specs/template-runepage/spec.md

## Structure Order (section-by-section)

1. **Background** — Full-bleed background image covering viewport. Use `picsum.photos/seed/runepage-bg/1920/1080` for placeholder.
2. **Split Layout** — Flexbox container: left panel (41%) for image, right panel (59%) for form.
3. **Image Panel** — Left side: decorative illustration (`picsum.photos/seed/runepage-illust/800/1080`). Hidden on mobile (≤991px). Aligns to bottom on desktop.
4. **Form Header** — Centered: golden badge pill ("#Academic Programs"), heading "Register for the course online" (Poppins SemiBold, 22px, uppercase, letter-spacing 3px).
5. **Wizard Container** — Bordered translucent box (`rgba(255,255,255,0.1)` bg, white border, 10px radius). Contains steps + actions.
6. **Progress Bar** — Positioned below wizard box (absolute, centered, 60% width, 12px height). Track: `rgba(255,255,255,0.3)`, fill: `rgba(255,255,255,0.8)`. Animated 0.5s ease transitions. Step icon via Material Design (or Lucide equivalent).
7. **Step 1: Course Info** — 5 form rows (label 34.9% + input 65.1%):
   - "Is this course for UF Online?" → select (No/Yes)
   - "Preferred System" → select (Canvas/Svg)
   - "College / Department" → select (UF/Havard/Oxford)
   - "Term" → select with disabled placeholder "Select Term" + Term 1/2/3
   - "Instructor Username" → text input
8. **Step 2: Personal Info** — 5 form rows:
   - "Date of Birth" → date input (native, format dd-mm-yyyy)
   - "Country of Birth" → select (US/UK/Vietnam)
   - "Your Email" → text input
   - "Phone Number" → text input
   - "Gender" → radio group (Male/Female/Transgender) with custom circular radio styling
9. **Step 3: Course Details** — 4 form rows + checkbox:
   - "Course ID" → text input with placeholder "Ex. abc 12345 or abc 1234L"
   - "Course Title" → text input with placeholder "Ex. Intro to physic"
   - "Section(s)" → text input with placeholder "Ex. 3679 or 33fa, 4295"
   - "Select Teacher" → select (Frances Meyer/Johan Lucas/Merry Linn)
   - Terms checkbox (checked by default) with custom circular checkbox styling
10. **Action Buttons** — Flex row, space-between. Back button (white bg, #666 text, 136px wide, left-aligned, pill shape). Next/Submit button (gold #e4bd37 bg, 180px wide → 154px on last step, right-aligned, pill shape). Next button hides on step 1 (aria-disabled). Arrow icon wobble animation on hover.

## Design Fidelity Notes

- **Colors:** Primary gold #e4bd37 (buttons, badge, hover darkens to #c9a630). All text white on dark background. Translucent whites for containers and inputs.
- **Fonts:** Poppins (Regular body, SemiBold headings), Muli Bold (buttons). Load via Google Fonts `<link>`.
- **Buttons:** Pill-shaped (border-radius: 27px). Fixed heights (54px desktop, 44px mobile). Back button narrower (136px) than Next (180px).
- **Form inputs:** Translucent white bg, white border at 40% opacity, 5px radius, 41px height. Focus adds white glow + blue border (#ceebf7).
- **Progress bar:** 12px tall pill bar below the form. Track 30% white, fill 80% white. Animated with CSS transitions. Step indicator icon (use Lucide `MapPin` or similar as Material Design substitute).
- **Radio/checkbox:** Custom circular (15px outer, 7px inner dot, 50% radius). White on translucent background.
- **Responsive:** Image panel hidden ≤991px. Form rows stack vertically ≤767px. Action buttons stack vertically aligned right on mobile.
- **Layout:** Flexbox split at 41%/59%. Image aligns to bottom. Form centered vertically.

## Component Outline

```
src/
  App.tsx              — Composes WizardPage
  components/
    WizardPage.tsx     — Split layout wrapper + background
    ImagePanel.tsx     — Left side decorative image
    FormHeader.tsx     — Badge + heading
    ProgressBar.tsx    — Animated step progress bar
    StepOne.tsx        — Course info fields
    StepTwo.tsx        — Personal info fields
    StepThree.tsx      — Course details + terms checkbox
    FormRow.tsx        — Reusable label + input row (34.9%/65.1% split)
    SelectInput.tsx    — Styled select dropdown
    TextInput.tsx      — Styled text input
    RadioGroup.tsx     — Custom circular radio buttons
    CheckboxInput.tsx  — Custom circular checkbox
    ActionBar.tsx      — Back/Next pill buttons
  index.css            — Tailwind entry + theme tokens
```

## Key Implementation Decisions

- Use React state for step tracking (0/1/2) and progress percentage.
- No external wizard library needed — simple conditional rendering per step.
- Date input: use native `<input type="date">` styled to match (no datepicker library).
- Radio/checkbox: custom styled with hidden native input + CSS pseudo-elements.
- Progress bar: CSS-driven with inline style for width percentage + transition.
- Placeholder images: `picsum.photos` with deterministic seeds per section.
