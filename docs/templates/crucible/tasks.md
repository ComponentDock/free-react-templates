# Crucible — Tasks & Design Notes

**Source:** Colorlib Wizard 5 (4-step checkout wizard)
**New name:** Crucible
**Spec:** openspec/specs/template-crucible/spec.md
**Deploy:** crucible.free.componentdock.com

## Replication Research

### Preview
- Live preview URL: https://preview.colorlib.com/theme/colorlib-wizard-5/ — **UNREACHABLE (404)**
- Design captured from ColorLib screenshot only

### Design Tokens (from screenshot)
- Brand primary: `#F2994A` (orange) — progress bar active step
- Page background: `#F2E0D3` (warm soft beige)
- Bottom bar: `#E8D4C4` (darker beige)
- Card: `#FFFFFF` (white) with subtle shadow
- Text headings: `#212121` (dark charcoal)
- Text labels: `#616161` (medium gray)
- Input borders: `#D9D9D9` (light gray)
- Progress inactive: `#E0E0E0` (light gray)
- Font: Clean modern sans-serif (system stack)
- Card/input radius: 8–10px rounded corners
- Card shadow: subtle drop shadow for elevation

### Visual Design
Warm minimalist checkout wizard. Two-column centered layout: left = decorative 3D illustration (plant/lamp scene), right = white elevated form card. 4-segment progress bar (orange active, gray inactive). Earthy beige palette feels inviting rather than sterile. Clean rounded UI elements.

## Task Outline

### Phase 1: Scaffolding
- [ ] Copy simplest existing app as base (e.g., apps/aurora or similar small template)
- [ ] Rename package to `@free-react-templates/crucible`
- [ ] Update `public/CNAME` to `crucible.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://crucible.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Update `src/index.css` with Tailwind @theme tokens

### Phase 2: Components (in order)
- [ ] **WizardLayout** — centered container, two-column split, warm beige background
- [ ] **IllustrationPanel** — left column with placeholder 3D-style image (picsum.photos)
- [ ] **ProgressBar** — 4-segment bar with labels, active/inactive states, clickable segments
- [ ] **FormCard** — white card with shadow, rounded corners, heading area
- [ ] **BillingStep** — Step 1 form fields (First Name*, Last Name*, Company, Country*, Address*, Apt, City*)
- [ ] **ShippingStep** — Step 2 form fields (similar to billing, pre-fill option)
- [ ] **OrderReviewStep** — Step 3 product table + totals
- [ ] **PaymentStep** — Step 4 card fields (Name*, Number*, Expiry*, CVV*)
- [ ] **WizardNav** — Back/Next buttons, navigation logic

### Phase 3: State Management
- [ ] Wizard state: current step (1–4), form data per step
- [ ] Form validation (required field enforcement)
- [ ] Step navigation (next, back, progress bar click)
- [ ] Progress bar sync with current step

### Phase 4: Polish
- [ ] Responsive layout (stacked on mobile < 576px)
- [ ] Form field focus/hover states
- [ ] Button hover/active states
- [ ] Footer with Component Dock link
- [ ] Accessibility: aria-labels, keyboard navigation, focus management on step change

### Phase 5: Testing
- [ ] Component tests (one describe per component)
- [ ] Wizard navigation flow tests
- [ ] Form validation tests
- [ ] Responsive layout tests
- [ ] 100% coverage verification

## Section-by-Section Fidelity Notes

1. **Layout**: Match the two-column centered layout from screenshot. Left ~40% illustration, right ~60% form card. On mobile, stack vertically.
2. **Progress Bar**: Must have exactly 4 segments. Active = orange #F2994A, inactive = #E0E0E0. Rounded corners on segments. Labels: Billing, Shipping, Order Review, Payment.
3. **Form Card**: White background, 8-10px border-radius, subtle box-shadow. Full width on mobile.
4. **Form Inputs**: Light gray border (#D9D9D9), rounded corners, white background. Required fields marked with *.
5. **Buttons**: "Next →" in beige (#F2E0D3) with dark text. "← Back" as a text/link button. "Place Order" on final step.
6. **Illustration**: Use a picsum.photos placeholder with a deterministic seed (e.g., `https://picsum.photos/seed/crucible-decor/400/500`).
7. **Color palette**: Strictly use #F2994A (orange), #F2E0D3 (beige), #FFFFFF (white), #212121 (dark text), #616161 (label text), #D9D9D9 (border), #E0E0E0 (inactive progress).
8. **Typography**: System sans-serif stack. No custom Google Fonts needed — keep it clean and fast.
9. **No ColorLib references** anywhere in app code.
10. **Footer**: Must include "Made with Component Dock" or similar with link to componentdock.com.
