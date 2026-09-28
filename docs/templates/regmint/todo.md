# RegMint — Implementation Notes

## Source Template
- **ColorLib Name**: Signup Form 02
- **ColorLib Slug**: signup-form-02
- **ColorLib URL**: https://colorlib.com/wp/template/signup-form-02/
- **Preview URL**: https://preview.colorlib.com/theme/signup-form-02/ (design from downloaded source ZIP)

## Section Order (top to bottom)

1. **Split-panel container** — full viewport height, flex layout
2. **Background image strip** — right side (20% width), lifestyle/kitchen photo, cover sizing
3. **Form content area** — left side (80% width), light gray background (#f6f7fc)
4. **Form content**:
   - Container with centered row
   - "Register" heading (h3)
   - Subtitle paragraph (gray text)
   - First Name + Last Name (2-column)
   - Email Address (full width)
   - Phone Number + Website (2-column)
   - Password + Re-type Password (2-column)
   - Terms checkbox (pre-checked) with Terms and Conditions + Privacy Policy links
   - "Register" button (orange, full-width)
5. **Footer** — Component Dock link (required by conventions)

## Design Notes

### Color Palette
- **Primary brand (orange)**: `#fb771a` — button, links, checkbox checked, focus ring
- **Primary hover**: `#eb6304`
- **Primary active**: `#de5e04`
- **Form background**: `#f6f7fc` (very light gray/lavender)
- **Body text**: `#212529` (dark)
- **Paragraph text**: `#b3b3b3` (light gray), weight 300
- **Input background**: `#ffffff`
- **Input shadow**: `rgba(0,0,0,0.1)` at 1px/2px offset
- **Input focus ring**: `rgba(251,119,26, 0.25)` at 0.2rem
- **Placeholder**: `#6c757d`
- **Checkbox unchecked**: `#e6e6e6`
- **Checkbox checked**: `#fb771a`
- **Terms links**: `#888` with underline

### Typography
- **Font**: Roboto (Google Fonts) — weights 300, 400
- **Heading**: 1.75rem (28px), weight 500, Roboto
- **Body**: 1rem, weight 400
- **Paragraph**: weight 300, color #b3b3b3
- **Checkbox caption**: 14px, color #888

### Layout
- Full viewport height (100vh, min 900px)
- Split: 80% form (left) / 20% image (right) on desktop
- On mobile (≤992px): image 200px height on top, form below full width
- Form content centered in a 960px max-width container
- Form fields in 2-column grid (col-md-6) except email (full width)

### Form Inputs
- Borderless design with subtle box-shadow (0 1px 2px rgba(0,0,0,0.1))
- White background, 4px border-radius, 54px height
- Focus: same shadow (no visible ring change)
- Placeholder: gray (#6c757d)

### Checkbox
- Custom styled: 20×20px, 4px radius
- Unchecked: #e6e6e6 background
- Checked: #fb771a background with white checkmark (icomoon font)
- Terms text in #888 with underlined links

### Button
- Orange fill (#fb771a), white text
- 54px height, 30px horizontal padding
- 4px border-radius (slightly rounded)
- Hover: #eb6304
- Focus: orange glow ring

## Implementation Tasks

- [ ] Create `apps/regmint/` from simplest existing form app template
- [ ] Set up `package.json` with `@free-react-templates/regmint`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `regmint.free.componentdock.com`
- [ ] Create `src/index.css` with Roboto font import + Tailwind theme tokens
- [ ] Create `src/components/RegistrationForm.tsx` — main form with all fields
- [ ] Create `src/components/FormField.tsx` — reusable input with label + shadow styling
- [ ] Create `src/components/TermsCheckbox.tsx` — custom checkbox with terms links
- [ ] Create `src/components/ImagePanel.tsx` — right side image strip
- [ ] Create `src/App.tsx` — compose split-panel layout
- [ ] Create `src/main.tsx` — entry point
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Verify 100% coverage with `npm run test:coverage`
- [ ] Run `npm run verify:app regmint`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Commit and push

## Fidelity Checklist

- [ ] Split-panel layout: 80% form / 20% image on desktop
- [ ] Light gray form background (#f6f7fc)
- [ ] "Register" heading with subtitle
- [ ] 2-column field grid (First/Last Name, Phone/Website, Password/Re-type)
- [ ] Email Address full width
- [ ] Borderless inputs with box-shadow
- [ ] Custom checkbox with terms text (pre-checked)
- [ ] Orange "Register" button (54px height, 4px radius)
- [ ] Roboto font throughout
- [ ] Responsive: image on top, form below on mobile
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
