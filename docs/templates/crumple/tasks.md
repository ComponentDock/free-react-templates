# Crumple — Design Notes & Implementation Tasks

**Source**: ColorLib Accordion 06
**Preview**: https://preview.colorlib.com/theme/bac/accordion-06/
**Spec**: openspec/specs/template-crumple/spec.md

## Section order (fidelity 1:1)

1. Page heading — centered "Accordion #06"
2. Accordion container — 3 collapsible FAQ panels:
   - "How to manage account?" (open by default) → paragraph answer
   - "How to become Pro" (collapsed) → paragraph answer
   - "How to create an account?" (collapsed) → paragraph answer

## Key differences from Accordion 05 (Sulci)

- Icon is on the RIGHT side of the header (not left)
- Green (#37c46f) icon default; Blue (#3da1e3) when active
- Card body: very light gray (rgba(0,0,0,0.02)), NOT colored
- FAQ question/answer format (not numbered list items)
- Darker box shadow

## Implementation tasks

### 1. Scaffold

- [ ] Create `apps/crumple/` from simplest existing app
- [ ] Update package.json: `@free-react-templates/crumple`
- [ ] Set `public/CNAME` → `crumple.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace

### 2. Design tokens (index.css / @theme)

- [ ] Add Google Font link for Poppins in index.html
- [ ] Define brand colors: `--brand: #37c46f` (green), `--brand-active: #3da1e3` (blue)
- [ ] Page background: `#fafafa`
- [ ] Text: `gray` (body), `#000` (headings)

### 3. Components

- [ ] `src/components/FaqAccordion.tsx` — orchestrates mutual exclusion
  - State: which panel index is open (default: 0)
  - Click handler closes current, opens clicked
- [ ] `src/components/FaqItem.tsx` — single collapsible FAQ panel
  - Props: question, isExpanded, onClick, children
  - Header: question text on LEFT, icon box on RIGHT
  - Icon box: 60×60, green default, blue when active
  - Chevron: rotates 90deg on expand
- [ ] `src/App.tsx` — compose: heading + FaqAccordion with 3 items

### 4. Styling details

- [ ] Header layout: flex row with text LEFT, icon RIGHT (gap between)
- [ ] Icon box: 60×60, border-radius 0, green (#37c46f) default
- [ ] Active icon: blue (#3da1e3) background, white icon
- [ ] Chevron: CSS rotate transition (0deg → 90deg)
- [ ] Card body: `rgba(0,0,0,0.02)` background, `p-4` padding
- [ ] Shadow: `0px 10px 24px -11px rgba(0,0,0,0.27)`
- [ ] Border-radius: 0 everywhere
- [ ] Button border-bottom: `1px solid rgba(0,0,0,0.05)`
- [ ] Header padding: `pl-4`

### 5. Tests (TDD)

- [ ] Render heading
- [ ] Three FAQ items rendered
- [ ] First item expanded by default
- [ ] Click to expand/collapse
- [ ] Mutual exclusion (only one open)
- [ ] Icon color changes on expand
- [ ] Chevron rotation states

### 6. Verification

- [ ] `scripts/verify-app.sh crumple` passes
- [ ] Visual check matches original design
- [ ] Footer: Component Dock link
- [ ] No ColorLib references in app code

## Design notes

- The original uses Ionicons font icons → Replace with lucide-react
- Chevron: ion chevron-down/up → lucide ChevronDown with CSS rotate
- No list items — just paragraph text in the expanded body
- Header uses `pl-4` (left padding) to offset the heading text from the edge
