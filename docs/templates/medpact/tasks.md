# Medpact — Implementation Tasks

Recreation of ColorLib "Medicare" (https://colorlib.com/wp/template/medicare/)
as "Medpact" — hospital & clinics website template.

## Phase 1: Scaffold

- [x] Create `apps/medpact/` from medico template (simplest medical app)
- [x] Rename package to `@free-react-templates/medpact`
- [x] Set up `vite.config.ts` with `injectUiSource()`
- [x] Set up `vitest.config.ts`
- [x] Create `index.html` with Google Fonts (Poppins + Open Sans)
- [x] Create `src/index.css` with brand tokens
- [x] Create `public/CNAME` with `medpact.free.componentdock.com`
- [x] Run `npm install` at repo root

## Phase 2: Tests (TDD — write first)

- [ ] Navbar tests
- [ ] Hero tests
- [ ] FeatureStrip tests
- [ ] About tests
- [ ] Services tests
- [ ] Departments tests
- [ ] Doctors tests
- [ ] AppointmentForm tests
- [ ] Testimonials tests
- [ ] Blog tests
- [ ] Footer tests
- [ ] App integration test

## Phase 3: Implementation

- [ ] data.ts — all copy/content
- [ ] Navbar component
- [ ] Hero component
- [ ] FeatureStrip component
- [ ] About component
- [ ] Services component
- [ ] Departments component
- [ ] Doctors component
- [ ] AppointmentForm component
- [ ] Testimonials component
- [ ] Blog component
- [ ] Footer component (with Component Dock link)
- [ ] App.tsx — compose all sections

## Phase 4: Verify

- [ ] `bash scripts/verify-app.sh medpact`
- [ ] `npm run spec:validate`
- [ ] 100% coverage confirmed
