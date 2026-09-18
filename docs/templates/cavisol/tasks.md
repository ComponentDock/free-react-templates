# Tasks: Cavisol (Dental Clinic Template)

## Phase 1: Setup & Scaffold

- [ ] Create `apps/cavisol` workspace (package `@free-react-templates/cavisol`)
- [ ] Configure `vite.config.ts` with `injectUiSource()` and `public/CNAME` (`cavisol.free.componentdock.com`)
- [ ] Set up Tailwind theme with green `#67bc00` primary color and Poppins font
- [ ] Create `src/index.css` with theme tokens (brand color, dark navy, gradients)

## Phase 2: Components (TDD with 100% Coverage)

- [ ] Header / Navbar (`Navbar.tsx`) — contact info bar + nav links + social icons + test
- [ ] Hero Banner (`Hero.tsx`) — full-width image, dark overlay, headline, subtitle, CTA + test
- [ ] Opening Hours (`OpeningHours.tsx`) — schedule list, open indicator, overlaps hero + test
- [ ] Services (`Services.tsx`) — 4-column image card grid + test
- [ ] About Section (`About.tsx`) — dark bg, split layout, side image, sub-features + test
- [ ] Testimonials (`Testimonials.tsx`) — carousel with avatar, quote, name, title + test
- [ ] Team / Consultants (`Team.tsx`) — 4-card grid, hover overlay with gradient + test
- [ ] Features (`Features.tsx`) — 6 icon+text items in 2-column grid + test
- [ ] Appointment Form (`Appointment.tsx`) — dark bg, form fields, submit CTA + test
- [ ] Blog Section (`Blog.tsx`) — 4-card grid, image, date, title, excerpt, meta + test
- [ ] Footer (`Footer.tsx`) — 3 columns, newsletter, copyright with Component Dock link + test

## Phase 3: Integration & Verification

- [ ] Assemble all sections in `App.tsx` in correct order
- [ ] Run `scripts/verify-app.sh cavisol` (100% test coverage, typecheck, build)
- [ ] Register workspace in root `package.json` / root `npm install`
- [ ] Verify no ColorLib references in `apps/cavisol/`
