# Invoke — Implementation Tasks & Design Notes

## Source mapping

- **ColorLib source:** Colorlib Wizard 4
- **Source slug:** `colorlib-wizard-4`
- **Preview URL (live):** https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html
- **Preview URL (listing):** https://colorlib.com/wp/template/colorlib-wizard-4/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-4.jpg
- **New name:** invoke
- **App folder:** `apps/invoke`
- **Package:** `@free-react-templates/invoke`
- **Homepage:** https://invoke.free.componentdock.com

## Tasks

### 1. Scaffold app from template

- [ ] Copy simplest existing app (e.g. `apps/conjure` or `apps/banish`) to `apps/invoke`
- [ ] Rename package to `@free-react-templates/invoke`
- [ ] Update `public/CNAME` to `invoke.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://invoke.free.componentdock.com`
- [ ] Run `npm install` at repo root to register the workspace in `package-lock.json`
- [ ] Verify: `grep -c "free-react-templates/invoke" package-lock.json` returns 1

### 2. Design tokens & theme

- [ ] Set up `src/index.css` with Tailwind v4 `@theme` tokens:
  - `--color-accent: #e4bd37` (golden-yellow)
  - `--color-accent-hover: #c9a630`
  - `--color-back-bg: #fff`, `--color-back-text: #666`, `--color-back-hover: #e5e5e5`
  - `--color-input-bg: rgba(255,255,255,0.2)`
  - `--color-input-border: rgba(255,255,255,0.4)`
  - `--color-focus-border: #ceebf7`
  - `--color-focus-shadow: rgba(255,255,255,0.7)`
  - `--color-progress-track: rgba(255,255,255,0.3)`
  - `--color-progress-fill: rgba(255,255,255,0.8)`
  - `--color-card-bg: rgba(255,255,255,0.1)`
  - `--color-checkbox-border: rgba(255,255,255,0.4)`
- [ ] Add Google Fonts link in `index.html` for Poppins (400, 600) and Muli (700)
- [ ] Set up `vite.config.ts` with `injectUiSource()` helper per conventions

### 3. Component structure

- [ ] `src/App.tsx` — compose all sections
- [ ] `src/components/Background.tsx` — full-viewport background image wrapper
- [ ] `src/components/WizardCard.tsx` — semi-transparent card container
- [ ] `src/components/FormHeader.tsx` — "#Academic Programs" tag + "Register for the course online" title
- [ ] `src/components/ProgressBar.tsx` — animated progress bar (33.33% → 66.67% → 100%)
- [ ] `src/components/steps/CourseInfo.tsx` — step 1: 4 selects + 1 text input
- [ ] `src/components/steps/PersonalInfo.tsx` — step 2: date input, select, 2 text inputs, 3 radios
- [ ] `src/components/steps/CourseDetails.tsx` — step 3: 3 text inputs, 1 select, 1 checkbox
- [ ] `src/components/WizardNav.tsx` — Back/Continue/Submit buttons with state machine
- [ ] `src/components/Footer.tsx` — Component Dock attribution link
- [ ] `src/components/CustomSelect.tsx` — styled select with caret-down icon (reuse if possible from packages/ui)

### 4. Step state management

- [ ] Wizard state: current step (1/2/3), step values, navigation callbacks
- [ ] enableAllSteps: true — navigation never blocked
- [ ] Fade transition between steps (0.5s ease)
- [ ] Button state machine: step 1 = Continue only (Back transparent); steps 2–3 = Back + Continue/Submit
- [ ] Progress bar width reacts to current step

### 5. Form controls

- [ ] Select dropdowns: 41px height, 5px radius, `rgba(255,255,255,0.2)` bg, `rgba(255,255,255,0.4)` border, uppercase text
- [ ] Text inputs: same styling as selects
- [ ] Focus state: 7px `rgba(255,255,255,0.7)` box-shadow, 1px `#ceebf7` border
- [ ] Gender radios: 15px circles, `rgba(255,255,255,0.4)` border, checked = 7px white inner dot
- [ ] Terms checkbox: same circle style, pre-checked
- [ ] Replace Material Design Iconic Font icons with lucide-react icons

### 6. Responsive design

- [ ] ≤1500px: wrapper height auto, form gets padding-top/padding-bottom
- [ ] ≤1199px: wrapper 100vh, image centered with translateY(40px), form padding 50px
- [ ] ≤991px: image hidden, form width auto
- [ ] ≤767px: stacked layout, no card border/bg, labels block, buttons column, progress bar static

### 7. Tests (TDD)

- [ ] Page shell renders with background image and Poppins font
- [ ] Wizard card renders with correct layout and transparency
- [ ] Form header renders tag and title
- [ ] Progress bar renders and advances correctly
- [ ] Step 1 fields render with correct labels and options
- [ ] Step 2 fields render with correct labels, date input, and radios
- [ ] Step 3 fields render with correct labels, placeholders, and pre-checked checkbox
- [ ] Navigation: Continue advances, Back returns, Submit appears on step 3
- [ ] Button state machine: correct colors/visibility per step
- [ ] Responsive: image hidden below 991px, layout stacks below 767px
- [ ] 100% lines/functions/branches/statements coverage

## Design notes

### Section order (1:1 with original)

1. Background image (full viewport)
2. Flex wrapper (1400px)
   - Left: Image column (41.07%)
   - Right: Form column (58.93%)
     - Form header (tag + title)
     - Wizard card (#wizard)
       - Step content (fade transitions)
       - Progress bar (below card)
     - Navigation buttons (below progress bar)
3. Footer (Component Dock link)

### Fidelity notes

- The original uses jQuery Steps plugin; recreate with React state management
- The original uses `datepicker.js` for step 2's date input; use native `<input type="date">` or a lightweight React datepicker
- The original's Material Design Iconic Font icons should be replaced with lucide-react
- The progress bar is a unique feature of Wizard 4 (most other wizards use dots)
- The "Academic Programs" tag is a distinctive visual element — keep the golden-yellow pill style
- The form fields have NO validation — navigation is always allowed (enableAllSteps: true)
- The original's background image (`form-wizard-bg.png`) should be replaced with a suitable placeholder or gradient
