# Sulci — Design Notes & Implementation Tasks

**Source**: ColorLib Accordion 05
**Preview**: https://preview.colorlib.com/theme/bac/accordion-05/
**Spec**: openspec/specs/template-sulci/spec.md

## Section order (fidelity 1:1)

1. Page heading — centered "Accordion #05"
2. Accordion container — 3 collapsible cards:
   - Manage (open by default) → list: Account, Settings, Profile
   - Location (collapsed) → descriptive paragraph
   - Hobbies (collapsed) → list: Playing Basketball, Playing Baseball, Running

## Implementation tasks

### 1. Scaffold

- [ ] Create `apps/sulci/` from simplest existing app
- [ ] Update package.json: `@free-react-templates/sulci`
- [ ] Set `public/CNAME` → `sulci.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace

### 2. Design tokens (index.css / @theme)

- [ ] Add Google Font link for Poppins in index.html
- [ ] Define brand color `--brand: #75d6d1` in @theme
- [ ] Page background: `#fafafa`
- [ ] Text: `gray` (body), `#000` (headings)

### 3. Components

- [ ] `src/components/AccordionCard.tsx` — single collapsible card
  - Props: title, icon (lucide-react), isExpanded, onClick, children
  - Sharp corners, drop shadow container
  - Teal icon box (60×60), title text, rotating chevron
- [ ] `src/components/AccordionCardItem.tsx` — list item inside expanded panel
  - Optional number prefix (01, 02, 03), text, right arrow icon
- [ ] `src/components/Accordion.tsx` — orchestrates mutual exclusion
  - State: which panel index is open (default: 0)
  - Click handler closes current, opens clicked
- [ ] `src/App.tsx` — compose: heading + Accordion with 3 cards

### 4. Styling details

- [ ] Chevron: rotate(0deg) collapsed → rotate(90deg) expanded (CSS transition)
- [ ] Card body: teal bg, white text, list items with subtle border
- [ ] Icon box: fixed 60×60, teal bg, white icon centered
- [ ] Shadow: `0px 10px 29px -16px rgba(0,0,0,0.12)` on container
- [ ] Border-radius: 0 on everything
- [ ] Section padding: `7em 0`

### 5. Tests (TDD)

- [ ] Render heading
- [ ] Three cards rendered
- [ ] First card expanded by default
- [ ] Click to expand/collapse
- [ ] Mutual exclusion (only one open)
- [ ] Icon visibility per card
- [ ] Chevron rotation states

### 6. Verification

- [ ] `scripts/verify-app.sh sulci` passes
- [ ] Visual check matches original design
- [ ] Footer: Component Dock link
- [ ] No ColorLib references in app code

## Design notes

- The original uses Ionicons (ion-ios-settings, ion-ios-pin, ion-ios-basketball)
  → Replace with lucide-react equivalents: Settings, MapPin, Dribbble
- The original uses Bootstrap 4 collapse → Replace with React state + CSS transition
- Numbered list items use a `<span>` with light opacity → reproduce with `text-white/50`
- Arrow icons: ion-ios-arrow-forward → lucide ArrowRight
- Chevron: ion chevron-down/up → lucide ChevronDown with CSS rotate
