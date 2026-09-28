# Regline — Implementation Tasks & Design Notes

## Template: Regline (ColorLib Regform 6)
**Category**: Job Application Form  
**Source**: https://colorlib.com/wp/template/colorlib-regform-6/  
**Preview**: https://colorlib.com/preview/colorlib-regform-6/

## Section order (top → bottom)

1. **Page background** — Dark charcoal (#212121) full-page background
2. **Heading area** — "Apply for job" in white bold text + blue decorative triangle
3. **Form card** — White centered card with subtle shadow containing:
   - Full name input
   - Email address input
   - Message textarea
   - CV upload field
   - Send Application button

## Task breakdown

### Phase 1: Setup
- [ ] Copy simplest existing app as boilerplate (e.g. `apps/formly`)
- [ ] Rename package to `@free-react-templates/regline`
- [ ] Update `public/CNAME` to `regline.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://regline.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Components
- [ ] Create `src/components/ApplicationForm.tsx` — main form component
- [ ] Create `src/components/FormHeader.tsx` — heading + decorative element
- [ ] Create `src/components/FormField.tsx` — reusable labeled input component
- [ ] Create `src/components/FileUpload.tsx` — CV upload with helper text
- [ ] Create `src/App.tsx` — compose sections

### Phase 3: Styling
- [ ] Set page background to dark charcoal (#212121)
- [ ] Style heading: white, bold, 28px, with blue triangle decoration
- [ ] Style form card: white bg, centered, max-width 700px, shadow, padding
- [ ] Style inputs: light gray border, white bg, rounded corners
- [ ] Style textarea: min-height 120px, same border treatment
- [ ] Style file input: native styling with helper text
- [ ] Style button: blue (#4A6CF7), white text, rounded, semibold

### Phase 4: Validation
- [ ] Full name: required field validation
- [ ] Email: required + format validation (zod schema)
- [ ] Message: required field validation
- [ ] CV upload: optional, max 50 MB file size validation
- [ ] Show per-field error messages

### Phase 5: Tests
- [ ] Test form renders all fields and heading
- [ ] Test required field validation (name, email, message)
- [ ] Test email format validation
- [ ] Test file upload with valid file
- [ ] Test file upload rejection for oversized files
- [ ] Test form submission with all valid fields
- [ ] Test responsive layout on mobile viewport
- [ ] Achieve 100% coverage

### Phase 6: Finalize
- [ ] Add footer with Component Dock link
- [ ] Ensure no ColorLib references in app code
- [ ] Run `npm run test:coverage` — 100%
- [ ] Run `scripts/verify-app.sh regline`
- [ ] Commit: `feat: Regline — job application form template (ColorLib Regform 6)`
- [ ] Open PR, merge, deploy

## Design fidelity notes

### Color palette
- Background: #212121 (dark charcoal)
- Card: #FFFFFF (white)
- Heading text: #FFFFFF (white)
- Label text: #333333 (dark gray)
- Input text: #212529 (near-black)
- Placeholder: #6C757D (medium gray)
- Input border: #DEE2E6 (light gray)
- Button: #4A6CF7 (blue)
- Button hover: #3B5DE7 (darker blue)

### Typography
- Font: Poppins (Google Fonts), weights 400, 600, 700
- Heading: 28px, weight 700
- Labels: 15px, weight 600
- Inputs: 14px, weight 400
- Button: 15px, weight 600

### Layout
- Full-page dark background
- Card centered horizontally, max-width ~700px
- Card padding: ~40px 48px
- Field spacing: ~24px between groups
- Button left-aligned, margin-top 16px

### Differences from original
- No ColorLib branding/attribution in app code
- Footer links to Component Dock instead of ColorLib
- Placeholder images via picsum.photos if needed
- Form submission is frontend-only (no backend)
