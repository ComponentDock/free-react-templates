# Keycard — Implementation Tasks

## Pre-implementation

- [x] Claim template in TEMPLATES.md (`[~]` mark)
- [x] Write spec (openspec/specs/template-keycard/spec.md)
- [x] Analyze screenshot and extract design tokens

## Scaffold

- [ ] Copy simplest existing app (cove) to apps/keycard
- [ ] Rename package to @free-react-templates/keycard
- [ ] Set homepage to https://keycard.free.componentdock.com
- [ ] Create public/CNAME with keycard.free.componentdock.com
- [ ] Update index.html title and meta
- [ ] Run npm install at repo root

## Test-Driven Implementation

- [ ] Write LoginPage.test.tsx (red)
- [ ] Write Footer.test.tsx (red)
- [ ] Write App.test.tsx (red)
- [ ] Implement LoginPage.tsx (green)
- [ ] Implement Footer.tsx (green)
- [ ] Implement App.tsx (green)
- [ ] Style with Tailwind (index.css tokens)
- [ ] Verify 100% coverage

## Verification

- [ ] Run scripts/verify-app.sh keycard
- [ ] Run npm run spec:validate

## Ship

- [ ] Push branch, create PR
- [ ] Merge PR immediately
- [ ] Bookkeeping: TEMPLATES.md [x] + surge URL
- [ ] Run npm run readme:status
- [ ] Commit bookkeeping, push
