# Sigil — Design Notes & Task Outline

## Source
- **ColorLib:** Colorlib Wizard 25 (https://colorlib.com/wp/template/colorlib-wizard-25/)
- **Demo:** https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html
- **Preview:** https://preview.colorlib.com/theme/colorlib-wizard-25/ (404 — unreachable)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-25.jpg

## Section Order (from demo HTML)

1. **Page container** — full-viewport centered layout, dark slate-purple `#383a4f` background
2. **Wizard card** — 851px, purple-gray `#525575`, 10px radius, box-shadow
3. **Step navigation header** — white background, three circular icons with labels
4. **Step 1: Personal Information** — First/Last Name, Gender radio, Address, Phone/Zip, DOB dropdowns
5. **Step 2: Bank Information** — Bank Name, Branch Name, Email, Account Name, Account Number, Expiry Date
6. **Step 3: Confirm Details** — Summary table with all entered values
7. **Action bar** — Two circular green buttons (Previous hidden on step 1, Next/Finish)
8. **Footer** — Component Dock link

## Fidelity Notes

### Layout
- Page: `width: 100%`, `display: flex`, `justify-content: center`, `align-items: center`, background `#383a4f`
- Card: `width: 851px`, `margin: 160px 0 115px`, `border-radius: 10px`, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`
- Card body: `background: #525575`, `border-radius: 10px`
- Step header: white background, `border-top-left/right-radius: 10px`, flex with `space-between`

### Typography
- Font: Nunito (Google Font), base 18px, weight 400
- Form labels: white, block, `padding-bottom: 10px`
- Form inputs: 16px, no border, `border-radius: 3px`, `padding: 11.5px 20px`
- Step 3 heading: white, 25px, weight 600
- Step 3 table headers: `#ccc`, 16px, weight 400
- Step 3 table values: white, 16px, weight 600

### Colors
- Page background: `#383a4f` (dark slate-purple)
- Card background: `#525575` (medium purple-gray)
- Brand/accent: `#25b45b` (green)
- Button hover: `#219c50` (darker green)
- Step icon inactive: `rgba(0,0,0,0.1)` bg, `#666` icon
- Step icon current: `rgba(37,180,91,0.2)` bg, `1px solid #25b45b` border, `#25b45b` icon
- Step icon done: `#25b45b` solid bg, white icon
- Step connector: `#e5e5e5` line
- Placeholder step 1: `#999`
- Placeholder address/phone: `#333`
- Placeholder bank: `#666`
- Table bg: `rgba(255,255,255,0.1)`
- Table border: `rgba(255,255,255,0.2)`

### Interactive Elements
- Step navigation: clickable step icons (enableAllSteps: true)
- Fade transitions: 500ms between steps
- Action buttons: circular 50×50px green, chevron-right icons
- Previous button: hidden (opacity 0) on step 1, visible on steps 2-3
- Button hover: darken to `#219c50`
- onStepChanging: populates confirmation table from form values

### Assets
- Fonts: Google Fonts `Nunito` (weights 400, 600)
- Icons: lucide-react (Check, MapPin, Search, CreditCard, ChevronRight, ChevronLeft)
- No images required (pure form wizard)

## Implementation Tasks

### Core structure
- [ ] Create `apps/sigil/` directory from simplest existing app
- [ ] Rename package to `@free-react-templates/sigil`
- [ ] Update `public/CNAME` to `sigil.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://sigil.free.componentdock.com`
- [ ] Set up `vite.config.ts` with `injectUiSource()`

### Components
- [ ] `src/App.tsx` — page container with centered card
- [ ] `src/components/WizardCard.tsx` — the 851px card with step header and form
- [ ] `src/components/StepHeader.tsx` — three-step navigation with circular icons
- [ ] `src/components/StepPersonalInfo.tsx` — step 1 form fields
- [ ] `src/components/StepBankInfo.tsx` — step 2 form fields
- [ ] `src/components/StepConfirm.tsx` — step 3 summary table
- [ ] `src/components/ActionBar.tsx` — circular green navigation buttons
- [ ] `src/components/Footer.tsx` — Component Dock footer link
- [ ] `src/hooks/useWizard.ts` — step state management, fade transitions, table population

### Styling
- [ ] `src/index.css` — Tailwind entry + Nunito font import + theme tokens
- [ ] Dark page background: `#383a4f`
- [ ] Card: `#525575` bg, 10px radius, shadow
- [ ] Step header: white bg, circular icons with states
- [ ] Form inputs: no border, 3px radius, white labels
- [ ] Action buttons: 50×50px circular green
- [ ] Confirmation table: translucent bg, white borders

### Testing
- [ ] Wizard renders with step header showing three steps
- [ ] Step 1 shows personal information fields
- [ ] Step 2 shows bank information fields
- [ ] Step 3 shows confirmation table
- [ ] Next button advances to next step with fade transition
- [ ] Previous button goes back (hidden on step 1)
- [ ] Step header highlights active step correctly
- [ ] Completed steps show solid green icon
- [ ] Confirmation table populates from form values
- [ ] enableAllSteps: all step icons are clickable
- [ ] 100% coverage (lines, functions, branches, statements)

### Verification
- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh sigil` passes (typecheck + lint + tests + build)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code

## Key Differences from Original
- Renamed from "Colorlib Wizard 25" to "Sigil"
- jQuery Steps replaced with React state management
- Material Design Iconic Font replaced with lucide-react
- Nunito font loaded via Google Fonts
- Confirmation table typo "Comfirm" preserved for fidelity (note in spec)
- Component Dock footer replaces any original attribution
- `enableAllSteps: true` behavior preserved (no validation gating)
