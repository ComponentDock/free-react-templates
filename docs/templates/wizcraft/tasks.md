# WizCraft — Implementation Tasks

Source: Colorlib Wizard 5 (4-step checkout wizard form)
New name: `wizcraft`
Preview: https://preview.colorlib.com/theme/colorlib-wizard-5/ (unreachable at prep time)
Source HTML+CSS: https://colorlib.com/etc/bwiz/colorlib-wizard-5/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg

## Structure order (matching original)

1. **BackgroundContainer** — Full-viewport wrapper with background image/gradient
2. **IllustrationPanel** — Left side (~51%) with decorative image/illustration
3. **WizardPanel** — Right side (~49%) white form container
4. **StepProgress** — 4 horizontal progress bars with animated fill + step title
5. **StepBillingDetails** — Step 1: First/Last Name, Company, Country dropdown, Address, City
6. **StepAdditionalInfo** — Step 2: County, Zip, Phone, Email, Order Notes textarea, Create Account checkbox
7. **StepYourOrder** — Step 3: Product list (thumbnails, names, qty, prices) + Subtotal/Shipping/Total
8. **StepBillingMethod** — Step 4: 3 radio options with tooltip descriptions
9. **WizardNavigation** — Next/Previous buttons (peach/gray), conditional visibility per step

## Design notes

- Split layout: illustration (51%) left, white panel (49%) right — collapses to stacked on mobile
- Font: Poppins (Google Fonts, weights 400/500/600) + Muli Bold for total price
- Accent: warm peach `#f3d4b7` for step bars, buttons, focus borders
- Button hover: `#d9bda3` (next) / `#ccc` (previous)
- Body text: `#666`, headings: `#333`, placeholders: `#999`
- Input borders: `#e6e6e6`, focus border: `#f3d4b7`
- Step bars: 7px tall, 20.16% width each, 10px gap, 3.5px border-radius
- Step bar inactive: `#e6e6e6`, active: `#f3d4b7`
- Form control: 42px height, 18px horizontal padding
- Wizard panel: white bg, padding `107px 75px 65px`, min-height 834px
- Buttons: height 51px, "Next" 135px wide, "Previous" 135px wide
- Tooltip: `#f2f2f2` bg with upward triangle arrow
- Radio: 14px circle, inner dot 6px `#666666`
- Checkbox: 13×12px, `#ebebeb` bg, `#ccc` border
- Transitions: `0.5s ease` for step bars, `0.3s` for button hovers
- Icons: Material Design Iconic Font (zmdi-caret-down, zmdi-arrow-right, zmdi-arrow-left)
- Product thumbnails: 100×90px bordered containers

## Fidelity notes (from source files)

- Preview URL returns 404 — analysis based on source HTML + CSS from colorlib.com/etc/bwiz/
- Original uses jQuery Steps plugin for wizard navigation — React implementation will use state management
- Background image `form-wizard.png` is on the left side — use placeholder from picsum.photos
- Form fields use `<select>` with Material Design icon for caret-down
- Tooltip appears only on the active/selected radio option (`.checkbox-circle label.active .tooltip`)
- Mobile breakpoint (<768px): illustration stacks on top, form goes full-width
- Tablet breakpoint (768–991px): illustration hidden, form 60% centered
- No footer in the original template (wizard-only page) — add minimal Component Dock footer

## Tasks

- [ ] Copy simplest existing app as scaffold
- [ ] Rename package to `@free-react-templates/wizcraft`
- [ ] Set up `public/CNAME` and `homepage` in package.json
- [ ] Implement BackgroundContainer with full-viewport layout
- [ ] Implement IllustrationPanel (left 51%, placeholder image)
- [ ] Implement WizardPanel (right 49%, white bg, correct padding)
- [ ] Implement StepProgress (4 animated bars + dynamic step title)
- [ ] Implement StepBillingDetails (Step 1 fields)
- [ ] Implement StepAdditionalInfo (Step 2 fields + checkbox)
- [ ] Implement StepYourOrder (Step 3 product list + totals)
- [ ] Implement StepBillingMethod (Step 4 radios + tooltips)
- [ ] Implement WizardNavigation (Next/Previous buttons with state)
- [ ] Wire up wizard state machine (step transitions, progress bar animation)
- [ ] Add responsive layout (mobile stacking, tablet centered)
- [ ] Add input focus styling (peach border transition)
- [ ] Add minimal Component Dock footer
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh wizcraft`
