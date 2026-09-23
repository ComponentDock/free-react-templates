# Passgate — Tasks

## Spec

- [x] Write spec: `openspec/specs/template-passgate/spec.md`

## Implementation

- [ ] Scaffold `apps/passgate/` (copy passcraft, rename)
- [ ] Write `index.css` design tokens
- [ ] Write `index.html` with Google Fonts
- [ ] Implement `HeroSection` component
- [ ] Implement `LoginCard` component
- [ ] Implement `Footer` component
- [ ] Compose `App.tsx`

## Tests

- [ ] `App.test.tsx` — renders form, footer, title
- [ ] `HeroSection.test.tsx` — renders image, aria-label, hidden on mobile
- [ ] `LoginCard.test.tsx` — fields, checkbox, submit, accessibility
- [ ] `Footer.test.tsx` — link, target

## Verification

- [ ] `scripts/verify-app.sh passgate` passes
- [ ] `npm run spec:validate` passes

## Bookkeeping

- [ ] `TEMPLATES.md` [x] + surge URL
- [ ] `package.json` homepage set
- [ ] `public/CNAME` created
- [ ] `npm run readme:status`
