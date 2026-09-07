# Signium — Design Notes

## Source

- ColorLib Wizard 17: https://colorlib.com/wp/template/colorlib-wizard-17/
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-17/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-17.jpg

## Design Analysis

- Four-step sign-up wizard form (Name → Email → Password → Confirm Password)
- Split-screen layout: left panel (white) with branding + illustration, right panel (lavender) with form
- Page has dark (#222) body background, centered container
- Brand color: #7c7cdd (purple/lavender)
- Fonts: Poppins (body/inputs), Muli (headings), Montserrat (buttons/step labels)
- Floating labels animate up on input focus
- Step indicator shows "Step X / 4" in top-right of form area
- Previous/Next/Finish buttons at bottom-right, 140×50px
- Password fields have eye icon toggle
- Original uses jQuery Steps; we use React state + conditional rendering
- Form validation via jQuery Validate in original; we use native required + state

## Layout

```
+------------------+------------------------------------------+
|  Left Panel      |  Right Panel (lavender bg)               |
|  (white bg)      |                                          |
|                  |  [Step 1 / 4]            (top-right)     |
|  "Au Creative"   |                                          |
|  tagline         |  [Input: Your Name]                      |
|  description     |  (floating label)                        |
|                  |                                          |
|  [illustration]  |                              [Previous]  |
|                  |                              [Next]      |
+------------------+------------------------------------------+
```

On mobile (< 768px): panels stack vertically (left on top, right below).

## Component Structure

```
App.tsx
├── SplitLayout.tsx
│   ├── LeftPanel.tsx        (heading, tagline, description, illustration)
│   └── RightPanel.tsx       (form wrapper)
│       ├── StepIndicator.tsx ("Step X / 4")
│       ├── StepName.tsx      (name input, floating label)
│       ├── StepEmail.tsx     (email input, floating label)
│       ├── StepPassword.tsx  (password input + toggle)
│       ├── StepConfirm.tsx   (confirm password input + toggle)
│       └── StepActions.tsx   (Previous/Next/Finish buttons)
├── Footer.tsx                (Component Dock link)
```

## Implementation Notes

- Use React useState for currentStep (1–4)
- Conditional rendering per step (not hidden panels)
- Floating label: absolute positioned label that moves up on focus/valid
- Password toggle: lucide-react Eye / EyeOff icons, toggle input type
- Google Fonts: Poppins + Montserrat via <link> in index.html
- Placeholder illustration: picsum.photos with deterministic seed
- Button styling: rounded, brand purple bg, white text; secondary: white bg, gray text
- Container max-width: 1400px (matches original)
- Left panel: fixed width ~495px on desktop, full width on mobile
- Input styling: no border except bottom 1px solid #bfbfbf, transparent bg
- Transition: 0.3s ease on inputs
