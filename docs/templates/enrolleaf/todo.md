# Enrolleaf — Implementation Tasks

## Source
- ColorLib: Signup Form V01
- Slug: signup-form-01
- Preview: https://preview.colorlib.com/theme/bootstrap/signup-form-01/
- Category: Signup Form (Registration Form Templates)

## Design Notes

### Structure (top to bottom)
1. Full-viewport split-screen container (`flex`, `h-screen`, `min-h-[800px]`)
2. Left column (form, 50%): white bg, centered vertically
   - Container with 7/12 columns
   - "Sign Up" heading
   - Form with 4 fields + checkbox + button
3. Right column (image, 50%): background-image cover
4. Mobile: stack vertically, image first (500px), form below

### Section-by-Section Fidelity Notes

#### Split Container
- Uses flexbox with two equal children
- Desktop: `flex`, each child `w-1/2`
- Mobile: `flex-col`, image child gets `h-[500px]`, form child full width
- Min height: 800px, viewport height on desktop

#### Form Area
- Vertically centered content using flexbox centering
- Constrained to 7/12 columns on desktop
- White background
- Padding: generous (Bootstrap container padding)

#### Heading
- h3 element, `font-weight: 500`, `font-size: 1.75rem`
- `margin-bottom: 1rem` (mb-4)
- Font: Roboto

#### Form Fields
- 4 fields, each wrapped in a form-group div
- Labels: bold, inline-block, `margin-bottom: 0.5rem`
- Inputs: Bootstrap-like form control
  - `display: block`, `width: 100%`
  - Border: `1px solid #ced4da` (Bootstrap default)
  - Padding: `0.375rem 0.75rem`
  - Focus: blue border (#80bdff) + blue glow
  - Placeholder color: `#6c757d`

#### Terms Checkbox
- Custom checkbox (not native appearance)
- Left-aligned, 30px padding-left for indicator
- Indicator: 20x20px square, `border-radius: 4px`
  - Unchecked: `#e6e6e6` background
  - Checked: `#007bff` background with white checkmark
- Text color: `#888`, font-size 14px
- Links: `#007bff` color

#### Register Button
- Full width
- Height: 54px
- Background: `#007bff`, text: `#fff`
- Hover: `#0069d9`
- Border-radius: `4px`

#### Background Image
- Right column: `background-image` with cover/center
- Placeholder: `https://picsum.photos/seed/enrolleaf/1200/800`

### Color Tokens
- Primary blue: `#007bff`
- Hover blue: `#0069d9`
- Text dark: `#212529`
- Placeholder gray: `#6c757d`
- Caption gray: `#888`
- Border gray: `#ced4da`
- Checkbox unchecked: `#e6e6e6`

### Font
- Primary: `Roboto` (Google Fonts)
- Weights: 400 (body), 500 (headings)

## Tasks

- [ ] Create `apps/enrolleaf/` workspace (copy simplest existing app)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `index.html` with Roboto Google Font link
- [ ] Create `src/index.css` with Tailwind 4 entry + theme tokens
- [ ] Create `src/components/SignupForm.tsx` — the form with all 4 fields
- [ ] Create `src/components/TermsCheckbox.tsx` — custom checkbox
- [ ] Create `src/components/RegisterButton.tsx` — full-width submit button
- [ ] Create `src/App.tsx` — split-screen layout composition
- [ ] Create `src/main.tsx` — entry point
- [ ] Add background image placeholder (picsum.photos)
- [ ] Add footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Run `scripts/verify-app.sh enrolleaf`
- [ ] Update `package.json` name to `@free-react-templates/enrolleaf`
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Commit and push
