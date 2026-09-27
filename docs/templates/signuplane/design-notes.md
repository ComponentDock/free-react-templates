# Signuplane — Design Notes & Task Outline

Source: ColorLib Regform 14
Preview: https://preview.colorlib.com/theme/colorlib-regform-14/ (404 — falling back to screenshot)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-14.jpg

## Design Notes

### Visual Design (from screenshot)
- Clean, minimal single-page registration form
- Light sky blue background (#d6eaf8) covering full viewport
- Centered white card with subtle shadow, ~550px max-width
- No header image, no decorative elements — pure form focus
- All labels uppercase, small, dark gray, with letter-spacing

### Section Order (top to bottom)
1. First Name + Last Name (2-column)
2. Birth Date + Gender toggle (2-column)
3. Phone Number (full width)
4. Password + Repeat Password (2-column)
5. Additional Info toggle (collapsible)
6. Submit button (right-aligned)

### Key Design Tokens
- Body bg: #d6eaf8 (light sky blue)
- Card bg: #ffffff, shadow: 0 4px 24px rgba(0,0,0,0.12)
- Accent: #5bc0de (steel blue) — buttons, toggle, links
- Input border: #ddd
- Label color: #333, uppercase
- Button radius: ~4px
- Font: Open Sans or similar sans-serif

### Component Architecture
- `src/App.tsx` — Page wrapper (full viewport, centered card)
- `src/components/SignupForm.tsx` — Main form component
- `src/components/GenderToggle.tsx` — Male/Female toggle buttons
- `src/components/AdditionalInfo.tsx` — Collapsible additional info section
- Shared: Button from packages/ui, cn utility

## Task Outline

### Phase 1: Setup
- [ ] Create apps/signuplane/ (copy simplest existing form app)
- [ ] Rename package to @free-react-templates/signuplane
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind v4 entry
- [ ] Add Google Fonts link in index.html (Open Sans)

### Phase 2: Components
- [ ] Build SignupForm component (form wrapper with card styling)
- [ ] Build First Name / Last Name row (2-column grid)
- [ ] Build Birth Date input (date type with MM-DD-YYYY placeholder)
- [ ] Build GenderToggle component (Male/Female toggle buttons)
- [ ] Build Phone Number input (full width)
- [ ] Build Password / Repeat Password row (2-column grid)
- [ ] Build AdditionalInfo collapsible section
- [ ] Build Submit button (right-aligned, blue)
- [ ] Wire up form validation (zod + react-hook-form or controlled)

### Phase 3: Styling
- [ ] Apply body background #d6eaf8
- [ ] Style card: white bg, shadow, padding, rounded corners
- [ ] Style inputs: light gray borders, consistent sizing
- [ ] Style labels: uppercase, dark gray, small text
- [ ] Style gender toggle: active blue fill, inactive outlined
- [ ] Style submit button: blue bg, white text, right-aligned
- [ ] Responsive: stack 2-column rows to single column on mobile

### Phase 4: Tests (TDD)
- [ ] Test form renders all fields
- [ ] Test gender toggle selection
- [ ] Test additional info expand/collapse
- [ ] Test form validation (empty fields, mismatched passwords)
- [ ] Test successful submission
- [ ] Test responsive layout
- [ ] Achieve 100% coverage

### Phase 5: Finalize
- [ ] Add footer linking componentdock.com
- [ ] Remove any ColorLib references
- [ ] Verify with scripts/verify-app.sh signuplane
- [ ] Commit and push
