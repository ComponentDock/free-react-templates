# WizDeck — Implementation Tasks

Source: Colorlib Wizard 6 (3-step account creation wizard form)
New name: `wizdeck`
Preview: https://preview.colorlib.com/theme/colorlib-wizard-6/ (unreachable at prep time — 404)
Source page: https://colorlib.com/wp/template/colorlib-wizard-6/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg

## Structure order (matching original)

1. **GradientBackground** — Full-viewport wrapper with vertical linear gradient (#B4BDE8 → #E4B9E8)
2. **PageHeading** — Semi-transparent white uppercase heading ("TELL US ABOUT YOURSELF") centered on gradient
3. **WizardCard** — Centered white card (~600px wide, 16px radius, soft shadow)
4. **ProfilePicture** — Circular image placeholder with periwinkle blue (#B4BDE8) border + "CHOOSE PICTURE" with camera icon
5. **StepForm** — Multi-step form container with animated field transitions
6. **FormFieldsStep1** — Step 1: First Name, Last Name, Team Name, Email, Create a Password (2-col grid + full-width)
7. **FieldIndicator** — Small circle indicator per field (pink #F0A0C8 active, gray #E0E0E0 inactive)
8. **ContinueButton** — Pill-shaped CTA ("CONTINUE →") with periwinkle blue background
9. **StepIndicators** — 3 dots below card (active: white, inactive: #CCCCCC)
10. **ComponentDockFooter** — Minimal footer linking componentdock.com

## Design notes

- Full-viewport gradient background: top periwinkle blue (#B4BDE8) → bottom lavender pink (#E4B9E8)
- White card: max-width ~600px, centered, border-radius 16px, box-shadow 0 8px 32px rgba(0,0,0,0.1)
- Font: Nunito (Google Fonts, rounded sans-serif, weights 400/600/700)
- Heading: uppercase, large (~48-56px), semi-transparent white rgba(255,255,255,0.6)
- Form inputs: white bg, 1px solid #E0E0E0 border, 8px radius, uppercase placeholder text #999
- Field indicator circles: 8px diameter, pink (#F0A0C8) when field active, gray (#E0E0E0) when inactive
- Profile circle: circular image with periwinkle blue (#B4BDE8) border, double-ring effect (white outer frame)
- "CHOOSE PICTURE" label: camera icon (lucide-react Camera), uppercase, dark gray, centered below circle
- "CONTINUE →" button: pill-shaped (border-radius 24px), periwinkle blue (#B4BDE8) bg, white uppercase text, right arrow icon
- Step indicators: 3 dots centered below card, active = white filled circle, inactive = #CCCCCC
- Fields layout: 2-column grid for First Name/Last Name and Team Name/Email, full-width for Password
- Input focus: border transitions to periwinkle blue (#B4BDE8)
- Wizard navigation: 3 steps total, state machine manages step transitions
- Mobile (<768px): card takes full width, fields stack vertically
- No footer in original — add minimal Component Dock footer

## Fidelity notes (from source files)

- Preview URL returns 404 — analysis based on screenshot + source page inline CSS
- Original is Bootstrap-based with jQuery — React implementation uses state management
- The heading says "TELL US ABOUT YOURSELF" (truncated in screenshot as "TELL US ABOUT YOURS")
- Profile picture is circular with a double-ring border effect
- Each form field has a small colored circle indicator to its left
- The active field's circle is pink (#F0A0C8), inactive fields have gray circles (#E0E0E0)
- Step dots are positioned below the card, not inside it
- The "CHOOSE PICTURE" action triggers a file upload dialog
- Button text includes a right arrow character (→)
- Background gradient is vertical (top to bottom), not diagonal
- Mobile breakpoint (<768px): form fields stack to single column, card takes full width

## Tasks

- [ ] Copy simplest existing app as scaffold
- [ ] Rename package to `@free-react-templates/wizdeck`
- [ ] Set up `public/CNAME` (wizdeck.free.componentdock.com) and `homepage` in package.json
- [ ] Implement GradientBackground (full-viewport, linear-gradient #B4BDE8 → #E4B9E8)
- [ ] Implement PageHeading (semi-transparent white uppercase heading on gradient)
- [ ] Implement WizardCard (centered white card, 600px max-width, 16px radius, shadow)
- [ ] Implement ProfilePicture (circular image, blue border, "CHOOSE PICTURE" + Camera icon)
- [ ] Implement FieldIndicator (8px circle, active: pink, inactive: gray)
- [ ] Implement FormFieldsStep1 (2-col grid + full-width password, field indicators)
- [ ] Implement StepForm state machine (3-step transitions, field value preservation)
- [ ] Implement ContinueButton (pill-shaped, periwinkle blue, "CONTINUE →")
- [ ] Implement StepIndicators (3 dots, active/inactive styling)
- [ ] Implement step 2 and step 3 content panels
- [ ] Add input focus styling (periwinkle blue border transition)
- [ ] Add responsive layout (mobile stacking, full-width card)
- [ ] Add minimal Component Dock footer
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh wizdeck`
