# Tasks: Molaris (Dental Clinic Template)

## Phase 1: Setup & Scaffold

- [ ] Create `apps/molaris` workspace (package `@free-react-templates/molaris`)
- [ ] Configure `vite.config.ts` with `injectUiSource()` and `public/CNAME` (`molaris.free.componentdock.com`)
- [ ] Set up Tailwind theme with Teal `#00bcd4` primary color and Roboto font

## Phase 2: Components (TDD with 100% Coverage)

- [ ] Top bar + Navbar (`Navbar.tsx`) + test
- [ ] Hero slider (`Hero.tsx`) + test
- [ ] Appointment booking form (`AppointmentForm.tsx`) + test
- [ ] Services section (`Services.tsx`) + test
- [ ] About & Stats section (`AboutStats.tsx`) + test
- [ ] Doctors / Team section (`Doctors.tsx`) + test
- [ ] CTA Banner (`CtaBanner.tsx`) + test
- [ ] Testimonials (`Testimonials.tsx`) + test
- [ ] Treatment Results gallery (`ResultsGallery.tsx`) + test
- [ ] Blog section (`BlogSection.tsx`) + test
- [ ] Pricing & Packages (`PricingSection.tsx`) + test
- [ ] Footer (`Footer.tsx` with Component Dock link) + test

## Phase 3: Integration & Verification

- [ ] Assemble in `App.tsx`
- [ ] Run `scripts/verify-app.sh molaris` (100% test coverage, typecheck, build)
- [ ] Register workspace in root `package.json` / root `npm install`
