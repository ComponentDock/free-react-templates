# Mediflow — Implementation Tasks & Design Notes

## Source
- **ColorLib**: Medi 2 (https://colorlib.com/wp/template/medi-2/)
- **Preview**: https://preview.colorlib.com/theme/medi/ (base medi used; medi-2 preview 404)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/nedi-free-template.jpg

## Design Notes

### Visual Style
- Clean, professional medical/healthcare template
- Blue-dominant color scheme with white content areas
- Semi-transparent navbar over hero image
- Gradient buttons for primary CTAs
- Work Sans font family throughout

### Section Order (fidelity to original)
1. Emergency Contact Bar (top, thin bar)
2. Navbar (blue semi-transparent, logo + nav + CTA)
3. Hero (full-width image, blue overlay, white text)
4. Welcome Clinic (2-col: photo left, text right)
5. Quality Features (3-4 card grid)
6. Departments (tabbed interface)
7. Expert Doctors (card grid)
8. Book Appointment (form section)
9. Footer (multi-column)

### Key Tokens
- Primary: #175DFE (royal blue)
- Gradient: #24c0f1 → #4c9afe
- Accent: #ff5e13 (orange)
- Light BG: #f9f9ff
- Font: Work Sans (body), Roboto (headings)

## Tasks

### Phase 1: Setup
- [ ] Copy simplest existing app as base (e.g., aurora or similar)
- [ ] Rename package to `@free-react-templates/mediflow`
- [ ] Update `public/CNAME` to `mediflow.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Run `npm install` at repo root

### Phase 2: Components
- [ ] `EmergencyBar.tsx` — top contact bar
- [ ] `Navbar.tsx` — blue semi-transparent nav with logo and CTA
- [ ] `Hero.tsx` — full-width hero with blue overlay
- [ ] `WelcomeSection.tsx` — two-column about section
- [ ] `QualitySection.tsx` — feature cards grid
- [ ] `DepartmentSection.tsx` — tabbed departments
- [ ] `DoctorsSection.tsx` — doctor team cards
- [ ] `AppointmentSection.tsx` — booking form
- [ ] `Footer.tsx` — multi-column footer with Component Dock link

### Phase 3: Styling
- [ ] Apply primary blue (#175DFE) to navbar and accents
- [ ] Apply gradient buttons (#24c0f1 → #4c9afe)
- [ ] Use Work Sans font throughout
- [ ] Add blue tint overlay to hero image
- [ ] Style department tabs with active state
- [ ] Style appointment form fields

### Phase 4: Testing
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Ensure 100% coverage on all components
- [ ] Test responsive behavior
- [ ] Test tab switching in department section
- [ ] Test form validation in appointment section

### Phase 5: Verification
- [ ] Run `scripts/verify-app.sh mediflow`
- [ ] Visual comparison with screenshot
- [ ] Check no ColorLib references in app code
- [ ] Verify "Component Dock" link in footer
- [ ] Verify placeholder images load correctly
