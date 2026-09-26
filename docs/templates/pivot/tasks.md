# Pivot — Tasks

## Setup

- [x] Create `apps/pivot/` scaffold (copy driven, rename package)
- [x] Write `openspec/specs/template-pivot/spec.md`
- [x] Write `docs/templates/pivot/tasks.md`

## Components (TDD)

- [ ] Navbar — logo, nav links, hamburger toggle, mobile menu
- [ ] Hero — carousel with background images + text overlay + social links
- [ ] Services — "What I Do" heading + 3 icon cards
- [ ] Work — portfolio carousel with images + tags + descriptions
- [ ] Subscribe — newsletter section with bio + email form
- [ ] Footer — two columns (Lets Talk + Info) + Component Dock attribution
- [ ] App — compose all sections

## Verification

- [ ] `npm run test:coverage` at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `bash scripts/verify-app.sh pivot` passes

## Bookkeeping

- [ ] Mark TEMPLATES.md `[x]` + surge URL
- [ ] Set `homepage` in package.json
- [ ] Create `public/CNAME`
- [ ] Run `npm run readme:status`
- [ ] PR + merge
