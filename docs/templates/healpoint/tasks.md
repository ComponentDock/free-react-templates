# Healpoint — Implementation Tasks

## Setup
- [ ] Create `apps/healpoint` by copying simplest existing app (e.g. apps/medical)
- [ ] Rename package to `@free-react-templates/healpoint`
- [ ] Update `public/CNAME` to `healpoint.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://healpoint.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Components (TDD: write tests first)
- [ ] `Navbar.tsx` — site name "Healpoint", Home link, dark-mode toggle
- [ ] `Hero.tsx` — background image, H1 headline, paragraph, "Learn More" pill button
- [ ] `Features.tsx` — 3 feature cards (Emergency Services, Doctors Schedule, Online Appointment)
- [ ] `About.tsx` — two-column: text + bullet list + doctor timetable overlay card
- [ ] `Departments.tsx` — 6 department icon grid + "Learn More" button
- [ ] `Counter.tsx` — 4 stat cards on dark overlay background
- [ ] `Team.tsx` — 4 doctor cards (avatar, name, profession, social, bio)
- [ ] `BlogAppointment.tsx` — two-column: 3 blog cards + appointment form
- [ ] `Footer.tsx` — 3 columns (About, Contact, Newsletter) + copyright + social + componentdock link

## Assembly
- [ ] `App.tsx` — compose all sections in order
- [ ] `index.css` — Tailwind entry + theme tokens (brand purple #772dff, accent blue #0ba9ff)

## Verification
- [ ] All tests pass at 100% coverage
- [ ] Type checking passes
- [ ] Linting passes
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All images use picsum.photos/seed/healpoint-N/w/h
