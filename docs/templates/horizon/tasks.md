# Horizon — Task Outline

## Scaffold

- [x] Create `apps/horizon/` (copy from signal)
- [x] Rename package to `@free-react-templates/horizon`
- [x] Set `homepage` to `https://horizon.free.componentdock.com`
- [x] Create `public/CNAME`
- [x] Run `npm install` at root to register workspace

## Spec & Design

- [x] Write spec at `openspec/specs/template-horizon/spec.md`
- [x] Design tokens: gold brand (#c9a96e), Playfair Display + Inter fonts

## Components (TDD)

- [ ] CountdownTimer — 4 time units, timer role, updates every second
- [ ] EmailSignup — email input + "NOTIFY ME" button, form submit
- [ ] SocialLinks — 5 brand-colored circular icon buttons
- [ ] Footer — Component Dock link
- [ ] App — frame layout, background image, dark overlay

## Verification

- [ ] `scripts/verify-app.sh horizon` passes
- [ ] `npm run spec:validate` passes
- [ ] PR created and merged
- [ ] Bookkeeping: TEMPLATES.md `[x]`, surge URL, homepage, readme:status
